import { defineComponent } from "vue";
import { scrollbarProps } from "./props";

const YScrollbar = defineComponent({
  name: 'YScrollbar',
  props: scrollbarProps(),
  setup(props) {

  }
})

export {
  YScrollbar
}
