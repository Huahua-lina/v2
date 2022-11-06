import { createApp } from 'vue'
// import LUI from "../DemoDist/DemoDist.js"
// import "../DemoDist/assets/entry.f078ce3d.css"
import LUI from './components/entry'
createApp({
  template: `<LButton color='green' >asds     <LIcon name="circle-close-filled"/></LButton>
  `
})
  .use(LUI) // 增加整个组件
  // .component(LButton3.name, LButton3) // 增加单个组件
  .mount('#app')
