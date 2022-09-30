declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>

  interface yalert-ui {
  }

  export interface ComponentCustomProperties {
    $yalert-ui: yalert-ui
  }

  export interface GlobalComponents {
    // @generate-components
  }
  export default component
}

