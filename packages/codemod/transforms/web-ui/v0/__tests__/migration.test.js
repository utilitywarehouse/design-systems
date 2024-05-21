/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'migration';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
