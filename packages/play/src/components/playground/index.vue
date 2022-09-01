<template>
 <div>{{ message }}</div>
 <y-button>12</y-button>
 <y-footer></y-footer>
</template>

<script>
 import { YFooter, YButton } from 'yalertui';
 
  export default {
    name: 'Playground',
    components: {
      YFooter,
      YButton
    },
    setup () {
      return {
        message: 'Hello Vue!'
      }
    },
  }
</script>
