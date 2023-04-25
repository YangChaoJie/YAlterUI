import { defineComponent, computed, h } from 'vue';
import { colProps } from './props';
import { useNamespace } from '@/composables/namespace';
import type { CSSProperties } from 'vue'
import { useInjectRow } from '@/composables/provider';
import { isNumber, isObject } from '@yalert-ui/utils';
const YCol = defineComponent({
  name: 'YCol',
  props: colProps(),
  setup(props, { slots, emit }) {
    const ns = useNamespace('col')
    const { gutter } = useInjectRow()
    
    const style = computed(() => {
      const styles: CSSProperties = {}
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`
      }
      return styles
    })

    const classes = computed(() => {
      const classes: string[] = []
      const pos = ['span', 'offset', 'pull', 'push'] as const
      pos.forEach((prop) => {
        const size = props[prop]
        if(isNumber(size)) {
          if (prop === 'span') classes.push(ns.b(`${props[prop]}`)) // el-col-6
          else if (size > 0) classes.push(ns.b(`${prop}-${props[prop]}`)) // el-col-offset-6
        }
      })

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
      sizes.forEach((size) => {
        if (isNumber(props[size])) {
          classes.push(ns.b(`${size}-${props[size]}`))
        } else if (isObject(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classes.push(ns.b(`${size}-${prop}-${sizeProp}`))
          })
        }
      })

      if (gutter.value) {
        classes.push(ns.is('guttered'))
      }

      return classes
    })
    
    return () => (
      h(props.tag, {
        style: style.value,
        class: [ns.b(), ...classes.value]
      },  slots.default?.())
    )
  }
})

export type YCol = InstanceType<typeof YCol>

export {
  YCol
}
