import type { ViteSSGContext } from 'vite-ssg'
import Example from '@/components/examples/Example.vue'
import Usage from '@/components/examples/Usage.vue'
import VueFile from '@/components/examples/VueFile.vue'
import UsageExample from '@/components/examples/UsageExample.vue'
import AppDivider from '@/components/app/Divider.vue'
import AppFigure from '@/components/app/Figure.vue'
import AppHeading from '@/components/app/Heading.vue'
import AppHeadline from '@/components/app/Headline.vue'
import AppTable from '@/components/app/Table.vue'
import AppLink from '@/components/app/Link.vue'
import AppImg from '@/components/app/Img.vue'
import AppSheet from '@/components/app/Sheet.vue'
export type GlobalComponentsPlugin = (ctx: ViteSSGContext) => void
export const useGlobalComponents: GlobalComponentsPlugin = ({ app }) => {
  app.component('Usage', Usage)
  app.component('UsageExample', UsageExample)
  app.component('VueFile', VueFile)
  app.component('Example', Example)
  app.component('AppDivider', AppDivider)
  app.component('AppHeading', AppHeading)
  app.component('AppHeadline', AppHeadline)
  app.component('AppTable', AppTable)
  app.component('AppFigure', AppFigure)
  app.component('AppLink', AppLink)
  app.component('AppImg', AppImg)
  app.component('AppSheet', AppSheet)
}
