import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import { computed, defineComponent } from "vue";
import type { CSSProperties } from 'vue'
const YHeader = defineComponent({
  props: {
    height: {
      type: String,
      default: null
    }
  },
  name: 'YHeader',
  setup (props, { slots }) {
    const ns = useNamespace('header')
    const style = computed(() => {
      return props.height ? (ns.cssVarBlock({
        height: props.height
      }) as CSSProperties) : {}
    })

    useRender(() => (
      <header class={ [ns.b()] } style={ style.value }>
        {
           slots.default?.()
        }
      </header>
    ))
  }
})

export {
  YHeader
}
