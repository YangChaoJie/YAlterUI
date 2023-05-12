import type { PropType, ExtractPropTypes } from 'vue'
export type LayoutProp = number | string | (number | string)[]
export type GridJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
export type GridAlign = 'top' | 'middle' | 'bottom' | 'stretch'
export interface ResponsiveValue {
  /**
   * @zh >= 1600px 响应式配置
   * @en >= 1600px responsive configuration
   */
  xxl?: number;
  /**
   * @zh >= 1200px 响应式配置
   * @en >= 1200px responsive configuration
   */
  xl?: number;
  /**
   * @zh >= 992px 响应式配置
   * @en >= 992px responsive configuration
   */
  lg?: number;
  /**
   * @zh >= 768px 响应式配置
   * @en >= 768px responsive configuration
   */
  md?: number;
  /**
   * @zh >= 576px 响应式配置
   * @en >= 576px responsive configuration
   */
  sm?: number;
  /**
   * @zh < 576px 响应式配置
   * @en <576px responsive configuration
   */
  xs?: number;
}
// TO DO 准备 
// https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
export const gridProps = () => ({
  cols: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 24
  },
  rowGap: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 0
  },
  colGap: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 0
  },
  collapsed: {
    type: Boolean,
    default: false
  },
  collapsedRows: {
    type: Number,
    default: 1
  },
  tag: {
    type: String,
    default: 'div'
  }
})

export const gridItemProps = () => ({
  span: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 1
  },
  offset: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 0
  },
  suffix: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: 'div'
  }
})

export type GridProps = Partial<ExtractPropTypes<ReturnType<typeof gridProps>>>
export type GridItemProps = Partial<ExtractPropTypes<ReturnType<typeof gridItemProps>>>


export interface GridItemData extends GridItemProps {
  span: number;
  offset: number;
}
