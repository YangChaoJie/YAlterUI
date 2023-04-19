import { buildComponentsInstall } from '@/util/install'
import { YFooter } from './YFooter'
import { YButton } from './button'
import { YIcon } from './icon'
import { YRow } from './row'
const components = [
  YFooter, 
  YButton, 
  YIcon,
  YRow
]
// global components
export const install =  buildComponentsInstall(components)
// import { useToast } from './toast';

// On-demand introduction 按需引入导出
export * from './YFooter'
export * from './button'
export * from './icon'
export * from './toast'
export * from './row'
