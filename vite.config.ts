import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server:{
    host:"0.0.0.0",
    proxy: {
      '/gw': {
        target: 'https://cs.yjt361.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gw/, '')
      }
    }
  }
})
