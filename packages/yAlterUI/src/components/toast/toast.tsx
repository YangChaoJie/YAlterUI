import { defineComponent, defineProps, withDefaults, reactive, onMounted, nextTick, Transition } from "vue";
import { useNamespace } from '../../composables/namespace';
import { toastProps } from './props';
// styles
import './styles/index.scss'
import { ToastOptions } from './interface';
export default defineComponent({
  name: 'YToast',
  props: toastProps(),
  expose: ['openToast'],
  setup(props, { attrs, slots }) {
    const ns = useNamespace('toast')
    console.log('prps---', props.bodyWidth);

    const state = reactive({
      visible: false,
      zIndex: 0,
      content: '',
      icon: props.icon,
      iconProps: props.iconProps as any,
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

    const mounted = new Promise<void>(resolve => {
      onMounted(() => {
        nextTick(resolve)
      })
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
      state.renderer = options.render ? options.renderer : props.renderFunc
      state.onClose = options.onClose || null

      state.textOnly = !state.icon
      state.visible = true
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
    function renderTransMask() {
      if (state.showMask && state.visible) {
        return <div
          class="{ns.be('mask'), state.maskClass}"
          style={state.maskStyle}
          onClick={() => { }}
        ></div>
      }
    }
    function renderToastContent() {
      if (state.visible) {
        return <div>
          {state.content}
        </div>
      }
    }
    return Object.assign({
      openToast,
      renderTransMask,
      renderToastContent,
      state,
      ns
    })

    // return () => {
    //   <div
    //     class={[ns.b(), ns.bm(state.textOnly ? 'text-only' : '')]}
    //     style={{ zIndex: state.zIndex }}
    //   >
    //     <Transition name={ns.bem('fade')}>
    //       {renderTransMask()}
    //     </Transition>
    //     <Transition name={state.transition}>
    //       { renderToastContent() }
    //     </Transition>
    //   </div>
    // }
  },
  render() {
    return (
      <div
        class={[this.ns.b(), this.ns.bm(this.state.textOnly ? 'text-only' : '')]}
        style={{ zIndex: this.state.zIndex }}
      >
        123232345
        <Transition name={this.ns.bem('fade')}>
          {this.renderTransMask()}
        </Transition>
        <Transition name={this.state.transition}>
          {this.renderToastContent()}
        </Transition>
      </div>
    )
  }
})
// export type Toast = InstanceType<typeof Toast>
// export {
//   Toast
// }
