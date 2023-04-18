// import App from './App.vue'
// import { setupLayouts } from 'virtual:generated-layouts';
// // import generatedRoutes from '~pages'; 
// const routes = setupLayouts(generatedRoutes)
// import { useGlobalComponents } from './plugins/global-components'
// import { ViteSSG } from 'vite-ssg'
// import { usePinia } from './plugins/pinia'
// // import { useVuetify } from './plugins/vuetify'
// console.log('router-----', routes);
// import { rpath, trailingSlash, generatedRoutes } from '@/util/routes'
// // import { scrollToTargetAdjusted } from '@/util/helpers'
// export const createApp = ViteSSG(
//   App,
//   {
//     routes: [
//       ...routes,
//       {
//         path: '/:pathMatch(.*)*',
//         redirect: to => {
//           return rpath(to.fullPath)
//         },
//       },
//     ],
//     scrollBehavior (to, from, savedPosition) {
//       if (savedPosition) {
//         return savedPosition
//       } else {
//         const isHash = to.hash ? to.hash.split('#') : undefined
//         if (isHash) {
//           // let tmp = setTimeout(() => {
//           //   document.getElementById(isHash[1])?.scrollIntoView({
//           //     behavior: "auto",  // 平滑过渡
//           //     block:    "start"    // 上边框与视窗顶部平齐
//           // })
//             // scrollToTargetAdjusted(isHash[1])
//             // clearTimeout(tmp)
//           // })
//         }
//         return
//       }
//       // if (savedPosition) return savedPosition
//       // if (to.hash) return { el: to.hash }
//       // else return { top: 0 }
//     },
//   },
//   ctx => {
//     ctx.router.beforeEach(({ path, hash }, from, next) => {
//       return path.endsWith('/') ? next() : next(`${trailingSlash(path)}` + hash)
//     })
//     ctx.router.onError(err => {
//       console.error(err)
//     })
//     // useVuetify(ctx),
//     usePinia(ctx),
//     useGlobalComponents(ctx)
//   }
// )
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'
// import generatedRoutes from '~pages';
// import { setupLayouts } from 'virtual:generated-layouts';
// const routes = setupLayouts(generatedRoutes)
export const createApp = ViteSSG(App, { routes })
