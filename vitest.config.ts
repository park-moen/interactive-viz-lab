import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    setupFiles: ['./src/shared/test/setup.ts'],
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
});
