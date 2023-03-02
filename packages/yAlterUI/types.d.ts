declare module 'vue' {
  export interface GlobalComponents {
    YButton: typeof import('yalert-ui')['YButton'],
    YIcon: typeof import('yalert-ui')['YIcon']
  }
}
export {}
