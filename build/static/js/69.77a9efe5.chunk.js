/*! For license information please see 69.77a9efe5.chunk.js.LICENSE.txt */
(this["webpackJsonpxiahe-react"] = this["webpackJsonpxiahe-react"] || []).push([[69], { 1073: function (e, t, n) { "use strict"; n.r(t); var i = n(0), s = n.n(i), a = n(963), r = n(208); t.default = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", { className: "topnav shadow-sm" }, s.a.createElement("div", { className: "container-fluid" }, s.a.createElement("nav", { className: "navbar navbar-light navbar-expand-lg topbar-nav" }, s.a.createElement(r.a, { isOpen: e.isMenuOpened, className: "navbar-collapse", id: "topnav-menu-content" }, s.a.createElement(a.a, { mode: "horizontal" })))))) }, 208: function (e, t, n) { "use strict"; var i, s = n(6), a = n(10), r = n(77), o = n(14), l = n(33), c = n(0), d = n.n(c), m = n(4), u = n.n(m), h = n(69), p = n.n(h), g = n(351), v = n(70), E = ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"]; function f(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function b(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? f(Object(n), !0).forEach((function (t) { Object(l.a)(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } var O = b(b({}, g.Transition.propTypes), {}, { isOpen: u.a.bool, children: u.a.oneOfType([u.a.arrayOf(u.a.node), u.a.node]), tag: v.tagPropType, className: u.a.node, navbar: u.a.bool, cssModule: u.a.object, innerRef: u.a.oneOfType([u.a.func, u.a.string, u.a.object]) }), L = b(b({}, g.Transition.defaultProps), {}, { isOpen: !1, appear: !1, enter: !0, exit: !0, tag: "div", timeout: v.TransitionTimeouts.Collapse }), y = ((i = {})[v.TransitionStatuses.ENTERING] = "collapsing", i[v.TransitionStatuses.ENTERED] = "collapse show", i[v.TransitionStatuses.EXITING] = "collapsing", i[v.TransitionStatuses.EXITED] = "collapse", i); function T(e) { return e.scrollHeight } var N = function (e) { function t(t) { var n; return (n = e.call(this, t) || this).state = { height: null }, ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach((function (e) { n[e] = n[e].bind(Object(r.a)(n)) })), n } Object(o.a)(t, e); var n = t.prototype; return n.onEntering = function (e, t) { this.setState({ height: T(e) }), this.props.onEntering(e, t) }, n.onEntered = function (e, t) { this.setState({ height: null }), this.props.onEntered(e, t) }, n.onExit = function (e) { this.setState({ height: T(e) }), this.props.onExit(e) }, n.onExiting = function (e) { e.offsetHeight; this.setState({ height: 0 }), this.props.onExiting(e) }, n.onExited = function (e) { this.setState({ height: null }), this.props.onExited(e) }, n.render = function () { var e = this, t = this.props, n = t.tag, i = t.isOpen, r = t.className, o = t.navbar, l = t.cssModule, c = t.children, m = (t.innerRef, Object(a.a)(t, E)), u = this.state.height, h = Object(v.pick)(m, v.TransitionPropTypeKeys), f = Object(v.omit)(m, v.TransitionPropTypeKeys); return d.a.createElement(g.Transition, Object(s.a)({}, h, { in: i, onEntering: this.onEntering, onEntered: this.onEntered, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited }), (function (t) { var i = function (e) { return y[e] || "collapse" }(t), a = Object(v.mapToCssModules)(p()(r, i, o && "navbar-collapse"), l), m = null === u ? null : { height: u }; return d.a.createElement(n, Object(s.a)({}, f, { style: b(b({}, f.style), m), className: a, ref: e.props.innerRef }), c) })) }, t }(c.Component); N.propTypes = O, N.defaultProps = L, t.a = N }, 77: function (e, t, n) { "use strict"; function i(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e } n.d(t, "a", (function () { return i })) }, 963: function (e, t, n) { "use strict"; var i = n(0), s = n.n(i), a = n(24), r = n(9), o = n(25), l = n(69), c = n.n(l), d = n(964), m = n.n(d), u = n(646); const h = e => { let { item: t, linkClassNames: n, subMenuClassNames: i, activatedMenuItemIds: r } = e; const o = t.icon || null; return console.log("current item", t), s.a.createElement("li", { className: c()("side-nav-item", { "mm-active": r.indexOf(t.id) >= 0 }) }, s.a.createElement(a.b, { to: "/", className: c()("side-sub-nav-link", n), "aria-expanded": r.indexOf(t.id) >= 0 }, t.icon && s.a.createElement(o, null), t.badge && s.a.createElement("span", { className: "badge badge-".concat(t.badge.variant, " float-right") }, t.badge.text), s.a.createElement("span", null, " ", t.name, " "), s.a.createElement("span", { className: "menu-arrow" })), s.a.createElement("ul", { className: c()(i, "mm-collapse", { "mm-collapsed mm-show": r.indexOf(t.id) >= 0 }), "aria-expanded": r.indexOf(t.id) >= 0 }, t.children.map((e, t) => s.a.createElement(s.a.Fragment, { key: t }, e.children ? s.a.createElement(h, { item: e, linkClassNames: "", activatedMenuItemIds: r, subMenuClassNames: "side-nav-third-level" }) : s.a.createElement(p, { item: e, className: c()({ active: r.indexOf(e.id) >= 0 }), linkClassName: "" }))))) }, p = e => { let { item: t, className: n, linkClassName: i } = e; return s.a.createElement("li", { className: c()("side-nav-item", n) }, s.a.createElement(g, { item: t, className: i })) }, g = e => { let { item: t, className: n } = e; const i = t.icon || null; return s.a.createElement(a.b, { to: t.path, className: c()("side-nav-link-ref", "side-sub-nav-link", n) }, t.icon && s.a.createElement(i, null), t.badge && s.a.createElement("span", { className: "font-size-12 badge badge-".concat(t.badge.variant, " float-right") }, t.badge.text), s.a.createElement("span", null, " ", t.name, " ")) }; class v extends i.Component { constructor() { super(...arguments), this.menuRef = null, this.componentDidMount = () => { this.props.menu.menuItems ? this.initMenu() : this.props.initMenu(), this.props.history.listen((e, t) => { document.body.classList.remove("sidebar-enable"), this.props.changeActiveMenuFromLocation() }) }, this.componentDidUpdate = e => { (!e.menu.menuItems || e.menu.menuItems && e.menu.menuItems !== this.props.menu.menuItems) && this.initMenu(), this.props.menu.activatedMenuItemIds || this.props.changeActiveMenuFromLocation() } } initMenu() { if ("horizontal" === this.props.mode) { const e = this.menuRef = new m.a("#menu-bar").on("shown.metisMenu", (function (t) { window.addEventListener("click", (function n(i) { t.target.contains(i.target) || (e.hide(t.detail.shownElement), window.removeEventListener("click", n)) })) })) } else this.menuRef = new m.a("#menu-bar") } render() { const e = "horizontal" === this.props.mode, t = e ? [] : this.props.menu ? this.props.menu.activatedMenuItemIds ? this.props.menu.activatedMenuItemIds : [] : [] || !1; return console.log("render items:", this.props.menu.activatedMenuItemIds), console.log("active keys:", t), s.a.createElement(s.a.Fragment, null, this.props.menu && this.props.menu.menuItems && s.a.createElement("ul", { className: "metismenu", id: "menu-bar" }, this.props.menu.menuItems.map((n, i) => s.a.createElement(s.a.Fragment, { key: n.id }, n.header && !e && s.a.createElement("li", { className: "menu-title", key: i + "-el" }, n.header), n.children ? s.a.createElement(h, { item: n, subMenuClassNames: "nav-second-level", activatedMenuItemIds: t, linkClassNames: "side-nav-link" }) : s.a.createElement(p, { item: n, className: c()({ "mm-active": t.indexOf(n.id) >= 0 }), linkClassName: "side-nav-link" }))))) } } v.defaultProps = { mode: "vertical" }; t.a = Object(r.g)(Object(o.b)(e => ({ menu: e.AppMenu }), { initMenu: u.g, changeActiveMenuFromLocation: u.a })(v)) }, 964: function (e, t, n) { e.exports = function () { "use strict"; const e = { parentTrigger: "li", subMenu: "ul", toggle: !0, triggerElement: "a" }, t = { ACTIVE: "mm-active", COLLAPSE: "mm-collapse", COLLAPSED: "mm-collapsed", COLLAPSING: "mm-collapsing", METIS: "metismenu", SHOW: "mm-show" }; class n { constructor(t, i) { this.element = n.isElement(t) ? t : document.querySelector(t), this.config = Object.assign(Object.assign({}, e), i), this.disposed = !1, this.triggerArr = [], this.boundEventHandler = this.clickEvent.bind(this), this.init() } static attach(e, t) { return new n(e, t) } init() { const { METIS: e, ACTIVE: n, COLLAPSE: i } = t; this.element.classList.add(e); const s = [...this.element.querySelectorAll(this.config.subMenu)]; 0 !== s.length && s.forEach(e => { e.classList.add(i); const t = e.closest(this.config.parentTrigger); (null === t || void 0 === t ? void 0 : t.classList.contains(n)) ? this.show(e) : this.hide(e); const s = null === t || void 0 === t ? void 0 : t.querySelector(this.config.triggerElement); "true" !== (null === s || void 0 === s ? void 0 : s.getAttribute("aria-disabled")) && (null === s || void 0 === s || s.setAttribute("aria-expanded", "false"), null === s || void 0 === s || s.addEventListener("click", this.boundEventHandler), this.triggerArr.push(s)) }) } clickEvent(e) { if (!this.disposed) { const t = null === e || void 0 === e ? void 0 : e.currentTarget; t && "A" === t.tagName && e.preventDefault(); const n = t.closest(this.config.parentTrigger), i = null === n || void 0 === n ? void 0 : n.querySelector(this.config.subMenu); this.toggle(i) } } update() { this.disposed = !1, this.init() } dispose() { this.triggerArr.forEach(e => { e.removeEventListener("click", this.boundEventHandler) }), this.disposed = !0 } on(e, t, n) { return this.element.addEventListener(e, t, n), this } off(e, t, n) { return this.element.removeEventListener(e, t, n), this } emit(e, t) { const n = new CustomEvent(e, { bubbles: arguments.length > 2 && void 0 !== arguments[2] && arguments[2], detail: t }); this.element.dispatchEvent(n) } toggle(e) { const n = e.closest(this.config.parentTrigger); (null === n || void 0 === n ? void 0 : n.classList.contains(t.ACTIVE)) ? this.hide(e) : this.show(e) } show(e) { var n; const i = e, { ACTIVE: s, COLLAPSE: a, COLLAPSED: r, COLLAPSING: o, SHOW: l } = t; if (this.isTransitioning || i.classList.contains(o)) return; const c = () => { i.classList.remove(o), i.style.height = "", i.removeEventListener("transitionend", c), this.setTransitioning(!1), this.emit("shown.metisMenu", { shownElement: i }) }, d = i.closest(this.config.parentTrigger); null === d || void 0 === d || d.classList.add(s); const m = null === d || void 0 === d ? void 0 : d.querySelector(this.config.triggerElement); null === m || void 0 === m || m.setAttribute("aria-expanded", "true"), null === m || void 0 === m || m.classList.remove(r), i.style.height = "0px", i.classList.remove(a), i.classList.remove(l), i.classList.add(o); const u = [].slice.call(null === (n = null === d || void 0 === d ? void 0 : d.parentNode) || void 0 === n ? void 0 : n.children).filter(e => e !== d); this.config.toggle && u.length > 0 && u.forEach(e => { const t = e.querySelector(this.config.subMenu); t && this.hide(t) }), this.setTransitioning(!0), i.classList.add(a), i.classList.add(l), i.style.height = "".concat(i.scrollHeight, "px"), this.emit("show.metisMenu", { showElement: i }), i.addEventListener("transitionend", c) } hide(e) { const { ACTIVE: n, COLLAPSE: i, COLLAPSED: s, COLLAPSING: a, SHOW: r } = t, o = e; if (this.isTransitioning || !o.classList.contains(r)) return; this.emit("hide.metisMenu", { hideElement: o }); const l = o.closest(this.config.parentTrigger); null === l || void 0 === l || l.classList.remove(n); const c = () => { o.classList.remove(a), o.classList.add(i), o.style.height = "", o.removeEventListener("transitionend", c), this.setTransitioning(!1), this.emit("hidden.metisMenu", { hiddenElement: o }) }; o.style.height = "".concat(o.getBoundingClientRect().height, "px"), o.style.height = "".concat(o.offsetHeight, "px"), o.classList.add(a), o.classList.remove(i), o.classList.remove(r), this.setTransitioning(!0), o.addEventListener("transitionend", c), o.style.height = "0px"; const d = null === l || void 0 === l ? void 0 : l.querySelector(this.config.triggerElement); null === d || void 0 === d || d.setAttribute("aria-expanded", "false"), null === d || void 0 === d || d.classList.add(s) } setTransitioning(e) { this.isTransitioning = e } static isElement(e) { return Boolean(e.classList) } } return n }() } }]);
//# sourceMappingURL=69.77a9efe5.chunk.js.map