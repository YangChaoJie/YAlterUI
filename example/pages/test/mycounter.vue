<!-- <template>
  <p>Counter: {{ counter }}</p>

  <button @click="reset">Reset</button>
  <button @click="terminate">☠️</button>
</template>
<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Counter',
  setup(props, context) {
    const counter = ref(0)
    const interval = setInterval(() => {
      counter.value++
    }, 1000)

    const reset = () => {
      console.log('eee');
      counter.value = 0
    }

    const terminate = () => {
      clearInterval(interval)
    }

    context.expose({ reset })
    return {
      counter,
      reset,
      terminate
    }
    // return () => h('div', [
    //   h('p', `Counter: ${counter.value}`),
    //   h('button', { onClick: reset }, 'Reset'),
    //   h('button', { onClick: terminate }, 'Terminate')
    // ])
  }
})
</script> -->
<template>
  <p>Counter: {{ counter }}</p>

  <button @click="reset">Reset</button>
  <button @click="terminate">☠️</button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup (props, context) {
    const counter = ref(null)

    const interval = setInterval(() => {
      counter.value++
    }, 1000)

    const reset = () => {
      console.log('ll33ll');
      counter.value = 1
    }

    const terminate = () => {
      console.log(interval)
      clearInterval(interval)
    }

    context.expose({ reset,counter })

    return {
      counter,
      reset,
      terminate
    }
  }
}
</script>

