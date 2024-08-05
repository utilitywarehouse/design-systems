/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'rename-icon-button-size';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});

const RESPONSIVE_NAME = `${NAME}-responsive`;

describe(RESPONSIVE_NAME, () => {
  defineTest(__dirname, NAME, {}, RESPONSIVE_NAME, {
    parser: 'tsx',
  });
});
