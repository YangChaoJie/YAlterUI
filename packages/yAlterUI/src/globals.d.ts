declare module '*.ts'
declare module '@/util'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>

  // interface yalertui {
  // }

  // export interface ComponentCustomProperties {
  //   $yalertui: yalertui
  // }

  // export interface GlobalComponents {
  //   // @generate-components
  // }
  export default component
}
// declare module '@yalert-ui/icons' {
// }

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
