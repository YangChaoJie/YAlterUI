<template>
  <y-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
    <div ref="innerRef">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </y-scrollbar>

  <!-- <el-slider
    v-model="value"
    :max="max"
    :format-tooltip="formatTooltip"
    @input="inputSlider"
  /> -->
  <input type="range" min="1" :max="max"  class="slider"  @input="inputSlider"  v-model="value" id="myRange"/>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { YScrollbar } from 'yalert-ui'

const max = ref(0)
const value = ref(0)
const innerRef = ref<HTMLDivElement>()
const scrollbarRef = ref<InstanceType<typeof YScrollbar>>()

onMounted(() => {
  max.value = innerRef.value!.clientHeight - 380
})

const inputSlider = (value: any) => {
  scrollbarRef.value!.setScrollTop(Number(value.target.value))
  console.log('----', value);
  
}
type STop = { scrollTop: number }
const scroll = ({ scrollTop }: STop) => {
  value.value = scrollTop
}
// const formatTooltip = (value: number) => {
//   return `${value} px`
// }
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--y-color-primary-light-9);
  color: var(--y-color-primary);
}
.y-slider {
  margin-top: 20px;
}
</style>
