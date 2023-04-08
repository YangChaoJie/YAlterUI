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
</style>
