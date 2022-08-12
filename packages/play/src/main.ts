import { createApp } from 'vue'
import App from './App.vue'
import  createPlayRouter  from './router'

console.log('router-----', createPlayRouter);

const app = createApp(App);
app.use(createPlayRouter());
app.mount('#app')
