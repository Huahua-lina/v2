import "./style.css" 

const d = { class: 'count' },
  f = {
    name: 'NaCount'
  },
  m = /* @__PURE__ */ s({
    ...f,
    setup(t) {
      let n = u(0)
      function e() {
        n.value += 1
      }
      function o() {
        n.value -= 1
      }
      return (_, C) => (l(), r('div', d, [c('button', { onClick: e }, '+'), c('span', null, p(i(n)), 1), c('button', { onClick: o }, '-')]))
    }
  })
const v = (t, n) => {
    const e = t.__vccOpts || t
    for (const [o, _] of n) e[o] = _
    return e
  },
  a = /* @__PURE__ */ v(m, [['__scopeId', 'data-v-4a92c169']]),
  x = {
    install(t) {
      t.component(a.name, a)
    }
  }
export { x as default }
//# sourceMappingURL=index.mjs.map