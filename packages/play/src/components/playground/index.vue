<template>
 <div>{{ message }}</div>
 <div>button size</div>
 <y-button size="small">small</y-button>
 <y-button size="large">large</y-button>
 <y-button disabled>disabled</y-button>
 <div>button type</div>
 <y-button :size="as" :type="type" @click="btnClick">default</y-button>
 <y-button type="success">Sucess</y-button>
 <y-button type="warning">warning</y-button>
 <y-button type="info">info</y-button>
 <y-button type="error" disabled>error</y-button>
 <y-button type="primary" @click="btnClick">primary</y-button>
 <y-footer></y-footer>
</template>
<script setup lang="ts">
  // code here
  import { YFooter, YButton } from 'yalertui';
  // 导出类型
  import type { ButtonType, Size } from 'yalertui';
  import { ref } from 'vue';
  let button: ButtonType = 'info';
  console.log(button);
  let message = ref('hello')
  const btnClick = (e: MouseEvent)=> {
    // 响应式测试
    if (as.value === 'large') {
      as.value = 'small'
    } else {
      as.value = 'large'
    }

    if (type.value === 'default') {
      type.value = 'success'
    } else {
      type.value = 'default'
    }
    console.log('-----------', e);
  }
  let as = ref<Size>('small')
  const type = ref<ButtonType>('default')
</script>
<!-- <script>
 import { YFooter, YButton } from 'yalertui';
  export default {
    name: 'Playground',
    components: {
      YFooter,
      YButton
    },
    props: {
      aa: {
        type: String
      }
    },
    setup () {
      return {
        message: 'Hello Vue!'
      }
    },
  }
</script> -->
