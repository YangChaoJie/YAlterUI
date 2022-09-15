// Styles
import './styles/btn.scss'

import { defineComponent, PropType } from "vue";
import { Size, ButtonType } from "./interface";
import { useNamespace } from '../../composables/namespace';

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
    const { size, disabled } = props
    const ns = useNamespace('btn')
    return () => (
      <button
      class={[ns.b(), ns.m(size), ns.is('disabled', disabled)]}
      disabled={ disabled || undefined }
      >
        { slots.default?.()}
      </button>
    )
  }
})
export type Button = InstanceType<typeof YButton>
export {
  YButton
}
