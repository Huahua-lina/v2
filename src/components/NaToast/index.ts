import NaToast from './NaToast.vue'
export default {
  install(app) {
    app.component(NaToast.name, NaToast)
  }
}
