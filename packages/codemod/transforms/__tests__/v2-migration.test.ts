import { defineTest } from 'jscodeshift/src/testUtils';

const NAME = 'v2-migration';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
