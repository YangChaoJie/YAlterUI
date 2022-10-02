import type { Component, PropType } from 'vue'
import { propsFactory } from '../util/propsFactory';
// Types
export type IconValue = string | Component

export const IconValue = [String, Function, Object] as PropType<IconValue>

export const makeIconPages = propsFactory({
  icon: {
    type: IconValue,
    required: true
  },
  tag: {
    type: String,
    required: true
  }
}, 'icon')
