import { PropType, CSSProperties, ExtractPropTypes } from "vue";
import type { ToastPosition } from "./interface";
import { ToastOptions } from './interface';
import { propsFactory } from '../../util/propsFactory';
export type ClassType = string | Record<string, any> | Array<string | Record<string, any>>
export type StyleType = string | CSSProperties | Array<string | CSSProperties>

export const classProp = [String, Object, Array] as PropType<ClassType>
export const styleProp = [String, Object, Array] as PropType<StyleType>
export const toastProps = propsFactory({
  bodyWidth: {
    type: Number,
    default: 100
  },
  icon: {
    type: [Object, Function] as PropType<Record<string, any> | (() => any)>,
    default: null
  },
  iconProps: {
    type: Object,
    default: () => ({}),
  },
  position: {
    type: String as PropType<ToastPosition>,
    default: 'center'
  },
  transitonName: {
    type: String,
    default: ''
  },
  closable: {
    type: Boolean,
    default: false
  },
  maskClose: {
    type: Boolean,
    default: false
  },
  showMask: {
    type: Boolean,
    default: false
  },
  maskClass: {
    type: classProp,
    default: null
  },
  maskStyle: {
    type: styleProp,
    default: null
  },
  parseHtml: {
    type: Boolean,
    default: false
  },
  renderFunc: {
    type: Function as PropType<(options: ToastOptions) => any>,
    default: null
  }
})
export type ToastProps = ExtractPropTypes<typeof toastProps>
