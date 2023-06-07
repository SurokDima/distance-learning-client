module.exports = {
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'react',
    'react-hooks',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  globals: {
    fetch: true,
    window: true,
    document: true,
  },
  ignorePatterns: [
    'node_modules/',
    '.eslintrc.js',
    'dist/',
    'next.config.js',
    'tsconfig.json',
    '*.d.ts',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'eol-last': ['error', 'always'],
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'index',
          'parent',
        ],
      },
    ],
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'object-curly-spacing': ['error', 'always'],
    'consistent-return': 0,
    'max-len': [
      'error',
      { code: 120, ignoreStrings: true, ignoreRegExpLiterals: true },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'no-param-reassign': [2, { props: true }],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-duplicate-imports': ['error'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/array-type': [
      'error',
      { readonly: 'array', default: 'array' },
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off', // TODO remove that
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Symbol: false,
        },
        extendDefaults: true,
      },
    ],

    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',

    // TODO verify this
    'react/jsx-key': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
  },
  settings: {
    'import/internal-regex': '^@/',
    react: {
      version: 'detect',
    },
    'import/resolver': {},
  },
};
