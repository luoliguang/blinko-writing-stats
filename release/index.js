var $n = Object.defineProperty;
var Sn = (H, g, I) => g in H ? $n(H, g, { enumerable: !0, configurable: !0, writable: !0, value: I }) : H[g] = I;
var ve = (H, g, I) => (Sn(H, typeof g != "symbol" ? g + "" : g, I), I);
(function() {
  var H, g, I, O, At, zt, Nt, yt, et, Z, Pt, gt, mt, xt, Ht, nt = {}, ot = [], be = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, J = Array.isArray;
  function E(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function vt(t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  }
  function V(t, e, n) {
    var o, r, i, a = {};
    for (i in e)
      i == "key" ? o = e[i] : i == "ref" ? r = e[i] : a[i] = e[i];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? H.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
      for (i in t.defaultProps)
        a[i] === void 0 && (a[i] = t.defaultProps[i]);
    return rt(t, a, o, r, null);
  }
  function rt(t, e, n, o, r) {
    var i = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++I, __i: -1, __u: 0 };
    return r == null && g.vnode != null && g.vnode(i), i;
  }
  function B(t) {
    return t.children;
  }
  function R(t, e) {
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
  function ke(t) {
    if (t.__P && t.__d) {
      var e = t.__v, n = e.__e, o = [], r = [], i = E({}, e);
      i.__v = e.__v + 1, g.vnode && g.vnode(i), kt(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, o, n ?? j(e), !!(32 & e.__u), r), i.__v = e.__v, i.__.__k[i.__i] = i, Ut(o, i, r), e.__e = e.__ = null, i.__e != n && Lt(i);
    }
  }
  function Lt(t) {
    if ((t = t.__) != null && t.__c != null)
      return t.__e = t.__c.base = null, t.__k.some(function(e) {
        if (e != null && e.__e != null)
          return t.__e = t.__c.base = e.__e;
      }), Lt(t);
  }
  function bt(t) {
    (!t.__d && (t.__d = !0) && O.push(t) && !it.__r++ || At != g.debounceRendering) && ((At = g.debounceRendering) || zt)(it);
  }
  function it() {
    try {
      for (var t, e = 1; O.length; )
        O.length > e && O.sort(Nt), t = O.shift(), e = O.length, ke(t);
    } finally {
      O.length = it.__r = 0;
    }
  }
  function Et(t, e, n, o, r, i, a, d, c, _, p) {
    var m, l, u, f, S, v, y = o && o.__k || ot, h = e.length;
    for (c = we(n, e, y, c, h), m = 0; m < h; m++)
      (u = n.__k[m]) != null && (l = u.__i != -1 && y[u.__i] || nt, u.__i = m, v = kt(t, u, l, r, i, a, d, c, _, p), f = u.__e, u.ref && l.ref != u.ref && (l.ref && wt(l.ref, null, u), p.push(u.ref, u.__c || f, u)), S == null && f != null && (S = f), 4 & u.__u ? (c = Rt(u, c, t), l.__e && (l.__e = null)) : typeof u.type == "function" && v !== void 0 ? c = v : f && (c = f.nextSibling), u.__u &= -7);
    return n.__e = S, c;
  }
  function we(t, e, n, o, r) {
    var i, a, d, c, _, p = n.length, m = p, l = 0;
    for (t.__k = new Array(r), i = 0; i < r; i++)
      (a = e[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = t.__k[i] = rt(null, a, null, null, null) : J(a) ? a = t.__k[i] = rt(B, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = t.__k[i] = rt(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : t.__k[i] = a, c = i + l, a.__ = t, a.__b = t.__b + 1, d = null, (_ = a.__i = $e(a, n, c, m)) != -1 && (m--, (d = n[_]) && (d.__u |= 2)), d == null || d.__v == null ? (_ == -1 && (r > p ? l-- : r < p && l++), typeof a.type != "function" && (a.__u |= 4)) : _ != c && (_ == c - 1 ? l-- : _ == c + 1 ? l++ : (_ > c ? l-- : l++, a.__u |= 4))) : t.__k[i] = null;
    if (m)
      for (i = 0; i < p; i++)
        (d = n[i]) != null && !(2 & d.__u) && (d.__e == o && (o = j(d)), jt(d, d));
    return o;
  }
  function Rt(t, e, n) {
    var o, r;
    if (typeof t.type == "function") {
      for (o = t.__k, r = 0; o && r < o.length; r++)
        o[r] && (o[r].__ = t, e = Rt(o[r], e, n));
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
  function $e(t, e, n, o) {
    var r, i, a, d = t.key, c = t.type, _ = e[n], p = _ != null && (2 & _.__u) == 0;
    if (_ === null && d == null || p && d == _.key && c == _.type)
      return n;
    if (o > (p ? 1 : 0)) {
      for (r = n - 1, i = n + 1; r >= 0 || i < e.length; )
        if ((_ = e[a = r >= 0 ? r-- : i++]) != null && !(2 & _.__u) && d == _.key && c == _.type)
          return a;
    }
    return -1;
  }
  function It(t, e, n) {
    e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || be.test(e) ? n : n + "px";
  }
  function at(t, e, n, o, r) {
    var i, a;
    t:
      if (e == "style")
        if (typeof n == "string")
          t.style.cssText = n;
        else {
          if (typeof o == "string" && (t.style.cssText = o = ""), o)
            for (e in o)
              n && e in n || It(t.style, e, "");
          if (n)
            for (e in n)
              o && n[e] == o[e] || It(t.style, e, n[e]);
        }
      else if (e[0] == "o" && e[1] == "n")
        i = e != (e = e.replace(Pt, "$1")), a = e.toLowerCase(), e = a in t || e == "onFocusOut" || e == "onFocusIn" ? a.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? o ? n[Z] = o[Z] : (n[Z] = gt, t.addEventListener(e, i ? xt : mt, i)) : t.removeEventListener(e, i ? xt : mt, i);
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
  function Ot(t) {
    return function(e) {
      if (this.l) {
        var n = this.l[e.type + t];
        if (e[et] == null)
          e[et] = gt++;
        else if (e[et] < n[Z])
          return;
        return n(g.event ? g.event(e) : e);
      }
    };
  }
  function kt(t, e, n, o, r, i, a, d, c, _) {
    var p, m, l, u, f, S, v, y, h, b, T, x, k, $, D, C, A = e.type;
    if (e.constructor !== void 0)
      return null;
    128 & n.__u && (c = !!(32 & n.__u), i = [d = e.__e = n.__e]), (p = g.__b) && p(e);
    t:
      if (typeof A == "function") {
        m = a.length;
        try {
          if (h = e.props, b = A.prototype && A.prototype.render, T = (p = A.contextType) && o[p.__c], x = p ? T ? T.props.value : p.__ : o, n.__c ? y = (l = e.__c = n.__c).__ = l.__E : (b ? e.__c = l = new A(h, x) : (e.__c = l = new R(h, x), l.constructor = A, l.render = Ce), T && T.sub(l), l.state || (l.state = {}), l.__n = o, u = l.__d = !0, l.__h = [], l._sb = []), b && l.__s == null && (l.__s = l.state), b && A.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = E({}, l.__s)), E(l.__s, A.getDerivedStateFromProps(h, l.__s))), f = l.props, S = l.state, l.__v = e, u)
            b && A.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), b && l.componentDidMount != null && l.__h.push(l.componentDidMount);
          else {
            if (b && A.getDerivedStateFromProps == null && h !== f && l.componentWillReceiveProps != null && l.componentWillReceiveProps(h, x), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(h, l.__s, x) === !1) {
              e.__v != n.__v && (l.props = h, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(N) {
                N && (N.__ = e);
              }), ot.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && a.push(l), d = j(n);
              break t;
            }
            l.componentWillUpdate != null && l.componentWillUpdate(h, l.__s, x), b && l.componentDidUpdate != null && l.__h.push(function() {
              l.componentDidUpdate(f, S, v);
            });
          }
          if (l.context = x, l.props = h, l.__P = t, l.__e = !1, k = g.__r, $ = 0, b)
            l.state = l.__s, l.__d = !1, k && k(e), p = l.render(l.props, l.state, l.context), ot.push.apply(l.__h, l._sb), l._sb = [];
          else
            do
              l.__d = !1, k && k(e), p = l.render(l.props, l.state, l.context), l.state = l.__s;
            while (l.__d && ++$ < 25);
          l.state = l.__s, l.getChildContext != null && (o = E(E({}, o), l.getChildContext())), b && !u && l.getSnapshotBeforeUpdate != null && (v = l.getSnapshotBeforeUpdate(f, S)), D = p != null && p.type === B && p.key == null ? Ft(p.props.children) : p, d = Et(t, J(D) ? D : [D], e, n, o, r, i, a, d, c, _), l.base = e.__e, e.__u &= -161, l.__h.length && a.push(l), y && (l.__E = l.__ = null);
        } catch (N) {
          if (a.length = m, e.__v = null, c || i != null) {
            if (N.then) {
              for (e.__u |= c ? 160 : 128; d && d.nodeType == 8 && d.nextSibling; )
                d = d.nextSibling;
              i != null && (i[i.indexOf(d)] = null), e.__e = d;
            } else if (i != null)
              for (C = i.length; C--; )
                vt(i[C]);
          } else
            e.__e = n.__e;
          e.__k == null && (e.__k = n.__k || []), N.then || Bt(e), g.__e(N, e, n);
        }
      } else
        i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : d = e.__e = Se(n.__e, e, n, o, r, i, a, c, _);
    return (p = g.diffed) && p(e), 128 & e.__u ? void 0 : d;
  }
  function Bt(t) {
    t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Bt));
  }
  function Ut(t, e, n) {
    for (var o = 0; o < n.length; o++)
      wt(n[o], n[++o], n[++o]);
    g.__c && g.__c(e, t), t.some(function(r) {
      try {
        t = r.__h, r.__h = [], t.some(function(i) {
          i.call(r);
        });
      } catch (i) {
        g.__e(i, r.__v);
      }
    });
  }
  function Ft(t) {
    return typeof t != "object" || t == null || t.__b > 0 ? t : J(t) ? t.map(Ft) : t.constructor !== void 0 ? null : E({}, t);
  }
  function Se(t, e, n, o, r, i, a, d, c) {
    var _, p, m, l, u, f, S, v = n.props || nt, y = e.props, h = e.type;
    if (h == "svg" ? r = "http://www.w3.org/2000/svg" : h == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), i != null) {
      for (_ = 0; _ < i.length; _++)
        if ((u = i[_]) && "setAttribute" in u == !!h && (h ? u.localName == h : u.nodeType == 3)) {
          t = u, i[_] = null;
          break;
        }
    }
    if (t == null) {
      if (h == null)
        return document.createTextNode(y);
      t = document.createElementNS(r, h, y.is && y), d && (g.__m && g.__m(e, i), d = !1), i = null;
    }
    if (h == null)
      v === y || d && t.data == y || (t.data = y);
    else {
      if (i = h == "textarea" && y.defaultValue != null ? null : i && H.call(t.childNodes), !d && i != null)
        for (v = {}, _ = 0; _ < t.attributes.length; _++)
          v[(u = t.attributes[_]).name] = u.value;
      for (_ in v)
        u = v[_], _ == "dangerouslySetInnerHTML" ? m = u : _ == "children" || _ in y || _ == "value" && "defaultValue" in y || _ == "checked" && "defaultChecked" in y || at(t, _, null, u, r);
      for (_ in y)
        u = y[_], _ == "children" ? l = u : _ == "dangerouslySetInnerHTML" ? p = u : _ == "value" ? f = u : _ == "checked" ? S = u : d && typeof u != "function" || v[_] === u || at(t, _, u, v[_], r);
      if (p)
        d || m && (p.__html == m.__html || p.__html == t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
      else if (m && (t.innerHTML = ""), Et(e.type == "template" ? t.content : t, J(l) ? l : [l], e, n, o, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && j(n, 0), d, c), i != null)
        for (_ = i.length; _--; )
          vt(i[_]);
      d && h != "textarea" || (_ = "value", h == "progress" && f == null ? t.removeAttribute("value") : f != null && (f !== t[_] || h == "progress" && !f || h == "option" && f != v[_]) && at(t, _, f, v[_], r), _ = "checked", S != null && S != t[_] && at(t, _, S, v[_], r));
    }
    return t;
  }
  function wt(t, e, n) {
    try {
      if (typeof t == "function") {
        var o = typeof t.__u == "function";
        o && t.__u(), o && e == null || (t.__u = t(e));
      } else
        t.current = e;
    } catch (r) {
      g.__e(r, n);
    }
  }
  function jt(t, e, n) {
    var o, r;
    if (g.unmount && g.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || wt(o, null, e)), (o = t.__c) != null) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          g.__e(i, e);
        }
      o.base = o.__P = o.__n = null;
    }
    if (o = t.__k)
      for (r = 0; r < o.length; r++)
        o[r] && jt(o[r], e, n || typeof t.type != "function");
    n || vt(t.__e), t.__c = t.__ = t.__e = void 0;
  }
  function Ce(t, e, n) {
    return this.constructor(t, n);
  }
  function Me(t, e, n) {
    var o, r, i, a;
    e == document && (e = document.documentElement), g.__ && g.__(t, e), r = (o = typeof n == "function") ? null : n && n.__k || e.__k, i = [], a = [], kt(e, t = (!o && n || e).__k = V(B, null, [t]), r || nt, nt, e.namespaceURI, !o && n ? [n] : r ? null : e.firstChild ? H.call(e.childNodes) : null, i, !o && n ? n : r ? r.__e : e.firstChild, o, a), Ut(i, t, a), t.props.children = null;
  }
  function We(t) {
    function e(n) {
      var o, r;
      return this.getChildContext || (o = /* @__PURE__ */ new Set(), (r = {})[e.__c] = this, this.getChildContext = function() {
        return r;
      }, this.componentWillUnmount = function() {
        o = null;
      }, this.shouldComponentUpdate = function(i) {
        this.props.value != i.value && o.forEach(function(a) {
          a.__e = !0, bt(a);
        });
      }, this.sub = function(i) {
        o.add(i);
        var a = i.componentWillUnmount;
        i.componentWillUnmount = function() {
          o && o.delete(i), a && a.call(i);
        };
      }), n.children;
    }
    return e.__c = "__cC" + Ht++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, o) {
      return n.children(o);
    }).contextType = e, e;
  }
  H = ot.slice, g = { __e: function(t, e, n, o) {
    for (var r, i, a; e = e.__; )
      if ((r = e.__c) && !r.__)
        try {
          if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(t)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, o || {}), a = r.__d), a)
            return r.__E = r;
        } catch (d) {
          t = d;
        }
    throw t;
  } }, I = 0, R.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = E({}, this.state), typeof t == "function" && (t = t(E({}, n), this.props)), t && E(n, t), t != null && this.__v && (e && this._sb.push(e), bt(this));
  }, R.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), bt(this));
  }, R.prototype.render = B, O = [], zt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Nt = function(t, e) {
    return t.__v.__b - e.__v.__b;
  }, it.__r = 0, yt = Math.random().toString(8), et = "__d" + yt, Z = "__a" + yt, Pt = /(PointerCapture)$|Capture$/i, gt = 0, mt = Ot(!1), xt = Ot(!0), Ht = 0;
  var Te = 0;
  function s(t, e, n, o, r, i) {
    e || (e = {});
    var a, d, c = e;
    if ("ref" in c)
      for (d in c = {}, e)
        d == "ref" ? a = e[d] : c[d] = e[d];
    var _ = { type: t, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Te, __i: -1, __u: 0, __source: r, __self: i };
    if (typeof t == "function" && (a = t.defaultProps))
      for (d in a)
        c[d] === void 0 && (c[d] = a[d]);
    return g.vnode && g.vnode(_), _;
  }
  var X, M, $t, Vt, St = 0, qt = [], W = g, Gt = W.__b, Zt = W.__r, Jt = W.diffed, Yt = W.__c, Xt = W.unmount, Kt = W.__;
  function Ct(t, e) {
    W.__h && W.__h(M, t, St || e), St = 0;
    var n = M.__H || (M.__H = { __: [], __h: [] });
    return t >= n.__.length && n.__.push({}), n.__[t];
  }
  function z(t) {
    return St = 1, De(ee, t);
  }
  function De(t, e, n) {
    var o = Ct(X++, 2);
    if (o.t = t, !o.__c && (o.__ = [n ? n(e) : ee(void 0, e), function(d) {
      var c = o.__N ? o.__N[0] : o.__[0], _ = o.t(c, d);
      c !== _ && (o.__N = [_, o.__[1]], o.__c.setState({}));
    }], o.__c = M, !M.__f)) {
      var r = function(d, c, _) {
        if (!o.__c.__H)
          return !0;
        var p = !1, m = o.__c.props !== d;
        if (o.__c.__H.__.some(function(u) {
          if (u.__N) {
            p = !0;
            var f = u.__[0];
            u.__ = u.__N, u.__N = void 0, f !== u.__[0] && (m = !0);
          }
        }), i) {
          var l = i.call(this, d, c, _);
          return p ? l || m : l;
        }
        return !p || m;
      };
      M.__f = !0;
      var i = M.shouldComponentUpdate, a = M.componentWillUpdate;
      M.componentWillUpdate = function(d, c, _) {
        if (this.__e) {
          var p = i;
          i = void 0, r(d, c, _), i = p;
        }
        a && a.call(this, d, c, _);
      }, M.shouldComponentUpdate = r;
    }
    return o.__N || o.__;
  }
  function Qt(t, e) {
    var n = Ct(X++, 3);
    !W.__s && Pe(n.__H, e) && (n.__ = t, n.u = e, M.__H.__h.push(n));
  }
  function Ae(t) {
    var e = M.context[t.__c], n = Ct(X++, 9);
    return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(M)), e.props.value) : t.__;
  }
  function ze() {
    for (var t; t = qt.shift(); ) {
      var e = t.__H;
      if (t.__P && e)
        try {
          e.__h.some(st), e.__h.some(Mt), e.__h = [];
        } catch (n) {
          e.__h = [], W.__e(n, t.__v);
        }
    }
  }
  W.__b = function(t) {
    M = null, Gt && Gt(t);
  }, W.__ = function(t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Kt && Kt(t, e);
  }, W.__r = function(t) {
    Zt && Zt(t), X = 0;
    var e = (M = t.__c).__H;
    e && ($t === M ? (e.__h = [], M.__h = [], e.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (e.__h.some(st), e.__h.some(Mt), e.__h = [], X = 0)), $t = M;
  }, W.diffed = function(t) {
    Jt && Jt(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (qt.push(e) !== 1 && Vt === W.requestAnimationFrame || ((Vt = W.requestAnimationFrame) || Ne)(ze)), e.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), $t = M = null;
  }, W.__c = function(t, e) {
    e.some(function(n) {
      try {
        n.__h.some(st), n.__h = n.__h.filter(function(o) {
          return !o.__ || Mt(o);
        });
      } catch (o) {
        e.some(function(r) {
          r.__h && (r.__h = []);
        }), e = [], W.__e(o, n.__v);
      }
    }), Yt && Yt(t, e);
  }, W.unmount = function(t) {
    Xt && Xt(t);
    var e, n = t.__c;
    n && n.__H && (n.__H.__.some(function(o) {
      try {
        st(o);
      } catch (r) {
        e = r;
      }
    }), n.__H = void 0, e && W.__e(e, n.__v));
  };
  var te = typeof requestAnimationFrame == "function";
  function Ne(t) {
    var e, n = function() {
      clearTimeout(o), te && cancelAnimationFrame(e), setTimeout(t);
    }, o = setTimeout(n, 35);
    te && (e = requestAnimationFrame(n));
  }
  function st(t) {
    var e = M, n = t.__c;
    typeof n == "function" && (t.__c = void 0, n()), M = e;
  }
  function Mt(t) {
    var e = M;
    t.__c = t.__(), M = e;
  }
  function Pe(t, e) {
    return !t || t.length !== e.length || e.some(function(n, o) {
      return n !== t[o];
    });
  }
  function ee(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function He(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function ne(t, e) {
    for (var n in t)
      if (n !== "__source" && !(n in e))
        return !0;
    for (var o in e)
      if (o !== "__source" && t[o] !== e[o])
        return !0;
    return !1;
  }
  function oe(t, e) {
    this.props = t, this.context = e;
  }
  (oe.prototype = new R()).isPureReactComponent = !0, oe.prototype.shouldComponentUpdate = function(t, e) {
    return ne(this.props, t) || ne(this.state, e);
  };
  var re = g.__b;
  g.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), re && re(t);
  };
  var Le = g.__e;
  g.__e = function(t, e, n, o) {
    if (t.then) {
      for (var r, i = e; i = i.__; )
        if ((r = i.__c) && r.__c)
          return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), r.__c(t, e);
    }
    Le(t, e, n, o);
  };
  var ie = g.unmount;
  function ae(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), t.__c.__H = null), (t = He({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(o) {
      return ae(o, e, n);
    })), t;
  }
  function se(t, e, n) {
    return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(o) {
      return se(o, e, n);
    }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
  }
  function Wt() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function le(t) {
    var e = t.__ && t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function lt() {
    this.i = null, this.l = null;
  }
  g.unmount = function(t) {
    var e = t.__c;
    e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), ie && ie(t);
  }, (Wt.prototype = new R()).__c = function(t, e) {
    var n = e.__c, o = this;
    o.o == null && (o.o = []), o.o.push(n);
    var r = le(o.__v), i = !1, a = function() {
      i || o.__z || (i = !0, n.__R = null, r ? r(c) : c());
    };
    n.__R = a;
    var d = n.__P;
    n.__P = null;
    var c = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var _ = o.state.__a;
          o.__v.__k[0] = se(_, _.__c.__P, _.__c.__O);
        }
        var p;
        for (o.setState({ __a: o.__b = null }); p = o.o.pop(); )
          p.__P = d, p.forceUpdate();
      }
    };
    o.__u++ || 32 & e.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), t.then(a, a);
  }, Wt.prototype.componentWillUnmount = function() {
    this.o = [];
  }, Wt.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = ae(this.__b, n, o.__O = o.__P);
      }
      this.__b = null;
    }
    var r = e.__a && V(B, null, t.fallback);
    return r && (r.__u &= -33), [V(B, null, e.__a ? null : t.children), r];
  };
  var ce = function(t, e, n) {
    if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
      for (n = t.i; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        t.i = n = n[2];
      }
  };
  (lt.prototype = new R()).__a = function(t) {
    var e = this, n = le(e.__v), o = e.l.get(t);
    return o[0]++, function(r) {
      var i = function() {
        e.props.revealOrder ? (o.push(r), ce(e, t, o)) : r();
      };
      n ? n(i) : i();
    };
  }, lt.prototype.render = function(t) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var e = Y(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; )
      this.l.set(e[n], this.i = [1, 0, this.i]);
    return t.children;
  }, lt.prototype.componentDidUpdate = lt.prototype.componentDidMount = function() {
    var t = this;
    this.l.forEach(function(e, n) {
      ce(t, n, e);
    });
  };
  var Ee = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Re = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ie = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Oe = /[A-Z0-9]/g, Be = typeof document < "u", Ue = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
  };
  function Fe(t, e, n) {
    return e.__k == null && (e.textContent = ""), Me(t, e), typeof n == "function" && n(), t ? t.__c : null;
  }
  R.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(R.prototype, t, { configurable: !0, get: function() {
      return this["UNSAFE_" + t];
    }, set: function(e) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
    } });
  });
  var _e = g.event;
  g.event = function(t) {
    return _e && (t = _e(t)), t.persist = function() {
    }, t.isPropagationStopped = function() {
      return this.cancelBubble;
    }, t.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, t.nativeEvent = t;
  };
  var je = { configurable: !0, get: function() {
    return this.class;
  } }, de = g.vnode;
  g.vnode = function(t) {
    typeof t.type == "string" && function(e) {
      var n = e.props, o = e.type, r = {}, i = o.indexOf("-") == -1;
      for (var a in n) {
        var d = n[a];
        if (!(a === "value" && "defaultValue" in n && d == null || Be && a === "children" && o === "noscript" || a === "class" || a === "className")) {
          var c = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && d === !0 ? d = "" : c === "translate" && d === "no" ? d = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? a = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || Ue(n.type) ? c === "onfocus" ? a = "onfocusin" : c === "onblur" ? a = "onfocusout" : Ie.test(a) && (a = c) : c = a = "oninput" : i && Re.test(a) ? a = a.replace(Oe, "-$&").toLowerCase() : d === null && (d = void 0), c === "oninput" && r[a = c] && (a = "oninputCapture"), r[a] = d;
        }
      }
      o == "select" && (r.multiple && Array.isArray(r.value) && (r.value = Y(n.children).forEach(function(_) {
        _.props.selected = r.value.indexOf(_.props.value) != -1;
      })), r.defaultValue != null && (r.value = Y(n.children).forEach(function(_) {
        _.props.selected = r.multiple ? r.defaultValue.indexOf(_.props.value) != -1 : r.defaultValue == _.props.value;
      }))), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", je)) : n.className && (r.class = r.className = n.className), e.props = r;
    }(t), t.$$typeof = Ee, de && de(t);
  };
  var pe = g.__r;
  g.__r = function(t) {
    pe && pe(t), t.__c;
  };
  var ue = g.diffed;
  g.diffed = function(t) {
    ue && ue(t);
    var e = t.props, n = t.__e;
    n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value);
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const he = (...t) => t.filter((e, n, o) => !!e && e.trim() !== "" && o.indexOf(e) === n).join(" ").trim();
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const fe = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ve = (t) => t.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (e, n, o) => o ? o.toUpperCase() : n.toLowerCase()
  );
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const ye = (t) => {
    const e = Ve(t);
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var qe = {
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
  const Ge = We({
    size: 24,
    color: "currentColor",
    strokeWidth: 2,
    absoluteStrokeWidth: !1,
    class: ""
  }), Ze = () => Ae(Ge);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Je = (t) => {
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
  const Ye = ({
    color: t,
    size: e,
    strokeWidth: n,
    absoluteStrokeWidth: o,
    children: r,
    iconNode: i,
    class: a = "",
    ...d
  }) => {
    const {
      size: c = 24,
      strokeWidth: _ = 2,
      absoluteStrokeWidth: p = !1,
      color: m = "currentColor",
      class: l = ""
    } = Ze() ?? {}, u = o ?? p ? Number(n ?? _) * 24 / Number(e ?? c) : n ?? _;
    return V(
      "svg",
      {
        ...qe,
        width: e ?? c ?? 24,
        height: e ?? c ?? 24,
        stroke: t ?? m,
        "stroke-width": u,
        class: he("lucide", l, a),
        ...!r && !Je(d) && { "aria-hidden": "true" },
        ...d
      },
      [...i.map(([f, S]) => V(f, S)), ...Y(r)]
    );
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const U = (t, e) => {
    const n = ({ class: o = "", className: r = "", children: i, ...a }) => V(
      Ye,
      {
        ...a,
        iconNode: e,
        class: he(
          `lucide-${fe(ye(t))}`,
          `lucide-${fe(t)}`,
          o,
          r
        )
      },
      i
    );
    return n.displayName = ye(t), n;
  };
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Xe = U("activity", [
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
  const Ke = U("calendar-days", [
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
  const Qe = U("file-text", [
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
  const tn = U("flame", [
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
  const en = U("pen-line", [
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
  const nn = U("trending-down", [
    ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
    ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const on = U("trending-up", [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
  ]);
  /**
   * @license lucide-preact v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const rn = U("type", [
    ["path", { d: "M12 4v16", key: "1654pz" }],
    ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
    ["path", { d: "M9 20h6", key: "s66wpe" }]
  ]), an = {
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
  }, sn = {
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
  function ge(t, e = 750) {
    const [n, o] = z(0);
    return Qt(() => {
      if (t === 0) {
        o(0);
        return;
      }
      let r;
      const i = performance.now(), a = (d) => {
        const c = Math.min((d - i) / e, 1), _ = 1 - Math.pow(1 - c, 3);
        o(Math.round(_ * t)), c < 1 && (r = requestAnimationFrame(a));
      };
      return r = requestAnimationFrame(a), () => cancelAnimationFrame(r);
    }, [t]), n;
  }
  function Tt(t) {
    return t >= 1e4 ? (t / 1e4).toFixed(1) + "w" : t >= 1e3 ? (t / 1e3).toFixed(1) + "k" : String(t);
  }
  function ln(t) {
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
    let a = 0, d = 0;
    for (let c = 0; c < i.length; c++)
      d = c === 0 ? 1 : (new Date(i[c].date).getTime() - new Date(i[c - 1].date).getTime()) / 864e5 === 1 ? d + 1 : 1, d > a && (a = d);
    return { cur: r, longest: a };
  }
  function cn(t) {
    const e = [], n = /* @__PURE__ */ new Date();
    for (let o = t - 1; o >= 0; o--) {
      const r = new Date(n.getFullYear(), n.getMonth() - o, 1);
      e.push(`${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}`);
    }
    return e;
  }
  function _n({ data: t, labels: e, unit: n }) {
    const [o, r] = z(null), i = Math.max(...t, 1);
    t.reduce((h, b) => h + b, 0);
    const a = t.reduce((h, b, T) => b > t[h] ? T : h, 0), d = 320, c = 210, _ = d / 2, p = c / 2 + 2, m = 30, l = 78, u = l + 22, f = 14, S = 7, v = (h) => h > 0.3 ? "start" : h < -0.3 ? "end" : "middle", y = o !== null ? o : a;
    return /* @__PURE__ */ s("svg", { viewBox: `0 0 ${d} ${c}`, style: { width: "100%", height: "auto", display: "block", overflow: "visible" }, children: [
      /* @__PURE__ */ s("defs", { children: [
        /* @__PURE__ */ s("filter", { id: "ws-pglow", x: "-120%", y: "-120%", width: "340%", height: "340%", children: [
          /* @__PURE__ */ s("feGaussianBlur", { stdDeviation: "6", result: "blur" }),
          /* @__PURE__ */ s("feMerge", { children: [
            /* @__PURE__ */ s("feMergeNode", { in: "blur" }),
            /* @__PURE__ */ s("feMergeNode", { in: "SourceGraphic" })
          ] })
        ] }),
        /* @__PURE__ */ s("radialGradient", { id: "ws-hub", cx: "50%", cy: "50%", r: "50%", children: [
          /* @__PURE__ */ s("stop", { offset: "0%", stopColor: "rgba(99,102,241,0.18)" }),
          /* @__PURE__ */ s("stop", { offset: "100%", stopColor: "rgba(99,102,241,0.04)" })
        ] })
      ] }),
      /* @__PURE__ */ s("circle", { cx: _, cy: p, r: l, fill: "none", stroke: "rgba(128,128,128,0.07)", strokeWidth: "1" }),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: _,
          cy: p,
          r: (m + l) / 2,
          fill: "none",
          stroke: "rgba(128,128,128,0.04)",
          strokeWidth: "1",
          strokeDasharray: "3 6"
        }
      ),
      t.map((h, b) => {
        const T = b / S * Math.PI * 2 - Math.PI / 2, x = Math.cos(T), k = Math.sin(T), $ = b === a && h > 0, D = o === b, C = h > 0 ? m + h / i * (l - m) : 0, A = _ + (m + 1) * x, N = p + (m + 1) * k, K = _ + (h > 0 ? C : m + 5) * x, Q = p + (h > 0 ? C : m + 5) * k, tt = _ + u * x, _t = p + u * k, q = $ || D ? "#6366f1" : "#818cf8", dt = h > 0 ? $ ? 1 : D ? 0.85 : 0.28 + 0.52 * (h / i) : 0.09;
        return /* @__PURE__ */ s(
          "g",
          {
            onMouseEnter: () => r(b),
            onMouseLeave: () => r(null),
            style: { cursor: "default" },
            children: [
              /* @__PURE__ */ s(
                "line",
                {
                  x1: A,
                  y1: N,
                  x2: _ + l * x,
                  y2: p + l * k,
                  stroke: "transparent",
                  strokeWidth: f + 14,
                  strokeLinecap: "round"
                }
              ),
              $ && h > 0 && /* @__PURE__ */ s(
                "line",
                {
                  x1: A,
                  y1: N,
                  x2: K,
                  y2: Q,
                  stroke: "#818cf8",
                  strokeWidth: f + 10,
                  strokeLinecap: "round",
                  opacity: "0.16",
                  filter: "url(#ws-pglow)"
                }
              ),
              /* @__PURE__ */ s(
                "line",
                {
                  x1: A,
                  y1: N,
                  x2: K,
                  y2: Q,
                  stroke: q,
                  strokeWidth: h > 0 ? f : 2,
                  strokeLinecap: "round",
                  opacity: dt
                }
              ),
              h > 0 && /* @__PURE__ */ s(
                "circle",
                {
                  cx: K,
                  cy: Q,
                  r: $ ? 4.5 : D ? 3.5 : 3,
                  fill: q,
                  opacity: $ ? 1 : dt,
                  style: { transition: "r 0.12s" }
                }
              ),
              ($ || D) && h > 0 && /* @__PURE__ */ s(
                "text",
                {
                  x: _ + (C + 14) * x,
                  y: p + (C + 14) * k + 4,
                  textAnchor: v(x),
                  fontSize: "9.5",
                  fill: q,
                  fontWeight: "700",
                  opacity: "0.9",
                  children: h
                }
              ),
              /* @__PURE__ */ s(
                "text",
                {
                  x: tt,
                  y: _t + 4,
                  textAnchor: v(x),
                  fontSize: $ ? "11" : "10",
                  fill: $ || D ? "#6366f1" : "currentColor",
                  fontWeight: $ ? "700" : "500",
                  opacity: $ ? 1 : D ? 0.7 : 0.42,
                  children: e[b]
                }
              )
            ]
          },
          b
        );
      }),
      /* @__PURE__ */ s("circle", { cx: _, cy: p, r: m, fill: "url(#ws-hub)", stroke: "rgba(99,102,241,0.2)", strokeWidth: "1" }),
      /* @__PURE__ */ s(
        "text",
        {
          x: _,
          y: p - 4,
          textAnchor: "middle",
          fontSize: "15",
          fill: "#6366f1",
          fontWeight: "800",
          fontVariantNumeric: "tabular-nums",
          children: t[y] ?? 0
        }
      ),
      /* @__PURE__ */ s(
        "text",
        {
          x: _,
          y: p + 10,
          textAnchor: "middle",
          fontSize: "8",
          fill: "currentColor",
          opacity: "0.35",
          fontWeight: "500",
          children: e[y]
        }
      )
    ] });
  }
  function dn(t) {
    let e = 0;
    for (let n = 0; n < t.length; n++)
      e = t.charCodeAt(n) + ((e << 5) - e);
    return Math.abs(e) % 360;
  }
  function pn({ tags: t }) {
    if (!t.length)
      return /* @__PURE__ */ s("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "28px 0" }, children: "—" });
    const e = t[0][1];
    return /* @__PURE__ */ s("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", alignContent: "flex-start", padding: "4px 0" }, children: t.map(([n, o]) => {
      const r = o / e, i = dn(n), a = 11 + Math.round(r * 8), d = `${4 + Math.round(r * 3)}px ${9 + Math.round(r * 5)}px`;
      return /* @__PURE__ */ s(
        "div",
        {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: d,
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
            /* @__PURE__ */ s("span", { children: [
              "#",
              n
            ] }),
            /* @__PURE__ */ s("span", { style: { fontSize: `${a - 2}px`, opacity: 0.55, fontWeight: 600 }, children: o })
          ]
        },
        n
      );
    }) });
  }
  function un(t) {
    return t.replace(/```[\s\S]*?```/g, "").replace(/#{1,6}\s/g, "").replace(/\*\*|__|[*_`]/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\n+/g, " ").trim();
  }
  function hn({ date: t, notes: e, loading: n, onClose: o, monthNames: r }) {
    const [i, a] = [parseInt(t.slice(5, 7)) - 1, t.slice(8, 10)], d = `${r[i]} ${a}`, [c, _] = z(null);
    return /* @__PURE__ */ s("div", { style: {
      marginTop: "10px",
      borderRadius: "10px",
      border: "1px solid rgba(99,102,241,0.2)",
      background: "rgba(99,102,241,0.05)",
      overflow: "hidden",
      animation: "ws-up 0.2s ease both"
    }, children: [
      /* @__PURE__ */ s("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid rgba(128,128,128,0.1)" }, children: [
        /* @__PURE__ */ s("span", { style: { fontSize: "12px", fontWeight: 700, color: "#6366f1" }, children: d }),
        /* @__PURE__ */ s("button", { onClick: o, style: { background: "none", border: "none", cursor: "pointer", opacity: 0.4, padding: "0 2px", display: "flex", alignItems: "center" }, children: /* @__PURE__ */ s("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: [
          /* @__PURE__ */ s("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ s("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ] }),
      /* @__PURE__ */ s("div", { style: { maxHeight: "220px", overflowY: "auto", scrollbarWidth: "none" }, children: [
        /* @__PURE__ */ s("style", { children: ".ws-np::-webkit-scrollbar{display:none}" }),
        /* @__PURE__ */ s("div", { class: "ws-np", children: [
          n && /* @__PURE__ */ s("div", { style: { padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }, children: [1, 2].map((p) => /* @__PURE__ */ s("div", { style: { height: "14px", borderRadius: "4px", background: "rgba(128,128,128,0.1)", animation: "ws-pulse 1.4s ease-in-out infinite" } }, p)) }),
          !n && e.length === 0 && /* @__PURE__ */ s("div", { style: { padding: "14px 12px", fontSize: "12px", opacity: 0.35 }, children: "—" }),
          !n && e.map((p) => {
            const m = un(p.content || ""), l = c === p.id, u = p.createdAt ? new Date(p.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";
            return /* @__PURE__ */ s("div", { style: {
              borderBottom: "1px solid rgba(128,128,128,0.07)"
            }, children: [
              /* @__PURE__ */ s(
                "div",
                {
                  onClick: () => _(l ? null : p.id),
                  style: {
                    padding: "8px 12px",
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    cursor: "pointer",
                    background: l ? "rgba(99,102,241,0.06)" : "transparent",
                    transition: "background 0.15s"
                  },
                  children: [
                    /* @__PURE__ */ s("div", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "#6366f1", flexShrink: 0, opacity: l ? 1 : 0.6 } }),
                    /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ s("div", { style: {
                      fontSize: "12px",
                      lineHeight: 1.5,
                      opacity: 0.75,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical"
                    }, children: m || "—" }) }),
                    /* @__PURE__ */ s("span", { style: { fontSize: "10px", opacity: 0.3, flexShrink: 0 }, children: u })
                  ]
                }
              ),
              l && /* @__PURE__ */ s("div", { style: { padding: "0 12px 10px 25px", animation: "ws-up 0.15s ease both" }, children: [
                /* @__PURE__ */ s("div", { style: {
                  fontSize: "12px",
                  lineHeight: 1.7,
                  opacity: 0.7,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  maxHeight: "200px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  marginBottom: "8px"
                }, children: m || "—" }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: (f) => {
                      f.stopPropagation(), window.open(`/detail?id=${p.id}`, "_self");
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
                      /* @__PURE__ */ s("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                        /* @__PURE__ */ s("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                        /* @__PURE__ */ s("polyline", { points: "15 3 21 3 21 9" }),
                        /* @__PURE__ */ s("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
                      ] }),
                      "打开笔记"
                    ]
                  }
                )
              ] })
            ] }, p.id);
          })
        ] })
      ] })
    ] });
  }
  function fn({ data: t, unit: e, weekLabels: n, monthNames: o, selectedDay: r, onDayClick: i }) {
    const a = {};
    t.forEach((x) => {
      a[x.date] = x.count;
    });
    const d = Math.max(...Object.values(a), 1), [c, _] = z(""), p = [], m = /* @__PURE__ */ new Date();
    m.setHours(0, 0, 0, 0);
    const l = new Date(m);
    for (l.setDate(l.getDate() - 23 * 7 + 1); l.getDay() !== 0; )
      l.setDate(l.getDate() - 1);
    let u = [];
    for (let x = new Date(l); x <= m; x.setDate(x.getDate() + 1)) {
      const k = x.toISOString().slice(0, 10);
      u.push({ date: k, count: a[k] || 0 }), u.length === 7 && (p.push(u), u = []);
    }
    u.length && p.push(u);
    const f = [];
    let S = "";
    p.forEach((x, k) => {
      x.forEach(($) => {
        const D = $.date.slice(0, 7);
        if (D !== S) {
          const C = parseInt($.date.slice(5, 7)) - 1;
          f.push({ label: o[C] ?? "", col: k }), S = D;
        }
      });
    });
    const v = 11, y = 3, h = v + y, b = (x) => {
      if (x === 0)
        return "rgba(128,128,128,0.12)";
      const k = x / d;
      return k < 0.25 ? "rgba(99,102,241,0.3)" : k < 0.5 ? "rgba(99,102,241,0.52)" : k < 0.75 ? "rgba(99,102,241,0.72)" : "#6366f1";
    }, T = /* @__PURE__ */ new Set([1, 3, 5]);
    return /* @__PURE__ */ s("div", { children: [
      /* @__PURE__ */ s("style", { children: ".ws-hm::-webkit-scrollbar{display:none}" }),
      /* @__PURE__ */ s("div", { class: "ws-hm", style: { overflowX: "auto", scrollbarWidth: "none" }, children: /* @__PURE__ */ s("div", { style: { display: "inline-flex", gap: "0", flexDirection: "column", minWidth: "max-content" }, children: [
        /* @__PURE__ */ s("div", { style: { display: "flex", marginLeft: "24px", height: "16px", position: "relative", marginBottom: "2px" }, children: f.map(({ label: x, col: k }) => /* @__PURE__ */ s("div", { style: {
          position: "absolute",
          left: `${k * h}px`,
          fontSize: "10px",
          opacity: 0.45,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }, children: x }, k)) }),
        /* @__PURE__ */ s("div", { style: { display: "flex", gap: "0" }, children: [
          /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: `${y}px`, marginRight: "6px", width: "18px" }, children: n.map((x, k) => /* @__PURE__ */ s("div", { style: {
            height: `${v}px`,
            lineHeight: `${v}px`,
            fontSize: "9px",
            opacity: T.has(k) ? 0.4 : 0,
            textAlign: "right",
            fontWeight: 500
          }, children: x.slice(0, 3) }, k)) }),
          /* @__PURE__ */ s("div", { style: { display: "flex", gap: `${y}px` }, children: p.map((x, k) => /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: `${y}px` }, children: x.map(($, D) => /* @__PURE__ */ s(
            "div",
            {
              onMouseEnter: () => _($.count > 0 ? `${$.date} · ${$.count} ${e}` : $.date),
              onMouseLeave: () => _(""),
              onClick: () => $.count > 0 && i($.date, $.count),
              style: {
                width: `${v}px`,
                height: `${v}px`,
                borderRadius: "2px",
                background: b($.count),
                cursor: $.count > 0 ? "pointer" : "default",
                outline: r === $.date ? "2px solid #6366f1" : "none",
                outlineOffset: "1px"
              }
            },
            D
          )) }, k)) })
        ] })
      ] }) }),
      /* @__PURE__ */ s("div", { style: {
        height: "16px",
        fontSize: "11px",
        marginTop: "6px",
        opacity: c ? 0.5 : 0,
        transition: "opacity 0.15s"
      }, children: c })
    ] });
  }
  function yn({ target: t }) {
    const e = ge(t, 600);
    return /* @__PURE__ */ s(B, { children: e });
  }
  function ct({ raw: t, label: e, icon: n, accent: o, fmt: r = Tt }) {
    const i = ge(t);
    return /* @__PURE__ */ s("div", { style: {
      borderRadius: "12px",
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      background: `${o}10`,
      border: `1px solid ${o}20`
    }, children: [
      /* @__PURE__ */ s("span", { style: { color: o, opacity: 0.85 }, children: n }),
      /* @__PURE__ */ s("span", { style: { fontSize: "22px", fontWeight: 800, lineHeight: 1, fontVariantNumeric: "tabular-nums" }, children: r(i) }),
      /* @__PURE__ */ s("span", { style: { fontSize: "10px", opacity: 0.5, textAlign: "center", fontWeight: 600 }, children: e })
    ] });
  }
  function gn(t) {
    if (t.length < 2)
      return t.length === 1 ? `M ${t[0].x} ${t[0].y}` : "";
    let e = `M ${t[0].x} ${t[0].y}`;
    for (let n = 0; n < t.length - 1; n++) {
      const o = t[n - 1] ?? t[n], r = t[n], i = t[n + 1], a = t[n + 2] ?? t[n + 1], d = r.x + (i.x - o.x) / 6, c = r.y + (i.y - o.y) / 6, _ = i.x - (a.x - r.x) / 6, p = i.y - (a.y - r.y) / 6;
      e += ` C ${d.toFixed(2)} ${c.toFixed(2)}, ${_.toFixed(2)} ${p.toFixed(2)}, ${i.x.toFixed(2)} ${i.y.toFixed(2)}`;
    }
    return e;
  }
  function mn({ data: t, labels: e, color: n, unit: o }) {
    const [r, i] = z(null);
    if (!t.length)
      return null;
    const a = 400, d = 130, c = { top: 24, bottom: 28, left: 10, right: 10 }, _ = a - c.left - c.right, p = d - c.top - c.bottom, m = Math.max(...t, 1), l = Math.min(...t.filter((y) => y > 0), 0), u = m - l || 1, f = t.map((y, h) => ({
      x: c.left + (t.length === 1 ? _ / 2 : h / (t.length - 1) * _),
      y: c.top + (1 - (y - l) / u) * p,
      v: y
    })), S = gn(f), v = f.length >= 2 ? `${S} L ${f.at(-1).x} ${c.top + p} L ${f[0].x} ${c.top + p} Z` : "";
    return /* @__PURE__ */ s("svg", { viewBox: `0 0 ${a} ${d}`, style: { width: "100%", height: "auto", display: "block", overflow: "visible" }, children: [
      /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ s("linearGradient", { id: "ws-lg", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ s("stop", { offset: "0%", stopColor: n, stopOpacity: "0.28" }),
        /* @__PURE__ */ s("stop", { offset: "100%", stopColor: n, stopOpacity: "0.02" })
      ] }) }),
      [0.25, 0.5, 0.75, 1].map((y) => /* @__PURE__ */ s(
        "line",
        {
          x1: c.left,
          y1: c.top + y * p,
          x2: a - c.right,
          y2: c.top + y * p,
          stroke: "rgba(128,128,128,0.07)",
          strokeWidth: "1"
        },
        y
      )),
      v && /* @__PURE__ */ s("path", { d: v, fill: "url(#ws-lg)" }),
      /* @__PURE__ */ s("path", { d: S, fill: "none", stroke: n, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }),
      f.map((y, h) => {
        const b = r === h, T = 64, x = 20, k = Math.min(Math.max(y.x - T / 2, c.left), a - c.right - T);
        return /* @__PURE__ */ s("g", { children: [
          /* @__PURE__ */ s("text", { x: y.x, y: d - 6, textAnchor: "middle", fontSize: "9.5", fill: "currentColor", opacity: "0.38", fontWeight: "500", children: e[h] }),
          /* @__PURE__ */ s(
            "rect",
            {
              x: y.x - 14,
              y: c.top - 4,
              width: "28",
              height: p + 8,
              fill: "transparent",
              onMouseEnter: () => i(h),
              onMouseLeave: () => i(null)
            }
          ),
          b && /* @__PURE__ */ s(
            "line",
            {
              x1: y.x,
              y1: c.top,
              x2: y.x,
              y2: c.top + p,
              stroke: n,
              strokeWidth: "1",
              strokeDasharray: "3 3",
              opacity: "0.35"
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              cx: y.x,
              cy: y.y,
              r: b ? 5.5 : 3.5,
              fill: b ? n : "white",
              stroke: n,
              strokeWidth: "2",
              style: { transition: "r 0.12s" },
              pointerEvents: "none"
            }
          ),
          b && y.v > 0 && /* @__PURE__ */ s("g", { pointerEvents: "none", children: [
            /* @__PURE__ */ s(
              "rect",
              {
                x: k,
                y: y.y - 28,
                width: T,
                height: x,
                rx: "6",
                fill: "rgba(10,10,20,0.82)"
              }
            ),
            /* @__PURE__ */ s(
              "text",
              {
                x: k + T / 2,
                y: y.y - 14,
                textAnchor: "middle",
                fontSize: "10.5",
                fill: "white",
                fontWeight: "600",
                children: [
                  Tt(y.v),
                  " ",
                  o
                ]
              }
            )
          ] })
        ] }, h);
      })
    ] });
  }
  function xn({ weeklyData: t, weekLabels: e, monthData: n, totalNotes: o, t: r }) {
    const i = Math.max(...t), a = i > 0 ? e[t.indexOf(i)] ?? "—" : "—", d = n[n.length - 1], c = n[n.length - 2], _ = (d == null ? void 0 : d.totalWords) ?? 0, p = (c == null ? void 0 : c.totalWords) ?? 0, m = p > 0 ? Math.round((_ - p) / p * 100) : null, l = o > 0 ? Math.round(n.reduce((f, S) => f + S.totalWords, 0) / o) : 0, u = [
      { icon: /* @__PURE__ */ s(Xe, { size: 12 }), text: `${r("mostActive")}: ${a}`, color: "#6366f1" },
      { icon: /* @__PURE__ */ s(Qe, { size: 12 }), text: `${r("avgNote")}: ${Tt(l)} ${r("chars")}`, color: "#8b5cf6" },
      ...m !== null ? [{
        icon: m >= 0 ? /* @__PURE__ */ s(on, { size: 12 }) : /* @__PURE__ */ s(nn, { size: 12 }),
        text: `${r("thisMonth")}: ${m >= 0 ? "+" : ""}${m}%`,
        color: m >= 0 ? "#22c55e" : "#ef4444"
      }] : []
    ];
    return /* @__PURE__ */ s("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }, children: u.map((f, S) => /* @__PURE__ */ s("div", { style: {
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
      /* @__PURE__ */ s("span", { style: { color: "inherit", opacity: 0.85 }, children: f.text })
    ] }, S)) });
  }
  function vn() {
    return /* @__PURE__ */ s("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px" }, children: [
      /* @__PURE__ */ s("style", { children: "@keyframes ws-pulse{0%,100%{opacity:.3}50%{opacity:.65}}" }),
      /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [110, 60, 60].map((t, e) => /* @__PURE__ */ s("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.12}s infinite` } }, e)) }),
      /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [36, 200].map((t, e) => /* @__PURE__ */ s("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.15}s infinite` } }, e)) })
    ] });
  }
  function bn() {
    var me, xe;
    const [t, e] = z(!0), [n, o] = z([]), [r, i] = z([]), [a, d] = z({ cur: 0, longest: 0 }), [c, _] = z(0), [p, m] = z(0), [l, u] = z([0, 0, 0, 0, 0, 0, 0]), [f, S] = z("heatmap"), [v, y] = z(null), [h, b] = z([]), [T, x] = z(!1), [k, $] = z(
      (me = window.Blinko.i18n.language) != null && me.startsWith("zh") ? "zh" : "en"
    ), D = k === "zh" ? sn : an, C = (w) => D[w], A = C("weeks").split(","), N = C("months").split(",");
    Qt(() => {
      const w = window.Blinko.api.analytics, P = cn(6);
      Promise.all([
        w.dailyNoteCount.mutate(),
        ...P.map((L) => w.monthlyStats.mutate({ month: L }).catch(() => null))
      ]).then(([L, ...ht]) => {
        o(L), d(ln(L)), _(L.reduce((F, Dt) => F + Dt.count, 0)), m(L.length);
        const G = [0, 0, 0, 0, 0, 0, 0];
        L.forEach((F) => {
          G[(/* @__PURE__ */ new Date(F.date + "T12:00:00")).getDay()] += F.count;
        }), u(G);
        const ft = ht.map((F, Dt) => F ? { month: P[Dt].slice(5), totalWords: F.totalWords, tagStats: F.tagStats || [] } : null).filter(Boolean);
        i(ft), e(!1);
      }).catch(() => e(!1));
    }, []);
    const K = async (w) => {
      var P, L;
      if (v === w) {
        y(null), b([]);
        return;
      }
      y(w), b([]), x(!0);
      try {
        const ht = (L = (P = window.Blinko.store.userStore.userInfo) == null ? void 0 : P.value) == null ? void 0 : L.token, G = await fetch("/api/v1/note/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...ht ? { Authorization: `Bearer ${ht}` } : {}
          },
          credentials: "include",
          body: JSON.stringify({
            page: 1,
            size: 20,
            orderBy: "asc",
            startDate: `${w}T00:00:00.000Z`,
            endDate: `${w}T23:59:59.999Z`
          })
        });
        if (!G.ok)
          throw new Error(`${G.status}`);
        const ft = await G.json();
        b(Array.isArray(ft) ? ft : []);
      } catch {
        b([]);
      }
      x(!1);
    };
    if (t)
      return /* @__PURE__ */ s(vn, {});
    const Q = r.reduce((w, P) => w + P.totalWords, 0), tt = {};
    r.flatMap((w) => w.tagStats).forEach((w) => {
      w.tagName !== "Others" && (tt[w.tagName] = (tt[w.tagName] || 0) + w.count);
    });
    const _t = Object.entries(tt).sort((w, P) => P[1] - w[1]).slice(0, 8);
    (xe = _t[0]) != null && xe[1];
    const q = r.map((w) => w.totalWords), dt = r.map((w) => w.month), pt = a.cur > 0, ut = (w, P) => /* @__PURE__ */ s("button", { onClick: () => S(w), style: {
      padding: "5px 14px",
      borderRadius: "8px",
      fontSize: "11px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: f === w ? "rgba(99,102,241,0.15)" : "transparent",
      color: f === w ? "#6366f1" : "inherit",
      opacity: f === w ? 1 : 0.4,
      transition: "all 0.15s"
    }, children: P });
    return /* @__PURE__ */ s("div", { style: { display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px", padding: "20px", minHeight: "280px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ s("style", { children: "@keyframes ws-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.ws-in{animation:ws-up 0.28s ease both}" }),
      /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
        /* @__PURE__ */ s("div", { class: "ws-in", style: {
          background: pt ? "linear-gradient(145deg,#7c3aed,#4f46e5 60%,#2563eb)" : "linear-gradient(145deg,#374151,#1f2937)",
          borderRadius: "14px",
          padding: "16px 14px 14px",
          color: "white",
          boxShadow: pt ? "0 6px 20px rgba(99,60,237,0.3)" : "none",
          animationDelay: "0ms"
        }, children: [
          /* @__PURE__ */ s("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "8px" }, children: /* @__PURE__ */ s("button", { onClick: () => $((w) => w === "zh" ? "en" : "zh"), style: {
            background: "rgba(255,255,255,0.15)",
            border: "none",
            color: "white",
            borderRadius: "6px",
            padding: "2px 9px",
            fontSize: "10px",
            fontWeight: 600,
            cursor: "pointer"
          }, children: k === "zh" ? "EN" : "中文" }) }),
          /* @__PURE__ */ s("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ s("div", { style: { fontSize: "46px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px", fontVariantNumeric: "tabular-nums" }, children: /* @__PURE__ */ s(yn, { target: a.cur }) }),
            /* @__PURE__ */ s("div", { style: { fontSize: "12px", opacity: 0.8, fontWeight: 600, marginTop: "3px" }, children: C("streak") }),
            !pt && /* @__PURE__ */ s("div", { style: { fontSize: "11px", opacity: 0.4, marginTop: "4px", lineHeight: 1.4 }, children: C("writeToday") })
          ] }),
          pt && /* @__PURE__ */ s("div", { style: { display: "flex", gap: "4px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }, children: [
            Array.from({ length: Math.min(a.cur, 18) }).map((w, P) => /* @__PURE__ */ s("div", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.8)" } }, P)),
            a.cur > 18 && /* @__PURE__ */ s("span", { style: { fontSize: "10px", opacity: 0.6 }, children: [
              "+",
              a.cur - 18
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { class: "ws-in", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", animationDelay: "60ms" }, children: [
          /* @__PURE__ */ s(ct, { raw: c, label: C("totalNotes"), icon: /* @__PURE__ */ s(en, { size: 15 }), accent: "#3b82f6" }),
          /* @__PURE__ */ s(ct, { raw: Q, label: C("totalChars"), icon: /* @__PURE__ */ s(rn, { size: 15 }), accent: "#8b5cf6" }),
          /* @__PURE__ */ s(ct, { raw: p, label: C("activeDays"), icon: /* @__PURE__ */ s(Ke, { size: 15 }), accent: "#22c55e", fmt: String }),
          /* @__PURE__ */ s(ct, { raw: a.longest, label: C("bestStreak"), icon: /* @__PURE__ */ s(tn, { size: 15 }), accent: "#f59e0b", fmt: String })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { class: "ws-in", style: { display: "flex", flexDirection: "column", gap: "10px", animationDelay: "100ms" }, children: [
        /* @__PURE__ */ s("div", { style: { display: "flex", gap: "2px", background: "rgba(128,128,128,0.06)", borderRadius: "10px", padding: "4px" }, children: [
          ut("heatmap", C("tab_heatmap")),
          ut("weekly", C("tab_weekly")),
          ut("tags", C("tab_tags")),
          ut("trends", C("tab_trends"))
        ] }),
        /* @__PURE__ */ s("div", { style: {
          flex: 1,
          borderRadius: "12px",
          padding: "14px",
          background: "rgba(128,128,128,0.05)",
          border: "1px solid rgba(128,128,128,0.1)"
        }, children: [
          f === "heatmap" && /* @__PURE__ */ s(B, { children: [
            /* @__PURE__ */ s(
              fn,
              {
                data: n,
                unit: C("notes"),
                weekLabels: A,
                monthNames: N,
                selectedDay: v,
                onDayClick: K
              }
            ),
            v ? /* @__PURE__ */ s(
              hn,
              {
                date: v,
                notes: h,
                loading: T,
                monthNames: N,
                onClose: () => {
                  y(null), b([]);
                }
              }
            ) : /* @__PURE__ */ s(
              xn,
              {
                weeklyData: l,
                weekLabels: A,
                monthData: r,
                totalNotes: c,
                t: C
              }
            )
          ] }),
          f === "weekly" && /* @__PURE__ */ s(_n, { data: l, labels: A, unit: C("notes") }),
          f === "tags" && /* @__PURE__ */ s(pn, { tags: _t }),
          f === "trends" && (q.length > 0 ? /* @__PURE__ */ s(mn, { data: q, labels: dt, color: "#6366f1", unit: C("chars") }) : /* @__PURE__ */ s("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" }))
        ] }),
        /* @__PURE__ */ s("div", { style: { textAlign: "right", fontSize: "10px", opacity: 0.2 }, children: C("footer") })
      ] })
    ] });
  }
  const kn = {
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
  }, wn = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>";
  System.register([], (t) => ({
    execute: () => {
      t("default", class {
        constructor() {
          ve(this, "withSettingPanel", !1);
          Object.assign(this, kn);
        }
        async init() {
          window.Blinko.addToolBarIcon({
            name: "writing-stats",
            icon: wn,
            tooltip: "Writing Stats",
            onClick: () => {
              window.Blinko.showDialog({
                title: "✍️ Writing Stats",
                size: "3xl",
                content: () => {
                  const n = document.createElement("div");
                  return Fe(/* @__PURE__ */ s(bn, {}), n), n;
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
