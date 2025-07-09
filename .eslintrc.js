/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    module: 'readonly',
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:storybook/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-extra-boolean-cast': 'off',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'no-constant-binary-expression': 'error',
    'no-sequences': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/unbound-method': 'off',
    'import/no-named-as-default': 'off',
    'storybook/no-redundant-story-name': 'off',
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
};
