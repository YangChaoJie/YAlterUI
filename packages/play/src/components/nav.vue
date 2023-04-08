<script setup lang="ts">
// import { currentTab } from '~/composables/state'
import { useDark, useToggle } from '@vueuse/core'
// const info = await searcher.getInfo()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div flex row text-left py4 pr1 items-center>
    <RouterLink to="/">
      <h1>
        <span op50 font-200 leading-1em block>
          YALTERUI
        </span>
      </h1>
    </RouterLink>
    <div text-xs op-30 ml-2 self-end leading-12px>
      v1.0.0
    </div>
    <div flex-auto />
    <div row gap4 text="lg gray4" items-center cursor-pointer >
      <div class="i-carbon-logo-github" inline-block></div>
      <div m-l-4 inline-block :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"  @click="toggleDark()">
        <span class="dark:i-carbon-moon i-carbon-sun block" aria-hidden="true" ></span>
      </div>
    </div>
  </div>
</template>
