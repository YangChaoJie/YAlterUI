import { createApp } from 'vue'
import App from './App.vue'
import  createPlayRouter  from './router'
import '../../yAlterUI/styles/index.scss'
// 全局引入
// import { install } from 'yalert-ui'
import 'uno.css'
// import '@unocss/reset/antfu.css'
console.log('router-----', createPlayRouter);
const app = createApp(App);
app.use(createPlayRouter());
// app.use(install);
app.mount('#app')
