<template>
  <v-app-bar id="app-bar" app class="border-b" flat>
    <div class="ui-logo" @click="goToPage('/zh')">
      <v-img :height="size" :src="logo" :width="size" class="mx-auto" max-width="100%" />
      <span>YJ-UI</span>
    </div>

    <div class="right-content">
      <v-btn-toggle v-model="toggle" :mandatory="true">
        <v-btn variant="text" :ripple="false"  flat to="/zh/home" >
          首页
        </v-btn>
        <v-btn variant="text" :ripple="false" flat to="/zh/doc">
          文档
        </v-btn>
        <v-btn variant="text" :ripple="false" flat to="/zh/components">
          组件
        </v-btn>
      </v-btn-toggle>
    </div>

    <template v-slot:append>
      <v-btn flat @click="goToPage('/zh/about')">
        关于
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
// Utilities @click="goToPage('/zh/')" @click="goToPage('/zh/doc')" @click="goToPage('/zh/components')"
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
    let toggle = ref(0);    
    return { logo, size, goToPage, toggle }
  }
})
</script>

<style lang="scss" scoped>
.ui-logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 0 20px;
}

.active {
  color: #1976d2;
}

.right-content {
  margin-left: 100px;

  &:deep(.v-btn--selected) {
    color: #1976d2;
  }

  &:deep(.v-btn__overlay) {
    opacity: 0 !important;
  }

  &:deep(.v-btn) {
    &::before {
      background-color: transparent !important;
    }
  }
}
</style>
