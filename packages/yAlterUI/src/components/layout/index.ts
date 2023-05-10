import { YAsider } from './aside'
import { YContent } from './content'
import { YFooter } from './foot'
import { YLayout } from './layout'
import { YHeader } from './header'

export type { LayoutProps, LayoutSiderProps } from './props'

export type YAsiderInstance = InstanceType<typeof YAsider>
export type YFooterInstance = InstanceType<typeof YFooter>
export type YContentInstance = InstanceType<typeof YContent>
export type YLayoutInstance = InstanceType<typeof YLayout>
export type YHeaderInstance = InstanceType<typeof YHeader>

export {
  YAsider,
  YContent,
  YFooter,
  YLayout,
  YHeader
}

