import { defineComponent, computed } from "vue";
import { layoutProps } from "./props";
import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import type { Component, VNode } from 'vue'

const YLayout = defineComponent({
  name: 'YLayout',
  props: layoutProps(),
  setup (props, { slots }) {
    const ns = useNamespace('layout')

    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some((vNode) => {
          const tag = (vNode.type as Component).name
          return tag === 'YHeader' || tag === 'YFooter'
        })
      } else {
        return false
      }
    })

    useRender(() => (
      <section class={[ns.b(), ns.is('vertical', isVertical.value)]}>
        {
          slots.default?.()
        }
      </section>
    ))
  }
})

export {
  YLayout
}
