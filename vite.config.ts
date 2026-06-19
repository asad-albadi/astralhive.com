import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from a custom domain (astralhive.com) via GitHub Pages, so the base
// path is the site root. The CNAME in /public is copied into the build output.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
