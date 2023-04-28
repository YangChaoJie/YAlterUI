import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { YCol } from '@/components/col'
import { YRow } from '..'

describe('YRow', () => {
  it('render', () => {
    const wrapper = mount(() => (
      <YRow>
        <YCol></YCol>
        <YCol span={8}></YCol>
        <YCol span={16}></YCol>
      </YRow>
    ))

    expect(wrapper.find('.y-col').exists()).toBe(true)
    expect(wrapper.find('.y-col-24').exists()).toBe(true)
    expect(wrapper.find('.y-col-8').exists()).toBe(true)
    expect(wrapper.find('.y-col-16').exists()).toBe(true)
  })

  test('create', () => {
    const wrapper = mount(() => <YRow />)
    expect(wrapper.classes()).toContain('y-row')
  })

  test('gutter', () => {
    const wrapper = mount(() => (
      <YRow gutter={20}>
      </YRow>
    ))
    const rowElm = wrapper.element as HTMLElement
    expect(rowElm.style.marginLeft).toEqual('-10px')
    expect(rowElm.style.marginRight).toEqual('-10px')
  })

  test('justify', () => {
    const wrapper = mount(() => <YRow justify="end" />)
    expect(wrapper.classes()).toContain('is-justify-end')
  })
  test('align', () => {
    const wrapper = mount(() => <YRow align="bottom" />)
    expect(wrapper.classes()).toContain('is-align-bottom')
  })
})
