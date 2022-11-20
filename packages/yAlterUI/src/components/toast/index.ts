import { YToast } from './toast';
import { createVNode, render, markRaw } from 'vue'
import { ToastOptions, ToastPosition } from './interface';
// export { YToast }

class ToastManager {
  name: String
  open: any
  private _instance: any | null
  private _container: any | null
  constructor(options: Partial<ToastOptions> = {}) {
    this._instance = null
    this.name = 'Toast'
  }

  private _getInstance() {
    if (!this._instance) {
      const vnode = createVNode(YToast, null, null)

      this._container = document.createElement('div')
      // vnode.appContext = this._mountedApp._context

      render(vnode, this._container, false)
      document.body.appendChild(this._container.firstElementChild!)

      this._instance = vnode.component!.proxy
    }

    return this._instance
  }

  private _open() {
    https://github.com/vexip-ui/vexip-ui/blob/54c8bf8e8f00ca6930811b29995aa286503e1a70/common/config/src/props.ts#L56
    console.log('---');
  }
}
