// TO DO 栅格布局
import type { GridItemProps, GridProps } from './props'
import { YGrid } from './grid'
import { YGridItem } from './grid-item'
export type { GridItemProps, GridProps }
export { YGrid, YGridItem }

export type YGridInstance = InstanceType<typeof YGrid>
export type YGridItemInstance = InstanceType<typeof YGridItem>
