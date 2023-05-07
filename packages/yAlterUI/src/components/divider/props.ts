import { ExtractPropTypes, PropType } from "vue"

export type Direction = 'horizontal' | 'vertical' | ''
export type Orientation = 'left' | 'right' | 'center'

export const dividerProps = () => ({
  type: {
    type: String as PropType<Direction>,
    default: 'horizontal'
  },
  dashed: {
    type: Boolean,
    default: false
  },
  orientation: {
    type: String as PropType<Orientation>,
    default: 'center'
  },
  plain: {
    type: Boolean,
    default: false
  }
})

export type DividerProps = Partial<ExtractPropTypes<ReturnType<typeof dividerProps>>>
