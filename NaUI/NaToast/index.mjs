import "./style.css" 
import { openBlock as c, createElementBlock as _, renderSlot as r } from 'vue'
const d = {
  name: 'NaToast'
}
const l = (t, o) => {
    const e = t.__vccOpts || t
    for (const [a, s] of o) e[a] = s
    return e
  },
  p = { class: 'toast' }
function f(t, o, e, a, s, i) {
  return c(), _('div', p, [r(t.$slots, 'default', {}, void 0, !0)])
}
const n = /* @__PURE__ */ l(d, [
    ['render', f],
    ['__scopeId', 'data-v-aaf88a8c']
  ]),
  m = {
    install(t) {
      t.component(n.name, n)
    }
  }
export { m as default }
//# sourceMappingURL=index.mjs.map
