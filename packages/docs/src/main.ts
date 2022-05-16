// import { createApp } from 'vue'
import App from './App.vue'

import { routes } from './routes/router'
import { ViteSSG } from 'vite-ssg'
// const app = createApp(App);

// app.mount('#app')
console.log('router-----', routes);

export const createApp = ViteSSG(
  App,
  {routes}
)
