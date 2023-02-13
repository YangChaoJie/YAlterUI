var D = Object.defineProperty;
var R = (e, n, o) => n in e ? D(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o;
var _ = (e, n, o) => (R(e, typeof n != "symbol" ? n + "" : n, o), o);
import { defineComponent as C, createVNode as u, ref as U, computed as $, unref as W, getCurrentInstance as q, h as G, openBlock as k, createElementBlock as z, createElementVNode as w, reactive as J, onMounted as K, nextTick as Q, onUnmounted as X, Transition as j, isVNode as Z, render as A, markRaw as ee } from "vue";
const ne = C({
  name: "YFooter",
  setup(e, {
    slots: n
  }) {
    return () => {
      var o;
      return u("div", null, [(o = n.default) == null ? void 0 : o.call(n)]);
    };
  }
}), Qe = {
  install(e) {
    e.component("y-footer", ne);
  }
};
const te = "y", se = "is-", y = (e, n, o, i, s) => {
  let t = `${e}-${n}`;
  return o && (t += `-${o}`), i && (t += `__${i}`), s && (t += `--${s}`), t;
}, B = (e) => {
  const n = U(te);
  return {
    namespace: n,
    b: (a = "") => y(n.value, e, a, "", ""),
    e: (a) => a ? y(n.value, e, "", a, "") : "",
    m: (a) => a ? y(n.value, e, "", "", a) : "",
    be: (a, r) => a && r ? y(n.value, e, a, r, "") : "",
    em: (a, r) => a && r ? y(n.value, e, "", a, r) : "",
    bm: (a, r) => a && r ? y(n.value, e, a, "", r) : "",
    bem: (a, r, d) => a && r && d ? y(n.value, e, a, r, d) : "",
    is: (a, ...r) => {
      const d = r.length >= 1 ? r[0] : !0;
      return a && d ? `${se}${a}` : "";
    },
    cssVar: (a) => {
      const r = {};
      for (const d in a)
        a[d] && (r[`--${n.value}-${d}`] = a[d]);
      return r;
    },
    cssVarName: (a) => `--${n.value}-${a}`,
    cssVarBlock: (a) => {
      const r = {};
      for (const d in a)
        a[d] && (r[`--${n.value}-${e}-${d}`] = a[d]);
      return r;
    },
    cssVarBlockName: (a) => `--${n.value}-${e}-${a}`
  };
}, oe = (e) => {
  const n = q();
  return $(() => {
    var o, i;
    return (i = ((o = n.proxy) == null ? void 0 : o.$props)[e]) != null ? i : void 0;
  });
}, ae = (e) => {
  const n = oe("disabled");
  return $(() => n.value || W(e));
};
var H;
const ie = typeof window < "u", re = (e) => typeof e == "function", le = (e) => typeof e == "number", ce = (e) => typeof e == "string";
ie && ((H = window == null ? void 0 : window.navigator) == null ? void 0 : H.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ue(e, n = "px") {
  if (!e)
    return "";
  if (ce(e))
    return e;
  if (le(e))
    return `${e}${n}`;
}
const de = (e) => e === void 0;
const fe = {
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String
  },
  loading: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: Object,
    default: null
  }
}, x = C({
  name: "YIcon",
  props: fe,
  setup(e, {
    attrs: n,
    slots: o
  }) {
    const i = B("icon"), s = $(() => {
      const {
        size: t,
        color: l,
        loading: h
      } = e;
      return !t && !l ? {} : {
        fontSize: de(t) ? void 0 : ue(t),
        "--color": l
      };
    });
    return () => o.default ? u("i", {
      class: [i.b(), i.is("loading", e.loading)],
      style: s.value
    }, [o.default && o.default()]) : e.icon ? u("i", {
      class: [i.b(), i.is("loading", e.loading)],
      style: s.value
    }, [u("g", null, [G(e.icon)])]) : u("i", {
      class: [i.b(), i.is("loading", e.loading)],
      style: s.value
    }, null);
  }
}), Xe = {
  install(e) {
    e.component("y-icon", x);
  }
};
var T = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of n)
    o[i] = s;
  return o;
};
const me = {
  name: "CircleCheck"
}, _e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, he = /* @__PURE__ */ w("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), ge = /* @__PURE__ */ w("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), ye = [
  he,
  ge
];
function ve(e, n, o, i, s, t) {
  return k(), z("svg", _e, ye);
}
var $e = /* @__PURE__ */ T(me, [["render", ve]]);
const we = {
  name: "CircleClose"
}, be = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pe = /* @__PURE__ */ w("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Ce = /* @__PURE__ */ w("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), xe = [
  pe,
  Ce
];
function ke(e, n, o, i, s, t) {
  return k(), z("svg", be, xe);
}
var ze = /* @__PURE__ */ T(we, [["render", ke]]);
const Te = {
  name: "Loading"
}, Be = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pe = /* @__PURE__ */ w("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Oe = [
  Pe
];
function Me(e, n, o, i, s, t) {
  return k(), z("svg", Be, Oe);
}
var E = /* @__PURE__ */ T(Te, [["render", Me]]);
const Se = {
  name: "Warning"
}, Ie = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ne = /* @__PURE__ */ w("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), Ve = [
  Ne
];
function Fe(e, n, o, i, s, t) {
  return k(), z("svg", Ie, Ve);
}
var Le = /* @__PURE__ */ T(Se, [["render", Fe]]);
const je = {
  size: String,
  disabled: Boolean,
  type: {
    type: String,
    default: ""
  },
  text: Boolean,
  link: Boolean,
  loading: Boolean,
  shape: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    default: null
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  borderd: {
    type: Boolean,
    default: !0
  },
  loadingIcon: {
    type: Object,
    default: () => E
  }
}, Ae = C({
  name: "YButton",
  props: je,
  setup(e, {
    slots: n
  }) {
    const o = ae(), i = $(() => e.size), s = $(() => e.type), t = $(() => e.shape), l = B("btn"), h = (g) => {
    };
    function f() {
      return u("div", null, [n.loading ? n.loading() : u(x, {
        icon: e.loadingIcon,
        class: l.is("loading")
      }, null)]);
    }
    function m() {
      return e.loading ? f() : e.icon || n.icon ? n.icon ? n.icon() : u(x, {
        icon: e.icon
      }, null) : null;
    }
    return () => u("button", {
      class: [l.b(), l.m(i.value), l.is("disabled", o.value), l.m(s.value), l.is("text", e.text), l.is("link", e.link), l.is("circle", t.value === "circle"), l.is("round", t.value === "round"), l.m(e.dashed ? "dashed" : "")],
      disabled: o.value || void 0,
      onClick: h
    }, [m(), n.default ? n.default() : null]);
  }
}), Ze = {
  install(e) {
    e.component("y-button", Ae);
  }
};
function He(e, n) {
  return (o) => Object.keys(e).reduce((i, s) => {
    const l = typeof e[s] == "object" && e[s] != null && !Array.isArray(e[s]) ? e[s] : { type: e[s] };
    return o && s in o ? i[s] = {
      ...l,
      default: o[s]
    } : i[s] = l, n && (i[s].source = n), i;
  }, {});
}
const Ye = [String, Object, Array], Ee = [String, Object, Array], De = He({
  bodyWidth: {
    type: Number,
    default: 100
  },
  icon: {
    type: [Object, Function],
    default: null
  },
  iconProps: {
    type: Object,
    default: () => ({
      size: "40px",
      color: "white",
      loading: !1
    })
  },
  position: {
    type: String,
    default: "center"
  },
  transitonName: {
    type: String,
    default: ""
  },
  closable: {
    type: Boolean,
    default: !1
  },
  maskClose: {
    type: Boolean,
    default: !1
  },
  showMask: {
    type: Boolean,
    default: !1
  },
  maskClass: {
    type: Ye,
    default: null
  },
  maskStyle: {
    type: Ee,
    default: null
  },
  parseHtml: {
    type: Boolean,
    default: !1
  },
  renderFunc: {
    type: Function,
    default: null
  }
});
const Re = C({
  name: "Renderer",
  props: {
    renderer: {
      type: Function,
      default: null
    },
    data: {
      type: Object,
      default: void 0
    }
  },
  setup(e) {
    return () => typeof e.renderer != "function" ? null : e.renderer(e.data);
  }
});
function Y(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Z(e);
}
const Ue = C({
  name: "YToast",
  props: De(),
  expose: ["openToast"],
  setup(e, {
    attrs: n,
    slots: o,
    emit: i
  }) {
    const s = B("toast"), t = J({
      visible: !1,
      zIndex: 0,
      content: "",
      icon: e.icon,
      iconProps: e.iconProps,
      position: e.position,
      transition: e.transitonName,
      closable: e.closable,
      maskClose: e.maskClose,
      showMask: e.showMask,
      maskClass: e.maskClass,
      maskStyle: e.maskStyle,
      parseHtml: e.parseHtml,
      textOnly: !1,
      renderer: e.renderFunc,
      onClose: null
    }), l = new Promise((c) => {
      K(() => {
        Q(c);
      });
    });
    X(() => {
      console.log("\u7EC4\u4EF6\u9500\u6BC1---"), i("destory");
    });
    async function h(c) {
      var a, r, d, O, M, S, I, N, V, F, L;
      t.zIndex = 1001, await l, t.content = (a = c.content) != null ? a : "", t.icon = (r = c.icon) != null ? r : e.icon, t.iconProps = (d = c.iconProps) != null ? d : e.iconProps, t.position = (O = c.position) != null ? O : e.position, t.transition = (M = c.transitionName) != null ? M : e.transitonName, t.closable = (S = c.closable) != null ? S : e.closable, t.maskClose = (I = c.maskClose) != null ? I : e.maskClose, t.showMask = (N = c.showMask) != null ? N : e.showMask, t.maskClass = (V = c.maskClass) != null ? V : e.maskClass, t.maskStyle = (F = c.maskStyle) != null ? F : e.maskStyle, t.parseHtml = (L = c.parseHtml) != null ? L : e.parseHtml, t.renderer = c.renderer ? c.renderer : e.renderFunc, t.onClose = c.onClose || null, t.textOnly = !t.icon, t.visible = !0;
    }
    function f() {
      t.visible = !1;
    }
    const m = () => {
      if (t.showMask && t.visible)
        return u("div", {
          class: "{ns.be('mask'), state.maskClass}",
          style: t.maskStyle,
          onClick: () => {
          }
        }, null);
    }, g = () => {
      if (t.visible)
        return u("div", {
          class: [s.e("wrapper")]
        }, [p(), u("div", {
          class: s.be("content")
        }, [t.content])]);
    }, p = () => {
      if (t.icon)
        return u("div", {
          class: s.be("icon")
        }, [u(x, {
          icon: t.icon,
          size: t.iconProps.size,
          color: t.iconProps.color,
          loading: t.iconProps.loading
        }, null)]);
    };
    function P() {
      if (re(t.renderer))
        return console.log(), u(Re, {
          renderer: t.renderer
        }, null);
      {
        let c, a;
        return u("div", {
          class: [s.b(), s.bm(this.state.textOnly ? "text-only" : "")],
          style: {
            zIndex: t.zIndex
          }
        }, [u(j, {
          name: s.bem("fade")
        }, Y(c = m()) ? c : {
          default: () => [c]
        }), u(j, {
          name: t.transition
        }, Y(a = g()) ? a : {
          default: () => [a]
        })]);
      }
    }
    return Object.assign({
      openToast: h,
      renderToast: P,
      renderTransMask: m,
      renderToastContent: g,
      state: t,
      cloasToast: f,
      ns: s
    });
  },
  render() {
    return this.renderToast();
  }
}), We = (e, n) => (e.install = (o) => {
  e._context = o._context, o.config.globalProperties[n] = e;
}, e), qe = {
  success: {
    icon: $e
  },
  warning: {
    icon: Le
  },
  error: {
    icon: ze
  },
  loading: {
    icon: E,
    showMask: !0,
    iconProps: {
      pulse: !0,
      loading: !0,
      size: "22px"
    }
  }
};
class Ge {
  constructor(n = {}, o) {
    _(this, "name");
    _(this, "defaults");
    _(this, "open");
    _(this, "success");
    _(this, "warning");
    _(this, "error");
    _(this, "loading");
    _(this, "_context");
    _(this, "_mountedApp");
    _(this, "_instance");
    _(this, "_container");
    _(this, "_timer");
    n = {
      ...n,
      duration: n.duration ? Number(n.duration) : 2e3
    }, this.name = "Toast", this._mountedApp = null, this._instance = null, this._container = null, this._timer = null, this._context = o || null, this.open = (i, s) => this._open(null, i, s), this.success = (i, s) => this._open("success", i, s), this.warning = (i, s) => this._open("warning", i, s), this.error = (i, s) => this._open("error", i, s), this.loading = (i, s) => this._open("loading", i, s);
  }
  _getInstance() {
    const n = u(Ue);
    return this._container = document.createElement("div"), n.appContext = this._context, A(n, this._container), document.body.appendChild(this._container.firstElementChild), this._instance = n.component.proxy, this._instance;
  }
  _open(n, o, i) {
    var p;
    this._timer && clearTimeout(this._timer);
    const s = typeof o == "string" ? { content: o, duration: i } : o, t = n ? (p = qe[n]) != null ? p : {} : {}, l = s.onClose, h = () => {
      if (this._timer && clearTimeout(this._timer), typeof l == "function")
        return l();
    }, f = this._getInstance(), m = { ...this.defaults, ...t, ...s, onClose: h };
    m.icon && typeof m.icon != "function" && (m.icon = ee(m.icon)), f == null || f.openToast(m);
    const g = typeof m.duration == "number" ? m.duration : 2e3;
    return g >= 500 && (this._timer = setTimeout(() => {
      f == null || f.cloasToast(), this.destroyed();
    }, g)), () => {
      this._timer && clearTimeout(this._timer), f == null || f.cloasToast();
    };
  }
  config(n, o) {
    this.defaults = { ...this.defaults, ...n }, this._context = o || null;
  }
  close() {
    var n;
    this._timer && clearTimeout(this._timer), (n = this._getInstance()) == null || n.cloasToast(), this.destroyed();
  }
  destroyed() {
    this._container && A(null, this._container);
  }
}
const v = new Ge(), b = (e = {}, n) => (v.config(e), { ...v });
b.loading = v.loading;
b.success = v.success;
b.warning = v.warning;
b.error = v.error;
b.open = v.open;
const en = We(b, "$toast");
export {
  Qe as FooterPlugin,
  Ae as YButton,
  ne as YFooter,
  x as YIcon,
  Ze as buttonPlugin,
  Xe as iconPlugin,
  en as useToast
};
