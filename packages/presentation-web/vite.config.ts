import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@application': resolve(__dirname, '../application/src'),
      '@shared': resolve(__dirname, '../shared/src'),
      '@domain': resolve(__dirname, '../domain/src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
