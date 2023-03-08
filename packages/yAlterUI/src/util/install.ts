import { configNamespace } from '@/composables/namespace'
import type { SFCInstallWithContext, SFCWithInstall } from './typescript'
import { computed, unref } from 'vue'
import type { Ref, App } from 'vue'
import { configProps } from './props'
import type { PropsOptions } from './props'
export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    ;(fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }
  return fn as SFCInstallWithContext<T>
}



type MaybeRef<T> = T | Ref<T>

export interface InstallOptions {
  prefix?: string,
  namespace?: MaybeRef<string>,
  props?: MaybeRef<PropsOptions>,
  // locale?: MaybeRef<LocaleOptions>,
  zIndex?: MaybeRef<number>
}

export function buildComponentsInstall(components: any[] = [], defaultLocale?: 'zh-CN' | 'en-US') {
  return function install(app: App, options: InstallOptions = {}) {
    const {
      prefix = '',
      namespace = '',
      props = {},
      // locale = { locale: defaultLocale },
      zIndex
    } = options

    // const withDefaultLocale = computed(() => {
    //   return { locale: defaultLocale, ...unref(locale) }
    // })
    configNamespace(namespace, app)
    configProps(props, app)
    // configLocale(withDefaultLocale, app)

    // if (typeof zIndex === 'number') {
    //   configZIndex(zIndex, app)
    // }

    const normalizedPrefix = toCapitalCase(prefix || '')

    components.forEach(component => {
      if (typeof component === 'function' || typeof component.install === 'function') {
        app.use(component)
      } else {
        app.component(`${normalizedPrefix}${component.name}`, component)
      }
    })
  }
}

/**
 * 将命名转换为首字母大写的驼峰
 *
 * @param value 需要转换的命名
 */

 type CapitalCase<T extends string> = T extends `${infer First}-${infer Rest}`
 ? `${Capitalize<First>}${CapitalCase<Rest>}`
 : Capitalize<T>

function toCapitalCase<T extends string>(value: T) {
  return (value.charAt(0).toUpperCase() +
    value
      .slice(1)
      .replace(/-(\w)/g, (_, char) => (char ? char.toUpperCase() : ''))) as CapitalCase<T>
}
