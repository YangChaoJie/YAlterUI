import { defineStore } from "pinia";
import { ref } from 'vue'
export const useRouterStore = defineStore('router', () => {
  const currentRouter = ref<any>({})
  const currentRouters = ref([])

  function setCurrentRouter (router: any) {
    return currentRouter.value = router
  }

  function setCurrentRouters (routers: any) {
    return currentRouters.value = routers
  }

  return { currentRouter, currentRouters, setCurrentRouter, setCurrentRouters }
})
