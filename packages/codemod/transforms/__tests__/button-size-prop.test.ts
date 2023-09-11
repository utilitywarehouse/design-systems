import { defineTest } from 'jscodeshift/src/testUtils';

const NAME = 'button-size-prop';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
