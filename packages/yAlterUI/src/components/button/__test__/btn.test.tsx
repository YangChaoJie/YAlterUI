import { shallowMount } from '@vue/test-utils'
import { describe, expect, test  } from 'vitest'
import { YButton } from '../button'

describe('Ybutton', ()=> {
  test('should work as expected', ()=> {
    const a = Math.sqrt(4)
    expect(Math.sqrt(4)).toBe(2) 
  }) 
  test('mount component', ()=> {
    const wrapper = shallowMount(YButton)
    expect(wrapper.html()).toMatchSnapshot()
    // expect(wrapper.html()).to.contain('<div')
  })
})

