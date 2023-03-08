import {
  ComponentObjectPropsOptions, App,
  ComputedRef,
  PropType,
  Ref,
  CSSProperties,
} from "vue"
import { reactive, computed, watch, provide, inject, unref } from 'vue'
import { mergeObjects } from '@yalert-ui/utils';
import type { ButtonProps, IconProps } from '@/components'
import { ToastProps } from "@/components/toast/props";
/**
 * Use to deconstruct advanced types
 */
type Expand<T> = T extends unknown ? { [K in keyof T]: T[K] } : never
export function buildProps<T extends ComponentObjectPropsOptions>(props: T) {
  const common = {
    inherit: Boolean
  }

  return Object.freeze({ ...common, ...props }) as Expand<typeof common & T>
}

export interface PropsOptions {
  default?: Record<string, any>,
  button?: ButtonProps,
  icon?: IconProps
  toast?: ToastProps
}

export const PROVIDED_PROPS = '__yal-provided-props'
type MaybeRef<T> = T | Ref<T>
export function configProps<T>(props: MaybeRef<T>, app?: App) {
  if (app) {
    app.provide(
      PROVIDED_PROPS,
      computed(() => unref(props))
    )
  } else {
    const upstreamProps = inject<ComputedRef<Record<string, any>> | null>(PROVIDED_PROPS, null)
    const providedProps = computed(() => {
      if (!upstreamProps?.value) {
        return unref(props)
      }

      return mergeObjects(upstreamProps.value, unref(props) as any)
    })

    provide(PROVIDED_PROPS, providedProps)
  }
}
