<template>
  <h1>这是测试openWindow的页面</h1>
  <h1 @click="onBack">返回</h1>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  // type inference enabled
  props: {
    name: String,
    msg: { type: String, required: true }
  },
  setup () {
    const count = ref(2);
    const router = useRouter()
    const onBack = () => {
      router.back();
    }
    return {
        count,
        onBack
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
