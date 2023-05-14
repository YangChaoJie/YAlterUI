import { defineComponent, Fragment } from "vue";
import { SpaceProps, spaceProps } from "./props";

const YSpace = defineComponent({
  name: 'YSpace',
  props: spaceProps(),
  setup(props) {
    return () => {
      return (
        <div>ddd22∂{ props.direction }</div>
      )
    }
  }
})

export {
  YSpace
}

