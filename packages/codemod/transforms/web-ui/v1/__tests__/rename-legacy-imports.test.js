/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'rename-legacy-imports';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
