import { defineProps, withDefaults } from 'vue';
import type { ExtractPropTypes } from 'vue'
export const RowJustify = [
  'start',
  'center',
  'end',
  'space-around',
  'space-between',
  'space-evenly',
] as const

export const RowAlign = ['top', 'middle', 'bottom'] as const
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
    type: String,
    default: 'start'
  },
  align: {
    type: String,
    default: 'top'
  }
})

export type RowProps = Partial<ExtractPropTypes<ReturnType<typeof rowProps>>>
