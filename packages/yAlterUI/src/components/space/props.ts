import type { ExtractPropTypes, PropType } from 'vue'
type SpaceSize = number | 'mini' | 'small' | 'medium' | 'large';
// export interface SpacePropsVue {
//   direction?: string
// }


export const spaceProps = () => ({
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal'
  },
  /**
   * @zh 对齐方式
   * @en Alignment
   * @values 'start', 'end', 'center', 'baseline'
   */
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
  },
      /**
     * @zh 间距大小，支持分别制定横向和竖向的间距
     * @en Spacing size, support for setting horizontal and vertical spacing separately
     */
      size: {
        type: [Number, String, Array] as PropType<
          number | 'mini' | 'small' | 'medium' | 'large' | [SpaceSize, SpaceSize]
        >,
        default: 'small',
      },
      /**
       * @zh 环绕类型的间距，用于折行的场景。
       * @en The spacing of the wrapping type, used in the scene of wrapping.
       */
      wrap: {
        type: Boolean,
      },
      /**
       * @zh 充满整行
       * @en fill the block
       * @version 2.11.0
       */
      fill: {
        type: Boolean,
      },
})

export type SpaceProps = Partial<ExtractPropTypes<ReturnType<typeof spaceProps>>>

