import { defineComponent, toRefs, type ExtractPropTypes, type PropType } from 'vue';
import { ButtonType, Size } from './interface';
import { useButtonGroupProvider } from '@/composables/provider';
import { useRender } from '@/composables/render';
import { useNamespace } from '@/composables/namespace';

export const buttonGroupProps = () => ({
  size: {
    type: String as PropType<Size>,
  },
  type: {
    type: String as PropType<ButtonType>
  },
  disabled: {
    type: Boolean
  }
});

export type ButtonGroupProps = Partial<ExtractPropTypes<ReturnType<typeof buttonGroupProps>>>;

const YButtonGroup = defineComponent({
  name: 'YButtonGroup',
  props: buttonGroupProps(),
  setup(props, { slots } ) {
    const { type, size } = toRefs(props);

    const ns = useNamespace('button')
    useButtonGroupProvider({
      size: size.value,
      type: type.value,
      disabled: false
    })

    useRender(() =>(
      <div class={ns.b('group')}>
        {
          slots.default()
        }
      </div>
    ))
  }
})

export default YButtonGroup
