<template>
  <div>
    <YSpace>
      <YButton type="primary">button1</YButton>
      <YButton type="primary">button2</YButton>
      <YButton type="primary">button3</YButton>
    </YSpace>
  </div>

  <div style="margin-top: 30px">
    <div>-----direction----</div>
    <YSpace direction="vertical">
      <YButton type="primary">button1</YButton>
      <YButton type="primary">button2</YButton>
      <YButton type="primary">button3</YButton>
    </YSpace>
  </div>

  <div style="margin-top: 30px">
    <div>-----size----</div>
    <div style="margin-bottom: 20px;">
      <YButton @click="() => (size = 'mini')">mini</YButton>
      <YButton @click="() => (size = 'small')">small</YButton>
      <YButton @click="() => (size = 'medium')">medium</YButton>
      <YButton @click="() => (size = 'large')">large</YButton>
    </div>
    <YSpace :size="size">
      <YButton type="primary">button1</YButton>
      <YButton type="primary">button2</YButton>
      <YButton type="primary">button3</YButton>
    </YSpace>
  </div>

  <div style="margin-top: 30px">
    <div>-----align----</div>
    <div style="margin-bottom: 20px;">
      <YButton @click="() => (align = 'start')">start</YButton>
      <YButton @click="() => (align = 'center')">center</YButton>
      <YButton @click="() => (align = 'end')">end</YButton>
      <YButton @click="() => (align = 'baseline')">baseline</YButton>
    </div>
    <YSpace :align="align">
      <YButton type="primary">button1</YButton>
      <YButton type="primary">button2</YButton>
      <YButton type="primary" style="height: 80px; background: gold;">button3</YButton>
    </YSpace>
  </div>

  <div style="margin-top: 30px">
    <div>----warp-----</div>
    <YButton @click="() => (wrap = !wrap)">{{ wrap ? 'wrap' : 'nowrap'  }}</YButton>
    <YSpace :wrap="wrap">
      <YButton type="primary">button1</YButton>
      <YButton type="primary">button2</YButton>
      <YButton type="primary">button3</YButton>
      <YButton type="primary">button4</YButton>
      <YButton type="primary">button5</YButton>
      <YButton type="primary">button7</YButton>
      <YButton type="primary">button8</YButton>
      <YButton type="primary">button9</YButton>
      <YButton type="primary">button10</YButton>
      <YButton type="primary">button11</YButton>
      <YButton type="primary">button12</YButton>
    </YSpace>
  </div>
  

  <div style="margin-top: 30px">
    <div>----warp-----</div>

    <YSpace>
      <template #split>
        <YDivider type="vertical"></YDivider>
      </template>
      <YButton type="primary">button1</YButton>
      <YButton type="primary">button2</YButton>
      <span>啊哈哈</span>
    </YSpace>
  </div>  
  
</template>

<script setup>
import { YSpace, YButton, YDivider } from 'yalert-ui'
import { ref } from 'vue';
const size = ref('medium')
const align = ref('align')
const wrap = ref(true)
</script>
