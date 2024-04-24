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
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: { builder: { useSWC: true } },
  },
  docs: {
    autodocs: false,
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@utilitywarehouse/react-native-icons': '@utilitywarehouse/react-icons',
      '@utilitywarehouse/native-ui': getAbsolutePath('@utilitywarehouse/native-ui'),
    };

    return config;
  },
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
