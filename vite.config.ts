import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: process.env.OUT_DIR || 'dist',
    emptyOutDir: true,
    target: 'es2020',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
