import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Components  from 'unplugin-vue-components/vite';
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (file: any) => path.resolve(__dirname, file)
export default defineConfig({
  resolve: {
    alias: [
      { find: /^@\/(.*)/, replacement: resolve('./src/$1')},
      { find: /^yalert-ui$/, replacement: resolve('./src/index.ts') },
      { find: /^yalert-ui\/(.*)/, replacement: resolve('./$1') },
      { find: '@yalert-ui/hooks', replacement: resolve('../common/hook/src') }
    ]
  },
  plugins: [
    (VueJsx() as any), 
    vue(),
    dts(),
    Components({
      resolvers: [
        // example of importing Vant
        (componentName) => {
          // where `componentName` is always CapitalCase
          console.log('componentName----', componentName);
        },
      ],
    })
  ]
})
