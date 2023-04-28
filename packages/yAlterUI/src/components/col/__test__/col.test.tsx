import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import { YRow } from '@/components/row'
import { YCol } from '..'

describe('YCol', () => {
  it('create', () => {
    const wrapper = mount(() => <YCol />)
    expect(wrapper.classes()).toContain('y-col')
  })

  it('span', () => {
    const wrapper = mount(() => <YCol span={12} />)
    expect(wrapper.classes()).toContain('y-col-12')
  })

  it('pull', () => {
    const wrapper = mount(() => <YCol span={12} pull={3} />)
    expect(wrapper.classes()).toContain('y-col-pull-3')
  })

  it('push', () => {
    const wrapper = mount(() => <YCol span={12} push={3} />)
    expect(wrapper.classes()).toContain('y-col-push-3')
  })

  it('gutter', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <YRow gutter={20}>
            <YCol span={12} ref="col"></YCol>
          </YRow>
        )
      },
    })

    const YColElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(YColElm.style.paddingLeft === '10px').toBe(true)
    expect(YColElm.style.paddingRight === '10px').toBe(true)
  })

  it('change gutter value', async () => {
    const outer = ref(20)

    const wrapper = mount({
      setup() {
        return () => (
          <YRow gutter={outer.value} ref="row">
            <YCol span={12} ref="col" />
          </YRow>
        )
      },
    })

    const rowElm = wrapper.findComponent({ ref: 'row' }).element as HTMLElement
    const YColElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(rowElm.style.marginLeft === '-10px').toBe(true)
    expect(rowElm.style.marginRight === '-10px').toBe(true)
    expect(YColElm.style.paddingLeft === '10px').toBe(true)
    expect(YColElm.style.paddingRight === '10px').toBe(true)

    outer.value = 40 // change gutter value
    await nextTick()
    expect(rowElm.style.marginLeft === '-20px').toBe(true)
    expect(rowElm.style.marginRight === '-20px').toBe(true)
    expect(YColElm.style.paddingLeft === '20px').toBe(true)
    expect(YColElm.style.paddingRight === '20px').toBe(true)
  })

  it('responsive', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <YRow gutter={20}>
            <YCol
              ref="col"
              sm={{ span: 4, offset: 2 }}
              md={8}
              lg={{ span: 6, offset: 3 }}
            />
          </YRow>
        )
      },
    })

    const YColElmClass = wrapper.findComponent({ ref: 'col' }).classes()
    console.log('YColElmClass----', YColElmClass);
    
    debugger
    expect(YColElmClass.includes('y-col-sm-4')).toBe(true)
    expect(YColElmClass.includes('y-col-sm-4')).toBe(true)
    expect(YColElmClass.includes('y-col-sm-offset-2')).toBe(true)
    expect(YColElmClass.includes('y-col-lg-6')).toBe(true)
    expect(YColElmClass.includes('y-col-lg-offset-3')).toBe(true)
    expect(YColElmClass.includes('y-col-md-8')).toBe(true)
  })
})
