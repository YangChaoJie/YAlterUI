import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import { computed, defineComponent } from "vue";
import type { CSSProperties } from 'vue'
const YFooter = defineComponent({
  props: {
    height: {
      type: String,
      default: null
    }
  },
  name: 'YFooter',
  setup (props, { slots }) {
    const ns = useNamespace('footer')
    const style = computed(() => {
      return props.height ? (ns.cssVarBlock({
        height: props.height
      }) as CSSProperties) : {}
    })

    useRender(() => (
      <footer class={ [ns.b()] } style={ style.value }>
        {
           slots.default?.()
        }
      </footer>
    ))
  }
})

export {
  YFooter
}
