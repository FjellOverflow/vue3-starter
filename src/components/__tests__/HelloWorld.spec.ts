import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import i18n from '@/plugins/i18n'

describe('renders HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello, World!' },
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.text()).toContain('Hello, World!')
  })
})
