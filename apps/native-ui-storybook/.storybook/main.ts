import { nativePreviewHead } from '@storybook/native/dist/previewHeader';
const path = require('path');
/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/native-addon/dist/register.js',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  previewHead: nativePreviewHead,
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@utilitywarehouse/react-native-icons': '@utilitywarehouse/react-icons',
    };

    return config;
  },
};
