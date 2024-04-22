import { defineTest } from 'jscodeshift/src/testUtils';

const NAME = 'top-level-imports';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
