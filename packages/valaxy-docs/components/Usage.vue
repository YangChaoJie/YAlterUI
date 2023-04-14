<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'
// import { useLang } from '../composables/lang'
import { CaretTop } from '@yalert-ui/icons'
// import { useSourceCode } from '../composables/source-code'
// import { usePlayground } from '../composables/use-playground'

// import demoBlockLocale from '../../i18n/component/demo-block.json'

import Example from './Example.vue'
import SourceCode from './SouceCode.vue'

const props = defineProps<{
  // demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const vm = getCurrentInstance()!

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle()
// const lang = useLang()
// const demoSourceUrl = useSourceCode(toRef(props, 'path'))

const formatPathDemos = computed(() => {
  const demos = {}
  const componentId = props.path.length > 0 && props.path.split('/')[0]
  console.log('componentId----', componentId);
  
  const demos0 = import.meta.glob(`../examples/*/*.vue`, { eager: true })
  console.log('demos0----', demos0);
  Object.keys(demos0).forEach((key) => {
    demos[key.replace('../examples/', '').replace('.vue', '')] =
    (demos0[key] as any).default || {}
  })
  console.log('demos------------', demos);
  return demos
})

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

// const onPlaygroundClick = () => {
  // const { link } = usePlayground(props.rawSource)
  // if (!isClient) return
  // window.open(link)
// }

const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error('copy-error')
  }
  try {
    await copy()
    $message.success('copy-success')
  } catch (e: any) {
    $message.error(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />

      <ElDivider class="m-0" />

      <div class="op-btns">
        <ElTooltip :content="'edit-in-editor'" :show-arrow="false">
          <ElIcon :size="16" class="op-btn">
            <!-- <i-ri-flask-line @click="onPlaygroundClick" /> -->
          </ElIcon>
        </ElTooltip>
        <ElTooltip content="edit-on-github" :show-arrow="false">
          <ElIcon
            :size="16"
            class="op-btn github"
            style="color: var(--text-color-light)"
          >
            <!-- <a :href="demoSourceUrl" rel="noreferrer noopener" target="_blank">
              <i-ri-github-line />
            </a> -->
          </ElIcon>
        </ElTooltip>
        <ElTooltip content="copy-code" :show-arrow="false">
          <ElIcon :size="16" class="op-btn" @click="copyCode">
            <!-- <i-ri-file-copy-line /> -->
          </ElIcon>
        </ElTooltip>
        <ElTooltip content="view-source" :show-arrow="false">
          <ElIcon :size="16" class="op-btn" @click="toggleSourceVisible()">
            <!-- <i-ri-code-line /> -->
          </ElIcon>
        </ElTooltip>
      </div>

      <ElCollapseTransition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </ElCollapseTransition>

      <Transition name="el-fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="toggleSourceVisible(false)"
        >
          <ElIcon :size="16">
            <CaretTop />
          </ElIcon>
          <span>hide-source </span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
