
import { YFooter }  from './YFooter'

import { App, Plugin } from 'vue'

export const FooterPlugin: Plugin = {
  install(app: App) {
    app.component('y-footer', YFooter)
  }
}

export { YFooter }
