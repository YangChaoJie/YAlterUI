import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import typescript2 from '@rollup/plugin-typescript';
import pkg from '../package.json';
import fs from 'fs';
import path from 'path';
import { capitalize } from 'vue';
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
    commonjs()
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
        file: 'dist/yalterui.mjs',
        banner: bannerText
      },
      plugins: plugins(true)
    }
  ]
  return config;
}
