import type { ViteSSGContext } from 'vite-ssg'
import Example from '@/components/examples/Example.vue'
import Usage from '@/components/examples/Usage.vue'
import VueFile from '@/components/examples/VueFile.vue'
import UsageExample from '@/components/examples/UsageExample.vue'
export type GlobalComponentsPlugin = (ctx: ViteSSGContext) => void
export const useGlobalComponents: GlobalComponentsPlugin = ({ app }) => {
  console.log(app);
  app.component('Usage', Usage)
  app.component('UsageExample', UsageExample)
  app.component('VueFile', VueFile)
  app.component('Example', Example)
}
