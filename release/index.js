var $n = Object.defineProperty;
var Sn = (N, f, I) => f in N ? $n(N, f, { enumerable: !0, configurable: !0, writable: !0, value: I }) : N[f] = I;
var ge = (N, f, I) => (Sn(N, typeof f != "symbol" ? f + "" : f, I), I);
(function() {
  var N, f, I, O, Ct, Tt, Mt, _t, K, Z, Dt, pt, dt, ut, Wt, X = {}, Q = [], me = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, J = Array.isArray;
  function L(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function ht(t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  }
  function V(t, e, n) {
    var o, r, i, a = {};
    for (i in e)
      i == "key" ? o = e[i] : i == "ref" ? r = e[i] : a[i] = e[i];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? N.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
      for (i in t.defaultProps)
        a[i] === void 0 && (a[i] = t.defaultProps[i]);
    return tt(t, a, o, r, null);
  }
  function tt(t, e, n, o, r) {
    var i = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++I, __i: -1, __u: 0 };
    return r == null && f.vnode != null && f.vnode(i), i;
  }
  function U(t) {
    return t.children;
  }
  function E(t, e) {
    this.props = t, this.context = e;
  }
  function j(t, e) {
    if (e == null)
      return t.__ ? j(t.__, t.__i + 1) : null;
    for (var n; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null)
        return n.__e;
    return typeof t.type == "function" ? j(t) : null;
  }
  function xe(t) {
    if (t.__P && t.__d) {
      var e = t.__v, n = e.__e, o = [], r = [], i = L({}, e);
      i.__v = e.__v + 1, f.vnode && f.vnode(i), yt(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, o, n ?? j(e), !!(32 & e.__u), r), i.__v = e.__v, i.__.__k[i.__i] = i, Et(o, i, r), e.__e = e.__ = null, i.__e != n && At(i);
    }
  }
  function At(t) {
    if ((t = t.__) != null && t.__c != null)
      return t.__e = t.__c.base = null, t.__k.some(function(e) {
        if (e != null && e.__e != null)
          return t.__e = t.__c.base = e.__e;
      }), At(t);
  }
  function ft(t) {
    (!t.__d && (t.__d = !0) && O.push(t) && !et.__r++ || Ct != f.debounceRendering) && ((Ct = f.debounceRendering) || Tt)(et);
  }
  function et() {
    try {
      for (var t, e = 1; O.length; )
        O.length > e && O.sort(Mt), t = O.shift(), e = O.length, xe(t);
    } finally {
      O.length = et.__r = 0;
    }
  }
  function zt(t, e, n, o, r, i, a, p, c, _, d) {
    var g, s, u, h, k, v, y = o && o.__k || Q, m = e.length;
    for (c = ve(n, e, y, c, m), g = 0; g < m; g++)
      (u = n.__k[g]) != null && (s = u.__i != -1 && y[u.__i] || X, u.__i = g, v = yt(t, u, s, r, i, a, p, c, _, d), h = u.__e, u.ref && s.ref != u.ref && (s.ref && gt(s.ref, null, u), d.push(u.ref, u.__c || h, u)), k == null && h != null && (k = h), 4 & u.__u ? (c = Pt(u, c, t), s.__e && (s.__e = null)) : typeof u.type == "function" && v !== void 0 ? c = v : h && (c = h.nextSibling), u.__u &= -7);
    return n.__e = k, c;
  }
  function ve(t, e, n, o, r) {
    var i, a, p, c, _, d = n.length, g = d, s = 0;
    for (t.__k = new Array(r), i = 0; i < r; i++)
      (a = e[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = t.__k[i] = tt(null, a, null, null, null) : J(a) ? a = t.__k[i] = tt(U, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = t.__k[i] = tt(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : t.__k[i] = a, c = i + s, a.__ = t, a.__b = t.__b + 1, p = null, (_ = a.__i = be(a, n, c, g)) != -1 && (g--, (p = n[_]) && (p.__u |= 2)), p == null || p.__v == null ? (_ == -1 && (r > d ? s-- : r < d && s++), typeof a.type != "function" && (a.__u |= 4)) : _ != c && (_ == c - 1 ? s-- : _ == c + 1 ? s++ : (_ > c ? s-- : s++, a.__u |= 4))) : t.__k[i] = null;
    if (g)
      for (i = 0; i < d; i++)
        (p = n[i]) != null && !(2 & p.__u) && (p.__e == o && (o = j(p)), It(p, p));
    return o;
  }
  function Pt(t, e, n) {
    var o, r;
    if (typeof t.type == "function") {
      for (o = t.__k, r = 0; o && r < o.length; r++)
        o[r] && (o[r].__ = t, e = Pt(o[r], e, n));
      return e;
    }
    t.__e != e && (e && t.type && !e.parentNode && (e = j(t)), e = n.insertBefore(t.__e, e || null));
    do
      e = e && e.nextSibling;
    while (e != null && e.nodeType == 8);
    return e;
  }
  function Y(t, e) {
    return e = e || [], t == null || typeof t == "boolean" || (J(t) ? t.some(function(n) {
      Y(n, e);
    }) : e.push(t)), e;
  }
  function be(t, e, n, o) {
    var r, i, a, p = t.key, c = t.type, _ = e[n], d = _ != null && (2 & _.__u) == 0;
    if (_ === null && p == null || d && p == _.key && c == _.type)
      return n;
    if (o > (d ? 1 : 0)) {
      for (r = n - 1, i = n + 1; r >= 0 || i < e.length; )
        if ((_ = e[a = r >= 0 ? r-- : i++]) != null && !(2 & _.__u) && p == _.key && c == _.type)
          return a;
    }
    return -1;
  }
  function Nt(t, e, n) {
    e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || me.test(e) ? n : n + "px";
  }
  function nt(t, e, n, o, r) {
    var i, a;
    t:
      if (e == "style")
        if (typeof n == "string")
          t.style.cssText = n;
        else {
          if (typeof o == "string" && (t.style.cssText = o = ""), o)
            for (e in o)
              n && e in n || Nt(t.style, e, "");
          if (n)
            for (e in n)
              o && n[e] == o[e] || Nt(t.style, e, n[e]);
        }
      else if (e[0] == "o" && e[1] == "n")
        i = e != (e = e.replace(Dt, "$1")), a = e.toLowerCase(), e = a in t || e == "onFocusOut" || e == "onFocusIn" ? a.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? o ? n[Z] = o[Z] : (n[Z] = pt, t.addEventListener(e, i ? ut : dt, i)) : t.removeEventListener(e, i ? ut : dt, i);
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
  function Ht(t) {
    return function(e) {
      if (this.l) {
        var n = this.l[e.type + t];
        if (e[K] == null)
          e[K] = pt++;
        else if (e[K] < n[Z])
          return;
        return n(f.event ? f.event(e) : e);
      }
    };
  }
  function yt(t, e, n, o, r, i, a, p, c, _) {
    var d, g, s, u, h, k, v, y, m, S, W, b, w, M, P, C, A = e.type;
    if (e.constructor !== void 0)
      return null;
    128 & n.__u && (c = !!(32 & n.__u), i = [p = e.__e = n.__e]), (d = f.__b) && d(e);
    t:
      if (typeof A == "function") {
        g = a.length;
        try {
          if (m = e.props, S = A.prototype && A.prototype.render, W = (d = A.contextType) && o[d.__c], b = d ? W ? W.props.value : d.__ : o, n.__c ? y = (s = e.__c = n.__c).__ = s.__E : (S ? e.__c = s = new A(m, b) : (e.__c = s = new E(m, b), s.constructor = A, s.render = we), W && W.sub(s), s.state || (s.state = {}), s.__n = o, u = s.__d = !0, s.__h = [], s._sb = []), S && s.__s == null && (s.__s = s.state), S && A.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = L({}, s.__s)), L(s.__s, A.getDerivedStateFromProps(m, s.__s))), h = s.props, k = s.state, s.__v = e, u)
            S && A.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), S && s.componentDidMount != null && s.__h.push(s.componentDidMount);
          else {
            if (S && A.getDerivedStateFromProps == null && m !== h && s.componentWillReceiveProps != null && s.componentWillReceiveProps(m, b), e.__v == n.__v || !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(m, s.__s, b) === !1) {
              e.__v != n.__v && (s.props = m, s.state = s.__s, s.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(R) {
                R && (R.__ = e);
              }), Q.push.apply(s.__h, s._sb), s._sb = [], s.__h.length && a.push(s), p = j(n);
              break t;
            }
            s.componentWillUpdate != null && s.componentWillUpdate(m, s.__s, b), S && s.componentDidUpdate != null && s.__h.push(function() {
              s.componentDidUpdate(h, k, v);
            });
          }
          if (s.context = b, s.props = m, s.__P = t, s.__e = !1, w = f.__r, M = 0, S)
            s.state = s.__s, s.__d = !1, w && w(e), d = s.render(s.props, s.state, s.context), Q.push.apply(s.__h, s._sb), s._sb = [];
          else
            do
              s.__d = !1, w && w(e), d = s.render(s.props, s.state, s.context), s.state = s.__s;
            while (s.__d && ++M < 25);
          s.state = s.__s, s.getChildContext != null && (o = L(L({}, o), s.getChildContext())), S && !u && s.getSnapshotBeforeUpdate != null && (v = s.getSnapshotBeforeUpdate(h, k)), P = d != null && d.type === U && d.key == null ? Rt(d.props.children) : d, p = zt(t, J(P) ? P : [P], e, n, o, r, i, a, p, c, _), s.base = e.__e, e.__u &= -161, s.__h.length && a.push(s), y && (s.__E = s.__ = null);
        } catch (R) {
          if (a.length = g, e.__v = null, c || i != null) {
            if (R.then) {
              for (e.__u |= c ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; )
                p = p.nextSibling;
              i != null && (i[i.indexOf(p)] = null), e.__e = p;
            } else if (i != null)
              for (C = i.length; C--; )
                ht(i[C]);
          } else
            e.__e = n.__e;
          e.__k == null && (e.__k = n.__k || []), R.then || Lt(e), f.__e(R, e, n);
        }
      } else
        i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : p = e.__e = ke(n.__e, e, n, o, r, i, a, c, _);
    return (d = f.diffed) && d(e), 128 & e.__u ? void 0 : p;
  }
  function Lt(t) {
    t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Lt));
  }
  function Et(t, e, n) {
    for (var o = 0; o < n.length; o++)
      gt(n[o], n[++o], n[++o]);
    f.__c && f.__c(e, t), t.some(function(r) {
      try {
        t = r.__h, r.__h = [], t.some(function(i) {
          i.call(r);
        });
      } catch (i) {
        f.__e(i, r.__v);
      }
    });
  }
  function Rt(t) {
    return typeof t != "object" || t == null || t.__b > 0 ? t : J(t) ? t.map(Rt) : t.constructor !== void 0 ? null : L({}, t);
  }
  function ke(t, e, n, o, r, i, a, p, c) {
    var _, d, g, s, u, h, k, v = n.props || X, y = e.props, m = e.type;
    if (m == "svg" ? r = "http://www.w3.org/2000/svg" : m == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), i != null) {
      for (_ = 0; _ < i.length; _++)
        if ((u = i[_]) && "setAttribute" in u == !!m && (m ? u.localName == m : u.nodeType == 3)) {
          t = u, i[_] = null;
          break;
        }
    }
    if (t == null) {
      if (m == null)
        return document.createTextNode(y);
      t = document.createElementNS(r, m, y.is && y), p && (f.__m && f.__m(e, i), p = !1), i = null;
    }
    if (m == null)
      v === y || p && t.data == y || (t.data = y);
    else {
      if (i = m == "textarea" && y.defaultValue != null ? null : i && N.call(t.childNodes), !p && i != null)
        for (v = {}, _ = 0; _ < t.attributes.length; _++)
          v[(u = t.attributes[_]).name] = u.value;
      for (_ in v)
        u = v[_], _ == "dangerouslySetInnerHTML" ? g = u : _ == "children" || _ in y || _ == "value" && "defaultValue" in y || _ == "checked" && "defaultChecked" in y || nt(t, _, null, u, r);
      for (_ in y)
        u = y[_], _ == "children" ? s = u : _ == "dangerouslySetInnerHTML" ? d = u : _ == "value" ? h = u : _ == "checked" ? k = u : p && typeof u != "function" || v[_] === u || nt(t, _, u, v[_], r);
      if (d)
        p || g && (d.__html == g.__html || d.__html == t.innerHTML) || (t.innerHTML = d.__html), e.__k = [];
      else if (g && (t.innerHTML = ""), zt(e.type == "template" ? t.content : t, J(s) ? s : [s], e, n, o, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && j(n, 0), p, c), i != null)
        for (_ = i.length; _--; )
          ht(i[_]);
      p && m != "textarea" || (_ = "value", m == "progress" && h == null ? t.removeAttribute("value") : h != null && (h !== t[_] || m == "progress" && !h || m == "option" && h != v[_]) && nt(t, _, h, v[_], r), _ = "checked", k != null && k != t[_] && nt(t, _, k, v[_], r));
    }
    return t;
  }
  function gt(t, e, n) {
    try {
      if (typeof t == "function") {
        var o = typeof t.__u == "function";
        o && t.__u(), o && e == null || (t.__u = t(e));
      } else
        t.current = e;
    } catch (r) {
      f.__e(r, n);
    }
  }
  function It(t, e, n) {
    var o, r;
    if (f.unmount && f.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || gt(o, null, e)), (o = t.__c) != null) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          f.__e(i, e);
        }
      o.base = o.__P = o.__n = null;
    }
    if (o = t.__k)
      for (r = 0; r < o.length; r++)
        o[r] && It(o[r], e, n || typeof t.type != "function");
    n || ht(t.__e), t.__c = t.__ = t.__e = void 0;
  }
  function we(t, e, n) {
    return this.constructor(t, n);
  }
  function $e(t, e, n) {
    var o, r, i, a;
    e == document && (e = document.documentElement), f.__ && f.__(t, e), r = (o = typeof n == "function") ? null : n && n.__k || e.__k, i = [], a = [], yt(e, t = (!o && n || e).__k = V(U, null, [t]), r || X, X, e.namespaceURI, !o && n ? [n] : r ? null : e.firstChild ? N.call(e.childNodes) : null, i, !o && n ? n : r ? r.__e : e.firstChild, o, a), Et(i, t, a), t.props.children = null;
  }
  function Se(t) {
    function e(n) {
      var o, r;
      return this.getChildContext || (o = /* @__PURE__ */ new Set(), (r = {})[e.__c] = this, this.getChildContext = function() {
        return r;
      }, this.componentWillUnmount = function() {
        o = null;
      }, this.shouldComponentUpdate = function(i) {
        this.props.value != i.value && o.forEach(function(a) {
          a.__e = !0, ft(a);
        });
      }, this.sub = function(i) {
        o.add(i);
        var a = i.componentWillUnmount;
        i.componentWillUnmount = function() {
          o && o.delete(i), a && a.call(i);
        };
      }), n.children;
    }
    return e.__c = "__cC" + Wt++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, o) {
      return n.children(o);
    }).contextType = e, e;
  }
  N = Q.slice, f = { __e: function(t, e, n, o) {
    for (var r, i, a; e = e.__; )
      if ((r = e.__c) && !r.__)
        try {
          if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(t)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, o || {}), a = r.__d), a)
            return r.__E = r;
        } catch (p) {
          t = p;
        }
    throw t;
  } }, I = 0, E.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = L({}, this.state), typeof t == "function" && (t = t(L({}, n), this.props)), t && L(n, t), t != null && this.__v && (e && this._sb.push(e), ft(this));
  }, E.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), ft(this));
  }, E.prototype.render = U, O = [], Tt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Mt = function(t, e) {
    return t.__v.__b - e.__v.__b;
  }, et.__r = 0, _t = Math.random().toString(8), K = "__d" + _t, Z = "__a" + _t, Dt = /(PointerCapture)$|Capture$/i, pt = 0, dt = Ht(!1), ut = Ht(!0), Wt = 0;
  var Ce = 0;
  function l(t, e, n, o, r, i) {
    e || (e = {});
    var a, p, c = e;
    if ("ref" in c)
      for (p in c = {}, e)
        p == "ref" ? a = e[p] : c[p] = e[p];
    var _ = { type: t, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ce, __i: -1, __u: 0, __source: r, __self: i };
    if (typeof t == "function" && (a = t.defaultProps))
      for (p in a)
        c[p] === void 0 && (c[p] = a[p]);
    return f.vnode && f.vnode(_), _;
  }
  var G, $, mt, Ot, xt = 0, Ut = [], T = f, Ft = T.__b, Bt = T.__r, jt = T.diffed, Vt = T.__c, qt = T.unmount, Zt = T.__;
  function vt(t, e) {
    T.__h && T.__h($, t, xt || e), xt = 0;
    var n = $.__H || ($.__H = { __: [], __h: [] });
    return t >= n.__.length && n.__.push({}), n.__[t];
  }
  function D(t) {
    return xt = 1, Te(Gt, t);
  }
  function Te(t, e, n) {
    var o = vt(G++, 2);
    if (o.t = t, !o.__c && (o.__ = [n ? n(e) : Gt(void 0, e), function(p) {
      var c = o.__N ? o.__N[0] : o.__[0], _ = o.t(c, p);
      c !== _ && (o.__N = [_, o.__[1]], o.__c.setState({}));
    }], o.__c = $, !$.__f)) {
      var r = function(p, c, _) {
        if (!o.__c.__H)
          return !0;
        var d = !1, g = o.__c.props !== p;
        if (o.__c.__H.__.some(function(u) {
          if (u.__N) {
            d = !0;
            var h = u.__[0];
            u.__ = u.__N, u.__N = void 0, h !== u.__[0] && (g = !0);
          }
        }), i) {
          var s = i.call(this, p, c, _);
          return d ? s || g : s;
        }
        return !d || g;
      };
      $.__f = !0;
      var i = $.shouldComponentUpdate, a = $.componentWillUpdate;
      $.componentWillUpdate = function(p, c, _) {
        if (this.__e) {
          var d = i;
          i = void 0, r(p, c, _), i = d;
        }
        a && a.call(this, p, c, _);
      }, $.shouldComponentUpdate = r;
    }
    return o.__N || o.__;
  }
  function Jt(t, e) {
    var n = vt(G++, 3);
    !T.__s && Ae(n.__H, e) && (n.__ = t, n.u = e, $.__H.__h.push(n));
  }
  function Me(t) {
    var e = $.context[t.__c], n = vt(G++, 9);
    return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub($)), e.props.value) : t.__;
  }
  function De() {
    for (var t; t = Ut.shift(); ) {
      var e = t.__H;
      if (t.__P && e)
        try {
          e.__h.some(ot), e.__h.some(bt), e.__h = [];
        } catch (n) {
          e.__h = [], T.__e(n, t.__v);
        }
    }
  }
  T.__b = function(t) {
    $ = null, Ft && Ft(t);
  }, T.__ = function(t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Zt && Zt(t, e);
  }, T.__r = function(t) {
    Bt && Bt(t), G = 0;
    var e = ($ = t.__c).__H;
    e && (mt === $ ? (e.__h = [], $.__h = [], e.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (e.__h.some(ot), e.__h.some(bt), e.__h = [], G = 0)), mt = $;
  }, T.diffed = function(t) {
    jt && jt(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (Ut.push(e) !== 1 && Ot === T.requestAnimationFrame || ((Ot = T.requestAnimationFrame) || We)(De)), e.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), mt = $ = null;
  }, T.__c = function(t, e) {
    e.some(function(n) {
      try {
        n.__h.some(ot), n.__h = n.__h.filter(function(o) {
          return !o.__ || bt(o);
        });
      } catch (o) {
        e.some(function(r) {
          r.__h && (r.__h = []);
        }), e = [], T.__e(o, n.__v);
      }
    }), Vt && Vt(t, e);
  }, T.unmount = function(t) {
    qt && qt(t);
    var e, n = t.__c;
    n && n.__H && (n.__H.__.some(function(o) {
      try {
        ot(o);
      } catch (r) {
        e = r;
      }
    }), n.__H = void 0, e && T.__e(e, n.__v));
  };
  var Yt = typeof requestAnimationFrame == "function";
  function We(t) {
    var e, n = function() {
      clearTimeout(o), Yt && cancelAnimationFrame(e), setTimeout(t);
    }, o = setTimeout(n, 35);
    Yt && (e = requestAnimationFrame(n));
  }
  function ot(t) {
    var e = $, n = t.__c;
    typeof n == "function" && (t.__c = void 0, n()), $ = e;
  }
  function bt(t) {
    var e = $;
    t.__c = t.__(), $ = e;
  }
  function Ae(t, e) {
    return !t || t.length !== e.length || e.some(function(n, o) {
      return n !== t[o];
    });
  }
  function Gt(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ze(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function Kt(t, e) {
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
  (Xt.prototype = new E()).isPureReactComponent = !0, Xt.prototype.shouldComponentUpdate = function(t, e) {
    return Kt(this.props, t) || Kt(this.state, e);
  };
  var Qt = f.__b;
  f.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Qt && Qt(t);
  };
  var Pe = f.__e;
  f.__e = function(t, e, n, o) {
    if (t.then) {
      for (var r, i = e; i = i.__; )
        if ((r = i.__c) && r.__c)
          return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), r.__c(t, e);
    }
    Pe(t, e, n, o);
  };
  var te = f.unmount;
  function ee(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), t.__c.__H = null), (t = ze({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(o) {
      return ee(o, e, n);
    })), t;
  }
  function ne(t, e, n) {
    return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(o) {
      return ne(o, e, n);
    }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
  }
  function kt() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function oe(t) {
    var e = t.__ && t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function rt() {
    this.i = null, this.l = null;
  }
  f.unmount = function(t) {
    var e = t.__c;
    e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), te && te(t);
  }, (kt.prototype = new E()).__c = function(t, e) {
    var n = e.__c, o = this;
    o.o == null && (o.o = []), o.o.push(n);
    var r = oe(o.__v), i = !1, a = function() {
      i || o.__z || (i = !0, n.__R = null, r ? r(c) : c());
    };
    n.__R = a;
    var p = n.__P;
    n.__P = null;
    var c = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var _ = o.state.__a;
          o.__v.__k[0] = ne(_, _.__c.__P, _.__c.__O);
        }
        var d;
        for (o.setState({ __a: o.__b = null }); d = o.o.pop(); )
          d.__P = p, d.forceUpdate();
      }
    };
    o.__u++ || 32 & e.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), t.then(a, a);
  }, kt.prototype.componentWillUnmount = function() {
    this.o = [];
  }, kt.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = ee(this.__b, n, o.__O = o.__P);
      }
      this.__b = null;
    }
    var r = e.__a && V(U, null, t.fallback);
    return r && (r.__u &= -33), [V(U, null, e.__a ? null : t.children), r];
  };
  var re = function(t, e, n) {
    if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
      for (n = t.i; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        t.i = n = n[2];
      }
  };
  (rt.prototype = new E()).__a = function(t) {
    var e = this, n = oe(e.__v), o = e.l.get(t);
    return o[0]++, function(r) {
      var i = function() {
        e.props.revealOrder ? (o.push(r), re(e, t, o)) : r();
      };
      n ? n(i) : i();
    };
  }, rt.prototype.render = function(t) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var e = Y(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; )
      this.l.set(e[n], this.i = [1, 0, this.i]);
    return t.children;
  }, rt.prototype.componentDidUpdate = rt.prototype.componentDidMount = function() {
    var t = this;
    this.l.forEach(function(e, n) {
      re(t, n, e);
    });
  };
  var Ne = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, He = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Le = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ee = /[A-Z0-9]/g, Re = typeof document < "u", Ie = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
  };
  function Oe(t, e, n) {
    return e.__k == null && (e.textContent = ""), $e(t, e), typeof n == "function" && n(), t ? t.__c : null;
  }
  E.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(E.prototype, t, { configurable: !0, get: function() {
      return this["UNSAFE_" + t];
    }, set: function(e) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
    } });
  });
  var ie = f.event;
  f.event = function(t) {
    return ie && (t = ie(t)), t.persist = function() {
    }, t.isPropagationStopped = function() {
      return this.cancelBubble;
    }, t.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, t.nativeEvent = t;
  };
  var Ue = { configurable: !0, get: function() {
    return this.class;
  } }, ae = f.vnode;
  f.vnode = function(t) {
    typeof t.type == "string" && function(e) {
      var n = e.props, o = e.type, r = {}, i = o.indexOf("-") == -1;
      for (var a in n) {
        var p = n[a];
        if (!(a === "value" && "defaultValue" in n && p == null || Re && a === "children" && o === "noscript" || a === "class" || a === "className")) {
          var c = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && p === !0 ? p = "" : c === "translate" && p === "no" ? p = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? a = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || Ie(n.type) ? c === "onfocus" ? a = "onfocusin" : c === "onblur" ? a = "onfocusout" : Le.test(a) && (a = c) : c = a = "oninput" : i && He.test(a) ? a = a.replace(Ee, "-$&").toLowerCase() : p === null && (p = void 0), c === "oninput" && r[a = c] && (a = "oninputCapture"), r[a] = p;
        }
      }
      o == "select" && (r.multiple && Array.isArray(r.value) && (r.value = Y(n.children).forEach(function(_) {
        _.props.selected = r.value.indexOf(_.props.value) != -1;
      })), r.defaultValue != null && (r.value = Y(n.children).forEach(function(_) {
        _.props.selected = r.multiple ? r.defaultValue.indexOf(_.props.value) != -1 : r.defaultValue == _.props.value;
      }))), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Ue)) : n.className && (r.class = r.className = n.className), e.props = r;
    }(t), t.$$typeof = Ne, ae && ae(t);
  };
  var se = f.__r;
  f.__r = function(t) {
    se && se(t), t.__c;
  };
  var le = f.diffed;
  f.diffed = function(t) {
    le && le(t);
    var e = t.props, n = t.__e;
    n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value);
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const ce = (...t) => t.filter((e, n, o) => !!e && e.trim() !== "" && o.indexOf(e) === n).join(" ").trim();
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const _e = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Fe = (t) => t.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (e, n, o) => o ? o.toUpperCase() : n.toLowerCase()
  );
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const pe = (t) => {
    const e = Fe(t);
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var Be = {
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
  const je = Se({
    size: 24,
    color: "currentColor",
    strokeWidth: 2,
    absoluteStrokeWidth: !1,
    class: ""
  }), Ve = () => Me(je);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const qe = (t) => {
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
  const Ze = ({
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
      size: c = 24,
      strokeWidth: _ = 2,
      absoluteStrokeWidth: d = !1,
      color: g = "currentColor",
      class: s = ""
    } = Ve() ?? {}, u = o ?? d ? Number(n ?? _) * 24 / Number(e ?? c) : n ?? _;
    return V(
      "svg",
      {
        ...Be,
        width: e ?? c ?? 24,
        height: e ?? c ?? 24,
        stroke: t ?? g,
        "stroke-width": u,
        class: ce("lucide", s, a),
        ...!r && !qe(p) && { "aria-hidden": "true" },
        ...p
      },
      [...i.map(([h, k]) => V(h, k)), ...Y(r)]
    );
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const F = (t, e) => {
    const n = ({ class: o = "", className: r = "", children: i, ...a }) => V(
      Ze,
      {
        ...a,
        iconNode: e,
        class: ce(
          `lucide-${_e(pe(t))}`,
          `lucide-${_e(t)}`,
          o,
          r
        )
      },
      i
    );
    return n.displayName = pe(t), n;
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Je = F("activity", [
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
  const Ye = F("calendar-days", [
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
  const Ge = F("file-text", [
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
  const Ke = F("flame", [
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
  const Xe = F("pen-line", [
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
  const Qe = F("trending-down", [
    ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
    ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const tn = F("trending-up", [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const en = F("type", [
    ["path", { d: "M12 4v16", key: "1654pz" }],
    ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
    ["path", { d: "M9 20h6", key: "s66wpe" }]
  ]), nn = {
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
  }, on = {
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
  function de(t, e = 750) {
    const [n, o] = D(0);
    return Jt(() => {
      if (t === 0) {
        o(0);
        return;
      }
      let r;
      const i = performance.now(), a = (p) => {
        const c = Math.min((p - i) / e, 1), _ = 1 - Math.pow(1 - c, 3);
        o(Math.round(_ * t)), c < 1 && (r = requestAnimationFrame(a));
      };
      return r = requestAnimationFrame(a), () => cancelAnimationFrame(r);
    }, [t]), n;
  }
  function wt(t) {
    return t >= 1e4 ? (t / 1e4).toFixed(1) + "w" : t >= 1e3 ? (t / 1e3).toFixed(1) + "k" : String(t);
  }
  function rn(t) {
    if (!t.length)
      return { cur: 0, longest: 0 };
    const e = new Set(t.map((c) => c.date)), n = (c) => c.toISOString().slice(0, 10), o = /* @__PURE__ */ new Date();
    o.setHours(0, 0, 0, 0);
    let r = 0;
    for (let c = 0; c <= 365; c++) {
      const _ = new Date(o);
      if (_.setDate(_.getDate() - c), e.has(n(_)))
        r++;
      else
        break;
    }
    const i = [...t].sort((c, _) => c.date.localeCompare(_.date));
    let a = 0, p = 0;
    for (let c = 0; c < i.length; c++)
      p = c === 0 ? 1 : (new Date(i[c].date).getTime() - new Date(i[c - 1].date).getTime()) / 864e5 === 1 ? p + 1 : 1, p > a && (a = p);
    return { cur: r, longest: a };
  }
  function an(t) {
    const e = [], n = /* @__PURE__ */ new Date();
    for (let o = t - 1; o >= 0; o--) {
      const r = new Date(n.getFullYear(), n.getMonth() - o, 1);
      e.push(`${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}`);
    }
    return e;
  }
  function sn({ data: t, labels: e, unit: n }) {
    const o = Math.max(...t, 1), r = t.reduce((p, c) => p + c, 0) || 1, i = t.reduce((p, c, _) => c > t[p] ? _ : p, 0), a = 80;
    return /* @__PURE__ */ l("div", { style: { display: "flex", gap: "6px", alignItems: "flex-end", padding: "4px 2px 0" }, children: t.map((p, c) => {
      const _ = c === i && p > 0, d = Math.max(p / o * a, p > 0 ? 5 : 0), g = Math.round(p / r * 100);
      return /* @__PURE__ */ l("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }, children: [
        /* @__PURE__ */ l("span", { style: {
          fontSize: "10px",
          fontWeight: 700,
          minHeight: "13px",
          color: _ ? "#6366f1" : "inherit",
          opacity: p > 0 ? _ ? 1 : 0.55 : 0
        }, children: p > 0 ? p : "" }),
        /* @__PURE__ */ l("div", { style: { position: "relative", width: "100%", height: `${a}px` }, children: [
          /* @__PURE__ */ l("div", { style: {
            position: "absolute",
            inset: 0,
            borderRadius: "5px 5px 0 0",
            background: "rgba(128,128,128,0.08)"
          } }),
          /* @__PURE__ */ l("div", { style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: `${d}px`,
            borderRadius: "5px 5px 0 0",
            background: _ ? "linear-gradient(180deg,#818cf8 0%,#6366f1 100%)" : p > 0 ? "linear-gradient(180deg,#a5b4fc 0%,#818cf8 100%)" : "transparent",
            boxShadow: _ ? "0 0 14px rgba(99,102,241,0.55), 0 0 5px rgba(99,102,241,0.9)" : "none",
            transition: "height 0.5s cubic-bezier(.4,0,.2,1)"
          } })
        ] }),
        /* @__PURE__ */ l("span", { style: {
          fontSize: "10px",
          fontWeight: _ ? 700 : 500,
          color: _ ? "#6366f1" : "inherit",
          opacity: _ ? 1 : 0.45
        }, children: e[c] }),
        /* @__PURE__ */ l("span", { style: { fontSize: "9px", opacity: 0.28, fontWeight: 500, minHeight: "11px" }, children: p > 0 ? `${g}%` : "" })
      ] }, c);
    }) });
  }
  function ln(t) {
    let e = 0;
    for (let n = 0; n < t.length; n++)
      e = t.charCodeAt(n) + ((e << 5) - e);
    return Math.abs(e) % 360;
  }
  function cn({ tags: t }) {
    if (!t.length)
      return /* @__PURE__ */ l("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "28px 0" }, children: "—" });
    const e = t[0][1];
    return /* @__PURE__ */ l("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", alignContent: "flex-start", padding: "4px 0" }, children: t.map(([n, o]) => {
      const r = o / e, i = ln(n), a = 11 + Math.round(r * 8), p = `${4 + Math.round(r * 3)}px ${9 + Math.round(r * 5)}px`;
      return /* @__PURE__ */ l(
        "div",
        {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: p,
            borderRadius: "20px",
            background: `hsla(${i},68%,52%,0.11)`,
            border: `1px solid hsla(${i},62%,52%,0.28)`,
            fontSize: `${a}px`,
            fontWeight: r > 0.5 ? 700 : 500,
            color: `hsl(${i},55%,58%)`,
            cursor: "default",
            transition: "transform 0.12s, box-shadow 0.12s"
          },
          onMouseEnter: (c) => {
            c.currentTarget.style.transform = "scale(1.06)", c.currentTarget.style.boxShadow = `0 2px 10px hsla(${i},65%,52%,0.25)`;
          },
          onMouseLeave: (c) => {
            c.currentTarget.style.transform = "", c.currentTarget.style.boxShadow = "";
          },
          children: [
            /* @__PURE__ */ l("span", { children: [
              "#",
              n
            ] }),
            /* @__PURE__ */ l("span", { style: { fontSize: `${a - 2}px`, opacity: 0.55, fontWeight: 600 }, children: o })
          ]
        },
        n
      );
    }) });
  }
  function _n(t) {
    return t.replace(/```[\s\S]*?```/g, "").replace(/#{1,6}\s/g, "").replace(/\*\*|__|[*_`]/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\n+/g, " ").trim();
  }
  function pn({ date: t, notes: e, loading: n, onClose: o, monthNames: r }) {
    const [i, a] = [parseInt(t.slice(5, 7)) - 1, t.slice(8, 10)], p = `${r[i]} ${a}`, [c, _] = D(null);
    return /* @__PURE__ */ l("div", { style: {
      marginTop: "10px",
      borderRadius: "10px",
      border: "1px solid rgba(99,102,241,0.2)",
      background: "rgba(99,102,241,0.05)",
      overflow: "hidden",
      animation: "ws-up 0.2s ease both"
    }, children: [
      /* @__PURE__ */ l("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid rgba(128,128,128,0.1)" }, children: [
        /* @__PURE__ */ l("span", { style: { fontSize: "12px", fontWeight: 700, color: "#6366f1" }, children: p }),
        /* @__PURE__ */ l("button", { onClick: o, style: { background: "none", border: "none", cursor: "pointer", opacity: 0.4, padding: "0 2px", display: "flex", alignItems: "center" }, children: /* @__PURE__ */ l("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: [
          /* @__PURE__ */ l("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ l("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ] }),
      /* @__PURE__ */ l("div", { style: { maxHeight: "220px", overflowY: "auto", scrollbarWidth: "none" }, children: [
        /* @__PURE__ */ l("style", { children: ".ws-np::-webkit-scrollbar{display:none}" }),
        /* @__PURE__ */ l("div", { class: "ws-np", children: [
          n && /* @__PURE__ */ l("div", { style: { padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }, children: [1, 2].map((d) => /* @__PURE__ */ l("div", { style: { height: "14px", borderRadius: "4px", background: "rgba(128,128,128,0.1)", animation: "ws-pulse 1.4s ease-in-out infinite" } }, d)) }),
          !n && e.length === 0 && /* @__PURE__ */ l("div", { style: { padding: "14px 12px", fontSize: "12px", opacity: 0.35 }, children: "—" }),
          !n && e.map((d) => {
            const g = _n(d.content || ""), s = g.slice(0, 100), u = c === d.id, h = d.createdAt ? new Date(d.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";
            return /* @__PURE__ */ l("div", { style: {
              borderBottom: "1px solid rgba(128,128,128,0.07)"
            }, children: [
              /* @__PURE__ */ l(
                "div",
                {
                  onClick: () => _(u ? null : d.id),
                  style: {
                    padding: "8px 12px",
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                    cursor: "pointer",
                    background: u ? "rgba(99,102,241,0.06)" : "transparent",
                    transition: "background 0.15s"
                  },
                  children: [
                    /* @__PURE__ */ l("div", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "#6366f1", marginTop: "5px", flexShrink: 0, opacity: u ? 1 : 0.6 } }),
                    /* @__PURE__ */ l("div", { style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ l("div", { style: { fontSize: "12px", lineHeight: 1.5, opacity: 0.75, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: [
                      s || "—",
                      !u && g.length > 100 && /* @__PURE__ */ l("span", { style: { opacity: 0.4 }, children: " …" })
                    ] }) }),
                    /* @__PURE__ */ l("span", { style: { fontSize: "10px", opacity: 0.3, flexShrink: 0, marginTop: "2px" }, children: h })
                  ]
                }
              ),
              u && /* @__PURE__ */ l("div", { style: { padding: "0 12px 10px 25px", animation: "ws-up 0.15s ease both" }, children: [
                /* @__PURE__ */ l("div", { style: {
                  fontSize: "12px",
                  lineHeight: 1.7,
                  opacity: 0.7,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  maxHeight: "200px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  marginBottom: "8px"
                }, children: g || "—" }),
                /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: (k) => {
                      k.stopPropagation(), window.open(`/detail?id=${d.id}`, "_self");
                    },
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11px",
                      color: "#6366f1",
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      borderRadius: "6px",
                      padding: "3px 8px",
                      cursor: "pointer",
                      fontWeight: 600,
                      transition: "background 0.15s"
                    },
                    children: [
                      /* @__PURE__ */ l("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                        /* @__PURE__ */ l("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                        /* @__PURE__ */ l("polyline", { points: "15 3 21 3 21 9" }),
                        /* @__PURE__ */ l("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
                      ] }),
                      "打开笔记"
                    ]
                  }
                )
              ] })
            ] }, d.id);
          })
        ] })
      ] })
    ] });
  }
  function dn({ data: t, unit: e, weekLabels: n, monthNames: o, selectedDay: r, onDayClick: i }) {
    const a = {};
    t.forEach((b) => {
      a[b.date] = b.count;
    });
    const p = Math.max(...Object.values(a), 1), [c, _] = D(""), d = [], g = /* @__PURE__ */ new Date();
    g.setHours(0, 0, 0, 0);
    const s = new Date(g);
    for (s.setDate(s.getDate() - 23 * 7 + 1); s.getDay() !== 0; )
      s.setDate(s.getDate() - 1);
    let u = [];
    for (let b = new Date(s); b <= g; b.setDate(b.getDate() + 1)) {
      const w = b.toISOString().slice(0, 10);
      u.push({ date: w, count: a[w] || 0 }), u.length === 7 && (d.push(u), u = []);
    }
    u.length && d.push(u);
    const h = [];
    let k = "";
    d.forEach((b, w) => {
      b.forEach((M) => {
        const P = M.date.slice(0, 7);
        if (P !== k) {
          const C = parseInt(M.date.slice(5, 7)) - 1;
          h.push({ label: o[C] ?? "", col: w }), k = P;
        }
      });
    });
    const v = 11, y = 3, m = v + y, S = (b) => {
      if (b === 0)
        return "rgba(128,128,128,0.12)";
      const w = b / p;
      return w < 0.25 ? "rgba(99,102,241,0.3)" : w < 0.5 ? "rgba(99,102,241,0.52)" : w < 0.75 ? "rgba(99,102,241,0.72)" : "#6366f1";
    }, W = /* @__PURE__ */ new Set([1, 3, 5]);
    return /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ l("style", { children: ".ws-hm::-webkit-scrollbar{display:none}" }),
      /* @__PURE__ */ l("div", { class: "ws-hm", style: { overflowX: "auto", scrollbarWidth: "none" }, children: /* @__PURE__ */ l("div", { style: { display: "inline-flex", gap: "0", flexDirection: "column", minWidth: "max-content" }, children: [
        /* @__PURE__ */ l("div", { style: { display: "flex", marginLeft: "24px", height: "16px", position: "relative", marginBottom: "2px" }, children: h.map(({ label: b, col: w }) => /* @__PURE__ */ l("div", { style: {
          position: "absolute",
          left: `${w * m}px`,
          fontSize: "10px",
          opacity: 0.45,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }, children: b }, w)) }),
        /* @__PURE__ */ l("div", { style: { display: "flex", gap: "0" }, children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: `${y}px`, marginRight: "6px", width: "18px" }, children: n.map((b, w) => /* @__PURE__ */ l("div", { style: {
            height: `${v}px`,
            lineHeight: `${v}px`,
            fontSize: "9px",
            opacity: W.has(w) ? 0.4 : 0,
            textAlign: "right",
            fontWeight: 500
          }, children: b.slice(0, 3) }, w)) }),
          /* @__PURE__ */ l("div", { style: { display: "flex", gap: `${y}px` }, children: d.map((b, w) => /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: `${y}px` }, children: b.map((M, P) => /* @__PURE__ */ l(
            "div",
            {
              onMouseEnter: () => _(M.count > 0 ? `${M.date} · ${M.count} ${e}` : M.date),
              onMouseLeave: () => _(""),
              onClick: () => M.count > 0 && i(M.date, M.count),
              style: {
                width: `${v}px`,
                height: `${v}px`,
                borderRadius: "2px",
                background: S(M.count),
                cursor: M.count > 0 ? "pointer" : "default",
                outline: r === M.date ? "2px solid #6366f1" : "none",
                outlineOffset: "1px"
              }
            },
            P
          )) }, w)) })
        ] })
      ] }) }),
      /* @__PURE__ */ l("div", { style: {
        height: "16px",
        fontSize: "11px",
        marginTop: "6px",
        opacity: c ? 0.5 : 0,
        transition: "opacity 0.15s"
      }, children: c })
    ] });
  }
  function un({ target: t }) {
    const e = de(t, 600);
    return /* @__PURE__ */ l(U, { children: e });
  }
  function it({ raw: t, label: e, icon: n, accent: o, fmt: r = wt }) {
    const i = de(t);
    return /* @__PURE__ */ l("div", { style: {
      borderRadius: "12px",
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      background: `${o}10`,
      border: `1px solid ${o}20`
    }, children: [
      /* @__PURE__ */ l("span", { style: { color: o, opacity: 0.85 }, children: n }),
      /* @__PURE__ */ l("span", { style: { fontSize: "22px", fontWeight: 800, lineHeight: 1, fontVariantNumeric: "tabular-nums" }, children: r(i) }),
      /* @__PURE__ */ l("span", { style: { fontSize: "10px", opacity: 0.5, textAlign: "center", fontWeight: 600 }, children: e })
    ] });
  }
  function hn(t) {
    if (t.length < 2)
      return t.length === 1 ? `M ${t[0].x} ${t[0].y}` : "";
    let e = `M ${t[0].x} ${t[0].y}`;
    for (let n = 0; n < t.length - 1; n++) {
      const o = t[n - 1] ?? t[n], r = t[n], i = t[n + 1], a = t[n + 2] ?? t[n + 1], p = r.x + (i.x - o.x) / 6, c = r.y + (i.y - o.y) / 6, _ = i.x - (a.x - r.x) / 6, d = i.y - (a.y - r.y) / 6;
      e += ` C ${p.toFixed(2)} ${c.toFixed(2)}, ${_.toFixed(2)} ${d.toFixed(2)}, ${i.x.toFixed(2)} ${i.y.toFixed(2)}`;
    }
    return e;
  }
  function fn({ data: t, labels: e, color: n, unit: o }) {
    const [r, i] = D(null);
    if (!t.length)
      return null;
    const a = 400, p = 130, c = { top: 24, bottom: 28, left: 10, right: 10 }, _ = a - c.left - c.right, d = p - c.top - c.bottom, g = Math.max(...t, 1), s = Math.min(...t.filter((y) => y > 0), 0), u = g - s || 1, h = t.map((y, m) => ({
      x: c.left + (t.length === 1 ? _ / 2 : m / (t.length - 1) * _),
      y: c.top + (1 - (y - s) / u) * d,
      v: y
    })), k = hn(h), v = h.length >= 2 ? `${k} L ${h.at(-1).x} ${c.top + d} L ${h[0].x} ${c.top + d} Z` : "";
    return /* @__PURE__ */ l("svg", { viewBox: `0 0 ${a} ${p}`, style: { width: "100%", height: "auto", display: "block", overflow: "visible" }, children: [
      /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("linearGradient", { id: "ws-lg", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ l("stop", { offset: "0%", stopColor: n, stopOpacity: "0.28" }),
        /* @__PURE__ */ l("stop", { offset: "100%", stopColor: n, stopOpacity: "0.02" })
      ] }) }),
      [0.25, 0.5, 0.75, 1].map((y) => /* @__PURE__ */ l(
        "line",
        {
          x1: c.left,
          y1: c.top + y * d,
          x2: a - c.right,
          y2: c.top + y * d,
          stroke: "rgba(128,128,128,0.07)",
          strokeWidth: "1"
        },
        y
      )),
      v && /* @__PURE__ */ l("path", { d: v, fill: "url(#ws-lg)" }),
      /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: n, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }),
      h.map((y, m) => {
        const S = r === m, W = 64, b = 20, w = Math.min(Math.max(y.x - W / 2, c.left), a - c.right - W);
        return /* @__PURE__ */ l("g", { children: [
          /* @__PURE__ */ l("text", { x: y.x, y: p - 6, textAnchor: "middle", fontSize: "9.5", fill: "currentColor", opacity: "0.38", fontWeight: "500", children: e[m] }),
          /* @__PURE__ */ l(
            "rect",
            {
              x: y.x - 14,
              y: c.top - 4,
              width: "28",
              height: d + 8,
              fill: "transparent",
              onMouseEnter: () => i(m),
              onMouseLeave: () => i(null)
            }
          ),
          S && /* @__PURE__ */ l(
            "line",
            {
              x1: y.x,
              y1: c.top,
              x2: y.x,
              y2: c.top + d,
              stroke: n,
              strokeWidth: "1",
              strokeDasharray: "3 3",
              opacity: "0.35"
            }
          ),
          /* @__PURE__ */ l(
            "circle",
            {
              cx: y.x,
              cy: y.y,
              r: S ? 5.5 : 3.5,
              fill: S ? n : "white",
              stroke: n,
              strokeWidth: "2",
              style: { transition: "r 0.12s" },
              pointerEvents: "none"
            }
          ),
          S && y.v > 0 && /* @__PURE__ */ l("g", { pointerEvents: "none", children: [
            /* @__PURE__ */ l(
              "rect",
              {
                x: w,
                y: y.y - 28,
                width: W,
                height: b,
                rx: "6",
                fill: "rgba(10,10,20,0.82)"
              }
            ),
            /* @__PURE__ */ l(
              "text",
              {
                x: w + W / 2,
                y: y.y - 14,
                textAnchor: "middle",
                fontSize: "10.5",
                fill: "white",
                fontWeight: "600",
                children: [
                  wt(y.v),
                  " ",
                  o
                ]
              }
            )
          ] })
        ] }, m);
      })
    ] });
  }
  function yn({ weeklyData: t, weekLabels: e, monthData: n, totalNotes: o, t: r }) {
    const i = Math.max(...t), a = i > 0 ? e[t.indexOf(i)] ?? "—" : "—", p = n[n.length - 1], c = n[n.length - 2], _ = (p == null ? void 0 : p.totalWords) ?? 0, d = (c == null ? void 0 : c.totalWords) ?? 0, g = d > 0 ? Math.round((_ - d) / d * 100) : null, s = o > 0 ? Math.round(n.reduce((h, k) => h + k.totalWords, 0) / o) : 0, u = [
      { icon: /* @__PURE__ */ l(Je, { size: 12 }), text: `${r("mostActive")}: ${a}`, color: "#6366f1" },
      { icon: /* @__PURE__ */ l(Ge, { size: 12 }), text: `${r("avgNote")}: ${wt(s)} ${r("chars")}`, color: "#8b5cf6" },
      ...g !== null ? [{
        icon: g >= 0 ? /* @__PURE__ */ l(tn, { size: 12 }) : /* @__PURE__ */ l(Qe, { size: 12 }),
        text: `${r("thisMonth")}: ${g >= 0 ? "+" : ""}${g}%`,
        color: g >= 0 ? "#22c55e" : "#ef4444"
      }] : []
    ];
    return /* @__PURE__ */ l("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }, children: u.map((h, k) => /* @__PURE__ */ l("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      background: `${h.color}10`,
      border: `1px solid ${h.color}25`,
      borderRadius: "20px",
      padding: "4px 10px",
      fontSize: "11px",
      color: h.color,
      fontWeight: 500
    }, children: [
      h.icon,
      /* @__PURE__ */ l("span", { style: { color: "inherit", opacity: 0.85 }, children: h.text })
    ] }, k)) });
  }
  function gn() {
    return /* @__PURE__ */ l("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px" }, children: [
      /* @__PURE__ */ l("style", { children: "@keyframes ws-pulse{0%,100%{opacity:.3}50%{opacity:.65}}" }),
      /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [110, 60, 60].map((t, e) => /* @__PURE__ */ l("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.12}s infinite` } }, e)) }),
      /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [36, 200].map((t, e) => /* @__PURE__ */ l("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.15}s infinite` } }, e)) })
    ] });
  }
  function mn() {
    var fe, ye;
    const [t, e] = D(!0), [n, o] = D([]), [r, i] = D([]), [a, p] = D({ cur: 0, longest: 0 }), [c, _] = D(0), [d, g] = D(0), [s, u] = D([0, 0, 0, 0, 0, 0, 0]), [h, k] = D("heatmap"), [v, y] = D(null), [m, S] = D([]), [W, b] = D(!1), [w, M] = D(
      (fe = window.Blinko.i18n.language) != null && fe.startsWith("zh") ? "zh" : "en"
    ), P = w === "zh" ? on : nn, C = (x) => P[x], A = C("weeks").split(","), R = C("months").split(",");
    Jt(() => {
      const x = window.Blinko.api.analytics, z = an(6);
      Promise.all([
        x.dailyNoteCount.mutate(),
        ...z.map((H) => x.monthlyStats.mutate({ month: H }).catch(() => null))
      ]).then(([H, ...lt]) => {
        o(H), p(rn(H)), _(H.reduce((B, St) => B + St.count, 0)), g(H.length);
        const q = [0, 0, 0, 0, 0, 0, 0];
        H.forEach((B) => {
          q[(/* @__PURE__ */ new Date(B.date + "T12:00:00")).getDay()] += B.count;
        }), u(q);
        const ct = lt.map((B, St) => B ? { month: z[St].slice(5), totalWords: B.totalWords, tagStats: B.tagStats || [] } : null).filter(Boolean);
        i(ct), e(!1);
      }).catch(() => e(!1));
    }, []);
    const bn = async (x) => {
      var z, H;
      if (v === x) {
        y(null), S([]);
        return;
      }
      y(x), S([]), b(!0);
      try {
        const lt = (H = (z = window.Blinko.store.userStore.userInfo) == null ? void 0 : z.value) == null ? void 0 : H.token, q = await fetch("/api/v1/note/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...lt ? { Authorization: `Bearer ${lt}` } : {}
          },
          credentials: "include",
          body: JSON.stringify({
            page: 1,
            size: 20,
            orderBy: "asc",
            startDate: `${x}T00:00:00.000Z`,
            endDate: `${x}T23:59:59.999Z`
          })
        });
        if (!q.ok)
          throw new Error(`${q.status}`);
        const ct = await q.json();
        S(Array.isArray(ct) ? ct : []);
      } catch {
        S([]);
      }
      b(!1);
    };
    if (t)
      return /* @__PURE__ */ l(gn, {});
    const kn = r.reduce((x, z) => x + z.totalWords, 0), $t = {};
    r.flatMap((x) => x.tagStats).forEach((x) => {
      x.tagName !== "Others" && ($t[x.tagName] = ($t[x.tagName] || 0) + x.count);
    });
    const ue = Object.entries($t).sort((x, z) => z[1] - x[1]).slice(0, 8);
    (ye = ue[0]) != null && ye[1];
    const he = r.map((x) => x.totalWords), wn = r.map((x) => x.month), at = a.cur > 0, st = (x, z) => /* @__PURE__ */ l("button", { onClick: () => k(x), style: {
      padding: "5px 14px",
      borderRadius: "8px",
      fontSize: "11px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: h === x ? "rgba(99,102,241,0.15)" : "transparent",
      color: h === x ? "#6366f1" : "inherit",
      opacity: h === x ? 1 : 0.4,
      transition: "all 0.15s"
    }, children: z });
    return /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px", padding: "20px", minHeight: "280px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ l("style", { children: "@keyframes ws-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.ws-in{animation:ws-up 0.28s ease both}" }),
      /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
        /* @__PURE__ */ l("div", { class: "ws-in", style: {
          background: at ? "linear-gradient(145deg,#7c3aed,#4f46e5 60%,#2563eb)" : "linear-gradient(145deg,#374151,#1f2937)",
          borderRadius: "14px",
          padding: "16px 14px 14px",
          color: "white",
          boxShadow: at ? "0 6px 20px rgba(99,60,237,0.3)" : "none",
          animationDelay: "0ms"
        }, children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "8px" }, children: /* @__PURE__ */ l("button", { onClick: () => M((x) => x === "zh" ? "en" : "zh"), style: {
            background: "rgba(255,255,255,0.15)",
            border: "none",
            color: "white",
            borderRadius: "6px",
            padding: "2px 9px",
            fontSize: "10px",
            fontWeight: 600,
            cursor: "pointer"
          }, children: w === "zh" ? "EN" : "中文" }) }),
          /* @__PURE__ */ l("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ l("div", { style: { fontSize: "46px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px", fontVariantNumeric: "tabular-nums" }, children: /* @__PURE__ */ l(un, { target: a.cur }) }),
            /* @__PURE__ */ l("div", { style: { fontSize: "12px", opacity: 0.8, fontWeight: 600, marginTop: "3px" }, children: C("streak") }),
            !at && /* @__PURE__ */ l("div", { style: { fontSize: "11px", opacity: 0.4, marginTop: "4px", lineHeight: 1.4 }, children: C("writeToday") })
          ] }),
          at && /* @__PURE__ */ l("div", { style: { display: "flex", gap: "4px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }, children: [
            Array.from({ length: Math.min(a.cur, 18) }).map((x, z) => /* @__PURE__ */ l("div", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.8)" } }, z)),
            a.cur > 18 && /* @__PURE__ */ l("span", { style: { fontSize: "10px", opacity: 0.6 }, children: [
              "+",
              a.cur - 18
            ] })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { class: "ws-in", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", animationDelay: "60ms" }, children: [
          /* @__PURE__ */ l(it, { raw: c, label: C("totalNotes"), icon: /* @__PURE__ */ l(Xe, { size: 15 }), accent: "#3b82f6" }),
          /* @__PURE__ */ l(it, { raw: kn, label: C("totalChars"), icon: /* @__PURE__ */ l(en, { size: 15 }), accent: "#8b5cf6" }),
          /* @__PURE__ */ l(it, { raw: d, label: C("activeDays"), icon: /* @__PURE__ */ l(Ye, { size: 15 }), accent: "#22c55e", fmt: String }),
          /* @__PURE__ */ l(it, { raw: a.longest, label: C("bestStreak"), icon: /* @__PURE__ */ l(Ke, { size: 15 }), accent: "#f59e0b", fmt: String })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { class: "ws-in", style: { display: "flex", flexDirection: "column", gap: "10px", animationDelay: "100ms" }, children: [
        /* @__PURE__ */ l("div", { style: { display: "flex", gap: "2px", background: "rgba(128,128,128,0.06)", borderRadius: "10px", padding: "4px" }, children: [
          st("heatmap", C("tab_heatmap")),
          st("weekly", C("tab_weekly")),
          st("tags", C("tab_tags")),
          st("trends", C("tab_trends"))
        ] }),
        /* @__PURE__ */ l("div", { style: {
          flex: 1,
          borderRadius: "12px",
          padding: "14px",
          background: "rgba(128,128,128,0.05)",
          border: "1px solid rgba(128,128,128,0.1)"
        }, children: [
          h === "heatmap" && /* @__PURE__ */ l(U, { children: [
            /* @__PURE__ */ l(
              dn,
              {
                data: n,
                unit: C("notes"),
                weekLabels: A,
                monthNames: R,
                selectedDay: v,
                onDayClick: bn
              }
            ),
            v ? /* @__PURE__ */ l(
              pn,
              {
                date: v,
                notes: m,
                loading: W,
                monthNames: R,
                onClose: () => {
                  y(null), S([]);
                }
              }
            ) : /* @__PURE__ */ l(
              yn,
              {
                weeklyData: s,
                weekLabels: A,
                monthData: r,
                totalNotes: c,
                t: C
              }
            )
          ] }),
          h === "weekly" && /* @__PURE__ */ l(sn, { data: s, labels: A, unit: C("notes") }),
          h === "tags" && /* @__PURE__ */ l(cn, { tags: ue }),
          h === "trends" && (he.length > 0 ? /* @__PURE__ */ l(fn, { data: he, labels: wn, color: "#6366f1", unit: C("chars") }) : /* @__PURE__ */ l("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" }))
        ] }),
        /* @__PURE__ */ l("div", { style: { textAlign: "right", fontSize: "10px", opacity: 0.2 }, children: C("footer") })
      ] })
    ] });
  }
  const xn = {
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
  }, vn = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>";
  System.register([], (t) => ({
    execute: () => {
      t("default", class {
        constructor() {
          ge(this, "withSettingPanel", !1);
          Object.assign(this, xn);
        }
        async init() {
          window.Blinko.addToolBarIcon({
            name: "writing-stats",
            icon: vn,
            tooltip: "Writing Stats",
            onClick: () => {
              window.Blinko.showDialog({
                title: "✍️ Writing Stats",
                size: "3xl",
                content: () => {
                  const n = document.createElement("div");
                  return Oe(/* @__PURE__ */ l(mn, {}), n), n;
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
