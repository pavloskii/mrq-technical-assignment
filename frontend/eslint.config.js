import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default defineConfig([
  { files: ['src/**/*.{ts,tsx}'] },
  {
    files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  {
    ...reactPlugin.configs.flat.recommended,
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  },
  tseslint.configs.recommended,
  reactHooksPlugin.configs['recommended-latest']
]);
