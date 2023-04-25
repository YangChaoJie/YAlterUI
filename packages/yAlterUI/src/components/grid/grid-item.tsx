import { defineComponent, computed, h, toRefs, ref, watchEffect, onUnmounted } from "vue";
import { gridItemProps, GridItemData } from "./props";
import { useNamespace } from "@/composables/namespace";
import type { CSSProperties } from 'vue'
import { useInjectGrid, useInjectGridDataCollector } from "@/composables/provider";
import { useIndex } from "@/composables/useIndex";
import { useResponsiveState } from './hooks'

const YGridItem = defineComponent({
  name: 'YGridItem',
  props: gridItemProps(),
  expose: ['visible'],
  setup(props, { slots, emit }) {
    const ns = useNamespace('grid-item')
    const domRef = ref<HTMLDivElement>()
    const { computedIndex } = useIndex({
      itemRef: domRef,
      selector: `.${ns.b()}`,
    });
    const gridContext = useInjectGrid()
    const gridDataCollector = useInjectGridDataCollector()
    const { span: propSpan, offset: propOffset } = toRefs(props);
    const rSpan = useResponsiveState(propSpan, 1);
    const rOffset = useResponsiveState(propOffset, 0);
    const visible = computed(() =>
      gridContext?.displayIndexList?.includes(computedIndex.value)
    );

    const offsetStyle = computed(() => {
      const { offset, span } = itemData.value;
      const { colGap } = gridContext;
      if (offset > 0) {
        const oneSpan = `(100% - ${colGap * (span - 1)}px) / ${span}`;
        return {
          'margin-left': `calc((${oneSpan} * ${offset}) + ${colGap * offset
            }px)`,
        };
      }
      return {};
    });

    const itemData = computed(() =>
      resolveItemData(gridContext.cols, {
        ...props,
        span: rSpan.value,
        offset: rOffset.value,
      })
    );

    const columnStart = computed(() => {
      const { suffix, span } = itemData.value;
      const { cols } = gridContext;
      if (suffix) {
        return `${cols - span + 1}`;
      }
      return `span ${span}`;
    });

    const classes = computed(() => {
      const classes: string[] = []
      return classes
    })

    const style = computed(() => {
      const { span, offset } = itemData.value;
      const { colGap } = gridContext;
      const styles: CSSProperties = {}
      styles.gridColumn = `${columnStart.value} / span ${span}`
   
      if (offset > 0) {
        const oneSpan = `(100% - ${colGap * (span - 1)}px) / ${span}`;
        styles.marginLeft = `calc((${oneSpan} * ${offset}) + ${colGap * offset
        }px)`
      }
      styles.display = !visible.value || span === 0 ? 'none' : ''
      console.log('span----', visible.value, span);
      return styles
    })

    const resolveItemData = (
      cols: number,
      props: GridItemData
    ): GridItemData => {
      const originSpan = props.span ?? 1;
      const originOffset = props.offset ?? 0;
      const offset = Math.min(originOffset, cols);
      const span = Math.min(
        offset > 0 ? originSpan + originOffset : originSpan,
        cols
      );
      return {
        span,
        offset,
        suffix: 'suffix' in props ? props.suffix !== false : false,
      };
    }

    watchEffect(() => {
      if (computedIndex.value !== -1) {
        gridDataCollector?.collectItemData(computedIndex.value, itemData.value);
      }
    });

    onUnmounted(() => {
      if (computedIndex.value !== -1) {
        gridDataCollector?.removeItemData(computedIndex.value);
      }
    });

    return () => (
      h(props.tag, {
        style: style.value,
        ref: domRef,
        class: [ns.b(), ...classes.value]
      }, slots.default?.({
        overflow: gridContext.overflow
      }))
    )
  }
})

export type YGridItem = InstanceType<typeof YGridItem>

export {
  YGridItem
}
