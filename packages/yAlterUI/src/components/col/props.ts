import type { PropType, ExtractPropTypes } from 'vue'
type ColSpanType = number | string

export interface ColSize {
  span?: ColSpanType
  order?: ColSpanType
  offset?: ColSpanType
  push?: ColSpanType
  pull?: ColSpanType
}

export const colProps = () => ({
  span: {
    type: [String, Number],
    default: 24
  },
  order: [String, Number],
  pull: {
    type: [String, Number],
    default: 0
  },
  push: {
    type: [String, Number],
    default: 0
  },
  tag: {
    type: String,
    default: 'div'
  },
  xs: {
    type: [String, Number, Object] as PropType<string | number | ColSize>,
    default: undefined as string | number | ColSize,
  },
  sm: {
    type: [String, Number, Object] as PropType<string | number | ColSize>,
    default: undefined as string | number | ColSize,
  },
  md: {
    type: [String, Number, Object] as PropType<string | number | ColSize>,
    default: undefined as string | number | ColSize,
  },
  lg: {
    type: [String, Number, Object] as PropType<string | number | ColSize>,
    default: undefined as string | number | ColSize,
  },
  xl: {
    type: [String, Number, Object] as PropType<string | number | ColSize>,
    default: undefined as string | number | ColSize,
  },
  xxl: {
    type: [String, Number, Object] as PropType<string | number | ColSize>,
    default: undefined as string | number | ColSize,
  },
  xxxl: {
    type: [String, Number, Object] as PropType<string | number | ColSize>,
    default: undefined as string | number | ColSize,
  }
})

export type ColProps = Partial<ExtractPropTypes<ReturnType<typeof colProps>>>
