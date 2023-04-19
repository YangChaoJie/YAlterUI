import { defineComponent } from 'vue';
import { rowProps } from './props';
import { initDefaultProps } from '@/util/props';

const YRow = defineComponent({
  name: 'YRow',
  props: initDefaultProps(rowProps(), {
    justify: 'space-between'
  }),
  setup(props, { slots, emit }) {
    return () => (
      <div>{ props.justify }1</div>
    )
  }
})

export type YRow = InstanceType<typeof YRow>

export {
  YRow
}
