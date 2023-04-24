import type { ExtractPropTypes, PropType } from 'vue';
import { defineProps, withDefaults } from 'vue';
export type RowJustify = 'start' | 'center' | 'end' | 'space-around' |'space-between' | 'space-evenly'
type RowAlign = 'top' | 'middle' | 'bottom'
// interface RowProp {
//   tag: string
//   gutter: number
//   justify: string
//   align: string
// }

// export const rowProps = withDefaults(defineProps<RowProp>(), {
//   tag: 'div',
//   gutter: 0,
//   justify: 'start',
//   align: 'top'
// }) as any
export const rowProps = () => ({
  tag: {
    type: String,
    default: 'div'
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String as PropType<RowJustify>,
    default: 'start'
  },
  align: {
    type: String as PropType<RowAlign>,
    default: 'top'
  },
  wrap: {
    type: Boolean,
    default: true,
  }
})

export type RowProps = Partial<ExtractPropTypes<ReturnType<typeof rowProps>>>
