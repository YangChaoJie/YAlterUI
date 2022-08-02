

import { App, Plugin } from 'vue'

import { YButton }  from './button'


export const buttonPlugin: Plugin = {
  install(app: App) {
    app.component('y-button', YButton)
  }
}

export default buttonPlugin;
export { YButton }
