<template>
  <div>
    <span>
      {{ message }}
    </span>
    <div>{{ author }}</div>
    <div>{{ userdata?.slideshow.title }}</div>

    <div v-for="(item) in userdata?.slideshow.slides" v-if="userdata?.slideshow.slides?.length > 0">
      <div v-html="item0" v-if="item.items && item.items.length > 0" v-for="(item0) in item?.items || []">
     </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted, toRefs, UnwrapRef } from 'vue'
import { userLogin } from './api'; // 有提示
import type { UserInfo }  from './api';

export default defineComponent({
  name: 'HelloWorld',
  components: {
  },
  setup() {
    let author = ref('1');
    const data = reactive({
      message: 'ts app',
      userdata: ref<UserInfo>()
    })
    
    let userdata = ref<UserInfo>();
    onMounted(async () => {
      console.log('hahahaha');
      const userdata = await userLogin({userName: 'youke', authTimestamp: new Date().getTime()})
      data.userdata = userdata.value
      // data.userdata = userdata.value
      author.value = userdata.value?.slideshow.author
      console.log(userdata.value);
      setTimeout(() => {
        userdata.value.slideshow.title= 'hehehe'
        data.userdata.slideshow.title = 'hehe0'
      }, 1000);
    })
    return {
      ...toRefs(data),
      author
    }
  }
})
</script>