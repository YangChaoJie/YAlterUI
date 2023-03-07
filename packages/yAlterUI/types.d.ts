
declare module 'vue' {
  export interface GlobalComponents {
    Button: typeof import('yalert-ui')['YButton'],
    Icon: typeof import('yalert-ui')['YIcon'],
    YFooter: typeof import('yalert-ui')['YFooter']
  }
  interface ComponentCustomProperties {

  }
}

export { }
