<template>
  <Playground>
    <router-view />
  </Playground>
</template>

<script setup lang="ts">
import Playground from '~/components/playground/index.vue'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  overflow: hidden;
}
.router-link {
  padding: 10px;
  color: var(--y-color-primary-light-3);
  text-decoration: none;
  transition: var(--y-transition-color);

  &:hover {
    color: var(--y-color-primary);
  }

  &-active,
  &-active:hover {
    color: var(--y-color-danger);
  }
}
::-webkit-scrollbar {
  /*整体样式*/
  width: 6px; 
  height: 9px;
}
::-webkit-scrollbar-track {
  /*轨道*/
  box-shadow: inset 0 0 5px rgba(236, 233, 233, 0.685);
  /* background: #ededed; */
  background: rgb(238, 240, 231);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  /*滚动条小方块*/
  border-radius: 10px;
  /* background-color: #2e75d3; */
  background-color: #888;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
</style>
