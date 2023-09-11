import { defineTest } from 'jscodeshift/src/testUtils';

const NAME = 'top-level-imports';

describe(NAME, () => {
  defineTest(__dirname, NAME, {}, undefined, {
    parser: 'tsx',
  });
});

const NO_MUI_IMPORT_NAME = `${NAME}-no-mui-import`;

describe(NO_MUI_IMPORT_NAME, () => {
  defineTest(__dirname, NAME, {}, NO_MUI_IMPORT_NAME, {
    parser: 'tsx',
  });
});

const NAMED_MUI_IMPORT_NAME = `${NAME}-named-mui-import`;

describe(NAMED_MUI_IMPORT_NAME, () => {
  defineTest(__dirname, NAME, {}, NAMED_MUI_IMPORT_NAME, {
    parser: 'tsx',
  });
});

const MUI_PREFIX_NAME = `${NAME}-mui-prefix-import`;

describe(MUI_PREFIX_NAME, () => {
  defineTest(__dirname, NAME, {}, MUI_PREFIX_NAME, {
    parser: 'tsx',
  });
});

const NO_CWUI_IMPORT_NAME = `${NAME}-no-cwui-import`;

describe(NO_CWUI_IMPORT_NAME, () => {
  defineTest(__dirname, NAME, {}, NO_CWUI_IMPORT_NAME, {
    parser: 'tsx',
  });
});

const MUI_TYPOGRAPHY_NAME = `${NAME}-mui-typography-import`;

describe(MUI_TYPOGRAPHY_NAME, () => {
  defineTest(__dirname, NAME, {}, MUI_TYPOGRAPHY_NAME, {
    parser: 'tsx',
  });
});

const NO_CHANGES_NEEDED_NAME = `${NAME}-no-changes-needed`;

describe(NO_CHANGES_NEEDED_NAME, () => {
  defineTest(__dirname, NAME, {}, NO_CHANGES_NEEDED_NAME, {
    parser: 'tsx',
  });
});
