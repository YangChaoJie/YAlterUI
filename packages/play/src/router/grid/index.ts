export const gridRouter = [
  {
    path: '/gridbase',
    name: 'grid-base',
    component: () => import('../../example/grid/base.vue')
  },
  {
    path: '/gridgutter',
    name: 'grid-gutter',
    component: () => import('../../example/grid/gutter.vue')
  },
  {
    path: '/gridflex',
    name: 'grid-flex',
    component: () => import('../../example/grid/props-flex.vue')
  },
  {
    path: '/gridoffset',
    name: 'grid-offset',
    component: () => import('../../example/grid/props-offset.vue')
  },
  {
    path: '/gridbootstrap',
    name: 'grid-bootstrap',
    component: () => import('../../example/grid/props-bootstrap.vue')
  },
  {
    path: '/gridUseGrid',
    name: 'grid-useGrid',
    component: () => import('../../example/grid/grid.vue')
  },
  {
    path: '/gridResponsive',
    name: 'grid-responsive',
    component: () => import('../../example/grid/grid-responsive.vue')
  }
]
