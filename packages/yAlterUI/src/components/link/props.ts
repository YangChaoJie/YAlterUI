import type { PropType, ExtractPropTypes } from 'vue'
import { ButtonType } from '../button'

export const linkProps = () => ({
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  underline: {
    type: Boolean,
    default: true,
  },
  disabled: { type: Boolean, default: false },
  href: { type: String, default: '' },
  icon: {
    type: [String, Object],
  }
})

export type LinkProps = Partial<ExtractPropTypes<ReturnType<typeof linkProps>>>
