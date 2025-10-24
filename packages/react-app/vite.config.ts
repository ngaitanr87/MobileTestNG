import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  resolve: {
    alias: {
      '@di': path.resolve(__dirname, '../di/src'),
      '@web_data': path.resolve(__dirname, '../data/web_data/src'),
      '@marvel-heroes/domain': path.resolve(__dirname, '../domain/src')
    }
  }
});


