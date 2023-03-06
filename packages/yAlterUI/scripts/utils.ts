import { bgYellow, bgCyan, bgGreen, bgRed, yellow, cyan, green, red, lightBlue } from 'kolorist'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { ParsedArgs } from 'minimist'
import { execa } from 'execa'
import type { Options } from 'execa'
import prompts from 'prompts'
import {
  readdirSync,
  statSync,
  existsSync,
  lstatSync,
  rmdirSync,
  unlinkSync,
  readFileSync
} from 'fs-extra'
type LogFn = () => void

export const logger = {
  ln: () => console.log(),
  withStartLn: (log: LogFn) => {
    logger.ln()
    log()
  },
  withEndLn: (log: LogFn) => {
    log()
    logger.ln()
  },
  withBothLn: (log: LogFn) => {
    logger.ln()
    log()
    logger.ln()
  },
  warning: (msg: string) => {
    console.warn(`${bgYellow(' WARNING ')} ${yellow(msg)}`)
  },
  info: (msg: string) => {
    console.log(`${bgCyan(' INFO ')} ${cyan(msg)}`)
  },
  success: (msg: string) => {
    console.log(`${bgGreen(' SUCCESS ')} ${green(msg)}`)
  },
  error: (msg: string) => {
    console.error(`${bgRed(' ERROR ')} ${red(msg)}`)
  },
  warningText: (msg: string) => {
    console.warn(`${yellow(msg)}`)
  },
  infoText: (msg: string) => {
    console.log(`${cyan(msg)}`)
  },
  successText: (msg: string) => {
    console.log(`${green(msg)}`)
  },
  errorText: (msg: string) => {
    console.error(`${red(msg)}`)
  }
}

export function fuzzyMatch(partials: string[], total: string[], includeAll = false) {
  const matched: string[] = []
  partials.forEach(partial => {
    for (const target of total) {
      if (target.match(partial)) {
        matched.push(target)

        if (!includeAll) break
      }
    }
  })
  return matched
}
export const rootDir = resolve(fileURLToPath(import.meta.url), '../..')
console.log('rootDir------', rootDir);

export const componentsDir = resolve(rootDir, 'src/components')
export const components = readdirSync(componentsDir).filter(f => {
  const path = resolve(componentsDir, f)

  if (!statSync(path).isDirectory()) {
    return false
  }

  return existsSync(`${path}/index.ts`)
})


export function fuzzyMatchComponent(
  partialComponents: string[],
  includeAll = false,
  allComponents = components
) {
  const matched = fuzzyMatch(partialComponents, allComponents, includeAll)

  if (matched.length) {
    return matched
  } else {
    logger.withBothLn(() => logger.error(`Any component matches '${partialComponents}'!`))
    process.exit(1)
  }
}

export async function specifyComponent(
  args: ParsedArgs,
  allComponents = components,
  required = true
) {
  const matchedComponents = args._.length ? fuzzyMatchComponent(args._, true, allComponents) : ['']

  let component: string

  if (matchedComponents.length > 1 || !matchedComponents[0]) {
    component = (
      await prompts({
        type: 'select',
        name: 'component',
        message: 'Select a component:',
        choices: (matchedComponents.length > 1 ? matchedComponents : allComponents).map(name => ({
          title: name,
          value: name
        }))
      })
    ).component
  } else {
    component = matchedComponents[0] || ''
  }

  if (!component && required) {
    logger.withStartLn(() => logger.error('Component must be specified.'))
    process.exit(1)
  }

  return component
}

function allCapital(value: string) {
  const matched = value.match(/[A-Z]+/)
  return matched && matched[0] === value
}

// 短横线命名
export function toKebabCase(value: string) {
  if (allCapital(value)) {
    return value.toLocaleLowerCase()
  }

  return (
    value.charAt(0).toLowerCase() +
    value
      .slice(1)
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
  )
}

// 全大写命名
export function toCapitalCase(value: string) {
  return (
    value.charAt(0).toUpperCase() +
    value.slice(1).replace(/-([a-z])/g, (_, char) => (char ? char.toUpperCase() : ''))
  )
}

// 驼峰命名
export function toCamelCase(value: string) {
  const capitalName = toCapitalCase(value)

  if (allCapital(capitalName)) {
    return capitalName.toLocaleLowerCase()
  }

  return capitalName.charAt(0).toLowerCase() + capitalName.slice(1)
}

export async function run(bin: string, args: string[], opts: Options = {}) {
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

export async function dryRun(bin: string, args: string[], opts: Options = {}) {
  console.log(lightBlue(`[dryrun] ${bin} ${args.join(' ')}`), opts)
}
