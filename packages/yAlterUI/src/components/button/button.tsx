// Styles
import './styles/index.scss'

import { defineComponent, PropType } from "vue";
import { Size, ButtonType } from "./interface";

const buttonProps = {
  size: String as PropType<Size>,
  disabled:Boolean,
  type: {
    type: String as PropType<ButtonType>,
    default: 'defalut'
  },
  borderd: {
    type: Boolean,
    default: true
  }
}

const YButton = defineComponent({
  name: 'YButton',
  props: buttonProps,
  setup (props, {slots}) {
    return () => (
      <div
      class="btn"
      >
        { slots.default?.()}
      </div>
    )
  }
})
export type Button = InstanceType<typeof YButton>
export {
  YButton
}
