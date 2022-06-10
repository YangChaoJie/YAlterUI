<template>
  <div class="suspense">
    <button @click="reload">Reload page</button>
    <Suspense>
      <WithSuspense :time="2000">
        <WithSuspense :time="1500" />
        <WithSuspense :time="1200">
          <WithSuspense :time="1000" />

          <!-- Nest a second Suspense -->
          <Suspense>
            <WithSuspense :time="5000" />
            <template #fallback>
              <Spinner />
            </template>
          </Suspense>
        </WithSuspense>
      </WithSuspense>
      <template #fallback>
        <div>
          124
          <Spinner />
        </div>
      </template>
    </Suspense>
  </div>

</template>

<script setup>
import WithSuspense from './components/WithSuspense.vue'
import Spinner from './components/Spinner.vue'

const reload = () => {
  window.location.reload()
}
</script>

<style>
html {
  background: slategray;
}

button {
  padding: 4px 12px;
  margin-bottom: 20px;
  background: white;
  font-size: 14px;
  border: 1px solid black;
  cursor: pointer;
}
</style>
