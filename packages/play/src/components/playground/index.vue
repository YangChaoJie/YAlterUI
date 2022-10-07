<template>
 <div>{{ message }}</div>
 <div>button size</div>
 <y-button size="small">small</y-button>
 <y-button size="large">large</y-button>
 <y-button disabled>disabled</y-button>
 <div>--button type---</div>
 <y-button :size="as" :type="type" @click="btnClick">default</y-button>
 <y-button type="success">Sucess</y-button>
 <y-button type="warning">warning</y-button>
 <y-button type="info">info</y-button>
 <y-button type="error" disabled>error</y-button>
 <y-button type="primary" @click="btnClick">primary</y-button>
 <div>---button text---</div>
 <y-button text>Sucess</y-button>
 <div>---button link---</div>
 <y-button link type="primary">this is a link</y-button>
 <div>---button shape---</div>
 <y-button shape="circle">circle</y-button>
 <y-button shape="round">round</y-button>
 <div>---button dashed---</div>
 <y-button dashed>round</y-button>
 <y-footer></y-footer>
 <div>----icon-----</div>
 <y-icon color="red" size="16px">
    <Edit />
  </y-icon>
  <div>----icon--property---</div>
  <y-icon :icon="Loading" class="is-loading"></y-icon>
  <y-icon color="red" size="16px" class="is-loading">
    <Loading />
  </y-icon>
</template>
<script setup lang="ts">
  // code here
  import { YFooter, YButton, YIcon } from 'yalert-ui';
  import { Edit, Loading } from '@yalert-ui/icons'
  // 导出类型
  import type { ButtonType, Size } from 'yalert-ui';
  // import { I1, Car } from '@yalert-ui/icons';
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
 import { YFooter, YButton } from 'yalert-ui';
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
