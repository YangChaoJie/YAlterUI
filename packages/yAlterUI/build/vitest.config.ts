import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'url'
import path from 'path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (file: any) => path.resolve(__dirname, file)
export default defineConfig({
  plugins: [Vue(), VueJsx() as any],
  resolve: {
    alias: [
      { find: /^@\/(.*)/, replacement: resolve('./src/$1')}
    ]
  },
  test: {
    // ...
    // globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/],
    }
  }
})
