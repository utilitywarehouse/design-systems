/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'migrate-button';
const VARIANT_NAME = `${NAME}-variant`;

describe(VARIANT_NAME, () => {
  defineTest(__dirname, NAME, {}, VARIANT_NAME, {
    parser: 'tsx',
  });
});
