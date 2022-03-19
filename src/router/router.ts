import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes:  Array<RouteRecordRaw> = [
    {
      path: '/',
      redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../../example/pages/test/index.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../../example/pages/test/test.vue')
    },
    {
      path: '/testOpen',
      name: 'testOpen',
      component: () => import('../../example/pages/test/testOpenWindow.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})