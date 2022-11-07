import { defineComponent as s, openBlock as c, createElementBlock as r, normalizeClass as a, renderSlot as p, unref as u } from "vue";
const d = {
  name: "LButton"
}, m = /* @__PURE__ */ s({
  ...d,
  props: {
    color: { default: "red" },
    size: { default: "normal" }
  },
  setup(e) {
    const o = `bg-${e.color}-500 `;
    return (t, l) => (c(), r("button", {
      class: a(o + "align-center flex justify-center py-2 px-4 font-semibold rounded-lg shadow-md text-white border-none cursor-pointer")
    }, [
      p(t.$slots, "default")
    ], 2));
  }
}), f = {
  name: "LIcon"
}, i = /* @__PURE__ */ s({
  ...f,
  props: {
    name: { default: "circle-check-filled" }
  },
  setup(e) {
    const o = e.name;
    return (t, l) => (c(), r("i", {
      class: a("i-ep:" + u(o))
    }, null, 2));
  }
}), _ = [m, i], x = {
  install(e) {
    _.forEach((n) => e.component(n.name, n));
  }
};
export {
  m as LButton,
  i as LIcon,
  x as default
};
//# sourceMappingURL=DemoDist.mjs.map
