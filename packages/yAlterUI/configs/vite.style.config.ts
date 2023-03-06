import { resolve as resolver } from 'path'
import { readFileSync, lstatSync, readdirSync } from 'fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export const readDirRecursive = (path: string): string[] => {
  return readdirSync(path)
    .reduce<string[]>((acc, entry) => {
      const p = `${path}/${entry}`

      // if (lstatSync(p).isDirectory()) {
      //   return [...acc, ...readDirRecursive(p)]
      // }

      return [...acc, p]
    }, [])
}

export const resolve = {
  alias: {
    '@': resolver(process.cwd(), 'src'),
    '~/': resolver(process.cwd(), 'src'),
    '%': resolver(process.cwd(), 'src'),
  },
}

const cssInputs = readDirRecursive('./styles')
  .filter((el) => ['.css', '.scss']
    .some((elem) => el.includes(elem) && !el.includes('/_')))

export default defineConfig({
  resolve,
  build: {
    outDir: 'dist/styles',
    assetsDir: './',
    rollupOptions: {
      input: [...cssInputs],
      // resolver(process.cwd(), './styles'),
      // [...cssInputs],
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },

  plugins: [
    vue(),
  ],
})
