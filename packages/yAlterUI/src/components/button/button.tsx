// Styles
// import './styles/index.scss'
import { defineComponent, PropType, computed } from "vue";
import { Size, ButtonType, Shape } from "./interface";
import { useNamespace } from '@/composables/namespace';
import { useDisabled } from '@/composables/common';
import { YIcon } from '../icon';
import { Loading } from '@yalert-ui/icons'
const buttonProps = {
  size: String as PropType<Size>,
  disabled: Boolean,
  type: {
    type: String as PropType<ButtonType>,
    default: ''
  },
  text: Boolean,
  link: Boolean,
  loading: Boolean,
  shape: {
    type: String as PropType<Shape>,
    default: ''
  },
  icon: {
    type: Object,
    default: null
  },
  dashed: {
    type: Boolean,
    default: false
  },
  borderd: {
    type: Boolean,
    default: true
  },
  loadingIcon: {
    type: Object,
    default: () => Loading,
  }
}

const YButton = defineComponent({
  name: 'YButton',
  props: buttonProps,
  setup(props, { slots }) {
    // const { disabled } = props
    const disabled = useDisabled()
    const size = computed(() => props.size)
    const type = computed(() => props.type)
    const shape = computed(() => props.shape)
    const ns = useNamespace('btn')
    const handleClick = (e: MouseEvent) => {
      if (disabled) return
    }
    // function
    function renderLoadingIcon() {
      return (
        <div>
          {
            slots.loading ? (slots.loading()) : (<YIcon icon={props.loadingIcon} class={ns.is('loading')}></YIcon>)
          }
        </div>
      )
    }

    function renderSingleIcon() {
      return props.loading ?
        (renderLoadingIcon()) :
        (
          props.icon || slots.icon ?
          (
            slots.icon ? slots.icon() :  <YIcon icon={ props.icon }></YIcon>
          ) :
          (null)
        )
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
        disabled={disabled.value || undefined}
        onClick={handleClick}
      >
        { renderSingleIcon() }
        { slots.default ? slots.default() : null }
      </button>
    )
  }
})
export type Button = InstanceType<typeof YButton>
export {
  YButton
}
