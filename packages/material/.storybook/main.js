module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "storybook-dark-mode/register",
    "@storybook/preset-scss",
    "@storybook/addon-viewport",
  ],
  webpackFinal(config) {
    delete config.resolve.alias["emotion-theming"];
    delete config.resolve.alias["@emotion/styled"];
    delete config.resolve.alias["@emotion/core"];
    return config;
  },
};
