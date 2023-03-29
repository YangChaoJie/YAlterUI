# YAlterUI

[![NPM version](https://img.shields.io/npm/v/yalert-ui?color=a1b858&label=)](https://www.npmjs.com/package/vue-template-promise)

UI library in Vue. Useful for company vue page, etc.

[**Why?**](#why)

写一套组件库，提高自己编程技巧
## Features

- ⚡ Composition Api, good performance base
- 🚤 Support SSR
- 🦾 **TypeScript** - full type safety via generic type
- 👀 Close to business code arrangement, low threshold for source code reading
- 🚀 Lightweight
- 🎨 Support CSS variable, built-in dark theme
### use

#### 全局引入
```js
import { install } from 'yalert-ui'
const app = createApp(App);;
app.use(install);

<template>
  <y-button size="small">small</y-button>
  <y-button size="large">large</y-button>
</template>
```

#### 按需加载
``` js
import Components from 'unplugin-vue-components/vite'
import { YalertUIResolver } from '@yalert/uitils'
import AutoImport from 'unplugin-auto-import/vite'
plugins: [
    vue(), 
    Components({
      resolvers: [
        YalertUIResolver()
      ]
    })
    AutoImport({
      resolvers: [
        YalertUIResolver()
      ]
    })
]
  
```
### 手动引入
```
import 'yalert-ui/css/button.css'
import { Button } from 'yalert-ui'
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
