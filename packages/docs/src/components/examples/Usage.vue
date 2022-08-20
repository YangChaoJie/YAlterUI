<template>
  <!-- <app-sheet >
   
  </app-sheet> -->
   <vue-file  class="mb-6" :file="`${name}/usage`" />
</template>

<script>
  export default {
    name: 'Usage',

    props: {
      name: String,
    },
  }
</script>
