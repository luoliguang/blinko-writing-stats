var At = Object.defineProperty;
var Et = (C, d, M) => d in C ? At(C, d, { enumerable: !0, configurable: !0, writable: !0, value: M }) : C[d] = M;
var et = (C, d, M) => (Et(C, typeof d != "symbol" ? d + "" : d, M), M);
(function() {
  var C, d, M, H, de, he, ye, te, I, O, me, ne, oe, re, F = {}, j = [], tt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, L = Array.isArray;
  function N(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function _e(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function ie(e, t, n) {
    var o, _, r, l = {};
    for (r in t)
      r == "key" ? o = t[r] : r == "ref" ? _ = t[r] : l[r] = t[r];
    if (arguments.length > 2 && (l.children = arguments.length > 3 ? C.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
      for (r in e.defaultProps)
        l[r] === void 0 && (l[r] = e.defaultProps[r]);
    return V(e, l, o, _, null);
  }
  function V(e, t, n, o, _) {
    var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: _ ?? ++M, __i: -1, __u: 0 };
    return _ == null && d.vnode != null && d.vnode(r), r;
  }
  function B(e) {
    return e.children;
  }
  function z(e, t) {
    this.props = e, this.context = t;
  }
  function W(e, t) {
    if (t == null)
      return e.__ ? W(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null)
        return n.__e;
    return typeof e.type == "function" ? W(e) : null;
  }
  function nt(e) {
    if (e.__P && e.__d) {
      var t = e.__v, n = t.__e, o = [], _ = [], r = N({}, t);
      r.__v = t.__v + 1, d.vnode && d.vnode(r), le(e.__P, r, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? W(t), !!(32 & t.__u), _), r.__v = t.__v, r.__.__k[r.__i] = r, Se(o, r, _), t.__e = t.__ = null, r.__e != n && ve(r);
    }
  }
  function ve(e) {
    if ((e = e.__) != null && e.__c != null)
      return e.__e = e.__c.base = null, e.__k.some(function(t) {
        if (t != null && t.__e != null)
          return e.__e = e.__c.base = t.__e;
      }), ve(e);
  }
  function ge(e) {
    (!e.__d && (e.__d = !0) && H.push(e) && !q.__r++ || de != d.debounceRendering) && ((de = d.debounceRendering) || he)(q);
  }
  function q() {
    try {
      for (var e, t = 1; H.length; )
        H.length > t && H.sort(ye), e = H.shift(), t = H.length, nt(e);
    } finally {
      H.length = q.__r = 0;
    }
  }
  function be(e, t, n, o, _, r, l, s, c, a, p) {
    var h, i, f, v, $, g, x = o && o.__k || j, y = t.length;
    for (c = ot(n, t, x, c, y), h = 0; h < y; h++)
      (f = n.__k[h]) != null && (i = f.__i != -1 && x[f.__i] || F, f.__i = h, g = le(e, f, i, _, r, l, s, c, a, p), v = f.__e, f.ref && i.ref != f.ref && (i.ref && ae(i.ref, null, f), p.push(f.ref, f.__c || v, f)), $ == null && v != null && ($ = v), 4 & f.__u ? (c = xe(f, c, e), i.__e && (i.__e = null)) : typeof f.type == "function" && g !== void 0 ? c = g : v && (c = v.nextSibling), f.__u &= -7);
    return n.__e = $, c;
  }
  function ot(e, t, n, o, _) {
    var r, l, s, c, a, p = n.length, h = p, i = 0;
    for (e.__k = new Array(_), r = 0; r < _; r++)
      (l = t[r]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = e.__k[r] = V(null, l, null, null, null) : L(l) ? l = e.__k[r] = V(B, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? l = e.__k[r] = V(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : e.__k[r] = l, c = r + i, l.__ = e, l.__b = e.__b + 1, s = null, (a = l.__i = rt(l, n, c, h)) != -1 && (h--, (s = n[a]) && (s.__u |= 2)), s == null || s.__v == null ? (a == -1 && (_ > p ? i-- : _ < p && i++), typeof l.type != "function" && (l.__u |= 4)) : a != c && (a == c - 1 ? i-- : a == c + 1 ? i++ : (a > c ? i-- : i++, l.__u |= 4))) : e.__k[r] = null;
    if (h)
      for (r = 0; r < p; r++)
        (s = n[r]) != null && !(2 & s.__u) && (s.__e == o && (o = W(s)), Pe(s, s));
    return o;
  }
  function xe(e, t, n) {
    var o, _;
    if (typeof e.type == "function") {
      for (o = e.__k, _ = 0; o && _ < o.length; _++)
        o[_] && (o[_].__ = e, t = xe(o[_], t, n));
      return t;
    }
    e.__e != t && (t && e.type && !t.parentNode && (t = W(e)), t = n.insertBefore(e.__e, t || null));
    do
      t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function G(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (L(e) ? e.some(function(n) {
      G(n, t);
    }) : t.push(e)), t;
  }
  function rt(e, t, n, o) {
    var _, r, l, s = e.key, c = e.type, a = t[n], p = a != null && (2 & a.__u) == 0;
    if (a === null && s == null || p && s == a.key && c == a.type)
      return n;
    if (o > (p ? 1 : 0)) {
      for (_ = n - 1, r = n + 1; _ >= 0 || r < t.length; )
        if ((a = t[l = _ >= 0 ? _-- : r++]) != null && !(2 & a.__u) && s == a.key && c == a.type)
          return l;
    }
    return -1;
  }
  function ke(e, t, n) {
    t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || tt.test(t) ? n : n + "px";
  }
  function J(e, t, n, o, _) {
    var r, l;
    e:
      if (t == "style")
        if (typeof n == "string")
          e.style.cssText = n;
        else {
          if (typeof o == "string" && (e.style.cssText = o = ""), o)
            for (t in o)
              n && t in n || ke(e.style, t, "");
          if (n)
            for (t in n)
              o && n[t] == o[t] || ke(e.style, t, n[t]);
        }
      else if (t[0] == "o" && t[1] == "n")
        r = t != (t = t.replace(me, "$1")), l = t.toLowerCase(), t = l in e || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o ? n[O] = o[O] : (n[O] = ne, e.addEventListener(t, r ? re : oe, r)) : e.removeEventListener(t, r ? re : oe, r);
      else {
        if (_ == "http://www.w3.org/2000/svg")
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
          try {
            e[t] = n ?? "";
            break e;
          } catch {
          }
        typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
      }
  }
  function we(e) {
    return function(t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t[I] == null)
          t[I] = ne++;
        else if (t[I] < n[O])
          return;
        return n(d.event ? d.event(t) : t);
      }
    };
  }
  function le(e, t, n, o, _, r, l, s, c, a) {
    var p, h, i, f, v, $, g, x, y, P, A, w, E, Y, R, U, m = t.type;
    if (t.constructor !== void 0)
      return null;
    128 & n.__u && (c = !!(32 & n.__u), r = [s = t.__e = n.__e]), (p = d.__b) && p(t);
    e:
      if (typeof m == "function") {
        h = l.length;
        try {
          if (y = t.props, P = m.prototype && m.prototype.render, A = (p = m.contextType) && o[p.__c], w = p ? A ? A.props.value : p.__ : o, n.__c ? x = (i = t.__c = n.__c).__ = i.__E : (P ? t.__c = i = new m(y, w) : (t.__c = i = new z(y, w), i.constructor = m, i.render = it), A && A.sub(i), i.state || (i.state = {}), i.__n = o, f = i.__d = !0, i.__h = [], i._sb = []), P && i.__s == null && (i.__s = i.state), P && m.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = N({}, i.__s)), N(i.__s, m.getDerivedStateFromProps(y, i.__s))), v = i.props, $ = i.state, i.__v = t, f)
            P && m.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), P && i.componentDidMount != null && i.__h.push(i.componentDidMount);
          else {
            if (P && m.getDerivedStateFromProps == null && y !== v && i.componentWillReceiveProps != null && i.componentWillReceiveProps(y, w), t.__v == n.__v || !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(y, i.__s, w) === !1) {
              t.__v != n.__v && (i.props = y, i.state = i.__s, i.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(S) {
                S && (S.__ = t);
              }), j.push.apply(i.__h, i._sb), i._sb = [], i.__h.length && l.push(i), s = W(n);
              break e;
            }
            i.componentWillUpdate != null && i.componentWillUpdate(y, i.__s, w), P && i.componentDidUpdate != null && i.__h.push(function() {
              i.componentDidUpdate(v, $, g);
            });
          }
          if (i.context = w, i.props = y, i.__P = e, i.__e = !1, E = d.__r, Y = 0, P)
            i.state = i.__s, i.__d = !1, E && E(t), p = i.render(i.props, i.state, i.context), j.push.apply(i.__h, i._sb), i._sb = [];
          else
            do
              i.__d = !1, E && E(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
            while (i.__d && ++Y < 25);
          i.state = i.__s, i.getChildContext != null && (o = N(N({}, o), i.getChildContext())), P && !f && i.getSnapshotBeforeUpdate != null && (g = i.getSnapshotBeforeUpdate(v, $)), R = p != null && p.type === B && p.key == null ? De(p.props.children) : p, s = be(e, L(R) ? R : [R], t, n, o, _, r, l, s, c, a), i.base = t.__e, t.__u &= -161, i.__h.length && l.push(i), x && (i.__E = i.__ = null);
        } catch (S) {
          if (l.length = h, t.__v = null, c || r != null) {
            if (S.then) {
              for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; )
                s = s.nextSibling;
              r != null && (r[r.indexOf(s)] = null), t.__e = s;
            } else if (r != null)
              for (U = r.length; U--; )
                _e(r[U]);
          } else
            t.__e = n.__e;
          t.__k == null && (t.__k = n.__k || []), S.then || $e(t), d.__e(S, t, n);
        }
      } else
        r == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = _t(n.__e, t, n, o, _, r, l, c, a);
    return (p = d.diffed) && p(t), 128 & t.__u ? void 0 : s;
  }
  function $e(e) {
    e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some($e));
  }
  function Se(e, t, n) {
    for (var o = 0; o < n.length; o++)
      ae(n[o], n[++o], n[++o]);
    d.__c && d.__c(t, e), e.some(function(_) {
      try {
        e = _.__h, _.__h = [], e.some(function(r) {
          r.call(_);
        });
      } catch (r) {
        d.__e(r, _.__v);
      }
    });
  }
  function De(e) {
    return typeof e != "object" || e == null || e.__b > 0 ? e : L(e) ? e.map(De) : e.constructor !== void 0 ? null : N({}, e);
  }
  function _t(e, t, n, o, _, r, l, s, c) {
    var a, p, h, i, f, v, $, g = n.props || F, x = t.props, y = t.type;
    if (y == "svg" ? _ = "http://www.w3.org/2000/svg" : y == "math" ? _ = "http://www.w3.org/1998/Math/MathML" : _ || (_ = "http://www.w3.org/1999/xhtml"), r != null) {
      for (a = 0; a < r.length; a++)
        if ((f = r[a]) && "setAttribute" in f == !!y && (y ? f.localName == y : f.nodeType == 3)) {
          e = f, r[a] = null;
          break;
        }
    }
    if (e == null) {
      if (y == null)
        return document.createTextNode(x);
      e = document.createElementNS(_, y, x.is && x), s && (d.__m && d.__m(t, r), s = !1), r = null;
    }
    if (y == null)
      g === x || s && e.data == x || (e.data = x);
    else {
      if (r = y == "textarea" && x.defaultValue != null ? null : r && C.call(e.childNodes), !s && r != null)
        for (g = {}, a = 0; a < e.attributes.length; a++)
          g[(f = e.attributes[a]).name] = f.value;
      for (a in g)
        f = g[a], a == "dangerouslySetInnerHTML" ? h = f : a == "children" || a in x || a == "value" && "defaultValue" in x || a == "checked" && "defaultChecked" in x || J(e, a, null, f, _);
      for (a in x)
        f = x[a], a == "children" ? i = f : a == "dangerouslySetInnerHTML" ? p = f : a == "value" ? v = f : a == "checked" ? $ = f : s && typeof f != "function" || g[a] === f || J(e, a, f, g[a], _);
      if (p)
        s || h && (p.__html == h.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
      else if (h && (e.innerHTML = ""), be(t.type == "template" ? e.content : e, L(i) ? i : [i], t, n, o, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : _, r, l, r ? r[0] : n.__k && W(n, 0), s, c), r != null)
        for (a = r.length; a--; )
          _e(r[a]);
      s && y != "textarea" || (a = "value", y == "progress" && v == null ? e.removeAttribute("value") : v != null && (v !== e[a] || y == "progress" && !v || y == "option" && v != g[a]) && J(e, a, v, g[a], _), a = "checked", $ != null && $ != e[a] && J(e, a, $, g[a], _));
    }
    return e;
  }
  function ae(e, t, n) {
    try {
      if (typeof e == "function") {
        var o = typeof e.__u == "function";
        o && e.__u(), o && t == null || (e.__u = e(t));
      } else
        e.current = t;
    } catch (_) {
      d.__e(_, n);
    }
  }
  function Pe(e, t, n) {
    var o, _;
    if (d.unmount && d.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || ae(o, null, t)), (o = e.__c) != null) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (r) {
          d.__e(r, t);
        }
      o.base = o.__P = o.__n = null;
    }
    if (o = e.__k)
      for (_ = 0; _ < o.length; _++)
        o[_] && Pe(o[_], t, n || typeof e.type != "function");
    n || _e(e.__e), e.__c = e.__ = e.__e = void 0;
  }
  function it(e, t, n) {
    return this.constructor(e, n);
  }
  function lt(e, t, n) {
    var o, _, r, l;
    t == document && (t = document.documentElement), d.__ && d.__(e, t), _ = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], l = [], le(t, e = (!o && n || t).__k = ie(B, null, [e]), _ || F, F, t.namespaceURI, !o && n ? [n] : _ ? null : t.firstChild ? C.call(t.childNodes) : null, r, !o && n ? n : _ ? _.__e : t.firstChild, o, l), Se(r, e, l), e.props.children = null;
  }
  C = j.slice, d = { __e: function(e, t, n, o) {
    for (var _, r, l; t = t.__; )
      if ((_ = t.__c) && !_.__)
        try {
          if ((r = _.constructor) && r.getDerivedStateFromError != null && (_.setState(r.getDerivedStateFromError(e)), l = _.__d), _.componentDidCatch != null && (_.componentDidCatch(e, o || {}), l = _.__d), l)
            return _.__E = _;
        } catch (s) {
          e = s;
        }
    throw e;
  } }, M = 0, z.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = N({}, this.state), typeof e == "function" && (e = e(N({}, n), this.props)), e && N(n, e), e != null && this.__v && (t && this._sb.push(t), ge(this));
  }, z.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), ge(this));
  }, z.prototype.render = B, H = [], he = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ye = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, q.__r = 0, te = Math.random().toString(8), I = "__d" + te, O = "__a" + te, me = /(PointerCapture)$|Capture$/i, ne = 0, oe = we(!1), re = we(!0);
  var at = 0;
  function u(e, t, n, o, _, r) {
    t || (t = {});
    var l, s, c = t;
    if ("ref" in c)
      for (s in c = {}, t)
        s == "ref" ? l = t[s] : c[s] = t[s];
    var a = { type: e, props: c, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --at, __i: -1, __u: 0, __source: _, __self: r };
    if (typeof e == "function" && (l = e.defaultProps))
      for (s in l)
        c[s] === void 0 && (c[s] = l[s]);
    return d.vnode && d.vnode(a), a;
  }
  var K, b, se, Te, ce = 0, Ce = [], k = d, Ne = k.__b, ze = k.__r, Me = k.diffed, He = k.__c, We = k.unmount, Ae = k.__;
  function Ee(e, t) {
    k.__h && k.__h(b, e, ce || t), ce = 0;
    var n = b.__H || (b.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function D(e) {
    return ce = 1, st(Be, e);
  }
  function st(e, t, n) {
    var o = Ee(K++, 2);
    if (o.t = e, !o.__c && (o.__ = [n ? n(t) : Be(void 0, t), function(s) {
      var c = o.__N ? o.__N[0] : o.__[0], a = o.t(c, s);
      c !== a && (o.__N = [a, o.__[1]], o.__c.setState({}));
    }], o.__c = b, !b.__f)) {
      var _ = function(s, c, a) {
        if (!o.__c.__H)
          return !0;
        var p = !1, h = o.__c.props !== s;
        if (o.__c.__H.__.some(function(f) {
          if (f.__N) {
            p = !0;
            var v = f.__[0];
            f.__ = f.__N, f.__N = void 0, v !== f.__[0] && (h = !0);
          }
        }), r) {
          var i = r.call(this, s, c, a);
          return p ? i || h : i;
        }
        return !p || h;
      };
      b.__f = !0;
      var r = b.shouldComponentUpdate, l = b.componentWillUpdate;
      b.componentWillUpdate = function(s, c, a) {
        if (this.__e) {
          var p = r;
          r = void 0, _(s, c, a), r = p;
        }
        l && l.call(this, s, c, a);
      }, b.shouldComponentUpdate = _;
    }
    return o.__N || o.__;
  }
  function ct(e, t) {
    var n = Ee(K++, 3);
    !k.__s && ft(n.__H, t) && (n.__ = e, n.u = t, b.__H.__h.push(n));
  }
  function ut() {
    for (var e; e = Ce.shift(); ) {
      var t = e.__H;
      if (e.__P && t)
        try {
          t.__h.some(Q), t.__h.some(ue), t.__h = [];
        } catch (n) {
          t.__h = [], k.__e(n, e.__v);
        }
    }
  }
  k.__b = function(e) {
    b = null, Ne && Ne(e);
  }, k.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ae && Ae(e, t);
  }, k.__r = function(e) {
    ze && ze(e), K = 0;
    var t = (b = e.__c).__H;
    t && (se === b ? (t.__h = [], b.__h = [], t.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (t.__h.some(Q), t.__h.some(ue), t.__h = [], K = 0)), se = b;
  }, k.diffed = function(e) {
    Me && Me(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Ce.push(t) !== 1 && Te === k.requestAnimationFrame || ((Te = k.requestAnimationFrame) || pt)(ut)), t.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), se = b = null;
  }, k.__c = function(e, t) {
    t.some(function(n) {
      try {
        n.__h.some(Q), n.__h = n.__h.filter(function(o) {
          return !o.__ || ue(o);
        });
      } catch (o) {
        t.some(function(_) {
          _.__h && (_.__h = []);
        }), t = [], k.__e(o, n.__v);
      }
    }), He && He(e, t);
  }, k.unmount = function(e) {
    We && We(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.some(function(o) {
      try {
        Q(o);
      } catch (_) {
        t = _;
      }
    }), n.__H = void 0, t && k.__e(t, n.__v));
  };
  var Re = typeof requestAnimationFrame == "function";
  function pt(e) {
    var t, n = function() {
      clearTimeout(o), Re && cancelAnimationFrame(t), setTimeout(e);
    }, o = setTimeout(n, 35);
    Re && (t = requestAnimationFrame(n));
  }
  function Q(e) {
    var t = b, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), b = t;
  }
  function ue(e) {
    var t = b;
    e.__c = e.__(), b = t;
  }
  function ft(e, t) {
    return !e || e.length !== t.length || t.some(function(n, o) {
      return n !== e[o];
    });
  }
  function Be(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function dt(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function Ue(e, t) {
    for (var n in e)
      if (n !== "__source" && !(n in t))
        return !0;
    for (var o in t)
      if (o !== "__source" && e[o] !== t[o])
        return !0;
    return !1;
  }
  function Oe(e, t) {
    this.props = e, this.context = t;
  }
  (Oe.prototype = new z()).isPureReactComponent = !0, Oe.prototype.shouldComponentUpdate = function(e, t) {
    return Ue(this.props, e) || Ue(this.state, t);
  };
  var Le = d.__b;
  d.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Le && Le(e);
  };
  var ht = d.__e;
  d.__e = function(e, t, n, o) {
    if (e.then) {
      for (var _, r = t; r = r.__; )
        if ((_ = r.__c) && _.__c)
          return t.__e == null && (t.__e = n.__e, t.__k = n.__k || []), _.__c(e, t);
    }
    ht(e, t, n, o);
  };
  var Ie = d.unmount;
  function Fe(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), e.__c.__H = null), (e = dt({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
      return Fe(o, t, n);
    })), e;
  }
  function je(e, t, n) {
    return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
      return je(o, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
  }
  function pe() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Ve(e) {
    var t = e.__ && e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function X() {
    this.i = null, this.l = null;
  }
  d.unmount = function(e) {
    var t = e.__c;
    t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Ie && Ie(e);
  }, (pe.prototype = new z()).__c = function(e, t) {
    var n = t.__c, o = this;
    o.o == null && (o.o = []), o.o.push(n);
    var _ = Ve(o.__v), r = !1, l = function() {
      r || o.__z || (r = !0, n.__R = null, _ ? _(c) : c());
    };
    n.__R = l;
    var s = n.__P;
    n.__P = null;
    var c = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var a = o.state.__a;
          o.__v.__k[0] = je(a, a.__c.__P, a.__c.__O);
        }
        var p;
        for (o.setState({ __a: o.__b = null }); p = o.o.pop(); )
          p.__P = s, p.forceUpdate();
      }
    };
    o.__u++ || 32 & t.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(l, l);
  }, pe.prototype.componentWillUnmount = function() {
    this.o = [];
  }, pe.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = Fe(this.__b, n, o.__O = o.__P);
      }
      this.__b = null;
    }
    var _ = t.__a && ie(B, null, e.fallback);
    return _ && (_.__u &= -33), [ie(B, null, t.__a ? null : e.children), _];
  };
  var qe = function(e, t, n) {
    if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
      for (n = e.i; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        e.i = n = n[2];
      }
  };
  (X.prototype = new z()).__a = function(e) {
    var t = this, n = Ve(t.__v), o = t.l.get(e);
    return o[0]++, function(_) {
      var r = function() {
        t.props.revealOrder ? (o.push(_), qe(t, e, o)) : _();
      };
      n ? n(r) : r();
    };
  }, X.prototype.render = function(e) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t = G(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; )
      this.l.set(t[n], this.i = [1, 0, this.i]);
    return e.children;
  }, X.prototype.componentDidUpdate = X.prototype.componentDidMount = function() {
    var e = this;
    this.l.forEach(function(t, n) {
      qe(e, n, t);
    });
  };
  var yt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, mt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, vt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, gt = /[A-Z0-9]/g, bt = typeof document < "u", xt = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  function kt(e, t, n) {
    return t.__k == null && (t.textContent = ""), lt(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  z.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var Ge = d.event;
  d.event = function(e) {
    return Ge && (e = Ge(e)), e.persist = function() {
    }, e.isPropagationStopped = function() {
      return this.cancelBubble;
    }, e.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, e.nativeEvent = e;
  };
  var wt = { configurable: !0, get: function() {
    return this.class;
  } }, Je = d.vnode;
  d.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var n = t.props, o = t.type, _ = {}, r = o.indexOf("-") == -1;
      for (var l in n) {
        var s = n[l];
        if (!(l === "value" && "defaultValue" in n && s == null || bt && l === "children" && o === "noscript" || l === "class" || l === "className")) {
          var c = l.toLowerCase();
          l === "defaultValue" && "value" in n && n.value == null ? l = "value" : l === "download" && s === !0 ? s = "" : c === "translate" && s === "no" ? s = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? l = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || xt(n.type) ? c === "onfocus" ? l = "onfocusin" : c === "onblur" ? l = "onfocusout" : vt.test(l) && (l = c) : c = l = "oninput" : r && mt.test(l) ? l = l.replace(gt, "-$&").toLowerCase() : s === null && (s = void 0), c === "oninput" && _[l = c] && (l = "oninputCapture"), _[l] = s;
        }
      }
      o == "select" && (_.multiple && Array.isArray(_.value) && (_.value = G(n.children).forEach(function(a) {
        a.props.selected = _.value.indexOf(a.props.value) != -1;
      })), _.defaultValue != null && (_.value = G(n.children).forEach(function(a) {
        a.props.selected = _.multiple ? _.defaultValue.indexOf(a.props.value) != -1 : _.defaultValue == a.props.value;
      }))), n.class && !n.className ? (_.class = n.class, Object.defineProperty(_, "className", wt)) : n.className && (_.class = _.className = n.className), t.props = _;
    }(e), e.$$typeof = yt, Je && Je(e);
  };
  var Ke = d.__r;
  d.__r = function(e) {
    Ke && Ke(e), e.__c;
  };
  var Qe = d.diffed;
  d.diffed = function(e) {
    Qe && Qe(e);
    var t = e.props, n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
  };
  const $t = {
    streak: "Day Streak",
    totalNotes: "Total Notes",
    activeDays: "Active Days",
    bestStreak: "Best Streak",
    weeklyPattern: "Weekly Pattern",
    monthlyTrend: "Monthly Trend",
    writeToday: "Write today to start your streak!",
    notes: "notes",
    footer: "Past 365 days",
    tab_weekly: "Weekly",
    tab_heatmap: "Heatmap",
    weeks: "Sun,Mon,Tue,Wed,Thu,Fri,Sat"
  }, St = {
    streak: "天连续写作",
    totalNotes: "总笔记数",
    activeDays: "活跃天数",
    bestStreak: "最长连续",
    weeklyPattern: "每周规律",
    monthlyTrend: "月度趋势",
    writeToday: "今天写点什么，开始你的连续记录！",
    notes: "条笔记",
    footer: "过去365天",
    tab_weekly: "每周",
    tab_heatmap: "热力图",
    weeks: "日,一,二,三,四,五,六"
  };
  function Dt(e) {
    if (!e.length)
      return { cur: 0, longest: 0 };
    const t = new Set(e.map((c) => c.date)), n = (c) => c.toISOString().slice(0, 10), o = /* @__PURE__ */ new Date();
    o.setHours(0, 0, 0, 0);
    let _ = 0;
    for (let c = 0; c <= 365; c++) {
      const a = new Date(o);
      if (a.setDate(a.getDate() - c), t.has(n(a)))
        _++;
      else
        break;
    }
    const r = [...e].sort((c, a) => c.date.localeCompare(a.date));
    let l = 0, s = 0;
    for (let c = 0; c < r.length; c++)
      s = c === 0 ? 1 : (new Date(r[c].date).getTime() - new Date(r[c - 1].date).getTime()) / 864e5 === 1 ? s + 1 : 1, s > l && (l = s);
    return { cur: _, longest: l };
  }
  const Pt = () => /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u("path", { d: "M12 20h9" }),
    /* @__PURE__ */ u("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" })
  ] }), Tt = () => /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ u("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ u("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ u("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }), Ct = () => /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ u("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }) });
  function Nt({ text: e, children: t }) {
    const [n, o] = D(!1), [_, r] = D({ x: 0, y: 0 });
    return /* @__PURE__ */ u(
      "div",
      {
        style: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center", flex: 1 },
        onMouseEnter: (l) => {
          o(!0), r({ x: l.target.getBoundingClientRect().left, y: 0 });
        },
        onMouseLeave: () => o(!1),
        children: [
          t,
          n && e && /* @__PURE__ */ u("div", { style: {
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(15,15,25,0.92)",
            color: "#fff",
            padding: "3px 8px",
            borderRadius: "6px",
            fontSize: "11px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 99,
            marginBottom: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
          }, children: e })
        ]
      }
    );
  }
  function Xe({ data: e, labels: t, color: n, unit: o }) {
    const _ = Math.max(...e, 1);
    return /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "flex-end", gap: "4px", height: "80px" }, children: e.map((r, l) => /* @__PURE__ */ u(Nt, { text: r > 0 ? `${t[l]}: ${r} ${o}` : "", children: [
      /* @__PURE__ */ u("div", { style: {
        width: "100%",
        borderRadius: "4px 4px 0 0",
        background: r > 0 ? n : "rgba(128,128,128,0.1)",
        height: `${Math.max(r / _ * 60, r > 0 ? 5 : 0)}px`,
        transition: "height 0.5s cubic-bezier(.4,0,.2,1), opacity 0.2s",
        opacity: r > 0 ? 0.35 + 0.65 * (r / _) : 1,
        cursor: (r > 0, "default")
      } }),
      /* @__PURE__ */ u("span", { style: { fontSize: "10px", opacity: 0.4, fontWeight: 500, marginTop: "4px" }, children: t[l] })
    ] }, l)) });
  }
  function zt({ data: e }) {
    const t = {};
    e.forEach((p) => {
      t[p.date] = p.count;
    });
    const n = Math.max(...Object.values(t), 1), o = [], _ = /* @__PURE__ */ new Date();
    _.setHours(0, 0, 0, 0);
    const r = new Date(_);
    for (r.setDate(r.getDate() - 16 * 7 + 1); r.getDay() !== 0; )
      r.setDate(r.getDate() - 1);
    let l = [];
    for (let p = new Date(r); p <= _; p.setDate(p.getDate() + 1)) {
      const h = p.toISOString().slice(0, 10);
      l.push({ date: h, count: t[h] || 0 }), l.length === 7 && (o.push(l), l = []);
    }
    l.length && o.push(l);
    const [s, c] = D(null), a = (p) => {
      if (p === 0)
        return "rgba(128,128,128,0.12)";
      const h = p / n;
      return h < 0.25 ? "rgba(99,102,241,0.35)" : h < 0.5 ? "rgba(99,102,241,0.55)" : h < 0.75 ? "rgba(99,102,241,0.75)" : "#6366f1";
    };
    return /* @__PURE__ */ u("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ u("div", { style: { display: "flex", gap: "3px" }, children: o.map((p, h) => /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: "3px" }, children: p.map((i, f) => /* @__PURE__ */ u(
        "div",
        {
          onMouseEnter: (v) => {
            const $ = v.target.getBoundingClientRect();
            c({ text: `${i.date}: ${i.count}`, x: $.left, y: $.top });
          },
          onMouseLeave: () => c(null),
          style: {
            width: "11px",
            height: "11px",
            borderRadius: "2px",
            background: a(i.count),
            cursor: i.count > 0 ? "pointer" : "default",
            transition: "transform 0.1s"
          }
        },
        f
      )) }, h)) }),
      s && /* @__PURE__ */ u("div", { style: {
        position: "fixed",
        top: s.y - 30,
        left: s.x,
        background: "rgba(15,15,25,0.92)",
        color: "#fff",
        padding: "3px 8px",
        borderRadius: "6px",
        fontSize: "11px",
        pointerEvents: "none",
        zIndex: 999,
        whiteSpace: "nowrap",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
      }, children: s.text })
    ] });
  }
  function fe({ value: e, label: t, icon: n, accent: o }) {
    return /* @__PURE__ */ u("div", { style: {
      borderRadius: "14px",
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      background: `${o}12`,
      border: `1px solid ${o}28`
    }, children: [
      /* @__PURE__ */ u("span", { style: { color: o }, children: n }),
      /* @__PURE__ */ u("span", { style: { fontSize: "24px", fontWeight: 800, lineHeight: 1 }, children: e }),
      /* @__PURE__ */ u("span", { style: { fontSize: "11px", opacity: 0.55, textAlign: "center", fontWeight: 500 }, children: t })
    ] });
  }
  function Ye({ title: e, children: t }) {
    return /* @__PURE__ */ u("div", { style: { borderRadius: "14px", padding: "14px", background: "rgba(128,128,128,0.06)" }, children: [
      /* @__PURE__ */ u("div", { style: { fontSize: "12px", fontWeight: 700, opacity: 0.6, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }, children: e }),
      t
    ] });
  }
  function Mt() {
    var U;
    const [e, t] = D(!0), [n, o] = D([]), [_, r] = D({ cur: 0, longest: 0 }), [l, s] = D(0), [c, a] = D(0), [p, h] = D([0, 0, 0, 0, 0, 0, 0]), [i, f] = D([]), [v, $] = D([]), [g, x] = D("heatmap"), [y, P] = D(
      (U = window.Blinko.i18n.language) != null && U.startsWith("zh") ? "zh" : "en"
    ), A = y === "zh" ? St : $t, w = (m) => A[m], E = w("weeks").split(",");
    ct(() => {
      window.Blinko.api.analytics.dailyNoteCount.mutate().then((m) => {
        o(m), r(Dt(m)), s(m.reduce((T, ee) => T + ee.count, 0)), a(m.length);
        const S = [0, 0, 0, 0, 0, 0, 0];
        m.forEach((T) => {
          S[(/* @__PURE__ */ new Date(T.date + "T12:00:00")).getDay()] += T.count;
        }), h(S);
        const Z = {};
        m.forEach((T) => {
          const ee = T.date.slice(0, 7);
          Z[ee] = (Z[ee] || 0) + T.count;
        });
        const Ze = Object.keys(Z).sort().slice(-12);
        f(Ze.map((T) => Z[T])), $(Ze.map((T) => T.slice(5))), t(!1);
      }).catch(() => t(!1));
    }, []);
    const Y = () => {
      P((m) => m === "zh" ? "en" : "zh");
    };
    if (e)
      return /* @__PURE__ */ u("div", { style: { padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }, children: [100, 60, 80, 80].map((m, S) => /* @__PURE__ */ u("div", { style: {
        height: `${m}px`,
        borderRadius: "14px",
        background: "rgba(128,128,128,0.1)",
        animation: "ws-pulse 1.5s ease-in-out infinite",
        animationDelay: `${S * 0.15}s`
      } }, S)) });
    const R = (m) => ({
      padding: "5px 14px",
      borderRadius: "8px",
      fontSize: "12px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      background: m ? "rgba(99,102,241,0.15)" : "transparent",
      color: m ? "#6366f1" : "inherit",
      opacity: m ? 1 : 0.5,
      transition: "all 0.2s"
    });
    return /* @__PURE__ */ u("div", { style: { padding: "16px", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px", margin: "0 auto" }, children: [
      /* @__PURE__ */ u("style", { children: `
        @keyframes ws-pulse { 0%,100%{opacity:.4} 50%{opacity:.8} }
        @keyframes ws-up { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .ws-in { animation: ws-up 0.35s ease both; }
      ` }),
      /* @__PURE__ */ u("div", { class: "ws-in", style: {
        background: _.cur > 0 ? "linear-gradient(135deg,#7c3aed 0%,#4f46e5 55%,#2563eb 100%)" : "linear-gradient(135deg,#374151 0%,#1f2937 100%)",
        borderRadius: "18px",
        padding: "22px 20px 18px",
        color: "white",
        boxShadow: _.cur > 0 ? "0 8px 28px rgba(99,60,237,0.32)" : "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        animationDelay: "0ms"
      }, children: [
        /* @__PURE__ */ u("div", { style: { alignSelf: "flex-end", marginBottom: "4px" }, children: /* @__PURE__ */ u("button", { onClick: Y, style: {
          background: "rgba(255,255,255,0.15)",
          border: "none",
          color: "white",
          borderRadius: "6px",
          padding: "3px 10px",
          fontSize: "11px",
          fontWeight: 600,
          cursor: "pointer"
        }, children: y === "zh" ? "EN" : "中文" }) }),
        /* @__PURE__ */ u("div", { style: { fontSize: "44px", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1 }, children: _.cur }),
        /* @__PURE__ */ u("div", { style: { fontSize: "14px", opacity: 0.85, fontWeight: 600 }, children: w("streak") }),
        _.cur === 0 && /* @__PURE__ */ u("div", { style: { fontSize: "12px", opacity: 0.5, marginTop: "4px" }, children: w("writeToday") }),
        _.cur > 0 && /* @__PURE__ */ u("div", { style: { display: "flex", gap: "4px", marginTop: "8px" }, children: [
          Array.from({ length: Math.min(_.cur, 14) }).map((m, S) => /* @__PURE__ */ u("div", { style: {
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: S < _.cur ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)"
          } }, S)),
          _.cur > 14 && /* @__PURE__ */ u("span", { style: { fontSize: "11px", opacity: 0.7, marginLeft: "2px" }, children: [
            "+",
            _.cur - 14
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u("div", { class: "ws-in", style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", animationDelay: "70ms" }, children: [
        /* @__PURE__ */ u(fe, { value: l, label: w("totalNotes"), icon: /* @__PURE__ */ u(Pt, {}), accent: "#3b82f6" }),
        /* @__PURE__ */ u(fe, { value: c, label: w("activeDays"), icon: /* @__PURE__ */ u(Tt, {}), accent: "#22c55e" }),
        /* @__PURE__ */ u(fe, { value: _.longest, label: w("bestStreak"), icon: /* @__PURE__ */ u(Ct, {}), accent: "#f59e0b" })
      ] }),
      /* @__PURE__ */ u("div", { class: "ws-in", style: { animationDelay: "140ms" }, children: /* @__PURE__ */ u(Ye, { title: "", children: [
        /* @__PURE__ */ u("div", { style: { display: "flex", gap: "4px", marginBottom: "14px" }, children: [
          /* @__PURE__ */ u("button", { style: R(g === "heatmap"), onClick: () => x("heatmap"), children: w("tab_heatmap") }),
          /* @__PURE__ */ u("button", { style: R(g === "weekly"), onClick: () => x("weekly"), children: w("tab_weekly") })
        ] }),
        g === "heatmap" && /* @__PURE__ */ u(zt, { data: n }),
        g === "weekly" && /* @__PURE__ */ u(
          Xe,
          {
            data: p,
            labels: E,
            color: "linear-gradient(180deg,#7c3aed,#4f46e5)",
            unit: w("notes")
          }
        )
      ] }) }),
      i.length > 0 && /* @__PURE__ */ u("div", { class: "ws-in", style: { animationDelay: "210ms" }, children: /* @__PURE__ */ u(Ye, { title: w("monthlyTrend"), children: /* @__PURE__ */ u(
        Xe,
        {
          data: i,
          labels: v,
          color: "linear-gradient(180deg,#2563eb,#4f46e5)",
          unit: w("notes")
        }
      ) }) }),
      /* @__PURE__ */ u("div", { style: { textAlign: "center", fontSize: "11px", opacity: 0.25, paddingBottom: "2px" }, children: w("footer") })
    ] });
  }
  const Ht = {
    name: "blinko-writing-stats",
    author: "luoliguang",
    url: "https://github.com/luoliguang/blinko-writing-stats",
    version: "0.1.0",
    minAppVersion: "0.0.0",
    displayName: {
      default: "Writing Stats",
      zh: "写作统计"
    },
    description: {
      default: "Track your writing streak, weekly patterns, and monthly trends.",
      zh: "追踪你的写作连续天数、每周规律和月度趋势。"
    },
    readme: {
      default: "README.md",
      zh: "README_zh.md"
    }
  }, Wt = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>";
  System.register([], (e) => ({
    execute: () => {
      e("default", class {
        constructor() {
          et(this, "withSettingPanel", !1);
          Object.assign(this, Ht);
        }
        async init() {
          window.Blinko.addToolBarIcon({
            name: "writing-stats",
            icon: Wt,
            tooltip: "Writing Stats",
            onClick: () => {
              window.Blinko.showDialog({
                title: "✍️ Writing Stats",
                size: "sm",
                content: () => {
                  const n = document.createElement("div");
                  return kt(/* @__PURE__ */ u(Mt, {}), n), n;
                }
              });
            }
          });
        }
        destroy() {
        }
      });
    }
  }));
})();
