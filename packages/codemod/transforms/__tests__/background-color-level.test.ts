import { defineTest } from 'jscodeshift/src/testUtils';

const NAME = 'background-color-level-name';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
