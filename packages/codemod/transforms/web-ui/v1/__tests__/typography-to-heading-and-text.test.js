/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'typography-to-heading-and-text';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});

const V0_NAME = `${NAME}-v0`;

describe(V0_NAME, () => {
  defineTest(__dirname, NAME, {}, V0_NAME, {
    parser: 'tsx',
  });
});
