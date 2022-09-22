// Styles
import './styles/index.scss'
import { defineComponent, PropType, computed } from "vue";
import { Size, ButtonType } from "./interface";
import { useNamespace } from '@/composables/namespace';
import { useDisabled } from '@/composables/common';

const buttonProps = {
  size: String as PropType<Size>,
  disabled:Boolean,
  type: {
    type: String as PropType<ButtonType>,
    default: ''
  },
  text: Boolean,
  link: Boolean,
  borderd: {
    type: Boolean,
    default: true
  }
}

const YButton = defineComponent({
  name: 'YButton',
  props: buttonProps,
  setup (props, {slots}) {
    // const { disabled } = props
    const disabled = useDisabled()
    const size = computed(() => props.size)
    const type = computed(() => props.type)
    const ns = useNamespace('btn')
    const handleClick = (e: MouseEvent) => {
      if (disabled) return
    }
    return () => (
      <button
      class={[ns.b(), ns.m(size.value), ns.is('disabled', disabled.value), ns.m(type.value), ns.is('text', props.text), ns.is('link', props.link)]}
      disabled={ disabled.value || undefined }
      onClick={ handleClick }
      >
        { slots.default?.() }
      </button>
    )
  }
})
export type Button = InstanceType<typeof YButton>
export {
  YButton
}
