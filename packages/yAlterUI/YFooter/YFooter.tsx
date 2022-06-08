import { defineComponent } from "vue";

const YFooter = defineComponent({
  name: 'YFooter',
  setup (props, {slots}) {
    return () => (
      <div
      >
        { slots.default?.()}
      </div>
      
    )
  }
})

export {
  YFooter
}
