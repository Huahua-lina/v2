import Button from '../index'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
describe('color', () => {
  test('default', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button'
      }
    })
    expect(
      wrapper
        .classes()
        .map((v) => v.replace(' ', ''))
        .includes('bg-red-500')
    ).toBe(true)
  })
  test('red', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button'
      },
      props: {
        color: 'green'
      }
    })
    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-green-500')
    ).toBe(true)
  })
})
