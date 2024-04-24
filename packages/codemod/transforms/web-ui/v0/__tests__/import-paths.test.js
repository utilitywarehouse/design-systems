const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const NAME = 'import-paths';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});
