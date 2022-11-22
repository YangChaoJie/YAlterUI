import type { App } from 'vue'
export const withInstallFunction = (fn: any, name: string) => {
  ;fn.install = (app: App) => {
    ;fn._context = app._context
    app.config.globalProperties[name] = fn
  }
  return fn
}
