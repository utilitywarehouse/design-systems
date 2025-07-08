import remarkGfm from 'remark-gfm';

const unistylesPluginOptions = {
  autoProcessImports: ['@utilitywarehouse/native-ui'],
  autoProcessPaths: ['@utilitywarehouse/native-ui'],
  root: './src',
  debug: false,
};

/** @type { import('@storybook/react-native-web-vite').StorybookConfig } */
const config = {
  stories: ['../**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-native-web-vite',
    options: {
      pluginReactOptions: {
        babel: {
          plugins: [
            ['react-native-unistyles/plugin', unistylesPluginOptions],
            '@babel/plugin-proposal-export-namespace-from',
            'react-native-reanimated/plugin',
          ],
        },
      },
    },
  },
  features: {
    experimentalRSC: false,
  },
  viteFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@utilitywarehouse/react-native-icons': '@utilitywarehouse/react-icons',
        },
      },
    };
  },
};
export default config;
