---
title: Learning materials
title_zh-CN: 学习总结
categories:
  - Getting Started
end: false
top: 99
---

::: zh-CN
发布组件库 npm pubilsh
:::

::: en
Publishing component library
:::

### 项目工程结构
1. 通过 pnpm  workspace 拆分 多个 packages 包， 每个包单独构建个发布，包之间也可以相互依赖。每个的packages 的 依赖包都会在统一的 node_modules 里
       [pnpm monorepo](https://zhuanlan.zhihu.com/p/373935751)

> 使用 **pnpm** 管理 monorepo 的好处是，它能够将重复的依赖项仅仅安装一次，并在多个工作区之间共享。这可以大大减少项目的依赖项数量和总体安装时间。此外，**pnpm** 还提供了一些专门用于 monorepo 管理的命令，例如 **pnpm recursive**，可以在整个 monorepo 或特定工作区中执行命令。
> **pnpm** 提供了一些专门用于 monorepo 管理的命令，常用的有以下几个：
> 1. **pnpm recursive install**：在整个 monorepo 中安装所有工作区的依赖包。
> 2. **pnpm recursive update**：在整个 monorepo 中更新所有工作区的依赖包。
> 3. **pnpm recursive add**\<package>**：向所有工作区添加一个依赖包。
> 5. **pnpm recursive run \<command>**：在所有工作区中执行一个命令。
> 6. **pnpm recursive test**：在所有工作区中运行测试。
>
> 
这些命令可以在整个 monorepo 或特定工作区中执行，并支持递归地执行子工作区中的命令。使用这些命令可以大大简化 monorepo 管理，并提高开发效率。


> **--filter** 选项是 **pnpm** 的一个高级特性，它可以在 monorepo 环境中快速安装或更新特定依赖包，而不必安装整个依赖树中的所有依赖项。这个选项可以接受多个参数，用于指定要安装或更新的包的名称、路径或模式。

1. lerna 、pnpm workspace
```vue
lerna is the original monorepo tool for TypeScript/JavaScript. 
lerna run test --scope=header
$ lerna clean --scope=feu-ui
pnpm add express --filter @monorepo/http
❯ pnpm add --filter shared-ui react
❯ pnpm add --filter shared-ui typescript -D
pnpm --filter icons build
```

> **-r** 和 **-w** 的区别在于作用的范围不同。**-r** 会作用于整个依赖树，而 **-w** 只会作用于当前项目的依赖项。

[https://juejin.cn/post/7055281852789047304](https://juejin.cn/post/7055281852789047304)
[https://zhuanlan.zhihu.com/p/422740629](https://zhuanlan.zhihu.com/p/422740629)
#### common
:::info

- **hooks **  通用的交互逻辑抽象
:::
:::info

- **icons **    组件库icon
:::
:::info

- **utils      **通用方法
:::
#### docs
:::info
组件文档
:::
#### play
:::info
组件库演练场
:::
#### yAlterUi
:::info
核心组件库
:::
### 组件库文档编写（docs）
1. **vite-plugin-pages**
> vite插件，可以读取文件夹下的vue文件，自动生成vue-router的路由信息，这样以后每次有新的vue页面增加，都不用去更改vue-router的路由信息代码了，减少了工作量

2. **vite-plugin-md**
> Markdown for Vite
> - Use Markdown as Vue components
> - Use Vue components in Markdown

  3.** vite-plugin-vue-markdown**
>      A lite version of [vite-plugin-md](https://github.com/antfu/vite-plugin-md).

  **4. vite-ssg**
>      Static-site generation for Vue 3 on Vite.

  **5. p5.js 钟表**
[https://p5js.org/examples/input-clock.html](https://p5js.org/examples/input-clock.html)
**  6. vitepress/nuxt**
> 目前vite 相关版本迭代较快，docs 文档需要重构


valaxy-docs
目前 press 主题有问题，需要本地引用
pnpm link ./valaxy-theme-press
pnpm link ./packages/valaxy-docs/valaxy-theme-press 
[https://valaxy.site/](https://valaxy.site/)
### play 演练场
:::info
  TODO: 做成可搜索是组件，方便演示和debugger
:::
### 组件ui 搭建 

- 组件(SFC + TSX)
- 布局 scss （bem）
- [https://juejin.cn/post/6876368084974698503](https://juejin.cn/post/6876368084974698503)
### 组件测试（ vitest）
### [https://cn.vitest.dev/guide/#%E9%85%8D%E7%BD%AE-vitest](https://cn.vitest.dev/guide/#%E9%85%8D%E7%BD%AE-vitest)
lerna run test --scope yalertui --stream
```powershell
/// 单独测试一个组件 文件
pnpm test:lib button
/// 全量测试组件
pnpm test:lib
/// 启动测试，监听文件变化
pnpm test:dev
/// 查看测试覆盖率
pnpm test:cover

```
### 组件打包

入口文件
"m
```json
"main": "lib/cjs/components/index.cjs", // cjs 全量引入
"module": "lib/es/components/index.mjs" // esm 按需引入
"./components/*":"./lib/components/*/index.mjs"

//////
"main": "./lib/yalter-ui.umd.cjs",
"module":"./lib/yalter-ui.js",
"import":"./lib/yalter-ui.es.js",
  "exports":{
    ".":{
      "import":"./src/components/index.ts",
      "require":"./lib/yalter-ui.umd.js"
    }
  },
```
  

++++++++++++++++++++++

1. 打包结构 rollup + terser

2. [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts/tree/main) + vite gulp css

vite cssCodeSplit true 会把css 文件 单独分割到
cssCodeSplit

1. [unbuild](https://github.com/unjs/unbuild)(rollup) + esbuild js gulp css处理 （element-plus处理方式）

==================================
css 打包方案

- 样式和逻辑分离
- 样式和逻辑关联
- 样式和逻辑关联

[https://blog.pig1024.me/posts/62fa1f4e8631e51c9414da21](https://blog.pig1024.me/posts/62fa1f4e8631e51c9414da21)
[https://www.cnblogs.com/shapeY/p/14659660.html](https://www.cnblogs.com/shapeY/p/14659660.html)
[https://juejin.cn/post/7136467262826872868](https://juejin.cn/post/7136467262826872868)
类型文件 
`"build:types": "vue-tsc --declaration --emitDeclarationOnly --outDir dist/types",`

- **按需引入样式文件 ** ../style.ts

**支持全局导入编写**
利用vue的插件机制进行全局注册组件
```typescript
// global components
export const install =  buildComponentsInstall(components)
// 引入
import { install } from 'yalert-ui'
const app = createApp(App);
app.use(createPlayRouter());
app.use(install);
```
#### 按需引入
```typescript
// On-demand introduction 按需引入导出
export * from './YFooter'
export * from './button'
export * from './icon'
export * from './toast'

// 引入
import { YFooter, YButton, YIcon, useToast } from 'yalert-ui';
```


**自动导入解析器**
```typescript
import { YalertUIResolver } from '@yalert-ui/utils'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    Components({
      resolvers: [
        YalertUIResolver()
      ]
    })
  ]
})

  <Icon><XEditPen></XEditPen></Icon>
  <y-button>yy</y-button>
```
#### 实现全局组件在代码编辑器中的智能提示
##### vscode.volar
在项目中声明 types.d.ts 文件 genTypes
```typescript
declare module 'vue' {
  export interface GlobalComponents {
    YButton: typeof import('yalert-ui')['YButton'],
    YIcon: typeof import('yalert-ui')['YIcon']
  }
}
export {}
```
参考
https://juejin.cn/post/7138308389595152420
### 主题定制

1. main.css 根伪类

![image.png](https://cdn.nlark.com/yuque/0/2023/png/379266/1677830100209-5477dbc0-f207-44f2-9645-628596f5dcfb.png#averageHue=%23fdf9f7&clientId=u47da6393-3f89-4&from=paste&height=691&id=u90b25192&name=image.png&originHeight=691&originWidth=785&originalType=binary&ratio=1&rotation=0&showTitle=false&size=119803&status=done&style=none&taskId=u7f1f588a-49bb-4d74-a7bb-eead824dd5f&title=&width=785)
参考
[https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
[https://element-plus.org/zh-CN/guide/theming.html#%E9%80%9A%E8%BF%87-scss-%E5%8F%98%E9%87%8F](https://element-plus.org/zh-CN/guide/theming.html#%E9%80%9A%E8%BF%87-scss-%E5%8F%98%E9%87%8F)
##### 定制暗黑模式
```vue
import 'yalter-ui/styles/dark/css-vars.scss'
const rootCls = document.documentElement.classList
const isDark = ref(rootCls && rootCls.contains('dark'))
const toggleDark = (value: boolean) => {
  requestAnimationFrame(() => {
    isDark.value = value
    if (value) {
      rootCls!.add('dark')
    } else {
      rootCls!.remove('dark')
    }
  })
}
```

##### 打包整体构建流程
build.ts
```typescript
async function main() {
  logger.withBothLn(() => logger.successText('start building lib...'))
  await run('vite', ['build', '--config', 'configs/vite.lib.config.ts'], {
    env: {
      NODE_ENV: env,
      SOURCE_MAP: sourceMap ? 'true' : ''
    }
  })

  logger.ln()

  await run('vite', ['build', '--config', 'configs/vite.prod.config.ts'], {
    stdio: 'inherit',
    env: {
      NODE_ENV: env,
      SOURCE_MAP: sourceMap ? 'true' : ''
    }
  })
  await run('pnpm', ['build:style'])

  logger.ln()

  if (!process.exitCode) {
    logger.withEndLn(() => logger.success('all builds completed successfully'))
  }
}
```

#### 打包工具库

- [vite](https://vitejs.dev/)
- [rollup](https://rollupjs.org/)
- [esbuild](https://esbuild.github.io/)
- [gulp](https://gulpjs.com/)
- [tsx](https://github.com/esbuild-kit/tsx)
>      _TypeScript Execute (tsx)_: Node.js enhanced with [esbuild](https://esbuild.github.io/) to run TypeScript & ESM files

- vue-tsc
> Vue 3 command line Type-Checking tool base on IDE plugin Volar.

### lint
:::info

1. 使用 [ESLint](https://link.juejin.cn?target=https%3A%2F%2Feslint.org%2F)、[StyleLint](https://link.juejin.cn?target=https%3A%2F%2Fstylelint.io%2F)、[TypeScript ESLint](https://link.juejin.cn?target=https%3A%2F%2Ftypescript-eslint.io%2Fdocs%2F) 这些工具和工具插件搭建项目的代码规范，并设计成一个可共享的预设配置。让你的团队共享同一份代码规范。
:::
:::info

2. 在项目中加入列如 [Husky](https://typicode.github.io/husky/#/)、[Commitlint](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fcommitlint)、[Lint Staged](https://github.com/okonet/lint-staged) 之类的提交规范工具。
:::
> Husky是一个用于在Git hooks上运行脚本的工具，它可以在Git命令执行特定操作前或后自动运行一些脚本。Husky可以在项目中轻松地设置和管理Git hooks，例如在提交代码时运行预处理脚本或在push代码时进行代码格式检查等。Husky的特点包括易于安装、配置简单、灵活可定制、支持多种操作系统等。Husky是一个开源项目，它广泛应用于许多Web开发项目中，例如Vue.js、React、Angular等。

> lint-staged 是一个配合 Husky 使用的工具，用于在 Git 的暂存区（stage）中对文件进行 Lint 操作。它的作用是在 Git 提交前只对暂存区中的文件进行 Lint 操作，而不是整个项目的所有文件，从而提高 Lint 的效率。

> commitlint 是一个用于规范 Git Commit Message 的工具，它可以帮助团队统一 Git Commit Message 的格式，从而提高代码库的可读性和可维护性。

```

"precommit": "lint-staged -c ./.husky/.lintstagedrc -q"

npx --no-install commitlint --edit "$1"
```
### ui-gen
:::info
**TODO: **一键生成一个全新的组件模板避免开发一个组件复制组件结构。
:::

### 搭建私有仓库 verdaccio
[https://segmentfault.com/a/1190000017786032](https://segmentfault.com/a/1190000017786032)
[https://juejin.cn/post/7012622147726082055](https://juejin.cn/post/7012622147726082055)
```json
lerna json
{
  "npmClient":"pnpm",
  "useWorkspaces":true,
  "packages":[
    "packages/*"
  ],
  "version":"0.0.0",
  "command":{
    "bootstrap":{
    }
  }
}
```

### 发布 publish (npm上)
:::info
**TODO: **使用 Changesets 作为我们多包管理工具发布项目
:::

### 组件库 cli
**TODO:**
> There are three available templates that you can use to create Vue project with yalert-ui.
> - [create-vue](https://github.com/vuejs/create-vue) - create SPA app using recommended way to start a Vite-powered Vue project.
> - [Vuestic Admin](https://github.com/epicmaxco/vuestic-admin) - create Vue/Vite app starting with admin template with  custom UI components.

### 参考
参考组件库：

- [https://github.com/primefaces/primevue](https://github.com/primefaces/primevue)
- [https://oruga.io/](https://oruga.io/)
- [https://quasar.dev/](https://quasar.dev/)
- [https://www.naiveui.com/](https://www.naiveui.com/)
- [https://next.vuetifyjs.com/en/](https://next.vuetifyjs.com/en/)
- [https://element-plus.org/](https://element-plus.org/)
- [https://www.vexipui.com/](https://www.vexipui.com/)
- [https://arco.design/vue/docs/pro/start](https://arco.design/vue/docs/pro/start) ( Vue、React)
- [https://next.antdv.com/docs/vue/introduce](https://next.antdv.com/docs/vue/introduce) ( Vue、React)
- [https://vuestic.dev/en/ui-elements/button](https://vuestic.dev/en/ui-elements/button) (编译成 web-components)
