import { dirname, join } from 'path';
/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: [
    '../docs/**/*.mdx',
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-react-native-web'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@a110/storybook-expand-all'),
    getAbsolutePath('@storybook/addon-a11y'),
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-reanimated'],
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    },
  ],
  staticDirs: ['../assets'],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: { builder: { useSWC: true } },
  },
  docs: {
    autodocs: false,
  },
  refs: {
    // Add any external Storybook refs if needed
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@utilitywarehouse/react-native-icons': '@utilitywarehouse/react-icons',
    };

    // Remove the previous rule that excludes `node_modules` entirely
    // and replace it with a rule that allows @gluestack-ui transpilation.
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      // Transpile files in node_modules only if they are from @gluestack-ui
      exclude: /node_modules\/(?!(@gluestack-ui)\/)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { loose: true }], // Ensure loose: true is consistent
            '@babel/preset-react',
          ],
          plugins: [
            ['@babel/plugin-transform-private-property-in-object', { loose: true }],
            ['@babel/plugin-transform-private-methods', { loose: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
      },
    });

    // If you need TypeScript handling:
    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   exclude: /node_modules/,
    //   use: [
    //     {
    //       loader: require.resolve('ts-loader'),
    //     },
    //   ],
    // });
    // config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
