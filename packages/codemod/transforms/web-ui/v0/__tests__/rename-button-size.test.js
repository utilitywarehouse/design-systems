/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'rename-button-size';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});

const NO_LAB_IMPORT_NAME = `${NAME}-no-lab-import`;

describe(NO_LAB_IMPORT_NAME, () => {
  defineTest(__dirname, NAME, {}, NO_LAB_IMPORT_NAME, {
    parser: 'tsx',
  });
});

const NO_BUTTON_IMPORT_NAME = `${NAME}-no-button-import`;

describe(NO_BUTTON_IMPORT_NAME, () => {
  defineTest(__dirname, NAME, {}, NO_BUTTON_IMPORT_NAME, {
    parser: 'tsx',
  });
});

const RESPONSIVE_NAME = `${NAME}-responsive`;

describe(RESPONSIVE_NAME, () => {
  defineTest(__dirname, NAME, {}, RESPONSIVE_NAME, {
    parser: 'tsx',
  });
});
