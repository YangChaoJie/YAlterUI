<template>
  <div>
    <span style="color: aqua;" @click="toggleDark()">{{ isDark ? '这是暗黑模式' : '这是白天哦' }}</span>
    {{ isDark ? 'Dark' : 'Light' }}
    <div>{{ userdata?.slideshow.author }}</div>
    <div>{{ userdata?.slideshow.title }}</div>

    <div v-for="(item, index) in userdata?.slideshow.slides" :key="index">
      <div v-html="item0" v-for="(item0, index0) in item?.items || []" :key="index0"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted, toRefs, UnwrapRef } from 'vue'
import { useMyDark, userPresentData } from '.';

export default defineComponent({
  name: 'HelloWorld',
  components: {
  },
  setup() {
    const uData = userPresentData()
    onMounted(() => {
      console.log('2222');
    })
    console.log('uData', uData);

    return {
      // ...uData, // reactive 无法被解构
      ...toRefs(uData),
      ...useMyDark(),
    }
  }
})
</script>