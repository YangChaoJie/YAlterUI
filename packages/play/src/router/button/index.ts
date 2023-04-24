export const btnRouter = [
  {
    path: '/',
    name: 'button-base',
    component: () => import('../../example/button/base.vue')
  },
  {
    path: '/buttonicon',
    name: 'button-icon',
    component: () => import('../../example/button/props-icon.vue')
  },
  {
    path: '/buttonloading',
    name: 'button-loading',
    component: () => import('../../example/button/props-loading.vue')
  },
  {
    path: '/buttonsize',
    name: 'button-size',
    component: () => import('../../example/button/props-size.vue')
  },
  {
    path: '/buttontext',
    name: 'button-text',
    component: () => import('../../example/button/props-text.vue')
  },
  {
    path: '/buttoncolor',
    name: 'button-color',
    component: () => import('../../example/button/props-color.vue')
  },
]
