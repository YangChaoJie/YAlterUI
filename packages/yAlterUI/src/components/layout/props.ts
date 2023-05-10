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
   * @zh 当前收起状态
   * @en Whether sider is collapsed
   */
  collapsed: {
    type: Boolean,
    default: undefined
  },
  /**
   * @zh 是否可收起
   * @en Whether sider can be collapsed
   */
  collapsible: {
    type: Boolean,
    default: undefined
  },
  /**
   * 
   */
  width: {
    type: [Number, String],
    default: 48
  }
})

export type LayoutProps = Partial<ExtractPropTypes<ReturnType<typeof layoutProps>>>
export type LayoutSiderProps = Partial<ExtractPropTypes<ReturnType<typeof layoutSiderProps>>>
