function Ks(e, t) {
  const n = Object.create(null),
    s = e.split(',')
  for (let o = 0; o < s.length; o++) n[s[o]] = !0
  return t ? o => !!n[o.toLowerCase()] : o => !!n[o]
}
const yc =
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt',
  bc = Ks(yc)
function es(e) {
  if (X(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        o = ye(s) ? Cc(s) : es(s)
      if (o) for (const i in o) t[i] = o[i]
    }
    return t
  } else {
    if (ye(e)) return e
    if (me(e)) return e
  }
}
const xc = /;(?![^(]*\))/g,
  wc = /:([^]+)/,
  kc = /\/\*.*?\*\//gs
function Cc(e) {
  const t = {}
  return (
    e
      .replace(kc, '')
      .split(xc)
      .forEach(n => {
        if (n) {
          const s = n.split(wc)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function fe(e) {
  let t = ''
  if (ye(e)) t = e
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const s = fe(e[n])
      s && (t += s + ' ')
    }
  else if (me(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function $c(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return t && !ye(t) && (e.class = fe(t)), n && (e.style = es(n)), e
}
const Pc = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Sc = Ks(Pc)
function ll(e) {
  return !!e || e === ''
}
function Tc(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let s = 0; n && s < e.length; s++) n = Tt(e[s], t[s])
  return n
}
function Tt(e, t) {
  if (e === t) return !0
  let n = qi(e),
    s = qi(t)
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1
  if (((n = Un(e)), (s = Un(t)), n || s)) return e === t
  if (((n = X(e)), (s = X(t)), n || s)) return n && s ? Tc(e, t) : !1
  if (((n = me(e)), (s = me(t)), n || s)) {
    if (!n || !s) return !1
    const o = Object.keys(e).length,
      i = Object.keys(t).length
    if (o !== i) return !1
    for (const r in e) {
      const l = e.hasOwnProperty(r),
        a = t.hasOwnProperty(r)
      if ((l && !a) || (!l && a) || !Tt(e[r], t[r])) return !1
    }
  }
  return String(e) === String(t)
}
function qs(e, t) {
  return e.findIndex(n => Tt(n, t))
}
const le = e =>
    ye(e)
      ? e
      : e == null
      ? ''
      : X(e) || (me(e) && (e.toString === cl || !oe(e.toString)))
      ? JSON.stringify(e, al, 2)
      : String(e),
  al = (e, t) =>
    t && t.__v_isRef
      ? al(e, t.value)
      : cn(t)
      ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, o]) => ((n[`${s} =>`] = o), n), {}) }
      : en(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : me(t) && !X(t) && !ul(t)
      ? String(t)
      : t,
  _e = {},
  an = [],
  Ze = () => {},
  Ec = () => !1,
  Vc = /^on[^a-z]/,
  ts = e => Vc.test(e),
  ii = e => e.startsWith('onUpdate:'),
  we = Object.assign,
  ri = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Ac = Object.prototype.hasOwnProperty,
  ue = (e, t) => Ac.call(e, t),
  X = Array.isArray,
  cn = e => Cn(e) === '[object Map]',
  en = e => Cn(e) === '[object Set]',
  qi = e => Cn(e) === '[object Date]',
  Ic = e => Cn(e) === '[object RegExp]',
  oe = e => typeof e == 'function',
  ye = e => typeof e == 'string',
  Un = e => typeof e == 'symbol',
  me = e => e !== null && typeof e == 'object',
  li = e => me(e) && oe(e.then) && oe(e.catch),
  cl = Object.prototype.toString,
  Cn = e => cl.call(e),
  Lc = e => Cn(e).slice(8, -1),
  ul = e => Cn(e) === '[object Object]',
  ai = e => ye(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Bn = Ks(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Ws = e => {
    const t = Object.create(null)
    return n => t[n] || (t[n] = e(n))
  },
  Mc = /-(\w)/g,
  He = Ws(e => e.replace(Mc, (t, n) => (n ? n.toUpperCase() : ''))),
  Bc = /\B([A-Z])/g,
  Xe = Ws(e => e.replace(Bc, '-$1').toLowerCase()),
  ns = Ws(e => e.charAt(0).toUpperCase() + e.slice(1)),
  Nn = Ws(e => (e ? `on${ns(e)}` : '')),
  mn = (e, t) => !Object.is(e, t),
  un = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  As = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Is = e => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Ls = e => {
    const t = ye(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Wi
const Nc = () =>
  Wi ||
  (Wi =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
let Ke
class ci {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ke),
      !t && Ke && (this.index = (Ke.scopes || (Ke.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Ke
      try {
        return (Ke = this), t()
      } finally {
        Ke = n
      }
    }
  }
  on() {
    Ke = this
  }
  off() {
    Ke = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop()
        o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Oc(e) {
  return new ci(e)
}
function fl(e, t = Ke) {
  t && t.active && t.effects.push(e)
}
function ui() {
  return Ke
}
function dl(e) {
  Ke && Ke.cleanups.push(e)
}
const fi = e => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  hl = e => (e.w & Et) > 0,
  pl = e => (e.n & Et) > 0,
  Fc = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Et
  },
  Rc = e => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let s = 0; s < t.length; s++) {
        const o = t[s]
        hl(o) && !pl(o) ? o.delete(e) : (t[n++] = o), (o.w &= ~Et), (o.n &= ~Et)
      }
      t.length = n
    }
  },
  Ms = new WeakMap()
let Ln = 0,
  Et = 1
const Ao = 30
let Qe
const Kt = Symbol(''),
  Io = Symbol('')
class ss {
  constructor(t, n = null, s) {
    ;(this.fn = t), (this.scheduler = n), (this.active = !0), (this.deps = []), (this.parent = void 0), fl(this, s)
  }
  run() {
    if (!this.active) return this.fn()
    let t = Qe,
      n = $t
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (this.parent = Qe), (Qe = this), ($t = !0), (Et = 1 << ++Ln), Ln <= Ao ? Fc(this) : Yi(this), this.fn()
    } finally {
      Ln <= Ao && Rc(this),
        (Et = 1 << --Ln),
        (Qe = this.parent),
        ($t = n),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    Qe === this ? (this.deferStop = !0) : this.active && (Yi(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function Yi(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
function Hc(e, t) {
  e.effect && (e = e.effect.fn)
  const n = new ss(e)
  t && (we(n, t), t.scope && fl(n, t.scope)), (!t || !t.lazy) && n.run()
  const s = n.run.bind(n)
  return (s.effect = n), s
}
function Dc(e) {
  e.effect.stop()
}
let $t = !0
const _l = []
function $n() {
  _l.push($t), ($t = !1)
}
function Pn() {
  const e = _l.pop()
  $t = e === void 0 ? !0 : e
}
function ze(e, t, n) {
  if ($t && Qe) {
    let s = Ms.get(e)
    s || Ms.set(e, (s = new Map()))
    let o = s.get(n)
    o || s.set(n, (o = fi())), ml(o)
  }
}
function ml(e, t) {
  let n = !1
  Ln <= Ao ? pl(e) || ((e.n |= Et), (n = !hl(e))) : (n = !e.has(Qe)), n && (e.add(Qe), Qe.deps.push(e))
}
function ht(e, t, n, s, o, i) {
  const r = Ms.get(e)
  if (!r) return
  let l = []
  if (t === 'clear') l = [...r.values()]
  else if (n === 'length' && X(e)) {
    const a = Number(s)
    r.forEach((c, u) => {
      ;(u === 'length' || u >= a) && l.push(c)
    })
  } else
    switch ((n !== void 0 && l.push(r.get(n)), t)) {
      case 'add':
        X(e) ? ai(n) && l.push(r.get('length')) : (l.push(r.get(Kt)), cn(e) && l.push(r.get(Io)))
        break
      case 'delete':
        X(e) || (l.push(r.get(Kt)), cn(e) && l.push(r.get(Io)))
        break
      case 'set':
        cn(e) && l.push(r.get(Kt))
        break
    }
  if (l.length === 1) l[0] && Lo(l[0])
  else {
    const a = []
    for (const c of l) c && a.push(...c)
    Lo(fi(a))
  }
}
function Lo(e, t) {
  const n = X(e) ? e : [...e]
  for (const s of n) s.computed && Xi(s)
  for (const s of n) s.computed || Xi(s)
}
function Xi(e, t) {
  ;(e !== Qe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function zc(e, t) {
  var n
  return (n = Ms.get(e)) === null || n === void 0 ? void 0 : n.get(t)
}
const Uc = Ks('__proto__,__v_isRef,__isVue'),
  vl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(Un)
  ),
  jc = Ys(),
  Kc = Ys(!1, !0),
  qc = Ys(!0),
  Wc = Ys(!0, !0),
  Ji = Yc()
function Yc() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
      e[t] = function (...n) {
        const s = ce(this)
        for (let i = 0, r = this.length; i < r; i++) ze(s, 'get', i + '')
        const o = s[t](...n)
        return o === -1 || o === !1 ? s[t](...n.map(ce)) : o
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
      e[t] = function (...n) {
        $n()
        const s = ce(this)[t].apply(this, n)
        return Pn(), s
      }
    }),
    e
  )
}
function Xc(e) {
  const t = ce(this)
  return ze(t, 'has', e), t.hasOwnProperty(e)
}
function Ys(e = !1, t = !1) {
  return function (s, o, i) {
    if (o === '__v_isReactive') return !e
    if (o === '__v_isReadonly') return e
    if (o === '__v_isShallow') return t
    if (o === '__v_raw' && i === (e ? (t ? Cl : kl) : t ? wl : xl).get(s)) return s
    const r = X(s)
    if (!e) {
      if (r && ue(Ji, o)) return Reflect.get(Ji, o, i)
      if (o === 'hasOwnProperty') return Xc
    }
    const l = Reflect.get(s, o, i)
    return (Un(o) ? vl.has(o) : Uc(o)) || (e || ze(s, 'get', o), t)
      ? l
      : Pe(l)
      ? r && ai(o)
        ? l
        : l.value
      : me(l)
      ? e
        ? os(l)
        : Sn(l)
      : l
  }
}
const Jc = gl(),
  Qc = gl(!0)
function gl(e = !1) {
  return function (n, s, o, i) {
    let r = n[s]
    if (Jt(r) && Pe(r) && !Pe(o)) return !1
    if (!e && (!jn(o) && !Jt(o) && ((r = ce(r)), (o = ce(o))), !X(n) && Pe(r) && !Pe(o))) return (r.value = o), !0
    const l = X(n) && ai(s) ? Number(s) < n.length : ue(n, s),
      a = Reflect.set(n, s, o, i)
    return n === ce(i) && (l ? mn(o, r) && ht(n, 'set', s, o) : ht(n, 'add', s, o)), a
  }
}
function Gc(e, t) {
  const n = ue(e, t)
  e[t]
  const s = Reflect.deleteProperty(e, t)
  return s && n && ht(e, 'delete', t, void 0), s
}
function Zc(e, t) {
  const n = Reflect.has(e, t)
  return (!Un(t) || !vl.has(t)) && ze(e, 'has', t), n
}
function eu(e) {
  return ze(e, 'iterate', X(e) ? 'length' : Kt), Reflect.ownKeys(e)
}
const yl = { get: jc, set: Jc, deleteProperty: Gc, has: Zc, ownKeys: eu },
  bl = {
    get: qc,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    }
  },
  tu = we({}, yl, { get: Kc, set: Qc }),
  nu = we({}, bl, { get: Wc }),
  di = e => e,
  Xs = e => Reflect.getPrototypeOf(e)
function ps(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const o = ce(e),
    i = ce(t)
  n || (t !== i && ze(o, 'get', t), ze(o, 'get', i))
  const { has: r } = Xs(o),
    l = s ? di : n ? pi : Kn
  if (r.call(o, t)) return l(e.get(t))
  if (r.call(o, i)) return l(e.get(i))
  e !== o && e.get(t)
}
function _s(e, t = !1) {
  const n = this.__v_raw,
    s = ce(n),
    o = ce(e)
  return t || (e !== o && ze(s, 'has', e), ze(s, 'has', o)), e === o ? n.has(e) : n.has(e) || n.has(o)
}
function ms(e, t = !1) {
  return (e = e.__v_raw), !t && ze(ce(e), 'iterate', Kt), Reflect.get(e, 'size', e)
}
function Qi(e) {
  e = ce(e)
  const t = ce(this)
  return Xs(t).has.call(t, e) || (t.add(e), ht(t, 'add', e, e)), this
}
function Gi(e, t) {
  t = ce(t)
  const n = ce(this),
    { has: s, get: o } = Xs(n)
  let i = s.call(n, e)
  i || ((e = ce(e)), (i = s.call(n, e)))
  const r = o.call(n, e)
  return n.set(e, t), i ? mn(t, r) && ht(n, 'set', e, t) : ht(n, 'add', e, t), this
}
function Zi(e) {
  const t = ce(this),
    { has: n, get: s } = Xs(t)
  let o = n.call(t, e)
  o || ((e = ce(e)), (o = n.call(t, e))), s && s.call(t, e)
  const i = t.delete(e)
  return o && ht(t, 'delete', e, void 0), i
}
function er() {
  const e = ce(this),
    t = e.size !== 0,
    n = e.clear()
  return t && ht(e, 'clear', void 0, void 0), n
}
function vs(e, t) {
  return function (s, o) {
    const i = this,
      r = i.__v_raw,
      l = ce(r),
      a = t ? di : e ? pi : Kn
    return !e && ze(l, 'iterate', Kt), r.forEach((c, u) => s.call(o, a(c), a(u), i))
  }
}
function gs(e, t, n) {
  return function (...s) {
    const o = this.__v_raw,
      i = ce(o),
      r = cn(i),
      l = e === 'entries' || (e === Symbol.iterator && r),
      a = e === 'keys' && r,
      c = o[e](...s),
      u = n ? di : t ? pi : Kn
    return (
      !t && ze(i, 'iterate', a ? Io : Kt),
      {
        next() {
          const { value: f, done: h } = c.next()
          return h ? { value: f, done: h } : { value: l ? [u(f[0]), u(f[1])] : u(f), done: h }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function yt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function su() {
  const e = {
      get(i) {
        return ps(this, i)
      },
      get size() {
        return ms(this)
      },
      has: _s,
      add: Qi,
      set: Gi,
      delete: Zi,
      clear: er,
      forEach: vs(!1, !1)
    },
    t = {
      get(i) {
        return ps(this, i, !1, !0)
      },
      get size() {
        return ms(this)
      },
      has: _s,
      add: Qi,
      set: Gi,
      delete: Zi,
      clear: er,
      forEach: vs(!1, !0)
    },
    n = {
      get(i) {
        return ps(this, i, !0)
      },
      get size() {
        return ms(this, !0)
      },
      has(i) {
        return _s.call(this, i, !0)
      },
      add: yt('add'),
      set: yt('set'),
      delete: yt('delete'),
      clear: yt('clear'),
      forEach: vs(!0, !1)
    },
    s = {
      get(i) {
        return ps(this, i, !0, !0)
      },
      get size() {
        return ms(this, !0)
      },
      has(i) {
        return _s.call(this, i, !0)
      },
      add: yt('add'),
      set: yt('set'),
      delete: yt('delete'),
      clear: yt('clear'),
      forEach: vs(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(i => {
      ;(e[i] = gs(i, !1, !1)), (n[i] = gs(i, !0, !1)), (t[i] = gs(i, !1, !0)), (s[i] = gs(i, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [ou, iu, ru, lu] = su()
function Js(e, t) {
  const n = t ? (e ? lu : ru) : e ? iu : ou
  return (s, o, i) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
      ? e
      : o === '__v_raw'
      ? s
      : Reflect.get(ue(n, o) && o in s ? n : s, o, i)
}
const au = { get: Js(!1, !1) },
  cu = { get: Js(!1, !0) },
  uu = { get: Js(!0, !1) },
  fu = { get: Js(!0, !0) },
  xl = new WeakMap(),
  wl = new WeakMap(),
  kl = new WeakMap(),
  Cl = new WeakMap()
function du(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function hu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : du(Lc(e))
}
function Sn(e) {
  return Jt(e) ? e : Qs(e, !1, yl, au, xl)
}
function $l(e) {
  return Qs(e, !1, tu, cu, wl)
}
function os(e) {
  return Qs(e, !0, bl, uu, kl)
}
function pu(e) {
  return Qs(e, !0, nu, fu, Cl)
}
function Qs(e, t, n, s, o) {
  if (!me(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = o.get(e)
  if (i) return i
  const r = hu(e)
  if (r === 0) return e
  const l = new Proxy(e, r === 2 ? s : n)
  return o.set(e, l), l
}
function qt(e) {
  return Jt(e) ? qt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Jt(e) {
  return !!(e && e.__v_isReadonly)
}
function jn(e) {
  return !!(e && e.__v_isShallow)
}
function hi(e) {
  return qt(e) || Jt(e)
}
function ce(e) {
  const t = e && e.__v_raw
  return t ? ce(t) : e
}
function fn(e) {
  return As(e, '__v_skip', !0), e
}
const Kn = e => (me(e) ? Sn(e) : e),
  pi = e => (me(e) ? os(e) : e)
function _i(e) {
  $t && Qe && ((e = ce(e)), ml(e.dep || (e.dep = fi())))
}
function Gs(e, t) {
  e = ce(e)
  const n = e.dep
  n && Lo(n)
}
function Pe(e) {
  return !!(e && e.__v_isRef === !0)
}
function K(e) {
  return Sl(e, !1)
}
function Pl(e) {
  return Sl(e, !0)
}
function Sl(e, t) {
  return Pe(e) ? e : new _u(e, t)
}
class _u {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ce(t)),
      (this._value = n ? t : Kn(t))
  }
  get value() {
    return _i(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || jn(t) || Jt(t)
    ;(t = n ? t : ce(t)), mn(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : Kn(t)), Gs(this))
  }
}
function mu(e) {
  Gs(e)
}
function k(e) {
  return Pe(e) ? e.value : e
}
const vu = {
  get: (e, t, n) => k(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t]
    return Pe(o) && !Pe(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function mi(e) {
  return qt(e) ? e : new Proxy(e, vu)
}
class gu {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: n, set: s } = t(
      () => _i(this),
      () => Gs(this)
    )
    ;(this._get = n), (this._set = s)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function yu(e) {
  return new gu(e)
}
function is(e) {
  const t = X(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = Oe(e, n)
  return t
}
class bu {
  constructor(t, n, s) {
    ;(this._object = t), (this._key = n), (this._defaultValue = s), (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return zc(ce(this._object), this._key)
  }
}
function Oe(e, t, n) {
  const s = e[t]
  return Pe(s) ? s : new bu(e, t, n)
}
var Tl
class xu {
  constructor(t, n, s, o) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Tl] = !1),
      (this._dirty = !0),
      (this.effect = new ss(t, () => {
        this._dirty || ((this._dirty = !0), Gs(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = ce(this)
    return _i(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
  }
  set value(t) {
    this._setter(t)
  }
}
Tl = '__v_isReadonly'
function wu(e, t, n = !1) {
  let s, o
  const i = oe(e)
  return i ? ((s = e), (o = Ze)) : ((s = e.get), (o = e.set)), new xu(s, o, i || !o, n)
}
function ku(e, ...t) {}
function Cu(e, t) {}
function dt(e, t, n, s) {
  let o
  try {
    o = s ? e(...s) : e()
  } catch (i) {
    tn(i, t, n)
  }
  return o
}
function We(e, t, n, s) {
  if (oe(e)) {
    const i = dt(e, t, n, s)
    return (
      i &&
        li(i) &&
        i.catch(r => {
          tn(r, t, n)
        }),
      i
    )
  }
  const o = []
  for (let i = 0; i < e.length; i++) o.push(We(e[i], t, n, s))
  return o
}
function tn(e, t, n, s = !0) {
  const o = t ? t.vnode : null
  if (t) {
    let i = t.parent
    const r = t.proxy,
      l = n
    for (; i; ) {
      const c = i.ec
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, r, l) === !1) return
      }
      i = i.parent
    }
    const a = t.appContext.config.errorHandler
    if (a) {
      dt(a, null, 10, [e, r, l])
      return
    }
  }
  $u(e, n, o, s)
}
function $u(e, t, n, s = !0) {
  console.error(e)
}
let qn = !1,
  Mo = !1
const Ie = []
let it = 0
const dn = []
let ut = null,
  Dt = 0
const El = Promise.resolve()
let vi = null
function nn(e) {
  const t = vi || El
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Pu(e) {
  let t = it + 1,
    n = Ie.length
  for (; t < n; ) {
    const s = (t + n) >>> 1
    Wn(Ie[s]) < e ? (t = s + 1) : (n = s)
  }
  return t
}
function Zs(e) {
  ;(!Ie.length || !Ie.includes(e, qn && e.allowRecurse ? it + 1 : it)) &&
    (e.id == null ? Ie.push(e) : Ie.splice(Pu(e.id), 0, e), Vl())
}
function Vl() {
  !qn && !Mo && ((Mo = !0), (vi = El.then(Al)))
}
function Su(e) {
  const t = Ie.indexOf(e)
  t > it && Ie.splice(t, 1)
}
function gi(e) {
  X(e) ? dn.push(...e) : (!ut || !ut.includes(e, e.allowRecurse ? Dt + 1 : Dt)) && dn.push(e), Vl()
}
function tr(e, t = qn ? it + 1 : 0) {
  for (; t < Ie.length; t++) {
    const n = Ie[t]
    n && n.pre && (Ie.splice(t, 1), t--, n())
  }
}
function Bs(e) {
  if (dn.length) {
    const t = [...new Set(dn)]
    if (((dn.length = 0), ut)) {
      ut.push(...t)
      return
    }
    for (ut = t, ut.sort((n, s) => Wn(n) - Wn(s)), Dt = 0; Dt < ut.length; Dt++) ut[Dt]()
    ;(ut = null), (Dt = 0)
  }
}
const Wn = e => (e.id == null ? 1 / 0 : e.id),
  Tu = (e, t) => {
    const n = Wn(e) - Wn(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Al(e) {
  ;(Mo = !1), (qn = !0), Ie.sort(Tu)
  const t = Ze
  try {
    for (it = 0; it < Ie.length; it++) {
      const n = Ie[it]
      n && n.active !== !1 && dt(n, null, 14)
    }
  } finally {
    ;(it = 0), (Ie.length = 0), Bs(), (qn = !1), (vi = null), (Ie.length || dn.length) && Al()
  }
}
let ln,
  ys = []
function Il(e, t) {
  var n, s
  ;(ln = e),
    ln
      ? ((ln.enabled = !0), ys.forEach(({ event: o, args: i }) => ln.emit(o, ...i)), (ys = []))
      : typeof window < 'u' &&
        window.HTMLElement &&
        !(
          !((s = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || s === void 0) &&
          s.includes('jsdom')
        )
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(i => {
          Il(i, t)
        }),
        setTimeout(() => {
          ln || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (ys = []))
        }, 3e3))
      : (ys = [])
}
function Eu(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || _e
  let o = n
  const i = t.startsWith('update:'),
    r = i && t.slice(7)
  if (r && r in s) {
    const u = `${r === 'modelValue' ? 'model' : r}Modifiers`,
      { number: f, trim: h } = s[u] || _e
    h && (o = n.map(d => (ye(d) ? d.trim() : d))), f && (o = n.map(Is))
  }
  let l,
    a = s[(l = Nn(t))] || s[(l = Nn(He(t)))]
  !a && i && (a = s[(l = Nn(Xe(t)))]), a && We(a, e, 6, o)
  const c = s[l + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), We(c, e, 6, o)
  }
}
function Ll(e, t, n = !1) {
  const s = t.emitsCache,
    o = s.get(e)
  if (o !== void 0) return o
  const i = e.emits
  let r = {},
    l = !1
  if (!oe(e)) {
    const a = c => {
      const u = Ll(c, t, !0)
      u && ((l = !0), we(r, u))
    }
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
  }
  return !i && !l
    ? (me(e) && s.set(e, null), null)
    : (X(i) ? i.forEach(a => (r[a] = null)) : we(r, i), me(e) && s.set(e, r), r)
}
function eo(e, t) {
  return !e || !ts(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, Xe(t)) || ue(e, t))
}
let Te = null,
  to = null
function Yn(e) {
  const t = Te
  return (Te = e), (to = (e && e.type.__scopeId) || null), t
}
function et(e) {
  to = e
}
function tt() {
  to = null
}
const Vu = e => D
function D(e, t = Te, n) {
  if (!t || e._n) return e
  const s = (...o) => {
    s._d && Do(-1)
    const i = Yn(t)
    let r
    try {
      r = e(...o)
    } finally {
      Yn(i), s._d && Do(1)
    }
    return r
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Ts(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    props: i,
    propsOptions: [r],
    slots: l,
    attrs: a,
    emit: c,
    render: u,
    renderCache: f,
    data: h,
    setupState: d,
    ctx: m,
    inheritAttrs: x
  } = e
  let S, v
  const p = Yn(e)
  try {
    if (n.shapeFlag & 4) {
      const P = o || s
      ;(S = qe(u.call(P, P, f, i, d, h, m))), (v = a)
    } else {
      const P = t
      ;(S = qe(P.length > 1 ? P(i, { attrs: a, slots: l, emit: c }) : P(i, null))), (v = t.props ? a : Iu(a))
    }
  } catch (P) {
    ;(Rn.length = 0), tn(P, e, 1), (S = w(Ee))
  }
  let g = S
  if (v && x !== !1) {
    const P = Object.keys(v),
      { shapeFlag: V } = g
    P.length && V & 7 && (r && P.some(ii) && (v = Lu(v, r)), (g = lt(g, v)))
  }
  return (
    n.dirs && ((g = lt(g)), (g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (g.transition = n.transition),
    (S = g),
    Yn(p),
    S
  )
}
function Au(e) {
  let t
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    if (At(s)) {
      if (s.type !== Ee || s.children === 'v-if') {
        if (t) return
        t = s
      }
    } else return
  }
  return t
}
const Iu = e => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || ts(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Lu = (e, t) => {
    const n = {}
    for (const s in e) (!ii(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Mu(e, t, n) {
  const { props: s, children: o, component: i } = e,
    { props: r, children: l, patchFlag: a } = t,
    c = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return s ? nr(s, r, c) : !!r
    if (a & 8) {
      const u = t.dynamicProps
      for (let f = 0; f < u.length; f++) {
        const h = u[f]
        if (r[h] !== s[h] && !eo(c, h)) return !0
      }
    }
  } else return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? (r ? nr(s, r, c) : !0) : !!r
  return !1
}
function nr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let o = 0; o < s.length; o++) {
    const i = s[o]
    if (t[i] !== e[i] && !eo(n, i)) return !0
  }
  return !1
}
function yi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const Ml = e => e.__isSuspense,
  Bu = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, s, o, i, r, l, a, c) {
      e == null ? Ou(t, n, s, o, i, r, l, a, c) : Fu(e, t, n, s, o, r, l, a, c)
    },
    hydrate: Ru,
    create: bi,
    normalize: Hu
  },
  Nu = Bu
function Xn(e, t) {
  const n = e.props && e.props[t]
  oe(n) && n()
}
function Ou(e, t, n, s, o, i, r, l, a) {
  const {
      p: c,
      o: { createElement: u }
    } = a,
    f = u('div'),
    h = (e.suspense = bi(e, o, s, t, f, n, i, r, l, a))
  c(null, (h.pendingBranch = e.ssContent), f, null, s, h, i, r),
    h.deps > 0
      ? (Xn(e, 'onPending'), Xn(e, 'onFallback'), c(null, e.ssFallback, t, n, s, null, i, r), hn(h, e.ssFallback))
      : h.resolve()
}
function Fu(e, t, n, s, o, i, r, l, { p: a, um: c, o: { createElement: u } }) {
  const f = (t.suspense = e.suspense)
  ;(f.vnode = t), (t.el = e.el)
  const h = t.ssContent,
    d = t.ssFallback,
    { activeBranch: m, pendingBranch: x, isInFallback: S, isHydrating: v } = f
  if (x)
    (f.pendingBranch = h),
      Ge(h, x)
        ? (a(x, h, f.hiddenContainer, null, o, f, i, r, l),
          f.deps <= 0 ? f.resolve() : S && (a(m, d, n, s, o, null, i, r, l), hn(f, d)))
        : (f.pendingId++,
          v ? ((f.isHydrating = !1), (f.activeBranch = x)) : c(x, o, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = u('div')),
          S
            ? (a(null, h, f.hiddenContainer, null, o, f, i, r, l),
              f.deps <= 0 ? f.resolve() : (a(m, d, n, s, o, null, i, r, l), hn(f, d)))
            : m && Ge(h, m)
            ? (a(m, h, n, s, o, f, i, r, l), f.resolve(!0))
            : (a(null, h, f.hiddenContainer, null, o, f, i, r, l), f.deps <= 0 && f.resolve()))
  else if (m && Ge(h, m)) a(m, h, n, s, o, f, i, r, l), hn(f, h)
  else if (
    (Xn(t, 'onPending'),
    (f.pendingBranch = h),
    f.pendingId++,
    a(null, h, f.hiddenContainer, null, o, f, i, r, l),
    f.deps <= 0)
  )
    f.resolve()
  else {
    const { timeout: p, pendingId: g } = f
    p > 0
      ? setTimeout(() => {
          f.pendingId === g && f.fallback(d)
        }, p)
      : p === 0 && f.fallback(d)
  }
}
function bi(e, t, n, s, o, i, r, l, a, c, u = !1) {
  const {
      p: f,
      m: h,
      um: d,
      n: m,
      o: { parentNode: x, remove: S }
    } = c,
    v = e.props ? Ls(e.props.timeout) : void 0,
    p = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: r,
      container: s,
      hiddenContainer: o,
      anchor: i,
      deps: 0,
      pendingId: 0,
      timeout: typeof v == 'number' ? v : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(g = !1) {
        const {
          vnode: P,
          activeBranch: V,
          pendingBranch: N,
          pendingId: R,
          effects: C,
          parentComponent: j,
          container: W
        } = p
        if (p.isHydrating) p.isHydrating = !1
        else if (!g) {
          const re = V && N.transition && N.transition.mode === 'out-in'
          re &&
            (V.transition.afterLeave = () => {
              R === p.pendingId && h(N, W, Q, 0)
            })
          let { anchor: Q } = p
          V && ((Q = m(V)), d(V, j, p, !0)), re || h(N, W, Q, 0)
        }
        hn(p, N), (p.pendingBranch = null), (p.isInFallback = !1)
        let Z = p.parent,
          q = !1
        for (; Z; ) {
          if (Z.pendingBranch) {
            Z.effects.push(...C), (q = !0)
            break
          }
          Z = Z.parent
        }
        q || gi(C), (p.effects = []), Xn(P, 'onResolve')
      },
      fallback(g) {
        if (!p.pendingBranch) return
        const { vnode: P, activeBranch: V, parentComponent: N, container: R, isSVG: C } = p
        Xn(P, 'onFallback')
        const j = m(V),
          W = () => {
            p.isInFallback && (f(null, g, R, j, N, null, C, l, a), hn(p, g))
          },
          Z = g.transition && g.transition.mode === 'out-in'
        Z && (V.transition.afterLeave = W), (p.isInFallback = !0), d(V, N, null, !0), Z || W()
      },
      move(g, P, V) {
        p.activeBranch && h(p.activeBranch, g, P, V), (p.container = g)
      },
      next() {
        return p.activeBranch && m(p.activeBranch)
      },
      registerDep(g, P) {
        const V = !!p.pendingBranch
        V && p.deps++
        const N = g.vnode.el
        g.asyncDep
          .catch(R => {
            tn(R, g, 0)
          })
          .then(R => {
            if (g.isUnmounted || p.isUnmounted || p.pendingId !== g.suspenseId) return
            g.asyncResolved = !0
            const { vnode: C } = g
            zo(g, R, !1), N && (C.el = N)
            const j = !N && g.subTree.el
            P(g, C, x(N || g.subTree.el), N ? null : m(g.subTree), p, r, a),
              j && S(j),
              yi(g, C.el),
              V && --p.deps === 0 && p.resolve()
          })
      },
      unmount(g, P) {
        ;(p.isUnmounted = !0),
          p.activeBranch && d(p.activeBranch, n, g, P),
          p.pendingBranch && d(p.pendingBranch, n, g, P)
      }
    }
  return p
}
function Ru(e, t, n, s, o, i, r, l, a) {
  const c = (t.suspense = bi(t, s, n, e.parentNode, document.createElement('div'), null, o, i, r, l, !0)),
    u = a(e, (c.pendingBranch = t.ssContent), n, c, i, r)
  return c.deps === 0 && c.resolve(), u
}
function Hu(e) {
  const { shapeFlag: t, children: n } = e,
    s = t & 32
  ;(e.ssContent = sr(s ? n.default : n)), (e.ssFallback = s ? sr(n.fallback) : w(Ee))
}
function sr(e) {
  let t
  if (oe(e)) {
    const n = Zt && e._c
    n && ((e._d = !1), b()), (e = e()), n && ((e._d = !0), (t = Re), la())
  }
  return X(e) && (e = Au(e)), (e = qe(e)), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}
function Bl(e, t) {
  t && t.pendingBranch ? (X(e) ? t.effects.push(...e) : t.effects.push(e)) : gi(e)
}
function hn(e, t) {
  e.activeBranch = t
  const { vnode: n, parentComponent: s } = e,
    o = (n.el = t.el)
  s && s.subTree === n && ((s.vnode.el = o), yi(s, o))
}
function rt(e, t) {
  if (xe) {
    let n = xe.provides
    const s = xe.parent && xe.parent.provides
    s === n && (n = xe.provides = Object.create(s)), (n[e] = t)
  }
}
function Le(e, t, n = !1) {
  const s = xe || Te
  if (s) {
    const o = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides
    if (o && e in o) return o[e]
    if (arguments.length > 1) return n && oe(t) ? t.call(s.proxy) : t
  }
}
function Vt(e, t) {
  return rs(e, null, t)
}
function xi(e, t) {
  return rs(e, null, { flush: 'post' })
}
function Du(e, t) {
  return rs(e, null, { flush: 'sync' })
}
const bs = {}
function Ne(e, t, n) {
  return rs(e, t, n)
}
function rs(e, t, { immediate: n, deep: s, flush: o, onTrack: i, onTrigger: r } = _e) {
  const l = ui() === (xe == null ? void 0 : xe.scope) ? xe : null
  let a,
    c = !1,
    u = !1
  if (
    (Pe(e)
      ? ((a = () => e.value), (c = jn(e)))
      : qt(e)
      ? ((a = () => e), (s = !0))
      : X(e)
      ? ((u = !0),
        (c = e.some(g => qt(g) || jn(g))),
        (a = () =>
          e.map(g => {
            if (Pe(g)) return g.value
            if (qt(g)) return jt(g)
            if (oe(g)) return dt(g, l, 2)
          })))
      : oe(e)
      ? t
        ? (a = () => dt(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return f && f(), We(e, l, 3, [h])
          })
      : (a = Ze),
    t && s)
  ) {
    const g = a
    a = () => jt(g())
  }
  let f,
    h = g => {
      f = v.onStop = () => {
        dt(g, l, 4)
      }
    },
    d
  if (bn)
    if (((h = Ze), t ? n && We(t, l, 3, [a(), u ? [] : void 0, h]) : a(), o === 'sync')) {
      const g = ba()
      d = g.__watcherHandles || (g.__watcherHandles = [])
    } else return Ze
  let m = u ? new Array(e.length).fill(bs) : bs
  const x = () => {
    if (v.active)
      if (t) {
        const g = v.run()
        ;(s || c || (u ? g.some((P, V) => mn(P, m[V])) : mn(g, m))) &&
          (f && f(), We(t, l, 3, [g, m === bs ? void 0 : u && m[0] === bs ? [] : m, h]), (m = g))
      } else v.run()
  }
  x.allowRecurse = !!t
  let S
  o === 'sync'
    ? (S = x)
    : o === 'post'
    ? (S = () => Se(x, l && l.suspense))
    : ((x.pre = !0), l && (x.id = l.uid), (S = () => Zs(x)))
  const v = new ss(a, S)
  t ? (n ? x() : (m = v.run())) : o === 'post' ? Se(v.run.bind(v), l && l.suspense) : v.run()
  const p = () => {
    v.stop(), l && l.scope && ri(l.scope.effects, v)
  }
  return d && d.push(p), p
}
function zu(e, t, n) {
  const s = this.proxy,
    o = ye(e) ? (e.includes('.') ? Nl(s, e) : () => s[e]) : e.bind(s, s)
  let i
  oe(t) ? (i = t) : ((i = t.handler), (n = t))
  const r = xe
  It(this)
  const l = rs(o, i.bind(s), n)
  return r ? It(r) : Pt(), l
}
function Nl(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let o = 0; o < n.length && s; o++) s = s[n[o]]
    return s
  }
}
function jt(e, t) {
  if (!me(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), Pe(e))) jt(e.value, t)
  else if (X(e)) for (let n = 0; n < e.length; n++) jt(e[n], t)
  else if (en(e) || cn(e))
    e.forEach(n => {
      jt(n, t)
    })
  else if (ul(e)) for (const n in e) jt(e[n], t)
  return e
}
function wi() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    Ve(() => {
      e.isMounted = !0
    }),
    as(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Ye = [Function, Array],
  Uu = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Ye,
      onEnter: Ye,
      onAfterEnter: Ye,
      onEnterCancelled: Ye,
      onBeforeLeave: Ye,
      onLeave: Ye,
      onAfterLeave: Ye,
      onLeaveCancelled: Ye,
      onBeforeAppear: Ye,
      onAppear: Ye,
      onAfterAppear: Ye,
      onAppearCancelled: Ye
    },
    setup(e, { slots: t }) {
      const n = mt(),
        s = wi()
      let o
      return () => {
        const i = t.default && no(t.default(), !0)
        if (!i || !i.length) return
        let r = i[0]
        if (i.length > 1) {
          for (const x of i)
            if (x.type !== Ee) {
              r = x
              break
            }
        }
        const l = ce(e),
          { mode: a } = l
        if (s.isLeaving) return vo(r)
        const c = or(r)
        if (!c) return vo(r)
        const u = vn(c, l, s, n)
        Qt(c, u)
        const f = n.subTree,
          h = f && or(f)
        let d = !1
        const { getTransitionKey: m } = c.type
        if (m) {
          const x = m()
          o === void 0 ? (o = x) : x !== o && ((o = x), (d = !0))
        }
        if (h && h.type !== Ee && (!Ge(c, h) || d)) {
          const x = vn(h, l, s, n)
          if ((Qt(h, x), a === 'out-in'))
            return (
              (s.isLeaving = !0),
              (x.afterLeave = () => {
                ;(s.isLeaving = !1), n.update.active !== !1 && n.update()
              }),
              vo(r)
            )
          a === 'in-out' &&
            c.type !== Ee &&
            (x.delayLeave = (S, v, p) => {
              const g = Ol(s, h)
              ;(g[String(h.key)] = h),
                (S._leaveCb = () => {
                  v(), (S._leaveCb = void 0), delete u.delayedLeave
                }),
                (u.delayedLeave = p)
            })
        }
        return r
      }
    }
  },
  ki = Uu
function Ol(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function vn(e, t, n, s) {
  const {
      appear: o,
      mode: i,
      persisted: r = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: h,
      onAfterLeave: d,
      onLeaveCancelled: m,
      onBeforeAppear: x,
      onAppear: S,
      onAfterAppear: v,
      onAppearCancelled: p
    } = t,
    g = String(e.key),
    P = Ol(n, e),
    V = (C, j) => {
      C && We(C, s, 9, j)
    },
    N = (C, j) => {
      const W = j[1]
      V(C, j), X(C) ? C.every(Z => Z.length <= 1) && W() : C.length <= 1 && W()
    },
    R = {
      mode: i,
      persisted: r,
      beforeEnter(C) {
        let j = l
        if (!n.isMounted)
          if (o) j = x || l
          else return
        C._leaveCb && C._leaveCb(!0)
        const W = P[g]
        W && Ge(e, W) && W.el._leaveCb && W.el._leaveCb(), V(j, [C])
      },
      enter(C) {
        let j = a,
          W = c,
          Z = u
        if (!n.isMounted)
          if (o) (j = S || a), (W = v || c), (Z = p || u)
          else return
        let q = !1
        const re = (C._enterCb = Q => {
          q || ((q = !0), Q ? V(Z, [C]) : V(W, [C]), R.delayedLeave && R.delayedLeave(), (C._enterCb = void 0))
        })
        j ? N(j, [C, re]) : re()
      },
      leave(C, j) {
        const W = String(e.key)
        if ((C._enterCb && C._enterCb(!0), n.isUnmounting)) return j()
        V(f, [C])
        let Z = !1
        const q = (C._leaveCb = re => {
          Z || ((Z = !0), j(), re ? V(m, [C]) : V(d, [C]), (C._leaveCb = void 0), P[W] === e && delete P[W])
        })
        ;(P[W] = e), h ? N(h, [C, q]) : q()
      },
      clone(C) {
        return vn(C, t, n, s)
      }
    }
  return R
}
function vo(e) {
  if (ls(e)) return (e = lt(e)), (e.children = null), e
}
function or(e) {
  return ls(e) ? (e.children ? e.children[0] : void 0) : e
}
function Qt(e, t) {
  e.shapeFlag & 6 && e.component
    ? Qt(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function no(e, t = !1, n) {
  let s = [],
    o = 0
  for (let i = 0; i < e.length; i++) {
    let r = e[i]
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i)
    r.type === se
      ? (r.patchFlag & 128 && o++, (s = s.concat(no(r.children, t, l))))
      : (t || r.type !== Ee) && s.push(l != null ? lt(r, { key: l }) : r)
  }
  if (o > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
function z(e) {
  return oe(e) ? { setup: e, name: e.name } : e
}
const Wt = e => !!e.type.__asyncLoader
function ju(e) {
  oe(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    timeout: i,
    suspensible: r = !0,
    onError: l
  } = e
  let a = null,
    c,
    u = 0
  const f = () => (u++, (a = null), h()),
    h = () => {
      let d
      return (
        a ||
        (d = a =
          t()
            .catch(m => {
              if (((m = m instanceof Error ? m : new Error(String(m))), l))
                return new Promise((x, S) => {
                  l(
                    m,
                    () => x(f()),
                    () => S(m),
                    u + 1
                  )
                })
              throw m
            })
            .then(m =>
              d !== a && a
                ? a
                : (m && (m.__esModule || m[Symbol.toStringTag] === 'Module') && (m = m.default), (c = m), m)
            ))
      )
    }
  return z({
    name: 'AsyncComponentWrapper',
    __asyncLoader: h,
    get __asyncResolved() {
      return c
    },
    setup() {
      const d = xe
      if (c) return () => go(c, d)
      const m = p => {
        ;(a = null), tn(p, d, 13, !s)
      }
      if ((r && d.suspense) || bn)
        return h()
          .then(p => () => go(p, d))
          .catch(p => (m(p), () => (s ? w(s, { error: p }) : null)))
      const x = K(!1),
        S = K(),
        v = K(!!o)
      return (
        o &&
          setTimeout(() => {
            v.value = !1
          }, o),
        i != null &&
          setTimeout(() => {
            if (!x.value && !S.value) {
              const p = new Error(`Async component timed out after ${i}ms.`)
              m(p), (S.value = p)
            }
          }, i),
        h()
          .then(() => {
            ;(x.value = !0), d.parent && ls(d.parent.vnode) && Zs(d.parent.update)
          })
          .catch(p => {
            m(p), (S.value = p)
          }),
        () => {
          if (x.value && c) return go(c, d)
          if (S.value && s) return w(s, { error: S.value })
          if (n && !v.value) return w(n)
        }
      )
    }
  })
}
function go(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode,
    r = w(e, s, o)
  return (r.ref = n), (r.ce = i), delete t.vnode.ce, r
}
const ls = e => e.type.__isKeepAlive,
  Ku = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] },
    setup(e, { slots: t }) {
      const n = mt(),
        s = n.ctx
      if (!s.renderer)
        return () => {
          const p = t.default && t.default()
          return p && p.length === 1 ? p[0] : p
        }
      const o = new Map(),
        i = new Set()
      let r = null
      const l = n.suspense,
        {
          renderer: {
            p: a,
            m: c,
            um: u,
            o: { createElement: f }
          }
        } = s,
        h = f('div')
      ;(s.activate = (p, g, P, V, N) => {
        const R = p.component
        c(p, g, P, 0, l),
          a(R.vnode, p, g, P, R, l, V, p.slotScopeIds, N),
          Se(() => {
            ;(R.isDeactivated = !1), R.a && un(R.a)
            const C = p.props && p.props.onVnodeMounted
            C && Fe(C, R.parent, p)
          }, l)
      }),
        (s.deactivate = p => {
          const g = p.component
          c(p, h, null, 1, l),
            Se(() => {
              g.da && un(g.da)
              const P = p.props && p.props.onVnodeUnmounted
              P && Fe(P, g.parent, p), (g.isDeactivated = !0)
            }, l)
        })
      function d(p) {
        yo(p), u(p, n, l, !0)
      }
      function m(p) {
        o.forEach((g, P) => {
          const V = jo(g.type)
          V && (!p || !p(V)) && x(P)
        })
      }
      function x(p) {
        const g = o.get(p)
        !r || !Ge(g, r) ? d(g) : r && yo(r), o.delete(p), i.delete(p)
      }
      Ne(
        () => [e.include, e.exclude],
        ([p, g]) => {
          p && m(P => Mn(p, P)), g && m(P => !Mn(g, P))
        },
        { flush: 'post', deep: !0 }
      )
      let S = null
      const v = () => {
        S != null && o.set(S, bo(n.subTree))
      }
      return (
        Ve(v),
        Tn(v),
        as(() => {
          o.forEach(p => {
            const { subTree: g, suspense: P } = n,
              V = bo(g)
            if (p.type === V.type && p.key === V.key) {
              yo(V)
              const N = V.component.da
              N && Se(N, P)
              return
            }
            d(p)
          })
        }),
        () => {
          if (((S = null), !t.default)) return null
          const p = t.default(),
            g = p[0]
          if (p.length > 1) return (r = null), p
          if (!At(g) || (!(g.shapeFlag & 4) && !(g.shapeFlag & 128))) return (r = null), g
          let P = bo(g)
          const V = P.type,
            N = jo(Wt(P) ? P.type.__asyncResolved || {} : V),
            { include: R, exclude: C, max: j } = e
          if ((R && (!N || !Mn(R, N))) || (C && N && Mn(C, N))) return (r = P), g
          const W = P.key == null ? V : P.key,
            Z = o.get(W)
          return (
            P.el && ((P = lt(P)), g.shapeFlag & 128 && (g.ssContent = P)),
            (S = W),
            Z
              ? ((P.el = Z.el),
                (P.component = Z.component),
                P.transition && Qt(P, P.transition),
                (P.shapeFlag |= 512),
                i.delete(W),
                i.add(W))
              : (i.add(W), j && i.size > parseInt(j, 10) && x(i.values().next().value)),
            (P.shapeFlag |= 256),
            (r = P),
            Ml(g.type) ? g : P
          )
        }
      )
    }
  },
  qu = Ku
function Mn(e, t) {
  return X(e) ? e.some(n => Mn(n, t)) : ye(e) ? e.split(',').includes(t) : Ic(e) ? e.test(t) : !1
}
function Fl(e, t) {
  Hl(e, 'a', t)
}
function Rl(e, t) {
  Hl(e, 'da', t)
}
function Hl(e, t, n = xe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n
      for (; o; ) {
        if (o.isDeactivated) return
        o = o.parent
      }
      return e()
    })
  if ((so(t, s, n), n)) {
    let o = n.parent
    for (; o && o.parent; ) ls(o.parent.vnode) && Wu(s, t, n, o), (o = o.parent)
  }
}
function Wu(e, t, n, s) {
  const o = so(t, e, s, !0)
  Mt(() => {
    ri(s[t], o)
  }, n)
}
function yo(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function bo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function so(e, t, n = xe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return
          $n(), It(n)
          const l = We(t, n, e, r)
          return Pt(), Pn(), l
        })
    return s ? o.unshift(i) : o.push(i), i
  }
}
const pt =
    e =>
    (t, n = xe) =>
      (!bn || e === 'sp') && so(e, (...s) => t(...s), n),
  Dl = pt('bm'),
  Ve = pt('m'),
  zl = pt('bu'),
  Tn = pt('u'),
  as = pt('bum'),
  Mt = pt('um'),
  Ul = pt('sp'),
  jl = pt('rtg'),
  Kl = pt('rtc')
function ql(e, t = xe) {
  so('ec', e, t)
}
function gn(e, t) {
  const n = Te
  if (n === null) return e
  const s = io(n) || n.proxy,
    o = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [r, l, a, c = _e] = t[i]
    r &&
      (oe(r) && (r = { mounted: r, updated: r }),
      r.deep && jt(l),
      o.push({ dir: r, instance: s, value: l, oldValue: void 0, arg: a, modifiers: c }))
  }
  return e
}
function ot(e, t, n, s) {
  const o = e.dirs,
    i = t && t.dirs
  for (let r = 0; r < o.length; r++) {
    const l = o[r]
    i && (l.oldValue = i[r].value)
    let a = l.dir[s]
    a && ($n(), We(a, n, 8, [e.el, l, e, t]), Pn())
  }
}
const Ci = 'components',
  Yu = 'directives'
function _t(e, t) {
  return $i(Ci, e, !0, t) || e
}
const Wl = Symbol()
function yn(e) {
  return ye(e) ? $i(Ci, e, !1) || e : e || Wl
}
function Xu(e) {
  return $i(Yu, e)
}
function $i(e, t, n = !0, s = !1) {
  const o = Te || xe
  if (o) {
    const i = o.type
    if (e === Ci) {
      const l = jo(i, !1)
      if (l && (l === t || l === He(t) || l === ns(He(t)))) return i
    }
    const r = ir(o[e] || i[e], t) || ir(o.appContext[e], t)
    return !r && s ? i : r
  }
}
function ir(e, t) {
  return e && (e[t] || e[He(t)] || e[ns(He(t))])
}
function $e(e, t, n, s) {
  let o
  const i = n && n[s]
  if (X(e) || ye(e)) {
    o = new Array(e.length)
    for (let r = 0, l = e.length; r < l; r++) o[r] = t(e[r], r, void 0, i && i[r])
  } else if (typeof e == 'number') {
    o = new Array(e)
    for (let r = 0; r < e; r++) o[r] = t(r + 1, r, void 0, i && i[r])
  } else if (me(e))
    if (e[Symbol.iterator]) o = Array.from(e, (r, l) => t(r, l, void 0, i && i[l]))
    else {
      const r = Object.keys(e)
      o = new Array(r.length)
      for (let l = 0, a = r.length; l < a; l++) {
        const c = r[l]
        o[l] = t(e[c], c, l, i && i[l])
      }
    }
  else o = []
  return n && (n[s] = o), o
}
function Ju(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n]
    if (X(s)) for (let o = 0; o < s.length; o++) e[s[o].name] = s[o].fn
    else
      s &&
        (e[s.name] = s.key
          ? (...o) => {
              const i = s.fn(...o)
              return i && (i.key = s.key), i
            }
          : s.fn)
  }
  return e
}
function M(e, t, n = {}, s, o) {
  if (Te.isCE || (Te.parent && Wt(Te.parent) && Te.parent.isCE))
    return t !== 'default' && (n.name = t), w('slot', n, s && s())
  let i = e[t]
  i && i._c && (i._d = !1), b()
  const r = i && Yl(i(n)),
    l = ne(se, { key: n.key || (r && r.key) || `_${t}` }, r || (s ? s() : []), r && e._ === 1 ? 64 : -2)
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), i && i._c && (i._d = !0), l
}
function Yl(e) {
  return e.some(t => (At(t) ? !(t.type === Ee || (t.type === se && !Yl(t.children))) : !0)) ? e : null
}
function Qu(e, t) {
  const n = {}
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : Nn(s)] = e[s]
  return n
}
const Bo = e => (e ? (ha(e) ? io(e) || e.proxy : Bo(e.parent)) : null),
  On = we(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Bo(e.parent),
    $root: e => Bo(e.root),
    $emit: e => e.emit,
    $options: e => Pi(e),
    $forceUpdate: e => e.f || (e.f = () => Zs(e.update)),
    $nextTick: e => e.n || (e.n = nn.bind(e.proxy)),
    $watch: e => zu.bind(e)
  }),
  xo = (e, t) => e !== _e && !e.__isScriptSetup && ue(e, t),
  No = {
    get({ _: e }, t) {
      const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e
      let c
      if (t[0] !== '$') {
        const d = r[t]
        if (d !== void 0)
          switch (d) {
            case 1:
              return s[t]
            case 2:
              return o[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (xo(s, t)) return (r[t] = 1), s[t]
          if (o !== _e && ue(o, t)) return (r[t] = 2), o[t]
          if ((c = e.propsOptions[0]) && ue(c, t)) return (r[t] = 3), i[t]
          if (n !== _e && ue(n, t)) return (r[t] = 4), n[t]
          Oo && (r[t] = 0)
        }
      }
      const u = On[t]
      let f, h
      if (u) return t === '$attrs' && ze(e, 'get', t), u(e)
      if ((f = l.__cssModules) && (f = f[t])) return f
      if (n !== _e && ue(n, t)) return (r[t] = 4), n[t]
      if (((h = a.config.globalProperties), ue(h, t))) return h[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: o, ctx: i } = e
      return xo(o, t)
        ? ((o[t] = n), !0)
        : s !== _e && ue(s, t)
        ? ((s[t] = n), !0)
        : ue(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0)
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i } }, r) {
      let l
      return (
        !!n[r] ||
        (e !== _e && ue(e, r)) ||
        xo(t, r) ||
        ((l = i[0]) && ue(l, r)) ||
        ue(s, r) ||
        ue(On, r) ||
        ue(o.config.globalProperties, r)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : ue(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  },
  Gu = we({}, No, {
    get(e, t) {
      if (t !== Symbol.unscopables) return No.get(e, t, e)
    },
    has(e, t) {
      return t[0] !== '_' && !bc(t)
    }
  })
let Oo = !0
function Zu(e) {
  const t = Pi(e),
    n = e.proxy,
    s = e.ctx
  ;(Oo = !1), t.beforeCreate && rr(t.beforeCreate, e, 'bc')
  const {
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: m,
    activated: x,
    deactivated: S,
    beforeDestroy: v,
    beforeUnmount: p,
    destroyed: g,
    unmounted: P,
    render: V,
    renderTracked: N,
    renderTriggered: R,
    errorCaptured: C,
    serverPrefetch: j,
    expose: W,
    inheritAttrs: Z,
    components: q,
    directives: re,
    filters: Q
  } = t
  if ((c && ef(c, s, null, e.appContext.config.unwrapInjectedRef), r))
    for (const be in r) {
      const ve = r[be]
      oe(ve) && (s[be] = ve.bind(n))
    }
  if (o) {
    const be = o.call(n, n)
    me(be) && (e.data = Sn(be))
  }
  if (((Oo = !0), i))
    for (const be in i) {
      const ve = i[be],
        Nt = oe(ve) ? ve.bind(n, n) : oe(ve.get) ? ve.get.bind(n, n) : Ze,
        ds = !oe(ve) && oe(ve.set) ? ve.set.bind(n) : Ze,
        Ot = F({ get: Nt, set: ds })
      Object.defineProperty(s, be, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: nt => (Ot.value = nt)
      })
    }
  if (l) for (const be in l) Xl(l[be], s, n, be)
  if (a) {
    const be = oe(a) ? a.call(n) : a
    Reflect.ownKeys(be).forEach(ve => {
      rt(ve, be[ve])
    })
  }
  u && rr(u, e, 'c')
  function he(be, ve) {
    X(ve) ? ve.forEach(Nt => be(Nt.bind(n))) : ve && be(ve.bind(n))
  }
  if (
    (he(Dl, f),
    he(Ve, h),
    he(zl, d),
    he(Tn, m),
    he(Fl, x),
    he(Rl, S),
    he(ql, C),
    he(Kl, N),
    he(jl, R),
    he(as, p),
    he(Mt, P),
    he(Ul, j),
    X(W))
  )
    if (W.length) {
      const be = e.exposed || (e.exposed = {})
      W.forEach(ve => {
        Object.defineProperty(be, ve, { get: () => n[ve], set: Nt => (n[ve] = Nt) })
      })
    } else e.exposed || (e.exposed = {})
  V && e.render === Ze && (e.render = V),
    Z != null && (e.inheritAttrs = Z),
    q && (e.components = q),
    re && (e.directives = re)
}
function ef(e, t, n = Ze, s = !1) {
  X(e) && (e = Fo(e))
  for (const o in e) {
    const i = e[o]
    let r
    me(i) ? ('default' in i ? (r = Le(i.from || o, i.default, !0)) : (r = Le(i.from || o))) : (r = Le(i)),
      Pe(r) && s
        ? Object.defineProperty(t, o, { enumerable: !0, configurable: !0, get: () => r.value, set: l => (r.value = l) })
        : (t[o] = r)
  }
}
function rr(e, t, n) {
  We(X(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Xl(e, t, n, s) {
  const o = s.includes('.') ? Nl(n, s) : () => n[s]
  if (ye(e)) {
    const i = t[e]
    oe(i) && Ne(o, i)
  } else if (oe(e)) Ne(o, e.bind(n))
  else if (me(e))
    if (X(e)) e.forEach(i => Xl(i, t, n, s))
    else {
      const i = oe(e.handler) ? e.handler.bind(n) : t[e.handler]
      oe(i) && Ne(o, i, e)
    }
}
function Pi(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: r }
    } = e.appContext,
    l = i.get(t)
  let a
  return (
    l
      ? (a = l)
      : !o.length && !n && !s
      ? (a = t)
      : ((a = {}), o.length && o.forEach(c => Ns(a, c, r, !0)), Ns(a, t, r)),
    me(t) && i.set(t, a),
    a
  )
}
function Ns(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t
  i && Ns(e, i, n, !0), o && o.forEach(r => Ns(e, r, n, !0))
  for (const r in t)
    if (!(s && r === 'expose')) {
      const l = tf[r] || (n && n[r])
      e[r] = l ? l(e[r], t[r]) : t[r]
    }
  return e
}
const tf = {
  data: lr,
  props: Ht,
  emits: Ht,
  methods: Ht,
  computed: Ht,
  beforeCreate: Me,
  created: Me,
  beforeMount: Me,
  mounted: Me,
  beforeUpdate: Me,
  updated: Me,
  beforeDestroy: Me,
  beforeUnmount: Me,
  destroyed: Me,
  unmounted: Me,
  activated: Me,
  deactivated: Me,
  errorCaptured: Me,
  serverPrefetch: Me,
  components: Ht,
  directives: Ht,
  watch: sf,
  provide: lr,
  inject: nf
}
function lr(e, t) {
  return t
    ? e
      ? function () {
          return we(oe(e) ? e.call(this, this) : e, oe(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function nf(e, t) {
  return Ht(Fo(e), Fo(t))
}
function Fo(e) {
  if (X(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Ht(e, t) {
  return e ? we(we(Object.create(null), e), t) : t
}
function sf(e, t) {
  if (!e) return t
  if (!t) return e
  const n = we(Object.create(null), e)
  for (const s in t) n[s] = Me(e[s], t[s])
  return n
}
function of(e, t, n, s = !1) {
  const o = {},
    i = {}
  As(i, oo, 1), (e.propsDefaults = Object.create(null)), Jl(e, t, o, i)
  for (const r in e.propsOptions[0]) r in o || (o[r] = void 0)
  n ? (e.props = s ? o : $l(o)) : e.type.props ? (e.props = o) : (e.props = i), (e.attrs = i)
}
function rf(e, t, n, s) {
  const {
      props: o,
      attrs: i,
      vnode: { patchFlag: r }
    } = e,
    l = ce(o),
    [a] = e.propsOptions
  let c = !1
  if ((s || r > 0) && !(r & 16)) {
    if (r & 8) {
      const u = e.vnode.dynamicProps
      for (let f = 0; f < u.length; f++) {
        let h = u[f]
        if (eo(e.emitsOptions, h)) continue
        const d = t[h]
        if (a)
          if (ue(i, h)) d !== i[h] && ((i[h] = d), (c = !0))
          else {
            const m = He(h)
            o[m] = Ro(a, l, m, d, e, !1)
          }
        else d !== i[h] && ((i[h] = d), (c = !0))
      }
    }
  } else {
    Jl(e, t, o, i) && (c = !0)
    let u
    for (const f in l)
      (!t || (!ue(t, f) && ((u = Xe(f)) === f || !ue(t, u)))) &&
        (a ? n && (n[f] !== void 0 || n[u] !== void 0) && (o[f] = Ro(a, l, f, void 0, e, !0)) : delete o[f])
    if (i !== l) for (const f in i) (!t || !ue(t, f)) && (delete i[f], (c = !0))
  }
  c && ht(e, 'set', '$attrs')
}
function Jl(e, t, n, s) {
  const [o, i] = e.propsOptions
  let r = !1,
    l
  if (t)
    for (let a in t) {
      if (Bn(a)) continue
      const c = t[a]
      let u
      o && ue(o, (u = He(a)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : eo(e.emitsOptions, a) || ((!(a in s) || c !== s[a]) && ((s[a] = c), (r = !0)))
    }
  if (i) {
    const a = ce(n),
      c = l || _e
    for (let u = 0; u < i.length; u++) {
      const f = i[u]
      n[f] = Ro(o, a, f, c[f], e, !ue(c, f))
    }
  }
  return r
}
function Ro(e, t, n, s, o, i) {
  const r = e[n]
  if (r != null) {
    const l = ue(r, 'default')
    if (l && s === void 0) {
      const a = r.default
      if (r.type !== Function && oe(a)) {
        const { propsDefaults: c } = o
        n in c ? (s = c[n]) : (It(o), (s = c[n] = a.call(null, t)), Pt())
      } else s = a
    }
    r[0] && (i && !l ? (s = !1) : r[1] && (s === '' || s === Xe(n)) && (s = !0))
  }
  return s
}
function Ql(e, t, n = !1) {
  const s = t.propsCache,
    o = s.get(e)
  if (o) return o
  const i = e.props,
    r = {},
    l = []
  let a = !1
  if (!oe(e)) {
    const u = f => {
      a = !0
      const [h, d] = Ql(f, t, !0)
      we(r, h), d && l.push(...d)
    }
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
  }
  if (!i && !a) return me(e) && s.set(e, an), an
  if (X(i))
    for (let u = 0; u < i.length; u++) {
      const f = He(i[u])
      ar(f) && (r[f] = _e)
    }
  else if (i)
    for (const u in i) {
      const f = He(u)
      if (ar(f)) {
        const h = i[u],
          d = (r[f] = X(h) || oe(h) ? { type: h } : Object.assign({}, h))
        if (d) {
          const m = fr(Boolean, d.type),
            x = fr(String, d.type)
          ;(d[0] = m > -1), (d[1] = x < 0 || m < x), (m > -1 || ue(d, 'default')) && l.push(f)
        }
      }
    }
  const c = [r, l]
  return me(e) && s.set(e, c), c
}
function ar(e) {
  return e[0] !== '$'
}
function cr(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function ur(e, t) {
  return cr(e) === cr(t)
}
function fr(e, t) {
  return X(t) ? t.findIndex(n => ur(n, e)) : oe(t) && ur(t, e) ? 0 : -1
}
const Gl = e => e[0] === '_' || e === '$stable',
  Si = e => (X(e) ? e.map(qe) : [qe(e)]),
  lf = (e, t, n) => {
    if (t._n) return t
    const s = D((...o) => Si(t(...o)), n)
    return (s._c = !1), s
  },
  Zl = (e, t, n) => {
    const s = e._ctx
    for (const o in e) {
      if (Gl(o)) continue
      const i = e[o]
      if (oe(i)) t[o] = lf(o, i, s)
      else if (i != null) {
        const r = Si(i)
        t[o] = () => r
      }
    }
  },
  ea = (e, t) => {
    const n = Si(t)
    e.slots.default = () => n
  },
  af = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = ce(t)), As(t, '_', n)) : Zl(t, (e.slots = {}))
    } else (e.slots = {}), t && ea(e, t)
    As(e.slots, oo, 1)
  },
  cf = (e, t, n) => {
    const { vnode: s, slots: o } = e
    let i = !0,
      r = _e
    if (s.shapeFlag & 32) {
      const l = t._
      l ? (n && l === 1 ? (i = !1) : (we(o, t), !n && l === 1 && delete o._)) : ((i = !t.$stable), Zl(t, o)), (r = t)
    } else t && (ea(e, t), (r = { default: 1 }))
    if (i) for (const l in o) !Gl(l) && !(l in r) && delete o[l]
  }
function ta() {
  return {
    app: null,
    config: {
      isNativeTag: Ec,
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
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let uf = 0
function ff(e, t) {
  return function (s, o = null) {
    oe(s) || (s = Object.assign({}, s)), o != null && !me(o) && (o = null)
    const i = ta(),
      r = new Set()
    let l = !1
    const a = (i.app = {
      _uid: uf++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: wa,
      get config() {
        return i.config
      },
      set config(c) {},
      use(c, ...u) {
        return r.has(c) || (c && oe(c.install) ? (r.add(c), c.install(a, ...u)) : oe(c) && (r.add(c), c(a, ...u))), a
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), a
      },
      component(c, u) {
        return u ? ((i.components[c] = u), a) : i.components[c]
      },
      directive(c, u) {
        return u ? ((i.directives[c] = u), a) : i.directives[c]
      },
      mount(c, u, f) {
        if (!l) {
          const h = w(s, o)
          return (
            (h.appContext = i),
            u && t ? t(h, c) : e(h, c, f),
            (l = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            io(h.component) || h.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__)
      },
      provide(c, u) {
        return (i.provides[c] = u), a
      }
    })
    return a
  }
}
function Os(e, t, n, s, o = !1) {
  if (X(e)) {
    e.forEach((h, d) => Os(h, t && (X(t) ? t[d] : t), n, s, o))
    return
  }
  if (Wt(s) && !o) return
  const i = s.shapeFlag & 4 ? io(s.component) || s.component.proxy : s.el,
    r = o ? null : i,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === _e ? (l.refs = {}) : l.refs,
    f = l.setupState
  if ((c != null && c !== a && (ye(c) ? ((u[c] = null), ue(f, c) && (f[c] = null)) : Pe(c) && (c.value = null)), oe(a)))
    dt(a, l, 12, [r, u])
  else {
    const h = ye(a),
      d = Pe(a)
    if (h || d) {
      const m = () => {
        if (e.f) {
          const x = h ? (ue(f, a) ? f[a] : u[a]) : a.value
          o
            ? X(x) && ri(x, i)
            : X(x)
            ? x.includes(i) || x.push(i)
            : h
            ? ((u[a] = [i]), ue(f, a) && (f[a] = u[a]))
            : ((a.value = [i]), e.k && (u[e.k] = a.value))
        } else h ? ((u[a] = r), ue(f, a) && (f[a] = r)) : d && ((a.value = r), e.k && (u[e.k] = r))
      }
      r ? ((m.id = -1), Se(m, n)) : m()
    }
  }
}
let bt = !1
const xs = e => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  ws = e => e.nodeType === 8
function df(e) {
  const {
      mt: t,
      p: n,
      o: { patchProp: s, createText: o, nextSibling: i, parentNode: r, remove: l, insert: a, createComment: c }
    } = e,
    u = (v, p) => {
      if (!p.hasChildNodes()) {
        n(null, v, p), Bs(), (p._vnode = v)
        return
      }
      ;(bt = !1),
        f(p.firstChild, v, null, null, null),
        Bs(),
        (p._vnode = v),
        bt && console.error('Hydration completed but contains mismatches.')
    },
    f = (v, p, g, P, V, N = !1) => {
      const R = ws(v) && v.data === '[',
        C = () => x(v, p, g, P, V, R),
        { type: j, ref: W, shapeFlag: Z, patchFlag: q } = p
      let re = v.nodeType
      ;(p.el = v), q === -2 && ((N = !1), (p.dynamicChildren = null))
      let Q = null
      switch (j) {
        case Gt:
          re !== 3
            ? p.children === ''
              ? (a((p.el = o('')), r(v), v), (Q = v))
              : (Q = C())
            : (v.data !== p.children && ((bt = !0), (v.data = p.children)), (Q = i(v)))
          break
        case Ee:
          re !== 8 || R ? (Q = C()) : (Q = i(v))
          break
        case Yt:
          if ((R && ((v = i(v)), (re = v.nodeType)), re === 1 || re === 3)) {
            Q = v
            const Ue = !p.children.length
            for (let he = 0; he < p.staticCount; he++)
              Ue && (p.children += Q.nodeType === 1 ? Q.outerHTML : Q.data),
                he === p.staticCount - 1 && (p.anchor = Q),
                (Q = i(Q))
            return R ? i(Q) : Q
          } else C()
          break
        case se:
          R ? (Q = m(v, p, g, P, V, N)) : (Q = C())
          break
        default:
          if (Z & 1)
            re !== 1 || p.type.toLowerCase() !== v.tagName.toLowerCase() ? (Q = C()) : (Q = h(v, p, g, P, V, N))
          else if (Z & 6) {
            p.slotScopeIds = V
            const Ue = r(v)
            if (
              (t(p, Ue, null, g, P, xs(Ue), N),
              (Q = R ? S(v) : i(v)),
              Q && ws(Q) && Q.data === 'teleport end' && (Q = i(Q)),
              Wt(p))
            ) {
              let he
              R
                ? ((he = w(se)), (he.anchor = Q ? Q.previousSibling : Ue.lastChild))
                : (he = v.nodeType === 3 ? Ce('') : w('div')),
                (he.el = v),
                (p.component.subTree = he)
            }
          } else
            Z & 64
              ? re !== 8
                ? (Q = C())
                : (Q = p.type.hydrate(v, p, g, P, V, N, e, d))
              : Z & 128 && (Q = p.type.hydrate(v, p, g, P, xs(r(v)), V, N, e, f))
      }
      return W != null && Os(W, null, P, p), Q
    },
    h = (v, p, g, P, V, N) => {
      N = N || !!p.dynamicChildren
      const { type: R, props: C, patchFlag: j, shapeFlag: W, dirs: Z } = p,
        q = (R === 'input' && Z) || R === 'option'
      if (q || j !== -1) {
        if ((Z && ot(p, null, g, 'created'), C))
          if (q || !N || j & 48)
            for (const Q in C) ((q && Q.endsWith('value')) || (ts(Q) && !Bn(Q))) && s(v, Q, null, C[Q], !1, void 0, g)
          else C.onClick && s(v, 'onClick', null, C.onClick, !1, void 0, g)
        let re
        if (
          ((re = C && C.onVnodeBeforeMount) && Fe(re, g, p),
          Z && ot(p, null, g, 'beforeMount'),
          ((re = C && C.onVnodeMounted) || Z) &&
            Bl(() => {
              re && Fe(re, g, p), Z && ot(p, null, g, 'mounted')
            }, P),
          W & 16 && !(C && (C.innerHTML || C.textContent)))
        ) {
          let Q = d(v.firstChild, p, v, g, P, V, N)
          for (; Q; ) {
            bt = !0
            const Ue = Q
            ;(Q = Q.nextSibling), l(Ue)
          }
        } else W & 8 && v.textContent !== p.children && ((bt = !0), (v.textContent = p.children))
      }
      return v.nextSibling
    },
    d = (v, p, g, P, V, N, R) => {
      R = R || !!p.dynamicChildren
      const C = p.children,
        j = C.length
      for (let W = 0; W < j; W++) {
        const Z = R ? C[W] : (C[W] = qe(C[W]))
        if (v) v = f(v, Z, P, V, N, R)
        else {
          if (Z.type === Gt && !Z.children) continue
          ;(bt = !0), n(null, Z, g, null, P, V, xs(g), N)
        }
      }
      return v
    },
    m = (v, p, g, P, V, N) => {
      const { slotScopeIds: R } = p
      R && (V = V ? V.concat(R) : R)
      const C = r(v),
        j = d(i(v), p, C, g, P, V, N)
      return j && ws(j) && j.data === ']' ? i((p.anchor = j)) : ((bt = !0), a((p.anchor = c(']')), C, j), j)
    },
    x = (v, p, g, P, V, N) => {
      if (((bt = !0), (p.el = null), N)) {
        const j = S(v)
        for (;;) {
          const W = i(v)
          if (W && W !== j) l(W)
          else break
        }
      }
      const R = i(v),
        C = r(v)
      return l(v), n(null, p, C, R, g, P, xs(C), V), R
    },
    S = v => {
      let p = 0
      for (; v; )
        if (((v = i(v)), v && ws(v) && (v.data === '[' && p++, v.data === ']'))) {
          if (p === 0) return i(v)
          p--
        }
      return v
    }
  return [u, f]
}
const Se = Bl
function na(e) {
  return oa(e)
}
function sa(e) {
  return oa(e, df)
}
function oa(e, t) {
  const n = Nc()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: o,
      patchProp: i,
      createElement: r,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: h,
      setScopeId: d = Ze,
      insertStaticContent: m
    } = e,
    x = (_, y, T, I = null, A = null, O = null, U = !1, B = null, H = !!y.dynamicChildren) => {
      if (_ === y) return
      _ && !Ge(_, y) && ((I = hs(_)), nt(_, A, O, !0), (_ = null)),
        y.patchFlag === -2 && ((H = !1), (y.dynamicChildren = null))
      const { type: L, ref: ee, shapeFlag: J } = y
      switch (L) {
        case Gt:
          S(_, y, T, I)
          break
        case Ee:
          v(_, y, T, I)
          break
        case Yt:
          _ == null && p(y, T, I, U)
          break
        case se:
          q(_, y, T, I, A, O, U, B, H)
          break
        default:
          J & 1
            ? V(_, y, T, I, A, O, U, B, H)
            : J & 6
            ? re(_, y, T, I, A, O, U, B, H)
            : (J & 64 || J & 128) && L.process(_, y, T, I, A, O, U, B, H, on)
      }
      ee != null && A && Os(ee, _ && _.ref, O, y || _, !y)
    },
    S = (_, y, T, I) => {
      if (_ == null) s((y.el = l(y.children)), T, I)
      else {
        const A = (y.el = _.el)
        y.children !== _.children && c(A, y.children)
      }
    },
    v = (_, y, T, I) => {
      _ == null ? s((y.el = a(y.children || '')), T, I) : (y.el = _.el)
    },
    p = (_, y, T, I) => {
      ;[_.el, _.anchor] = m(_.children, y, T, I, _.el, _.anchor)
    },
    g = ({ el: _, anchor: y }, T, I) => {
      let A
      for (; _ && _ !== y; ) (A = h(_)), s(_, T, I), (_ = A)
      s(y, T, I)
    },
    P = ({ el: _, anchor: y }) => {
      let T
      for (; _ && _ !== y; ) (T = h(_)), o(_), (_ = T)
      o(y)
    },
    V = (_, y, T, I, A, O, U, B, H) => {
      ;(U = U || y.type === 'svg'), _ == null ? N(y, T, I, A, O, U, B, H) : j(_, y, A, O, U, B, H)
    },
    N = (_, y, T, I, A, O, U, B) => {
      let H, L
      const { type: ee, props: J, shapeFlag: te, transition: ie, dirs: ae } = _
      if (
        ((H = _.el = r(_.type, O, J && J.is, J)),
        te & 8 ? u(H, _.children) : te & 16 && C(_.children, H, null, I, A, O && ee !== 'foreignObject', U, B),
        ae && ot(_, null, I, 'created'),
        R(H, _, _.scopeId, U, I),
        J)
      ) {
        for (const pe in J) pe !== 'value' && !Bn(pe) && i(H, pe, null, J[pe], O, _.children, I, A, at)
        'value' in J && i(H, 'value', null, J.value), (L = J.onVnodeBeforeMount) && Fe(L, I, _)
      }
      ae && ot(_, null, I, 'beforeMount')
      const ge = (!A || (A && !A.pendingBranch)) && ie && !ie.persisted
      ge && ie.beforeEnter(H),
        s(H, y, T),
        ((L = J && J.onVnodeMounted) || ge || ae) &&
          Se(() => {
            L && Fe(L, I, _), ge && ie.enter(H), ae && ot(_, null, I, 'mounted')
          }, A)
    },
    R = (_, y, T, I, A) => {
      if ((T && d(_, T), I)) for (let O = 0; O < I.length; O++) d(_, I[O])
      if (A) {
        let O = A.subTree
        if (y === O) {
          const U = A.vnode
          R(_, U, U.scopeId, U.slotScopeIds, A.parent)
        }
      }
    },
    C = (_, y, T, I, A, O, U, B, H = 0) => {
      for (let L = H; L < _.length; L++) {
        const ee = (_[L] = B ? kt(_[L]) : qe(_[L]))
        x(null, ee, y, T, I, A, O, U, B)
      }
    },
    j = (_, y, T, I, A, O, U) => {
      const B = (y.el = _.el)
      let { patchFlag: H, dynamicChildren: L, dirs: ee } = y
      H |= _.patchFlag & 16
      const J = _.props || _e,
        te = y.props || _e
      let ie
      T && Ft(T, !1),
        (ie = te.onVnodeBeforeUpdate) && Fe(ie, T, y, _),
        ee && ot(y, _, T, 'beforeUpdate'),
        T && Ft(T, !0)
      const ae = A && y.type !== 'foreignObject'
      if ((L ? W(_.dynamicChildren, L, B, T, I, ae, O) : U || ve(_, y, B, null, T, I, ae, O, !1), H > 0)) {
        if (H & 16) Z(B, y, J, te, T, I, A)
        else if (
          (H & 2 && J.class !== te.class && i(B, 'class', null, te.class, A),
          H & 4 && i(B, 'style', J.style, te.style, A),
          H & 8)
        ) {
          const ge = y.dynamicProps
          for (let pe = 0; pe < ge.length; pe++) {
            const ke = ge[pe],
              Je = J[ke],
              rn = te[ke]
            ;(rn !== Je || ke === 'value') && i(B, ke, Je, rn, A, _.children, T, I, at)
          }
        }
        H & 1 && _.children !== y.children && u(B, y.children)
      } else !U && L == null && Z(B, y, J, te, T, I, A)
      ;((ie = te.onVnodeUpdated) || ee) &&
        Se(() => {
          ie && Fe(ie, T, y, _), ee && ot(y, _, T, 'updated')
        }, I)
    },
    W = (_, y, T, I, A, O, U) => {
      for (let B = 0; B < y.length; B++) {
        const H = _[B],
          L = y[B],
          ee = H.el && (H.type === se || !Ge(H, L) || H.shapeFlag & 70) ? f(H.el) : T
        x(H, L, ee, null, I, A, O, U, !0)
      }
    },
    Z = (_, y, T, I, A, O, U) => {
      if (T !== I) {
        if (T !== _e) for (const B in T) !Bn(B) && !(B in I) && i(_, B, T[B], null, U, y.children, A, O, at)
        for (const B in I) {
          if (Bn(B)) continue
          const H = I[B],
            L = T[B]
          H !== L && B !== 'value' && i(_, B, L, H, U, y.children, A, O, at)
        }
        'value' in I && i(_, 'value', T.value, I.value)
      }
    },
    q = (_, y, T, I, A, O, U, B, H) => {
      const L = (y.el = _ ? _.el : l('')),
        ee = (y.anchor = _ ? _.anchor : l(''))
      let { patchFlag: J, dynamicChildren: te, slotScopeIds: ie } = y
      ie && (B = B ? B.concat(ie) : ie),
        _ == null
          ? (s(L, T, I), s(ee, T, I), C(y.children, T, ee, A, O, U, B, H))
          : J > 0 && J & 64 && te && _.dynamicChildren
          ? (W(_.dynamicChildren, te, T, A, O, U, B), (y.key != null || (A && y === A.subTree)) && Ti(_, y, !0))
          : ve(_, y, T, ee, A, O, U, B, H)
    },
    re = (_, y, T, I, A, O, U, B, H) => {
      ;(y.slotScopeIds = B),
        _ == null ? (y.shapeFlag & 512 ? A.ctx.activate(y, T, I, U, H) : Q(y, T, I, A, O, U, H)) : Ue(_, y, H)
    },
    Q = (_, y, T, I, A, O, U) => {
      const B = (_.component = da(_, I, A))
      if ((ls(_) && (B.ctx.renderer = on), pa(B), B.asyncDep)) {
        if ((A && A.registerDep(B, he), !_.el)) {
          const H = (B.subTree = w(Ee))
          v(null, H, y, T)
        }
        return
      }
      he(B, _, y, T, A, O, U)
    },
    Ue = (_, y, T) => {
      const I = (y.component = _.component)
      if (Mu(_, y, T))
        if (I.asyncDep && !I.asyncResolved) {
          be(I, y, T)
          return
        } else (I.next = y), Su(I.update), I.update()
      else (y.el = _.el), (I.vnode = y)
    },
    he = (_, y, T, I, A, O, U) => {
      const B = () => {
          if (_.isMounted) {
            let { next: ee, bu: J, u: te, parent: ie, vnode: ae } = _,
              ge = ee,
              pe
            Ft(_, !1),
              ee ? ((ee.el = ae.el), be(_, ee, U)) : (ee = ae),
              J && un(J),
              (pe = ee.props && ee.props.onVnodeBeforeUpdate) && Fe(pe, ie, ee, ae),
              Ft(_, !0)
            const ke = Ts(_),
              Je = _.subTree
            ;(_.subTree = ke),
              x(Je, ke, f(Je.el), hs(Je), _, A, O),
              (ee.el = ke.el),
              ge === null && yi(_, ke.el),
              te && Se(te, A),
              (pe = ee.props && ee.props.onVnodeUpdated) && Se(() => Fe(pe, ie, ee, ae), A)
          } else {
            let ee
            const { el: J, props: te } = y,
              { bm: ie, m: ae, parent: ge } = _,
              pe = Wt(y)
            if (
              (Ft(_, !1), ie && un(ie), !pe && (ee = te && te.onVnodeBeforeMount) && Fe(ee, ge, y), Ft(_, !0), J && mo)
            ) {
              const ke = () => {
                ;(_.subTree = Ts(_)), mo(J, _.subTree, _, A, null)
              }
              pe ? y.type.__asyncLoader().then(() => !_.isUnmounted && ke()) : ke()
            } else {
              const ke = (_.subTree = Ts(_))
              x(null, ke, T, I, _, A, O), (y.el = ke.el)
            }
            if ((ae && Se(ae, A), !pe && (ee = te && te.onVnodeMounted))) {
              const ke = y
              Se(() => Fe(ee, ge, ke), A)
            }
            ;(y.shapeFlag & 256 || (ge && Wt(ge.vnode) && ge.vnode.shapeFlag & 256)) && _.a && Se(_.a, A),
              (_.isMounted = !0),
              (y = T = I = null)
          }
        },
        H = (_.effect = new ss(B, () => Zs(L), _.scope)),
        L = (_.update = () => H.run())
      ;(L.id = _.uid), Ft(_, !0), L()
    },
    be = (_, y, T) => {
      y.component = _
      const I = _.vnode.props
      ;(_.vnode = y), (_.next = null), rf(_, y.props, I, T), cf(_, y.children, T), $n(), tr(), Pn()
    },
    ve = (_, y, T, I, A, O, U, B, H = !1) => {
      const L = _ && _.children,
        ee = _ ? _.shapeFlag : 0,
        J = y.children,
        { patchFlag: te, shapeFlag: ie } = y
      if (te > 0) {
        if (te & 128) {
          ds(L, J, T, I, A, O, U, B, H)
          return
        } else if (te & 256) {
          Nt(L, J, T, I, A, O, U, B, H)
          return
        }
      }
      ie & 8
        ? (ee & 16 && at(L, A, O), J !== L && u(T, J))
        : ee & 16
        ? ie & 16
          ? ds(L, J, T, I, A, O, U, B, H)
          : at(L, A, O, !0)
        : (ee & 8 && u(T, ''), ie & 16 && C(J, T, I, A, O, U, B, H))
    },
    Nt = (_, y, T, I, A, O, U, B, H) => {
      ;(_ = _ || an), (y = y || an)
      const L = _.length,
        ee = y.length,
        J = Math.min(L, ee)
      let te
      for (te = 0; te < J; te++) {
        const ie = (y[te] = H ? kt(y[te]) : qe(y[te]))
        x(_[te], ie, T, null, A, O, U, B, H)
      }
      L > ee ? at(_, A, O, !0, !1, J) : C(y, T, I, A, O, U, B, H, J)
    },
    ds = (_, y, T, I, A, O, U, B, H) => {
      let L = 0
      const ee = y.length
      let J = _.length - 1,
        te = ee - 1
      for (; L <= J && L <= te; ) {
        const ie = _[L],
          ae = (y[L] = H ? kt(y[L]) : qe(y[L]))
        if (Ge(ie, ae)) x(ie, ae, T, null, A, O, U, B, H)
        else break
        L++
      }
      for (; L <= J && L <= te; ) {
        const ie = _[J],
          ae = (y[te] = H ? kt(y[te]) : qe(y[te]))
        if (Ge(ie, ae)) x(ie, ae, T, null, A, O, U, B, H)
        else break
        J--, te--
      }
      if (L > J) {
        if (L <= te) {
          const ie = te + 1,
            ae = ie < ee ? y[ie].el : I
          for (; L <= te; ) x(null, (y[L] = H ? kt(y[L]) : qe(y[L])), T, ae, A, O, U, B, H), L++
        }
      } else if (L > te) for (; L <= J; ) nt(_[L], A, O, !0), L++
      else {
        const ie = L,
          ae = L,
          ge = new Map()
        for (L = ae; L <= te; L++) {
          const je = (y[L] = H ? kt(y[L]) : qe(y[L]))
          je.key != null && ge.set(je.key, L)
        }
        let pe,
          ke = 0
        const Je = te - ae + 1
        let rn = !1,
          Ui = 0
        const En = new Array(Je)
        for (L = 0; L < Je; L++) En[L] = 0
        for (L = ie; L <= J; L++) {
          const je = _[L]
          if (ke >= Je) {
            nt(je, A, O, !0)
            continue
          }
          let st
          if (je.key != null) st = ge.get(je.key)
          else
            for (pe = ae; pe <= te; pe++)
              if (En[pe - ae] === 0 && Ge(je, y[pe])) {
                st = pe
                break
              }
          st === void 0
            ? nt(je, A, O, !0)
            : ((En[st - ae] = L + 1), st >= Ui ? (Ui = st) : (rn = !0), x(je, y[st], T, null, A, O, U, B, H), ke++)
        }
        const ji = rn ? hf(En) : an
        for (pe = ji.length - 1, L = Je - 1; L >= 0; L--) {
          const je = ae + L,
            st = y[je],
            Ki = je + 1 < ee ? y[je + 1].el : I
          En[L] === 0 ? x(null, st, T, Ki, A, O, U, B, H) : rn && (pe < 0 || L !== ji[pe] ? Ot(st, T, Ki, 2) : pe--)
        }
      }
    },
    Ot = (_, y, T, I, A = null) => {
      const { el: O, type: U, transition: B, children: H, shapeFlag: L } = _
      if (L & 6) {
        Ot(_.component.subTree, y, T, I)
        return
      }
      if (L & 128) {
        _.suspense.move(y, T, I)
        return
      }
      if (L & 64) {
        U.move(_, y, T, on)
        return
      }
      if (U === se) {
        s(O, y, T)
        for (let J = 0; J < H.length; J++) Ot(H[J], y, T, I)
        s(_.anchor, y, T)
        return
      }
      if (U === Yt) {
        g(_, y, T)
        return
      }
      if (I !== 2 && L & 1 && B)
        if (I === 0) B.beforeEnter(O), s(O, y, T), Se(() => B.enter(O), A)
        else {
          const { leave: J, delayLeave: te, afterLeave: ie } = B,
            ae = () => s(O, y, T),
            ge = () => {
              J(O, () => {
                ae(), ie && ie()
              })
            }
          te ? te(O, ae, ge) : ge()
        }
      else s(O, y, T)
    },
    nt = (_, y, T, I = !1, A = !1) => {
      const { type: O, props: U, ref: B, children: H, dynamicChildren: L, shapeFlag: ee, patchFlag: J, dirs: te } = _
      if ((B != null && Os(B, null, T, _, !0), ee & 256)) {
        y.ctx.deactivate(_)
        return
      }
      const ie = ee & 1 && te,
        ae = !Wt(_)
      let ge
      if ((ae && (ge = U && U.onVnodeBeforeUnmount) && Fe(ge, y, _), ee & 6)) gc(_.component, T, I)
      else {
        if (ee & 128) {
          _.suspense.unmount(T, I)
          return
        }
        ie && ot(_, null, y, 'beforeUnmount'),
          ee & 64
            ? _.type.remove(_, y, T, A, on, I)
            : L && (O !== se || (J > 0 && J & 64))
            ? at(L, y, T, !1, !0)
            : ((O === se && J & 384) || (!A && ee & 16)) && at(H, y, T),
          I && Di(_)
      }
      ;((ae && (ge = U && U.onVnodeUnmounted)) || ie) &&
        Se(() => {
          ge && Fe(ge, y, _), ie && ot(_, null, y, 'unmounted')
        }, T)
    },
    Di = _ => {
      const { type: y, el: T, anchor: I, transition: A } = _
      if (y === se) {
        vc(T, I)
        return
      }
      if (y === Yt) {
        P(_)
        return
      }
      const O = () => {
        o(T), A && !A.persisted && A.afterLeave && A.afterLeave()
      }
      if (_.shapeFlag & 1 && A && !A.persisted) {
        const { leave: U, delayLeave: B } = A,
          H = () => U(T, O)
        B ? B(_.el, O, H) : H()
      } else O()
    },
    vc = (_, y) => {
      let T
      for (; _ !== y; ) (T = h(_)), o(_), (_ = T)
      o(y)
    },
    gc = (_, y, T) => {
      const { bum: I, scope: A, update: O, subTree: U, um: B } = _
      I && un(I),
        A.stop(),
        O && ((O.active = !1), nt(U, _, y, T)),
        B && Se(B, y),
        Se(() => {
          _.isUnmounted = !0
        }, y),
        y &&
          y.pendingBranch &&
          !y.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === y.pendingId &&
          (y.deps--, y.deps === 0 && y.resolve())
    },
    at = (_, y, T, I = !1, A = !1, O = 0) => {
      for (let U = O; U < _.length; U++) nt(_[U], y, T, I, A)
    },
    hs = _ => (_.shapeFlag & 6 ? hs(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : h(_.anchor || _.el)),
    zi = (_, y, T) => {
      _ == null ? y._vnode && nt(y._vnode, null, null, !0) : x(y._vnode || null, _, y, null, null, null, T),
        tr(),
        Bs(),
        (y._vnode = _)
    },
    on = { p: x, um: nt, m: Ot, r: Di, mt: Q, mc: C, pc: ve, pbc: W, n: hs, o: e }
  let _o, mo
  return t && ([_o, mo] = t(on)), { render: zi, hydrate: _o, createApp: ff(zi, _o) }
}
function Ft({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Ti(e, t, n = !1) {
  const s = e.children,
    o = t.children
  if (X(s) && X(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i]
      let l = o[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = o[i] = kt(o[i])), (l.el = r.el)), n || Ti(r, l)),
        l.type === Gt && (l.el = r.el)
    }
}
function hf(e) {
  const t = e.slice(),
    n = [0]
  let s, o, i, r, l
  const a = e.length
  for (s = 0; s < a; s++) {
    const c = e[s]
    if (c !== 0) {
      if (((o = n[n.length - 1]), e[o] < c)) {
        ;(t[s] = o), n.push(s)
        continue
      }
      for (i = 0, r = n.length - 1; i < r; ) (l = (i + r) >> 1), e[n[l]] < c ? (i = l + 1) : (r = l)
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; ) (n[i] = r), (r = t[r])
  return n
}
const pf = e => e.__isTeleport,
  Fn = e => e && (e.disabled || e.disabled === ''),
  dr = e => typeof SVGElement < 'u' && e instanceof SVGElement,
  Ho = (e, t) => {
    const n = e && e.to
    return ye(n) ? (t ? t(n) : null) : n
  },
  _f = {
    __isTeleport: !0,
    process(e, t, n, s, o, i, r, l, a, c) {
      const {
          mc: u,
          pc: f,
          pbc: h,
          o: { insert: d, querySelector: m, createText: x, createComment: S }
        } = c,
        v = Fn(t.props)
      let { shapeFlag: p, children: g, dynamicChildren: P } = t
      if (e == null) {
        const V = (t.el = x('')),
          N = (t.anchor = x(''))
        d(V, n, s), d(N, n, s)
        const R = (t.target = Ho(t.props, m)),
          C = (t.targetAnchor = x(''))
        R && (d(C, R), (r = r || dr(R)))
        const j = (W, Z) => {
          p & 16 && u(g, W, Z, o, i, r, l, a)
        }
        v ? j(n, N) : R && j(R, C)
      } else {
        t.el = e.el
        const V = (t.anchor = e.anchor),
          N = (t.target = e.target),
          R = (t.targetAnchor = e.targetAnchor),
          C = Fn(e.props),
          j = C ? n : N,
          W = C ? V : R
        if (
          ((r = r || dr(N)),
          P ? (h(e.dynamicChildren, P, j, o, i, r, l), Ti(e, t, !0)) : a || f(e, t, j, W, o, i, r, l, !1),
          v)
        )
          C || ks(t, n, V, c, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Z = (t.target = Ho(t.props, m))
          Z && ks(t, Z, null, c, 0)
        } else C && ks(t, N, R, c, 1)
      }
      ra(t)
    },
    remove(e, t, n, s, { um: o, o: { remove: i } }, r) {
      const { shapeFlag: l, children: a, anchor: c, targetAnchor: u, target: f, props: h } = e
      if ((f && i(u), (r || !Fn(h)) && (i(c), l & 16)))
        for (let d = 0; d < a.length; d++) {
          const m = a[d]
          o(m, t, n, !0, !!m.dynamicChildren)
        }
    },
    move: ks,
    hydrate: mf
  }
function ks(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n)
  const { el: r, anchor: l, shapeFlag: a, children: c, props: u } = e,
    f = i === 2
  if ((f && s(r, t, n), (!f || Fn(u)) && a & 16)) for (let h = 0; h < c.length; h++) o(c[h], t, n, 2)
  f && s(l, t, n)
}
function mf(e, t, n, s, o, i, { o: { nextSibling: r, parentNode: l, querySelector: a } }, c) {
  const u = (t.target = Ho(t.props, a))
  if (u) {
    const f = u._lpa || u.firstChild
    if (t.shapeFlag & 16)
      if (Fn(t.props)) (t.anchor = c(r(e), t, l(e), n, s, o, i)), (t.targetAnchor = f)
      else {
        t.anchor = r(e)
        let h = f
        for (; h; )
          if (((h = r(h)), h && h.nodeType === 8 && h.data === 'teleport anchor')) {
            ;(t.targetAnchor = h), (u._lpa = t.targetAnchor && r(t.targetAnchor))
            break
          }
        c(f, t, u, n, s, o, i)
      }
    ra(t)
  }
  return t.anchor && r(t.anchor)
}
const ia = _f
function ra(e) {
  const t = e.ctx
  if (t && t.ut) {
    let n = e.children[0].el
    for (; n !== e.targetAnchor; ) n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid), (n = n.nextSibling)
    t.ut()
  }
}
const se = Symbol(void 0),
  Gt = Symbol(void 0),
  Ee = Symbol(void 0),
  Yt = Symbol(void 0),
  Rn = []
let Re = null
function b(e = !1) {
  Rn.push((Re = e ? null : []))
}
function la() {
  Rn.pop(), (Re = Rn[Rn.length - 1] || null)
}
let Zt = 1
function Do(e) {
  Zt += e
}
function aa(e) {
  return (e.dynamicChildren = Zt > 0 ? Re || an : null), la(), Zt > 0 && Re && Re.push(e), e
}
function E(e, t, n, s, o, i) {
  return aa($(e, t, n, s, o, i, !0))
}
function ne(e, t, n, s, o) {
  return aa(w(e, t, n, s, o, !0))
}
function At(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Ge(e, t) {
  return e.type === t.type && e.key === t.key
}
function vf(e) {}
const oo = '__vInternal',
  ca = ({ key: e }) => e ?? null,
  Es = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null ? (ye(e) || Pe(e) || oe(e) ? { i: Te, r: e, k: t, f: !!n } : e) : null
function $(e, t = null, n = null, s = 0, o = null, i = e === se ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ca(t),
    ref: t && Es(t),
    scopeId: to,
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
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Te
  }
  return (
    l ? (Ei(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ye(n) ? 8 : 16),
    Zt > 0 && !r && Re && (a.patchFlag > 0 || i & 6) && a.patchFlag !== 32 && Re.push(a),
    a
  )
}
const w = gf
function gf(e, t = null, n = null, s = 0, o = null, i = !1) {
  if (((!e || e === Wl) && (e = Ee), At(e))) {
    const l = lt(e, t, !0)
    return (
      n && Ei(l, n),
      Zt > 0 && !i && Re && (l.shapeFlag & 6 ? (Re[Re.indexOf(e)] = l) : Re.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if (($f(e) && (e = e.__vccOpts), t)) {
    t = ua(t)
    let { class: l, style: a } = t
    l && !ye(l) && (t.class = fe(l)), me(a) && (hi(a) && !X(a) && (a = we({}, a)), (t.style = es(a)))
  }
  const r = ye(e) ? 1 : Ml(e) ? 128 : pf(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0
  return $(e, t, n, s, o, r, i, !0)
}
function ua(e) {
  return e ? (hi(e) || oo in e ? we({}, e) : e) : null
}
function lt(e, t, n = !1) {
  const { props: s, ref: o, patchFlag: i, children: r } = e,
    l = t ? Xt(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ca(l),
    ref: t && t.ref ? (n && o ? (X(o) ? o.concat(Es(t)) : [o, Es(t)]) : Es(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== se ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function Ce(e = ' ', t = 0) {
  return w(Gt, null, e, t)
}
function fa(e, t) {
  const n = w(Yt, null, e)
  return (n.staticCount = t), n
}
function G(e = '', t = !1) {
  return t ? (b(), ne(Ee, null, e)) : w(Ee, null, e)
}
function qe(e) {
  return e == null || typeof e == 'boolean'
    ? w(Ee)
    : X(e)
    ? w(se, null, e.slice())
    : typeof e == 'object'
    ? kt(e)
    : w(Gt, null, String(e))
}
function kt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : lt(e)
}
function Ei(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (X(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const o = t.default
      o && (o._c && (o._d = !1), Ei(e, o()), o._c && (o._d = !0))
      return
    } else {
      n = 32
      const o = t._
      !o && !(oo in t)
        ? (t._ctx = Te)
        : o === 3 && Te && (Te.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    oe(t) ? ((t = { default: t, _ctx: Te }), (n = 32)) : ((t = String(t)), s & 64 ? ((n = 16), (t = [Ce(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Xt(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const o in s)
      if (o === 'class') t.class !== s.class && (t.class = fe([t.class, s.class]))
      else if (o === 'style') t.style = es([t.style, s.style])
      else if (ts(o)) {
        const i = t[o],
          r = s[o]
        r && i !== r && !(X(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r)
      } else o !== '' && (t[o] = s[o])
  }
  return t
}
function Fe(e, t, n, s = null) {
  We(e, t, 7, [n, s])
}
const yf = ta()
let bf = 0
function da(e, t, n) {
  const s = e.type,
    o = (t ? t.appContext : e.appContext) || yf,
    i = {
      uid: bf++,
      vnode: e,
      type: s,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ci(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ql(s, o),
      emitsOptions: Ll(s, o),
      emit: null,
      emitted: null,
      propsDefaults: _e,
      inheritAttrs: s.inheritAttrs,
      ctx: _e,
      data: _e,
      props: _e,
      attrs: _e,
      slots: _e,
      refs: _e,
      setupState: _e,
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
    }
  return (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = Eu.bind(null, i)), e.ce && e.ce(i), i
}
let xe = null
const mt = () => xe || Te,
  It = e => {
    ;(xe = e), e.scope.on()
  },
  Pt = () => {
    xe && xe.scope.off(), (xe = null)
  }
function ha(e) {
  return e.vnode.shapeFlag & 4
}
let bn = !1
function pa(e, t = !1) {
  bn = t
  const { props: n, children: s } = e.vnode,
    o = ha(e)
  of(e, n, o, t), af(e, s)
  const i = o ? xf(e, t) : void 0
  return (bn = !1), i
}
function xf(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = fn(new Proxy(e.ctx, No)))
  const { setup: s } = n
  if (s) {
    const o = (e.setupContext = s.length > 1 ? ma(e) : null)
    It(e), $n()
    const i = dt(s, e, 0, [e.props, o])
    if ((Pn(), Pt(), li(i))) {
      if ((i.then(Pt, Pt), t))
        return i
          .then(r => {
            zo(e, r, t)
          })
          .catch(r => {
            tn(r, e, 0)
          })
      e.asyncDep = i
    } else zo(e, i, t)
  } else _a(e, t)
}
function zo(e, t, n) {
  oe(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : me(t) && (e.setupState = mi(t)), _a(e, n)
}
let Fs, Uo
function wf(e) {
  ;(Fs = e),
    (Uo = t => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, Gu))
    })
}
const kf = () => !Fs
function _a(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && Fs && !s.render) {
      const o = s.template || Pi(e).template
      if (o) {
        const { isCustomElement: i, compilerOptions: r } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = s,
          c = we(we({ isCustomElement: i, delimiters: l }, r), a)
        s.render = Fs(o, c)
      }
    }
    ;(e.render = s.render || Ze), Uo && Uo(e)
  }
  It(e), $n(), Zu(e), Pn(), Pt()
}
function Cf(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ze(e, 'get', '$attrs'), t[n]
    }
  })
}
function ma(e) {
  const t = s => {
    e.exposed = s || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = Cf(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function io(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(mi(fn(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in On) return On[n](e)
        },
        has(t, n) {
          return n in t || n in On
        }
      }))
    )
}
function jo(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function $f(e) {
  return oe(e) && '__vccOpts' in e
}
const F = (e, t) => wu(e, t, bn)
function Pf() {
  return null
}
function Sf() {
  return null
}
function Tf(e) {}
function Ef(e, t) {
  return null
}
function va() {
  return ga().slots
}
function Vf() {
  return ga().attrs
}
function ga() {
  const e = mt()
  return e.setupContext || (e.setupContext = ma(e))
}
function Af(e, t) {
  const n = X(e) ? e.reduce((s, o) => ((s[o] = {}), s), {}) : e
  for (const s in t) {
    const o = n[s]
    o
      ? X(o) || oe(o)
        ? (n[s] = { type: o, default: t[s] })
        : (o.default = t[s])
      : o === null && (n[s] = { default: t[s] })
  }
  return n
}
function If(e, t) {
  const n = {}
  for (const s in e) t.includes(s) || Object.defineProperty(n, s, { enumerable: !0, get: () => e[s] })
  return n
}
function Lf(e) {
  const t = mt()
  let n = e()
  return (
    Pt(),
    li(n) &&
      (n = n.catch(s => {
        throw (It(t), s)
      })),
    [n, () => It(t)]
  )
}
function xn(e, t, n) {
  const s = arguments.length
  return s === 2
    ? me(t) && !X(t)
      ? At(t)
        ? w(e, null, [t])
        : w(e, t)
      : w(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && At(n) && (n = [n]), w(e, t, n))
}
const ya = Symbol(''),
  ba = () => Le(ya)
function Mf() {}
function Bf(e, t, n, s) {
  const o = n[s]
  if (o && xa(o, e)) return o
  const i = t()
  return (i.memo = e.slice()), (n[s] = i)
}
function xa(e, t) {
  const n = e.memo
  if (n.length != t.length) return !1
  for (let s = 0; s < n.length; s++) if (mn(n[s], t[s])) return !1
  return Zt > 0 && Re && Re.push(e), !0
}
const wa = '3.2.47',
  Nf = {
    createComponentInstance: da,
    setupComponent: pa,
    renderComponentRoot: Ts,
    setCurrentRenderingInstance: Yn,
    isVNode: At,
    normalizeVNode: qe
  },
  Of = Nf,
  Ff = null,
  Rf = null,
  Hf = 'http://www.w3.org/2000/svg',
  zt = typeof document < 'u' ? document : null,
  hr = zt && zt.createElement('template'),
  Df = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const o = t ? zt.createElementNS(Hf, e) : zt.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && s && s.multiple != null && o.setAttribute('multiple', s.multiple), o
    },
    createText: e => zt.createTextNode(e),
    createComment: e => zt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => zt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, o, i) {
      const r = n ? n.previousSibling : t.lastChild
      if (o && (o === i || o.nextSibling))
        for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); );
      else {
        hr.innerHTML = s ? `<svg>${e}</svg>` : e
        const l = hr.content
        if (s) {
          const a = l.firstChild
          for (; a.firstChild; ) l.appendChild(a.firstChild)
          l.removeChild(a)
        }
        t.insertBefore(l, n)
      }
      return [r ? r.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  }
function zf(e, t, n) {
  const s = e._vtc
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
function Uf(e, t, n) {
  const s = e.style,
    o = ye(n)
  if (n && !o) {
    if (t && !ye(t)) for (const i in t) n[i] == null && Ko(s, i, '')
    for (const i in n) Ko(s, i, n[i])
  } else {
    const i = s.display
    o ? t !== n && (s.cssText = n) : t && e.removeAttribute('style'), '_vod' in e && (s.display = i)
  }
}
const pr = /\s*!important$/
function Ko(e, t, n) {
  if (X(n)) n.forEach(s => Ko(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = jf(e, t)
    pr.test(n) ? e.setProperty(Xe(s), n.replace(pr, ''), 'important') : (e[s] = n)
  }
}
const _r = ['Webkit', 'Moz', 'ms'],
  wo = {}
function jf(e, t) {
  const n = wo[t]
  if (n) return n
  let s = He(t)
  if (s !== 'filter' && s in e) return (wo[t] = s)
  s = ns(s)
  for (let o = 0; o < _r.length; o++) {
    const i = _r[o] + s
    if (i in e) return (wo[t] = i)
  }
  return t
}
const mr = 'http://www.w3.org/1999/xlink'
function Kf(e, t, n, s, o) {
  if (s && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(mr, t.slice(6, t.length)) : e.setAttributeNS(mr, t, n)
  else {
    const i = Sc(t)
    n == null || (i && !ll(n)) ? e.removeAttribute(t) : e.setAttribute(t, i ? '' : n)
  }
}
function qf(e, t, n, s, o, i, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && r(s, o, i), (e[t] = n ?? '')
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n
    const a = n ?? ''
    ;(e.value !== a || e.tagName === 'OPTION') && (e.value = a), n == null && e.removeAttribute(t)
    return
  }
  let l = !1
  if (n === '' || n == null) {
    const a = typeof e[t]
    a === 'boolean'
      ? (n = ll(n))
      : n == null && a === 'string'
      ? ((n = ''), (l = !0))
      : a === 'number' && ((n = 0), (l = !0))
  }
  try {
    e[t] = n
  } catch {}
  l && e.removeAttribute(t)
}
function ft(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Wf(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
function Yf(e, t, n, s, o = null) {
  const i = e._vei || (e._vei = {}),
    r = i[t]
  if (s && r) r.value = s
  else {
    const [l, a] = Xf(t)
    if (s) {
      const c = (i[t] = Gf(s, o))
      ft(e, l, c, a)
    } else r && (Wf(e, l, r, a), (i[t] = void 0))
  }
}
const vr = /(?:Once|Passive|Capture)$/
function Xf(e) {
  let t
  if (vr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(vr)); ) (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Xe(e.slice(2)), t]
}
let ko = 0
const Jf = Promise.resolve(),
  Qf = () => ko || (Jf.then(() => (ko = 0)), (ko = Date.now()))
function Gf(e, t) {
  const n = s => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    We(Zf(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Qf()), n
}
function Zf(e, t) {
  if (X(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map(s => o => !o._stopped && s && s(o))
    )
  } else return t
}
const gr = /^on[a-z]/,
  ed = (e, t, n, s, o = !1, i, r, l, a) => {
    t === 'class'
      ? zf(e, s, o)
      : t === 'style'
      ? Uf(e, n, s)
      : ts(t)
      ? ii(t) || Yf(e, t, n, s, r)
      : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : td(e, t, s, o))
      ? qf(e, t, s, i, r, l, a)
      : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s), Kf(e, t, s, o))
  }
function td(e, t, n, s) {
  return s
    ? !!(t === 'innerHTML' || t === 'textContent' || (t in e && gr.test(t) && oe(n)))
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (gr.test(t) && ye(n))
    ? !1
    : t in e
}
function ka(e, t) {
  const n = z(e)
  class s extends ro {
    constructor(i) {
      super(n, i, t)
    }
  }
  return (s.def = n), s
}
const nd = e => ka(e, Ra),
  sd = typeof HTMLElement < 'u' ? HTMLElement : class {}
class ro extends sd {
  constructor(t, n = {}, s) {
    super(),
      (this._def = t),
      (this._props = n),
      (this._instance = null),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      this.shadowRoot && s
        ? s(this._createVNode(), this.shadowRoot)
        : (this.attachShadow({ mode: 'open' }), this._def.__asyncLoader || this._resolveProps(this._def))
  }
  connectedCallback() {
    ;(this._connected = !0), this._instance || (this._resolved ? this._update() : this._resolveDef())
  }
  disconnectedCallback() {
    ;(this._connected = !1),
      nn(() => {
        this._connected || (Yo(null, this.shadowRoot), (this._instance = null))
      })
  }
  _resolveDef() {
    this._resolved = !0
    for (let s = 0; s < this.attributes.length; s++) this._setAttr(this.attributes[s].name)
    new MutationObserver(s => {
      for (const o of s) this._setAttr(o.attributeName)
    }).observe(this, { attributes: !0 })
    const t = (s, o = !1) => {
        const { props: i, styles: r } = s
        let l
        if (i && !X(i))
          for (const a in i) {
            const c = i[a]
            ;(c === Number || (c && c.type === Number)) &&
              (a in this._props && (this._props[a] = Ls(this._props[a])),
              ((l || (l = Object.create(null)))[He(a)] = !0))
          }
        ;(this._numberProps = l), o && this._resolveProps(s), this._applyStyles(r), this._update()
      },
      n = this._def.__asyncLoader
    n ? n().then(s => t(s, !0)) : t(this._def)
  }
  _resolveProps(t) {
    const { props: n } = t,
      s = X(n) ? n : Object.keys(n || {})
    for (const o of Object.keys(this)) o[0] !== '_' && s.includes(o) && this._setProp(o, this[o], !0, !1)
    for (const o of s.map(He))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o)
        },
        set(i) {
          this._setProp(o, i)
        }
      })
  }
  _setAttr(t) {
    let n = this.getAttribute(t)
    const s = He(t)
    this._numberProps && this._numberProps[s] && (n = Ls(n)), this._setProp(s, n, !1)
  }
  _getProp(t) {
    return this._props[t]
  }
  _setProp(t, n, s = !0, o = !0) {
    n !== this._props[t] &&
      ((this._props[t] = n),
      o && this._instance && this._update(),
      s &&
        (n === !0
          ? this.setAttribute(Xe(t), '')
          : typeof n == 'string' || typeof n == 'number'
          ? this.setAttribute(Xe(t), n + '')
          : n || this.removeAttribute(Xe(t))))
  }
  _update() {
    Yo(this._createVNode(), this.shadowRoot)
  }
  _createVNode() {
    const t = w(this._def, we({}, this._props))
    return (
      this._instance ||
        (t.ce = n => {
          ;(this._instance = n), (n.isCE = !0)
          const s = (i, r) => {
            this.dispatchEvent(new CustomEvent(i, { detail: r }))
          }
          n.emit = (i, ...r) => {
            s(i, r), Xe(i) !== i && s(Xe(i), r)
          }
          let o = this
          for (; (o = o && (o.parentNode || o.host)); )
            if (o instanceof ro) {
              ;(n.parent = o._instance), (n.provides = o._instance.provides)
              break
            }
        }),
      t
    )
  }
  _applyStyles(t) {
    t &&
      t.forEach(n => {
        const s = document.createElement('style')
        ;(s.textContent = n), this.shadowRoot.appendChild(s)
      })
  }
}
function od(e = '$style') {
  {
    const t = mt()
    if (!t) return _e
    const n = t.type.__cssModules
    if (!n) return _e
    const s = n[e]
    return s || _e
  }
}
function id(e) {
  const t = mt()
  if (!t) return
  const n = (t.ut = (o = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i => Wo(i, o))
    }),
    s = () => {
      const o = e(t.proxy)
      qo(t.subTree, o), n(o)
    }
  xi(s),
    Ve(() => {
      const o = new MutationObserver(s)
      o.observe(t.subTree.el.parentNode, { childList: !0 }), Mt(() => o.disconnect())
    })
}
function qo(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense
    ;(e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          qo(n.activeBranch, t)
        })
  }
  for (; e.component; ) e = e.component.subTree
  if (e.shapeFlag & 1 && e.el) Wo(e.el, t)
  else if (e.type === se) e.children.forEach(n => qo(n, t))
  else if (e.type === Yt) {
    let { el: n, anchor: s } = e
    for (; n && (Wo(n, t), n !== s); ) n = n.nextSibling
  }
}
function Wo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style
    for (const s in t) n.setProperty(`--${s}`, t[s])
  }
}
const xt = 'transition',
  Vn = 'animation',
  St = (e, { slots: t }) => xn(ki, $a(e), t)
St.displayName = 'Transition'
const Ca = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  rd = (St.props = we({}, ki.props, Ca)),
  Rt = (e, t = []) => {
    X(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  yr = e => (e ? (X(e) ? e.some(t => t.length > 1) : e.length > 1) : !1)
function $a(e) {
  const t = {}
  for (const q in e) q in Ca || (t[q] = e[q])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: o,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: r = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = i,
      appearActiveClass: c = r,
      appearToClass: u = l,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: d = `${n}-leave-to`
    } = e,
    m = ld(o),
    x = m && m[0],
    S = m && m[1],
    {
      onBeforeEnter: v,
      onEnter: p,
      onEnterCancelled: g,
      onLeave: P,
      onLeaveCancelled: V,
      onBeforeAppear: N = v,
      onAppear: R = p,
      onAppearCancelled: C = g
    } = t,
    j = (q, re, Q) => {
      wt(q, re ? u : l), wt(q, re ? c : r), Q && Q()
    },
    W = (q, re) => {
      ;(q._isLeaving = !1), wt(q, f), wt(q, d), wt(q, h), re && re()
    },
    Z = q => (re, Q) => {
      const Ue = q ? R : p,
        he = () => j(re, q, Q)
      Rt(Ue, [re, he]),
        br(() => {
          wt(re, q ? a : i), ct(re, q ? u : l), yr(Ue) || xr(re, s, x, he)
        })
    }
  return we(t, {
    onBeforeEnter(q) {
      Rt(v, [q]), ct(q, i), ct(q, r)
    },
    onBeforeAppear(q) {
      Rt(N, [q]), ct(q, a), ct(q, c)
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(q, re) {
      q._isLeaving = !0
      const Q = () => W(q, re)
      ct(q, f),
        Sa(),
        ct(q, h),
        br(() => {
          q._isLeaving && (wt(q, f), ct(q, d), yr(P) || xr(q, s, S, Q))
        }),
        Rt(P, [q, Q])
    },
    onEnterCancelled(q) {
      j(q, !1), Rt(g, [q])
    },
    onAppearCancelled(q) {
      j(q, !0), Rt(C, [q])
    },
    onLeaveCancelled(q) {
      W(q), Rt(V, [q])
    }
  })
}
function ld(e) {
  if (e == null) return null
  if (me(e)) return [Co(e.enter), Co(e.leave)]
  {
    const t = Co(e)
    return [t, t]
  }
}
function Co(e) {
  return Ls(e)
}
function ct(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set())).add(t)
}
function wt(e, t) {
  t.split(/\s+/).forEach(s => s && e.classList.remove(s))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function br(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let ad = 0
function xr(e, t, n, s) {
  const o = (e._endId = ++ad),
    i = () => {
      o === e._endId && s()
    }
  if (n) return setTimeout(i, n)
  const { type: r, timeout: l, propCount: a } = Pa(e, t)
  if (!r) return s()
  const c = r + 'end'
  let u = 0
  const f = () => {
      e.removeEventListener(c, h), i()
    },
    h = d => {
      d.target === e && ++u >= a && f()
    }
  setTimeout(() => {
    u < a && f()
  }, l + 1),
    e.addEventListener(c, h)
}
function Pa(e, t) {
  const n = window.getComputedStyle(e),
    s = m => (n[m] || '').split(', '),
    o = s(`${xt}Delay`),
    i = s(`${xt}Duration`),
    r = wr(o, i),
    l = s(`${Vn}Delay`),
    a = s(`${Vn}Duration`),
    c = wr(l, a)
  let u = null,
    f = 0,
    h = 0
  t === xt
    ? r > 0 && ((u = xt), (f = r), (h = i.length))
    : t === Vn
    ? c > 0 && ((u = Vn), (f = c), (h = a.length))
    : ((f = Math.max(r, c)), (u = f > 0 ? (r > c ? xt : Vn) : null), (h = u ? (u === xt ? i.length : a.length) : 0))
  const d = u === xt && /\b(transform|all)(,|$)/.test(s(`${xt}Property`).toString())
  return { type: u, timeout: f, propCount: h, hasTransform: d }
}
function wr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => kr(n) + kr(e[s])))
}
function kr(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Sa() {
  return document.body.offsetHeight
}
const Ta = new WeakMap(),
  Ea = new WeakMap(),
  Va = {
    name: 'TransitionGroup',
    props: we({}, rd, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = mt(),
        s = wi()
      let o, i
      return (
        Tn(() => {
          if (!o.length) return
          const r = e.moveClass || `${e.name || 'v'}-move`
          if (!hd(o[0].el, n.vnode.el, r)) return
          o.forEach(ud), o.forEach(fd)
          const l = o.filter(dd)
          Sa(),
            l.forEach(a => {
              const c = a.el,
                u = c.style
              ct(c, r), (u.transform = u.webkitTransform = u.transitionDuration = '')
              const f = (c._moveCb = h => {
                ;(h && h.target !== c) ||
                  ((!h || /transform$/.test(h.propertyName)) &&
                    (c.removeEventListener('transitionend', f), (c._moveCb = null), wt(c, r)))
              })
              c.addEventListener('transitionend', f)
            })
        }),
        () => {
          const r = ce(e),
            l = $a(r)
          let a = r.tag || se
          ;(o = i), (i = t.default ? no(t.default()) : [])
          for (let c = 0; c < i.length; c++) {
            const u = i[c]
            u.key != null && Qt(u, vn(u, l, s, n))
          }
          if (o)
            for (let c = 0; c < o.length; c++) {
              const u = o[c]
              Qt(u, vn(u, l, s, n)), Ta.set(u, u.el.getBoundingClientRect())
            }
          return w(a, null, i)
        }
      )
    }
  },
  cd = e => delete e.mode
Va.props
const Aa = Va
function ud(e) {
  const t = e.el
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
}
function fd(e) {
  Ea.set(e, e.el.getBoundingClientRect())
}
function dd(e) {
  const t = Ta.get(e),
    n = Ea.get(e),
    s = t.left - n.left,
    o = t.top - n.top
  if (s || o) {
    const i = e.el.style
    return (i.transform = i.webkitTransform = `translate(${s}px,${o}px)`), (i.transitionDuration = '0s'), e
  }
}
function hd(e, t, n) {
  const s = e.cloneNode()
  e._vtc &&
    e._vtc.forEach(r => {
      r.split(/\s+/).forEach(l => l && s.classList.remove(l))
    }),
    n.split(/\s+/).forEach(r => r && s.classList.add(r)),
    (s.style.display = 'none')
  const o = t.nodeType === 1 ? t : t.parentNode
  o.appendChild(s)
  const { hasTransform: i } = Pa(s)
  return o.removeChild(s), i
}
const Lt = e => {
  const t = e.props['onUpdate:modelValue'] || !1
  return X(t) ? n => un(t, n) : t
}
function pd(e) {
  e.target.composing = !0
}
function Cr(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const Jn = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
      e._assign = Lt(o)
      const i = s || (o.props && o.props.type === 'number')
      ft(e, t ? 'change' : 'input', r => {
        if (r.target.composing) return
        let l = e.value
        n && (l = l.trim()), i && (l = Is(l)), e._assign(l)
      }),
        n &&
          ft(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t || (ft(e, 'compositionstart', pd), ft(e, 'compositionend', Cr), ft(e, 'change', Cr))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, i) {
      if (
        ((e._assign = Lt(i)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== 'range' &&
            (n || (s && e.value.trim() === t) || ((o || e.type === 'number') && Is(e.value) === t))))
      )
        return
      const r = t ?? ''
      e.value !== r && (e.value = r)
    }
  },
  lo = {
    deep: !0,
    created(e, t, n) {
      ;(e._assign = Lt(n)),
        ft(e, 'change', () => {
          const s = e._modelValue,
            o = wn(e),
            i = e.checked,
            r = e._assign
          if (X(s)) {
            const l = qs(s, o),
              a = l !== -1
            if (i && !a) r(s.concat(o))
            else if (!i && a) {
              const c = [...s]
              c.splice(l, 1), r(c)
            }
          } else if (en(s)) {
            const l = new Set(s)
            i ? l.add(o) : l.delete(o), r(l)
          } else r(La(e, i))
        })
    },
    mounted: $r,
    beforeUpdate(e, t, n) {
      ;(e._assign = Lt(n)), $r(e, t, n)
    }
  }
function $r(e, { value: t, oldValue: n }, s) {
  ;(e._modelValue = t),
    X(t)
      ? (e.checked = qs(t, s.props.value) > -1)
      : en(t)
      ? (e.checked = t.has(s.props.value))
      : t !== n && (e.checked = Tt(t, La(e, !0)))
}
const Vi = {
    created(e, { value: t }, n) {
      ;(e.checked = Tt(t, n.props.value)),
        (e._assign = Lt(n)),
        ft(e, 'change', () => {
          e._assign(wn(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      ;(e._assign = Lt(s)), t !== n && (e.checked = Tt(t, s.props.value))
    }
  },
  Ia = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, s) {
      const o = en(t)
      ft(e, 'change', () => {
        const i = Array.prototype.filter.call(e.options, r => r.selected).map(r => (n ? Is(wn(r)) : wn(r)))
        e._assign(e.multiple ? (o ? new Set(i) : i) : i[0])
      }),
        (e._assign = Lt(s))
    },
    mounted(e, { value: t }) {
      Pr(e, t)
    },
    beforeUpdate(e, t, n) {
      e._assign = Lt(n)
    },
    updated(e, { value: t }) {
      Pr(e, t)
    }
  }
function Pr(e, t) {
  const n = e.multiple
  if (!(n && !X(t) && !en(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const i = e.options[s],
        r = wn(i)
      if (n) X(t) ? (i.selected = qs(t, r) > -1) : (i.selected = t.has(r))
      else if (Tt(wn(i), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s)
        return
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
  }
}
function wn(e) {
  return '_value' in e ? e._value : e.value
}
function La(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const Ma = {
  created(e, t, n) {
    Cs(e, t, n, null, 'created')
  },
  mounted(e, t, n) {
    Cs(e, t, n, null, 'mounted')
  },
  beforeUpdate(e, t, n, s) {
    Cs(e, t, n, s, 'beforeUpdate')
  },
  updated(e, t, n, s) {
    Cs(e, t, n, s, 'updated')
  }
}
function Ba(e, t) {
  switch (e) {
    case 'SELECT':
      return Ia
    case 'TEXTAREA':
      return Jn
    default:
      switch (t) {
        case 'checkbox':
          return lo
        case 'radio':
          return Vi
        default:
          return Jn
      }
  }
}
function Cs(e, t, n, s, o) {
  const r = Ba(e.tagName, n.props && n.props.type)[o]
  r && r(e, t, n, s)
}
function _d() {
  ;(Jn.getSSRProps = ({ value: e }) => ({ value: e })),
    (Vi.getSSRProps = ({ value: e }, t) => {
      if (t.props && Tt(t.props.value, e)) return { checked: !0 }
    }),
    (lo.getSSRProps = ({ value: e }, t) => {
      if (X(e)) {
        if (t.props && qs(e, t.props.value) > -1) return { checked: !0 }
      } else if (en(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 }
      } else if (e) return { checked: !0 }
    }),
    (Ma.getSSRProps = (e, t) => {
      if (typeof t.type != 'string') return
      const n = Ba(t.type.toUpperCase(), t.props && t.props.type)
      if (n.getSSRProps) return n.getSSRProps(e, t)
    })
}
const md = ['ctrl', 'shift', 'alt', 'meta'],
  vd = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, t) => md.some(n => e[`${n}Key`] && !t.includes(n))
  },
  ao =
    (e, t) =>
    (n, ...s) => {
      for (let o = 0; o < t.length; o++) {
        const i = vd[t[o]]
        if (i && i(n, t)) return
      }
      return e(n, ...s)
    },
  gd = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  yd = (e, t) => n => {
    if (!('key' in n)) return
    const s = Xe(n.key)
    if (t.some(o => o === s || gd[o] === s)) return e(n)
  },
  Qn = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e._vod = e.style.display === 'none' ? '' : e.style.display), n && t ? n.beforeEnter(e) : An(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), An(e, !0), s.enter(e))
            : s.leave(e, () => {
                An(e, !1)
              })
          : An(e, t))
    },
    beforeUnmount(e, { value: t }) {
      An(e, t)
    }
  }
function An(e, t) {
  e.style.display = t ? e._vod : 'none'
}
function bd() {
  Qn.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: 'none' } }
  }
}
const Na = we({ patchProp: ed }, Df)
let Hn,
  Sr = !1
function Oa() {
  return Hn || (Hn = na(Na))
}
function Fa() {
  return (Hn = Sr ? Hn : sa(Na)), (Sr = !0), Hn
}
const Yo = (...e) => {
    Oa().render(...e)
  },
  Ra = (...e) => {
    Fa().hydrate(...e)
  },
  Ha = (...e) => {
    const t = Oa().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = s => {
        const o = za(s)
        if (!o) return
        const i = t._component
        !oe(i) && !i.render && !i.template && (i.template = o.innerHTML), (o.innerHTML = '')
        const r = n(o, !1, o instanceof SVGElement)
        return o instanceof Element && (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')), r
      }),
      t
    )
  },
  Da = (...e) => {
    const t = Fa().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = s => {
        const o = za(s)
        if (o) return n(o, !0, o instanceof SVGElement)
      }),
      t
    )
  }
function za(e) {
  return ye(e) ? document.querySelector(e) : e
}
let Tr = !1
const xd = () => {
    Tr || ((Tr = !0), _d(), bd())
  },
  wd = () => {},
  n2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BaseTransition: ki,
        Comment: Ee,
        EffectScope: ci,
        Fragment: se,
        KeepAlive: qu,
        ReactiveEffect: ss,
        Static: Yt,
        Suspense: Nu,
        Teleport: ia,
        Text: Gt,
        Transition: St,
        TransitionGroup: Aa,
        VueElement: ro,
        assertNumber: Cu,
        callWithAsyncErrorHandling: We,
        callWithErrorHandling: dt,
        camelize: He,
        capitalize: ns,
        cloneVNode: lt,
        compatUtils: Rf,
        compile: wd,
        computed: F,
        createApp: Ha,
        createBlock: ne,
        createCommentVNode: G,
        createElementBlock: E,
        createElementVNode: $,
        createHydrationRenderer: sa,
        createPropsRestProxy: If,
        createRenderer: na,
        createSSRApp: Da,
        createSlots: Ju,
        createStaticVNode: fa,
        createTextVNode: Ce,
        createVNode: w,
        customRef: yu,
        defineAsyncComponent: ju,
        defineComponent: z,
        defineCustomElement: ka,
        defineEmits: Sf,
        defineExpose: Tf,
        defineProps: Pf,
        defineSSRCustomElement: nd,
        get devtools() {
          return ln
        },
        effect: Hc,
        effectScope: Oc,
        getCurrentInstance: mt,
        getCurrentScope: ui,
        getTransitionRawChildren: no,
        guardReactiveProps: ua,
        h: xn,
        handleError: tn,
        hydrate: Ra,
        initCustomFormatter: Mf,
        initDirectivesForSSR: xd,
        inject: Le,
        isMemoSame: xa,
        isProxy: hi,
        isReactive: qt,
        isReadonly: Jt,
        isRef: Pe,
        isRuntimeOnly: kf,
        isShallow: jn,
        isVNode: At,
        markRaw: fn,
        mergeDefaults: Af,
        mergeProps: Xt,
        nextTick: nn,
        normalizeClass: fe,
        normalizeProps: $c,
        normalizeStyle: es,
        onActivated: Fl,
        onBeforeMount: Dl,
        onBeforeUnmount: as,
        onBeforeUpdate: zl,
        onDeactivated: Rl,
        onErrorCaptured: ql,
        onMounted: Ve,
        onRenderTracked: Kl,
        onRenderTriggered: jl,
        onScopeDispose: dl,
        onServerPrefetch: Ul,
        onUnmounted: Mt,
        onUpdated: Tn,
        openBlock: b,
        popScopeId: tt,
        provide: rt,
        proxyRefs: mi,
        pushScopeId: et,
        queuePostFlushCb: gi,
        reactive: Sn,
        readonly: os,
        ref: K,
        registerRuntimeCompiler: wf,
        render: Yo,
        renderList: $e,
        renderSlot: M,
        resolveComponent: _t,
        resolveDirective: Xu,
        resolveDynamicComponent: yn,
        resolveFilter: Ff,
        resolveTransitionHooks: vn,
        setBlockTracking: Do,
        setDevtoolsHook: Il,
        setTransitionHooks: Qt,
        shallowReactive: $l,
        shallowReadonly: pu,
        shallowRef: Pl,
        ssrContextKey: ya,
        ssrUtils: Of,
        stop: Dc,
        toDisplayString: le,
        toHandlerKey: Nn,
        toHandlers: Qu,
        toRaw: ce,
        toRef: Oe,
        toRefs: is,
        transformVNodeArgs: vf,
        triggerRef: mu,
        unref: k,
        useAttrs: Vf,
        useCssModule: od,
        useCssVars: id,
        useSSRContext: ba,
        useSlots: va,
        useTransitionState: wi,
        vModelCheckbox: lo,
        vModelDynamic: Ma,
        vModelRadio: Vi,
        vModelSelect: Ia,
        vModelText: Jn,
        vShow: Qn,
        version: wa,
        warn: ku,
        watch: Ne,
        watchEffect: Vt,
        watchPostEffect: xi,
        watchSyncEffect: Du,
        withAsyncContext: Lf,
        withCtx: D,
        withDefaults: Ef,
        withDirectives: gn,
        withKeys: yd,
        withMemo: Bf,
        withModifiers: ao,
        withScopeId: Vu
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Y = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, o] of t) n[s] = o
    return n
  },
  kd = 'modulepreload',
  Cd = function (e) {
    return '/mini-vv-ui/' + e
  },
  Er = {},
  Ua = function (t, n, s) {
    if (!n || n.length === 0) return t()
    const o = document.getElementsByTagName('link')
    return Promise.all(
      n.map(i => {
        if (((i = Cd(i)), i in Er)) return
        Er[i] = !0
        const r = i.endsWith('.css'),
          l = r ? '[rel="stylesheet"]' : ''
        if (!!s)
          for (let u = o.length - 1; u >= 0; u--) {
            const f = o[u]
            if (f.href === i && (!r || f.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${i}"]${l}`)) return
        const c = document.createElement('link')
        if (
          ((c.rel = r ? 'stylesheet' : kd),
          r || ((c.as = 'script'), (c.crossOrigin = '')),
          (c.href = i),
          document.head.appendChild(c),
          r)
        )
          return new Promise((u, f) => {
            c.addEventListener('load', u),
              c.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${i}`)))
          })
      })
    ).then(() => t())
  }
const $d = z({
  __name: 'VPBadge',
  props: { text: null, type: null },
  setup(e) {
    return (t, n) => (
      b(),
      E(
        'span',
        { class: fe(['VPBadge', e.type ?? 'tip']) },
        [M(t.$slots, 'default', {}, () => [Ce(le(e.text), 1)], !0)],
        2
      )
    )
  }
})
const Pd = Y($d, [['__scopeId', 'data-v-350d3852']]),
  Sd = JSON.parse(
    '{"lang":"zh-CN","dir":"ltr","title":"mini-vv-ui","description":"A VitePress Site","base":"/mini-vv-ui/","head":[],"appearance":true,"themeConfig":{"logo":"/electron.ico","outline":"deep","outlineTitle":"On this page","sidebar":{"/guide/":[{"text":"开始使用","collapsible":true,"collapsed":false,"items":[{"text":"指南","link":"/guide/"},{"text":"快速开始","link":"/guide/quickly-started"}]},{"text":"组件","collapsible":true,"collapsed":false,"items":[{"text":"组件预览","link":"/components/"}]}],"/components/":[{"text":"通用","collapsible":true,"collapsed":false,"items":[{"text":"按钮","link":"/components/button/"},{"text":"图标","link":"/components/icon/"},{"text":"间距","link":"/components/space/"},{"text":"复选框","link":"/components/checkbox/"},{"text":"链接","link":"/components/link/"},{"text":"页签","link":"/components/tab/"},{"text":"滑块","link":"/components/slider/"}]},{"text":"导航","collapsible":true,"collapsed":false,"items":[]},{"text":"反馈","collapsible":true,"collapsed":false,"items":[{"text":"feedback","link":""}]},{"text":"数据录入","collapsible":true,"collapsed":false,"items":[{"text":"输入框","link":"/components/input/"}]},{"text":"数据展示","collapsible":true,"collapsed":false,"items":[{"text":"树","link":"/components/tree/"}]}]},"smoothScroll":true,"nav":[{"text":"导航","link":"/guide/","activeMatch":"/guide/"},{"text":"组件","link":"/components/","activeMatch":"/components/"},{"text":"友情链接","items":[{"text":"gitee","link":"https://gitee.com/lucky-zhaofang"}]}],"socialLinks":[{"icon":{"svg":"<svg t=\\"1675837057998\\" class=\\"icon\\" viewBox=\\"0 0 1024 1024\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\" p-id=\\"1407\\" width=\\"200\\" height=\\"200\\"><path d=\\"M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z\\" fill=\\"#C71D23\\" p-id=\\"1408\\"></path></svg>"},"link":"https://gitee.com/lucky-zhaofang"}],"algolia":{"apiKey":"<API_KEY>","indexName":"<INDEX_NAME>","appId":"<APP_ID>","placeholder":"关键字搜索","disableUserPersonalization":false,"buttonText":"搜索"},"docFooter":{"prev":"上一页","next":"下一页"},"footer":{"message":"Released under the MIT License.","copyright":"Copyright © 2023-present lucky zhaofang"}},"locales":{},"scrollOffset":90,"cleanUrls":false}'
  ),
  co = /^[a-z]+:/i,
  Td = /^pathname:\/\//,
  Vr = 'vitepress-theme-appearance',
  ja = /#.*$/,
  Ed = /(index)?\.(md|html)$/,
  Ae = typeof document < 'u',
  Ka = {
    relativePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0
  }
function sn(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = Ar(`/${e}`)), n)) return new RegExp(t).test(e)
  if (Ar(t) !== e) return !1
  const s = t.match(ja)
  return s ? (Ae ? location.hash : '') === s[0] : !0
}
function Ar(e) {
  return decodeURI(e).replace(ja, '').replace(Ed, '')
}
function qa(e) {
  return co.test(e)
}
function Vd(e, t) {
  var s, o, i, r, l, a, c
  const n = Object.keys(e.locales).find(u => u !== 'root' && !qa(u) && sn(t, `/${u}/`, !0)) || 'root'
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((o = e.locales[n]) == null ? void 0 : o.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate: ((r = e.locales[n]) == null ? void 0 : r.titleTemplate) ?? e.titleTemplate,
    description: ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: Ya(e.head, ((a = e.locales[n]) == null ? void 0 : a.head) ?? []),
    themeConfig: { ...e.themeConfig, ...((c = e.locales[n]) == null ? void 0 : c.themeConfig) }
  })
}
function Wa(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title')) return s.replace(/:title/g, n)
  const o = Ad(e.title, s)
  return `${n}${o}`
}
function Ad(e, t) {
  return t === !1 ? '' : t === !0 || t === void 0 ? ` | ${e}` : e === t ? '' : ` | ${t}`
}
function Id(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const o = Object.entries(s)[0]
  return o == null ? !1 : e.some(([i, r]) => i === n && r[o[0]] === o[1])
}
function Ya(e, t) {
  return [...e.filter(n => !Id(t, n)), ...t]
}
const Ld = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  Md = /^[a-z]:/i
function Ir(e) {
  const t = Md.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(Ld, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const Xa = Symbol(),
  Ct = Pl(Sd)
function Bd(e) {
  const t = F(() => Vd(Ct.value, e.data.relativePath))
  return {
    site: t,
    theme: F(() => t.value.themeConfig),
    page: F(() => e.data),
    frontmatter: F(() => e.data.frontmatter),
    lang: F(() => t.value.lang),
    dir: F(() => t.value.dir),
    localeIndex: F(() => t.value.localeIndex || 'root'),
    title: F(() => Wa(t.value, e.data)),
    description: F(() => e.data.description || t.value.description),
    isDark: K(!1)
  }
}
function uo() {
  const e = Le(Xa)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function Nd(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function kn(e) {
  return co.test(e) || e.startsWith('.') ? e : Nd(Ct.value.base, e)
}
function Ja(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), Ae)) {
    const n = '/mini-vv-ui/'
    t = Ir(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
    let s = __VP_HASH_MAP__[t.toLowerCase()]
    s ||
      ((t = t.endsWith('_index.md') ? t.slice(0, -9) + '.md' : t.slice(0, -3) + '_index.md'),
      (s = __VP_HASH_MAP__[t.toLowerCase()])),
      (t = `${n}assets/${t}.${s}.js`)
  } else t = `./${Ir(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
const Qa = Symbol(),
  Lr = 'http://a.com',
  Od = () => ({ path: '/', component: null, data: Ka })
function Fd(e, t) {
  const n = Sn(Od()),
    s = { route: n, go: o }
  async function o(l = Ae ? location.href : '/') {
    var c, u
    await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))
    const a = new URL(l, Lr)
    Ct.value.cleanUrls ||
      (!a.pathname.endsWith('/') &&
        !a.pathname.endsWith('.html') &&
        ((a.pathname += '.html'), (l = a.pathname + a.search + a.hash))),
      Ae &&
        l !== location.href &&
        (history.replaceState({ scrollPosition: window.scrollY }, document.title), history.pushState(null, '', l)),
      await r(l),
      await ((u = s.onAfterRouteChanged) == null ? void 0 : u.call(s, l))
  }
  let i = null
  async function r(l, a = 0, c = !1) {
    const u = new URL(l, Lr),
      f = (i = u.pathname)
    try {
      let h = await e(f)
      if (i === f) {
        i = null
        const { default: d, __pageData: m } = h
        if (!d) throw new Error(`Invalid route component: ${d}`)
        ;(n.path = Ae ? f : kn(f)),
          (n.component = fn(d)),
          (n.data = fn(m)),
          Ae &&
            nn(() => {
              let x = Ct.value.base + m.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!Ct.value.cleanUrls && !x.endsWith('/') && (x += '.html'),
                x !== u.pathname && ((u.pathname = x), (l = x + u.search + u.hash), history.replaceState(null, '', l)),
                u.hash && !a)
              ) {
                let S = null
                try {
                  S = document.querySelector(decodeURIComponent(u.hash))
                } catch (v) {
                  console.warn(v)
                }
                if (S) {
                  Mr(S, u.hash)
                  return
                }
              }
              window.scrollTo(0, a)
            })
      }
    } catch (h) {
      if ((!/fetch/.test(h.message) && !/^\/404(\.html|\/)?$/.test(l) && console.error(h), !c))
        try {
          const d = await fetch(Ct.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await d.json()), await r(l, a, !0)
          return
        } catch {}
      i === f && ((i = null), (n.path = Ae ? f : kn(f)), (n.component = t ? fn(t) : null), (n.data = Ka))
    }
  }
  return (
    Ae &&
      (window.addEventListener(
        'click',
        l => {
          if (l.target.closest('button')) return
          const c = l.target.closest('a')
          if (c && !c.closest('.vp-raw') && (c instanceof SVGElement || !c.download)) {
            const { target: u } = c,
              {
                href: f,
                origin: h,
                pathname: d,
                hash: m,
                search: x
              } = new URL(c.href instanceof SVGAnimatedString ? c.href.animVal : c.href, c.baseURI),
              S = window.location,
              v = d.match(/\.\w+$/)
            !l.ctrlKey &&
              !l.shiftKey &&
              !l.altKey &&
              !l.metaKey &&
              u !== '_blank' &&
              h === S.origin &&
              !(v && v[0] !== '.html') &&
              (l.preventDefault(),
              d === S.pathname && x === S.search
                ? m &&
                  m !== S.hash &&
                  (history.pushState(null, '', m),
                  window.dispatchEvent(new Event('hashchange')),
                  Mr(c, m, c.classList.contains('header-anchor')))
                : o(f))
          }
        },
        { capture: !0 }
      ),
      window.addEventListener('popstate', l => {
        r(location.href, (l.state && l.state.scrollPosition) || 0)
      }),
      window.addEventListener('hashchange', l => {
        l.preventDefault()
      })),
    s
  )
}
function Rd() {
  const e = Le(Qa)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function vt() {
  return Rd().route
}
function Mr(e, t, n = !1) {
  let s = null
  try {
    s = e.classList.contains('header-anchor') ? e : document.querySelector(decodeURIComponent(t))
  } catch (o) {
    console.warn(o)
  }
  if (s) {
    let o = Ct.value.scrollOffset
    typeof o == 'string' && (o = document.querySelector(o).getBoundingClientRect().bottom + 24)
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      r = window.scrollY + s.getBoundingClientRect().top - o + i
    !n || Math.abs(r - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, r)
      : window.scrollTo({ left: 0, top: r, behavior: 'smooth' })
  }
}
const Hd = z({
    name: 'VitePressContent',
    props: { onContentUpdated: Function },
    setup(e) {
      const t = vt()
      return (
        Tn(() => {
          var n
          ;(n = e.onContentUpdated) == null || n.call(e)
        }),
        () => xn('div', { style: { position: 'relative' } }, [t.component ? xn(t.component) : null])
      )
    }
  }),
  de = uo
var Br
const fo = typeof window < 'u',
  Dd = e => typeof e == 'string',
  Xo = () => {}
fo &&
  (Br = window == null ? void 0 : window.navigator) != null &&
  Br.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent)
function cs(e) {
  return typeof e == 'function' ? e() : k(e)
}
function zd(e, t) {
  function n(...s) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }))
        .then(o)
        .catch(i)
    })
  }
  return n
}
function Ud(e, t = !0, n = !0, s = !1) {
  let o = 0,
    i,
    r = !0,
    l = Xo,
    a
  const c = () => {
    i && (clearTimeout(i), (i = void 0), l(), (l = Xo))
  }
  return f => {
    const h = cs(e),
      d = Date.now() - o,
      m = () => (a = f())
    return (
      c(),
      h <= 0
        ? ((o = Date.now()), m())
        : (d > h && (n || !r)
            ? ((o = Date.now()), m())
            : t &&
              (a = new Promise((x, S) => {
                ;(l = s ? S : x),
                  (i = setTimeout(() => {
                    ;(o = Date.now()), (r = !0), x(m()), c()
                  }, Math.max(0, h - d)))
              })),
          !n && !i && (i = setTimeout(() => (r = !0), h)),
          (r = !1),
          a)
    )
  }
}
function jd(e) {
  return e
}
function Ai(e) {
  return ui() ? (dl(e), !0) : !1
}
function Kd(e, t = 200, n = !1, s = !0, o = !1) {
  return zd(Ud(t, n, s, o), e)
}
function qd(e) {
  return typeof e == 'function' ? F(e) : K(e)
}
function Wd(e, t = !0) {
  mt() ? Ve(e) : t ? e() : nn(e)
}
function Yd(e, t, n = {}) {
  const { immediate: s = !0 } = n,
    o = K(!1)
  let i = null
  function r() {
    i && (clearTimeout(i), (i = null))
  }
  function l() {
    ;(o.value = !1), r()
  }
  function a(...c) {
    r(),
      (o.value = !0),
      (i = setTimeout(() => {
        ;(o.value = !1), (i = null), e(...c)
      }, cs(t)))
  }
  return s && ((o.value = !0), fo && a()), Ai(l), { isPending: os(o), start: a, stop: l }
}
function Xd(e) {
  var t
  const n = cs(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Ii = fo ? window : void 0,
  Jd = fo ? window.navigator : void 0
function Ga(...e) {
  let t, n, s, o
  if ((Dd(e[0]) || Array.isArray(e[0]) ? (([n, s, o] = e), (t = Ii)) : ([t, n, s, o] = e), !t)) return Xo
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s])
  const i = [],
    r = () => {
      i.forEach(u => u()), (i.length = 0)
    },
    l = (u, f, h, d) => (u.addEventListener(f, h, d), () => u.removeEventListener(f, h, d)),
    a = Ne(
      () => [Xd(t), cs(o)],
      ([u, f]) => {
        r(), u && i.push(...n.flatMap(h => s.map(d => l(u, h, d, f))))
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => {
      a(), r()
    }
  return Ai(c), c
}
function Za(e, t = !1) {
  const n = K(),
    s = () => (n.value = Boolean(e()))
  return s(), Wd(s, t), n
}
function Jo(e, t = {}) {
  const { window: n = Ii } = t,
    s = Za(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
  let o
  const i = K(!1),
    r = () => {
      o && ('removeEventListener' in o ? o.removeEventListener('change', l) : o.removeListener(l))
    },
    l = () => {
      s.value &&
        (r(),
        (o = n.matchMedia(qd(e).value)),
        (i.value = o.matches),
        'addEventListener' in o ? o.addEventListener('change', l) : o.addListener(l))
    }
  return Vt(l), Ai(() => r()), i
}
function Qd(e = {}) {
  const { navigator: t = Jd, read: n = !1, source: s, copiedDuring: o = 1500, legacy: i = !1 } = e,
    r = ['copy', 'cut'],
    l = Za(() => t && 'clipboard' in t),
    a = F(() => l.value || i),
    c = K(''),
    u = K(!1),
    f = Yd(() => (u.value = !1), o)
  function h() {
    l.value
      ? t.clipboard.readText().then(S => {
          c.value = S
        })
      : (c.value = x())
  }
  if (a.value && n) for (const S of r) Ga(S, h)
  async function d(S = cs(s)) {
    a.value && S != null && (l.value ? await t.clipboard.writeText(S) : m(S), (c.value = S), (u.value = !0), f.start())
  }
  function m(S) {
    const v = document.createElement('textarea')
    ;(v.value = S ?? ''),
      (v.style.position = 'absolute'),
      (v.style.opacity = '0'),
      document.body.appendChild(v),
      v.select(),
      document.execCommand('copy'),
      v.remove()
  }
  function x() {
    var S, v, p
    return (p =
      (v = (S = document == null ? void 0 : document.getSelection) == null ? void 0 : S.call(document)) == null
        ? void 0
        : v.toString()) != null
      ? p
      : ''
  }
  return { isSupported: a, text: c, copied: u, copy: d }
}
const Qo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  Go = '__vueuse_ssr_handlers__'
Qo[Go] = Qo[Go] || {}
Qo[Go]
var Nr
;(function (e) {
  ;(e.UP = 'UP'), (e.RIGHT = 'RIGHT'), (e.DOWN = 'DOWN'), (e.LEFT = 'LEFT'), (e.NONE = 'NONE')
})(Nr || (Nr = {}))
var Gd = Object.defineProperty,
  Or = Object.getOwnPropertySymbols,
  Zd = Object.prototype.hasOwnProperty,
  eh = Object.prototype.propertyIsEnumerable,
  Fr = (e, t, n) => (t in e ? Gd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
  th = (e, t) => {
    for (var n in t || (t = {})) Zd.call(t, n) && Fr(e, n, t[n])
    if (Or) for (var n of Or(t)) eh.call(t, n) && Fr(e, n, t[n])
    return e
  }
const nh = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
}
th({ linear: jd }, nh)
function sh({ window: e = Ii } = {}) {
  if (!e) return { x: K(0), y: K(0) }
  const t = K(e.scrollX),
    n = K(e.scrollY)
  return (
    Ga(
      e,
      'scroll',
      () => {
        ;(t.value = e.scrollX), (n.value = e.scrollY)
      },
      { capture: !1, passive: !0 }
    ),
    { x: t, y: n }
  )
}
function oh(e, t) {
  let n,
    s = !1
  return () => {
    n && clearTimeout(n),
      s
        ? (n = setTimeout(e, t))
        : (e(),
          (s = !0),
          setTimeout(() => {
            s = !1
          }, t))
  }
}
function Zo(e) {
  return /^\//.test(e) ? e : `/${e}`
}
function Gn(e) {
  if (qa(e)) return e.replace(Td, '')
  const { site: t } = de(),
    { pathname: n, search: s, hash: o } = new URL(e, 'http://example.com'),
    i =
      n.endsWith('/') || n.endsWith('.html')
        ? e
        : e.replace(/(?:(^\.+)\/)?.*$/, `$1${n.replace(/(\.md)?$/, t.value.cleanUrls ? '' : '.html')}${s}${o}`)
  return kn(i)
}
function ec(e, t) {
  if (Array.isArray(e)) return e
  if (e == null) return []
  t = Zo(t)
  const n = Object.keys(e)
    .sort((s, o) => o.split('/').length - s.split('/').length)
    .find(s => t.startsWith(Zo(s)))
  return n ? e[n] : []
}
function ih(e) {
  const t = []
  let n = 0
  for (const s in e) {
    const o = e[s]
    if (o.items) {
      n = t.push(o)
      continue
    }
    t[n] || t.push({ items: [] }), t[n].items.push(o)
  }
  return t
}
function rh(e) {
  const t = []
  function n(s) {
    for (const o of s) o.text && o.link && t.push({ text: o.text, link: o.link }), o.items && n(o.items)
  }
  return n(e), t
}
function ei(e, t) {
  return Array.isArray(t) ? t.some(n => ei(e, n)) : sn(e, t.link) ? !0 : t.items ? ei(e, t.items) : !1
}
function gt() {
  const e = vt(),
    { theme: t, frontmatter: n } = de(),
    s = Jo('(min-width: 960px)'),
    o = K(!1),
    i = F(() => {
      const d = t.value.sidebar,
        m = e.data.relativePath
      return d ? ec(d, m) : []
    }),
    r = F(() => n.value.sidebar !== !1 && i.value.length > 0 && n.value.layout !== 'home'),
    l = F(() => (n.value.layout === 'home' ? !1 : n.value.aside != null ? !!n.value.aside : t.value.aside !== !1)),
    a = F(() => r.value && s.value),
    c = F(() => (r.value ? ih(i.value) : []))
  function u() {
    o.value = !0
  }
  function f() {
    o.value = !1
  }
  function h() {
    o.value ? f() : u()
  }
  return {
    isOpen: o,
    sidebar: i,
    sidebarGroups: c,
    hasSidebar: r,
    hasAside: l,
    isSidebarEnabled: a,
    open: u,
    close: f,
    toggle: h
  }
}
function lh(e, t) {
  let n
  Vt(() => {
    n = e.value ? document.activeElement : void 0
  }),
    Ve(() => {
      window.addEventListener('keyup', s)
    }),
    Mt(() => {
      window.removeEventListener('keyup', s)
    })
  function s(o) {
    o.key === 'Escape' && e.value && (t(), n == null || n.focus())
  }
}
function ah(e) {
  const { page: t } = de(),
    n = K(!1),
    s = F(() => e.value.collapsed != null),
    o = F(() => !!e.value.link),
    i = F(() => sn(t.value.relativePath, e.value.link)),
    r = F(() => (i.value ? !0 : e.value.items ? ei(t.value.relativePath, e.value.items) : !1)),
    l = F(() => !!(e.value.items && e.value.items.length))
  Vt(() => {
    n.value = !!(s.value && e.value.collapsed)
  }),
    Vt(() => {
      ;(i.value || r.value) && (n.value = !1)
    })
  function a() {
    s.value && (n.value = !n.value)
  }
  return { collapsed: n, collapsible: s, isLink: o, isActiveLink: i, hasActiveLink: r, hasChildren: l, toggle: a }
}
const ch = z({
  __name: 'VPSkipLink',
  setup(e) {
    const t = vt(),
      n = K()
    Ne(
      () => t.path,
      () => n.value.focus()
    )
    function s({ target: o }) {
      const i = document.querySelector(o.hash)
      if (i) {
        const r = () => {
          i.removeAttribute('tabindex'), i.removeEventListener('blur', r)
        }
        i.setAttribute('tabindex', '-1'), i.addEventListener('blur', r), i.focus(), window.scrollTo(0, 0)
      }
    }
    return (o, i) => (
      b(),
      E(
        se,
        null,
        [
          $('span', { ref_key: 'backToTop', ref: n, tabindex: '-1' }, null, 512),
          $('a', { href: '#VPContent', class: 'VPSkipLink visually-hidden', onClick: s }, ' Skip to content ')
        ],
        64
      )
    )
  }
})
const uh = Y(ch, [['__scopeId', 'data-v-151f2593']]),
  fh = { key: 0, class: 'VPBackdrop' },
  dh = z({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(e) {
      return (t, n) => (
        b(), ne(St, { name: 'fade' }, { default: D(() => [e.show ? (b(), E('div', fh)) : G('', !0)]), _: 1 })
      )
    }
  })
const hh = Y(dh, [['__scopeId', 'data-v-c79a1216']])
function ph() {
  const e = K(!1)
  function t() {
    ;(e.value = !0), window.addEventListener('resize', o)
  }
  function n() {
    ;(e.value = !1), window.removeEventListener('resize', o)
  }
  function s() {
    e.value ? n() : t()
  }
  function o() {
    window.outerWidth >= 768 && n()
  }
  const i = vt()
  return Ne(() => i.path, n), { isScreenOpen: e, openScreen: t, closeScreen: n, toggleScreen: s }
}
function us({ removeCurrent: e = !0, correspondingLink: t = !1 } = {}) {
  const { site: n, localeIndex: s, page: o, theme: i } = de(),
    r = F(() => {
      var a, c
      return {
        label: (a = n.value.locales[s.value]) == null ? void 0 : a.label,
        link: ((c = n.value.locales[s.value]) == null ? void 0 : c.link) || (s.value === 'root' ? '/' : `/${s.value}/`)
      }
    })
  return {
    localeLinks: F(() =>
      Object.entries(n.value.locales).flatMap(([a, c]) =>
        e && r.value.label === c.label
          ? []
          : {
              text: c.label,
              link: _h(
                c.link || (a === 'root' ? '/' : `/${a}/`),
                i.value.i18nRouting !== !1 && t,
                o.value.relativePath.slice(r.value.link.length - 1),
                !n.value.cleanUrls
              )
            }
      )
    ),
    currentLang: r
  }
}
function _h(e, t, n, s) {
  return t ? e.replace(/\/$/, '') + Zo(n.replace(/(^|\/)?index.md$/, '$1').replace(/\.md$/, s ? '.html' : '')) : e
}
const mh = ['src', 'alt'],
  vh = { inheritAttrs: !1 },
  gh = z({
    ...vh,
    __name: 'VPImage',
    props: { image: null, alt: null },
    setup(e) {
      return (t, n) => {
        const s = _t('VPImage', !0)
        return e.image
          ? (b(),
            E(
              se,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (b(),
                    E(
                      'img',
                      Xt(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string' ? t.$attrs : { ...e.image, ...t.$attrs },
                        {
                          src: k(kn)(typeof e.image == 'string' ? e.image : e.image.src),
                          alt: e.alt ?? (typeof e.image == 'string' ? '' : e.image.alt || '')
                        }
                      ),
                      null,
                      16,
                      mh
                    ))
                  : (b(),
                    E(
                      se,
                      { key: 1 },
                      [
                        w(s, Xt({ class: 'dark', image: e.image.dark, alt: e.image.alt }, t.$attrs), null, 16, [
                          'image',
                          'alt'
                        ]),
                        w(s, Xt({ class: 'light', image: e.image.light, alt: e.image.alt }, t.$attrs), null, 16, [
                          'image',
                          'alt'
                        ])
                      ],
                      64
                    ))
              ],
              64
            ))
          : G('', !0)
      }
    }
  })
const Li = Y(gh, [['__scopeId', 'data-v-6db2186b']]),
  yh = ['href'],
  bh = z({
    __name: 'VPNavBarTitle',
    setup(e) {
      const { site: t, theme: n } = de(),
        { hasSidebar: s } = gt(),
        { currentLang: o } = us()
      return (i, r) => (
        b(),
        E(
          'div',
          { class: fe(['VPNavBarTitle', { 'has-sidebar': k(s) }]) },
          [
            $(
              'a',
              { class: 'title', href: k(Gn)(k(o).link) },
              [
                M(i.$slots, 'nav-bar-title-before', {}, void 0, !0),
                k(n).logo ? (b(), ne(Li, { key: 0, class: 'logo', image: k(n).logo }, null, 8, ['image'])) : G('', !0),
                k(n).siteTitle
                  ? (b(), E(se, { key: 1 }, [Ce(le(k(n).siteTitle), 1)], 64))
                  : k(n).siteTitle === void 0
                  ? (b(), E(se, { key: 2 }, [Ce(le(k(t).title), 1)], 64))
                  : G('', !0),
                M(i.$slots, 'nav-bar-title-after', {}, void 0, !0)
              ],
              8,
              yh
            )
          ],
          2
        )
      )
    }
  })
const xh = Y(bh, [['__scopeId', 'data-v-6d2fb2d9']]),
  wh = '/mini-vv-ui/assets/flex-logo.2489261b.svg'
function $o(e, t) {
  return typeof e > 'u' ? t : e
}
function Rr(e) {
  const t = Array(e)
  for (let n = 0; n < e; n++) t[n] = De()
  return t
}
function kh(e) {
  return Object.keys(e)
}
function De() {
  return Object.create(null)
}
function Ch(e) {
  return [].concat.apply([], e)
}
function $h(e, t) {
  return t.length - e.length
}
function Ph(e) {
  return e.constructor === Array
}
function Rs(e) {
  return typeof e == 'string'
}
function ti(e) {
  return typeof e == 'object'
}
function Sh(e) {
  return typeof e == 'function'
}
function Th(e, t, n, s) {
  if (
    e &&
    (t && (e = Po(e, t)),
    this.matcher && (e = Po(e, this.matcher)),
    this.stemmer && 1 < e.length && (e = Po(e, this.stemmer)),
    s && 1 < e.length && (e = Ah(e)),
    n || n === '')
  ) {
    const o = e.split(n)
    return this.filter ? Ih(o, this.filter) : o
  }
  return e
}
const Eh = /[\p{Z}\p{S}\p{P}\p{C}]+/u
function Vh(e) {
  const t = De()
  for (let n = 0, s = e.length; n < s; n++) t[e[n]] = 1
  return t
}
function Hr(e, t) {
  const n = kh(e),
    s = n.length,
    o = []
  let i = '',
    r = 0
  for (let l, a, c = 0; c < s; c++)
    (l = n[c]),
      (a = e[l]),
      a ? ((o[r++] = Dr(t ? '(?!\\b)' + l + '(\\b|_)' : l)), (o[r++] = a)) : (i += (i ? '|' : '') + l)
  return i && ((o[r++] = Dr(t ? '(?!\\b)(' + i + ')(\\b|_)' : '(' + i + ')')), (o[r] = '')), o
}
function Po(e, t) {
  for (let n = 0, s = t.length; n < s && ((e = e.replace(t[n], t[n + 1])), !!e); n += 2);
  return e
}
function Dr(e) {
  return new RegExp(e, 'g')
}
function Ah(e) {
  let t = '',
    n = ''
  for (let s, o = 0, i = e.length; o < i; o++) (s = e[o]) !== n && (t += n = s)
  return t
}
function Ih(e, t) {
  const n = e.length,
    s = []
  for (let o = 0, i = 0; o < n; o++) {
    const r = e[o]
    r && !t[r] && (s[i++] = r)
  }
  return s
}
function Lh(e) {
  return Th.call(this, ('' + e).toLowerCase(), !1, Eh, !1)
}
const Mh = {},
  Bh = {}
function Nh(e) {
  In(e, 'add'), In(e, 'append'), In(e, 'search'), In(e, 'update'), In(e, 'remove')
}
function In(e, t) {
  e[t + 'Async'] = function () {
    const n = this,
      s = arguments,
      o = s[s.length - 1]
    let i
    Sh(o) && ((i = o), delete s[s.length - 1])
    const r = new Promise(function (l) {
      setTimeout(function () {
        n.async = !0
        const a = n[t].apply(n, s)
        ;(n.async = !1), l(a)
      })
    })
    return i ? (r.then(i), this) : r
  }
}
function Oh(e, t, n, s) {
  const o = e.length
  let i,
    r,
    l = [],
    a = 0
  s && (s = [])
  for (let c = o - 1; 0 <= c; c--) {
    const u = e[c],
      f = u.length,
      h = De()
    let d = !i
    for (let m = 0; m < f; m++) {
      const x = u[m],
        S = x.length
      if (S)
        for (let v, p, g = 0; g < S; g++)
          if (((p = x[g]), i)) {
            if (i[p]) {
              if (!c) {
                if (n) n--
                else if (((l[a++] = p), a === t)) return l
              }
              ;(c || s) && (h[p] = 1), (d = !0)
            }
            if (s && ((r[p] = (v = r[p]) ? ++v : (v = 1)), v < o)) {
              const P = s[v - 2] || (s[v - 2] = [])
              P[P.length] = p
            }
          } else h[p] = 1
    }
    if (s) i || (r = h)
    else if (!d) return []
    i = h
  }
  if (s)
    for (let c, u, f = s.length - 1; 0 <= f; f--) {
      ;(c = s[f]), (u = c.length)
      for (let h, d = 0; d < u; d++)
        if (((h = c[d]), !i[h])) {
          if (n) n--
          else if (((l[a++] = h), a === t)) return l
          i[h] = 1
        }
    }
  return l
}
function Vs(e) {
  ;(this.limit = e !== !0 && e), (this.cache = De()), (this.queue = [])
}
function Fh(e, t, n) {
  ti(e) && (e = e.query)
  let s = this.cache.get(e)
  return s || ((s = this.search(e, t, n)), this.cache.set(e, s)), s
}
;(Vs.prototype.set = function (e, t) {
  if (!this.cache[e]) {
    let n = this.queue.length
    n === this.limit ? delete this.cache[this.queue[n - 1]] : n++
    for (let s = n - 1; 0 < s; s--) this.queue[s] = this.queue[s - 1]
    this.queue[0] = e
  }
  this.cache[e] = t
}),
  (Vs.prototype.get = function (e) {
    const t = this.cache[e]
    if (this.limit && t) {
      const n = this.queue.indexOf(e)
      if (n) {
        const s = this.queue[n - 1]
        ;(this.queue[n - 1] = this.queue[n]), (this.queue[n] = s)
      }
    }
    return t
  }),
  (Vs.prototype.del = function (e) {
    for (let t, n, s = 0; s < this.queue.length; s++)
      (n = this.queue[s]), (t = this.cache[n]), t.indexOf(e) !== -1 && (this.queue.splice(s--, 1), delete this.cache[n])
  })
const Rh = {
  memory: { charset: 'latin:extra', resolution: 3, minlength: 4, fastupdate: !1 },
  performance: { resolution: 3, minlength: 3, optimize: !1, context: { depth: 2, resolution: 1 } },
  match: { charset: 'latin:extra', tokenize: 'reverse' },
  score: { charset: 'latin:advanced', resolution: 20, minlength: 3, context: { depth: 3, resolution: 9 } },
  default: {}
}
function Hh(e) {
  if (Rs(e)) e = Rh[e]
  else {
    const t = e.preset
    t && (e = Object.assign({}, t[t], e))
  }
  return e
}
function Dh(e, t, n, s, o, i) {
  setTimeout(function () {
    const r = e(n, JSON.stringify(i))
    r && r.then
      ? r.then(function () {
          t.export(e, t, n, s, o + 1)
        })
      : t.export(e, t, n, s, o + 1)
  })
}
function zh(e, t, n, s, o) {
  let i, r
  switch (o || (o = 0)) {
    case 0:
      if (((i = 'reg'), this.fastupdate)) for (let l in ((r = De()), this.register)) r[l] = 1
      else r = this.register
      break
    case 1:
      ;(i = 'cfg'), (r = { doc: 0, opt: this.optimize ? 1 : 0 })
      break
    case 2:
      ;(i = 'map'), (r = this.map)
      break
    case 3:
      ;(i = 'ctx'), (r = this.ctx)
      break
    default:
      return
  }
  return Dh(e, t || this, n ? n + '.' + i : i, s, o, r), !0
}
function Uh(e, t) {
  t &&
    (Rs(t) && (t = JSON.parse(t)),
    e === 'cfg'
      ? (this.optimize = !!t.opt)
      : e === 'reg'
      ? ((this.fastupdate = !1), (this.register = t))
      : e === 'map'
      ? (this.map = t)
      : e === 'ctx' && (this.ctx = t))
}
function Be(e, t) {
  if (!(this instanceof Be)) return new Be(e)
  let n, s, o
  e
    ? ((e = Hh(e)),
      (n = e.charset),
      (s = e.lang),
      Rs(n) && (n.indexOf(':') === -1 && (n += ':default'), (n = Bh[n])),
      Rs(s) && (s = Mh[s]))
    : (e = {})
  let i,
    r,
    l = e.context || {}
  ;(this.encode = e.encode || (n && n.encode) || Lh),
    (this.register = t || De()),
    (this.resolution = i = e.resolution || 9),
    (this.tokenize = o = (n && n.tokenize) || e.tokenize || 'strict'),
    (this.depth = o === 'strict' && l.depth),
    (this.bidirectional = $o(l.bidirectional, !0)),
    (this.optimize = r = $o(e.optimize, !0)),
    (this.fastupdate = $o(e.fastupdate, !0)),
    (this.minlength = e.minlength || 1),
    (this.boost = e.boost),
    (this.map = r ? Rr(i) : De()),
    (this.resolution_ctx = i = l.resolution || 1),
    (this.ctx = r ? Rr(i) : De()),
    (this.rtl = (n && n.rtl) || e.rtl),
    (this.matcher = (o = e.matcher || (s && s.matcher)) && Hr(o, !1)),
    (this.stemmer = (o = e.stemmer || (s && s.stemmer)) && Hr(o, !0)),
    (this.filter = (o = e.filter || (s && s.filter)) && Vh(o)),
    (this.cache = (o = e.cache) && new Vs(o))
}
;(Be.prototype.append = function (e, t) {
  return this.add(e, t, !0)
}),
  (Be.prototype.add = function (e, t, n, s) {
    if (t && (e || e === 0)) {
      if (!s && !n && this.register[e]) return this.update(e, t)
      t = this.encode(t)
      const o = t.length
      if (o) {
        const i = De(),
          r = De(),
          l = this.depth,
          a = this.resolution
        for (let c = 0; c < o; c++) {
          let u = t[this.rtl ? o - 1 - c : c],
            f = u.length
          if (u && f >= this.minlength && (l || !r[u])) {
            let h = $s(a, o, c),
              d = ''
            switch (this.tokenize) {
              case 'full':
                if (3 < f) {
                  for (let m = 0; m < f; m++)
                    for (let x = f; x > m; x--)
                      if (x - m >= this.minlength) {
                        const S = $s(a, o, c, f, m)
                        ;(d = u.substring(m, x)), this.push_index(r, d, S, e, n)
                      }
                  break
                }
              case 'reverse':
                if (2 < f) {
                  for (let m = f - 1; 0 < m; m--)
                    if (((d = u[m] + d), d.length >= this.minlength)) {
                      const x = $s(a, o, c, f, m)
                      this.push_index(r, d, x, e, n)
                    }
                  d = ''
                }
              case 'forward':
                if (1 < f) {
                  for (let m = 0; m < f; m++) (d += u[m]), d.length >= this.minlength && this.push_index(r, d, h, e, n)
                  break
                }
              default:
                if (
                  (this.boost && (h = Math.min(0 | (h / this.boost(t, u, c)), a - 1)),
                  this.push_index(r, u, h, e, n),
                  l && 1 < o && c < o - 1)
                ) {
                  const m = De(),
                    x = this.resolution_ctx,
                    S = u,
                    v = Math.min(l + 1, o - c)
                  m[S] = 1
                  for (let p = 1; p < v; p++)
                    if (((u = t[this.rtl ? o - 1 - c - p : c + p]), u && u.length >= this.minlength && !m[u])) {
                      m[u] = 1
                      const g = $s(x + (o / 2 > x ? 0 : 1), o, c, v - 1, p - 1),
                        P = this.bidirectional && u > S
                      this.push_index(i, P ? S : u, g, e, n, P ? u : S)
                    }
                }
            }
          }
        }
        this.fastupdate || (this.register[e] = 1)
      }
    }
    return this
  })
function $s(e, t, n, s, o) {
  return n && 1 < e ? (t + (s || 0) <= e ? n + (o || 0) : 0 | (((e - 1) / (t + (s || 0))) * (n + (o || 0)) + 1)) : 0
}
;(Be.prototype.push_index = function (e, t, n, s, o, i) {
  let r = i ? this.ctx : this.map
  if (
    (!e[t] || (i && !e[t][i])) &&
    (this.optimize && (r = r[n]),
    i ? ((e = e[t] || (e[t] = De())), (e[i] = 1), (r = r[i] || (r[i] = De()))) : (e[t] = 1),
    (r = r[t] || (r[t] = [])),
    this.optimize || (r = r[n] || (r[n] = [])),
    (!o || r.indexOf(s) === -1) && ((r[r.length] = s), this.fastupdate))
  ) {
    const l = this.register[s] || (this.register[s] = [])
    l[l.length] = r
  }
}),
  (Be.prototype.search = function (e, t, n) {
    n || (!t && ti(e) ? ((n = e), (e = n.query)) : ti(t) && (n = t))
    let s,
      o,
      i,
      r = [],
      l = 0
    if (
      (n && ((t = n.limit), (l = n.offset || 0), (o = n.context), (i = n.suggest)),
      e && ((e = this.encode(e)), (s = e.length), 1 < s))
    ) {
      const f = De(),
        h = []
      for (let d, m = 0, x = 0; m < s; m++)
        if (((d = e[m]), d && d.length >= this.minlength && !f[d])) {
          if (!this.optimize && !i && !this.map[d]) return r
          ;(h[x++] = d), (f[d] = 1)
        }
      ;(e = h), (s = e.length)
    }
    if (!s) return r
    t || (t = 100)
    let a,
      c = this.depth && 1 < s && o !== !1,
      u = 0
    c ? ((a = e[0]), (u = 1)) : 1 < s && e.sort($h)
    for (let f, h; u < s; u++) {
      if (
        ((h = e[u]),
        c
          ? ((f = this.add_result(r, i, t, l, s === 2, h, a)), (!i || f !== !1 || !r.length) && (a = h))
          : (f = this.add_result(r, i, t, l, s === 1, h)),
        f)
      )
        return f
      if (i && u == s - 1) {
        let d = r.length
        if (!d) {
          if (c) {
            ;(c = 0), (u = -1)
            continue
          }
          return r
        }
        if (d === 1) return zr(r[0], t, l)
      }
    }
    return Oh(r, t, l, i)
  }),
  (Be.prototype.add_result = function (e, t, n, s, o, i, r) {
    let l = [],
      a = r ? this.ctx : this.map
    if ((this.optimize || (a = Ur(a, i, r, this.bidirectional)), a)) {
      let c = 0
      const u = Math.min(a.length, r ? this.resolution_ctx : this.resolution)
      for (
        let f, h, d = 0, m = 0;
        d < u &&
        ((f = a[d]),
        !(
          f &&
          (this.optimize && (f = Ur(f, i, r, this.bidirectional)),
          s && f && o && ((h = f.length), h <= s ? ((s -= h), (f = null)) : ((f = f.slice(s)), (s = 0))),
          f && ((l[c++] = f), o && ((m += f.length), m >= n)))
        ));
        d++
      );
      if (c) return o ? zr(l, n, 0) : void (e[e.length] = l)
    }
    return !t && l
  })
function zr(e, t, n) {
  return (e = e.length === 1 ? e[0] : Ch(e)), n || e.length > t ? e.slice(n, n + t) : e
}
function Ur(e, t, n, s) {
  if (n) {
    const o = s && t > n
    ;(e = e[o ? t : n]), (e = e && e[o ? n : t])
  } else e = e[t]
  return e
}
;(Be.prototype.contain = function (e) {
  return !!this.register[e]
}),
  (Be.prototype.update = function (e, t) {
    return this.remove(e).add(e, t)
  }),
  (Be.prototype.remove = function (e, t) {
    const n = this.register[e]
    if (n) {
      if (this.fastupdate) for (let s, o = 0; o < n.length; o++) (s = n[o]), s.splice(s.indexOf(e), 1)
      else
        Hs(this.map, e, this.resolution, this.optimize),
          this.depth && Hs(this.ctx, e, this.resolution_ctx, this.optimize)
      t || delete this.register[e], this.cache && this.cache.del(e)
    }
    return this
  })
function Hs(e, t, n, s, o) {
  let i = 0
  if (Ph(e))
    if (o) {
      const r = e.indexOf(t)
      r === -1 ? i++ : 1 < e.length && (e.splice(r, 1), i++)
    } else {
      o = Math.min(e.length, n)
      for (let r, l = 0; l < o; l++) (r = e[l]), r && ((i = Hs(r, t, n, s, o)), !s && !i && delete e[l])
    }
  else for (let r in e) (i = Hs(e[r], t, n, s, o)), i || delete e[r]
  return i
}
;(Be.prototype.searchCache = Fh), (Be.prototype.export = zh), (Be.prototype.import = Uh), Nh(Be.prototype)
const jh = { class: 'VPNavBarSearch' },
  Kh = { class: 'DocSearch-Form' },
  qh = $(
    'label',
    { class: 'DocSearch-MagnifierLabel', for: 'docsearch-input', id: 'docsearch-label' },
    [
      $('svg', { width: '20', height: '20', class: 'DocSearch-Search-Icon', viewBox: '0 0 20 20' }, [
        $('path', {
          d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
          stroke: 'currentColor',
          fill: 'none',
          'fill-rule': 'evenodd',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        })
      ])
    ],
    -1
  ),
  Wh = ['placeholder'],
  Yh = { class: 'search-list' },
  Xh = { class: 'search-group' },
  Jh = ['href'],
  Qh = { class: 'search-item' },
  Gh = { class: 'search-item-icon' },
  Zh = { style: { width: '100%' } },
  ep = ['innerHTML'],
  tp = $('span', { class: 'search-item-icon' }, '↪', -1),
  np = $('img', { class: 'flex-logo', src: wh, alt: 'flex logo' }, null, -1),
  sp = { type: 'button', class: 'DocSearch DocSearch-Button', 'aria-label': 'Search' },
  op = { class: 'DocSearch-Button-Container' },
  ip = $(
    'svg',
    { width: '20', height: '20', class: 'DocSearch-Search-Icon', viewBox: '0 0 20 20' },
    [
      $('path', {
        d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
        stroke: 'currentColor',
        fill: 'none',
        'fill-rule': 'evenodd',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      })
    ],
    -1
  ),
  rp = { class: 'DocSearch-Button-Placeholder' },
  lp = { class: 'DocSearch-Button-Keys' },
  ap = $('span', { class: 'DocSearch-Button-Key' }, 'K', -1),
  cp = z({
    __name: 'Search',
    setup(e) {
      const t = uo(),
        n = t.localeIndex || t.localePath,
        s = K(),
        o = K(!1),
        i = K(),
        r = K(''),
        l = K(),
        a = K(),
        c = K(),
        u = K(),
        f = K(),
        h = K('Search'),
        d = K('Search docs'),
        m = F(() => {
          if (i.value) {
            for (var p = f.value.search(i.value, { enrich: !0 }), g = [], P = 0; P < p.length; P++) {
              var V = p[P],
                N = c.value[V],
                R = N.t,
                C = N.p,
                j = N.l,
                W = N.a
              ;(j = j.split(' ').join('-')), g.push({ id: P, link: j, title: R, preview: C, anchor: W })
            }
            return g
          }
        }),
        x = (p, g) => (!p || !p.length ? [] : p.reduce((P, V) => (P[g(V)] || (P[g(V)] = []), P[g(V)].push(V), P), {})),
        S = () => {
          setTimeout(() => {
            l.value && l.value.focus()
          }, 100),
            v(),
            (o.value = !0)
        }
      Ve(async () => {
        var V, N
        const p = await Ua(() => import('./chunks/virtual_search-data.05ad76fe.js'), [])
        ;(a.value = p.default.INDEX_DATA),
          (c.value = p.default.PREVIEW_LOOKUP),
          (u.value = p.default.Options),
          (r.value = window.location.origin + kn(n.value === 'root' ? '/' : n.value)),
          (h.value = ((V = u.value) == null ? void 0 : V.buttonLabel) || h.value),
          (d.value = ((N = u.value) == null ? void 0 : N.placeholder) || d.value)
        var g = new Be(u.value)
        g.import('reg', a.value.reg),
          g.import('cfg', a.value.cfg),
          g.import('map', a.value.map),
          g.import('ctx', a.value.ctx),
          (f.value = g),
          (s.value.innerHTML = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl')
        const P = R => {
          R.key === 'k' && (R.ctrlKey || R.metaKey) && (R.preventDefault(), S())
        }
        window.addEventListener('keydown', P)
      })
      function v() {
        ;(o.value = !1), (i.value = '')
      }
      return (p, g) => {
        const P = _t('ClientOnly')
        return (
          b(),
          E('div', jh, [
            w(P, null, {
              default: D(() => [
                (b(),
                ne(ia, { to: 'body' }, [
                  gn(
                    $(
                      'div',
                      { class: 'modal-back', onClick: g[2] || (g[2] = V => (o.value = !1)) },
                      [
                        $('div', { class: 'modal', onClick: g[1] || (g[1] = ao(() => {}, ['stop'])) }, [
                          $('form', Kh, [
                            qh,
                            gn(
                              $(
                                'input',
                                {
                                  class: 'DocSearch-Input',
                                  'aria-autocomplete': 'both',
                                  'aria-labelledby': 'docsearch-label',
                                  id: 'docsearch-input',
                                  autocomplete: 'off',
                                  autocorrect: 'off',
                                  autocapitalize: 'off',
                                  enterkeyhint: 'search',
                                  spellcheck: 'false',
                                  autofocus: 'true',
                                  'onUpdate:modelValue': g[0] || (g[0] = V => (i.value = V)),
                                  placeholder: d.value,
                                  maxlength: '64',
                                  type: 'search',
                                  ref_key: 'input',
                                  ref: l
                                },
                                null,
                                8,
                                Wh
                              ),
                              [[Jn, i.value]]
                            )
                          ]),
                          $('div', Yh, [
                            (b(!0),
                            E(
                              se,
                              null,
                              $e(
                                x(k(m), V => V.link.split('/').slice(0, -1).join('-')),
                                (V, N) => (
                                  b(),
                                  E('div', { key: N }, [
                                    $(
                                      'span',
                                      Xh,
                                      le(N ? N.toString()[0].toUpperCase() + N.toString().slice(1) : 'Home'),
                                      1
                                    ),
                                    (b(!0),
                                    E(
                                      se,
                                      null,
                                      $e(
                                        V,
                                        R => (
                                          b(),
                                          E(
                                            'a',
                                            { href: r.value + R.link, key: R.id, onClick: v },
                                            [
                                              $('div', Qh, [
                                                $('span', Gh, le(R.link.includes('#') ? '#' : '▤'), 1),
                                                $('div', Zh, [
                                                  $('h3', null, le(R.title), 1),
                                                  $('p', null, [$('div', { innerHTML: R.preview }, null, 8, ep)])
                                                ]),
                                                tp
                                              ])
                                            ],
                                            8,
                                            Jh
                                          )
                                        )
                                      ),
                                      128
                                    ))
                                  ])
                                )
                              ),
                              128
                            ))
                          ]),
                          np
                        ])
                      ],
                      512
                    ),
                    [[Qn, o.value]]
                  )
                ]))
              ]),
              _: 1
            }),
            $('div', { id: 'docsearch', onClick: g[3] || (g[3] = V => S()) }, [
              $('button', sp, [
                $('span', op, [ip, $('span', rp, le(h.value), 1)]),
                $('span', lp, [
                  $('span', { class: 'DocSearch-Button-Key', ref_key: 'metaKey', ref: s }, 'Meta', 512),
                  ap
                ])
              ])
            ])
          ])
        )
      }
    }
  })
const up = {},
  fp = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px'
  },
  dp = $('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }, null, -1),
  hp = $('path', { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' }, null, -1),
  pp = [dp, hp]
function _p(e, t) {
  return b(), E('svg', fp, pp)
}
const mp = Y(up, [['render', _p]]),
  vp = z({
    __name: 'VPLink',
    props: { tag: null, href: null, noIcon: { type: Boolean }, target: null, rel: null },
    setup(e) {
      const t = e,
        n = F(() => (t.tag ?? t.href ? 'a' : 'span')),
        s = F(() => t.href && co.test(t.href))
      return (o, i) => (
        b(),
        ne(
          yn(k(n)),
          {
            class: fe(['VPLink', { link: e.href }]),
            href: e.href ? k(Gn)(e.href) : void 0,
            target: e.target || (k(s) ? '_blank' : void 0),
            rel: e.rel || (k(s) ? 'noreferrer' : void 0)
          },
          {
            default: D(() => [
              M(o.$slots, 'default', {}, void 0, !0),
              k(s) && !e.noIcon ? (b(), ne(mp, { key: 0, class: 'icon' })) : G('', !0)
            ]),
            _: 3
          },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    }
  })
const Bt = Y(vp, [['__scopeId', 'data-v-a8b5c975']]),
  gp = z({
    __name: 'VPNavBarMenuLink',
    props: { item: null },
    setup(e) {
      const { page: t } = de()
      return (n, s) => (
        b(),
        ne(
          Bt,
          {
            class: fe({
              VPNavBarMenuLink: !0,
              active: k(sn)(k(t).relativePath, e.item.activeMatch || e.item.link, !!e.item.activeMatch)
            }),
            href: e.item.link,
            target: e.item.target,
            rel: e.item.rel
          },
          { default: D(() => [Ce(le(e.item.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    }
  })
const yp = Y(gp, [['__scopeId', 'data-v-f2ec7ecf']]),
  Mi = K()
let tc = !1,
  So = 0
function bp(e) {
  const t = K(!1)
  if (Ae) {
    !tc && xp(), So++
    const n = Ne(Mi, s => {
      var o, i, r
      s === e.el.value || ((o = e.el.value) != null && o.contains(s))
        ? ((t.value = !0), (i = e.onFocus) == null || i.call(e))
        : ((t.value = !1), (r = e.onBlur) == null || r.call(e))
    })
    Mt(() => {
      n(), So--, So || wp()
    })
  }
  return os(t)
}
function xp() {
  document.addEventListener('focusin', nc), (tc = !0), (Mi.value = document.activeElement)
}
function wp() {
  document.removeEventListener('focusin', nc)
}
function nc() {
  Mi.value = document.activeElement
}
const kp = {},
  Cp = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  $p = $(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z'
    },
    null,
    -1
  ),
  Pp = [$p]
function Sp(e, t) {
  return b(), E('svg', Cp, Pp)
}
const sc = Y(kp, [['render', Sp]]),
  Tp = {},
  Ep = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Vp = $('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  Ap = $('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  Ip = $('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  Lp = [Vp, Ap, Ip]
function Mp(e, t) {
  return b(), E('svg', Ep, Lp)
}
const Bp = Y(Tp, [['render', Mp]]),
  Np = { class: 'VPMenuLink' },
  Op = z({
    __name: 'VPMenuLink',
    props: { item: null },
    setup(e) {
      const { page: t } = de()
      return (n, s) => (
        b(),
        E('div', Np, [
          w(
            Bt,
            {
              class: fe({ active: k(sn)(k(t).relativePath, e.item.activeMatch || e.item.link, !!e.item.activeMatch) }),
              href: e.item.link,
              target: e.item.target,
              rel: e.item.rel
            },
            { default: D(() => [Ce(le(e.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel']
          )
        ])
      )
    }
  })
const ho = Y(Op, [['__scopeId', 'data-v-88f937c6']]),
  Fp = { class: 'VPMenuGroup' },
  Rp = { key: 0, class: 'title' },
  Hp = z({
    __name: 'VPMenuGroup',
    props: { text: null, items: null },
    setup(e) {
      return (t, n) => (
        b(),
        E('div', Fp, [
          e.text ? (b(), E('p', Rp, le(e.text), 1)) : G('', !0),
          (b(!0),
          E(
            se,
            null,
            $e(
              e.items,
              s => (
                b(), E(se, null, ['link' in s ? (b(), ne(ho, { key: 0, item: s }, null, 8, ['item'])) : G('', !0)], 64)
              )
            ),
            256
          ))
        ])
      )
    }
  })
const Dp = Y(Hp, [['__scopeId', 'data-v-b66affaf']]),
  zp = { class: 'VPMenu' },
  Up = { key: 0, class: 'items' },
  jp = z({
    __name: 'VPMenu',
    props: { items: null },
    setup(e) {
      return (t, n) => (
        b(),
        E('div', zp, [
          e.items
            ? (b(),
              E('div', Up, [
                (b(!0),
                E(
                  se,
                  null,
                  $e(
                    e.items,
                    s => (
                      b(),
                      E(
                        se,
                        { key: s.text },
                        [
                          'link' in s
                            ? (b(), ne(ho, { key: 0, item: s }, null, 8, ['item']))
                            : (b(), ne(Dp, { key: 1, text: s.text, items: s.items }, null, 8, ['text', 'items']))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ]))
            : G('', !0),
          M(t.$slots, 'default', {}, void 0, !0)
        ])
      )
    }
  })
const Kp = Y(jp, [['__scopeId', 'data-v-e7ea1737']]),
  qp = ['aria-expanded', 'aria-label'],
  Wp = { key: 0, class: 'text' },
  Yp = { class: 'menu' },
  Xp = z({
    __name: 'VPFlyout',
    props: { icon: null, button: null, label: null, items: null },
    setup(e) {
      const t = K(!1),
        n = K()
      bp({ el: n, onBlur: s })
      function s() {
        t.value = !1
      }
      return (o, i) => (
        b(),
        E(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: n,
            onMouseenter: i[1] || (i[1] = r => (t.value = !0)),
            onMouseleave: i[2] || (i[2] = r => (t.value = !1))
          },
          [
            $(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': t.value,
                'aria-label': e.label,
                onClick: i[0] || (i[0] = r => (t.value = !t.value))
              },
              [
                e.button || e.icon
                  ? (b(),
                    E('span', Wp, [
                      e.icon ? (b(), ne(yn(e.icon), { key: 0, class: 'option-icon' })) : G('', !0),
                      Ce(' ' + le(e.button) + ' ', 1),
                      w(sc, { class: 'text-icon' })
                    ]))
                  : (b(), ne(Bp, { key: 1, class: 'icon' }))
              ],
              8,
              qp
            ),
            $('div', Yp, [
              w(Kp, { items: e.items }, { default: D(() => [M(o.$slots, 'default', {}, void 0, !0)]), _: 3 }, 8, [
                'items'
              ])
            ])
          ],
          544
        )
      )
    }
  })
const Bi = Y(Xp, [['__scopeId', 'data-v-96001b6b']]),
  Jp = z({
    __name: 'VPNavBarMenuGroup',
    props: { item: null },
    setup(e) {
      const { page: t } = de()
      return (n, s) => (
        b(),
        ne(
          Bi,
          {
            class: fe({
              VPNavBarMenuGroup: !0,
              active: k(sn)(k(t).relativePath, e.item.activeMatch, !!e.item.activeMatch)
            }),
            button: e.item.text,
            items: e.item.items
          },
          null,
          8,
          ['class', 'button', 'items']
        )
      )
    }
  }),
  Qp = e => (et('data-v-bdedfc22'), (e = e()), tt(), e),
  Gp = { key: 0, 'aria-labelledby': 'main-nav-aria-label', class: 'VPNavBarMenu' },
  Zp = Qp(() => $('span', { id: 'main-nav-aria-label', class: 'visually-hidden' }, 'Main Navigation', -1)),
  e1 = z({
    __name: 'VPNavBarMenu',
    setup(e) {
      const { theme: t } = de()
      return (n, s) =>
        k(t).nav
          ? (b(),
            E('nav', Gp, [
              Zp,
              (b(!0),
              E(
                se,
                null,
                $e(
                  k(t).nav,
                  o => (
                    b(),
                    E(
                      se,
                      { key: o.text },
                      [
                        'link' in o
                          ? (b(), ne(yp, { key: 0, item: o }, null, 8, ['item']))
                          : (b(), ne(Jp, { key: 1, item: o }, null, 8, ['item']))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : G('', !0)
    }
  })
const t1 = Y(e1, [['__scopeId', 'data-v-bdedfc22']]),
  n1 = {},
  s1 = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  o1 = $('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  i1 = $(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v'
    },
    null,
    -1
  ),
  r1 = [o1, i1]
function l1(e, t) {
  return b(), E('svg', s1, r1)
}
const oc = Y(n1, [['render', l1]]),
  a1 = { class: 'items' },
  c1 = { class: 'title' },
  u1 = z({
    __name: 'VPNavBarTranslations',
    setup(e) {
      const { localeLinks: t, currentLang: n } = us({ correspondingLink: !0 })
      return (s, o) =>
        k(t).length && k(n).label
          ? (b(),
            ne(
              Bi,
              { key: 0, class: 'VPNavBarTranslations', icon: oc },
              {
                default: D(() => [
                  $('div', a1, [
                    $('p', c1, le(k(n).label), 1),
                    (b(!0),
                    E(
                      se,
                      null,
                      $e(k(t), i => (b(), ne(ho, { key: i.link, item: i }, null, 8, ['item']))),
                      128
                    ))
                  ])
                ]),
                _: 1
              }
            ))
          : G('', !0)
    }
  })
const f1 = Y(u1, [['__scopeId', 'data-v-fdaf79b7']])
const d1 = {},
  h1 = { class: 'VPSwitch', type: 'button', role: 'switch' },
  p1 = { class: 'check' },
  _1 = { key: 0, class: 'icon' }
function m1(e, t) {
  return (
    b(),
    E('button', h1, [
      $('span', p1, [e.$slots.default ? (b(), E('span', _1, [M(e.$slots, 'default', {}, void 0, !0)])) : G('', !0)])
    ])
  )
}
const v1 = Y(d1, [
    ['render', m1],
    ['__scopeId', 'data-v-f3c41672']
  ]),
  g1 = {},
  y1 = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  b1 = fa(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9
  ),
  x1 = [b1]
function w1(e, t) {
  return b(), E('svg', y1, x1)
}
const k1 = Y(g1, [['render', w1]]),
  C1 = {},
  $1 = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  P1 = $(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z'
    },
    null,
    -1
  ),
  S1 = [P1]
function T1(e, t) {
  return b(), E('svg', $1, S1)
}
const E1 = Y(C1, [['render', T1]]),
  V1 = z({
    __name: 'VPSwitchAppearance',
    setup(e) {
      const { site: t, isDark: n } = de(),
        s = K(!1),
        o = typeof localStorage < 'u' ? i() : () => {}
      Ve(() => {
        s.value = document.documentElement.classList.contains('dark')
      })
      function i() {
        const r = window.matchMedia('(prefers-color-scheme: dark)'),
          l = document.documentElement.classList
        let a = localStorage.getItem(Vr),
          c = (t.value.appearance === 'dark' && a == null) || (a === 'auto' || a == null ? r.matches : a === 'dark')
        r.onchange = h => {
          a === 'auto' && f((c = h.matches))
        }
        function u() {
          f((c = !c)),
            (a = c ? (r.matches ? 'auto' : 'dark') : r.matches ? 'light' : 'auto'),
            localStorage.setItem(Vr, a)
        }
        function f(h) {
          const d = document.createElement('style')
          ;(d.type = 'text/css'),
            d.appendChild(
              document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`)
            ),
            document.head.appendChild(d),
            (s.value = h),
            l[h ? 'add' : 'remove']('dark'),
            window.getComputedStyle(d).opacity,
            document.head.removeChild(d)
        }
        return u
      }
      return (
        Ne(s, r => {
          n.value = r
        }),
        (r, l) => (
          b(),
          ne(
            v1,
            { class: 'VPSwitchAppearance', 'aria-label': 'toggle dark mode', 'aria-checked': s.value, onClick: k(o) },
            { default: D(() => [w(k1, { class: 'sun' }), w(E1, { class: 'moon' })]), _: 1 },
            8,
            ['aria-checked', 'onClick']
          )
        )
      )
    }
  })
const Ni = Y(V1, [['__scopeId', 'data-v-0d529b6d']]),
  A1 = { key: 0, class: 'VPNavBarAppearance' },
  I1 = z({
    __name: 'VPNavBarAppearance',
    setup(e) {
      const { site: t } = de()
      return (n, s) => (k(t).appearance ? (b(), E('div', A1, [w(Ni)])) : G('', !0))
    }
  })
const L1 = Y(I1, [['__scopeId', 'data-v-da3f667a']]),
  M1 = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
  },
  B1 = ['href', 'innerHTML'],
  N1 = z({
    __name: 'VPSocialLink',
    props: { icon: null, link: null },
    setup(e) {
      const t = e,
        n = F(() => (typeof t.icon == 'object' ? t.icon.svg : M1[t.icon]))
      return (s, o) => (
        b(),
        E('a', { class: 'VPSocialLink', href: e.link, target: '_blank', rel: 'noopener', innerHTML: k(n) }, null, 8, B1)
      )
    }
  })
const O1 = Y(N1, [['__scopeId', 'data-v-e57698f6']]),
  F1 = { class: 'VPSocialLinks' },
  R1 = z({
    __name: 'VPSocialLinks',
    props: { links: null },
    setup(e) {
      return (t, n) => (
        b(),
        E('div', F1, [
          (b(!0),
          E(
            se,
            null,
            $e(
              e.links,
              ({ link: s, icon: o }) => (b(), ne(O1, { key: s, icon: o, link: s }, null, 8, ['icon', 'link']))
            ),
            128
          ))
        ])
      )
    }
  })
const Oi = Y(R1, [['__scopeId', 'data-v-f6988cfb']]),
  H1 = z({
    __name: 'VPNavBarSocialLinks',
    setup(e) {
      const { theme: t } = de()
      return (n, s) =>
        k(t).socialLinks
          ? (b(), ne(Oi, { key: 0, class: 'VPNavBarSocialLinks', links: k(t).socialLinks }, null, 8, ['links']))
          : G('', !0)
    }
  })
const D1 = Y(H1, [['__scopeId', 'data-v-2ab2a029']]),
  z1 = { key: 0, class: 'group translations' },
  U1 = { class: 'trans-title' },
  j1 = { key: 1, class: 'group' },
  K1 = { class: 'item appearance' },
  q1 = { class: 'label' },
  W1 = { class: 'appearance-action' },
  Y1 = { key: 2, class: 'group' },
  X1 = { class: 'item social-links' },
  J1 = z({
    __name: 'VPNavBarExtra',
    setup(e) {
      const { site: t, theme: n } = de(),
        { localeLinks: s, currentLang: o } = us({ correspondingLink: !0 }),
        i = F(() => (s.value.length && o.value.label) || t.value.appearance || n.value.socialLinks)
      return (r, l) =>
        k(i)
          ? (b(),
            ne(
              Bi,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: D(() => [
                  k(s).length && k(o).label
                    ? (b(),
                      E('div', z1, [
                        $('p', U1, le(k(o).label), 1),
                        (b(!0),
                        E(
                          se,
                          null,
                          $e(k(s), a => (b(), ne(ho, { key: a.link, item: a }, null, 8, ['item']))),
                          128
                        ))
                      ]))
                    : G('', !0),
                  k(t).appearance
                    ? (b(),
                      E('div', j1, [
                        $('div', K1, [
                          $('p', q1, le(k(n).darkModeSwitchLabel || 'Appearance'), 1),
                          $('div', W1, [w(Ni)])
                        ])
                      ]))
                    : G('', !0),
                  k(n).socialLinks
                    ? (b(),
                      E('div', Y1, [
                        $('div', X1, [
                          w(Oi, { class: 'social-links-list', links: k(n).socialLinks }, null, 8, ['links'])
                        ])
                      ]))
                    : G('', !0)
                ]),
                _: 1
              }
            ))
          : G('', !0)
    }
  })
const Q1 = Y(J1, [['__scopeId', 'data-v-66bb1f24']]),
  G1 = e => (et('data-v-e5dd9c1c'), (e = e()), tt(), e),
  Z1 = ['aria-expanded'],
  e0 = G1(() =>
    $(
      'span',
      { class: 'container' },
      [$('span', { class: 'top' }), $('span', { class: 'middle' }), $('span', { class: 'bottom' })],
      -1
    )
  ),
  t0 = [e0],
  n0 = z({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(e) {
      return (t, n) => (
        b(),
        E(
          'button',
          {
            type: 'button',
            class: fe(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: n[0] || (n[0] = s => t.$emit('click'))
          },
          t0,
          10,
          Z1
        )
      )
    }
  })
const s0 = Y(n0, [['__scopeId', 'data-v-e5dd9c1c']]),
  o0 = e => (et('data-v-be450ad9'), (e = e()), tt(), e),
  i0 = { class: 'container' },
  r0 = { class: 'title' },
  l0 = { class: 'content' },
  a0 = o0(() => $('div', { class: 'curtain' }, null, -1)),
  c0 = { class: 'content-body' },
  u0 = z({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(e) {
      const { y: t } = sh(),
        { hasSidebar: n } = gt(),
        s = F(() => ({ 'has-sidebar': n.value, fill: t.value > 0 }))
      return (o, i) => (
        b(),
        E(
          'div',
          { class: fe(['VPNavBar', k(s)]) },
          [
            $('div', i0, [
              $('div', r0, [
                w(xh, null, {
                  'nav-bar-title-before': D(() => [M(o.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                  'nav-bar-title-after': D(() => [M(o.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                  _: 3
                })
              ]),
              $('div', l0, [
                a0,
                $('div', c0, [
                  M(o.$slots, 'nav-bar-content-before', {}, void 0, !0),
                  w(cp, { class: 'search' }),
                  w(t1, { class: 'menu' }),
                  w(f1, { class: 'translations' }),
                  w(L1, { class: 'appearance' }),
                  w(D1, { class: 'social-links' }),
                  w(Q1, { class: 'extra' }),
                  M(o.$slots, 'nav-bar-content-after', {}, void 0, !0),
                  w(
                    s0,
                    {
                      class: 'hamburger',
                      active: e.isScreenOpen,
                      onClick: i[0] || (i[0] = r => o.$emit('toggle-screen'))
                    },
                    null,
                    8,
                    ['active']
                  )
                ])
              ])
            ])
          ],
          2
        )
      )
    }
  })
const f0 = Y(u0, [['__scopeId', 'data-v-be450ad9']])
function d0(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
    return n
  } else return Array.from(e)
}
var Fi = !1
if (typeof window < 'u') {
  var jr = {
    get passive() {
      Fi = !0
    }
  }
  window.addEventListener('testPassive', null, jr), window.removeEventListener('testPassive', null, jr)
}
var Ds =
    typeof window < 'u' &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)),
  pn = [],
  zs = !1,
  Ri = -1,
  Dn = void 0,
  Ut = void 0,
  zn = void 0,
  ic = function (t) {
    return pn.some(function (n) {
      return !!(n.options.allowTouchMove && n.options.allowTouchMove(t))
    })
  },
  Us = function (t) {
    var n = t || window.event
    return ic(n.target) || n.touches.length > 1 ? !0 : (n.preventDefault && n.preventDefault(), !1)
  },
  h0 = function (t) {
    if (zn === void 0) {
      var n = !!t && t.reserveScrollBarGap === !0,
        s = window.innerWidth - document.documentElement.clientWidth
      if (n && s > 0) {
        var o = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10)
        ;(zn = document.body.style.paddingRight), (document.body.style.paddingRight = o + s + 'px')
      }
    }
    Dn === void 0 && ((Dn = document.body.style.overflow), (document.body.style.overflow = 'hidden'))
  },
  p0 = function () {
    zn !== void 0 && ((document.body.style.paddingRight = zn), (zn = void 0)),
      Dn !== void 0 && ((document.body.style.overflow = Dn), (Dn = void 0))
  },
  _0 = function () {
    return window.requestAnimationFrame(function () {
      if (Ut === void 0) {
        Ut = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left }
        var t = window,
          n = t.scrollY,
          s = t.scrollX,
          o = t.innerHeight
        ;(document.body.style.position = 'fixed'),
          (document.body.style.top = -n),
          (document.body.style.left = -s),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var i = o - window.innerHeight
              i && n >= o && (document.body.style.top = -(n + i))
            })
          }, 300)
      }
    })
  },
  m0 = function () {
    if (Ut !== void 0) {
      var t = -parseInt(document.body.style.top, 10),
        n = -parseInt(document.body.style.left, 10)
      ;(document.body.style.position = Ut.position),
        (document.body.style.top = Ut.top),
        (document.body.style.left = Ut.left),
        window.scrollTo(n, t),
        (Ut = void 0)
    }
  },
  v0 = function (t) {
    return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1
  },
  g0 = function (t, n) {
    var s = t.targetTouches[0].clientY - Ri
    return ic(t.target) ? !1 : (n && n.scrollTop === 0 && s > 0) || (v0(n) && s < 0) ? Us(t) : (t.stopPropagation(), !0)
  },
  rc = function (t, n) {
    if (!t) {
      console.error(
        'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
      )
      return
    }
    if (
      !pn.some(function (o) {
        return o.targetElement === t
      })
    ) {
      var s = { targetElement: t, options: n || {} }
      ;(pn = [].concat(d0(pn), [s])),
        Ds ? _0() : h0(n),
        Ds &&
          ((t.ontouchstart = function (o) {
            o.targetTouches.length === 1 && (Ri = o.targetTouches[0].clientY)
          }),
          (t.ontouchmove = function (o) {
            o.targetTouches.length === 1 && g0(o, t)
          }),
          zs || (document.addEventListener('touchmove', Us, Fi ? { passive: !1 } : void 0), (zs = !0)))
    }
  },
  lc = function () {
    Ds &&
      (pn.forEach(function (t) {
        ;(t.targetElement.ontouchstart = null), (t.targetElement.ontouchmove = null)
      }),
      zs && (document.removeEventListener('touchmove', Us, Fi ? { passive: !1 } : void 0), (zs = !1)),
      (Ri = -1)),
      Ds ? m0() : p0(),
      (pn = [])
  }
const y0 = z({
  __name: 'VPNavScreenMenuLink',
  props: { text: null, link: null },
  setup(e) {
    const t = Le('close-screen')
    return (n, s) => (
      b(),
      ne(
        Bt,
        { class: 'VPNavScreenMenuLink', href: e.link, onClick: k(t) },
        { default: D(() => [Ce(le(e.text), 1)]), _: 1 },
        8,
        ['href', 'onClick']
      )
    )
  }
})
const b0 = Y(y0, [['__scopeId', 'data-v-c328f34f']]),
  x0 = {},
  w0 = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  k0 = $(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z'
    },
    null,
    -1
  ),
  C0 = [k0]
function $0(e, t) {
  return b(), E('svg', w0, C0)
}
const P0 = Y(x0, [['render', $0]]),
  S0 = z({
    __name: 'VPNavScreenMenuGroupLink',
    props: { text: null, link: null },
    setup(e) {
      const t = Le('close-screen')
      return (n, s) => (
        b(),
        ne(
          Bt,
          { class: 'VPNavScreenMenuGroupLink', href: e.link, onClick: k(t) },
          { default: D(() => [Ce(le(e.text), 1)]), _: 1 },
          8,
          ['href', 'onClick']
        )
      )
    }
  })
const ac = Y(S0, [['__scopeId', 'data-v-3d20956d']]),
  T0 = { class: 'VPNavScreenMenuGroupSection' },
  E0 = { key: 0, class: 'title' },
  V0 = z({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: null, items: null },
    setup(e) {
      return (t, n) => (
        b(),
        E('div', T0, [
          e.text ? (b(), E('p', E0, le(e.text), 1)) : G('', !0),
          (b(!0),
          E(
            se,
            null,
            $e(e.items, s => (b(), ne(ac, { key: s.text, text: s.text, link: s.link }, null, 8, ['text', 'link']))),
            128
          ))
        ])
      )
    }
  })
const A0 = Y(V0, [['__scopeId', 'data-v-7478538b']]),
  I0 = ['aria-controls', 'aria-expanded'],
  L0 = { class: 'button-text' },
  M0 = ['id'],
  B0 = { key: 1, class: 'group' },
  N0 = z({
    __name: 'VPNavScreenMenuGroup',
    props: { text: null, items: null },
    setup(e) {
      const t = e,
        n = K(!1),
        s = F(() => `NavScreenGroup-${t.text.replace(' ', '-').toLowerCase()}`)
      function o() {
        n.value = !n.value
      }
      return (i, r) => (
        b(),
        E(
          'div',
          { class: fe(['VPNavScreenMenuGroup', { open: n.value }]) },
          [
            $(
              'button',
              { class: 'button', 'aria-controls': k(s), 'aria-expanded': n.value, onClick: o },
              [$('span', L0, le(e.text), 1), w(P0, { class: 'button-icon' })],
              8,
              I0
            ),
            $(
              'div',
              { id: k(s), class: 'items' },
              [
                (b(!0),
                E(
                  se,
                  null,
                  $e(
                    e.items,
                    l => (
                      b(),
                      E(
                        se,
                        { key: l.text },
                        [
                          'link' in l
                            ? (b(),
                              E('div', { key: l.text, class: 'item' }, [
                                w(ac, { text: l.text, link: l.link }, null, 8, ['text', 'link'])
                              ]))
                            : (b(), E('div', B0, [w(A0, { text: l.text, items: l.items }, null, 8, ['text', 'items'])]))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ],
              8,
              M0
            )
          ],
          2
        )
      )
    }
  })
const O0 = Y(N0, [['__scopeId', 'data-v-a9a19324']]),
  F0 = { key: 0, class: 'VPNavScreenMenu' },
  R0 = z({
    __name: 'VPNavScreenMenu',
    setup(e) {
      const { theme: t } = de()
      return (n, s) =>
        k(t).nav
          ? (b(),
            E('nav', F0, [
              (b(!0),
              E(
                se,
                null,
                $e(
                  k(t).nav,
                  o => (
                    b(),
                    E(
                      se,
                      { key: o.text },
                      [
                        'link' in o
                          ? (b(), ne(b0, { key: 0, text: o.text, link: o.link }, null, 8, ['text', 'link']))
                          : (b(), ne(O0, { key: 1, text: o.text || '', items: o.items }, null, 8, ['text', 'items']))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : G('', !0)
    }
  }),
  H0 = { key: 0, class: 'VPNavScreenAppearance' },
  D0 = { class: 'text' },
  z0 = z({
    __name: 'VPNavScreenAppearance',
    setup(e) {
      const { site: t, theme: n } = de()
      return (s, o) =>
        k(t).appearance
          ? (b(), E('div', H0, [$('p', D0, le(k(n).darkModeSwitchLabel || 'Appearance'), 1), w(Ni)]))
          : G('', !0)
    }
  })
const U0 = Y(z0, [['__scopeId', 'data-v-7e6603c2']]),
  j0 = { class: 'list' },
  K0 = z({
    __name: 'VPNavScreenTranslations',
    setup(e) {
      const { localeLinks: t, currentLang: n } = us({ correspondingLink: !0 }),
        s = K(!1)
      function o() {
        s.value = !s.value
      }
      return (i, r) =>
        k(t).length && k(n).label
          ? (b(),
            E(
              'div',
              { key: 0, class: fe(['VPNavScreenTranslations', { open: s.value }]) },
              [
                $('button', { class: 'title', onClick: o }, [
                  w(oc, { class: 'icon lang' }),
                  Ce(' ' + le(k(n).label) + ' ', 1),
                  w(sc, { class: 'icon chevron' })
                ]),
                $('ul', j0, [
                  (b(!0),
                  E(
                    se,
                    null,
                    $e(
                      k(t),
                      l => (
                        b(),
                        E('li', { key: l.link, class: 'item' }, [
                          w(
                            Bt,
                            { class: 'link', href: l.link },
                            { default: D(() => [Ce(le(l.text), 1)]), _: 2 },
                            1032,
                            ['href']
                          )
                        ])
                      )
                    ),
                    128
                  ))
                ])
              ],
              2
            ))
          : G('', !0)
    }
  })
const q0 = Y(K0, [['__scopeId', 'data-v-8982effe']]),
  W0 = z({
    __name: 'VPNavScreenSocialLinks',
    setup(e) {
      const { theme: t } = de()
      return (n, s) =>
        k(t).socialLinks
          ? (b(), ne(Oi, { key: 0, class: 'VPNavScreenSocialLinks', links: k(t).socialLinks }, null, 8, ['links']))
          : G('', !0)
    }
  }),
  Y0 = { class: 'container' },
  X0 = z({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(e) {
      const t = K(null)
      function n() {
        rc(t.value, { reserveScrollBarGap: !0 })
      }
      function s() {
        lc()
      }
      return (o, i) => (
        b(),
        ne(
          St,
          { name: 'fade', onEnter: n, onAfterLeave: s },
          {
            default: D(() => [
              e.open
                ? (b(),
                  E(
                    'div',
                    { key: 0, class: 'VPNavScreen', ref_key: 'screen', ref: t },
                    [
                      $('div', Y0, [
                        M(o.$slots, 'nav-screen-content-before', {}, void 0, !0),
                        w(R0, { class: 'menu' }),
                        w(q0, { class: 'translations' }),
                        w(U0, { class: 'appearance' }),
                        w(W0, { class: 'social-links' }),
                        M(o.$slots, 'nav-screen-content-after', {}, void 0, !0)
                      ])
                    ],
                    512
                  ))
                : G('', !0)
            ]),
            _: 3
          }
        )
      )
    }
  })
const J0 = Y(X0, [['__scopeId', 'data-v-724636ae']]),
  Q0 = { class: 'VPNav' },
  G0 = z({
    __name: 'VPNav',
    setup(e) {
      const { isScreenOpen: t, closeScreen: n, toggleScreen: s } = ph()
      return (
        rt('close-screen', n),
        (o, i) => (
          b(),
          E('header', Q0, [
            w(
              f0,
              { 'is-screen-open': k(t), onToggleScreen: k(s) },
              {
                'nav-bar-title-before': D(() => [M(o.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                'nav-bar-title-after': D(() => [M(o.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                'nav-bar-content-before': D(() => [M(o.$slots, 'nav-bar-content-before', {}, void 0, !0)]),
                'nav-bar-content-after': D(() => [M(o.$slots, 'nav-bar-content-after', {}, void 0, !0)]),
                _: 3
              },
              8,
              ['is-screen-open', 'onToggleScreen']
            ),
            w(
              J0,
              { open: k(t) },
              {
                'nav-screen-content-before': D(() => [M(o.$slots, 'nav-screen-content-before', {}, void 0, !0)]),
                'nav-screen-content-after': D(() => [M(o.$slots, 'nav-screen-content-after', {}, void 0, !0)]),
                _: 3
              },
              8,
              ['open']
            )
          ])
        )
      )
    }
  })
const Z0 = Y(G0, [['__scopeId', 'data-v-0fa0e57d']]),
  e_ = {},
  t_ = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  n_ = $('path', { d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z' }, null, -1),
  s_ = $('path', { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' }, null, -1),
  o_ = $('path', { d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z' }, null, -1),
  i_ = $('path', { d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z' }, null, -1),
  r_ = [n_, s_, o_, i_]
function l_(e, t) {
  return b(), E('svg', t_, r_)
}
const a_ = Y(e_, [['render', l_]]),
  c_ = { key: 0, class: 'VPLocalNav' },
  u_ = ['aria-expanded'],
  f_ = { class: 'menu-text' },
  d_ = z({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(e) {
      const { theme: t } = de(),
        { hasSidebar: n } = gt()
      function s() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (o, i) =>
        k(n)
          ? (b(),
            E('div', c_, [
              $(
                'button',
                {
                  class: 'menu',
                  'aria-expanded': e.open,
                  'aria-controls': 'VPSidebarNav',
                  onClick: i[0] || (i[0] = r => o.$emit('open-menu'))
                },
                [w(a_, { class: 'menu-icon' }), $('span', f_, le(k(t).sidebarMenuLabel || 'Menu'), 1)],
                8,
                u_
              ),
              $('a', { class: 'top-link', href: '#', onClick: s }, le(k(t).returnToTopLabel || 'Return to top'), 1)
            ]))
          : G('', !0)
    }
  })
const h_ = Y(d_, [['__scopeId', 'data-v-2817d72e']]),
  p_ = {},
  __ = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  m_ = $(
    'path',
    {
      d: 'M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z'
    },
    null,
    -1
  ),
  v_ = [m_]
function g_(e, t) {
  return b(), E('svg', __, v_)
}
const y_ = Y(p_, [['render', g_]]),
  b_ = e => (et('data-v-983f6b21'), (e = e()), tt(), e),
  x_ = ['role'],
  w_ = b_(() => $('div', { class: 'indicator' }, null, -1)),
  k_ = { key: 1, class: 'items' },
  C_ = z({
    __name: 'VPSidebarItem',
    props: { item: null, depth: null },
    setup(e) {
      const t = e,
        {
          collapsed: n,
          collapsible: s,
          isLink: o,
          isActiveLink: i,
          hasActiveLink: r,
          hasChildren: l,
          toggle: a
        } = ah(F(() => t.item)),
        c = F(() => (l.value ? 'section' : 'div')),
        u = F(() => (o.value ? 'a' : 'div')),
        f = F(() => (l.value ? (t.depth + 2 === 7 ? 'p' : `h${t.depth + 2}`) : 'p')),
        h = F(() => (o.value ? void 0 : 'button')),
        d = F(() => [
          [`level-${t.depth}`],
          { collapsible: s.value },
          { collapsed: n.value },
          { 'is-link': o.value },
          { 'is-active': i.value },
          { 'has-active': r.value }
        ])
      function m() {
        !t.item.link && a()
      }
      function x() {
        t.item.link && a()
      }
      return (S, v) => {
        const p = _t('VPSidebarItem', !0)
        return (
          b(),
          ne(
            yn(k(c)),
            { class: fe(['VPSidebarItem', k(d)]) },
            {
              default: D(() => [
                e.item.text
                  ? (b(),
                    E(
                      'div',
                      { key: 0, class: 'item', role: k(h), onClick: m },
                      [
                        w_,
                        w(
                          Bt,
                          { tag: k(u), class: 'link', href: e.item.link },
                          {
                            default: D(() => [
                              (b(), ne(yn(k(f)), { class: 'text', innerHTML: e.item.text }, null, 8, ['innerHTML']))
                            ]),
                            _: 1
                          },
                          8,
                          ['tag', 'href']
                        ),
                        e.item.collapsed != null
                          ? (b(),
                            E('div', { key: 0, class: 'caret', role: 'button', onClick: x }, [
                              w(y_, { class: 'caret-icon' })
                            ]))
                          : G('', !0)
                      ],
                      8,
                      x_
                    ))
                  : G('', !0),
                e.item.items && e.item.items.length
                  ? (b(),
                    E('div', k_, [
                      e.depth < 5
                        ? (b(!0),
                          E(
                            se,
                            { key: 0 },
                            $e(
                              e.item.items,
                              g => (
                                b(), ne(p, { key: g.text, item: g, depth: e.depth + 1 }, null, 8, ['item', 'depth'])
                              )
                            ),
                            128
                          ))
                        : G('', !0)
                    ]))
                  : G('', !0)
              ]),
              _: 1
            },
            8,
            ['class']
          )
        )
      }
    }
  })
const $_ = Y(C_, [['__scopeId', 'data-v-983f6b21']]),
  cc = e => (et('data-v-c79ccefa'), (e = e()), tt(), e),
  P_ = cc(() => $('div', { class: 'curtain' }, null, -1)),
  S_ = { class: 'nav', id: 'VPSidebarNav', 'aria-labelledby': 'sidebar-aria-label', tabindex: '-1' },
  T_ = cc(() => $('span', { class: 'visually-hidden', id: 'sidebar-aria-label' }, ' Sidebar Navigation ', -1)),
  E_ = z({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(e) {
      const t = e,
        { sidebarGroups: n, hasSidebar: s } = gt()
      let o = K(null)
      function i() {
        rc(o.value, { reserveScrollBarGap: !0 })
      }
      function r() {
        lc()
      }
      return (
        xi(async () => {
          var l
          t.open ? (i(), (l = o.value) == null || l.focus()) : r()
        }),
        (l, a) =>
          k(s)
            ? (b(),
              E(
                'aside',
                {
                  key: 0,
                  class: fe(['VPSidebar', { open: e.open }]),
                  ref_key: 'navEl',
                  ref: o,
                  onClick: a[0] || (a[0] = ao(() => {}, ['stop']))
                },
                [
                  P_,
                  $('nav', S_, [
                    T_,
                    M(l.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (b(!0),
                    E(
                      se,
                      null,
                      $e(
                        k(n),
                        c => (
                          b(),
                          E('div', { key: c.text, class: 'group' }, [w($_, { item: c, depth: 0 }, null, 8, ['item'])])
                        )
                      ),
                      128
                    )),
                    M(l.$slots, 'sidebar-nav-after', {}, void 0, !0)
                  ])
                ],
                2
              ))
            : G('', !0)
      )
    }
  })
const V_ = Y(E_, [['__scopeId', 'data-v-c79ccefa']]),
  A_ = {},
  I_ = { class: 'VPPage' }
function L_(e, t) {
  const n = _t('Content')
  return b(), E('div', I_, [w(n)])
}
const M_ = Y(A_, [['render', L_]]),
  B_ = z({
    __name: 'VPButton',
    props: { tag: null, size: null, theme: null, text: null, href: null },
    setup(e) {
      const t = e,
        n = F(() => [t.size ?? 'medium', t.theme ?? 'brand']),
        s = F(() => t.href && co.test(t.href)),
        o = F(() => (t.tag ? t.tag : t.href ? 'a' : 'button'))
      return (i, r) => (
        b(),
        ne(
          yn(k(o)),
          {
            class: fe(['VPButton', k(n)]),
            href: e.href ? k(Gn)(e.href) : void 0,
            target: k(s) ? '_blank' : void 0,
            rel: k(s) ? 'noreferrer' : void 0
          },
          { default: D(() => [Ce(le(e.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    }
  })
const N_ = Y(B_, [['__scopeId', 'data-v-a7c4128c']]),
  O_ = e => (et('data-v-c39d0f9a'), (e = e()), tt(), e),
  F_ = { class: 'container' },
  R_ = { class: 'main' },
  H_ = { key: 0, class: 'name' },
  D_ = { class: 'clip' },
  z_ = { key: 1, class: 'text' },
  U_ = { key: 2, class: 'tagline' },
  j_ = { key: 3, class: 'actions' },
  K_ = { key: 0, class: 'image' },
  q_ = { class: 'image-container' },
  W_ = O_(() => $('div', { class: 'image-bg' }, null, -1)),
  Y_ = z({
    __name: 'VPHero',
    props: { name: null, text: null, tagline: null, image: null, actions: null },
    setup(e) {
      const t = Le('hero-image-slot-exists')
      return (n, s) => (
        b(),
        E(
          'div',
          { class: fe(['VPHero', { 'has-image': e.image || k(t) }]) },
          [
            $('div', F_, [
              $('div', R_, [
                e.name ? (b(), E('h1', H_, [$('span', D_, le(e.name), 1)])) : G('', !0),
                e.text ? (b(), E('p', z_, le(e.text), 1)) : G('', !0),
                e.tagline ? (b(), E('p', U_, le(e.tagline), 1)) : G('', !0),
                e.actions
                  ? (b(),
                    E('div', j_, [
                      (b(!0),
                      E(
                        se,
                        null,
                        $e(
                          e.actions,
                          o => (
                            b(),
                            E('div', { key: o.link, class: 'action' }, [
                              w(N_, { tag: 'a', size: 'medium', theme: o.theme, text: o.text, href: o.link }, null, 8, [
                                'theme',
                                'text',
                                'href'
                              ])
                            ])
                          )
                        ),
                        128
                      ))
                    ]))
                  : G('', !0)
              ]),
              e.image || k(t)
                ? (b(),
                  E('div', K_, [
                    $('div', q_, [
                      W_,
                      M(
                        n.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          e.image
                            ? (b(), ne(Li, { key: 0, class: 'image-src', image: e.image }, null, 8, ['image']))
                            : G('', !0)
                        ],
                        !0
                      )
                    ])
                  ]))
                : G('', !0)
            ])
          ],
          2
        )
      )
    }
  })
const X_ = Y(Y_, [['__scopeId', 'data-v-c39d0f9a']]),
  J_ = z({
    __name: 'VPHomeHero',
    setup(e) {
      const { frontmatter: t } = de()
      return (n, s) =>
        k(t).hero
          ? (b(),
            ne(
              X_,
              {
                key: 0,
                class: 'VPHomeHero',
                name: k(t).hero.name,
                text: k(t).hero.text,
                tagline: k(t).hero.tagline,
                image: k(t).hero.image,
                actions: k(t).hero.actions
              },
              { 'home-hero-image': D(() => [M(n.$slots, 'home-hero-image')]), _: 3 },
              8,
              ['name', 'text', 'tagline', 'image', 'actions']
            ))
          : G('', !0)
    }
  }),
  Q_ = {},
  G_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Z_ = $(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z'
    },
    null,
    -1
  ),
  em = [Z_]
function tm(e, t) {
  return b(), E('svg', G_, em)
}
const nm = Y(Q_, [['render', tm]]),
  sm = { class: 'box' },
  om = { key: 1, class: 'icon' },
  im = ['innerHTML'],
  rm = ['innerHTML'],
  lm = { key: 3, class: 'link-text' },
  am = { class: 'link-text-value' },
  cm = z({
    __name: 'VPFeature',
    props: { icon: null, title: null, details: null, link: null, linkText: null },
    setup(e) {
      return (t, n) => (
        b(),
        ne(
          Bt,
          { class: 'VPFeature', href: e.link, 'no-icon': !0 },
          {
            default: D(() => [
              $('article', sm, [
                typeof e.icon == 'object'
                  ? (b(),
                    ne(
                      Li,
                      { key: 0, image: e.icon, alt: e.icon.alt, height: e.icon.height, width: e.icon.width },
                      null,
                      8,
                      ['image', 'alt', 'height', 'width']
                    ))
                  : e.icon
                  ? (b(), E('div', om, le(e.icon), 1))
                  : G('', !0),
                $('h2', { class: 'title', innerHTML: e.title }, null, 8, im),
                e.details ? (b(), E('p', { key: 2, class: 'details', innerHTML: e.details }, null, 8, rm)) : G('', !0),
                e.linkText
                  ? (b(), E('div', lm, [$('p', am, [Ce(le(e.linkText) + ' ', 1), w(nm, { class: 'link-text-icon' })])]))
                  : G('', !0)
              ])
            ]),
            _: 1
          },
          8,
          ['href']
        )
      )
    }
  })
const um = Y(cm, [['__scopeId', 'data-v-a5828f43']]),
  fm = { key: 0, class: 'VPFeatures' },
  dm = { class: 'container' },
  hm = { class: 'items' },
  pm = z({
    __name: 'VPFeatures',
    props: { features: null },
    setup(e) {
      const t = e,
        n = F(() => {
          const s = t.features.length
          if (s) {
            if (s === 2) return 'grid-2'
            if (s === 3) return 'grid-3'
            if (s % 3 === 0) return 'grid-6'
            if (s % 2 === 0) return 'grid-4'
          } else return
        })
      return (s, o) =>
        e.features
          ? (b(),
            E('div', fm, [
              $('div', dm, [
                $('div', hm, [
                  (b(!0),
                  E(
                    se,
                    null,
                    $e(
                      e.features,
                      i => (
                        b(),
                        E(
                          'div',
                          { key: i.title, class: fe(['item', [k(n)]]) },
                          [
                            w(
                              um,
                              {
                                icon: i.icon,
                                title: i.title,
                                details: i.details,
                                link: i.link,
                                'link-text': i.linkText
                              },
                              null,
                              8,
                              ['icon', 'title', 'details', 'link', 'link-text']
                            )
                          ],
                          2
                        )
                      )
                    ),
                    128
                  ))
                ])
              ])
            ]))
          : G('', !0)
    }
  })
const _m = Y(pm, [['__scopeId', 'data-v-6816157f']]),
  mm = z({
    __name: 'VPHomeFeatures',
    setup(e) {
      const { frontmatter: t } = de()
      return (n, s) =>
        k(t).features
          ? (b(), ne(_m, { key: 0, class: 'VPHomeFeatures', features: k(t).features }, null, 8, ['features']))
          : G('', !0)
    }
  }),
  vm = { class: 'VPHome' },
  gm = z({
    __name: 'VPHome',
    setup(e) {
      return (t, n) => {
        const s = _t('Content')
        return (
          b(),
          E('div', vm, [
            M(t.$slots, 'home-hero-before', {}, void 0, !0),
            w(J_, null, { 'home-hero-image': D(() => [M(t.$slots, 'home-hero-image', {}, void 0, !0)]), _: 3 }),
            M(t.$slots, 'home-hero-after', {}, void 0, !0),
            M(t.$slots, 'home-features-before', {}, void 0, !0),
            w(mm),
            M(t.$slots, 'home-features-after', {}, void 0, !0),
            w(s)
          ])
        )
      }
    }
  })
const ym = Y(gm, [['__scopeId', 'data-v-b07783ac']])
function bm() {
  const { hasSidebar: e } = gt(),
    t = Jo('(min-width: 960px)'),
    n = Jo('(min-width: 1280px)')
  return { isAsideEnabled: F(() => (!n.value && !t.value ? !1 : e.value ? n.value : t.value)) }
}
const xm = 71
function wm(e, t) {
  if (e === !1) return []
  let n = []
  return (
    document.querySelectorAll('h2, h3, h4, h5, h6').forEach(s => {
      if (s.textContent && s.id) {
        let o = s.textContent
        if (t === !1) {
          const i = s.cloneNode(!0)
          for (const r of i.querySelectorAll('.VPBadge')) r.remove()
          o = i.textContent || ''
        }
        n.push({ level: Number(s.tagName[1]), title: o.replace(/\s+#\s*$/, ''), link: `#${s.id}` })
      }
    }),
    km(n, e)
  )
}
function km(e, t) {
  const n = (typeof t == 'object' && !Array.isArray(t) ? t.level : t) || 2
  return Cm(e, typeof n == 'number' ? [n, n] : n === 'deep' ? [2, 6] : n)
}
function Cm(e, t) {
  const n = []
  return (
    (e = e.map(s => ({ ...s }))),
    e.forEach((s, o) => {
      s.level >= t[0] && s.level <= t[1] && $m(o, e, t) && n.push(s)
    }),
    n
  )
}
function $m(e, t, n) {
  if (e === 0) return !0
  const s = t[e]
  for (let o = e - 1; o >= 0; o--) {
    const i = t[o]
    if (i.level < s.level && i.level >= n[0] && i.level <= n[1])
      return i.children == null && (i.children = []), i.children.push(s), !1
  }
  return !0
}
function Pm(e, t) {
  const { isAsideEnabled: n } = bm(),
    s = oh(i, 100)
  let o = null
  Ve(() => {
    requestAnimationFrame(i), window.addEventListener('scroll', s)
  }),
    Tn(() => {
      r(location.hash)
    }),
    Mt(() => {
      window.removeEventListener('scroll', s)
    })
  function i() {
    if (!n.value) return
    const l = [].slice.call(e.value.querySelectorAll('.outline-link')),
      a = [].slice
        .call(document.querySelectorAll('.content .header-anchor'))
        .filter(d => l.some(m => m.hash === d.hash && d.offsetParent !== null)),
      c = window.scrollY,
      u = window.innerHeight,
      f = document.body.offsetHeight,
      h = Math.abs(c + u - f) < 1
    if (a.length && h) {
      r(a[a.length - 1].hash)
      return
    }
    for (let d = 0; d < a.length; d++) {
      const m = a[d],
        x = a[d + 1],
        [S, v] = Sm(d, m, x)
      if (S) {
        r(v)
        return
      }
    }
  }
  function r(l) {
    o && o.classList.remove('active'), l !== null && (o = e.value.querySelector(`a[href="${decodeURIComponent(l)}"]`))
    const a = o
    a
      ? (a.classList.add('active'), (t.value.style.top = a.offsetTop + 33 + 'px'), (t.value.style.opacity = '1'))
      : ((t.value.style.top = '33px'), (t.value.style.opacity = '0'))
  }
}
function Kr(e) {
  return e.parentElement.offsetTop - xm
}
function Sm(e, t, n) {
  const s = window.scrollY
  return e === 0 && s === 0 ? [!0, null] : s < Kr(t) ? [!1, null] : !n || s < Kr(n) ? [!0, t.hash] : [!1, null]
}
const Tm = ['href'],
  Em = z({
    __name: 'VPDocAsideOutlineItem',
    props: { headers: null, onClick: { type: Function }, root: { type: Boolean } },
    setup(e) {
      return (t, n) => {
        const s = _t('VPDocAsideOutlineItem', !0)
        return (
          b(),
          E(
            'ul',
            { class: fe(e.root ? 'root' : 'nested') },
            [
              (b(!0),
              E(
                se,
                null,
                $e(
                  e.headers,
                  ({ children: o, link: i, title: r }) => (
                    b(),
                    E('li', null, [
                      $(
                        'a',
                        {
                          class: 'outline-link',
                          href: i,
                          onClick: n[0] || (n[0] = (...l) => e.onClick && e.onClick(...l))
                        },
                        le(r),
                        9,
                        Tm
                      ),
                      o != null && o.length
                        ? (b(), ne(s, { key: 0, headers: o, onClick: e.onClick }, null, 8, ['headers', 'onClick']))
                        : G('', !0)
                    ])
                  )
                ),
                256
              ))
            ],
            2
          )
        )
      }
    }
  })
const Vm = Y(Em, [['__scopeId', 'data-v-1188541a']]),
  Am = e => (et('data-v-5dd9d5f6'), (e = e()), tt(), e),
  Im = { class: 'content' },
  Lm = { class: 'outline-title' },
  Mm = { 'aria-labelledby': 'doc-outline-aria-label' },
  Bm = Am(() =>
    $('span', { class: 'visually-hidden', id: 'doc-outline-aria-label' }, ' Table of Contents for current page ', -1)
  ),
  Nm = z({
    __name: 'VPDocAsideOutline',
    setup(e) {
      const { frontmatter: t, theme: n } = de(),
        s = F(() => t.value.outline ?? n.value.outline),
        o = Le('onContentUpdated')
      o.value = () => {
        i.value = wm(s.value, n.value.outlineBadges)
      }
      const i = K([]),
        r = F(() => i.value.length > 0),
        l = K(),
        a = K()
      Pm(l, a)
      function c({ target: u }) {
        const f = '#' + u.href.split('#')[1],
          h = document.querySelector(decodeURIComponent(f))
        h == null || h.focus()
      }
      return (u, f) => (
        b(),
        E(
          'div',
          { class: fe(['VPDocAsideOutline', { 'has-outline': k(r) }]), ref_key: 'container', ref: l },
          [
            $('div', Im, [
              $('div', { class: 'outline-marker', ref_key: 'marker', ref: a }, null, 512),
              $(
                'div',
                Lm,
                le(
                  (typeof k(n).outline == 'object' && !Array.isArray(k(n).outline) && k(n).outline.label) ||
                    k(n).outlineTitle ||
                    'On this page'
                ),
                1
              ),
              $('nav', Mm, [Bm, w(Vm, { headers: i.value, root: !0, onClick: c }, null, 8, ['headers'])])
            ])
          ],
          2
        )
      )
    }
  })
const Om = Y(Nm, [['__scopeId', 'data-v-5dd9d5f6']]),
  Fm = { class: 'VPDocAsideCarbonAds' },
  Rm = z({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: null },
    setup(e) {
      const t = () => null
      return (n, s) => (b(), E('div', Fm, [w(k(t), { 'carbon-ads': e.carbonAds }, null, 8, ['carbon-ads'])]))
    }
  }),
  Hm = e => (et('data-v-cdc66372'), (e = e()), tt(), e),
  Dm = { class: 'VPDocAside' },
  zm = Hm(() => $('div', { class: 'spacer' }, null, -1)),
  Um = z({
    __name: 'VPDocAside',
    setup(e) {
      const { theme: t } = de()
      return (n, s) => (
        b(),
        E('div', Dm, [
          M(n.$slots, 'aside-top', {}, void 0, !0),
          M(n.$slots, 'aside-outline-before', {}, void 0, !0),
          w(Om),
          M(n.$slots, 'aside-outline-after', {}, void 0, !0),
          zm,
          M(n.$slots, 'aside-ads-before', {}, void 0, !0),
          k(t).carbonAds ? (b(), ne(Rm, { key: 0, 'carbon-ads': k(t).carbonAds }, null, 8, ['carbon-ads'])) : G('', !0),
          M(n.$slots, 'aside-ads-after', {}, void 0, !0),
          M(n.$slots, 'aside-bottom', {}, void 0, !0)
        ])
      )
    }
  })
const jm = Y(Um, [['__scopeId', 'data-v-cdc66372']])
function Km() {
  const { theme: e, page: t } = de()
  return F(() => {
    const { text: n = 'Edit this page', pattern: s = '' } = e.value.editLink || {},
      { relativePath: o } = t.value
    return { url: s.replace(/:path/g, o), text: n }
  })
}
function qm() {
  const { page: e, theme: t, frontmatter: n } = de()
  return F(() => {
    var r, l, a, c
    const s = ec(t.value.sidebar, e.value.relativePath),
      o = rh(s),
      i = o.findIndex(u => sn(e.value.relativePath, u.link))
    return {
      prev:
        n.value.prev === !1
          ? void 0
          : {
              text:
                (typeof n.value.prev == 'string'
                  ? n.value.prev
                  : typeof n.value.prev == 'object'
                  ? n.value.prev.text
                  : void 0) ?? ((r = o[i - 1]) == null ? void 0 : r.text),
              link:
                (typeof n.value.prev == 'object' ? n.value.prev.link : void 0) ??
                ((l = o[i - 1]) == null ? void 0 : l.link)
            },
      next:
        n.value.next === !1
          ? void 0
          : {
              text:
                (typeof n.value.next == 'string'
                  ? n.value.next
                  : typeof n.value.next == 'object'
                  ? n.value.next.text
                  : void 0) ?? ((a = o[i + 1]) == null ? void 0 : a.text),
              link:
                (typeof n.value.next == 'object' ? n.value.next.link : void 0) ??
                ((c = o[i + 1]) == null ? void 0 : c.link)
            }
    }
  })
}
const Wm = {},
  Ym = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Xm = $(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z'
    },
    null,
    -1
  ),
  Jm = $(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z'
    },
    null,
    -1
  ),
  Qm = [Xm, Jm]
function Gm(e, t) {
  return b(), E('svg', Ym, Qm)
}
const Zm = Y(Wm, [['render', Gm]]),
  ev = { class: 'VPLastUpdated' },
  tv = ['datetime'],
  nv = z({
    __name: 'VPDocFooterLastUpdated',
    setup(e) {
      const { theme: t, page: n } = de(),
        s = F(() => new Date(n.value.lastUpdated)),
        o = F(() => s.value.toISOString()),
        i = K('')
      return (
        Ve(() => {
          Vt(() => {
            i.value = s.value.toLocaleString(window.navigator.language)
          })
        }),
        (r, l) => (
          b(),
          E('p', ev, [
            Ce(le(k(t).lastUpdatedText || 'Last updated') + ': ', 1),
            $('time', { datetime: k(o) }, le(i.value), 9, tv)
          ])
        )
      )
    }
  })
const sv = Y(nv, [['__scopeId', 'data-v-355aa5ef']]),
  ov = { key: 0, class: 'VPDocFooter' },
  iv = { key: 0, class: 'edit-info' },
  rv = { key: 0, class: 'edit-link' },
  lv = { key: 1, class: 'last-updated' },
  av = { key: 1, class: 'prev-next' },
  cv = { class: 'pager' },
  uv = ['href'],
  fv = ['innerHTML'],
  dv = ['innerHTML'],
  hv = ['href'],
  pv = ['innerHTML'],
  _v = ['innerHTML'],
  mv = z({
    __name: 'VPDocFooter',
    setup(e) {
      const { theme: t, page: n, frontmatter: s } = de(),
        o = Km(),
        i = qm(),
        r = F(() => t.value.editLink && s.value.editLink !== !1),
        l = F(() => n.value.lastUpdated && s.value.lastUpdated !== !1),
        a = F(() => r.value || l.value || i.value.prev || i.value.next)
      return (c, u) => {
        var f, h, d, m, x, S, v
        return k(a)
          ? (b(),
            E('footer', ov, [
              k(r) || k(l)
                ? (b(),
                  E('div', iv, [
                    k(r)
                      ? (b(),
                        E('div', rv, [
                          w(
                            Bt,
                            { class: 'edit-link-button', href: k(o).url, 'no-icon': !0 },
                            {
                              default: D(() => [w(Zm, { class: 'edit-link-icon' }), Ce(' ' + le(k(o).text), 1)]),
                              _: 1
                            },
                            8,
                            ['href']
                          )
                        ]))
                      : G('', !0),
                    k(l) ? (b(), E('div', lv, [w(sv)])) : G('', !0)
                  ]))
                : G('', !0),
              ((f = k(i).prev) != null && f.link) || ((h = k(i).next) != null && h.link)
                ? (b(),
                  E('div', av, [
                    $('div', cv, [
                      (d = k(i).prev) != null && d.link
                        ? (b(),
                          E(
                            'a',
                            { key: 0, class: 'pager-link prev', href: k(Gn)(k(i).prev.link) },
                            [
                              $(
                                'span',
                                {
                                  class: 'desc',
                                  innerHTML: ((m = k(t).docFooter) == null ? void 0 : m.prev) || 'Previous page'
                                },
                                null,
                                8,
                                fv
                              ),
                              $('span', { class: 'title', innerHTML: k(i).prev.text }, null, 8, dv)
                            ],
                            8,
                            uv
                          ))
                        : G('', !0)
                    ]),
                    $(
                      'div',
                      { class: fe(['pager', { 'has-prev': (x = k(i).prev) == null ? void 0 : x.link }]) },
                      [
                        (S = k(i).next) != null && S.link
                          ? (b(),
                            E(
                              'a',
                              { key: 0, class: 'pager-link next', href: k(Gn)(k(i).next.link) },
                              [
                                $(
                                  'span',
                                  {
                                    class: 'desc',
                                    innerHTML: ((v = k(t).docFooter) == null ? void 0 : v.next) || 'Next page'
                                  },
                                  null,
                                  8,
                                  pv
                                ),
                                $('span', { class: 'title', innerHTML: k(i).next.text }, null, 8, _v)
                              ],
                              8,
                              hv
                            ))
                          : G('', !0)
                      ],
                      2
                    )
                  ]))
                : G('', !0)
            ]))
          : G('', !0)
      }
    }
  })
const vv = Y(mv, [['__scopeId', 'data-v-2813752b']]),
  gv = e => (et('data-v-c5936a1e'), (e = e()), tt(), e),
  yv = { class: 'container' },
  bv = { key: 0, class: 'aside' },
  xv = gv(() => $('div', { class: 'aside-curtain' }, null, -1)),
  wv = { class: 'aside-container' },
  kv = { class: 'aside-content' },
  Cv = { class: 'content' },
  $v = { class: 'content-container' },
  Pv = { class: 'main' },
  Sv = z({
    __name: 'VPDoc',
    setup(e) {
      const t = vt(),
        { hasSidebar: n, hasAside: s } = gt(),
        o = F(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, '')),
        i = K()
      return (
        rt('onContentUpdated', i),
        (r, l) => {
          const a = _t('Content')
          return (
            b(),
            E(
              'div',
              { class: fe(['VPDoc', { 'has-sidebar': k(n), 'has-aside': k(s) }]) },
              [
                $('div', yv, [
                  k(s)
                    ? (b(),
                      E('div', bv, [
                        xv,
                        $('div', wv, [
                          $('div', kv, [
                            w(jm, null, {
                              'aside-top': D(() => [M(r.$slots, 'aside-top', {}, void 0, !0)]),
                              'aside-bottom': D(() => [M(r.$slots, 'aside-bottom', {}, void 0, !0)]),
                              'aside-outline-before': D(() => [M(r.$slots, 'aside-outline-before', {}, void 0, !0)]),
                              'aside-outline-after': D(() => [M(r.$slots, 'aside-outline-after', {}, void 0, !0)]),
                              'aside-ads-before': D(() => [M(r.$slots, 'aside-ads-before', {}, void 0, !0)]),
                              'aside-ads-after': D(() => [M(r.$slots, 'aside-ads-after', {}, void 0, !0)]),
                              _: 3
                            })
                          ])
                        ])
                      ]))
                    : G('', !0),
                  $('div', Cv, [
                    $('div', $v, [
                      M(r.$slots, 'doc-before', {}, void 0, !0),
                      $('main', Pv, [
                        w(a, { class: fe(['vp-doc', k(o)]), onContentUpdated: i.value }, null, 8, [
                          'class',
                          'onContentUpdated'
                        ])
                      ]),
                      M(r.$slots, 'doc-footer-before', {}, void 0, !0),
                      w(vv),
                      M(r.$slots, 'doc-after', {}, void 0, !0)
                    ])
                  ])
                ])
              ],
              2
            )
          )
        }
      )
    }
  })
const Tv = Y(Sv, [['__scopeId', 'data-v-c5936a1e']]),
  Ev = z({
    __name: 'VPContent',
    setup(e) {
      const t = vt(),
        { frontmatter: n } = de(),
        { hasSidebar: s } = gt(),
        o = Le('NotFound')
      return (i, r) => (
        b(),
        E(
          'div',
          { class: fe(['VPContent', { 'has-sidebar': k(s), 'is-home': k(n).layout === 'home' }]), id: 'VPContent' },
          [
            k(t).component === k(o)
              ? (b(), ne(k(o), { key: 0 }))
              : k(n).layout === 'page'
              ? (b(), ne(M_, { key: 1 }))
              : k(n).layout === 'home'
              ? (b(),
                ne(
                  ym,
                  { key: 2 },
                  {
                    'home-hero-before': D(() => [M(i.$slots, 'home-hero-before', {}, void 0, !0)]),
                    'home-hero-image': D(() => [M(i.$slots, 'home-hero-image', {}, void 0, !0)]),
                    'home-hero-after': D(() => [M(i.$slots, 'home-hero-after', {}, void 0, !0)]),
                    'home-features-before': D(() => [M(i.$slots, 'home-features-before', {}, void 0, !0)]),
                    'home-features-after': D(() => [M(i.$slots, 'home-features-after', {}, void 0, !0)]),
                    _: 3
                  }
                ))
              : (b(),
                ne(
                  Tv,
                  { key: 3 },
                  {
                    'doc-footer-before': D(() => [M(i.$slots, 'doc-footer-before', {}, void 0, !0)]),
                    'doc-before': D(() => [M(i.$slots, 'doc-before', {}, void 0, !0)]),
                    'doc-after': D(() => [M(i.$slots, 'doc-after', {}, void 0, !0)]),
                    'aside-top': D(() => [M(i.$slots, 'aside-top', {}, void 0, !0)]),
                    'aside-outline-before': D(() => [M(i.$slots, 'aside-outline-before', {}, void 0, !0)]),
                    'aside-outline-after': D(() => [M(i.$slots, 'aside-outline-after', {}, void 0, !0)]),
                    'aside-ads-before': D(() => [M(i.$slots, 'aside-ads-before', {}, void 0, !0)]),
                    'aside-ads-after': D(() => [M(i.$slots, 'aside-ads-after', {}, void 0, !0)]),
                    'aside-bottom': D(() => [M(i.$slots, 'aside-bottom', {}, void 0, !0)]),
                    _: 3
                  }
                ))
          ],
          2
        )
      )
    }
  })
const Vv = Y(Ev, [['__scopeId', 'data-v-0bd490fb']]),
  Av = { class: 'container' },
  Iv = ['innerHTML'],
  Lv = ['innerHTML'],
  Mv = z({
    __name: 'VPFooter',
    setup(e) {
      const { theme: t } = de(),
        { hasSidebar: n } = gt()
      return (s, o) =>
        k(t).footer
          ? (b(),
            E(
              'footer',
              { key: 0, class: fe(['VPFooter', { 'has-sidebar': k(n) }]) },
              [
                $('div', Av, [
                  k(t).footer.message
                    ? (b(), E('p', { key: 0, class: 'message', innerHTML: k(t).footer.message }, null, 8, Iv))
                    : G('', !0),
                  k(t).footer.copyright
                    ? (b(), E('p', { key: 1, class: 'copyright', innerHTML: k(t).footer.copyright }, null, 8, Lv))
                    : G('', !0)
                ])
              ],
              2
            ))
          : G('', !0)
    }
  })
const Bv = Y(Mv, [['__scopeId', 'data-v-d24360a6']]),
  Nv = { key: 0, class: 'Layout' },
  Ov = z({
    __name: 'Layout',
    setup(e) {
      const { isOpen: t, open: n, close: s } = gt(),
        o = vt()
      Ne(() => o.path, s), lh(t, s), rt('close-sidebar', s), rt('is-sidebar-open', t)
      const { frontmatter: i } = de(),
        r = va(),
        l = F(() => !!r['home-hero-image'])
      return (
        rt('hero-image-slot-exists', l),
        (a, c) => {
          const u = _t('Content')
          return k(i).layout !== !1
            ? (b(),
              E('div', Nv, [
                M(a.$slots, 'layout-top', {}, void 0, !0),
                w(uh),
                w(hh, { class: 'backdrop', show: k(t), onClick: k(s) }, null, 8, ['show', 'onClick']),
                w(Z0, null, {
                  'nav-bar-title-before': D(() => [M(a.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                  'nav-bar-title-after': D(() => [M(a.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                  'nav-bar-content-before': D(() => [M(a.$slots, 'nav-bar-content-before', {}, void 0, !0)]),
                  'nav-bar-content-after': D(() => [M(a.$slots, 'nav-bar-content-after', {}, void 0, !0)]),
                  'nav-screen-content-before': D(() => [M(a.$slots, 'nav-screen-content-before', {}, void 0, !0)]),
                  'nav-screen-content-after': D(() => [M(a.$slots, 'nav-screen-content-after', {}, void 0, !0)]),
                  _: 3
                }),
                w(h_, { open: k(t), onOpenMenu: k(n) }, null, 8, ['open', 'onOpenMenu']),
                w(
                  V_,
                  { open: k(t) },
                  {
                    'sidebar-nav-before': D(() => [M(a.$slots, 'sidebar-nav-before', {}, void 0, !0)]),
                    'sidebar-nav-after': D(() => [M(a.$slots, 'sidebar-nav-after', {}, void 0, !0)]),
                    _: 3
                  },
                  8,
                  ['open']
                ),
                w(Vv, null, {
                  'home-hero-before': D(() => [M(a.$slots, 'home-hero-before', {}, void 0, !0)]),
                  'home-hero-image': D(() => [M(a.$slots, 'home-hero-image', {}, void 0, !0)]),
                  'home-hero-after': D(() => [M(a.$slots, 'home-hero-after', {}, void 0, !0)]),
                  'home-features-before': D(() => [M(a.$slots, 'home-features-before', {}, void 0, !0)]),
                  'home-features-after': D(() => [M(a.$slots, 'home-features-after', {}, void 0, !0)]),
                  'doc-footer-before': D(() => [M(a.$slots, 'doc-footer-before', {}, void 0, !0)]),
                  'doc-before': D(() => [M(a.$slots, 'doc-before', {}, void 0, !0)]),
                  'doc-after': D(() => [M(a.$slots, 'doc-after', {}, void 0, !0)]),
                  'aside-top': D(() => [M(a.$slots, 'aside-top', {}, void 0, !0)]),
                  'aside-bottom': D(() => [M(a.$slots, 'aside-bottom', {}, void 0, !0)]),
                  'aside-outline-before': D(() => [M(a.$slots, 'aside-outline-before', {}, void 0, !0)]),
                  'aside-outline-after': D(() => [M(a.$slots, 'aside-outline-after', {}, void 0, !0)]),
                  'aside-ads-before': D(() => [M(a.$slots, 'aside-ads-before', {}, void 0, !0)]),
                  'aside-ads-after': D(() => [M(a.$slots, 'aside-ads-after', {}, void 0, !0)]),
                  _: 3
                }),
                w(Bv),
                M(a.$slots, 'layout-bottom', {}, void 0, !0)
              ]))
            : (b(), ne(u, { key: 1 }))
        }
      )
    }
  })
const Fv = Y(Ov, [['__scopeId', 'data-v-93a960b4']]),
  po = e => (et('data-v-63c9cdeb'), (e = e()), tt(), e),
  Rv = { class: 'NotFound' },
  Hv = po(() => $('p', { class: 'code' }, '404', -1)),
  Dv = po(() => $('h1', { class: 'title' }, 'PAGE NOT FOUND', -1)),
  zv = po(() => $('div', { class: 'divider' }, null, -1)),
  Uv = po(() =>
    $(
      'blockquote',
      { class: 'quote' },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1
    )
  ),
  jv = { class: 'action' },
  Kv = ['href'],
  qv = z({
    __name: 'NotFound',
    setup(e) {
      const { site: t } = de(),
        { localeLinks: n } = us({ removeCurrent: !1 }),
        s = K('/')
      return (
        Ve(() => {
          var i
          const o = window.location.pathname.replace(t.value.base, '').replace(/(^.*?\/).*$/, '/$1')
          n.value.length &&
            (s.value =
              ((i = n.value.find(({ link: r }) => r.startsWith(o))) == null ? void 0 : i.link) || n.value[0].link)
        }),
        (o, i) => (
          b(),
          E('div', Rv, [
            Hv,
            Dv,
            zv,
            Uv,
            $('div', jv, [
              $('a', { class: 'link', href: k(kn)(s.value), 'aria-label': 'go to home' }, ' Take me home ', 8, Kv)
            ])
          ])
        )
      )
    }
  })
const Wv = Y(qv, [['__scopeId', 'data-v-63c9cdeb']])
const Yv = {
  Layout: Fv,
  NotFound: Wv,
  enhanceApp: ({ app: e }) => {
    e.component('Badge', Pd)
  }
}
let Xv = 0
function Jv() {
  return 'message_' + Xv++
}
const Qv = z({
    setup() {
      const e = K([])
      function t(s) {
        const o = Jv(),
          i = { name: o, ...s }
        e.value.push(i)
        const r = s.duration
        setTimeout(() => {
          n(o)
        }, r * 1e3)
      }
      function n(s) {
        for (const [o, i] of e.value.entries())
          if (i.name === s) {
            e.value.splice(o, 1)
            break
          }
      }
      return { messages: e, add: t, remove: n }
    }
  }),
  Gv = { class: 'demoblock-message-content' }
function Zv(e, t, n, s, o, i) {
  return (
    b(),
    ne(
      Aa,
      { name: 'demoblock-fade', tag: 'div', class: 'demoblock-message-wrap' },
      {
        default: D(() => [
          (b(!0),
          E(
            se,
            null,
            $e(
              e.messages,
              r => (
                b(),
                E(
                  'div',
                  { key: r.name, class: fe(['demoblock-message', r.type ? `demoblock-message-${r.type}` : '']) },
                  [$('div', Gv, le(r.content), 1)],
                  2
                )
              )
            ),
            128
          ))
        ]),
        _: 1
      }
    )
  )
}
const ni = Y(Qv, [
  ['render', Zv],
  ['__scopeId', 'data-v-113231ea']
])
ni.newInstance = (e = {}) => {
  const t = document.createElement('div'),
    o = Ha({
      render() {
        return xn(ni, { ...e, ref: 'messageRef' })
      }
    }).mount(t).$refs.messageRef
  return (
    document.body.appendChild(t.firstElementChild),
    {
      add(i) {
        o.add(i)
      },
      remove(i) {
        o.remove(i)
      }
    }
  )
}
let To
function eg() {
  return (To = To || ni.newInstance()), To
}
function qr(e, { duration: t = 3, type: n = '' }) {
  eg().add({ content: e, duration: t, type: n })
}
const Wr = {
  info(e, t) {
    return qr(e, { ...t })
  },
  error(e, t) {
    return qr(e, { ...t, type: 'error' })
  }
}
const tg = {
    name: 'Demo',
    props: { customClass: String, sourceCode: String },
    setup(e) {
      const { copy: t } = Qd(),
        n = uo(),
        s = vt(),
        o = K(!1),
        i = K(!1),
        r = K(!1),
        l = K(null),
        a = K(null),
        c = K(null),
        u = K(null),
        f = K(null)
      Ne(r, C => {
        if (((c.value.style.height = C ? `${N.value + 1}px` : '0'), !C)) {
          ;(i.value = !1), (u.value.style.left = '0'), (u.value.style.width = 'auto'), m()
          return
        }
        setTimeout(() => {
          window.addEventListener('scroll', d), window.addEventListener('resize', d), h()
        }, 300)
      }),
        Ve(() => {
          nn(() => {
            a.value || (l.value.style.width = '100%')
          })
        }),
        as(() => {
          m()
        })
      const h = () => {
          const { top: C, bottom: j, left: W } = c.value.getBoundingClientRect(),
            Z = window.innerHeight || document.body.clientHeight
          ;(i.value = j > Z && C + 44 <= Z), (u.value.style.left = i.value ? `${W}px` : '0')
          const q = i.value ? 1 : 2
          u.value.style.width = `${f.value.offsetWidth - q}px`
        },
        d = Kd(h, 200),
        m = () => {
          window.removeEventListener('scroll', d), window.removeEventListener('resize', d)
        }
      Ne(
        () => s.path,
        C => {
          x.value = C.split('/')
        }
      )
      const x = K(s.path.split('/')),
        S = F(() => x.value[x.value.length - 1].split('.')[0]),
        v = F(() => `demo-${S.value}`)
      Sn({})
      const p = () => {},
        g = () => {
          ;(r.value = !r.value), (o.value = r.value)
        },
        P = F(() => {
          var C
          return (
            ((C = n.theme.value.demoblock) == null ? void 0 : C[n.localePath.value]) ?? {
              'hide-text': '隐藏代码',
              'show-text': '显示代码',
              'copy-button-text': '复制代码片段',
              'copy-success-text': '复制成功'
            }
          )
        }),
        V = F(() => (r.value ? P.value['hide-text'] : P.value['show-text'])),
        N = F(() => (a.value ? a.value.clientHeight + l.value.clientHeight + 20 : l.value.clientHeight))
      return {
        blockClass: v,
        hover: o,
        fixedControl: i,
        isExpanded: r,
        locale: P,
        controlText: V,
        onClickControl: g,
        highlight: l,
        description: a,
        meta: c,
        control: u,
        onCopy: async () => {
          try {
            t(e.sourceCode), Wr.info(P.value['copy-success-text'])
          } catch {
            Wr.error(P.value['copy-success-text'])
          }
        },
        goCodepen: p,
        demoBlock: f
      }
    }
  },
  ng = { class: 'source' },
  sg = { ref: 'meta', class: 'meta' },
  og = { key: 0, ref: 'description', class: 'description' },
  ig = { ref: 'highlight', class: 'highlight' },
  rg = { class: 'control-button-wrap' }
function lg(e, t, n, s, o, i) {
  return (
    b(),
    E(
      'div',
      {
        ref: 'demoBlock',
        class: fe(['demo-block', s.blockClass, n.customClass ? n.customClass : '', { hover: s.hover }]),
        onMouseenter: t[2] || (t[2] = r => (s.hover = !0)),
        onMouseleave: t[3] || (t[3] = r => (s.hover = !1))
      },
      [
        $('div', ng, [M(e.$slots, 'default', {}, void 0, !0)]),
        $(
          'div',
          sg,
          [
            e.$slots.description ? (b(), E('div', og, [M(e.$slots, 'description', {}, void 0, !0)], 512)) : G('', !0),
            $('div', ig, [M(e.$slots, 'highlight', {}, void 0, !0)], 512)
          ],
          512
        ),
        $(
          'div',
          {
            ref: 'control',
            class: fe(['demo-block-control', { 'is-fixed': s.fixedControl, 'is-expanded': s.isExpanded }]),
            onClick: t[1] || (t[1] = (...r) => s.onClickControl && s.onClickControl(...r))
          },
          [
            w(
              St,
              { name: 'arrow-slide' },
              {
                default: D(() => [
                  $(
                    'i',
                    {
                      class: fe([
                        'control-icon',
                        { 'icon-caret-down': !s.isExpanded, 'icon-caret-up': s.isExpanded, hovering: s.hover }
                      ])
                    },
                    null,
                    2
                  )
                ]),
                _: 1
              }
            ),
            w(
              St,
              { name: 'text-slide' },
              {
                default: D(() => [gn($('span', { class: 'control-text' }, le(s.controlText), 513), [[Qn, s.hover]])]),
                _: 1
              }
            ),
            $('div', rg, [
              w(
                St,
                { name: 'text-slide' },
                {
                  default: D(() => [
                    gn(
                      $(
                        'span',
                        {
                          class: 'control-button copy-button',
                          onClick: t[0] || (t[0] = ao((...r) => s.onCopy && s.onCopy(...r), ['stop']))
                        },
                        le(s.locale && s.locale['copy-button-text']),
                        513
                      ),
                      [[Qn, s.isExpanded]]
                    )
                  ]),
                  _: 1
                }
              )
            ])
          ],
          2
        )
      ],
      34
    )
  )
}
const ag = Y(tg, [
  ['render', lg],
  ['__scopeId', 'data-v-b8649709']
])
const cg = z({ name: 'DemoBlock', props: { customClass: String } }),
  ug = { class: 'source' }
function fg(e, t, n, s, o, i) {
  return (
    b(),
    E(
      'div',
      { class: fe(['demo-block', [e.customClass ? e.customClass : '']]) },
      [$('div', ug, [M(e.$slots, 'default', {}, void 0, !0)])],
      2
    )
  )
}
const dg = Y(cg, [
    ['render', fg],
    ['__scopeId', 'data-v-d3a119a6']
  ]),
  hg = {
    type: { type: String, default: 'primary' },
    size: { type: String, default: 'medium' },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    circle: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    attrType: { type: String },
    icon: { type: String, default: '' },
    tag: { type: String },
    onClick: { type: [Function, Array] }
  }
const Yr = z({
    name: 'VButton',
    props: hg,
    setup(e, t) {
      const { type: n, size: s, disabled: o, block: i, plain: r, round: l, circle: a, loading: c, icon: u } = is(e)
      return () => {
        const f = t.slots.default ? t.slots.default() : '',
          h = i.value ? 'v-btn-block' : '',
          d = l.value ? 'v-btn-round' : '',
          m = (S, v) => {
            if (S) {
              if (v === 'small') return 'v-btn-circle-sm'
              if (v === 'medium') return 'v-btn-circle-md'
              if (v === 'large') return 'v-btn-circle-lg'
            } else return ''
          },
          x = (S, v) => {
            if (S) {
              if (v === 'primary') return 'v-btn-palin-primary'
              if (v === 'success') return 'v-btn-palin-success'
              if (v === 'info') return 'v-btn-palin-info'
              if (v === 'warning') return 'v-btn-palin-warning'
              if (v === 'danger') return 'v-btn-palin-danger'
            } else return ''
          }
        return w(
          'button',
          {
            disabled: o.value,
            class: `v-btn
                        v-btn-${n.value} 
                        v-btn-${s.value} 
                        ${d}
                        ${m(a.value, s.value)}
                        ${h}
                        ${x(r.value, n.value)}
                        `
          },
          [
            c.value && w('i', { class: 'v-icon-loading v-icon-left' }, null),
            u.value && !c.value && w('i', { class: `v-icon-${u.value}` }, null),
            f
          ]
        )
      }
    }
  }),
  pg = e => e && e.shapeFlag & 8,
  _g = e => e && e.shapeFlag & 6,
  mg = e => e && e.shapeFlag & 1,
  vg = e => e && e.type === se
function js(e) {
  const t = []
  for (const n of e ?? [])
    n.type !== Ee &&
      (pg(n) || _g(n) || mg(n)
        ? t.push(n)
        : Array.isArray(n)
        ? t.push(...js(n))
        : vg(n) && n.children && Array.isArray(n.children) && t.push(...js(n.children)))
  return t
}
const Xr = z({
    name: 'VButtonGroup',
    setup(e, { slots: t }) {
      return () => {
        var n
        return w('div', { class: 'v-btn-group' }, [js((n = t.default) == null ? void 0 : n.call(t))])
      }
    }
  }),
  Jr = {
    install(e) {
      e.component(Yr.name, Yr), e.component(Xr.name, Xr)
    }
  },
  gg = {
    name: { type: String, default: '' },
    size: { type: [String, Number], default: 'inherit' },
    color: { type: String, default: 'inherit' }
  }
const Zn = z({
    name: 'VIcon',
    props: gg,
    setup(e, { attrs: t }) {
      const n = Oe(e, 'name'),
        s = F(() => (typeof e.size == 'number' ? `${e.size}px` : e.size)),
        o = w('img', Xt({ src: e.name, style: { width: s.value, verticalAlign: 'middle', color: e.color } }, t), null),
        i = w('i', { class: `v-icon-${n.value}`, style: { fontSize: s.value, color: e.color } }, null)
      return () => (/http|https/.test(e.name) ? o : i)
    }
  }),
  yg = {
    install(e) {
      e.component(Zn.name, Zn)
    }
  },
  bg = {
    align: { type: String, default: '' },
    direction: { type: String, default: 'horizontal' },
    size: { type: [Number, String], default: 'small' },
    wrap: { type: Boolean },
    fill: { type: Boolean }
  },
  uc = Object.prototype.toString
function xg(e) {
  return uc.call(e) === '[object Number]' && e === e
}
function wg(e) {
  return uc.call(e) === '[object Function]'
}
const Qr = z({
    name: 'VSpace',
    props: bg,
    setup(e, { slots: t }) {
      const n = 'v-space',
        s = F(() => e.align ?? (e.direction === 'horizontal' ? 'center' : '')),
        o = { mini: '4px', small: '8px', medium: '16px', large: '28px' },
        i = a => (xg(a) ? a + 'px' : o[a] ?? a + 'px'),
        r = a => {
          const c = {},
            u = i(e.size),
            f = i(e.size)
          return a
            ? e.wrap
              ? { marginBottom: f }
              : {}
            : (e.direction === 'horizontal' && (c.marginRight = u),
              (e.direction === 'vertical' || e.wrap) && (c.marginBottom = f),
              c)
        },
        l = F(() => [
          n,
          `${n}-${e.direction}`,
          e.wrap && `${n}-wrap`,
          e.fill && `${n}-fill`,
          s.value && `${n}-align-${s.value}`
        ])
      return () => {
        var c
        const a = js((c = t.default) == null ? void 0 : c.call(t))
        return w('div', { class: l.value }, [
          a.map((u, f) => w('div', { key: f, class: `${n}-item`, style: r(a.length - 1 === f) }, [u]))
        ])
      }
    }
  }),
  kg = {
    install(e) {
      e.component(Qr.name, Qr)
    }
  }
function si(e, t = 0, n = {}) {
  return (
    t++,
    e.reduce((s, o) => {
      const i = { ...o }
      if (((i.level = t), t > 1 && n && (i.parentId = n.id), i.children)) {
        const r = si(i.children, t, i)
        return delete i.children, s.concat(i, r)
      } else return i.isLeaf === !1 || (i.isLeaf = !0), s.concat(i)
    }, [])
  )
}
function Cg(e, t) {
  const n = K(si(k(e))),
    s = d => {
      const m = n.value.find(x => x.id === d.id)
      if (m) {
        m.expanded = !m.expanded
        const x = u(d)
        x && x.isLeaf === !1 && x.expanded === !0 && !x.childNodeCount && ((x.loading = !0), t.emit('lazy-load', d, h))
      }
    },
    o = F(() => {
      let d = []
      const m = []
      for (const x of n.value) d.map(S => S.id).includes(x.id) || (x.expanded !== !0 && (d = i(x)), m.push(x))
      return m
    }),
    i = (d, m = !0) => {
      const x = [],
        S = n.value.findIndex(v => v.id === d.id)
      for (let v = S + 1; v < n.value.length && d.level < n.value[v].level; v++)
        (m || d.level === n.value[v].level - 1) && x.push(n.value[v])
      return x
    },
    r = d => n.value.find(x => x.id === d.parentId),
    l = d => {
      const m = r(d)
      if (!m) return
      const x = i(m, !0),
        S = x.every(p => p.checked)
      m.checked = S
      const v = x.some(p => p.checked)
      S ? (m.inChecked = !1) : v ? (m.inChecked = !0) : (m.inChecked = !1), m.parentId && l(m)
    },
    a = d => {
      ;(d.checked = !d.checked),
        (d.inChecked = !1),
        i(d).forEach(m => {
          m.checked = d.checked
        }),
        l(d)
    },
    c = d => {
      const m = [],
        x = o.value.findIndex(S => S.id === d.id)
      for (let S = x + 1; S < o.value.length && d.level < o.value[S].level; S++) m.push(o.value[S])
      return m
    },
    u = d => n.value.find(x => x.id === d.id),
    f = d => (d ? n.value.findIndex(m => m.id === d.id) : -1),
    h = d => {
      const m = u(d.node)
      m.loading = !1
      const x = K(si(d.treeItems, m.level, m))
      x.value.forEach(p => {
        p.level - 1 === m.level && (p.parentId = m.id)
      })
      const S = f(m)
      S && n.value.splice(S + 1, 0, ...x.value)
      const v = i(m)
      m.childNodeCount = v.length
    }
  return {
    innerData: n,
    expanedTree: o,
    toggleNode: s,
    getChildren: i,
    getParent: r,
    toggleCheckNode: a,
    getChildrenExpanded: c,
    getNode: u,
    getIndex: f
  }
}
const $g = {
  data: { type: Object, required: !0 },
  checkable: { type: Boolean, default: !1 },
  lineable: { type: Boolean, default: !1 },
  operable: { type: Boolean, default: !1 },
  dragable: { type: Boolean, default: !1 }
}
const Gr = z({
    name: 'VTree',
    props: $g,
    setup(e, t) {
      const { data: n, checkable: s, lineable: o, operable: i, dragable: r } = is(e),
        { slots: l } = t,
        a = 24,
        c = 28,
        { expanedTree: u, toggleNode: f, getChildrenExpanded: h, toggleCheckNode: d } = Cg(n.value, t)
      return () =>
        w('div', { class: 'v-tree' }, [
          u.value.map(m => {
            const { level: x, isLeaf: S, expanded: v, loading: p, childNodeCount: g } = m
            return w('div', { class: 'v-tree-node', style: { paddingLeft: `${a * (x - 1)}px` } }, [
              !S &&
                v &&
                o &&
                w(
                  'span',
                  {
                    class: 'v-tree-node-line',
                    style: { height: `${c * h(m).length}px`, left: `${a * (x - 1) + 8}px`, top: `${c}px` }
                  },
                  null
                ),
              S
                ? w('span', { style: { display: 'inline-block', width: '18px' } }, null)
                : l.icon
                ? l.icon({ nodeData: m, toggleNode: f })
                : w(
                    'svg',
                    {
                      onClick: () => f(m),
                      style: {
                        width: '18px',
                        height: '18px',
                        display: 'inline-block',
                        transform: v ? 'rotate(90deg)' : ''
                      },
                      viewBox: '0 0 1024 1024',
                      xmlns: 'http://www.w3.org/2000/svg'
                    },
                    [w('path', { fill: 'currentColor', d: 'M384 192v640l384-320.064z' }, null)]
                  ),
              s.value &&
                w(
                  'span',
                  {
                    class: `v-tree-check
                          ${m.inChecked ? 'v-tree-node__inChecked' : ''}`
                  },
                  [
                    m.inChecked && w('span', { class: 'v-tree-check__inner', onClick: () => d(m) }, [Ce('-')]),
                    gn(
                      w(
                        'input',
                        {
                          type: 'checkbox',
                          style: { marginRight: '8px' },
                          'onUpdate:modelValue': P => (m.checked = P),
                          onClick: () => d(m)
                        },
                        null
                      ),
                      [[lo, m.checked]]
                    )
                  ]
                ),
              l.content ? l.content(m) : m.label,
              p && w(Zn, { name: 'loading', size: 20, loading: p }, null)
            ])
          })
        ])
    }
  }),
  Pg = {
    install(e) {
      e.component(Gr.name, Gr)
    }
  },
  fc = {
    name: { type: String, default: void 0 },
    halfChecked: { type: Boolean, default: !1 },
    isShowTitle: { type: Boolean, default: !0 },
    title: { type: String },
    color: { type: String, default: void 0 },
    showAnimation: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    beforeChange: { type: Function, default: void 0 },
    size: { type: String }
  },
  dc = {
    ...fc,
    checked: { type: Boolean, default: !1 },
    value: { type: [Number, String] },
    label: { type: String, default: '' },
    'onUpdate:checked': { type: Function, default: void 0 },
    onChange: { type: Function, default: void 0 },
    modelValue: { type: Boolean },
    'onUpdate:modelValue': { type: Function },
    border: { type: Boolean, default: !1 }
  },
  Sg = {
    ...fc,
    modelValue: { type: Array, required: !0 },
    direction: { type: String, default: 'column' },
    itemWidth: { type: Number, default: void 0 },
    options: { type: Array, default: () => [] },
    onChange: { type: Function, default: void 0 },
    'onUpdate:modelValue': { type: Function, default: void 0 },
    border: { type: Boolean, default: !1 },
    max: { type: Number, default: void 0 },
    textColor: { type: String, default: '' }
  },
  Hi = Symbol('v-checkbox-group')
function hc(e, t) {
  const n = Le(Hi, null),
    s = F(() => e.checked || e.modelValue),
    o = F(() => {
      var v
      return ((v = n == null ? void 0 : n.isItemChecked) == null ? void 0 : v.call(n, e.value)) ?? s.value
    }),
    i = F(() => {
      const v = n == null ? void 0 : n.max.value
      return !!v && n.modelValue.value.length >= v && !o.value
    }),
    r = F(() => (n == null ? void 0 : n.disabled.value) || e.disabled || i.value),
    l = F(() => (n == null ? void 0 : n.isShowTitle.value) ?? e.isShowTitle),
    a = F(() => (n == null ? void 0 : n.showAnimation) ?? e.showAnimation),
    c = F(() => (n == null ? void 0 : n.color) ?? e.color),
    u = n == null ? void 0 : n.itemWidth.value,
    f = n == null ? void 0 : n.direction.value,
    h = F(() => e.size || (n == null ? void 0 : n.size.value) || 'medium'),
    d = F(() => (n == null ? void 0 : n.border.value) ?? e.border),
    m = (v, p) => {
      if (r.value) return Promise.resolve(!1)
      const g = e.beforeChange ?? (n == null ? void 0 : n.beforeChange)
      if (g) {
        const P = g(v, p)
        return typeof P == 'boolean' ? Promise.resolve(P) : P
      }
      return Promise.resolve(!0)
    },
    x = () => {
      const v = !s.value
      n == null || n.toggleGroupVal(e.value),
        t.emit('update:checked', v),
        t.emit('update:modelValue', v),
        t.emit('change', v)
    }
  return {
    mergedChecked: o,
    mergedDisabled: r,
    mergedIsShowTitle: l,
    mergedShowAnimation: a,
    mergedColor: c,
    itemWidth: u,
    direction: f,
    size: h,
    border: d,
    handleClick: v => {
      v.stopPropagation(), m(!s.value, e.label).then(p => p && x())
    }
  }
}
function Tg(e, t) {
  const n = Oe(e, 'modelValue'),
    s = { checked: !1, isShowTitle: !0, halfChecked: !1, showAnimation: !0, disabled: !1 },
    o = l => {
      let a = -1
      if (
        (['string', 'number'].includes(typeof n.value[0])
          ? (a = n.value.findIndex(c => c === l))
          : typeof n.value[0] == 'object' && (a = n.value.findIndex(c => c.value === l)),
        a === -1)
      ) {
        if (typeof e.options[0] == 'object') {
          const u = e.options.find(h => h.value === l),
            f = [...n.value, u]
          t.emit('update:modelValue', f), t.emit('change', f)
          return
        }
        const c = [...n.value, l]
        t.emit('update:modelValue', c), t.emit('change', c)
        return
      }
      n.value.splice(a, 1), t.emit('update:modelValue', n.value), t.emit('change', n.value)
    },
    i = l => {
      if (['string', 'number'].includes(typeof n.value[0])) return n.value.includes(l)
      if (typeof n.value[0] == 'object') return n.value.some(a => a.value === l)
    },
    r = F(() => e.size || '')
  return (
    rt(Hi, {
      disabled: Oe(e, 'disabled'),
      isShowTitle: Oe(e, 'isShowTitle'),
      color: Oe(e, 'color'),
      showAnimation: Oe(e, 'showAnimation'),
      beforeChange: e.beforeChange,
      isItemChecked: i,
      toggleGroupVal: o,
      itemWidth: Oe(e, 'itemWidth'),
      direction: Oe(e, 'direction'),
      size: r,
      border: Oe(e, 'border'),
      max: Oe(e, 'max'),
      modelValue: Oe(e, 'modelValue'),
      textColor: Oe(e, 'textColor')
    }),
    { defaultOpt: s }
  )
}
function Eg() {
  const e = Le(Hi, null)
  return { mergedTextColor: F(() => (e == null ? void 0 : e.textColor.value) ?? void 0) }
}
function Ps(e, t, n) {
  let s = e
  return t && (s += `__${t}`), n && (s += `--${n}`), s
}
function fs(e, t = !1) {
  const n = t ? `.v-${e}` : `v-${e}`
  return {
    b: () => Ps(n),
    e: l => (l ? Ps(n, l) : ''),
    m: l => (l ? Ps(n, '', l) : ''),
    em: (l, a) => (l && a ? Ps(n, l, a) : '')
  }
}
const oi = z({
  name: 'VCheckbox',
  props: dc,
  setup(e, t) {
    const n = fs('checkbox'),
      {
        mergedChecked: s,
        mergedDisabled: o,
        mergedIsShowTitle: i,
        mergedShowAnimation: r,
        mergedColor: l,
        itemWidth: a,
        direction: c,
        size: u,
        border: f,
        handleClick: h
      } = hc(e, t)
    return () => {
      var C, j
      const d = { [n.e('column-margin')]: c === 'column', [n.e('wrap')]: typeof a < 'u' },
        m = a ? [`width: ${a}px`] : [],
        x = { [n.b()]: !0, active: s.value, 'half-checked': e.halfChecked, disabled: o.value, unchecked: !s.value },
        S = i.value ? e.title || e.label : '',
        v = (l.value && e.halfChecked) || l.value ? `linear-gradient(${l.value}, ${l.value})` : '',
        p = [
          `border-color:${(s.value || e.halfChecked) && l.value ? l.value : ''}`,
          `background-image:${v}`,
          `background-color:${l.value && e.halfChecked ? l.value : ''}`
        ],
        g = {
          [n.e('material')]: !0,
          'custom-color': l.value,
          [n.m('no-label')]: !e.label && !t.slots.default,
          [n.m('no-animation')]: !r.value,
          [n.e('default-background')]: !e.halfChecked
        },
        P = { [n.e('tick')]: !0, [n.m('no-animation')]: !r.value },
        V = { [n.m(u.value)]: u.value, [n.m('bordered')]: f.value },
        N = W => W.stopPropagation(),
        R = { indeterminate: e.halfChecked }
      return w('div', { class: d, style: m }, [
        w('div', { class: x }, [
          w('label', { title: S, onClick: h, class: V, style: { width: a ? '100%' : 'auto' } }, [
            w(
              'input',
              Xt({ name: e.name || e.value, class: n.e('input'), type: 'checkbox' }, R, {
                checked: s.value,
                disabled: o.value,
                onClick: N,
                onChange: N
              }),
              null
            ),
            w('span', { style: p, class: g }, [
              w('span', { class: n.e('halfchecked-bg') }, null),
              w(
                'svg',
                { viewBox: '0 0 16 16', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', class: n.e('tick-wrap') },
                [
                  w('g', { stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' }, [
                    w(
                      'polygon',
                      {
                        'fill-rule': 'nonzero',
                        points:
                          '5.17391304 6.56521739 7.7173913 9.10869565 11.826087 5 13 6.17391304 7.7173913 11.4565217 4 7.73913043',
                        class: P
                      },
                      null
                    )
                  ])
                ]
              )
            ]),
            w('span', { class: n.e('label-text') }, [
              e.label || ((j = (C = t.slots).default) == null ? void 0 : j.call(C))
            ])
          ])
        ])
      ])
    }
  }
})
const Zr = z({
  name: 'VCheckboxGroup',
  props: Sg,
  setup(e, t) {
    const n = fs('checkbox'),
      { defaultOpt: s } = Tg(e, t)
    return () => {
      var r, l
      let o = (l = (r = t.slots).default) == null ? void 0 : l.call(r)
      const i = () => {
        var a
        return (
          o ||
          (((a = e.options) == null ? void 0 : a.length) > 0 &&
            (o = e.options.map(c => {
              let u = null
              return (
                typeof c == 'string'
                  ? (u = Object.assign({}, s, { label: c, value: c }))
                  : typeof c == 'object' && (u = Object.assign({}, s, { ...c, label: c.name })),
                w(oi, u, null)
              )
            })),
          o)
        )
      }
      return w(
        'div',
        { class: [n.e('group'), { 'is-row': e.direction === 'row', 'is-column': e.direction === 'column' }] },
        [i()]
      )
    }
  }
})
const el = z({
    name: 'VCheckboxButton',
    props: dc,
    setup(e, t) {
      const n = fs('checkbox-button'),
        {
          mergedChecked: s,
          mergedDisabled: o,
          mergedIsShowTitle: i,
          mergedColor: r,
          size: l,
          handleClick: a
        } = hc(e, t),
        { mergedTextColor: c } = Eg()
      return () => {
        var x, S
        const u = i.value ? e.title || e.label : '',
          f = { [n.b()]: !0, active: s.value, disabled: o.value, unchecked: !s.value },
          h = { [n.e('content')]: !0, [n.m(l.value)]: !0 },
          d = [
            `border-color:${s.value && r.value ? r.value : ''}`,
            `background-color:${s.value && r.value ? r.value : ''}`,
            `color:${s.value && c.value ? c.value : ''}`
          ],
          m = v => v.stopPropagation()
        return w('label', { title: u, onClick: a, class: f }, [
          w(
            'input',
            {
              name: e.name || e.value,
              class: n.e('input'),
              type: 'checkbox',
              checked: s.value,
              disabled: o.value,
              onClick: m,
              onChange: m
            },
            null
          ),
          w('span', { style: d, class: h }, [e.label || ((S = (x = t.slots).default) == null ? void 0 : S.call(x))])
        ])
      }
    }
  }),
  Eo = {
    install(e) {
      e.component(oi.name, oi), e.component(Zr.name, Zr), e.component(el.name, el)
    }
  },
  Vg = {
    type: { type: String, default: 'default' },
    href: { type: String, default: void 0 },
    underline: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    icon: { type: String, default: '' }
  }
const tl = z({
    name: 'VLink',
    props: Vg,
    setup(e, t) {
      const { type: n, href: s, icon: o, underline: i, disabled: r } = is(e),
        l = fs('link'),
        a = { [l.b()]: !0, [l.e(n.value)]: !0, [l.m('disabled')]: r.value, [l.m('underline')]: i.value }
      return () => {
        var c, u
        return w('a', { class: a, href: s != null && s.value ? (s == null ? void 0 : s.value) : void 0 }, [
          o.value && w(Zn, { name: o.value }, null),
          w('span', { class: l.e('inner') }, [(u = (c = t.slots).default) == null ? void 0 : u.call(c)])
        ])
      }
    }
  }),
  Ag = {
    install: e => {
      e.component(tl.name, tl)
    }
  },
  Ig = { id: { type: String, default: '', required: !0 }, title: { type: String, default: '', required: !0 } },
  Lg = {
    modelValue: { type: String, default: '', required: !0 },
    closable: { type: Boolean, default: !1, required: !1 },
    addable: { type: Boolean, default: !1, required: !1 }
  },
  nl = z({
    name: 'VTab',
    props: Ig,
    setup(e, { slots: t }) {
      const n = Le('active-tab')
      return (
        Le('tabs-data').value.push({ id: e.id, title: e.title }),
        () => {
          var o
          return w(se, null, [
            e.id === n.value && w('div', { class: 'v-tab' }, [Ce(' '), (o = t.default) == null ? void 0 : o.call(t)])
          ])
        }
      )
    }
  })
const sl = z({
    name: 'VTabs',
    props: Lg,
    setup(e, { slots: t }) {
      const n = K([])
      rt('tabs-data', n)
      const s = K(e.modelValue)
      rt('active-tab', s)
      const o = l => {
          s.value = l
        },
        i = l => {
          const a = n.value.findIndex(c => c.id === l)
          n.value.splice(a, 1), console.log(n.value)
        },
        r = () => {
          const l = Math.floor(Math.random() * 1e3) + ''
          n.value.push({ id: l, type: 'random', title: 'new tab', content: 'New Tab Content' }), (s.value = l)
        }
      return () => {
        var l
        return w('div', { class: 'v-tabs' }, [
          w('ul', { class: 'v-tabs__nav' }, [
            n.value.map(a =>
              w('li', { key: a.id, class: a.id === s.value ? 'active' : '', onClick: () => o(a.id) }, [
                a.title,
                e.closable &&
                  w(
                    'svg',
                    {
                      onClick: () => i(a.id),
                      style: 'margin-left: 8px;',
                      viewBox: '0 0 1024 1024',
                      width: '12',
                      height: '12'
                    },
                    [
                      w(
                        'path',
                        {
                          d: 'M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z'
                        },
                        null
                      )
                    ]
                  )
              ])
            ),
            e.addable &&
              w('li', null, [
                w('svg', { onClick: r, viewBox: '0 0 1024 1024', width: '14', height: '14' }, [
                  w(
                    'path',
                    {
                      d: 'M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z'
                    },
                    null
                  )
                ])
              ])
          ]),
          (l = t.default) == null ? void 0 : l.call(t),
          n.value
            .filter(a => a.type === 'random' && a.id === s.value)
            .map(a => w('div', { class: 'v-tab' }, [a.content]))
        ])
      }
    }
  }),
  ol = {
    install(e) {
      e.component(nl.name, nl), e.component(sl.name, sl)
    }
  },
  Mg = {
    modelValue: { type: String, default: '', required: !0 },
    defaultValue: { type: String, defaullt: '', required: !1 },
    size: { type: String, default: 'medium' },
    allowClear: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { type: String, default: '' },
    onInput: { type: Function },
    onChange: { type: Function },
    onClear: { type: Function }
  }
function pc(e, ...t) {
  Array.isArray(e) ? e.forEach(n => pc(n, ...t)) : e(...t)
}
const Bg = z({
    name: 'HoverIcon',
    props: {
      prefix: { type: String, required: !0 },
      disabled: { type: Boolean, default: !1 },
      onClick: { type: Function }
    },
    setup(e, { slots: t }) {
      const n = 'v-input',
        s = F(() => [`${e.prefix}-hover-icon`, e.disabled && `${n}-disabled`]),
        o = i => {
          e.onClick && pc(e.onClick, i)
        }
      return () => {
        var i
        return w('span', { class: s.value, onClick: o }, [(i = t.default) == null ? void 0 : i.call(t)])
      }
    }
  }),
  il = z({
    name: 'VInput',
    props: Mg,
    setup(e, { emit: t, slots: n }) {
      const s = K(),
        { size: o, modelValue: i, allowClear: r, disabled: l, placeholder: a } = is(e),
        c = 'v-input',
        u = K(e.defaultValue),
        f = F(() => i.value ?? u.value)
      let h = f.value
      const d = K(!1),
        m = F(() => r.value && !l.value && f.value),
        x = F(() => [c, `${c}-size-${o.value}`]),
        S = F(() => [`${c}-wrapper`, d.value && `${c}-wrapper--focus`]),
        v = C => {
          ;(u.value = C), t('update:modelValue', C)
        },
        p = C => {
          const j = C.target.value
          v(j),
            t('input', j, C),
            nn(() => {
              s.value && s.value.value !== f.value && (s.value.value = f.value)
            })
        },
        g = () => {
          v(''), t('clear', '')
        },
        P = C => {
          ;(d.value = !0), t('focus', C)
        },
        V = (C, j) => {
          C !== h && ((h = C), t('change', C, j))
        },
        N = C => {
          ;(d.value = !1), V(f.value, C), t('blur', C)
        },
        R = C => {
          ;(C.key || C.code) === 'Enter' && (V(f.value, C), t('pressEnter', C))
        }
      return () =>
        w('span', { class: S.value }, [
          n.prefix && w('span', { class: `${c}-prefix` }, [n.prefix()]),
          w(
            'input',
            {
              ref: s,
              disabled: l.value,
              class: x.value,
              placeholder: a.value,
              value: f.value,
              onInput: p,
              onFocus: P,
              onKeydown: R,
              onBlur: N
            },
            null
          ),
          m.value &&
            w(
              Bg,
              { prefix: c, onClick: g, class: `${c}-clear-btn` },
              { default: () => [w(Zn, { name: 'close', size: '15px' }, null)] }
            ),
          n.suffix && w('span', { class: `${c}-suffix` }, [Ce(' '), n.suffix()])
        ])
    }
  }),
  Ng = {
    install(e) {
      e.component(il.name, il)
    }
  },
  Og = {
    modelValue: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    disabled: { type: Boolean, default: !1 },
    tipRenderer: { type: [Function, null], default: () => e => `${e}` }
  }
function Fg(e, t) {
  let n = !0,
    s = 0,
    o = 0
  const i = K(),
    r = K(Number(e.modelValue)),
    l = K(0),
    a = K(''),
    c = K(!1),
    u = K(0)
  function f() {
    var g
    return (i.value && ((g = i.value) == null ? void 0 : g.clientWidth)) || 0
  }
  function h() {
    const g = f()
    l.value = (g * (r.value - e.min)) / (e.max - e.min)
  }
  function d(g) {
    const P = f(),
      V = Math.round(P)
    g < 0 && (g = 0)
    const N = V / ((e.max - e.min) / e.step),
      C = Math.round(g / N) * N
    if (Math.round(C) >= V) {
      ;(l.value = V), (r.value = e.max), (a.value = '100%'), t.emit('update:modelValue', e.max)
      return
    }
    ;(a.value = Math.round((C * 100) / V) + '%'),
      (r.value = Math.round((C * (e.max - e.min)) / V) + e.min),
      (l.value = g),
      t.emit('update:modelValue', r.value)
  }
  function m(g) {
    ;(n = !1), (o = g.clientX), (s = l.value), (u.value = s)
  }
  function x(g) {
    c.value = !0
    const V = g.clientX - o
    ;(u.value = s + V), d(u.value)
  }
  function S() {
    ;(c.value = !1),
      setTimeout(() => {
        n = !0
      }, 100),
      window.removeEventListener('mousemove', x),
      window.removeEventListener('mouseup', S)
  }
  function v(g) {
    ;(c.value = !0),
      e.disabled ||
        (g.preventDefault(), m(g), window.addEventListener('mousemove', x), window.addEventListener('mouseup', S))
  }
  function p(g) {
    if (!e.disabled && n) {
      o = g.target.getBoundingClientRect().left
      const V = g.clientX
      d(V - o), v(g)
    }
  }
  return (
    Ne(
      () => e.modelValue,
      () => {
        ;(r.value = Number(e.modelValue)),
          r.value > e.max
            ? (a.value = '100%')
            : r.value < e.min
            ? (a.value = '0%')
            : (a.value = ((r.value - e.min) * 100) / (e.max - e.min) + '%'),
          h()
      },
      { immediate: !0 }
    ),
    Ve(h),
    {
      sliderRunway: i,
      popoverShow: c,
      currentValue: r,
      percentDisplay: a,
      handleButtonMousedown: v,
      handleRunwayMousedown: p
    }
  )
}
const rl = z({
    name: 'VSlider',
    props: Og,
    setup(e, t) {
      const n = fs('slider'),
        {
          sliderRunway: s,
          popoverShow: o,
          percentDisplay: i,
          currentValue: r,
          handleButtonMousedown: l,
          handleRunwayMousedown: a
        } = Fg(e, t),
        c = F(() => (e.disabled ? 'disabled' : '')),
        u = F(() => (wg(e.tipRenderer) ? e.tipRenderer(r.value) : ''))
      return () =>
        w('div', { class: n.b() }, [
          w('div', { ref: s, class: [n.e('runway'), c.value], onMousedown: a, onMouseout: () => (o.value = !1) }, [
            w('div', { class: [n.e('bar'), c.value], style: { width: i.value } }, null),
            w(
              'div',
              {
                class: [n.e('button'), c.value],
                style: { width: i.value },
                onMousedown: l,
                onMouseenter: () => (o.value = !0),
                onMouseout: () => (o.value = !1)
              },
              null
            ),
            e.tipRenderer === null
              ? null
              : o.value
              ? w('div', { class: n.e('popover'), style: { left: i.value } }, [
                  w('div', { class: n.e('popover-arrow') }, null),
                  w('div', { cass: n.e('popover-content') }, [u.value])
                ])
              : null
          ])
        ])
    }
  }),
  Rg = {
    install(e) {
      e.component(rl.name, rl)
    }
  },
  _n = {
    ...Yv,
    enhanceApp({ app: e }) {
      e.use(Jr),
        e.use(Jr),
        e.use(yg),
        e.use(kg),
        e.use(Pg),
        e.use(Eo),
        e.use(Eo),
        e.use(Eo),
        e.use(Ag),
        e.use(ol),
        e.use(ol),
        e.use(Ng),
        e.use(Rg),
        e.component('Demo', ag),
        e.component('DemoBlock', dg)
    }
  }
function Hg(e, t) {
  let n = [],
    s = !0
  const o = i => {
    if (s) {
      s = !1
      return
    }
    n.forEach(r => document.head.removeChild(r)),
      (n = []),
      i.forEach(r => {
        const l = Dg(r)
        document.head.appendChild(l), n.push(l)
      })
  }
  Vt(() => {
    const i = e.data,
      r = t.value,
      l = i && i.description,
      a = (i && i.frontmatter.head) || []
    ;(document.title = Wa(r, i)),
      document.querySelector('meta[name=description]').setAttribute('content', l || r.description),
      o(Ya(r.head, Ug(a)))
  })
}
function Dg([e, t, n]) {
  const s = document.createElement(e)
  for (const o in t) s.setAttribute(o, t[o])
  return n && (s.innerHTML = n), s
}
function zg(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function Ug(e) {
  return e.filter(t => !zg(t))
}
const Vo = new Set(),
  _c = () => document.createElement('link'),
  jg = e => {
    const t = _c()
    ;(t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t)
  },
  Kg = e => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let Ss
const qg = Ae && (Ss = _c()) && Ss.relList && Ss.relList.supports && Ss.relList.supports('prefetch') ? jg : Kg
function Wg() {
  if (!Ae || !window.IntersectionObserver) return
  let e
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType))) return
  const t = window.requestIdleCallback || setTimeout
  let n = null
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver(i => {
        i.forEach(r => {
          if (r.isIntersecting) {
            const l = r.target
            n.unobserve(l)
            const { pathname: a } = l
            if (!Vo.has(a)) {
              Vo.add(a)
              const c = Ja(a)
              qg(c)
            }
          }
        })
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach(i => {
          const { target: r } = i,
            { hostname: l, pathname: a } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI
            ),
            c = a.match(/\.\w+$/)
          ;(c && c[0] !== '.html') ||
            (r !== '_blank' && l === location.hostname && (a !== location.pathname ? n.observe(i) : Vo.add(a)))
        })
      })
  }
  Ve(s)
  const o = vt()
  Ne(() => o.path, s),
    Mt(() => {
      n && n.disconnect()
    })
}
const Yg = z({
  setup(e, { slots: t }) {
    const n = K(!1)
    return (
      Ve(() => {
        n.value = !0
      }),
      () => (n.value && t.default ? t.default() : null)
    )
  }
})
function Xg() {
  if (Ae) {
    const e = new Map()
    window.addEventListener('click', t => {
      var s
      const n = t.target
      if (n.matches('div[class*="language-"] > button.copy')) {
        const o = n.parentElement,
          i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling
        if (!o || !i) return
        const r = /language-(shellscript|shell|bash|sh|zsh)/.test(o.className)
        let l = ''
        i.querySelectorAll('span.line:not(.diff.remove)').forEach(
          a =>
            (l +=
              (a.textContent || '') +
              `
`)
        ),
          (l = l.slice(0, -1)),
          r && (l = l.replace(/^ *(\$|>) /gm, '').trim()),
          Jg(l).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n))
            const a = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n)
            }, 2e3)
            e.set(n, a)
          })
      }
    })
  }
}
async function Jg(e) {
  try {
    return navigator.clipboard.writeText(e)
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement
    ;(t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt')
    const s = document.getSelection(),
      o = s ? s.rangeCount > 0 && s.getRangeAt(0) : null
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      o && (s.removeAllRanges(), s.addRange(o)),
      n && n.focus()
  }
}
function Qg() {
  Ae &&
    window.addEventListener('click', e => {
      var n, s
      const t = e.target
      if (t.matches('.vp-code-group input')) {
        const o = (n = t.parentElement) == null ? void 0 : n.parentElement,
          i = Array.from((o == null ? void 0 : o.querySelectorAll('input')) || []).indexOf(t),
          r = o == null ? void 0 : o.querySelector('div[class*="language-"].active'),
          l = (s = o == null ? void 0 : o.querySelectorAll('div[class*="language-"]')) == null ? void 0 : s[i]
        r && l && r !== l && (r.classList.remove('active'), l.classList.add('active'))
      }
    })
}
const mc = _n.NotFound || (() => '404 Not Found'),
  Gg = z({
    name: 'VitePressApp',
    setup() {
      const { site: e } = uo()
      return (
        Ve(() => {
          Vt(() => {
            ;(document.documentElement.lang = e.value.lang), (document.documentElement.dir = e.value.dir)
          })
        }),
        Wg(),
        Xg(),
        Qg(),
        _n.setup && _n.setup(),
        () => xn(_n.Layout)
      )
    }
  })
async function Zg() {
  const e = t2(),
    t = e2()
  t.provide(Qa, e)
  const n = Bd(e.route)
  return (
    t.provide(Xa, n),
    t.provide('NotFound', mc),
    t.component('Content', Hd),
    t.component('ClientOnly', Yg),
    Object.defineProperty(t.config.globalProperties, '$frontmatter', {
      get() {
        return n.frontmatter.value
      }
    }),
    _n.enhanceApp && (await _n.enhanceApp({ app: t, router: e, siteData: Ct })),
    { app: t, router: e, data: n }
  )
}
function e2() {
  return Da(Gg)
}
function t2() {
  let e = Ae,
    t
  return Fd(n => {
    let s = Ja(n)
    return e && (t = s), (e || t === s) && (s = s.replace(/\.js$/, '.lean.js')), Ae && (e = !1), Ua(() => import(s), [])
  }, mc)
}
Ae &&
  Zg().then(({ app: e, router: t, data: n }) => {
    t.go().then(() => {
      Hg(t.route, n.site), e.mount('#app')
    })
  })
export { n2 as V, Y as _, w as a, $ as b, E as c, Zg as createApp, Ce as d, fa as e, b as o, _t as r, le as t, D as w }
