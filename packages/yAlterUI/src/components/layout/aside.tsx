import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import { computed, defineComponent, toRefs } from "vue";
import type { CSSProperties } from 'vue'
import { layoutSiderProps } from "./props";
import { LeftO, RightO } from '@yalert-ui/icons'
const YAsider = defineComponent({
  props: layoutSiderProps(),
  name: 'YAsider',
  setup(props, { slots }) {
    const ns = useNamespace('aside')
    const {
      width,
      reverseArrow,
      trigger = slots.trigger?.(),
      collapsible,
      collapsedWidth,
      defaultCollapsed
    } = toRefs(props);

    const collapsed = computed(() => collapsed !== undefined ? collapsed : defaultCollapsed) 

    const style = computed(() => {
      return props.width ? (ns.cssVarBlock({
        width: `${props.width}`
      }) as CSSProperties) : {}
    })

    const renderTriggerDom = () => {
      const iconObj = {
        expanded: reverseArrow.value ? <RightO /> : <LeftO />,
        collapsed: reverseArrow.value ? <LeftO /> : <LeftO />,
      };
      const status = collapsed.value ? 'collapsed' : 'expanded';
      const defaultTrigger = iconObj[status];
      const triggerDom =
        (
          <div class={ns.m('trigger')}>
            {trigger || defaultTrigger}
          </div>
        )
      return triggerDom
    }

    useRender(() => (
      <aside class={[ns.b()]} style={style.value}>
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
