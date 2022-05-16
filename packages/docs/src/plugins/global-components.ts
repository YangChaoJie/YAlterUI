import type { ViteSSGContext } from 'vite-ssg'
export type GlobalComponentsPlugin = (ctx: ViteSSGContext) => void
export const useGlobalComponents: GlobalComponentsPlugin = ({ app }) => {
  console.log(app);
}
