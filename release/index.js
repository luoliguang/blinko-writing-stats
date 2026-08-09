var un = Object.defineProperty;
var dn = (W, h, N) => h in W ? un(W, h, { enumerable: !0, configurable: !0, writable: !0, value: N }) : W[h] = N;
var pe = (W, h, N) => (dn(W, typeof h != "symbol" ? h + "" : h, N), N);
(function() {
  var W, h, N, H, kt, wt, $t, lt, Z, V, St, _t, ct, pt, Ct, G = {}, K = [], ue = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, q = Array.isArray;
  function A(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function ut(t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  }
  function j(t, e, n) {
    var o, r, i, a = {};
    for (i in e)
      i == "key" ? o = e[i] : i == "ref" ? r = e[i] : a[i] = e[i];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? W.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
      for (i in t.defaultProps)
        a[i] === void 0 && (a[i] = t.defaultProps[i]);
    return Q(t, a, o, r, null);
  }
  function Q(t, e, n, o, r) {
    var i = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++N, __i: -1, __u: 0 };
    return r == null && h.vnode != null && h.vnode(i), i;
  }
  function I(t) {
    return t.children;
  }
  function P(t, e) {
    this.props = t, this.context = e;
  }
  function B(t, e) {
    if (e == null)
      return t.__ ? B(t.__, t.__i + 1) : null;
    for (var n; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null)
        return n.__e;
    return typeof t.type == "function" ? B(t) : null;
  }
  function de(t) {
    if (t.__P && t.__d) {
      var e = t.__v, n = e.__e, o = [], r = [], i = A({}, e);
      i.__v = e.__v + 1, h.vnode && h.vnode(i), ht(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, o, n ?? B(e), !!(32 & e.__u), r), i.__v = e.__v, i.__.__k[i.__i] = i, Pt(o, i, r), e.__e = e.__ = null, i.__e != n && Tt(i);
    }
  }
  function Tt(t) {
    if ((t = t.__) != null && t.__c != null)
      return t.__e = t.__c.base = null, t.__k.some(function(e) {
        if (e != null && e.__e != null)
          return t.__e = t.__c.base = e.__e;
      }), Tt(t);
  }
  function dt(t) {
    (!t.__d && (t.__d = !0) && H.push(t) && !tt.__r++ || kt != h.debounceRendering) && ((kt = h.debounceRendering) || wt)(tt);
  }
  function tt() {
    try {
      for (var t, e = 1; H.length; )
        H.length > e && H.sort($t), t = H.shift(), e = H.length, de(t);
    } finally {
      H.length = tt.__r = 0;
    }
  }
  function Mt(t, e, n, o, r, i, a, _, c, l, u) {
    var y, s, d, g, b, w, $ = o && o.__k || K, m = e.length;
    for (c = he(n, e, $, c, m), y = 0; y < m; y++)
      (d = n.__k[y]) != null && (s = d.__i != -1 && $[d.__i] || G, d.__i = y, w = ht(t, d, s, r, i, a, _, c, l, u), g = d.__e, d.ref && s.ref != d.ref && (s.ref && ft(s.ref, null, d), u.push(d.ref, d.__c || g, d)), b == null && g != null && (b = g), 4 & d.__u ? (c = Dt(d, c, t), s.__e && (s.__e = null)) : typeof d.type == "function" && w !== void 0 ? c = w : g && (c = g.nextSibling), d.__u &= -7);
    return n.__e = b, c;
  }
  function he(t, e, n, o, r) {
    var i, a, _, c, l, u = n.length, y = u, s = 0;
    for (t.__k = new Array(r), i = 0; i < r; i++)
      (a = e[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = t.__k[i] = Q(null, a, null, null, null) : q(a) ? a = t.__k[i] = Q(I, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = t.__k[i] = Q(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : t.__k[i] = a, c = i + s, a.__ = t, a.__b = t.__b + 1, _ = null, (l = a.__i = fe(a, n, c, y)) != -1 && (y--, (_ = n[l]) && (_.__u |= 2)), _ == null || _.__v == null ? (l == -1 && (r > u ? s-- : r < u && s++), typeof a.type != "function" && (a.__u |= 4)) : l != c && (l == c - 1 ? s-- : l == c + 1 ? s++ : (l > c ? s-- : s++, a.__u |= 4))) : t.__k[i] = null;
    if (y)
      for (i = 0; i < u; i++)
        (_ = n[i]) != null && !(2 & _.__u) && (_.__e == o && (o = B(_)), Ht(_, _));
    return o;
  }
  function Dt(t, e, n) {
    var o, r;
    if (typeof t.type == "function") {
      for (o = t.__k, r = 0; o && r < o.length; r++)
        o[r] && (o[r].__ = t, e = Dt(o[r], e, n));
      return e;
    }
    t.__e != e && (e && t.type && !e.parentNode && (e = B(t)), e = n.insertBefore(t.__e, e || null));
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
  function fe(t, e, n, o) {
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
  function zt(t, e, n) {
    e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || ue.test(e) ? n : n + "px";
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
              n && e in n || zt(t.style, e, "");
          if (n)
            for (e in n)
              o && n[e] == o[e] || zt(t.style, e, n[e]);
        }
      else if (e[0] == "o" && e[1] == "n")
        i = e != (e = e.replace(St, "$1")), a = e.toLowerCase(), e = a in t || e == "onFocusOut" || e == "onFocusIn" ? a.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? o ? n[V] = o[V] : (n[V] = _t, t.addEventListener(e, i ? pt : ct, i)) : t.removeEventListener(e, i ? pt : ct, i);
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
  function Wt(t) {
    return function(e) {
      if (this.l) {
        var n = this.l[e.type + t];
        if (e[Z] == null)
          e[Z] = _t++;
        else if (e[Z] < n[V])
          return;
        return n(h.event ? h.event(e) : e);
      }
    };
  }
  function ht(t, e, n, o, r, i, a, _, c, l) {
    var u, y, s, d, g, b, w, $, m, f, x, C, M, E, L, Y, T = e.type;
    if (e.constructor !== void 0)
      return null;
    128 & n.__u && (c = !!(32 & n.__u), i = [_ = e.__e = n.__e]), (u = h.__b) && u(e);
    t:
      if (typeof T == "function") {
        y = a.length;
        try {
          if (m = e.props, f = T.prototype && T.prototype.render, x = (u = T.contextType) && o[u.__c], C = u ? x ? x.props.value : u.__ : o, n.__c ? $ = (s = e.__c = n.__c).__ = s.__E : (f ? e.__c = s = new T(m, C) : (e.__c = s = new P(m, C), s.constructor = T, s.render = ye), x && x.sub(s), s.state || (s.state = {}), s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), f && s.__s == null && (s.__s = s.state), f && T.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = A({}, s.__s)), A(s.__s, T.getDerivedStateFromProps(m, s.__s))), g = s.props, b = s.state, s.__v = e, d)
            f && T.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), f && s.componentDidMount != null && s.__h.push(s.componentDidMount);
          else {
            if (f && T.getDerivedStateFromProps == null && m !== g && s.componentWillReceiveProps != null && s.componentWillReceiveProps(m, C), e.__v == n.__v || !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(m, s.__s, C) === !1) {
              e.__v != n.__v && (s.props = m, s.state = s.__s, s.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(U) {
                U && (U.__ = e);
              }), K.push.apply(s.__h, s._sb), s._sb = [], s.__h.length && a.push(s), _ = B(n);
              break t;
            }
            s.componentWillUpdate != null && s.componentWillUpdate(m, s.__s, C), f && s.componentDidUpdate != null && s.__h.push(function() {
              s.componentDidUpdate(g, b, w);
            });
          }
          if (s.context = C, s.props = m, s.__P = t, s.__e = !1, M = h.__r, E = 0, f)
            s.state = s.__s, s.__d = !1, M && M(e), u = s.render(s.props, s.state, s.context), K.push.apply(s.__h, s._sb), s._sb = [];
          else
            do
              s.__d = !1, M && M(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
            while (s.__d && ++E < 25);
          s.state = s.__s, s.getChildContext != null && (o = A(A({}, o), s.getChildContext())), f && !d && s.getSnapshotBeforeUpdate != null && (w = s.getSnapshotBeforeUpdate(g, b)), L = u != null && u.type === I && u.key == null ? Nt(u.props.children) : u, _ = Mt(t, q(L) ? L : [L], e, n, o, r, i, a, _, c, l), s.base = e.__e, e.__u &= -161, s.__h.length && a.push(s), $ && (s.__E = s.__ = null);
        } catch (U) {
          if (a.length = y, e.__v = null, c || i != null) {
            if (U.then) {
              for (e.__u |= c ? 160 : 128; _ && _.nodeType == 8 && _.nextSibling; )
                _ = _.nextSibling;
              i != null && (i[i.indexOf(_)] = null), e.__e = _;
            } else if (i != null)
              for (Y = i.length; Y--; )
                ut(i[Y]);
          } else
            e.__e = n.__e;
          e.__k == null && (e.__k = n.__k || []), U.then || At(e), h.__e(U, e, n);
        }
      } else
        i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : _ = e.__e = ge(n.__e, e, n, o, r, i, a, c, l);
    return (u = h.diffed) && u(e), 128 & e.__u ? void 0 : _;
  }
  function At(t) {
    t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(At));
  }
  function Pt(t, e, n) {
    for (var o = 0; o < n.length; o++)
      ft(n[o], n[++o], n[++o]);
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
    return typeof t != "object" || t == null || t.__b > 0 ? t : q(t) ? t.map(Nt) : t.constructor !== void 0 ? null : A({}, t);
  }
  function ge(t, e, n, o, r, i, a, _, c) {
    var l, u, y, s, d, g, b, w = n.props || G, $ = e.props, m = e.type;
    if (m == "svg" ? r = "http://www.w3.org/2000/svg" : m == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), i != null) {
      for (l = 0; l < i.length; l++)
        if ((d = i[l]) && "setAttribute" in d == !!m && (m ? d.localName == m : d.nodeType == 3)) {
          t = d, i[l] = null;
          break;
        }
    }
    if (t == null) {
      if (m == null)
        return document.createTextNode($);
      t = document.createElementNS(r, m, $.is && $), _ && (h.__m && h.__m(e, i), _ = !1), i = null;
    }
    if (m == null)
      w === $ || _ && t.data == $ || (t.data = $);
    else {
      if (i = m == "textarea" && $.defaultValue != null ? null : i && W.call(t.childNodes), !_ && i != null)
        for (w = {}, l = 0; l < t.attributes.length; l++)
          w[(d = t.attributes[l]).name] = d.value;
      for (l in w)
        d = w[l], l == "dangerouslySetInnerHTML" ? y = d : l == "children" || l in $ || l == "value" && "defaultValue" in $ || l == "checked" && "defaultChecked" in $ || et(t, l, null, d, r);
      for (l in $)
        d = $[l], l == "children" ? s = d : l == "dangerouslySetInnerHTML" ? u = d : l == "value" ? g = d : l == "checked" ? b = d : _ && typeof d != "function" || w[l] === d || et(t, l, d, w[l], r);
      if (u)
        _ || y && (u.__html == y.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
      else if (y && (t.innerHTML = ""), Mt(e.type == "template" ? t.content : t, q(s) ? s : [s], e, n, o, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && B(n, 0), _, c), i != null)
        for (l = i.length; l--; )
          ut(i[l]);
      _ && m != "textarea" || (l = "value", m == "progress" && g == null ? t.removeAttribute("value") : g != null && (g !== t[l] || m == "progress" && !g || m == "option" && g != w[l]) && et(t, l, g, w[l], r), l = "checked", b != null && b != t[l] && et(t, l, b, w[l], r));
    }
    return t;
  }
  function ft(t, e, n) {
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
    if (h.unmount && h.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || ft(o, null, e)), (o = t.__c) != null) {
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
    n || ut(t.__e), t.__c = t.__ = t.__e = void 0;
  }
  function ye(t, e, n) {
    return this.constructor(t, n);
  }
  function me(t, e, n) {
    var o, r, i, a;
    e == document && (e = document.documentElement), h.__ && h.__(t, e), r = (o = typeof n == "function") ? null : n && n.__k || e.__k, i = [], a = [], ht(e, t = (!o && n || e).__k = j(I, null, [t]), r || G, G, e.namespaceURI, !o && n ? [n] : r ? null : e.firstChild ? W.call(e.childNodes) : null, i, !o && n ? n : r ? r.__e : e.firstChild, o, a), Pt(i, t, a), t.props.children = null;
  }
  function ve(t) {
    function e(n) {
      var o, r;
      return this.getChildContext || (o = /* @__PURE__ */ new Set(), (r = {})[e.__c] = this, this.getChildContext = function() {
        return r;
      }, this.componentWillUnmount = function() {
        o = null;
      }, this.shouldComponentUpdate = function(i) {
        this.props.value != i.value && o.forEach(function(a) {
          a.__e = !0, dt(a);
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
  W = K.slice, h = { __e: function(t, e, n, o) {
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
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = A({}, this.state), typeof t == "function" && (t = t(A({}, n), this.props)), t && A(n, t), t != null && this.__v && (e && this._sb.push(e), dt(this));
  }, P.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), dt(this));
  }, P.prototype.render = I, H = [], wt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $t = function(t, e) {
    return t.__v.__b - e.__v.__b;
  }, tt.__r = 0, lt = Math.random().toString(8), Z = "__d" + lt, V = "__a" + lt, St = /(PointerCapture)$|Capture$/i, _t = 0, ct = Wt(!1), pt = Wt(!0), Ct = 0;
  var xe = 0;
  function p(t, e, n, o, r, i) {
    e || (e = {});
    var a, _, c = e;
    if ("ref" in c)
      for (_ in c = {}, e)
        _ == "ref" ? a = e[_] : c[_] = e[_];
    var l = { type: t, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --xe, __i: -1, __u: 0, __source: r, __self: i };
    if (typeof t == "function" && (a = t.defaultProps))
      for (_ in a)
        c[_] === void 0 && (c[_] = a[_]);
    return h.vnode && h.vnode(l), l;
  }
  var X, k, gt, Rt, yt = 0, Et = [], S = h, Lt = S.__b, Ut = S.__r, Ot = S.diffed, It = S.__c, Bt = S.unmount, Ft = S.__;
  function mt(t, e) {
    S.__h && S.__h(k, t, yt || e), yt = 0;
    var n = k.__H || (k.__H = { __: [], __h: [] });
    return t >= n.__.length && n.__.push({}), n.__[t];
  }
  function z(t) {
    return yt = 1, be(Vt, t);
  }
  function be(t, e, n) {
    var o = mt(X++, 2);
    if (o.t = t, !o.__c && (o.__ = [n ? n(e) : Vt(void 0, e), function(_) {
      var c = o.__N ? o.__N[0] : o.__[0], l = o.t(c, _);
      c !== l && (o.__N = [l, o.__[1]], o.__c.setState({}));
    }], o.__c = k, !k.__f)) {
      var r = function(_, c, l) {
        if (!o.__c.__H)
          return !0;
        var u = !1, y = o.__c.props !== _;
        if (o.__c.__H.__.some(function(d) {
          if (d.__N) {
            u = !0;
            var g = d.__[0];
            d.__ = d.__N, d.__N = void 0, g !== d.__[0] && (y = !0);
          }
        }), i) {
          var s = i.call(this, _, c, l);
          return u ? s || y : s;
        }
        return !u || y;
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
  function ke(t, e) {
    var n = mt(X++, 3);
    !S.__s && Ce(n.__H, e) && (n.__ = t, n.u = e, k.__H.__h.push(n));
  }
  function we(t) {
    var e = k.context[t.__c], n = mt(X++, 9);
    return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(k)), e.props.value) : t.__;
  }
  function $e() {
    for (var t; t = Et.shift(); ) {
      var e = t.__H;
      if (t.__P && e)
        try {
          e.__h.some(nt), e.__h.some(vt), e.__h = [];
        } catch (n) {
          e.__h = [], S.__e(n, t.__v);
        }
    }
  }
  S.__b = function(t) {
    k = null, Lt && Lt(t);
  }, S.__ = function(t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ft && Ft(t, e);
  }, S.__r = function(t) {
    Ut && Ut(t), X = 0;
    var e = (k = t.__c).__H;
    e && (gt === k ? (e.__h = [], k.__h = [], e.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (e.__h.some(nt), e.__h.some(vt), e.__h = [], X = 0)), gt = k;
  }, S.diffed = function(t) {
    Ot && Ot(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (Et.push(e) !== 1 && Rt === S.requestAnimationFrame || ((Rt = S.requestAnimationFrame) || Se)($e)), e.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), gt = k = null;
  }, S.__c = function(t, e) {
    e.some(function(n) {
      try {
        n.__h.some(nt), n.__h = n.__h.filter(function(o) {
          return !o.__ || vt(o);
        });
      } catch (o) {
        e.some(function(r) {
          r.__h && (r.__h = []);
        }), e = [], S.__e(o, n.__v);
      }
    }), It && It(t, e);
  }, S.unmount = function(t) {
    Bt && Bt(t);
    var e, n = t.__c;
    n && n.__H && (n.__H.__.some(function(o) {
      try {
        nt(o);
      } catch (r) {
        e = r;
      }
    }), n.__H = void 0, e && S.__e(e, n.__v));
  };
  var jt = typeof requestAnimationFrame == "function";
  function Se(t) {
    var e, n = function() {
      clearTimeout(o), jt && cancelAnimationFrame(e), setTimeout(t);
    }, o = setTimeout(n, 35);
    jt && (e = requestAnimationFrame(n));
  }
  function nt(t) {
    var e = k, n = t.__c;
    typeof n == "function" && (t.__c = void 0, n()), k = e;
  }
  function vt(t) {
    var e = k;
    t.__c = t.__(), k = e;
  }
  function Ce(t, e) {
    return !t || t.length !== e.length || e.some(function(n, o) {
      return n !== t[o];
    });
  }
  function Vt(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Te(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function qt(t, e) {
    for (var n in t)
      if (n !== "__source" && !(n in e))
        return !0;
    for (var o in e)
      if (o !== "__source" && t[o] !== e[o])
        return !0;
    return !1;
  }
  function Jt(t, e) {
    this.props = t, this.context = e;
  }
  (Jt.prototype = new P()).isPureReactComponent = !0, Jt.prototype.shouldComponentUpdate = function(t, e) {
    return qt(this.props, t) || qt(this.state, e);
  };
  var Xt = h.__b;
  h.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Xt && Xt(t);
  };
  var Me = h.__e;
  h.__e = function(t, e, n, o) {
    if (t.then) {
      for (var r, i = e; i = i.__; )
        if ((r = i.__c) && r.__c)
          return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), r.__c(t, e);
    }
    Me(t, e, n, o);
  };
  var Yt = h.unmount;
  function Zt(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), t.__c.__H = null), (t = Te({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(o) {
      return Zt(o, e, n);
    })), t;
  }
  function Gt(t, e, n) {
    return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(o) {
      return Gt(o, e, n);
    }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
  }
  function xt() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Kt(t) {
    var e = t.__ && t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function ot() {
    this.i = null, this.l = null;
  }
  h.unmount = function(t) {
    var e = t.__c;
    e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Yt && Yt(t);
  }, (xt.prototype = new P()).__c = function(t, e) {
    var n = e.__c, o = this;
    o.o == null && (o.o = []), o.o.push(n);
    var r = Kt(o.__v), i = !1, a = function() {
      i || o.__z || (i = !0, n.__R = null, r ? r(c) : c());
    };
    n.__R = a;
    var _ = n.__P;
    n.__P = null;
    var c = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var l = o.state.__a;
          o.__v.__k[0] = Gt(l, l.__c.__P, l.__c.__O);
        }
        var u;
        for (o.setState({ __a: o.__b = null }); u = o.o.pop(); )
          u.__P = _, u.forceUpdate();
      }
    };
    o.__u++ || 32 & e.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), t.then(a, a);
  }, xt.prototype.componentWillUnmount = function() {
    this.o = [];
  }, xt.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = Zt(this.__b, n, o.__O = o.__P);
      }
      this.__b = null;
    }
    var r = e.__a && j(I, null, t.fallback);
    return r && (r.__u &= -33), [j(I, null, e.__a ? null : t.children), r];
  };
  var Qt = function(t, e, n) {
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
    var e = this, n = Kt(e.__v), o = e.l.get(t);
    return o[0]++, function(r) {
      var i = function() {
        e.props.revealOrder ? (o.push(r), Qt(e, t, o)) : r();
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
      Qt(t, n, e);
    });
  };
  var De = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ze = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, We = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ae = /[A-Z0-9]/g, Pe = typeof document < "u", Ne = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
  };
  function He(t, e, n) {
    return e.__k == null && (e.textContent = ""), me(t, e), typeof n == "function" && n(), t ? t.__c : null;
  }
  P.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(P.prototype, t, { configurable: !0, get: function() {
      return this["UNSAFE_" + t];
    }, set: function(e) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
    } });
  });
  var te = h.event;
  h.event = function(t) {
    return te && (t = te(t)), t.persist = function() {
    }, t.isPropagationStopped = function() {
      return this.cancelBubble;
    }, t.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, t.nativeEvent = t;
  };
  var Re = { configurable: !0, get: function() {
    return this.class;
  } }, ee = h.vnode;
  h.vnode = function(t) {
    typeof t.type == "string" && function(e) {
      var n = e.props, o = e.type, r = {}, i = o.indexOf("-") == -1;
      for (var a in n) {
        var _ = n[a];
        if (!(a === "value" && "defaultValue" in n && _ == null || Pe && a === "children" && o === "noscript" || a === "class" || a === "className")) {
          var c = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && _ === !0 ? _ = "" : c === "translate" && _ === "no" ? _ = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? a = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || Ne(n.type) ? c === "onfocus" ? a = "onfocusin" : c === "onblur" ? a = "onfocusout" : We.test(a) && (a = c) : c = a = "oninput" : i && ze.test(a) ? a = a.replace(Ae, "-$&").toLowerCase() : _ === null && (_ = void 0), c === "oninput" && r[a = c] && (a = "oninputCapture"), r[a] = _;
        }
      }
      o == "select" && (r.multiple && Array.isArray(r.value) && (r.value = J(n.children).forEach(function(l) {
        l.props.selected = r.value.indexOf(l.props.value) != -1;
      })), r.defaultValue != null && (r.value = J(n.children).forEach(function(l) {
        l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value;
      }))), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Re)) : n.className && (r.class = r.className = n.className), e.props = r;
    }(t), t.$$typeof = De, ee && ee(t);
  };
  var ne = h.__r;
  h.__r = function(t) {
    ne && ne(t), t.__c;
  };
  var oe = h.diffed;
  h.diffed = function(t) {
    oe && oe(t);
    var e = t.props, n = t.__e;
    n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value);
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const re = (...t) => t.filter((e, n, o) => !!e && e.trim() !== "" && o.indexOf(e) === n).join(" ").trim();
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const ie = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ee = (t) => t.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (e, n, o) => o ? o.toUpperCase() : n.toLowerCase()
  );
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const ae = (t) => {
    const e = Ee(t);
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var Le = {
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
  const Ue = ve({
    size: 24,
    color: "currentColor",
    strokeWidth: 2,
    absoluteStrokeWidth: !1,
    class: ""
  }), Oe = () => we(Ue);
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
      color: y = "currentColor",
      class: s = ""
    } = Oe() ?? {}, d = o ?? u ? Number(n ?? l) * 24 / Number(e ?? c) : n ?? l;
    return j(
      "svg",
      {
        ...Le,
        width: e ?? c ?? 24,
        height: e ?? c ?? 24,
        stroke: t ?? y,
        "stroke-width": d,
        class: re("lucide", s, a),
        ...!r && !Ie(_) && { "aria-hidden": "true" },
        ..._
      },
      [...i.map(([g, b]) => j(g, b)), ...J(r)]
    );
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const R = (t, e) => {
    const n = ({ class: o = "", className: r = "", children: i, ...a }) => j(
      Be,
      {
        ...a,
        iconNode: e,
        class: re(
          `lucide-${ie(ae(t))}`,
          `lucide-${ie(t)}`,
          o,
          r
        )
      },
      i
    );
    return n.displayName = ae(t), n;
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Fe = R("activity", [
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
  const je = R("calendar-days", [
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
  const Ve = R("file-text", [
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
  const qe = R("flame", [
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
  const Je = R("pen-line", [
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
  const Xe = R("trending-down", [
    ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
    ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ye = R("trending-up", [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ze = R("type", [
    ["path", { d: "M12 4v16", key: "1654pz" }],
    ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
    ["path", { d: "M9 20h6", key: "s66wpe" }]
  ]), Ge = {
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
  }, Ke = {
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
  function rt(t) {
    return t >= 1e4 ? (t / 1e4).toFixed(1) + "w" : t >= 1e3 ? (t / 1e3).toFixed(1) + "k" : String(t);
  }
  function Qe(t) {
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
  function tn(t) {
    const e = [], n = /* @__PURE__ */ new Date();
    for (let o = t - 1; o >= 0; o--) {
      const r = new Date(n.getFullYear(), n.getMonth() - o, 1);
      e.push(`${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}`);
    }
    return e;
  }
  function en({ value: t, label: e, max: n, color: o, unit: r }) {
    const [i, a] = z(!1);
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
            rt(t),
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
  function se({ data: t, labels: e, color: n, unit: o }) {
    const r = Math.max(...t, 1);
    return /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "flex-end", gap: "4px", height: "80px", width: "100%" }, children: t.map((i, a) => /* @__PURE__ */ p(en, { value: i, label: e[a], max: r, color: n, unit: o }, a)) });
  }
  function nn({ label: t, value: e, max: n, color: o }) {
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
  function on({ data: t, unit: e, weekLabels: n, monthNames: o }) {
    const r = {};
    t.forEach((f) => {
      r[f.date] = f.count;
    });
    const i = Math.max(...Object.values(r), 1), [a, _] = z(""), c = [], l = /* @__PURE__ */ new Date();
    l.setHours(0, 0, 0, 0);
    const u = new Date(l);
    for (u.setDate(u.getDate() - 23 * 7 + 1); u.getDay() !== 0; )
      u.setDate(u.getDate() - 1);
    let y = [];
    for (let f = new Date(u); f <= l; f.setDate(f.getDate() + 1)) {
      const x = f.toISOString().slice(0, 10);
      y.push({ date: x, count: r[x] || 0 }), y.length === 7 && (c.push(y), y = []);
    }
    y.length && c.push(y);
    const s = [];
    let d = "";
    c.forEach((f, x) => {
      f.forEach((C) => {
        const M = C.date.slice(0, 7);
        if (M !== d) {
          const E = parseInt(C.date.slice(5, 7)) - 1;
          s.push({ label: o[E] ?? "", col: x }), d = M;
        }
      });
    });
    const g = 11, b = 3, w = g + b, $ = (f) => {
      if (f === 0)
        return "rgba(128,128,128,0.12)";
      const x = f / i;
      return x < 0.25 ? "rgba(99,102,241,0.3)" : x < 0.5 ? "rgba(99,102,241,0.52)" : x < 0.75 ? "rgba(99,102,241,0.72)" : "#6366f1";
    }, m = /* @__PURE__ */ new Set([1, 3, 5]);
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
            height: `${g}px`,
            lineHeight: `${g}px`,
            fontSize: "9px",
            opacity: m.has(x) ? 0.4 : 0,
            textAlign: "right",
            fontWeight: 500
          }, children: f.slice(0, 3) }, x)) }),
          /* @__PURE__ */ p("div", { style: { display: "flex", gap: `${b}px` }, children: c.map((f, x) => /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: `${b}px` }, children: f.map((C, M) => /* @__PURE__ */ p(
            "div",
            {
              onMouseEnter: () => _(C.count > 0 ? `${C.date} · ${C.count} ${e}` : C.date),
              onMouseLeave: () => _(""),
              style: {
                width: `${g}px`,
                height: `${g}px`,
                borderRadius: "2px",
                background: $(C.count),
                cursor: "default"
              }
            },
            M
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
  function it({ value: t, label: e, icon: n, accent: o }) {
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
      /* @__PURE__ */ p("span", { style: { fontSize: "22px", fontWeight: 800, lineHeight: 1 }, children: t }),
      /* @__PURE__ */ p("span", { style: { fontSize: "10px", opacity: 0.5, textAlign: "center", fontWeight: 600 }, children: e })
    ] });
  }
  function rn({ weeklyData: t, weekLabels: e, monthData: n, totalNotes: o, t: r }) {
    const i = Math.max(...t), a = i > 0 ? e[t.indexOf(i)] ?? "—" : "—", _ = n[n.length - 1], c = n[n.length - 2], l = (_ == null ? void 0 : _.totalWords) ?? 0, u = (c == null ? void 0 : c.totalWords) ?? 0, y = u > 0 ? Math.round((l - u) / u * 100) : null, s = o > 0 ? Math.round(n.reduce((g, b) => g + b.totalWords, 0) / o) : 0, d = [
      { icon: /* @__PURE__ */ p(Fe, { size: 12 }), text: `${r("mostActive")}: ${a}`, color: "#6366f1" },
      { icon: /* @__PURE__ */ p(Ve, { size: 12 }), text: `${r("avgNote")}: ${rt(s)} ${r("chars")}`, color: "#8b5cf6" },
      ...y !== null ? [{
        icon: y >= 0 ? /* @__PURE__ */ p(Ye, { size: 12 }) : /* @__PURE__ */ p(Xe, { size: 12 }),
        text: `${r("thisMonth")}: ${y >= 0 ? "+" : ""}${y}%`,
        color: y >= 0 ? "#22c55e" : "#ef4444"
      }] : []
    ];
    return /* @__PURE__ */ p("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }, children: d.map((g, b) => /* @__PURE__ */ p("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      background: `${g.color}10`,
      border: `1px solid ${g.color}25`,
      borderRadius: "20px",
      padding: "4px 10px",
      fontSize: "11px",
      color: g.color,
      fontWeight: 500
    }, children: [
      g.icon,
      /* @__PURE__ */ p("span", { style: { color: "inherit", opacity: 0.85 }, children: g.text })
    ] }, b)) });
  }
  function an() {
    return /* @__PURE__ */ p("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px" }, children: [
      /* @__PURE__ */ p("style", { children: "@keyframes ws-pulse{0%,100%{opacity:.3}50%{opacity:.65}}" }),
      /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [110, 60, 60].map((t, e) => /* @__PURE__ */ p("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.12}s infinite` } }, e)) }),
      /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [36, 200].map((t, e) => /* @__PURE__ */ p("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.15}s infinite` } }, e)) })
    ] });
  }
  function sn() {
    var le, _e;
    const [t, e] = z(!0), [n, o] = z([]), [r, i] = z([]), [a, _] = z({ cur: 0, longest: 0 }), [c, l] = z(0), [u, y] = z(0), [s, d] = z([0, 0, 0, 0, 0, 0, 0]), [g, b] = z("heatmap"), [w, $] = z(
      (le = window.Blinko.i18n.language) != null && le.startsWith("zh") ? "zh" : "en"
    ), m = w === "zh" ? Ke : Ge, f = (v) => m[v], x = f("weeks").split(","), C = f("months").split(",");
    if (ke(() => {
      const v = window.Blinko.api.analytics, D = tn(6);
      Promise.all([
        v.dailyNoteCount.mutate(),
        ...D.map((F) => v.monthlyStats.mutate({ month: F }).catch(() => null))
      ]).then(([F, ...cn]) => {
        o(F), _(Qe(F)), l(F.reduce((O, bt) => O + bt.count, 0)), y(F.length);
        const ce = [0, 0, 0, 0, 0, 0, 0];
        F.forEach((O) => {
          ce[(/* @__PURE__ */ new Date(O.date + "T12:00:00")).getDay()] += O.count;
        }), d(ce);
        const pn = cn.map((O, bt) => O ? { month: D[bt].slice(5), totalWords: O.totalWords, tagStats: O.tagStats || [] } : null).filter(Boolean);
        i(pn), e(!1);
      }).catch(() => e(!1));
    }, []), t)
      return /* @__PURE__ */ p(an, {});
    const M = r.reduce((v, D) => v + D.totalWords, 0), E = {};
    r.flatMap((v) => v.tagStats).forEach((v) => {
      v.tagName !== "Others" && (E[v.tagName] = (E[v.tagName] || 0) + v.count);
    });
    const L = Object.entries(E).sort((v, D) => D[1] - v[1]).slice(0, 8), Y = ((_e = L[0]) == null ? void 0 : _e[1]) || 1, T = r.map((v) => v.totalWords), U = r.map((v) => v.month), at = a.cur > 0, st = (v, D) => /* @__PURE__ */ p("button", { onClick: () => b(v), style: {
      padding: "5px 14px",
      borderRadius: "8px",
      fontSize: "11px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: g === v ? "rgba(99,102,241,0.15)" : "transparent",
      color: g === v ? "#6366f1" : "inherit",
      opacity: g === v ? 1 : 0.4,
      transition: "all 0.15s"
    }, children: D });
    return /* @__PURE__ */ p("div", { style: { display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px", padding: "20px", minHeight: "280px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ p("style", { children: "@keyframes ws-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.ws-in{animation:ws-up 0.28s ease both}" }),
      /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
        /* @__PURE__ */ p("div", { class: "ws-in", style: {
          background: at ? "linear-gradient(145deg,#7c3aed,#4f46e5 60%,#2563eb)" : "linear-gradient(145deg,#374151,#1f2937)",
          borderRadius: "14px",
          padding: "16px 14px 14px",
          color: "white",
          boxShadow: at ? "0 6px 20px rgba(99,60,237,0.3)" : "none",
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
            /* @__PURE__ */ p("div", { style: { fontSize: "46px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px" }, children: a.cur }),
            /* @__PURE__ */ p("div", { style: { fontSize: "12px", opacity: 0.8, fontWeight: 600, marginTop: "3px" }, children: f("streak") }),
            !at && /* @__PURE__ */ p("div", { style: { fontSize: "11px", opacity: 0.4, marginTop: "4px", lineHeight: 1.4 }, children: f("writeToday") })
          ] }),
          at && /* @__PURE__ */ p("div", { style: { display: "flex", gap: "4px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }, children: [
            Array.from({ length: Math.min(a.cur, 18) }).map((v, D) => /* @__PURE__ */ p("div", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.8)" } }, D)),
            a.cur > 18 && /* @__PURE__ */ p("span", { style: { fontSize: "10px", opacity: 0.6 }, children: [
              "+",
              a.cur - 18
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p("div", { class: "ws-in", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", animationDelay: "60ms" }, children: [
          /* @__PURE__ */ p(it, { value: rt(c), label: f("totalNotes"), icon: /* @__PURE__ */ p(Je, { size: 15 }), accent: "#3b82f6" }),
          /* @__PURE__ */ p(it, { value: rt(M), label: f("totalChars"), icon: /* @__PURE__ */ p(Ze, { size: 15 }), accent: "#8b5cf6" }),
          /* @__PURE__ */ p(it, { value: u, label: f("activeDays"), icon: /* @__PURE__ */ p(je, { size: 15 }), accent: "#22c55e" }),
          /* @__PURE__ */ p(it, { value: a.longest, label: f("bestStreak"), icon: /* @__PURE__ */ p(qe, { size: 15 }), accent: "#f59e0b" })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { class: "ws-in", style: { display: "flex", flexDirection: "column", gap: "10px", animationDelay: "100ms" }, children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", gap: "2px", background: "rgba(128,128,128,0.06)", borderRadius: "10px", padding: "4px" }, children: [
          st("heatmap", f("tab_heatmap")),
          st("weekly", f("tab_weekly")),
          st("tags", f("tab_tags")),
          st("trends", f("tab_trends"))
        ] }),
        /* @__PURE__ */ p("div", { style: {
          flex: 1,
          borderRadius: "12px",
          padding: "14px",
          background: "rgba(128,128,128,0.05)",
          border: "1px solid rgba(128,128,128,0.1)"
        }, children: [
          g === "heatmap" && /* @__PURE__ */ p(I, { children: [
            /* @__PURE__ */ p(on, { data: n, unit: f("notes"), weekLabels: x, monthNames: C }),
            /* @__PURE__ */ p(
              rn,
              {
                weeklyData: s,
                weekLabels: x,
                monthData: r,
                totalNotes: c,
                t: f
              }
            )
          ] }),
          g === "weekly" && /* @__PURE__ */ p(se, { data: s, labels: x, color: "#6366f1", unit: f("notes") }),
          g === "tags" && (L.length > 0 ? /* @__PURE__ */ p("div", { children: L.map(([v, D]) => /* @__PURE__ */ p(nn, { label: v, value: D, max: Y, color: "linear-gradient(90deg,#6366f1,#8b5cf6)" }, v)) }) : /* @__PURE__ */ p("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" })),
          g === "trends" && (T.length > 0 ? /* @__PURE__ */ p(se, { data: T, labels: U, color: "#2563eb", unit: f("chars") }) : /* @__PURE__ */ p("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" }))
        ] }),
        /* @__PURE__ */ p("div", { style: { textAlign: "right", fontSize: "10px", opacity: 0.2 }, children: f("footer") })
      ] })
    ] });
  }
  const ln = {
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
  }, _n = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>";
  System.register([], (t) => ({
    execute: () => {
      t("default", class {
        constructor() {
          pe(this, "withSettingPanel", !1);
          Object.assign(this, ln);
        }
        async init() {
          window.Blinko.addToolBarIcon({
            name: "writing-stats",
            icon: _n,
            tooltip: "Writing Stats",
            onClick: () => {
              window.Blinko.showDialog({
                title: "✍️ Writing Stats",
                size: "3xl",
                content: () => {
                  const n = document.createElement("div");
                  return He(/* @__PURE__ */ p(sn, {}), n), n;
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
