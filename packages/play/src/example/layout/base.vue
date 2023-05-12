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
      <y-asider :collapsed="true" width="200px">YAsider</y-asider>
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
</script>
