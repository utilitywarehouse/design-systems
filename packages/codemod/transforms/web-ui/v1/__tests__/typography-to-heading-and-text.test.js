/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'typography-to-heading-and-text';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
