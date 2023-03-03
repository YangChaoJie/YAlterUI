import { defineComponent, PropType, computed, h, CSSProperties } from "vue";
import { useNamespace } from '../../composables/namespace';
import { addUnit } from '../../util/style';
import { isUndefined } from '../../util/type';
const iconProps = {
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<string>
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Object,
    default: null
  }
}

const YIcon = defineComponent({
  name: 'YIcon',
  props: iconProps,
  setup(props, { attrs, slots }) {
    const ns = useNamespace('icon')
    const style = computed<CSSProperties>(() => {
      const { size, color, loading } = props
      if (!size && !color) return {}
      return {
        fontSize: isUndefined(size) ? undefined : addUnit(size),
        '--color': color
      }
    });
    return () => {
      if (slots.default) {
        return (
          <i class={[ns.b(), ns.is('loading', props.loading)]} style={style.value}>
            {slots.default && slots.default()}
          </i>
        )
      }

      if (props.icon) {
        return (
          <i class={[ns.b(), ns.is('loading', props.loading)]} style={style.value}>
            <g>{h(props.icon)}</g>
          </i>
        )
      }

      return <i class={[ns.b(), ns.is('loading', props.loading)]} style={style.value}></i>
    }
  }
})
export type Icon = InstanceType<typeof YIcon>
export {
  YIcon
}
