import { presetUno, presetIcons } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import Unocss from 'unocss/vite'
import safelistButton from './Button'
import safeListIcon from './Icon'
const safelist = [...safelistButton, ...safeListIcon] // 只允许一层数组
export default () =>
  Unocss({
    safelist,
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        extraProperties: {}
      })
    ],
    rules: [['align-center', { 'align-items': 'center' }]]
  })
