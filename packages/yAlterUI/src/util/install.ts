import type { App } from 'vue'
import { SFCInstallWithContext, SFCWithInstall } from './type'

export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    ;(fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }
  return fn
}
