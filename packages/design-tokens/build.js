import StyleDictionary from 'style-dictionary';
import fs from 'fs';

// Register your custom parser
StyleDictionary.registerParser({
  name: 'customJsonParser',
  pattern: /\.json$/,
  parser: ({ contents, filePath }) => {
    console.log(`Parsing file: ${filePath} with customJsonParser`);
    const data = JSON.parse(contents);
    let tokens = {};

    // Iterate over modes
    Object.keys(data).forEach(modeName => {
      const modeTokens = data[modeName];
      const processedTokens = processTokens(modeTokens, [], modeName);
      tokens = deepMerge(tokens, processedTokens);
    });

    return tokens;
  },
});

// Helper function to process tokens and build nested structure
function processTokens(obj, path, modeName) {
  const result = {};

  Object.keys(obj).forEach(key => {
    const value = obj[key];
    const newPath = path.concat([key]);

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

// Helper function to deep merge objects
function deepMerge(target, source) {
  Object.keys(source).forEach(key => {
    if (source[key] instanceof Object && key in target) {
      target[key] = deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });

  return target;
}

// Define modes
const modes = ['light', 'dark', 'default']; // Add other modes if necessary

// Register custom format to output nested JavaScript tokens
StyleDictionary.registerFormat({
  name: 'javascript/es6/nested',
  format: ({ dictionary }) => {
    const tokens = transformTokens(dictionary.tokens);
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
    buildPath: `build/${modeName}/`,
    files: [
      {
        destination: `tokens-${modeName}.js`,
        format: 'javascript/es6/nested',
        filter: token => token.attributes.mode === modeName,
      },
    ],
  };
}

// Create a new Style Dictionary instance with your configuration
const sd = new StyleDictionary({
  source: ['./tokens/**/*.json'],
  parsers: ['customJsonParser'], // Include your custom parser here
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },
  }, // We'll set up platforms next
});

// Set up platforms for each mode
modes.forEach(async modeName => {
  sd.platforms[modeName] = createPlatformConfig(modeName);
});

// Add index for each mode
async function buildIndexFiles() {
  let rootExports = '';
  await modes.forEach(async modeName => {
    const indexPath = `build/${modeName}/index.js`;
    rootExports += `export * as ${modeName} from './${modeName}';\n`;
    await fs.promises.writeFile(indexPath, `export * from './tokens-${modeName}';\n`, 'utf-8');
  });
  const indexPath = 'build/index.js';
  await fs.promises.writeFile(indexPath, rootExports, 'utf-8');
}

// Build all platforms
(async () => {
  try {
    await sd.buildAllPlatforms();
    modes;
    // Build index.js file

    await buildIndexFiles();
    console.log('Tokens built successfully!');
  } catch (error) {
    console.error('Error building tokens:', error);
  }
})();
