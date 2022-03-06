import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes:  Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../../example/pages/test/index.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../../example/pages/test/test.vue')

    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})