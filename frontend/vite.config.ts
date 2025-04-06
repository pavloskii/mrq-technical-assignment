/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  test: {
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      all: true,
      thresholds: {
        functions: 80,
        branches: 50,
        statements: 50,
        perFile: true,
        'src/utils/**.ts': {
          lines: 100,
          statements: 95
        }
      }
    }
  }
});
