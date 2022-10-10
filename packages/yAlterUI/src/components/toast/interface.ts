import type { ComponentPublicInstance } from 'vue'

export type ToastType = 'success' | 'warning' | 'error' | 'loading'
export type ToastPosition = 'top' | 'center' | 'bottom'

export interface ToastOptions extends Record<string, any> {
  type?: ToastType,
  content?: string,
  icon?: Record<string, any> | (() => any) | null,
  iconProps?: Object,
  position?: ToastPosition,
  transitionName?: string,
  closable?: boolean,
  maskClose?: boolean,
  showMask?: boolean,
  maskClass?: Object,
  maskStyle?: Object,
  onClose?: () => void
}

export interface ToastInstance extends ComponentPublicInstance {
  openToast: (options: ToastOptions) => Promise<void>,
  cloasToast: () => void
}
