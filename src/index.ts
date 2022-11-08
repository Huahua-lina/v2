import { createApp } from 'vue'
import NaUI from '../NaUI/NaUI.mjs'
import '../NaUI/assets/index.c7ed3603.css'
// import NaUI from './components/index'
createApp({
  template: `
  <div style="backgrouond-color:red;height:100px;">
  <NaButton>你好啊</NaButton>
  </div>
  `
})
  .use(NaUI)
  // .use(NaButton) // 增加整个组件
  // .use(NaIcon)
  // .component(LUI.name, LUI) // 增加单个组件
  .mount('#app')
