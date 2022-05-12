<template>
  <img alt="Vue logo" src="../../../src/assets/logo.png" />
  <Counter ref="mycounter"/>
  <button @click="onReset">子组件设置</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
import Counter from './mycounter.vue'
export default defineComponent({
  name: 'HelloWorld',
  components: {
   Counter
  },
  setup() {
    const a = ref(1);
    const data = reactive({
      message: '阿瑞'
    })
    const mycounter = ref(null)

    onMounted(() => {
      console.log('lll111', mycounter.value);
    })

    const onReset = () => { 
      const mycounter = ref(null)
      console.log('2222', mycounter.value);
      mycounter.value.reset()
    }

    return {
      a,
      data,
      onReset
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
