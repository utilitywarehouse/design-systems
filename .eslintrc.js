module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    module: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  plugins: ['react', '@typescript-eslint/eslint-plugin', 'jsx-a11y', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-extra-boolean-cast': 'off',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'no-constant-binary-expression': 'error',
    'no-sequences': 'error',
  },
  settings: {
    'import/ignore': ['react-native'],
    react: {
      version: 'detect',
    },
  },
};
