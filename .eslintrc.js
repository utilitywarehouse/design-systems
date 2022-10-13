module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    module: 'readonly',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
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
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    curly: [2, 'all'],
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: ['function-declaration', 'arrow-function'] },
    ],
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
