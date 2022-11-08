import { createApp } from 'vue'
import NaUI from '../NaUI'
createApp({
  template: `
    // <NaButton>你好啊</NaButton>
    // <NaToast>asdasd</NaToast>
  <NaCount />
  `
})
  .use(NaUI)
  .mount('#app')
