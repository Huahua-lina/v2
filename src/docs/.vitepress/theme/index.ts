// import Theme from "vitepress/theme" // 默认主题
import Theme from 'vitepress/theme'
// import LUI from "../../../../src/components/entry"
import LUI from '../../../../DemoDist/DemoDist'
import '../../../../DemoDist/assets/entry.f078ce3d.css'
// @ts-ignore
import demo from 'vitepress-demoblock/demo.vue'
export default {
  ...Theme,
  enhanceApp(ctx) {
    // 单个组件
    // Theme.enhanceApp(ctx)
    // ctx.app.component("VueClickAwayExample", LUI)

    // 多个组件
    ctx.app.use(LUI)
    ctx.app.component('demo', demo)
  }
}
