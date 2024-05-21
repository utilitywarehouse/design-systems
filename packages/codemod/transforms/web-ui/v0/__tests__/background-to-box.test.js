/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'background-to-box';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});

const NO_BOX_IMPORT_NEEDED_NAME = `${NAME}-no-box-import-needed`;

describe(NO_BOX_IMPORT_NEEDED_NAME, () => {
  defineTest(__dirname, NAME, {}, NO_BOX_IMPORT_NEEDED_NAME, {
    parser: 'tsx',
  });
});
