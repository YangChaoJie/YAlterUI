<template>
  <v-navigation-drawer
    id="app-toc"
    color="background"
    class="app-toc py-4 pr-3"
    floating
    width="256"
    location="right"
  >
    <!-- <template
      v-if="toc.length"
      #prepend
    >
      <app-headline
        class="mb-2"
        path="contents"
      />
    </template> -->

    <ul class="mb-4 ml-5" ref="container">
      <router-link
        v-for="{ to, level, text } in toc"
        v-slot="{ href }"
        :key="text"
        :to="to"
        custom
      >
        <li
          ref="marker"
          :class="[
            'pl-3 text-body-2 py-1 font-weight-regular',
            {
              'text-primary router-link-active': route.hash === to,
              'text-grey': route.hash !== to,
              'pl-6': level === 3,
              'pl-9': level === 4,
              'pl-12': level === 5,
            }
          ]"
        >
          <a
            :href="href"
            class="v-toc-link d-block transition-swing text-decoration-none"
            @click.prevent.stop="onClick(to)"
            v-text="text"
          />
        </li>
      </router-link>
    </ul>

  </v-navigation-drawer>
</template>

<script lang="ts">
  // Utilities
  import { computed, defineComponent, ref, onMounted, onUnmounted } from 'vue'
  import { RouteLocation, Router, useRoute, useRouter } from 'vue-router'
  import { useTheme } from 'vuetify'
//   import {
//   useActiveAnchor
// } from '@/composables/anchor'
  type TocItem = {
    to: string;
    text: string;
    level: number;
  }

  function useUpdateHashOnScroll (route: RouteLocation, router: Router) {
    const scrolling = ref(false)
    let offsets: number[] = []
    let timeout: any = 0
    function calculateOffsets () {
      const offsets = []
      const toc = route.meta.toc as any[]

      for (const item of toc.slice().reverse()) {
        const section = document.getElementById(item.to.slice(1))

        if (!section) continue

        offsets.push(section.offsetTop - 48)
      }

      return offsets
    }

    async function findActiveHash () {
      const toc = route.meta.toc as any[]
      // if (this.$vuetify.breakpoint.mobile) return
      const makbody = document.getElementsByClassName('v-application__wrap')[0];
      const currentOffset = (makbody as HTMLElement).scrollTop
      // (
      //   window.pageYOffset ||
      //   document.documentElement.offsetTop ||
      //   0
      // )
      // console.log('currentOffset---', currentOffset);
      
      // If we are at the top of the page
      // reset the offset
      if (currentOffset === 0) {
        if (route.hash) {
          router.replace({ path: route.path })
        }
        return
      }

      if (
        offsets.length !== toc.length
      ) {
        offsets = calculateOffsets()
      }

      const index = offsets.findIndex(offset => {
        return offset < currentOffset
      })

      let tindex = index > -1
        ? offsets.length - 1 - index
        : 0

      if (currentOffset + window.innerHeight === document.documentElement.offsetHeight) {
        tindex = toc.length - 1
      }

      const hash = toc[tindex].to
   
      if (hash === route.hash) return

      scrolling.value = true

      await router.replace({
        path: route.path,
        hash,
      })

      scrolling.value = false
    }

    function onScroll () {
      const toc = route.meta.toc as any[]
      
      clearTimeout(timeout)

      if (
        scrolling.value ||
        !toc.length
      ) return
      // console.log('heheheh');

      timeout = setTimeout(findActiveHash, 17)
    }

    return { onScroll, scrolling }
  }

  export default defineComponent({
    name: 'AppToc',
    setup () {
      const route = useRoute()
      const router = useRouter()
      const theme = useTheme()

      const { onScroll, scrolling } = useUpdateHashOnScroll(route, router)
      async function onClick (hash: string) {
        if (route.hash === hash) return
        scrolling.value = true
        router.replace({ path: route.path, hash })
        // await this.$vuetify.goTo(hash)
        // await wait(200)
        scrolling.value = false
      }

      onMounted(() => {
        const makbody = document.getElementsByClassName('v-application__wrap')[0];
        makbody.addEventListener('scroll', onScroll)
      })

  // onUpdated(() => {
  //   // sidebar update means a route change
  //   activateLink(location.hash)
  // })

      onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
      })



      return {
        toc: computed(() => route.meta.toc as TocItem[]),
        onClick,
        onScroll,
        dark: computed(() => theme.current.value.dark),
        route,
      }
    },
  })
</script>

<style lang="scss">
  .app-toc {
    ul {
      list-style-type: none
    }
    
    li {
      border-left: 2px solid #E5E5E5
    }
    .router-link-active {
      border-left-color:  currentColor;
      transition: color .25s;
      .v-toc-link {
        font-weight: 700 !important;
      }
    }
    .v-toc-link {
      color: inherit
    }
    &:theme--dark {
      li:not(.router-link-active) {
        border-left-color: rgba(255, 255, 255, 0.5)
      }
    }
    .v-navigation-drawer__content {
      height: auto
    }
  }
</style>
