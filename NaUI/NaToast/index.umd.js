;(function (e, n) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = n(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], n)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.NaToast = n(e.Vue)))
})(this, function (e) {
  'use strict'
  const n = { name: 'NaToast' },
    f = '',
    i = (t, a) => {
      const o = t.__vccOpts || t
      for (const [c, d] of a) o[c] = d
      return o
    },
    _ = { class: 'toast' }
  function r(t, a, o, c, d, p) {
    return e.openBlock(), e.createElementBlock('div', _, [e.renderSlot(t.$slots, 'default', {}, void 0, !0)])
  }
  const s = i(n, [
    ['render', r],
    ['__scopeId', 'data-v-aaf88a8c']
  ])
  return {
    install(t) {
      t.component(s.name, s)
    }
  }
})
//# sourceMappingURL=index.umd.js.map
