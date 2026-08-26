// Temporary config used only to run the dev server in Claude's sandbox.
// Identical to vite.config.js, but with the cache dir moved to /tmp
// because the sandbox cannot delete files inside node_modules/.vite.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  cacheDir: '/tmp/vite-cache',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5050',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:5050',
        changeOrigin: true,
      },
    },
  },
});
