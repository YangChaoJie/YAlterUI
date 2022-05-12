import { App, Plugin } from 'vue'
import { ButtonPlugin } from './YFooter'

const YKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
  }
}

export default YKitPlugin;
export * from './YFooter'
