/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'update-lab-imports';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});

const V0_NAME = 'update-v0-lab-imports';

describe(V0_NAME, () => {
  defineTest(__dirname, NAME, {}, V0_NAME, {
    parser: 'tsx',
  });
});
