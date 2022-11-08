;(function (e, n) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = n(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], n)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.NaCount = n(e.Vue)))
})(this, function (e) {
  'use strict'
  const n = { class: 'count' },
    u = { name: 'NaCount' },
    a = e.defineComponent({
      ...u,
      setup(t) {
        let o = e.ref(0)
        function c() {
          o.value += 1
        }
        function s() {
          o.value -= 1
        }
        return (i, f) => (
          e.openBlock(),
          e.createElementBlock('div', n, [
            e.createElementVNode('button', { onClick: c }, '+'),
            e.createElementVNode('span', null, e.toDisplayString(e.unref(o)), 1),
            e.createElementVNode('button', { onClick: s }, '-')
          ])
        )
      }
    }),
    d = '',
    _ = ((t, o) => {
      const c = t.__vccOpts || t
      for (const [s, i] of o) c[s] = i
      return c
    })(a, [['__scopeId', 'data-v-4a92c169']])
  return {
    install(t) {
      t.component(_.name, _)
    }
  }
})
//# sourceMappingURL=index.umd.js.map
