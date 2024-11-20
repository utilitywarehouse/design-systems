import StyleDictionary from 'style-dictionary';
import fs from 'fs';

// Register your custom parser
StyleDictionary.registerParser({
  name: 'customJsonParser',
  pattern: /\.json$/,
  parser: ({ contents, filePath }) => {
    const data = JSON.parse(contents);
    const tokens = {};

    // Iterate over modes
    Object.keys(data).forEach(modeName => {
      const modeTokens = data[modeName];
      const processedTokens = processTokens(modeTokens, [], modeName);
      tokens[modeName] = processedTokens; // Store tokens under mode name
    });

    return tokens;
  },
});

// Example parser for web tokens - refactor to match
// this logic should be handled when the data is exported from Figma
StyleDictionary.registerParser({
  name: 'customWebJsonParser',
  pattern: /\.json$/,
  parser: ({ contents, filePath }) => {
    const data = JSON.parse(contents);
    const tokens = {};

    // Iterate over modes
    Object.keys(data).forEach(modeName => {
      const modeTokens = data[modeName];
      const processedTokens = processTokens(modeTokens, [], modeName, true);
      tokens[modeName] = processedTokens; // Store tokens under mode name
    });

    if (tokens['Mode 1']) {
      const { dark, light, white, midnight, ...rest } = tokens['Mode 1'] || {};
      tokens['Mode 1'] = {
        ...rest,
      };
    }
    if (tokens.default) {
      const { colors, ...rest } = tokens['default'] || {};
      tokens.default = {
        ...rest,
        ...colors.light,
      };
      delete tokens.default['border-widths'];
      delete tokens.default['font-weights'];
      delete tokens.default.spacing;
      delete tokens.default.fonts;
      delete tokens.default.radii;
    }

    return tokens;
  },
});

// Helper function to process tokens
function processTokens(obj, path, modeName, isWeb) {
  const result = {};

  Object.keys(obj).forEach(key => {
    const value = obj[key];
    let newPath = path.concat([key]);

    if (value && typeof value === 'object' && 'value' in value) {
      result[key] = {
        ...value,
        name: newPath.join('.'),
        path: newPath,
        attributes: {
          mode: modeName,
        },
        original: {
          ...value,
          mode: modeName,
        },
      };
    } else {
      result[key] = processTokens(value, newPath, modeName);
    }
  });

  return result;
}

// Define modes
const modes = ['light', 'dark', 'default'];

// Register custom format
StyleDictionary.registerFormat({
  name: 'javascript/es6/nested',
  format: ({ dictionary, file }) => {
    const modeName = file.options.modeName;
    const tokens = transformTokens(dictionary.tokens[modeName]);
    return [
      '/**',
      ' * Do not edit directly',
      ' * Generated on ' + new Date(),
      ' */',
      '',
      'export const tokens = ' + JSON.stringify(tokens, null, 2) + ';',
    ].join('\n');
  },
});

// Helper function to transform tokens
function transformTokens(tokens) {
  if (Array.isArray(tokens)) {
    return tokens.map(transformTokens);
  } else if (typeof tokens === 'object') {
    const transformed = {};
    Object.keys(tokens).forEach(key => {
      const value = tokens[key];
      // Convert key to camelCase
      const camelCaseKey = toCamelCase(key);
      if (value && typeof value === 'object' && 'value' in value) {
        // Include only the 'value'
        transformed[camelCaseKey] = value.value;
      } else {
        // Recursively transform nested tokens
        transformed[camelCaseKey] = transformTokens(value);
      }
    });
    return transformed;
  }
  return tokens;
}

// Helper function to convert string to camelCase
function toCamelCase(str) {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
}

// Create platform configuration
function createPlatformConfig(modeName) {
  return {
    transformGroup: 'js',
    buildPath: `build/native/${modeName}/`,
    files: [
      {
        destination: `tokens-${modeName}.js`,
        format: 'javascript/es6/nested',
        options: {
          modeName: modeName,
        },
        filter: token => {
          return token.attributes.mode === modeName;
        },
      },
    ],
  };
}

const sdWeb = new StyleDictionary({
  source: ['./tokens/design-tokens-global.json', './tokens/uw-web-ui.json'],
  parsers: ['customWebJsonParser'],
  transforms: {
    myTransform: {
      type: 'name',
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/web/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

// Create a new Style Dictionary instance
const sdNative = new StyleDictionary({
  source: ['./tokens/design-tokens-global.json', './tokens/uw-app-ui.json'],
  parsers: ['customJsonParser'],
  platforms: {},
});

// Set up platforms for each mode
modes.forEach(modeName => {
  sdNative.platforms[modeName] = createPlatformConfig(modeName);
});

async function buildIndexFiles() {
  let rootExports = '';
  await modes.forEach(async modeName => {
    const dirname = `./build/native/${modeName}`;
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }
    const indexPath = `${dirname}/index.js`;
    rootExports += `export * as ${modeName === 'default' ? 'tokens' : modeName} from './${modeName}';\n`;
    await fs.promises.writeFile(indexPath, `export * from './tokens-${modeName}';\n`, 'utf-8');
  });
  const indexPath = 'build/index.js';
  const nativeIndexPath = 'build/native/index.js';
  await fs.promises.writeFile(nativeIndexPath, rootExports, 'utf-8');
  await fs.promises.writeFile(indexPath, `export * from './native';\n`, 'utf-8');
}

// Build all platforms
(async () => {
  try {
    await sdNative.buildAllPlatforms();
    await sdWeb.buildAllPlatforms();
    // Add index for each mode
    await buildIndexFiles();
    console.log('Tokens built successfully!');
  } catch (error) {
    console.error('Error building tokens:', error);
  }
})();
