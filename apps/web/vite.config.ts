import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@domain': path.resolve(__dirname, '../../packages/domain/src'),
      '@application': path.resolve(__dirname, '../../packages/application/src'),
      '@infra-web': path.resolve(__dirname, '../../packages/infra-web/src'),
      '@shared': path.resolve(__dirname, '../../packages/shared/src'),
    },
  },
  server: {
    port: 3000,
  },
});
