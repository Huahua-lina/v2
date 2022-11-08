import './assets/index.2d9575a3.css';
import { openBlock as c, createElementBlock as _, renderSlot as r } from "vue";
const u = {
  name: "NaButton"
};
const a = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
}, p = { class: "button" };
function l(t, e, o, n, s, d) {
  return c(), _("button", p, [
    r(t.$slots, "default", {}, void 0, !0)
  ]);
}
const f = /* @__PURE__ */ a(u, [["render", l], ["__scopeId", "data-v-e6cd14df"]]), i = {
  name: "NaToast"
};
const $ = { class: ".toast" };
function v(t, e, o, n, s, d) {
  return c(), _("div", $, "\u6211\u662F\u4E00\u4E2AToast");
}
const m = /* @__PURE__ */ a(i, [["render", v], ["__scopeId", "data-v-4e4c1ddd"]]), x = [f, m], h = {
  install(t) {
    x.forEach((e) => t.component(e.name, e));
  }
};
export {
  h as default
};
//# sourceMappingURL=NaUI.mjs.map
