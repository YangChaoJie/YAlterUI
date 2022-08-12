import { shallowMount } from '@vue/test-utils'
import { expect, test  } from 'vitest'
import { YFooter } from '../YFooter'

test('mount component', ()=> {
  const wrapper = shallowMount(YFooter)
  console.log('wrapper.html()', wrapper.html());
  expect(wrapper.html()).to.contain('<div')
})
