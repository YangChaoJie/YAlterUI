// This config is for building library, do not use to create serve.

import { resolve } from 'node:path'
import { readFileSync, existsSync, readdirSync, lstatSync, rmdirSync, unlinkSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import glob from 'fast-glob'
import type { LogLevel, Plugin } from 'vite'

interface Manifest {
  dependencies?: Record<string, string>,
  peerDependencies?: Record<string, string>,
  version?: string
}

const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf-8')) as Manifest
const componentsDir = resolve(__dirname, 'src')

const logLevel = process.env.LOG_LEVEL
const sourceMap = process.env.SOURCE_MAP === 'true'

const prePlugins = (plugins: Plugin[]): Plugin[] => {
  return plugins.map(plugin => ({ ...plugin, enforce: 'pre', apply: 'build' }))
}

const externalPkgs = ['@vue'].concat(
  Object.keys(pkg.dependencies || {}),
  Object.keys(pkg.peerDependencies || {})
)
const external = (id: string) => externalPkgs.some(p => p === id || id.startsWith(`${p}/`))

function emptyDir(dir: string): void {
  if (!existsSync(dir)) {
    return
  }

  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file)

    // baseline is Node 12 so can't use rmSync
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs)
      rmdirSync(abs)
    } else {
      unlinkSync(abs)
    }
  }
}

export default defineConfig(async () => {
  const input = await glob('../src/components/**/*.{ts,vue}', {
    cwd: __dirname,
    absolute: true,
    onlyFiles: true
  })

  emptyDir(resolve(__dirname, 'lib'))

  return {
    logLevel: (logLevel || 'info') as LogLevel,
    publicDir: false,
    define: {
      __VERSION__: JSON.stringify(pkg.version)
    },
    resolve: {
      alias: [
        // { find: /^@\/(.*)/, replacement: resolve('../src/$1')},
        // { find: /^%\/(.*)/, replacement: resolve('./$1')},
        { find: /^@\/(.*)/, replacement: resolve('./src/$1')},
        // { find: /^yalert-ui$/, replacement: resolve('../src/index.ts') },
        // { find: /^yalert-ui\/(.*)/, replacement: resolve('../$1') },
        { find: '@yalert-ui/hooks', replacement: resolve(__dirname, '../common/hook/src') }
      ]
    },
    build: {
      outDir: 'es',
      sourcemap: sourceMap,
      lib: {
        entry: resolve('./src/components/index.ts'), // 设置入口文件  
        name: 'yalert-ui'
      },
      rollupOptions: {
        input,
        external,
        output: [
          {
            format: 'cjs',
            preserveModules: true,
            preserveModulesRoot: resolve(__dirname, '../src'),
            dir: 'lib/cjs',
            entryFileNames: '[name].cjs'
          },
          {
            format: 'es',
            sourcemap: false,
            preserveModules: true,
            preserveModulesRoot: resolve(__dirname, '../src'),
            dir: 'lib/es',
            entryFileNames: '[name].mjs'
          }
        ],
        plugins: [
        ],
        treeshake: false
      },
      commonjsOptions: {
        sourceMap: false
      },
      chunkSizeWarningLimit: 10000
    },
    plugins: [
      ...prePlugins([
        {
          name: 'yalert-ui:resolve',
          resolveId(id) {
            console.log('id--------', id);
            if (id.startsWith('%/styles')) {
              return {
                id: id.replace(/%\/styles\/(.+).scss$/, 'yalert-ui/css/$1.css'),
                external: 'absolute'
              }
            }
          }
        }
      ]),
      vue(),
      vueJsx()
    ]
  }
})
