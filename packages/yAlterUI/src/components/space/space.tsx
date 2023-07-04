import { computed, CSSProperties, defineComponent, Fragment } from "vue";
import { SpaceProps, spaceProps, SpaceSize } from "./props";
import { useNamespace } from "@/composables/namespace";
import { getAllElements, isArray, isNumber } from "@yalert-ui/utils";

const YSpace = defineComponent({
  name: 'YSpace',
  props: spaceProps(),
  setup(props, { slots }) {
    const ns = useNamespace('space')

    const mergedAlign = computed(
      () => props.align ?? (props.direction === 'horizontal' ? 'center' : '')
    );

    const classes = computed(() => {
      const cls = [ns.b(), ns.m(props.direction), ns.is('wrap', props.wrap), ns.is('fill', props.fill)];
      const alignCls = ns.be('align', mergedAlign.value)
      return [...cls, alignCls]
    })

    function getMargin(size: SpaceSize) {
      if (isNumber(size)) {
        return size;
      }
      switch (size) {
        case 'mini':
          return 4;
        case 'small':
          return 8;
        case 'medium':
          return 16;
        case 'large':
          return 24;
        default:
          return 8;
      }
    }

    const getMarginStyle = (isLast: boolean): CSSProperties => {
      const style: CSSProperties = {};

      const marginRight = `${getMargin(
        isArray(props.size) ? props.size[0] : props.size
      )}px`;
      const marginBottom = `${getMargin(
        isArray(props.size) ? props.size[1] : props.size
      )}px`;

      if (isLast) {
        return props.wrap ? { marginBottom } : {};
      }

      if (props.direction === 'horizontal') {
        style.marginRight = marginRight;
      }

      if (props.direction === 'vertical' || props.wrap) {
        style.marginBottom = marginBottom;
      }

      return style;
    };

    const containerStyle = computed(() => {
      const alignment: CSSProperties = {
        alignItems: props.align,
      }
      return alignment
    })
   

    return () => {
      const children = getAllElements(slots.default?.(), true).filter((item) => item.type !== Comment)

      return (
        <div class={classes.value} style={containerStyle.value}>
          {
            children.map((child, index) => {
              const shouldRenderSplit = slots.split && index > 0
              return (
                <Fragment key={child.key ?? `item-${index}`}>
                  {
                    shouldRenderSplit && (
                      <div class={ns.e('item-split')} style={getMarginStyle(false)}>
                        { slots.split?.() }
                      </div>
                    )
                  }
                  <div class={ns.e('item')}  style={getMarginStyle(index === children.length - 1)}>
                    { child }
                  </div>
                </Fragment>
              )
            })
          }
        </div>
      )
    }
  }
})

export {
  YSpace
}

