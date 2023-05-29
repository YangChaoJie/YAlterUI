import { CSSProperties, StyleValue, computed, defineComponent, nextTick, onMounted, onUnmounted, onUpdated, reactive, ref, watch } from "vue";
import { scrollbarProps } from "./props";

import { YBar } from './bar'
import { addUnit } from "@/util/style";
import { useNamespace } from "@/composables/namespace";
import { debugWarn, isNumber, isObject } from "@yalert-ui/utils";
import { GAP, useProvideScrollBar } from "./hooks";

type BarInstance = InstanceType<typeof YBar>
const YScrollbar = defineComponent({
  name: 'YScrollbar',
  props: scrollbarProps(),
  setup(props, { emit }) {
    let stopResizeObserver: (() => void) | undefined = undefined
    let stopResizeListener: (() => void) | undefined = undefined

    const ns = useNamespace('scrollbar')

    const scrollbarRef = ref<HTMLDivElement>()
    const wrapRef = ref<HTMLDivElement>()
    const resizeRef = ref<HTMLElement>()

    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const barRef = ref<BarInstance>()
    const ratioY = ref(1)
    const ratioX = ref(1)

    const style = computed<StyleValue>(() => {
      const style: CSSProperties = {}
      if (props.height) style.height = addUnit(props.height)
      if (props.maxHeight) style.maxHeight = addUnit(props.maxHeight)
      return [props.wrapStyle, style]
    })

    const wrapKls = computed(() => {
      return [
        props.wrapClass,
        ns.e('wrap'),
        { [ns.em('wrap', 'hidden-default')]: !props.native },
      ]
    })

    const resizeKls = computed(() => {
      return [ns.e('view'), props.viewClass]
    })

    const handleScroll = () => {
      if (wrapRef.value) {
        barRef.value?.handleScroll(wrapRef.value)

        emit('scroll', {
          scrollTop: wrapRef.value.scrollTop,
          scrollLeft: wrapRef.value.scrollLeft,
        })
      }
    }

    function scrollTo(xCord: number, yCord?: number): void
    function scrollTo(options: ScrollToOptions): void
    function scrollTo(arg1: unknown, arg2?: number) {
      if (isObject(arg1)) {
        wrapRef.value!.scrollTo(arg1)
      } else if (isNumber(arg1) && isNumber(arg2)) {
        wrapRef.value!.scrollTo(arg1, arg2)
      }
    }

    const setScrollTop = (value: number) => {
      if (!isNumber(value)) {
        debugWarn('YScrollbar', 'value must be a number')
        return
      }
      wrapRef.value!.scrollTop = value
    }

    const setScrollLeft = (value: number) => {
      if (!isNumber(value)) {
        debugWarn('YScrollbar', 'value must be a number')
        return
      }
      wrapRef.value!.scrollLeft = value
    }

    const update = () => {
      if (!wrapRef.value) return
      const offsetHeight = wrapRef.value.offsetHeight - GAP
      const offsetWidth = wrapRef.value.offsetWidth - GAP

      const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight
      const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth
      const height = Math.max(originalHeight, props.minSize)
      const width = Math.max(originalWidth, props.minSize)

      ratioY.value =
        originalHeight /
        (offsetHeight - originalHeight) /
        (height / (offsetHeight - height))
      ratioX.value =
        originalWidth /
        (offsetWidth - originalWidth) /
        (width / (offsetWidth - width))

      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : ''
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''
    }

    watch(
      () => props.noresize,
      (noresize) => {
        if (noresize) {
          stopResizeObserver?.()
          stopResizeListener?.()
          window.removeEventListener('resize', update)
        } else {
          // ;({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update))
          // stopResizeListener = useEventListener('resize', update)

          window.addEventListener('resize', update)
        }
      },
      { immediate: true }
    )

    useProvideScrollBar(reactive({
      scrollbarElement: scrollbarRef,
      wrapElement: wrapRef,
    }))

    onMounted(() => {
      if (!props.native)
        nextTick(() => {
          update()
        })
    })
    onUnmounted(() => {
      window.removeEventListener('resize', update)
    })
    onUpdated(() => update())

    return {
      /** @description scrollbar wrap ref */
      wrapRef,
      /** @description update scrollbar state manually */
      update,
      /** @description scrolls to a particular set of coordinates */
      scrollTo,
      /** @description set distance to scroll top */
      setScrollTop,
      /** @description set distance to scroll left */
      setScrollLeft,
      /** @description handle scroll event */
      handleScroll,
    }
  }
})

export {
  YScrollbar
}
