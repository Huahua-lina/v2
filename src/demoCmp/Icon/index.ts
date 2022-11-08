import { App } from 'vue'
// @ts-ignore
import Icon from './Icon.vue'

export default {
  install(app: App) {
    app.component(Icon.name, Icon)
  }
}
