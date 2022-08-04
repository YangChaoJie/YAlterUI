import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (file: any) => path.resolve(__dirname, file)
export default defineConfig(() => {
  return {
    resolve: {
      alias: [
        { find: /^@\/(.*)/, replacement: resolve('./src/$1')}
      ]
    }
  }
})