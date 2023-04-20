
  declare module 'vue' {
    export interface GlobalComponents {
      Button: typeof import('yalert-ui')['YButton'],
Icon: typeof import('yalert-ui')['YIcon'],
Renderer: typeof import('yalert-ui')['YRenderer'],
Row: typeof import('yalert-ui')['YRow'],
Toast: typeof import('yalert-ui')['YToast'],
YFooter: typeof import('yalert-ui')['YYFooter']
    }

    interface ComponentCustomProperties {
      
    }
  }

  export {}
