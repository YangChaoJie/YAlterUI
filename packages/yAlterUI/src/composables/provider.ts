
import { computed, inject, provide } from 'vue'
import type { Ref, InjectionKey, ComputedRef } from 'vue'
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

export { useInjectRow, useProviderRow }
