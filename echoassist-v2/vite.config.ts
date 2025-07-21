import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from 'vite-plugin-crx';
import manifest from './src/manifest.json';

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
  ],
  // This is required to allow top-level await
  build: {
    target: 'esnext'
  },
});
