import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: path.resolve(__dirname, 'app/src/main/assets/web'),
    emptyOutDir: true,
    target: 'es2020',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
