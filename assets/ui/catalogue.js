import { areaLabel as e, getLang as t, i18n as n, languageLabel as r, levelLabel as i } from "/scripts/i18n.js";
import { computeFilteredGames as a, gameKey as o, gameLanguageText as s, normalizeUrl as c, uniqueLanguageValues as l, uniqueLevelValues as u, uniqueValues as d } from "/scripts/filters.js";
import { DEFAULT_GAME_IMAGE as f, state as p } from "/scripts/state.js";
import { openFlashDialog as m } from "/scripts/flash.js";
import { openJClicDialog as h } from "/scripts/jclic.js";
import { openIframeDialog as g } from "/scripts/external.js";
import { authMe as _, studentLogin as v, studentLogout as y, submitActivity as b } from "/scripts/api.js";
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function x(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var S = {}, C = [], w = () => {}, ee = () => !1, T = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), E = (e) => e.startsWith("onUpdate:"), D = Object.assign, O = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, te = Object.prototype.hasOwnProperty, k = (e, t) => te.call(e, t), A = Array.isArray, j = (e) => se(e) === "[object Map]", ne = (e) => se(e) === "[object Set]", re = (e) => se(e) === "[object Date]", M = (e) => typeof e == "function", N = (e) => typeof e == "string", ie = (e) => typeof e == "symbol", P = (e) => typeof e == "object" && !!e, ae = (e) => (P(e) || M(e)) && M(e.then) && M(e.catch), oe = Object.prototype.toString, se = (e) => oe.call(e), ce = (e) => se(e).slice(8, -1), le = (e) => se(e) === "[object Object]", ue = (e) => N(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, de = /* @__PURE__ */ x(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), fe = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, pe = /-\w/g, F = fe((e) => e.replace(pe, (e) => e.slice(1).toUpperCase())), me = /\B([A-Z])/g, he = fe((e) => e.replace(me, "-$1").toLowerCase()), ge = fe((e) => e.charAt(0).toUpperCase() + e.slice(1)), _e = fe((e) => e ? `on${ge(e)}` : ""), ve = (e, t) => !Object.is(e, t), ye = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, be = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, xe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, Se, Ce = () => Se ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function we(e) {
	if (A(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = N(r) ? Oe(r) : we(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (N(e) || P(e)) return e;
}
var Te = /;(?![^(]*\))/g, Ee = /:([^]+)/, De = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Oe(e) {
	let t = {};
	return e.replace(De, (e) => e.startsWith("/*") ? "" : e).split(Te).forEach((e) => {
		if (e) {
			let n = e.split(Ee);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ke(e) {
	let t = "";
	if (N(e)) t = e;
	else if (A(e)) for (let n = 0; n < e.length; n++) {
		let r = ke(e[n]);
		r && (t += r + " ");
	}
	else if (P(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Ae = /* @__PURE__ */ x("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function je(e) {
	return !!e || e === "";
}
function Me(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Ie(e[i], t[i], n);
	return r;
}
function Ne(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Ie(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Pe(e, t, n) {
	let r = j(e), i = j(t);
	if (r || i || (r = ne(e), i = ne(t), r || i)) return r && i ? Ne(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Ie(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Fe(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Ie(e, t, n) {
	if (e === t) return !0;
	let r = re(e), i = re(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = ie(e), i = ie(t), r || i ? e === t : (r = A(e), i = A(t), r || i ? r && i ? Fe(e, t, n, Me) : !1 : (r = P(e), i = P(t), r || i ? !r || !i ? !1 : Fe(e, t, n, Pe) : String(e) === String(t))));
}
function Le(e, t) {
	return e.findIndex((e) => Ie(e, t));
}
var Re = (e) => !!(e && e.__v_isRef === !0), I = (e) => N(e) ? e : e == null ? "" : A(e) || P(e) && (e.toString === oe || !M(e.toString)) ? Re(e) ? I(e.value) : JSON.stringify(e, ze, 2) : String(e), ze = (e, t) => Re(t) ? ze(e, t.value) : j(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Be(t, r) + " =>"] = n, e), {}) } : ne(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Be(e)) } : ie(t) ? Be(t) : P(t) && !A(t) && !le(t) ? String(t) : t, Be = (e, t = "") => ie(e) ? `Symbol(${e.description ?? t})` : e, L, Ve = class {
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
function He() {
	return L;
}
var R, Ue = /* @__PURE__ */ new WeakSet(), We = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, L && (L.active ? L.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ue.has(this) && (Ue.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Je(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, st(this), Ze(this);
		let e = R, t = rt;
		R = this, rt = !0;
		try {
			return this.fn();
		} finally {
			Qe(this), R = e, rt = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) tt(e);
			this.deps = this.depsTail = void 0, st(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ue.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		$e(this) && this.run();
	}
	get dirty() {
		return $e(this);
	}
}, Ge = 0, Ke, qe;
function Je(e, t = !1) {
	e.flags |= 8, t ? (e.next = qe, qe = e) : (e.next = Ke, Ke = e);
}
function Ye() {
	Ge++;
}
function Xe() {
	if (--Ge > 0) return;
	if (qe) {
		let e = qe;
		for (qe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ke;) {
		let t = Ke;
		for (Ke = void 0; t;) {
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
function Ze(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Qe(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), tt(r), nt(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function $e(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (et(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function et(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ct) || (e.globalVersion = ct, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$e(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = R, r = rt;
	R = e, rt = !0;
	try {
		Ze(e);
		let n = e.fn(e._value);
		(t.version === 0 || ve(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		R = n, rt = r, Qe(e), e.flags &= -3;
	}
}
function tt(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) tt(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function nt(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var rt = !0, it = [];
function at() {
	it.push(rt), rt = !1;
}
function ot() {
	let e = it.pop();
	rt = e === void 0 || e;
}
function st(e) {
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
var ct = 0, lt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, ut = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!R || !rt || R === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== R) t = this.activeLink = new lt(R, this), R.deps ? (t.prevDep = R.depsTail, R.depsTail.nextDep = t, R.depsTail = t) : R.deps = R.depsTail = t, dt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = R.depsTail, t.nextDep = void 0, R.depsTail.nextDep = t, R.depsTail = t, R.deps === t && (R.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, ct++, this.notify(e);
	}
	notify(e) {
		Ye();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Xe();
		}
	}
};
function dt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) dt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var ft = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ Symbol(""), mt = /* @__PURE__ */ Symbol(""), ht = /* @__PURE__ */ Symbol("");
function z(e, t, n) {
	if (rt && R) {
		let t = ft.get(e);
		t || ft.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new ut()), r.map = t, r.key = n), r.track();
	}
}
function gt(e, t, n, r, i, a) {
	let o = ft.get(e);
	if (!o) {
		ct++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ye(), t === "clear") o.forEach(s);
	else {
		let i = A(e), a = i && ue(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ht || !ie(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ht)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(pt)), j(e) && s(o.get(mt)));
				break;
			case "delete":
				i || (s(o.get(pt)), j(e) && s(o.get(mt)));
				break;
			case "set": j(e) && s(o.get(pt));
		}
	}
	Xe();
}
function _t(e) {
	let t = /* @__PURE__ */ B(e);
	return t === e || (z(t, "iterate", ht), /* @__PURE__ */ rn(e)) ? t : /* @__PURE__ */ nn(e) ? /* @__PURE__ */ tn(e) ? t.map((e) => cn(sn(e))) : t.map(cn) : t.map(sn);
}
function vt(e) {
	return z(e = /* @__PURE__ */ B(e), "iterate", ht), e;
}
function yt(e, t) {
	return /* @__PURE__ */ nn(e) ? cn(/* @__PURE__ */ tn(e) ? sn(t) : t) : sn(t);
}
var bt = {
	__proto__: null,
	[Symbol.iterator]() {
		return xt(this, Symbol.iterator, (e) => yt(this, e));
	},
	concat(...e) {
		return _t(this).concat(...e.map((e) => A(e) ? _t(e) : e));
	},
	entries() {
		return xt(this, "entries", (e) => (e[1] = yt(this, e[1]), e));
	},
	every(e, t) {
		return wt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return wt(this, "filter", e, t, (e) => e.map((e) => yt(this, e)), arguments);
	},
	find(e, t) {
		return wt(this, "find", e, t, (e) => yt(this, e), arguments);
	},
	findIndex(e, t) {
		return wt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return wt(this, "findLast", e, t, (e) => yt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return wt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return wt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return Et(this, "includes", e);
	},
	indexOf(...e) {
		return Et(this, "indexOf", e);
	},
	join(e) {
		return _t(this).join(e);
	},
	lastIndexOf(...e) {
		return Et(this, "lastIndexOf", e);
	},
	map(e, t) {
		return wt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Dt(this, "pop");
	},
	push(...e) {
		return Dt(this, "push", e);
	},
	reduce(e, ...t) {
		return Tt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return Tt(this, "reduceRight", e, t);
	},
	shift() {
		return Dt(this, "shift");
	},
	some(e, t) {
		return wt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Dt(this, "splice", e);
	},
	toReversed() {
		return _t(this).toReversed();
	},
	toSorted(e) {
		return _t(this).toSorted(e);
	},
	toSpliced(...e) {
		return _t(this).toSpliced(...e);
	},
	unshift(...e) {
		return Dt(this, "unshift", e);
	},
	values() {
		return xt(this, "values", (e) => yt(this, e));
	}
};
function xt(e, t, n) {
	let r = vt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ rn(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => St(a.next(), n), i !== Ct[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => St(a._next(), n);
	}
	return a;
}
function St(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var Ct = Array.prototype;
function wt(e, t, n, r, i, a) {
	let o = vt(e), s = o !== e && !/* @__PURE__ */ rn(e), c = o[t];
	if (c !== Ct[t]) {
		let t = c.apply(e, a);
		return s ? sn(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, yt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function Tt(e, t, n, r) {
	let i = vt(e), a = i !== e && !/* @__PURE__ */ rn(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = yt(e, t)), n.call(this, t, yt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? yt(e, c) : c;
}
function Et(e, t, n) {
	let r = /* @__PURE__ */ B(e);
	z(r, "iterate", ht);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ an(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), r[t](...n)) : i;
}
function Dt(e, t, n = []) {
	at(), Ye();
	let r = (/* @__PURE__ */ B(e))[t].apply(e, n);
	return Xe(), ot(), r;
}
var Ot = /* @__PURE__ */ x("__proto__,__v_isRef,__isVue"), kt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ie));
function At(e) {
	ie(e) || (e = String(e));
	let t = /* @__PURE__ */ B(this);
	return z(t, "has", e), t.hasOwnProperty(e);
}
var jt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Yt : Jt : i ? qt : Kt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = A(e);
		if (!r) {
			let e;
			if (a && (e = bt[t])) return e;
			if (t === "hasOwnProperty") return At;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ V(e) ? e : n);
		if ((ie(t) ? kt.has(t) : Ot(t)) || (r || z(e, "get", t), i)) return o;
		if (/* @__PURE__ */ V(o)) {
			let e = a && ue(t) ? o : o.value;
			return r && P(e) ? /* @__PURE__ */ $t(e) : e;
		}
		return P(o) ? r ? /* @__PURE__ */ $t(o) : /* @__PURE__ */ Zt(o) : o;
	}
}, Mt = class extends jt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = A(e) && ue(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ nn(i);
			if (!/* @__PURE__ */ rn(n) && !/* @__PURE__ */ nn(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !a && /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : k(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ V(e) ? e : r);
		return e === /* @__PURE__ */ B(r) && s && (o ? ve(n, i) && gt(e, "set", t, n, i) : gt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = k(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && gt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return ie(t) && kt.has(t) || z(e, "has", t), n;
	}
	ownKeys(e) {
		return z(e, "iterate", A(e) ? "length" : pt), Reflect.ownKeys(e);
	}
}, Nt = class extends jt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Pt = /* @__PURE__ */ new Mt(), Ft = /* @__PURE__ */ new Nt(), It = /* @__PURE__ */ new Mt(!0), Lt = (e) => e, Rt = (e) => Reflect.getPrototypeOf(e);
function zt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ B(i), o = j(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Lt : t ? cn : sn;
		return !t && z(a, "iterate", c ? mt : pt), D(Object.create(l), { next() {
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
function Bt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Vt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ B(r), a = /* @__PURE__ */ B(n);
			e || (ve(n, a) && z(i, "get", n), z(i, "get", a));
			let { has: o } = Rt(i), s = t ? Lt : e ? cn : sn;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && z(/* @__PURE__ */ B(t), "iterate", pt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ B(n), i = /* @__PURE__ */ B(t);
			return e || (ve(t, i) && z(r, "has", t), z(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ B(a), s = t ? Lt : e ? cn : sn;
			return !e && z(o, "iterate", pt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return D(n, e ? {
		add: Bt("add"),
		set: Bt("set"),
		delete: Bt("delete"),
		clear: Bt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ B(this), r = Rt(n), i = /* @__PURE__ */ B(e), a = !t && !/* @__PURE__ */ rn(e) && !/* @__PURE__ */ nn(e) ? i : e;
			return r.has.call(n, a) || ve(e, a) && r.has.call(n, e) || ve(i, a) && r.has.call(n, i) || (n.add(a), gt(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ rn(n) || /* @__PURE__ */ nn(n) || (n = /* @__PURE__ */ B(n));
			let r = /* @__PURE__ */ B(this), { has: i, get: a } = Rt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ B(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ve(n, s) && gt(r, "set", e, n, s) : gt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ B(this), { has: n, get: r } = Rt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ B(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && gt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ B(this), t = e.size !== 0, n = e.clear();
			return t && gt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = zt(r, e, t);
	}), n;
}
function Ht(e, t) {
	let n = Vt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(k(n, i) && i in r ? n : r, i, a);
}
var Ut = { get: /* @__PURE__ */ Ht(!1, !1) }, Wt = { get: /* @__PURE__ */ Ht(!1, !0) }, Gt = { get: /* @__PURE__ */ Ht(!0, !1) }, Kt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap();
function Xt(e) {
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
function Zt(e) {
	return /* @__PURE__ */ nn(e) ? e : en(e, !1, Pt, Ut, Kt);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return en(e, !1, It, Wt, qt);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return en(e, !0, Ft, Gt, Jt);
}
function en(e, t, n, r, i) {
	if (!P(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Xt(ce(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return /* @__PURE__ */ nn(e) ? /* @__PURE__ */ tn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ B(t) : e;
}
function on(e) {
	return !k(e, "__v_skip") && Object.isExtensible(e) && be(e, "__v_skip", !0), e;
}
var sn = (e) => P(e) ? /* @__PURE__ */ Zt(e) : e, cn = (e) => P(e) ? /* @__PURE__ */ $t(e) : e;
// @__NO_SIDE_EFFECTS__
function V(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function H(e) {
	return un(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
	return un(e, !0);
}
function un(e, t) {
	return /* @__PURE__ */ V(e) ? e : new dn(e, t);
}
var dn = class {
	constructor(e, t) {
		this.dep = new ut(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ B(e), this._value = t ? e : sn(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ rn(e) || /* @__PURE__ */ nn(e);
		e = n ? e : /* @__PURE__ */ B(e), ve(e, t) && (this._rawValue = e, this._value = n ? e : sn(e), this.dep.trigger());
	}
};
function U(e) {
	return /* @__PURE__ */ V(e) ? e.value : e;
}
var fn = {
	get: (e, t, n) => t === "__v_raw" ? e : U(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function pn(e) {
	return /* @__PURE__ */ tn(e) ? e : new Proxy(e, fn);
}
var mn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new ut(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ct - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && R !== this) return Je(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return et(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function hn(e, t, n = !1) {
	let r, i;
	return M(e) ? r = e : (r = e.get, i = e.set), new mn(r, i, n);
}
var gn = {}, _n = /* @__PURE__ */ new WeakMap(), vn = void 0;
function yn(e, t = !1, n = vn) {
	if (n) {
		let t = _n.get(n);
		t || _n.set(n, t = []), t.push(e);
	}
}
function bn(e, t, n = S) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => i ? e : /* @__PURE__ */ rn(e) || i === !1 || i === 0 ? xn(e, 1) : xn(e), u, d, f, p, m = !1, h = !1;
	if (/* @__PURE__ */ V(e) ? (d = () => e.value, m = /* @__PURE__ */ rn(e)) : /* @__PURE__ */ tn(e) ? (d = () => l(e), m = !0) : A(e) ? (h = !0, m = e.some((e) => /* @__PURE__ */ tn(e) || /* @__PURE__ */ rn(e)), d = () => e.map((e) => {
		if (/* @__PURE__ */ V(e)) return e.value;
		if (/* @__PURE__ */ tn(e)) return l(e);
		if (M(e)) return c ? c(e, 2) : e();
	})) : d = M(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (f) {
			at();
			try {
				f();
			} finally {
				ot();
			}
		}
		let t = vn;
		vn = u;
		try {
			return c ? c(e, 3, [p]) : e(p);
		} finally {
			vn = t;
		}
	} : w, t && i) {
		let e = d, t = i === !0 ? Infinity : i;
		d = () => xn(e(), t);
	}
	let g = He(), _ = () => {
		u.stop(), g && g.active && O(g.effects, u);
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
	let v = h ? Array(e.length).fill(gn) : gn, y = (e) => {
		if (u.flags & 1 && (u.dirty || e)) {
			if (t) {
				let n = u.run();
				if (e || i || m || (h ? n.some((e, t) => ve(e, v[t])) : ve(n, v))) {
					let e = vn;
					at();
					try {
						f && f(), vn = u;
						let e = [
							n,
							v === gn ? void 0 : h && v[0] === gn ? [] : v,
							p
						];
						v = n, c ? c(t, 3, e) : t(...e);
					} finally {
						vn = e, ot();
					}
				}
			} else u.run();
		}
	};
	return s && s(y), u = new We(d), u.scheduler = o ? () => o(y, !1) : y, p = (e) => yn(e, !1, u), f = u.onStop = () => {
		let e = _n.get(u);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			_n.delete(u);
		}
	}, t ? r ? y(!0) : v = u.run() : o ? o(y.bind(null, !0), !0) : u.run(), _.pause = u.pause.bind(u), _.resume = u.resume.bind(u), _.stop = _, _;
}
function xn(e, t = Infinity, n) {
	if (t <= 0 || !P(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ V(e)) xn(e.value, t, n);
	else if (A(e)) for (let r = 0; r < e.length; r++) xn(e[r], t, n);
	else if (ne(e) || j(e)) e.forEach((e) => {
		xn(e, t, n);
	});
	else if (le(e)) {
		for (let r in e) xn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && xn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Sn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		wn(e, t, n);
	}
}
function Cn(e, t, n, r) {
	if (M(e)) {
		let i = Sn(e, t, n, r);
		return i && ae(i) && i.catch((e) => {
			wn(e, t, n);
		}), i;
	}
	if (A(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Cn(e[a], t, n, r));
		return i;
	}
}
function wn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || S;
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
			at(), Sn(a, null, 10, [
				e,
				i,
				o
			]), ot();
			return;
		}
	}
	Tn(e, n, i, r, o);
}
function Tn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var W = [], En = -1, Dn = [], On = null, kn = 0, An = /* @__PURE__ */ Promise.resolve(), jn = null;
function Mn(e) {
	let t = jn || An;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nn(e) {
	let t = En + 1, n = W.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = W[r], a = Vn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Pn(e) {
	if (!(e.flags & 1)) {
		let t = Vn(e), n = W[W.length - 1];
		!n || !(e.flags & 2) && t >= Vn(n) ? W.push(e) : W.splice(Nn(t), 0, e), e.flags |= 1, Fn();
	}
}
function Fn() {
	jn ||= An.then(Hn);
}
function In(e) {
	if (!A(e)) On && e.id === -1 ? On.splice(kn + 1, 0, e) : e.flags & 1 || (Dn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Dn.push(e[t]);
	Fn();
}
function Ln(e, t, n, r = En + 1) {
	for (; r < W.length; r++) {
		let n = W[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			W.splice(r, 1), r = e ? r - 1 : En, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Rn(e, t, n = 0) {
	if (Dn.length) {
		let e = Dn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Dn.length; i++) {
				let a = Dn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Dn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Vn(e) - Vn(t));
		if (Dn.length = r, On) {
			for (let e = 0; e < i.length; e++) On.push(i[e]);
			return;
		}
		for (On = i, kn = 0; kn < On.length; kn++) {
			let e = On[kn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		On = null, kn = 0;
	}
}
var zn = !1;
function Bn(e, t) {
	if (zn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Dn);
	e(), zn = !0;
	try {
		Ln(void 0, t), Rn(void 0, n, t);
	} finally {
		zn = !1;
	}
}
var Vn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Hn(e) {
	try {
		for (En = 0; En < W.length; En++) {
			let e = W[En];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Sn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; En < W.length; En++) {
			let e = W[En];
			e && (e.flags &= -2);
		}
		En = -1, W.length = 0, Rn(e), jn = null, (W.length || Dn.length) && Hn(e);
	}
}
var Un = null, Wn = null;
function Gn(e) {
	let t = Un;
	return Un = e, Wn = e && e.type.__scopeId || null, t;
}
function Kn(e, t = Un, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Mi(-1);
		let i = Gn(t), a = ki.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = ki.length; e > a; e--) Ai();
			Gn(i), r._d && Mi(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function G(e, t) {
	if (Un === null) return e;
	let n = pa(Un), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = S] = t[e];
		i && (M(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && xn(a), r.push({
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
function qn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (at(), Cn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), ot());
	}
}
function Jn(e, t, n = !1) {
	let r = ea();
	if (r || Rr) {
		let i = Rr ? Rr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && M(t) ? t.call(r && r.proxy) : t;
	}
}
var Yn = /* @__PURE__ */ Symbol.for("v-scx"), Xn = () => Jn(Yn);
function Zn(e, t, n) {
	return Qn(e, t, n);
}
function Qn(e, t, n = S) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = D({}, n), c = t && r || !t && a !== "post", l;
	if (oa) {
		if (a === "sync") {
			let e = Xn();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = w, e.resume = w, e.pause = w, e;
		}
	}
	let u = $i;
	s.call = (e, t, n) => Cn(e, u, t, n);
	let d = !1;
	a === "post" ? s.scheduler = (e) => {
		e.i = u, K(e, u && u.suspense);
	} : a !== "sync" && (d = !0, s.scheduler = (e, t) => {
		t ? e() : Pn(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let f = bn(e, t, s);
	return oa && (l ? l.push(f) : c && f()), f;
}
var $n = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ Symbol("_vte"), tr = (e) => e.__isTeleport, nr = (e) => e && (e.disabled || e.disabled === ""), rr = (e) => e && (e.defer || e.defer === ""), ir = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ar = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, or = (e, t) => {
	let n = e && e.to;
	return N(n) ? t ? t(n) : null : n;
}, sr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = nr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = nr(e.props), r = e.target = or(e.props, m), a = fr(r, e, h, p);
			r && (o !== "svg" && ir(r) ? o = "svg" : o !== "mathml" && ar(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), dr(e, !1)));
		}, S = (e) => {
			let t = () => {
				if ($n.get(e) === t) {
					if ($n.delete(e), nr(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), dr(e, !0);
					}
					x(e);
				}
			};
			$n.set(e, t), K(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), rr(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), dr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = $n.get(e);
			if (u) {
				u.flags |= 8, $n.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = nr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || ir(p) ? o = "svg" : (o === "mathml" || ar(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), yi(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : cr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = or(t.props, m);
				e && (t.target = e, cr(t, e, null, l, 0));
			} else g && cr(t, p, h, l, 1);
			dr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = nr(f), m = a || !p, h = $n.get(e);
		if (h && (h.flags |= 8, $n.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: cr,
	hydrate: lr
};
function cr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !$n.has(e) && (!d || nr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function lr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
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
	let m = t.target = or(t.props, c), h = nr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || fr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || fr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), dr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var ur = sr;
function dr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function fr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[er] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var pr = /* @__PURE__ */ Symbol("_leaveCb");
function mr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Di) {
			t = n;
			break;
		}
	}
	return t;
}
function hr(e) {
	if (!wr(e)) return tr(e.type) && e.children ? mr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && M(n.default)) return n.default();
	}
}
function gr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		gr(tr(n.type) && hr(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === q && A(e.children)) {
		let n = Wr(e.children, !1);
		n && gr(n, t);
	}
}
function _r(e) {
	if (e.component) return _r(e.component.subTree);
	if (e.type === q) {
		let t = A(e.children) && Wr(e.children, !1);
		return t ? _r(t) : void 0;
	}
	if (e.type !== Di) return e;
}
function vr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function yr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var br = /* @__PURE__ */ new WeakMap();
function xr(e, t, n, r, i = !1) {
	if (A(e)) {
		e.forEach((e, a) => xr(e, t && (A(t) ? t[a] : t), n, r, i));
		return;
	}
	if (Cr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && xr(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? pa(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === S ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ B(d), p = d === S ? ee : (e) => !yr(u, e) && k(f, e), m = (e, t) => !(t && yr(u, t));
	if (l != null && l !== c) {
		if (Sr(t), N(l)) u[l] = null, p(l) && (d[l] = null);
		else if (/* @__PURE__ */ V(l)) {
			let e = t;
			m(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (M(c)) Sn(c, s, 12, [o, u]);
	else {
		let t = N(c), r = /* @__PURE__ */ V(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? p(c) ? d[c] : u[c] : m(c) || !e.k ? c.value : u[e.k];
					if (i) A(n) && O(n, a);
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
					s(), br.delete(e);
				};
				t.id = -1, br.set(e, t), K(t, n);
			} else Sr(e), s();
		}
	}
}
function Sr(e) {
	let t = br.get(e);
	t && (t.flags |= 8, br.delete(e));
}
Ce().requestIdleCallback, Ce().cancelIdleCallback;
var Cr = (e) => !!e.type.__asyncLoader, wr = (e) => e.type.__isKeepAlive;
function Tr(e, t, n = $i, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			at();
			let i = ra(n), a = Cn(t, n, e, r);
			return i(), ot(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Er = (e) => (t, n = $i) => {
	oa && e !== "sp" || Tr(e, (...e) => t(...e), n);
}, Dr = Er("m"), Or = Er("bum"), kr = /* @__PURE__ */ Symbol.for("v-ndc");
function Ar(e, t, n, r) {
	let i, a = n && n[r], o = A(e);
	if (o || N(e)) {
		let n = o && /* @__PURE__ */ tn(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ rn(e), s = /* @__PURE__ */ nn(e), e = vt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? cn(sn(e[n])) : sn(e[n]) : e[n], n, void 0, a && a[n]);
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
var jr = (e) => e ? aa(e) ? pa(e) : jr(e.parent) : null, Mr = /* @__PURE__ */ D(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => jr(e.parent),
	$root: (e) => jr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => e.type,
	$forceUpdate: (e) => e.f ||= () => {
		Pn(e.update);
	},
	$nextTick: (e) => e.n ||= Mn.bind(e.proxy),
	$watch: (e) => w
}), Nr = (e, t) => e !== S && !e.__isScriptSetup && k(e, t), Pr = {
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
			else if (Nr(r, t)) return o[t] = 1, r[t];
			else if (k(a, t)) return o[t] = 3, a[t];
			else if (n !== S && k(n, t)) return o[t] = 4, n[t];
			else o[t] = 0;
		}
		let l = Mr[t], u, d;
		if (l) return t === "$attrs" && z(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== S && k(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, k(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Nr(i, t) ? (i[t] = n, !0) : k(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || Nr(t, s) || k(a, s) || k(r, s) || k(Mr, s) || k(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? k(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Fr() {
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
var Ir = 0;
function Lr(e, t) {
	return function(n, r = null) {
		M(n) || (n = D({}, n)), r != null && !P(r) && (r = null);
		let i = Fr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Ir++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ha,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && M(e.install) ? (a.add(e), e.install(c, ...t)) : M(e) && (a.add(e), e(c, ...t))), c;
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
					let u = c._ceVNode || zi(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, pa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Cn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Rr;
				Rr = c;
				try {
					return e();
				} finally {
					Rr = t;
				}
			}
		};
		return c;
	};
}
var Rr = null, zr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${F(t)}Modifiers`] || e[`${he(t)}Modifiers`];
function Br(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || S, i = n, a = t.startsWith("update:"), o = a && zr(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => N(e) ? e.trim() : e)), o.number && (i = i.map(xe)));
	let s, c = r[s = _e(t)] || r[s = _e(F(t))];
	!c && a && (c = r[s = _e(he(t))]), c && Cn(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, Cn(l, e, 6, i);
	}
}
function Vr(e, t, n = !1) {
	let r = t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {};
	return a ? (A(a) ? a.forEach((e) => o[e] = null) : D(o, a), P(e) && r.set(e, o), o) : (P(e) && r.set(e, null), null);
}
function Hr(e, t) {
	return !e || !T(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), k(e, t[0].toLowerCase() + t.slice(1)) || k(e, he(t)) || k(e, t));
}
function Ur(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, g = Gn(e), _, v;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			_ = Wi(l.call(t, e, u, d, p, f, m)), v = s;
		} else {
			let e = t;
			_ = Wi(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), v = t.props ? s : Gr(s);
		}
	} catch (t) {
		ki.length = 0, wn(t, e, 1), _ = zi(Di);
	}
	let y = _;
	if (v && h !== !1) {
		let e = Object.keys(v), { shapeFlag: t } = y;
		e.length && t & 7 && (a && e.some(E) && (v = Kr(v, a)), y = Hi(y, v, !1, !0));
	}
	return n.dirs && (y = Hi(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && gr(tr(y.type) && hr(y) || y, n.transition), _ = y, Gn(g), _;
}
function Wr(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Fi(r)) {
			if (r.type !== Di || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Gr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || T(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Kr = (e, t) => {
	let n = {};
	for (let r in e) E(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function qr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Jr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Yr(o, r, n) && !Hr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Jr(r, o, l) : !!o;
	return !1;
}
function Jr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!k(e, a) || Yr(t, e, a) && !Hr(n, a)) return !0;
	}
	return !1;
}
function Yr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && P(r) && P(i) ? !Ie(r, i) : r !== i;
}
function Xr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Zr = {}, Qr = () => Object.create(Zr), $r = (e) => Object.getPrototypeOf(e) === Zr;
function ei(e, t, n, r = !1) {
	let i = {}, a = Qr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ni(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Qt(i) : e.type.props ? i : a, e.attrs = a;
}
function ti(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ B(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Hr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (k(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = F(o);
						i[t] = ri(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ni(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (k(t, a) || (r = he(a)) !== a && k(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ri(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && k(t, e) || (delete a[e], l = !0);
	}
	l && gt(e.attrs, "set", "");
}
function ni(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (de(c)) continue;
		let l = t[c], u;
		i && k(i, u = F(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : Hr(e.emitsOptions, c) || c in r && l === r[c] || (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ B(n), r = s || S;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = ri(i, t, s, r[s], e, !k(r, s));
		}
	}
	return o;
}
function ri(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = k(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && M(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ra(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === he(n)) && (r = !0));
	}
	return r;
}
function ii(e, t, n = !1) {
	let r = t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [];
	if (!a) return P(e) && r.set(e, C), C;
	if (A(a)) for (let e = 0; e < a.length; e++) {
		let t = F(a[e]);
		ai(t) && (o[t] = S);
	}
	else if (a) for (let e in a) {
		let t = F(e);
		if (ai(t)) {
			let n = a[e], r = o[t] = A(n) || M(n) ? { type: n } : D({}, n), i = r.type, c = !1, l = !0;
			if (A(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = M(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				}
				n === "String" && (l = !1);
			}
			else c = M(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || k(r, "default")) && s.push(t);
		}
	}
	let c = [o, s];
	return P(e) && r.set(e, c), c;
}
function ai(e) {
	return e[0] !== "$" && !de(e);
}
var oi = (e) => e === "_" || e === "_ctx" || e === "$stable", si = (e) => A(e) ? e.map(Wi) : [Wi(e)], ci = (e, t, n) => {
	if (t._n) return t;
	let r = Kn((...e) => si(t(...e)), n);
	return r._c = !1, r;
}, li = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (oi(n)) continue;
		let i = e[n];
		if (M(i)) t[n] = ci(n, i, r);
		else if (i != null) {
			let e = si(i);
			t[n] = () => e;
		}
	}
}, ui = (e, t) => {
	let n = si(t);
	e.slots.default = () => n;
}, di = (e, t, n) => {
	for (let r in t) (n || !oi(r)) && (e[r] = t[r]);
}, fi = (e, t, n) => {
	let r = e.slots = Qr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (di(r, t, n), n && be(r, "_", e, !0)) : li(t, r);
	} else t && ui(e, t);
}, pi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = S;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : di(i, t, n) : (a = !t.$stable, li(t, i)), o = t;
	} else t && (ui(e, t), o = { default: 1 });
	if (a) for (let e in i) !oi(e) && o[e] == null && delete i[e];
}, K = Ti;
function mi(e) {
	return hi(e);
}
function hi(e, t) {
	let n = Ce();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p = w, insertStaticContent: m } = e, h = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ii(e, t) && (r = fe(e), oe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === C && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ei:
				g(e, t, n, r);
				break;
			case Di:
				_(e, t, n, r);
				break;
			case Oi:
				e ?? v(t, n, r, o);
				break;
			case q:
				k(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? x(e, t, n, r, i, a, o, s, c) : d & 6 ? A(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, F);
		}
		u != null && i ? xr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && xr(e.ref, null, a, e, !0);
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
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), D(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && E(e.children, f, null, i, s, gi(e, c), l, d), _ && qn(e, null, i, "created"), T(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !de(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && Ji(p, i, e);
		}
		_ && qn(e, null, i, "beforeMount");
		let v = vi(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && K(() => {
			try {
				p && Ji(p, i, e), v && g.enter(f), _ && qn(e, null, i, "mounted");
			} finally {}
		}, s);
	}, T = (e, t, n, r, i) => {
		if (n && p(e, n), r) for (let t = 0; t < r.length; t++) p(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || wi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				T(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, E = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Gi(e[l]) : Wi(e[l]);
			h(null, c, t, n, r, i, a, o, s);
		}
	}, D = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: d, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || S, m = t.props || S, h;
		if (n && _i(n, !1), (h = m.onVnodeBeforeUpdate) && Ji(h, n, t, e), f && qn(t, e, n, "beforeUpdate"), n && _i(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (l = 0, s = !1, d = null), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && u(c, ""), d ? O(e.dynamicChildren, d, c, n, r, gi(t, i), o) : s || N(e, t, c, null, n, r, gi(t, i), o, !1), l > 0) {
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
			h && Ji(h, n, t, e), f && qn(t, e, n, "updated");
		}, r);
	}, O = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Ci(c), f = u && (c.type === q || !Ii(c, l) || c.shapeFlag & 198) ? d(u) : n;
			h(c, l, f, null, r, i, a, o, !0);
		}
	}, te = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== S) for (let o in t) !de(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (de(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, k = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), E(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (O(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && yi(e, t, !0)) : N(e, t, n, f, a, o, c, l, u);
	}, A = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : j(t, n, r, i, a, o, c) : ne(e, t, c);
	}, j = (e, t, n, r, i, a, o) => {
		let s = e.component = Qi(e, r, i);
		if (wr(e) && (s.ctx.renderer = F), sa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, re, o, a), !e.el) {
				let r = s.subTree = zi(Di);
				_(null, r, t, n), e.placeholder = r.el;
			}
		} else re(s, e, t, n, i, a, o);
	}, ne = (e, t, n) => {
		let r = t.component = e.component;
		if (qr(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, M(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, re = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = xi(e);
					if (n) {
						t && (t.el = c.el, M(e, t, o)), n.asyncDep.then(() => {
							K(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, f;
				_i(e, !1), t ? (t.el = c.el, M(e, t, o)) : t = c, n && ye(n), (f = t.props && t.props.onVnodeBeforeUpdate) && Ji(f, s, t, c), _i(e, !0);
				let p = Ur(e), m = e.subTree;
				e.subTree = p, h(m, p, d(m.el), fe(m), e, i, a), t.el = p.el, u === null && Xr(e, p.el), r && K(r, i), (f = t.props && t.props.onVnodeUpdated) && K(() => Ji(f, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Cr(t);
				if (_i(e, !1), l && ye(l), !m && (o = c && c.onVnodeBeforeMount) && Ji(o, d, t), _i(e, !0), s && he) {
					let t = () => {
						e.subTree = Ur(e), he(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Ur(e);
					h(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && K(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					K(() => Ji(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Cr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && K(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new We(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Pn(u), _i(e, !0), l();
	}, M = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ti(e, t.props, r, n), pi(e, t.children, n), at(), Ln(e), ot();
	}, N = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				P(l, f, n, r, i, a, o, s, c);
				return;
			}
			if (p & 256) {
				ie(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && ue(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? P(l, f, n, r, i, a, o, s, c) : ue(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && E(f, n, r, i, a, o, s, c));
	}, ie = (e, t, n, r, i, a, o, s, c) => {
		e ||= C, t ||= C;
		let l = e.length, u = t.length, d = Math.min(l, u), f = 0;
		for (; f < d; f++) {
			let r = t[f] = c ? Gi(t[f]) : Wi(t[f]);
			h(e[f], r, n, null, i, a, o, s, c);
		}
		l > u ? ue(e, i, a, !0, !1, d) : E(t, n, r, i, a, o, s, c, d);
	}, P = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, f = u - 1;
		for (; l <= d && l <= f;) {
			let r = e[l], u = t[l] = c ? Gi(t[l]) : Wi(t[l]);
			if (Ii(r, u)) h(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= f;) {
			let r = e[d], l = t[f] = c ? Gi(t[f]) : Wi(t[f]);
			if (Ii(r, l)) h(r, l, n, null, i, a, o, s, c);
			else break;
			d--, f--;
		}
		if (l > d) {
			if (l <= f) {
				let e = f + 1, d = e < u ? t[e].el : r;
				for (; l <= f;) h(null, t[l] = c ? Gi(t[l]) : Wi(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > f) for (; l <= d;) oe(e[l], i, a, !0), l++;
		else {
			let p = l, m = l, g = /* @__PURE__ */ new Map();
			for (l = m; l <= f; l++) {
				let e = t[l] = c ? Gi(t[l]) : Wi(t[l]);
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
				else for (_ = m; _ <= f; _++) if (S[_ - m] === 0 && Ii(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? oe(r, i, a, !0) : (S[u - m] = l + 1, u >= x ? x = u : b = !0, h(r, t[u], n, null, i, a, o, s, c), v++);
			}
			let w = b ? bi(S) : C;
			for (_ = w.length - 1, l = y - 1; l >= 0; l--) {
				let e = m + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || Ci(f) : r;
				S[l] === 0 ? h(null, d, n, p, i, a, o, s, c) : b && (_ < 0 || l !== w[_] ? ae(d, n, p, 2) : _--);
			}
		}
	}, ae = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ae(e.component.subTree, t, n, a);
		else if (d & 128) e.suspense.move(t, n, a);
		else if (d & 64) c.move(e, t, n, F);
		else if (c === q) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) ae(u[e], t, n, a);
			r(e.anchor, t, n);
		} else if (c === Oi) y(e, t, n);
		else if (a !== 2 && d & 1 && l) {
			if (a === 0) l.persisted && !s[pr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), K(() => l.enter(s), o));
			else {
				let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? i(s) : r(s, t, n);
				}, d = () => {
					let e = s._isLeaving || !!s[pr];
					s._isLeaving && s[pr](!0), l.persisted && !e ? u() : a(s, () => {
						u(), c && c();
					});
				};
				o ? o(s, u, d) : d();
			}
		} else r(s, t, n);
	}, oe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (at(), xr(s, null, n, e, !0), ot()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Cr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ji(_, t, e), u & 6) le(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && qn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, F, r) : l && !l.hasOnce && (a !== q || d > 0 && d & 64) ? ue(l, t, n, !1, !0) : (a === q && d & 384 || !i && u & 16) && ue(c, t, n), r && se(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && K(() => {
			_ && Ji(_, t, e), h && qn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, se = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e, o = t === q;
		if (o && !a) {
			ce(n, r);
			return;
		}
		if (t === Oi) {
			b(e), a && !a.persisted && a.afterLeave && a.afterLeave();
			return;
		}
		let s = o ? _r(e) : e, c = () => {
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
		Si(c), Si(l), r && ye(r), i.stop(), a ? (a.flags |= 8, oe(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, oe(o, e, t, n)), s && K(s, t), K(() => {
			e.isUnmounted = !0;
		}, t);
	}, ue = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) oe(e[o], t, n, r, i);
	}, fe = (e) => {
		if (e.shapeFlag & 6) return fe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = f(e.anchor || e.el), n = t && t[er];
		return n ? f(n) : t;
	}, pe = (e, t, n) => {
		Bn(() => {
			e == null ? t._vnode && oe(t._vnode, null, null, !0) : h(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Zi());
	}, F = {
		p: h,
		um: oe,
		m: ae,
		r: se,
		mt: j,
		mc: E,
		pc: N,
		pbc: O,
		n: fe,
		o: e
	}, me, he;
	return t && ([me, he] = t(F)), {
		render: pe,
		hydrate: me,
		createApp: Lr(pe, me)
	};
}
function gi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function _i({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (A(r) && A(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Gi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && yi(t, a)), a.type === Ei && (a.patchFlag === -1 && (a = i[e] = Gi(a)), a.el = t.el), a.type === Di && !a.el && (a.el = t.el);
	}
}
function bi(e) {
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
function xi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : xi(t);
}
function Si(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ci(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ci(t.subTree) : null;
}
var wi = (e) => e.__isSuspense;
function Ti(e, t) {
	t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : In(e);
}
var q = /* @__PURE__ */ Symbol.for("v-fgt"), Ei = /* @__PURE__ */ Symbol.for("v-txt"), Di = /* @__PURE__ */ Symbol.for("v-cmt"), Oi = /* @__PURE__ */ Symbol.for("v-stc"), ki = [], J = null;
function Y(e = !1) {
	ki.push(J = e ? null : []);
}
function Ai() {
	ki.pop(), J = ki[ki.length - 1] || null;
}
var ji = 1;
function Mi(e, t = !1) {
	ji += e, e < 0 && J && t && (J.hasOnce = !0);
}
function Ni(e) {
	return e.dynamicChildren = ji > 0 ? J || C : null, Ai(), ji > 0 && J && J.push(e), e;
}
function X(e, t, n, r, i, a) {
	return Ni(Z(e, t, n, r, i, a, !0));
}
function Pi(e, t, n, r, i) {
	return Ni(zi(e, t, n, r, i, !0));
}
function Fi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ii(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Li = ({ key: e }) => e ?? null, Ri = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : N(e) || /* @__PURE__ */ V(e) || M(e) ? {
	i: Un,
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
		key: t && Li(t),
		ref: t && Ri(t),
		scopeId: Wn,
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
		ctx: Un
	};
	return s ? (Ki(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= N(n) ? 8 : 16), ji > 0 && !o && J && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && J.push(c), c;
}
var zi = Bi;
function Bi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== kr || (e = Di), Fi(e)) {
		let r = Hi(e, t, !0);
		return n && Ki(r, n), ji > 0 && !a && J && (r.shapeFlag & 6 ? J[J.indexOf(e)] = r : J.push(r)), r.patchFlag = -2, r;
	}
	if (ma(e) && (e = e.__vccOpts), t) {
		t = Vi(t);
		let { class: e, style: n } = t;
		e && !N(e) && (t.class = ke(e)), P(n) && (/* @__PURE__ */ an(n) && !A(n) && (n = D({}, n)), t.style = we(n));
	}
	let o = N(e) ? 1 : wi(e) ? 128 : tr(e) ? 64 : P(e) ? 4 : M(e) ? 2 : 0;
	return Z(e, t, n, r, i, o, a, !0);
}
function Vi(e) {
	return e ? /* @__PURE__ */ an(e) || $r(e) ? D({}, e) : e : null;
}
function Hi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? qi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Li(l),
		ref: t && t.ref ? n && a ? A(a) ? a.concat(Ri(t)) : [a, Ri(t)] : Ri(t) : a,
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
		ssContent: e.ssContent && Hi(e.ssContent),
		ssFallback: e.ssFallback && Hi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && gr(u, c.clone(u)), u;
}
function Ui(e = " ", t = 0) {
	return zi(Ei, null, e, t);
}
function Q(e = "", t = !1) {
	return t ? (Y(), Pi(Di, null, e)) : zi(Di, null, e);
}
function Wi(e) {
	return e == null || typeof e == "boolean" ? zi(Di) : A(e) ? zi(q, null, e.slice()) : Fi(e) ? Gi(e) : zi(Ei, null, String(e));
}
function Gi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hi(e);
}
function Ki(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (A(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Ki(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !$r(t) ? t._ctx = Un : r === 3 && Un && (Un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (M(t)) {
		if (r & 65) {
			Ki(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Un
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Ui(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function qi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = ke([t.class, r.class]));
		else if (e === "style") t.style = we([t.style, r.style]);
		else if (T(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(A(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !E(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ji(e, t, n, r = null) {
	Cn(e, t, 7, [n, r]);
}
var Yi = Fr(), Xi = 0;
function Zi() {
	return Xi;
}
function Qi(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || Yi, a = {
		uid: Xi++,
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
		scope: new Ve(!0),
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
		propsOptions: ii(r, i),
		emitsOptions: Vr(r, i),
		emit: null,
		emitted: null,
		propsDefaults: S,
		inheritAttrs: r.inheritAttrs,
		ctx: S,
		data: S,
		props: S,
		attrs: S,
		slots: S,
		refs: S,
		setupState: S,
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Br.bind(null, a), e.ce && e.ce(a), a;
}
var $i = null, ea = () => $i || Un, ta, na;
{
	let e = Ce(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ta = t("__VUE_INSTANCE_SETTERS__", (e) => $i = e), na = t("__VUE_SSR_SETTERS__", (e) => oa = e);
}
var ra = (e) => {
	let t = $i;
	return ta(e), e.scope.on(), () => {
		e.scope.off(), ta(t);
	};
}, ia = () => {
	$i && $i.scope.off(), ta(null);
};
function aa(e) {
	return e.vnode.shapeFlag & 4;
}
var oa = !1;
function sa(e, t = !1, n = !1) {
	t && na(t);
	let { props: r, children: i } = e.vnode, a = aa(e);
	ei(e, r, a, t), fi(e, i, n || t);
	let o = a ? ca(e, t) : void 0;
	return t && na(!1), o;
}
function ca(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pr);
	let { setup: r } = n;
	if (r) {
		at();
		let n = e.setupContext = r.length > 1 ? fa(e) : null, i = ra(e), a = Sn(r, e, 0, [e.props, n]), o = ae(a);
		if (ot(), i(), (o || e.sp) && !Cr(e) && vr(e), o) {
			if (a.then(ia, ia), t) return a.then((n) => {
				na(!0);
				try {
					la(e, n, t);
				} finally {
					na(!1);
				}
			}).catch((t) => {
				wn(t, e, 0);
			});
			e.asyncDep = a;
		} else la(e, a, t);
	} else ua(e, t);
}
function la(e, t, n) {
	M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : P(t) && (e.setupState = pn(t)), ua(e, n);
}
function ua(e, t, n) {
	let r = e.type;
	e.render ||= r.render || w;
}
var da = { get(e, t) {
	return z(e, "get", ""), e[t];
} };
function fa(e) {
	return {
		attrs: new Proxy(e.attrs, da),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function pa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(pn(on(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Mr) return Mr[n](e);
		},
		has(e, t) {
			return t in e || t in Mr;
		}
	}) : e.proxy;
}
function ma(e) {
	return M(e) && "__vccOpts" in e;
}
var $ = (e, t) => /* @__PURE__ */ hn(e, t, oa), ha = "3.5.44", ga = void 0, _a = typeof window < "u" && window.trustedTypes;
if (_a) try {
	ga = /* @__PURE__ */ _a.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var va = ga ? (e) => ga.createHTML(e) : (e) => e, ya = "http://www.w3.org/2000/svg", ba = "http://www.w3.org/1998/Math/MathML", xa = typeof document < "u" ? document : null, Sa = xa && /* @__PURE__ */ xa.createElement("template"), Ca = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? xa.createElementNS(ya, e) : t === "mathml" ? xa.createElementNS(ba, e) : n ? xa.createElement(e, { is: n }) : xa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => xa.createTextNode(e),
	createComment: (e) => xa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => xa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Sa.innerHTML = va(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Sa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, wa = /* @__PURE__ */ Symbol("_vtc");
function Ta(e, t, n) {
	let r = e[wa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ea = /* @__PURE__ */ Symbol("_vod"), Da = /* @__PURE__ */ Symbol("_vsh"), Oa = /* @__PURE__ */ Symbol(""), ka = /(?:^|;)\s*display\s*:/;
function Aa(e, t, n) {
	let r = e.style, i = N(n), a = !1;
	if (n && !i) {
		if (t) {
			if (N(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Ma(r, t, "");
			}
			else for (let e in t) n[e] ?? Ma(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ma(r, i, "") : Ia(e, i, !N(t) && t ? t[i] : void 0, o) || Ma(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Oa];
			e && (n += ";" + e), r.cssText = n, a = ka.test(n);
		}
	} else t && e.removeAttribute("style");
	Ea in e && (i && t === n || (e[Ea] = a ? r.display : ""), e[Da] && (r.display = "none"));
}
var ja = /\s*!important$/;
function Ma(e, t, n) {
	if (A(n)) n.forEach((n) => Ma(e, t, n));
	else if (n ??= "", t.startsWith("--")) ja.test(n) ? e.setProperty(t, n.replace(ja, ""), "important") : e.setProperty(t, n);
	else {
		let r = Fa(e, t);
		ja.test(n) ? e.setProperty(he(r), n.replace(ja, ""), "important") : e[r] = n;
	}
}
var Na = [
	"Webkit",
	"Moz",
	"ms"
], Pa = {};
function Fa(e, t) {
	let n = Pa[t];
	if (n) return n;
	let r = F(t);
	if (r !== "filter" && r in e) return Pa[t] = r;
	r = ge(r);
	for (let n = 0; n < Na.length; n++) {
		let i = Na[n] + r;
		if (i in e) return Pa[t] = i;
	}
	return t;
}
function Ia(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && N(r) && n === r;
}
var La = "http://www.w3.org/1999/xlink";
function Ra(e, t, n, r, i, a = Ae(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(La, t.slice(6, t.length)) : e.setAttributeNS(La, t, n) : n == null || a && !je(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : ie(n) ? String(n) : n);
}
function za(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? va(n) : n);
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
		r === "boolean" ? n = je(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ba(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Va(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ha = /* @__PURE__ */ Symbol("_vei");
function Ua(e, t, n, r, i = null) {
	let a = e[Ha] || (e[Ha] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ka(t);
		r ? Ba(e, n, a[t] = Xa(r, i), s) : o && (Va(e, n, o, s), a[t] = void 0);
	}
}
var Wa = /(Once|Passive|Capture)$/, Ga = /^on:?(?:Once|Passive|Capture)$/;
function Ka(e) {
	let t, n;
	for (; (n = e.match(Wa)) && !Ga.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
var qa = 0, Ja = /* @__PURE__ */ Promise.resolve(), Ya = () => qa ||= (Ja.then(() => qa = 0), Date.now());
function Xa(e, t) {
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
				e && Cn(e, t, 5, a);
			}
		} else Cn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Ya(), n;
}
var Za = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Qa = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ta(e, r, o) : t === "style" ? Aa(e, n, r) : T(t) ? E(t) || Ua(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : $a(e, t, r, o)) ? (za(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Ra(e, t, r, o, a, t !== "value")) : e._isVueCE && (eo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !N(r))) ? za(e, F(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ra(e, t, r, o));
};
function $a(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Za(t) && M(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Za(t) && N(n) ? !1 : t in e;
}
function eo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = F(t);
	return Array.isArray(n) ? n.some((e) => F(e) === r) : Object.keys(n).some((e) => F(e) === r);
}
var to = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return A(t) ? (e) => ye(t, e) : t;
};
function no(e) {
	e.target.composing = !0;
}
function ro(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var io = /* @__PURE__ */ Symbol("_assign"), ao = /* @__PURE__ */ Symbol("_initialValue");
function oo(e, t, n) {
	return t && (e = e.trim()), n && (e = xe(e)), e;
}
var so = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[ao] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[ao] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[io] = to(i);
		let a = r || i.props && i.props.type === "number";
		Ba(e, t ? "change" : "input", (t) => {
			t.target.composing || e[io](oo(e.value, n, a));
		}), (n || a) && Ba(e, "change", () => {
			e.value = oo(e.value, n, a);
		}), t || (Ba(e, "compositionstart", no), Ba(e, "compositionend", ro), Ba(e, "change", ro));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[ao];
		delete e[ao], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[io](oo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[io] = to(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? xe(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, co = {
	deep: !0,
	created(e, t, n) {
		e[io] = to(n), Ba(e, "change", () => {
			let t = e._modelValue, n = mo(e), r = e.checked, i = e[io];
			if (A(t)) {
				let e = Le(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (ne(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(ho(e, r));
		});
	},
	mounted: lo,
	beforeUpdate(e, t, n) {
		e[io] = to(n), lo(e, t, n);
	}
};
function lo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (A(t)) i = Le(t, r.props.value) > -1;
	else if (ne(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ie(t, ho(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var uo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Ba(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? xe(mo(e)) : mo(e)), r = e.multiple, i = r ? ne(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? A(i) ? t.slice() : t : i];
			try {
				e[io](i);
			} finally {
				Mn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[io] = to(r);
	},
	mounted(e, { value: t }) {
		po(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[io] = to(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, n && n[0] === e.multiple && fo(t, n[1], n[0]) || po(e, t);
	}
};
function fo(e, t, n) {
	if (!n || A(e)) return Ie(e, t);
	if (ne(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function po(e, t) {
	let n = e.multiple, r = A(t);
	if (!n || r || ne(t)) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = mo(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : Le(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (Ie(mo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function mo(e) {
	return "_value" in e ? e._value : e.value;
}
function ho(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var go = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], _o = {
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
	exact: (e, t) => go.some((n) => e[`${n}Key`] && !t.includes(n))
}, vo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = _o[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, yo = /* @__PURE__ */ D({ patchProp: Qa }, Ca), bo;
function xo() {
	return bo ||= mi(yo);
}
var So = ((...e) => {
	let t = xo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = wo(e);
		if (!r) return;
		let i = t._component;
		M(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Co(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Co(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function wo(e) {
	return N(e) ? document.querySelector(e) : e;
}
// src/catalogue/ResourceCard.vue
var To = ["aria-busy"], Eo = [
	"title",
	"aria-label",
	"disabled"
], Do = ["src", "alt"], Oo = [
	"href",
	"title",
	"aria-label"
], ko = ["src", "alt"], Ao = { class: "card-head" }, jo = { class: "card-actions" }, Mo = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled"
], No = [
	"title",
	"aria-label",
	"disabled"
], Po = [
	"title",
	"aria-label",
	"disabled"
], Fo = [
	"title",
	"aria-label",
	"disabled"
], Io = { class: "meta" }, Lo = {
	key: 0,
	class: "tag submission"
}, Ro = { class: "tag" }, zo = { class: "tag lang" }, Bo = {
	key: 1,
	class: "tag format"
}, Vo = {
	key: 2,
	class: "tag flash"
}, Ho = ["aria-label"], Uo = { class: "rating-label" }, Wo = {
	key: 0,
	class: "rating-summary"
}, Go = { class: "stars" }, Ko = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled",
	"onClick"
], qo = { class: "note" }, Jo = {
	key: 2,
	class: "health"
}, Yo = {
	key: 3,
	class: "note submission-by"
}, Xo = ["role"], Zo = {
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
		}), b = $(() => a.context.favorites.has(_.value)), x = $(() => a.context.userRatings.get(_.value) || 0), S = $(() => a.context.ratingSummary.get(_.value)), C = $(() => a.context.brokenSummary.get(_.value)), w = $(() => a.context.userReports.has(_.value)), ee = $(() => a.context.backendMode === "remote"), T = $(() => a.context.reportByUrl.get(c(a.game.url))), E = $(() => T.value ? T.value.ok ? "" : n(T.value.severity === "warning" ? "link_warn" : "link_error", T.value.error || `HTTP ${T.value.httpStatus || "error"}`) : n("not_checked")), D = $(() => te(a.game.image) || f), O = $(() => te(a.game.url));
		function te(e) {
			if (!e) return "";
			try {
				let t = new URL(e, window.location.href);
				return ["http:", "https:"].includes(t.protocol) && !t.username && !t.password ? t.href : "";
			} catch {
				return "";
			}
		}
		let k = $(() => a.game.flash || [
			"jclic",
			"eduhoot",
			"llibres"
		].includes(a.game.format));
		function A() {
			O.value && (a.game.flash ? m(O.value, a.game.title) : a.game.format === "jclic" ? h(O.value, a.game.title) : g(O.value, a.game.title, a.game.format === "llibres"));
		}
		async function j(e, t) {
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
			class: ke(["card", {
				submission: r.game._isSubmission,
				broken: T.value && !T.value.ok
			}]),
			"aria-busy": l.value
		}, [
			k.value ? (Y(), X("button", {
				key: 0,
				type: "button",
				class: "card-image-link",
				title: U(n)(r.game.flash ? "play_ruffle" : "open_game"),
				"aria-label": U(n)(r.game.flash ? "play_ruffle" : "open_game"),
				disabled: !O.value,
				onClick: A
			}, [Z("img", {
				class: "card-image",
				src: p.value ? U(f) : D.value,
				alt: r.game.title || U(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: a[0] ||= (e) => p.value = !0
			}, null, 40, Do)], 8, Eo)) : (Y(), X("a", {
				key: 1,
				class: "card-image-link",
				href: O.value || void 0,
				target: "_blank",
				rel: "noreferrer noopener",
				title: U(n)("open_game"),
				"aria-label": U(n)("open_game")
			}, [Z("img", {
				class: "card-image",
				src: p.value ? U(f) : D.value,
				alt: r.game.title || U(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: a[1] ||= (e) => p.value = !0
			}, null, 40, ko)], 8, Oo)),
			Z("div", Ao, [Z("h3", null, I(v.value), 1), Z("div", jo, [
				Z("button", {
					type: "button",
					class: ke(["fav-btn", { active: b.value }]),
					title: U(n)(b.value ? "favorite_remove" : "favorite_add"),
					"aria-label": U(n)(b.value ? "favorite_remove" : "favorite_add"),
					"aria-pressed": b.value,
					disabled: l.value,
					onClick: a[2] ||= (e) => j("favorite")
				}, "❤", 10, Mo),
				ee.value ? (Y(), X("button", {
					key: 0,
					type: "button",
					class: ke(["report-btn", { active: w.value }]),
					title: U(n)(w.value ? "report_broken_active" : "report_broken"),
					"aria-label": U(n)(w.value ? "report_broken_active" : "report_broken"),
					disabled: l.value || w.value,
					onClick: a[3] ||= (e) => j("report")
				}, "⚠", 10, No)) : Q("", !0),
				ee.value && r.context.isAdmin ? (Y(), X("button", {
					key: 1,
					type: "button",
					class: "admin-hide-btn",
					title: U(n)("admin_hide_resource"),
					"aria-label": U(n)("admin_hide_resource"),
					disabled: l.value,
					onClick: a[4] ||= (e) => j("hide")
				}, "×", 8, Po)) : Q("", !0),
				ee.value && r.context.isAdmin && C.value?.adminReported ? (Y(), X("button", {
					key: 2,
					type: "button",
					class: "admin-unhide-btn",
					title: U(n)("admin_unhide_resource"),
					"aria-label": U(n)("admin_unhide_resource"),
					disabled: l.value,
					onClick: a[5] ||= (e) => j("unhide")
				}, "↩", 8, Fo)) : Q("", !0)
			])]),
			Z("div", Io, [
				r.game._isSubmission ? (Y(), X("span", Lo, I(U(n)("submission_badge")), 1)) : Q("", !0),
				Z("span", Ro, I(U(e)(r.game.area || "General")), 1),
				(Y(!0), X(q, null, Ar(r.game.levels || (r.game.level ? [r.game.level] : [U(n)("no_level")]), (e) => (Y(), X("span", {
					key: e,
					class: "tag"
				}, I(U(i)(e)), 1))), 128)),
				Z("span", zo, I(U(s)(r.game) || U(n)("catalogue_no_language")), 1),
				[
					"jclic",
					"h5p",
					"eduhoot",
					"scorm",
					"llibres"
				].includes(r.game.format) ? (Y(), X("span", Bo, I(r.game.format.toUpperCase()), 1)) : Q("", !0),
				r.game.flash ? (Y(), X("span", Vo, "Flash")) : Q("", !0)
			]),
			Z("div", {
				class: "rating",
				role: "group",
				"aria-label": U(n)("rating_group_label")
			}, [
				Z("span", Uo, I(U(n)("rating_label")), 1),
				ee.value ? (Y(), X("span", Wo, I(S.value?.count ? U(n)("rating_avg", S.value.avg.toFixed(1), S.value.count) : U(n)("rating_no_votes")), 1)) : Q("", !0),
				Z("div", Go, [(Y(), X(q, null, Ar(5, (e) => Z("button", {
					key: e,
					class: ke(["star-btn", { active: e <= x.value }]),
					type: "button",
					title: U(n)("rating_set", e),
					"aria-label": U(n)("rating_set", e),
					"aria-pressed": e <= x.value,
					disabled: l.value,
					onClick: (t) => j("rating", e)
				}, "★", 10, Ko)), 64))])
			], 8, Ho),
			Z("p", qo, I(y.value), 1),
			E.value ? (Y(), X("p", Jo, I(E.value), 1)) : Q("", !0),
			r.game._isSubmission && r.game._submittedBy ? (Y(), X("p", Yo, I(U(n)("submission_by", r.game._submittedBy)), 1)) : Q("", !0),
			u.value ? (Y(), X("p", {
				key: 4,
				class: "report-feedback",
				role: d.value ? "alert" : "status"
			}, I(U(n)(u.value)), 9, Xo)) : Q("", !0)
		], 10, To));
	}
}, Qo = ["placeholder"], $o = ["id", "onUpdate:modelValue"], es = { value: "" }, ts = ["value"], ns = { value: 0 }, rs = ["value"], is = { class: "check-wrap" }, as = { class: "check-wrap" }, os = {
	key: 0,
	id: "brokenOnlyLabel",
	class: "check-wrap"
}, ss = {
	key: 1,
	id: "reportedOnlyLabel",
	class: "check-wrap"
}, cs = { class: "results-head" }, ls = { id: "resultCount" }, us = {
	key: 0,
	role: "alert"
}, ds = {
	key: 1,
	role: "status"
}, fs = ["aria-busy"], ps = { class: "load-more-wrap" }, ms = {
	key: 2,
	id: "emptyState",
	class: "empty"
}, hs = {
	__name: "Catalogue",
	props: { onAction: Function },
	setup(s, { expose: c }) {
		let f = /* @__PURE__ */ ln({
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
		}), p = new URLSearchParams(location.search), m = /* @__PURE__ */ Zt({
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
		return Zn(m, () => {
			h.value = 48, b();
		}), c({ setContext: y }), (t, a) => (Y(), X(q, null, [
			(Y(), Pi(ur, { to: "#catalogueFilters" }, [
				Z("label", null, [Z("span", null, I(U(n)("search_label")), 1), G(Z("input", {
					id: "searchInput",
					"onUpdate:modelValue": a[0] ||= (e) => m.term = e,
					type: "search",
					placeholder: U(n)("search_placeholder")
				}, null, 8, Qo), [[so, m.term]])]),
				(Y(!0), X(q, null, Ar([
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
				}, [Z("option", es, I(U(n)(e.label + "_all")), 1), (Y(!0), X(q, null, Ar(v.value[e.options], (t) => (Y(), X("option", {
					key: t,
					value: t
				}, I(e.format(t)), 9, ts))), 128))], 8, $o), [[uo, m[e.field]]])]))), 128)),
				Z("label", null, [Z("span", null, I(U(n)("rating_min_label")), 1), G(Z("select", {
					id: "ratingFilter",
					"onUpdate:modelValue": a[1] ||= (e) => m.minRating = e
				}, [Z("option", ns, I(U(n)("rating_all_filter")), 1), (Y(), X(q, null, Ar(5, (e) => Z("option", {
					key: e,
					value: e
				}, I(e) + "★" + I(e < 5 ? "+" : ""), 9, rs)), 64))], 512), [[
					uo,
					m.minRating,
					void 0,
					{ number: !0 }
				]])]),
				Z("label", is, [G(Z("input", {
					id: "favoritesOnly",
					"onUpdate:modelValue": a[2] ||= (e) => m.onlyFavorites = e,
					type: "checkbox"
				}, null, 512), [[co, m.onlyFavorites]]), Z("span", null, I(U(n)("favorites_only")), 1)]),
				Z("label", as, [G(Z("input", {
					id: "submissionsOnly",
					"onUpdate:modelValue": a[3] ||= (e) => m.onlySubmissions = e,
					type: "checkbox"
				}, null, 512), [[co, m.onlySubmissions]]), Z("span", null, I(U(n)("submissions_only")), 1)]),
				f.value.isAdmin ? (Y(), X("label", os, [G(Z("input", {
					id: "brokenOnly",
					"onUpdate:modelValue": a[4] ||= (e) => m.onlyBroken = e,
					type: "checkbox"
				}, null, 512), [[co, m.onlyBroken]]), Z("span", null, I(U(n)("broken_only")), 1)])) : Q("", !0),
				f.value.isAdmin ? (Y(), X("label", ss, [G(Z("input", {
					id: "reportedOnly",
					"onUpdate:modelValue": a[5] ||= (e) => m.onlyReported = e,
					type: "checkbox"
				}, null, 512), [[co, m.onlyReported]]), Z("span", null, I(U(n)("reported_only")), 1)])) : Q("", !0)
			])),
			Z("div", cs, [Z("h2", null, I(U(n)("section_title")), 1), Z("p", ls, I(U(n)("result_count", g.value.length, f.value.games.length)), 1)]),
			f.value.error ? (Y(), X("p", us, I(U(n)("catalogue_load_error")), 1)) : Q("", !0),
			f.value.loading ? (Y(), X("p", ds, I(U(n)("catalogue_loading")), 1)) : Q("", !0),
			Z("div", {
				id: "grid",
				class: "grid",
				"aria-live": "polite",
				"aria-busy": f.value.loading
			}, [(Y(!0), X(q, null, Ar(_.value, (e, t) => (Y(), Pi(Zo, {
				key: f.value.epoch + ":" + U(o)(e) + ":" + t,
				game: e,
				context: f.value,
				"on-action": s.onAction
			}, null, 8, [
				"game",
				"context",
				"on-action"
			]))), 128))], 8, fs),
			Z("div", ps, [g.value.length > _.value.length ? (Y(), X("button", {
				key: 0,
				id: "loadMoreBtn",
				class: "btn-load-more",
				type: "button",
				onClick: a[6] ||= (e) => h.value += 48
			}, I(U(n)("load_more", g.value.length - _.value.length)), 1)) : Q("", !0)]),
			!g.value.length && !f.value.loading ? (Y(), X("p", ms, I(U(n)("empty")), 1)) : Q("", !0)
		], 64));
	}
}, gs = {
	key: 0,
	id: "authPanel",
	class: "auth-panel",
	"aria-live": "polite"
}, _s = { class: "auth-actions" }, vs = ["href"], ys = ["disabled"], bs = ["disabled"], xs = ["disabled"], Ss = {
	key: 0,
	role: "alert"
}, Cs = {
	id: "studentDialogTitle",
	class: "submit-dialog-title"
}, ws = { class: "submit-fields" }, Ts = ["disabled"], Es = ["disabled"], Ds = ["role"], Os = { class: "submit-actions" }, ks = ["disabled"], As = {
	__name: "Access",
	props: {
		onSessionChange: Function,
		onPropose: Function
	},
	setup(e, { expose: r }) {
		let i = e, a = /* @__PURE__ */ ln({
			backendMode: "local",
			epoch: -1,
			language: t()
		}), o = /* @__PURE__ */ H({}), s = /* @__PURE__ */ H(!1), c = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(""), u = /* @__PURE__ */ H(!1), d = /* @__PURE__ */ H(), f = /* @__PURE__ */ H(), m = /* @__PURE__ */ H(""), h = /* @__PURE__ */ H(""), g = 0, b = !0;
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
			b && e === g && t === p.preferenceEpoch && (o.value = n, p.isTeacher = !!n.logged_in, c.value = !1);
		}
		function ee(e) {
			let n = e.epoch !== a.value.epoch || e.backendMode !== a.value.backendMode;
			a.value = {
				...e,
				language: t()
			}, n && (C(), o.value = {}, c.value = !1, ++g, b && e.backendMode === "remote" && w());
		}
		async function T() {
			s.value || (S(), d.value.showModal(), await Mn(), f.value?.focus());
		}
		async function E() {
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
		async function D() {
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
		function O() {
			b = !1, ++g, C(), o.value = {}, c.value = !0;
		}
		async function te(e) {
			e.persisted && (b = !0, await i.onSessionChange(), w());
		}
		return Dr(() => {
			window.addEventListener("pagehide", O), window.addEventListener("pageshow", te);
		}), Or(() => {
			O(), window.removeEventListener("pagehide", O), window.removeEventListener("pageshow", te);
		}), r({ setContext: ee }), (e, t) => (Y(), X(q, null, [
			(Y(), Pi(ur, { to: "#authMount" }, [a.value.backendMode === "remote" ? (Y(), X("div", gs, [Z("div", _s, [
				c.value ? Q("", !0) : (Y(), X("a", {
					key: 0,
					id: "loginBtn",
					class: "btn-auth secondary",
					href: o.value.logged_in ? "/api/auth/logout" : "/api/auth/login"
				}, I(x(o.value.logged_in ? "logout_btn" : "login_btn")), 9, vs)),
				o.value.student_logged_in ? (Y(), X("button", {
					key: 2,
					id: "studentLogoutBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: D
				}, I(x("student_logout_btn", o.value.student_code || "")), 9, bs)) : (Y(), X("button", {
					key: 1,
					id: "studentLoginBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: T
				}, I(x("student_login_btn")), 9, ys)),
				Z("button", {
					id: "submitActivityBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: t[0] ||= (e) => i.onPropose()
				}, I(x("submit_btn")), 9, xs)
			]), l.value === "session_error" ? (Y(), X("p", Ss, I(x(l.value)), 1)) : Q("", !0)])) : Q("", !0)])),
			(Y(), Pi(ur, { to: "#prefsMount" }, [Z("p", {
				id: "personalPrefsNote",
				class: ke(["personal-note", { remote: a.value.backendMode === "remote" }])
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
			}, [Z("h2", Cs, I(x("student_dialog_title")), 1), Z("form", {
				id: "studentForm",
				onSubmit: vo(E, ["prevent"])
			}, [
				Z("div", ws, [Z("label", null, [Z("span", null, I(x("student_code_label")), 1), G(Z("input", {
					ref_key: "codeInput",
					ref: f,
					id: "studentCode",
					"onUpdate:modelValue": t[1] ||= (e) => m.value = e,
					type: "text",
					required: "",
					autocomplete: "off",
					maxlength: "12",
					disabled: s.value
				}, null, 8, Ts), [[so, m.value]])]), Z("label", null, [Z("span", null, I(x("student_pin_label")), 1), G(Z("input", {
					id: "studentPin",
					"onUpdate:modelValue": t[2] ||= (e) => h.value = e,
					type: "password",
					required: "",
					inputmode: "numeric",
					autocomplete: "off",
					disabled: s.value
				}, null, 8, Es), [[so, h.value]])])]),
				l.value ? (Y(), X("p", {
					key: 0,
					id: "studentFeedback",
					class: ke(["submit-feedback", { error: u.value }]),
					role: u.value ? "alert" : "status"
				}, I(x(l.value)), 11, Ds)) : Q("", !0),
				Z("div", Os, [Z("button", {
					id: "studentCancelBtn",
					type: "button",
					class: "btn-auth secondary",
					onClick: C
				}, I(x("submit_cancel")), 1), Z("button", {
					id: "studentSendBtn",
					class: "btn-auth",
					disabled: s.value
				}, I(x("student_send")), 9, ks)])
			], 32)], 544)
		], 64));
	}
}, js = {
	id: "submitDialogTitle",
	class: "submit-dialog-title"
}, Ms = ["disabled"], Ns = ["value"], Ps = ["value"], Fs = ["role"], Is = { class: "submit-actions" }, Ls = ["disabled"], Rs = {
	__name: "Proposal",
	props: { onSubmitted: Function },
	setup(i, { expose: a }) {
		let o = i, s = /* @__PURE__ */ ln({
			epoch: -1,
			backendMode: "local",
			games: [],
			language: t()
		}), c = /* @__PURE__ */ H(), u = /* @__PURE__ */ H(), f = /* @__PURE__ */ H(!1), m = /* @__PURE__ */ H(!1), h = /* @__PURE__ */ H(""), g = /* @__PURE__ */ H(!1), _ = /* @__PURE__ */ Zt({
			title: "",
			url: "",
			notes: "",
			name: "",
			area: "",
			language: ""
		}), v = 0, y = !0, x = $(() => d(s.value.games, "area")), S = $(() => l(s.value.games));
		function C(e) {
			return s.value.language, n(e);
		}
		function w() {
			Object.keys(_).forEach((e) => _[e] = ""), h.value = "", g.value = !1, m.value = !1;
		}
		function ee() {
			++v, c.value?.close(), w();
		}
		function T(e) {
			(e.epoch !== s.value.epoch || e.backendMode !== s.value.backendMode) && ee(), s.value = {
				...e,
				language: t()
			};
		}
		async function E() {
			y && s.value.backendMode === "remote" && s.value.epoch === p.preferenceEpoch && !f.value && (w(), ++v, c.value.showModal(), await Mn(), u.value?.focus());
		}
		function D(e) {
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
			if (!e.title || !D(e.url)) {
				h.value = "submit_invalid", g.value = !0;
				return;
			}
			e.area = e.area || "General";
			let t = v, n = s.value.epoch, r = () => y && t === v && n === p.preferenceEpoch;
			f.value = !0, g.value = !1, h.value = "submit_loading";
			try {
				if (await b(e), !r()) return;
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
			y = !1, ee(), c.value?.querySelector("form")?.reset();
		}
		function k() {
			y = !0;
		}
		return Dr(() => {
			window.addEventListener("pagehide", te), window.addEventListener("pageshow", k);
		}), Or(() => {
			te(), window.removeEventListener("pagehide", te), window.removeEventListener("pageshow", k);
		}), a({
			setContext: T,
			open: E
		}), (t, n) => (Y(), X("dialog", {
			ref_key: "dialog",
			ref: c,
			id: "submitDialog",
			class: "submit-dialog",
			"aria-labelledby": "submitDialogTitle",
			onCancel: ee,
			onClick: n[6] ||= (e) => {
				e.target === c.value && ee();
			}
		}, [Z("h2", js, I(C("submit_dialog_title")), 1), Z("form", {
			id: "submitForm",
			onSubmit: vo(O, ["prevent"])
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
				}, null, 512), [[so, _.title]])]),
				Z("label", null, [Z("span", null, I(C("submit_field_url")), 1), G(Z("input", {
					id: "submitUrl",
					"onUpdate:modelValue": n[1] ||= (e) => _.url = e,
					type: "url",
					required: "",
					autocomplete: "off"
				}, null, 512), [[so, _.url]])]),
				Z("label", null, [Z("span", null, I(C("area_label")), 1), G(Z("select", {
					id: "submitArea",
					"onUpdate:modelValue": n[2] ||= (e) => _.area = e
				}, [n[7] ||= Z("option", { value: "" }, "—", -1), (Y(!0), X(q, null, Ar(x.value, (t) => (Y(), X("option", {
					key: t,
					value: t
				}, I(U(e)(t)), 9, Ns))), 128))], 512), [[uo, _.area]])]),
				Z("label", null, [Z("span", null, I(C("language_label")), 1), G(Z("select", {
					id: "submitLanguage",
					"onUpdate:modelValue": n[3] ||= (e) => _.language = e
				}, [n[8] ||= Z("option", { value: "" }, "—", -1), (Y(!0), X(q, null, Ar(S.value, (e) => (Y(), X("option", {
					key: e,
					value: e
				}, I(U(r)(e)), 9, Ps))), 128))], 512), [[uo, _.language]])]),
				Z("label", null, [Z("span", null, I(C("submit_field_notes")), 1), G(Z("textarea", {
					id: "submitNotes",
					"onUpdate:modelValue": n[4] ||= (e) => _.notes = e,
					rows: "3"
				}, null, 512), [[so, _.notes]])]),
				Z("label", null, [Z("span", null, I(C("submit_field_name")), 1), G(Z("input", {
					id: "submitName",
					"onUpdate:modelValue": n[5] ||= (e) => _.name = e,
					autocomplete: "off"
				}, null, 512), [[so, _.name]])])
			], 8, Ms),
			h.value ? (Y(), X("p", {
				key: 0,
				id: "submitFeedback",
				class: ke(["submit-feedback", {
					error: g.value,
					ok: m.value
				}]),
				role: g.value ? "alert" : "status"
			}, I(C(h.value)), 11, Fs)) : Q("", !0),
			Z("div", Is, [Z("button", {
				id: "submitCancelBtn",
				type: "button",
				class: "btn-auth secondary",
				onClick: ee
			}, I(C(m.value ? "dialog_close" : "submit_cancel")), 1), Z("button", {
				id: "submitSendBtn",
				class: "btn-auth",
				disabled: f.value || m.value
			}, I(C("submit_send")), 9, Ls)])
		], 32)], 544));
	}
};
// src/catalogue/main.js
function zs(e, t) {
	return So(hs, t).mount(e);
}
function Bs(e, t) {
	return So(As, t).mount(e);
}
function Vs(e, t) {
	return So(Rs, t).mount(e);
}
export { Bs as mountAccess, zs as mountCatalogue, Vs as mountProposal };
