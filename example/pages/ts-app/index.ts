export declare type handleType = 'sort' | 'delete' | 'recover'
import {  ref, reactive, computed, onMounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { userLogin } from './api'; // 有提示
import type { UserInfo }  from './api'


export function useMyDark () {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const text = '这是暗黑模式';
  return {
    isDark,
    toggleDark,
    text
  }
}

export function userPresentData () {
  const data = reactive({
    message: 'ts app',
    userdata: ref<UserInfo>()
  })

  onMounted(async () => {
    console.log('hahahaha');
    const userdata = await userLogin({userName: 'youke', authTimestamp: new Date().getTime()})
    data.userdata = userdata.value
    console.log(userdata.value);
    setTimeout(() => {
      userdata.value.slideshow.title= 'hehehe'
      data.userdata.slideshow.title = 'hehe0'
    }, 1000);
  })
  return data
}