import { h } from 'vue'
import { btnRouter } from './button'
import { iconRouter } from './icon'
import { toastRouter } from './toast'
import { gridRouter } from './grid'
import { dividerRouter } from './divider'
import { layoutRouter } from './layout';
import { spaceRouter } from './space';
import { linkRouter } from './link'
import { scrollbarRouter } from './scrollbar'
import { inputRouter } from './input'
// const home = {
//   setup: () => () => h('div', '-----'),
// }
// const page1 = {
//   setup: () => () => h('div', 'page1'),
// }
// const page2 = {
//   setup: () => () => h('div', 'page2'),
// }
// const nested1 = {
//   setup: () => () => h('div', 'nested1'),
// }
// const nested2 = {
//   setup: () => () => h('div', 'nested2'),
// }

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: home,
//   },
//   {
//     path: '/page1',
//     name: 'page1',
//     component: page1,
//   },
//   {
//     path: '/page2',
//     name: 'page2',
//     component: page2,
//   },
//   {
//     path: '/nested/page1',
//     name: 'Nested 1',
//     component: nested1,
//   },
//   {
//     path: '/nested/page2',
//     name: 'Nested 2',
//     component: nested2,
//   },
//   { path: '/:pathMatch(.*)*', redirect: '/' },
// ]

import { createRouter, createWebHashHistory }  from 'vue-router'

export default function createPlayRouter (app) {
  const router = createRouter({
    history: createWebHashHistory('/'),
    routes: [
      ...inputRouter,
      ...btnRouter, 
      ...iconRouter,
      ...toastRouter,
      ...gridRouter,
      ...dividerRouter,
      ...layoutRouter,
      ...spaceRouter,
      ...linkRouter,
      ...scrollbarRouter
    ]
  })
  return router
}
