import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import { computed, defineComponent, toRefs, ref, watch, onMounted, onUnmounted } from "vue";
import type { CSSProperties } from 'vue'
import { layoutSiderProps } from "./props";
import { LeftO, RightO } from '@yalert-ui/icons'
import { isNumber } from "@yalert-ui/utils";
import { useInjectSider } from "@/composables/provider";
const generateId = (() => {
  let i = 0;
  return (prefix = '') => {
    i += 1;
    return `${prefix}${i}`;
  };
})();
const YAsider = defineComponent({
  props: layoutSiderProps(),
  name: 'YAsider',
  inheritAttrs: false,
  setup(props, { slots, emit }) {
    const ns = useNamespace('aside')
    const {
      width,
      reverseArrow,
      trigger = slots.trigger?.(),
      collapsible,
      collapsedWidth,
      collapsed,
      defaultCollapsed
    } = toRefs(props);

    // const collapsed = ref(() => (props.collapsed !== undefined ?  props.collapsed : defaultCollapsed)) 

    // Width calculation
    const siderWidth = computed(() => {
      const { width, collapsedWidth } = props;
      const rawWidth = collapsed.value ? collapsedWidth : width;
      return isNumber(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    });

    const style = computed(() => {
      return props.width ? (ns.cssVarBlock({
        width: siderWidth.value
      }) as CSSProperties) : {}
    })

    const classes = computed(() => {
      const classes: string[] = []
      classes.push(ns.is('collapsed', collapsed.value))
      classes.push(ns.b('has-trigger'))
      return classes
    })

    watch(
      () => props.collapsed,
      () => {
        collapsed.value = !!props.collapsed;
      },
    );

    const renderTriggerDom = () => {
      const iconObj = {
        expanded: reverseArrow.value ? <RightO /> : <LeftO />,
        collapsed: reverseArrow.value ? <LeftO /> : <LeftO />,
      };
      const status = collapsed.value ? 'collapsed' : 'expanded';
      const defaultTrigger = iconObj[status];
      const triggerDom =
        (
          <div class={ns.m('trigger')} onClick={toggleTrigger} style={style.value}>
            <span>3333</span>
            { trigger || defaultTrigger }
          </div>
        )
      return triggerDom
    }

    const toggleTrigger = () => {
      collapsed.value = !collapsed.value
      emit('update:collapsed', collapsed.value);
      emit('collapse', collapsed.value, 'clickTrigger');
    }

    const siderHook = useInjectSider()
    const uniqueId = generateId('__y_layout_sider');

    onMounted(() => {
      siderHook.addSider(uniqueId)
    })

    onUnmounted(() => {
      siderHook.removeSider(uniqueId)
    })

    useRender(() => (
      <aside class={[ns.b(), ...classes.value]} style={style.value}>
        <div class={[ns.b('-children')]}>
          {
            slots.default?.()
          }
        </div>
        { collapsible ? renderTriggerDom() : null }
      </aside>
    ))
  }
})

export {
  YAsider
}
