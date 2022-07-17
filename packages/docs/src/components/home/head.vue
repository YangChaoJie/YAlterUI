<template>
  <v-app-bar id="app-bar" app class="border-b" flat>
    <div class="ui-logo">
      <v-img :height="size" :src="logo" :width="size" class="mx-auto" max-width="100%" />
      <span>YJ-UI</span>
    </div>

    <div class="right-content">
       <v-btn flat @click="goToPage('/')">
             首页
       </v-btn>
       <v-btn flat @click="goToPage('/doc')">
        文档
       </v-btn>
        <v-btn flat @click="goToPage('/components')">
             组件
       </v-btn>
    </div>

    <template v-slot:append>
      <v-btn flat @click="goToPage('/about')">
        关于
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
// Utilities
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'YHeader',

  setup() {
    // const theme = useTheme()
    // console.log('theme', theme);
    const size = ref(30)
    const logo = computed(() => {
      return 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg'
      // `vuetify-logo-v3-${theme.name.value}.svg`
    })
    const router = useRouter();
    const goToPage = (name: string) => {
      router.push(name);
    }
    return { logo, size, goToPage }
  }
})
</script>

<style lang="scss" scoped>
  .ui-logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .right-content {
    margin-left: 20px;
  }
</style>
