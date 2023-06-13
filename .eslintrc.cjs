module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // force ESLint to resolve your project configuration relative to the folder where .eslintrc.js is located.
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  plugins: ['react', '@typescript-eslint', 'prettier'],

  rules: {
    'import/extensions': ['error', 'ignorePackages', { '': 'never' }],
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  // JSON, JSONC and JSON5 parser for use with ESLint plugins.
  overrides: [
    {
      files: ['*.json', '*.json5'], // Specify the extension or pattern you want to parse as JSON.
      parser: 'jsonc-eslint-parser', // Set this parser.
    },
  ],
};
