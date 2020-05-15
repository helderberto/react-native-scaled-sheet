module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'prettier/prettier': ['error']
  },
};
