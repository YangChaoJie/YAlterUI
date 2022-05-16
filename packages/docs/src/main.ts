// import { createApp } from 'vue'
import App from './App.vue'

// import { routes } from './routes/router'
// import 'virtual:api'
// import routes from 'virtual:'
import routes from 'virtual:generated-pages'; 

// const routes = setupLayouts(generatedRoutes)
import { ViteSSG } from 'vite-ssg'

console.log('router-----', routes);

export const createApp = ViteSSG(
  App,
  {routes}
)
