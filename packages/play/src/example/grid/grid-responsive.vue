<template>
  <y-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }" :colGap="12" :rowGap="16" class="grid-demo-grid">
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item" :span="{ xl: 4, xxl: 6 }" suffix>
      suffix
    </y-grid-item>
  </y-grid>
</template>

<style scoped>
.grid-demo-grid .demo-item,
.grid-demo-grid .demo-suffix {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo-grid .demo-item:nth-child(2n) {
  background-color: rgba(22,93,255, 0.9);
}

.grid-demo-grid .demo-item:nth-child(2n + 1) {
  background-color: rgba(106,161,255, 0.9);
}
</style>
