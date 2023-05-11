import type { PropType, ExtractPropTypes } from 'vue'

export const layoutProps = () => ({
  hasSider: {
    type: Boolean,
    default: undefined
  },
  direction: {
    type: String,
    default: undefined
  }
})

export const layoutSiderProps = () => ({
  /**
  * @zh 默认的收起状态
  * @en The default collapsed state
  */
  defaultCollapsed: {
    type: Boolean,
  },
  /**
   * @zh 是否可收起
   * @en Whether sider can be collapsed
   */
  collapsible: {
    type: Boolean,
    default: undefined
  },
  reverseArrow: {
    type: Boolean,
    default: undefined
  },
  /**
   * 
   */
  width: {
    type: [Number, String],
    default: '200px'
  },
  /**
 * @zh 收缩宽度
 * @en Collapsed width
 */
  collapsedWidth: {
    type: Number,
    default: 48,
  },
  /**
   * 自定义 trigger，设置为 null 时隐藏 trigger
   */
  trigger: {
    type: Object,
    default: null
  }
})

export type LayoutProps = Partial<ExtractPropTypes<ReturnType<typeof layoutProps>>>
export type LayoutSiderProps = Partial<ExtractPropTypes<ReturnType<typeof layoutSiderProps>>>
