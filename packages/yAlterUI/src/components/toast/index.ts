import Toast from './toast';
import { createVNode, render, markRaw, App } from 'vue'
import Component from './toast.vue'
import { ToastInstance, ToastOptions, ToastPosition, ToastType } from './interface';
import { CircleCheck, CircleClose, Loading3QuartersO, Warning } from '@yalert-ui/icons';
import { withInstallFunction } from '@/util/install';
interface ApiMethod {
  (options: ToastOptions): () => void,
  (content: string, duration?: number): () => void
  /** @internal */
  (options: string | ToastOptions, duration?: number): () => void
}

const conveniences: Record<ToastType, Record<string, any>> = {
  success: {
    icon: CircleCheck
  },
  warning: {
    icon: Warning
  },
  error: {
    icon:  CircleClose
  },
  loading: {
    icon: Loading3QuartersO,
    showMask: true,
    iconProps: {
      pulse: true,
      loading: true,
      size: '22px'
    }
  }
}

class ToastManager {
  name: String
  defaults: Record<string, unknown>

  open: ApiMethod
  success: ApiMethod
  warning: ApiMethod
  error: ApiMethod
  loading: ApiMethod

  private _mountedApp: App<unknown> | null
  private _instance: ToastInstance | null
  private _container: HTMLElement | null
  private _timer: ReturnType<typeof setTimeout> | null
  constructor(options: Partial<ToastOptions> = {}) {
    options = {
      ...options,
      duration: options.duration ? Number(options.duration) : 2000
    }
    this.name = 'Toast'
    this._mountedApp = null
    this._instance = null
    this._container = null
    this._timer = null

    this.open = (content: string | ToastOptions, duration?: number) => {
      return this._open(null, content, duration)
    }

    this.success = (content: string | ToastOptions, duration?: number) => {
      return this._open('success', content, duration)
    }

    this.warning = (content: string | ToastOptions, duration?: number) => {
      return this._open('warning', content, duration)
    }

    this.error = (content: string | ToastOptions, duration?: number) => {
      return this._open('error', content, duration)
    }

    this.loading = (content: string | ToastOptions, duration?: number) => {
      return this._open('loading', content, duration)
    }
  }

  install(app: App, options: Partial<ToastOptions> & { property?: string } = {}) {
    const { property, ...others } = options
    this.config(others)
    app.config.globalProperties[property || '$toast'] = this
    app.provide('toast', options)
    this._mountedApp = app
  }

  private _getInstance() {
    if (!this._mountedApp) {
      console.warn('[ui:Toast]: App missing, the plugin maybe not installed.')
      return null
    }
    if (!this._instance) {
      const vnode = createVNode(Toast)
      this._container = document.createElement('div')
      vnode.appContext = this._mountedApp._context
      render(vnode, this._container)
      document.body.appendChild(this._container)
      this._instance = vnode.component!.proxy as ToastInstance
    }
    return this._instance
  }
  
  // https://github.com/vexip-ui/vexip-ui/blob/54c8bf8e8f00ca6930811b29995aa286503e1a70/common/config/src/props.ts#L56
  private _open(type: null | ToastType, content: string | ToastOptions, duration?: number) {
    this._timer && clearTimeout(this._timer)

    const options = typeof content === 'string' ? { content, duration: duration } : content
    const convenienceOptions = type ? conveniences[type] ?? {} : {}
    
    const userCloseFn = options.onClose

    const onClose = () => {
      this._timer && clearTimeout(this._timer)

      if (typeof userCloseFn === 'function') {
        return userCloseFn()
      }
    }

    const toast = this._getInstance()
    const item: ToastOptions = { ...this.defaults, ...convenienceOptions, ...options, onClose }

    if (item.icon && typeof item.icon !== 'function') {
      item.icon = markRaw(item.icon)
    }
    // debugger;
    toast?.openToast(item)
    const _duration = typeof item.duration === 'number' ? item.duration : 2000
    if (_duration >= 500) {
      this._timer = setTimeout(() => {
        toast?.cloasToast()
      }, duration)
    }

    return () => {
      this._timer && clearTimeout(this._timer)
      toast?.cloasToast()
    }
  }

  config(options: Record<string, unknown>) {
    this.defaults = { ...this.defaults, ...options }
  }

  close() {
    this._timer && clearTimeout(this._timer)
    this._getInstance()?.cloasToast()
  }

  destroyed() {
    this._container && render(null, this._container)
  }
}

export const YToast = new ToastManager()
// export const YToast = withInstallFunction(new ToastManager(), '$toast')
