import { defineAppSetup } from 'valaxy'
import { install } from 'yalert-ui'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../../yAlterUI/styles/index.scss'
export default defineAppSetup((ctx) => {
  console.log(ctx)
  const { app } = ctx
  // 任意使用 Vue 生态的插件
  app.use(install)
  app.use(ElementPlus)
})
