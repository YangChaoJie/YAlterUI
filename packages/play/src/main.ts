import { createApp } from 'vue'
import App from './App.vue'
import  createPlayRouter  from './router'
import '../../yAlterUI/styles/index.scss'
import { install } from 'yalert-ui'
console.log('router-----', createPlayRouter);
const app = createApp(App);
app.use(createPlayRouter());
app.use(install);
app.mount('#app')
