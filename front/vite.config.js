// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      '5173-iyrm8xttgjt3e3oprp08b-82b888ba.sandbox.novita.ai',
      '5174-iyrm8xttgjt3e3oprp08b-82b888ba.sandbox.novita.ai',
      '.sandbox.novita.ai'
    ]
  }
});