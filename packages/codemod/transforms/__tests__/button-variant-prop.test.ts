import { defineTest } from 'jscodeshift/src/testUtils';

const NAME = 'button-variant-prop';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
