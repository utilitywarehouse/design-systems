const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
  ],
  features: {
    emotionAlias: false,
    storyStoreV7: true,
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      optimizeDeps: {
        include: ['@utilitywarehouse/uw-web-ui-react'],
      },
      // resolve: {
      //   alias: [
      //     {
      //       find: '@utilitywarehouse/uw-web-ui-react',
      //       replacement: path.resolve(__dirname, '../../../packages/react'),
      //     },
      //   ],
      // },
    };
  },
};
