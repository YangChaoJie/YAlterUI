import { CSSProperties, computed, defineComponent } from "vue";
import { dividerProps } from "./props";
import { useNamespace } from "@/composables/namespace";

const YDivider = defineComponent({
  name: 'YDivider',
  props: dividerProps(),
  setup (props, { slots }) {
    const ns = useNamespace('divider')
    const dividerStyle = computed(() => {
      return ns.cssVar({
        'border-style': props.dashed ? 'dashed' : 'solid'
      }) as CSSProperties
    })
    const { type, orientation } = props
    function renderSolt() {
      if (slots.default?.() && type !== 'vertical' ) {
        return (
          <div class={[ns.e('text'), ns.is(orientation)]}>
            {  slots.default?.() }
          </div>
        )
      }
    }
    return () => (
      <div role="separator" class={[ns.b(), ns.m(type)]} style={dividerStyle.value}>
        {
          renderSolt()
        }
      </div>
    )
  }
})

export type YDividerInstance = InstanceType<typeof YDivider>
export {
  YDivider
}
