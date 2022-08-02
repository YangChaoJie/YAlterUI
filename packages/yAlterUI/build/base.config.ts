import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (file: any) => path.resolve(__dirname, file)
export default defineConfig({
  resolve: {
    alias: [
      { find: /^@\/(.*)/, replacement: resolve('./src/$1')}
    ]
  },
  plugins: [(VueJsx() as any)]
})
