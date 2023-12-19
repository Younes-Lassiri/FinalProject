import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/royal-chic/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'bootstrap/dist/css/bootstrap.min.css'],
    },
  },
});
