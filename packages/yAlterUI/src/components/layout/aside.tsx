import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import { computed, defineComponent } from "vue";
import type { CSSProperties } from 'vue'
const YAsider = defineComponent({
  props: {
    width: {
      type: String,
      default: null
    }
  },
  name: 'YAsider',
  setup (props, { slots }) {
    const ns = useNamespace('aside')
    const style = computed(() => {
      return props.width ? (ns.cssVarBlock({
        width: props.width
      }) as CSSProperties) : {}
    })

    useRender(() => (
      <aside class={ [ns.b()] } style={ style.value }>
        {
           slots.default?.()
        }
      </aside>
    ))
  }
})

export {
  YAsider
}
