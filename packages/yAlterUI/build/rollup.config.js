import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import typescript2 from '@rollup/plugin-typescript';
import pkg from '../package.json';
import fs from 'fs';
import path from 'path';
const bannerText = `/*! ${pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author} | ${pkg.license} License */`;

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

const babelOptions = {
  extensions,
  babelHelpers: 'inline'
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
      plugins: [
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
        terser(),
        commonjs()
      ]
    }
  ]
  return config;
}
