import { defineComponent, computed, ref } from "vue";
import { layoutProps } from "./props";
import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import type { Component, VNode } from 'vue'
import { useProviderSider } from "@/composables/provider";

const YLayout = defineComponent({
  name: 'YLayout',
  props: layoutProps(),
  setup(props, { slots }) {
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

    const siders = ref<string[]>([]);

    useProviderSider({
      addSider: (id: string) => {
        debugger
        siders.value = [...siders.value, id];
      },
      removeSider: (id: string) => {
        siders.value = siders.value.filter(currentId => currentId !== id);
      }
    })


    useRender(() => (
      <section class={[
      ns.b(), 
      ns.is('vertical', isVertical.value), 
      ns.is('has-sider', typeof props.hasSider === 'boolean' ? props.hasSider : siders.value.length > 0)]}>
        {
          slots.default?.()
        }
      </section>
    ))

    return {
      siders,
      isVertical
    }
  }
})

export {
  YLayout
}
