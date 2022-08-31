<template>
  <v-list v-model:opened="opened" density="default" color="primary" :nav="nav" :items="computedItems" item-props
    :lines="false" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import type { Prop } from 'vue'
import { generatedRoutes as routes } from '../../util/routes'
import { RouteLocationRaw, RouteRecordRaw } from 'vue-router'

export type Item = {
  title?: string
  activeIcon?: string
  inactiveIcon?: string
  items?: (string | Item)[]
  heading?: string
  divider?: boolean
  to?: RouteLocationRaw
  href?: string,
  path?: string
}

function generateApiItems(locale: string) {
  return (routes as RouteRecordRaw[])
    .filter(route => route.path.includes(`${locale}/api/`))
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(route => {
      return {
        title: (route.meta!.title as string).slice(0, -4),
        to: route.path,
      }
    })
}

function generateItems(item: Item, path: string, locale: string): any {
  // debugger;
  if (item.items) {
    return item.items.map(child => {
      if (typeof child === 'string') {
        const route = routes.find((route: { path: string }) => route.path.endsWith(`/${path}/${child}/`))
        return {
          title: route?.meta?.nav ?? route?.meta?.title ?? child,
          to: route?.path,
          disabled: !route,
        }
      } else {
        return {
          title: child.title!,
          children: generateItems(child, path, locale),
        }
      }
    })
  }

  return undefined
}

export default defineComponent({
  name: 'AppList',

  props: {
    items: {
      type: Array,
      default: () => ([]),
    } as Prop<Item[]>,
    nav: Boolean,
  },

  setup(props) {
    // const { t, te, locale } = useI18n()
    const opened = ref<string[]>([])

    const computedItems = computed(() => props.items?.map(item => {
      if (item.heading) return { type: 'subheader', title: item.heading }
      if (item.divider) return { type: 'divider' }

      return {
        title: item.title,
        value: item.title,
        // prependIcon: opened.value.includes(item.title!) ? item.activeIcon : item.inactiveIcon,
        children: item.title === 'api' ? generateApiItems(item.title!) : generateItems(item, item.path!, item.path!),
      }
    }))

    return {
      computedItems,
      opened,
    }
  },
})
</script>

<style lang="scss">
// .v-list-item__content {
//   width: 70%;
// }

// .v-list-subheader--inset {
//   --indent-padding: 0px !important;
// }

// .v-list-group__items {
//   .v-list-item--variant-text {
//     margin-left: -20px;
//   }
// }
</style>
