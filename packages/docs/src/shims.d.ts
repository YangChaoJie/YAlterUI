declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'virtual:examples' {
  import type { Component } from 'vue'

  export function getExample (name: string): Promise<{
    component: Component
    source: string
  }>
}
