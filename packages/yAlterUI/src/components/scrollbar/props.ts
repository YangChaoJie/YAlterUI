import { type } from 'os'
import type { ExtractPropTypes, PropType, StyleValue } from 'vue'
export const barProps = () => ({
  always: {
    type: Boolean,
    default: true
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
})

export const thumbProps = () => ({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
})

export const scrollbarProps = () => ({
    /**
   * @description height of scrollbar
   */
    height: {
      type: [String, Number],
      default: '',
    },
    /**
     * @description max height of scrollbar
     */
    maxHeight: {
      type: [String, Number],
      default: '',
    },
    /**
     * @description whether to use the native scrollbar
     */
    native: {
      type: Boolean,
      default: false,
    },
    /**
     * @description style of wrap
     */
    wrapStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
      default: '',
    },
    /**
     * @description class of wrap
     */
    wrapClass: {
      type: [String, Array],
      default: '',
    },
    /**
     * @description class of view
     */
    viewClass: {
      type: [String, Array],
      default: '',
    },
    /**
     * @description style of view
     */
    viewStyle: {
      type: [String, Array, Object],
      default: '',
    },
    /**
     * @description do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance
     */
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    /**
     * @description element tag of the view
     */
    tag: {
      type: String,
      default: 'div',
    },
    /**
     * @description always show
     */
    always: Boolean,
    /**
     * @description minimum size of scrollbar
     */
    minSize: {
      type: Number,
      default: 20,
    },
})

export type ScrollbarProps = Partial<ExtractPropTypes<ReturnType<typeof scrollbarProps>>>
export type ThumbProps = Partial<ExtractPropTypes<ReturnType<typeof thumbProps>>>
export type BarProps = Partial<ExtractPropTypes<ReturnType<typeof barProps>>>

