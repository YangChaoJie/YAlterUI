import { App, Plugin } from 'vue'
import { YIcon }  from './icon'

export const iconPlugin: Plugin = {
  install(app: App) {
    app.component('y-icon', YIcon)
  }
}
// export type
export default iconPlugin;
export { YIcon }
