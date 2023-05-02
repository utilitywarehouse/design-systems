import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: [
    '../../../packages/web-ui/docs/**/*.mdx',
    '../../../packages/web-ui/src/**/*.mdx',
    '../../../packages/web-ui/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    'storybook-addon-designs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  typescript: {
    reactDocgenTypescriptOptions: {},
  },
  staticDirs: ['static'],
};
export default config;
