export const dividerRouter = [
  {
    path: '/dividerbase',
    name: 'divider-base',
    component: () => import('../../example/divider/base.vue')
  },
  {
    path: '/dividerorientation',
    name: 'divider-orientation',
    component: () => import('../../example/divider/props-orientation.vue')
  },
  {
    path: '/dividertype',
    name: 'divider-type',
    component: () => import('../../example/divider/props-type.vue')
  }
]
