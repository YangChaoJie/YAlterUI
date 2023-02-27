import { createApp } from 'vue'
import App from './App.vue'
import  createPlayRouter  from './router'
import '../../yAlterUI/styles/index.scss'
console.log('router-----', createPlayRouter);
const app = createApp(App);
app.use(createPlayRouter());
app.mount('#app')
