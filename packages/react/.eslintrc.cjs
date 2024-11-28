/* eslint-env node */
module.exports = {
  extends: ['../../.eslintrc.js', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
