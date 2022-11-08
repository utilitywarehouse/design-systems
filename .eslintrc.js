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
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint/eslint-plugin', 'jsx-a11y', 'prettier', 'react-hooks'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'no-constant-binary-expression': 'error',
    'no-sequences': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
