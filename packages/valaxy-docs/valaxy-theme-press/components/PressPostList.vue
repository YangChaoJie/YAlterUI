<script setup lang="ts">
import { computed } from 'vue'
import type { Post } from 'valaxy'
import { useSiteStore } from 'valaxy'

const props = withDefaults(defineProps<{
  type?: string
  posts?: Post[]
  curPage?: number
}>(), {
  curPage: 1,
})

const site = useSiteStore()
const posts = computed(() => props.posts || site.postList)
</script>

<template>
  <ul class="divide-y divide-gray-200">
    <Transition v-for="post, i in posts" :key="i" name="fade">
      <li class="py-12">
        <PressArticleCard :post="post" />
      </li>
    </Transition>
  </ul>
</template>
