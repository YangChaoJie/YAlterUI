import { createRouter, createWebHistory }  from 'vue-router'

export default function createDocRouter (app: any, routes: any) {
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  return router
}
