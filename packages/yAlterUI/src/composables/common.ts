import { computed, getCurrentInstance, unref } from 'vue';
import type { ComputedRef, Ref } from 'vue'
type MaybeRef<T> = T | Ref<T>
export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance()!
  return computed(() => (vm.proxy?.$props as any)[name] ?? undefined)
}

export const useDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled')
  // const form = inject(formContextKey, undefined)
  // return computed(
  //   () => disabled.value || unref(fallback) || form?.disabled || false
  // )
  return computed(() => disabled.value || unref(fallback))
}
