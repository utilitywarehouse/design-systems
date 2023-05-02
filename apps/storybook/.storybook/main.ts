import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: [
    '../../../packages/web-ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/web-ui/src/**/*.mdx',
    '../../../packages/web-ui/docs/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
