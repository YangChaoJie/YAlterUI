import { createApp } from 'vue'
import App from './App.vue'
import  createPlayRouter  from './router'
import '../../yAlterUI/styles/index.scss'
import { createPinia } from 'pinia' 
const pinia = createPinia()
// 全局引入
// import { install } from 'yalert-ui'
import 'uno.css'
// import '@unocss/reset/antfu.css'
const app = createApp(App);
app.use(pinia)
app.use(createPlayRouter());
// app.use(install);
app.mount('#app')
