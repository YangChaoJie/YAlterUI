<template>
   <router-view></router-view>
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent , ref, reactive} from 'vue'
import Hello from './components/Hello.vue'
import Test from "./components/test.vue"

export default defineComponent ({
  name: 'HelloWorld',
  components: {
    Hello,
    Test
  },
  setup () {
    const a = ref(1);
    const data = reactive({
      message: '阿瑞'
    })
    return {
      a,
      data
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
