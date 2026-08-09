var yn = Object.defineProperty;
var gn = (A, y, N) => y in A ? yn(A, y, { enumerable: !0, configurable: !0, writable: !0, value: N }) : A[y] = N;
var ue = (A, y, N) => (gn(A, typeof y != "symbol" ? y + "" : y, N), N);
(function() {
  var A, y, N, H, kt, wt, $t, lt, G, V, St, _t, ct, pt, Ct, Y = {}, K = [], de = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, q = Array.isArray;
  function z(t, e) {
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
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? A.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
      for (i in t.defaultProps)
        a[i] === void 0 && (a[i] = t.defaultProps[i]);
    return Q(t, a, o, r, null);
  }
  function Q(t, e, n, o, r) {
    var i = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++N, __i: -1, __u: 0 };
    return r == null && y.vnode != null && y.vnode(i), i;
  }
  function L(t) {
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
  function he(t) {
    if (t.__P && t.__d) {
      var e = t.__v, n = e.__e, o = [], r = [], i = z({}, e);
      i.__v = e.__v + 1, y.vnode && y.vnode(i), ht(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, o, n ?? B(e), !!(32 & e.__u), r), i.__v = e.__v, i.__.__k[i.__i] = i, Pt(o, i, r), e.__e = e.__ = null, i.__e != n && Mt(i);
    }
  }
  function Mt(t) {
    if ((t = t.__) != null && t.__c != null)
      return t.__e = t.__c.base = null, t.__k.some(function(e) {
        if (e != null && e.__e != null)
          return t.__e = t.__c.base = e.__e;
      }), Mt(t);
  }
  function dt(t) {
    (!t.__d && (t.__d = !0) && H.push(t) && !tt.__r++ || kt != y.debounceRendering) && ((kt = y.debounceRendering) || wt)(tt);
  }
  function tt() {
    try {
      for (var t, e = 1; H.length; )
        H.length > e && H.sort($t), t = H.shift(), e = H.length, he(t);
    } finally {
      H.length = tt.__r = 0;
    }
  }
  function Tt(t, e, n, o, r, i, a, p, l, _, u) {
    var m, s, d, f, k, w, g = o && o.__k || K, v = e.length;
    for (l = fe(n, e, g, l, v), m = 0; m < v; m++)
      (d = n.__k[m]) != null && (s = d.__i != -1 && g[d.__i] || Y, d.__i = m, w = ht(t, d, s, r, i, a, p, l, _, u), f = d.__e, d.ref && s.ref != d.ref && (s.ref && ft(s.ref, null, d), u.push(d.ref, d.__c || f, d)), k == null && f != null && (k = f), 4 & d.__u ? (l = Dt(d, l, t), s.__e && (s.__e = null)) : typeof d.type == "function" && w !== void 0 ? l = w : f && (l = f.nextSibling), d.__u &= -7);
    return n.__e = k, l;
  }
  function fe(t, e, n, o, r) {
    var i, a, p, l, _, u = n.length, m = u, s = 0;
    for (t.__k = new Array(r), i = 0; i < r; i++)
      (a = e[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = t.__k[i] = Q(null, a, null, null, null) : q(a) ? a = t.__k[i] = Q(L, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = t.__k[i] = Q(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : t.__k[i] = a, l = i + s, a.__ = t, a.__b = t.__b + 1, p = null, (_ = a.__i = ye(a, n, l, m)) != -1 && (m--, (p = n[_]) && (p.__u |= 2)), p == null || p.__v == null ? (_ == -1 && (r > u ? s-- : r < u && s++), typeof a.type != "function" && (a.__u |= 4)) : _ != l && (_ == l - 1 ? s-- : _ == l + 1 ? s++ : (_ > l ? s-- : s++, a.__u |= 4))) : t.__k[i] = null;
    if (m)
      for (i = 0; i < u; i++)
        (p = n[i]) != null && !(2 & p.__u) && (p.__e == o && (o = B(p)), Ht(p, p));
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
  function ye(t, e, n, o) {
    var r, i, a, p = t.key, l = t.type, _ = e[n], u = _ != null && (2 & _.__u) == 0;
    if (_ === null && p == null || u && p == _.key && l == _.type)
      return n;
    if (o > (u ? 1 : 0)) {
      for (r = n - 1, i = n + 1; r >= 0 || i < e.length; )
        if ((_ = e[a = r >= 0 ? r-- : i++]) != null && !(2 & _.__u) && p == _.key && l == _.type)
          return a;
    }
    return -1;
  }
  function Wt(t, e, n) {
    e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || de.test(e) ? n : n + "px";
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
              n && e in n || Wt(t.style, e, "");
          if (n)
            for (e in n)
              o && n[e] == o[e] || Wt(t.style, e, n[e]);
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
  function At(t) {
    return function(e) {
      if (this.l) {
        var n = this.l[e.type + t];
        if (e[G] == null)
          e[G] = _t++;
        else if (e[G] < n[V])
          return;
        return n(y.event ? y.event(e) : e);
      }
    };
  }
  function ht(t, e, n, o, r, i, a, p, l, _) {
    var u, m, s, d, f, k, w, g, v, h, x, C, M, R, U, Z, D = e.type;
    if (e.constructor !== void 0)
      return null;
    128 & n.__u && (l = !!(32 & n.__u), i = [p = e.__e = n.__e]), (u = y.__b) && u(e);
    t:
      if (typeof D == "function") {
        m = a.length;
        try {
          if (v = e.props, h = D.prototype && D.prototype.render, x = (u = D.contextType) && o[u.__c], C = u ? x ? x.props.value : u.__ : o, n.__c ? g = (s = e.__c = n.__c).__ = s.__E : (h ? e.__c = s = new D(v, C) : (e.__c = s = new P(v, C), s.constructor = D, s.render = me), x && x.sub(s), s.state || (s.state = {}), s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), h && s.__s == null && (s.__s = s.state), h && D.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = z({}, s.__s)), z(s.__s, D.getDerivedStateFromProps(v, s.__s))), f = s.props, k = s.state, s.__v = e, d)
            h && D.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), h && s.componentDidMount != null && s.__h.push(s.componentDidMount);
          else {
            if (h && D.getDerivedStateFromProps == null && v !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(v, C), e.__v == n.__v || !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(v, s.__s, C) === !1) {
              e.__v != n.__v && (s.props = v, s.state = s.__s, s.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(F) {
                F && (F.__ = e);
              }), K.push.apply(s.__h, s._sb), s._sb = [], s.__h.length && a.push(s), p = B(n);
              break t;
            }
            s.componentWillUpdate != null && s.componentWillUpdate(v, s.__s, C), h && s.componentDidUpdate != null && s.__h.push(function() {
              s.componentDidUpdate(f, k, w);
            });
          }
          if (s.context = C, s.props = v, s.__P = t, s.__e = !1, M = y.__r, R = 0, h)
            s.state = s.__s, s.__d = !1, M && M(e), u = s.render(s.props, s.state, s.context), K.push.apply(s.__h, s._sb), s._sb = [];
          else
            do
              s.__d = !1, M && M(e), u = s.render(s.props, s.state, s.context), s.state = s.__s;
            while (s.__d && ++R < 25);
          s.state = s.__s, s.getChildContext != null && (o = z(z({}, o), s.getChildContext())), h && !d && s.getSnapshotBeforeUpdate != null && (w = s.getSnapshotBeforeUpdate(f, k)), U = u != null && u.type === L && u.key == null ? Nt(u.props.children) : u, p = Tt(t, q(U) ? U : [U], e, n, o, r, i, a, p, l, _), s.base = e.__e, e.__u &= -161, s.__h.length && a.push(s), g && (s.__E = s.__ = null);
        } catch (F) {
          if (a.length = m, e.__v = null, l || i != null) {
            if (F.then) {
              for (e.__u |= l ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; )
                p = p.nextSibling;
              i != null && (i[i.indexOf(p)] = null), e.__e = p;
            } else if (i != null)
              for (Z = i.length; Z--; )
                ut(i[Z]);
          } else
            e.__e = n.__e;
          e.__k == null && (e.__k = n.__k || []), F.then || zt(e), y.__e(F, e, n);
        }
      } else
        i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : p = e.__e = ge(n.__e, e, n, o, r, i, a, l, _);
    return (u = y.diffed) && u(e), 128 & e.__u ? void 0 : p;
  }
  function zt(t) {
    t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(zt));
  }
  function Pt(t, e, n) {
    for (var o = 0; o < n.length; o++)
      ft(n[o], n[++o], n[++o]);
    y.__c && y.__c(e, t), t.some(function(r) {
      try {
        t = r.__h, r.__h = [], t.some(function(i) {
          i.call(r);
        });
      } catch (i) {
        y.__e(i, r.__v);
      }
    });
  }
  function Nt(t) {
    return typeof t != "object" || t == null || t.__b > 0 ? t : q(t) ? t.map(Nt) : t.constructor !== void 0 ? null : z({}, t);
  }
  function ge(t, e, n, o, r, i, a, p, l) {
    var _, u, m, s, d, f, k, w = n.props || Y, g = e.props, v = e.type;
    if (v == "svg" ? r = "http://www.w3.org/2000/svg" : v == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), i != null) {
      for (_ = 0; _ < i.length; _++)
        if ((d = i[_]) && "setAttribute" in d == !!v && (v ? d.localName == v : d.nodeType == 3)) {
          t = d, i[_] = null;
          break;
        }
    }
    if (t == null) {
      if (v == null)
        return document.createTextNode(g);
      t = document.createElementNS(r, v, g.is && g), p && (y.__m && y.__m(e, i), p = !1), i = null;
    }
    if (v == null)
      w === g || p && t.data == g || (t.data = g);
    else {
      if (i = v == "textarea" && g.defaultValue != null ? null : i && A.call(t.childNodes), !p && i != null)
        for (w = {}, _ = 0; _ < t.attributes.length; _++)
          w[(d = t.attributes[_]).name] = d.value;
      for (_ in w)
        d = w[_], _ == "dangerouslySetInnerHTML" ? m = d : _ == "children" || _ in g || _ == "value" && "defaultValue" in g || _ == "checked" && "defaultChecked" in g || et(t, _, null, d, r);
      for (_ in g)
        d = g[_], _ == "children" ? s = d : _ == "dangerouslySetInnerHTML" ? u = d : _ == "value" ? f = d : _ == "checked" ? k = d : p && typeof d != "function" || w[_] === d || et(t, _, d, w[_], r);
      if (u)
        p || m && (u.__html == m.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
      else if (m && (t.innerHTML = ""), Tt(e.type == "template" ? t.content : t, q(s) ? s : [s], e, n, o, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && B(n, 0), p, l), i != null)
        for (_ = i.length; _--; )
          ut(i[_]);
      p && v != "textarea" || (_ = "value", v == "progress" && f == null ? t.removeAttribute("value") : f != null && (f !== t[_] || v == "progress" && !f || v == "option" && f != w[_]) && et(t, _, f, w[_], r), _ = "checked", k != null && k != t[_] && et(t, _, k, w[_], r));
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
      y.__e(r, n);
    }
  }
  function Ht(t, e, n) {
    var o, r;
    if (y.unmount && y.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || ft(o, null, e)), (o = t.__c) != null) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          y.__e(i, e);
        }
      o.base = o.__P = o.__n = null;
    }
    if (o = t.__k)
      for (r = 0; r < o.length; r++)
        o[r] && Ht(o[r], e, n || typeof t.type != "function");
    n || ut(t.__e), t.__c = t.__ = t.__e = void 0;
  }
  function me(t, e, n) {
    return this.constructor(t, n);
  }
  function ve(t, e, n) {
    var o, r, i, a;
    e == document && (e = document.documentElement), y.__ && y.__(t, e), r = (o = typeof n == "function") ? null : n && n.__k || e.__k, i = [], a = [], ht(e, t = (!o && n || e).__k = j(L, null, [t]), r || Y, Y, e.namespaceURI, !o && n ? [n] : r ? null : e.firstChild ? A.call(e.childNodes) : null, i, !o && n ? n : r ? r.__e : e.firstChild, o, a), Pt(i, t, a), t.props.children = null;
  }
  function xe(t) {
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
  A = K.slice, y = { __e: function(t, e, n, o) {
    for (var r, i, a; e = e.__; )
      if ((r = e.__c) && !r.__)
        try {
          if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(t)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, o || {}), a = r.__d), a)
            return r.__E = r;
        } catch (p) {
          t = p;
        }
    throw t;
  } }, N = 0, P.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = z({}, this.state), typeof t == "function" && (t = t(z({}, n), this.props)), t && z(n, t), t != null && this.__v && (e && this._sb.push(e), dt(this));
  }, P.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), dt(this));
  }, P.prototype.render = L, H = [], wt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $t = function(t, e) {
    return t.__v.__b - e.__v.__b;
  }, tt.__r = 0, lt = Math.random().toString(8), G = "__d" + lt, V = "__a" + lt, St = /(PointerCapture)$|Capture$/i, _t = 0, ct = At(!1), pt = At(!0), Ct = 0;
  var be = 0;
  function c(t, e, n, o, r, i) {
    e || (e = {});
    var a, p, l = e;
    if ("ref" in l)
      for (p in l = {}, e)
        p == "ref" ? a = e[p] : l[p] = e[p];
    var _ = { type: t, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --be, __i: -1, __u: 0, __source: r, __self: i };
    if (typeof t == "function" && (a = t.defaultProps))
      for (p in a)
        l[p] === void 0 && (l[p] = a[p]);
    return y.vnode && y.vnode(_), _;
  }
  var X, $, yt, Lt, gt = 0, Et = [], S = y, Rt = S.__b, Ut = S.__r, Ft = S.diffed, Ot = S.__c, Bt = S.unmount, It = S.__;
  function mt(t, e) {
    S.__h && S.__h($, t, gt || e), gt = 0;
    var n = $.__H || ($.__H = { __: [], __h: [] });
    return t >= n.__.length && n.__.push({}), n.__[t];
  }
  function T(t) {
    return gt = 1, ke(qt, t);
  }
  function ke(t, e, n) {
    var o = mt(X++, 2);
    if (o.t = t, !o.__c && (o.__ = [n ? n(e) : qt(void 0, e), function(p) {
      var l = o.__N ? o.__N[0] : o.__[0], _ = o.t(l, p);
      l !== _ && (o.__N = [_, o.__[1]], o.__c.setState({}));
    }], o.__c = $, !$.__f)) {
      var r = function(p, l, _) {
        if (!o.__c.__H)
          return !0;
        var u = !1, m = o.__c.props !== p;
        if (o.__c.__H.__.some(function(d) {
          if (d.__N) {
            u = !0;
            var f = d.__[0];
            d.__ = d.__N, d.__N = void 0, f !== d.__[0] && (m = !0);
          }
        }), i) {
          var s = i.call(this, p, l, _);
          return u ? s || m : s;
        }
        return !u || m;
      };
      $.__f = !0;
      var i = $.shouldComponentUpdate, a = $.componentWillUpdate;
      $.componentWillUpdate = function(p, l, _) {
        if (this.__e) {
          var u = i;
          i = void 0, r(p, l, _), i = u;
        }
        a && a.call(this, p, l, _);
      }, $.shouldComponentUpdate = r;
    }
    return o.__N || o.__;
  }
  function jt(t, e) {
    var n = mt(X++, 3);
    !S.__s && Ce(n.__H, e) && (n.__ = t, n.u = e, $.__H.__h.push(n));
  }
  function we(t) {
    var e = $.context[t.__c], n = mt(X++, 9);
    return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub($)), e.props.value) : t.__;
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
    $ = null, Rt && Rt(t);
  }, S.__ = function(t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), It && It(t, e);
  }, S.__r = function(t) {
    Ut && Ut(t), X = 0;
    var e = ($ = t.__c).__H;
    e && (yt === $ ? (e.__h = [], $.__h = [], e.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (e.__h.some(nt), e.__h.some(vt), e.__h = [], X = 0)), yt = $;
  }, S.diffed = function(t) {
    Ft && Ft(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (Et.push(e) !== 1 && Lt === S.requestAnimationFrame || ((Lt = S.requestAnimationFrame) || Se)($e)), e.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), yt = $ = null;
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
    }), Ot && Ot(t, e);
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
  var Vt = typeof requestAnimationFrame == "function";
  function Se(t) {
    var e, n = function() {
      clearTimeout(o), Vt && cancelAnimationFrame(e), setTimeout(t);
    }, o = setTimeout(n, 35);
    Vt && (e = requestAnimationFrame(n));
  }
  function nt(t) {
    var e = $, n = t.__c;
    typeof n == "function" && (t.__c = void 0, n()), $ = e;
  }
  function vt(t) {
    var e = $;
    t.__c = t.__(), $ = e;
  }
  function Ce(t, e) {
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
  var Zt = y.__b;
  y.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Zt && Zt(t);
  };
  var Te = y.__e;
  y.__e = function(t, e, n, o) {
    if (t.then) {
      for (var r, i = e; i = i.__; )
        if ((r = i.__c) && r.__c)
          return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), r.__c(t, e);
    }
    Te(t, e, n, o);
  };
  var Gt = y.unmount;
  function Yt(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), t.__c.__H = null), (t = Me({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(o) {
      return Yt(o, e, n);
    })), t;
  }
  function Kt(t, e, n) {
    return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(o) {
      return Kt(o, e, n);
    }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
  }
  function xt() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Qt(t) {
    var e = t.__ && t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function ot() {
    this.i = null, this.l = null;
  }
  y.unmount = function(t) {
    var e = t.__c;
    e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Gt && Gt(t);
  }, (xt.prototype = new P()).__c = function(t, e) {
    var n = e.__c, o = this;
    o.o == null && (o.o = []), o.o.push(n);
    var r = Qt(o.__v), i = !1, a = function() {
      i || o.__z || (i = !0, n.__R = null, r ? r(l) : l());
    };
    n.__R = a;
    var p = n.__P;
    n.__P = null;
    var l = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var _ = o.state.__a;
          o.__v.__k[0] = Kt(_, _.__c.__P, _.__c.__O);
        }
        var u;
        for (o.setState({ __a: o.__b = null }); u = o.o.pop(); )
          u.__P = p, u.forceUpdate();
      }
    };
    o.__u++ || 32 & e.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), t.then(a, a);
  }, xt.prototype.componentWillUnmount = function() {
    this.o = [];
  }, xt.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = Yt(this.__b, n, o.__O = o.__P);
      }
      this.__b = null;
    }
    var r = e.__a && j(L, null, t.fallback);
    return r && (r.__u &= -33), [j(L, null, e.__a ? null : t.children), r];
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
  var De = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, We = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ae = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ze = /[A-Z0-9]/g, Pe = typeof document < "u", Ne = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
  };
  function He(t, e, n) {
    return e.__k == null && (e.textContent = ""), ve(t, e), typeof n == "function" && n(), t ? t.__c : null;
  }
  P.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(P.prototype, t, { configurable: !0, get: function() {
      return this["UNSAFE_" + t];
    }, set: function(e) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
    } });
  });
  var ee = y.event;
  y.event = function(t) {
    return ee && (t = ee(t)), t.persist = function() {
    }, t.isPropagationStopped = function() {
      return this.cancelBubble;
    }, t.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, t.nativeEvent = t;
  };
  var Le = { configurable: !0, get: function() {
    return this.class;
  } }, ne = y.vnode;
  y.vnode = function(t) {
    typeof t.type == "string" && function(e) {
      var n = e.props, o = e.type, r = {}, i = o.indexOf("-") == -1;
      for (var a in n) {
        var p = n[a];
        if (!(a === "value" && "defaultValue" in n && p == null || Pe && a === "children" && o === "noscript" || a === "class" || a === "className")) {
          var l = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && p === !0 ? p = "" : l === "translate" && p === "no" ? p = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? a = "ondblclick" : l !== "onchange" || o !== "input" && o !== "textarea" || Ne(n.type) ? l === "onfocus" ? a = "onfocusin" : l === "onblur" ? a = "onfocusout" : Ae.test(a) && (a = l) : l = a = "oninput" : i && We.test(a) ? a = a.replace(ze, "-$&").toLowerCase() : p === null && (p = void 0), l === "oninput" && r[a = l] && (a = "oninputCapture"), r[a] = p;
        }
      }
      o == "select" && (r.multiple && Array.isArray(r.value) && (r.value = J(n.children).forEach(function(_) {
        _.props.selected = r.value.indexOf(_.props.value) != -1;
      })), r.defaultValue != null && (r.value = J(n.children).forEach(function(_) {
        _.props.selected = r.multiple ? r.defaultValue.indexOf(_.props.value) != -1 : r.defaultValue == _.props.value;
      }))), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Le)) : n.className && (r.class = r.className = n.className), e.props = r;
    }(t), t.$$typeof = De, ne && ne(t);
  };
  var oe = y.__r;
  y.__r = function(t) {
    oe && oe(t), t.__c;
  };
  var re = y.diffed;
  y.diffed = function(t) {
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
  const se = (t) => {
    const e = Ee(t);
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var Re = {
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
  const Ue = xe({
    size: 24,
    color: "currentColor",
    strokeWidth: 2,
    absoluteStrokeWidth: !1,
    class: ""
  }), Fe = () => we(Ue);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Oe = (t) => {
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
    ...p
  }) => {
    const {
      size: l = 24,
      strokeWidth: _ = 2,
      absoluteStrokeWidth: u = !1,
      color: m = "currentColor",
      class: s = ""
    } = Fe() ?? {}, d = o ?? u ? Number(n ?? _) * 24 / Number(e ?? l) : n ?? _;
    return j(
      "svg",
      {
        ...Re,
        width: e ?? l ?? 24,
        height: e ?? l ?? 24,
        stroke: t ?? m,
        "stroke-width": d,
        class: ie("lucide", s, a),
        ...!r && !Oe(p) && { "aria-hidden": "true" },
        ...p
      },
      [...i.map(([f, k]) => j(f, k)), ...J(r)]
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
  const Ie = E("activity", [
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
  const je = E("calendar-days", [
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
  const Ve = E("file-text", [
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
  const qe = E("flame", [
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
  const Je = E("pen-line", [
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
  const Xe = E("trending-down", [
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
  ]), Ye = {
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
  function le(t, e = 750) {
    const [n, o] = T(0);
    return jt(() => {
      if (t === 0) {
        o(0);
        return;
      }
      let r;
      const i = performance.now(), a = (p) => {
        const l = Math.min((p - i) / e, 1), _ = 1 - Math.pow(1 - l, 3);
        o(Math.round(_ * t)), l < 1 && (r = requestAnimationFrame(a));
      };
      return r = requestAnimationFrame(a), () => cancelAnimationFrame(r);
    }, [t]), n;
  }
  function rt(t) {
    return t >= 1e4 ? (t / 1e4).toFixed(1) + "w" : t >= 1e3 ? (t / 1e3).toFixed(1) + "k" : String(t);
  }
  function Qe(t) {
    if (!t.length)
      return { cur: 0, longest: 0 };
    const e = new Set(t.map((l) => l.date)), n = (l) => l.toISOString().slice(0, 10), o = /* @__PURE__ */ new Date();
    o.setHours(0, 0, 0, 0);
    let r = 0;
    for (let l = 0; l <= 365; l++) {
      const _ = new Date(o);
      if (_.setDate(_.getDate() - l), e.has(n(_)))
        r++;
      else
        break;
    }
    const i = [...t].sort((l, _) => l.date.localeCompare(_.date));
    let a = 0, p = 0;
    for (let l = 0; l < i.length; l++)
      p = l === 0 ? 1 : (new Date(i[l].date).getTime() - new Date(i[l - 1].date).getTime()) / 864e5 === 1 ? p + 1 : 1, p > a && (a = p);
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
    const [i, a] = T(!1);
    return /* @__PURE__ */ c(
      "div",
      {
        style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end", position: "relative" },
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
          i && t > 0 && /* @__PURE__ */ c("div", { style: {
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
          /* @__PURE__ */ c("div", { style: {
            width: "100%",
            borderRadius: "3px 3px 0 0",
            background: t > 0 ? o : "rgba(128,128,128,0.1)",
            height: `${Math.max(t / n * 60, t > 0 ? 4 : 0)}px`,
            transition: "height 0.5s cubic-bezier(.4,0,.2,1)",
            opacity: t > 0 ? 0.35 + 0.65 * (t / n) : 1
          } }),
          /* @__PURE__ */ c("span", { style: { fontSize: "9px", opacity: 0.4, marginTop: "3px", fontWeight: 500, lineHeight: 1 }, children: e })
        ]
      }
    );
  }
  function nn({ data: t, labels: e, color: n, unit: o }) {
    const r = Math.max(...t, 1);
    return /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "flex-end", gap: "4px", height: "80px", width: "100%" }, children: t.map((i, a) => /* @__PURE__ */ c(en, { value: i, label: e[a], max: r, color: n, unit: o }, a)) });
  }
  function on({ label: t, value: e, max: n, color: o }) {
    return /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }, children: [
      /* @__PURE__ */ c("span", { style: { fontSize: "11px", opacity: 0.6, width: "80px", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t }),
      /* @__PURE__ */ c("div", { style: { flex: 1, background: "rgba(128,128,128,0.1)", borderRadius: "4px", height: "7px", overflow: "hidden" }, children: /* @__PURE__ */ c("div", { style: {
        width: `${e / n * 100}%`,
        height: "100%",
        background: o,
        borderRadius: "4px",
        transition: "width 0.6s cubic-bezier(.4,0,.2,1)"
      } }) }),
      /* @__PURE__ */ c("span", { style: { fontSize: "11px", opacity: 0.45, width: "28px", textAlign: "right", flexShrink: 0 }, children: e })
    ] });
  }
  function rn({ data: t, unit: e, weekLabels: n, monthNames: o }) {
    const r = {};
    t.forEach((h) => {
      r[h.date] = h.count;
    });
    const i = Math.max(...Object.values(r), 1), [a, p] = T(""), l = [], _ = /* @__PURE__ */ new Date();
    _.setHours(0, 0, 0, 0);
    const u = new Date(_);
    for (u.setDate(u.getDate() - 23 * 7 + 1); u.getDay() !== 0; )
      u.setDate(u.getDate() - 1);
    let m = [];
    for (let h = new Date(u); h <= _; h.setDate(h.getDate() + 1)) {
      const x = h.toISOString().slice(0, 10);
      m.push({ date: x, count: r[x] || 0 }), m.length === 7 && (l.push(m), m = []);
    }
    m.length && l.push(m);
    const s = [];
    let d = "";
    l.forEach((h, x) => {
      h.forEach((C) => {
        const M = C.date.slice(0, 7);
        if (M !== d) {
          const R = parseInt(C.date.slice(5, 7)) - 1;
          s.push({ label: o[R] ?? "", col: x }), d = M;
        }
      });
    });
    const f = 11, k = 3, w = f + k, g = (h) => {
      if (h === 0)
        return "rgba(128,128,128,0.12)";
      const x = h / i;
      return x < 0.25 ? "rgba(99,102,241,0.3)" : x < 0.5 ? "rgba(99,102,241,0.52)" : x < 0.75 ? "rgba(99,102,241,0.72)" : "#6366f1";
    }, v = /* @__PURE__ */ new Set([1, 3, 5]);
    return /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ c("style", { children: ".ws-hm::-webkit-scrollbar{display:none}" }),
      /* @__PURE__ */ c("div", { class: "ws-hm", style: { overflowX: "auto", scrollbarWidth: "none" }, children: /* @__PURE__ */ c("div", { style: { display: "inline-flex", gap: "0", flexDirection: "column", minWidth: "max-content" }, children: [
        /* @__PURE__ */ c("div", { style: { display: "flex", marginLeft: "24px", height: "16px", position: "relative", marginBottom: "2px" }, children: s.map(({ label: h, col: x }) => /* @__PURE__ */ c("div", { style: {
          position: "absolute",
          left: `${x * w}px`,
          fontSize: "10px",
          opacity: 0.45,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }, children: h }, x)) }),
        /* @__PURE__ */ c("div", { style: { display: "flex", gap: "0" }, children: [
          /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: `${k}px`, marginRight: "6px", width: "18px" }, children: n.map((h, x) => /* @__PURE__ */ c("div", { style: {
            height: `${f}px`,
            lineHeight: `${f}px`,
            fontSize: "9px",
            opacity: v.has(x) ? 0.4 : 0,
            textAlign: "right",
            fontWeight: 500
          }, children: h.slice(0, 3) }, x)) }),
          /* @__PURE__ */ c("div", { style: { display: "flex", gap: `${k}px` }, children: l.map((h, x) => /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: `${k}px` }, children: h.map((C, M) => /* @__PURE__ */ c(
            "div",
            {
              onMouseEnter: () => p(C.count > 0 ? `${C.date} · ${C.count} ${e}` : C.date),
              onMouseLeave: () => p(""),
              style: {
                width: `${f}px`,
                height: `${f}px`,
                borderRadius: "2px",
                background: g(C.count),
                cursor: "default"
              }
            },
            M
          )) }, x)) })
        ] })
      ] }) }),
      /* @__PURE__ */ c("div", { style: {
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
    return /* @__PURE__ */ c(L, { children: e });
  }
  function it({ raw: t, label: e, icon: n, accent: o, fmt: r = rt }) {
    const i = le(t);
    return /* @__PURE__ */ c("div", { style: {
      borderRadius: "12px",
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      background: `${o}10`,
      border: `1px solid ${o}20`
    }, children: [
      /* @__PURE__ */ c("span", { style: { color: o, opacity: 0.85 }, children: n }),
      /* @__PURE__ */ c("span", { style: { fontSize: "22px", fontWeight: 800, lineHeight: 1, fontVariantNumeric: "tabular-nums" }, children: r(i) }),
      /* @__PURE__ */ c("span", { style: { fontSize: "10px", opacity: 0.5, textAlign: "center", fontWeight: 600 }, children: e })
    ] });
  }
  function sn(t) {
    if (t.length < 2)
      return t.length === 1 ? `M ${t[0].x} ${t[0].y}` : "";
    let e = `M ${t[0].x} ${t[0].y}`;
    for (let n = 0; n < t.length - 1; n++) {
      const o = t[n - 1] ?? t[n], r = t[n], i = t[n + 1], a = t[n + 2] ?? t[n + 1], p = r.x + (i.x - o.x) / 6, l = r.y + (i.y - o.y) / 6, _ = i.x - (a.x - r.x) / 6, u = i.y - (a.y - r.y) / 6;
      e += ` C ${p.toFixed(2)} ${l.toFixed(2)}, ${_.toFixed(2)} ${u.toFixed(2)}, ${i.x.toFixed(2)} ${i.y.toFixed(2)}`;
    }
    return e;
  }
  function ln({ data: t, labels: e, color: n, unit: o }) {
    const [r, i] = T(null);
    if (!t.length)
      return null;
    const a = 400, p = 130, l = { top: 24, bottom: 28, left: 10, right: 10 }, _ = a - l.left - l.right, u = p - l.top - l.bottom, m = Math.max(...t, 1), s = Math.min(...t.filter((g) => g > 0), 0), d = m - s || 1, f = t.map((g, v) => ({
      x: l.left + (t.length === 1 ? _ / 2 : v / (t.length - 1) * _),
      y: l.top + (1 - (g - s) / d) * u,
      v: g
    })), k = sn(f), w = f.length >= 2 ? `${k} L ${f.at(-1).x} ${l.top + u} L ${f[0].x} ${l.top + u} Z` : "";
    return /* @__PURE__ */ c("svg", { viewBox: `0 0 ${a} ${p}`, style: { width: "100%", height: "auto", display: "block", overflow: "visible" }, children: [
      /* @__PURE__ */ c("defs", { children: /* @__PURE__ */ c("linearGradient", { id: "ws-lg", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ c("stop", { offset: "0%", stopColor: n, stopOpacity: "0.28" }),
        /* @__PURE__ */ c("stop", { offset: "100%", stopColor: n, stopOpacity: "0.02" })
      ] }) }),
      [0.25, 0.5, 0.75, 1].map((g) => /* @__PURE__ */ c(
        "line",
        {
          x1: l.left,
          y1: l.top + g * u,
          x2: a - l.right,
          y2: l.top + g * u,
          stroke: "rgba(128,128,128,0.07)",
          strokeWidth: "1"
        },
        g
      )),
      w && /* @__PURE__ */ c("path", { d: w, fill: "url(#ws-lg)" }),
      /* @__PURE__ */ c("path", { d: k, fill: "none", stroke: n, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }),
      f.map((g, v) => {
        const h = r === v, x = 64, C = 20, M = Math.min(Math.max(g.x - x / 2, l.left), a - l.right - x);
        return /* @__PURE__ */ c("g", { children: [
          /* @__PURE__ */ c("text", { x: g.x, y: p - 6, textAnchor: "middle", fontSize: "9.5", fill: "currentColor", opacity: "0.38", fontWeight: "500", children: e[v] }),
          /* @__PURE__ */ c(
            "rect",
            {
              x: g.x - 14,
              y: l.top - 4,
              width: "28",
              height: u + 8,
              fill: "transparent",
              onMouseEnter: () => i(v),
              onMouseLeave: () => i(null)
            }
          ),
          h && /* @__PURE__ */ c(
            "line",
            {
              x1: g.x,
              y1: l.top,
              x2: g.x,
              y2: l.top + u,
              stroke: n,
              strokeWidth: "1",
              strokeDasharray: "3 3",
              opacity: "0.35"
            }
          ),
          /* @__PURE__ */ c(
            "circle",
            {
              cx: g.x,
              cy: g.y,
              r: h ? 5.5 : 3.5,
              fill: h ? n : "white",
              stroke: n,
              strokeWidth: "2",
              style: { transition: "r 0.12s" },
              pointerEvents: "none"
            }
          ),
          h && g.v > 0 && /* @__PURE__ */ c("g", { pointerEvents: "none", children: [
            /* @__PURE__ */ c(
              "rect",
              {
                x: M,
                y: g.y - 28,
                width: x,
                height: C,
                rx: "6",
                fill: "rgba(10,10,20,0.82)"
              }
            ),
            /* @__PURE__ */ c(
              "text",
              {
                x: M + x / 2,
                y: g.y - 14,
                textAnchor: "middle",
                fontSize: "10.5",
                fill: "white",
                fontWeight: "600",
                children: [
                  rt(g.v),
                  " ",
                  o
                ]
              }
            )
          ] })
        ] }, v);
      })
    ] });
  }
  function _n({ weeklyData: t, weekLabels: e, monthData: n, totalNotes: o, t: r }) {
    const i = Math.max(...t), a = i > 0 ? e[t.indexOf(i)] ?? "—" : "—", p = n[n.length - 1], l = n[n.length - 2], _ = (p == null ? void 0 : p.totalWords) ?? 0, u = (l == null ? void 0 : l.totalWords) ?? 0, m = u > 0 ? Math.round((_ - u) / u * 100) : null, s = o > 0 ? Math.round(n.reduce((f, k) => f + k.totalWords, 0) / o) : 0, d = [
      { icon: /* @__PURE__ */ c(Ie, { size: 12 }), text: `${r("mostActive")}: ${a}`, color: "#6366f1" },
      { icon: /* @__PURE__ */ c(Ve, { size: 12 }), text: `${r("avgNote")}: ${rt(s)} ${r("chars")}`, color: "#8b5cf6" },
      ...m !== null ? [{
        icon: m >= 0 ? /* @__PURE__ */ c(Ze, { size: 12 }) : /* @__PURE__ */ c(Xe, { size: 12 }),
        text: `${r("thisMonth")}: ${m >= 0 ? "+" : ""}${m}%`,
        color: m >= 0 ? "#22c55e" : "#ef4444"
      }] : []
    ];
    return /* @__PURE__ */ c("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }, children: d.map((f, k) => /* @__PURE__ */ c("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      background: `${f.color}10`,
      border: `1px solid ${f.color}25`,
      borderRadius: "20px",
      padding: "4px 10px",
      fontSize: "11px",
      color: f.color,
      fontWeight: 500
    }, children: [
      f.icon,
      /* @__PURE__ */ c("span", { style: { color: "inherit", opacity: 0.85 }, children: f.text })
    ] }, k)) });
  }
  function cn() {
    return /* @__PURE__ */ c("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px" }, children: [
      /* @__PURE__ */ c("style", { children: "@keyframes ws-pulse{0%,100%{opacity:.3}50%{opacity:.65}}" }),
      /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [110, 60, 60].map((t, e) => /* @__PURE__ */ c("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.12}s infinite` } }, e)) }),
      /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [36, 200].map((t, e) => /* @__PURE__ */ c("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.15}s infinite` } }, e)) })
    ] });
  }
  function pn() {
    var _e, ce;
    const [t, e] = T(!0), [n, o] = T([]), [r, i] = T([]), [a, p] = T({ cur: 0, longest: 0 }), [l, _] = T(0), [u, m] = T(0), [s, d] = T([0, 0, 0, 0, 0, 0, 0]), [f, k] = T("heatmap"), [w, g] = T(
      (_e = window.Blinko.i18n.language) != null && _e.startsWith("zh") ? "zh" : "en"
    ), v = w === "zh" ? Ke : Ye, h = (b) => v[b], x = h("weeks").split(","), C = h("months").split(",");
    if (jt(() => {
      const b = window.Blinko.api.analytics, W = tn(6);
      Promise.all([
        b.dailyNoteCount.mutate(),
        ...W.map((I) => b.monthlyStats.mutate({ month: I }).catch(() => null))
      ]).then(([I, ...hn]) => {
        o(I), p(Qe(I)), _(I.reduce((O, bt) => O + bt.count, 0)), m(I.length);
        const pe = [0, 0, 0, 0, 0, 0, 0];
        I.forEach((O) => {
          pe[(/* @__PURE__ */ new Date(O.date + "T12:00:00")).getDay()] += O.count;
        }), d(pe);
        const fn = hn.map((O, bt) => O ? { month: W[bt].slice(5), totalWords: O.totalWords, tagStats: O.tagStats || [] } : null).filter(Boolean);
        i(fn), e(!1);
      }).catch(() => e(!1));
    }, []), t)
      return /* @__PURE__ */ c(cn, {});
    const M = r.reduce((b, W) => b + W.totalWords, 0), R = {};
    r.flatMap((b) => b.tagStats).forEach((b) => {
      b.tagName !== "Others" && (R[b.tagName] = (R[b.tagName] || 0) + b.count);
    });
    const U = Object.entries(R).sort((b, W) => W[1] - b[1]).slice(0, 8), Z = ((ce = U[0]) == null ? void 0 : ce[1]) || 1, D = r.map((b) => b.totalWords), F = r.map((b) => b.month), at = a.cur > 0, st = (b, W) => /* @__PURE__ */ c("button", { onClick: () => k(b), style: {
      padding: "5px 14px",
      borderRadius: "8px",
      fontSize: "11px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: f === b ? "rgba(99,102,241,0.15)" : "transparent",
      color: f === b ? "#6366f1" : "inherit",
      opacity: f === b ? 1 : 0.4,
      transition: "all 0.15s"
    }, children: W });
    return /* @__PURE__ */ c("div", { style: { display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px", padding: "20px", minHeight: "280px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ c("style", { children: "@keyframes ws-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.ws-in{animation:ws-up 0.28s ease both}" }),
      /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
        /* @__PURE__ */ c("div", { class: "ws-in", style: {
          background: at ? "linear-gradient(145deg,#7c3aed,#4f46e5 60%,#2563eb)" : "linear-gradient(145deg,#374151,#1f2937)",
          borderRadius: "14px",
          padding: "16px 14px 14px",
          color: "white",
          boxShadow: at ? "0 6px 20px rgba(99,60,237,0.3)" : "none",
          animationDelay: "0ms"
        }, children: [
          /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "8px" }, children: /* @__PURE__ */ c("button", { onClick: () => g((b) => b === "zh" ? "en" : "zh"), style: {
            background: "rgba(255,255,255,0.15)",
            border: "none",
            color: "white",
            borderRadius: "6px",
            padding: "2px 9px",
            fontSize: "10px",
            fontWeight: 600,
            cursor: "pointer"
          }, children: w === "zh" ? "EN" : "中文" }) }),
          /* @__PURE__ */ c("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ c("div", { style: { fontSize: "46px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px", fontVariantNumeric: "tabular-nums" }, children: /* @__PURE__ */ c(an, { target: a.cur }) }),
            /* @__PURE__ */ c("div", { style: { fontSize: "12px", opacity: 0.8, fontWeight: 600, marginTop: "3px" }, children: h("streak") }),
            !at && /* @__PURE__ */ c("div", { style: { fontSize: "11px", opacity: 0.4, marginTop: "4px", lineHeight: 1.4 }, children: h("writeToday") })
          ] }),
          at && /* @__PURE__ */ c("div", { style: { display: "flex", gap: "4px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }, children: [
            Array.from({ length: Math.min(a.cur, 18) }).map((b, W) => /* @__PURE__ */ c("div", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.8)" } }, W)),
            a.cur > 18 && /* @__PURE__ */ c("span", { style: { fontSize: "10px", opacity: 0.6 }, children: [
              "+",
              a.cur - 18
            ] })
          ] })
        ] }),
        /* @__PURE__ */ c("div", { class: "ws-in", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", animationDelay: "60ms" }, children: [
          /* @__PURE__ */ c(it, { raw: l, label: h("totalNotes"), icon: /* @__PURE__ */ c(Je, { size: 15 }), accent: "#3b82f6" }),
          /* @__PURE__ */ c(it, { raw: M, label: h("totalChars"), icon: /* @__PURE__ */ c(Ge, { size: 15 }), accent: "#8b5cf6" }),
          /* @__PURE__ */ c(it, { raw: u, label: h("activeDays"), icon: /* @__PURE__ */ c(je, { size: 15 }), accent: "#22c55e", fmt: String }),
          /* @__PURE__ */ c(it, { raw: a.longest, label: h("bestStreak"), icon: /* @__PURE__ */ c(qe, { size: 15 }), accent: "#f59e0b", fmt: String })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { class: "ws-in", style: { display: "flex", flexDirection: "column", gap: "10px", animationDelay: "100ms" }, children: [
        /* @__PURE__ */ c("div", { style: { display: "flex", gap: "2px", background: "rgba(128,128,128,0.06)", borderRadius: "10px", padding: "4px" }, children: [
          st("heatmap", h("tab_heatmap")),
          st("weekly", h("tab_weekly")),
          st("tags", h("tab_tags")),
          st("trends", h("tab_trends"))
        ] }),
        /* @__PURE__ */ c("div", { style: {
          flex: 1,
          borderRadius: "12px",
          padding: "14px",
          background: "rgba(128,128,128,0.05)",
          border: "1px solid rgba(128,128,128,0.1)"
        }, children: [
          f === "heatmap" && /* @__PURE__ */ c(L, { children: [
            /* @__PURE__ */ c(rn, { data: n, unit: h("notes"), weekLabels: x, monthNames: C }),
            /* @__PURE__ */ c(
              _n,
              {
                weeklyData: s,
                weekLabels: x,
                monthData: r,
                totalNotes: l,
                t: h
              }
            )
          ] }),
          f === "weekly" && /* @__PURE__ */ c(nn, { data: s, labels: x, color: "#6366f1", unit: h("notes") }),
          f === "tags" && (U.length > 0 ? /* @__PURE__ */ c("div", { children: U.map(([b, W]) => /* @__PURE__ */ c(on, { label: b, value: W, max: Z, color: "linear-gradient(90deg,#6366f1,#8b5cf6)" }, b)) }) : /* @__PURE__ */ c("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" })),
          f === "trends" && (D.length > 0 ? /* @__PURE__ */ c(ln, { data: D, labels: F, color: "#6366f1", unit: h("chars") }) : /* @__PURE__ */ c("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" }))
        ] }),
        /* @__PURE__ */ c("div", { style: { textAlign: "right", fontSize: "10px", opacity: 0.2 }, children: h("footer") })
      ] })
    ] });
  }
  const un = {
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
  }, dn = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>";
  System.register([], (t) => ({
    execute: () => {
      t("default", class {
        constructor() {
          ue(this, "withSettingPanel", !1);
          Object.assign(this, un);
        }
        async init() {
          window.Blinko.addToolBarIcon({
            name: "writing-stats",
            icon: dn,
            tooltip: "Writing Stats",
            onClick: () => {
              window.Blinko.showDialog({
                title: "✍️ Writing Stats",
                size: "3xl",
                content: () => {
                  const n = document.createElement("div");
                  return He(/* @__PURE__ */ c(pn, {}), n), n;
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
