import { defineComponent, ref } from "vue";
import { barProps } from "./props";
import { GAP } from "./hooks";
import { useRender } from "@/composables/render";
import { YThumb } from "./thumb";

const YBar = defineComponent({
  name: 'YBar',
  props: barProps(),
  setup(props, { expose }) {
    const moveX = ref(0)
    const moveY = ref(0)

    const handleScroll = (wrap: HTMLDivElement) => {
      console.log('-------handleScroll');
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP
        const offsetWidth = wrap.offsetWidth - GAP

        moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * props.ratioY
        moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * props.ratioX
      }
    }


    useRender(() => (
      <>
        <YThumb move={moveX.value} ratio={props.ratioX} size={props.width} always={props.always}/>
        <YThumb move={moveY.value} ratio={props.ratioY} size={props.height} always={props.always} vertical></YThumb>
      </>
    ))

    expose({
      handleScroll
    })
 
    return {
      handleScroll,
      moveX,
      moveY
    }
  }
})

export {
  YBar
}
