import { defineComponent } from "vue";

const YFooter = defineComponent({
  name: 'YFooter',
  setup (props, {slots}) {
    return () => (
      <div
      >
        123
        { slots.default?.()}
      </div>
      
    )
  }
})

export {
  YFooter
}
