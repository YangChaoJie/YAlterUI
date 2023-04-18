import path from 'node:path'
import { defineConfig, PluginOption } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { YalertUIResolver } from '@yalert-ui/utils'
export default defineConfig(() => {
  const plugins: PluginOption[] = [
    Unocss(),
    vue(),
    VueJsx(),
    Components({
      resolvers: [
        YalertUIResolver()
      ],
      exclude: [/^styles$/, /^%$/]
    })
  ]
  return {
    // if (mode === 'production') {
    //   plugins.push(typescript({ exclude: ['./src/main.ts'] }))
    // }
    plugins,
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
    resolve: {
      alias: [
        {
          find: /^@\/(.*)$/,
          replacement: `${path.resolve('..')}/yAlterUI/src/$1`,
        },
        { find: /^~\/(.*)/, replacement: resolve('./src/$1') },
        { find: /^@yalert-ui\/((?!icons).+)/, replacement: resolve(__dirname, '../common/$1/src') },
        { find: /^yalert-ui$/, replacement: `${path.resolve('..')}/yAlterUI/src/components/index.ts` }, // 与下面效果是相同的
        // { find: /^yalert-ui$/, replacement: `yalert-ui/lib/es/components/index.mjs` }, // node_modules
      ],
      dedupe: ['vue']
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
  }
})
