import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    middlewareMode: false,
    middleware: [
      (req, res, next) => {
        if (!req.url.match(/\.[a-z0-9]+$/i) && !req.url.startsWith('/api')) {
          req.url = '/index.html'
        }
        next()
      }
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
