import { areaLabel as e, getLang as t, i18n as n, languageLabel as r, levelLabel as i } from "/scripts/i18n.js";
import { computeFilteredGames as a, gameKey as o, gameLanguageText as s, normalizeUrl as c, uniqueLanguageValues as l, uniqueLevelValues as u, uniqueValues as d } from "/scripts/filters.js";
import { DEFAULT_GAME_IMAGE as f, state as p } from "/scripts/state.js";
import { openFlashDialog as m } from "/scripts/flash.js";
import { openJClicDialog as h } from "/scripts/jclic.js";
import { openIframeDialog as g } from "/scripts/external.js";
import { authMe as _, loadSources as v, studentLogin as y, studentLogout as b, submitActivity as x } from "/scripts/api.js";
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function S(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var C = {}, w = [], T = () => {}, E = () => !1, D = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ee = (e) => e.startsWith("onUpdate:"), O = Object.assign, te = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, ne = Object.prototype.hasOwnProperty, k = (e, t) => ne.call(e, t), A = Array.isArray, re = (e) => ce(e) === "[object Map]", ie = (e) => ce(e) === "[object Set]", ae = (e) => ce(e) === "[object Date]", j = (e) => typeof e == "function", M = (e) => typeof e == "string", N = (e) => typeof e == "symbol", P = (e) => typeof e == "object" && !!e, oe = (e) => (P(e) || j(e)) && j(e.then) && j(e.catch), se = Object.prototype.toString, ce = (e) => se.call(e), le = (e) => ce(e).slice(8, -1), ue = (e) => ce(e) === "[object Object]", de = (e) => M(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fe = /* @__PURE__ */ S(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), pe = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, me = /-\w/g, F = pe((e) => e.replace(me, (e) => e.slice(1).toUpperCase())), he = /\B([A-Z])/g, ge = pe((e) => e.replace(he, "-$1").toLowerCase()), _e = pe((e) => e.charAt(0).toUpperCase() + e.slice(1)), ve = pe((e) => e ? `on${_e(e)}` : ""), ye = (e, t) => !Object.is(e, t), be = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, xe = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, Se = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, Ce, we = () => Ce ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function Te(e) {
	if (A(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = M(r) ? ke(r) : Te(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (M(e) || P(e)) return e;
}
var Ee = /;(?![^(]*\))/g, De = /:([^]+)/, Oe = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ke(e) {
	let t = {};
	return e.replace(Oe, (e) => e.startsWith("/*") ? "" : e).split(Ee).forEach((e) => {
		if (e) {
			let n = e.split(De);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function Ae(e) {
	let t = "";
	if (M(e)) t = e;
	else if (A(e)) for (let n = 0; n < e.length; n++) {
		let r = Ae(e[n]);
		r && (t += r + " ");
	}
	else if (P(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var je = /* @__PURE__ */ S("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function Me(e) {
	return !!e || e === "";
}
function Ne(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Le(e[i], t[i], n);
	return r;
}
function Pe(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Le(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Fe(e, t, n) {
	let r = re(e), i = re(t);
	if (r || i || (r = ie(e), i = ie(t), r || i)) return r && i ? Pe(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Le(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Ie(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Le(e, t, n) {
	if (e === t) return !0;
	let r = ae(e), i = ae(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = N(e), i = N(t), r || i ? e === t : (r = A(e), i = A(t), r || i ? r && i ? Ie(e, t, n, Ne) : !1 : (r = P(e), i = P(t), r || i ? !r || !i ? !1 : Ie(e, t, n, Fe) : String(e) === String(t))));
}
function Re(e, t) {
	return e.findIndex((e) => Le(e, t));
}
var ze = (e) => !!(e && e.__v_isRef === !0), I = (e) => M(e) ? e : e == null ? "" : A(e) || P(e) && (e.toString === se || !j(e.toString)) ? ze(e) ? I(e.value) : JSON.stringify(e, Be, 2) : String(e), Be = (e, t) => ze(t) ? Be(e, t.value) : re(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ve(t, r) + " =>"] = n, e), {}) } : ie(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ve(e)) } : N(t) ? Ve(t) : P(t) && !A(t) && !ue(t) ? String(t) : t, Ve = (e, t = "") => N(e) ? `Symbol(${e.description ?? t})` : e, L, He = class {
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
function Ue() {
	return L;
}
var R, We = /* @__PURE__ */ new WeakSet(), Ge = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, L && (L.active ? L.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, We.has(this) && (We.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ye(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, ct(this), Qe(this);
		let e = R, t = it;
		R = this, it = !0;
		try {
			return this.fn();
		} finally {
			$e(this), R = e, it = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) nt(e);
			this.deps = this.depsTail = void 0, ct(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? We.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		et(this) && this.run();
	}
	get dirty() {
		return et(this);
	}
}, Ke = 0, qe, Je;
function Ye(e, t = !1) {
	e.flags |= 8, t ? (e.next = Je, Je = e) : (e.next = qe, qe = e);
}
function Xe() {
	Ke++;
}
function Ze() {
	if (--Ke > 0) return;
	if (Je) {
		let e = Je;
		for (Je = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; qe;) {
		let t = qe;
		for (qe = void 0; t;) {
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
function Qe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $e(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), nt(r), rt(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function et(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tt(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function tt(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === lt) || (e.globalVersion = lt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !et(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = R, r = it;
	R = e, it = !0;
	try {
		Qe(e);
		let n = e.fn(e._value);
		(t.version === 0 || ye(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		R = n, it = r, $e(e), e.flags &= -3;
	}
}
function nt(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) nt(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function rt(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var it = !0, at = [];
function ot() {
	at.push(it), it = !1;
}
function st() {
	let e = at.pop();
	it = e === void 0 || e;
}
function ct(e) {
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
var lt = 0, ut = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, dt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!R || !it || R === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== R) t = this.activeLink = new ut(R, this), R.deps ? (t.prevDep = R.depsTail, R.depsTail.nextDep = t, R.depsTail = t) : R.deps = R.depsTail = t, ft(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = R.depsTail, t.nextDep = void 0, R.depsTail.nextDep = t, R.depsTail = t, R.deps === t && (R.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, lt++, this.notify(e);
	}
	notify(e) {
		Xe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ze();
		}
	}
};
function ft(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) ft(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var pt = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ Symbol(""), ht = /* @__PURE__ */ Symbol(""), gt = /* @__PURE__ */ Symbol("");
function z(e, t, n) {
	if (it && R) {
		let t = pt.get(e);
		t || pt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new dt()), r.map = t, r.key = n), r.track();
	}
}
function _t(e, t, n, r, i, a) {
	let o = pt.get(e);
	if (!o) {
		lt++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Xe(), t === "clear") o.forEach(s);
	else {
		let i = A(e), a = i && de(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === gt || !N(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(gt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(mt)), re(e) && s(o.get(ht)));
				break;
			case "delete":
				i || (s(o.get(mt)), re(e) && s(o.get(ht)));
				break;
			case "set": re(e) && s(o.get(mt));
		}
	}
	Ze();
}
function vt(e) {
	let t = /* @__PURE__ */ B(e);
	return t === e || (z(t, "iterate", gt), /* @__PURE__ */ an(e)) ? t : /* @__PURE__ */ rn(e) ? /* @__PURE__ */ nn(e) ? t.map((e) => ln(cn(e))) : t.map(ln) : t.map(cn);
}
function yt(e) {
	return z(e = /* @__PURE__ */ B(e), "iterate", gt), e;
}
function bt(e, t) {
	return /* @__PURE__ */ rn(e) ? ln(/* @__PURE__ */ nn(e) ? cn(t) : t) : cn(t);
}
var xt = {
	__proto__: null,
	[Symbol.iterator]() {
		return St(this, Symbol.iterator, (e) => bt(this, e));
	},
	concat(...e) {
		return vt(this).concat(...e.map((e) => A(e) ? vt(e) : e));
	},
	entries() {
		return St(this, "entries", (e) => (e[1] = bt(this, e[1]), e));
	},
	every(e, t) {
		return Tt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return Tt(this, "filter", e, t, (e) => e.map((e) => bt(this, e)), arguments);
	},
	find(e, t) {
		return Tt(this, "find", e, t, (e) => bt(this, e), arguments);
	},
	findIndex(e, t) {
		return Tt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return Tt(this, "findLast", e, t, (e) => bt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return Tt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return Tt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return Dt(this, "includes", e);
	},
	indexOf(...e) {
		return Dt(this, "indexOf", e);
	},
	join(e) {
		return vt(this).join(e);
	},
	lastIndexOf(...e) {
		return Dt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return Tt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Ot(this, "pop");
	},
	push(...e) {
		return Ot(this, "push", e);
	},
	reduce(e, ...t) {
		return Et(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return Et(this, "reduceRight", e, t);
	},
	shift() {
		return Ot(this, "shift");
	},
	some(e, t) {
		return Tt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Ot(this, "splice", e);
	},
	toReversed() {
		return vt(this).toReversed();
	},
	toSorted(e) {
		return vt(this).toSorted(e);
	},
	toSpliced(...e) {
		return vt(this).toSpliced(...e);
	},
	unshift(...e) {
		return Ot(this, "unshift", e);
	},
	values() {
		return St(this, "values", (e) => bt(this, e));
	}
};
function St(e, t, n) {
	let r = yt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ an(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => Ct(a.next(), n), i !== wt[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => Ct(a._next(), n);
	}
	return a;
}
function Ct(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var wt = Array.prototype;
function Tt(e, t, n, r, i, a) {
	let o = yt(e), s = o !== e && !/* @__PURE__ */ an(e), c = o[t];
	if (c !== wt[t]) {
		let t = c.apply(e, a);
		return s ? cn(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, bt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function Et(e, t, n, r) {
	let i = yt(e), a = i !== e && !/* @__PURE__ */ an(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = bt(e, t)), n.call(this, t, bt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? bt(e, c) : c;
}
function Dt(e, t, n) {
	let r = /* @__PURE__ */ B(e);
	z(r, "iterate", gt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ on(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), r[t](...n)) : i;
}
function Ot(e, t, n = []) {
	ot(), Xe();
	let r = (/* @__PURE__ */ B(e))[t].apply(e, n);
	return Ze(), st(), r;
}
var kt = /* @__PURE__ */ S("__proto__,__v_isRef,__isVue"), At = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(N));
function jt(e) {
	N(e) || (e = String(e));
	let t = /* @__PURE__ */ B(this);
	return z(t, "has", e), t.hasOwnProperty(e);
}
var Mt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Xt : Yt : i ? Jt : qt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = A(e);
		if (!r) {
			let e;
			if (a && (e = xt[t])) return e;
			if (t === "hasOwnProperty") return jt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ V(e) ? e : n);
		if ((N(t) ? At.has(t) : kt(t)) || (r || z(e, "get", t), i)) return o;
		if (/* @__PURE__ */ V(o)) {
			let e = a && de(t) ? o : o.value;
			return r && P(e) ? /* @__PURE__ */ en(e) : e;
		}
		return P(o) ? r ? /* @__PURE__ */ en(o) : /* @__PURE__ */ Qt(o) : o;
	}
}, Nt = class extends Mt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = A(e) && de(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ rn(i);
			if (!/* @__PURE__ */ an(n) && !/* @__PURE__ */ rn(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !a && /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : k(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ V(e) ? e : r);
		return e === /* @__PURE__ */ B(r) && s && (o ? ye(n, i) && _t(e, "set", t, n, i) : _t(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = k(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && _t(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return N(t) && At.has(t) || z(e, "has", t), n;
	}
	ownKeys(e) {
		return z(e, "iterate", A(e) ? "length" : mt), Reflect.ownKeys(e);
	}
}, Pt = class extends Mt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Ft = /* @__PURE__ */ new Nt(), It = /* @__PURE__ */ new Pt(), Lt = /* @__PURE__ */ new Nt(!0), Rt = (e) => e, zt = (e) => Reflect.getPrototypeOf(e);
function Bt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ B(i), o = re(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Rt : t ? ln : cn;
		return !t && z(a, "iterate", c ? ht : mt), O(Object.create(l), { next() {
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
function Vt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ht(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ B(r), a = /* @__PURE__ */ B(n);
			e || (ye(n, a) && z(i, "get", n), z(i, "get", a));
			let { has: o } = zt(i), s = t ? Rt : e ? ln : cn;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && z(/* @__PURE__ */ B(t), "iterate", mt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ B(n), i = /* @__PURE__ */ B(t);
			return e || (ye(t, i) && z(r, "has", t), z(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ B(a), s = t ? Rt : e ? ln : cn;
			return !e && z(o, "iterate", mt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return O(n, e ? {
		add: Vt("add"),
		set: Vt("set"),
		delete: Vt("delete"),
		clear: Vt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ B(this), r = zt(n), i = /* @__PURE__ */ B(e), a = !t && !/* @__PURE__ */ an(e) && !/* @__PURE__ */ rn(e) ? i : e;
			return r.has.call(n, a) || ye(e, a) && r.has.call(n, e) || ye(i, a) && r.has.call(n, i) || (n.add(a), _t(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ an(n) || /* @__PURE__ */ rn(n) || (n = /* @__PURE__ */ B(n));
			let r = /* @__PURE__ */ B(this), { has: i, get: a } = zt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ B(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ye(n, s) && _t(r, "set", e, n, s) : _t(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ B(this), { has: n, get: r } = zt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ B(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && _t(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ B(this), t = e.size !== 0, n = e.clear();
			return t && _t(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Bt(r, e, t);
	}), n;
}
function Ut(e, t) {
	let n = Ht(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(k(n, i) && i in r ? n : r, i, a);
}
var Wt = { get: /* @__PURE__ */ Ut(!1, !1) }, Gt = { get: /* @__PURE__ */ Ut(!1, !0) }, Kt = { get: /* @__PURE__ */ Ut(!0, !1) }, qt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap();
function Zt(e) {
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
function Qt(e) {
	return /* @__PURE__ */ rn(e) ? e : tn(e, !1, Ft, Wt, qt);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return tn(e, !1, Lt, Gt, Jt);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return tn(e, !0, It, Kt, Yt);
}
function tn(e, t, n, r, i) {
	if (!P(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Zt(le(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return /* @__PURE__ */ rn(e) ? /* @__PURE__ */ nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ B(t) : e;
}
function sn(e) {
	return !k(e, "__v_skip") && Object.isExtensible(e) && xe(e, "__v_skip", !0), e;
}
var cn = (e) => P(e) ? /* @__PURE__ */ Qt(e) : e, ln = (e) => P(e) ? /* @__PURE__ */ en(e) : e;
// @__NO_SIDE_EFFECTS__
function V(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function H(e) {
	return dn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function un(e) {
	return dn(e, !0);
}
function dn(e, t) {
	return /* @__PURE__ */ V(e) ? e : new fn(e, t);
}
var fn = class {
	constructor(e, t) {
		this.dep = new dt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ B(e), this._value = t ? e : cn(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ an(e) || /* @__PURE__ */ rn(e);
		e = n ? e : /* @__PURE__ */ B(e), ye(e, t) && (this._rawValue = e, this._value = n ? e : cn(e), this.dep.trigger());
	}
};
function U(e) {
	return /* @__PURE__ */ V(e) ? e.value : e;
}
var pn = {
	get: (e, t, n) => t === "__v_raw" ? e : U(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function mn(e) {
	return /* @__PURE__ */ nn(e) ? e : new Proxy(e, pn);
}
var hn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new dt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = lt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && R !== this) return Ye(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return tt(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function gn(e, t, n = !1) {
	let r, i;
	return j(e) ? r = e : (r = e.get, i = e.set), new hn(r, i, n);
}
var _n = {}, vn = /* @__PURE__ */ new WeakMap(), yn = void 0;
function bn(e, t = !1, n = yn) {
	if (n) {
		let t = vn.get(n);
		t || vn.set(n, t = []), t.push(e);
	}
}
function xn(e, t, n = C) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => i ? e : /* @__PURE__ */ an(e) || i === !1 || i === 0 ? Sn(e, 1) : Sn(e), u, d, f, p, m = !1, h = !1;
	if (/* @__PURE__ */ V(e) ? (d = () => e.value, m = /* @__PURE__ */ an(e)) : /* @__PURE__ */ nn(e) ? (d = () => l(e), m = !0) : A(e) ? (h = !0, m = e.some((e) => /* @__PURE__ */ nn(e) || /* @__PURE__ */ an(e)), d = () => e.map((e) => {
		if (/* @__PURE__ */ V(e)) return e.value;
		if (/* @__PURE__ */ nn(e)) return l(e);
		if (j(e)) return c ? c(e, 2) : e();
	})) : d = j(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (f) {
			ot();
			try {
				f();
			} finally {
				st();
			}
		}
		let t = yn;
		yn = u;
		try {
			return c ? c(e, 3, [p]) : e(p);
		} finally {
			yn = t;
		}
	} : T, t && i) {
		let e = d, t = i === !0 ? Infinity : i;
		d = () => Sn(e(), t);
	}
	let g = Ue(), _ = () => {
		u.stop(), g && g.active && te(g.effects, u);
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
	let v = h ? Array(e.length).fill(_n) : _n, y = (e) => {
		if (u.flags & 1 && (u.dirty || e)) {
			if (t) {
				let n = u.run();
				if (e || i || m || (h ? n.some((e, t) => ye(e, v[t])) : ye(n, v))) {
					let e = yn;
					ot();
					try {
						f && f(), yn = u;
						let e = [
							n,
							v === _n ? void 0 : h && v[0] === _n ? [] : v,
							p
						];
						v = n, c ? c(t, 3, e) : t(...e);
					} finally {
						yn = e, st();
					}
				}
			} else u.run();
		}
	};
	return s && s(y), u = new Ge(d), u.scheduler = o ? () => o(y, !1) : y, p = (e) => bn(e, !1, u), f = u.onStop = () => {
		let e = vn.get(u);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			vn.delete(u);
		}
	}, t ? r ? y(!0) : v = u.run() : o ? o(y.bind(null, !0), !0) : u.run(), _.pause = u.pause.bind(u), _.resume = u.resume.bind(u), _.stop = _, _;
}
function Sn(e, t = Infinity, n) {
	if (t <= 0 || !P(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ V(e)) Sn(e.value, t, n);
	else if (A(e)) for (let r = 0; r < e.length; r++) Sn(e[r], t, n);
	else if (ie(e) || re(e)) e.forEach((e) => {
		Sn(e, t, n);
	});
	else if (ue(e)) {
		for (let r in e) Sn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Sn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Cn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Tn(e, t, n);
	}
}
function wn(e, t, n, r) {
	if (j(e)) {
		let i = Cn(e, t, n, r);
		return i && oe(i) && i.catch((e) => {
			Tn(e, t, n);
		}), i;
	}
	if (A(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(wn(e[a], t, n, r));
		return i;
	}
}
function Tn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || C;
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
			ot(), Cn(a, null, 10, [
				e,
				i,
				o
			]), st();
			return;
		}
	}
	En(e, n, i, r, o);
}
function En(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var W = [], Dn = -1, On = [], kn = null, An = 0, jn = /* @__PURE__ */ Promise.resolve(), Mn = null;
function Nn(e) {
	let t = Mn || jn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Pn(e) {
	let t = Dn + 1, n = W.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = W[r], a = Hn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Fn(e) {
	if (!(e.flags & 1)) {
		let t = Hn(e), n = W[W.length - 1];
		!n || !(e.flags & 2) && t >= Hn(n) ? W.push(e) : W.splice(Pn(t), 0, e), e.flags |= 1, In();
	}
}
function In() {
	Mn ||= jn.then(Un);
}
function Ln(e) {
	if (!A(e)) kn && e.id === -1 ? kn.splice(An + 1, 0, e) : e.flags & 1 || (On.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) On.push(e[t]);
	In();
}
function Rn(e, t, n, r = Dn + 1) {
	for (; r < W.length; r++) {
		let n = W[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			W.splice(r, 1), r = e ? r - 1 : Dn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function zn(e, t, n = 0) {
	if (On.length) {
		let e = On, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < On.length; i++) {
				let a = On[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? On[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Hn(e) - Hn(t));
		if (On.length = r, kn) {
			for (let e = 0; e < i.length; e++) kn.push(i[e]);
			return;
		}
		for (kn = i, An = 0; An < kn.length; An++) {
			let e = kn[An];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		kn = null, An = 0;
	}
}
var Bn = !1;
function Vn(e, t) {
	if (Bn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(On);
	e(), Bn = !0;
	try {
		Rn(void 0, t), zn(void 0, n, t);
	} finally {
		Bn = !1;
	}
}
var Hn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Un(e) {
	try {
		for (Dn = 0; Dn < W.length; Dn++) {
			let e = W[Dn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Cn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Dn < W.length; Dn++) {
			let e = W[Dn];
			e && (e.flags &= -2);
		}
		Dn = -1, W.length = 0, zn(e), Mn = null, (W.length || On.length) && Un(e);
	}
}
var Wn = null, Gn = null;
function Kn(e) {
	let t = Wn;
	return Wn = e, Gn = e && e.type.__scopeId || null, t;
}
function qn(e, t = Wn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ni(-1);
		let i = Kn(t), a = Ai.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Ai.length; e > a; e--) ji();
			Kn(i), r._d && Ni(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function G(e, t) {
	if (Wn === null) return e;
	let n = ma(Wn), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = C] = t[e];
		i && (j(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && Sn(a), r.push({
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
function Jn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (ot(), wn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), st());
	}
}
function Yn(e, t, n = !1) {
	let r = ta();
	if (r || zr) {
		let i = zr ? zr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && j(t) ? t.call(r && r.proxy) : t;
	}
}
var Xn = /* @__PURE__ */ Symbol.for("v-scx"), Zn = () => Yn(Xn);
function Qn(e, t, n) {
	return $n(e, t, n);
}
function $n(e, t, n = C) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = O({}, n), c = t && r || !t && a !== "post", l;
	if (sa) {
		if (a === "sync") {
			let e = Zn();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = T, e.resume = T, e.pause = T, e;
		}
	}
	let u = ea;
	s.call = (e, t, n) => wn(e, u, t, n);
	let d = !1;
	a === "post" ? s.scheduler = (e) => {
		e.i = u, K(e, u && u.suspense);
	} : a !== "sync" && (d = !0, s.scheduler = (e, t) => {
		t ? e() : Fn(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let f = xn(e, t, s);
	return sa && (l ? l.push(f) : c && f()), f;
}
var er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ Symbol("_vte"), nr = (e) => e.__isTeleport, rr = (e) => e && (e.disabled || e.disabled === ""), ir = (e) => e && (e.defer || e.defer === ""), ar = (e) => typeof SVGElement < "u" && e instanceof SVGElement, or = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, sr = (e, t) => {
	let n = e && e.to;
	return M(n) ? t ? t(n) : null : n;
}, cr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = rr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = rr(e.props), r = e.target = sr(e.props, m), a = pr(r, e, h, p);
			r && (o !== "svg" && ar(r) ? o = "svg" : o !== "mathml" && or(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), fr(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (er.get(e) === t) {
					if (er.delete(e), rr(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), fr(e, !0);
					}
					x(e);
				}
			};
			er.set(e, t), K(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), ir(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), fr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = er.get(e);
			if (u) {
				u.flags |= 8, er.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = rr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || ar(p) ? o = "svg" : (o === "mathml" || or(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), bi(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : lr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = sr(t.props, m);
				e && (t.target = e, lr(t, e, null, l, 0));
			} else g && lr(t, p, h, l, 1);
			fr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = rr(f), m = a || !p, h = er.get(e);
		if (h && (h.flags |= 8, er.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: lr,
	hydrate: ur
};
function lr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !er.has(e) && (!d || rr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function ur(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
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
	let m = t.target = sr(t.props, c), h = rr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || pr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || pr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), fr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var dr = cr;
function fr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function pr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[tr] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var mr = /* @__PURE__ */ Symbol("_leaveCb");
function hr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Oi) {
			t = n;
			break;
		}
	}
	return t;
}
function gr(e) {
	if (!Tr(e)) return nr(e.type) && e.children ? hr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && j(n.default)) return n.default();
	}
}
function _r(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		_r(nr(n.type) && gr(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === q && A(e.children)) {
		let n = Gr(e.children, !1);
		n && _r(n, t);
	}
}
function vr(e) {
	if (e.component) return vr(e.component.subTree);
	if (e.type === q) {
		let t = A(e.children) && Gr(e.children, !1);
		return t ? vr(t) : void 0;
	}
	if (e.type !== Oi) return e;
}
function yr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function br(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var xr = /* @__PURE__ */ new WeakMap();
function Sr(e, t, n, r, i = !1) {
	if (A(e)) {
		e.forEach((e, a) => Sr(e, t && (A(t) ? t[a] : t), n, r, i));
		return;
	}
	if (wr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Sr(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? ma(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === C ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ B(d), p = d === C ? E : (e) => !br(u, e) && k(f, e), m = (e, t) => !(t && br(u, t));
	if (l != null && l !== c) {
		if (Cr(t), M(l)) u[l] = null, p(l) && (d[l] = null);
		else if (/* @__PURE__ */ V(l)) {
			let e = t;
			m(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (j(c)) Cn(c, s, 12, [o, u]);
	else {
		let t = M(c), r = /* @__PURE__ */ V(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? p(c) ? d[c] : u[c] : m(c) || !e.k ? c.value : u[e.k];
					if (i) A(n) && te(n, a);
					else if (A(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], p(c) && (d[c] = u[c]);
					else {
						let t = [a];
						m(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, p(c) && (d[c] = o)) : r && (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), xr.delete(e);
				};
				t.id = -1, xr.set(e, t), K(t, n);
			} else Cr(e), s();
		}
	}
}
function Cr(e) {
	let t = xr.get(e);
	t && (t.flags |= 8, xr.delete(e));
}
we().requestIdleCallback, we().cancelIdleCallback;
var wr = (e) => !!e.type.__asyncLoader, Tr = (e) => e.type.__isKeepAlive;
function Er(e, t, n = ea, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			ot();
			let i = ia(n), a = wn(t, n, e, r);
			return i(), st(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Dr = (e) => (t, n = ea) => {
	sa && e !== "sp" || Er(e, (...e) => t(...e), n);
}, Or = Dr("m"), kr = Dr("bum"), Ar = /* @__PURE__ */ Symbol.for("v-ndc");
function jr(e, t, n, r) {
	let i, a = n && n[r], o = A(e);
	if (o || M(e)) {
		let n = o && /* @__PURE__ */ nn(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ an(e), s = /* @__PURE__ */ rn(e), e = yt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? ln(cn(e[n])) : cn(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (!Number.isInteger(e) || e < 0) i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (P(e)) {
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
var Mr = (e) => e ? oa(e) ? ma(e) : Mr(e.parent) : null, Nr = /* @__PURE__ */ O(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Mr(e.parent),
	$root: (e) => Mr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => e.type,
	$forceUpdate: (e) => e.f ||= () => {
		Fn(e.update);
	},
	$nextTick: (e) => e.n ||= Nn.bind(e.proxy),
	$watch: (e) => T
}), Pr = (e, t) => e !== C && !e.__isScriptSetup && k(e, t), Fr = {
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
			else if (Pr(r, t)) return o[t] = 1, r[t];
			else if (k(a, t)) return o[t] = 3, a[t];
			else if (n !== C && k(n, t)) return o[t] = 4, n[t];
			else o[t] = 0;
		}
		let l = Nr[t], u, d;
		if (l) return t === "$attrs" && z(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== C && k(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, k(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Pr(i, t) ? (i[t] = n, !0) : k(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || Pr(t, s) || k(a, s) || k(r, s) || k(Nr, s) || k(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? k(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Ir() {
	return {
		app: null,
		config: {
			isNativeTag: E,
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
var Lr = 0;
function Rr(e, t) {
	return function(n, r = null) {
		j(n) || (n = O({}, n)), r != null && !P(r) && (r = null);
		let i = Ir(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Lr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ga,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && j(e.install) ? (a.add(e), e.install(c, ...t)) : j(e) && (a.add(e), e(c, ...t))), c;
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
					let u = c._ceVNode || Bi(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, ma(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (wn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = zr;
				zr = c;
				try {
					return e();
				} finally {
					zr = t;
				}
			}
		};
		return c;
	};
}
var zr = null, Br = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${F(t)}Modifiers`] || e[`${ge(t)}Modifiers`];
function Vr(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || C, i = n, a = t.startsWith("update:"), o = a && Br(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => M(e) ? e.trim() : e)), o.number && (i = i.map(Se)));
	let s, c = r[s = ve(t)] || r[s = ve(F(t))];
	!c && a && (c = r[s = ve(ge(t))]), c && wn(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, wn(l, e, 6, i);
	}
}
function Hr(e, t, n = !1) {
	let r = t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {};
	return a ? (A(a) ? a.forEach((e) => o[e] = null) : O(o, a), P(e) && r.set(e, o), o) : (P(e) && r.set(e, null), null);
}
function Ur(e, t) {
	return !e || !D(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), k(e, t[0].toLowerCase() + t.slice(1)) || k(e, ge(t)) || k(e, t));
}
function Wr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, g = Kn(e), _, v;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			_ = Gi(l.call(t, e, u, d, p, f, m)), v = s;
		} else {
			let e = t;
			_ = Gi(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), v = t.props ? s : Kr(s);
		}
	} catch (t) {
		Ai.length = 0, Tn(t, e, 1), _ = Bi(Oi);
	}
	let y = _;
	if (v && h !== !1) {
		let e = Object.keys(v), { shapeFlag: t } = y;
		e.length && t & 7 && (a && e.some(ee) && (v = qr(v, a)), y = Ui(y, v, !1, !0));
	}
	return n.dirs && (y = Ui(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && _r(nr(y.type) && gr(y) || y, n.transition), _ = y, Kn(g), _;
}
function Gr(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Ii(r)) {
			if (r.type !== Oi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Kr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || D(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, qr = (e, t) => {
	let n = {};
	for (let r in e) ee(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Jr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Yr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Xr(o, r, n) && !Ur(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Yr(r, o, l) : !!o;
	return !1;
}
function Yr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!k(e, a) || Xr(t, e, a) && !Ur(n, a)) return !0;
	}
	return !1;
}
function Xr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && P(r) && P(i) ? !Le(r, i) : r !== i;
}
function Zr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Qr = {}, $r = () => Object.create(Qr), ei = (e) => Object.getPrototypeOf(e) === Qr;
function ti(e, t, n, r = !1) {
	let i = {}, a = $r();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ri(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ $t(i) : e.type.props ? i : a, e.attrs = a;
}
function ni(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ B(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Ur(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (k(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = F(o);
						i[t] = ii(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ri(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (k(t, a) || (r = ge(a)) !== a && k(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ii(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && k(t, e) || (delete a[e], l = !0);
	}
	l && _t(e.attrs, "set", "");
}
function ri(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (fe(c)) continue;
		let l = t[c], u;
		i && k(i, u = F(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : Ur(e.emitsOptions, c) || c in r && l === r[c] || (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ B(n), r = s || C;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = ii(i, t, s, r[s], e, !k(r, s));
		}
	}
	return o;
}
function ii(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = k(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && j(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ia(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ge(n)) && (r = !0));
	}
	return r;
}
function ai(e, t, n = !1) {
	let r = t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [];
	if (!a) return P(e) && r.set(e, w), w;
	if (A(a)) for (let e = 0; e < a.length; e++) {
		let t = F(a[e]);
		oi(t) && (o[t] = C);
	}
	else if (a) for (let e in a) {
		let t = F(e);
		if (oi(t)) {
			let n = a[e], r = o[t] = A(n) || j(n) ? { type: n } : O({}, n), i = r.type, c = !1, l = !0;
			if (A(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = j(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				}
				n === "String" && (l = !1);
			}
			else c = j(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || k(r, "default")) && s.push(t);
		}
	}
	let c = [o, s];
	return P(e) && r.set(e, c), c;
}
function oi(e) {
	return e[0] !== "$" && !fe(e);
}
var si = (e) => e === "_" || e === "_ctx" || e === "$stable", ci = (e) => A(e) ? e.map(Gi) : [Gi(e)], li = (e, t, n) => {
	if (t._n) return t;
	let r = qn((...e) => ci(t(...e)), n);
	return r._c = !1, r;
}, ui = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (si(n)) continue;
		let i = e[n];
		if (j(i)) t[n] = li(n, i, r);
		else if (i != null) {
			let e = ci(i);
			t[n] = () => e;
		}
	}
}, di = (e, t) => {
	let n = ci(t);
	e.slots.default = () => n;
}, fi = (e, t, n) => {
	for (let r in t) (n || !si(r)) && (e[r] = t[r]);
}, pi = (e, t, n) => {
	let r = e.slots = $r();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (fi(r, t, n), n && xe(r, "_", e, !0)) : ui(t, r);
	} else t && di(e, t);
}, mi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = C;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : fi(i, t, n) : (a = !t.$stable, ui(t, i)), o = t;
	} else t && (di(e, t), o = { default: 1 });
	if (a) for (let e in i) !si(e) && o[e] == null && delete i[e];
}, K = Ei;
function hi(e) {
	return gi(e);
}
function gi(e, t) {
	let n = we();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p = T, insertStaticContent: m } = e, h = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Li(e, t) && (r = de(e), oe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === w && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Di:
				g(e, t, n, r);
				break;
			case Oi:
				_(e, t, n, r);
				break;
			case ki:
				e ?? v(t, n, r, o);
				break;
			case q:
				ne(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? x(e, t, n, r, i, a, o, s, c) : d & 6 ? k(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, me);
		}
		u != null && i ? Sr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Sr(e.ref, null, a, e, !0);
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
	}, x = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) S(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ee(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, S = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && D(e.children, f, null, i, s, _i(e, c), l, d), _ && Jn(e, null, i, "created"), E(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !fe(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && Yi(p, i, e);
		}
		_ && Jn(e, null, i, "beforeMount");
		let v = yi(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && K(() => {
			try {
				p && Yi(p, i, e), v && g.enter(f), _ && Jn(e, null, i, "mounted");
			} finally {}
		}, s);
	}, E = (e, t, n, r, i) => {
		if (n && p(e, n), r) for (let t = 0; t < r.length; t++) p(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ti(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Ki(e[l]) : Gi(e[l]);
			h(null, c, t, n, r, i, a, o, s);
		}
	}, ee = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: d, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || C, m = t.props || C, h;
		if (n && vi(n, !1), (h = m.onVnodeBeforeUpdate) && Yi(h, n, t, e), f && Jn(t, e, n, "beforeUpdate"), n && vi(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (l = 0, s = !1, d = null), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && u(c, ""), d ? O(e.dynamicChildren, d, c, n, r, _i(t, i), o) : s || j(e, t, c, null, n, r, _i(t, i), o, !1), l > 0) {
			if (l & 16) te(c, p, m, n, i);
			else if (l & 2 && p.class !== m.class && a(c, "class", null, m.class, i), l & 4 && a(c, "style", p.style, m.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = p[r], s = m[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && u(c, t.children);
		} else !s && d == null && te(c, p, m, n, i);
		((h = m.onVnodeUpdated) || f) && K(() => {
			h && Yi(h, n, t, e), f && Jn(t, e, n, "updated");
		}, r);
	}, O = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || wi(c), f = u && (c.type === q || !Li(c, l) || c.shapeFlag & 198) ? d(u) : n;
			h(c, l, f, null, r, i, a, o, !0);
		}
	}, te = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== C) for (let o in t) !fe(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (fe(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, ne = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), D(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (O(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && bi(e, t, !0)) : j(e, t, n, f, a, o, c, l, u);
	}, k = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : A(t, n, r, i, a, o, c) : re(e, t, c);
	}, A = (e, t, n, r, i, a, o) => {
		let s = e.component = $i(e, r, i);
		if (Tr(e) && (s.ctx.renderer = me), ca(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ie, o, a), !e.el) {
				let r = s.subTree = Bi(Oi);
				_(null, r, t, n), e.placeholder = r.el;
			}
		} else ie(s, e, t, n, i, a, o);
	}, re = (e, t, n) => {
		let r = t.component = e.component;
		if (Jr(e, t, n)) {
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
					let n = Si(e);
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
				vi(e, !1), t ? (t.el = c.el, ae(e, t, o)) : t = c, n && be(n), (f = t.props && t.props.onVnodeBeforeUpdate) && Yi(f, s, t, c), vi(e, !0);
				let p = Wr(e), m = e.subTree;
				e.subTree = p, h(m, p, d(m.el), de(m), e, i, a), t.el = p.el, u === null && Zr(e, p.el), r && K(r, i), (f = t.props && t.props.onVnodeUpdated) && K(() => Yi(f, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = wr(t);
				if (vi(e, !1), l && be(l), !m && (o = c && c.onVnodeBeforeMount) && Yi(o, d, t), vi(e, !0), s && he) {
					let t = () => {
						e.subTree = Wr(e), he(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Wr(e);
					h(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && K(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					K(() => Yi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && wr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && K(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ge(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Fn(u), vi(e, !0), l();
	}, ae = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ni(e, t.props, r, n), mi(e, t.children, n), ot(), Rn(e), st();
	}, j = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				N(l, f, n, r, i, a, o, s, c);
				return;
			}
			if (p & 256) {
				M(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && ue(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? N(l, f, n, r, i, a, o, s, c) : ue(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && D(f, n, r, i, a, o, s, c));
	}, M = (e, t, n, r, i, a, o, s, c) => {
		e ||= w, t ||= w;
		let l = e.length, u = t.length, d = Math.min(l, u), f = 0;
		for (; f < d; f++) {
			let r = t[f] = c ? Ki(t[f]) : Gi(t[f]);
			h(e[f], r, n, null, i, a, o, s, c);
		}
		l > u ? ue(e, i, a, !0, !1, d) : D(t, n, r, i, a, o, s, c, d);
	}, N = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, f = u - 1;
		for (; l <= d && l <= f;) {
			let r = e[l], u = t[l] = c ? Ki(t[l]) : Gi(t[l]);
			if (Li(r, u)) h(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= f;) {
			let r = e[d], l = t[f] = c ? Ki(t[f]) : Gi(t[f]);
			if (Li(r, l)) h(r, l, n, null, i, a, o, s, c);
			else break;
			d--, f--;
		}
		if (l > d) {
			if (l <= f) {
				let e = f + 1, d = e < u ? t[e].el : r;
				for (; l <= f;) h(null, t[l] = c ? Ki(t[l]) : Gi(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > f) for (; l <= d;) oe(e[l], i, a, !0), l++;
		else {
			let p = l, m = l, g = /* @__PURE__ */ new Map();
			for (l = m; l <= f; l++) {
				let e = t[l] = c ? Ki(t[l]) : Gi(t[l]);
				e.key != null && g.set(e.key, l);
			}
			let _, v = 0, y = f - m + 1, b = !1, x = 0, S = Array(y);
			for (l = 0; l < y; l++) S[l] = 0;
			for (l = p; l <= d; l++) {
				let r = e[l];
				if (v >= y) {
					oe(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = g.get(r.key);
				else for (_ = m; _ <= f; _++) if (S[_ - m] === 0 && Li(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? oe(r, i, a, !0) : (S[u - m] = l + 1, u >= x ? x = u : b = !0, h(r, t[u], n, null, i, a, o, s, c), v++);
			}
			let C = b ? xi(S) : w;
			for (_ = C.length - 1, l = y - 1; l >= 0; l--) {
				let e = m + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || wi(f) : r;
				S[l] === 0 ? h(null, d, n, p, i, a, o, s, c) : b && (_ < 0 || l !== C[_] ? P(d, n, p, 2) : _--);
			}
		}
	}, P = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) P(e.component.subTree, t, n, a);
		else if (d & 128) e.suspense.move(t, n, a);
		else if (d & 64) c.move(e, t, n, me);
		else if (c === q) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) P(u[e], t, n, a);
			r(e.anchor, t, n);
		} else if (c === ki) y(e, t, n);
		else if (a !== 2 && d & 1 && l) {
			if (a === 0) l.persisted && !s[mr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), K(() => l.enter(s), o));
			else {
				let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? i(s) : r(s, t, n);
				}, d = () => {
					let e = s._isLeaving || !!s[mr];
					s._isLeaving && s[mr](!0), l.persisted && !e ? u() : a(s, () => {
						u(), c && c();
					});
				};
				o ? o(s, u, d) : d();
			}
		} else r(s, t, n);
	}, oe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (ot(), Sr(s, null, n, e, !0), st()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !wr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Yi(_, t, e), u & 6) le(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Jn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, me, r) : l && !l.hasOnce && (a !== q || d > 0 && d & 64) ? ue(l, t, n, !1, !0) : (a === q && d & 384 || !i && u & 16) && ue(c, t, n), r && se(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && K(() => {
			_ && Yi(_, t, e), h && Jn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, se = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e, o = t === q;
		if (o && !a) {
			ce(n, r);
			return;
		}
		if (t === ki) {
			b(e), a && !a.persisted && a.afterLeave && a.afterLeave();
			return;
		}
		let s = o ? vr(e) : e, c = () => {
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
		Ci(c), Ci(l), r && be(r), i.stop(), a ? (a.flags |= 8, oe(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, oe(o, e, t, n)), s && K(s, t), K(() => {
			e.isUnmounted = !0;
		}, t);
	}, ue = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) oe(e[o], t, n, r, i);
	}, de = (e) => {
		if (e.shapeFlag & 6) return de(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = f(e.anchor || e.el), n = t && t[tr];
		return n ? f(n) : t;
	}, pe = (e, t, n) => {
		Vn(() => {
			e == null ? t._vnode && oe(t._vnode, null, null, !0) : h(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Qi());
	}, me = {
		p: h,
		um: oe,
		m: P,
		r: se,
		mt: A,
		mc: D,
		pc: j,
		pbc: O,
		n: de,
		o: e
	}, F, he;
	return t && ([F, he] = t(me)), {
		render: pe,
		hydrate: F,
		createApp: Rr(pe, F)
	};
}
function _i({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function vi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function yi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function bi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (A(r) && A(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ki(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && bi(t, a)), a.type === Di && (a.patchFlag === -1 && (a = i[e] = Ki(a)), a.el = t.el), a.type === Oi && !a.el && (a.el = t.el);
	}
}
function xi(e) {
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
function Si(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Si(t);
}
function Ci(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function wi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? wi(t.subTree) : null;
}
var Ti = (e) => e.__isSuspense;
function Ei(e, t) {
	t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : Ln(e);
}
var q = /* @__PURE__ */ Symbol.for("v-fgt"), Di = /* @__PURE__ */ Symbol.for("v-txt"), Oi = /* @__PURE__ */ Symbol.for("v-cmt"), ki = /* @__PURE__ */ Symbol.for("v-stc"), Ai = [], J = null;
function Y(e = !1) {
	Ai.push(J = e ? null : []);
}
function ji() {
	Ai.pop(), J = Ai[Ai.length - 1] || null;
}
var Mi = 1;
function Ni(e, t = !1) {
	Mi += e, e < 0 && J && t && (J.hasOnce = !0);
}
function Pi(e) {
	return e.dynamicChildren = Mi > 0 ? J || w : null, ji(), Mi > 0 && J && J.push(e), e;
}
function X(e, t, n, r, i, a) {
	return Pi(Z(e, t, n, r, i, a, !0));
}
function Fi(e, t, n, r, i) {
	return Pi(Bi(e, t, n, r, i, !0));
}
function Ii(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Li(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Ri = ({ key: e }) => e ?? null, zi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : M(e) || /* @__PURE__ */ V(e) || j(e) ? {
	i: Wn,
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
		key: t && Ri(t),
		ref: t && zi(t),
		scopeId: Gn,
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
		ctx: Wn
	};
	return s ? (qi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= M(n) ? 8 : 16), Mi > 0 && !o && J && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && J.push(c), c;
}
var Bi = Vi;
function Vi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Ar || (e = Oi), Ii(e)) {
		let r = Ui(e, t, !0);
		return n && qi(r, n), Mi > 0 && !a && J && (r.shapeFlag & 6 ? J[J.indexOf(e)] = r : J.push(r)), r.patchFlag = -2, r;
	}
	if (ha(e) && (e = e.__vccOpts), t) {
		t = Hi(t);
		let { class: e, style: n } = t;
		e && !M(e) && (t.class = Ae(e)), P(n) && (/* @__PURE__ */ on(n) && !A(n) && (n = O({}, n)), t.style = Te(n));
	}
	let o = M(e) ? 1 : Ti(e) ? 128 : nr(e) ? 64 : P(e) ? 4 : j(e) ? 2 : 0;
	return Z(e, t, n, r, i, o, a, !0);
}
function Hi(e) {
	return e ? /* @__PURE__ */ on(e) || ei(e) ? O({}, e) : e : null;
}
function Ui(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ji(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ri(l),
		ref: t && t.ref ? n && a ? A(a) ? a.concat(zi(t)) : [a, zi(t)] : zi(t) : a,
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
		ssContent: e.ssContent && Ui(e.ssContent),
		ssFallback: e.ssFallback && Ui(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && _r(u, c.clone(u)), u;
}
function Wi(e = " ", t = 0) {
	return Bi(Di, null, e, t);
}
function Q(e = "", t = !1) {
	return t ? (Y(), Fi(Oi, null, e)) : Bi(Oi, null, e);
}
function Gi(e) {
	return e == null || typeof e == "boolean" ? Bi(Oi) : A(e) ? Bi(q, null, e.slice()) : Ii(e) ? Ki(e) : Bi(Di, null, String(e));
}
function Ki(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ui(e);
}
function qi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (A(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), qi(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !ei(t) ? t._ctx = Wn : r === 3 && Wn && (Wn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (j(t)) {
		if (r & 65) {
			qi(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Wn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Wi(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Ji(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = Ae([t.class, r.class]));
		else if (e === "style") t.style = Te([t.style, r.style]);
		else if (D(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(A(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !ee(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Yi(e, t, n, r = null) {
	wn(e, t, 7, [n, r]);
}
var Xi = Ir(), Zi = 0;
function Qi() {
	return Zi;
}
function $i(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || Xi, a = {
		uid: Zi++,
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
		scope: new He(!0),
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
		propsOptions: ai(r, i),
		emitsOptions: Hr(r, i),
		emit: null,
		emitted: null,
		propsDefaults: C,
		inheritAttrs: r.inheritAttrs,
		ctx: C,
		data: C,
		props: C,
		attrs: C,
		slots: C,
		refs: C,
		setupState: C,
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Vr.bind(null, a), e.ce && e.ce(a), a;
}
var ea = null, ta = () => ea || Wn, na, ra;
{
	let e = we(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	na = t("__VUE_INSTANCE_SETTERS__", (e) => ea = e), ra = t("__VUE_SSR_SETTERS__", (e) => sa = e);
}
var ia = (e) => {
	let t = ea;
	return na(e), e.scope.on(), () => {
		e.scope.off(), na(t);
	};
}, aa = () => {
	ea && ea.scope.off(), na(null);
};
function oa(e) {
	return e.vnode.shapeFlag & 4;
}
var sa = !1;
function ca(e, t = !1, n = !1) {
	t && ra(t);
	let { props: r, children: i } = e.vnode, a = oa(e);
	ti(e, r, a, t), pi(e, i, n || t);
	let o = a ? la(e, t) : void 0;
	return t && ra(!1), o;
}
function la(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fr);
	let { setup: r } = n;
	if (r) {
		ot();
		let n = e.setupContext = r.length > 1 ? pa(e) : null, i = ia(e), a = Cn(r, e, 0, [e.props, n]), o = oe(a);
		if (st(), i(), (o || e.sp) && !wr(e) && yr(e), o) {
			if (a.then(aa, aa), t) return a.then((n) => {
				ra(!0);
				try {
					ua(e, n, t);
				} finally {
					ra(!1);
				}
			}).catch((t) => {
				Tn(t, e, 0);
			});
			e.asyncDep = a;
		} else ua(e, a, t);
	} else da(e, t);
}
function ua(e, t, n) {
	j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : P(t) && (e.setupState = mn(t)), da(e, n);
}
function da(e, t, n) {
	let r = e.type;
	e.render ||= r.render || T;
}
var fa = { get(e, t) {
	return z(e, "get", ""), e[t];
} };
function pa(e) {
	return {
		attrs: new Proxy(e.attrs, fa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ma(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(mn(sn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Nr) return Nr[n](e);
		},
		has(e, t) {
			return t in e || t in Nr;
		}
	}) : e.proxy;
}
function ha(e) {
	return j(e) && "__vccOpts" in e;
}
var $ = (e, t) => /* @__PURE__ */ gn(e, t, sa), ga = "3.5.44", _a = void 0, va = typeof window < "u" && window.trustedTypes;
if (va) try {
	_a = /* @__PURE__ */ va.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ya = _a ? (e) => _a.createHTML(e) : (e) => e, ba = "http://www.w3.org/2000/svg", xa = "http://www.w3.org/1998/Math/MathML", Sa = typeof document < "u" ? document : null, Ca = Sa && /* @__PURE__ */ Sa.createElement("template"), wa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Sa.createElementNS(ba, e) : t === "mathml" ? Sa.createElementNS(xa, e) : n ? Sa.createElement(e, { is: n }) : Sa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Sa.createTextNode(e),
	createComment: (e) => Sa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Sa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Ca.innerHTML = ya(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ca.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ta = /* @__PURE__ */ Symbol("_vtc");
function Ea(e, t, n) {
	let r = e[Ta];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Da = /* @__PURE__ */ Symbol("_vod"), Oa = /* @__PURE__ */ Symbol("_vsh"), ka = /* @__PURE__ */ Symbol(""), Aa = /(?:^|;)\s*display\s*:/;
function ja(e, t, n) {
	let r = e.style, i = M(n), a = !1;
	if (n && !i) {
		if (t) {
			if (M(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Na(r, t, "");
			}
			else for (let e in t) n[e] ?? Na(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Na(r, i, "") : La(e, i, !M(t) && t ? t[i] : void 0, o) || Na(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[ka];
			e && (n += ";" + e), r.cssText = n, a = Aa.test(n);
		}
	} else t && e.removeAttribute("style");
	Da in e && (i && t === n || (e[Da] = a ? r.display : ""), e[Oa] && (r.display = "none"));
}
var Ma = /\s*!important$/;
function Na(e, t, n) {
	if (A(n)) n.forEach((n) => Na(e, t, n));
	else if (n ??= "", t.startsWith("--")) Ma.test(n) ? e.setProperty(t, n.replace(Ma, ""), "important") : e.setProperty(t, n);
	else {
		let r = Ia(e, t);
		Ma.test(n) ? e.setProperty(ge(r), n.replace(Ma, ""), "important") : e[r] = n;
	}
}
var Pa = [
	"Webkit",
	"Moz",
	"ms"
], Fa = {};
function Ia(e, t) {
	let n = Fa[t];
	if (n) return n;
	let r = F(t);
	if (r !== "filter" && r in e) return Fa[t] = r;
	r = _e(r);
	for (let n = 0; n < Pa.length; n++) {
		let i = Pa[n] + r;
		if (i in e) return Fa[t] = i;
	}
	return t;
}
function La(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && M(r) && n === r;
}
var Ra = "http://www.w3.org/1999/xlink";
function za(e, t, n, r, i, a = je(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ra, t.slice(6, t.length)) : e.setAttributeNS(Ra, t, n) : n == null || a && !Me(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : N(n) ? String(n) : n);
}
function Ba(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ya(n) : n);
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
		r === "boolean" ? n = Me(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Va(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ha(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ua = /* @__PURE__ */ Symbol("_vei");
function Wa(e, t, n, r, i = null) {
	let a = e[Ua] || (e[Ua] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = qa(t);
		r ? Va(e, n, a[t] = Za(r, i), s) : o && (Ha(e, n, o, s), a[t] = void 0);
	}
}
var Ga = /(Once|Passive|Capture)$/, Ka = /^on:?(?:Once|Passive|Capture)$/;
function qa(e) {
	let t, n;
	for (; (n = e.match(Ga)) && !Ka.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : ge(e.slice(2)), t];
}
var Ja = 0, Ya = /* @__PURE__ */ Promise.resolve(), Xa = () => Ja ||= (Ya.then(() => Ja = 0), Date.now());
function Za(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (A(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && wn(e, t, 5, a);
			}
		} else wn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Xa(), n;
}
var Qa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $a = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ea(e, r, o) : t === "style" ? ja(e, n, r) : D(t) ? ee(t) || Wa(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : eo(e, t, r, o)) ? (Ba(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || za(e, t, r, o, a, t !== "value")) : e._isVueCE && (to(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !M(r))) ? Ba(e, F(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), za(e, t, r, o));
};
function eo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Qa(t) && j(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Qa(t) && M(n) ? !1 : t in e;
}
function to(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = F(t);
	return Array.isArray(n) ? n.some((e) => F(e) === r) : Object.keys(n).some((e) => F(e) === r);
}
var no = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return A(t) ? (e) => be(t, e) : t;
};
function ro(e) {
	e.target.composing = !0;
}
function io(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var ao = /* @__PURE__ */ Symbol("_assign"), oo = /* @__PURE__ */ Symbol("_initialValue");
function so(e, t, n) {
	return t && (e = e.trim()), n && (e = Se(e)), e;
}
var co = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[oo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[oo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[ao] = no(i);
		let a = r || i.props && i.props.type === "number";
		Va(e, t ? "change" : "input", (t) => {
			t.target.composing || e[ao](so(e.value, n, a));
		}), (n || a) && Va(e, "change", () => {
			e.value = so(e.value, n, a);
		}), t || (Va(e, "compositionstart", ro), Va(e, "compositionend", io), Va(e, "change", io));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[oo];
		delete e[oo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[ao](so(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[ao] = no(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? Se(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, lo = {
	deep: !0,
	created(e, t, n) {
		e[ao] = no(n), Va(e, "change", () => {
			let t = e._modelValue, n = ho(e), r = e.checked, i = e[ao];
			if (A(t)) {
				let e = Re(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (ie(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(go(e, r));
		});
	},
	mounted: uo,
	beforeUpdate(e, t, n) {
		e[ao] = no(n), uo(e, t, n);
	}
};
function uo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (A(t)) i = Re(t, r.props.value) > -1;
	else if (ie(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Le(t, go(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var fo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Va(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? Se(ho(e)) : ho(e)), r = e.multiple, i = r ? ie(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? A(i) ? t.slice() : t : i];
			try {
				e[ao](i);
			} finally {
				Nn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[ao] = no(r);
	},
	mounted(e, { value: t }) {
		mo(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[ao] = no(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, n && n[0] === e.multiple && po(t, n[1], n[0]) || mo(e, t);
	}
};
function po(e, t, n) {
	if (!n || A(e)) return Le(e, t);
	if (ie(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function mo(e, t) {
	let n = e.multiple, r = A(t);
	if (!n || r || ie(t)) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = ho(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : Re(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (Le(ho(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function ho(e) {
	return "_value" in e ? e._value : e.value;
}
function go(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var _o = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], vo = {
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
	exact: (e, t) => _o.some((n) => e[`${n}Key`] && !t.includes(n))
}, yo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = vo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, bo = /* @__PURE__ */ O({ patchProp: $a }, wa), xo;
function So() {
	return xo ||= hi(bo);
}
var Co = ((...e) => {
	let t = So().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = To(e);
		if (!r) return;
		let i = t._component;
		j(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, wo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function wo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function To(e) {
	return M(e) ? document.querySelector(e) : e;
}
// src/catalogue/ResourceCard.vue
var Eo = ["aria-busy"], Do = [
	"title",
	"aria-label",
	"disabled"
], Oo = ["src", "alt"], ko = [
	"href",
	"title",
	"aria-label"
], Ao = ["src", "alt"], jo = { class: "card-head" }, Mo = { class: "card-actions" }, No = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled"
], Po = [
	"title",
	"aria-label",
	"disabled"
], Fo = [
	"title",
	"aria-label",
	"disabled"
], Io = [
	"title",
	"aria-label",
	"disabled"
], Lo = { class: "meta" }, Ro = {
	key: 0,
	class: "tag submission"
}, zo = { class: "tag" }, Bo = { class: "tag lang" }, Vo = {
	key: 1,
	class: "tag format"
}, Ho = {
	key: 2,
	class: "tag flash"
}, Uo = ["aria-label"], Wo = { class: "rating-label" }, Go = {
	key: 0,
	class: "rating-summary"
}, Ko = { class: "stars" }, qo = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled",
	"onClick"
], Jo = { class: "note" }, Yo = {
	key: 2,
	class: "health"
}, Xo = {
	key: 3,
	class: "note submission-by"
}, Zo = ["role"], Qo = {
	__name: "ResourceCard",
	props: {
		game: Object,
		context: Object,
		onAction: Function
	},
	setup(r) {
		let a = r, l = /* @__PURE__ */ H(!1), u = /* @__PURE__ */ H(""), d = /* @__PURE__ */ H(!1), p = /* @__PURE__ */ H(!1), _ = $(() => o(a.game)), v = $(() => {
			a.context;
			let e = t();
			return (e === "va" || e === "ca" ? a.game.title_ca : e === "en" ? a.game.title_en : "") || a.game.title || n("no_title");
		}), y = $(() => {
			a.context;
			let e = t();
			return (e === "va" || e === "ca" ? a.game.notes_ca : e === "en" ? a.game.notes_en : "") || a.game.notes || n("no_notes");
		}), b = $(() => a.context.favorites.has(_.value)), x = $(() => a.context.userRatings.get(_.value) || 0), S = $(() => a.context.ratingSummary.get(_.value)), C = $(() => a.context.brokenSummary.get(_.value)), w = $(() => a.context.userReports.has(_.value)), T = $(() => a.context.backendMode === "remote"), E = $(() => a.context.reportByUrl.get(c(a.game.url))), D = $(() => E.value ? E.value.ok ? "" : n(E.value.severity === "warning" ? "link_warn" : "link_error", E.value.error || `HTTP ${E.value.httpStatus || "error"}`) : n("not_checked")), ee = $(() => te(a.game.image) || f), O = $(() => te(a.game.url));
		function te(e) {
			if (!e) return "";
			try {
				let t = new URL(e, window.location.href);
				return ["http:", "https:"].includes(t.protocol) && !t.username && !t.password ? t.href : "";
			} catch {
				return "";
			}
		}
		let ne = $(() => a.game.flash || [
			"jclic",
			"eduhoot",
			"llibres"
		].includes(a.game.format));
		function k() {
			O.value && (a.game.flash ? m(O.value, a.game.title) : a.game.format === "jclic" ? h(O.value, a.game.title) : g(O.value, a.game.title, a.game.format === "llibres"));
		}
		async function A(e, t) {
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
			class: Ae(["card", {
				submission: r.game._isSubmission,
				broken: E.value && !E.value.ok
			}]),
			"aria-busy": l.value
		}, [
			ne.value ? (Y(), X("button", {
				key: 0,
				type: "button",
				class: "card-image-link",
				title: U(n)(r.game.flash ? "play_ruffle" : "open_game"),
				"aria-label": U(n)(r.game.flash ? "play_ruffle" : "open_game"),
				disabled: !O.value,
				onClick: k
			}, [Z("img", {
				class: "card-image",
				src: p.value ? U(f) : ee.value,
				alt: r.game.title || U(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: a[0] ||= (e) => p.value = !0
			}, null, 40, Oo)], 8, Do)) : (Y(), X("a", {
				key: 1,
				class: "card-image-link",
				href: O.value || void 0,
				target: "_blank",
				rel: "noreferrer noopener",
				title: U(n)("open_game"),
				"aria-label": U(n)("open_game")
			}, [Z("img", {
				class: "card-image",
				src: p.value ? U(f) : ee.value,
				alt: r.game.title || U(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: a[1] ||= (e) => p.value = !0
			}, null, 40, Ao)], 8, ko)),
			Z("div", jo, [Z("h3", null, I(v.value), 1), Z("div", Mo, [
				Z("button", {
					type: "button",
					class: Ae(["fav-btn", { active: b.value }]),
					title: U(n)(b.value ? "favorite_remove" : "favorite_add"),
					"aria-label": U(n)(b.value ? "favorite_remove" : "favorite_add"),
					"aria-pressed": b.value,
					disabled: l.value,
					onClick: a[2] ||= (e) => A("favorite")
				}, "❤", 10, No),
				T.value ? (Y(), X("button", {
					key: 0,
					type: "button",
					class: Ae(["report-btn", { active: w.value }]),
					title: U(n)(w.value ? "report_broken_active" : "report_broken"),
					"aria-label": U(n)(w.value ? "report_broken_active" : "report_broken"),
					disabled: l.value || w.value,
					onClick: a[3] ||= (e) => A("report")
				}, "⚠", 10, Po)) : Q("", !0),
				T.value && r.context.isAdmin ? (Y(), X("button", {
					key: 1,
					type: "button",
					class: "admin-hide-btn",
					title: U(n)("admin_hide_resource"),
					"aria-label": U(n)("admin_hide_resource"),
					disabled: l.value,
					onClick: a[4] ||= (e) => A("hide")
				}, "×", 8, Fo)) : Q("", !0),
				T.value && r.context.isAdmin && C.value?.adminReported ? (Y(), X("button", {
					key: 2,
					type: "button",
					class: "admin-unhide-btn",
					title: U(n)("admin_unhide_resource"),
					"aria-label": U(n)("admin_unhide_resource"),
					disabled: l.value,
					onClick: a[5] ||= (e) => A("unhide")
				}, "↩", 8, Io)) : Q("", !0)
			])]),
			Z("div", Lo, [
				r.game._isSubmission ? (Y(), X("span", Ro, I(U(n)("submission_badge")), 1)) : Q("", !0),
				Z("span", zo, I(U(e)(r.game.area || "General")), 1),
				(Y(!0), X(q, null, jr(r.game.levels || (r.game.level ? [r.game.level] : [U(n)("no_level")]), (e) => (Y(), X("span", {
					key: e,
					class: "tag"
				}, I(U(i)(e)), 1))), 128)),
				Z("span", Bo, I(U(s)(r.game) || U(n)("catalogue_no_language")), 1),
				[
					"jclic",
					"h5p",
					"eduhoot",
					"scorm",
					"llibres"
				].includes(r.game.format) ? (Y(), X("span", Vo, I(r.game.format.toUpperCase()), 1)) : Q("", !0),
				r.game.flash ? (Y(), X("span", Ho, "Flash")) : Q("", !0)
			]),
			Z("div", {
				class: "rating",
				role: "group",
				"aria-label": U(n)("rating_group_label")
			}, [
				Z("span", Wo, I(U(n)("rating_label")), 1),
				T.value ? (Y(), X("span", Go, I(S.value?.count ? U(n)("rating_avg", S.value.avg.toFixed(1), S.value.count) : U(n)("rating_no_votes")), 1)) : Q("", !0),
				Z("div", Ko, [(Y(), X(q, null, jr(5, (e) => Z("button", {
					key: e,
					class: Ae(["star-btn", { active: e <= x.value }]),
					type: "button",
					title: U(n)("rating_set", e),
					"aria-label": U(n)("rating_set", e),
					"aria-pressed": e <= x.value,
					disabled: l.value,
					onClick: (t) => A("rating", e)
				}, "★", 10, qo)), 64))])
			], 8, Uo),
			Z("p", Jo, I(y.value), 1),
			D.value ? (Y(), X("p", Yo, I(D.value), 1)) : Q("", !0),
			r.game._isSubmission && r.game._submittedBy ? (Y(), X("p", Xo, I(U(n)("submission_by", r.game._submittedBy)), 1)) : Q("", !0),
			u.value ? (Y(), X("p", {
				key: 4,
				class: "report-feedback",
				role: d.value ? "alert" : "status"
			}, I(U(n)(u.value)), 9, Zo)) : Q("", !0)
		], 10, Eo));
	}
}, $o = ["placeholder"], es = ["id", "onUpdate:modelValue"], ts = { value: "" }, ns = ["value"], rs = { value: 0 }, is = ["value"], as = { class: "check-wrap" }, os = { class: "check-wrap" }, ss = {
	key: 0,
	id: "brokenOnlyLabel",
	class: "check-wrap"
}, cs = {
	key: 1,
	id: "reportedOnlyLabel",
	class: "check-wrap"
}, ls = { class: "results-head" }, us = { id: "resultCount" }, ds = {
	key: 0,
	role: "alert"
}, fs = {
	key: 1,
	role: "status"
}, ps = ["aria-busy"], ms = { class: "load-more-wrap" }, hs = {
	key: 2,
	id: "emptyState",
	class: "empty"
}, gs = {
	__name: "Catalogue",
	props: { onAction: Function },
	setup(s, { expose: c }) {
		let f = /* @__PURE__ */ un({
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
		}), p = new URLSearchParams(location.search), m = /* @__PURE__ */ Qt({
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
		}), h = /* @__PURE__ */ H(48), g = $(() => a(f.value.games, m, f.value)), _ = $(() => g.value.slice(0, h.value)), v = $(() => ({
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
		return Qn(m, () => {
			h.value = 48, b();
		}), c({ setContext: y }), (t, a) => (Y(), X(q, null, [
			(Y(), Fi(dr, { to: "#catalogueFilters" }, [
				Z("label", null, [Z("span", null, I(U(n)("search_label")), 1), G(Z("input", {
					id: "searchInput",
					"onUpdate:modelValue": a[0] ||= (e) => m.term = e,
					type: "search",
					placeholder: U(n)("search_placeholder")
				}, null, 8, $o), [[co, m.term]])]),
				(Y(!0), X(q, null, jr([
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
				], (e) => (Y(), X("label", { key: e.id }, [Z("span", null, I(U(n)(e.label + "_label")), 1), G(Z("select", {
					id: e.id,
					"onUpdate:modelValue": (t) => m[e.field] = t
				}, [Z("option", ts, I(U(n)(e.label + "_all")), 1), (Y(!0), X(q, null, jr(v.value[e.options], (t) => (Y(), X("option", {
					key: t,
					value: t
				}, I(e.format(t)), 9, ns))), 128))], 8, es), [[fo, m[e.field]]])]))), 128)),
				Z("label", null, [Z("span", null, I(U(n)("rating_min_label")), 1), G(Z("select", {
					id: "ratingFilter",
					"onUpdate:modelValue": a[1] ||= (e) => m.minRating = e
				}, [Z("option", rs, I(U(n)("rating_all_filter")), 1), (Y(), X(q, null, jr(5, (e) => Z("option", {
					key: e,
					value: e
				}, I(e) + "★" + I(e < 5 ? "+" : ""), 9, is)), 64))], 512), [[
					fo,
					m.minRating,
					void 0,
					{ number: !0 }
				]])]),
				Z("label", as, [G(Z("input", {
					id: "favoritesOnly",
					"onUpdate:modelValue": a[2] ||= (e) => m.onlyFavorites = e,
					type: "checkbox"
				}, null, 512), [[lo, m.onlyFavorites]]), Z("span", null, I(U(n)("favorites_only")), 1)]),
				Z("label", os, [G(Z("input", {
					id: "submissionsOnly",
					"onUpdate:modelValue": a[3] ||= (e) => m.onlySubmissions = e,
					type: "checkbox"
				}, null, 512), [[lo, m.onlySubmissions]]), Z("span", null, I(U(n)("submissions_only")), 1)]),
				f.value.isAdmin ? (Y(), X("label", ss, [G(Z("input", {
					id: "brokenOnly",
					"onUpdate:modelValue": a[4] ||= (e) => m.onlyBroken = e,
					type: "checkbox"
				}, null, 512), [[lo, m.onlyBroken]]), Z("span", null, I(U(n)("broken_only")), 1)])) : Q("", !0),
				f.value.isAdmin ? (Y(), X("label", cs, [G(Z("input", {
					id: "reportedOnly",
					"onUpdate:modelValue": a[5] ||= (e) => m.onlyReported = e,
					type: "checkbox"
				}, null, 512), [[lo, m.onlyReported]]), Z("span", null, I(U(n)("reported_only")), 1)])) : Q("", !0)
			])),
			Z("div", ls, [Z("h2", null, I(U(n)("section_title")), 1), Z("p", us, I(U(n)("result_count", g.value.length, f.value.games.length)), 1)]),
			f.value.error ? (Y(), X("p", ds, I(U(n)("catalogue_load_error")), 1)) : Q("", !0),
			f.value.loading ? (Y(), X("p", fs, I(U(n)("catalogue_loading")), 1)) : Q("", !0),
			Z("div", {
				id: "grid",
				class: "grid",
				"aria-live": "polite",
				"aria-busy": f.value.loading
			}, [(Y(!0), X(q, null, jr(_.value, (e, t) => (Y(), Fi(Qo, {
				key: f.value.epoch + ":" + U(o)(e) + ":" + t,
				game: e,
				context: f.value,
				"on-action": s.onAction
			}, null, 8, [
				"game",
				"context",
				"on-action"
			]))), 128))], 8, ps),
			Z("div", ms, [g.value.length > _.value.length ? (Y(), X("button", {
				key: 0,
				id: "loadMoreBtn",
				class: "btn-load-more",
				type: "button",
				onClick: a[6] ||= (e) => h.value += 48
			}, I(U(n)("load_more", g.value.length - _.value.length)), 1)) : Q("", !0)]),
			!g.value.length && !f.value.loading ? (Y(), X("p", hs, I(U(n)("empty")), 1)) : Q("", !0)
		], 64));
	}
}, _s = {
	key: 0,
	id: "authPanel",
	class: "auth-panel",
	"aria-live": "polite"
}, vs = { class: "auth-actions" }, ys = ["href"], bs = ["disabled"], xs = ["disabled"], Ss = ["disabled"], Cs = {
	key: 0,
	role: "alert"
}, ws = {
	id: "studentDialogTitle",
	class: "submit-dialog-title"
}, Ts = { class: "submit-fields" }, Es = ["disabled"], Ds = ["disabled"], Os = ["role"], ks = { class: "submit-actions" }, As = ["disabled"], js = {
	__name: "Access",
	props: {
		onSessionChange: Function,
		onPropose: Function
	},
	setup(e, { expose: r }) {
		let i = e, a = /* @__PURE__ */ un({
			backendMode: "local",
			epoch: -1,
			language: t()
		}), o = /* @__PURE__ */ H({}), s = /* @__PURE__ */ H(!1), c = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(""), u = /* @__PURE__ */ H(!1), d = /* @__PURE__ */ H(), f = /* @__PURE__ */ H(), m = /* @__PURE__ */ H(""), h = /* @__PURE__ */ H(""), g = 0, v = !0;
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
		async function w() {
			let e = ++g, t = a.value.epoch;
			o.value = {}, c.value = !0;
			let n = await _();
			v && e === g && t === p.preferenceEpoch && (o.value = n, p.isTeacher = !!n.logged_in, c.value = !1);
		}
		function T(e) {
			let n = e.epoch !== a.value.epoch || e.backendMode !== a.value.backendMode;
			a.value = {
				...e,
				language: t()
			}, n && (C(), o.value = {}, c.value = !1, ++g, v && e.backendMode === "remote" && w());
		}
		async function E() {
			s.value || (S(), d.value.showModal(), await Nn(), f.value?.focus());
		}
		async function D() {
			if (s.value || !v || a.value.epoch !== p.preferenceEpoch) return;
			let e = m.value.trim(), t = h.value.trim();
			if (h.value = "", !e || !t) l.value = "student_login_missing", u.value = !0;
			else {
				s.value = !0, l.value = "student_login_loading", u.value = !1;
				try {
					let n = y({
						publicCode: e,
						pin: t
					});
					if (t = "", await n, !v) return;
					C(), await i.onSessionChange();
				} catch {
					v && d.value?.open && (l.value = "student_login_error", u.value = !0);
				} finally {
					t = "", s.value = !1;
				}
			}
		}
		async function ee() {
			if (!s.value && v && a.value.epoch === p.preferenceEpoch) {
				s.value = !0, l.value = "";
				try {
					await b(), v && await i.onSessionChange();
				} catch {
					v && (l.value = "session_error", u.value = !0);
				} finally {
					s.value = !1;
				}
			}
		}
		function O() {
			v = !1, ++g, C(), o.value = {}, c.value = !0;
		}
		async function te(e) {
			e.persisted && (v = !0, await i.onSessionChange(), w());
		}
		return Or(() => {
			window.addEventListener("pagehide", O), window.addEventListener("pageshow", te);
		}), kr(() => {
			O(), window.removeEventListener("pagehide", O), window.removeEventListener("pageshow", te);
		}), r({ setContext: T }), (e, t) => (Y(), X(q, null, [
			(Y(), Fi(dr, { to: "#authMount" }, [a.value.backendMode === "remote" ? (Y(), X("div", _s, [Z("div", vs, [
				c.value ? Q("", !0) : (Y(), X("a", {
					key: 0,
					id: "loginBtn",
					class: "btn-auth secondary",
					href: o.value.logged_in ? "/api/auth/logout" : "/api/auth/login"
				}, I(x(o.value.logged_in ? "logout_btn" : "login_btn")), 9, ys)),
				o.value.student_logged_in ? (Y(), X("button", {
					key: 2,
					id: "studentLogoutBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: ee
				}, I(x("student_logout_btn", o.value.student_code || "")), 9, xs)) : (Y(), X("button", {
					key: 1,
					id: "studentLoginBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: E
				}, I(x("student_login_btn")), 9, bs)),
				Z("button", {
					id: "submitActivityBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: t[0] ||= (e) => i.onPropose()
				}, I(x("submit_btn")), 9, Ss)
			]), l.value === "session_error" ? (Y(), X("p", Cs, I(x(l.value)), 1)) : Q("", !0)])) : Q("", !0)])),
			(Y(), Fi(dr, { to: "#prefsMount" }, [Z("p", {
				id: "personalPrefsNote",
				class: Ae(["personal-note", { remote: a.value.backendMode === "remote" }])
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
			}, [Z("h2", ws, I(x("student_dialog_title")), 1), Z("form", {
				id: "studentForm",
				onSubmit: yo(D, ["prevent"])
			}, [
				Z("div", Ts, [Z("label", null, [Z("span", null, I(x("student_code_label")), 1), G(Z("input", {
					ref_key: "codeInput",
					ref: f,
					id: "studentCode",
					"onUpdate:modelValue": t[1] ||= (e) => m.value = e,
					type: "text",
					required: "",
					autocomplete: "off",
					maxlength: "12",
					disabled: s.value
				}, null, 8, Es), [[co, m.value]])]), Z("label", null, [Z("span", null, I(x("student_pin_label")), 1), G(Z("input", {
					id: "studentPin",
					"onUpdate:modelValue": t[2] ||= (e) => h.value = e,
					type: "password",
					required: "",
					inputmode: "numeric",
					autocomplete: "off",
					disabled: s.value
				}, null, 8, Ds), [[co, h.value]])])]),
				l.value ? (Y(), X("p", {
					key: 0,
					id: "studentFeedback",
					class: Ae(["submit-feedback", { error: u.value }]),
					role: u.value ? "alert" : "status"
				}, I(x(l.value)), 11, Os)) : Q("", !0),
				Z("div", ks, [Z("button", {
					id: "studentCancelBtn",
					type: "button",
					class: "btn-auth secondary",
					onClick: C
				}, I(x("submit_cancel")), 1), Z("button", {
					id: "studentSendBtn",
					class: "btn-auth",
					disabled: s.value
				}, I(x("student_send")), 9, As)])
			], 32)], 544)
		], 64));
	}
}, Ms = {
	id: "submitDialogTitle",
	class: "submit-dialog-title"
}, Ns = ["disabled"], Ps = ["value"], Fs = ["value"], Is = ["role"], Ls = { class: "submit-actions" }, Rs = ["disabled"], zs = {
	__name: "Proposal",
	props: { onSubmitted: Function },
	setup(i, { expose: a }) {
		let o = i, s = /* @__PURE__ */ un({
			epoch: -1,
			backendMode: "local",
			games: [],
			language: t()
		}), c = /* @__PURE__ */ H(), u = /* @__PURE__ */ H(), f = /* @__PURE__ */ H(!1), m = /* @__PURE__ */ H(!1), h = /* @__PURE__ */ H(""), g = /* @__PURE__ */ H(!1), _ = /* @__PURE__ */ Qt({
			title: "",
			url: "",
			notes: "",
			name: "",
			area: "",
			language: ""
		}), v = 0, y = !0, b = $(() => d(s.value.games, "area")), S = $(() => l(s.value.games));
		function C(e) {
			return s.value.language, n(e);
		}
		function w() {
			Object.keys(_).forEach((e) => _[e] = ""), h.value = "", g.value = !1, m.value = !1;
		}
		function T() {
			++v, c.value?.close(), w();
		}
		function E(e) {
			(e.epoch !== s.value.epoch || e.backendMode !== s.value.backendMode) && T(), s.value = {
				...e,
				language: t()
			};
		}
		async function D() {
			y && s.value.backendMode === "remote" && s.value.epoch === p.preferenceEpoch && !f.value && (w(), ++v, c.value.showModal(), await Nn(), u.value?.focus());
		}
		function ee(e) {
			try {
				let t = new URL(e);
				return ["http:", "https:"].includes(t.protocol) && !t.username && !t.password;
			} catch {
				return !1;
			}
		}
		async function O() {
			if (f.value || m.value || !y || s.value.backendMode !== "remote" || s.value.epoch !== p.preferenceEpoch) return;
			let e = Object.fromEntries(Object.entries(_).map(([e, t]) => [e, t.trim()]));
			if (!e.title || !ee(e.url)) {
				h.value = "submit_invalid", g.value = !0;
				return;
			}
			e.area = e.area || "General";
			let t = v, n = s.value.epoch, r = () => y && t === v && n === p.preferenceEpoch;
			f.value = !0, g.value = !1, h.value = "submit_loading";
			try {
				if (await x(e), !r()) return;
				w(), m.value = !0, h.value = "submit_success";
				try {
					await o.onSubmitted();
				} catch {
					r() && (h.value = "submit_refresh_error");
				}
			} catch {
				r() && (h.value = "submit_error", g.value = !0);
			} finally {
				f.value = !1;
			}
		}
		function te() {
			y = !1, T(), c.value?.querySelector("form")?.reset();
		}
		function ne() {
			y = !0;
		}
		return Or(() => {
			window.addEventListener("pagehide", te), window.addEventListener("pageshow", ne);
		}), kr(() => {
			te(), window.removeEventListener("pagehide", te), window.removeEventListener("pageshow", ne);
		}), a({
			setContext: E,
			open: D
		}), (t, n) => (Y(), X("dialog", {
			ref_key: "dialog",
			ref: c,
			id: "submitDialog",
			class: "submit-dialog",
			"aria-labelledby": "submitDialogTitle",
			onCancel: T,
			onClick: n[6] ||= (e) => {
				e.target === c.value && T();
			}
		}, [Z("h2", Ms, I(C("submit_dialog_title")), 1), Z("form", {
			id: "submitForm",
			onSubmit: yo(O, ["prevent"])
		}, [
			Z("fieldset", {
				class: "submit-fields",
				disabled: f.value || m.value
			}, [
				Z("label", null, [Z("span", null, I(C("submit_field_title")), 1), G(Z("input", {
					ref_key: "titleInput",
					ref: u,
					id: "submitTitle",
					"onUpdate:modelValue": n[0] ||= (e) => _.title = e,
					required: "",
					autocomplete: "off"
				}, null, 512), [[co, _.title]])]),
				Z("label", null, [Z("span", null, I(C("submit_field_url")), 1), G(Z("input", {
					id: "submitUrl",
					"onUpdate:modelValue": n[1] ||= (e) => _.url = e,
					type: "url",
					required: "",
					autocomplete: "off"
				}, null, 512), [[co, _.url]])]),
				Z("label", null, [Z("span", null, I(C("area_label")), 1), G(Z("select", {
					id: "submitArea",
					"onUpdate:modelValue": n[2] ||= (e) => _.area = e
				}, [n[7] ||= Z("option", { value: "" }, "—", -1), (Y(!0), X(q, null, jr(b.value, (t) => (Y(), X("option", {
					key: t,
					value: t
				}, I(U(e)(t)), 9, Ps))), 128))], 512), [[fo, _.area]])]),
				Z("label", null, [Z("span", null, I(C("language_label")), 1), G(Z("select", {
					id: "submitLanguage",
					"onUpdate:modelValue": n[3] ||= (e) => _.language = e
				}, [n[8] ||= Z("option", { value: "" }, "—", -1), (Y(!0), X(q, null, jr(S.value, (e) => (Y(), X("option", {
					key: e,
					value: e
				}, I(U(r)(e)), 9, Fs))), 128))], 512), [[fo, _.language]])]),
				Z("label", null, [Z("span", null, I(C("submit_field_notes")), 1), G(Z("textarea", {
					id: "submitNotes",
					"onUpdate:modelValue": n[4] ||= (e) => _.notes = e,
					rows: "3"
				}, null, 512), [[co, _.notes]])]),
				Z("label", null, [Z("span", null, I(C("submit_field_name")), 1), G(Z("input", {
					id: "submitName",
					"onUpdate:modelValue": n[5] ||= (e) => _.name = e,
					autocomplete: "off"
				}, null, 512), [[co, _.name]])])
			], 8, Ns),
			h.value ? (Y(), X("p", {
				key: 0,
				id: "submitFeedback",
				class: Ae(["submit-feedback", {
					error: g.value,
					ok: m.value
				}]),
				role: g.value ? "alert" : "status"
			}, I(C(h.value)), 11, Is)) : Q("", !0),
			Z("div", Ls, [Z("button", {
				id: "submitCancelBtn",
				type: "button",
				class: "btn-auth secondary",
				onClick: T
			}, I(C(m.value ? "dialog_close" : "submit_cancel")), 1), Z("button", {
				id: "submitSendBtn",
				class: "btn-auth",
				disabled: f.value || m.value
			}, I(C("submit_send")), 9, Rs)])
		], 32)], 544));
	}
}, Bs = ["aria-busy"], Vs = { id: "sourcesTitle" }, Hs = ["disabled"], Us = {
	key: 0,
	role: "status"
}, Ws = {
	key: 1,
	role: "alert"
}, Gs = {
	key: 2,
	role: "status"
}, Ks = {
	id: "sourcesList",
	class: "sources-list"
}, qs = {
	__name: "Sources",
	setup(e, { expose: r }) {
		let i = /* @__PURE__ */ un({
			isAdmin: !1,
			backendMode: "local",
			epoch: -1,
			language: t()
		}), a = /* @__PURE__ */ H([]), o = /* @__PURE__ */ H(!1), s = /* @__PURE__ */ H(!1), c = /* @__PURE__ */ H(!0), l = 0;
		function u() {
			return c.value && i.value.isAdmin && i.value.backendMode === "remote" && i.value.epoch === p.preferenceEpoch;
		}
		function d(e, ...t) {
			return i.value.language, n(e, ...t);
		}
		function f(e) {
			let t = new Date(e);
			return e && Number.isFinite(t.getTime()) ? t.toLocaleString(i.value.language === "va" ? "ca-ES-valencia" : i.value.language) : d("sources_never");
		}
		async function m() {
			if (!u() || o.value) return;
			let e = ++l, t = i.value.epoch;
			o.value = !0, s.value = !1, a.value = [];
			try {
				let n = await v();
				if (e !== l || !u() || t !== p.preferenceEpoch) return;
				a.value = n || [];
			} catch {
				e === l && u() && (s.value = !0);
			} finally {
				e === l && (o.value = !1);
			}
		}
		function h(e) {
			let n = e.epoch !== i.value.epoch || e.isAdmin !== i.value.isAdmin || e.backendMode !== i.value.backendMode;
			i.value = {
				...e,
				language: t()
			}, n && (++l, a.value = [], s.value = !1, o.value = !1, u() && m());
		}
		function g() {
			c.value = !1, ++l, a.value = [], o.value = !1, s.value = !1;
		}
		function _(e) {
			e.persisted && (c.value = !0);
		}
		return Or(() => {
			window.addEventListener("pagehide", g), window.addEventListener("pageshow", _);
		}), kr(() => {
			g(), window.removeEventListener("pagehide", g), window.removeEventListener("pageshow", _);
		}), r({ setContext: h }), (e, t) => c.value && i.value.isAdmin && i.value.backendMode === "remote" ? (Y(), X("section", {
			key: 0,
			id: "sourcesPanel",
			class: "sources-panel",
			"aria-labelledby": "sourcesTitle",
			"aria-busy": o.value
		}, [
			Z("h2", Vs, I(d("sources_title")), 1),
			Z("button", {
				id: "sourcesRefresh",
				class: "btn-auth secondary",
				disabled: o.value,
				onClick: m
			}, I(d("sources_refresh")), 9, Hs),
			o.value ? (Y(), X("p", Us, I(d("sources_loading")), 1)) : s.value ? (Y(), X("p", Ws, I(d("sources_error")), 1)) : a.value.length ? Q("", !0) : (Y(), X("p", Gs, I(d("sources_empty")), 1)),
			Z("div", Ks, [(Y(!0), X(q, null, jr(a.value, (e, t) => (Y(), X("div", {
				key: e.provider + ":" + t,
				class: "source-row"
			}, [
				Z("strong", null, I(e.provider), 1),
				Z("span", null, I(d("sources_summary", e.resources ?? 0, e.last_sync?.status || "—", f(e.last_sync?.finished_at))), 1),
				Z("span", null, I(d("sources_counts", e.last_sync?.fetched ?? "—", e.last_sync?.created ?? "—", e.last_sync?.updated ?? "—", e.last_sync?.errors ?? "—")), 1)
			]))), 128))])
		], 8, Bs)) : Q("", !0);
	}
};
// src/catalogue/main.js
function Js(e, t) {
	return Co(gs, t).mount(e);
}
function Ys(e, t) {
	return Co(js, t).mount(e);
}
function Xs(e, t) {
	return Co(zs, t).mount(e);
}
function Zs(e, t) {
	return Co(qs, t).mount(e);
}
export { Ys as mountAccess, Js as mountCatalogue, Xs as mountProposal, Zs as mountSources };
