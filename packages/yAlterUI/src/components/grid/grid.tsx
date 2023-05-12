import { defineComponent, computed, h, toRefs, ref, watchEffect, reactive } from "vue";
import type { CSSProperties } from 'vue'
import { GridItemData, gridProps } from "./props";
import { useNamespace } from "@/composables/namespace";
import { useResponsiveState } from "./hooks";
import { useProviderGrid, useProviderGridDataCollector } from "@/composables/provider";

const YGrid = defineComponent({
  name: 'YGrid',
  props: gridProps(),
  setup(props, { emit, slots }) {
    const ns = useNamespace('grid')
    const {
      cols: propCols,
      rowGap: propRowGap,
      colGap: propColGap,
      collapsedRows,
      collapsed,
    } = toRefs(props);
    
    const cols = useResponsiveState(propCols, 24);
    const colGap = useResponsiveState(propColGap, 0);
    const rowGap = useResponsiveState(propRowGap, 0);

    const itemDataMap = reactive<Map<number, GridItemData>>(new Map());
    const itemDataList = computed(() => {
      const list: GridItemData[] = [];
      for (const [index, itemData] of itemDataMap.entries()) {
        list[index] = itemData;
      }
      return list;
    });

    const gridContext = reactive<{
      overflow: boolean;
      displayIndexList: number[];
      cols: number;
      colGap: number;
    }>({
      overflow: false,
      displayIndexList: [],
      cols: cols.value,
      colGap: colGap.value,
    });

    const setItemVisible = ({
      cols,
      collapsed,
      collapsedRows,
      itemDataList,
    }: {
      cols: number;
      collapsed: boolean;
      collapsedRows: number;
      itemDataList: GridItemData[];
    }) => {
      let overflow = false;
      let displayIndexList: number[] = [];

      function isOverflow(span: number) {
        return Math.ceil(span / cols) > collapsedRows;
      }

      if (collapsed) {
        let spanSum = 0;

        for (let i = 0; i < itemDataList.length; i++) {
          if (itemDataList[i] && itemDataList[i].suffix) {
            spanSum += itemDataList[i].span;
            displayIndexList.push(i);
          }
        }

        if (!isOverflow(spanSum)) {
          let current = 0;
          while (current < itemDataList.length) {
            const item = itemDataList[current];

            if (!item.suffix) {
              spanSum += item.span;

              if (isOverflow(spanSum)) {
                break;
              }

              displayIndexList.push(current);
            }

            current++;
          }
        }

        overflow = itemDataList.some(
          (item, index) => !item.suffix && !displayIndexList.includes(index)
        );
      } else {
        displayIndexList = itemDataList.map((_, index) => index);
      }
      return {
        overflow,
        displayIndexList,
      };
    }

    watchEffect(() => {
      gridContext.cols = cols.value;
      gridContext.colGap = colGap.value;
    });
    watchEffect(() => {
      const displayInfo = setItemVisible({
        cols: cols.value,
        collapsed: collapsed.value,
        collapsedRows: collapsedRows.value,
        itemDataList: itemDataList.value,
      });
      
      gridContext.overflow = displayInfo.overflow;
      gridContext.displayIndexList = displayInfo.displayIndexList;
    });

    useProviderGrid(gridContext)

    useProviderGridDataCollector(
      {
        collectItemData(index, itemData) {
          itemDataMap.set(index, itemData);
        },
        removeItemData(index) {
          itemDataMap.delete(index);
        },
      }
    )

    const classes = computed(() => {
      const classes: string[] = []
      return classes
    })

    const style = computed(() => {
      const styles: CSSProperties = {}
      styles.gap = `${rowGap.value}px ${colGap.value}px`
      styles.gridTemplateColumns = `repeat(${cols.value}, minmax(0px, 1fr))`
      return styles
    })

    return () => (
      h(props.tag, {
        style: style.value,
        class: [ns.b(), ...classes.value]
      }, slots.default?.())
    )
  }
})

export {
  YGrid
}
