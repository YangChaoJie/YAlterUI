import { ComponentObjectPropsOptions } from "vue"
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
