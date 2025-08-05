module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  globals: {
    React: 'readonly',
    process: 'readonly',
    __dirname: 'readonly',
    NodeJS: 'readonly',
    IntersectionObserverCallback: 'readonly',
    IntersectionObserverInit: 'readonly'
  },
  rules: {
    'react-refresh/only-export-components': 'off', // Turn off React refresh warnings
    // Basic rules
    'no-unused-vars': 'off', // Turn off unused vars warning
    'no-undef': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}