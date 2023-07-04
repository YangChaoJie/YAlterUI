import type { PropType, ExtractPropTypes } from 'vue'

export const inputProps = () => ({
  /**
  * @zh 绑定值
  * @en Value
  */
  modelValue: {
    type: String,
    default: ''
  },
  /**
 * @zh 类型
 * @en Value
 */
  type: {
    type: String,
    default: 'text'
  },
  /**
* @zh textarea 高度是否自适应
* @en whether textarea has an adaptive height
*/
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  /**
  * @zh textarea 高度是否自适应
  * @en 原生 autocomplete 属性
  */
  autocomplete: {
    type: String,
    default: 'off'
  },
  /**
  * @zh  指定输入值的格式 (只有当 type 是"text"时才能工作)
  * @en  format content
  */
  fromatter: {
    type: Function
  },
  /**
  * @zh  指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)
  * @en  parse content
  */
  parser: {
    type: Function
  },
  /**
   * @zh 提示文字
   * @en Prompt text
   */
  placeholder: {
    type: String
  },
  /**
   * @description native input readonly
   */
   readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * @description native input readonly
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /**
   * @description toggleable password input
   */
  showPassword: {
    type: Boolean,
    default: false,
  },
  /**
   * @description word count
   */
   showWordLimit: {
    type: Boolean,
    default: false,
  },
  /**
   * @description suffix icon
   */
  suffixIcon: {
    type: Object,
  },
  /**
   * @description prefix icon
   */
  prefixIcon: {
    type: Object,
  },
  /**
   * @description container role, internal properties provided for use by the picker component
   */
  containerRole: {
    type: String,
    default: undefined,
  },
  /**
   * @description native input aria-label
   */
  label: {
    type: String,
    default: undefined,
  },
  /**
   * @description input tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description input or texearea element style
   */
  inputStyle: {
    type: [Object, Array, String],
    default: '',
  }
})

export type InputProps = Partial<ExtractPropTypes<ReturnType<typeof inputProps>>>
