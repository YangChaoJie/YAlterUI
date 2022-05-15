import { defineComponent } from "vue";

const YFooter = defineComponent({
  name: 'YFooter',
  setup (props, {slots}) {
    return () => (
      <div
      v-slots= {slots}
      >eee124</div>
    )
  }
})

export {
  YFooter
}
