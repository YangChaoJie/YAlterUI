import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// import typescript from '@rollup/plugin-typescript'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [vue(), VueJsx()]
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
      alias: {
        '@': resolve(__dirname, './src'),
        packages: resolve(__dirname, '../packages'),
        // 'yalertui': 'yalertui/components'
        // resolve(__dirname, '../yAlterUI/src/components'),
      },
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
