import { defineTest } from 'jscodeshift/src/testUtils';

const NAME = 'import-paths';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
