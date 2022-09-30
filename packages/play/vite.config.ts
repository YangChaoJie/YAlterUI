import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite';
// import typescript from '@rollup/plugin-typescript'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [
    vue(),
    VueJsx(),
    Components({
      resolvers: [
        (componentName) => {
          // where `componentName` is always CapitalCase
          console.log('componentName----', componentName);
        },
      ],
    })]
  // if (mode === 'production') {
  //   plugins.push(typescript({ exclude: ['./src/main.ts'] }))
  // }
  return {
    plugins,
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
    resolve: {
      // alias: {
      // '@': resolve(__dirname, './src'),
      // packages: resolve(__dirname, '../packages'),
      // '@': resolve(__dirname, '../packages/src'),
      // 'yalert-ui': 'yalert-ui/components', // 本地修改
      // resolve(__dirname, '../yAlterUI/src/components')
      // },
      alias: [
        {
          find: /^@\/(.*)$/,
          replacement: `${path.resolve('..')}/yAlterUI/src/$1`,
        },
        { find: /^~\/(.*)/, replacement: resolve('./src/$1') },
        // { find: /^yalert-ui$/, replacement:  `${path.resolve('..')}/yAlterUI/src/index.ts` }, // 与下面效果是相同的
        { find: /^yalert-ui$/, replacement: `yalert-ui/components` }, // node_modules
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
