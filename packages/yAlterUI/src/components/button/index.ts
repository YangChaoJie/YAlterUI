import { App, Plugin } from 'vue'
import { YButton }  from './button'
import YButtonGroup from './button-group'
export const buttonPlugin: Plugin = {
  install(app: App) {
    app.component('y-button', YButton)
  }
}
// export type
export * from './interface';
export default buttonPlugin;
export type { ButtonProps } from './button'
export type { ButtonGroupProps } from './button-group'
export type ButtonGroupInstance = InstanceType<typeof YButtonGroup>;
export { YButton, YButtonGroup }
