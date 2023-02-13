import { defineComponent as W, createVNode as O, ref as vt, computed as D, unref as ht, getCurrentInstance as mt, h as pt, openBlock as J, createElementBlock as Q, createElementVNode as Y, reactive as yt, onMounted as gt, nextTick as _t, onUnmounted as bt, Transition as rt, render as ot, markRaw as wt } from "vue";
var Ot = W({
  name: "YFooter",
  setup: function(t, e) {
    var o = e.slots;
    return function() {
      var s;
      return O("div", null, [(s = o.default) === null || s === void 0 ? void 0 : s.call(o)]);
    };
  }
}), kn = {
  install: function(t) {
    t.component("y-footer", Ot);
  }
};
var Pt = "y", $t = "is-", V = function(t, e, o, s, i) {
  var h = "".concat(t, "-").concat(e);
  return o && (h += "-".concat(o)), s && (h += "__".concat(s)), i && (h += "--".concat(i)), h;
}, et = function(t) {
  var e = vt(Pt), o = function() {
    var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return V(e.value, t, f, "", "");
  }, s = function(f) {
    return f ? V(e.value, t, "", f, "") : "";
  }, i = function(f) {
    return f ? V(e.value, t, "", "", f) : "";
  }, h = function(f, p) {
    return f && p ? V(e.value, t, f, p, "") : "";
  }, _ = function(f, p) {
    return f && p ? V(e.value, t, "", f, p) : "";
  }, v = function(f, p) {
    return f && p ? V(e.value, t, f, "", p) : "";
  }, k = function(f, p, g) {
    return f && p && g ? V(e.value, t, f, p, g) : "";
  }, C = function(f) {
    for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), L = 1; L < p; L++)
      g[L - 1] = arguments[L];
    var x = g.length >= 1 ? g[0] : !0;
    return f && x ? "".concat($t).concat(f) : "";
  }, y = function(f) {
    var p = {};
    for (var g in f)
      f[g] && (p["--".concat(e.value, "-").concat(g)] = f[g]);
    return p;
  }, P = function(f) {
    var p = {};
    for (var g in f)
      f[g] && (p["--".concat(e.value, "-").concat(t, "-").concat(g)] = f[g]);
    return p;
  }, T = function(f) {
    return "--".concat(e.value, "-").concat(f);
  }, w = function(f) {
    return "--".concat(e.value, "-").concat(t, "-").concat(f);
  };
  return {
    namespace: e,
    b: o,
    e: s,
    m: i,
    be: h,
    em: _,
    bm: v,
    bem: k,
    is: C,
    cssVar: y,
    cssVarName: T,
    cssVarBlock: P,
    cssVarBlockName: w
  };
}, St = function(t) {
  var e = mt();
  return D(function() {
    var o, s;
    return (o = ((s = e.proxy) === null || s === void 0 ? void 0 : s.$props)[t]) !== null && o !== void 0 ? o : void 0;
  });
}, kt = function(t) {
  var e = St("disabled");
  return D(function() {
    return e.value || ht(t);
  });
}, at;
const Ct = typeof window < "u", Tt = (n) => typeof n == "function", Lt = (n) => typeof n == "number", xt = (n) => typeof n == "string";
Ct && ((at = window == null ? void 0 : window.navigator) == null ? void 0 : at.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function zt(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!n)
    return "";
  if (xt(n))
    return n;
  if (Lt(n))
    return "".concat(n).concat(t);
}
var Nt = function(t) {
  return t === void 0;
};
var Et = {
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
}, q = W({
  name: "YIcon",
  props: Et,
  setup: function(t, e) {
    e.attrs;
    var o = e.slots, s = et("icon"), i = D(function() {
      var h = t.size, _ = t.color;
      return t.loading, !h && !_ ? {} : {
        fontSize: Nt(h) ? void 0 : zt(h),
        "--color": _
      };
    });
    return function() {
      return o.default ? O("i", {
        class: [s.b(), s.is("loading", t.loading)],
        style: i.value
      }, [o.default && o.default()]) : t.icon ? O("i", {
        class: [s.b(), s.is("loading", t.loading)],
        style: i.value
      }, [O("g", null, [pt(t.icon)])]) : O("i", {
        class: [s.b(), s.is("loading", t.loading)],
        style: i.value
      }, null);
    };
  }
}), Cn = {
  install: function(t) {
    t.component("y-icon", q);
  }
}, X = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, s] of t)
    e[o] = s;
  return e;
};
const jt = {
  name: "CircleCheck"
}, It = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bt = /* @__PURE__ */ Y("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Mt = /* @__PURE__ */ Y("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), Vt = [
  Bt,
  Mt
];
function Gt(n, t, e, o, s, i) {
  return J(), Q("svg", It, Vt);
}
var At = /* @__PURE__ */ X(jt, [["render", Gt]]);
const Dt = {
  name: "CircleClose"
}, Ft = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yt = /* @__PURE__ */ Y("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Ht = /* @__PURE__ */ Y("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Rt = [
  Yt,
  Ht
];
function Ut(n, t, e, o, s, i) {
  return J(), Q("svg", Ft, Rt);
}
var Kt = /* @__PURE__ */ X(Dt, [["render", Ut]]);
const Wt = {
  name: "Loading"
}, qt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jt = /* @__PURE__ */ Y("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Qt = [
  Jt
];
function Xt(n, t, e, o, s, i) {
  return J(), Q("svg", qt, Qt);
}
var ft = /* @__PURE__ */ X(Wt, [["render", Xt]]);
const Zt = {
  name: "Warning"
}, tn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nn = /* @__PURE__ */ Y("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), en = [
  nn
];
function rn(n, t, e, o, s, i) {
  return J(), Q("svg", tn, en);
}
var on = /* @__PURE__ */ X(Zt, [["render", rn]]), an = {
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
    default: function() {
      return ft;
    }
  }
}, un = W({
  name: "YButton",
  props: an,
  setup: function(t, e) {
    var o = e.slots, s = kt(), i = D(function() {
      return t.size;
    }), h = D(function() {
      return t.type;
    }), _ = D(function() {
      return t.shape;
    }), v = et("btn"), k = function(T) {
    };
    function C() {
      return O("div", null, [o.loading ? o.loading() : O(q, {
        icon: t.loadingIcon,
        class: v.is("loading")
      }, null)]);
    }
    function y() {
      return t.loading ? C() : t.icon || o.icon ? o.icon ? o.icon() : O(q, {
        icon: t.icon
      }, null) : null;
    }
    return function() {
      return O("button", {
        class: [v.b(), v.m(i.value), v.is("disabled", s.value), v.m(h.value), v.is("text", t.text), v.is("link", t.link), v.is("circle", _.value === "circle"), v.is("round", _.value === "round"), v.m(t.dashed ? "dashed" : "")],
        disabled: s.value || void 0,
        onClick: k
      }, [y(), o.default ? o.default() : null]);
    };
  }
}), Tn = {
  install: function(t) {
    t.component("y-button", un);
  }
};
function it(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function ut(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? it(Object(e), !0).forEach(function(o) {
      sn(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : it(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function sn(n, t, e) {
  return t = cn(t), t in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function cn(n) {
  var t = ln(n, "string");
  return F(t) === "symbol" ? t : String(t);
}
function ln(n, t) {
  if (F(n) !== "object" || n === null)
    return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (F(o) !== "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function F(n) {
  return F = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, F(n);
}
function fn(n, t) {
  return function(e) {
    return Object.keys(n).reduce(function(o, s) {
      var i = F(n[s]) === "object" && n[s] != null && !Array.isArray(n[s]), h = i ? n[s] : {
        type: n[s]
      };
      return e && s in e ? o[s] = ut(ut({}, h), {}, {
        default: e[s]
      }) : o[s] = h, t && (o[s].source = t), o;
    }, {});
  };
}
var dn = [String, Object, Array], vn = [String, Object, Array], hn = fn({
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
    default: function() {
      return {
        size: "40px",
        color: "white",
        loading: !1
      };
    }
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
    type: dn,
    default: null
  },
  maskStyle: {
    type: vn,
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
const mn = W({
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
  setup: function(t) {
    return function() {
      return typeof t.renderer != "function" ? null : t.renderer(t.data);
    };
  }
});
function tt(n) {
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tt(n);
}
function nt() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  nt = function() {
    return n;
  };
  var n = {}, t = Object.prototype, e = t.hasOwnProperty, o = Object.defineProperty || function(u, r, a) {
    u[r] = a.value;
  }, s = typeof Symbol == "function" ? Symbol : {}, i = s.iterator || "@@iterator", h = s.asyncIterator || "@@asyncIterator", _ = s.toStringTag || "@@toStringTag";
  function v(u, r, a) {
    return Object.defineProperty(u, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }), u[r];
  }
  try {
    v({}, "");
  } catch {
    v = function(a, c, d) {
      return a[c] = d;
    };
  }
  function k(u, r, a, c) {
    var d = r && r.prototype instanceof P ? r : P, l = Object.create(d.prototype), b = new j(c || []);
    return o(l, "_invoke", { value: R(u, a, b) }), l;
  }
  function C(u, r, a) {
    try {
      return { type: "normal", arg: u.call(r, a) };
    } catch (c) {
      return { type: "throw", arg: c };
    }
  }
  n.wrap = k;
  var y = {};
  function P() {
  }
  function T() {
  }
  function w() {
  }
  var m = {};
  v(m, i, function() {
    return this;
  });
  var f = Object.getPrototypeOf, p = f && f(f(I([])));
  p && p !== t && e.call(p, i) && (m = p);
  var g = w.prototype = P.prototype = Object.create(m);
  function L(u) {
    ["next", "throw", "return"].forEach(function(r) {
      v(u, r, function(a) {
        return this._invoke(r, a);
      });
    });
  }
  function x(u, r) {
    function a(d, l, b, $) {
      var S = C(u[d], u, l);
      if (S.type !== "throw") {
        var B = S.arg, N = B.value;
        return N && tt(N) == "object" && e.call(N, "__await") ? r.resolve(N.__await).then(function(M) {
          a("next", M, b, $);
        }, function(M) {
          a("throw", M, b, $);
        }) : r.resolve(N).then(function(M) {
          B.value = M, b(B);
        }, function(M) {
          return a("throw", M, b, $);
        });
      }
      $(S.arg);
    }
    var c;
    o(this, "_invoke", { value: function(l, b) {
      function $() {
        return new r(function(S, B) {
          a(l, b, S, B);
        });
      }
      return c = c ? c.then($, $) : $();
    } });
  }
  function R(u, r, a) {
    var c = "suspendedStart";
    return function(d, l) {
      if (c === "executing")
        throw new Error("Generator is already running");
      if (c === "completed") {
        if (d === "throw")
          throw l;
        return Z();
      }
      for (a.method = d, a.arg = l; ; ) {
        var b = a.delegate;
        if (b) {
          var $ = A(b, a);
          if ($) {
            if ($ === y)
              continue;
            return $;
          }
        }
        if (a.method === "next")
          a.sent = a._sent = a.arg;
        else if (a.method === "throw") {
          if (c === "suspendedStart")
            throw c = "completed", a.arg;
          a.dispatchException(a.arg);
        } else
          a.method === "return" && a.abrupt("return", a.arg);
        c = "executing";
        var S = C(u, r, a);
        if (S.type === "normal") {
          if (c = a.done ? "completed" : "suspendedYield", S.arg === y)
            continue;
          return { value: S.arg, done: a.done };
        }
        S.type === "throw" && (c = "completed", a.method = "throw", a.arg = S.arg);
      }
    };
  }
  function A(u, r) {
    var a = r.method, c = u.iterator[a];
    if (c === void 0)
      return r.delegate = null, a === "throw" && u.iterator.return && (r.method = "return", r.arg = void 0, A(u, r), r.method === "throw") || a !== "return" && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + a + "' method")), y;
    var d = C(c, u.iterator, r.arg);
    if (d.type === "throw")
      return r.method = "throw", r.arg = d.arg, r.delegate = null, y;
    var l = d.arg;
    return l ? l.done ? (r[u.resultName] = l.value, r.next = u.nextLoc, r.method !== "return" && (r.method = "next", r.arg = void 0), r.delegate = null, y) : l : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function U(u) {
    var r = { tryLoc: u[0] };
    1 in u && (r.catchLoc = u[1]), 2 in u && (r.finallyLoc = u[2], r.afterLoc = u[3]), this.tryEntries.push(r);
  }
  function E(u) {
    var r = u.completion || {};
    r.type = "normal", delete r.arg, u.completion = r;
  }
  function j(u) {
    this.tryEntries = [{ tryLoc: "root" }], u.forEach(U, this), this.reset(!0);
  }
  function I(u) {
    if (u) {
      var r = u[i];
      if (r)
        return r.call(u);
      if (typeof u.next == "function")
        return u;
      if (!isNaN(u.length)) {
        var a = -1, c = function d() {
          for (; ++a < u.length; )
            if (e.call(u, a))
              return d.value = u[a], d.done = !1, d;
          return d.value = void 0, d.done = !0, d;
        };
        return c.next = c;
      }
    }
    return { next: Z };
  }
  function Z() {
    return { value: void 0, done: !0 };
  }
  return T.prototype = w, o(g, "constructor", { value: w, configurable: !0 }), o(w, "constructor", { value: T, configurable: !0 }), T.displayName = v(w, _, "GeneratorFunction"), n.isGeneratorFunction = function(u) {
    var r = typeof u == "function" && u.constructor;
    return !!r && (r === T || (r.displayName || r.name) === "GeneratorFunction");
  }, n.mark = function(u) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(u, w) : (u.__proto__ = w, v(u, _, "GeneratorFunction")), u.prototype = Object.create(g), u;
  }, n.awrap = function(u) {
    return { __await: u };
  }, L(x.prototype), v(x.prototype, h, function() {
    return this;
  }), n.AsyncIterator = x, n.async = function(u, r, a, c, d) {
    d === void 0 && (d = Promise);
    var l = new x(k(u, r, a, c), d);
    return n.isGeneratorFunction(r) ? l : l.next().then(function(b) {
      return b.done ? b.value : l.next();
    });
  }, L(g), v(g, _, "Generator"), v(g, i, function() {
    return this;
  }), v(g, "toString", function() {
    return "[object Generator]";
  }), n.keys = function(u) {
    var r = Object(u), a = [];
    for (var c in r)
      a.push(c);
    return a.reverse(), function d() {
      for (; a.length; ) {
        var l = a.pop();
        if (l in r)
          return d.value = l, d.done = !1, d;
      }
      return d.done = !0, d;
    };
  }, n.values = I, j.prototype = { constructor: j, reset: function(r) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !r)
      for (var a in this)
        a.charAt(0) === "t" && e.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = void 0);
  }, stop: function() {
    this.done = !0;
    var r = this.tryEntries[0].completion;
    if (r.type === "throw")
      throw r.arg;
    return this.rval;
  }, dispatchException: function(r) {
    if (this.done)
      throw r;
    var a = this;
    function c(B, N) {
      return b.type = "throw", b.arg = r, a.next = B, N && (a.method = "next", a.arg = void 0), !!N;
    }
    for (var d = this.tryEntries.length - 1; d >= 0; --d) {
      var l = this.tryEntries[d], b = l.completion;
      if (l.tryLoc === "root")
        return c("end");
      if (l.tryLoc <= this.prev) {
        var $ = e.call(l, "catchLoc"), S = e.call(l, "finallyLoc");
        if ($ && S) {
          if (this.prev < l.catchLoc)
            return c(l.catchLoc, !0);
          if (this.prev < l.finallyLoc)
            return c(l.finallyLoc);
        } else if ($) {
          if (this.prev < l.catchLoc)
            return c(l.catchLoc, !0);
        } else {
          if (!S)
            throw new Error("try statement without catch or finally");
          if (this.prev < l.finallyLoc)
            return c(l.finallyLoc);
        }
      }
    }
  }, abrupt: function(r, a) {
    for (var c = this.tryEntries.length - 1; c >= 0; --c) {
      var d = this.tryEntries[c];
      if (d.tryLoc <= this.prev && e.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
        var l = d;
        break;
      }
    }
    l && (r === "break" || r === "continue") && l.tryLoc <= a && a <= l.finallyLoc && (l = null);
    var b = l ? l.completion : {};
    return b.type = r, b.arg = a, l ? (this.method = "next", this.next = l.finallyLoc, y) : this.complete(b);
  }, complete: function(r, a) {
    if (r.type === "throw")
      throw r.arg;
    return r.type === "break" || r.type === "continue" ? this.next = r.arg : r.type === "return" ? (this.rval = this.arg = r.arg, this.method = "return", this.next = "end") : r.type === "normal" && a && (this.next = a), y;
  }, finish: function(r) {
    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
      var c = this.tryEntries[a];
      if (c.finallyLoc === r)
        return this.complete(c.completion, c.afterLoc), E(c), y;
    }
  }, catch: function(r) {
    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
      var c = this.tryEntries[a];
      if (c.tryLoc === r) {
        var d = c.completion;
        if (d.type === "throw") {
          var l = d.arg;
          E(c);
        }
        return l;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function(r, a, c) {
    return this.delegate = { iterator: I(r), resultName: a, nextLoc: c }, this.method === "next" && (this.arg = void 0), y;
  } }, n;
}
function st(n, t, e, o, s, i, h) {
  try {
    var _ = n[i](h), v = _.value;
  } catch (k) {
    e(k);
    return;
  }
  _.done ? t(v) : Promise.resolve(v).then(o, s);
}
function pn(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(o, s) {
      var i = n.apply(t, e);
      function h(v) {
        st(i, o, s, h, _, "next", v);
      }
      function _(v) {
        st(i, o, s, h, _, "throw", v);
      }
      h(void 0);
    });
  };
}
const yn = W({
  name: "YToast",
  props: hn(),
  expose: ["openToast"],
  setup: function(t, e) {
    e.attrs, e.slots;
    var o = e.emit, s = et("toast"), i = yt({
      visible: !1,
      zIndex: 0,
      content: "",
      icon: t.icon,
      iconProps: t.iconProps,
      position: t.position,
      transition: t.transitonName,
      closable: t.closable,
      maskClose: t.maskClose,
      showMask: t.showMask,
      maskClass: t.maskClass,
      maskStyle: t.maskStyle,
      parseHtml: t.parseHtml,
      textOnly: !1,
      renderer: t.renderFunc,
      onClose: null
    }), h = new Promise(function(w) {
      gt(function() {
        _t(w);
      });
    });
    bt(function() {
      console.log("\u7EC4\u4EF6\u9500\u6BC1---"), o("destory");
    });
    function _(w) {
      return v.apply(this, arguments);
    }
    function v() {
      return v = pn(/* @__PURE__ */ nt().mark(function w(m) {
        var f, p, g, L, x, R, A, U, E, j, I;
        return nt().wrap(function(u) {
          for (; ; )
            switch (u.prev = u.next) {
              case 0:
                return i.zIndex = 1001, u.next = 3, h;
              case 3:
                i.content = (f = m.content) !== null && f !== void 0 ? f : "", i.icon = (p = m.icon) !== null && p !== void 0 ? p : t.icon, i.iconProps = (g = m.iconProps) !== null && g !== void 0 ? g : t.iconProps, i.position = (L = m.position) !== null && L !== void 0 ? L : t.position, i.transition = (x = m.transitionName) !== null && x !== void 0 ? x : t.transitonName, i.closable = (R = m.closable) !== null && R !== void 0 ? R : t.closable, i.maskClose = (A = m.maskClose) !== null && A !== void 0 ? A : t.maskClose, i.showMask = (U = m.showMask) !== null && U !== void 0 ? U : t.showMask, i.maskClass = (E = m.maskClass) !== null && E !== void 0 ? E : t.maskClass, i.maskStyle = (j = m.maskStyle) !== null && j !== void 0 ? j : t.maskStyle, i.parseHtml = (I = m.parseHtml) !== null && I !== void 0 ? I : t.parseHtml, i.renderer = m.renderer ? m.renderer : t.renderFunc, i.onClose = m.onClose || null, i.textOnly = !i.icon, i.visible = !0;
              case 18:
              case "end":
                return u.stop();
            }
        }, w);
      })), v.apply(this, arguments);
    }
    function k() {
      i.visible = !1;
    }
    var C = function() {
      if (i.showMask && i.visible)
        return O("div", {
          class: "{ns.be('mask'), state.maskClass}",
          style: i.maskStyle,
          onClick: function() {
          }
        }, null);
    }, y = function() {
      if (i.visible)
        return O("div", {
          class: [s.e("wrapper")]
        }, [P(), O("div", {
          class: s.be("content")
        }, [i.content])]);
    }, P = function() {
      if (i.icon)
        return O("div", {
          class: s.be("icon")
        }, [O(q, {
          icon: i.icon,
          size: i.iconProps.size,
          color: i.iconProps.color,
          loading: i.iconProps.loading
        }, null)]);
    };
    function T() {
      return Tt(i.renderer) ? (console.log(), O(mn, {
        renderer: i.renderer
      }, null)) : O("div", {
        class: [s.b(), s.bm(this.state.textOnly ? "text-only" : "")],
        style: {
          zIndex: i.zIndex
        }
      }, [O(rt, {
        name: s.bem("fade")
      }, {
        default: function() {
          return [C()];
        }
      }), O(rt, {
        name: i.transition
      }, {
        default: function() {
          return [y()];
        }
      })]);
    }
    return Object.assign({
      openToast: _,
      renderToast: T,
      renderTransMask: C,
      renderToastContent: y,
      state: i,
      cloasToast: k,
      ns: s
    });
  },
  render: function() {
    return this.renderToast();
  }
});
var gn = function(t, e) {
  return t.install = function(o) {
    t._context = o._context, o.config.globalProperties[e] = t;
  }, t;
};
function K(n) {
  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, K(n);
}
function ct(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function z(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ct(Object(e), !0).forEach(function(o) {
      _n(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ct(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function _n(n, t, e) {
  return t = dt(t), t in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function bn(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lt(n, t) {
  for (var e = 0; e < t.length; e++) {
    var o = t[e];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, dt(o.key), o);
  }
}
function wn(n, t, e) {
  return t && lt(n.prototype, t), e && lt(n, e), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function dt(n) {
  var t = On(n, "string");
  return K(t) === "symbol" ? t : String(t);
}
function On(n, t) {
  if (K(n) !== "object" || n === null)
    return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (K(o) !== "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var Pn = {
  success: {
    icon: At
  },
  warning: {
    icon: on
  },
  error: {
    icon: Kt
  },
  loading: {
    icon: ft,
    showMask: !0,
    iconProps: {
      pulse: !0,
      loading: !0,
      size: "22px"
    }
  }
}, $n = /* @__PURE__ */ function() {
  function n() {
    var t = this, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    bn(this, n), e = z(z({}, e), {}, {
      duration: e.duration ? Number(e.duration) : 2e3
    }), this.name = "Toast", this._mountedApp = null, this._instance = null, this._container = null, this._timer = null, this._context = o || null, this.open = function(s, i) {
      return t._open(null, s, i);
    }, this.success = function(s, i) {
      return t._open("success", s, i);
    }, this.warning = function(s, i) {
      return t._open("warning", s, i);
    }, this.error = function(s, i) {
      return t._open("error", s, i);
    }, this.loading = function(s, i) {
      return t._open("loading", s, i);
    };
  }
  return wn(n, [{
    key: "_getInstance",
    value: function() {
      var e = O(yn);
      return this._container = document.createElement("div"), e.appContext = this._context, ot(e, this._container), document.body.appendChild(this._container.firstElementChild), this._instance = e.component.proxy, this._instance;
    }
  }, {
    key: "_open",
    value: function(e, o, s) {
      var i, h = this;
      this._timer && clearTimeout(this._timer);
      var _ = typeof o == "string" ? {
        content: o,
        duration: s
      } : o, v = e ? (i = Pn[e]) !== null && i !== void 0 ? i : {} : {}, k = _.onClose, C = function() {
        if (h._timer && clearTimeout(h._timer), typeof k == "function")
          return k();
      }, y = this._getInstance(), P = z(z(z(z({}, this.defaults), v), _), {}, {
        onClose: C
      });
      P.icon && typeof P.icon != "function" && (P.icon = wt(P.icon)), y == null || y.openToast(P);
      var T = typeof P.duration == "number" ? P.duration : 2e3;
      return T >= 500 && (this._timer = setTimeout(function() {
        y == null || y.cloasToast(), h.destroyed();
      }, T)), function() {
        h._timer && clearTimeout(h._timer), y == null || y.cloasToast();
      };
    }
  }, {
    key: "config",
    value: function(e, o) {
      this.defaults = z(z({}, this.defaults), e), this._context = o || null;
    }
  }, {
    key: "close",
    value: function() {
      var e;
      this._timer && clearTimeout(this._timer), (e = this._getInstance()) === null || e === void 0 || e.cloasToast(), this.destroyed();
    }
  }, {
    key: "destroyed",
    value: function() {
      this._container && ot(null, this._container);
    }
  }]), n;
}(), G = new $n(), H = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return G.config(t), z({}, G);
};
H.loading = G.loading;
H.success = G.success;
H.warning = G.warning;
H.error = G.error;
H.open = G.open;
var Ln = gn(H, "$toast");
export {
  kn as FooterPlugin,
  un as YButton,
  Ot as YFooter,
  q as YIcon,
  Tn as buttonPlugin,
  Cn as iconPlugin,
  Ln as useToast
};
//# sourceMappingURL=yalert-ui.mjs.map
