declare module '*.ts'
declare module '@/util'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>

  interface yalertui {
  }

  export interface ComponentCustomProperties {
    $yalertui: yalertui
  }

  export interface GlobalComponents {
    // @generate-components
  }
  export default component
}

declare module 'yalertui/components'
declare module 'yalertui'
// declare module '@vue/runtime-core' {
//   interface yalertui {
//   }

//   export interface ComponentCustomProperties {
//     $yalertui: yalertui
//   }

//   export interface GlobalComponents {
//     // @generate-components
//   }
// }
