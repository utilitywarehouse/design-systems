import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import remarkGfm from 'remark-gfm';

const require = createRequire(import.meta.url);

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-a11y"), {
    name: getAbsolutePath("@storybook/addon-docs"),
    options: {
      mdxPluginOptions: {
        mdxCompileOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
  }],

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },

  docs: {
    defaultName: 'Documentation'
  },

  typescript: {
    reactDocgenTypescriptOptions: {},
  },

  staticDirs: ['static'],

  features: {
    actions: false
  }
};
export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
