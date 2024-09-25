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
const CUSTOMER_UI_MATERIAL_NAME = `${HREF_NAME}-customer-ui-material`;

describe(HREF_NAME, () => {
  defineTest(__dirname, NAME, {}, HREF_NAME, {
    parser: 'tsx',
  });
});

describe(CUSTOMER_UI_MATERIAL_NAME, () => {
  defineTest(__dirname, NAME, {}, CUSTOMER_UI_MATERIAL_NAME, {
    parser: 'tsx',
  });
});

const V0_NAME = `${NAME}-v0`;

describe(V0_NAME, () => {
  defineTest(__dirname, NAME, {}, V0_NAME, {
    parser: 'tsx',
  });
});
