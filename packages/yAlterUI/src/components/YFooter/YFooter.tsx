import { defineComponent } from "vue";

const YFooter = defineComponent({
  name: 'YFooter',
  setup (props, {slots}) {
    return () => (
      <div
      >
        1234
        { slots.default?.()}
      </div>
      
    )
  }
})

export {
  YFooter
}
