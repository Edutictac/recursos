import { areaLabel as e, getLang as t, i18n as n, languageLabel as r, levelLabel as i } from "/scripts/i18n.js";
import { computeFilteredGames as a, gameKey as o, gameLanguageText as s, normalizeUrl as c, uniqueLanguageValues as l, uniqueLevelValues as u, uniqueValues as d } from "/scripts/filters.js";
import { DEFAULT_GAME_IMAGE as f, state as p } from "/scripts/state.js";
import { openFlashDialog as m } from "/scripts/flash.js";
import { openJClicDialog as h } from "/scripts/jclic.js";
import { openIframeDialog as g } from "/scripts/external.js";
import { authMe as _, studentLogin as v, studentLogout as y } from "/scripts/api.js";
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function b(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var x = {}, S = [], C = () => {}, ee = () => !1, te = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), w = (e) => e.startsWith("onUpdate:"), T = Object.assign, ne = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, E = Object.prototype.hasOwnProperty, D = (e, t) => E.call(e, t), O = Array.isArray, re = (e) => P(e) === "[object Map]", k = (e) => P(e) === "[object Set]", ie = (e) => P(e) === "[object Date]", A = (e) => typeof e == "function", j = (e) => typeof e == "string", M = (e) => typeof e == "symbol", N = (e) => typeof e == "object" && !!e, ae = (e) => (N(e) || A(e)) && A(e.then) && A(e.catch), oe = Object.prototype.toString, P = (e) => oe.call(e), se = (e) => P(e).slice(8, -1), ce = (e) => P(e) === "[object Object]", le = (e) => j(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ue = /* @__PURE__ */ b(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), de = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, fe = /-\w/g, F = de((e) => e.replace(fe, (e) => e.slice(1).toUpperCase())), pe = /\B([A-Z])/g, me = de((e) => e.replace(pe, "-$1").toLowerCase()), he = de((e) => e.charAt(0).toUpperCase() + e.slice(1)), ge = de((e) => e ? `on${he(e)}` : ""), _e = (e, t) => !Object.is(e, t), ve = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ye = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, be = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, xe, Se = () => xe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function Ce(e) {
	if (O(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = j(r) ? De(r) : Ce(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (j(e) || N(e)) return e;
}
var we = /;(?![^(]*\))/g, Te = /:([^]+)/, Ee = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function De(e) {
	let t = {};
	return e.replace(Ee, (e) => e.startsWith("/*") ? "" : e).split(we).forEach((e) => {
		if (e) {
			let n = e.split(Te);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function Oe(e) {
	let t = "";
	if (j(e)) t = e;
	else if (O(e)) for (let n = 0; n < e.length; n++) {
		let r = Oe(e[n]);
		r && (t += r + " ");
	}
	else if (N(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ke = /* @__PURE__ */ b("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function Ae(e) {
	return !!e || e === "";
}
function je(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Fe(e[i], t[i], n);
	return r;
}
function Me(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Fe(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Ne(e, t, n) {
	let r = re(e), i = re(t);
	if (r || i || (r = k(e), i = k(t), r || i)) return r && i ? Me(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Fe(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Pe(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Fe(e, t, n) {
	if (e === t) return !0;
	let r = ie(e), i = ie(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = M(e), i = M(t), r || i ? e === t : (r = O(e), i = O(t), r || i ? r && i ? Pe(e, t, n, je) : !1 : (r = N(e), i = N(t), r || i ? !r || !i ? !1 : Pe(e, t, n, Ne) : String(e) === String(t))));
}
function Ie(e, t) {
	return e.findIndex((e) => Fe(e, t));
}
var Le = (e) => !!(e && e.__v_isRef === !0), I = (e) => j(e) ? e : e == null ? "" : O(e) || N(e) && (e.toString === oe || !A(e.toString)) ? Le(e) ? I(e.value) : JSON.stringify(e, Re, 2) : String(e), Re = (e, t) => Le(t) ? Re(e, t.value) : re(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[ze(t, r) + " =>"] = n, e), {}) } : k(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => ze(e)) } : M(t) ? ze(t) : N(t) && !O(t) && !ce(t) ? String(t) : t, ze = (e, t = "") => M(e) ? `Symbol(${e.description ?? t})` : e, L, Be = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && L && (L.active ? (this.parent = L, this.index = (L.scopes || (L.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = L;
			try {
				return L = this, e();
			} finally {
				L = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = L, L = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (L === this) L = this.prevScope;
			else {
				let e = L;
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
function Ve() {
	return L;
}
var R, He = /* @__PURE__ */ new WeakSet(), Ue = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, L && (L.active ? L.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, He.has(this) && (He.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, ot(this), Xe(this);
		let e = R, t = nt;
		R = this, nt = !0;
		try {
			return this.fn();
		} finally {
			Ze(this), R = e, nt = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) et(e);
			this.deps = this.depsTail = void 0, ot(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? He.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Qe(this) && this.run();
	}
	get dirty() {
		return Qe(this);
	}
}, We = 0, Ge, Ke;
function qe(e, t = !1) {
	e.flags |= 8, t ? (e.next = Ke, Ke = e) : (e.next = Ge, Ge = e);
}
function Je() {
	We++;
}
function Ye() {
	if (--We > 0) return;
	if (Ke) {
		let e = Ke;
		for (Ke = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ge;) {
		let t = Ge;
		for (Ge = void 0; t;) {
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
function Xe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), et(r), tt(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Qe(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && ($e(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function $e(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === st) || (e.globalVersion = st, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Qe(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = R, r = nt;
	R = e, nt = !0;
	try {
		Xe(e);
		let n = e.fn(e._value);
		(t.version === 0 || _e(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		R = n, nt = r, Ze(e), e.flags &= -3;
	}
}
function et(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) et(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function tt(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var nt = !0, rt = [];
function it() {
	rt.push(nt), nt = !1;
}
function at() {
	let e = rt.pop();
	nt = e === void 0 || e;
}
function ot(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = R;
		R = void 0;
		try {
			t();
		} finally {
			R = e;
		}
	}
}
var st = 0, ct = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, lt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!R || !nt || R === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== R) t = this.activeLink = new ct(R, this), R.deps ? (t.prevDep = R.depsTail, R.depsTail.nextDep = t, R.depsTail = t) : R.deps = R.depsTail = t, ut(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = R.depsTail, t.nextDep = void 0, R.depsTail.nextDep = t, R.depsTail = t, R.deps === t && (R.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, st++, this.notify(e);
	}
	notify(e) {
		Je();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ye();
		}
	}
};
function ut(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) ut(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var dt = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ Symbol(""), pt = /* @__PURE__ */ Symbol(""), mt = /* @__PURE__ */ Symbol("");
function z(e, t, n) {
	if (nt && R) {
		let t = dt.get(e);
		t || dt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new lt()), r.map = t, r.key = n), r.track();
	}
}
function ht(e, t, n, r, i, a) {
	let o = dt.get(e);
	if (!o) {
		st++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Je(), t === "clear") o.forEach(s);
	else {
		let i = O(e), a = i && le(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === mt || !M(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(mt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ft)), re(e) && s(o.get(pt)));
				break;
			case "delete":
				i || (s(o.get(ft)), re(e) && s(o.get(pt)));
				break;
			case "set": re(e) && s(o.get(ft));
		}
	}
	Ye();
}
function gt(e) {
	let t = /* @__PURE__ */ V(e);
	return t === e || (z(t, "iterate", mt), /* @__PURE__ */ B(e)) ? t : /* @__PURE__ */ tn(e) ? /* @__PURE__ */ en(e) ? t.map((e) => on(an(e))) : t.map(on) : t.map(an);
}
function _t(e) {
	return z(e = /* @__PURE__ */ V(e), "iterate", mt), e;
}
function vt(e, t) {
	return /* @__PURE__ */ tn(e) ? on(/* @__PURE__ */ en(e) ? an(t) : t) : an(t);
}
var yt = {
	__proto__: null,
	[Symbol.iterator]() {
		return bt(this, Symbol.iterator, (e) => vt(this, e));
	},
	concat(...e) {
		return gt(this).concat(...e.map((e) => O(e) ? gt(e) : e));
	},
	entries() {
		return bt(this, "entries", (e) => (e[1] = vt(this, e[1]), e));
	},
	every(e, t) {
		return Ct(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return Ct(this, "filter", e, t, (e) => e.map((e) => vt(this, e)), arguments);
	},
	find(e, t) {
		return Ct(this, "find", e, t, (e) => vt(this, e), arguments);
	},
	findIndex(e, t) {
		return Ct(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return Ct(this, "findLast", e, t, (e) => vt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return Ct(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return Ct(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return Tt(this, "includes", e);
	},
	indexOf(...e) {
		return Tt(this, "indexOf", e);
	},
	join(e) {
		return gt(this).join(e);
	},
	lastIndexOf(...e) {
		return Tt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return Ct(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Et(this, "pop");
	},
	push(...e) {
		return Et(this, "push", e);
	},
	reduce(e, ...t) {
		return wt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return wt(this, "reduceRight", e, t);
	},
	shift() {
		return Et(this, "shift");
	},
	some(e, t) {
		return Ct(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Et(this, "splice", e);
	},
	toReversed() {
		return gt(this).toReversed();
	},
	toSorted(e) {
		return gt(this).toSorted(e);
	},
	toSpliced(...e) {
		return gt(this).toSpliced(...e);
	},
	unshift(...e) {
		return Et(this, "unshift", e);
	},
	values() {
		return bt(this, "values", (e) => vt(this, e));
	}
};
function bt(e, t, n) {
	let r = _t(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ B(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => xt(a.next(), n), i !== St[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => xt(a._next(), n);
	}
	return a;
}
function xt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var St = Array.prototype;
function Ct(e, t, n, r, i, a) {
	let o = _t(e), s = o !== e && !/* @__PURE__ */ B(e), c = o[t];
	if (c !== St[t]) {
		let t = c.apply(e, a);
		return s ? an(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, vt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function wt(e, t, n, r) {
	let i = _t(e), a = i !== e && !/* @__PURE__ */ B(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = vt(e, t)), n.call(this, t, vt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? vt(e, c) : c;
}
function Tt(e, t, n) {
	let r = /* @__PURE__ */ V(e);
	z(r, "iterate", mt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ nn(n[0]) ? (n[0] = /* @__PURE__ */ V(n[0]), r[t](...n)) : i;
}
function Et(e, t, n = []) {
	it(), Je();
	let r = (/* @__PURE__ */ V(e))[t].apply(e, n);
	return Ye(), at(), r;
}
var Dt = /* @__PURE__ */ b("__proto__,__v_isRef,__isVue"), Ot = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(M));
function kt(e) {
	M(e) || (e = String(e));
	let t = /* @__PURE__ */ V(this);
	return z(t, "has", e), t.hasOwnProperty(e);
}
var At = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Jt : qt : i ? Kt : Gt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = O(e);
		if (!r) {
			let e;
			if (a && (e = yt[t])) return e;
			if (t === "hasOwnProperty") return kt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ H(e) ? e : n);
		if ((M(t) ? Ot.has(t) : Dt(t)) || (r || z(e, "get", t), i)) return o;
		if (/* @__PURE__ */ H(o)) {
			let e = a && le(t) ? o : o.value;
			return r && N(e) ? /* @__PURE__ */ Qt(e) : e;
		}
		return N(o) ? r ? /* @__PURE__ */ Qt(o) : /* @__PURE__ */ Xt(o) : o;
	}
}, jt = class extends At {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = O(e) && le(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ tn(i);
			if (!/* @__PURE__ */ B(n) && !/* @__PURE__ */ tn(n) && (i = /* @__PURE__ */ V(i), n = /* @__PURE__ */ V(n)), !a && /* @__PURE__ */ H(i) && !/* @__PURE__ */ H(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : D(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ H(e) ? e : r);
		return e === /* @__PURE__ */ V(r) && s && (o ? _e(n, i) && ht(e, "set", t, n, i) : ht(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = D(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ht(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return M(t) && Ot.has(t) || z(e, "has", t), n;
	}
	ownKeys(e) {
		return z(e, "iterate", O(e) ? "length" : ft), Reflect.ownKeys(e);
	}
}, Mt = class extends At {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Nt = /* @__PURE__ */ new jt(), Pt = /* @__PURE__ */ new Mt(), Ft = /* @__PURE__ */ new jt(!0), It = (e) => e, Lt = (e) => Reflect.getPrototypeOf(e);
function Rt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ V(i), o = re(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? It : t ? on : an;
		return !t && z(a, "iterate", c ? pt : ft), T(Object.create(l), { next() {
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
function zt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Bt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ V(r), a = /* @__PURE__ */ V(n);
			e || (_e(n, a) && z(i, "get", n), z(i, "get", a));
			let { has: o } = Lt(i), s = t ? It : e ? on : an;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && z(/* @__PURE__ */ V(t), "iterate", ft), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ V(n), i = /* @__PURE__ */ V(t);
			return e || (_e(t, i) && z(r, "has", t), z(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ V(a), s = t ? It : e ? on : an;
			return !e && z(o, "iterate", ft), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return T(n, e ? {
		add: zt("add"),
		set: zt("set"),
		delete: zt("delete"),
		clear: zt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ V(this), r = Lt(n), i = /* @__PURE__ */ V(e), a = !t && !/* @__PURE__ */ B(e) && !/* @__PURE__ */ tn(e) ? i : e;
			return r.has.call(n, a) || _e(e, a) && r.has.call(n, e) || _e(i, a) && r.has.call(n, i) || (n.add(a), ht(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ B(n) || /* @__PURE__ */ tn(n) || (n = /* @__PURE__ */ V(n));
			let r = /* @__PURE__ */ V(this), { has: i, get: a } = Lt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ V(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? _e(n, s) && ht(r, "set", e, n, s) : ht(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ V(this), { has: n, get: r } = Lt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ V(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ht(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ V(this), t = e.size !== 0, n = e.clear();
			return t && ht(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Rt(r, e, t);
	}), n;
}
function Vt(e, t) {
	let n = Bt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(D(n, i) && i in r ? n : r, i, a);
}
var Ht = { get: /* @__PURE__ */ Vt(!1, !1) }, Ut = { get: /* @__PURE__ */ Vt(!1, !0) }, Wt = { get: /* @__PURE__ */ Vt(!0, !1) }, Gt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap();
function Yt(e) {
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
function Xt(e) {
	return /* @__PURE__ */ tn(e) ? e : $t(e, !1, Nt, Ht, Gt);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return $t(e, !1, Ft, Ut, Kt);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return $t(e, !0, Pt, Wt, qt);
}
function $t(e, t, n, r, i) {
	if (!N(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Yt(se(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return /* @__PURE__ */ tn(e) ? /* @__PURE__ */ en(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function V(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ V(t) : e;
}
function rn(e) {
	return !D(e, "__v_skip") && Object.isExtensible(e) && ye(e, "__v_skip", !0), e;
}
var an = (e) => N(e) ? /* @__PURE__ */ Xt(e) : e, on = (e) => N(e) ? /* @__PURE__ */ Qt(e) : e;
// @__NO_SIDE_EFFECTS__
function H(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function U(e) {
	return cn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
	return cn(e, !0);
}
function cn(e, t) {
	return /* @__PURE__ */ H(e) ? e : new ln(e, t);
}
var ln = class {
	constructor(e, t) {
		this.dep = new lt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ V(e), this._value = t ? e : an(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ B(e) || /* @__PURE__ */ tn(e);
		e = n ? e : /* @__PURE__ */ V(e), _e(e, t) && (this._rawValue = e, this._value = n ? e : an(e), this.dep.trigger());
	}
};
function W(e) {
	return /* @__PURE__ */ H(e) ? e.value : e;
}
var un = {
	get: (e, t, n) => t === "__v_raw" ? e : W(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ H(i) && !/* @__PURE__ */ H(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function dn(e) {
	return /* @__PURE__ */ en(e) ? e : new Proxy(e, un);
}
var fn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new lt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = st - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && R !== this) return qe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return $e(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function pn(e, t, n = !1) {
	let r, i;
	return A(e) ? r = e : (r = e.get, i = e.set), new fn(r, i, n);
}
var mn = {}, hn = /* @__PURE__ */ new WeakMap(), gn = void 0;
function _n(e, t = !1, n = gn) {
	if (n) {
		let t = hn.get(n);
		t || hn.set(n, t = []), t.push(e);
	}
}
function vn(e, t, n = x) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => i ? e : /* @__PURE__ */ B(e) || i === !1 || i === 0 ? yn(e, 1) : yn(e), u, d, f, p, m = !1, h = !1;
	if (/* @__PURE__ */ H(e) ? (d = () => e.value, m = /* @__PURE__ */ B(e)) : /* @__PURE__ */ en(e) ? (d = () => l(e), m = !0) : O(e) ? (h = !0, m = e.some((e) => /* @__PURE__ */ en(e) || /* @__PURE__ */ B(e)), d = () => e.map((e) => {
		if (/* @__PURE__ */ H(e)) return e.value;
		if (/* @__PURE__ */ en(e)) return l(e);
		if (A(e)) return c ? c(e, 2) : e();
	})) : d = A(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (f) {
			it();
			try {
				f();
			} finally {
				at();
			}
		}
		let t = gn;
		gn = u;
		try {
			return c ? c(e, 3, [p]) : e(p);
		} finally {
			gn = t;
		}
	} : C, t && i) {
		let e = d, t = i === !0 ? Infinity : i;
		d = () => yn(e(), t);
	}
	let g = Ve(), _ = () => {
		u.stop(), g && g.active && ne(g.effects, u);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			try {
				return e(...t);
			} finally {
				_();
			}
		};
	}
	let v = h ? Array(e.length).fill(mn) : mn, y = (e) => {
		if (u.flags & 1 && (u.dirty || e)) {
			if (t) {
				let n = u.run();
				if (e || i || m || (h ? n.some((e, t) => _e(e, v[t])) : _e(n, v))) {
					let e = gn;
					it();
					try {
						f && f(), gn = u;
						let e = [
							n,
							v === mn ? void 0 : h && v[0] === mn ? [] : v,
							p
						];
						v = n, c ? c(t, 3, e) : t(...e);
					} finally {
						gn = e, at();
					}
				}
			} else u.run();
		}
	};
	return s && s(y), u = new Ue(d), u.scheduler = o ? () => o(y, !1) : y, p = (e) => _n(e, !1, u), f = u.onStop = () => {
		let e = hn.get(u);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			hn.delete(u);
		}
	}, t ? r ? y(!0) : v = u.run() : o ? o(y.bind(null, !0), !0) : u.run(), _.pause = u.pause.bind(u), _.resume = u.resume.bind(u), _.stop = _, _;
}
function yn(e, t = Infinity, n) {
	if (t <= 0 || !N(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ H(e)) yn(e.value, t, n);
	else if (O(e)) for (let r = 0; r < e.length; r++) yn(e[r], t, n);
	else if (k(e) || re(e)) e.forEach((e) => {
		yn(e, t, n);
	});
	else if (ce(e)) {
		for (let r in e) yn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && yn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function bn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Sn(e, t, n);
	}
}
function xn(e, t, n, r) {
	if (A(e)) {
		let i = bn(e, t, n, r);
		return i && ae(i) && i.catch((e) => {
			Sn(e, t, n);
		}), i;
	}
	if (O(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(xn(e[a], t, n, r));
		return i;
	}
}
function Sn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || x;
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
			it(), bn(a, null, 10, [
				e,
				i,
				o
			]), at();
			return;
		}
	}
	Cn(e, n, i, r, o);
}
function Cn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var G = [], wn = -1, Tn = [], En = null, Dn = 0, On = /* @__PURE__ */ Promise.resolve(), kn = null;
function An(e) {
	let t = kn || On;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function jn(e) {
	let t = wn + 1, n = G.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = G[r], a = zn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Mn(e) {
	if (!(e.flags & 1)) {
		let t = zn(e), n = G[G.length - 1];
		!n || !(e.flags & 2) && t >= zn(n) ? G.push(e) : G.splice(jn(t), 0, e), e.flags |= 1, Nn();
	}
}
function Nn() {
	kn ||= On.then(Bn);
}
function Pn(e) {
	if (!O(e)) En && e.id === -1 ? En.splice(Dn + 1, 0, e) : e.flags & 1 || (Tn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Tn.push(e[t]);
	Nn();
}
function Fn(e, t, n, r = wn + 1) {
	for (; r < G.length; r++) {
		let n = G[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			G.splice(r, 1), r = e ? r - 1 : wn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function In(e, t, n = 0) {
	if (Tn.length) {
		let e = Tn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Tn.length; i++) {
				let a = Tn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Tn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => zn(e) - zn(t));
		if (Tn.length = r, En) {
			for (let e = 0; e < i.length; e++) En.push(i[e]);
			return;
		}
		for (En = i, Dn = 0; Dn < En.length; Dn++) {
			let e = En[Dn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		En = null, Dn = 0;
	}
}
var Ln = !1;
function Rn(e, t) {
	if (Ln) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Tn);
	e(), Ln = !0;
	try {
		Fn(void 0, t), In(void 0, n, t);
	} finally {
		Ln = !1;
	}
}
var zn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Bn(e) {
	try {
		for (wn = 0; wn < G.length; wn++) {
			let e = G[wn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), bn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; wn < G.length; wn++) {
			let e = G[wn];
			e && (e.flags &= -2);
		}
		wn = -1, G.length = 0, In(e), kn = null, (G.length || Tn.length) && Bn(e);
	}
}
var Vn = null, Hn = null;
function Un(e) {
	let t = Vn;
	return Vn = e, Hn = e && e.type.__scopeId || null, t;
}
function Wn(e, t = Vn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ji(-1);
		let i = Un(t), a = Oi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Oi.length; e > a; e--) ki();
			Un(i), r._d && ji(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Gn(e, t) {
	if (Vn === null) return e;
	let n = fa(Vn), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = x] = t[e];
		i && (A(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && yn(a), r.push({
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
function Kn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (it(), xn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), at());
	}
}
function qn(e, t, n = !1) {
	let r = $i();
	if (r || Lr) {
		let i = Lr ? Lr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && A(t) ? t.call(r && r.proxy) : t;
	}
}
var Jn = /* @__PURE__ */ Symbol.for("v-scx"), Yn = () => qn(Jn);
function Xn(e, t, n) {
	return Zn(e, t, n);
}
function Zn(e, t, n = x) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = T({}, n), c = t && r || !t && a !== "post", l;
	if (aa) {
		if (a === "sync") {
			let e = Yn();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = C, e.resume = C, e.pause = C, e;
		}
	}
	let u = Qi;
	s.call = (e, t, n) => xn(e, u, t, n);
	let d = !1;
	a === "post" ? s.scheduler = (e) => {
		e.i = u, K(e, u && u.suspense);
	} : a !== "sync" && (d = !0, s.scheduler = (e, t) => {
		t ? e() : Mn(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let f = vn(e, t, s);
	return aa && (l ? l.push(f) : c && f()), f;
}
var Qn = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ Symbol("_vte"), er = (e) => e.__isTeleport, tr = (e) => e && (e.disabled || e.disabled === ""), nr = (e) => e && (e.defer || e.defer === ""), rr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ir = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ar = (e, t) => {
	let n = e && e.to;
	return j(n) ? t ? t(n) : null : n;
}, or = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = tr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = tr(e.props), r = e.target = ar(e.props, m), a = dr(r, e, h, p);
			r && (o !== "svg" && rr(r) ? o = "svg" : o !== "mathml" && ir(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), ur(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (Qn.get(e) === t) {
					if (Qn.delete(e), tr(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), ur(e, !0);
					}
					x(e);
				}
			};
			Qn.set(e, t), K(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), nr(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), ur(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Qn.get(e);
			if (u) {
				u.flags |= 8, Qn.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = tr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || rr(p) ? o = "svg" : (o === "mathml" || ir(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), vi(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : sr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = ar(t.props, m);
				e && (t.target = e, sr(t, e, null, l, 0));
			} else g && sr(t, p, h, l, 1);
			ur(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = tr(f), m = a || !p, h = Qn.get(e);
		if (h && (h.flags |= 8, Qn.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: sr,
	hydrate: cr
};
function sr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Qn.has(e) && (!d || tr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function cr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
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
	let m = t.target = ar(t.props, c), h = tr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || dr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || dr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), ur(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var lr = or;
function ur(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function dr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[$n] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var fr = /* @__PURE__ */ Symbol("_leaveCb");
function pr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ei) {
			t = n;
			break;
		}
	}
	return t;
}
function mr(e) {
	if (!Cr(e)) return er(e.type) && e.children ? pr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && A(n.default)) return n.default();
	}
}
function hr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		hr(er(n.type) && mr(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === q && O(e.children)) {
		let n = Ur(e.children, !1);
		n && hr(n, t);
	}
}
function gr(e) {
	if (e.component) return gr(e.component.subTree);
	if (e.type === q) {
		let t = O(e.children) && Ur(e.children, !1);
		return t ? gr(t) : void 0;
	}
	if (e.type !== Ei) return e;
}
function _r(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function vr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var yr = /* @__PURE__ */ new WeakMap();
function br(e, t, n, r, i = !1) {
	if (O(e)) {
		e.forEach((e, a) => br(e, t && (O(t) ? t[a] : t), n, r, i));
		return;
	}
	if (Sr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && br(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? fa(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === x ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ V(d), p = d === x ? ee : (e) => !vr(u, e) && D(f, e), m = (e, t) => !(t && vr(u, t));
	if (l != null && l !== c) {
		if (xr(t), j(l)) u[l] = null, p(l) && (d[l] = null);
		else if (/* @__PURE__ */ H(l)) {
			let e = t;
			m(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (A(c)) bn(c, s, 12, [o, u]);
	else {
		let t = j(c), r = /* @__PURE__ */ H(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? p(c) ? d[c] : u[c] : m(c) || !e.k ? c.value : u[e.k];
					if (i) O(n) && ne(n, a);
					else if (O(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], p(c) && (d[c] = u[c]);
					else {
						let t = [a];
						m(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, p(c) && (d[c] = o)) : r && (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), yr.delete(e);
				};
				t.id = -1, yr.set(e, t), K(t, n);
			} else xr(e), s();
		}
	}
}
function xr(e) {
	let t = yr.get(e);
	t && (t.flags |= 8, yr.delete(e));
}
Se().requestIdleCallback, Se().cancelIdleCallback;
var Sr = (e) => !!e.type.__asyncLoader, Cr = (e) => e.type.__isKeepAlive;
function wr(e, t, n = Qi, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			it();
			let i = na(n), a = xn(t, n, e, r);
			return i(), at(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Tr = (e) => (t, n = Qi) => {
	aa && e !== "sp" || wr(e, (...e) => t(...e), n);
}, Er = Tr("m"), Dr = Tr("bum"), Or = /* @__PURE__ */ Symbol.for("v-ndc");
function kr(e, t, n, r) {
	let i, a = n && n[r], o = O(e);
	if (o || j(e)) {
		let n = o && /* @__PURE__ */ en(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ B(e), s = /* @__PURE__ */ tn(e), e = _t(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? on(an(e[n])) : an(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (!Number.isInteger(e) || e < 0) i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (N(e)) {
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
var Ar = (e) => e ? ia(e) ? fa(e) : Ar(e.parent) : null, jr = /* @__PURE__ */ T(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Ar(e.parent),
	$root: (e) => Ar(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => e.type,
	$forceUpdate: (e) => e.f ||= () => {
		Mn(e.update);
	},
	$nextTick: (e) => e.n ||= An.bind(e.proxy),
	$watch: (e) => C
}), Mr = (e, t) => e !== x && !e.__isScriptSetup && D(e, t), Nr = {
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
			else if (Mr(r, t)) return o[t] = 1, r[t];
			else if (D(a, t)) return o[t] = 3, a[t];
			else if (n !== x && D(n, t)) return o[t] = 4, n[t];
			else o[t] = 0;
		}
		let l = jr[t], u, d;
		if (l) return t === "$attrs" && z(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== x && D(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, D(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Mr(i, t) ? (i[t] = n, !0) : D(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || Mr(t, s) || D(a, s) || D(r, s) || D(jr, s) || D(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? D(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Pr() {
	return {
		app: null,
		config: {
			isNativeTag: ee,
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
var Fr = 0;
function Ir(e, t) {
	return function(n, r = null) {
		A(n) || (n = T({}, n)), r != null && !N(r) && (r = null);
		let i = Pr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Fr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ma,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && A(e.install) ? (a.add(e), e.install(c, ...t)) : A(e) && (a.add(e), e(c, ...t))), c;
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
					let u = c._ceVNode || Ri(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, fa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (xn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Lr;
				Lr = c;
				try {
					return e();
				} finally {
					Lr = t;
				}
			}
		};
		return c;
	};
}
var Lr = null, Rr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${F(t)}Modifiers`] || e[`${me(t)}Modifiers`];
function zr(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || x, i = n, a = t.startsWith("update:"), o = a && Rr(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => j(e) ? e.trim() : e)), o.number && (i = i.map(be)));
	let s, c = r[s = ge(t)] || r[s = ge(F(t))];
	!c && a && (c = r[s = ge(me(t))]), c && xn(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, xn(l, e, 6, i);
	}
}
function Br(e, t, n = !1) {
	let r = t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {};
	return a ? (O(a) ? a.forEach((e) => o[e] = null) : T(o, a), N(e) && r.set(e, o), o) : (N(e) && r.set(e, null), null);
}
function Vr(e, t) {
	return !e || !te(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), D(e, t[0].toLowerCase() + t.slice(1)) || D(e, me(t)) || D(e, t));
}
function Hr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, g = Un(e), _, v;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			_ = Ui(l.call(t, e, u, d, p, f, m)), v = s;
		} else {
			let e = t;
			_ = Ui(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), v = t.props ? s : Wr(s);
		}
	} catch (t) {
		Oi.length = 0, Sn(t, e, 1), _ = Ri(Ei);
	}
	let y = _;
	if (v && h !== !1) {
		let e = Object.keys(v), { shapeFlag: t } = y;
		e.length && t & 7 && (a && e.some(w) && (v = Gr(v, a)), y = Vi(y, v, !1, !0));
	}
	return n.dirs && (y = Vi(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && hr(er(y.type) && mr(y) || y, n.transition), _ = y, Un(g), _;
}
function Ur(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Pi(r)) {
			if (r.type !== Ei || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Wr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || te(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Gr = (e, t) => {
	let n = {};
	for (let r in e) w(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Kr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? qr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Jr(o, r, n) && !Vr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || qr(r, o, l) : !!o;
	return !1;
}
function qr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!D(e, a) || Jr(t, e, a) && !Vr(n, a)) return !0;
	}
	return !1;
}
function Jr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && N(r) && N(i) ? !Fe(r, i) : r !== i;
}
function Yr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Xr = {}, Zr = () => Object.create(Xr), Qr = (e) => Object.getPrototypeOf(e) === Xr;
function $r(e, t, n, r = !1) {
	let i = {}, a = Zr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ti(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Zt(i) : e.type.props ? i : a, e.attrs = a;
}
function ei(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ V(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Vr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (D(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = F(o);
						i[t] = ni(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ti(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (D(t, a) || (r = me(a)) !== a && D(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ni(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && D(t, e) || (delete a[e], l = !0);
	}
	l && ht(e.attrs, "set", "");
}
function ti(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (ue(c)) continue;
		let l = t[c], u;
		i && D(i, u = F(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : Vr(e.emitsOptions, c) || c in r && l === r[c] || (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ V(n), r = s || x;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = ni(i, t, s, r[s], e, !D(r, s));
		}
	}
	return o;
}
function ni(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = D(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && A(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = na(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === me(n)) && (r = !0));
	}
	return r;
}
function ri(e, t, n = !1) {
	let r = t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [];
	if (!a) return N(e) && r.set(e, S), S;
	if (O(a)) for (let e = 0; e < a.length; e++) {
		let t = F(a[e]);
		ii(t) && (o[t] = x);
	}
	else if (a) for (let e in a) {
		let t = F(e);
		if (ii(t)) {
			let n = a[e], r = o[t] = O(n) || A(n) ? { type: n } : T({}, n), i = r.type, c = !1, l = !0;
			if (O(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = A(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				}
				n === "String" && (l = !1);
			}
			else c = A(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || D(r, "default")) && s.push(t);
		}
	}
	let c = [o, s];
	return N(e) && r.set(e, c), c;
}
function ii(e) {
	return e[0] !== "$" && !ue(e);
}
var ai = (e) => e === "_" || e === "_ctx" || e === "$stable", oi = (e) => O(e) ? e.map(Ui) : [Ui(e)], si = (e, t, n) => {
	if (t._n) return t;
	let r = Wn((...e) => oi(t(...e)), n);
	return r._c = !1, r;
}, ci = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ai(n)) continue;
		let i = e[n];
		if (A(i)) t[n] = si(n, i, r);
		else if (i != null) {
			let e = oi(i);
			t[n] = () => e;
		}
	}
}, li = (e, t) => {
	let n = oi(t);
	e.slots.default = () => n;
}, ui = (e, t, n) => {
	for (let r in t) (n || !ai(r)) && (e[r] = t[r]);
}, di = (e, t, n) => {
	let r = e.slots = Zr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ui(r, t, n), n && ye(r, "_", e, !0)) : ci(t, r);
	} else t && li(e, t);
}, fi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = x;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : ui(i, t, n) : (a = !t.$stable, ci(t, i)), o = t;
	} else t && (li(e, t), o = { default: 1 });
	if (a) for (let e in i) !ai(e) && o[e] == null && delete i[e];
}, K = wi;
function pi(e) {
	return mi(e);
}
function mi(e, t) {
	let n = Se();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p = C, insertStaticContent: m } = e, h = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Fi(e, t) && (r = fe(e), P(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === S && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ti:
				g(e, t, n, r);
				break;
			case Ei:
				_(e, t, n, r);
				break;
			case Di:
				e ?? v(t, n, r, o);
				break;
			case q:
				O(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? re(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, pe);
		}
		u != null && i ? br(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && br(e.ref, null, a, e, !0);
	}, g = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && l(n, t.children);
		}
	}, _ = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, v = (e, t, n, r) => {
		[e.el, e.anchor] = m(e.children, t, n, r, e.el, e.anchor);
	}, y = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = f(e), r(e, n, i), e = a;
		r(t, n, i);
	}, b = ({ el: e, anchor: t }) => {
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
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && T(e.children, f, null, i, s, hi(e, c), l, d), _ && Kn(e, null, i, "created"), w(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !ue(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && qi(p, i, e);
		}
		_ && Kn(e, null, i, "beforeMount");
		let v = _i(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && K(() => {
			try {
				p && qi(p, i, e), v && g.enter(f), _ && Kn(e, null, i, "mounted");
			} finally {}
		}, s);
	}, w = (e, t, n, r, i) => {
		if (n && p(e, n), r) for (let t = 0; t < r.length; t++) p(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ci(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				w(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Wi(e[l]) : Ui(e[l]);
			h(null, c, t, n, r, i, a, o, s);
		}
	}, ne = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: d, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || x, m = t.props || x, h;
		if (n && gi(n, !1), (h = m.onVnodeBeforeUpdate) && qi(h, n, t, e), f && Kn(t, e, n, "beforeUpdate"), n && gi(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (l = 0, s = !1, d = null), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && u(c, ""), d ? E(e.dynamicChildren, d, c, n, r, hi(t, i), o) : s || M(e, t, c, null, n, r, hi(t, i), o, !1), l > 0) {
			if (l & 16) D(c, p, m, n, i);
			else if (l & 2 && p.class !== m.class && a(c, "class", null, m.class, i), l & 4 && a(c, "style", p.style, m.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = p[r], s = m[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && u(c, t.children);
		} else !s && d == null && D(c, p, m, n, i);
		((h = m.onVnodeUpdated) || f) && K(() => {
			h && qi(h, n, t, e), f && Kn(t, e, n, "updated");
		}, r);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Si(c), f = u && (c.type === q || !Fi(c, l) || c.shapeFlag & 198) ? d(u) : n;
			h(c, l, f, null, r, i, a, o, !0);
		}
	}, D = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== x) for (let o in t) !ue(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (ue(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, O = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), T(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && vi(e, t, !0)) : M(e, t, n, f, a, o, c, l, u);
	}, re = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : k(t, n, r, i, a, o, c) : ie(e, t, c);
	}, k = (e, t, n, r, i, a, o) => {
		let s = e.component = Zi(e, r, i);
		if (Cr(e) && (s.ctx.renderer = pe), oa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, A, o, a), !e.el) {
				let r = s.subTree = Ri(Ei);
				_(null, r, t, n), e.placeholder = r.el;
			}
		} else A(s, e, t, n, i, a, o);
	}, ie = (e, t, n) => {
		let r = t.component = e.component;
		if (Kr(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, j(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, A = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = bi(e);
					if (n) {
						t && (t.el = c.el, j(e, t, o)), n.asyncDep.then(() => {
							K(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, f;
				gi(e, !1), t ? (t.el = c.el, j(e, t, o)) : t = c, n && ve(n), (f = t.props && t.props.onVnodeBeforeUpdate) && qi(f, s, t, c), gi(e, !0);
				let p = Hr(e), m = e.subTree;
				e.subTree = p, h(m, p, d(m.el), fe(m), e, i, a), t.el = p.el, u === null && Yr(e, p.el), r && K(r, i), (f = t.props && t.props.onVnodeUpdated) && K(() => qi(f, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Sr(t);
				if (gi(e, !1), l && ve(l), !m && (o = c && c.onVnodeBeforeMount) && qi(o, d, t), gi(e, !0), s && he) {
					let t = () => {
						e.subTree = Hr(e), he(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Hr(e);
					h(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && K(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					K(() => qi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Sr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && K(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ue(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Mn(u), gi(e, !0), l();
	}, j = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ei(e, t.props, r, n), fi(e, t.children, n), it(), Fn(e), at();
	}, M = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				ae(l, f, n, r, i, a, o, s, c);
				return;
			}
			if (p & 256) {
				N(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && de(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? ae(l, f, n, r, i, a, o, s, c) : de(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && T(f, n, r, i, a, o, s, c));
	}, N = (e, t, n, r, i, a, o, s, c) => {
		e ||= S, t ||= S;
		let l = e.length, u = t.length, d = Math.min(l, u), f = 0;
		for (; f < d; f++) {
			let r = t[f] = c ? Wi(t[f]) : Ui(t[f]);
			h(e[f], r, n, null, i, a, o, s, c);
		}
		l > u ? de(e, i, a, !0, !1, d) : T(t, n, r, i, a, o, s, c, d);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, f = u - 1;
		for (; l <= d && l <= f;) {
			let r = e[l], u = t[l] = c ? Wi(t[l]) : Ui(t[l]);
			if (Fi(r, u)) h(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= f;) {
			let r = e[d], l = t[f] = c ? Wi(t[f]) : Ui(t[f]);
			if (Fi(r, l)) h(r, l, n, null, i, a, o, s, c);
			else break;
			d--, f--;
		}
		if (l > d) {
			if (l <= f) {
				let e = f + 1, d = e < u ? t[e].el : r;
				for (; l <= f;) h(null, t[l] = c ? Wi(t[l]) : Ui(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > f) for (; l <= d;) P(e[l], i, a, !0), l++;
		else {
			let p = l, m = l, g = /* @__PURE__ */ new Map();
			for (l = m; l <= f; l++) {
				let e = t[l] = c ? Wi(t[l]) : Ui(t[l]);
				e.key != null && g.set(e.key, l);
			}
			let _, v = 0, y = f - m + 1, b = !1, x = 0, C = Array(y);
			for (l = 0; l < y; l++) C[l] = 0;
			for (l = p; l <= d; l++) {
				let r = e[l];
				if (v >= y) {
					P(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = g.get(r.key);
				else for (_ = m; _ <= f; _++) if (C[_ - m] === 0 && Fi(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? P(r, i, a, !0) : (C[u - m] = l + 1, u >= x ? x = u : b = !0, h(r, t[u], n, null, i, a, o, s, c), v++);
			}
			let ee = b ? yi(C) : S;
			for (_ = ee.length - 1, l = y - 1; l >= 0; l--) {
				let e = m + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || Si(f) : r;
				C[l] === 0 ? h(null, d, n, p, i, a, o, s, c) : b && (_ < 0 || l !== ee[_] ? oe(d, n, p, 2) : _--);
			}
		}
	}, oe = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) oe(e.component.subTree, t, n, a);
		else if (d & 128) e.suspense.move(t, n, a);
		else if (d & 64) c.move(e, t, n, pe);
		else if (c === q) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) oe(u[e], t, n, a);
			r(e.anchor, t, n);
		} else if (c === Di) y(e, t, n);
		else if (a !== 2 && d & 1 && l) {
			if (a === 0) l.persisted && !s[fr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), K(() => l.enter(s), o));
			else {
				let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? i(s) : r(s, t, n);
				}, d = () => {
					let e = s._isLeaving || !!s[fr];
					s._isLeaving && s[fr](!0), l.persisted && !e ? u() : a(s, () => {
						u(), c && c();
					});
				};
				o ? o(s, u, d) : d();
			}
		} else r(s, t, n);
	}, P = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (it(), br(s, null, n, e, !0), at()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Sr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && qi(_, t, e), u & 6) le(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Kn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, pe, r) : l && !l.hasOnce && (a !== q || d > 0 && d & 64) ? de(l, t, n, !1, !0) : (a === q && d & 384 || !i && u & 16) && de(c, t, n), r && se(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && K(() => {
			_ && qi(_, t, e), h && Kn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, se = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e, o = t === q;
		if (o && !a) {
			ce(n, r);
			return;
		}
		if (t === Di) {
			b(e), a && !a.persisted && a.afterLeave && a.afterLeave();
			return;
		}
		let s = o ? gr(e) : e, c = () => {
			o ? d(n) && ce(n, r) : i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (s && s.shapeFlag & 1 && a && !a.persisted) {
			let { leave: e, delayLeave: t } = a, n = s.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, ce = (e, t) => {
		let n;
		for (; e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, le = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		xi(c), xi(l), r && ve(r), i.stop(), a ? (a.flags |= 8, P(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, P(o, e, t, n)), s && K(s, t), K(() => {
			e.isUnmounted = !0;
		}, t);
	}, de = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) P(e[o], t, n, r, i);
	}, fe = (e) => {
		if (e.shapeFlag & 6) return fe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = f(e.anchor || e.el), n = t && t[$n];
		return n ? f(n) : t;
	}, F = (e, t, n) => {
		Rn(() => {
			e == null ? t._vnode && P(t._vnode, null, null, !0) : h(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Xi());
	}, pe = {
		p: h,
		um: P,
		m: oe,
		r: se,
		mt: k,
		mc: T,
		pc: M,
		pbc: E,
		n: fe,
		o: e
	}, me, he;
	return t && ([me, he] = t(pe)), {
		render: F,
		hydrate: me,
		createApp: Ir(F, me)
	};
}
function hi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function _i(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function vi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (O(r) && O(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Wi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && vi(t, a)), a.type === Ti && (a.patchFlag === -1 && (a = i[e] = Wi(a)), a.el = t.el), a.type === Ei && !a.el && (a.el = t.el);
	}
}
function yi(e) {
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
function bi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : bi(t);
}
function xi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Si(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Si(t.subTree) : null;
}
var Ci = (e) => e.__isSuspense;
function wi(e, t) {
	t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Pn(e);
}
var q = /* @__PURE__ */ Symbol.for("v-fgt"), Ti = /* @__PURE__ */ Symbol.for("v-txt"), Ei = /* @__PURE__ */ Symbol.for("v-cmt"), Di = /* @__PURE__ */ Symbol.for("v-stc"), Oi = [], J = null;
function Y(e = !1) {
	Oi.push(J = e ? null : []);
}
function ki() {
	Oi.pop(), J = Oi[Oi.length - 1] || null;
}
var Ai = 1;
function ji(e, t = !1) {
	Ai += e, e < 0 && J && t && (J.hasOnce = !0);
}
function Mi(e) {
	return e.dynamicChildren = Ai > 0 ? J || S : null, ki(), Ai > 0 && J && J.push(e), e;
}
function X(e, t, n, r, i, a) {
	return Mi(Z(e, t, n, r, i, a, !0));
}
function Ni(e, t, n, r, i) {
	return Mi(Ri(e, t, n, r, i, !0));
}
function Pi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Fi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Ii = ({ key: e }) => e ?? null, Li = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : j(e) || /* @__PURE__ */ H(e) || A(e) ? {
	i: Vn,
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
		key: t && Ii(t),
		ref: t && Li(t),
		scopeId: Hn,
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
		ctx: Vn
	};
	return s ? (Gi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= j(n) ? 8 : 16), Ai > 0 && !o && J && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && J.push(c), c;
}
var Ri = zi;
function zi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Or || (e = Ei), Pi(e)) {
		let r = Vi(e, t, !0);
		return n && Gi(r, n), Ai > 0 && !a && J && (r.shapeFlag & 6 ? J[J.indexOf(e)] = r : J.push(r)), r.patchFlag = -2, r;
	}
	if (pa(e) && (e = e.__vccOpts), t) {
		t = Bi(t);
		let { class: e, style: n } = t;
		e && !j(e) && (t.class = Oe(e)), N(n) && (/* @__PURE__ */ nn(n) && !O(n) && (n = T({}, n)), t.style = Ce(n));
	}
	let o = j(e) ? 1 : Ci(e) ? 128 : er(e) ? 64 : N(e) ? 4 : A(e) ? 2 : 0;
	return Z(e, t, n, r, i, o, a, !0);
}
function Bi(e) {
	return e ? /* @__PURE__ */ nn(e) || Qr(e) ? T({}, e) : e : null;
}
function Vi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ki(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ii(l),
		ref: t && t.ref ? n && a ? O(a) ? a.concat(Li(t)) : [a, Li(t)] : Li(t) : a,
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
		ssContent: e.ssContent && Vi(e.ssContent),
		ssFallback: e.ssFallback && Vi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && hr(u, c.clone(u)), u;
}
function Hi(e = " ", t = 0) {
	return Ri(Ti, null, e, t);
}
function Q(e = "", t = !1) {
	return t ? (Y(), Ni(Ei, null, e)) : Ri(Ei, null, e);
}
function Ui(e) {
	return e == null || typeof e == "boolean" ? Ri(Ei) : O(e) ? Ri(q, null, e.slice()) : Pi(e) ? Wi(e) : Ri(Ti, null, String(e));
}
function Wi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vi(e);
}
function Gi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (O(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Gi(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Qr(t) ? t._ctx = Vn : r === 3 && Vn && (Vn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (A(t)) {
		if (r & 65) {
			Gi(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Vn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Hi(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Ki(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = Oe([t.class, r.class]));
		else if (e === "style") t.style = Ce([t.style, r.style]);
		else if (te(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(O(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !w(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function qi(e, t, n, r = null) {
	xn(e, t, 7, [n, r]);
}
var Ji = Pr(), Yi = 0;
function Xi() {
	return Yi;
}
function Zi(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || Ji, a = {
		uid: Yi++,
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
		scope: new Be(!0),
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
		propsOptions: ri(r, i),
		emitsOptions: Br(r, i),
		emit: null,
		emitted: null,
		propsDefaults: x,
		inheritAttrs: r.inheritAttrs,
		ctx: x,
		data: x,
		props: x,
		attrs: x,
		slots: x,
		refs: x,
		setupState: x,
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = zr.bind(null, a), e.ce && e.ce(a), a;
}
var Qi = null, $i = () => Qi || Vn, ea, ta;
{
	let e = Se(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ea = t("__VUE_INSTANCE_SETTERS__", (e) => Qi = e), ta = t("__VUE_SSR_SETTERS__", (e) => aa = e);
}
var na = (e) => {
	let t = Qi;
	return ea(e), e.scope.on(), () => {
		e.scope.off(), ea(t);
	};
}, ra = () => {
	Qi && Qi.scope.off(), ea(null);
};
function ia(e) {
	return e.vnode.shapeFlag & 4;
}
var aa = !1;
function oa(e, t = !1, n = !1) {
	t && ta(t);
	let { props: r, children: i } = e.vnode, a = ia(e);
	$r(e, r, a, t), di(e, i, n || t);
	let o = a ? sa(e, t) : void 0;
	return t && ta(!1), o;
}
function sa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nr);
	let { setup: r } = n;
	if (r) {
		it();
		let n = e.setupContext = r.length > 1 ? da(e) : null, i = na(e), a = bn(r, e, 0, [e.props, n]), o = ae(a);
		if (at(), i(), (o || e.sp) && !Sr(e) && _r(e), o) {
			if (a.then(ra, ra), t) return a.then((n) => {
				ta(!0);
				try {
					ca(e, n, t);
				} finally {
					ta(!1);
				}
			}).catch((t) => {
				Sn(t, e, 0);
			});
			e.asyncDep = a;
		} else ca(e, a, t);
	} else la(e, t);
}
function ca(e, t, n) {
	A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : N(t) && (e.setupState = dn(t)), la(e, n);
}
function la(e, t, n) {
	let r = e.type;
	e.render ||= r.render || C;
}
var ua = { get(e, t) {
	return z(e, "get", ""), e[t];
} };
function da(e) {
	return {
		attrs: new Proxy(e.attrs, ua),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function fa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(dn(rn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in jr) return jr[n](e);
		},
		has(e, t) {
			return t in e || t in jr;
		}
	}) : e.proxy;
}
function pa(e) {
	return A(e) && "__vccOpts" in e;
}
var $ = (e, t) => /* @__PURE__ */ pn(e, t, aa), ma = "3.5.44", ha = void 0, ga = typeof window < "u" && window.trustedTypes;
if (ga) try {
	ha = /* @__PURE__ */ ga.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var _a = ha ? (e) => ha.createHTML(e) : (e) => e, va = "http://www.w3.org/2000/svg", ya = "http://www.w3.org/1998/Math/MathML", ba = typeof document < "u" ? document : null, xa = ba && /* @__PURE__ */ ba.createElement("template"), Sa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ba.createElementNS(va, e) : t === "mathml" ? ba.createElementNS(ya, e) : n ? ba.createElement(e, { is: n }) : ba.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ba.createTextNode(e),
	createComment: (e) => ba.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ba.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			xa.innerHTML = _a(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = xa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ca = /* @__PURE__ */ Symbol("_vtc");
function wa(e, t, n) {
	let r = e[Ca];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ta = /* @__PURE__ */ Symbol("_vod"), Ea = /* @__PURE__ */ Symbol("_vsh"), Da = /* @__PURE__ */ Symbol(""), Oa = /(?:^|;)\s*display\s*:/;
function ka(e, t, n) {
	let r = e.style, i = j(n), a = !1;
	if (n && !i) {
		if (t) {
			if (j(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? ja(r, t, "");
			}
			else for (let e in t) n[e] ?? ja(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? ja(r, i, "") : Fa(e, i, !j(t) && t ? t[i] : void 0, o) || ja(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Da];
			e && (n += ";" + e), r.cssText = n, a = Oa.test(n);
		}
	} else t && e.removeAttribute("style");
	Ta in e && (i && t === n || (e[Ta] = a ? r.display : ""), e[Ea] && (r.display = "none"));
}
var Aa = /\s*!important$/;
function ja(e, t, n) {
	if (O(n)) n.forEach((n) => ja(e, t, n));
	else if (n ??= "", t.startsWith("--")) Aa.test(n) ? e.setProperty(t, n.replace(Aa, ""), "important") : e.setProperty(t, n);
	else {
		let r = Pa(e, t);
		Aa.test(n) ? e.setProperty(me(r), n.replace(Aa, ""), "important") : e[r] = n;
	}
}
var Ma = [
	"Webkit",
	"Moz",
	"ms"
], Na = {};
function Pa(e, t) {
	let n = Na[t];
	if (n) return n;
	let r = F(t);
	if (r !== "filter" && r in e) return Na[t] = r;
	r = he(r);
	for (let n = 0; n < Ma.length; n++) {
		let i = Ma[n] + r;
		if (i in e) return Na[t] = i;
	}
	return t;
}
function Fa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && j(r) && n === r;
}
var Ia = "http://www.w3.org/1999/xlink";
function La(e, t, n, r, i, a = ke(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ia, t.slice(6, t.length)) : e.setAttributeNS(Ia, t, n) : n == null || a && !Ae(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : M(n) ? String(n) : n);
}
function Ra(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? _a(n) : n);
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
		r === "boolean" ? n = Ae(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function za(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ba(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Va = /* @__PURE__ */ Symbol("_vei");
function Ha(e, t, n, r, i = null) {
	let a = e[Va] || (e[Va] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ga(t);
		r ? za(e, n, a[t] = Ya(r, i), s) : o && (Ba(e, n, o, s), a[t] = void 0);
	}
}
var Ua = /(Once|Passive|Capture)$/, Wa = /^on:?(?:Once|Passive|Capture)$/;
function Ga(e) {
	let t, n;
	for (; (n = e.match(Ua)) && !Wa.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : me(e.slice(2)), t];
}
var Ka = 0, qa = /* @__PURE__ */ Promise.resolve(), Ja = () => Ka ||= (qa.then(() => Ka = 0), Date.now());
function Ya(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (O(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && xn(e, t, 5, a);
			}
		} else xn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Ja(), n;
}
var Xa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Za = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? wa(e, r, o) : t === "style" ? ka(e, n, r) : te(t) ? w(t) || Ha(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Qa(e, t, r, o)) ? (Ra(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || La(e, t, r, o, a, t !== "value")) : e._isVueCE && ($a(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !j(r))) ? Ra(e, F(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), La(e, t, r, o));
};
function Qa(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Xa(t) && A(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Xa(t) && j(n) ? !1 : t in e;
}
function $a(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = F(t);
	return Array.isArray(n) ? n.some((e) => F(e) === r) : Object.keys(n).some((e) => F(e) === r);
}
var eo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return O(t) ? (e) => ve(t, e) : t;
};
function to(e) {
	e.target.composing = !0;
}
function no(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var ro = /* @__PURE__ */ Symbol("_assign"), io = /* @__PURE__ */ Symbol("_initialValue");
function ao(e, t, n) {
	return t && (e = e.trim()), n && (e = be(e)), e;
}
var oo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[io] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[io] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[ro] = eo(i);
		let a = r || i.props && i.props.type === "number";
		za(e, t ? "change" : "input", (t) => {
			t.target.composing || e[ro](ao(e.value, n, a));
		}), (n || a) && za(e, "change", () => {
			e.value = ao(e.value, n, a);
		}), t || (za(e, "compositionstart", to), za(e, "compositionend", no), za(e, "change", no));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[io];
		delete e[io], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[ro](ao(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[ro] = eo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? be(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, so = {
	deep: !0,
	created(e, t, n) {
		e[ro] = eo(n), za(e, "change", () => {
			let t = e._modelValue, n = po(e), r = e.checked, i = e[ro];
			if (O(t)) {
				let e = Ie(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (k(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(mo(e, r));
		});
	},
	mounted: co,
	beforeUpdate(e, t, n) {
		e[ro] = eo(n), co(e, t, n);
	}
};
function co(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (O(t)) i = Ie(t, r.props.value) > -1;
	else if (k(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Fe(t, mo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var lo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, za(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? be(po(e)) : po(e)), r = e.multiple, i = r ? k(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? O(i) ? t.slice() : t : i];
			try {
				e[ro](i);
			} finally {
				An(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[ro] = eo(r);
	},
	mounted(e, { value: t }) {
		fo(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[ro] = eo(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, n && n[0] === e.multiple && uo(t, n[1], n[0]) || fo(e, t);
	}
};
function uo(e, t, n) {
	if (!n || O(e)) return Fe(e, t);
	if (k(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function fo(e, t) {
	let n = e.multiple, r = O(t);
	if (!n || r || k(t)) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = po(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : Ie(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (Fe(po(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function po(e) {
	return "_value" in e ? e._value : e.value;
}
function mo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var ho = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], go = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => ho.some((n) => e[`${n}Key`] && !t.includes(n))
}, _o = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = go[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, vo = /* @__PURE__ */ T({ patchProp: Za }, Sa), yo;
function bo() {
	return yo ||= pi(vo);
}
var xo = ((...e) => {
	let t = bo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Co(e);
		if (!r) return;
		let i = t._component;
		A(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, So(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function So(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Co(e) {
	return j(e) ? document.querySelector(e) : e;
}
// src/catalogue/ResourceCard.vue
var wo = ["aria-busy"], To = [
	"title",
	"aria-label",
	"disabled"
], Eo = ["src", "alt"], Do = [
	"href",
	"title",
	"aria-label"
], Oo = ["src", "alt"], ko = { class: "card-head" }, Ao = { class: "card-actions" }, jo = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled"
], Mo = [
	"title",
	"aria-label",
	"disabled"
], No = [
	"title",
	"aria-label",
	"disabled"
], Po = [
	"title",
	"aria-label",
	"disabled"
], Fo = { class: "meta" }, Io = {
	key: 0,
	class: "tag submission"
}, Lo = { class: "tag" }, Ro = { class: "tag lang" }, zo = {
	key: 1,
	class: "tag format"
}, Bo = {
	key: 2,
	class: "tag flash"
}, Vo = ["aria-label"], Ho = { class: "rating-label" }, Uo = {
	key: 0,
	class: "rating-summary"
}, Wo = { class: "stars" }, Go = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled",
	"onClick"
], Ko = { class: "note" }, qo = {
	key: 2,
	class: "health"
}, Jo = {
	key: 3,
	class: "note submission-by"
}, Yo = ["role"], Xo = {
	__name: "ResourceCard",
	props: {
		game: Object,
		context: Object,
		onAction: Function
	},
	setup(r) {
		let a = r, l = /* @__PURE__ */ U(!1), u = /* @__PURE__ */ U(""), d = /* @__PURE__ */ U(!1), p = /* @__PURE__ */ U(!1), _ = $(() => o(a.game)), v = $(() => {
			a.context;
			let e = t();
			return (e === "va" || e === "ca" ? a.game.title_ca : e === "en" ? a.game.title_en : "") || a.game.title || n("no_title");
		}), y = $(() => {
			a.context;
			let e = t();
			return (e === "va" || e === "ca" ? a.game.notes_ca : e === "en" ? a.game.notes_en : "") || a.game.notes || n("no_notes");
		}), b = $(() => a.context.favorites.has(_.value)), x = $(() => a.context.userRatings.get(_.value) || 0), S = $(() => a.context.ratingSummary.get(_.value)), C = $(() => a.context.brokenSummary.get(_.value)), ee = $(() => a.context.userReports.has(_.value)), te = $(() => a.context.backendMode === "remote"), w = $(() => a.context.reportByUrl.get(c(a.game.url))), T = $(() => w.value ? w.value.ok ? "" : n(w.value.severity === "warning" ? "link_warn" : "link_error", w.value.error || `HTTP ${w.value.httpStatus || "error"}`) : n("not_checked")), ne = $(() => D(a.game.image) || f), E = $(() => D(a.game.url));
		function D(e) {
			if (!e) return "";
			try {
				let t = new URL(e, window.location.href);
				return ["http:", "https:"].includes(t.protocol) && !t.username && !t.password ? t.href : "";
			} catch {
				return "";
			}
		}
		let O = $(() => a.game.flash || [
			"jclic",
			"eduhoot",
			"llibres"
		].includes(a.game.format));
		function re() {
			E.value && (a.game.flash ? m(E.value, a.game.title) : a.game.format === "jclic" ? h(E.value, a.game.title) : g(E.value, a.game.title, a.game.format === "llibres"));
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
			class: Oe(["card", {
				submission: r.game._isSubmission,
				broken: w.value && !w.value.ok
			}]),
			"aria-busy": l.value
		}, [
			O.value ? (Y(), X("button", {
				key: 0,
				type: "button",
				class: "card-image-link",
				title: W(n)(r.game.flash ? "play_ruffle" : "open_game"),
				"aria-label": W(n)(r.game.flash ? "play_ruffle" : "open_game"),
				disabled: !E.value,
				onClick: re
			}, [Z("img", {
				class: "card-image",
				src: p.value ? W(f) : ne.value,
				alt: r.game.title || W(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: a[0] ||= (e) => p.value = !0
			}, null, 40, Eo)], 8, To)) : (Y(), X("a", {
				key: 1,
				class: "card-image-link",
				href: E.value || void 0,
				target: "_blank",
				rel: "noreferrer noopener",
				title: W(n)("open_game"),
				"aria-label": W(n)("open_game")
			}, [Z("img", {
				class: "card-image",
				src: p.value ? W(f) : ne.value,
				alt: r.game.title || W(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: a[1] ||= (e) => p.value = !0
			}, null, 40, Oo)], 8, Do)),
			Z("div", ko, [Z("h3", null, I(v.value), 1), Z("div", Ao, [
				Z("button", {
					type: "button",
					class: Oe(["fav-btn", { active: b.value }]),
					title: W(n)(b.value ? "favorite_remove" : "favorite_add"),
					"aria-label": W(n)(b.value ? "favorite_remove" : "favorite_add"),
					"aria-pressed": b.value,
					disabled: l.value,
					onClick: a[2] ||= (e) => k("favorite")
				}, "❤", 10, jo),
				te.value ? (Y(), X("button", {
					key: 0,
					type: "button",
					class: Oe(["report-btn", { active: ee.value }]),
					title: W(n)(ee.value ? "report_broken_active" : "report_broken"),
					"aria-label": W(n)(ee.value ? "report_broken_active" : "report_broken"),
					disabled: l.value || ee.value,
					onClick: a[3] ||= (e) => k("report")
				}, "⚠", 10, Mo)) : Q("", !0),
				te.value && r.context.isAdmin ? (Y(), X("button", {
					key: 1,
					type: "button",
					class: "admin-hide-btn",
					title: W(n)("admin_hide_resource"),
					"aria-label": W(n)("admin_hide_resource"),
					disabled: l.value,
					onClick: a[4] ||= (e) => k("hide")
				}, "×", 8, No)) : Q("", !0),
				te.value && r.context.isAdmin && C.value?.adminReported ? (Y(), X("button", {
					key: 2,
					type: "button",
					class: "admin-unhide-btn",
					title: W(n)("admin_unhide_resource"),
					"aria-label": W(n)("admin_unhide_resource"),
					disabled: l.value,
					onClick: a[5] ||= (e) => k("unhide")
				}, "↩", 8, Po)) : Q("", !0)
			])]),
			Z("div", Fo, [
				r.game._isSubmission ? (Y(), X("span", Io, I(W(n)("submission_badge")), 1)) : Q("", !0),
				Z("span", Lo, I(W(e)(r.game.area || "General")), 1),
				(Y(!0), X(q, null, kr(r.game.levels || (r.game.level ? [r.game.level] : [W(n)("no_level")]), (e) => (Y(), X("span", {
					key: e,
					class: "tag"
				}, I(W(i)(e)), 1))), 128)),
				Z("span", Ro, I(W(s)(r.game) || W(n)("catalogue_no_language")), 1),
				[
					"jclic",
					"h5p",
					"eduhoot",
					"scorm",
					"llibres"
				].includes(r.game.format) ? (Y(), X("span", zo, I(r.game.format.toUpperCase()), 1)) : Q("", !0),
				r.game.flash ? (Y(), X("span", Bo, "Flash")) : Q("", !0)
			]),
			Z("div", {
				class: "rating",
				role: "group",
				"aria-label": W(n)("rating_group_label")
			}, [
				Z("span", Ho, I(W(n)("rating_label")), 1),
				te.value ? (Y(), X("span", Uo, I(S.value?.count ? W(n)("rating_avg", S.value.avg.toFixed(1), S.value.count) : W(n)("rating_no_votes")), 1)) : Q("", !0),
				Z("div", Wo, [(Y(), X(q, null, kr(5, (e) => Z("button", {
					key: e,
					class: Oe(["star-btn", { active: e <= x.value }]),
					type: "button",
					title: W(n)("rating_set", e),
					"aria-label": W(n)("rating_set", e),
					"aria-pressed": e <= x.value,
					disabled: l.value,
					onClick: (t) => k("rating", e)
				}, "★", 10, Go)), 64))])
			], 8, Vo),
			Z("p", Ko, I(y.value), 1),
			T.value ? (Y(), X("p", qo, I(T.value), 1)) : Q("", !0),
			r.game._isSubmission && r.game._submittedBy ? (Y(), X("p", Jo, I(W(n)("submission_by", r.game._submittedBy)), 1)) : Q("", !0),
			u.value ? (Y(), X("p", {
				key: 4,
				class: "report-feedback",
				role: d.value ? "alert" : "status"
			}, I(W(n)(u.value)), 9, Yo)) : Q("", !0)
		], 10, wo));
	}
}, Zo = ["placeholder"], Qo = ["id", "onUpdate:modelValue"], $o = { value: "" }, es = ["value"], ts = { value: 0 }, ns = ["value"], rs = { class: "check-wrap" }, is = { class: "check-wrap" }, as = {
	key: 0,
	id: "brokenOnlyLabel",
	class: "check-wrap"
}, os = {
	key: 1,
	id: "reportedOnlyLabel",
	class: "check-wrap"
}, ss = { class: "results-head" }, cs = { id: "resultCount" }, ls = {
	key: 0,
	role: "alert"
}, us = {
	key: 1,
	role: "status"
}, ds = ["aria-busy"], fs = { class: "load-more-wrap" }, ps = {
	key: 2,
	id: "emptyState",
	class: "empty"
}, ms = {
	__name: "Catalogue",
	props: { onAction: Function },
	setup(s, { expose: c }) {
		let f = /* @__PURE__ */ sn({
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
		}), p = new URLSearchParams(location.search), m = /* @__PURE__ */ Xt({
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
		}), h = /* @__PURE__ */ U(48), g = $(() => a(f.value.games, m, f.value)), _ = $(() => g.value.slice(0, h.value)), v = $(() => ({
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
		return Xn(m, () => {
			h.value = 48, b();
		}), c({ setContext: y }), (t, a) => (Y(), X(q, null, [
			(Y(), Ni(lr, { to: "#catalogueFilters" }, [
				Z("label", null, [Z("span", null, I(W(n)("search_label")), 1), Gn(Z("input", {
					id: "searchInput",
					"onUpdate:modelValue": a[0] ||= (e) => m.term = e,
					type: "search",
					placeholder: W(n)("search_placeholder")
				}, null, 8, Zo), [[oo, m.term]])]),
				(Y(!0), X(q, null, kr([
					{
						id: "levelFilter",
						field: "selectedLevel",
						options: "level",
						label: "level",
						format: W(i)
					},
					{
						id: "languageFilter",
						field: "selectedLanguage",
						options: "language",
						label: "language",
						format: W(r)
					},
					{
						id: "areaFilter",
						field: "selectedArea",
						options: "area",
						label: "area",
						format: W(e)
					},
					{
						id: "formatFilter",
						field: "selectedFormat",
						options: "format",
						label: "format",
						format: (e) => e
					}
				], (e) => (Y(), X("label", { key: e.id }, [Z("span", null, I(W(n)(e.label + "_label")), 1), Gn(Z("select", {
					id: e.id,
					"onUpdate:modelValue": (t) => m[e.field] = t
				}, [Z("option", $o, I(W(n)(e.label + "_all")), 1), (Y(!0), X(q, null, kr(v.value[e.options], (t) => (Y(), X("option", {
					key: t,
					value: t
				}, I(e.format(t)), 9, es))), 128))], 8, Qo), [[lo, m[e.field]]])]))), 128)),
				Z("label", null, [Z("span", null, I(W(n)("rating_min_label")), 1), Gn(Z("select", {
					id: "ratingFilter",
					"onUpdate:modelValue": a[1] ||= (e) => m.minRating = e
				}, [Z("option", ts, I(W(n)("rating_all_filter")), 1), (Y(), X(q, null, kr(5, (e) => Z("option", {
					key: e,
					value: e
				}, I(e) + "★" + I(e < 5 ? "+" : ""), 9, ns)), 64))], 512), [[
					lo,
					m.minRating,
					void 0,
					{ number: !0 }
				]])]),
				Z("label", rs, [Gn(Z("input", {
					id: "favoritesOnly",
					"onUpdate:modelValue": a[2] ||= (e) => m.onlyFavorites = e,
					type: "checkbox"
				}, null, 512), [[so, m.onlyFavorites]]), Z("span", null, I(W(n)("favorites_only")), 1)]),
				Z("label", is, [Gn(Z("input", {
					id: "submissionsOnly",
					"onUpdate:modelValue": a[3] ||= (e) => m.onlySubmissions = e,
					type: "checkbox"
				}, null, 512), [[so, m.onlySubmissions]]), Z("span", null, I(W(n)("submissions_only")), 1)]),
				f.value.isAdmin ? (Y(), X("label", as, [Gn(Z("input", {
					id: "brokenOnly",
					"onUpdate:modelValue": a[4] ||= (e) => m.onlyBroken = e,
					type: "checkbox"
				}, null, 512), [[so, m.onlyBroken]]), Z("span", null, I(W(n)("broken_only")), 1)])) : Q("", !0),
				f.value.isAdmin ? (Y(), X("label", os, [Gn(Z("input", {
					id: "reportedOnly",
					"onUpdate:modelValue": a[5] ||= (e) => m.onlyReported = e,
					type: "checkbox"
				}, null, 512), [[so, m.onlyReported]]), Z("span", null, I(W(n)("reported_only")), 1)])) : Q("", !0)
			])),
			Z("div", ss, [Z("h2", null, I(W(n)("section_title")), 1), Z("p", cs, I(W(n)("result_count", g.value.length, f.value.games.length)), 1)]),
			f.value.error ? (Y(), X("p", ls, I(W(n)("catalogue_load_error")), 1)) : Q("", !0),
			f.value.loading ? (Y(), X("p", us, I(W(n)("catalogue_loading")), 1)) : Q("", !0),
			Z("div", {
				id: "grid",
				class: "grid",
				"aria-live": "polite",
				"aria-busy": f.value.loading
			}, [(Y(!0), X(q, null, kr(_.value, (e, t) => (Y(), Ni(Xo, {
				key: f.value.epoch + ":" + W(o)(e) + ":" + t,
				game: e,
				context: f.value,
				"on-action": s.onAction
			}, null, 8, [
				"game",
				"context",
				"on-action"
			]))), 128))], 8, ds),
			Z("div", fs, [g.value.length > _.value.length ? (Y(), X("button", {
				key: 0,
				id: "loadMoreBtn",
				class: "btn-load-more",
				type: "button",
				onClick: a[6] ||= (e) => h.value += 48
			}, I(W(n)("load_more", g.value.length - _.value.length)), 1)) : Q("", !0)]),
			!g.value.length && !f.value.loading ? (Y(), X("p", ps, I(W(n)("empty")), 1)) : Q("", !0)
		], 64));
	}
}, hs = {
	key: 0,
	id: "authPanel",
	class: "auth-panel",
	"aria-live": "polite"
}, gs = { class: "auth-actions" }, _s = ["href"], vs = ["disabled"], ys = ["disabled"], bs = ["disabled"], xs = {
	key: 0,
	role: "alert"
}, Ss = {
	id: "studentDialogTitle",
	class: "submit-dialog-title"
}, Cs = { class: "submit-fields" }, ws = ["disabled"], Ts = ["disabled"], Es = ["role"], Ds = { class: "submit-actions" }, Os = ["disabled"], ks = {
	__name: "Access",
	props: {
		onSessionChange: Function,
		onPropose: Function
	},
	setup(e, { expose: r }) {
		let i = e, a = /* @__PURE__ */ sn({
			backendMode: "local",
			epoch: -1,
			language: t()
		}), o = /* @__PURE__ */ U({}), s = /* @__PURE__ */ U(!1), c = /* @__PURE__ */ U(!1), l = /* @__PURE__ */ U(""), u = /* @__PURE__ */ U(!1), d = /* @__PURE__ */ U(), f = /* @__PURE__ */ U(), m = /* @__PURE__ */ U(""), h = /* @__PURE__ */ U(""), g = 0, b = !0;
		function x(e, ...t) {
			return a.value.language, n(e, ...t);
		}
		function S() {
			m.value = "", h.value = "", l.value = "", u.value = !1, f.value && (f.value.value = "");
			let e = d.value?.querySelector("#studentPin");
			e && (e.value = "");
		}
		function C() {
			d.value?.close(), S();
		}
		async function ee() {
			let e = ++g, t = a.value.epoch;
			o.value = {}, c.value = !0;
			let n = await _();
			b && e === g && t === p.preferenceEpoch && (o.value = n, p.isTeacher = !!n.logged_in, c.value = !1);
		}
		function te(e) {
			let n = e.epoch !== a.value.epoch || e.backendMode !== a.value.backendMode;
			a.value = {
				...e,
				language: t()
			}, n && (C(), o.value = {}, c.value = !1, ++g, b && e.backendMode === "remote" && ee());
		}
		async function w() {
			s.value || (S(), d.value.showModal(), await An(), f.value?.focus());
		}
		async function T() {
			if (s.value || !b || a.value.epoch !== p.preferenceEpoch) return;
			let e = m.value.trim(), t = h.value.trim();
			if (h.value = "", !e || !t) l.value = "student_login_missing", u.value = !0;
			else {
				s.value = !0, l.value = "student_login_loading", u.value = !1;
				try {
					let n = v({
						publicCode: e,
						pin: t
					});
					if (t = "", await n, !b) return;
					C(), await i.onSessionChange();
				} catch {
					b && d.value?.open && (l.value = "student_login_error", u.value = !0);
				} finally {
					t = "", s.value = !1;
				}
			}
		}
		async function ne() {
			if (!s.value && b && a.value.epoch === p.preferenceEpoch) {
				s.value = !0, l.value = "";
				try {
					await y(), b && await i.onSessionChange();
				} catch {
					b && (l.value = "session_error", u.value = !0);
				} finally {
					s.value = !1;
				}
			}
		}
		function E() {
			b = !1, ++g, C(), o.value = {}, c.value = !0;
		}
		async function D(e) {
			e.persisted && (b = !0, await i.onSessionChange(), ee());
		}
		return Er(() => {
			window.addEventListener("pagehide", E), window.addEventListener("pageshow", D);
		}), Dr(() => {
			E(), window.removeEventListener("pagehide", E), window.removeEventListener("pageshow", D);
		}), r({ setContext: te }), (e, t) => (Y(), X(q, null, [
			(Y(), Ni(lr, { to: "#authMount" }, [a.value.backendMode === "remote" ? (Y(), X("div", hs, [Z("div", gs, [
				c.value ? Q("", !0) : (Y(), X("a", {
					key: 0,
					id: "loginBtn",
					class: "btn-auth secondary",
					href: o.value.logged_in ? "/api/auth/logout" : "/api/auth/login"
				}, I(x(o.value.logged_in ? "logout_btn" : "login_btn")), 9, _s)),
				o.value.student_logged_in ? (Y(), X("button", {
					key: 2,
					id: "studentLogoutBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: ne
				}, I(x("student_logout_btn", o.value.student_code || "")), 9, ys)) : (Y(), X("button", {
					key: 1,
					id: "studentLoginBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: w
				}, I(x("student_login_btn")), 9, vs)),
				Z("button", {
					id: "submitActivityBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: t[0] ||= (e) => i.onPropose()
				}, I(x("submit_btn")), 9, bs)
			]), l.value === "session_error" ? (Y(), X("p", xs, I(x(l.value)), 1)) : Q("", !0)])) : Q("", !0)])),
			(Y(), Ni(lr, { to: "#prefsMount" }, [Z("p", {
				id: "personalPrefsNote",
				class: Oe(["personal-note", { remote: a.value.backendMode === "remote" }])
			}, I(x(a.value.backendMode === "remote" ? "personal_prefs_note_remote" : "personal_prefs_note_local")), 3)])),
			Z("dialog", {
				ref_key: "dialog",
				ref: d,
				id: "studentDialog",
				class: "submit-dialog",
				"aria-labelledby": "studentDialogTitle",
				onClose: S,
				onCancel: S,
				onClick: t[3] ||= (e) => {
					e.target === d.value && C();
				}
			}, [Z("h2", Ss, I(x("student_dialog_title")), 1), Z("form", {
				id: "studentForm",
				onSubmit: _o(T, ["prevent"])
			}, [
				Z("div", Cs, [Z("label", null, [Z("span", null, I(x("student_code_label")), 1), Gn(Z("input", {
					ref_key: "codeInput",
					ref: f,
					id: "studentCode",
					"onUpdate:modelValue": t[1] ||= (e) => m.value = e,
					type: "text",
					required: "",
					autocomplete: "off",
					maxlength: "12",
					disabled: s.value
				}, null, 8, ws), [[oo, m.value]])]), Z("label", null, [Z("span", null, I(x("student_pin_label")), 1), Gn(Z("input", {
					id: "studentPin",
					"onUpdate:modelValue": t[2] ||= (e) => h.value = e,
					type: "password",
					required: "",
					inputmode: "numeric",
					autocomplete: "off",
					disabled: s.value
				}, null, 8, Ts), [[oo, h.value]])])]),
				l.value ? (Y(), X("p", {
					key: 0,
					id: "studentFeedback",
					class: Oe(["submit-feedback", { error: u.value }]),
					role: u.value ? "alert" : "status"
				}, I(x(l.value)), 11, Es)) : Q("", !0),
				Z("div", Ds, [Z("button", {
					id: "studentCancelBtn",
					type: "button",
					class: "btn-auth secondary",
					onClick: C
				}, I(x("submit_cancel")), 1), Z("button", {
					id: "studentSendBtn",
					class: "btn-auth",
					disabled: s.value
				}, I(x("student_send")), 9, Os)])
			], 32)], 544)
		], 64));
	}
};
// src/catalogue/main.js
function As(e, t) {
	return xo(ms, t).mount(e);
}
function js(e, t) {
	return xo(ks, t).mount(e);
}
export { js as mountAccess, As as mountCatalogue };
