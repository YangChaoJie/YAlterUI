import { defineComponent, defineProps, withDefaults, reactive, onMounted, nextTick, Transition, onUnmounted, watch } from "vue";
import { useNamespace } from '../../composables/namespace';
import { toastProps, ToastProps } from './props';
// styles
// import './styles/index.scss'
import { ToastOptions } from './interface';
import { YIcon } from "../icon";
import { IconMinorProps } from "../icon/interface";
import { isFunction } from "@yalert-ui/utils";
import { Renderer } from "../renderer";
const Toast = defineComponent({
  name: 'YToast',
  props: toastProps,
  expose: ['openToast'],
  setup(props, { attrs, slots, emit }) {
    const ns = useNamespace('toast')
    const state = reactive({
      visible: false,
      zIndex: 0,
      content: '',
      icon: props.icon,
      iconProps: props.iconProps as IconMinorProps,
      position: props.position,
      transition: props.transitonName,
      closable: props.closable,
      maskClose: props.maskClose,
      showMask: props.showMask,
      maskClass: props.maskClass as any,
      maskStyle: props.maskStyle as any,
      parseHtml: props.parseHtml,
      textOnly: false,
      renderer: props.renderFunc,
      onClose: null as (() => void) | null
    })
    watch(state, (val) => {
      console.log('state----------', val);
    })

    const mounted = new Promise<void>(resolve => {
      onMounted(() => {
        nextTick(resolve)
      })
    })

    onUnmounted(() => {
      console.log('组件销毁---');
      emit('destory')
    })
    // function
    async function openToast(options: ToastOptions) {
      state.zIndex = 1001
      await mounted
      state.content = options.content ?? ''
      state.icon = options.icon ?? props.icon
      state.iconProps = options.iconProps ?? props.iconProps
      state.position = options.position ?? props.position
      state.transition = options.transitionName ?? props.transitonName
      state.closable = options.closable ?? props.closable
      state.maskClose = options.maskClose ?? props.maskClose
      state.showMask = options.showMask ?? props.showMask
      state.maskClass = options.maskClass ?? props.maskClass
      state.maskStyle = options.maskStyle ?? props.maskStyle
      state.parseHtml = options.parseHtml ?? props.parseHtml
      state.renderer = options.renderer ? options.renderer : props.renderFunc
      state.onClose = options.onClose || null

      state.textOnly = !state.icon
      state.visible = true
      // console.log('ns.be' ,ns.be('wrapper'));
    }

    function cloasToast() {
      state.visible = false
    }

    function handleReset() {
      if (state.visible) return
      state.content = ''
      state.icon = props.icon
      state.iconProps = props.iconProps
      state.position = props.position
      state.transition = props.transitonName
      state.closable = props.closable
      state.maskClose = props.maskClose
      state.showMask = props.showMask
      state.maskClass = props.maskClass
      state.maskStyle = props.maskStyle
      state.parseHtml = props.parseHtml
      state.textOnly = false
      state.renderer = props.renderFunc
      state.onClose = null
    }

    function handleWrapperClick() {
      if (state.visible && state.closable) {
        cloasToast()
      }
    }

    function handleMaskClick() {
      if (state.visible && state.closable) {
        cloasToast()
      }
    }
    const renderTransMask = () => {
      if (state.showMask && state.visible) {
        return <div
          class="{ns.be('mask'), state.maskClass}"
          style={state.maskStyle}
          onClick={() => { }}
        ></div>
      }
    }

    const renderToastContent = () => {
      // console.log('ns.bem---', ns.e('wrapper'));
      if (state.visible) {
        return <div class={[ns.e('wrapper')]}>
          {
            renderToastIcon()
          }
          <div class={ns.be('content')}>
            {state.content}
          </div>
        </div>
      }
    }
    const renderToastIcon = () => {
      // state.iconProps.loading
      if (state.icon) {
        return <div class={ns.be('icon')}>
          <YIcon icon={state.icon} size={state.iconProps.size} color={state.iconProps.color} loading={(state.iconProps as IconMinorProps).loading}></YIcon>
        </div>
      }
    }
    function renderToast() {
      if (isFunction(state.renderer)) {
        return <Renderer renderer={state.renderer}></Renderer>
      } else {
        return <div
          class={[ns.b(), ns.bm(this.state.textOnly ? 'text-only' : '')]}
          style={{ zIndex: state.zIndex }}
        >
          <Transition name={ns.bem('fade')}>
            {renderTransMask()}
          </Transition>
          <Transition name={state.transition}>
            {renderToastContent()}
          </Transition>
        </div>
      }
    }
    return Object.assign({
      openToast,
      renderToast,
      renderTransMask,
      renderToastContent,
      state,
      cloasToast,
      ns
    })
  },
  render() {
    return this.renderToast()
  }
})
export {
  Toast
}
