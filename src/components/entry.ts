import { App } from 'vue'
import LButton from './Button/index.vue'
import LIcon from './Icon/Icon.vue'
import 'uno.css'
const compoennts = [LButton, LIcon]
export { LButton, LIcon }
export default {
  install(app: App): void {
    compoennts.forEach((item) => app.component(item.name, item))
  }
}
