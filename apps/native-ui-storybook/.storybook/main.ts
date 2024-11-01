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
    // icons: {
    //   title: 'Icons',
    //   url: 'https://uw-icons.vercel.app/',
    // },
    // 'web-ui': {
    //   title: 'Web UI',
    //   url: 'https://uw-web-ui.vercel.app/',
    // },
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@utilitywarehouse/react-native-icons': '@utilitywarehouse/react-icons',
    };

    return config;
  },
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
