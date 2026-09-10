import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// Localhost uses HTTP by default. Enable HTTPS for phone WebXR testing
// over LAN with VITE_HTTPS=1 npm run dev.
export default defineConfig({
  plugins: [react(), ...(process.env.VITE_HTTPS === '1' ? [basicSsl()] : [])],
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
