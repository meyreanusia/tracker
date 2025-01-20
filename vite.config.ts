import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      // input: './src/main.ts',
      output: {
        entryFileNames: '[name].[hash].js', // Nome dos arquivos de entrada com hash
        chunkFileNames: 'chunks/[name].[hash].js', // Nome dos arquivos de chunk com hash
        assetFileNames: 'assets/[name].[hash].[ext]', // Nome dos arquivos de asset com hash
      },
    },
  },
})
