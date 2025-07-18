import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dinamik base tanımı
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProduction ? '/Belediye_Web/' : '/',
  publicDir: 'public',
  plugins: [react()],
  server: {
    port: 5173,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://firebasestorage.googleapis.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})