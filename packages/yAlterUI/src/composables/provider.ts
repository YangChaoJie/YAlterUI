import { GridItemData } from '@/components/grid/props'
import { computed, inject, provide } from 'vue'
import type { Ref, InjectionKey, ComputedRef } from 'vue'
// row
export type RowContext = {
  gutter: ComputedRef<number>
}

export const RowContextKey: InjectionKey<RowContext> = Symbol('rowContextKey')
const useProviderRow = (state: RowContext) => {
  provide(RowContextKey, state)
}

const useInjectRow = () => {
  return inject(RowContextKey, {
    gutter: computed(() => 0)
  })
}

// grid
export type GridContext = {
  overflow: boolean
  displayIndexList: number[]
  cols: number,
  colGap: number
}

export const GridContextKey: InjectionKey<GridContext> = Symbol('GridContextKey')

const useProviderGrid = (state: GridContext) => {
  provide(GridContextKey, state)
}

const useInjectGrid = () => {
  return inject(GridContextKey, {
    overflow: false,
    displayIndexList: [],
    cols: 24,
    colGap: 0
  })
}

// grid collector
export type GridDataCollector = Readonly<{
  collectItemData: (index: number, itemData: GridItemData) => void
  removeItemData: (index: number) => void
}>;

export const GridDataCollectorKey: InjectionKey<GridDataCollector> =
  Symbol('GridDataCollectorInjectionKey')

const useProviderGridDataCollector = (state: GridDataCollector) => {
  provide(GridDataCollectorKey, state)
}

const useInjectGridDataCollector = () => {
  return inject(GridDataCollectorKey)
}

// sider
export type SiderCollapsed = Ref<boolean>
export const SiderCollapsedKey: InjectionKey<SiderCollapsed> = Symbol('siderCollapsed');

export interface SiderHookProvider {
  addSider?: (id: string) => void;
  removeSider: (id: string) => void;
}
export const SiderHookProviderKey: InjectionKey<SiderHookProvider> = Symbol('siderHookProvider');

const useInjectSider = () => {
  return inject(SiderHookProviderKey)
}
const useProviderSider = (state: SiderHookProvider) => {
  return provide(SiderHookProviderKey, state)
}

export { 
  useInjectRow, 
  useProviderRow, 
  useProviderGrid, 
  useInjectGrid,
  useProviderGridDataCollector,
  useInjectGridDataCollector,
  useInjectSider,
  useProviderSider
}
