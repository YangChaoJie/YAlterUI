import { useNamespace } from "@/composables/namespace";
import { useRender } from "@/composables/render";
import { computed, defineComponent, toRefs, ref, watch, onMounted, onUnmounted } from "vue";
import type { CSSProperties } from 'vue'
import { layoutSiderProps } from "./props";
import { LeftO, RightO } from '@yalert-ui/icons'
import { isNumber } from "@yalert-ui/utils";
import { useInjectSider, useProviderSiderCollapsed } from "@/composables/provider";
import { YIcon } from "../icon";
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
      reverseArrow,
      collapsible,
      defaultCollapsed
    } = toRefs(props);
    
    const collapsed = ref(props.collapsed !== undefined ?  props.collapsed : defaultCollapsed)

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

    const toggleTrigger = () => {
      collapsed.value = !collapsed.value
      emit('update:collapsed', collapsed.value);
      emit('collapse', collapsed.value, 'clickTrigger');
    }

    function renderRriggerDom() {
      const iconObj = {
        expanded: reverseArrow.value ? <YIcon icon={RightO}></YIcon> : <YIcon icon={LeftO}></YIcon>,
        collapsed: reverseArrow.value ? <YIcon icon={LeftO}></YIcon> : <YIcon icon={RightO}></YIcon>,
      };
      const status = collapsed.value ? 'collapsed' : 'expanded';
      const defaultTrigger = iconObj[status];
      const {  trigger = slots.trigger?.() } = props
      return (
        <div class={ns.m('trigger')} onClick={toggleTrigger} style={style.value}>
          { trigger || defaultTrigger }
        </div>
      )
    }
    
    const siderHook = useInjectSider()
    const uniqueId = generateId('__y_layout_sider');

    onMounted(() => {
      siderHook.addSider(uniqueId)
    })

    onUnmounted(() => {
      siderHook.removeSider(uniqueId)
    })

    useProviderSiderCollapsed(collapsed)

    useRender(() => (
      <aside class={[ns.b(), ...classes.value]} style={style.value}>
        <div class={[ns.b('-children')]}>
          {
            slots.default?.()
          }
        </div>
        { collapsible.value ? renderRriggerDom() : null }
      </aside>
    ))
  }
})

export {
  YAsider
}
