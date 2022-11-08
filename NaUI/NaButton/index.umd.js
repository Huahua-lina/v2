;(function (e, n) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = n(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], n)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.NaButton = n(e.Vue)))
})(this, function (e) {
  'use strict'
  const n = { name: 'NaButton' },
    a = '',
    i = (t, c) => {
      const o = t.__vccOpts || t
      for (const [d, u] of c) o[d] = u
      return o
    },
    _ = { class: 'button' }
  function r(t, c, o, d, u, p) {
    return e.openBlock(), e.createElementBlock('button', _, [e.renderSlot(t.$slots, 'default', {}, void 0, !0)])
  }
  const s = i(n, [
    ['render', r],
    ['__scopeId', 'data-v-24ecad65']
  ])
  return {
    install(t) {
      t.component(s.name, s)
    }
  }
})
//# sourceMappingURL=index.umd.js.map
