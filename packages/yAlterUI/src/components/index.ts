import { buildComponentsInstall } from '@/util/install'
import { YButton } from './button'
import { YIcon } from './icon'
import { YRow } from './row'
import { YCol } from './col'
import { YGrid, YGridItem } from './grid'
import { YAsider, YHeader, YLayout, YContent, YFooter } from './layout'
import { YDivider } from './divider'
import { YSpace } from './space'
import { YLink } from './link'
import { YScrollbar } from './scrollbar'
const components = [
  YFooter, 
  YAsider,
  YHeader,
  YLayout,
  YContent,
  YButton, 
  YIcon,
  YRow,
  YCol,
  YGrid,
  YGridItem,
  YDivider,
  YSpace,
  YLink,
  YScrollbar
]
// global components
export const install =  buildComponentsInstall(components)
// import { useToast } from './toast';

// On-demand introduction 按需引入导出
export * from './button'
export * from './icon'
export * from './toast'
export * from './row'
export * from './col'
export * from './grid'
export * from './divider'
export * from './layout'
export * from './space'
export * from './link'
export * from './scrollbar'
