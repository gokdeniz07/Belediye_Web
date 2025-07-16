import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Belediye_Web/',
  publicDir: 'public',
  plugins: [react()],
});