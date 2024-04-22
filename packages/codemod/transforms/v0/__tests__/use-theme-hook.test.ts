import { defineTest } from 'jscodeshift/src/testUtils';

const NAME = 'use-theme-hook';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
