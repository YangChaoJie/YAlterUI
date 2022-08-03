import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [vue(), vueJsx()]
  if (mode === 'production') {
    plugins.push(typescript({ exclude: ['./src/main.ts'] }))
  }
  return {
    plugins,
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/lib.ts'),
        name: 'common_lib',
        fileName: format => `lib.${format}.js`,
        formats: ['es'],
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          sourcemap: true,
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  }
})
