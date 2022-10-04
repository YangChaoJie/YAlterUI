import { defineComponent, PropType, computed, h } from "vue";
import { useNamespace } from '../../composables/namespace';

const iconProps = {
  color:  {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<String>
  },
  icon: {
    type: Object,
    default: null
  }
}

const YIcon = defineComponent({
  name: 'YIcon',
  props: iconProps,
  setup (props, { attrs, slots }) {
    const ns = useNamespace('icon')
    return () => {
      if (slots.default) {
        return  (
        <i class={ns.b()}>
          { slots.default && slots.default() }
        </i>
        )
      }

      if (props.icon) {
        return (
          <i class={ns.b()}>
            <g>{h(props.icon)}</g>
          </i>
        )
      }

      return <i class={ns.b()}></i>
    }
  }
})

export {
  YIcon
}
