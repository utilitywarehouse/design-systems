module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
  ],
  framework: '@storybook/react',
  features: {
    emotionAlias: false,
    storyStoreV7: true,
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    // also valid 'react-docgen-typescript' | false
    // reactDocgen: 'react-docgen',
  },
};
