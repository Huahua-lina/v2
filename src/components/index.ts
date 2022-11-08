import { App } from 'vue'
// import LButton from './Button/Button.vue'
// import LIcon from './Icon/Icon.vue'
import NaButton from './NaButton/NaButton.vue'
import NaIcon from './NaToast/NaToast.vue'
// import 'uno.css'
const compoennts = [NaButton, NaIcon]
// export { LButton, LIcon }
export default {
  install(app: App): void {
    compoennts.forEach((item) => app.component(item.name, item))
  }
}
