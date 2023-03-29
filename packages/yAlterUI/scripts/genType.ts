import {
  rootDir,
  components as allComponents,
  toCapitalCase
} from './utils'
import { resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'
export const generateTypes =  async function () {
  const plugins: string[] = []
  const ignores: string[] = []
  const exportComponents = allComponents.filter(c => !ignores.includes(c))
  const components = exportComponents.filter(c => !plugins.includes(c))

  const types = `
  declare module 'vue' {
    export interface GlobalComponents {
      ${[...components]
      .map(
        name => `${toCapitalCase(name)}: typeof import('yalert-ui')['Y${toCapitalCase(name)}']`
      )
      .join(',\n')}
    }

    interface ComponentCustomProperties {
      ${plugins
      .map(name => `$${name}: typeof import('yalert-ui')['Y${toCapitalCase(name)}']`)
      .join(',\n')}
    }
  }

  export {}
`
  const typesPath = resolve(rootDir, 'types.d.ts')
  await writeFile(
    typesPath,
    types,
    'utf-8'
  )
}
