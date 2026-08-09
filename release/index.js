var hn = Object.defineProperty;
var fn = (z, h, N) => h in z ? hn(z, h, { enumerable: !0, configurable: !0, writable: !0, value: N }) : z[h] = N;
var de = (z, h, N) => (fn(z, typeof h != "symbol" ? h + "" : h, N), N);
(function() {
  var z, h, N, H, kt, wt, $t, st, Z, V, St, lt, _t, ct, Ct, G = {}, K = [], he = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, q = Array.isArray;
  function W(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function pt(t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  }
  function j(t, e, n) {
    var o, r, i, a = {};
    for (i in e)
      i == "key" ? o = e[i] : i == "ref" ? r = e[i] : a[i] = e[i];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? z.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
      for (i in t.defaultProps)
        a[i] === void 0 && (a[i] = t.defaultProps[i]);
    return Q(t, a, o, r, null);
  }
  function Q(t, e, n, o, r) {
    var i = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++N, __i: -1, __u: 0 };
    return r == null && h.vnode != null && h.vnode(i), i;
  }
  function R(t) {
    return t.children;
  }
  function P(t, e) {
    this.props = t, this.context = e;
  }
  function I(t, e) {
    if (e == null)
      return t.__ ? I(t.__, t.__i + 1) : null;
    for (var n; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null)
        return n.__e;
    return typeof t.type == "function" ? I(t) : null;
  }
  function fe(t) {
    if (t.__P && t.__d) {
      var e = t.__v, n = e.__e, o = [], r = [], i = W({}, e);
      i.__v = e.__v + 1, h.vnode && h.vnode(i), dt(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, o, n ?? I(e), !!(32 & e.__u), r), i.__v = e.__v, i.__.__k[i.__i] = i, Pt(o, i, r), e.__e = e.__ = null, i.__e != n && Tt(i);
    }
  }
  function Tt(t) {
    if ((t = t.__) != null && t.__c != null)
      return t.__e = t.__c.base = null, t.__k.some(function(e) {
        if (e != null && e.__e != null)
          return t.__e = t.__c.base = e.__e;
      }), Tt(t);
  }
  function ut(t) {
    (!t.__d && (t.__d = !0) && H.push(t) && !tt.__r++ || kt != h.debounceRendering) && ((kt = h.debounceRendering) || wt)(tt);
  }
  function tt() {
    try {
      for (var t, e = 1; H.length; )
        H.length > e && H.sort($t), t = H.shift(), e = H.length, fe(t);
    } finally {
      H.length = tt.__r = 0;
    }
  }
  function Mt(t, e, n, o, r, i, a, _, c, l, u) {
    var g, s, d, m, b, w, $ = o && o.__k || K, y = e.length;
    for (c = me(n, e, $, c, y), g = 0; g < y; g++)
      (d = n.__k[g]) != null && (s = d.__i != -1 && $[d.__i] || G, d.__i = g, w = dt(t, d, s, r, i, a, _, c, l, u), m = d.__e, d.ref && s.ref != d.ref && (s.ref && ht(s.ref, null, d), u.push(d.ref, d.__c || m, d)), b == null && m != null && (b = m), 4 & d.__u ? (c = Dt(d, c, t), s.__e && (s.__e = null)) : typeof d.type == "function" && w !== void 0 ? c = w : m && (c = m.nextSibling), d.__u &= -7);
    return n.__e = b, c;
  }
  function me(t, e, n, o, r) {
    var i, a, _, c, l, u = n.length, g = u, s = 0;
    for (t.__k = new Array(r), i = 0; i < r; i++)
      (a = e[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = t.__k[i] = Q(null, a, null, null, null) : q(a) ? a = t.__k[i] = Q(R, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = t.__k[i] = Q(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : t.__k[i] = a, c = i + s, a.__ = t, a.__b = t.__b + 1, _ = null, (l = a.__i = ge(a, n, c, g)) != -1 && (g--, (_ = n[l]) && (_.__u |= 2)), _ == null || _.__v == null ? (l == -1 && (r > u ? s-- : r < u && s++), typeof a.type != "function" && (a.__u |= 4)) : l != c && (l == c - 1 ? s-- : l == c + 1 ? s++ : (l > c ? s-- : s++, a.__u |= 4))) : t.__k[i] = null;
    if (g)
      for (i = 0; i < u; i++)
        (_ = n[i]) != null && !(2 & _.__u) && (_.__e == o && (o = I(_)), Ht(_, _));
    return o;
  }
  function Dt(t, e, n) {
    var o, r;
    if (typeof t.type == "function") {
      for (o = t.__k, r = 0; o && r < o.length; r++)
        o[r] && (o[r].__ = t, e = Dt(o[r], e, n));
      return e;
    }
    t.__e != e && (e && t.type && !e.parentNode && (e = I(t)), e = n.insertBefore(t.__e, e || null));
    do
      e = e && e.nextSibling;
    while (e != null && e.nodeType == 8);
    return e;
  }
  function J(t, e) {
    return e = e || [], t == null || typeof t == "boolean" || (q(t) ? t.some(function(n) {
      J(n, e);
    }) : e.push(t)), e;
  }
  function ge(t, e, n, o) {
    var r, i, a, _ = t.key, c = t.type, l = e[n], u = l != null && (2 & l.__u) == 0;
    if (l === null && _ == null || u && _ == l.key && c == l.type)
      return n;
    if (o > (u ? 1 : 0)) {
      for (r = n - 1, i = n + 1; r >= 0 || i < e.length; )
        if ((l = e[a = r >= 0 ? r-- : i++]) != null && !(2 & l.__u) && _ == l.key && c == l.type)
          return a;
    }
    return -1;
  }
  function At(t, e, n) {
    e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || he.test(e) ? n : n + "px";
  }
  function et(t, e, n, o, r) {
    var i, a;
    t:
      if (e == "style")
        if (typeof n == "string")
          t.style.cssText = n;
        else {
          if (typeof o == "string" && (t.style.cssText = o = ""), o)
            for (e in o)
              n && e in n || At(t.style, e, "");
          if (n)
            for (e in n)
              o && n[e] == o[e] || At(t.style, e, n[e]);
        }
      else if (e[0] == "o" && e[1] == "n")
        i = e != (e = e.replace(St, "$1")), a = e.toLowerCase(), e = a in t || e == "onFocusOut" || e == "onFocusIn" ? a.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? o ? n[V] = o[V] : (n[V] = lt, t.addEventListener(e, i ? ct : _t, i)) : t.removeEventListener(e, i ? ct : _t, i);
      else {
        if (r == "http://www.w3.org/2000/svg")
          e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t)
          try {
            t[e] = n ?? "";
            break t;
          } catch {
          }
        typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
      }
  }
  function zt(t) {
    return function(e) {
      if (this.l) {
        var n = this.l[e.type + t];
        if (e[Z] == null)
          e[Z] = lt++;
        else if (e[Z] < n[V])
          return;
        return n(h.event ? h.event(e) : e);
      }
    };
  }
  function dt(t, e, n, o, r, i, a, _, c, l) {
    var u, g, s, d, m, b, w, $, y, f, x, C, D, L, U, Y, T = e.type;
    if (e.constructor !== void 0)
      return null;
    128 & n.__u && (c = !!(32 & n.__u), i = [_ = e.__e = n.__e]), (u = h.__b) && u(e);
    t:
      if (typeof T == "function") {
        g = a.length;
        try {
          if (y = e.props, f = T.prototype && T.prototype.render, x = (u = T.contextType) && o[u.__c], C = u ? x ? x.props.value : u.__ : o, n.__c ? $ = (s = e.__c = n.__c).__ = s.__E : (f ? e.__c = s = new T(y, C) : (e.__c = s = new P(y, C), s.constructor = T, s.render = ve), x && x.sub(s), s.state || (s.state = {}), s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), f && s.__s == null && (s.__s = s.state), f && T.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = W({}, s.__s)), W(s.__s, T.getDerivedStateFromProps(y, s.__s))), m = s.props, b = s.state, s.__v = e, d)
            f && T.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), f && s.componentDidMount != null && s.__h.push(s.componentDidMount);
          else {
            if (f && T.getDerivedStateFromProps == null && y !== m && s.componentWillReceiveProps != null && s.componentWillReceiveProps(y, C), e.__v == n.__v || !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(y, s.__s, C) === !1) {
              e.__v != n.__v && (s.props = y, s.state = s.__s, s.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(O) {
                O && (O.__ = e);
              }), K.push.apply(s.__h, s._sb), s._sb = [], s.__h.length && a.push(s), _ = I(n);
              break t;
            }
            s.componentWillUpdate != null && s.componentWillUpdate(y, s.__s, C), f && s.componentDidUpdate != null && s.__h.push(function() {
              s.componentDidUpdate(m, b, w);
            });
          }
          if (s.context = C, s.props = y, s.__P = t, s.__e = !1, D = h.__r, L = 0, f)
            s.state = s.__s, s.__d = !1, D && D(e), u = s.render(s.props, s.state, s.context), K.push.apply(s.__h, s._sb), s._sb = [];
          else
            do
              s.__d = !1, D && D(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
            while (s.__d && ++L < 25);
          s.state = s.__s, s.getChildContext != null && (o = W(W({}, o), s.getChildContext())), f && !d && s.getSnapshotBeforeUpdate != null && (w = s.getSnapshotBeforeUpdate(m, b)), U = u != null && u.type === R && u.key == null ? Nt(u.props.children) : u, _ = Mt(t, q(U) ? U : [U], e, n, o, r, i, a, _, c, l), s.base = e.__e, e.__u &= -161, s.__h.length && a.push(s), $ && (s.__E = s.__ = null);
        } catch (O) {
          if (a.length = g, e.__v = null, c || i != null) {
            if (O.then) {
              for (e.__u |= c ? 160 : 128; _ && _.nodeType == 8 && _.nextSibling; )
                _ = _.nextSibling;
              i != null && (i[i.indexOf(_)] = null), e.__e = _;
            } else if (i != null)
              for (Y = i.length; Y--; )
                pt(i[Y]);
          } else
            e.__e = n.__e;
          e.__k == null && (e.__k = n.__k || []), O.then || Wt(e), h.__e(O, e, n);
        }
      } else
        i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : _ = e.__e = ye(n.__e, e, n, o, r, i, a, c, l);
    return (u = h.diffed) && u(e), 128 & e.__u ? void 0 : _;
  }
  function Wt(t) {
    t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Wt));
  }
  function Pt(t, e, n) {
    for (var o = 0; o < n.length; o++)
      ht(n[o], n[++o], n[++o]);
    h.__c && h.__c(e, t), t.some(function(r) {
      try {
        t = r.__h, r.__h = [], t.some(function(i) {
          i.call(r);
        });
      } catch (i) {
        h.__e(i, r.__v);
      }
    });
  }
  function Nt(t) {
    return typeof t != "object" || t == null || t.__b > 0 ? t : q(t) ? t.map(Nt) : t.constructor !== void 0 ? null : W({}, t);
  }
  function ye(t, e, n, o, r, i, a, _, c) {
    var l, u, g, s, d, m, b, w = n.props || G, $ = e.props, y = e.type;
    if (y == "svg" ? r = "http://www.w3.org/2000/svg" : y == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), i != null) {
      for (l = 0; l < i.length; l++)
        if ((d = i[l]) && "setAttribute" in d == !!y && (y ? d.localName == y : d.nodeType == 3)) {
          t = d, i[l] = null;
          break;
        }
    }
    if (t == null) {
      if (y == null)
        return document.createTextNode($);
      t = document.createElementNS(r, y, $.is && $), _ && (h.__m && h.__m(e, i), _ = !1), i = null;
    }
    if (y == null)
      w === $ || _ && t.data == $ || (t.data = $);
    else {
      if (i = y == "textarea" && $.defaultValue != null ? null : i && z.call(t.childNodes), !_ && i != null)
        for (w = {}, l = 0; l < t.attributes.length; l++)
          w[(d = t.attributes[l]).name] = d.value;
      for (l in w)
        d = w[l], l == "dangerouslySetInnerHTML" ? g = d : l == "children" || l in $ || l == "value" && "defaultValue" in $ || l == "checked" && "defaultChecked" in $ || et(t, l, null, d, r);
      for (l in $)
        d = $[l], l == "children" ? s = d : l == "dangerouslySetInnerHTML" ? u = d : l == "value" ? m = d : l == "checked" ? b = d : _ && typeof d != "function" || w[l] === d || et(t, l, d, w[l], r);
      if (u)
        _ || g && (u.__html == g.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
      else if (g && (t.innerHTML = ""), Mt(e.type == "template" ? t.content : t, q(s) ? s : [s], e, n, o, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && I(n, 0), _, c), i != null)
        for (l = i.length; l--; )
          pt(i[l]);
      _ && y != "textarea" || (l = "value", y == "progress" && m == null ? t.removeAttribute("value") : m != null && (m !== t[l] || y == "progress" && !m || y == "option" && m != w[l]) && et(t, l, m, w[l], r), l = "checked", b != null && b != t[l] && et(t, l, b, w[l], r));
    }
    return t;
  }
  function ht(t, e, n) {
    try {
      if (typeof t == "function") {
        var o = typeof t.__u == "function";
        o && t.__u(), o && e == null || (t.__u = t(e));
      } else
        t.current = e;
    } catch (r) {
      h.__e(r, n);
    }
  }
  function Ht(t, e, n) {
    var o, r;
    if (h.unmount && h.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || ht(o, null, e)), (o = t.__c) != null) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          h.__e(i, e);
        }
      o.base = o.__P = o.__n = null;
    }
    if (o = t.__k)
      for (r = 0; r < o.length; r++)
        o[r] && Ht(o[r], e, n || typeof t.type != "function");
    n || pt(t.__e), t.__c = t.__ = t.__e = void 0;
  }
  function ve(t, e, n) {
    return this.constructor(t, n);
  }
  function xe(t, e, n) {
    var o, r, i, a;
    e == document && (e = document.documentElement), h.__ && h.__(t, e), r = (o = typeof n == "function") ? null : n && n.__k || e.__k, i = [], a = [], dt(e, t = (!o && n || e).__k = j(R, null, [t]), r || G, G, e.namespaceURI, !o && n ? [n] : r ? null : e.firstChild ? z.call(e.childNodes) : null, i, !o && n ? n : r ? r.__e : e.firstChild, o, a), Pt(i, t, a), t.props.children = null;
  }
  function be(t) {
    function e(n) {
      var o, r;
      return this.getChildContext || (o = /* @__PURE__ */ new Set(), (r = {})[e.__c] = this, this.getChildContext = function() {
        return r;
      }, this.componentWillUnmount = function() {
        o = null;
      }, this.shouldComponentUpdate = function(i) {
        this.props.value != i.value && o.forEach(function(a) {
          a.__e = !0, ut(a);
        });
      }, this.sub = function(i) {
        o.add(i);
        var a = i.componentWillUnmount;
        i.componentWillUnmount = function() {
          o && o.delete(i), a && a.call(i);
        };
      }), n.children;
    }
    return e.__c = "__cC" + Ct++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, o) {
      return n.children(o);
    }).contextType = e, e;
  }
  z = K.slice, h = { __e: function(t, e, n, o) {
    for (var r, i, a; e = e.__; )
      if ((r = e.__c) && !r.__)
        try {
          if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(t)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, o || {}), a = r.__d), a)
            return r.__E = r;
        } catch (_) {
          t = _;
        }
    throw t;
  } }, N = 0, P.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = W({}, this.state), typeof t == "function" && (t = t(W({}, n), this.props)), t && W(n, t), t != null && this.__v && (e && this._sb.push(e), ut(this));
  }, P.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), ut(this));
  }, P.prototype.render = R, H = [], wt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $t = function(t, e) {
    return t.__v.__b - e.__v.__b;
  }, tt.__r = 0, st = Math.random().toString(8), Z = "__d" + st, V = "__a" + st, St = /(PointerCapture)$|Capture$/i, lt = 0, _t = zt(!1), ct = zt(!0), Ct = 0;
  var ke = 0;
  function p(t, e, n, o, r, i) {
    e || (e = {});
    var a, _, c = e;
    if ("ref" in c)
      for (_ in c = {}, e)
        _ == "ref" ? a = e[_] : c[_] = e[_];
    var l = { type: t, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ke, __i: -1, __u: 0, __source: r, __self: i };
    if (typeof t == "function" && (a = t.defaultProps))
      for (_ in a)
        c[_] === void 0 && (c[_] = a[_]);
    return h.vnode && h.vnode(l), l;
  }
  var X, k, ft, Rt, mt = 0, Et = [], S = h, Lt = S.__b, Ut = S.__r, Ot = S.diffed, Ft = S.__c, It = S.unmount, Bt = S.__;
  function gt(t, e) {
    S.__h && S.__h(k, t, mt || e), mt = 0;
    var n = k.__H || (k.__H = { __: [], __h: [] });
    return t >= n.__.length && n.__.push({}), n.__[t];
  }
  function M(t) {
    return mt = 1, we(qt, t);
  }
  function we(t, e, n) {
    var o = gt(X++, 2);
    if (o.t = t, !o.__c && (o.__ = [n ? n(e) : qt(void 0, e), function(_) {
      var c = o.__N ? o.__N[0] : o.__[0], l = o.t(c, _);
      c !== l && (o.__N = [l, o.__[1]], o.__c.setState({}));
    }], o.__c = k, !k.__f)) {
      var r = function(_, c, l) {
        if (!o.__c.__H)
          return !0;
        var u = !1, g = o.__c.props !== _;
        if (o.__c.__H.__.some(function(d) {
          if (d.__N) {
            u = !0;
            var m = d.__[0];
            d.__ = d.__N, d.__N = void 0, m !== d.__[0] && (g = !0);
          }
        }), i) {
          var s = i.call(this, _, c, l);
          return u ? s || g : s;
        }
        return !u || g;
      };
      k.__f = !0;
      var i = k.shouldComponentUpdate, a = k.componentWillUpdate;
      k.componentWillUpdate = function(_, c, l) {
        if (this.__e) {
          var u = i;
          i = void 0, r(_, c, l), i = u;
        }
        a && a.call(this, _, c, l);
      }, k.shouldComponentUpdate = r;
    }
    return o.__N || o.__;
  }
  function jt(t, e) {
    var n = gt(X++, 3);
    !S.__s && Te(n.__H, e) && (n.__ = t, n.u = e, k.__H.__h.push(n));
  }
  function $e(t) {
    var e = k.context[t.__c], n = gt(X++, 9);
    return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(k)), e.props.value) : t.__;
  }
  function Se() {
    for (var t; t = Et.shift(); ) {
      var e = t.__H;
      if (t.__P && e)
        try {
          e.__h.some(nt), e.__h.some(yt), e.__h = [];
        } catch (n) {
          e.__h = [], S.__e(n, t.__v);
        }
    }
  }
  S.__b = function(t) {
    k = null, Lt && Lt(t);
  }, S.__ = function(t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Bt && Bt(t, e);
  }, S.__r = function(t) {
    Ut && Ut(t), X = 0;
    var e = (k = t.__c).__H;
    e && (ft === k ? (e.__h = [], k.__h = [], e.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (e.__h.some(nt), e.__h.some(yt), e.__h = [], X = 0)), ft = k;
  }, S.diffed = function(t) {
    Ot && Ot(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (Et.push(e) !== 1 && Rt === S.requestAnimationFrame || ((Rt = S.requestAnimationFrame) || Ce)(Se)), e.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), ft = k = null;
  }, S.__c = function(t, e) {
    e.some(function(n) {
      try {
        n.__h.some(nt), n.__h = n.__h.filter(function(o) {
          return !o.__ || yt(o);
        });
      } catch (o) {
        e.some(function(r) {
          r.__h && (r.__h = []);
        }), e = [], S.__e(o, n.__v);
      }
    }), Ft && Ft(t, e);
  }, S.unmount = function(t) {
    It && It(t);
    var e, n = t.__c;
    n && n.__H && (n.__H.__.some(function(o) {
      try {
        nt(o);
      } catch (r) {
        e = r;
      }
    }), n.__H = void 0, e && S.__e(e, n.__v));
  };
  var Vt = typeof requestAnimationFrame == "function";
  function Ce(t) {
    var e, n = function() {
      clearTimeout(o), Vt && cancelAnimationFrame(e), setTimeout(t);
    }, o = setTimeout(n, 35);
    Vt && (e = requestAnimationFrame(n));
  }
  function nt(t) {
    var e = k, n = t.__c;
    typeof n == "function" && (t.__c = void 0, n()), k = e;
  }
  function yt(t) {
    var e = k;
    t.__c = t.__(), k = e;
  }
  function Te(t, e) {
    return !t || t.length !== e.length || e.some(function(n, o) {
      return n !== t[o];
    });
  }
  function qt(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Me(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function Jt(t, e) {
    for (var n in t)
      if (n !== "__source" && !(n in e))
        return !0;
    for (var o in e)
      if (o !== "__source" && t[o] !== e[o])
        return !0;
    return !1;
  }
  function Xt(t, e) {
    this.props = t, this.context = e;
  }
  (Xt.prototype = new P()).isPureReactComponent = !0, Xt.prototype.shouldComponentUpdate = function(t, e) {
    return Jt(this.props, t) || Jt(this.state, e);
  };
  var Yt = h.__b;
  h.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Yt && Yt(t);
  };
  var De = h.__e;
  h.__e = function(t, e, n, o) {
    if (t.then) {
      for (var r, i = e; i = i.__; )
        if ((r = i.__c) && r.__c)
          return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), r.__c(t, e);
    }
    De(t, e, n, o);
  };
  var Zt = h.unmount;
  function Gt(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), t.__c.__H = null), (t = Me({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(o) {
      return Gt(o, e, n);
    })), t;
  }
  function Kt(t, e, n) {
    return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(o) {
      return Kt(o, e, n);
    }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
  }
  function vt() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Qt(t) {
    var e = t.__ && t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function ot() {
    this.i = null, this.l = null;
  }
  h.unmount = function(t) {
    var e = t.__c;
    e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Zt && Zt(t);
  }, (vt.prototype = new P()).__c = function(t, e) {
    var n = e.__c, o = this;
    o.o == null && (o.o = []), o.o.push(n);
    var r = Qt(o.__v), i = !1, a = function() {
      i || o.__z || (i = !0, n.__R = null, r ? r(c) : c());
    };
    n.__R = a;
    var _ = n.__P;
    n.__P = null;
    var c = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var l = o.state.__a;
          o.__v.__k[0] = Kt(l, l.__c.__P, l.__c.__O);
        }
        var u;
        for (o.setState({ __a: o.__b = null }); u = o.o.pop(); )
          u.__P = _, u.forceUpdate();
      }
    };
    o.__u++ || 32 & e.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), t.then(a, a);
  }, vt.prototype.componentWillUnmount = function() {
    this.o = [];
  }, vt.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = Gt(this.__b, n, o.__O = o.__P);
      }
      this.__b = null;
    }
    var r = e.__a && j(R, null, t.fallback);
    return r && (r.__u &= -33), [j(R, null, e.__a ? null : t.children), r];
  };
  var te = function(t, e, n) {
    if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
      for (n = t.i; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        t.i = n = n[2];
      }
  };
  (ot.prototype = new P()).__a = function(t) {
    var e = this, n = Qt(e.__v), o = e.l.get(t);
    return o[0]++, function(r) {
      var i = function() {
        e.props.revealOrder ? (o.push(r), te(e, t, o)) : r();
      };
      n ? n(i) : i();
    };
  }, ot.prototype.render = function(t) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var e = J(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; )
      this.l.set(e[n], this.i = [1, 0, this.i]);
    return t.children;
  }, ot.prototype.componentDidUpdate = ot.prototype.componentDidMount = function() {
    var t = this;
    this.l.forEach(function(e, n) {
      te(t, n, e);
    });
  };
  var Ae = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ze = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, We = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Pe = /[A-Z0-9]/g, Ne = typeof document < "u", He = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
  };
  function Re(t, e, n) {
    return e.__k == null && (e.textContent = ""), xe(t, e), typeof n == "function" && n(), t ? t.__c : null;
  }
  P.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(P.prototype, t, { configurable: !0, get: function() {
      return this["UNSAFE_" + t];
    }, set: function(e) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
    } });
  });
  var ee = h.event;
  h.event = function(t) {
    return ee && (t = ee(t)), t.persist = function() {
    }, t.isPropagationStopped = function() {
      return this.cancelBubble;
    }, t.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, t.nativeEvent = t;
  };
  var Ee = { configurable: !0, get: function() {
    return this.class;
  } }, ne = h.vnode;
  h.vnode = function(t) {
    typeof t.type == "string" && function(e) {
      var n = e.props, o = e.type, r = {}, i = o.indexOf("-") == -1;
      for (var a in n) {
        var _ = n[a];
        if (!(a === "value" && "defaultValue" in n && _ == null || Ne && a === "children" && o === "noscript" || a === "class" || a === "className")) {
          var c = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && _ === !0 ? _ = "" : c === "translate" && _ === "no" ? _ = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? a = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || He(n.type) ? c === "onfocus" ? a = "onfocusin" : c === "onblur" ? a = "onfocusout" : We.test(a) && (a = c) : c = a = "oninput" : i && ze.test(a) ? a = a.replace(Pe, "-$&").toLowerCase() : _ === null && (_ = void 0), c === "oninput" && r[a = c] && (a = "oninputCapture"), r[a] = _;
        }
      }
      o == "select" && (r.multiple && Array.isArray(r.value) && (r.value = J(n.children).forEach(function(l) {
        l.props.selected = r.value.indexOf(l.props.value) != -1;
      })), r.defaultValue != null && (r.value = J(n.children).forEach(function(l) {
        l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value;
      }))), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Ee)) : n.className && (r.class = r.className = n.className), e.props = r;
    }(t), t.$$typeof = Ae, ne && ne(t);
  };
  var oe = h.__r;
  h.__r = function(t) {
    oe && oe(t), t.__c;
  };
  var re = h.diffed;
  h.diffed = function(t) {
    re && re(t);
    var e = t.props, n = t.__e;
    n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value);
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const ie = (...t) => t.filter((e, n, o) => !!e && e.trim() !== "" && o.indexOf(e) === n).join(" ").trim();
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const ae = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Le = (t) => t.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (e, n, o) => o ? o.toUpperCase() : n.toLowerCase()
  );
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const se = (t) => {
    const e = Le(t);
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var Ue = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Oe = be({
    size: 24,
    color: "currentColor",
    strokeWidth: 2,
    absoluteStrokeWidth: !1,
    class: ""
  }), Fe = () => $e(Oe);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ie = (t) => {
    for (const e in t)
      if (e.startsWith("aria-") || e === "role" || e === "title")
        return !0;
    return !1;
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Be = ({
    color: t,
    size: e,
    strokeWidth: n,
    absoluteStrokeWidth: o,
    children: r,
    iconNode: i,
    class: a = "",
    ..._
  }) => {
    const {
      size: c = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: u = !1,
      color: g = "currentColor",
      class: s = ""
    } = Fe() ?? {}, d = o ?? u ? Number(n ?? l) * 24 / Number(e ?? c) : n ?? l;
    return j(
      "svg",
      {
        ...Ue,
        width: e ?? c ?? 24,
        height: e ?? c ?? 24,
        stroke: t ?? g,
        "stroke-width": d,
        class: ie("lucide", s, a),
        ...!r && !Ie(_) && { "aria-hidden": "true" },
        ..._
      },
      [...i.map(([m, b]) => j(m, b)), ...J(r)]
    );
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const E = (t, e) => {
    const n = ({ class: o = "", className: r = "", children: i, ...a }) => j(
      Be,
      {
        ...a,
        iconNode: e,
        class: ie(
          `lucide-${ae(se(t))}`,
          `lucide-${ae(t)}`,
          o,
          r
        )
      },
      i
    );
    return n.displayName = se(t), n;
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const je = E("activity", [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ve = E("calendar-days", [
    ["path", { d: "M8 2v3", key: "1ioesn" }],
    ["path", { d: "M16 2v3", key: "otl347" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M8 13h.01", key: "1sbv64" }],
    ["path", { d: "M12 13h.01", key: "y0uutt" }],
    ["path", { d: "M16 13h.01", key: "wip0gl" }],
    ["path", { d: "M8 17h.01", key: "p3bg7i" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
    ["path", { d: "M16 17h.01", key: "ql8jdd" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const qe = E("file-text", [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Je = E("flame", [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih"
      }
    ]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Xe = E("pen-line", [
    ["path", { d: "M13 21h8", key: "1jsn5i" }],
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
      }
    ]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ye = E("trending-down", [
    ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
    ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ze = E("trending-up", [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ge = E("type", [
    ["path", { d: "M12 4v16", key: "1654pz" }],
    ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
    ["path", { d: "M9 20h6", key: "s66wpe" }]
  ]), Ke = {
    streak: "Day Streak",
    totalNotes: "Notes",
    totalChars: "Characters",
    activeDays: "Active Days",
    bestStreak: "Best Streak",
    weeklyPattern: "Weekly Pattern",
    monthlyTrend: "Monthly Trend",
    charTrend: "Char Trend",
    topTags: "Top Tags",
    writeToday: "Write today to start your streak!",
    notes: "notes",
    chars: "chars",
    footer: "Past 365 days",
    tab_weekly: "Weekly",
    tab_heatmap: "Heatmap",
    tab_tags: "Tags",
    tab_trends: "Trends",
    weeks: "Sun,Mon,Tue,Wed,Thu,Fri,Sat",
    months: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
    mostActive: "Most active",
    avgNote: "Avg per note",
    thisMonth: "This month",
    loading: "Loading..."
  }, Qe = {
    streak: "天连续",
    totalNotes: "笔记数",
    totalChars: "总字数",
    activeDays: "活跃天",
    bestStreak: "最长连续",
    weeklyPattern: "每周规律",
    monthlyTrend: "月度趋势",
    charTrend: "字数趋势",
    topTags: "热门标签",
    writeToday: "今天写一篇，开始连续记录！",
    notes: "篇",
    chars: "字",
    footer: "过去365天",
    tab_weekly: "每周",
    tab_heatmap: "热力图",
    tab_tags: "标签",
    tab_trends: "趋势",
    weeks: "日,一,二,三,四,五,六",
    months: "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
    mostActive: "最活跃",
    avgNote: "平均每篇",
    thisMonth: "本月",
    loading: "加载中..."
  };
  function le(t, e = 750) {
    const [n, o] = M(0);
    return jt(() => {
      if (t === 0) {
        o(0);
        return;
      }
      let r;
      const i = performance.now(), a = (_) => {
        const c = Math.min((_ - i) / e, 1), l = 1 - Math.pow(1 - c, 3);
        o(Math.round(l * t)), c < 1 && (r = requestAnimationFrame(a));
      };
      return r = requestAnimationFrame(a), () => cancelAnimationFrame(r);
    }, [t]), n;
  }
  function xt(t) {
    return t >= 1e4 ? (t / 1e4).toFixed(1) + "w" : t >= 1e3 ? (t / 1e3).toFixed(1) + "k" : String(t);
  }
  function tn(t) {
    if (!t.length)
      return { cur: 0, longest: 0 };
    const e = new Set(t.map((c) => c.date)), n = (c) => c.toISOString().slice(0, 10), o = /* @__PURE__ */ new Date();
    o.setHours(0, 0, 0, 0);
    let r = 0;
    for (let c = 0; c <= 365; c++) {
      const l = new Date(o);
      if (l.setDate(l.getDate() - c), e.has(n(l)))
        r++;
      else
        break;
    }
    const i = [...t].sort((c, l) => c.date.localeCompare(l.date));
    let a = 0, _ = 0;
    for (let c = 0; c < i.length; c++)
      _ = c === 0 ? 1 : (new Date(i[c].date).getTime() - new Date(i[c - 1].date).getTime()) / 864e5 === 1 ? _ + 1 : 1, _ > a && (a = _);
    return { cur: r, longest: a };
  }
  function en(t) {
    const e = [], n = /* @__PURE__ */ new Date();
    for (let o = t - 1; o >= 0; o--) {
      const r = new Date(n.getFullYear(), n.getMonth() - o, 1);
      e.push(`${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}`);
    }
    return e;
  }
  function nn({ value: t, label: e, max: n, color: o, unit: r }) {
    const [i, a] = M(!1);
    return /* @__PURE__ */ p(
      "div",
      {
        style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end", position: "relative" },
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
          i && t > 0 && /* @__PURE__ */ p("div", { style: {
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(10,10,20,0.88)",
            color: "#fff",
            padding: "3px 8px",
            borderRadius: "6px",
            fontSize: "10px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 10,
            marginBottom: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
          }, children: [
            e,
            ": ",
            xt(t),
            " ",
            r
          ] }),
          /* @__PURE__ */ p("div", { style: {
            width: "100%",
            borderRadius: "3px 3px 0 0",
            background: t > 0 ? o : "rgba(128,128,128,0.1)",
            height: `${Math.max(t / n * 60, t > 0 ? 4 : 0)}px`,
            transition: "height 0.5s cubic-bezier(.4,0,.2,1)",
            opacity: t > 0 ? 0.35 + 0.65 * (t / n) : 1
          } }),
          /* @__PURE__ */ p("span", { style: { fontSize: "9px", opacity: 0.4, marginTop: "3px", fontWeight: 500, lineHeight: 1 }, children: e })
        ]
      }
    );
  }
  function _e({ data: t, labels: e, color: n, unit: o }) {
    const r = Math.max(...t, 1);
    return /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "flex-end", gap: "4px", height: "80px", width: "100%" }, children: t.map((i, a) => /* @__PURE__ */ p(nn, { value: i, label: e[a], max: r, color: n, unit: o }, a)) });
  }
  function on({ label: t, value: e, max: n, color: o }) {
    return /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }, children: [
      /* @__PURE__ */ p("span", { style: { fontSize: "11px", opacity: 0.6, width: "80px", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t }),
      /* @__PURE__ */ p("div", { style: { flex: 1, background: "rgba(128,128,128,0.1)", borderRadius: "4px", height: "7px", overflow: "hidden" }, children: /* @__PURE__ */ p("div", { style: {
        width: `${e / n * 100}%`,
        height: "100%",
        background: o,
        borderRadius: "4px",
        transition: "width 0.6s cubic-bezier(.4,0,.2,1)"
      } }) }),
      /* @__PURE__ */ p("span", { style: { fontSize: "11px", opacity: 0.45, width: "28px", textAlign: "right", flexShrink: 0 }, children: e })
    ] });
  }
  function rn({ data: t, unit: e, weekLabels: n, monthNames: o }) {
    const r = {};
    t.forEach((f) => {
      r[f.date] = f.count;
    });
    const i = Math.max(...Object.values(r), 1), [a, _] = M(""), c = [], l = /* @__PURE__ */ new Date();
    l.setHours(0, 0, 0, 0);
    const u = new Date(l);
    for (u.setDate(u.getDate() - 23 * 7 + 1); u.getDay() !== 0; )
      u.setDate(u.getDate() - 1);
    let g = [];
    for (let f = new Date(u); f <= l; f.setDate(f.getDate() + 1)) {
      const x = f.toISOString().slice(0, 10);
      g.push({ date: x, count: r[x] || 0 }), g.length === 7 && (c.push(g), g = []);
    }
    g.length && c.push(g);
    const s = [];
    let d = "";
    c.forEach((f, x) => {
      f.forEach((C) => {
        const D = C.date.slice(0, 7);
        if (D !== d) {
          const L = parseInt(C.date.slice(5, 7)) - 1;
          s.push({ label: o[L] ?? "", col: x }), d = D;
        }
      });
    });
    const m = 11, b = 3, w = m + b, $ = (f) => {
      if (f === 0)
        return "rgba(128,128,128,0.12)";
      const x = f / i;
      return x < 0.25 ? "rgba(99,102,241,0.3)" : x < 0.5 ? "rgba(99,102,241,0.52)" : x < 0.75 ? "rgba(99,102,241,0.72)" : "#6366f1";
    }, y = /* @__PURE__ */ new Set([1, 3, 5]);
    return /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ p("style", { children: ".ws-hm::-webkit-scrollbar{display:none}" }),
      /* @__PURE__ */ p("div", { class: "ws-hm", style: { overflowX: "auto", scrollbarWidth: "none" }, children: /* @__PURE__ */ p("div", { style: { display: "inline-flex", gap: "0", flexDirection: "column", minWidth: "max-content" }, children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", marginLeft: "24px", height: "16px", position: "relative", marginBottom: "2px" }, children: s.map(({ label: f, col: x }) => /* @__PURE__ */ p("div", { style: {
          position: "absolute",
          left: `${x * w}px`,
          fontSize: "10px",
          opacity: 0.45,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }, children: f }, x)) }),
        /* @__PURE__ */ p("div", { style: { display: "flex", gap: "0" }, children: [
          /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: `${b}px`, marginRight: "6px", width: "18px" }, children: n.map((f, x) => /* @__PURE__ */ p("div", { style: {
            height: `${m}px`,
            lineHeight: `${m}px`,
            fontSize: "9px",
            opacity: y.has(x) ? 0.4 : 0,
            textAlign: "right",
            fontWeight: 500
          }, children: f.slice(0, 3) }, x)) }),
          /* @__PURE__ */ p("div", { style: { display: "flex", gap: `${b}px` }, children: c.map((f, x) => /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: `${b}px` }, children: f.map((C, D) => /* @__PURE__ */ p(
            "div",
            {
              onMouseEnter: () => _(C.count > 0 ? `${C.date} · ${C.count} ${e}` : C.date),
              onMouseLeave: () => _(""),
              style: {
                width: `${m}px`,
                height: `${m}px`,
                borderRadius: "2px",
                background: $(C.count),
                cursor: "default"
              }
            },
            D
          )) }, x)) })
        ] })
      ] }) }),
      /* @__PURE__ */ p("div", { style: {
        height: "16px",
        fontSize: "11px",
        marginTop: "6px",
        opacity: a ? 0.5 : 0,
        transition: "opacity 0.15s"
      }, children: a })
    ] });
  }
  function an({ target: t }) {
    const e = le(t, 600);
    return /* @__PURE__ */ p(R, { children: e });
  }
  function rt({ raw: t, label: e, icon: n, accent: o, fmt: r = xt }) {
    const i = le(t);
    return /* @__PURE__ */ p("div", { style: {
      borderRadius: "12px",
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      background: `${o}10`,
      border: `1px solid ${o}20`
    }, children: [
      /* @__PURE__ */ p("span", { style: { color: o, opacity: 0.85 }, children: n }),
      /* @__PURE__ */ p("span", { style: { fontSize: "22px", fontWeight: 800, lineHeight: 1, fontVariantNumeric: "tabular-nums" }, children: r(i) }),
      /* @__PURE__ */ p("span", { style: { fontSize: "10px", opacity: 0.5, textAlign: "center", fontWeight: 600 }, children: e })
    ] });
  }
  function sn({ weeklyData: t, weekLabels: e, monthData: n, totalNotes: o, t: r }) {
    const i = Math.max(...t), a = i > 0 ? e[t.indexOf(i)] ?? "—" : "—", _ = n[n.length - 1], c = n[n.length - 2], l = (_ == null ? void 0 : _.totalWords) ?? 0, u = (c == null ? void 0 : c.totalWords) ?? 0, g = u > 0 ? Math.round((l - u) / u * 100) : null, s = o > 0 ? Math.round(n.reduce((m, b) => m + b.totalWords, 0) / o) : 0, d = [
      { icon: /* @__PURE__ */ p(je, { size: 12 }), text: `${r("mostActive")}: ${a}`, color: "#6366f1" },
      { icon: /* @__PURE__ */ p(qe, { size: 12 }), text: `${r("avgNote")}: ${xt(s)} ${r("chars")}`, color: "#8b5cf6" },
      ...g !== null ? [{
        icon: g >= 0 ? /* @__PURE__ */ p(Ze, { size: 12 }) : /* @__PURE__ */ p(Ye, { size: 12 }),
        text: `${r("thisMonth")}: ${g >= 0 ? "+" : ""}${g}%`,
        color: g >= 0 ? "#22c55e" : "#ef4444"
      }] : []
    ];
    return /* @__PURE__ */ p("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }, children: d.map((m, b) => /* @__PURE__ */ p("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      background: `${m.color}10`,
      border: `1px solid ${m.color}25`,
      borderRadius: "20px",
      padding: "4px 10px",
      fontSize: "11px",
      color: m.color,
      fontWeight: 500
    }, children: [
      m.icon,
      /* @__PURE__ */ p("span", { style: { color: "inherit", opacity: 0.85 }, children: m.text })
    ] }, b)) });
  }
  function ln() {
    return /* @__PURE__ */ p("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px" }, children: [
      /* @__PURE__ */ p("style", { children: "@keyframes ws-pulse{0%,100%{opacity:.3}50%{opacity:.65}}" }),
      /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [110, 60, 60].map((t, e) => /* @__PURE__ */ p("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.12}s infinite` } }, e)) }),
      /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [36, 200].map((t, e) => /* @__PURE__ */ p("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.15}s infinite` } }, e)) })
    ] });
  }
  function _n() {
    var ce, pe;
    const [t, e] = M(!0), [n, o] = M([]), [r, i] = M([]), [a, _] = M({ cur: 0, longest: 0 }), [c, l] = M(0), [u, g] = M(0), [s, d] = M([0, 0, 0, 0, 0, 0, 0]), [m, b] = M("heatmap"), [w, $] = M(
      (ce = window.Blinko.i18n.language) != null && ce.startsWith("zh") ? "zh" : "en"
    ), y = w === "zh" ? Qe : Ke, f = (v) => y[v], x = f("weeks").split(","), C = f("months").split(",");
    if (jt(() => {
      const v = window.Blinko.api.analytics, A = en(6);
      Promise.all([
        v.dailyNoteCount.mutate(),
        ...A.map((B) => v.monthlyStats.mutate({ month: B }).catch(() => null))
      ]).then(([B, ...un]) => {
        o(B), _(tn(B)), l(B.reduce((F, bt) => F + bt.count, 0)), g(B.length);
        const ue = [0, 0, 0, 0, 0, 0, 0];
        B.forEach((F) => {
          ue[(/* @__PURE__ */ new Date(F.date + "T12:00:00")).getDay()] += F.count;
        }), d(ue);
        const dn = un.map((F, bt) => F ? { month: A[bt].slice(5), totalWords: F.totalWords, tagStats: F.tagStats || [] } : null).filter(Boolean);
        i(dn), e(!1);
      }).catch(() => e(!1));
    }, []), t)
      return /* @__PURE__ */ p(ln, {});
    const D = r.reduce((v, A) => v + A.totalWords, 0), L = {};
    r.flatMap((v) => v.tagStats).forEach((v) => {
      v.tagName !== "Others" && (L[v.tagName] = (L[v.tagName] || 0) + v.count);
    });
    const U = Object.entries(L).sort((v, A) => A[1] - v[1]).slice(0, 8), Y = ((pe = U[0]) == null ? void 0 : pe[1]) || 1, T = r.map((v) => v.totalWords), O = r.map((v) => v.month), it = a.cur > 0, at = (v, A) => /* @__PURE__ */ p("button", { onClick: () => b(v), style: {
      padding: "5px 14px",
      borderRadius: "8px",
      fontSize: "11px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: m === v ? "rgba(99,102,241,0.15)" : "transparent",
      color: m === v ? "#6366f1" : "inherit",
      opacity: m === v ? 1 : 0.4,
      transition: "all 0.15s"
    }, children: A });
    return /* @__PURE__ */ p("div", { style: { display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px", padding: "20px", minHeight: "280px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ p("style", { children: "@keyframes ws-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.ws-in{animation:ws-up 0.28s ease both}" }),
      /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
        /* @__PURE__ */ p("div", { class: "ws-in", style: {
          background: it ? "linear-gradient(145deg,#7c3aed,#4f46e5 60%,#2563eb)" : "linear-gradient(145deg,#374151,#1f2937)",
          borderRadius: "14px",
          padding: "16px 14px 14px",
          color: "white",
          boxShadow: it ? "0 6px 20px rgba(99,60,237,0.3)" : "none",
          animationDelay: "0ms"
        }, children: [
          /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "8px" }, children: /* @__PURE__ */ p("button", { onClick: () => $((v) => v === "zh" ? "en" : "zh"), style: {
            background: "rgba(255,255,255,0.15)",
            border: "none",
            color: "white",
            borderRadius: "6px",
            padding: "2px 9px",
            fontSize: "10px",
            fontWeight: 600,
            cursor: "pointer"
          }, children: w === "zh" ? "EN" : "中文" }) }),
          /* @__PURE__ */ p("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ p("div", { style: { fontSize: "46px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px", fontVariantNumeric: "tabular-nums" }, children: /* @__PURE__ */ p(an, { target: a.cur }) }),
            /* @__PURE__ */ p("div", { style: { fontSize: "12px", opacity: 0.8, fontWeight: 600, marginTop: "3px" }, children: f("streak") }),
            !it && /* @__PURE__ */ p("div", { style: { fontSize: "11px", opacity: 0.4, marginTop: "4px", lineHeight: 1.4 }, children: f("writeToday") })
          ] }),
          it && /* @__PURE__ */ p("div", { style: { display: "flex", gap: "4px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }, children: [
            Array.from({ length: Math.min(a.cur, 18) }).map((v, A) => /* @__PURE__ */ p("div", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.8)" } }, A)),
            a.cur > 18 && /* @__PURE__ */ p("span", { style: { fontSize: "10px", opacity: 0.6 }, children: [
              "+",
              a.cur - 18
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p("div", { class: "ws-in", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", animationDelay: "60ms" }, children: [
          /* @__PURE__ */ p(rt, { raw: c, label: f("totalNotes"), icon: /* @__PURE__ */ p(Xe, { size: 15 }), accent: "#3b82f6" }),
          /* @__PURE__ */ p(rt, { raw: D, label: f("totalChars"), icon: /* @__PURE__ */ p(Ge, { size: 15 }), accent: "#8b5cf6" }),
          /* @__PURE__ */ p(rt, { raw: u, label: f("activeDays"), icon: /* @__PURE__ */ p(Ve, { size: 15 }), accent: "#22c55e", fmt: String }),
          /* @__PURE__ */ p(rt, { raw: a.longest, label: f("bestStreak"), icon: /* @__PURE__ */ p(Je, { size: 15 }), accent: "#f59e0b", fmt: String })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { class: "ws-in", style: { display: "flex", flexDirection: "column", gap: "10px", animationDelay: "100ms" }, children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", gap: "2px", background: "rgba(128,128,128,0.06)", borderRadius: "10px", padding: "4px" }, children: [
          at("heatmap", f("tab_heatmap")),
          at("weekly", f("tab_weekly")),
          at("tags", f("tab_tags")),
          at("trends", f("tab_trends"))
        ] }),
        /* @__PURE__ */ p("div", { style: {
          flex: 1,
          borderRadius: "12px",
          padding: "14px",
          background: "rgba(128,128,128,0.05)",
          border: "1px solid rgba(128,128,128,0.1)"
        }, children: [
          m === "heatmap" && /* @__PURE__ */ p(R, { children: [
            /* @__PURE__ */ p(rn, { data: n, unit: f("notes"), weekLabels: x, monthNames: C }),
            /* @__PURE__ */ p(
              sn,
              {
                weeklyData: s,
                weekLabels: x,
                monthData: r,
                totalNotes: c,
                t: f
              }
            )
          ] }),
          m === "weekly" && /* @__PURE__ */ p(_e, { data: s, labels: x, color: "#6366f1", unit: f("notes") }),
          m === "tags" && (U.length > 0 ? /* @__PURE__ */ p("div", { children: U.map(([v, A]) => /* @__PURE__ */ p(on, { label: v, value: A, max: Y, color: "linear-gradient(90deg,#6366f1,#8b5cf6)" }, v)) }) : /* @__PURE__ */ p("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" })),
          m === "trends" && (T.length > 0 ? /* @__PURE__ */ p(_e, { data: T, labels: O, color: "#2563eb", unit: f("chars") }) : /* @__PURE__ */ p("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" }))
        ] }),
        /* @__PURE__ */ p("div", { style: { textAlign: "right", fontSize: "10px", opacity: 0.2 }, children: f("footer") })
      ] })
    ] });
  }
  const cn = {
    name: "blinko-writing-stats",
    author: "giluoo",
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
  }, pn = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>";
  System.register([], (t) => ({
    execute: () => {
      t("default", class {
        constructor() {
          de(this, "withSettingPanel", !1);
          Object.assign(this, cn);
        }
        async init() {
          window.Blinko.addToolBarIcon({
            name: "writing-stats",
            icon: pn,
            tooltip: "Writing Stats",
            onClick: () => {
              window.Blinko.showDialog({
                title: "✍️ Writing Stats",
                size: "3xl",
                content: () => {
                  const n = document.createElement("div");
                  return Re(/* @__PURE__ */ p(_n, {}), n), n;
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
