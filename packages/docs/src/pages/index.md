---
title: Hello
meta:
  - name: description
    content: Hello World
test: test
---
# Hello world!

Frontmatter: {{ frontmatter }}

Code: `{{ frontmatter }}`

Code Block:
```
{{ frontmatter }}
```

<style>
h1 {
  color: cadetblue;
}
</style>

<script setup>
import Footer from '@/components/home/Footer.vue'
</script>

<Footer />

<router-link to="/">Home</router-link>
