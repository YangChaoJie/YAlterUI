import { defineComponent, ref, computed, onMounted, onBeforeUnmount, Transition } from "vue";
import { thumbProps } from "./props";
import { useNamespace } from "@/composables/namespace";
import { isClient } from "@yalert-ui/utils";
import { BAR_MAP, renderThumbStyle, useInjectScrollbar } from './hooks'
import { throwError } from "@yalert-ui/utils";
import { useRender } from "@/composables/render";
const YThumb = defineComponent({
  name: 'YThumb',
  props: thumbProps(),
  setup(props) {
    const ns = useNamespace('scrollbar')
    const instance = ref<HTMLDivElement>()
    const thumb = ref<HTMLDivElement>()

    const COMPONENT_NAME = 'Thumb'

    const scrollbar = useInjectScrollbar()
    if (!scrollbar) throwError(COMPONENT_NAME, 'can not inject scrollbar context')

    const thumbState = ref<Partial<Record<'X' | 'Y', number>>>({})
    const visible = ref(false)

    let cursorDown = false
    let cursorLeave = false
    let originalOnSelectStart:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null = isClient ? document.onselectstart : null

    const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])

    const thumbStyle = computed(() =>
      renderThumbStyle({
        size: props.size,
        move: props.move,
        bar: bar.value,
      })
    )

    const offsetRatio = computed(
      () =>
        // offsetRatioX = original width of thumb / current width of thumb / ratioX
        // offsetRatioY = original height of thumb / current height of thumb / ratioY
        // instance height = wrap height - GAP
        instance.value![bar.value.offset] ** 2 /
        scrollbar.wrapElement![bar.value.scrollSize] /
        props.ratio /
        thumb.value![bar.value.offset]
    )

    const clickThumbHandler = (e: MouseEvent) => {
      // prevent click event of middle and right button
      e.stopPropagation()
      if (e.ctrlKey || [1, 2].includes(e.button)) return

      window.getSelection()?.removeAllRanges()
      startDrag(e)

      const el = e.currentTarget as HTMLDivElement
      if (!el) return
      thumbState.value[bar.value.axis] =
        el[bar.value.offset] -
        (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction])
    }

    const startDrag = (e: MouseEvent) => {
      e.stopImmediatePropagation()
      cursorDown = true
      document.addEventListener('mousemove', mouseMoveDocumentHandler)
      document.addEventListener('mouseup', mouseUpDocumentHandler)
      originalOnSelectStart = document.onselectstart
      document.onselectstart = () => false
    }

    const mouseMoveDocumentHandler = (e: MouseEvent) => {
      console.log('mouseMoveDocumentHandler-----------', instance.value, thumb.value);
      if (!instance.value || !thumb.value) return
      if (cursorDown === false) return

      const prevPage = thumbState.value[bar.value.axis]
      if (!prevPage) return

      const offset =
        (instance.value.getBoundingClientRect()[bar.value.direction] -
          e[bar.value.client]) *
        -1
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage
      const thumbPositionPercentage =
        ((offset - thumbClickPosition) * 100 * offsetRatio.value) /
        instance.value[bar.value.offset]
      scrollbar.wrapElement[bar.value.scroll] =
        (thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize]) /
        100
    }

    const mouseUpDocumentHandler = () => {
      cursorDown = false
      thumbState.value[bar.value.axis] = 0
      document.removeEventListener('mousemove', mouseMoveDocumentHandler)
      document.removeEventListener('mouseup', mouseUpDocumentHandler)
      restoreOnselectstart()
      if (cursorLeave) visible.value = false
    }
    
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false
      visible.value = !!props.size
    }
    
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true
      visible.value = cursorDown
    }

    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart
    }

    const clickTrackHandler = (e: MouseEvent) => {
      if (!thumb.value || !instance.value || !scrollbar.wrapElement) return
    
      const offset = Math.abs(
        (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] -
          e[bar.value.client]
      )
      const thumbHalf = thumb.value[bar.value.offset] / 2
      const thumbPositionPercentage =
        ((offset - thumbHalf) * 100 * offsetRatio.value) /
        instance.value[bar.value.offset]
    
      scrollbar.wrapElement[bar.value.scroll] =
        (thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize]) /
        100
    }

    onMounted(() => {
      scrollbar.scrollbarElement.addEventListener('mousemove', mouseMoveScrollbarHandler)
      scrollbar.scrollbarElement.addEventListener('mouseleave', mouseLeaveScrollbarHandler)
    })

    onBeforeUnmount(() => {
      restoreOnselectstart()
      document.removeEventListener('mouseup', mouseUpDocumentHandler)
      scrollbar.scrollbarElement && scrollbar.scrollbarElement.removeEventListener('mousemove', mouseMoveScrollbarHandler)
      scrollbar.scrollbarElement && scrollbar.scrollbarElement.removeEventListener('mouseleave', mouseLeaveScrollbarHandler)
    })
    //
    useRender(() => (
      <Transition name={ns.b('fade')}>
        <div  style={(props.always || !visible.value) ? 'display: none' : ''}  ref={instance} class={[ns.e('bar'), ns.is(bar.value.key)]} onMousedown={clickTrackHandler}>
          <div ref={thumb} class={ns.e('thumb')} style={thumbStyle.value} onMousedown={clickThumbHandler}></div>
        </div>
      </Transition>
    ))

    return {
      scrollbar,
      visible
    }

  }
})

export {
  YThumb
}
