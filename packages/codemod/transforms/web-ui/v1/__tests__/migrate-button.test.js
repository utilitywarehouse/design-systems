/* eslint-disable no-undef */
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'migrate-button';
const VARIANT_NAME = `${NAME}-variant`;

describe(VARIANT_NAME, () => {
  defineTest(__dirname, NAME, {}, VARIANT_NAME, {
    parser: 'tsx',
  });
});

const SIZE_NAME = `${NAME}-size`;

describe(SIZE_NAME, () => {
  defineTest(__dirname, NAME, {}, SIZE_NAME, {
    parser: 'tsx',
  });
});

const HREF_NAME = `${NAME}-href`;

describe(HREF_NAME, () => {
  defineTest(__dirname, NAME, {}, HREF_NAME, {
    parser: 'tsx',
  });
});
