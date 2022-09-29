// Styles
import './styles/index.scss'
import { defineComponent, PropType, computed } from "vue";
import { Size, ButtonType, Shape } from "./interface";
import { useNamespace } from '@/composables/namespace';
import { useDisabled } from '@/composables/common';
// import Car from '@yalert-ui/icons/es/car.mjs';
import { Car } from '@yalert-ui/icons';
// import {  } from '@yalert-ui/hooks';

const buttonProps = {
  size: String as PropType<Size>,
  disabled:Boolean,
  type: {
    type: String as PropType<ButtonType>,

    default: ''
  },
  text: Boolean,
  link: Boolean,
  shape: {
    type: String as PropType<Shape>,
    default: ''
  },
  dashed: {
    type: Boolean,
    default: false
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
    // const { disabled } = props
    const disabled = useDisabled()
    const size = computed(() => props.size)
    const type = computed(() => props.type)
    const shape = computed(() => props.shape)
    const ns = useNamespace('btn')
    const handleClick = (e: MouseEvent) => {
      if (disabled) return
    }
    return () => (
      <button
      class={[
        ns.b(), ns.m(size.value), 
        ns.is('disabled', disabled.value), 
        ns.m(type.value), 
        ns.is('text', props.text), 
        ns.is('link', props.link),
        ns.is('circle', shape.value === 'circle'),
        ns.is('round', shape.value === 'round'),
        ns.m(props.dashed ? 'dashed' : '')
      ]}
      disabled={ disabled.value || undefined }
      onClick={ handleClick }
      >
        { slots.default?.() }
        <i style="width: 20px">
        <Car></Car>
        </i>
      </button>
    )
  }
})
export type Button = InstanceType<typeof YButton>
export {
  YButton
}
