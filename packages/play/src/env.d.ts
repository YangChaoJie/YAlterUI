/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  type SvgIcon = DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    any
  >
  export default component
}
declare module '@yalert-ui/icons' {
//   // import type { DefineComponent } from 'vue'
//   type SvgIcon = DefineComponent<
//     Record<string, unknown>,
//     Record<string, unknown>,
//     any
//   >
//   export const I1: SvgIcon
}
declare module '*.ts'
