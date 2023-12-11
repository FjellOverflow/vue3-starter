import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueRouter from 'unplugin-vue-router/vite'
import components from 'unplugin-vue-components/vite'
import layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  plugins: [
    vueRouter(),
    vue(),
    components(),
    layouts(),
  ],
  test: {
    environment: 'jsdom',
  },
})
