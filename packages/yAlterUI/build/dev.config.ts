import { defineConfig } from 'vite'
import baseConfig from './base.config'
export default defineConfig({
  ...baseConfig,
  mode: 'development',
  logLevel: 'error',
  clearScreen: false, // 不会清空上一次控制台打印信息
  build: {
    sourcemap: true // 生产环境生成 source map 文件
  },
  server: {
    // host: '127.0.0.1',
    open: true,
    port: 4000,
    cors: true, // 允许跨域
    strictPort: false, // 若端口已被占用则会直接退出，而不是尝试下一个可用端口
    force: true // 强制使依赖预构建
  }
})
