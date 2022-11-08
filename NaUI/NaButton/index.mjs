import "./style.css" 

import { openBlock as a, createElementBlock as _, renderSlot as r } from "vue";
const d = {
  name: "NaButton"
};
const u = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, c] of o)
    e[n] = c;
  return e;
}, l = { class: "button" };
function p(t, o, e, n, c, i) {
  return a(), _("button", l, [
    r(t.$slots, "default", {}, void 0, !0)
  ]);
}
const s = /* @__PURE__ */ u(d, [["render", p], ["__scopeId", "data-v-24ecad65"]]), m = {
  install(t) {
    t.component(s.name, s);
  }
};
export {
  m as default
};
//# sourceMappingURL=index.mjs.map
