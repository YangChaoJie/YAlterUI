<template>
  <h1 ref="yRailRef">3333333</h1>
  <button @click="onClick">点击openWindow</button>
  <Counter ref="mycounter"></Counter>
    <button @click="onReset">子组件设置</button>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Counter from './mycounter.vue'
export default defineComponent({
  // type inference enabled
  components: {
    Counter
  },
  name: 'RefsCom',
  props: {
    name: String,
    msg: { type: String, required: false }
  },
  setup(props, context) {
    const router = useRouter()
    const yRailRef = ref<HTMLElement | null>(null)
    const count = ref(2);
    const routUrl = router.resolve({
      path: '/testOpen', query: {}
    })
    const onClick = () => {
      localStorage.setItem('params', JSON.stringify(encodeURIComponent('%7B%22access_token%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI5OTk5OTkxMTc0NjgwMjgiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJ0cnVzdCJdLCJleHAiOjE2NDcyMjc1MTQsImp0aSI6ImQzNDk1NmJlLWMzOTUtNDNiZS1hYWQ4LTZiZGY5OTRjOGI0YyIsInVzZXJpbmZvIjp7ImFyZWFJZENpdHkiOiIxMDAuMSIsImFyZWFJZFRvd24iOiIiLCJiaXpVc2VybmFtZSI6Ijk5OTk5OTExNzQ2ODAyOCIsInVzZXJ0eXBlIjoiMyIsIm9yZ0lkIjoiOTk5OTk5MTAxMTMwMDAwIiwicmVhbG5hbWUiOiJiTytJbm1zQ2VHU29lQXM1NlVSN3d3PT0iLCJjbGFzc0lkIjpudWxsLCJhcmVhSWQiOiIxMDAuMS4xIiwic2Nhbk51bWJlclR5cGUiOiIiLCJsb2dpblRpbWUiOiIyMDIyMDMxNDEwMTE1NCIsImFyZWFJZFByb3ZpbmNlIjoiMTAwIiwiYml6UmVhbG5hbWUiOiJiTytJbm1zQ2VHU29lQXM1NlVSN3d3PT0iLCJhcmVhSWRDb3VudHJ5IjoiMTAwLjEuMSIsImJpelVzZXJ0eXBlIjoiMyIsInNjYW5OdW1iZXIiOiIifSwiY2xpZW50X2lkIjoicG9ydGFsIiwiaXNDbGllbnRPbmx5IjpmYWxzZX0.IWVIZoGGY6DxMPQk9lTrYLGmf63GclbaDCZjpVMe9Ms%22%2C%22token_type%22%3A%22bearer%22%2C%22refresh_token%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI5OTk5OTkxMTc0NjgwMjgiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJ0cnVzdCJdLCJhdGkiOiJkMzQ5NTZiZS1jMzk1LTQzYmUtYWFkOC02YmRmOTk0YzhiNGMiLCJleHAiOjE2NDcyMjk5MTQsImp0aSI6ImM1YWI0NWFhLTkyZGItNDBhNi1hOGQ1LTRjNjFlNzk3OGIxNiIsInVzZXJpbmZvIjp7ImFyZWFJZENpdHkiOiIxMDAuMSIsImFyZWFJZFRvd24iOiIiLCJiaXpVc2VybmFtZSI6Ijk5OTk5OTExNzQ2ODAyOCIsInVzZXJ0eXBlIjoiMyIsIm9yZ0lkIjoiOTk5OTk5MTAxMTMwMDAwIiwicmVhbG5hbWUiOiJiTytJbm1zQ2VHU29lQXM1NlVSN3d3PT0iLCJjbGFzc0lkIjpudWxsLCJhcmVhSWQiOiIxMDAuMS4xIiwic2Nhbk51bWJlclR5cGUiOiIiLCJsb2dpblRpbWUiOiIyMDIyMDMxNDEwMTE1NCIsImFyZWFJZFByb3ZpbmNlIjoiMTAwIiwiYml6UmVhbG5hbWUiOiJiTytJbm1zQ2VHU29lQXM1NlVSN3d3PT0iLCJhcmVhSWRDb3VudHJ5IjoiMTAwLjEuMSIsImJpelVzZXJ0eXBlIjoiMyIsInNjYW5OdW1iZXIiOiIifSwiY2xpZW50X2lkIjoicG9ydGFsIiwiaXNDbGllbnRPbmx5IjpmYWxzZX0.DU68TuoDhA2I8_ncZWQHl1369pH2d6UWL_XNRk0ADWU%22%2C%22expires_in%22%3A3599%2C%22scope%22%3A%22read%20write%20trust%22%2C%22userinfo%22%3A%7B%22areaIdCity%22%3A%22100.1%22%2C%22areaIdTown%22%3A%22%22%2C%22bizUsername%22%3A%22999999117468028%22%2C%22usertype%22%3A%223%22%2C%22orgId%22%3A%22999999101130000%22%2C%22realname%22%3A%22bO%2BInmsCeGSoeAs56UR7ww%3D%3D%22%2C%22classId%22%3Anull%2C%22areaId%22%3A%22100.1.1%22%2C%22scanNumberType%22%3A%22%22%2C%22loginTime%22%3A%2220220314101154%22%2C%22areaIdProvince%22%3A%22100%22%2C%22bizRealname%22%3A%22bO%2BInmsCeGSoeAs56UR7ww%3D%3D%22%2C%22areaIdCountry%22%3A%22100.1.1%22%2C%22bizUsertype%22%3A%223%22%2C%22scanNumber%22%3A%22%22%7D%2C%22isClientOnly%22%3Afalse%2C%22jti%22%3A%22d34956be-c395-43be-aad8-6bdf994c8b4c%22%7D')))
      window.open(routUrl.href, 'iframe')
    }
    const mycounter = ref(null)
    onMounted(() => {
      console.log('ooo0', mycounter.value);
      console.log('yRailRef---', yRailRef);

    })

    const onReset = () => {
      console.log('2222', mycounter.value);
      console.log('value', mycounter.value.counter);
      
      mycounter.value.reset()
    }
    return {
      count,
      onClick,
      mycounter,
      onReset
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
