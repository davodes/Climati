// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.climati.com',
  output: 'static',
  compressHTML: true,
  prefetch: true,
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['lucide-astro']
          }
        }
      }
    },
    ssr: {
      noExternal: ['lucide-astro']
    }
  },
});