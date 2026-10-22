import { areaLabel as e, getLang as t, i18n as n, languageLabel as r, levelLabel as i } from "/scripts/i18n.js";
import { computeFilteredGames as a, gameKey as o, gameLanguageText as s, normalizeUrl as c, uniqueLanguageValues as l, uniqueLevelValues as u, uniqueValues as d } from "/scripts/filters.js";
import { DEFAULT_GAME_IMAGE as f } from "/scripts/state.js";
import { openFlashDialog as p } from "/scripts/flash.js";
import { openJClicDialog as m } from "/scripts/jclic.js";
import { openIframeDialog as h } from "/scripts/external.js";
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function g(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var _ = {}, v = [], y = () => {}, b = () => !1, x = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), S = (e) => e.startsWith("onUpdate:"), C = Object.assign, ee = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, te = Object.prototype.hasOwnProperty, w = (e, t) => te.call(e, t), T = Array.isArray, ne = (e) => oe(e) === "[object Map]", E = (e) => oe(e) === "[object Set]", re = (e) => oe(e) === "[object Date]", D = (e) => typeof e == "function", O = (e) => typeof e == "string", k = (e) => typeof e == "symbol", A = (e) => typeof e == "object" && !!e, ie = (e) => (A(e) || D(e)) && D(e.then) && D(e.catch), ae = Object.prototype.toString, oe = (e) => ae.call(e), se = (e) => oe(e).slice(8, -1), ce = (e) => oe(e) === "[object Object]", le = (e) => O(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ue = /* @__PURE__ */ g(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), j = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, de = /-\w/g, M = j((e) => e.replace(de, (e) => e.slice(1).toUpperCase())), fe = /\B([A-Z])/g, N = j((e) => e.replace(fe, "-$1").toLowerCase()), pe = j((e) => e.charAt(0).toUpperCase() + e.slice(1)), me = j((e) => e ? `on${pe(e)}` : ""), P = (e, t) => !Object.is(e, t), he = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ge = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, _e = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ve, ye = () => ve ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function be(e) {
	if (T(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = O(r) ? we(r) : be(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (O(e) || A(e)) return e;
}
var xe = /;(?![^(]*\))/g, Se = /:([^]+)/, Ce = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function we(e) {
	let t = {};
	return e.replace(Ce, (e) => e.startsWith("/*") ? "" : e).split(xe).forEach((e) => {
		if (e) {
			let n = e.split(Se);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function Te(e) {
	let t = "";
	if (O(e)) t = e;
	else if (T(e)) for (let n = 0; n < e.length; n++) {
		let r = Te(e[n]);
		r && (t += r + " ");
	}
	else if (A(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Ee = /* @__PURE__ */ g("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function De(e) {
	return !!e || e === "";
}
function Oe(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Me(e[i], t[i], n);
	return r;
}
function ke(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Me(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Ae(e, t, n) {
	let r = ne(e), i = ne(t);
	if (r || i || (r = E(e), i = E(t), r || i)) return r && i ? ke(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Me(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function je(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Me(e, t, n) {
	if (e === t) return !0;
	let r = re(e), i = re(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = k(e), i = k(t), r || i ? e === t : (r = T(e), i = T(t), r || i ? r && i ? je(e, t, n, Oe) : !1 : (r = A(e), i = A(t), r || i ? !r || !i ? !1 : je(e, t, n, Ae) : String(e) === String(t))));
}
function Ne(e, t) {
	return e.findIndex((e) => Me(e, t));
}
var Pe = (e) => !!(e && e.__v_isRef === !0), F = (e) => O(e) ? e : e == null ? "" : T(e) || A(e) && (e.toString === ae || !D(e.toString)) ? Pe(e) ? F(e.value) : JSON.stringify(e, Fe, 2) : String(e), Fe = (e, t) => Pe(t) ? Fe(e, t.value) : ne(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ie(t, r) + " =>"] = n, e), {}) } : E(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ie(e)) } : k(t) ? Ie(t) : A(t) && !T(t) && !ce(t) ? String(t) : t, Ie = (e, t = "") => k(e) ? `Symbol(${e.description ?? t})` : e, I, Le = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && I && (I.active ? (this.parent = I, this.index = (I.scopes || (I.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = I;
			try {
				return I = this, e();
			} finally {
				I = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = I, I = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (I === this) I = this.prevScope;
			else {
				let e = I;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Re() {
	return I;
}
var L, ze = /* @__PURE__ */ new WeakSet(), Be = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, I && (I.active ? I.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, ze.has(this) && (ze.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || We(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, rt(this), qe(this);
		let e = L, t = $e;
		L = this, $e = !0;
		try {
			return this.fn();
		} finally {
			Je(this), L = e, $e = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ze(e);
			this.deps = this.depsTail = void 0, rt(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? ze.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ye(this) && this.run();
	}
	get dirty() {
		return Ye(this);
	}
}, Ve = 0, He, Ue;
function We(e, t = !1) {
	e.flags |= 8, t ? (e.next = Ue, Ue = e) : (e.next = He, He = e);
}
function Ge() {
	Ve++;
}
function Ke() {
	if (--Ve > 0) return;
	if (Ue) {
		let e = Ue;
		for (Ue = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; He;) {
		let t = He;
		for (He = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function qe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Je(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ze(r), Qe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ye(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Xe(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Xe(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === it) || (e.globalVersion = it, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ye(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = L, r = $e;
	L = e, $e = !0;
	try {
		qe(e);
		let n = e.fn(e._value);
		(t.version === 0 || P(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		L = n, $e = r, Je(e), e.flags &= -3;
	}
}
function Ze(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ze(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Qe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var $e = !0, et = [];
function tt() {
	et.push($e), $e = !1;
}
function nt() {
	let e = et.pop();
	$e = e === void 0 || e;
}
function rt(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = L;
		L = void 0;
		try {
			t();
		} finally {
			L = e;
		}
	}
}
var it = 0, at = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, ot = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!L || !$e || L === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== L) t = this.activeLink = new at(L, this), L.deps ? (t.prevDep = L.depsTail, L.depsTail.nextDep = t, L.depsTail = t) : L.deps = L.depsTail = t, st(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = L.depsTail, t.nextDep = void 0, L.depsTail.nextDep = t, L.depsTail = t, L.deps === t && (L.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, it++, this.notify(e);
	}
	notify(e) {
		Ge();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ke();
		}
	}
};
function st(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) st(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var ct = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ Symbol(""), ut = /* @__PURE__ */ Symbol(""), dt = /* @__PURE__ */ Symbol("");
function R(e, t, n) {
	if ($e && L) {
		let t = ct.get(e);
		t || ct.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new ot()), r.map = t, r.key = n), r.track();
	}
}
function ft(e, t, n, r, i, a) {
	let o = ct.get(e);
	if (!o) {
		it++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ge(), t === "clear") o.forEach(s);
	else {
		let i = T(e), a = i && le(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === dt || !k(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(dt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(lt)), ne(e) && s(o.get(ut)));
				break;
			case "delete":
				i || (s(o.get(lt)), ne(e) && s(o.get(ut)));
				break;
			case "set": ne(e) && s(o.get(lt));
		}
	}
	Ke();
}
function pt(e) {
	let t = /* @__PURE__ */ B(e);
	return t === e || (R(t, "iterate", dt), /* @__PURE__ */ z(e)) ? t : /* @__PURE__ */ Qt(e) ? /* @__PURE__ */ Zt(e) ? t.map((e) => tn(V(e))) : t.map(tn) : t.map(V);
}
function mt(e) {
	return R(e = /* @__PURE__ */ B(e), "iterate", dt), e;
}
function ht(e, t) {
	return /* @__PURE__ */ Qt(e) ? tn(/* @__PURE__ */ Zt(e) ? V(t) : t) : V(t);
}
var gt = {
	__proto__: null,
	[Symbol.iterator]() {
		return _t(this, Symbol.iterator, (e) => ht(this, e));
	},
	concat(...e) {
		return pt(this).concat(...e.map((e) => T(e) ? pt(e) : e));
	},
	entries() {
		return _t(this, "entries", (e) => (e[1] = ht(this, e[1]), e));
	},
	every(e, t) {
		return bt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return bt(this, "filter", e, t, (e) => e.map((e) => ht(this, e)), arguments);
	},
	find(e, t) {
		return bt(this, "find", e, t, (e) => ht(this, e), arguments);
	},
	findIndex(e, t) {
		return bt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return bt(this, "findLast", e, t, (e) => ht(this, e), arguments);
	},
	findLastIndex(e, t) {
		return bt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return bt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return St(this, "includes", e);
	},
	indexOf(...e) {
		return St(this, "indexOf", e);
	},
	join(e) {
		return pt(this).join(e);
	},
	lastIndexOf(...e) {
		return St(this, "lastIndexOf", e);
	},
	map(e, t) {
		return bt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Ct(this, "pop");
	},
	push(...e) {
		return Ct(this, "push", e);
	},
	reduce(e, ...t) {
		return xt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return xt(this, "reduceRight", e, t);
	},
	shift() {
		return Ct(this, "shift");
	},
	some(e, t) {
		return bt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Ct(this, "splice", e);
	},
	toReversed() {
		return pt(this).toReversed();
	},
	toSorted(e) {
		return pt(this).toSorted(e);
	},
	toSpliced(...e) {
		return pt(this).toSpliced(...e);
	},
	unshift(...e) {
		return Ct(this, "unshift", e);
	},
	values() {
		return _t(this, "values", (e) => ht(this, e));
	}
};
function _t(e, t, n) {
	let r = mt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ z(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => vt(a.next(), n), i !== yt[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => vt(a._next(), n);
	}
	return a;
}
function vt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var yt = Array.prototype;
function bt(e, t, n, r, i, a) {
	let o = mt(e), s = o !== e && !/* @__PURE__ */ z(e), c = o[t];
	if (c !== yt[t]) {
		let t = c.apply(e, a);
		return s ? V(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ht(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function xt(e, t, n, r) {
	let i = mt(e), a = i !== e && !/* @__PURE__ */ z(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ht(e, t)), n.call(this, t, ht(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ht(e, c) : c;
}
function St(e, t, n) {
	let r = /* @__PURE__ */ B(e);
	R(r, "iterate", dt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ $t(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), r[t](...n)) : i;
}
function Ct(e, t, n = []) {
	tt(), Ge();
	let r = (/* @__PURE__ */ B(e))[t].apply(e, n);
	return Ke(), nt(), r;
}
var wt = /* @__PURE__ */ g("__proto__,__v_isRef,__isVue"), Tt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(k));
function Et(e) {
	k(e) || (e = String(e));
	let t = /* @__PURE__ */ B(this);
	return R(t, "has", e), t.hasOwnProperty(e);
}
var Dt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Gt : Wt : i ? Ut : Ht).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = T(e);
		if (!r) {
			let e;
			if (a && (e = gt[t])) return e;
			if (t === "hasOwnProperty") return Et;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ H(e) ? e : n);
		if ((k(t) ? Tt.has(t) : wt(t)) || (r || R(e, "get", t), i)) return o;
		if (/* @__PURE__ */ H(o)) {
			let e = a && le(t) ? o : o.value;
			return r && A(e) ? /* @__PURE__ */ Yt(e) : e;
		}
		return A(o) ? r ? /* @__PURE__ */ Yt(o) : /* @__PURE__ */ qt(o) : o;
	}
}, Ot = class extends Dt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = T(e) && le(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Qt(i);
			if (!/* @__PURE__ */ z(n) && !/* @__PURE__ */ Qt(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !a && /* @__PURE__ */ H(i) && !/* @__PURE__ */ H(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : w(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ H(e) ? e : r);
		return e === /* @__PURE__ */ B(r) && s && (o ? P(n, i) && ft(e, "set", t, n, i) : ft(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = w(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ft(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return k(t) && Tt.has(t) || R(e, "has", t), n;
	}
	ownKeys(e) {
		return R(e, "iterate", T(e) ? "length" : lt), Reflect.ownKeys(e);
	}
}, kt = class extends Dt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, At = /* @__PURE__ */ new Ot(), jt = /* @__PURE__ */ new kt(), Mt = /* @__PURE__ */ new Ot(!0), Nt = (e) => e, Pt = (e) => Reflect.getPrototypeOf(e);
function Ft(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ B(i), o = ne(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Nt : t ? tn : V;
		return !t && R(a, "iterate", c ? ut : lt), C(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [u(e[0]), u(e[1])] : u(e),
				done: t
			};
		} });
	};
}
function It(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Lt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ B(r), a = /* @__PURE__ */ B(n);
			e || (P(n, a) && R(i, "get", n), R(i, "get", a));
			let { has: o } = Pt(i), s = t ? Nt : e ? tn : V;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && R(/* @__PURE__ */ B(t), "iterate", lt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ B(n), i = /* @__PURE__ */ B(t);
			return e || (P(t, i) && R(r, "has", t), R(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ B(a), s = t ? Nt : e ? tn : V;
			return !e && R(o, "iterate", lt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return C(n, e ? {
		add: It("add"),
		set: It("set"),
		delete: It("delete"),
		clear: It("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ B(this), r = Pt(n), i = /* @__PURE__ */ B(e), a = !t && !/* @__PURE__ */ z(e) && !/* @__PURE__ */ Qt(e) ? i : e;
			return r.has.call(n, a) || P(e, a) && r.has.call(n, e) || P(i, a) && r.has.call(n, i) || (n.add(a), ft(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ z(n) || /* @__PURE__ */ Qt(n) || (n = /* @__PURE__ */ B(n));
			let r = /* @__PURE__ */ B(this), { has: i, get: a } = Pt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ B(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? P(n, s) && ft(r, "set", e, n, s) : ft(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ B(this), { has: n, get: r } = Pt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ B(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ft(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ B(this), t = e.size !== 0, n = e.clear();
			return t && ft(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ft(r, e, t);
	}), n;
}
function Rt(e, t) {
	let n = Lt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(w(n, i) && i in r ? n : r, i, a);
}
var zt = { get: /* @__PURE__ */ Rt(!1, !1) }, Bt = { get: /* @__PURE__ */ Rt(!1, !0) }, Vt = { get: /* @__PURE__ */ Rt(!0, !1) }, Ht = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap();
function Kt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return /* @__PURE__ */ Qt(e) ? e : Xt(e, !1, At, zt, Ht);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return Xt(e, !1, Mt, Bt, Ut);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return Xt(e, !0, jt, Vt, Wt);
}
function Xt(e, t, n, r, i) {
	if (!A(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Kt(se(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return /* @__PURE__ */ Qt(e) ? /* @__PURE__ */ Zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function z(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ B(t) : e;
}
function en(e) {
	return !w(e, "__v_skip") && Object.isExtensible(e) && ge(e, "__v_skip", !0), e;
}
var V = (e) => A(e) ? /* @__PURE__ */ qt(e) : e, tn = (e) => A(e) ? /* @__PURE__ */ Yt(e) : e;
// @__NO_SIDE_EFFECTS__
function H(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return an(e, !1);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
	return an(e, !0);
}
function an(e, t) {
	return /* @__PURE__ */ H(e) ? e : new on(e, t);
}
var on = class {
	constructor(e, t) {
		this.dep = new ot(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ B(e), this._value = t ? e : V(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ z(e) || /* @__PURE__ */ Qt(e);
		e = n ? e : /* @__PURE__ */ B(e), P(e, t) && (this._rawValue = e, this._value = n ? e : V(e), this.dep.trigger());
	}
};
function U(e) {
	return /* @__PURE__ */ H(e) ? e.value : e;
}
var sn = {
	get: (e, t, n) => t === "__v_raw" ? e : U(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ H(i) && !/* @__PURE__ */ H(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function cn(e) {
	return /* @__PURE__ */ Zt(e) ? e : new Proxy(e, sn);
}
var ln = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new ot(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = it - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && L !== this) return We(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Xe(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function un(e, t, n = !1) {
	let r, i;
	return D(e) ? r = e : (r = e.get, i = e.set), new ln(r, i, n);
}
var dn = {}, fn = /* @__PURE__ */ new WeakMap(), pn = void 0;
function mn(e, t = !1, n = pn) {
	if (n) {
		let t = fn.get(n);
		t || fn.set(n, t = []), t.push(e);
	}
}
function hn(e, t, n = _) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => i ? e : /* @__PURE__ */ z(e) || i === !1 || i === 0 ? gn(e, 1) : gn(e), u, d, f, p, m = !1, h = !1;
	if (/* @__PURE__ */ H(e) ? (d = () => e.value, m = /* @__PURE__ */ z(e)) : /* @__PURE__ */ Zt(e) ? (d = () => l(e), m = !0) : T(e) ? (h = !0, m = e.some((e) => /* @__PURE__ */ Zt(e) || /* @__PURE__ */ z(e)), d = () => e.map((e) => {
		if (/* @__PURE__ */ H(e)) return e.value;
		if (/* @__PURE__ */ Zt(e)) return l(e);
		if (D(e)) return c ? c(e, 2) : e();
	})) : d = D(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (f) {
			tt();
			try {
				f();
			} finally {
				nt();
			}
		}
		let t = pn;
		pn = u;
		try {
			return c ? c(e, 3, [p]) : e(p);
		} finally {
			pn = t;
		}
	} : y, t && i) {
		let e = d, t = i === !0 ? Infinity : i;
		d = () => gn(e(), t);
	}
	let g = Re(), v = () => {
		u.stop(), g && g.active && ee(g.effects, u);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			try {
				return e(...t);
			} finally {
				v();
			}
		};
	}
	let b = h ? Array(e.length).fill(dn) : dn, x = (e) => {
		if (u.flags & 1 && (u.dirty || e)) {
			if (t) {
				let n = u.run();
				if (e || i || m || (h ? n.some((e, t) => P(e, b[t])) : P(n, b))) {
					let e = pn;
					tt();
					try {
						f && f(), pn = u;
						let e = [
							n,
							b === dn ? void 0 : h && b[0] === dn ? [] : b,
							p
						];
						b = n, c ? c(t, 3, e) : t(...e);
					} finally {
						pn = e, nt();
					}
				}
			} else u.run();
		}
	};
	return s && s(x), u = new Be(d), u.scheduler = o ? () => o(x, !1) : x, p = (e) => mn(e, !1, u), f = u.onStop = () => {
		let e = fn.get(u);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			fn.delete(u);
		}
	}, t ? r ? x(!0) : b = u.run() : o ? o(x.bind(null, !0), !0) : u.run(), v.pause = u.pause.bind(u), v.resume = u.resume.bind(u), v.stop = v, v;
}
function gn(e, t = Infinity, n) {
	if (t <= 0 || !A(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ H(e)) gn(e.value, t, n);
	else if (T(e)) for (let r = 0; r < e.length; r++) gn(e[r], t, n);
	else if (E(e) || ne(e)) e.forEach((e) => {
		gn(e, t, n);
	});
	else if (ce(e)) {
		for (let r in e) gn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && gn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function _n(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		yn(e, t, n);
	}
}
function vn(e, t, n, r) {
	if (D(e)) {
		let i = _n(e, t, n, r);
		return i && ie(i) && i.catch((e) => {
			yn(e, t, n);
		}), i;
	}
	if (T(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(vn(e[a], t, n, r));
		return i;
	}
}
function yn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || _;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (a) {
			tt(), _n(a, null, 10, [
				e,
				i,
				o
			]), nt();
			return;
		}
	}
	bn(e, n, i, r, o);
}
function bn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var W = [], xn = -1, Sn = [], Cn = null, wn = 0, Tn = /* @__PURE__ */ Promise.resolve(), En = null;
function Dn(e) {
	let t = En || Tn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function On(e) {
	let t = xn + 1, n = W.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = W[r], a = In(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function kn(e) {
	if (!(e.flags & 1)) {
		let t = In(e), n = W[W.length - 1];
		!n || !(e.flags & 2) && t >= In(n) ? W.push(e) : W.splice(On(t), 0, e), e.flags |= 1, An();
	}
}
function An() {
	En ||= Tn.then(Ln);
}
function jn(e) {
	if (!T(e)) Cn && e.id === -1 ? Cn.splice(wn + 1, 0, e) : e.flags & 1 || (Sn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Sn.push(e[t]);
	An();
}
function Mn(e, t, n, r = xn + 1) {
	for (; r < W.length; r++) {
		let n = W[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			W.splice(r, 1), r = e ? r - 1 : xn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Nn(e, t, n = 0) {
	if (Sn.length) {
		let e = Sn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Sn.length; i++) {
				let a = Sn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Sn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => In(e) - In(t));
		if (Sn.length = r, Cn) {
			for (let e = 0; e < i.length; e++) Cn.push(i[e]);
			return;
		}
		for (Cn = i, wn = 0; wn < Cn.length; wn++) {
			let e = Cn[wn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Cn = null, wn = 0;
	}
}
var Pn = !1;
function Fn(e, t) {
	if (Pn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Sn);
	e(), Pn = !0;
	try {
		Mn(void 0, t), Nn(void 0, n, t);
	} finally {
		Pn = !1;
	}
}
var In = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Ln(e) {
	try {
		for (xn = 0; xn < W.length; xn++) {
			let e = W[xn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), _n(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; xn < W.length; xn++) {
			let e = W[xn];
			e && (e.flags &= -2);
		}
		xn = -1, W.length = 0, Nn(e), En = null, (W.length || Sn.length) && Ln(e);
	}
}
var G = null, Rn = null;
function zn(e) {
	let t = G;
	return G = e, Rn = e && e.type.__scopeId || null, t;
}
function Bn(e, t = G, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ci(-1);
		let i = zn(t), a = bi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = bi.length; e > a; e--) xi();
			zn(i), r._d && Ci(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Vn(e, t) {
	if (G === null) return e;
	let n = ia(G), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = _] = t[e];
		i && (D(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && gn(a), r.push({
			dir: i,
			instance: n,
			value: a,
			oldValue: void 0,
			arg: o,
			modifiers: s
		}));
	}
	return e;
}
function Hn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (tt(), vn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), nt());
	}
}
function Un(e, t, n = !1) {
	let r = Gi();
	if (r || kr) {
		let i = kr ? kr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && D(t) ? t.call(r && r.proxy) : t;
	}
}
var Wn = /* @__PURE__ */ Symbol.for("v-scx"), Gn = () => Un(Wn);
function Kn(e, t, n) {
	return qn(e, t, n);
}
function qn(e, t, n = _) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = C({}, n), c = t && r || !t && a !== "post", l;
	if (Zi) {
		if (a === "sync") {
			let e = Gn();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = y, e.resume = y, e.pause = y, e;
		}
	}
	let u = Wi;
	s.call = (e, t, n) => vn(e, u, t, n);
	let d = !1;
	a === "post" ? s.scheduler = (e) => {
		e.i = u, K(e, u && u.suspense);
	} : a !== "sync" && (d = !0, s.scheduler = (e, t) => {
		t ? e() : kn(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let f = hn(e, t, s);
	return Zi && (l ? l.push(f) : c && f()), f;
}
var Jn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ Symbol("_vte"), Xn = (e) => e.__isTeleport, Zn = (e) => e && (e.disabled || e.disabled === ""), Qn = (e) => e && (e.defer || e.defer === ""), $n = (e) => typeof SVGElement < "u" && e instanceof SVGElement, er = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, tr = (e, t) => {
	let n = e && e.to;
	return O(n) ? t ? t(n) : null : n;
}, nr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = Zn(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = Zn(e.props), r = e.target = tr(e.props, m), a = sr(r, e, h, p);
			r && (o !== "svg" && $n(r) ? o = "svg" : o !== "mathml" && er(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), or(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (Jn.get(e) === t) {
					if (Jn.delete(e), Zn(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), or(e, !0);
					}
					x(e);
				}
			};
			Jn.set(e, t), K(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), Qn(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), or(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Jn.get(e);
			if (u) {
				u.flags |= 8, Jn.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = Zn(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || $n(p) ? o = "svg" : (o === "mathml" || er(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), ui(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = tr(t.props, m);
				e && (t.target = e, rr(t, e, null, l, 0));
			} else g && rr(t, p, h, l, 1);
			or(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = Zn(f), m = a || !p, h = Jn.get(e);
		if (h && (h.flags |= 8, Jn.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: rr,
	hydrate: ir
};
function rr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Jn.has(e) && (!d || Zn(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function ir(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = tr(t.props, c), h = Zn(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || sr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || sr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), or(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var ar = nr;
function or(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function sr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Yn] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var cr = /* @__PURE__ */ Symbol("_leaveCb");
function lr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== vi) {
			t = n;
			break;
		}
	}
	return t;
}
function ur(e) {
	if (!yr(e)) return Xn(e.type) && e.children ? lr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && D(n.default)) return n.default();
	}
}
function dr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		dr(Xn(n.type) && ur(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === q && T(e.children)) {
		let n = Fr(e.children, !1);
		n && dr(n, t);
	}
}
function fr(e) {
	if (e.component) return fr(e.component.subTree);
	if (e.type === q) {
		let t = T(e.children) && Fr(e.children, !1);
		return t ? fr(t) : void 0;
	}
	if (e.type !== vi) return e;
}
function pr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function mr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var hr = /* @__PURE__ */ new WeakMap();
function gr(e, t, n, r, i = !1) {
	if (T(e)) {
		e.forEach((e, a) => gr(e, t && (T(t) ? t[a] : t), n, r, i));
		return;
	}
	if (vr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && gr(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? ia(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === _ ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ B(d), p = d === _ ? b : (e) => !mr(u, e) && w(f, e), m = (e, t) => !(t && mr(u, t));
	if (l != null && l !== c) {
		if (_r(t), O(l)) u[l] = null, p(l) && (d[l] = null);
		else if (/* @__PURE__ */ H(l)) {
			let e = t;
			m(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (D(c)) _n(c, s, 12, [o, u]);
	else {
		let t = O(c), r = /* @__PURE__ */ H(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? p(c) ? d[c] : u[c] : m(c) || !e.k ? c.value : u[e.k];
					if (i) T(n) && ee(n, a);
					else if (T(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], p(c) && (d[c] = u[c]);
					else {
						let t = [a];
						m(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, p(c) && (d[c] = o)) : r && (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), hr.delete(e);
				};
				t.id = -1, hr.set(e, t), K(t, n);
			} else _r(e), s();
		}
	}
}
function _r(e) {
	let t = hr.get(e);
	t && (t.flags |= 8, hr.delete(e));
}
ye().requestIdleCallback, ye().cancelIdleCallback;
var vr = (e) => !!e.type.__asyncLoader, yr = (e) => e.type.__isKeepAlive, br = /* @__PURE__ */ Symbol.for("v-ndc");
function xr(e, t, n, r) {
	let i, a = n && n[r], o = T(e);
	if (o || O(e)) {
		let n = o && /* @__PURE__ */ Zt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ z(e), s = /* @__PURE__ */ Qt(e), e = mt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? tn(V(e[n])) : V(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (!Number.isInteger(e) || e < 0) i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (A(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
var Sr = (e) => e ? Xi(e) ? ia(e) : Sr(e.parent) : null, Cr = /* @__PURE__ */ C(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Sr(e.parent),
	$root: (e) => Sr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => e.type,
	$forceUpdate: (e) => e.f ||= () => {
		kn(e.update);
	},
	$nextTick: (e) => e.n ||= Dn.bind(e.proxy),
	$watch: (e) => y
}), wr = (e, t) => e !== _ && !e.__isScriptSetup && w(e, t), Tr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: o, type: s, appContext: c } = e;
		if (t[0] !== "$") {
			let e = o[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (wr(r, t)) return o[t] = 1, r[t];
			else if (w(a, t)) return o[t] = 3, a[t];
			else if (n !== _ && w(n, t)) return o[t] = 4, n[t];
			else o[t] = 0;
		}
		let l = Cr[t], u, d;
		if (l) return t === "$attrs" && R(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== _ && w(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, w(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return wr(i, t) ? (i[t] = n, !0) : w(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || wr(t, s) || w(a, s) || w(r, s) || w(Cr, s) || w(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? w(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Er() {
	return {
		app: null,
		config: {
			isNativeTag: b,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Dr = 0;
function Or(e, t) {
	return function(n, r = null) {
		D(n) || (n = C({}, n)), r != null && !A(r) && (r = null);
		let i = Er(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Dr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: oa,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && D(e.install) ? (a.add(e), e.install(c, ...t)) : D(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || Ai(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, ia(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (vn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = kr;
				kr = c;
				try {
					return e();
				} finally {
					kr = t;
				}
			}
		};
		return c;
	};
}
var kr = null, Ar = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${M(t)}Modifiers`] || e[`${N(t)}Modifiers`];
function jr(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || _, i = n, a = t.startsWith("update:"), o = a && Ar(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => O(e) ? e.trim() : e)), o.number && (i = i.map(_e)));
	let s, c = r[s = me(t)] || r[s = me(M(t))];
	!c && a && (c = r[s = me(N(t))]), c && vn(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, vn(l, e, 6, i);
	}
}
function Mr(e, t, n = !1) {
	let r = t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {};
	return a ? (T(a) ? a.forEach((e) => o[e] = null) : C(o, a), A(e) && r.set(e, o), o) : (A(e) && r.set(e, null), null);
}
function Nr(e, t) {
	return !e || !x(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), w(e, t[0].toLowerCase() + t.slice(1)) || w(e, N(t)) || w(e, t));
}
function Pr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, g = zn(e), _, v;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			_ = Fi(l.call(t, e, u, d, p, f, m)), v = s;
		} else {
			let e = t;
			_ = Fi(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), v = t.props ? s : Ir(s);
		}
	} catch (t) {
		bi.length = 0, yn(t, e, 1), _ = Ai(vi);
	}
	let y = _;
	if (v && h !== !1) {
		let e = Object.keys(v), { shapeFlag: t } = y;
		e.length && t & 7 && (a && e.some(S) && (v = Lr(v, a)), y = Ni(y, v, !1, !0));
	}
	return n.dirs && (y = Ni(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && dr(Xn(y.type) && ur(y) || y, n.transition), _ = y, zn(g), _;
}
function Fr(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Ei(r)) {
			if (r.type !== vi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Ir = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || x(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Lr = (e, t) => {
	let n = {};
	for (let r in e) S(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Rr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? zr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Br(o, r, n) && !Nr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || zr(r, o, l) : !!o;
	return !1;
}
function zr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!w(e, a) || Br(t, e, a) && !Nr(n, a)) return !0;
	}
	return !1;
}
function Br(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && A(r) && A(i) ? !Me(r, i) : r !== i;
}
function Vr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Hr = {}, Ur = () => Object.create(Hr), Wr = (e) => Object.getPrototypeOf(e) === Hr;
function Gr(e, t, n, r = !1) {
	let i = {}, a = Ur();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), qr(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Jt(i) : e.type.props ? i : a, e.attrs = a;
}
function Kr(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ B(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Nr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (w(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = M(o);
						i[t] = Jr(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		qr(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (w(t, a) || (r = N(a)) !== a && w(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Jr(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && w(t, e) || (delete a[e], l = !0);
	}
	l && ft(e.attrs, "set", "");
}
function qr(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (ue(c)) continue;
		let l = t[c], u;
		i && w(i, u = M(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : Nr(e.emitsOptions, c) || c in r && l === r[c] || (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ B(n), r = s || _;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Jr(i, t, s, r[s], e, !w(r, s));
		}
	}
	return o;
}
function Jr(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = w(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && D(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ji(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === N(n)) && (r = !0));
	}
	return r;
}
function Yr(e, t, n = !1) {
	let r = t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [];
	if (!a) return A(e) && r.set(e, v), v;
	if (T(a)) for (let e = 0; e < a.length; e++) {
		let t = M(a[e]);
		Xr(t) && (o[t] = _);
	}
	else if (a) for (let e in a) {
		let t = M(e);
		if (Xr(t)) {
			let n = a[e], r = o[t] = T(n) || D(n) ? { type: n } : C({}, n), i = r.type, c = !1, l = !0;
			if (T(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = D(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				}
				n === "String" && (l = !1);
			}
			else c = D(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || w(r, "default")) && s.push(t);
		}
	}
	let c = [o, s];
	return A(e) && r.set(e, c), c;
}
function Xr(e) {
	return e[0] !== "$" && !ue(e);
}
var Zr = (e) => e === "_" || e === "_ctx" || e === "$stable", Qr = (e) => T(e) ? e.map(Fi) : [Fi(e)], $r = (e, t, n) => {
	if (t._n) return t;
	let r = Bn((...e) => Qr(t(...e)), n);
	return r._c = !1, r;
}, ei = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Zr(n)) continue;
		let i = e[n];
		if (D(i)) t[n] = $r(n, i, r);
		else if (i != null) {
			let e = Qr(i);
			t[n] = () => e;
		}
	}
}, ti = (e, t) => {
	let n = Qr(t);
	e.slots.default = () => n;
}, ni = (e, t, n) => {
	for (let r in t) (n || !Zr(r)) && (e[r] = t[r]);
}, ri = (e, t, n) => {
	let r = e.slots = Ur();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ni(r, t, n), n && ge(r, "_", e, !0)) : ei(t, r);
	} else t && ti(e, t);
}, ii = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = _;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : ni(i, t, n) : (a = !t.$stable, ei(t, i)), o = t;
	} else t && (ti(e, t), o = { default: 1 });
	if (a) for (let e in i) !Zr(e) && o[e] == null && delete i[e];
}, K = gi;
function ai(e) {
	return oi(e);
}
function oi(e, t) {
	let n = ye();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p = y, insertStaticContent: m } = e, h = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Di(e, t) && (r = pe(e), j(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === v && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case _i:
				g(e, t, n, r);
				break;
			case vi:
				b(e, t, n, r);
				break;
			case yi:
				e ?? x(t, n, r, o);
				break;
			case q:
				D(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? O(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, P);
		}
		u != null && i ? gr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && gr(e.ref, null, a, e, !0);
	}, g = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && l(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = m(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = f(e), r(e, n, i), e = a;
		r(t, n, i);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, ee = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ne(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && T(e.children, f, null, i, s, si(e, c), l, d), _ && Hn(e, null, i, "created"), w(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !ue(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && zi(p, i, e);
		}
		_ && Hn(e, null, i, "beforeMount");
		let v = li(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && K(() => {
			try {
				p && zi(p, i, e), v && g.enter(f), _ && Hn(e, null, i, "mounted");
			} finally {}
		}, s);
	}, w = (e, t, n, r, i) => {
		if (n && p(e, n), r) for (let t = 0; t < r.length; t++) p(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || hi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				w(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Ii(e[l]) : Fi(e[l]);
			h(null, c, t, n, r, i, a, o, s);
		}
	}, ne = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: d, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || _, m = t.props || _, h;
		if (n && ci(n, !1), (h = m.onVnodeBeforeUpdate) && zi(h, n, t, e), f && Hn(t, e, n, "beforeUpdate"), n && ci(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (l = 0, s = !1, d = null), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && u(c, ""), d ? E(e.dynamicChildren, d, c, n, r, si(t, i), o) : s || oe(e, t, c, null, n, r, si(t, i), o, !1), l > 0) {
			if (l & 16) re(c, p, m, n, i);
			else if (l & 2 && p.class !== m.class && a(c, "class", null, m.class, i), l & 4 && a(c, "style", p.style, m.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = p[r], s = m[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && u(c, t.children);
		} else !s && d == null && re(c, p, m, n, i);
		((h = m.onVnodeUpdated) || f) && K(() => {
			h && zi(h, n, t, e), f && Hn(t, e, n, "updated");
		}, r);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || mi(c), f = u && (c.type === q || !Di(c, l) || c.shapeFlag & 198) ? d(u) : n;
			h(c, l, f, null, r, i, a, o, !0);
		}
	}, re = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== _) for (let o in t) !ue(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (ue(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, D = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), T(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && ui(e, t, !0)) : oe(e, t, n, f, a, o, c, l, u);
	}, O = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : k(t, n, r, i, a, o, c) : A(e, t, c);
	}, k = (e, t, n, r, i, a, o) => {
		let s = e.component = Ui(e, r, i);
		if (yr(e) && (s.ctx.renderer = P), Qi(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ie, o, a), !e.el) {
				let r = s.subTree = Ai(vi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ie(s, e, t, n, i, a, o);
	}, A = (e, t, n) => {
		let r = t.component = e.component;
		if (Rr(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, ae(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, ie = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = fi(e);
					if (n) {
						t && (t.el = c.el, ae(e, t, o)), n.asyncDep.then(() => {
							K(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, f;
				ci(e, !1), t ? (t.el = c.el, ae(e, t, o)) : t = c, n && he(n), (f = t.props && t.props.onVnodeBeforeUpdate) && zi(f, s, t, c), ci(e, !0);
				let p = Pr(e), m = e.subTree;
				e.subTree = p, h(m, p, d(m.el), pe(m), e, i, a), t.el = p.el, u === null && Vr(e, p.el), r && K(r, i), (f = t.props && t.props.onVnodeUpdated) && K(() => zi(f, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = vr(t);
				if (ci(e, !1), l && he(l), !m && (o = c && c.onVnodeBeforeMount) && zi(o, d, t), ci(e, !0), s && _e) {
					let t = () => {
						e.subTree = Pr(e), _e(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Pr(e);
					h(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && K(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					K(() => zi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && vr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && K(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Be(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => kn(u), ci(e, !0), l();
	}, ae = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Kr(e, t.props, r, n), ii(e, t.children, n), tt(), Mn(e), nt();
	}, oe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				ce(l, f, n, r, i, a, o, s, c);
				return;
			}
			if (p & 256) {
				se(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && N(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? ce(l, f, n, r, i, a, o, s, c) : N(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && T(f, n, r, i, a, o, s, c));
	}, se = (e, t, n, r, i, a, o, s, c) => {
		e ||= v, t ||= v;
		let l = e.length, u = t.length, d = Math.min(l, u), f = 0;
		for (; f < d; f++) {
			let r = t[f] = c ? Ii(t[f]) : Fi(t[f]);
			h(e[f], r, n, null, i, a, o, s, c);
		}
		l > u ? N(e, i, a, !0, !1, d) : T(t, n, r, i, a, o, s, c, d);
	}, ce = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, f = u - 1;
		for (; l <= d && l <= f;) {
			let r = e[l], u = t[l] = c ? Ii(t[l]) : Fi(t[l]);
			if (Di(r, u)) h(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= f;) {
			let r = e[d], l = t[f] = c ? Ii(t[f]) : Fi(t[f]);
			if (Di(r, l)) h(r, l, n, null, i, a, o, s, c);
			else break;
			d--, f--;
		}
		if (l > d) {
			if (l <= f) {
				let e = f + 1, d = e < u ? t[e].el : r;
				for (; l <= f;) h(null, t[l] = c ? Ii(t[l]) : Fi(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > f) for (; l <= d;) j(e[l], i, a, !0), l++;
		else {
			let p = l, m = l, g = /* @__PURE__ */ new Map();
			for (l = m; l <= f; l++) {
				let e = t[l] = c ? Ii(t[l]) : Fi(t[l]);
				e.key != null && g.set(e.key, l);
			}
			let _, y = 0, b = f - m + 1, x = !1, S = 0, C = Array(b);
			for (l = 0; l < b; l++) C[l] = 0;
			for (l = p; l <= d; l++) {
				let r = e[l];
				if (y >= b) {
					j(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = g.get(r.key);
				else for (_ = m; _ <= f; _++) if (C[_ - m] === 0 && Di(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? j(r, i, a, !0) : (C[u - m] = l + 1, u >= S ? S = u : x = !0, h(r, t[u], n, null, i, a, o, s, c), y++);
			}
			let ee = x ? di(C) : v;
			for (_ = ee.length - 1, l = b - 1; l >= 0; l--) {
				let e = m + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || mi(f) : r;
				C[l] === 0 ? h(null, d, n, p, i, a, o, s, c) : x && (_ < 0 || l !== ee[_] ? le(d, n, p, 2) : _--);
			}
		}
	}, le = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) le(e.component.subTree, t, n, a);
		else if (d & 128) e.suspense.move(t, n, a);
		else if (d & 64) c.move(e, t, n, P);
		else if (c === q) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) le(u[e], t, n, a);
			r(e.anchor, t, n);
		} else if (c === yi) S(e, t, n);
		else if (a !== 2 && d & 1 && l) {
			if (a === 0) l.persisted && !s[cr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), K(() => l.enter(s), o));
			else {
				let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? i(s) : r(s, t, n);
				}, d = () => {
					let e = s._isLeaving || !!s[cr];
					s._isLeaving && s[cr](!0), l.persisted && !e ? u() : a(s, () => {
						u(), c && c();
					});
				};
				o ? o(s, u, d) : d();
			}
		} else r(s, t, n);
	}, j = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (tt(), gr(s, null, n, e, !0), nt()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !vr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && zi(_, t, e), u & 6) fe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Hn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, P, r) : l && !l.hasOnce && (a !== q || d > 0 && d & 64) ? N(l, t, n, !1, !0) : (a === q && d & 384 || !i && u & 16) && N(c, t, n), r && de(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && K(() => {
			_ && zi(_, t, e), h && Hn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, de = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e, o = t === q;
		if (o && !a) {
			M(n, r);
			return;
		}
		if (t === yi) {
			C(e), a && !a.persisted && a.afterLeave && a.afterLeave();
			return;
		}
		let s = o ? fr(e) : e, c = () => {
			o ? d(n) && M(n, r) : i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (s && s.shapeFlag & 1 && a && !a.persisted) {
			let { leave: e, delayLeave: t } = a, n = s.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, M = (e, t) => {
		let n;
		for (; e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, fe = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		pi(c), pi(l), r && he(r), i.stop(), a ? (a.flags |= 8, j(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, j(o, e, t, n)), s && K(s, t), K(() => {
			e.isUnmounted = !0;
		}, t);
	}, N = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) j(e[o], t, n, r, i);
	}, pe = (e) => {
		if (e.shapeFlag & 6) return pe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = f(e.anchor || e.el), n = t && t[Yn];
		return n ? f(n) : t;
	}, me = (e, t, n) => {
		Fn(() => {
			e == null ? t._vnode && j(t._vnode, null, null, !0) : h(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Hi());
	}, P = {
		p: h,
		um: j,
		m: le,
		r: de,
		mt: k,
		mc: T,
		pc: oe,
		pbc: E,
		n: pe,
		o: e
	}, ge, _e;
	return t && ([ge, _e] = t(P)), {
		render: me,
		hydrate: ge,
		createApp: Or(me, ge)
	};
}
function si({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ci({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function li(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ui(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (T(r) && T(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ii(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && ui(t, a)), a.type === _i && (a.patchFlag === -1 && (a = i[e] = Ii(a)), a.el = t.el), a.type === vi && !a.el && (a.el = t.el);
	}
}
function di(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function fi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : fi(t);
}
function pi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function mi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? mi(t.subTree) : null;
}
var hi = (e) => e.__isSuspense;
function gi(e, t) {
	t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : jn(e);
}
var q = /* @__PURE__ */ Symbol.for("v-fgt"), _i = /* @__PURE__ */ Symbol.for("v-txt"), vi = /* @__PURE__ */ Symbol.for("v-cmt"), yi = /* @__PURE__ */ Symbol.for("v-stc"), bi = [], J = null;
function Y(e = !1) {
	bi.push(J = e ? null : []);
}
function xi() {
	bi.pop(), J = bi[bi.length - 1] || null;
}
var Si = 1;
function Ci(e, t = !1) {
	Si += e, e < 0 && J && t && (J.hasOnce = !0);
}
function wi(e) {
	return e.dynamicChildren = Si > 0 ? J || v : null, xi(), Si > 0 && J && J.push(e), e;
}
function X(e, t, n, r, i, a) {
	return wi(Z(e, t, n, r, i, a, !0));
}
function Ti(e, t, n, r, i) {
	return wi(Ai(e, t, n, r, i, !0));
}
function Ei(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Di(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Oi = ({ key: e }) => e ?? null, ki = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : O(e) || /* @__PURE__ */ H(e) || D(e) ? {
	i: G,
	r: e,
	k: t,
	f: !!n
} : e);
function Z(e, t = null, n = null, r = 0, i = null, a = e === q ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Oi(t),
		ref: t && ki(t),
		scopeId: Rn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: G
	};
	return s ? (Li(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= O(n) ? 8 : 16), Si > 0 && !o && J && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && J.push(c), c;
}
var Ai = ji;
function ji(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== br || (e = vi), Ei(e)) {
		let r = Ni(e, t, !0);
		return n && Li(r, n), Si > 0 && !a && J && (r.shapeFlag & 6 ? J[J.indexOf(e)] = r : J.push(r)), r.patchFlag = -2, r;
	}
	if (aa(e) && (e = e.__vccOpts), t) {
		t = Mi(t);
		let { class: e, style: n } = t;
		e && !O(e) && (t.class = Te(e)), A(n) && (/* @__PURE__ */ $t(n) && !T(n) && (n = C({}, n)), t.style = be(n));
	}
	let o = O(e) ? 1 : hi(e) ? 128 : Xn(e) ? 64 : A(e) ? 4 : D(e) ? 2 : 0;
	return Z(e, t, n, r, i, o, a, !0);
}
function Mi(e) {
	return e ? /* @__PURE__ */ $t(e) || Wr(e) ? C({}, e) : e : null;
}
function Ni(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ri(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Oi(l),
		ref: t && t.ref ? n && a ? T(a) ? a.concat(ki(t)) : [a, ki(t)] : ki(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== q ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ni(e.ssContent),
		ssFallback: e.ssFallback && Ni(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && dr(u, c.clone(u)), u;
}
function Pi(e = " ", t = 0) {
	return Ai(_i, null, e, t);
}
function Q(e = "", t = !1) {
	return t ? (Y(), Ti(vi, null, e)) : Ai(vi, null, e);
}
function Fi(e) {
	return e == null || typeof e == "boolean" ? Ai(vi) : T(e) ? Ai(q, null, e.slice()) : Ei(e) ? Ii(e) : Ai(_i, null, String(e));
}
function Ii(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ni(e);
}
function Li(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (T(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Li(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Wr(t) ? t._ctx = G : r === 3 && G && (G.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (D(t)) {
		if (r & 65) {
			Li(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: G
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Pi(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Ri(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = Te([t.class, r.class]));
		else if (e === "style") t.style = be([t.style, r.style]);
		else if (x(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(T(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !S(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function zi(e, t, n, r = null) {
	vn(e, t, 7, [n, r]);
}
var Bi = Er(), Vi = 0;
function Hi() {
	return Vi;
}
function Ui(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || Bi, a = {
		uid: Vi++,
		vnode: e,
		type: r,
		parent: t,
		appContext: i,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Le(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(i.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Yr(r, i),
		emitsOptions: Mr(r, i),
		emit: null,
		emitted: null,
		propsDefaults: _,
		inheritAttrs: r.inheritAttrs,
		ctx: _,
		data: _,
		props: _,
		attrs: _,
		slots: _,
		refs: _,
		setupState: _,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = jr.bind(null, a), e.ce && e.ce(a), a;
}
var Wi = null, Gi = () => Wi || G, Ki, qi;
{
	let e = ye(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ki = t("__VUE_INSTANCE_SETTERS__", (e) => Wi = e), qi = t("__VUE_SSR_SETTERS__", (e) => Zi = e);
}
var Ji = (e) => {
	let t = Wi;
	return Ki(e), e.scope.on(), () => {
		e.scope.off(), Ki(t);
	};
}, Yi = () => {
	Wi && Wi.scope.off(), Ki(null);
};
function Xi(e) {
	return e.vnode.shapeFlag & 4;
}
var Zi = !1;
function Qi(e, t = !1, n = !1) {
	t && qi(t);
	let { props: r, children: i } = e.vnode, a = Xi(e);
	Gr(e, r, a, t), ri(e, i, n || t);
	let o = a ? $i(e, t) : void 0;
	return t && qi(!1), o;
}
function $i(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Tr);
	let { setup: r } = n;
	if (r) {
		tt();
		let n = e.setupContext = r.length > 1 ? ra(e) : null, i = Ji(e), a = _n(r, e, 0, [e.props, n]), o = ie(a);
		if (nt(), i(), (o || e.sp) && !vr(e) && pr(e), o) {
			if (a.then(Yi, Yi), t) return a.then((n) => {
				qi(!0);
				try {
					ea(e, n, t);
				} finally {
					qi(!1);
				}
			}).catch((t) => {
				yn(t, e, 0);
			});
			e.asyncDep = a;
		} else ea(e, a, t);
	} else ta(e, t);
}
function ea(e, t, n) {
	D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : A(t) && (e.setupState = cn(t)), ta(e, n);
}
function ta(e, t, n) {
	let r = e.type;
	e.render ||= r.render || y;
}
var na = { get(e, t) {
	return R(e, "get", ""), e[t];
} };
function ra(e) {
	return {
		attrs: new Proxy(e.attrs, na),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ia(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(cn(en(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Cr) return Cr[n](e);
		},
		has(e, t) {
			return t in e || t in Cr;
		}
	}) : e.proxy;
}
function aa(e) {
	return D(e) && "__vccOpts" in e;
}
var $ = (e, t) => /* @__PURE__ */ un(e, t, Zi), oa = "3.5.44", sa = void 0, ca = typeof window < "u" && window.trustedTypes;
if (ca) try {
	sa = /* @__PURE__ */ ca.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var la = sa ? (e) => sa.createHTML(e) : (e) => e, ua = "http://www.w3.org/2000/svg", da = "http://www.w3.org/1998/Math/MathML", fa = typeof document < "u" ? document : null, pa = fa && /* @__PURE__ */ fa.createElement("template"), ma = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? fa.createElementNS(ua, e) : t === "mathml" ? fa.createElementNS(da, e) : n ? fa.createElement(e, { is: n }) : fa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => fa.createTextNode(e),
	createComment: (e) => fa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => fa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			pa.innerHTML = la(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = pa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ha = /* @__PURE__ */ Symbol("_vtc");
function ga(e, t, n) {
	let r = e[ha];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var _a = /* @__PURE__ */ Symbol("_vod"), va = /* @__PURE__ */ Symbol("_vsh"), ya = /* @__PURE__ */ Symbol(""), ba = /(?:^|;)\s*display\s*:/;
function xa(e, t, n) {
	let r = e.style, i = O(n), a = !1;
	if (n && !i) {
		if (t) {
			if (O(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Ca(r, t, "");
			}
			else for (let e in t) n[e] ?? Ca(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ca(r, i, "") : Da(e, i, !O(t) && t ? t[i] : void 0, o) || Ca(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[ya];
			e && (n += ";" + e), r.cssText = n, a = ba.test(n);
		}
	} else t && e.removeAttribute("style");
	_a in e && (i && t === n || (e[_a] = a ? r.display : ""), e[va] && (r.display = "none"));
}
var Sa = /\s*!important$/;
function Ca(e, t, n) {
	if (T(n)) n.forEach((n) => Ca(e, t, n));
	else if (n ??= "", t.startsWith("--")) Sa.test(n) ? e.setProperty(t, n.replace(Sa, ""), "important") : e.setProperty(t, n);
	else {
		let r = Ea(e, t);
		Sa.test(n) ? e.setProperty(N(r), n.replace(Sa, ""), "important") : e[r] = n;
	}
}
var wa = [
	"Webkit",
	"Moz",
	"ms"
], Ta = {};
function Ea(e, t) {
	let n = Ta[t];
	if (n) return n;
	let r = M(t);
	if (r !== "filter" && r in e) return Ta[t] = r;
	r = pe(r);
	for (let n = 0; n < wa.length; n++) {
		let i = wa[n] + r;
		if (i in e) return Ta[t] = i;
	}
	return t;
}
function Da(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && O(r) && n === r;
}
var Oa = "http://www.w3.org/1999/xlink";
function ka(e, t, n, r, i, a = Ee(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Oa, t.slice(6, t.length)) : e.setAttributeNS(Oa, t, n) : n == null || a && !De(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : k(n) ? String(n) : n);
}
function Aa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? la(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = De(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function ja(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ma(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Na = /* @__PURE__ */ Symbol("_vei");
function Pa(e, t, n, r, i = null) {
	let a = e[Na] || (e[Na] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = La(t);
		r ? ja(e, n, a[t] = Va(r, i), s) : o && (Ma(e, n, o, s), a[t] = void 0);
	}
}
var Fa = /(Once|Passive|Capture)$/, Ia = /^on:?(?:Once|Passive|Capture)$/;
function La(e) {
	let t, n;
	for (; (n = e.match(Fa)) && !Ia.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : N(e.slice(2)), t];
}
var Ra = 0, za = /* @__PURE__ */ Promise.resolve(), Ba = () => Ra ||= (za.then(() => Ra = 0), Date.now());
function Va(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (T(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && vn(e, t, 5, a);
			}
		} else vn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Ba(), n;
}
var Ha = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ua = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? ga(e, r, o) : t === "style" ? xa(e, n, r) : x(t) ? S(t) || Pa(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Wa(e, t, r, o)) ? (Aa(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || ka(e, t, r, o, a, t !== "value")) : e._isVueCE && (Ga(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !O(r))) ? Aa(e, M(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ka(e, t, r, o));
};
function Wa(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ha(t) && D(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Ha(t) && O(n) ? !1 : t in e;
}
function Ga(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = M(t);
	return Array.isArray(n) ? n.some((e) => M(e) === r) : Object.keys(n).some((e) => M(e) === r);
}
var Ka = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return T(t) ? (e) => he(t, e) : t;
};
function qa(e) {
	e.target.composing = !0;
}
function Ja(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Ya = /* @__PURE__ */ Symbol("_assign"), Xa = /* @__PURE__ */ Symbol("_initialValue");
function Za(e, t, n) {
	return t && (e = e.trim()), n && (e = _e(e)), e;
}
var Qa = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Xa] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Xa] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Ya] = Ka(i);
		let a = r || i.props && i.props.type === "number";
		ja(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Ya](Za(e.value, n, a));
		}), (n || a) && ja(e, "change", () => {
			e.value = Za(e.value, n, a);
		}), t || (ja(e, "compositionstart", qa), ja(e, "compositionend", Ja), ja(e, "change", Ja));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Xa];
		delete e[Xa], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Ya](Za(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Ya] = Ka(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? _e(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, $a = {
	deep: !0,
	created(e, t, n) {
		e[Ya] = Ka(n), ja(e, "change", () => {
			let t = e._modelValue, n = io(e), r = e.checked, i = e[Ya];
			if (T(t)) {
				let e = Ne(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (E(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(ao(e, r));
		});
	},
	mounted: eo,
	beforeUpdate(e, t, n) {
		e[Ya] = Ka(n), eo(e, t, n);
	}
};
function eo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (T(t)) i = Ne(t, r.props.value) > -1;
	else if (E(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Me(t, ao(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var to = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, ja(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? _e(io(e)) : io(e)), r = e.multiple, i = r ? E(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? T(i) ? t.slice() : t : i];
			try {
				e[Ya](i);
			} finally {
				Dn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Ya] = Ka(r);
	},
	mounted(e, { value: t }) {
		ro(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Ya] = Ka(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, n && n[0] === e.multiple && no(t, n[1], n[0]) || ro(e, t);
	}
};
function no(e, t, n) {
	if (!n || T(e)) return Me(e, t);
	if (E(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function ro(e, t) {
	let n = e.multiple, r = T(t);
	if (!n || r || E(t)) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = io(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : Ne(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (Me(io(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function io(e) {
	return "_value" in e ? e._value : e.value;
}
function ao(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var oo = /* @__PURE__ */ C({ patchProp: Ua }, ma), so;
function co() {
	return so ||= ai(oo);
}
var lo = ((...e) => {
	let t = co().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = fo(e);
		if (!r) return;
		let i = t._component;
		D(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, uo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function uo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function fo(e) {
	return O(e) ? document.querySelector(e) : e;
}
// src/catalogue/ResourceCard.vue
var po = ["aria-busy"], mo = [
	"title",
	"aria-label",
	"disabled"
], ho = ["src", "alt"], go = [
	"href",
	"title",
	"aria-label"
], _o = ["src", "alt"], vo = { class: "card-head" }, yo = { class: "card-actions" }, bo = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled"
], xo = [
	"title",
	"aria-label",
	"disabled"
], So = [
	"title",
	"aria-label",
	"disabled"
], Co = [
	"title",
	"aria-label",
	"disabled"
], wo = { class: "meta" }, To = {
	key: 0,
	class: "tag submission"
}, Eo = { class: "tag" }, Do = { class: "tag lang" }, Oo = {
	key: 1,
	class: "tag format"
}, ko = {
	key: 2,
	class: "tag flash"
}, Ao = ["aria-label"], jo = { class: "rating-label" }, Mo = {
	key: 0,
	class: "rating-summary"
}, No = { class: "stars" }, Po = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled",
	"onClick"
], Fo = { class: "note" }, Io = {
	key: 2,
	class: "health"
}, Lo = {
	key: 3,
	class: "note submission-by"
}, Ro = ["role"], zo = {
	__name: "ResourceCard",
	props: {
		game: Object,
		context: Object,
		onAction: Function
	},
	setup(r) {
		let a = r, l = /* @__PURE__ */ nn(!1), u = /* @__PURE__ */ nn(""), d = /* @__PURE__ */ nn(!1), g = /* @__PURE__ */ nn(!1), _ = $(() => o(a.game)), v = $(() => {
			a.context;
			let e = t();
			return (e === "va" || e === "ca" ? a.game.title_ca : e === "en" ? a.game.title_en : "") || a.game.title || n("no_title");
		}), y = $(() => {
			a.context;
			let e = t();
			return (e === "va" || e === "ca" ? a.game.notes_ca : e === "en" ? a.game.notes_en : "") || a.game.notes || n("no_notes");
		}), b = $(() => a.context.favorites.has(_.value)), x = $(() => a.context.userRatings.get(_.value) || 0), S = $(() => a.context.ratingSummary.get(_.value)), C = $(() => a.context.brokenSummary.get(_.value)), ee = $(() => a.context.userReports.has(_.value)), te = $(() => a.context.backendMode === "remote"), w = $(() => a.context.reportByUrl.get(c(a.game.url))), T = $(() => w.value ? w.value.ok ? "" : n(w.value.severity === "warning" ? "link_warn" : "link_error", w.value.error || `HTTP ${w.value.httpStatus || "error"}`) : n("not_checked")), ne = $(() => re(a.game.image) || f), E = $(() => re(a.game.url));
		function re(e) {
			if (!e) return "";
			try {
				let t = new URL(e, window.location.href);
				return ["http:", "https:"].includes(t.protocol) && !t.username && !t.password ? t.href : "";
			} catch {
				return "";
			}
		}
		let D = $(() => a.game.flash || [
			"jclic",
			"eduhoot",
			"llibres"
		].includes(a.game.format));
		function O() {
			E.value && (a.game.flash ? p(E.value, a.game.title) : a.game.format === "jclic" ? m(E.value, a.game.title) : h(E.value, a.game.title, a.game.format === "llibres"));
		}
		async function k(e, t) {
			if (l.value || ["hide", "unhide"].includes(e) && !a.context.isAdmin) return;
			let r = e === "report" ? a.context.isAdmin ? "report_broken_confirm_admin" : "report_broken_confirm" : e === "hide" ? "admin_hide_confirm" : e === "unhide" ? "admin_unhide_confirm" : null;
			if (!r || window.confirm(n(r, v.value))) {
				l.value = !0, u.value = "", d.value = !1;
				try {
					await a.onAction(e, _.value, t, a.context.epoch), e === "report" && (u.value = "report_broken_feedback");
				} catch {
					d.value = !0, u.value = "catalogue_action_error";
				} finally {
					l.value = !1;
				}
			}
		}
		return (t, a) => (Y(), X("article", {
			class: Te(["card", {
				submission: r.game._isSubmission,
				broken: w.value && !w.value.ok
			}]),
			"aria-busy": l.value
		}, [
			D.value ? (Y(), X("button", {
				key: 0,
				type: "button",
				class: "card-image-link",
				title: U(n)(r.game.flash ? "play_ruffle" : "open_game"),
				"aria-label": U(n)(r.game.flash ? "play_ruffle" : "open_game"),
				disabled: !E.value,
				onClick: O
			}, [Z("img", {
				class: "card-image",
				src: g.value ? U(f) : ne.value,
				alt: r.game.title || U(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: a[0] ||= (e) => g.value = !0
			}, null, 40, ho)], 8, mo)) : (Y(), X("a", {
				key: 1,
				class: "card-image-link",
				href: E.value || void 0,
				target: "_blank",
				rel: "noreferrer noopener",
				title: U(n)("open_game"),
				"aria-label": U(n)("open_game")
			}, [Z("img", {
				class: "card-image",
				src: g.value ? U(f) : ne.value,
				alt: r.game.title || U(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: a[1] ||= (e) => g.value = !0
			}, null, 40, _o)], 8, go)),
			Z("div", vo, [Z("h3", null, F(v.value), 1), Z("div", yo, [
				Z("button", {
					type: "button",
					class: Te(["fav-btn", { active: b.value }]),
					title: U(n)(b.value ? "favorite_remove" : "favorite_add"),
					"aria-label": U(n)(b.value ? "favorite_remove" : "favorite_add"),
					"aria-pressed": b.value,
					disabled: l.value,
					onClick: a[2] ||= (e) => k("favorite")
				}, "❤", 10, bo),
				te.value ? (Y(), X("button", {
					key: 0,
					type: "button",
					class: Te(["report-btn", { active: ee.value }]),
					title: U(n)(ee.value ? "report_broken_active" : "report_broken"),
					"aria-label": U(n)(ee.value ? "report_broken_active" : "report_broken"),
					disabled: l.value || ee.value,
					onClick: a[3] ||= (e) => k("report")
				}, "⚠", 10, xo)) : Q("", !0),
				te.value && r.context.isAdmin ? (Y(), X("button", {
					key: 1,
					type: "button",
					class: "admin-hide-btn",
					title: U(n)("admin_hide_resource"),
					"aria-label": U(n)("admin_hide_resource"),
					disabled: l.value,
					onClick: a[4] ||= (e) => k("hide")
				}, "×", 8, So)) : Q("", !0),
				te.value && r.context.isAdmin && C.value?.adminReported ? (Y(), X("button", {
					key: 2,
					type: "button",
					class: "admin-unhide-btn",
					title: U(n)("admin_unhide_resource"),
					"aria-label": U(n)("admin_unhide_resource"),
					disabled: l.value,
					onClick: a[5] ||= (e) => k("unhide")
				}, "↩", 8, Co)) : Q("", !0)
			])]),
			Z("div", wo, [
				r.game._isSubmission ? (Y(), X("span", To, F(U(n)("submission_badge")), 1)) : Q("", !0),
				Z("span", Eo, F(U(e)(r.game.area || "General")), 1),
				(Y(!0), X(q, null, xr(r.game.levels || (r.game.level ? [r.game.level] : [U(n)("no_level")]), (e) => (Y(), X("span", {
					key: e,
					class: "tag"
				}, F(U(i)(e)), 1))), 128)),
				Z("span", Do, F(U(s)(r.game) || U(n)("catalogue_no_language")), 1),
				[
					"jclic",
					"h5p",
					"eduhoot",
					"scorm",
					"llibres"
				].includes(r.game.format) ? (Y(), X("span", Oo, F(r.game.format.toUpperCase()), 1)) : Q("", !0),
				r.game.flash ? (Y(), X("span", ko, "Flash")) : Q("", !0)
			]),
			Z("div", {
				class: "rating",
				role: "group",
				"aria-label": U(n)("rating_group_label")
			}, [
				Z("span", jo, F(U(n)("rating_label")), 1),
				te.value ? (Y(), X("span", Mo, F(S.value?.count ? U(n)("rating_avg", S.value.avg.toFixed(1), S.value.count) : U(n)("rating_no_votes")), 1)) : Q("", !0),
				Z("div", No, [(Y(), X(q, null, xr(5, (e) => Z("button", {
					key: e,
					class: Te(["star-btn", { active: e <= x.value }]),
					type: "button",
					title: U(n)("rating_set", e),
					"aria-label": U(n)("rating_set", e),
					"aria-pressed": e <= x.value,
					disabled: l.value,
					onClick: (t) => k("rating", e)
				}, "★", 10, Po)), 64))])
			], 8, Ao),
			Z("p", Fo, F(y.value), 1),
			T.value ? (Y(), X("p", Io, F(T.value), 1)) : Q("", !0),
			r.game._isSubmission && r.game._submittedBy ? (Y(), X("p", Lo, F(U(n)("submission_by", r.game._submittedBy)), 1)) : Q("", !0),
			u.value ? (Y(), X("p", {
				key: 4,
				class: "report-feedback",
				role: d.value ? "alert" : "status"
			}, F(U(n)(u.value)), 9, Ro)) : Q("", !0)
		], 10, po));
	}
}, Bo = ["placeholder"], Vo = ["id", "onUpdate:modelValue"], Ho = { value: "" }, Uo = ["value"], Wo = { value: 0 }, Go = ["value"], Ko = { class: "check-wrap" }, qo = { class: "check-wrap" }, Jo = {
	key: 0,
	id: "brokenOnlyLabel",
	class: "check-wrap"
}, Yo = {
	key: 1,
	id: "reportedOnlyLabel",
	class: "check-wrap"
}, Xo = { class: "results-head" }, Zo = { id: "resultCount" }, Qo = {
	key: 0,
	role: "alert"
}, $o = {
	key: 1,
	role: "status"
}, es = ["aria-busy"], ts = { class: "load-more-wrap" }, ns = {
	key: 2,
	id: "emptyState",
	class: "empty"
}, rs = {
	__name: "Catalogue",
	props: { onAction: Function },
	setup(s, { expose: c }) {
		let f = /* @__PURE__ */ rn({
			games: [],
			favorites: /* @__PURE__ */ new Set(),
			userRatings: /* @__PURE__ */ new Map(),
			ratingSummary: /* @__PURE__ */ new Map(),
			userReports: /* @__PURE__ */ new Set(),
			brokenSummary: /* @__PURE__ */ new Map(),
			reportByUrl: /* @__PURE__ */ new Map(),
			backendMode: "local",
			isAdmin: !1,
			epoch: 0,
			loading: !0
		}), p = new URLSearchParams(location.search), m = /* @__PURE__ */ qt({
			term: p.get("q") || "",
			selectedLevel: p.get("level") || "",
			selectedLanguage: p.get("lang") || "",
			selectedArea: p.get("area") || "",
			selectedFormat: p.get("format") || "",
			minRating: Number(p.get("rating")) || 0,
			onlyFavorites: p.get("fav") === "1",
			onlySubmissions: p.get("submissions") === "1",
			onlyBroken: !1,
			onlyReported: !1
		}), h = /* @__PURE__ */ nn(48), g = $(() => a(f.value.games, m, f.value)), _ = $(() => g.value.slice(0, h.value)), v = $(() => ({
			level: u(f.value.games),
			language: l(f.value.games),
			area: d(f.value.games, "area"),
			format: d(f.value.games, "format")
		}));
		function y(e) {
			f.value = {
				...e,
				language: t()
			}, e.isAdmin || (m.onlyBroken = !1, m.onlyReported = !1);
		}
		function b() {
			let e = new URLSearchParams();
			for (let [t, n] of Object.entries({
				q: m.term.trim(),
				level: m.selectedLevel,
				lang: m.selectedLanguage,
				area: m.selectedArea,
				format: m.selectedFormat,
				rating: m.minRating || "",
				fav: m.onlyFavorites ? "1" : "",
				submissions: m.onlySubmissions ? "1" : ""
			})) n && e.set(t, n);
			let t = location.pathname + (e.size ? "?" + e : "") + location.hash;
			history.replaceState(null, "", t);
		}
		return Kn(m, () => {
			h.value = 48, b();
		}), c({ setContext: y }), (t, a) => (Y(), X(q, null, [
			(Y(), Ti(ar, { to: "#catalogueFilters" }, [
				Z("label", null, [Z("span", null, F(U(n)("search_label")), 1), Vn(Z("input", {
					id: "searchInput",
					"onUpdate:modelValue": a[0] ||= (e) => m.term = e,
					type: "search",
					placeholder: U(n)("search_placeholder")
				}, null, 8, Bo), [[Qa, m.term]])]),
				(Y(!0), X(q, null, xr([
					{
						id: "levelFilter",
						field: "selectedLevel",
						options: "level",
						label: "level",
						format: U(i)
					},
					{
						id: "languageFilter",
						field: "selectedLanguage",
						options: "language",
						label: "language",
						format: U(r)
					},
					{
						id: "areaFilter",
						field: "selectedArea",
						options: "area",
						label: "area",
						format: U(e)
					},
					{
						id: "formatFilter",
						field: "selectedFormat",
						options: "format",
						label: "format",
						format: (e) => e
					}
				], (e) => (Y(), X("label", { key: e.id }, [Z("span", null, F(U(n)(e.label + "_label")), 1), Vn(Z("select", {
					id: e.id,
					"onUpdate:modelValue": (t) => m[e.field] = t
				}, [Z("option", Ho, F(U(n)(e.label + "_all")), 1), (Y(!0), X(q, null, xr(v.value[e.options], (t) => (Y(), X("option", {
					key: t,
					value: t
				}, F(e.format(t)), 9, Uo))), 128))], 8, Vo), [[to, m[e.field]]])]))), 128)),
				Z("label", null, [Z("span", null, F(U(n)("rating_min_label")), 1), Vn(Z("select", {
					id: "ratingFilter",
					"onUpdate:modelValue": a[1] ||= (e) => m.minRating = e
				}, [Z("option", Wo, F(U(n)("rating_all_filter")), 1), (Y(), X(q, null, xr(5, (e) => Z("option", {
					key: e,
					value: e
				}, F(e) + "★" + F(e < 5 ? "+" : ""), 9, Go)), 64))], 512), [[
					to,
					m.minRating,
					void 0,
					{ number: !0 }
				]])]),
				Z("label", Ko, [Vn(Z("input", {
					id: "favoritesOnly",
					"onUpdate:modelValue": a[2] ||= (e) => m.onlyFavorites = e,
					type: "checkbox"
				}, null, 512), [[$a, m.onlyFavorites]]), Z("span", null, F(U(n)("favorites_only")), 1)]),
				Z("label", qo, [Vn(Z("input", {
					id: "submissionsOnly",
					"onUpdate:modelValue": a[3] ||= (e) => m.onlySubmissions = e,
					type: "checkbox"
				}, null, 512), [[$a, m.onlySubmissions]]), Z("span", null, F(U(n)("submissions_only")), 1)]),
				f.value.isAdmin ? (Y(), X("label", Jo, [Vn(Z("input", {
					id: "brokenOnly",
					"onUpdate:modelValue": a[4] ||= (e) => m.onlyBroken = e,
					type: "checkbox"
				}, null, 512), [[$a, m.onlyBroken]]), Z("span", null, F(U(n)("broken_only")), 1)])) : Q("", !0),
				f.value.isAdmin ? (Y(), X("label", Yo, [Vn(Z("input", {
					id: "reportedOnly",
					"onUpdate:modelValue": a[5] ||= (e) => m.onlyReported = e,
					type: "checkbox"
				}, null, 512), [[$a, m.onlyReported]]), Z("span", null, F(U(n)("reported_only")), 1)])) : Q("", !0)
			])),
			Z("div", Xo, [Z("h2", null, F(U(n)("section_title")), 1), Z("p", Zo, F(U(n)("result_count", g.value.length, f.value.games.length)), 1)]),
			f.value.error ? (Y(), X("p", Qo, F(U(n)("catalogue_load_error")), 1)) : Q("", !0),
			f.value.loading ? (Y(), X("p", $o, F(U(n)("catalogue_loading")), 1)) : Q("", !0),
			Z("div", {
				id: "grid",
				class: "grid",
				"aria-live": "polite",
				"aria-busy": f.value.loading
			}, [(Y(!0), X(q, null, xr(_.value, (e, t) => (Y(), Ti(zo, {
				key: f.value.epoch + ":" + U(o)(e) + ":" + t,
				game: e,
				context: f.value,
				"on-action": s.onAction
			}, null, 8, [
				"game",
				"context",
				"on-action"
			]))), 128))], 8, es),
			Z("div", ts, [g.value.length > _.value.length ? (Y(), X("button", {
				key: 0,
				id: "loadMoreBtn",
				class: "btn-load-more",
				type: "button",
				onClick: a[6] ||= (e) => h.value += 48
			}, F(U(n)("load_more", g.value.length - _.value.length)), 1)) : Q("", !0)]),
			!g.value.length && !f.value.loading ? (Y(), X("p", ns, F(U(n)("empty")), 1)) : Q("", !0)
		], 64));
	}
};
// src/catalogue/main.js
function is(e, t) {
	return lo(rs, t).mount(e);
}
export { is as mountCatalogue };
