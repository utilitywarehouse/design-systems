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
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: [
      './packages/*/tsconfig.json',
      './packages/*/*.tsconfig.json',
      './apps/*/tsconfig.json',
    ],
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
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    {
      files: ['./packages/figma-variables-plugin/src/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
    {
      files: ['./packages/native-ui/src/**/*.{ts,tsx}', './apps/native-ui-storybook/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['packages/native-ui/src/**/*.figma.tsx'],
  root: true,
};
