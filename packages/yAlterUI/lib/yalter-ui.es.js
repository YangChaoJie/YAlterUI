import { defineComponent as o, createVNode as r, createTextVNode as u } from "vue";
const p = o({
  name: "YFooter",
  setup(n, {
    slots: e
  }) {
    return () => {
      var t;
      return r("div", null, [u("123"), (t = e.default) == null ? void 0 : t.call(e)]);
    };
  }
}), i = {
  install(n) {
    n.component("y-footer", p);
  }
}, a = o({
  name: "YButton",
  setup(n, {
    slots: e
  }) {
    return () => {
      var t;
      return r("div", null, [(t = e.default) == null ? void 0 : t.call(e)]);
    };
  }
}), d = {
  install(n) {
    n.component("y-button", a);
  }
};
export {
  i as FooterPlugin,
  a as YButton,
  p as YFooter,
  d as buttonPlugin
};
