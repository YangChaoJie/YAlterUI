
  declare module 'vue' {
    export interface GlobalComponents {
      YFooter: typeof import('yalert-ui')['YYFooter'],
Button: typeof import('yalert-ui')['YButton'],
Col: typeof import('yalert-ui')['YCol'],
Grid: typeof import('yalert-ui')['YGrid'],
Icon: typeof import('yalert-ui')['YIcon'],
Renderer: typeof import('yalert-ui')['YRenderer'],
Row: typeof import('yalert-ui')['YRow'],
Toast: typeof import('yalert-ui')['YToast']
    }

    interface ComponentCustomProperties {
      
    }
  }

  export {}
