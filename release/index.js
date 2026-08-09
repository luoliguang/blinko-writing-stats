var Ye = Object.defineProperty;
var Ge = (M, h, z) => h in M ? Ye(M, h, { enumerable: !0, configurable: !0, writable: !0, value: z }) : M[h] = z;
var ae = (M, h, z) => (Ge(M, typeof h != "symbol" ? h + "" : h, z), z);
(function() {
  var M, h, z, H, vt, xt, bt, at, q, F, kt, lt, st, _t, J = {}, Y = [], le = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, j = Array.isArray;
  function A(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function ct(t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  }
  function pt(t, e, n) {
    var o, r, i, a = {};
    for (i in e)
      i == "key" ? o = e[i] : i == "ref" ? r = e[i] : a[i] = e[i];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? M.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
      for (i in t.defaultProps)
        a[i] === void 0 && (a[i] = t.defaultProps[i]);
    return G(t, a, o, r, null);
  }
  function G(t, e, n, o, r) {
    var i = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++z, __i: -1, __u: 0 };
    return r == null && h.vnode != null && h.vnode(i), i;
  }
  function O(t) {
    return t.children;
  }
  function W(t, e) {
    this.props = t, this.context = e;
  }
  function U(t, e) {
    if (e == null)
      return t.__ ? U(t.__, t.__i + 1) : null;
    for (var n; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null)
        return n.__e;
    return typeof t.type == "function" ? U(t) : null;
  }
  function se(t) {
    if (t.__P && t.__d) {
      var e = t.__v, n = e.__e, o = [], r = [], i = A({}, e);
      i.__v = e.__v + 1, h.vnode && h.vnode(i), ut(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, o, n ?? U(e), !!(32 & e.__u), r), i.__v = e.__v, i.__.__k[i.__i] = i, Pt(o, i, r), e.__e = e.__ = null, i.__e != n && wt(i);
    }
  }
  function wt(t) {
    if ((t = t.__) != null && t.__c != null)
      return t.__e = t.__c.base = null, t.__k.some(function(e) {
        if (e != null && e.__e != null)
          return t.__e = t.__c.base = e.__e;
      }), wt(t);
  }
  function $t(t) {
    (!t.__d && (t.__d = !0) && H.push(t) && !X.__r++ || vt != h.debounceRendering) && ((vt = h.debounceRendering) || xt)(X);
  }
  function X() {
    try {
      for (var t, e = 1; H.length; )
        H.length > e && H.sort(bt), t = H.shift(), e = H.length, se(t);
    } finally {
      H.length = X.__r = 0;
    }
  }
  function St(t, e, n, o, r, i, a, c, p, s, u) {
    var y, l, d, g, b, k, w = o && o.__k || Y, m = e.length;
    for (p = _e(n, e, w, p, m), y = 0; y < m; y++)
      (d = n.__k[y]) != null && (l = d.__i != -1 && w[d.__i] || J, d.__i = y, k = ut(t, d, l, r, i, a, c, p, s, u), g = d.__e, d.ref && l.ref != d.ref && (l.ref && dt(l.ref, null, d), u.push(d.ref, d.__c || g, d)), b == null && g != null && (b = g), 4 & d.__u ? (p = Tt(d, p, t), l.__e && (l.__e = null)) : typeof d.type == "function" && k !== void 0 ? p = k : g && (p = g.nextSibling), d.__u &= -7);
    return n.__e = b, p;
  }
  function _e(t, e, n, o, r) {
    var i, a, c, p, s, u = n.length, y = u, l = 0;
    for (t.__k = new Array(r), i = 0; i < r; i++)
      (a = e[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = t.__k[i] = G(null, a, null, null, null) : j(a) ? a = t.__k[i] = G(O, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = t.__k[i] = G(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : t.__k[i] = a, p = i + l, a.__ = t, a.__b = t.__b + 1, c = null, (s = a.__i = ce(a, n, p, y)) != -1 && (y--, (c = n[s]) && (c.__u |= 2)), c == null || c.__v == null ? (s == -1 && (r > u ? l-- : r < u && l++), typeof a.type != "function" && (a.__u |= 4)) : s != p && (s == p - 1 ? l-- : s == p + 1 ? l++ : (s > p ? l-- : l++, a.__u |= 4))) : t.__k[i] = null;
    if (y)
      for (i = 0; i < u; i++)
        (c = n[i]) != null && !(2 & c.__u) && (c.__e == o && (o = U(c)), At(c, c));
    return o;
  }
  function Tt(t, e, n) {
    var o, r;
    if (typeof t.type == "function") {
      for (o = t.__k, r = 0; o && r < o.length; r++)
        o[r] && (o[r].__ = t, e = Tt(o[r], e, n));
      return e;
    }
    t.__e != e && (e && t.type && !e.parentNode && (e = U(t)), e = n.insertBefore(t.__e, e || null));
    do
      e = e && e.nextSibling;
    while (e != null && e.nodeType == 8);
    return e;
  }
  function K(t, e) {
    return e = e || [], t == null || typeof t == "boolean" || (j(t) ? t.some(function(n) {
      K(n, e);
    }) : e.push(t)), e;
  }
  function ce(t, e, n, o) {
    var r, i, a, c = t.key, p = t.type, s = e[n], u = s != null && (2 & s.__u) == 0;
    if (s === null && c == null || u && c == s.key && p == s.type)
      return n;
    if (o > (u ? 1 : 0)) {
      for (r = n - 1, i = n + 1; r >= 0 || i < e.length; )
        if ((s = e[a = r >= 0 ? r-- : i++]) != null && !(2 & s.__u) && c == s.key && p == s.type)
          return a;
    }
    return -1;
  }
  function Dt(t, e, n) {
    e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || le.test(e) ? n : n + "px";
  }
  function Q(t, e, n, o, r) {
    var i, a;
    t:
      if (e == "style")
        if (typeof n == "string")
          t.style.cssText = n;
        else {
          if (typeof o == "string" && (t.style.cssText = o = ""), o)
            for (e in o)
              n && e in n || Dt(t.style, e, "");
          if (n)
            for (e in n)
              o && n[e] == o[e] || Dt(t.style, e, n[e]);
        }
      else if (e[0] == "o" && e[1] == "n")
        i = e != (e = e.replace(kt, "$1")), a = e.toLowerCase(), e = a in t || e == "onFocusOut" || e == "onFocusIn" ? a.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? o ? n[F] = o[F] : (n[F] = lt, t.addEventListener(e, i ? _t : st, i)) : t.removeEventListener(e, i ? _t : st, i);
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
  function Ct(t) {
    return function(e) {
      if (this.l) {
        var n = this.l[e.type + t];
        if (e[q] == null)
          e[q] = lt++;
        else if (e[q] < n[F])
          return;
        return n(h.event ? h.event(e) : e);
      }
    };
  }
  function ut(t, e, n, o, r, i, a, c, p, s) {
    var u, y, l, d, g, b, k, w, m, f, x, T, C, R, E, V, D = e.type;
    if (e.constructor !== void 0)
      return null;
    128 & n.__u && (p = !!(32 & n.__u), i = [c = e.__e = n.__e]), (u = h.__b) && u(e);
    t:
      if (typeof D == "function") {
        y = a.length;
        try {
          if (m = e.props, f = D.prototype && D.prototype.render, x = (u = D.contextType) && o[u.__c], T = u ? x ? x.props.value : u.__ : o, n.__c ? w = (l = e.__c = n.__c).__ = l.__E : (f ? e.__c = l = new D(m, T) : (e.__c = l = new W(m, T), l.constructor = D, l.render = ue), x && x.sub(l), l.state || (l.state = {}), l.__n = o, d = l.__d = !0, l.__h = [], l._sb = []), f && l.__s == null && (l.__s = l.state), f && D.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = A({}, l.__s)), A(l.__s, D.getDerivedStateFromProps(m, l.__s))), g = l.props, b = l.state, l.__v = e, d)
            f && D.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), f && l.componentDidMount != null && l.__h.push(l.componentDidMount);
          else {
            if (f && D.getDerivedStateFromProps == null && m !== g && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, T), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, T) === !1) {
              e.__v != n.__v && (l.props = m, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(I) {
                I && (I.__ = e);
              }), Y.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && a.push(l), c = U(n);
              break t;
            }
            l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, T), f && l.componentDidUpdate != null && l.__h.push(function() {
              l.componentDidUpdate(g, b, k);
            });
          }
          if (l.context = T, l.props = m, l.__P = t, l.__e = !1, C = h.__r, R = 0, f)
            l.state = l.__s, l.__d = !1, C && C(e), u = l.render(l.props, l.state, l.context), Y.push.apply(l.__h, l._sb), l._sb = [];
          else
            do
              l.__d = !1, C && C(e), u = l.render(l.props, l.state, l.context), l.state = l.__s;
            while (l.__d && ++R < 25);
          l.state = l.__s, l.getChildContext != null && (o = A(A({}, o), l.getChildContext())), f && !d && l.getSnapshotBeforeUpdate != null && (k = l.getSnapshotBeforeUpdate(g, b)), E = u != null && u.type === O && u.key == null ? Mt(u.props.children) : u, c = St(t, j(E) ? E : [E], e, n, o, r, i, a, c, p, s), l.base = e.__e, e.__u &= -161, l.__h.length && a.push(l), w && (l.__E = l.__ = null);
        } catch (I) {
          if (a.length = y, e.__v = null, p || i != null) {
            if (I.then) {
              for (e.__u |= p ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; )
                c = c.nextSibling;
              i != null && (i[i.indexOf(c)] = null), e.__e = c;
            } else if (i != null)
              for (V = i.length; V--; )
                ct(i[V]);
          } else
            e.__e = n.__e;
          e.__k == null && (e.__k = n.__k || []), I.then || Nt(e), h.__e(I, e, n);
        }
      } else
        i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = pe(n.__e, e, n, o, r, i, a, p, s);
    return (u = h.diffed) && u(e), 128 & e.__u ? void 0 : c;
  }
  function Nt(t) {
    t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Nt));
  }
  function Pt(t, e, n) {
    for (var o = 0; o < n.length; o++)
      dt(n[o], n[++o], n[++o]);
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
  function Mt(t) {
    return typeof t != "object" || t == null || t.__b > 0 ? t : j(t) ? t.map(Mt) : t.constructor !== void 0 ? null : A({}, t);
  }
  function pe(t, e, n, o, r, i, a, c, p) {
    var s, u, y, l, d, g, b, k = n.props || J, w = e.props, m = e.type;
    if (m == "svg" ? r = "http://www.w3.org/2000/svg" : m == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), i != null) {
      for (s = 0; s < i.length; s++)
        if ((d = i[s]) && "setAttribute" in d == !!m && (m ? d.localName == m : d.nodeType == 3)) {
          t = d, i[s] = null;
          break;
        }
    }
    if (t == null) {
      if (m == null)
        return document.createTextNode(w);
      t = document.createElementNS(r, m, w.is && w), c && (h.__m && h.__m(e, i), c = !1), i = null;
    }
    if (m == null)
      k === w || c && t.data == w || (t.data = w);
    else {
      if (i = m == "textarea" && w.defaultValue != null ? null : i && M.call(t.childNodes), !c && i != null)
        for (k = {}, s = 0; s < t.attributes.length; s++)
          k[(d = t.attributes[s]).name] = d.value;
      for (s in k)
        d = k[s], s == "dangerouslySetInnerHTML" ? y = d : s == "children" || s in w || s == "value" && "defaultValue" in w || s == "checked" && "defaultChecked" in w || Q(t, s, null, d, r);
      for (s in w)
        d = w[s], s == "children" ? l = d : s == "dangerouslySetInnerHTML" ? u = d : s == "value" ? g = d : s == "checked" ? b = d : c && typeof d != "function" || k[s] === d || Q(t, s, d, k[s], r);
      if (u)
        c || y && (u.__html == y.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
      else if (y && (t.innerHTML = ""), St(e.type == "template" ? t.content : t, j(l) ? l : [l], e, n, o, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && U(n, 0), c, p), i != null)
        for (s = i.length; s--; )
          ct(i[s]);
      c && m != "textarea" || (s = "value", m == "progress" && g == null ? t.removeAttribute("value") : g != null && (g !== t[s] || m == "progress" && !g || m == "option" && g != k[s]) && Q(t, s, g, k[s], r), s = "checked", b != null && b != t[s] && Q(t, s, b, k[s], r));
    }
    return t;
  }
  function dt(t, e, n) {
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
  function At(t, e, n) {
    var o, r;
    if (h.unmount && h.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || dt(o, null, e)), (o = t.__c) != null) {
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
        o[r] && At(o[r], e, n || typeof t.type != "function");
    n || ct(t.__e), t.__c = t.__ = t.__e = void 0;
  }
  function ue(t, e, n) {
    return this.constructor(t, n);
  }
  function de(t, e, n) {
    var o, r, i, a;
    e == document && (e = document.documentElement), h.__ && h.__(t, e), r = (o = typeof n == "function") ? null : n && n.__k || e.__k, i = [], a = [], ut(e, t = (!o && n || e).__k = pt(O, null, [t]), r || J, J, e.namespaceURI, !o && n ? [n] : r ? null : e.firstChild ? M.call(e.childNodes) : null, i, !o && n ? n : r ? r.__e : e.firstChild, o, a), Pt(i, t, a), t.props.children = null;
  }
  M = Y.slice, h = { __e: function(t, e, n, o) {
    for (var r, i, a; e = e.__; )
      if ((r = e.__c) && !r.__)
        try {
          if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(t)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, o || {}), a = r.__d), a)
            return r.__E = r;
        } catch (c) {
          t = c;
        }
    throw t;
  } }, z = 0, W.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = A({}, this.state), typeof t == "function" && (t = t(A({}, n), this.props)), t && A(n, t), t != null && this.__v && (e && this._sb.push(e), $t(this));
  }, W.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), $t(this));
  }, W.prototype.render = O, H = [], xt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, bt = function(t, e) {
    return t.__v.__b - e.__v.__b;
  }, X.__r = 0, at = Math.random().toString(8), q = "__d" + at, F = "__a" + at, kt = /(PointerCapture)$|Capture$/i, lt = 0, st = Ct(!1), _t = Ct(!0);
  var he = 0;
  function _(t, e, n, o, r, i) {
    e || (e = {});
    var a, c, p = e;
    if ("ref" in p)
      for (c in p = {}, e)
        c == "ref" ? a = e[c] : p[c] = e[c];
    var s = { type: t, props: p, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --he, __i: -1, __u: 0, __source: r, __self: i };
    if (typeof t == "function" && (a = t.defaultProps))
      for (c in a)
        p[c] === void 0 && (p[c] = a[c]);
    return h.vnode && h.vnode(s), s;
  }
  var Z, $, ht, Wt, ft = 0, zt = [], S = h, Ht = S.__b, Rt = S.__r, Et = S.diffed, It = S.__c, Bt = S.unmount, Ot = S.__;
  function Ut(t, e) {
    S.__h && S.__h($, t, ft || e), ft = 0;
    var n = $.__H || ($.__H = { __: [], __h: [] });
    return t >= n.__.length && n.__.push({}), n.__[t];
  }
  function P(t) {
    return ft = 1, fe(Ft, t);
  }
  function fe(t, e, n) {
    var o = Ut(Z++, 2);
    if (o.t = t, !o.__c && (o.__ = [n ? n(e) : Ft(void 0, e), function(c) {
      var p = o.__N ? o.__N[0] : o.__[0], s = o.t(p, c);
      p !== s && (o.__N = [s, o.__[1]], o.__c.setState({}));
    }], o.__c = $, !$.__f)) {
      var r = function(c, p, s) {
        if (!o.__c.__H)
          return !0;
        var u = !1, y = o.__c.props !== c;
        if (o.__c.__H.__.some(function(d) {
          if (d.__N) {
            u = !0;
            var g = d.__[0];
            d.__ = d.__N, d.__N = void 0, g !== d.__[0] && (y = !0);
          }
        }), i) {
          var l = i.call(this, c, p, s);
          return u ? l || y : l;
        }
        return !u || y;
      };
      $.__f = !0;
      var i = $.shouldComponentUpdate, a = $.componentWillUpdate;
      $.componentWillUpdate = function(c, p, s) {
        if (this.__e) {
          var u = i;
          i = void 0, r(c, p, s), i = u;
        }
        a && a.call(this, c, p, s);
      }, $.shouldComponentUpdate = r;
    }
    return o.__N || o.__;
  }
  function ge(t, e) {
    var n = Ut(Z++, 3);
    !S.__s && ve(n.__H, e) && (n.__ = t, n.u = e, $.__H.__h.push(n));
  }
  function ye() {
    for (var t; t = zt.shift(); ) {
      var e = t.__H;
      if (t.__P && e)
        try {
          e.__h.some(tt), e.__h.some(gt), e.__h = [];
        } catch (n) {
          e.__h = [], S.__e(n, t.__v);
        }
    }
  }
  S.__b = function(t) {
    $ = null, Ht && Ht(t);
  }, S.__ = function(t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ot && Ot(t, e);
  }, S.__r = function(t) {
    Rt && Rt(t), Z = 0;
    var e = ($ = t.__c).__H;
    e && (ht === $ ? (e.__h = [], $.__h = [], e.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (e.__h.some(tt), e.__h.some(gt), e.__h = [], Z = 0)), ht = $;
  }, S.diffed = function(t) {
    Et && Et(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (zt.push(e) !== 1 && Wt === S.requestAnimationFrame || ((Wt = S.requestAnimationFrame) || me)(ye)), e.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), ht = $ = null;
  }, S.__c = function(t, e) {
    e.some(function(n) {
      try {
        n.__h.some(tt), n.__h = n.__h.filter(function(o) {
          return !o.__ || gt(o);
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
        tt(o);
      } catch (r) {
        e = r;
      }
    }), n.__H = void 0, e && S.__e(e, n.__v));
  };
  var Lt = typeof requestAnimationFrame == "function";
  function me(t) {
    var e, n = function() {
      clearTimeout(o), Lt && cancelAnimationFrame(e), setTimeout(t);
    }, o = setTimeout(n, 35);
    Lt && (e = requestAnimationFrame(n));
  }
  function tt(t) {
    var e = $, n = t.__c;
    typeof n == "function" && (t.__c = void 0, n()), $ = e;
  }
  function gt(t) {
    var e = $;
    t.__c = t.__(), $ = e;
  }
  function ve(t, e) {
    return !t || t.length !== e.length || e.some(function(n, o) {
      return n !== t[o];
    });
  }
  function Ft(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function xe(t, e) {
    for (var n in e)
      t[n] = e[n];
    return t;
  }
  function jt(t, e) {
    for (var n in t)
      if (n !== "__source" && !(n in e))
        return !0;
    for (var o in e)
      if (o !== "__source" && t[o] !== e[o])
        return !0;
    return !1;
  }
  function Vt(t, e) {
    this.props = t, this.context = e;
  }
  (Vt.prototype = new W()).isPureReactComponent = !0, Vt.prototype.shouldComponentUpdate = function(t, e) {
    return jt(this.props, t) || jt(this.state, e);
  };
  var qt = h.__b;
  h.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), qt && qt(t);
  };
  var be = h.__e;
  h.__e = function(t, e, n, o) {
    if (t.then) {
      for (var r, i = e; i = i.__; )
        if ((r = i.__c) && r.__c)
          return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), r.__c(t, e);
    }
    be(t, e, n, o);
  };
  var Jt = h.unmount;
  function Yt(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), t.__c.__H = null), (t = xe({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(o) {
      return Yt(o, e, n);
    })), t;
  }
  function Gt(t, e, n) {
    return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(o) {
      return Gt(o, e, n);
    }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
  }
  function yt() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Xt(t) {
    var e = t.__ && t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function et() {
    this.i = null, this.l = null;
  }
  h.unmount = function(t) {
    var e = t.__c;
    e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Jt && Jt(t);
  }, (yt.prototype = new W()).__c = function(t, e) {
    var n = e.__c, o = this;
    o.o == null && (o.o = []), o.o.push(n);
    var r = Xt(o.__v), i = !1, a = function() {
      i || o.__z || (i = !0, n.__R = null, r ? r(p) : p());
    };
    n.__R = a;
    var c = n.__P;
    n.__P = null;
    var p = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var s = o.state.__a;
          o.__v.__k[0] = Gt(s, s.__c.__P, s.__c.__O);
        }
        var u;
        for (o.setState({ __a: o.__b = null }); u = o.o.pop(); )
          u.__P = c, u.forceUpdate();
      }
    };
    o.__u++ || 32 & e.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), t.then(a, a);
  }, yt.prototype.componentWillUnmount = function() {
    this.o = [];
  }, yt.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = Yt(this.__b, n, o.__O = o.__P);
      }
      this.__b = null;
    }
    var r = e.__a && pt(O, null, t.fallback);
    return r && (r.__u &= -33), [pt(O, null, e.__a ? null : t.children), r];
  };
  var Kt = function(t, e, n) {
    if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
      for (n = t.i; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        t.i = n = n[2];
      }
  };
  (et.prototype = new W()).__a = function(t) {
    var e = this, n = Xt(e.__v), o = e.l.get(t);
    return o[0]++, function(r) {
      var i = function() {
        e.props.revealOrder ? (o.push(r), Kt(e, t, o)) : r();
      };
      n ? n(i) : i();
    };
  }, et.prototype.render = function(t) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var e = K(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; )
      this.l.set(e[n], this.i = [1, 0, this.i]);
    return t.children;
  }, et.prototype.componentDidUpdate = et.prototype.componentDidMount = function() {
    var t = this;
    this.l.forEach(function(e, n) {
      Kt(t, n, e);
    });
  };
  var ke = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, we = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $e = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Se = /[A-Z0-9]/g, Te = typeof document < "u", De = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
  };
  function Ce(t, e, n) {
    return e.__k == null && (e.textContent = ""), de(t, e), typeof n == "function" && n(), t ? t.__c : null;
  }
  W.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(W.prototype, t, { configurable: !0, get: function() {
      return this["UNSAFE_" + t];
    }, set: function(e) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
    } });
  });
  var Qt = h.event;
  h.event = function(t) {
    return Qt && (t = Qt(t)), t.persist = function() {
    }, t.isPropagationStopped = function() {
      return this.cancelBubble;
    }, t.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, t.nativeEvent = t;
  };
  var Ne = { configurable: !0, get: function() {
    return this.class;
  } }, Zt = h.vnode;
  h.vnode = function(t) {
    typeof t.type == "string" && function(e) {
      var n = e.props, o = e.type, r = {}, i = o.indexOf("-") == -1;
      for (var a in n) {
        var c = n[a];
        if (!(a === "value" && "defaultValue" in n && c == null || Te && a === "children" && o === "noscript" || a === "class" || a === "className")) {
          var p = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && c === !0 ? c = "" : p === "translate" && c === "no" ? c = !1 : p[0] === "o" && p[1] === "n" ? p === "ondoubleclick" ? a = "ondblclick" : p !== "onchange" || o !== "input" && o !== "textarea" || De(n.type) ? p === "onfocus" ? a = "onfocusin" : p === "onblur" ? a = "onfocusout" : $e.test(a) && (a = p) : p = a = "oninput" : i && we.test(a) ? a = a.replace(Se, "-$&").toLowerCase() : c === null && (c = void 0), p === "oninput" && r[a = p] && (a = "oninputCapture"), r[a] = c;
        }
      }
      o == "select" && (r.multiple && Array.isArray(r.value) && (r.value = K(n.children).forEach(function(s) {
        s.props.selected = r.value.indexOf(s.props.value) != -1;
      })), r.defaultValue != null && (r.value = K(n.children).forEach(function(s) {
        s.props.selected = r.multiple ? r.defaultValue.indexOf(s.props.value) != -1 : r.defaultValue == s.props.value;
      }))), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Ne)) : n.className && (r.class = r.className = n.className), e.props = r;
    }(t), t.$$typeof = ke, Zt && Zt(t);
  };
  var te = h.__r;
  h.__r = function(t) {
    te && te(t), t.__c;
  };
  var ee = h.diffed;
  h.diffed = function(t) {
    ee && ee(t);
    var e = t.props, n = t.__e;
    n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value);
  };
  const Pe = {
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
  }, Me = {
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
  function nt(t) {
    return t >= 1e4 ? (t / 1e4).toFixed(1) + "w" : t >= 1e3 ? (t / 1e3).toFixed(1) + "k" : String(t);
  }
  function Ae(t) {
    if (!t.length)
      return { cur: 0, longest: 0 };
    const e = new Set(t.map((p) => p.date)), n = (p) => p.toISOString().slice(0, 10), o = /* @__PURE__ */ new Date();
    o.setHours(0, 0, 0, 0);
    let r = 0;
    for (let p = 0; p <= 365; p++) {
      const s = new Date(o);
      if (s.setDate(s.getDate() - p), e.has(n(s)))
        r++;
      else
        break;
    }
    const i = [...t].sort((p, s) => p.date.localeCompare(s.date));
    let a = 0, c = 0;
    for (let p = 0; p < i.length; p++)
      c = p === 0 ? 1 : (new Date(i[p].date).getTime() - new Date(i[p - 1].date).getTime()) / 864e5 === 1 ? c + 1 : 1, c > a && (a = c);
    return { cur: r, longest: a };
  }
  function We(t) {
    const e = [], n = /* @__PURE__ */ new Date();
    for (let o = t - 1; o >= 0; o--) {
      const r = new Date(n.getFullYear(), n.getMonth() - o, 1);
      e.push(`${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}`);
    }
    return e;
  }
  const ze = () => /* @__PURE__ */ _("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ _("path", { d: "M12 20h9" }),
    /* @__PURE__ */ _("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" })
  ] }), He = () => /* @__PURE__ */ _("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ _("polyline", { points: "4 7 4 4 20 4 20 7" }),
    /* @__PURE__ */ _("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
    /* @__PURE__ */ _("line", { x1: "12", y1: "4", x2: "12", y2: "20" })
  ] }), Re = () => /* @__PURE__ */ _("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ _("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ _("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ _("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ _("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }), Ee = () => /* @__PURE__ */ _("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ _("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }) });
  function Ie({ value: t, label: e, max: n, color: o, unit: r }) {
    const [i, a] = P(!1);
    return /* @__PURE__ */ _(
      "div",
      {
        style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end", position: "relative" },
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
          i && t > 0 && /* @__PURE__ */ _("div", { style: {
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
            nt(t),
            " ",
            r
          ] }),
          /* @__PURE__ */ _("div", { style: {
            width: "100%",
            borderRadius: "3px 3px 0 0",
            background: t > 0 ? o : "rgba(128,128,128,0.1)",
            height: `${Math.max(t / n * 60, t > 0 ? 4 : 0)}px`,
            transition: "height 0.5s cubic-bezier(.4,0,.2,1)",
            opacity: t > 0 ? 0.35 + 0.65 * (t / n) : 1
          } }),
          /* @__PURE__ */ _("span", { style: { fontSize: "9px", opacity: 0.4, marginTop: "3px", fontWeight: 500, lineHeight: 1 }, children: e })
        ]
      }
    );
  }
  function ne({ data: t, labels: e, color: n, unit: o }) {
    const r = Math.max(...t, 1);
    return /* @__PURE__ */ _("div", { style: { display: "flex", alignItems: "flex-end", gap: "4px", height: "80px", width: "100%" }, children: t.map((i, a) => /* @__PURE__ */ _(Ie, { value: i, label: e[a], max: r, color: n, unit: o }, a)) });
  }
  function Be({ label: t, value: e, max: n, color: o }) {
    return /* @__PURE__ */ _("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }, children: [
      /* @__PURE__ */ _("span", { style: { fontSize: "11px", opacity: 0.6, width: "80px", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t }),
      /* @__PURE__ */ _("div", { style: { flex: 1, background: "rgba(128,128,128,0.1)", borderRadius: "4px", height: "7px", overflow: "hidden" }, children: /* @__PURE__ */ _("div", { style: {
        width: `${e / n * 100}%`,
        height: "100%",
        background: o,
        borderRadius: "4px",
        transition: "width 0.6s cubic-bezier(.4,0,.2,1)"
      } }) }),
      /* @__PURE__ */ _("span", { style: { fontSize: "11px", opacity: 0.45, width: "28px", textAlign: "right", flexShrink: 0 }, children: e })
    ] });
  }
  function Oe({ data: t, unit: e, weekLabels: n, monthNames: o }) {
    const r = {};
    t.forEach((f) => {
      r[f.date] = f.count;
    });
    const i = Math.max(...Object.values(r), 1), [a, c] = P(""), p = [], s = /* @__PURE__ */ new Date();
    s.setHours(0, 0, 0, 0);
    const u = new Date(s);
    for (u.setDate(u.getDate() - 23 * 7 + 1); u.getDay() !== 0; )
      u.setDate(u.getDate() - 1);
    let y = [];
    for (let f = new Date(u); f <= s; f.setDate(f.getDate() + 1)) {
      const x = f.toISOString().slice(0, 10);
      y.push({ date: x, count: r[x] || 0 }), y.length === 7 && (p.push(y), y = []);
    }
    y.length && p.push(y);
    const l = [];
    let d = "";
    p.forEach((f, x) => {
      f.forEach((T) => {
        const C = T.date.slice(0, 7);
        if (C !== d) {
          const R = parseInt(T.date.slice(5, 7)) - 1;
          l.push({ label: o[R] ?? "", col: x }), d = C;
        }
      });
    });
    const g = 11, b = 3, k = g + b, w = (f) => {
      if (f === 0)
        return "rgba(128,128,128,0.12)";
      const x = f / i;
      return x < 0.25 ? "rgba(99,102,241,0.3)" : x < 0.5 ? "rgba(99,102,241,0.52)" : x < 0.75 ? "rgba(99,102,241,0.72)" : "#6366f1";
    }, m = /* @__PURE__ */ new Set([1, 3, 5]);
    return /* @__PURE__ */ _("div", { children: [
      /* @__PURE__ */ _("style", { children: ".ws-hm::-webkit-scrollbar{display:none}" }),
      /* @__PURE__ */ _("div", { class: "ws-hm", style: { overflowX: "auto", scrollbarWidth: "none" }, children: /* @__PURE__ */ _("div", { style: { display: "inline-flex", gap: "0", flexDirection: "column", minWidth: "max-content" }, children: [
        /* @__PURE__ */ _("div", { style: { display: "flex", marginLeft: "24px", height: "16px", position: "relative", marginBottom: "2px" }, children: l.map(({ label: f, col: x }) => /* @__PURE__ */ _("div", { style: {
          position: "absolute",
          left: `${x * k}px`,
          fontSize: "10px",
          opacity: 0.45,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }, children: f }, x)) }),
        /* @__PURE__ */ _("div", { style: { display: "flex", gap: "0" }, children: [
          /* @__PURE__ */ _("div", { style: { display: "flex", flexDirection: "column", gap: `${b}px`, marginRight: "6px", width: "18px" }, children: n.map((f, x) => /* @__PURE__ */ _("div", { style: {
            height: `${g}px`,
            lineHeight: `${g}px`,
            fontSize: "9px",
            opacity: m.has(x) ? 0.4 : 0,
            textAlign: "right",
            fontWeight: 500
          }, children: f.slice(0, 3) }, x)) }),
          /* @__PURE__ */ _("div", { style: { display: "flex", gap: `${b}px` }, children: p.map((f, x) => /* @__PURE__ */ _("div", { style: { display: "flex", flexDirection: "column", gap: `${b}px` }, children: f.map((T, C) => /* @__PURE__ */ _(
            "div",
            {
              onMouseEnter: () => c(T.count > 0 ? `${T.date} · ${T.count} ${e}` : T.date),
              onMouseLeave: () => c(""),
              style: {
                width: `${g}px`,
                height: `${g}px`,
                borderRadius: "2px",
                background: w(T.count),
                cursor: "default"
              }
            },
            C
          )) }, x)) })
        ] })
      ] }) }),
      /* @__PURE__ */ _("div", { style: {
        height: "16px",
        fontSize: "11px",
        marginTop: "6px",
        opacity: a ? 0.5 : 0,
        transition: "opacity 0.15s"
      }, children: a })
    ] });
  }
  function ot({ value: t, label: e, icon: n, accent: o }) {
    return /* @__PURE__ */ _("div", { style: {
      borderRadius: "12px",
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      background: `${o}10`,
      border: `1px solid ${o}20`
    }, children: [
      /* @__PURE__ */ _("span", { style: { color: o, opacity: 0.85 }, children: n }),
      /* @__PURE__ */ _("span", { style: { fontSize: "22px", fontWeight: 800, lineHeight: 1 }, children: t }),
      /* @__PURE__ */ _("span", { style: { fontSize: "10px", opacity: 0.5, textAlign: "center", fontWeight: 600 }, children: e })
    ] });
  }
  function Ue({ weeklyData: t, weekLabels: e, monthData: n, totalNotes: o, t: r }) {
    const i = Math.max(...t), a = i > 0 ? e[t.indexOf(i)] ?? "—" : "—", c = n[n.length - 1], p = n[n.length - 2], s = (c == null ? void 0 : c.totalWords) ?? 0, u = (p == null ? void 0 : p.totalWords) ?? 0, y = u > 0 ? Math.round((s - u) / u * 100) : null, l = o > 0 ? Math.round(n.reduce((g, b) => g + b.totalWords, 0) / o) : 0, d = [
      { icon: "📅", text: `${r("mostActive")}: ${a}` },
      { icon: "✍️", text: `${r("avgNote")}: ${nt(l)} ${r("chars")}` },
      ...y !== null ? [{ icon: y >= 0 ? "📈" : "📉", text: `${r("thisMonth")}: ${y >= 0 ? "+" : ""}${y}%` }] : []
    ];
    return /* @__PURE__ */ _("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }, children: d.map((g, b) => /* @__PURE__ */ _("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      background: "rgba(128,128,128,0.08)",
      border: "1px solid rgba(128,128,128,0.12)",
      borderRadius: "20px",
      padding: "4px 10px",
      fontSize: "11px",
      opacity: 0.7
    }, children: [
      /* @__PURE__ */ _("span", { style: { fontSize: "12px" }, children: g.icon }),
      /* @__PURE__ */ _("span", { children: g.text })
    ] }, b)) });
  }
  function Le() {
    return /* @__PURE__ */ _("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px" }, children: [
      /* @__PURE__ */ _("style", { children: "@keyframes ws-pulse{0%,100%{opacity:.3}50%{opacity:.65}}" }),
      /* @__PURE__ */ _("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [110, 60, 60].map((t, e) => /* @__PURE__ */ _("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.12}s infinite` } }, e)) }),
      /* @__PURE__ */ _("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [36, 200].map((t, e) => /* @__PURE__ */ _("div", { style: { height: `${t}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${e * 0.15}s infinite` } }, e)) })
    ] });
  }
  function Fe() {
    var oe, re;
    const [t, e] = P(!0), [n, o] = P([]), [r, i] = P([]), [a, c] = P({ cur: 0, longest: 0 }), [p, s] = P(0), [u, y] = P(0), [l, d] = P([0, 0, 0, 0, 0, 0, 0]), [g, b] = P("heatmap"), [k, w] = P(
      (oe = window.Blinko.i18n.language) != null && oe.startsWith("zh") ? "zh" : "en"
    ), m = k === "zh" ? Me : Pe, f = (v) => m[v], x = f("weeks").split(","), T = f("months").split(",");
    if (ge(() => {
      const v = window.Blinko.api.analytics, N = We(6);
      Promise.all([
        v.dailyNoteCount.mutate(),
        ...N.map((L) => v.monthlyStats.mutate({ month: L }).catch(() => null))
      ]).then(([L, ...qe]) => {
        o(L), c(Ae(L)), s(L.reduce((B, mt) => B + mt.count, 0)), y(L.length);
        const ie = [0, 0, 0, 0, 0, 0, 0];
        L.forEach((B) => {
          ie[(/* @__PURE__ */ new Date(B.date + "T12:00:00")).getDay()] += B.count;
        }), d(ie);
        const Je = qe.map((B, mt) => B ? { month: N[mt].slice(5), totalWords: B.totalWords, tagStats: B.tagStats || [] } : null).filter(Boolean);
        i(Je), e(!1);
      }).catch(() => e(!1));
    }, []), t)
      return /* @__PURE__ */ _(Le, {});
    const C = r.reduce((v, N) => v + N.totalWords, 0), R = {};
    r.flatMap((v) => v.tagStats).forEach((v) => {
      v.tagName !== "Others" && (R[v.tagName] = (R[v.tagName] || 0) + v.count);
    });
    const E = Object.entries(R).sort((v, N) => N[1] - v[1]).slice(0, 8), V = ((re = E[0]) == null ? void 0 : re[1]) || 1, D = r.map((v) => v.totalWords), I = r.map((v) => v.month), rt = a.cur > 0, it = (v, N) => /* @__PURE__ */ _("button", { onClick: () => b(v), style: {
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
    }, children: N });
    return /* @__PURE__ */ _("div", { style: { display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px", padding: "20px", minHeight: "280px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ _("style", { children: "@keyframes ws-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.ws-in{animation:ws-up 0.28s ease both}" }),
      /* @__PURE__ */ _("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
        /* @__PURE__ */ _("div", { class: "ws-in", style: {
          background: rt ? "linear-gradient(145deg,#7c3aed,#4f46e5 60%,#2563eb)" : "linear-gradient(145deg,#374151,#1f2937)",
          borderRadius: "14px",
          padding: "16px 14px 14px",
          color: "white",
          boxShadow: rt ? "0 6px 20px rgba(99,60,237,0.3)" : "none",
          animationDelay: "0ms"
        }, children: [
          /* @__PURE__ */ _("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "8px" }, children: /* @__PURE__ */ _("button", { onClick: () => w((v) => v === "zh" ? "en" : "zh"), style: {
            background: "rgba(255,255,255,0.15)",
            border: "none",
            color: "white",
            borderRadius: "6px",
            padding: "2px 9px",
            fontSize: "10px",
            fontWeight: 600,
            cursor: "pointer"
          }, children: k === "zh" ? "EN" : "中文" }) }),
          /* @__PURE__ */ _("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ _("div", { style: { fontSize: "46px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px" }, children: a.cur }),
            /* @__PURE__ */ _("div", { style: { fontSize: "12px", opacity: 0.8, fontWeight: 600, marginTop: "3px" }, children: f("streak") }),
            !rt && /* @__PURE__ */ _("div", { style: { fontSize: "11px", opacity: 0.4, marginTop: "4px", lineHeight: 1.4 }, children: f("writeToday") })
          ] }),
          rt && /* @__PURE__ */ _("div", { style: { display: "flex", gap: "4px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }, children: [
            Array.from({ length: Math.min(a.cur, 18) }).map((v, N) => /* @__PURE__ */ _("div", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.8)" } }, N)),
            a.cur > 18 && /* @__PURE__ */ _("span", { style: { fontSize: "10px", opacity: 0.6 }, children: [
              "+",
              a.cur - 18
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _("div", { class: "ws-in", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", animationDelay: "60ms" }, children: [
          /* @__PURE__ */ _(ot, { value: nt(p), label: f("totalNotes"), icon: /* @__PURE__ */ _(ze, {}), accent: "#3b82f6" }),
          /* @__PURE__ */ _(ot, { value: nt(C), label: f("totalChars"), icon: /* @__PURE__ */ _(He, {}), accent: "#8b5cf6" }),
          /* @__PURE__ */ _(ot, { value: u, label: f("activeDays"), icon: /* @__PURE__ */ _(Re, {}), accent: "#22c55e" }),
          /* @__PURE__ */ _(ot, { value: a.longest, label: f("bestStreak"), icon: /* @__PURE__ */ _(Ee, {}), accent: "#f59e0b" })
        ] })
      ] }),
      /* @__PURE__ */ _("div", { class: "ws-in", style: { display: "flex", flexDirection: "column", gap: "10px", animationDelay: "100ms" }, children: [
        /* @__PURE__ */ _("div", { style: { display: "flex", gap: "2px", background: "rgba(128,128,128,0.06)", borderRadius: "10px", padding: "4px" }, children: [
          it("heatmap", f("tab_heatmap")),
          it("weekly", f("tab_weekly")),
          it("tags", f("tab_tags")),
          it("trends", f("tab_trends"))
        ] }),
        /* @__PURE__ */ _("div", { style: {
          flex: 1,
          borderRadius: "12px",
          padding: "14px",
          background: "rgba(128,128,128,0.05)",
          border: "1px solid rgba(128,128,128,0.1)"
        }, children: [
          g === "heatmap" && /* @__PURE__ */ _(O, { children: [
            /* @__PURE__ */ _(Oe, { data: n, unit: f("notes"), weekLabels: x, monthNames: T }),
            /* @__PURE__ */ _(
              Ue,
              {
                weeklyData: l,
                weekLabels: x,
                monthData: r,
                totalNotes: p,
                t: f
              }
            )
          ] }),
          g === "weekly" && /* @__PURE__ */ _(ne, { data: l, labels: x, color: "#6366f1", unit: f("notes") }),
          g === "tags" && (E.length > 0 ? /* @__PURE__ */ _("div", { children: E.map(([v, N]) => /* @__PURE__ */ _(Be, { label: v, value: N, max: V, color: "linear-gradient(90deg,#6366f1,#8b5cf6)" }, v)) }) : /* @__PURE__ */ _("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" })),
          g === "trends" && (D.length > 0 ? /* @__PURE__ */ _(ne, { data: D, labels: I, color: "#2563eb", unit: f("chars") }) : /* @__PURE__ */ _("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" }))
        ] }),
        /* @__PURE__ */ _("div", { style: { textAlign: "right", fontSize: "10px", opacity: 0.2 }, children: f("footer") })
      ] })
    ] });
  }
  const je = {
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
  }, Ve = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>";
  System.register([], (t) => ({
    execute: () => {
      t("default", class {
        constructor() {
          ae(this, "withSettingPanel", !1);
          Object.assign(this, je);
        }
        async init() {
          window.Blinko.addToolBarIcon({
            name: "writing-stats",
            icon: Ve,
            tooltip: "Writing Stats",
            onClick: () => {
              window.Blinko.showDialog({
                title: "✍️ Writing Stats",
                size: "3xl",
                content: () => {
                  const n = document.createElement("div");
                  return Ce(/* @__PURE__ */ _(Fe, {}), n), n;
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
