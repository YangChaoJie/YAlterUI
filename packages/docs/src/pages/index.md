---
title: Hello
meta:
  - name: description
    content: Hello World
test: test
---
# Hello world!

<!-- Frontmatter: {{ frontmatter }}

Code: `{{ frontmatter }}`

Code Block: -->
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
import HomeLogo from '@/components/home/head.vue' 
</script>

<Footer />
<HomeLogo> </HomeLogo>

<router-link to="/about">about</router-link>
