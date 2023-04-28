import { nextTick, ref, render } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import { YGrid } from '..'
import { YGridItem } from '../grid-item'

{/* <y-grid :cols="3" :colGap="12" :rowGap="16" class="grid-demo-grid" :collapsed="collapsed">
<y-grid-item class="demo-item">item</y-grid-item>
<y-grid-item class="demo-item">item</y-grid-item>
<y-grid-item class="demo-item">item</y-grid-item> */}
describe('YGrid', () => {
  test('create', () => {
    const wrapper = mount((
      <YGrid cols={3} colGap={12} rowGap={16}>
        <YGridItem>
          11221
        </YGridItem>
        <YGridItem class="demo-item">item</YGridItem>
      </YGrid>
    ))
    console.log('y-grid-item y-grid-item', wrapper.classes());

    expect(wrapper.classes()).toContain('y-grid')
    const gridItemWapper = wrapper.findComponent(YGridItem)
    expect(gridItemWapper.classes()).toContain('y-grid-item')
  })
})
