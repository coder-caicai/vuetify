import { test } from '@/test'
import VProgressLinear from '@/components/VProgressLinear'

test('VProgressLinear.js', ({ mount }) => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        value: 33
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render inactive component and match snapshot', () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        value: 33,
        active: false
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with color and match snapshot', () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        value: 33,
        color: 'orange'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with color and background opacity and match snapshot', () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        value: 33,
        color: 'orange',
        backgroundOpacity: 0.5
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with color and background color and match snapshot', () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        value: 33,
        color: 'orange',
        backgroundColor: 'blue'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with color and background color and opacity and match snapshot', () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        value: 33,
        color: 'orange',
        backgroundColor: 'blue',
        backgroundOpacity: 0.5
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render indeterminate progress and match snapshot', () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        indeterminate: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render indeterminate progress with query prop and match snapshot', () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        indeterminate: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with buffer value and match snapshot', async () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        value: 33,
        bufferValue: 80
      }
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({
      bufferValue: 0
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with buffer value and value > buffer value and match snapshot', () => {
    const wrapper = mount(VProgressLinear, {
      propsData: {
        value: 90,
        bufferValue: 80
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

})
