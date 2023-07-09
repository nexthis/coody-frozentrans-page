// vite.config.ts
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/coody-frozentrans-page/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  plugins: [
    UnoCSS(),
  ],
})