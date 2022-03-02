import { createApp } from 'vue'
import App from './App.vue'
// import createDemoRouter from './router/router';
import { router } from './router/router';
const app = createApp(App);
// const router = createDemoRouter(app);
app.use(router)

app.mount('#app')
