import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'
import baseConfig from './base.config' // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
const outDir = 'dist'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (file: any) => path.resolve(__dirname, file)
export default defineConfig({
  // ...baseConfig,
  resolve: {
    alias: [
      { find: /^%\/(.*)/, replacement: resolve('../$1')},
      { find: /^@\/(.*)/, replacement: resolve('../src/$1')},
      { find: /^yalert-ui$/, replacement: resolve('../src/index.ts') },
      { find: /^yalert-ui\/(.*)/, replacement: resolve('../$1') },
      { find: '@yalert-ui/hooks', replacement: resolve('../common/hook/src') }
    ]
  },
  // 打包配置
  build: {
    minify: 'esbuild', // 设置为false以禁用缩小，或指定要使用的缩小器。 默认是esbuild，它比terser快20 ~ 40倍，压缩只差1 ~ 2%.
    sourcemap: false, //不开启镜像
    outDir: outDir,
    // publicDir: false,
    chunkSizeWarningLimit: 10000,
    assetsInlineLimit: 8192, // 小于 8kb 的导入或引用资源将内联为 base64 编码
    // terserOptions: {// minify 为 terser 设置
    //   // 生产环境移除console
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // },
    lib: {
      entry: resolve('../src/index.ts'), // 设置入口文件
      formats: ['es', 'cjs', 'iife', 'umd'],
      name: 'YalertUi', // 起个名字，安装、引入用
      fileName: (format) => `yalert-ui.${format === 'es' ? 'mjs' : format === 'cjs' ? 'cjs' : 'js'}` // 打包后的文件名
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'tailwindcss'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          tailwindcss: 'tailwindcss'
        }
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      exclude: [
        'node_modules',
        '@yalert-ui/hooks',
        '@yalert-ui/icons',
        '@yalert-ui/utils'
      ],
      outputDir: outDir,
      compilerOptions: {
        sourceMap: false
      },
      copyDtsFiles: true,
      skipDiagnostics: false
    })
  ]
})
