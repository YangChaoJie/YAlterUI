// https://github.com/vuejs/devtools/issues/1295
// 解决 用 tsx devtool 不提示的问题
// Utilities
import { getCurrentInstance } from 'vue'

// Types
import type { VNode } from 'vue'

export function useRender (render: () => VNode): void {
  const vm = getCurrentInstance() as any
  vm.render = render
}
