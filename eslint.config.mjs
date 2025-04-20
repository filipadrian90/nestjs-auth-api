// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist'], // Ignore compiled files
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused variables
      '@typescript-eslint/explicit-module-boundary-types': 'off', // No need to explicitly type every function return
      '@typescript-eslint/no-explicit-any': 'error', // Prevent using 'any'
      '@typescript-eslint/strict-boolean-expressions': 'warn', // Ensure correct boolean expressions
      '@typescript-eslint/no-unsafe-assignment': 'error', // Prevent unsafe variable assignments
      '@typescript-eslint/no-unsafe-call': 'error', // Prevent unsafe function calls
      'prettier/prettier': 'error', // Enforce Prettier formatting
    },
  }
);
