import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dinamik base tanımı
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProduction ? '/Belediye_Web/' : '/',
  publicDir: 'public',
  plugins: [react()]
})