import './style.css';
import { openBlock as s, createElementBlock as _, renderSlot as r, defineComponent as l, ref as p, createElementVNode as c, toDisplayString as i, unref as f } from "vue";
const v = {
  name: "NaButton"
};
const u = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, a] of t)
    e[o] = a;
  return e;
}, $ = { class: "button" };
function m(n, t, e, o, a, d) {
  return s(), _("button", $, [
    r(n.$slots, "default", {}, void 0, !0)
  ]);
}
const N = /* @__PURE__ */ u(v, [["render", m], ["__scopeId", "data-v-24ecad65"]]), y = {
  name: "NaToast"
};
const h = { class: "toast" };
function x(n, t, e, o, a, d) {
  return s(), _("div", h, [
    r(n.$slots, "default", {}, void 0, !0)
  ]);
}
const C = /* @__PURE__ */ u(y, [["render", x], ["__scopeId", "data-v-aaf88a8c"]]), b = { class: "count" }, g = {
  name: "NaCount"
}, k = /* @__PURE__ */ l({
  ...g,
  setup(n) {
    let t = p(0);
    function e() {
      t.value += 1;
    }
    function o() {
      t.value -= 1;
    }
    return (a, d) => (s(), _("div", b, [
      c("button", { onClick: e }, "+"),
      c("span", null, i(f(t)), 1),
      c("button", { onClick: o }, "-")
    ]));
  }
});
const B = /* @__PURE__ */ u(k, [["__scopeId", "data-v-4a92c169"]]), I = [N, C, B], S = {
  install(n) {
    I.forEach((t) => n.component(t.name, t));
  }
};
export {
  S as default
};
//# sourceMappingURL=NaUI.mjs.map
