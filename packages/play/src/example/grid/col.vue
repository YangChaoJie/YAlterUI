<template>
  <div class="grid-demo-background">
    <div style="background-color: var(--y-color-primary);">af</div>
    <div direction="vertical" :size="16" style="display: block;">
      <y-row class="grid-demo">
        <y-col :span="24">
          <div>24 - 100%</div>
        </y-col>
      </y-row>
      <y-row class="grid-demo">
        <y-col :span="12">
          <div>12 - 50%</div>
        </y-col>
        <y-col :span="12">
          <div>12 - 50%</div>
        </y-col>
      </y-row>
      <y-row class="grid-demo">
        <y-col :span="8">
          <div>8 - 33.33%</div>
        </y-col>
        <y-col :span="8">
          <div>8 - 33.33%</div>
        </y-col>
        <y-col :span="8">
          <div>8 - 33.33%</div>
        </y-col>
      </y-row>
      <y-row class="grid-demo">
        <y-col :span="6">
          <div>6 - 25%</div>
        </y-col>
        <y-col :span="6">
          <div>6 - 25%</div>
        </y-col>
        <y-col :span="6">
          <div>6 - 25%</div>
        </y-col>
        <y-col :span="6">
          <div>6 - 25%</div>
        </y-col>
      </y-row>
      <y-row class="grid-demo">
        <y-col :span="4">
          <div>4 - 16.66%</div>
        </y-col>
        <y-col :span="4">
          <div>4 - 16.66%</div>
        </y-col>
        <y-col :span="4">
          <div>4 - 16.66%</div>
        </y-col>
        <y-col :span="4">
          <div>4 - 16.66%</div>
        </y-col>
        <y-col :span="4">
          <div>4 - 16.66%</div>
        </y-col>
        <y-col :span="4">
          <div>4 - 16.66%</div>
        </y-col>
      </y-row>
    </div>
  </div>
</template>
<script>
import '../../../../yAlterUI/styles/index.scss'
</script>
<style scoped>
.grid-demo-background {
  background-image: linear-gradient(
    90deg,
    var(--y-color-primary-light-3) 4.16666667%,
    transparent 4.16666667%,
    transparent 8.33333333%,
    var(--y-color-primary-light-3) 8.33333333%,
    var(--y-color-primary-light-7) 12.5%,
    transparent 12.5%,
    transparent 16.66666667%,
    var(--y-color-primary-light-3) 16.66666667%,
    red 20.83333333%,
    transparent 20.83333333%,
    transparent 25%,
    var(--y-color-primary-light-3) 25%,
    var(--y-color-primary-light-7) 29.16666667%,
    transparent 29.16666667%,
    transparent 33.33333333%,
    var(--y-color-primary-light-3) 33.33333333%,
    var(--y-color-primary-light-7) 37.5%,
    transparent 37.5%,
    transparent 41.66666667%,
    var(--y-color-primary-light-3) 41.66666667%,
    var(--y-color-primary-light-7) 45.83333333%,
    transparent 45.83333333%,
    transparent 50%,
    var(--y-color-primary-light-3) 50%,
    var(--y-color-primary-light-7) 54.16666667%,
    transparent 54.16666667%,
    transparent 58.33333333%,
    var(--y-color-primary-light-3) 58.33333333%,
    var(--y-color-primary-light-7) 62.5%,
    transparent 62.5%,
    transparent 66.66666667%,
    var(--y-color-primary-light-3) 66.66666667%,
    var(--y-color-primary-light-7)3 70.83333333%,
    transparent 70.83333333%,
    transparent 75%,
    var(--y-color-primary-light-3) 75%,
    var(--y-color-primary-light-7) 79.16666667%,
    transparent 79.16666667%,
    transparent 83.33333333%,
    var(--y-color-primary-light-3) 83.33333333%,
    var(--y-color-primary-light-7) 87.5%,
    transparent 87.5%,
    transparent 91.66666667%,
    var(--y-color-primary-light-3) 91.66666667%,
    var(--y-color-primary-light-3) 95.83333333%,
    transparent 95.83333333%
  );
}
.grid-demo .y-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo .y-col:nth-child(2n) {
  background-color: rgba(var(--y-color-primary-light-7), 0.9);
}
.grid-demo .y-col:nth-child(2n + 1) {
  background-color: var(--y-color-primary-light-5);
}
</style>
