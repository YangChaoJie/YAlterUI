import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import baseConfig from './base.config' // 主要用于alias文件路径别名

export default defineConfig({
  ...baseConfig,
  // 打包配置
  build: {
    sourcemap: false, //不开启镜像
    outDir: 'lib',
    assetsInlineLimit: 8192, // 小于 8kb 的导入或引用资源将内联为 base64 编码
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    lib: {
      entry: resolve(process.cwd(), './src/components/index.ts'), // 设置入口文件
      name: 'yalert-ui', // 起个名字，安装、引入用
      fileName: (format) => `yalter-ui.${format}.js` // 打包后的文件名
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
  }
})
