import { defineComponent, PropType, computed, h, CSSProperties } from "vue";
import { useNamespace } from '../../composables/namespace';
import { addUnit } from '../../util/style';
import { isUndefined } from '../../util/type';

// styles
import './styles/index.scss'
const toastProps = {
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<string>
  },
  icon: {
    type: Object,
    default: null
  }
}

const YToast = defineComponent({
  name: 'YToast',
  props: toastProps,
  setup(props, { attrs, slots }) {
    const ns = useNamespace('icon')
    const style = computed<CSSProperties>(() => {
      const { size, color } = props
      if (!size && !color) return {}
      return {
        fontSize: isUndefined(size) ? undefined : addUnit(size),
        '--color': color,
      }
    });
    return () => {
      return <div>124</div>
    }
  }
})
export type Toast = InstanceType<typeof YToast>
export {
  YToast
}
