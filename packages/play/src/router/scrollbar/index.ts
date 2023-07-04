export const scrollbarRouter = [
  {
    path: '/scrollbar',
    name: 'scrollbar',
    component: () => import('../../example/scrollbar/base.vue')
  },
  {
    path: '/scrollbarMaxH',
    name: 'scrollbarMaxH',
    component: () => import('../../example/scrollbar/max-height.vue')
  },
  {
    path: '/scrollManual',
    name: 'scrollManual',
    component: () => import('../../example/scrollbar/manual-scroll.vue')
  }
]
