<template>
  <div>
    <span style="color: aqua;" @click="toggleDark()">{{ isDark ? '这是暗黑模式' : '这是白天哦' }}</span>
    {{ isDark ? 'Dark': 'Light' }}
    <div>{{ userdata?.slideshow.author }}</div>
    <div>{{ userdata?.slideshow.title }}</div>

    <div v-for="(item) in userdata?.slideshow.slides" v-if="userdata?.slideshow.slides?.length > 0">
      <div
        v-html="item0"
        v-if="item.items && item.items.length > 0"
        v-for="(item0) in item?.items || []"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted, toRefs, UnwrapRef } from 'vue'
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
    return {
      ...toRefs(uData),
      ...useMyDark(),
    }
  }
})
</script>