import { App } from 'vue'
// @ts-ignore
import LButton from './Button.vue'
export default {
  install(app: App) {
    app.component(LButton.name, LButton)
  }
}
