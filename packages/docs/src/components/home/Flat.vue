<template lang='pug'>
paper
  .box.large.borderless.centered.overflow-hidden(ref='el')
</template>

<script setup lang="ts">
import { p5i } from 'p5i'
import type { P5I } from 'p5i'
import { onMounted, onUnmounted, ref } from 'vue'

const el = ref<HTMLCanvasElement | null>(null)

const SQRT_2 = Math.sqrt(2)

const w = 800
const h = 800

const size = 398
const ds = size / 2

const cx = w / 2
const cy = h / 2

const { trunc } = Math
const {
  createCanvas, millis, rectMode,
  rotate, push, pop, translate, 
 ellipse, background, rect, triangle, stroke,
  sin,
  fill,
  mount, unmount,
  CENTER, PI,
} = p5i()

let st = 0

function setup() {
  st = millis()
  createCanvas(w, h)
  rectMode(CENTER)
  stroke('#333')
  fill(24, 103, 192);
}

const ROUND = 1000 * PI

function draw({ mouseX, mouseY }: P5I) {
  const t = millis() - st

  const pattern = trunc(t / ROUND) % 3
  const mode = trunc(t / ROUND / 3)

  if (mode === 0)
    background('white')

  const s = sin(t / 1000) ** 3
  const rad = t / 3500 * (1 + t / 50000)

  push()
  translate(cx, cy)
  rotate(rad)
  if (pattern === 1) {
    ellipse(0, 0, size, s * size)
  }
  else if (pattern === 2) {
    const h = ds * s / SQRT_2
    triangle(0, h, -ds, -h, ds, -h)
  }
  else {
    rect(0, 0, size, s * size)
  }

  pop()
}

onMounted(() => mount(el.value! as HTMLElement, { setup, draw }))
onUnmounted(() => unmount())
</script>
