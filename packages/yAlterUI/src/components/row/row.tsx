import { defineComponent, computed, h } from 'vue';
import { rowProps } from './props';
import { initDefaultProps } from '@/util/props';
import { useNamespace } from '@/composables/namespace';
import type { CSSProperties } from 'vue'
import { useProviderRow } from '@/composables/provider';
const YRow = defineComponent({
  name: 'YRow',
  props: initDefaultProps(rowProps(), { gutter: 9 }),
  //initDefaultProps(rowProps(), { gutter: 9 }), 打包后类型是没有问题的，在开发模式下类型提示有问题
  setup(props, { slots, emit }) {
    const ns = useNamespace('row')
    const gutter = computed(() => props.gutter)

    useProviderRow({ gutter })
    const style = computed(() => {
      const styles: CSSProperties = {}
      if (!props.gutter) {
        return styles
      }
    
      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`
      return styles
    })
    return () => (
      h(props.tag, {
        class: [ns.b(), 
          ns.is(`justify-${props.justify}`, props.justify !== 'start'),
          ns.is(`align-${props.align}`, props.align !== 'top'),
          ns.is(`no-wrap`, !props.wrap)
        ],
        style: style.value
      },  slots.default?.())
    )
  }
})

export type YRow = InstanceType<typeof YRow>

export {
  YRow
}
