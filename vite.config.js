import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Kingdom/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
