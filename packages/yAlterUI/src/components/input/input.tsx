import { defineComponent, computed } from "vue";
import { inputProps } from "./props";
import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";

const YInput = defineComponent({
  name: 'YInput',
  props: inputProps(),
  setup(props, { emit }) {
    const ns = useNamespace('input')
    const computedValue = computed(() => props.modelValue ?? '');

    const handleInput = (e) => {
      const { value } = e.target as HTMLInputElement;
      updateValue(value)
    }
    const updateValue = (value: string) => {
      emit('update:modelValue', value);
    }
    
    useRender(() => (
      <div class={ns.b()}>
        <input value={computedValue.value} onInput={handleInput}></input>
      </div>
    ))
  }
})


export {
  YInput
}
