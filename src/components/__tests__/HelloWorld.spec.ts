import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TicTacToeBoard from '../TicTacToeBoard.vue'

describe('TicTacToeBoard', () => {
  it('renders properly', () => {
    const wrapper = mount(TicTacToeBoard)
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
