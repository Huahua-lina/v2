import { defineComponent as s, openBlock as c, createElementBlock as r, normalizeClass as a, renderSlot as p, unref as u } from "vue";
const m = {
  name: "LButton"
}, d = /* @__PURE__ */ s({
  ...m,
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
}, _ = /* @__PURE__ */ s({
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
});
const i = [d, _], x = {
  install(e) {
    i.forEach((n) => e.component(n.name, n));
  }
};
export {
  d as LButton,
  _ as LIcon,
  x as default
};
//# sourceMappingURL=DemoDist.mjs.map
