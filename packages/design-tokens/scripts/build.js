import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Register custom transforms

// Transform to convert size values from px to rem
StyleDictionary.registerTransform({
  name: 'size/rem',
  type: 'value',
  filter: token => token.attributes.category === 'size',
  transform: token => {
    const baseFontSize = 16; // Base font size in px
    return `${token.value / baseFontSize}rem`;
  },
});

// Transform to format color values for CSS (ensuring hexadecimal format)
StyleDictionary.registerTransform({
  name: 'color/css',
  type: 'value',
  filter: token => token.attributes.category === 'color',
  transform: token => {
    // You can enhance this transformer to handle different color formats if needed
    return token.value;
  },
});

// Register custom format for components
StyleDictionary.registerFormat({
  name: 'javascript/custom-es6',
  format: ({ dictionary, options }) => {
    const tokens = {};
    dictionary.allTokens.forEach(token => {
      const path = options?.slice ? token.path.slice(1) : token.path; // Omit the first path element ('light' or 'dark')
      let current = tokens;

      path.forEach((part, index) => {
        // Replace hyphens with camelCase or keep as is based on your preference
        const key = part.includes('-') ? part.replace(/-([a-z])/g, g => g[1].toUpperCase()) : part;

        if (!current[key]) {
          current[key] = index === path.length - 1 ? token.value : {};
        }
        current = current[key];
      });
    });

    return `export default ${JSON.stringify(tokens, null, 2)};`;
  },
});

// Define your custom transform group using built-in and custom transforms
const customTransformGroup = {
  transforms: ['attribute/cti', 'name/kebab', 'size/rem', 'color/css'],
};

// Register the custom transform group
StyleDictionary.registerTransformGroup({
  name: 'custom',
  transforms: customTransformGroup.transforms,
});

// Register the custom transform group
StyleDictionary.registerTransformGroup({
  name: 'native',
  transforms: ['attribute/cti', 'name/camel', 'size/rem', 'color/hex'],
});

// Function to generate index.ts in a directory
function generateIndexFile(dir, defaultVal = false) {
  const items = fs.readdirSync(dir);
  const exportStatements = items
    .map(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory() && defaultVal) {
        return `export { default as ${item} } from './${item}';`;
      }
      if (fs.statSync(fullPath).isDirectory() && !defaultVal) {
        return `export * as ${item} from './${item}';`;
      }
    })
    .filter(statement => statement !== '')
    .join('\n');

  fs.writeFileSync(path.join(dir, 'index.ts'), exportStatements);
}

// Build function for native platform
async function buildNative() {
  const dictionaries = [
    new StyleDictionary({
      source: ['./tokens/design-tokens-global--primitive-colors.json'],
      platforms: {
        native: {
          transformGroup: 'native',
          buildPath: './build/native/',
          files: [
            // Light mode colors
            {
              destination: 'colors/light/index.ts',
              format: 'javascript/custom-es6',
              options: { exportType: 'colors', slice: true },
              filter: token => token.attributes.category === 'light',
            },
            // Dark mode colors
            {
              destination: 'colors/dark/index.ts',
              format: 'javascript/custom-es6',
              options: { exportType: 'colors', slice: true },
              filter: token => token.attributes.category === 'dark',
            },
          ],
        },
      },
    }),
    new StyleDictionary({
      source: [
        './tokens/design-tokens-global--primitive-tokens.json',
        './tokens/uw-app-ui--primitive-tokens.json',
      ],
      platforms: {
        native: {
          transformGroup: 'native',
          buildPath: './build/native/',
          files: [
            // Primitive tokens
            {
              destination: 'primitive/index.ts',
              format: 'javascript/custom-es6',
              options: { exportType: 'primitive' },
            },
          ],
        },
      },
    }),
    new StyleDictionary({
      source: ['./tokens/design-tokens-global--semantic-tokens.json'],
      platforms: {
        native: {
          transformGroup: 'native',
          buildPath: './build/native/',
          files: [
            // Semantic tokens
            {
              destination: 'semantic/index.ts',
              format: 'javascript/custom-es6',
              options: { exportType: 'semantic' },
            },
          ],
        },
      },
    }),
    new StyleDictionary({
      source: [
        './tokens/design-tokens-global--component-tokens.json',
        './tokens/uw-app-ui--component-tokens.json',
      ],
      platforms: {
        native: {
          transformGroup: 'native',
          buildPath: './build/native/',
          files: [
            // Light mode components
            {
              destination: 'components/light/index.ts',
              format: 'javascript/custom-es6',
              options: { exportType: 'components', slice: true },
              filter: token => token.attributes.category === 'light',
            },
            // Dark mode components
            {
              destination: 'components/dark/index.ts',
              format: 'javascript/custom-es6',
              options: { exportType: 'components', slice: true },
              filter: token => token.attributes.category === 'dark',
            },
          ],
        },
      },
    }),
  ];

  // Build the native platform
  await Promise.all(dictionaries.map(dictionary => dictionary.buildAllPlatforms()));

  // Generate index.ts files in each subdirectory
  const buildPath = path.resolve(__dirname, '../');
  ['build', 'build/native'].forEach(subDir => {
    const fullPath = path.join(buildPath, subDir);
    generateIndexFile(fullPath, false);
  });
  ['build/native/colors', 'build/native/components'].forEach(subDir => {
    const otherPath = path.join(buildPath, subDir);
    generateIndexFile(otherPath, true);
  });
}

// Build function for web platform
async function buildWeb() {
  const sdWeb = new StyleDictionary({
    source: ['./tokens/**/*.json'],
    platforms: {
      web: {
        transformGroup: 'css',
        buildPath: './build/web/',
        files: [
          {
            destination: '_components.css',
            format: 'css/variables',
            options: { outputReferences: true },
          },
          {
            destination: '_colors.css',
            format: 'css/variables',
            options: { outputReferences: true },
          },
          {
            destination: '_primitive.css',
            format: 'css/variables',
            options: { outputReferences: true },
          },
        ],
      },
    },
  });

  sdWeb.buildAllPlatforms();
}

// Build all platforms
(async () => {
  try {
    await buildNative();
    await buildWeb();
    console.log('Tokens built successfully!');
  } catch (error) {
    console.error('Error building tokens:', error);
  }
})();
