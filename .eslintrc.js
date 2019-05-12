module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 7,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  extends: 'airbnb',
  plugins: [
    'react', 
    'import',
  ],
  rules: {
    'semi': ['error', 'never'],
    'global-require': 'off',
    'jsx-quotes': ["error", "prefer-single"],
    'prefer-const': 'error',
    'import/no-unresolved': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/forbid-prop-types': 'off',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
}