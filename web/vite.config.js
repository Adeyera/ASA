import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// HTTPS required: WebXR AR only runs in a secure context (phone testing
// over LAN needs https). Localhost works either way.
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    port: 5173,
    host: true,
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
