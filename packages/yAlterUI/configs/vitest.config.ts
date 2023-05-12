import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'url'
import path from 'path'
import { resolve } from 'node:path'
export default defineConfig({
  plugins: [Vue(), VueJsx() as any],
  resolve: {
    alias: [
      { find: /^@\/(.*)/, replacement: resolve(__dirname, '../src/$1')},
      { find: '@yalert-ui/hooks', replacement: resolve(__dirname, '../../common/hooks/src') },
      { find: '@yalert-ui/utils', replacement: resolve(__dirname, '../../common/utils/src') }
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
