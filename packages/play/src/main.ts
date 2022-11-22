import { createApp } from 'vue'
import App from './App.vue'
import  createPlayRouter  from './router'
import { YToast } from 'yalert-ui';
console.log('router-----', createPlayRouter);
const app = createApp(App);
app.use(YToast)
app.use(createPlayRouter());
app.mount('#app')
