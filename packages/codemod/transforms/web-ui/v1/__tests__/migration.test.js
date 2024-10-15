/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'migration';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, NAME, {
    parser: 'tsx',
  });
});

const V0_NAME = `${NAME}-v0`;

describe(V0_NAME, () => {
  defineTest(__dirname, NAME, {}, V0_NAME, {
    parser: 'tsx',
  });
});
