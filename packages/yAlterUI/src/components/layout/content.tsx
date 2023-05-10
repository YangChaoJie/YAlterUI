import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import { computed, defineComponent } from "vue";
import type { CSSProperties } from 'vue'
const YContent = defineComponent({
  props: {
    width: {
      type: String,
      default: null
    }
  },
  name: 'YContent',
  setup (props, { slots }) {
    const ns = useNamespace('content')
    const style = computed(() => {
      return props.width ? (ns.cssVarBlock({
        height: props.width
      }) as CSSProperties) : {}
    })

    useRender(() => (
      <main class={ [ns.b()] } style={ style.value }>
        {
           slots.default?.()
        }
      </main>
    ))
  }
})

export {
  YContent
}
