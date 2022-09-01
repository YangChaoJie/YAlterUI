import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass'
import typescript2 from '@rollup/plugin-typescript';
import pkg from '../package.json';
import fs from 'fs';
import path from 'path';
import { capitalize } from 'vue';
import { simple as walk } from 'acorn-walk' // 抽象语法树遍历
const bannerText = `/*! ${pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.license} License */`;

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'];

const baseFolder = './src/components/'
const components = fs
  .readdirSync(baseFolder)
  .filter((f) =>
    fs.statSync(path.join(baseFolder, f)).isDirectory()
  )

const entries = {
  'index': './src/index.ts',
  ...components.reduce((obj, name) => {
    obj[name] = (baseFolder + name)
    return obj
  }, {})
}

/**
 * 设置babel 插件
 */
const babelOptions = {
  extensions,
  babelHelpers: 'inline'
}

const plugins = (isMini) => {
  let plugins = [
    nodeResolve({
      extensions
    }),
    typescript({
        typescript: require('typescript')
    }),
    sass(),
    // typescript2(),
    // typescript({
    //   removeComments: true,
    //   // 使用声明生成路径配置
    //   useTsconfigDeclarationDir: true,
    //   // 覆盖 tsconfig.json 的配置项
    //   tsconfigOverride: {
    //       include: ['src/components/*/*'],
    //   },
    // }),
    babel(babelOptions),
    commonjs(),
    {
      async buildEnd() {
        const components = Object.create(null);
        { // Components
          const { importedIds } = this.getModuleInfo(
            (await this.resolve('src/components/index.ts')).id
          )
          await Promise.all(importedIds.map(async id => {
            const importFrom = path.relative(path.resolve(__dirname, '../src'), id).replace(/\.ts$/, '.mjs')

            if (await this.resolve(path.join(id, '../_variables.scss')) != null) {
              variables.push(id)
            }

            const { ast } = this.getModuleInfo(id)
            walk(ast, {
              ExportNamedDeclaration (node) {
                node.specifiers.forEach(node => {
                  components[node.exported.name] = importFrom
                })
                node.declaration?.declarations.forEach(node => {
                  components[node.id.name] = importFrom
                })
              },
            })
          }))
        }
        this.emitFile({
          type: 'asset',
          fileName: 'json/importMap.json',
          source: JSON.stringify({
            components: Object.fromEntries(Object.entries(components).map(entry => [entry[0], {
              from: entry[1],
              styles: [], // TODO
            }])),
            // directives,
          }, null, 2),
        })
      }
    }
  ]
  if (isMini) {
    plugins.push(terser({
      format: { comments: /^!/, ecma: 2015, semicolons: false }
    }))
  }
  return plugins
} 

export default () => {
  let config = [
    {
      input: entries,
      external: ['vue'],
      output: {
        format: 'esm',
        dir: `dist/esm`,
        sourcemap: true,
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name]-[hash].mjs',
      },
      plugins: plugins()
    },
    {
      input: entries,
      external: ['vue'],
      output: {
          format: 'cjs',
          dir: 'dist/cjs',
          sourcemap: true,
          exports: 'named'
      },
      plugins: plugins()
    },
    {
      input: 'src/index.ts',
      external: ['vue'],
      output: {
        format: 'umd',
        file: 'dist/yalterui.js',
        sourcemap: true,
        name: capitalize('yalterui'),
        exports: 'named',
        banner: bannerText
      },
      plugins: plugins()
    },
    {
      input: 'src/index.ts',
      external: ['vue'],
      output: {
        format: 'esm',
        sourcemap: true,
        name: capitalize('yalterui'),
        file: 'dist/yalterui.mjs',
        banner: bannerText
      },
      plugins: plugins(true)
    }
  ]
  return config;
}
