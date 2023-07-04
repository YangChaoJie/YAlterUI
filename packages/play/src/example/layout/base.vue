<template>
  <div class="common-layout">
    <y-layout>
      <y-header>Header</y-header>
      <y-content>content</y-content>
    </y-layout>
  </div>
  <div class="common-layout" style="margin-top: 20px">
    <y-layout>
      <y-header>Header</y-header>
      <y-content>content</y-content>
      <y-footer>footer</y-footer>
    </y-layout>
  </div>
  <div class="common-layout" style="margin-top: 20px">
    <y-layout>
      <y-asider width="200px">YAsider</y-asider>
      <y-content>content</y-content>
    </y-layout>
  </div>

  <div class="common-layout" style="margin-top: 20px">
    <y-layout>
      <y-header>Header</y-header>
      <y-layout>
        <y-asider width="200px">YAsider</y-asider>
        <y-content>content</y-content>
      </y-layout>
    </y-layout>
  </div>

  <div class="common-layout" style="margin-top: 20px">
    <y-layout>
      <y-header>Header</y-header>
      <y-layout>
        <y-asider width="200px">YAsider</y-asider>
        <y-layout>
          <y-content>content</y-content>
          <y-footer>footer</y-footer>
        </y-layout>
      </y-layout>
    </y-layout>
  </div>

  <div class="common-layout" style="margin-top: 20px">
    <y-layout>
      <y-asider width="200px">YAsider</y-asider>
      <y-layout>
        <y-header>Header</y-header>
        <y-content>content</y-content>
      </y-layout>
    </y-layout>
  </div>

  <div class="common-layout" style="margin-top: 20px">
    <y-layout>
      <y-asider v-model:collapsed="collapsed" collapsible width="200px">sider</y-asider>
      <y-layout>
        <y-header>Header</y-header>
        <y-content>content</y-content>
        <y-footer>footer</y-footer>
      </y-layout>
    </y-layout>
  </div>

  <div>响应性侧边栏</div>
  <div class="common-layout" style="margin-top: 20px">
    <y-layout>
      <y-asider v-model:collapsed="collapsed" @collapse="onCollapse" breakpoint="lg" collapsible width="200px">sider</y-asider>
      <y-layout>
        <y-header>Header</y-header>
        <y-content>content</y-content>
        <y-footer>footer</y-footer>
      </y-layout>
    </y-layout>
  </div>
</template>

<script setup>
import { YLayout, YHeader, YContent, YFooter, YAsider } from 'yalert-ui'
import { StarFilled } from '@yalert-ui/icons'
import './common-layout.scss'
import { ref } from 'vue';
const collapsed = ref(false)
const onCollapse = (val, type) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  collapsed.value = val;
  console.log(content);
}
</script>
