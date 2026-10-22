import { areaLabel as e, getLang as t, i18n as n, languageLabel as r, levelLabel as i } from "/scripts/i18n.js";
import { applicationLabel as a, computeFilteredGames as o, gameKey as s, gameLanguageText as c, normalizeUrl as l, uniqueLanguageValues as u, uniqueLevelValues as d, uniqueValues as f } from "/scripts/filters.js";
import { DEFAULT_GAME_IMAGE as p, state as m } from "/scripts/state.js";
import { openFlashDialog as h } from "/scripts/flash.js";
import { openJClicDialog as g } from "/scripts/jclic.js";
import { openIframeDialog as _ } from "/scripts/external.js";
import { authMe as v, loadSources as y, studentLogin as ee, studentLogout as te, submitActivity as b } from "/scripts/api.js";
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function x(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var S = {}, C = [], w = () => {}, T = () => !1, ne = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), E = (e) => e.startsWith("onUpdate:"), D = Object.assign, re = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, ie = Object.prototype.hasOwnProperty, O = (e, t) => ie.call(e, t), k = Array.isArray, ae = (e) => ue(e) === "[object Map]", oe = (e) => ue(e) === "[object Set]", se = (e) => ue(e) === "[object Date]", A = (e) => typeof e == "function", j = (e) => typeof e == "string", M = (e) => typeof e == "symbol", N = (e) => typeof e == "object" && !!e, ce = (e) => (N(e) || A(e)) && A(e.then) && A(e.catch), le = Object.prototype.toString, ue = (e) => le.call(e), de = (e) => ue(e).slice(8, -1), fe = (e) => ue(e) === "[object Object]", pe = (e) => j(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, me = /* @__PURE__ */ x(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), he = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ge = /-\w/g, P = he((e) => e.replace(ge, (e) => e.slice(1).toUpperCase())), _e = /\B([A-Z])/g, ve = he((e) => e.replace(_e, "-$1").toLowerCase()), ye = he((e) => e.charAt(0).toUpperCase() + e.slice(1)), be = he((e) => e ? `on${ye(e)}` : ""), xe = (e, t) => !Object.is(e, t), Se = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, Ce = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, we = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, Te, Ee = () => Te ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function De(e) {
	if (k(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = j(r) ? je(r) : De(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (j(e) || N(e)) return e;
}
var Oe = /;(?![^(]*\))/g, ke = /:([^]+)/, Ae = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function je(e) {
	let t = {};
	return e.replace(Ae, (e) => e.startsWith("/*") ? "" : e).split(Oe).forEach((e) => {
		if (e) {
			let n = e.split(ke);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function Me(e) {
	let t = "";
	if (j(e)) t = e;
	else if (k(e)) for (let n = 0; n < e.length; n++) {
		let r = Me(e[n]);
		r && (t += r + " ");
	}
	else if (N(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Ne = /* @__PURE__ */ x("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function Pe(e) {
	return !!e || e === "";
}
function Fe(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = ze(e[i], t[i], n);
	return r;
}
function Ie(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && ze(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Le(e, t, n) {
	let r = ae(e), i = ae(t);
	if (r || i || (r = oe(e), i = oe(t), r || i)) return r && i ? Ie(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !ze(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Re(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function ze(e, t, n) {
	if (e === t) return !0;
	let r = se(e), i = se(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = M(e), i = M(t), r || i ? e === t : (r = k(e), i = k(t), r || i ? r && i ? Re(e, t, n, Fe) : !1 : (r = N(e), i = N(t), r || i ? !r || !i ? !1 : Re(e, t, n, Le) : String(e) === String(t))));
}
function Be(e, t) {
	return e.findIndex((e) => ze(e, t));
}
var Ve = (e) => !!(e && e.__v_isRef === !0), F = (e) => j(e) ? e : e == null ? "" : k(e) || N(e) && (e.toString === le || !A(e.toString)) ? Ve(e) ? F(e.value) : JSON.stringify(e, He, 2) : String(e), He = (e, t) => Ve(t) ? He(e, t.value) : ae(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ue(t, r) + " =>"] = n, e), {}) } : oe(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ue(e)) } : M(t) ? Ue(t) : N(t) && !k(t) && !fe(t) ? String(t) : t, Ue = (e, t = "") => M(e) ? `Symbol(${e.description ?? t})` : e, I, We = class {
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
function Ge() {
	return I;
}
var L, Ke = /* @__PURE__ */ new WeakSet(), qe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, I && (I.active ? I.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ke.has(this) && (Ke.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ze(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, ut(this), et(this);
		let e = L, t = ot;
		L = this, ot = !0;
		try {
			return this.fn();
		} finally {
			tt(this), L = e, ot = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) it(e);
			this.deps = this.depsTail = void 0, ut(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ke.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		nt(this) && this.run();
	}
	get dirty() {
		return nt(this);
	}
}, Je = 0, Ye, Xe;
function Ze(e, t = !1) {
	e.flags |= 8, t ? (e.next = Xe, Xe = e) : (e.next = Ye, Ye = e);
}
function Qe() {
	Je++;
}
function $e() {
	if (--Je > 0) return;
	if (Xe) {
		let e = Xe;
		for (Xe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ye;) {
		let t = Ye;
		for (Ye = void 0; t;) {
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
function et(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tt(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), it(r), at(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function nt(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (rt(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function rt(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dt) || (e.globalVersion = dt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !nt(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = L, r = ot;
	L = e, ot = !0;
	try {
		et(e);
		let n = e.fn(e._value);
		(t.version === 0 || xe(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		L = n, ot = r, tt(e), e.flags &= -3;
	}
}
function it(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) it(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function at(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var ot = !0, st = [];
function ct() {
	st.push(ot), ot = !1;
}
function lt() {
	let e = st.pop();
	ot = e === void 0 || e;
}
function ut(e) {
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
var dt = 0, ft = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, pt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!L || !ot || L === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== L) t = this.activeLink = new ft(L, this), L.deps ? (t.prevDep = L.depsTail, L.depsTail.nextDep = t, L.depsTail = t) : L.deps = L.depsTail = t, mt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = L.depsTail, t.nextDep = void 0, L.depsTail.nextDep = t, L.depsTail = t, L.deps === t && (L.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, dt++, this.notify(e);
	}
	notify(e) {
		Qe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			$e();
		}
	}
};
function mt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) mt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var ht = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ Symbol(""), _t = /* @__PURE__ */ Symbol(""), vt = /* @__PURE__ */ Symbol("");
function R(e, t, n) {
	if (ot && L) {
		let t = ht.get(e);
		t || ht.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new pt()), r.map = t, r.key = n), r.track();
	}
}
function yt(e, t, n, r, i, a) {
	let o = ht.get(e);
	if (!o) {
		dt++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Qe(), t === "clear") o.forEach(s);
	else {
		let i = k(e), a = i && pe(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === vt || !M(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(vt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(gt)), ae(e) && s(o.get(_t)));
				break;
			case "delete":
				i || (s(o.get(gt)), ae(e) && s(o.get(_t)));
				break;
			case "set": ae(e) && s(o.get(gt));
		}
	}
	$e();
}
function bt(e) {
	let t = /* @__PURE__ */ z(e);
	return t === e || (R(t, "iterate", vt), /* @__PURE__ */ sn(e)) ? t : /* @__PURE__ */ on(e) ? /* @__PURE__ */ an(e) ? t.map((e) => dn(un(e))) : t.map(dn) : t.map(un);
}
function xt(e) {
	return R(e = /* @__PURE__ */ z(e), "iterate", vt), e;
}
function St(e, t) {
	return /* @__PURE__ */ on(e) ? dn(/* @__PURE__ */ an(e) ? un(t) : t) : un(t);
}
var Ct = {
	__proto__: null,
	[Symbol.iterator]() {
		return wt(this, Symbol.iterator, (e) => St(this, e));
	},
	concat(...e) {
		return bt(this).concat(...e.map((e) => k(e) ? bt(e) : e));
	},
	entries() {
		return wt(this, "entries", (e) => (e[1] = St(this, e[1]), e));
	},
	every(e, t) {
		return Dt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return Dt(this, "filter", e, t, (e) => e.map((e) => St(this, e)), arguments);
	},
	find(e, t) {
		return Dt(this, "find", e, t, (e) => St(this, e), arguments);
	},
	findIndex(e, t) {
		return Dt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return Dt(this, "findLast", e, t, (e) => St(this, e), arguments);
	},
	findLastIndex(e, t) {
		return Dt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return Dt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return kt(this, "includes", e);
	},
	indexOf(...e) {
		return kt(this, "indexOf", e);
	},
	join(e) {
		return bt(this).join(e);
	},
	lastIndexOf(...e) {
		return kt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return Dt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return At(this, "pop");
	},
	push(...e) {
		return At(this, "push", e);
	},
	reduce(e, ...t) {
		return Ot(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return Ot(this, "reduceRight", e, t);
	},
	shift() {
		return At(this, "shift");
	},
	some(e, t) {
		return Dt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return At(this, "splice", e);
	},
	toReversed() {
		return bt(this).toReversed();
	},
	toSorted(e) {
		return bt(this).toSorted(e);
	},
	toSpliced(...e) {
		return bt(this).toSpliced(...e);
	},
	unshift(...e) {
		return At(this, "unshift", e);
	},
	values() {
		return wt(this, "values", (e) => St(this, e));
	}
};
function wt(e, t, n) {
	let r = xt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ sn(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => Tt(a.next(), n), i !== Et[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => Tt(a._next(), n);
	}
	return a;
}
function Tt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var Et = Array.prototype;
function Dt(e, t, n, r, i, a) {
	let o = xt(e), s = o !== e && !/* @__PURE__ */ sn(e), c = o[t];
	if (c !== Et[t]) {
		let t = c.apply(e, a);
		return s ? un(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, St(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function Ot(e, t, n, r) {
	let i = xt(e), a = i !== e && !/* @__PURE__ */ sn(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = St(e, t)), n.call(this, t, St(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? St(e, c) : c;
}
function kt(e, t, n) {
	let r = /* @__PURE__ */ z(e);
	R(r, "iterate", vt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ cn(n[0]) ? (n[0] = /* @__PURE__ */ z(n[0]), r[t](...n)) : i;
}
function At(e, t, n = []) {
	ct(), Qe();
	let r = (/* @__PURE__ */ z(e))[t].apply(e, n);
	return $e(), lt(), r;
}
var jt = /* @__PURE__ */ x("__proto__,__v_isRef,__isVue"), Mt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(M));
function Nt(e) {
	M(e) || (e = String(e));
	let t = /* @__PURE__ */ z(this);
	return R(t, "has", e), t.hasOwnProperty(e);
}
var Pt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Qt : Zt : i ? Xt : Yt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = k(e);
		if (!r) {
			let e;
			if (a && (e = Ct[t])) return e;
			if (t === "hasOwnProperty") return Nt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ B(e) ? e : n);
		if ((M(t) ? Mt.has(t) : jt(t)) || (r || R(e, "get", t), i)) return o;
		if (/* @__PURE__ */ B(o)) {
			let e = a && pe(t) ? o : o.value;
			return r && N(e) ? /* @__PURE__ */ nn(e) : e;
		}
		return N(o) ? r ? /* @__PURE__ */ nn(o) : /* @__PURE__ */ en(o) : o;
	}
}, Ft = class extends Pt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = k(e) && pe(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ on(i);
			if (!/* @__PURE__ */ sn(n) && !/* @__PURE__ */ on(n) && (i = /* @__PURE__ */ z(i), n = /* @__PURE__ */ z(n)), !a && /* @__PURE__ */ B(i) && !/* @__PURE__ */ B(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : O(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ B(e) ? e : r);
		return e === /* @__PURE__ */ z(r) && s && (o ? xe(n, i) && yt(e, "set", t, n, i) : yt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = O(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && yt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return M(t) && Mt.has(t) || R(e, "has", t), n;
	}
	ownKeys(e) {
		return R(e, "iterate", k(e) ? "length" : gt), Reflect.ownKeys(e);
	}
}, It = class extends Pt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Lt = /* @__PURE__ */ new Ft(), Rt = /* @__PURE__ */ new It(), zt = /* @__PURE__ */ new Ft(!0), Bt = (e) => e, Vt = (e) => Reflect.getPrototypeOf(e);
function Ht(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ z(i), o = ae(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Bt : t ? dn : un;
		return !t && R(a, "iterate", c ? _t : gt), D(Object.create(l), { next() {
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
function Ut(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Wt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ z(r), a = /* @__PURE__ */ z(n);
			e || (xe(n, a) && R(i, "get", n), R(i, "get", a));
			let { has: o } = Vt(i), s = t ? Bt : e ? dn : un;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && R(/* @__PURE__ */ z(t), "iterate", gt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ z(n), i = /* @__PURE__ */ z(t);
			return e || (xe(t, i) && R(r, "has", t), R(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ z(a), s = t ? Bt : e ? dn : un;
			return !e && R(o, "iterate", gt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return D(n, e ? {
		add: Ut("add"),
		set: Ut("set"),
		delete: Ut("delete"),
		clear: Ut("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ z(this), r = Vt(n), i = /* @__PURE__ */ z(e), a = !t && !/* @__PURE__ */ sn(e) && !/* @__PURE__ */ on(e) ? i : e;
			return r.has.call(n, a) || xe(e, a) && r.has.call(n, e) || xe(i, a) && r.has.call(n, i) || (n.add(a), yt(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ sn(n) || /* @__PURE__ */ on(n) || (n = /* @__PURE__ */ z(n));
			let r = /* @__PURE__ */ z(this), { has: i, get: a } = Vt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ z(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? xe(n, s) && yt(r, "set", e, n, s) : yt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ z(this), { has: n, get: r } = Vt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ z(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && yt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ z(this), t = e.size !== 0, n = e.clear();
			return t && yt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ht(r, e, t);
	}), n;
}
function Gt(e, t) {
	let n = Wt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(O(n, i) && i in r ? n : r, i, a);
}
var Kt = { get: /* @__PURE__ */ Gt(!1, !1) }, qt = { get: /* @__PURE__ */ Gt(!1, !0) }, Jt = { get: /* @__PURE__ */ Gt(!0, !1) }, Yt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap();
function $t(e) {
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
function en(e) {
	return /* @__PURE__ */ on(e) ? e : rn(e, !1, Lt, Kt, Yt);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return rn(e, !1, zt, qt, Xt);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return rn(e, !0, Rt, Jt, Zt);
}
function rn(e, t, n, r, i) {
	if (!N(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = $t(de(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return /* @__PURE__ */ on(e) ? /* @__PURE__ */ an(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function z(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ z(t) : e;
}
function ln(e) {
	return !O(e, "__v_skip") && Object.isExtensible(e) && Ce(e, "__v_skip", !0), e;
}
var un = (e) => N(e) ? /* @__PURE__ */ en(e) : e, dn = (e) => N(e) ? /* @__PURE__ */ nn(e) : e;
// @__NO_SIDE_EFFECTS__
function B(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function V(e) {
	return pn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
	return pn(e, !0);
}
function pn(e, t) {
	return /* @__PURE__ */ B(e) ? e : new mn(e, t);
}
var mn = class {
	constructor(e, t) {
		this.dep = new pt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ z(e), this._value = t ? e : un(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ sn(e) || /* @__PURE__ */ on(e);
		e = n ? e : /* @__PURE__ */ z(e), xe(e, t) && (this._rawValue = e, this._value = n ? e : un(e), this.dep.trigger());
	}
};
function H(e) {
	return /* @__PURE__ */ B(e) ? e.value : e;
}
var hn = {
	get: (e, t, n) => t === "__v_raw" ? e : H(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ B(i) && !/* @__PURE__ */ B(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function gn(e) {
	return /* @__PURE__ */ an(e) ? e : new Proxy(e, hn);
}
var _n = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new pt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && L !== this) return Ze(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return rt(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function vn(e, t, n = !1) {
	let r, i;
	return A(e) ? r = e : (r = e.get, i = e.set), new _n(r, i, n);
}
var yn = {}, bn = /* @__PURE__ */ new WeakMap(), xn = void 0;
function Sn(e, t = !1, n = xn) {
	if (n) {
		let t = bn.get(n);
		t || bn.set(n, t = []), t.push(e);
	}
}
function Cn(e, t, n = S) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => i ? e : /* @__PURE__ */ sn(e) || i === !1 || i === 0 ? wn(e, 1) : wn(e), u, d, f, p, m = !1, h = !1;
	if (/* @__PURE__ */ B(e) ? (d = () => e.value, m = /* @__PURE__ */ sn(e)) : /* @__PURE__ */ an(e) ? (d = () => l(e), m = !0) : k(e) ? (h = !0, m = e.some((e) => /* @__PURE__ */ an(e) || /* @__PURE__ */ sn(e)), d = () => e.map((e) => {
		if (/* @__PURE__ */ B(e)) return e.value;
		if (/* @__PURE__ */ an(e)) return l(e);
		if (A(e)) return c ? c(e, 2) : e();
	})) : d = A(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (f) {
			ct();
			try {
				f();
			} finally {
				lt();
			}
		}
		let t = xn;
		xn = u;
		try {
			return c ? c(e, 3, [p]) : e(p);
		} finally {
			xn = t;
		}
	} : w, t && i) {
		let e = d, t = i === !0 ? Infinity : i;
		d = () => wn(e(), t);
	}
	let g = Ge(), _ = () => {
		u.stop(), g && g.active && re(g.effects, u);
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
	let v = h ? Array(e.length).fill(yn) : yn, y = (e) => {
		if (u.flags & 1 && (u.dirty || e)) {
			if (t) {
				let n = u.run();
				if (e || i || m || (h ? n.some((e, t) => xe(e, v[t])) : xe(n, v))) {
					let e = xn;
					ct();
					try {
						f && f(), xn = u;
						let e = [
							n,
							v === yn ? void 0 : h && v[0] === yn ? [] : v,
							p
						];
						v = n, c ? c(t, 3, e) : t(...e);
					} finally {
						xn = e, lt();
					}
				}
			} else u.run();
		}
	};
	return s && s(y), u = new qe(d), u.scheduler = o ? () => o(y, !1) : y, p = (e) => Sn(e, !1, u), f = u.onStop = () => {
		let e = bn.get(u);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			bn.delete(u);
		}
	}, t ? r ? y(!0) : v = u.run() : o ? o(y.bind(null, !0), !0) : u.run(), _.pause = u.pause.bind(u), _.resume = u.resume.bind(u), _.stop = _, _;
}
function wn(e, t = Infinity, n) {
	if (t <= 0 || !N(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ B(e)) wn(e.value, t, n);
	else if (k(e)) for (let r = 0; r < e.length; r++) wn(e[r], t, n);
	else if (oe(e) || ae(e)) e.forEach((e) => {
		wn(e, t, n);
	});
	else if (fe(e)) {
		for (let r in e) wn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && wn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Tn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Dn(e, t, n);
	}
}
function En(e, t, n, r) {
	if (A(e)) {
		let i = Tn(e, t, n, r);
		return i && ce(i) && i.catch((e) => {
			Dn(e, t, n);
		}), i;
	}
	if (k(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(En(e[a], t, n, r));
		return i;
	}
}
function Dn(e, t, n, r = !0) {
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
			ct(), Tn(a, null, 10, [
				e,
				i,
				o
			]), lt();
			return;
		}
	}
	On(e, n, i, r, o);
}
function On(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var U = [], kn = -1, An = [], jn = null, Mn = 0, Nn = /* @__PURE__ */ Promise.resolve(), Pn = null;
function Fn(e) {
	let t = Pn || Nn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function In(e) {
	let t = kn + 1, n = U.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = U[r], a = Wn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Ln(e) {
	if (!(e.flags & 1)) {
		let t = Wn(e), n = U[U.length - 1];
		!n || !(e.flags & 2) && t >= Wn(n) ? U.push(e) : U.splice(In(t), 0, e), e.flags |= 1, Rn();
	}
}
function Rn() {
	Pn ||= Nn.then(Gn);
}
function zn(e) {
	if (!k(e)) jn && e.id === -1 ? jn.splice(Mn + 1, 0, e) : e.flags & 1 || (An.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) An.push(e[t]);
	Rn();
}
function Bn(e, t, n, r = kn + 1) {
	for (; r < U.length; r++) {
		let n = U[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			U.splice(r, 1), r = e ? r - 1 : kn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Vn(e, t, n = 0) {
	if (An.length) {
		let e = An, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < An.length; i++) {
				let a = An[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? An[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Wn(e) - Wn(t));
		if (An.length = r, jn) {
			for (let e = 0; e < i.length; e++) jn.push(i[e]);
			return;
		}
		for (jn = i, Mn = 0; Mn < jn.length; Mn++) {
			let e = jn[Mn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		jn = null, Mn = 0;
	}
}
var Hn = !1;
function Un(e, t) {
	if (Hn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(An);
	e(), Hn = !0;
	try {
		Bn(void 0, t), Vn(void 0, n, t);
	} finally {
		Hn = !1;
	}
}
var Wn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Gn(e) {
	try {
		for (kn = 0; kn < U.length; kn++) {
			let e = U[kn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Tn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; kn < U.length; kn++) {
			let e = U[kn];
			e && (e.flags &= -2);
		}
		kn = -1, U.length = 0, Vn(e), Pn = null, (U.length || An.length) && Gn(e);
	}
}
var W = null, Kn = null;
function qn(e) {
	let t = W;
	return W = e, Kn = e && e.type.__scopeId || null, t;
}
function Jn(e, t = W, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Pi(-1);
		let i = qn(t), a = ji.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = ji.length; e > a; e--) Mi();
			qn(i), r._d && Pi(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function G(e, t) {
	if (W === null) return e;
	let n = ha(W), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = S] = t[e];
		i && (A(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && wn(a), r.push({
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
function Yn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (ct(), En(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), lt());
	}
}
function Xn(e, t, n = !1) {
	let r = na();
	if (r || Br) {
		let i = Br ? Br._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && A(t) ? t.call(r && r.proxy) : t;
	}
}
var Zn = /* @__PURE__ */ Symbol.for("v-scx"), Qn = () => Xn(Zn);
function $n(e, t, n) {
	return er(e, t, n);
}
function er(e, t, n = S) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = D({}, n), c = t && r || !t && a !== "post", l;
	if (ca) {
		if (a === "sync") {
			let e = Qn();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = w, e.resume = w, e.pause = w, e;
		}
	}
	let u = ta;
	s.call = (e, t, n) => En(e, u, t, n);
	let d = !1;
	a === "post" ? s.scheduler = (e) => {
		e.i = u, K(e, u && u.suspense);
	} : a !== "sync" && (d = !0, s.scheduler = (e, t) => {
		t ? e() : Ln(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let f = Cn(e, t, s);
	return ca && (l ? l.push(f) : c && f()), f;
}
var tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ Symbol("_vte"), rr = (e) => e.__isTeleport, ir = (e) => e && (e.disabled || e.disabled === ""), ar = (e) => e && (e.defer || e.defer === ""), or = (e) => typeof SVGElement < "u" && e instanceof SVGElement, sr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cr = (e, t) => {
	let n = e && e.to;
	return j(n) ? t ? t(n) : null : n;
}, lr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = ir(t.props), { dynamicChildren: y } = t, ee = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, te = (e = t) => {
			let n = ir(e.props), r = e.target = cr(e.props, m), a = mr(r, e, h, p);
			r && (o !== "svg" && or(r) ? o = "svg" : o !== "mathml" && sr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (ee(e, r, a), pr(e, !1)));
		}, b = (e) => {
			let t = () => {
				if (tr.get(e) === t) {
					if (tr.delete(e), ir(e.props)) {
						let t = _(e.el) || n;
						ee(e, t, e.anchor), pr(e, !0);
					}
					te(e);
				}
			};
			tr.set(e, t), K(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), ar(t.props) || a && a.pendingBranch) {
				b(t);
				return;
			}
			v && (ee(t, n, i), pr(t, !0)), te();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = tr.get(e);
			if (u) {
				u.flags |= 8, tr.delete(e), b(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = ir(e.props), _ = g ? n : p, ee = g ? r : h;
			if (o === "svg" || or(p) ? o = "svg" : (o === "mathml" || sr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), xi(e, t, !0)) : c || d(e, t, _, ee, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ur(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = cr(t.props, m);
				e && (t.target = e, ur(t, e, null, l, 0));
			} else g && ur(t, p, h, l, 1);
			pr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = ir(f), m = a || !p, h = tr.get(e);
		if (h && (h.flags |= 8, tr.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: ur,
	hydrate: dr
};
function ur(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !tr.has(e) && (!d || ir(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function dr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
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
	let m = t.target = cr(t.props, c), h = ir(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || mr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || mr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), pr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var fr = lr;
function pr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function mr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[nr] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var hr = /* @__PURE__ */ Symbol("_leaveCb");
function gr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== ki) {
			t = n;
			break;
		}
	}
	return t;
}
function _r(e) {
	if (!Er(e)) return rr(e.type) && e.children ? gr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && A(n.default)) return n.default();
	}
}
function vr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		vr(rr(n.type) && _r(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === q && k(e.children)) {
		let n = Kr(e.children, !1);
		n && vr(n, t);
	}
}
function yr(e) {
	if (e.component) return yr(e.component.subTree);
	if (e.type === q) {
		let t = k(e.children) && Kr(e.children, !1);
		return t ? yr(t) : void 0;
	}
	if (e.type !== ki) return e;
}
function br(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function xr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Sr = /* @__PURE__ */ new WeakMap();
function Cr(e, t, n, r, i = !1) {
	if (k(e)) {
		e.forEach((e, a) => Cr(e, t && (k(t) ? t[a] : t), n, r, i));
		return;
	}
	if (Tr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Cr(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? ha(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === S ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ z(d), p = d === S ? T : (e) => !xr(u, e) && O(f, e), m = (e, t) => !(t && xr(u, t));
	if (l != null && l !== c) {
		if (wr(t), j(l)) u[l] = null, p(l) && (d[l] = null);
		else if (/* @__PURE__ */ B(l)) {
			let e = t;
			m(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (A(c)) Tn(c, s, 12, [o, u]);
	else {
		let t = j(c), r = /* @__PURE__ */ B(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? p(c) ? d[c] : u[c] : m(c) || !e.k ? c.value : u[e.k];
					if (i) k(n) && re(n, a);
					else if (k(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], p(c) && (d[c] = u[c]);
					else {
						let t = [a];
						m(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, p(c) && (d[c] = o)) : r && (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), Sr.delete(e);
				};
				t.id = -1, Sr.set(e, t), K(t, n);
			} else wr(e), s();
		}
	}
}
function wr(e) {
	let t = Sr.get(e);
	t && (t.flags |= 8, Sr.delete(e));
}
Ee().requestIdleCallback, Ee().cancelIdleCallback;
var Tr = (e) => !!e.type.__asyncLoader, Er = (e) => e.type.__isKeepAlive;
function Dr(e, t, n = ta, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			ct();
			let i = aa(n), a = En(t, n, e, r);
			return i(), lt(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Or = (e) => (t, n = ta) => {
	ca && e !== "sp" || Dr(e, (...e) => t(...e), n);
}, kr = Or("m"), Ar = Or("bum"), jr = /* @__PURE__ */ Symbol.for("v-ndc");
function Mr(e, t, n, r) {
	let i, a = n && n[r], o = k(e);
	if (o || j(e)) {
		let n = o && /* @__PURE__ */ an(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ sn(e), s = /* @__PURE__ */ on(e), e = xt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? dn(un(e[n])) : un(e[n]) : e[n], n, void 0, a && a[n]);
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
var Nr = (e) => e ? sa(e) ? ha(e) : Nr(e.parent) : null, Pr = /* @__PURE__ */ D(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Nr(e.parent),
	$root: (e) => Nr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => e.type,
	$forceUpdate: (e) => e.f ||= () => {
		Ln(e.update);
	},
	$nextTick: (e) => e.n ||= Fn.bind(e.proxy),
	$watch: (e) => w
}), Fr = (e, t) => e !== S && !e.__isScriptSetup && O(e, t), Ir = {
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
			else if (Fr(r, t)) return o[t] = 1, r[t];
			else if (O(a, t)) return o[t] = 3, a[t];
			else if (n !== S && O(n, t)) return o[t] = 4, n[t];
			else o[t] = 0;
		}
		let l = Pr[t], u, d;
		if (l) return t === "$attrs" && R(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== S && O(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, O(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Fr(i, t) ? (i[t] = n, !0) : O(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || Fr(t, s) || O(a, s) || O(r, s) || O(Pr, s) || O(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? O(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Lr() {
	return {
		app: null,
		config: {
			isNativeTag: T,
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
var Rr = 0;
function zr(e, t) {
	return function(n, r = null) {
		A(n) || (n = D({}, n)), r != null && !N(r) && (r = null);
		let i = Lr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Rr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: _a,
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
					let u = c._ceVNode || Vi(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, ha(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (En(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Br;
				Br = c;
				try {
					return e();
				} finally {
					Br = t;
				}
			}
		};
		return c;
	};
}
var Br = null, Vr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${P(t)}Modifiers`] || e[`${ve(t)}Modifiers`];
function Hr(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || S, i = n, a = t.startsWith("update:"), o = a && Vr(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => j(e) ? e.trim() : e)), o.number && (i = i.map(we)));
	let s, c = r[s = be(t)] || r[s = be(P(t))];
	!c && a && (c = r[s = be(ve(t))]), c && En(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, En(l, e, 6, i);
	}
}
function Ur(e, t, n = !1) {
	let r = t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {};
	return a ? (k(a) ? a.forEach((e) => o[e] = null) : D(o, a), N(e) && r.set(e, o), o) : (N(e) && r.set(e, null), null);
}
function Wr(e, t) {
	return !e || !ne(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), O(e, t[0].toLowerCase() + t.slice(1)) || O(e, ve(t)) || O(e, t));
}
function Gr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, g = qn(e), _, v;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			_ = Ki(l.call(t, e, u, d, p, f, m)), v = s;
		} else {
			let e = t;
			_ = Ki(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), v = t.props ? s : qr(s);
		}
	} catch (t) {
		ji.length = 0, Dn(t, e, 1), _ = Vi(ki);
	}
	let y = _;
	if (v && h !== !1) {
		let e = Object.keys(v), { shapeFlag: t } = y;
		e.length && t & 7 && (a && e.some(E) && (v = Jr(v, a)), y = Wi(y, v, !1, !0));
	}
	return n.dirs && (y = Wi(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && vr(rr(y.type) && _r(y) || y, n.transition), _ = y, qn(g), _;
}
function Kr(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Li(r)) {
			if (r.type !== ki || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var qr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || ne(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Jr = (e, t) => {
	let n = {};
	for (let r in e) E(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Yr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Xr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Zr(o, r, n) && !Wr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Xr(r, o, l) : !!o;
	return !1;
}
function Xr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!O(e, a) || Zr(t, e, a) && !Wr(n, a)) return !0;
	}
	return !1;
}
function Zr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && N(r) && N(i) ? !ze(r, i) : r !== i;
}
function Qr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var $r = {}, ei = () => Object.create($r), ti = (e) => Object.getPrototypeOf(e) === $r;
function ni(e, t, n, r = !1) {
	let i = {}, a = ei();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ii(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ tn(i) : e.type.props ? i : a, e.attrs = a;
}
function ri(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ z(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Wr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (O(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = P(o);
						i[t] = ai(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ii(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (O(t, a) || (r = ve(a)) !== a && O(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ai(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && O(t, e) || (delete a[e], l = !0);
	}
	l && yt(e.attrs, "set", "");
}
function ii(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (me(c)) continue;
		let l = t[c], u;
		i && O(i, u = P(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : Wr(e.emitsOptions, c) || c in r && l === r[c] || (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ z(n), r = s || S;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = ai(i, t, s, r[s], e, !O(r, s));
		}
	}
	return o;
}
function ai(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = O(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && A(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = aa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ve(n)) && (r = !0));
	}
	return r;
}
function oi(e, t, n = !1) {
	let r = t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [];
	if (!a) return N(e) && r.set(e, C), C;
	if (k(a)) for (let e = 0; e < a.length; e++) {
		let t = P(a[e]);
		si(t) && (o[t] = S);
	}
	else if (a) for (let e in a) {
		let t = P(e);
		if (si(t)) {
			let n = a[e], r = o[t] = k(n) || A(n) ? { type: n } : D({}, n), i = r.type, c = !1, l = !0;
			if (k(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = A(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				}
				n === "String" && (l = !1);
			}
			else c = A(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || O(r, "default")) && s.push(t);
		}
	}
	let c = [o, s];
	return N(e) && r.set(e, c), c;
}
function si(e) {
	return e[0] !== "$" && !me(e);
}
var ci = (e) => e === "_" || e === "_ctx" || e === "$stable", li = (e) => k(e) ? e.map(Ki) : [Ki(e)], ui = (e, t, n) => {
	if (t._n) return t;
	let r = Jn((...e) => li(t(...e)), n);
	return r._c = !1, r;
}, di = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ci(n)) continue;
		let i = e[n];
		if (A(i)) t[n] = ui(n, i, r);
		else if (i != null) {
			let e = li(i);
			t[n] = () => e;
		}
	}
}, fi = (e, t) => {
	let n = li(t);
	e.slots.default = () => n;
}, pi = (e, t, n) => {
	for (let r in t) (n || !ci(r)) && (e[r] = t[r]);
}, mi = (e, t, n) => {
	let r = e.slots = ei();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (pi(r, t, n), n && Ce(r, "_", e, !0)) : di(t, r);
	} else t && fi(e, t);
}, hi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = S;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : pi(i, t, n) : (a = !t.$stable, di(t, i)), o = t;
	} else t && (fi(e, t), o = { default: 1 });
	if (a) for (let e in i) !ci(e) && o[e] == null && delete i[e];
}, K = Di;
function gi(e) {
	return _i(e);
}
function _i(e, t) {
	let n = Ee();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p = w, insertStaticContent: m } = e, h = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ri(e, t) && (r = fe(e), N(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === C && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Oi:
				g(e, t, n, r);
				break;
			case ki:
				_(e, t, n, r);
				break;
			case Ai:
				e ?? v(t, n, r, o);
				break;
			case q:
				re(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? te(e, t, n, r, i, a, o, s, c) : d & 6 ? ie(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, he);
		}
		u != null && i ? Cr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Cr(e.ref, null, a, e, !0);
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
	}, ee = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, te = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) b(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ne(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, b = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && T(e.children, f, null, i, s, vi(e, c), l, d), _ && Yn(e, null, i, "created"), x(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !me(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && Xi(p, i, e);
		}
		_ && Yn(e, null, i, "beforeMount");
		let v = bi(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && K(() => {
			try {
				p && Xi(p, i, e), v && g.enter(f), _ && Yn(e, null, i, "mounted");
			} finally {}
		}, s);
	}, x = (e, t, n, r, i) => {
		if (n && p(e, n), r) for (let t = 0; t < r.length; t++) p(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ei(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				x(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? qi(e[l]) : Ki(e[l]);
			h(null, c, t, n, r, i, a, o, s);
		}
	}, ne = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: d, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || S, m = t.props || S, h;
		if (n && yi(n, !1), (h = m.onVnodeBeforeUpdate) && Xi(h, n, t, e), f && Yn(t, e, n, "beforeUpdate"), n && yi(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (l = 0, s = !1, d = null), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && u(c, ""), d ? E(e.dynamicChildren, d, c, n, r, vi(t, i), o) : s || se(e, t, c, null, n, r, vi(t, i), o, !1), l > 0) {
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
			h && Xi(h, n, t, e), f && Yn(t, e, n, "updated");
		}, r);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Ti(c), f = u && (c.type === q || !Ri(c, l) || c.shapeFlag & 198) ? d(u) : n;
			h(c, l, f, null, r, i, a, o, !0);
		}
	}, D = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== S) for (let o in t) !me(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (me(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, re = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), T(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && xi(e, t, !0)) : se(e, t, n, f, a, o, c, l, u);
	}, ie = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : O(t, n, r, i, a, o, c) : k(e, t, c);
	}, O = (e, t, n, r, i, a, o) => {
		let s = e.component = ea(e, r, i);
		if (Er(e) && (s.ctx.renderer = he), la(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ae, o, a), !e.el) {
				let r = s.subTree = Vi(ki);
				_(null, r, t, n), e.placeholder = r.el;
			}
		} else ae(s, e, t, n, i, a, o);
	}, k = (e, t, n) => {
		let r = t.component = e.component;
		if (Yr(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, oe(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, ae = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ci(e);
					if (n) {
						t && (t.el = c.el, oe(e, t, o)), n.asyncDep.then(() => {
							K(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, f;
				yi(e, !1), t ? (t.el = c.el, oe(e, t, o)) : t = c, n && Se(n), (f = t.props && t.props.onVnodeBeforeUpdate) && Xi(f, s, t, c), yi(e, !0);
				let p = Gr(e), m = e.subTree;
				e.subTree = p, h(m, p, d(m.el), fe(m), e, i, a), t.el = p.el, u === null && Qr(e, p.el), r && K(r, i), (f = t.props && t.props.onVnodeUpdated) && K(() => Xi(f, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Tr(t);
				if (yi(e, !1), l && Se(l), !m && (o = c && c.onVnodeBeforeMount) && Xi(o, d, t), yi(e, !0), s && P) {
					let t = () => {
						e.subTree = Gr(e), P(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Gr(e);
					h(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && K(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					K(() => Xi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Tr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && K(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new qe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Ln(u), yi(e, !0), l();
	}, oe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ri(e, t.props, r, n), hi(e, t.children, n), ct(), Bn(e), lt();
	}, se = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				j(l, f, n, r, i, a, o, s, c);
				return;
			}
			if (p & 256) {
				A(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && de(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? j(l, f, n, r, i, a, o, s, c) : de(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && T(f, n, r, i, a, o, s, c));
	}, A = (e, t, n, r, i, a, o, s, c) => {
		e ||= C, t ||= C;
		let l = e.length, u = t.length, d = Math.min(l, u), f = 0;
		for (; f < d; f++) {
			let r = t[f] = c ? qi(t[f]) : Ki(t[f]);
			h(e[f], r, n, null, i, a, o, s, c);
		}
		l > u ? de(e, i, a, !0, !1, d) : T(t, n, r, i, a, o, s, c, d);
	}, j = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, f = u - 1;
		for (; l <= d && l <= f;) {
			let r = e[l], u = t[l] = c ? qi(t[l]) : Ki(t[l]);
			if (Ri(r, u)) h(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= f;) {
			let r = e[d], l = t[f] = c ? qi(t[f]) : Ki(t[f]);
			if (Ri(r, l)) h(r, l, n, null, i, a, o, s, c);
			else break;
			d--, f--;
		}
		if (l > d) {
			if (l <= f) {
				let e = f + 1, d = e < u ? t[e].el : r;
				for (; l <= f;) h(null, t[l] = c ? qi(t[l]) : Ki(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > f) for (; l <= d;) N(e[l], i, a, !0), l++;
		else {
			let p = l, m = l, g = /* @__PURE__ */ new Map();
			for (l = m; l <= f; l++) {
				let e = t[l] = c ? qi(t[l]) : Ki(t[l]);
				e.key != null && g.set(e.key, l);
			}
			let _, v = 0, y = f - m + 1, ee = !1, te = 0, b = Array(y);
			for (l = 0; l < y; l++) b[l] = 0;
			for (l = p; l <= d; l++) {
				let r = e[l];
				if (v >= y) {
					N(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = g.get(r.key);
				else for (_ = m; _ <= f; _++) if (b[_ - m] === 0 && Ri(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? N(r, i, a, !0) : (b[u - m] = l + 1, u >= te ? te = u : ee = !0, h(r, t[u], n, null, i, a, o, s, c), v++);
			}
			let x = ee ? Si(b) : C;
			for (_ = x.length - 1, l = y - 1; l >= 0; l--) {
				let e = m + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || Ti(f) : r;
				b[l] === 0 ? h(null, d, n, p, i, a, o, s, c) : ee && (_ < 0 || l !== x[_] ? M(d, n, p, 2) : _--);
			}
		}
	}, M = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) M(e.component.subTree, t, n, a);
		else if (d & 128) e.suspense.move(t, n, a);
		else if (d & 64) c.move(e, t, n, he);
		else if (c === q) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) M(u[e], t, n, a);
			r(e.anchor, t, n);
		} else if (c === Ai) y(e, t, n);
		else if (a !== 2 && d & 1 && l) {
			if (a === 0) l.persisted && !s[hr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), K(() => l.enter(s), o));
			else {
				let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? i(s) : r(s, t, n);
				}, d = () => {
					let e = s._isLeaving || !!s[hr];
					s._isLeaving && s[hr](!0), l.persisted && !e ? u() : a(s, () => {
						u(), c && c();
					});
				};
				o ? o(s, u, d) : d();
			}
		} else r(s, t, n);
	}, N = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (ct(), Cr(s, null, n, e, !0), lt()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Tr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Xi(_, t, e), u & 6) ue(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Yn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, he, r) : l && !l.hasOnce && (a !== q || d > 0 && d & 64) ? de(l, t, n, !1, !0) : (a === q && d & 384 || !i && u & 16) && de(c, t, n), r && ce(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && K(() => {
			_ && Xi(_, t, e), h && Yn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ce = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e, o = t === q;
		if (o && !a) {
			le(n, r);
			return;
		}
		if (t === Ai) {
			ee(e), a && !a.persisted && a.afterLeave && a.afterLeave();
			return;
		}
		let s = o ? yr(e) : e, c = () => {
			o ? d(n) && le(n, r) : i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (s && s.shapeFlag & 1 && a && !a.persisted) {
			let { leave: e, delayLeave: t } = a, n = s.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, le = (e, t) => {
		let n;
		for (; e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, ue = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		wi(c), wi(l), r && Se(r), i.stop(), a ? (a.flags |= 8, N(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, N(o, e, t, n)), s && K(s, t), K(() => {
			e.isUnmounted = !0;
		}, t);
	}, de = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) N(e[o], t, n, r, i);
	}, fe = (e) => {
		if (e.shapeFlag & 6) return fe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = f(e.anchor || e.el), n = t && t[nr];
		return n ? f(n) : t;
	}, pe = (e, t, n) => {
		Un(() => {
			e == null ? t._vnode && N(t._vnode, null, null, !0) : h(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : $i());
	}, he = {
		p: h,
		um: N,
		m: M,
		r: ce,
		mt: O,
		mc: T,
		pc: se,
		pbc: E,
		n: fe,
		o: e
	}, ge, P;
	return t && ([ge, P] = t(he)), {
		render: pe,
		hydrate: ge,
		createApp: zr(pe, ge)
	};
}
function vi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function yi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (k(r) && k(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = qi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && xi(t, a)), a.type === Oi && (a.patchFlag === -1 && (a = i[e] = qi(a)), a.el = t.el), a.type === ki && !a.el && (a.el = t.el);
	}
}
function Si(e) {
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
function Ci(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ci(t);
}
function wi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ti(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ti(t.subTree) : null;
}
var Ei = (e) => e.__isSuspense;
function Di(e, t) {
	t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : zn(e);
}
var q = /* @__PURE__ */ Symbol.for("v-fgt"), Oi = /* @__PURE__ */ Symbol.for("v-txt"), ki = /* @__PURE__ */ Symbol.for("v-cmt"), Ai = /* @__PURE__ */ Symbol.for("v-stc"), ji = [], J = null;
function Y(e = !1) {
	ji.push(J = e ? null : []);
}
function Mi() {
	ji.pop(), J = ji[ji.length - 1] || null;
}
var Ni = 1;
function Pi(e, t = !1) {
	Ni += e, e < 0 && J && t && (J.hasOnce = !0);
}
function Fi(e) {
	return e.dynamicChildren = Ni > 0 ? J || C : null, Mi(), Ni > 0 && J && J.push(e), e;
}
function X(e, t, n, r, i, a) {
	return Fi(Z(e, t, n, r, i, a, !0));
}
function Ii(e, t, n, r, i) {
	return Fi(Vi(e, t, n, r, i, !0));
}
function Li(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ri(e, t) {
	return e.type === t.type && e.key === t.key;
}
var zi = ({ key: e }) => e ?? null, Bi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : j(e) || /* @__PURE__ */ B(e) || A(e) ? {
	i: W,
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
		key: t && zi(t),
		ref: t && Bi(t),
		scopeId: Kn,
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
		ctx: W
	};
	return s ? (Ji(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= j(n) ? 8 : 16), Ni > 0 && !o && J && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && J.push(c), c;
}
var Vi = Hi;
function Hi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== jr || (e = ki), Li(e)) {
		let r = Wi(e, t, !0);
		return n && Ji(r, n), Ni > 0 && !a && J && (r.shapeFlag & 6 ? J[J.indexOf(e)] = r : J.push(r)), r.patchFlag = -2, r;
	}
	if (ga(e) && (e = e.__vccOpts), t) {
		t = Ui(t);
		let { class: e, style: n } = t;
		e && !j(e) && (t.class = Me(e)), N(n) && (/* @__PURE__ */ cn(n) && !k(n) && (n = D({}, n)), t.style = De(n));
	}
	let o = j(e) ? 1 : Ei(e) ? 128 : rr(e) ? 64 : N(e) ? 4 : A(e) ? 2 : 0;
	return Z(e, t, n, r, i, o, a, !0);
}
function Ui(e) {
	return e ? /* @__PURE__ */ cn(e) || ti(e) ? D({}, e) : e : null;
}
function Wi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Yi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && zi(l),
		ref: t && t.ref ? n && a ? k(a) ? a.concat(Bi(t)) : [a, Bi(t)] : Bi(t) : a,
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
		ssContent: e.ssContent && Wi(e.ssContent),
		ssFallback: e.ssFallback && Wi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && vr(u, c.clone(u)), u;
}
function Gi(e = " ", t = 0) {
	return Vi(Oi, null, e, t);
}
function Q(e = "", t = !1) {
	return t ? (Y(), Ii(ki, null, e)) : Vi(ki, null, e);
}
function Ki(e) {
	return e == null || typeof e == "boolean" ? Vi(ki) : k(e) ? Vi(q, null, e.slice()) : Li(e) ? qi(e) : Vi(Oi, null, String(e));
}
function qi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wi(e);
}
function Ji(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (k(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Ji(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !ti(t) ? t._ctx = W : r === 3 && W && (W.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (A(t)) {
		if (r & 65) {
			Ji(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: W
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Gi(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Yi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = Me([t.class, r.class]));
		else if (e === "style") t.style = De([t.style, r.style]);
		else if (ne(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(k(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !E(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Xi(e, t, n, r = null) {
	En(e, t, 7, [n, r]);
}
var Zi = Lr(), Qi = 0;
function $i() {
	return Qi;
}
function ea(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || Zi, a = {
		uid: Qi++,
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
		scope: new We(!0),
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
		propsOptions: oi(r, i),
		emitsOptions: Ur(r, i),
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Hr.bind(null, a), e.ce && e.ce(a), a;
}
var ta = null, na = () => ta || W, ra, ia;
{
	let e = Ee(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ra = t("__VUE_INSTANCE_SETTERS__", (e) => ta = e), ia = t("__VUE_SSR_SETTERS__", (e) => ca = e);
}
var aa = (e) => {
	let t = ta;
	return ra(e), e.scope.on(), () => {
		e.scope.off(), ra(t);
	};
}, oa = () => {
	ta && ta.scope.off(), ra(null);
};
function sa(e) {
	return e.vnode.shapeFlag & 4;
}
var ca = !1;
function la(e, t = !1, n = !1) {
	t && ia(t);
	let { props: r, children: i } = e.vnode, a = sa(e);
	ni(e, r, a, t), mi(e, i, n || t);
	let o = a ? ua(e, t) : void 0;
	return t && ia(!1), o;
}
function ua(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ir);
	let { setup: r } = n;
	if (r) {
		ct();
		let n = e.setupContext = r.length > 1 ? ma(e) : null, i = aa(e), a = Tn(r, e, 0, [e.props, n]), o = ce(a);
		if (lt(), i(), (o || e.sp) && !Tr(e) && br(e), o) {
			if (a.then(oa, oa), t) return a.then((n) => {
				ia(!0);
				try {
					da(e, n, t);
				} finally {
					ia(!1);
				}
			}).catch((t) => {
				Dn(t, e, 0);
			});
			e.asyncDep = a;
		} else da(e, a, t);
	} else fa(e, t);
}
function da(e, t, n) {
	A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : N(t) && (e.setupState = gn(t)), fa(e, n);
}
function fa(e, t, n) {
	let r = e.type;
	e.render ||= r.render || w;
}
var pa = { get(e, t) {
	return R(e, "get", ""), e[t];
} };
function ma(e) {
	return {
		attrs: new Proxy(e.attrs, pa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ha(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(gn(ln(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Pr) return Pr[n](e);
		},
		has(e, t) {
			return t in e || t in Pr;
		}
	}) : e.proxy;
}
function ga(e) {
	return A(e) && "__vccOpts" in e;
}
var $ = (e, t) => /* @__PURE__ */ vn(e, t, ca), _a = "3.5.44", va = void 0, ya = typeof window < "u" && window.trustedTypes;
if (ya) try {
	va = /* @__PURE__ */ ya.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ba = va ? (e) => va.createHTML(e) : (e) => e, xa = "http://www.w3.org/2000/svg", Sa = "http://www.w3.org/1998/Math/MathML", Ca = typeof document < "u" ? document : null, wa = Ca && /* @__PURE__ */ Ca.createElement("template"), Ta = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ca.createElementNS(xa, e) : t === "mathml" ? Ca.createElementNS(Sa, e) : n ? Ca.createElement(e, { is: n }) : Ca.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ca.createTextNode(e),
	createComment: (e) => Ca.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ca.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			wa.innerHTML = ba(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = wa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ea = /* @__PURE__ */ Symbol("_vtc");
function Da(e, t, n) {
	let r = e[Ea];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Oa = /* @__PURE__ */ Symbol("_vod"), ka = /* @__PURE__ */ Symbol("_vsh"), Aa = /* @__PURE__ */ Symbol(""), ja = /(?:^|;)\s*display\s*:/;
function Ma(e, t, n) {
	let r = e.style, i = j(n), a = !1;
	if (n && !i) {
		if (t) {
			if (j(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Pa(r, t, "");
			}
			else for (let e in t) n[e] ?? Pa(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Pa(r, i, "") : Ra(e, i, !j(t) && t ? t[i] : void 0, o) || Pa(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Aa];
			e && (n += ";" + e), r.cssText = n, a = ja.test(n);
		}
	} else t && e.removeAttribute("style");
	Oa in e && (i && t === n || (e[Oa] = a ? r.display : ""), e[ka] && (r.display = "none"));
}
var Na = /\s*!important$/;
function Pa(e, t, n) {
	if (k(n)) n.forEach((n) => Pa(e, t, n));
	else if (n ??= "", t.startsWith("--")) Na.test(n) ? e.setProperty(t, n.replace(Na, ""), "important") : e.setProperty(t, n);
	else {
		let r = La(e, t);
		Na.test(n) ? e.setProperty(ve(r), n.replace(Na, ""), "important") : e[r] = n;
	}
}
var Fa = [
	"Webkit",
	"Moz",
	"ms"
], Ia = {};
function La(e, t) {
	let n = Ia[t];
	if (n) return n;
	let r = P(t);
	if (r !== "filter" && r in e) return Ia[t] = r;
	r = ye(r);
	for (let n = 0; n < Fa.length; n++) {
		let i = Fa[n] + r;
		if (i in e) return Ia[t] = i;
	}
	return t;
}
function Ra(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && j(r) && n === r;
}
var za = "http://www.w3.org/1999/xlink";
function Ba(e, t, n, r, i, a = Ne(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(za, t.slice(6, t.length)) : e.setAttributeNS(za, t, n) : n == null || a && !Pe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : M(n) ? String(n) : n);
}
function Va(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ba(n) : n);
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
		r === "boolean" ? n = Pe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ha(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ua(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Wa = /* @__PURE__ */ Symbol("_vei");
function Ga(e, t, n, r, i = null) {
	let a = e[Wa] || (e[Wa] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ja(t);
		r ? Ha(e, n, a[t] = Qa(r, i), s) : o && (Ua(e, n, o, s), a[t] = void 0);
	}
}
var Ka = /(Once|Passive|Capture)$/, qa = /^on:?(?:Once|Passive|Capture)$/;
function Ja(e) {
	let t, n;
	for (; (n = e.match(Ka)) && !qa.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : ve(e.slice(2)), t];
}
var Ya = 0, Xa = /* @__PURE__ */ Promise.resolve(), Za = () => Ya ||= (Xa.then(() => Ya = 0), Date.now());
function Qa(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (k(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && En(e, t, 5, a);
			}
		} else En(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Za(), n;
}
var $a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Da(e, r, o) : t === "style" ? Ma(e, n, r) : ne(t) ? E(t) || Ga(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : to(e, t, r, o)) ? (Va(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Ba(e, t, r, o, a, t !== "value")) : e._isVueCE && (no(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !j(r))) ? Va(e, P(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ba(e, t, r, o));
};
function to(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && $a(t) && A(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return $a(t) && j(n) ? !1 : t in e;
}
function no(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = P(t);
	return Array.isArray(n) ? n.some((e) => P(e) === r) : Object.keys(n).some((e) => P(e) === r);
}
var ro = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return k(t) ? (e) => Se(t, e) : t;
};
function io(e) {
	e.target.composing = !0;
}
function ao(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var oo = /* @__PURE__ */ Symbol("_assign"), so = /* @__PURE__ */ Symbol("_initialValue");
function co(e, t, n) {
	return t && (e = e.trim()), n && (e = we(e)), e;
}
var lo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[so] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[so] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[oo] = ro(i);
		let a = r || i.props && i.props.type === "number";
		Ha(e, t ? "change" : "input", (t) => {
			t.target.composing || e[oo](co(e.value, n, a));
		}), (n || a) && Ha(e, "change", () => {
			e.value = co(e.value, n, a);
		}), t || (Ha(e, "compositionstart", io), Ha(e, "compositionend", ao), Ha(e, "change", ao));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[so];
		delete e[so], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[oo](co(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[oo] = ro(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? we(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, uo = {
	deep: !0,
	created(e, t, n) {
		e[oo] = ro(n), Ha(e, "change", () => {
			let t = e._modelValue, n = go(e), r = e.checked, i = e[oo];
			if (k(t)) {
				let e = Be(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (oe(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(_o(e, r));
		});
	},
	mounted: fo,
	beforeUpdate(e, t, n) {
		e[oo] = ro(n), fo(e, t, n);
	}
};
function fo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (k(t)) i = Be(t, r.props.value) > -1;
	else if (oe(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = ze(t, _o(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var po = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Ha(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? we(go(e)) : go(e)), r = e.multiple, i = r ? oe(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? k(i) ? t.slice() : t : i];
			try {
				e[oo](i);
			} finally {
				Fn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[oo] = ro(r);
	},
	mounted(e, { value: t }) {
		ho(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[oo] = ro(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, n && n[0] === e.multiple && mo(t, n[1], n[0]) || ho(e, t);
	}
};
function mo(e, t, n) {
	if (!n || k(e)) return ze(e, t);
	if (oe(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function ho(e, t) {
	let n = e.multiple, r = k(t);
	if (!n || r || oe(t)) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = go(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : Be(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (ze(go(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function go(e) {
	return "_value" in e ? e._value : e.value;
}
function _o(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var vo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], yo = {
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
	exact: (e, t) => vo.some((n) => e[`${n}Key`] && !t.includes(n))
}, bo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = yo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, xo = /* @__PURE__ */ D({ patchProp: eo }, Ta), So;
function Co() {
	return So ||= gi(xo);
}
var wo = ((...e) => {
	let t = Co().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Eo(e);
		if (!r) return;
		let i = t._component;
		A(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, To(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function To(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Eo(e) {
	return j(e) ? document.querySelector(e) : e;
}
// src/catalogue/ResourceCard.vue
var Do = ["aria-busy"], Oo = [
	"title",
	"aria-label",
	"disabled"
], ko = ["src", "alt"], Ao = [
	"href",
	"title",
	"aria-label"
], jo = ["src", "alt"], Mo = { class: "card-head" }, No = { class: "card-actions" }, Po = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled"
], Fo = [
	"title",
	"aria-label",
	"disabled"
], Io = [
	"title",
	"aria-label",
	"disabled"
], Lo = [
	"title",
	"aria-label",
	"disabled"
], Ro = { class: "meta" }, zo = {
	key: 0,
	class: "tag submission"
}, Bo = { class: "tag" }, Vo = { class: "tag lang" }, Ho = {
	key: 1,
	class: "tag format"
}, Uo = {
	key: 2,
	class: "tag application"
}, Wo = {
	key: 3,
	class: "tag flash"
}, Go = ["aria-label"], Ko = { class: "rating-label" }, qo = {
	key: 0,
	class: "rating-summary"
}, Jo = { class: "stars" }, Yo = [
	"title",
	"aria-label",
	"aria-pressed",
	"disabled",
	"onClick"
], Xo = { class: "note" }, Zo = {
	key: 2,
	class: "health"
}, Qo = {
	key: 3,
	class: "note submission-by"
}, $o = ["role"], es = {
	__name: "ResourceCard",
	props: {
		game: Object,
		context: Object,
		onAction: Function
	},
	setup(r) {
		let o = r, u = /* @__PURE__ */ V(!1), d = /* @__PURE__ */ V(""), f = /* @__PURE__ */ V(!1), m = /* @__PURE__ */ V(!1), v = $(() => s(o.game)), y = $(() => {
			o.context;
			let e = t();
			return (e === "va" || e === "ca" ? o.game.title_ca : e === "en" ? o.game.title_en : "") || o.game.title || n("no_title");
		}), ee = $(() => {
			o.context;
			let e = t();
			return (e === "va" || e === "ca" ? o.game.notes_ca : e === "en" ? o.game.notes_en : "") || o.game.notes || n("no_notes");
		}), te = $(() => o.context.favorites.has(v.value)), b = $(() => o.context.userRatings.get(v.value) || 0), x = $(() => o.context.ratingSummary.get(v.value)), S = $(() => o.context.brokenSummary.get(v.value)), C = $(() => o.context.userReports.has(v.value)), w = $(() => o.context.backendMode === "remote"), T = $(() => o.context.reportByUrl.get(l(o.game.url))), ne = $(() => T.value ? T.value.ok ? "" : n(T.value.severity === "warning" ? "link_warn" : "link_error", T.value.error || `HTTP ${T.value.httpStatus || "error"}`) : n("not_checked")), E = $(() => re(o.game.image) || p), D = $(() => re(o.game.url));
		function re(e) {
			if (!e) return "";
			try {
				let t = new URL(e, window.location.href);
				return ["http:", "https:"].includes(t.protocol) && !t.username && !t.password ? t.href : "";
			} catch {
				return "";
			}
		}
		let ie = $(() => o.game.flash || [
			"jclic",
			"eduhoot",
			"llibres"
		].includes(o.game.format));
		function O() {
			D.value && (o.game.flash ? h(D.value, o.game.title) : o.game.format === "jclic" ? g(D.value, o.game.title) : _(D.value, o.game.title, o.game.format === "llibres"));
		}
		async function k(e, t) {
			if (u.value || o.context.sessionChanging || ["hide", "unhide"].includes(e) && !o.context.isAdmin) return;
			let r = e === "report" ? o.context.isAdmin ? "report_broken_confirm_admin" : "report_broken_confirm" : e === "hide" ? "admin_hide_confirm" : e === "unhide" ? "admin_unhide_confirm" : null;
			if (!r || window.confirm(n(r, y.value))) {
				u.value = !0, d.value = "", f.value = !1;
				try {
					await o.onAction(e, v.value, t, o.context.epoch), e === "report" && (d.value = "report_broken_feedback");
				} catch {
					f.value = !0, d.value = "catalogue_action_error";
				} finally {
					u.value = !1;
				}
			}
		}
		return (t, o) => (Y(), X("article", {
			class: Me(["card", {
				submission: r.game._isSubmission,
				broken: T.value && !T.value.ok
			}]),
			"aria-busy": u.value
		}, [
			ie.value ? (Y(), X("button", {
				key: 0,
				type: "button",
				class: "card-image-link",
				title: H(n)(r.game.flash ? "play_ruffle" : "open_game"),
				"aria-label": H(n)(r.game.flash ? "play_ruffle" : "open_game"),
				disabled: !D.value,
				onClick: O
			}, [Z("img", {
				class: "card-image",
				src: m.value ? H(p) : E.value,
				alt: r.game.title || H(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: o[0] ||= (e) => m.value = !0
			}, null, 40, ko)], 8, Oo)) : (Y(), X("a", {
				key: 1,
				class: "card-image-link",
				href: D.value || void 0,
				target: "_blank",
				rel: "noreferrer noopener",
				title: H(n)("open_game"),
				"aria-label": H(n)("open_game")
			}, [Z("img", {
				class: "card-image",
				src: m.value ? H(p) : E.value,
				alt: r.game.title || H(n)("no_title"),
				loading: "lazy",
				decoding: "async",
				onError: o[1] ||= (e) => m.value = !0
			}, null, 40, jo)], 8, Ao)),
			Z("div", Mo, [Z("h3", null, F(y.value), 1), Z("div", No, [
				Z("button", {
					type: "button",
					class: Me(["fav-btn", { active: te.value }]),
					title: H(n)(te.value ? "favorite_remove" : "favorite_add"),
					"aria-label": H(n)(te.value ? "favorite_remove" : "favorite_add"),
					"aria-pressed": te.value,
					disabled: r.context.sessionChanging || u.value,
					onClick: o[2] ||= (e) => k("favorite")
				}, "❤", 10, Po),
				w.value ? (Y(), X("button", {
					key: 0,
					type: "button",
					class: Me(["report-btn", { active: C.value }]),
					title: H(n)(C.value ? "report_broken_active" : "report_broken"),
					"aria-label": H(n)(C.value ? "report_broken_active" : "report_broken"),
					disabled: r.context.sessionChanging || u.value || C.value,
					onClick: o[3] ||= (e) => k("report")
				}, "⚠", 10, Fo)) : Q("", !0),
				w.value && r.context.isAdmin ? (Y(), X("button", {
					key: 1,
					type: "button",
					class: "admin-hide-btn",
					title: H(n)("admin_hide_resource"),
					"aria-label": H(n)("admin_hide_resource"),
					disabled: r.context.sessionChanging || u.value,
					onClick: o[4] ||= (e) => k("hide")
				}, "×", 8, Io)) : Q("", !0),
				w.value && r.context.isAdmin && S.value?.adminReported ? (Y(), X("button", {
					key: 2,
					type: "button",
					class: "admin-unhide-btn",
					title: H(n)("admin_unhide_resource"),
					"aria-label": H(n)("admin_unhide_resource"),
					disabled: r.context.sessionChanging || u.value,
					onClick: o[5] ||= (e) => k("unhide")
				}, "↩", 8, Lo)) : Q("", !0)
			])]),
			Z("div", Ro, [
				r.game._isSubmission ? (Y(), X("span", zo, F(H(n)("submission_badge")), 1)) : Q("", !0),
				Z("span", Bo, F(H(e)(r.game.area || "General")), 1),
				(Y(!0), X(q, null, Mr(r.game.levels || (r.game.level ? [r.game.level] : [H(n)("no_level")]), (e) => (Y(), X("span", {
					key: e,
					class: "tag"
				}, F(H(i)(e)), 1))), 128)),
				Z("span", Vo, F(H(c)(r.game) || H(n)("catalogue_no_language")), 1),
				[
					"jclic",
					"h5p",
					"eduhoot",
					"scorm",
					"llibres"
				].includes(r.game.format) ? (Y(), X("span", Ho, F(r.game.format.toUpperCase()), 1)) : Q("", !0),
				H(a)(r.game) ? (Y(), X("span", Uo, F(H(a)(r.game)), 1)) : Q("", !0),
				r.game.flash ? (Y(), X("span", Wo, "Flash")) : Q("", !0)
			]),
			Z("div", {
				class: "rating",
				role: "group",
				"aria-label": H(n)("rating_group_label")
			}, [
				Z("span", Ko, F(H(n)("rating_label")), 1),
				w.value ? (Y(), X("span", qo, F(x.value?.count ? H(n)("rating_avg", x.value.avg.toFixed(1), x.value.count) : H(n)("rating_no_votes")), 1)) : Q("", !0),
				Z("div", Jo, [(Y(), X(q, null, Mr(5, (e) => Z("button", {
					key: e,
					class: Me(["star-btn", { active: e <= b.value }]),
					type: "button",
					title: H(n)("rating_set", e),
					"aria-label": H(n)("rating_set", e),
					"aria-pressed": e <= b.value,
					disabled: r.context.sessionChanging || u.value,
					onClick: (t) => k("rating", e)
				}, "★", 10, Yo)), 64))])
			], 8, Go),
			Z("p", Xo, F(ee.value), 1),
			ne.value ? (Y(), X("p", Zo, F(ne.value), 1)) : Q("", !0),
			r.game._isSubmission && r.game._submittedBy ? (Y(), X("p", Qo, F(H(n)("submission_by", r.game._submittedBy)), 1)) : Q("", !0),
			d.value ? (Y(), X("p", {
				key: 4,
				class: "report-feedback",
				role: f.value ? "alert" : "status"
			}, F(H(n)(d.value)), 9, $o)) : Q("", !0)
		], 10, Do));
	}
}, ts = ["placeholder"], ns = ["id", "onUpdate:modelValue"], rs = { value: "" }, is = ["value"], as = { value: 0 }, os = ["value"], ss = { class: "check-wrap" }, cs = { class: "check-wrap" }, ls = {
	key: 0,
	id: "brokenOnlyLabel",
	class: "check-wrap"
}, us = {
	key: 1,
	id: "reportedOnlyLabel",
	class: "check-wrap"
}, ds = { class: "results-head" }, fs = { id: "resultCount" }, ps = {
	key: 0,
	role: "alert"
}, ms = {
	key: 1,
	role: "status"
}, hs = ["aria-busy"], gs = { class: "load-more-wrap" }, _s = {
	key: 2,
	id: "emptyState",
	class: "empty"
}, vs = {
	__name: "Catalogue",
	props: { onAction: Function },
	setup(c, { expose: l }) {
		let p = /* @__PURE__ */ fn({
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
		}), m = new URLSearchParams(location.search), h = /* @__PURE__ */ en({
			term: m.get("q") || "",
			selectedLevel: m.get("level") || "",
			selectedLanguage: m.get("lang") || "",
			selectedArea: m.get("area") || "",
			selectedFormat: m.get("format") || "",
			selectedApplication: m.get("application") || "",
			minRating: Number(m.get("rating")) || 0,
			onlyFavorites: m.get("fav") === "1",
			onlySubmissions: m.get("submissions") === "1",
			onlyBroken: !1,
			onlyReported: !1
		}), g = /* @__PURE__ */ V(48), _ = $(() => o(p.value.games, h, p.value)), v = $(() => _.value.slice(0, g.value)), y = $(() => ({
			level: d(p.value.games),
			language: u(p.value.games),
			area: f(p.value.games, "area"),
			format: f(p.value.games, "format"),
			application: [...new Set(p.value.games.map(a).filter(Boolean))].sort()
		}));
		function ee(e) {
			p.value = {
				...e,
				language: t()
			}, e.isAdmin || (h.onlyBroken = !1, h.onlyReported = !1);
		}
		function te() {
			let e = new URLSearchParams(), t = new URLSearchParams(location.search).get("ui_lang");
			[
				"es",
				"ca",
				"va",
				"en"
			].includes(t) && e.set("ui_lang", t);
			for (let [t, n] of Object.entries({
				q: h.term.trim(),
				level: h.selectedLevel,
				lang: h.selectedLanguage,
				area: h.selectedArea,
				format: h.selectedFormat,
				application: h.selectedApplication,
				rating: h.minRating || "",
				fav: h.onlyFavorites ? "1" : "",
				submissions: h.onlySubmissions ? "1" : ""
			})) n && e.set(t, n);
			let n = location.pathname + (e.size ? "?" + e : "") + location.hash;
			history.replaceState(null, "", n);
		}
		return $n(h, () => {
			g.value = 48, te();
		}), l({ setContext: ee }), (t, a) => (Y(), X(q, null, [
			(Y(), Ii(fr, { to: "#catalogueFilters" }, [
				Z("label", null, [Z("span", null, F(H(n)("search_label")), 1), G(Z("input", {
					id: "searchInput",
					"onUpdate:modelValue": a[0] ||= (e) => h.term = e,
					type: "search",
					placeholder: H(n)("search_placeholder")
				}, null, 8, ts), [[lo, h.term]])]),
				(Y(!0), X(q, null, Mr([
					{
						id: "levelFilter",
						field: "selectedLevel",
						options: "level",
						label: "level",
						format: H(i)
					},
					{
						id: "languageFilter",
						field: "selectedLanguage",
						options: "language",
						label: "language",
						format: H(r)
					},
					{
						id: "areaFilter",
						field: "selectedArea",
						options: "area",
						label: "area",
						format: H(e)
					},
					{
						id: "applicationFilter",
						field: "selectedApplication",
						options: "application",
						label: "application",
						format: (e) => e
					},
					{
						id: "formatFilter",
						field: "selectedFormat",
						options: "format",
						label: "format",
						format: (e) => e
					}
				], (e) => (Y(), X("label", { key: e.id }, [Z("span", null, F(H(n)(e.label + "_label")), 1), G(Z("select", {
					id: e.id,
					"onUpdate:modelValue": (t) => h[e.field] = t
				}, [Z("option", rs, F(H(n)(e.label + "_all")), 1), (Y(!0), X(q, null, Mr(y.value[e.options], (t) => (Y(), X("option", {
					key: t,
					value: t
				}, F(e.format(t)), 9, is))), 128))], 8, ns), [[po, h[e.field]]])]))), 128)),
				Z("label", null, [Z("span", null, F(H(n)("rating_min_label")), 1), G(Z("select", {
					id: "ratingFilter",
					"onUpdate:modelValue": a[1] ||= (e) => h.minRating = e
				}, [Z("option", as, F(H(n)("rating_all_filter")), 1), (Y(), X(q, null, Mr(5, (e) => Z("option", {
					key: e,
					value: e
				}, F(e) + "★" + F(e < 5 ? "+" : ""), 9, os)), 64))], 512), [[
					po,
					h.minRating,
					void 0,
					{ number: !0 }
				]])]),
				Z("label", ss, [G(Z("input", {
					id: "favoritesOnly",
					"onUpdate:modelValue": a[2] ||= (e) => h.onlyFavorites = e,
					type: "checkbox"
				}, null, 512), [[uo, h.onlyFavorites]]), Z("span", null, F(H(n)("favorites_only")), 1)]),
				Z("label", cs, [G(Z("input", {
					id: "submissionsOnly",
					"onUpdate:modelValue": a[3] ||= (e) => h.onlySubmissions = e,
					type: "checkbox"
				}, null, 512), [[uo, h.onlySubmissions]]), Z("span", null, F(H(n)("submissions_only")), 1)]),
				p.value.isAdmin ? (Y(), X("label", ls, [G(Z("input", {
					id: "brokenOnly",
					"onUpdate:modelValue": a[4] ||= (e) => h.onlyBroken = e,
					type: "checkbox"
				}, null, 512), [[uo, h.onlyBroken]]), Z("span", null, F(H(n)("broken_only")), 1)])) : Q("", !0),
				p.value.isAdmin ? (Y(), X("label", us, [G(Z("input", {
					id: "reportedOnly",
					"onUpdate:modelValue": a[5] ||= (e) => h.onlyReported = e,
					type: "checkbox"
				}, null, 512), [[uo, h.onlyReported]]), Z("span", null, F(H(n)("reported_only")), 1)])) : Q("", !0)
			])),
			Z("div", ds, [Z("h2", null, F(H(n)("section_title")), 1), Z("p", fs, F(H(n)("result_count", _.value.length, p.value.games.length)), 1)]),
			p.value.error ? (Y(), X("p", ps, F(H(n)("catalogue_load_error")), 1)) : Q("", !0),
			p.value.loading ? (Y(), X("p", ms, F(H(n)("catalogue_loading")), 1)) : Q("", !0),
			Z("div", {
				id: "grid",
				class: "grid",
				"aria-live": "polite",
				"aria-busy": p.value.loading
			}, [(Y(!0), X(q, null, Mr(v.value, (e, t) => (Y(), Ii(es, {
				key: p.value.epoch + ":" + H(s)(e) + ":" + t,
				game: e,
				context: p.value,
				"on-action": c.onAction
			}, null, 8, [
				"game",
				"context",
				"on-action"
			]))), 128))], 8, hs),
			Z("div", gs, [_.value.length > v.value.length ? (Y(), X("button", {
				key: 0,
				id: "loadMoreBtn",
				class: "btn-load-more",
				type: "button",
				onClick: a[6] ||= (e) => g.value += 48
			}, F(H(n)("load_more", _.value.length - v.value.length)), 1)) : Q("", !0)]),
			!_.value.length && !p.value.loading ? (Y(), X("p", _s, F(H(n)("empty")), 1)) : Q("", !0)
		], 64));
	}
}, ys = {
	key: 0,
	id: "authPanel",
	class: "auth-panel",
	"aria-live": "polite"
}, bs = { class: "auth-actions" }, xs = ["aria-disabled", "href"], Ss = ["disabled"], Cs = ["disabled"], ws = ["disabled"], Ts = {
	key: 0,
	role: "alert"
}, Es = {
	id: "studentDialogTitle",
	class: "submit-dialog-title"
}, Ds = { class: "submit-fields" }, Os = ["disabled"], ks = ["disabled"], As = ["role"], js = { class: "submit-actions" }, Ms = ["disabled"], Ns = {
	__name: "Access",
	props: {
		onSessionChange: Function,
		onPropose: Function,
		onBusy: Function
	},
	setup(e, { expose: r }) {
		let i = e, a = /* @__PURE__ */ fn({
			backendMode: "local",
			epoch: -1,
			language: t()
		}), o = /* @__PURE__ */ V({}), s = /* @__PURE__ */ V(!1), c = /* @__PURE__ */ V(!1), l = /* @__PURE__ */ V(""), u = /* @__PURE__ */ V(!1), d = /* @__PURE__ */ V(), f = /* @__PURE__ */ V(), p = /* @__PURE__ */ V(""), h = /* @__PURE__ */ V(""), g = 0, _ = !0;
		function y(e, ...t) {
			return a.value.language, n(e, ...t);
		}
		function b() {
			p.value = "", h.value = "", l.value = "", u.value = !1, f.value && (f.value.value = "");
			let e = d.value?.querySelector("#studentPin");
			e && (e.value = "");
		}
		function x() {
			d.value?.close(), b();
		}
		async function S() {
			let e = ++g, t = a.value.epoch;
			o.value = {}, c.value = !0;
			let n = await v();
			_ && e === g && t === m.preferenceEpoch && (o.value = n, m.isTeacher = !!n.logged_in, c.value = !1);
		}
		function C(e) {
			let n = e.epoch !== a.value.epoch || e.backendMode !== a.value.backendMode;
			a.value = {
				...e,
				language: t()
			}, n && (x(), o.value = {}, c.value = !1, ++g, _ && e.backendMode === "remote" && S());
		}
		async function w() {
			s.value || (b(), d.value.showModal(), await Fn(), f.value?.focus());
		}
		async function T() {
			if (s.value || !_ || a.value.epoch !== m.preferenceEpoch) return;
			let e = p.value.trim(), t = h.value.trim();
			if (h.value = "", !e || !t) l.value = "student_login_missing", u.value = !0;
			else {
				s.value = !0, i.onBusy(!0), l.value = "student_login_loading", u.value = !1;
				try {
					let n = ee({
						publicCode: e,
						pin: t
					});
					if (t = "", await n, !_) return;
					x(), await i.onSessionChange();
				} catch {
					_ && d.value?.open && (l.value = "student_login_error", u.value = !0);
				} finally {
					t = "", s.value = !1, i.onBusy(!1);
				}
			}
		}
		async function ne() {
			if (!s.value && _ && a.value.epoch === m.preferenceEpoch) {
				s.value = !0, i.onBusy(!0), l.value = "";
				try {
					await te(), _ && await i.onSessionChange();
				} catch {
					_ && (l.value = "session_error", u.value = !0);
				} finally {
					s.value = !1, i.onBusy(!1);
				}
			}
		}
		function E() {
			_ = !1, ++g, x(), o.value = {}, c.value = !0;
		}
		async function D(e) {
			e.persisted && (_ = !0, await i.onSessionChange(), S());
		}
		return kr(() => {
			window.addEventListener("pagehide", E), window.addEventListener("pageshow", D);
		}), Ar(() => {
			E(), window.removeEventListener("pagehide", E), window.removeEventListener("pageshow", D);
		}), r({ setContext: C }), (e, t) => (Y(), X(q, null, [
			(Y(), Ii(fr, { to: "#authMount" }, [a.value.backendMode === "remote" ? (Y(), X("div", ys, [Z("div", bs, [
				c.value ? Q("", !0) : (Y(), X("a", {
					key: 0,
					id: "loginBtn",
					class: "btn-auth secondary",
					onClick: t[0] ||= (e) => {
						s.value && e.preventDefault();
					},
					"aria-disabled": s.value,
					href: o.value.logged_in ? "/api/auth/logout" : "/api/auth/login"
				}, F(y(o.value.logged_in ? "logout_btn" : "login_btn")), 9, xs)),
				o.value.student_logged_in ? (Y(), X("button", {
					key: 2,
					id: "studentLogoutBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: ne
				}, F(y("student_logout_btn", o.value.student_code || "")), 9, Cs)) : (Y(), X("button", {
					key: 1,
					id: "studentLoginBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: w
				}, F(y("student_login_btn")), 9, Ss)),
				Z("button", {
					id: "submitActivityBtn",
					class: "btn-auth secondary",
					disabled: s.value || c.value,
					onClick: t[1] ||= (e) => i.onPropose()
				}, F(y("submit_btn")), 9, ws)
			]), l.value === "session_error" ? (Y(), X("p", Ts, F(y(l.value)), 1)) : Q("", !0)])) : Q("", !0)])),
			(Y(), Ii(fr, { to: "#prefsMount" }, [Z("p", {
				id: "personalPrefsNote",
				class: Me(["personal-note", { remote: a.value.backendMode === "remote" }])
			}, F(y(a.value.backendMode === "remote" ? "personal_prefs_note_remote" : "personal_prefs_note_local")), 3)])),
			Z("dialog", {
				ref_key: "dialog",
				ref: d,
				id: "studentDialog",
				class: "submit-dialog",
				"aria-labelledby": "studentDialogTitle",
				onClose: b,
				onCancel: b,
				onClick: t[4] ||= (e) => {
					e.target === d.value && x();
				}
			}, [Z("h2", Es, F(y("student_dialog_title")), 1), Z("form", {
				id: "studentForm",
				onSubmit: bo(T, ["prevent"])
			}, [
				Z("div", Ds, [Z("label", null, [Z("span", null, F(y("student_code_label")), 1), G(Z("input", {
					ref_key: "codeInput",
					ref: f,
					id: "studentCode",
					"onUpdate:modelValue": t[2] ||= (e) => p.value = e,
					type: "text",
					required: "",
					autocomplete: "off",
					maxlength: "12",
					disabled: s.value
				}, null, 8, Os), [[lo, p.value]])]), Z("label", null, [Z("span", null, F(y("student_pin_label")), 1), G(Z("input", {
					id: "studentPin",
					"onUpdate:modelValue": t[3] ||= (e) => h.value = e,
					type: "password",
					required: "",
					inputmode: "numeric",
					autocomplete: "off",
					disabled: s.value
				}, null, 8, ks), [[lo, h.value]])])]),
				l.value ? (Y(), X("p", {
					key: 0,
					id: "studentFeedback",
					class: Me(["submit-feedback", { error: u.value }]),
					role: u.value ? "alert" : "status"
				}, F(y(l.value)), 11, As)) : Q("", !0),
				Z("div", js, [Z("button", {
					id: "studentCancelBtn",
					type: "button",
					class: "btn-auth secondary",
					onClick: x
				}, F(y("submit_cancel")), 1), Z("button", {
					id: "studentSendBtn",
					class: "btn-auth",
					disabled: s.value
				}, F(y("student_send")), 9, Ms)])
			], 32)], 544)
		], 64));
	}
}, Ps = {
	id: "submitDialogTitle",
	class: "submit-dialog-title"
}, Fs = ["disabled"], Is = ["value"], Ls = ["value"], Rs = ["role"], zs = { class: "submit-actions" }, Bs = ["disabled"], Vs = {
	__name: "Proposal",
	props: { onSubmitted: Function },
	setup(i, { expose: a }) {
		let o = i, s = /* @__PURE__ */ fn({
			epoch: -1,
			backendMode: "local",
			games: [],
			language: t()
		}), c = /* @__PURE__ */ V(), l = /* @__PURE__ */ V(), d = /* @__PURE__ */ V(!1), p = /* @__PURE__ */ V(!1), h = /* @__PURE__ */ V(""), g = /* @__PURE__ */ V(!1), _ = /* @__PURE__ */ en({
			title: "",
			url: "",
			notes: "",
			name: "",
			area: "",
			language: ""
		}), v = 0, y = !0, ee = $(() => f(s.value.games, "area")), te = $(() => u(s.value.games));
		function x(e) {
			return s.value.language, n(e);
		}
		function S() {
			Object.keys(_).forEach((e) => _[e] = ""), h.value = "", g.value = !1, p.value = !1;
		}
		function C() {
			++v, c.value?.close(), S();
		}
		function w(e) {
			(e.epoch !== s.value.epoch || e.backendMode !== s.value.backendMode) && C(), s.value = {
				...e,
				language: t()
			};
		}
		async function T() {
			y && s.value.backendMode === "remote" && s.value.epoch === m.preferenceEpoch && !d.value && (S(), ++v, c.value.showModal(), await Fn(), l.value?.focus());
		}
		function ne(e) {
			try {
				let t = new URL(e);
				return ["http:", "https:"].includes(t.protocol) && !t.username && !t.password;
			} catch {
				return !1;
			}
		}
		async function E() {
			if (d.value || p.value || !y || s.value.backendMode !== "remote" || s.value.epoch !== m.preferenceEpoch) return;
			let e = Object.fromEntries(Object.entries(_).map(([e, t]) => [e, t.trim()]));
			if (!e.title || !ne(e.url)) {
				h.value = "submit_invalid", g.value = !0;
				return;
			}
			e.area = e.area || "General";
			let t = v, n = s.value.epoch, r = () => y && t === v && n === m.preferenceEpoch;
			d.value = !0, g.value = !1, h.value = "submit_loading";
			try {
				if (await b(e), !r()) return;
				S(), p.value = !0, h.value = "submit_success";
				try {
					await o.onSubmitted();
				} catch {
					r() && (h.value = "submit_refresh_error");
				}
			} catch {
				r() && (h.value = "submit_error", g.value = !0);
			} finally {
				d.value = !1;
			}
		}
		function D() {
			y = !1, C(), c.value?.querySelector("form")?.reset();
		}
		function re() {
			y = !0;
		}
		return kr(() => {
			window.addEventListener("pagehide", D), window.addEventListener("pageshow", re);
		}), Ar(() => {
			D(), window.removeEventListener("pagehide", D), window.removeEventListener("pageshow", re);
		}), a({
			setContext: w,
			open: T
		}), (t, n) => (Y(), X("dialog", {
			ref_key: "dialog",
			ref: c,
			id: "submitDialog",
			class: "submit-dialog",
			"aria-labelledby": "submitDialogTitle",
			onCancel: C,
			onClick: n[6] ||= (e) => {
				e.target === c.value && C();
			}
		}, [Z("h2", Ps, F(x("submit_dialog_title")), 1), Z("form", {
			id: "submitForm",
			onSubmit: bo(E, ["prevent"])
		}, [
			Z("fieldset", {
				class: "submit-fields",
				disabled: d.value || p.value
			}, [
				Z("label", null, [Z("span", null, F(x("submit_field_title")), 1), G(Z("input", {
					ref_key: "titleInput",
					ref: l,
					id: "submitTitle",
					"onUpdate:modelValue": n[0] ||= (e) => _.title = e,
					required: "",
					autocomplete: "off"
				}, null, 512), [[lo, _.title]])]),
				Z("label", null, [Z("span", null, F(x("submit_field_url")), 1), G(Z("input", {
					id: "submitUrl",
					"onUpdate:modelValue": n[1] ||= (e) => _.url = e,
					type: "url",
					required: "",
					autocomplete: "off"
				}, null, 512), [[lo, _.url]])]),
				Z("label", null, [Z("span", null, F(x("area_label")), 1), G(Z("select", {
					id: "submitArea",
					"onUpdate:modelValue": n[2] ||= (e) => _.area = e
				}, [n[7] ||= Z("option", { value: "" }, "—", -1), (Y(!0), X(q, null, Mr(ee.value, (t) => (Y(), X("option", {
					key: t,
					value: t
				}, F(H(e)(t)), 9, Is))), 128))], 512), [[po, _.area]])]),
				Z("label", null, [Z("span", null, F(x("language_label")), 1), G(Z("select", {
					id: "submitLanguage",
					"onUpdate:modelValue": n[3] ||= (e) => _.language = e
				}, [n[8] ||= Z("option", { value: "" }, "—", -1), (Y(!0), X(q, null, Mr(te.value, (e) => (Y(), X("option", {
					key: e,
					value: e
				}, F(H(r)(e)), 9, Ls))), 128))], 512), [[po, _.language]])]),
				Z("label", null, [Z("span", null, F(x("submit_field_notes")), 1), G(Z("textarea", {
					id: "submitNotes",
					"onUpdate:modelValue": n[4] ||= (e) => _.notes = e,
					rows: "3"
				}, null, 512), [[lo, _.notes]])]),
				Z("label", null, [Z("span", null, F(x("submit_field_name")), 1), G(Z("input", {
					id: "submitName",
					"onUpdate:modelValue": n[5] ||= (e) => _.name = e,
					autocomplete: "off"
				}, null, 512), [[lo, _.name]])])
			], 8, Fs),
			h.value ? (Y(), X("p", {
				key: 0,
				id: "submitFeedback",
				class: Me(["submit-feedback", {
					error: g.value,
					ok: p.value
				}]),
				role: g.value ? "alert" : "status"
			}, F(x(h.value)), 11, Rs)) : Q("", !0),
			Z("div", zs, [Z("button", {
				id: "submitCancelBtn",
				type: "button",
				class: "btn-auth secondary",
				onClick: C
			}, F(x(p.value ? "dialog_close" : "submit_cancel")), 1), Z("button", {
				id: "submitSendBtn",
				class: "btn-auth",
				disabled: d.value || p.value
			}, F(x("submit_send")), 9, Bs)])
		], 32)], 544));
	}
}, Hs = ["aria-busy"], Us = { id: "sourcesTitle" }, Ws = ["disabled"], Gs = {
	key: 0,
	role: "status"
}, Ks = {
	key: 1,
	role: "alert"
}, qs = {
	key: 2,
	role: "status"
}, Js = {
	id: "sourcesList",
	class: "sources-list"
}, Ys = {
	__name: "Sources",
	setup(e, { expose: r }) {
		let i = /* @__PURE__ */ fn({
			isAdmin: !1,
			backendMode: "local",
			epoch: -1,
			language: t()
		}), a = /* @__PURE__ */ V([]), o = /* @__PURE__ */ V(!1), s = /* @__PURE__ */ V(!1), c = /* @__PURE__ */ V(!0), l = 0;
		function u() {
			return c.value && !i.value.sessionChanging && i.value.isAdmin && i.value.backendMode === "remote" && i.value.epoch === m.preferenceEpoch;
		}
		function d(e, ...t) {
			return i.value.language, n(e, ...t);
		}
		function f(e) {
			let t = new Date(e);
			return e && Number.isFinite(t.getTime()) ? t.toLocaleString(i.value.language === "va" ? "ca-ES-valencia" : i.value.language) : d("sources_never");
		}
		async function p() {
			if (!u() || o.value) return;
			let e = ++l, t = i.value.epoch;
			o.value = !0, s.value = !1, a.value = [];
			try {
				let n = await y();
				if (e !== l || !u() || t !== m.preferenceEpoch) return;
				a.value = n || [];
			} catch {
				e === l && u() && (s.value = !0);
			} finally {
				e === l && (o.value = !1);
			}
		}
		function h(e) {
			let n = e.epoch !== i.value.epoch || e.isAdmin !== i.value.isAdmin || e.backendMode !== i.value.backendMode || e.sessionChanging !== i.value.sessionChanging;
			i.value = {
				...e,
				language: t()
			}, n && (++l, a.value = [], s.value = !1, o.value = !1, u() && p());
		}
		function g() {
			c.value = !1, ++l, a.value = [], o.value = !1, s.value = !1;
		}
		function _(e) {
			e.persisted && (c.value = !0);
		}
		return kr(() => {
			window.addEventListener("pagehide", g), window.addEventListener("pageshow", _);
		}), Ar(() => {
			g(), window.removeEventListener("pagehide", g), window.removeEventListener("pageshow", _);
		}), r({ setContext: h }), (e, t) => c.value && !i.value.sessionChanging && i.value.isAdmin && i.value.backendMode === "remote" ? (Y(), X("section", {
			key: 0,
			id: "sourcesPanel",
			class: "sources-panel",
			"aria-labelledby": "sourcesTitle",
			"aria-busy": o.value
		}, [
			Z("h2", Us, F(d("sources_title")), 1),
			Z("button", {
				id: "sourcesRefresh",
				class: "btn-auth secondary",
				disabled: o.value,
				onClick: p
			}, F(d("sources_refresh")), 9, Ws),
			o.value ? (Y(), X("p", Gs, F(d("sources_loading")), 1)) : s.value ? (Y(), X("p", Ks, F(d("sources_error")), 1)) : a.value.length ? Q("", !0) : (Y(), X("p", qs, F(d("sources_empty")), 1)),
			Z("div", Js, [(Y(!0), X(q, null, Mr(a.value, (e, t) => (Y(), X("div", {
				key: e.provider + ":" + t,
				class: "source-row"
			}, [
				Z("strong", null, F(e.provider), 1),
				Z("span", null, F(d("sources_summary", e.resources ?? 0, e.last_sync?.status || "—", f(e.last_sync?.finished_at))), 1),
				Z("span", null, F(d("sources_counts", e.last_sync?.fetched ?? "—", e.last_sync?.created ?? "—", e.last_sync?.updated ?? "—", e.last_sync?.errors ?? "—")), 1)
			]))), 128))])
		], 8, Hs)) : Q("", !0);
	}
};
// src/catalogue/main.js
function Xs(e, t) {
	return wo(vs, t).mount(e);
}
function Zs(e, t) {
	return wo(Ns, t).mount(e);
}
function Qs(e, t) {
	return wo(Vs, t).mount(e);
}
function $s(e, t) {
	return wo(Ys, t).mount(e);
}
export { Zs as mountAccess, Xs as mountCatalogue, Qs as mountProposal, $s as mountSources };
