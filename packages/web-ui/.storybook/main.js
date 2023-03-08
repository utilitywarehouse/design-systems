/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
    defaultName: 'Documentation',
    autodocs: 'tag',
  },
  typescript: {
    reactDocgenTypescriptOptions: {},
  },
  staticDirs: ['static'],
  // typescript: {
  //   reactDocgenTypescriptOptions: {
  //     propFilter: prop => {
  //       if (prop?.parent?.name.toLowerCase().includes('radio')) {
  //         console.log(prop);
  //       }
  //     },
  //   },
  // },
};
export default config;
