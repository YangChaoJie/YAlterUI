(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.yalertui={},e.Vue))})(this,function(e,n){"use strict";const i=n.defineComponent({name:"YFooter",setup(o,{slots:t}){return()=>{var u;return n.createVNode("div",null,[n.createTextVNode("1231"),(u=t.default)==null?void 0:u.call(t)])}}}),r={install(o){o.component("y-footer",i)}},d=n.defineComponent({name:"YButton",setup(o,{slots:t}){return()=>{var u;return n.createVNode("div",null,[(u=t.default)==null?void 0:u.call(t)])}}}),f={install(o){o.component("y-button",d)}};e.FooterPlugin=r,e.YButton=d,e.YFooter=i,e.buttonPlugin=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
