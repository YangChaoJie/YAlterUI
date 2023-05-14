import { onUnmounted, Ref, isRef, computed, onMounted } from 'vue';
import { responsiveObserve } from './responsive-observe'
import type { Breakpoint } from './responsive-observe'

export function useResponsive(
  breakpoint: Breakpoint | undefined | Ref<Breakpoint | undefined>,
  callback: (checked: boolean) =>  void
) {
  const resultBreakpoint = computed(() => {
    return isRef(breakpoint) ? breakpoint.value : breakpoint
  })

  // Subscription Responsive
  let subscribeToken = ''
  onMounted(() => {
    subscribeToken = responsiveObserve.subscribe((screens, breeakpointChecked) => {
      if (!resultBreakpoint.value) return
      if (!breeakpointChecked || breeakpointChecked === resultBreakpoint.value) {
        callback(!!screens[resultBreakpoint.value])
      }
    })
  })

  // Unsubscribe
  onUnmounted(() => {
    if (subscribeToken) {
      responsiveObserve.unsubscribe(subscribeToken)
    }
  })
}
