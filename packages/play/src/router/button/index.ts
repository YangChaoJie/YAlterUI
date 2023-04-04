export const btnRouter = [
  {
    path: '/',
    name: 'base',
    component: () => import('../../example/button/base.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('../../example/button/props-icon.vue')
  },
]
