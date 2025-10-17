module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Clean Architecture layer isolation rules
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          // Domain layer cannot import from any other layer
          {
            group: ['@application/*', '@infra-*/*', '@presentation-*/*', '@di/*'],
            message: 'Domain layer cannot import from other layers',
          },
          // Application layer can only import from Domain and Shared
          {
            group: ['@infra-*/*', '@presentation-*/*', '@di/*'],
            message: 'Application layer can only import from Domain and Shared layers',
          },
          // Infrastructure layers can only import from Domain and Shared
          {
            group: ['@application/*', '@presentation-*/*', '@di/*'],
            message: 'Infrastructure layers can only import from Domain and Shared layers',
          },
          // Presentation layers can only import from Application and Shared
          {
            group: ['@domain/*', '@infra-*/*', '@di/*'],
            message: 'Presentation layers can only import from Application and Shared layers',
          },
        ],
      },
    ],
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    // General rules
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
  },
  overrides: [
    {
      // Domain layer specific rules
      files: ['packages/domain/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['react', 'react-native', 'redux', '@reduxjs/toolkit', 'axios', 'fetch'],
                message: 'Domain layer cannot import framework dependencies',
              },
            ],
          },
        ],
      },
    },
    {
      // Application layer specific rules
      files: ['packages/application/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['react-native', '@infra-*/*', '@presentation-*/*'],
                message: 'Application layer cannot import from Infrastructure or Presentation layers',
              },
            ],
          },
        ],
      },
    },
    {
      // Infrastructure layer specific rules
      files: ['packages/infra-*/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@presentation-*/*', 'react', 'redux'],
                message: 'Infrastructure layers cannot import from Presentation layer or React/Redux',
              },
            ],
          },
        ],
      },
    },
    {
      // Presentation layer specific rules
      files: ['packages/presentation-*/**/*.ts', 'packages/presentation-*/**/*.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@domain/*', '@infra-*/*'],
                message: 'Presentation layers cannot import from Domain or Infrastructure layers',
              },
            ],
          },
        ],
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    '*.js',
    '*.d.ts',
  ],
};
