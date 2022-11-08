import { openBlock as a, createElementBlock as _ } from "vue";
const d = {
  name: "NaToast"
};
const r = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, n] of o)
    e[s] = n;
  return e;
}, p = { class: ".toast" };
function u(t, o, e, s, n, l) {
  return a(), _("div", p, "\u6211\u662F\u4E00\u4E2AToast");
}
const c = /* @__PURE__ */ r(d, [["render", u], ["__scopeId", "data-v-4e4c1ddd"]]), f = {
  install(t) {
    t.component(c.name, c);
  }
};
export {
  f as default
};
//# sourceMappingURL=NaToast.mjs.map
