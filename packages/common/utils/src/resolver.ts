import type { ComponentResolver, ComponentInfo } from 'unplugin-vue-components';
// import { readFileSync } from 'node:fs'
// import { resolveModule } from 'local-pkg'
export interface YalertUIResolverOptions {
    /**
   * import css or sass styles with components
   *
   * @default 'css'
   */
     importStyle?: boolean | 'css' | 'sass',
     /**
      * import the dark theme preset styles
      *
      * @default false
      */
     importDarkTheme?: boolean,
     /**
      * prefix for name of components
      *
      * @default ''
      */
     prefix?: string,
     /**
      * auto import for directives
      *
      * @default true
      */
     directives?: boolean,
     /**
      * resolve icon components from '@vexip-ui/icons'
      *
      * @default true
      */
     resolveIcon?: boolean,
     /**
      * prefix for name of icon components, same to `prefix` if not be specified
      *
      * @default undefined
      */
     iconPrefix?: string
}

let styleAlias: Record<string, string> | undefined
// let components: string[] | undefined
// function queryMetaData() {
//   try {
//     const root = resolveModule('yalert-ui') || process.cwd()
//     const path =
//       resolveModule('yalert-ui/meta-data.json') ||
//       resolveModule('yalert-ui/meta-data.json', { paths: [root] })
//     const metaData = JSON.parse(readFileSync(path!, 'utf-8'))

//     components = metaData.components
//     styleAlias = metaData.styleAlias
//   } catch (e) {
//     console.error(e)
//     throw new Error('[yalert-ui:plugins] failed to load vexip-ui, have you installed it?')
//   }
// }


function getSideEffects(name: string, options: YalertUIResolverOptions) {
  const { importStyle } = options
  if (!importStyle) return

  if (styleAlias && styleAlias[name]) {
    name = styleAlias[name]
  }

  name = toKebabCase(name)
  const realName = name.split('-')[1];
  if (importStyle === 'sass') {
    return [
      // 'yalert-ui/style/preset.scss',
      // ...(importDarkTheme ? ['vexip-ui/style/dark/preset.scss'] : []),
      `yalert-ui/style/${realName}.scss`
    ]
  } else if (importStyle === true || importStyle === 'css') {
    return [
      // 'yalert-ui/css/preset.css',
      // ...(importDarkTheme ? ['vexip-ui/themes/dark/index.css'] : []),
      `yalert-ui/css/${realName}.css`
    ]
  }
}
const iconNameRE = /^X[0-9A-Z].*/
const firstNumberRE = /^X[0-9].*/
function resolveComponent(name: string, options: YalertUIResolverOptions): ComponentInfo | undefined {
  // if (!components) return
  const { prefix } = options
  let cssName = name;
  if (prefix) {
    if (!name.startsWith(prefix)) return
    cssName = name.substring(prefix.length)
  }
  if (name.match(iconNameRE)) return
  // if (!components.includes(name)) return
  return {
    name,
    from: 'yalert-ui',
    sideEffects: getSideEffects(cssName, options)
  }
}

function resolveIconComponent(
  name: string,
  options: YalertUIResolverOptions
): ComponentInfo | undefined {
  if (!options.resolveIcon) return
  const { iconPrefix: prefix } = options

  if (prefix) {
    if (!name.startsWith(prefix)) return

    name = name.substring(prefix.length)
  }

  if (!name.match(iconNameRE)) return

  if (!name.match(firstNumberRE)) {
    name = name.substring(1)
  }

  return {
    name,
    from: '@yalert-ui/icons'
  }
}

export function YalertUIResolver(options?: YalertUIResolverOptions): ComponentResolver[] {
  options = { importStyle: 'css', directives: true, resolveIcon: true, prefix: 'Y', ...options }
  return [
    {
      type: 'component',
      resolve: name => {
        // if (!components) {
        //   queryMetaData()
        // }
        return resolveComponent(name, options!)
      }
    },
    {
      type: 'component',
      resolve: name => resolveIconComponent(name, options!)
    }
  ]
}


function allCapital(value: string) {
  const matched = value.match(/[A-Z]+/)
  return matched && matched[0] === value
}

function toKebabCase(value: string) {
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

