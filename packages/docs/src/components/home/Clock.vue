<template lang='pug'>
div
  .box.large.borderless.centered.overflow-hidden(ref='el')
</template>

<script setup lang="ts">
import { p5i } from 'p5i'
import type { P5I } from 'p5i'
import { onMounted, onUnmounted, ref } from 'vue'

const el = ref<HTMLCanvasElement | null>(null)

const w = 360
const h = 200


const {
  createCanvas,
 ellipse, stroke,
  sin,
  cos,
  min,
  fill,
  map,
  second,
  minute,
  hour,
  norm,
  noStroke,
  radians,
  strokeWeight,
  line,
  POINTS,
  beginShape,
  vertex,
  endShape,
  mount, unmount,
   TWO_PI,
   HALF_PI,
} = p5i()

let cx: number, cy: number;
let secondsRadius: number;
let minutesRadius: number;
let hoursRadius: number;
let clockDiameter: number;

function setup() {
  createCanvas(w, h);
  stroke(255);

  let radius = min(w, h) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = w / 2;
  cy = h / 2;
}


function draw({ mouseX, mouseY }: P5I) {
  //  background(230);

  // Draw the clock background
  noStroke();
  fill(135, 205, 250);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(24, 103, 192);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}

onMounted(() => mount(el.value! as HTMLElement, { setup, draw }))
onUnmounted(() => unmount())
</script>
