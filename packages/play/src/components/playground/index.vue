<template>
 <div>{{ message }}</div>
 <y-footer></y-footer>
</template>

<script>
 import { YFooter } from 'yalertui';
  export default {
    name: 'Playground',
    components: {
      YFooter
    },
    setup () {
      return {
        message: 'Hello Vue!'
      }
    },
  }
</script>
