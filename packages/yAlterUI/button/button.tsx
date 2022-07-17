import { defineComponent } from "vue";

const YButton = defineComponent({
  name: 'YButton',
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
  YButton
}
