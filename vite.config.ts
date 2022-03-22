import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
