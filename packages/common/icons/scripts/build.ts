import { resolve, basename } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import { existsSync, emptyDir, mkdirSync } from 'fs-extra'
import execa from 'execa'
import chalk from 'chalk'
import glob from 'fast-glob'
import { format } from 'prettier'
import camelcase from 'camelcase'

main().catch(error => {
  console.error(chalk.red(error))
  process.exit(1)
})

async function main() {
  ensureEmptyDir(resolve(__dirname, '../vue'))
  ensureEmptyDir(resolve(__dirname, '../vue/ant'))
  ensureEmptyDir(resolve(__dirname, '../vue/ant/filled'))
  ensureEmptyDir(resolve(__dirname, '../vue/ant/outlined'))
  ensureEmptyDir(resolve(__dirname, '../types'))

  const element = await generateVueIcons('element', '', '')
  const antFilled = await generateVueIcons('ant/filled', 'ant/filled', 'F')
  const antOutlined = await generateVueIcons('ant/outlined', 'ant/outlined', 'O')
  const antTwotone = await generateVueIcons('ant/twotone', 'ant/twotone', 'T')
  const exports = element.exports + antFilled.exports + antOutlined.exports + antTwotone.exports

  await writeFile(resolve(__dirname, '../vue/index.ts'), exports, 'utf-8')

  await execa('vite', ['build', '--config', 'vite.config.ts'], {
    stdio: 'inherit',
    env: {
      OUT_DIR: 'es',
      FORMAT: 'es'
    }
  })

  console.log()
  console.log(chalk.cyan(`built es packages`))

  await execa('vite', ['build', '--config', 'vite.config.ts'], {
    stdio: 'inherit',
    env: {
      OUT_DIR: 'lib',
      FORMAT: 'cjs'
    }
  })

  console.log()
  console.log(chalk.cyan(`built cjs packages`))

  await execa('vite', ['build', '--config', 'vite.full.config.ts'], { stdio: 'inherit' })

  console.log()
  console.log(chalk.cyan('build full packages successful'))

  const types = `
    declare module '@yalert-ui/icons' {
      import type { DefineComponent } from 'vue'
      type SvgIcon = DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
      ${element.types}
      ${antFilled.types}
      ${antOutlined.types}
      ${antTwotone.types}
    }

    // export {}
  `

  await writeFile(
    resolve(__dirname, '../types', 'index.d.ts'),
    format(types, { parser: 'typescript', semi: false, singleQuote: true }),
    'utf-8'
  )

  console.log()
  console.log(chalk.green('build successful'))
}

async function generateVueIcons(dir: string, out: string, suffix: string) {
  const outDir = resolve(__dirname, '../vue', out)

  if (!existsSync(outDir)) {
    mkdirSync(outDir)
  }

  const svgFiles = await glob('*.svg', {
    cwd: resolve(__dirname, '../src', dir),
    absolute: true
  })

  suffix = suffix.toLocaleUpperCase()

  let exports = ''
  let types = ''

  await Promise.all(svgFiles.map(async svgFile => {
    const fileName = basename(svgFile, '.svg')
    console.log('fileName---', fileName);
    let svg = (await readFile(svgFile, 'utf-8'))
      .replace(/<!--[\s\S]*-->/, '')
      .replace('<?xml version="1.0" encoding="utf-8"?>', '<!-- ?xml  -->')
      .replace('<?xml version="1.0" standalone="no"?>', '<!-- ?xml -->')
      .replace('<defs><style type="text/css"></style></defs>', '<!-- <defs><style type="text/css"></style></defs> -->')
      .replace('<defs><style/></defs>', '<!-- <defs><style/></defs> -->')
    let name = toCapitalCase(fileName)
    name = name.replace(/^(\d)/, 'I$1').replace(/-(\d)/g, '$1')
    name += suffix

    // const vue = `
    //   <template>${svg}</template>
    //   <script lang="ts">
    //     import { defineComponent, markRaw } from 'vue'
    //     export default defineComponent(markRaw({ name: '${name}' }))
    //   </script>
    // `

    // await writeFile(
    //   resolve(outDir, `${fileName}.vue`),
    //   format(vue, { parser: 'vue', semi: false, singleQuote: true }),
    //   'utf-8'
    // )

    await transformToVueComponent(svg, outDir, svgFile)

    exports += `export { default as ${name} } from '.${out ? `/${out}` : ''}/${fileName}.vue'\n`
    types += `export const ${name}: SvgIcon\n`
  }))

  console.log(chalk.cyan(`generated ${dir} vue icons`))

  return { exports, types }
}

const getName = (file: string) => {
  const filename = basename(file).replace('.svg', '')
  const componentName = camelcase(filename, { pascalCase: true })
  return {
    filename,
    componentName,
  }
}

const formatCode = (code: string, parser: any = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const transformToVueComponent = async (content: string, outDir: any, svgFile: string) => {
  // const content = await readFile(file, 'utf-8')
  const { filename, componentName } = getName(svgFile)
  // console.log('getName', getName(svgFile));
  const vue = formatCode(
    `
<template>
${content}
</template>
<script lang="ts">
import type { DefineComponent } from 'vue'
export default ({
  name: "${componentName}",
}) as DefineComponent
</script>`,
    'vue'
  )

  await writeFile(
    resolve(outDir, `${filename}.vue`),
    format(vue, { parser: 'vue', semi: false, singleQuote: true }),
    'utf-8'
  )
}


function ensureEmptyDir(dir: string) {
  if (existsSync(dir)) {
    emptyDir(dir)
  } else {
    mkdirSync(dir)
  }
}

function toCapitalCase(value: string) {
  return (
    value.charAt(0).toUpperCase() +
    value.slice(1).replace(/-([a-z])/g, (_, char) => (char ? char.toUpperCase() : ''))
  )
}
// https://github.com/element-plus/element-plus-icons/blob/03b339a7ef6a0c67443358d22ec99cb14368695d/packages/vue/build/generate.ts
