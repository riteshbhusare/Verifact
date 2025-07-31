import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      writeBundle() {
        copyFileSync('_redirects', 'dist/_redirects');
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
