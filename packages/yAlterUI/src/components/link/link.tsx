import { defineComponent } from "vue";
import { linkProps } from "./props";
import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import { YIcon } from "../icon";

export default defineComponent({
  name: 'YLink',
  props: linkProps(),
  setup(props, { emit, slots }) {
    const ns = useNamespace('link')

    function handleClick(event: MouseEvent) {
      if (!props.disabled) emit('click', event)
    }
    
    function renderIcon () {
      if (props.icon) {
        return <YIcon icon={props.icon as Object}></YIcon>
      }
      
      if (slots.icon) {
        return slots.icon;
      }
    }

    useRender(() => (
      <a href={props.disabled || !props.href ? undefined : props.href} 
      class={[ns.b(), ns.m(props.type), ns.is('disabled', props.disabled), ns.is('underline', props.underline && !props.disabled)]}
      onClick={handleClick}
      >
        {
          renderIcon()
        }
        {
          <span class={ns.e('inner')}>{ slots.default() }</span>
        }
      </a>
    ))
  }
})
