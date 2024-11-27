import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Register custom transforms

// Add a custom transform to rename spacing tokens from "X-5" to "X.5"
StyleDictionary.registerTransform({
  name: 'spacing/rename',
  type: 'attribute',
  filter: token =>
    token.path[0] === 'spacing' &&
    typeof token.path[1] === 'string' &&
    token.path[1].includes('-5'),
  transform: token => {
    token.path[1] = token.path[1].replace('-5', '.5');
    token.attributes.type = token.attributes.type.replace('-5', '.5');
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

// Register custom CSS format without theme prefix
StyleDictionary.registerFormat({
  name: 'css/no-theme-variables',
  format: ({ dictionary, options }) => {
    return (
      `${options.prefix ? options.prefix : ':root'} {\n` +
      dictionary.allTokens
        .map(token => {
          const name = token.path.slice(1).join('-');
          return `  --${name}: ${token.value};`;
        })
        .join('\n') +
      '\n}'
    );
  },
});

// Register the JS transform group with the added 'spacing/rename' transform
StyleDictionary.registerTransformGroup({
  name: 'js-custom',
  transforms: ['attribute/cti', 'name/camel', 'spacing/rename', 'size/rem', 'color/hex'],
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

// Build function for js platform
async function buildStyles() {
  const dictionaries = [
    // JS and CSS colors
    new StyleDictionary({
      source: ['./tokens/design-tokens-global--primitive-colors.json'],
      platforms: {
        js: {
          transformGroup: 'js-custom',
          buildPath: './build/js/',
          files: [
            // Light mode colors
            {
              destination: 'colors/light/index.ts',
              format: 'javascript/custom-es6',
              options: { slice: true },
              filter: token => token.attributes.category === 'light',
            },
            // Dark mode colors
            {
              destination: 'colors/dark/index.ts',
              format: 'javascript/custom-es6',
              options: { slice: true },
              filter: token => token.attributes.category === 'dark',
            },
          ],
        },
        css: {
          transformGroup: 'css',
          buildPath: './build/css/',
          files: [
            // Consolidated CSS variable files for colors
            {
              destination: 'colors/light.css',
              format: 'css/no-theme-variables',
              options: { prefix: ':root' },
              filter: token => token.path[0] === 'light',
            },
            {
              destination: 'colors/dark.css',
              format: 'css/no-theme-variables',
              options: { prefix: ':root' },
              filter: token => token.path[0] === 'dark',
            },
          ],
        },
      },
    }),
    // Primitive tokens JS
    new StyleDictionary({
      source: [
        './tokens/design-tokens-global--primitive-tokens.json',
        './tokens/uw-app-ui--primitive-tokens.json',
      ],
      platforms: {
        js: {
          transformGroup: 'js-custom',
          buildPath: './build/js/',
          files: [
            {
              destination: 'primitive/index.ts',
              format: 'javascript/custom-es6',
            },
          ],
        },
      },
    }),
    // Semantic tokens JS
    new StyleDictionary({
      source: ['./tokens/design-tokens-global--semantic-tokens.json'],
      platforms: {
        js: {
          transformGroup: 'js-custom',
          buildPath: './build/js/',
          files: [
            // Semantic tokens
            {
              destination: 'semantic/index.ts',
              format: 'javascript/custom-es6',
            },
          ],
        },
      },
    }),
    // Component tokens JS
    new StyleDictionary({
      source: [
        './tokens/design-tokens-global--component-tokens.json',
        './tokens/uw-app-ui--component-tokens.json',
      ],
      platforms: {
        js: {
          transformGroup: 'js-custom',
          buildPath: './build/js/',
          files: [
            // Light mode components
            {
              destination: 'components/light/index.ts',
              format: 'javascript/custom-es6',
              options: { slice: true },
              filter: token => token.attributes.category === 'light',
            },
            // Dark mode components
            {
              destination: 'components/dark/index.ts',
              format: 'javascript/custom-es6',
              options: { slice: true },
              filter: token => token.attributes.category === 'dark',
            },
          ],
        },
      },
    }),
    // Component tokens CSS
    new StyleDictionary({
      source: [
        './tokens/design-tokens-global--component-tokens.json',
        './tokens/uw-web-ui--component-tokens.json',
      ],
      platforms: {
        css: {
          transformGroup: 'css',
          buildPath: './build/css/',
          files: [...getComponentFiles()],
        },
      },
    }),
    // Primitive tokens CSS
    new StyleDictionary({
      source: [
        './tokens/design-tokens-global--primitive-tokens.json',
        './tokens/uw-web-ui--primitive-tokens.json',
      ],
      platforms: {
        css: {
          transformGroup: 'css',
          buildPath: './build/css/',
          files: [
            {
              destination: 'primitive.css',
              format: 'css/variables',
              options: { outputReferences: true },
            },
          ],
        },
      },
    }),
    // Semantic tokens CSS
    new StyleDictionary({
      source: [
        './tokens/design-tokens-global--semantic-tokens.json',
        './tokens/uw-web-ui--semantic-tokens.json',
      ],
      platforms: {
        css: {
          transformGroup: 'css',
          buildPath: './build/css/',
          files: [
            {
              destination: 'semantic.css',
              format: 'css/variables',
              options: { outputReferences: true },
            },
          ],
        },
      },
    }),
  ];

  // Build the all platform
  try {
    await Promise.allSettled(dictionaries.map(dictionary => dictionary.buildAllPlatforms()));
  } catch (error) {
    console.error('Error building tokens:', error);
  }

  try {
    // Generate index.ts files in each subdirectory
    const buildPath = path.resolve(__dirname, '../');
    ['/build/js'].forEach(subDir => {
      const fullPath = path.join(buildPath, subDir);
      generateIndexFile(fullPath, false);
    });
    ['/build/js/colors', '/build/js/components'].forEach(subDir => {
      const otherPath = path.join(buildPath, subDir);
      generateIndexFile(otherPath, true);
    });
  } catch (error) {
    console.error('Error generating index files:', error);
  }
}

// Add helper function to retrieve component keys from the tokens file
function getComponentNames(tokenPath, key) {
  const tokensPath = path.resolve(__dirname, tokenPath);
  const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
  return Object.keys(key ? tokens[key] : tokens);
}

// Modify getComponentFiles to exclude color-related tokens
function getComponentFiles() {
  const themedComponents = getComponentNames(
    '../tokens/design-tokens-global--component-tokens.json',
    'light'
  );
  const components = getComponentNames('../tokens/uw-web-ui--component-tokens.json');
  const themes = ['light', 'dark'];

  return themes.flatMap(theme =>
    themedComponents
      .map(component => ({
        destination: `components/${theme}/${component}.css`,
        format: 'css/no-theme-variables', // Use the new format
        options: { outputReferences: true },
        filter: token =>
          token.path[0] === theme &&
          token.path.includes(component) &&
          token.attributes.category !== 'color', // Exclude color tokens
      }))
      .concat(
        components.map(component => ({
          destination: `components/${component}.css`,
          format: 'css/no-theme-variables', // Use the new format
          options: { outputReferences: true },
          filter: token => token.path.includes(component) && token.attributes.category !== 'color', // Exclude color tokens
        }))
      )
  );
}

// Build all platforms
(async () => {
  try {
    await buildStyles();
    console.log('Tokens built successfully!');
  } catch (error) {
    console.error('Error building tokens:', error);
  }
})();
