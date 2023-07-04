// Styles
// import './styles/index.scss'
import { defineComponent, PropType, computed } from "vue";
import { Size, ButtonType, Shape } from "./interface";
import { useNamespace } from '@/composables/namespace';
import { useDisabled } from '@/composables/common';
import { YIcon } from '../icon';
import { Loading } from '@yalert-ui/icons'
import { parseColorToRgba, mixColor, isDark } from '@yalert-ui/utils'
import type { ExtractPropTypes } from 'vue'
import { usenIjectButtonGroup } from "@/composables/provider";
const buttonProps = {
  size: String as PropType<Size>,
  disabled: Boolean,
  type: {
    type: String as PropType<ButtonType>,
    default: ''
  },
  text: Boolean,
  link: Boolean,
  loading: Boolean,
  shape: {
    type: String as PropType<Shape>,
    default: ''
  },
  icon: {
    type: Object,
    default: null
  },
  color: String,
  dashed: {
    type: Boolean,
    default: false
  },
  borderd: {
    type: Boolean,
    default: true
  },
  loadingIcon: {
    type: Object,
    default: () => Loading,
  }
}

const YButton = defineComponent({
  name: 'YButton',
  props: buttonProps,
  setup(props, { slots, emit }) {
    const groupContext = usenIjectButtonGroup()

    const disabled = useDisabled()
    const size = computed(() => props.size || groupContext.size)
    const type = computed(() => props.type || groupContext.type)
    const shape = computed(() => props.shape)
    const ns = useNamespace('btn')
    const buttonStyle = useButtonCustomStyle(props)
    const handleClick = (e: MouseEvent) => {
      if (disabled || props.loading) return
      emit('click', e)
    }
    // function
    function renderLoadingIcon() {
      return (
        <div>
          {
            slots.loading ? (slots.loading()) : (<YIcon icon={props.loadingIcon} class={ns.is('loading')}></YIcon>)
          }
        </div>
      )
    }

    function renderSingleIcon() {
      return props.loading ?
        (renderLoadingIcon()) :
        (
          props.icon || slots.icon ?
            (
              slots.icon ? slots.icon() : <YIcon icon={props.icon}></YIcon>
            ) :
            (null)
        )
    }

    function useButtonCustomStyle(props: ButtonProps) {
      const ns = useNamespace('btn')
      // calculate hover & active color by custom color
      // only work when custom color
      return computed(() => {
        let styles: Record<string, string> = {}

        const buttonColor = props.color
        // const rootStyle = isClient ? getComputedStyle(document.documentElement) : null
        const black = parseColorToRgba('#000')
        const white = parseColorToRgba('#fff')
        const baseColor = parseColorToRgba(props.color)
        if (buttonColor) {
          // const color = parseColorToRgba(props.color)
          const activeBgColor = mixColor(white, baseColor, 0.2).toString()

          if (props.text) {
            styles = ns.cssVarBlock({
              'bg-color': mixColor(white, baseColor, 0.9).toString(),
              'text-color': buttonColor,
              'border-color': mixColor(white, baseColor, 0.5).toString(),
              'hover-text-color': `var(${ns.cssVarName('color-white')})`,
              'hover-bg-color': buttonColor,
              'hover-border-color': buttonColor,
              'active-bg-color': activeBgColor,
              'active-text-color': `var(${ns.cssVarName('color-white')})`,
              'active-border-color': activeBgColor,
            })

            if (disabled.value) {
              styles[ns.cssVarBlockName('disabled-bg-color')] = mixColor(white, baseColor, 0.9).toString(),
                styles[ns.cssVarBlockName('disabled-text-color')] = mixColor(white, baseColor, 0.5).toString(),
                styles[ns.cssVarBlockName('disabled-border-color')] = mixColor(white, baseColor, 0.8).toString()
            }
          } else {
            const hoverBgColor = mixColor(white, baseColor, 0.3).toString()
            
            const textColor = isDark(baseColor) ? `var(${ns.cssVarName('color-white')})` : `var(${ns.cssVarName('color-black')})` 
            styles = ns.cssVarBlock({
              'bg-color': buttonColor,
              'text-color': textColor,
              'border-color': buttonColor,
              'hover-bg-color': hoverBgColor,
              'hover-text-color': textColor,
              'hover-border-color': hoverBgColor,
              'active-bg-color': activeBgColor,
              'active-border-color': activeBgColor,
            })

            if (disabled.value) {
              // const disabledButtonColor = mixColor(black, baseColor, 0.5).toString()
              // styles[ns.cssVarBlockName('disabled-bg-color')] = disabledButtonColor
              // styles[ns.cssVarBlockName('bg-color')] = disabledButtonColor
              // styles[ns.cssVarBlockName('disabled-text-color')] = `var(${ns.cssVarName('color-white')})`
              // styles[ns.cssVarBlockName('border-color')] =
              //   disabledButtonColor
            }
          }
        }

        return styles
      })
    }

    return () => (
      <button
        class={[
          ns.b(), ns.m(size.value),
          ns.is('disabled', disabled.value),
          ns.m(type.value),
          ns.is('text', props.text),
          ns.is('link', props.link),
          ns.is('circle', shape.value === 'circle'),
          ns.is('round', shape.value === 'round'),
          ns.m(props.dashed ? 'dashed' : '')
        ]}
        disabled={disabled.value || undefined}
        onClick={handleClick}
        style={buttonStyle.value}
      >
        {renderSingleIcon()}
        {slots.default ? slots.default() : null}
      </button>
    )
  }
})
export type Button = InstanceType<typeof YButton>
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export {
  YButton
}
