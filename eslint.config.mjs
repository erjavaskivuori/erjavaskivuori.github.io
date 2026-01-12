import js from '@eslint/js'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      import: importPlugin,
      react,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        document: 'readonly',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/prop-types': 0,
      'linebreak-style': 1,
      'quotes': ['error', 'double'],
      'semi': ['error', 'never'],
      'no-unused-vars': 'off',
      'react/jsx-uses-vars': 'error',
    },
  },
]