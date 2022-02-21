import { defineComponent } from "vue";

const YFooter = defineComponent({
  name: 'YFooter',
  setup (props, {slots}) {
    return () => (
      <div
      v-slots= {slots}
      />
    )
  }
})

export {
  YFooter
}
