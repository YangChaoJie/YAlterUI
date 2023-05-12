<template>
  <YButton>Default</YButton>
  <YButton type="primary">
    Primary
  </YButton>
  <YButton type="info">
    Info
  </YButton>
  <YButton type="success" :disabled="true">
    Success
  </YButton>
  <YButton type="warning">
    Warning
  </YButton>
  <YButton type="error">
    Error
  </YButton>
  <YButton dashed>
    dashed
  </YButton>
  <YButton color="orange">
    Orange
  </YButton>
  <YButton color="orange" :disabled="true">
    Orange
  </YButton>
  <div>
    <span>asfhjasf 大商股份军事大国第三方大范甘迪身高多少 </span>
    <YDivider></YDivider>
    <span>tj dsnfkdsn sdfsdfhdsj sdfksdfkb .</span>
    <YDivider dashed></YDivider>
  </div>
  <div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <y-divider orientation="left">Rabindranath Tagore</y-divider>
    <span
      >My wishes are fools, they shout across thy song, my Master. Let me but
      listen.</span
    >
    <y-icon><star-filled /></y-icon>
    <y-divider>
      <y-icon><star-filled /></y-icon>
    </y-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <y-divider orientation="right">Rabindranath Tagore</y-divider>
  </div>
  <div>
    <span>Rain</span>
    <y-divider type="vertical" />
    <span>Home</span>
    <y-divider type="vertical" dashed />
    <span>Grass</span>
  </div>
</template>
<script setup>
import { YDivider, YIcon } from 'yalert-ui'
import { StarFilled } from '@yalert-ui/icons'
</script>
