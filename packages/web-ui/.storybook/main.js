import remarkGfm from 'remark-gfm';

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
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
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
    autodocs: 'tag',
  },
  typescript: {
    reactDocgenTypescriptOptions: {},
  },
  staticDirs: ['static'],
};
export default config;
