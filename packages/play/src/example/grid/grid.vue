
<template>
  <div style="margin-bottom: 20px;">
    <y-button @click="collapsed = !collapsed">{{ collapsed ? '折叠' : '展开' }}</y-button>
  </div>
  <y-grid :cols="3" :colGap="12" :rowGap="16" class="grid-demo-grid" :collapsed="collapsed">
    <y-grid-item class="demo-item">item2</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item" :offset="1">item | offset - 1</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item" :span="3">item | span - 3</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item">item</y-grid-item>
    <y-grid-item class="demo-item" suffix #="{ overflow }">
      suffix | overflow: {{ overflow }}
    </y-grid-item>
  </y-grid>

  <YGrid :cols="3" :colGap="12" :rowGap="16">
    <YGridItem>
      11221s
    </YGridItem>
    <YGridItem class="demo-item">item</YGridItem>
  </YGrid>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const hide = ref(false);
    const collapsed = ref(true);

    return {
      hide,
      collapsed
    }
  },
}
</script>

<style scoped>
.grid-demo-grid .demo-item,
.grid-demo-grid .demo-suffix {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo-grid .demo-item:nth-child(2n) {
  background-color: rgba(22, 93, 255, 0.9);
}

.grid-demo-grid .demo-item:nth-child(2n + 1) {
  background-color: rgba(106, 161, 255, 0.9);
}
</style>
