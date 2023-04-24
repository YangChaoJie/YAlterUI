import type { PropType, ExtractPropTypes } from 'vue'
export type LayoutProp = number | string | (number | string)[]
export type GridJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
export type GridAlign = 'top' | 'middle' | 'bottom' | 'stretch'
// TO DO 准备 
// https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
export const gridProps = () => ({
  gap: {
    type: [Number, Array] as PropType<number | number[]>,
    default: 0
  },
  rows: {
    type: [String, Number] as PropType<LayoutProp>,
    default: 0
  },
  columns: {
    type: [String, Number] as PropType<LayoutProp>,
    default: 0
  },
  autoRows: {
    type: [String, Number] as PropType<LayoutProp>,
    default: 0
  },
  autoColumns: {
    type: [String, Number] as PropType<LayoutProp>,
    default: 0
  },
  justify: {
    type: String as PropType<GridJustify>,
    default: 'start'
  },
  align: {
    type: String as PropType<GridJustify>,
    default: 'start'
  },
  tag: {
    type: String,
    default: 'div'
  }
})

export type GridProps = Partial<ExtractPropTypes<ReturnType<typeof gridProps>>>
