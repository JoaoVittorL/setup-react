import path from 'node:path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer'; // Adicione esta linha

import type { UserConfig } from 'vite';

import { defineConfig } from 'vite';

import type { InlineConfig } from 'vitest';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, 
      filename: 'bundle-report.html',
      gzipSize: true,
      brotliSize: true, 
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: './test/setup.ts',
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig;
});