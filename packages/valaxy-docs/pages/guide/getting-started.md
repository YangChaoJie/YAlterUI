---
title: Getting Started
title_zh-CN: 开始
categories:
  - Getting Started
end: true
top: 100
---

## Overview {lang="en"}

## 总览 {lang="zh-CN"}

### 快速上手

通过该章节，你将了解到如何快速开始使用 Yalter UI。

> 在开始之前，你需要掌握了 [Vue3](https://v3.cn.vuejs.org/) 的正确打开方式。


### 在现存的项目

::: zh-CN

在你的项目中执行：

:::

```sh
# 使用 pnpm
pnpm add yalter-ui

# 使用 yarn
yarn add yalter-ui
```


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

