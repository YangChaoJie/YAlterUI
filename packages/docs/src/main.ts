import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from '~pages'; 
const routes = setupLayouts(generatedRoutes)
import { ViteSSG } from 'vite-ssg'
import {  usePinia } from './plugins/pinia'
import { useVuetify } from './plugins/vuetify'
console.log('router-----', routes);

export const createApp = ViteSSG(
  App,
  {routes},
  ctx => {
    useVuetify(ctx),
    usePinia(ctx)
  }
)
