import { ref, computed, Ref, onUnmounted, onMounted } from 'vue';
import { isNumber, isObject } from '@yalert-ui/utils';
import {
  responsiveObserve,
  responsiveArray,
  ScreenMap,
} from '@yalert-ui/hooks';
import { ResponsiveValue } from './props';

function isResponsiveValue(
  val: number | ResponsiveValue
): val is ResponsiveValue {
  return isObject(val);
}

export function useResponsiveState(
  val: Ref<number | ResponsiveValue>,
  defaultVal: number,
  fallbackToXs = false
) {
  const screens = ref<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  });
  const result = computed(() => {
    let res = defaultVal;
    if (isResponsiveValue(val.value)) {
      for (let i = 0; i < responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if (
          (screens.value[breakpoint] ||
            (breakpoint === 'xs' && fallbackToXs)) &&
          val.value[breakpoint] !== undefined
        ) {
          res = val.value[breakpoint] as number;
          break;
        }
      }
    } else {
      res = val.value;
    }
    return res;
  });

  let subscribeToken = '';

  onMounted(() => {
    subscribeToken = responsiveObserve.subscribe((screensVal) => {
      if (isResponsiveValue(val.value)) {
        screens.value = screensVal;
      }
    });
  });

  onUnmounted(() => {
    if (subscribeToken) {
      responsiveObserve.unsubscribe(subscribeToken);
    }
  });

  return result;
}

export function useResponsiveValue(
  props: Ref<{
    val: number;
    key: string;
    xs?: number | { [key: string]: any };
    sm?: number | { [key: string]: any };
    md?: number | { [key: string]: any };
    lg?: number | { [key: string]: any };
    xl?: number | { [key: string]: any };
    xxl?: number | { [key: string]: any };
  }>
) {
  const value = computed(() => {
    const { val, key, xs, sm, md, lg, xl, xxl } = props.value;
    if (!xs && !sm && !md && !lg && !xl && !xxl) {
      return val;
    }
    const result: ResponsiveValue = {};
    responsiveArray.forEach((breakpoint) => {
      const config = props.value[breakpoint];
      if (isNumber(config)) {
        result[breakpoint] = config;
      } else if (isObject(config) && isNumber(config[key])) {
        result[breakpoint] = config[key];
      }
    });
    return result;
  });
  return value;
}
