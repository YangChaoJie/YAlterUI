import { shallowMount, mount } from '@vue/test-utils'
import { describe, expect, test, it  } from 'vitest'
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

  it('size', () => {
    const wrapper = mount(() => <YButton size={'large'}></YButton>)

    expect(wrapper.find('.y-btn').classes()).toContain('y-btn--large')
  })

  it('circle', () => {
    const wrapper = mount(() => <YButton shape='circle'></YButton>)

    expect(wrapper.find('.y-btn').classes()).toContain('is-circle')
  })

  it('disabled', () => {
    const wrapper = mount(() => <YButton disabled></YButton>)

    expect(wrapper.find('.y-btn').classes()).toContain('is-disabled')
  })
})

