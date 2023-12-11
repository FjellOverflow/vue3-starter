import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'
import { i18n } from '../src/i18n'

describe('renders HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello, World!' }, global: {
      plugins: [i18n],
    } })
    expect(wrapper.text()).toContain('Hello, World!')
  })
})
