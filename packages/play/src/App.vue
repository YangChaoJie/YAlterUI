<template>
  <ExampleA />
  <Playground></Playground>
  <router-view />
  <img src="http://oss-bfzks.onlyets.cn/lk/scan/208/426016/73582/7358210318_0.tif?Expires=1676598685&amp;OSSAccessKeyId=STS.NTaJeLm3qaj3nknxtQYFtGBaG&amp;Signature=fJYxG%2B3ndtwCgKxMlXrsTlEMoD4%3D&amp;x-oss-process=image%2Fformat%2Cjpg%2Fquality%2Cq_50&amp;security-token=CAISmgJ1q6Ft5B2yfSjIr5fUAd%2F4gOxQ1qjYbE3fnHQEVclYqIfKpTz2IHhPdXZsCOobsfo0mW9Y6fsdlq1vRoRZHeUiuU78tsY5yxioRqackcLXhOV2gf%2FIMGyXDAGBq622Su7lTdTbV%2B6wYlTf7EFayqf7cjPQMD7INoaS29wdMbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8BmyfUNjoVh7kngtq%2Fb9kNeB6wvXyVf02OwO4MbTWsH6MpM2ZscjDY3vhrYtJvT7vXQOu0QQxsBfl7dZ%2FDrLhNaZDmRK7g%2BOW%2BiuqYU0fVAlN%2FJnRPAf8aesyqAnoJ%2Fak4Xm1hBKJvpJVCfSQo%2BtxsbeEf%2BuLMw%2Bcbvr4aR1bi4xqfMagAE%2FY1gv16642dG7%2F8l%2B%2B%2Bn2h8UJ5i0UfhCqLj85nFKPOzb7Zwtn5xefZ%2FPaShQKzfjtqCXtKpVt8pwNBu0sCiisBRuM9zk2lNEs7oWJodbgl5LTMeusNII5TaVwcWbENWzZsUdDnTXDpiRwSfRxn%2BS1KHhUy8n3PPRX2G61EClqYQ%3D%3D" />
</template>

<script setup lang="ts">
import { ExampleA } from './components/example-a/exam-a'
import Playground from '~/components/playground/index.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
