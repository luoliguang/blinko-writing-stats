var qt = Object.defineProperty;
var Yt = (P, d, W) => d in P ? qt(P, d, { enumerable: !0, configurable: !0, writable: !0, value: W }) : P[d] = W;
var it = (P, d, W) => (Yt(P, typeof d != "symbol" ? d + "" : d, W), W);
(function() {
  var P, d, W, A, me, ve, be, re, q, j, xe, ie, _e, ae, Y = {}, X = [], _t = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, V = Array.isArray;
  function N(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function le(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function se(e, t, n) {
    var o, r, i, a = {};
    for (i in t)
      i == "key" ? o = t[i] : i == "ref" ? r = t[i] : a[i] = t[i];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? P.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
      for (i in e.defaultProps)
        a[i] === void 0 && (a[i] = e.defaultProps[i]);
    return G(e, a, o, r, null);
  }
  function G(e, t, n, o, r) {
    var i = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++W, __i: -1, __u: 0 };
    return r == null && d.vnode != null && d.vnode(i), i;
  }
  function U(e) {
    return e.children;
  }
  function z(e, t) {
    this.props = e, this.context = t;
  }
  function E(e, t) {
    if (t == null)
      return e.__ ? E(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null)
        return n.__e;
    return typeof e.type == "function" ? E(e) : null;
  }
  function at(e) {
    if (e.__P && e.__d) {
      var t = e.__v, n = t.__e, o = [], r = [], i = N({}, t);
      i.__v = t.__v + 1, d.vnode && d.vnode(i), ce(e.__P, i, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? E(t), !!(32 & t.__u), r), i.__v = t.__v, i.__.__k[i.__i] = i, Pe(o, i, r), t.__e = t.__ = null, i.__e != n && ke(i);
    }
  }
  function ke(e) {
    if ((e = e.__) != null && e.__c != null)
      return e.__e = e.__c.base = null, e.__k.some(function(t) {
        if (t != null && t.__e != null)
          return e.__e = e.__c.base = t.__e;
      }), ke(e);
  }
  function we(e) {
    (!e.__d && (e.__d = !0) && A.push(e) && !J.__r++ || me != d.debounceRendering) && ((me = d.debounceRendering) || ve)(J);
  }
  function J() {
    try {
      for (var e, t = 1; A.length; )
        A.length > t && A.sort(be), e = A.shift(), t = A.length, at(e);
    } finally {
      A.length = J.__r = 0;
    }
  }
  function $e(e, t, n, o, r, i, a, s, c, l, f) {
    var h, _, p, g, $, k, w = o && o.__k || X, y = t.length;
    for (c = lt(n, t, w, c, y), h = 0; h < y; h++)
      (p = n.__k[h]) != null && (_ = p.__i != -1 && w[p.__i] || Y, p.__i = h, k = ce(e, p, _, r, i, a, s, c, l, f), g = p.__e, p.ref && _.ref != p.ref && (_.ref && ue(_.ref, null, p), f.push(p.ref, p.__c || g, p)), $ == null && g != null && ($ = g), 4 & p.__u ? (c = Se(p, c, e), _.__e && (_.__e = null)) : typeof p.type == "function" && k !== void 0 ? c = k : g && (c = g.nextSibling), p.__u &= -7);
    return n.__e = $, c;
  }
  function lt(e, t, n, o, r) {
    var i, a, s, c, l, f = n.length, h = f, _ = 0;
    for (e.__k = new Array(r), i = 0; i < r; i++)
      (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = G(null, a, null, null, null) : V(a) ? a = e.__k[i] = G(U, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[i] = G(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, c = i + _, a.__ = e, a.__b = e.__b + 1, s = null, (l = a.__i = st(a, n, c, h)) != -1 && (h--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (r > f ? _-- : r < f && _++), typeof a.type != "function" && (a.__u |= 4)) : l != c && (l == c - 1 ? _-- : l == c + 1 ? _++ : (l > c ? _-- : _++, a.__u |= 4))) : e.__k[i] = null;
    if (h)
      for (i = 0; i < f; i++)
        (s = n[i]) != null && !(2 & s.__u) && (s.__e == o && (o = E(s)), ze(s, s));
    return o;
  }
  function Se(e, t, n) {
    var o, r;
    if (typeof e.type == "function") {
      for (o = e.__k, r = 0; o && r < o.length; r++)
        o[r] && (o[r].__ = e, t = Se(o[r], t, n));
      return t;
    }
    e.__e != t && (t && e.type && !t.parentNode && (t = E(e)), t = n.insertBefore(e.__e, t || null));
    do
      t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function K(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (V(e) ? e.some(function(n) {
      K(n, t);
    }) : t.push(e)), t;
  }
  function st(e, t, n, o) {
    var r, i, a, s = e.key, c = e.type, l = t[n], f = l != null && (2 & l.__u) == 0;
    if (l === null && s == null || f && s == l.key && c == l.type)
      return n;
    if (o > (f ? 1 : 0)) {
      for (r = n - 1, i = n + 1; r >= 0 || i < t.length; )
        if ((l = t[a = r >= 0 ? r-- : i++]) != null && !(2 & l.__u) && s == l.key && c == l.type)
          return a;
    }
    return -1;
  }
  function Te(e, t, n) {
    t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || _t.test(t) ? n : n + "px";
  }
  function Q(e, t, n, o, r) {
    var i, a;
    e:
      if (t == "style")
        if (typeof n == "string")
          e.style.cssText = n;
        else {
          if (typeof o == "string" && (e.style.cssText = o = ""), o)
            for (t in o)
              n && t in n || Te(e.style, t, "");
          if (n)
            for (t in n)
              o && n[t] == o[t] || Te(e.style, t, n[t]);
        }
      else if (t[0] == "o" && t[1] == "n")
        i = t != (t = t.replace(xe, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o ? n[j] = o[j] : (n[j] = ie, e.addEventListener(t, i ? ae : _e, i)) : e.removeEventListener(t, i ? ae : _e, i);
      else {
        if (r == "http://www.w3.org/2000/svg")
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
  function De(e) {
    return function(t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t[q] == null)
          t[q] = ie++;
        else if (t[q] < n[j])
          return;
        return n(d.event ? d.event(t) : t);
      }
    };
  }
  function ce(e, t, n, o, r, i, a, s, c, l) {
    var f, h, _, p, g, $, k, w, y, v, B, M, H, I, F, L, S = t.type;
    if (t.constructor !== void 0)
      return null;
    128 & n.__u && (c = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = d.__b) && f(t);
    e:
      if (typeof S == "function") {
        h = a.length;
        try {
          if (y = t.props, v = S.prototype && S.prototype.render, B = (f = S.contextType) && o[f.__c], M = f ? B ? B.props.value : f.__ : o, n.__c ? w = (_ = t.__c = n.__c).__ = _.__E : (v ? t.__c = _ = new S(y, M) : (t.__c = _ = new z(y, M), _.constructor = S, _.render = ut), B && B.sub(_), _.state || (_.state = {}), _.__n = o, p = _.__d = !0, _.__h = [], _._sb = []), v && _.__s == null && (_.__s = _.state), v && S.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = N({}, _.__s)), N(_.__s, S.getDerivedStateFromProps(y, _.__s))), g = _.props, $ = _.state, _.__v = t, p)
            v && S.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), v && _.componentDidMount != null && _.__h.push(_.componentDidMount);
          else {
            if (v && S.getDerivedStateFromProps == null && y !== g && _.componentWillReceiveProps != null && _.componentWillReceiveProps(y, M), t.__v == n.__v || !_.__e && _.shouldComponentUpdate != null && _.shouldComponentUpdate(y, _.__s, M) === !1) {
              t.__v != n.__v && (_.props = y, _.state = _.__s, _.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(C) {
                C && (C.__ = t);
              }), X.push.apply(_.__h, _._sb), _._sb = [], _.__h.length && a.push(_), s = E(n);
              break e;
            }
            _.componentWillUpdate != null && _.componentWillUpdate(y, _.__s, M), v && _.componentDidUpdate != null && _.__h.push(function() {
              _.componentDidUpdate(g, $, k);
            });
          }
          if (_.context = M, _.props = y, _.__P = e, _.__e = !1, H = d.__r, I = 0, v)
            _.state = _.__s, _.__d = !1, H && H(t), f = _.render(_.props, _.state, _.context), X.push.apply(_.__h, _._sb), _._sb = [];
          else
            do
              _.__d = !1, H && H(t), f = _.render(_.props, _.state, _.context), _.state = _.__s;
            while (_.__d && ++I < 25);
          _.state = _.__s, _.getChildContext != null && (o = N(N({}, o), _.getChildContext())), v && !p && _.getSnapshotBeforeUpdate != null && (k = _.getSnapshotBeforeUpdate(g, $)), F = f != null && f.type === U && f.key == null ? Ne(f.props.children) : f, s = $e(e, V(F) ? F : [F], t, n, o, r, i, a, s, c, l), _.base = t.__e, t.__u &= -161, _.__h.length && a.push(_), w && (_.__E = _.__ = null);
        } catch (C) {
          if (a.length = h, t.__v = null, c || i != null) {
            if (C.then) {
              for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; )
                s = s.nextSibling;
              i != null && (i[i.indexOf(s)] = null), t.__e = s;
            } else if (i != null)
              for (L = i.length; L--; )
                le(i[L]);
          } else
            t.__e = n.__e;
          t.__k == null && (t.__k = n.__k || []), C.then || Ce(t), d.__e(C, t, n);
        }
      } else
        i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = ct(n.__e, t, n, o, r, i, a, c, l);
    return (f = d.diffed) && f(t), 128 & t.__u ? void 0 : s;
  }
  function Ce(e) {
    e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Ce));
  }
  function Pe(e, t, n) {
    for (var o = 0; o < n.length; o++)
      ue(n[o], n[++o], n[++o]);
    d.__c && d.__c(t, e), e.some(function(r) {
      try {
        e = r.__h, r.__h = [], e.some(function(i) {
          i.call(r);
        });
      } catch (i) {
        d.__e(i, r.__v);
      }
    });
  }
  function Ne(e) {
    return typeof e != "object" || e == null || e.__b > 0 ? e : V(e) ? e.map(Ne) : e.constructor !== void 0 ? null : N({}, e);
  }
  function ct(e, t, n, o, r, i, a, s, c) {
    var l, f, h, _, p, g, $, k = n.props || Y, w = t.props, y = t.type;
    if (y == "svg" ? r = "http://www.w3.org/2000/svg" : y == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), i != null) {
      for (l = 0; l < i.length; l++)
        if ((p = i[l]) && "setAttribute" in p == !!y && (y ? p.localName == y : p.nodeType == 3)) {
          e = p, i[l] = null;
          break;
        }
    }
    if (e == null) {
      if (y == null)
        return document.createTextNode(w);
      e = document.createElementNS(r, y, w.is && w), s && (d.__m && d.__m(t, i), s = !1), i = null;
    }
    if (y == null)
      k === w || s && e.data == w || (e.data = w);
    else {
      if (i = y == "textarea" && w.defaultValue != null ? null : i && P.call(e.childNodes), !s && i != null)
        for (k = {}, l = 0; l < e.attributes.length; l++)
          k[(p = e.attributes[l]).name] = p.value;
      for (l in k)
        p = k[l], l == "dangerouslySetInnerHTML" ? h = p : l == "children" || l in w || l == "value" && "defaultValue" in w || l == "checked" && "defaultChecked" in w || Q(e, l, null, p, r);
      for (l in w)
        p = w[l], l == "children" ? _ = p : l == "dangerouslySetInnerHTML" ? f = p : l == "value" ? g = p : l == "checked" ? $ = p : s && typeof p != "function" || k[l] === p || Q(e, l, p, k[l], r);
      if (f)
        s || h && (f.__html == h.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
      else if (h && (e.innerHTML = ""), $e(t.type == "template" ? e.content : e, V(_) ? _ : [_], t, n, o, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && E(n, 0), s, c), i != null)
        for (l = i.length; l--; )
          le(i[l]);
      s && y != "textarea" || (l = "value", y == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[l] || y == "progress" && !g || y == "option" && g != k[l]) && Q(e, l, g, k[l], r), l = "checked", $ != null && $ != e[l] && Q(e, l, $, k[l], r));
    }
    return e;
  }
  function ue(e, t, n) {
    try {
      if (typeof e == "function") {
        var o = typeof e.__u == "function";
        o && e.__u(), o && t == null || (e.__u = e(t));
      } else
        e.current = t;
    } catch (r) {
      d.__e(r, n);
    }
  }
  function ze(e, t, n) {
    var o, r;
    if (d.unmount && d.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || ue(o, null, t)), (o = e.__c) != null) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          d.__e(i, t);
        }
      o.base = o.__P = o.__n = null;
    }
    if (o = e.__k)
      for (r = 0; r < o.length; r++)
        o[r] && ze(o[r], t, n || typeof e.type != "function");
    n || le(e.__e), e.__c = e.__ = e.__e = void 0;
  }
  function ut(e, t, n) {
    return this.constructor(e, n);
  }
  function pt(e, t, n) {
    var o, r, i, a;
    t == document && (t = document.documentElement), d.__ && d.__(e, t), r = (o = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], ce(t, e = (!o && n || t).__k = se(U, null, [e]), r || Y, Y, t.namespaceURI, !o && n ? [n] : r ? null : t.firstChild ? P.call(t.childNodes) : null, i, !o && n ? n : r ? r.__e : t.firstChild, o, a), Pe(i, e, a), e.props.children = null;
  }
  P = X.slice, d = { __e: function(e, t, n, o) {
    for (var r, i, a; t = t.__; )
      if ((r = t.__c) && !r.__)
        try {
          if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), a = r.__d), a)
            return r.__E = r;
        } catch (s) {
          e = s;
        }
    throw e;
  } }, W = 0, z.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = N({}, this.state), typeof e == "function" && (e = e(N({}, n), this.props)), e && N(n, e), e != null && this.__v && (t && this._sb.push(t), we(this));
  }, z.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), we(this));
  }, z.prototype.render = U, A = [], ve = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, be = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, J.__r = 0, re = Math.random().toString(8), q = "__d" + re, j = "__a" + re, xe = /(PointerCapture)$|Capture$/i, ie = 0, _e = De(!1), ae = De(!0);
  var dt = 0;
  function u(e, t, n, o, r, i) {
    t || (t = {});
    var a, s, c = t;
    if ("ref" in c)
      for (s in c = {}, t)
        s == "ref" ? a = t[s] : c[s] = t[s];
    var l = { type: e, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --dt, __i: -1, __u: 0, __source: r, __self: i };
    if (typeof e == "function" && (a = e.defaultProps))
      for (s in a)
        c[s] === void 0 && (c[s] = a[s]);
    return d.vnode && d.vnode(l), l;
  }
  var Z, b, pe, Me, de = 0, He = [], x = d, We = x.__b, Ae = x.__r, Re = x.diffed, Ee = x.__c, Be = x.unmount, Oe = x.__;
  function Ue(e, t) {
    x.__h && x.__h(b, e, de || t), de = 0;
    var n = b.__H || (b.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function D(e) {
    return de = 1, ft(Fe, e);
  }
  function ft(e, t, n) {
    var o = Ue(Z++, 2);
    if (o.t = e, !o.__c && (o.__ = [n ? n(t) : Fe(void 0, t), function(s) {
      var c = o.__N ? o.__N[0] : o.__[0], l = o.t(c, s);
      c !== l && (o.__N = [l, o.__[1]], o.__c.setState({}));
    }], o.__c = b, !b.__f)) {
      var r = function(s, c, l) {
        if (!o.__c.__H)
          return !0;
        var f = !1, h = o.__c.props !== s;
        if (o.__c.__H.__.some(function(p) {
          if (p.__N) {
            f = !0;
            var g = p.__[0];
            p.__ = p.__N, p.__N = void 0, g !== p.__[0] && (h = !0);
          }
        }), i) {
          var _ = i.call(this, s, c, l);
          return f ? _ || h : _;
        }
        return !f || h;
      };
      b.__f = !0;
      var i = b.shouldComponentUpdate, a = b.componentWillUpdate;
      b.componentWillUpdate = function(s, c, l) {
        if (this.__e) {
          var f = i;
          i = void 0, r(s, c, l), i = f;
        }
        a && a.call(this, s, c, l);
      }, b.shouldComponentUpdate = r;
    }
    return o.__N || o.__;
  }
  function ht(e, t) {
    var n = Ue(Z++, 3);
    !x.__s && mt(n.__H, t) && (n.__ = e, n.u = t, b.__H.__h.push(n));
  }
  function gt() {
    for (var e; e = He.shift(); ) {
      var t = e.__H;
      if (e.__P && t)
        try {
          t.__h.some(ee), t.__h.some(fe), t.__h = [];
        } catch (n) {
          t.__h = [], x.__e(n, e.__v);
        }
    }
  }
  x.__b = function(e) {
    b = null, We && We(e);
  }, x.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Oe && Oe(e, t);
  }, x.__r = function(e) {
    Ae && Ae(e), Z = 0;
    var t = (b = e.__c).__H;
    t && (pe === b ? (t.__h = [], b.__h = [], t.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (t.__h.some(ee), t.__h.some(fe), t.__h = [], Z = 0)), pe = b;
  }, x.diffed = function(e) {
    Re && Re(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (He.push(t) !== 1 && Me === x.requestAnimationFrame || ((Me = x.requestAnimationFrame) || yt)(gt)), t.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), pe = b = null;
  }, x.__c = function(e, t) {
    t.some(function(n) {
      try {
        n.__h.some(ee), n.__h = n.__h.filter(function(o) {
          return !o.__ || fe(o);
        });
      } catch (o) {
        t.some(function(r) {
          r.__h && (r.__h = []);
        }), t = [], x.__e(o, n.__v);
      }
    }), Ee && Ee(e, t);
  }, x.unmount = function(e) {
    Be && Be(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.some(function(o) {
      try {
        ee(o);
      } catch (r) {
        t = r;
      }
    }), n.__H = void 0, t && x.__e(t, n.__v));
  };
  var Ie = typeof requestAnimationFrame == "function";
  function yt(e) {
    var t, n = function() {
      clearTimeout(o), Ie && cancelAnimationFrame(t), setTimeout(e);
    }, o = setTimeout(n, 35);
    Ie && (t = requestAnimationFrame(n));
  }
  function ee(e) {
    var t = b, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), b = t;
  }
  function fe(e) {
    var t = b;
    e.__c = e.__(), b = t;
  }
  function mt(e, t) {
    return !e || e.length !== t.length || t.some(function(n, o) {
      return n !== e[o];
    });
  }
  function Fe(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function vt(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function Le(e, t) {
    for (var n in e)
      if (n !== "__source" && !(n in t))
        return !0;
    for (var o in t)
      if (o !== "__source" && e[o] !== t[o])
        return !0;
    return !1;
  }
  function je(e, t) {
    this.props = e, this.context = t;
  }
  (je.prototype = new z()).isPureReactComponent = !0, je.prototype.shouldComponentUpdate = function(e, t) {
    return Le(this.props, e) || Le(this.state, t);
  };
  var Ve = d.__b;
  d.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ve && Ve(e);
  };
  var bt = d.__e;
  d.__e = function(e, t, n, o) {
    if (e.then) {
      for (var r, i = t; i = i.__; )
        if ((r = i.__c) && r.__c)
          return t.__e == null && (t.__e = n.__e, t.__k = n.__k || []), r.__c(e, t);
    }
    bt(e, t, n, o);
  };
  var qe = d.unmount;
  function Ye(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), e.__c.__H = null), (e = vt({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
      return Ye(o, t, n);
    })), e;
  }
  function Xe(e, t, n) {
    return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
      return Xe(o, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
  }
  function he() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Ge(e) {
    var t = e.__ && e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function te() {
    this.i = null, this.l = null;
  }
  d.unmount = function(e) {
    var t = e.__c;
    t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), qe && qe(e);
  }, (he.prototype = new z()).__c = function(e, t) {
    var n = t.__c, o = this;
    o.o == null && (o.o = []), o.o.push(n);
    var r = Ge(o.__v), i = !1, a = function() {
      i || o.__z || (i = !0, n.__R = null, r ? r(c) : c());
    };
    n.__R = a;
    var s = n.__P;
    n.__P = null;
    var c = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var l = o.state.__a;
          o.__v.__k[0] = Xe(l, l.__c.__P, l.__c.__O);
        }
        var f;
        for (o.setState({ __a: o.__b = null }); f = o.o.pop(); )
          f.__P = s, f.forceUpdate();
      }
    };
    o.__u++ || 32 & t.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(a, a);
  }, he.prototype.componentWillUnmount = function() {
    this.o = [];
  }, he.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = Ye(this.__b, n, o.__O = o.__P);
      }
      this.__b = null;
    }
    var r = t.__a && se(U, null, e.fallback);
    return r && (r.__u &= -33), [se(U, null, t.__a ? null : e.children), r];
  };
  var Je = function(e, t, n) {
    if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
      for (n = e.i; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        e.i = n = n[2];
      }
  };
  (te.prototype = new z()).__a = function(e) {
    var t = this, n = Ge(t.__v), o = t.l.get(e);
    return o[0]++, function(r) {
      var i = function() {
        t.props.revealOrder ? (o.push(r), Je(t, e, o)) : r();
      };
      n ? n(i) : i();
    };
  }, te.prototype.render = function(e) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t = K(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; )
      this.l.set(t[n], this.i = [1, 0, this.i]);
    return e.children;
  }, te.prototype.componentDidUpdate = te.prototype.componentDidMount = function() {
    var e = this;
    this.l.forEach(function(t, n) {
      Je(e, n, t);
    });
  };
  var xt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, kt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, wt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, $t = /[A-Z0-9]/g, St = typeof document < "u", Tt = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  function Dt(e, t, n) {
    return t.__k == null && (t.textContent = ""), pt(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  z.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var Ke = d.event;
  d.event = function(e) {
    return Ke && (e = Ke(e)), e.persist = function() {
    }, e.isPropagationStopped = function() {
      return this.cancelBubble;
    }, e.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, e.nativeEvent = e;
  };
  var Ct = { configurable: !0, get: function() {
    return this.class;
  } }, Qe = d.vnode;
  d.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var n = t.props, o = t.type, r = {}, i = o.indexOf("-") == -1;
      for (var a in n) {
        var s = n[a];
        if (!(a === "value" && "defaultValue" in n && s == null || St && a === "children" && o === "noscript" || a === "class" || a === "className")) {
          var c = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : c === "translate" && s === "no" ? s = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? a = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || Tt(n.type) ? c === "onfocus" ? a = "onfocusin" : c === "onblur" ? a = "onfocusout" : wt.test(a) && (a = c) : c = a = "oninput" : i && kt.test(a) ? a = a.replace($t, "-$&").toLowerCase() : s === null && (s = void 0), c === "oninput" && r[a = c] && (a = "oninputCapture"), r[a] = s;
        }
      }
      o == "select" && (r.multiple && Array.isArray(r.value) && (r.value = K(n.children).forEach(function(l) {
        l.props.selected = r.value.indexOf(l.props.value) != -1;
      })), r.defaultValue != null && (r.value = K(n.children).forEach(function(l) {
        l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value;
      }))), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Ct)) : n.className && (r.class = r.className = n.className), t.props = r;
    }(e), e.$$typeof = xt, Qe && Qe(e);
  };
  var Ze = d.__r;
  d.__r = function(e) {
    Ze && Ze(e), e.__c;
  };
  var et = d.diffed;
  d.diffed = function(e) {
    et && et(e);
    var t = e.props, n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
  };
  const Pt = {
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
    loading: "Loading..."
  }, Nt = {
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
    loading: "加载中..."
  };
  function ge(e) {
    return e >= 1e4 ? (e / 1e4).toFixed(1) + "w" : e >= 1e3 ? (e / 1e3).toFixed(1) + "k" : String(e);
  }
  function zt(e) {
    if (!e.length)
      return { cur: 0, longest: 0 };
    const t = new Set(e.map((c) => c.date)), n = (c) => c.toISOString().slice(0, 10), o = /* @__PURE__ */ new Date();
    o.setHours(0, 0, 0, 0);
    let r = 0;
    for (let c = 0; c <= 365; c++) {
      const l = new Date(o);
      if (l.setDate(l.getDate() - c), t.has(n(l)))
        r++;
      else
        break;
    }
    const i = [...e].sort((c, l) => c.date.localeCompare(l.date));
    let a = 0, s = 0;
    for (let c = 0; c < i.length; c++)
      s = c === 0 ? 1 : (new Date(i[c].date).getTime() - new Date(i[c - 1].date).getTime()) / 864e5 === 1 ? s + 1 : 1, s > a && (a = s);
    return { cur: r, longest: a };
  }
  function Mt(e) {
    const t = [], n = /* @__PURE__ */ new Date();
    for (let o = e - 1; o >= 0; o--) {
      const r = new Date(n.getFullYear(), n.getMonth() - o, 1);
      t.push(`${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}`);
    }
    return t;
  }
  const Ht = () => /* @__PURE__ */ u("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u("path", { d: "M12 20h9" }),
    /* @__PURE__ */ u("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" })
  ] }), Wt = () => /* @__PURE__ */ u("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u("polyline", { points: "4 7 4 4 20 4 20 7" }),
    /* @__PURE__ */ u("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
    /* @__PURE__ */ u("line", { x1: "12", y1: "4", x2: "12", y2: "20" })
  ] }), At = () => /* @__PURE__ */ u("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ u("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ u("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ u("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }), Rt = () => /* @__PURE__ */ u("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ u("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }) });
  function Et({ value: e, label: t, max: n, color: o, unit: r }) {
    const [i, a] = D(!1);
    return /* @__PURE__ */ u(
      "div",
      {
        style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end", position: "relative" },
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
          i && e > 0 && /* @__PURE__ */ u("div", { style: {
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
            t,
            ": ",
            ge(e),
            " ",
            r
          ] }),
          /* @__PURE__ */ u("div", { style: {
            width: "100%",
            borderRadius: "3px 3px 0 0",
            background: e > 0 ? o : "rgba(128,128,128,0.1)",
            height: `${Math.max(e / n * 60, e > 0 ? 4 : 0)}px`,
            transition: "height 0.5s cubic-bezier(.4,0,.2,1)",
            opacity: e > 0 ? 0.35 + 0.65 * (e / n) : 1
          } }),
          /* @__PURE__ */ u("span", { style: { fontSize: "9px", opacity: 0.4, marginTop: "3px", fontWeight: 500, lineHeight: 1 }, children: t })
        ]
      }
    );
  }
  function tt({ data: e, labels: t, color: n, unit: o }) {
    const r = Math.max(...e, 1);
    return /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "flex-end", gap: "4px", height: "80px", width: "100%" }, children: e.map((i, a) => /* @__PURE__ */ u(Et, { value: i, label: t[a], max: r, color: n, unit: o }, a)) });
  }
  function Bt({ label: e, value: t, max: n, color: o }) {
    return /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }, children: [
      /* @__PURE__ */ u("span", { style: { fontSize: "11px", opacity: 0.6, width: "80px", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: e }),
      /* @__PURE__ */ u("div", { style: { flex: 1, background: "rgba(128,128,128,0.1)", borderRadius: "4px", height: "7px", overflow: "hidden" }, children: /* @__PURE__ */ u("div", { style: {
        width: `${t / n * 100}%`,
        height: "100%",
        background: o,
        borderRadius: "4px",
        transition: "width 0.6s cubic-bezier(.4,0,.2,1)"
      } }) }),
      /* @__PURE__ */ u("span", { style: { fontSize: "11px", opacity: 0.45, width: "28px", textAlign: "right", flexShrink: 0 }, children: t })
    ] });
  }
  function Ot({ data: e, unit: t }) {
    const n = {};
    e.forEach((h) => {
      n[h.date] = h.count;
    });
    const o = Math.max(...Object.values(n), 1), [r, i] = D(""), a = [], s = /* @__PURE__ */ new Date();
    s.setHours(0, 0, 0, 0);
    const c = new Date(s);
    for (c.setDate(c.getDate() - 23 * 7 + 1); c.getDay() !== 0; )
      c.setDate(c.getDate() - 1);
    let l = [];
    for (let h = new Date(c); h <= s; h.setDate(h.getDate() + 1)) {
      const _ = h.toISOString().slice(0, 10);
      l.push({ date: _, count: n[_] || 0 }), l.length === 7 && (a.push(l), l = []);
    }
    l.length && a.push(l);
    const f = (h) => {
      if (h === 0)
        return "rgba(128,128,128,0.12)";
      const _ = h / o;
      return _ < 0.25 ? "rgba(99,102,241,0.3)" : _ < 0.5 ? "rgba(99,102,241,0.52)" : _ < 0.75 ? "rgba(99,102,241,0.72)" : "#6366f1";
    };
    return /* @__PURE__ */ u("div", { children: [
      /* @__PURE__ */ u("style", { children: ".ws-hm::-webkit-scrollbar{display:none}" }),
      /* @__PURE__ */ u("div", { class: "ws-hm", style: { overflowX: "auto", overflowY: "visible", scrollbarWidth: "none" }, children: /* @__PURE__ */ u("div", { style: { display: "inline-flex", gap: "3px", minWidth: "max-content" }, children: a.map((h, _) => /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: "3px" }, children: h.map((p, g) => /* @__PURE__ */ u(
        "div",
        {
          onMouseEnter: () => i(p.count > 0 ? `${p.date} · ${p.count} ${t}` : p.date),
          onMouseLeave: () => i(""),
          style: {
            width: "11px",
            height: "11px",
            borderRadius: "2px",
            background: f(p.count),
            cursor: "default",
            transition: "opacity 0.1s"
          }
        },
        g
      )) }, _)) }) }),
      /* @__PURE__ */ u("div", { style: { height: "16px", fontSize: "11px", opacity: r ? 0.55 : 0, color: "inherit", marginTop: "5px", transition: "opacity 0.15s" }, children: r })
    ] });
  }
  function ne({ value: e, label: t, icon: n, accent: o }) {
    return /* @__PURE__ */ u("div", { style: {
      borderRadius: "12px",
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      background: `${o}10`,
      border: `1px solid ${o}20`
    }, children: [
      /* @__PURE__ */ u("span", { style: { color: o, opacity: 0.85 }, children: n }),
      /* @__PURE__ */ u("span", { style: { fontSize: "22px", fontWeight: 800, lineHeight: 1 }, children: e }),
      /* @__PURE__ */ u("span", { style: { fontSize: "10px", opacity: 0.5, textAlign: "center", fontWeight: 600 }, children: t })
    ] });
  }
  function Ut() {
    return /* @__PURE__ */ u("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px" }, children: [
      /* @__PURE__ */ u("style", { children: "@keyframes ws-pulse{0%,100%{opacity:.3}50%{opacity:.65}}" }),
      /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [110, 60, 60].map((e, t) => /* @__PURE__ */ u("div", { style: { height: `${e}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${t * 0.12}s infinite` } }, t)) }),
      /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [36, 200].map((e, t) => /* @__PURE__ */ u("div", { style: { height: `${e}px`, borderRadius: "12px", background: "rgba(128,128,128,0.1)", animation: `ws-pulse 1.4s ease-in-out ${t * 0.15}s infinite` } }, t)) })
    ] });
  }
  function It() {
    var nt, ot;
    const [e, t] = D(!0), [n, o] = D([]), [r, i] = D([]), [a, s] = D({ cur: 0, longest: 0 }), [c, l] = D(0), [f, h] = D(0), [_, p] = D([0, 0, 0, 0, 0, 0, 0]), [g, $] = D("heatmap"), [k, w] = D(
      (nt = window.Blinko.i18n.language) != null && nt.startsWith("zh") ? "zh" : "en"
    ), y = k === "zh" ? Nt : Pt, v = (m) => y[m], B = v("weeks").split(",");
    if (ht(() => {
      const m = window.Blinko.api.analytics, T = Mt(6);
      Promise.all([
        m.dailyNoteCount.mutate(),
        ...T.map((O) => m.monthlyStats.mutate({ month: O }).catch(() => null))
      ]).then(([O, ...jt]) => {
        o(O), s(zt(O)), l(O.reduce((R, ye) => R + ye.count, 0)), h(O.length);
        const rt = [0, 0, 0, 0, 0, 0, 0];
        O.forEach((R) => {
          rt[(/* @__PURE__ */ new Date(R.date + "T12:00:00")).getDay()] += R.count;
        }), p(rt);
        const Vt = jt.map((R, ye) => R ? { month: T[ye].slice(5), totalWords: R.totalWords, tagStats: R.tagStats || [] } : null).filter(Boolean);
        i(Vt), t(!1);
      }).catch(() => t(!1));
    }, []), e)
      return /* @__PURE__ */ u(Ut, {});
    const M = r.reduce((m, T) => m + T.totalWords, 0), H = {};
    r.flatMap((m) => m.tagStats).forEach((m) => {
      m.tagName !== "Others" && (H[m.tagName] = (H[m.tagName] || 0) + m.count);
    });
    const I = Object.entries(H).sort((m, T) => T[1] - m[1]).slice(0, 8), F = ((ot = I[0]) == null ? void 0 : ot[1]) || 1, L = r.map((m) => m.totalWords), S = r.map((m) => m.month), C = a.cur > 0, oe = (m, T) => /* @__PURE__ */ u("button", { onClick: () => $(m), style: {
      padding: "5px 14px",
      borderRadius: "8px",
      fontSize: "11px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: g === m ? "rgba(99,102,241,0.15)" : "transparent",
      color: g === m ? "#6366f1" : "inherit",
      opacity: g === m ? 1 : 0.4,
      transition: "all 0.15s"
    }, children: T });
    return /* @__PURE__ */ u("div", { style: { display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px", padding: "20px", minHeight: "280px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ u("style", { children: "@keyframes ws-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.ws-in{animation:ws-up 0.28s ease both}" }),
      /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
        /* @__PURE__ */ u("div", { class: "ws-in", style: {
          background: C ? "linear-gradient(145deg,#7c3aed,#4f46e5 60%,#2563eb)" : "linear-gradient(145deg,#374151,#1f2937)",
          borderRadius: "14px",
          padding: "16px 14px 14px",
          color: "white",
          boxShadow: C ? "0 6px 20px rgba(99,60,237,0.3)" : "none",
          animationDelay: "0ms"
        }, children: [
          /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "8px" }, children: /* @__PURE__ */ u("button", { onClick: () => w((m) => m === "zh" ? "en" : "zh"), style: {
            background: "rgba(255,255,255,0.15)",
            border: "none",
            color: "white",
            borderRadius: "6px",
            padding: "2px 9px",
            fontSize: "10px",
            fontWeight: 600,
            cursor: "pointer"
          }, children: k === "zh" ? "EN" : "中文" }) }),
          /* @__PURE__ */ u("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ u("div", { style: { fontSize: "46px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px" }, children: a.cur }),
            /* @__PURE__ */ u("div", { style: { fontSize: "12px", opacity: 0.8, fontWeight: 600, marginTop: "3px" }, children: v("streak") }),
            !C && /* @__PURE__ */ u("div", { style: { fontSize: "11px", opacity: 0.4, marginTop: "4px", lineHeight: 1.4 }, children: v("writeToday") })
          ] }),
          C && /* @__PURE__ */ u("div", { style: { display: "flex", gap: "4px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }, children: [
            Array.from({ length: Math.min(a.cur, 18) }).map((m, T) => /* @__PURE__ */ u("div", { style: { width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.8)" } }, T)),
            a.cur > 18 && /* @__PURE__ */ u("span", { style: { fontSize: "10px", opacity: 0.6 }, children: [
              "+",
              a.cur - 18
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u("div", { class: "ws-in", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", animationDelay: "60ms" }, children: [
          /* @__PURE__ */ u(ne, { value: ge(c), label: v("totalNotes"), icon: /* @__PURE__ */ u(Ht, {}), accent: "#3b82f6" }),
          /* @__PURE__ */ u(ne, { value: ge(M), label: v("totalChars"), icon: /* @__PURE__ */ u(Wt, {}), accent: "#8b5cf6" }),
          /* @__PURE__ */ u(ne, { value: f, label: v("activeDays"), icon: /* @__PURE__ */ u(At, {}), accent: "#22c55e" }),
          /* @__PURE__ */ u(ne, { value: a.longest, label: v("bestStreak"), icon: /* @__PURE__ */ u(Rt, {}), accent: "#f59e0b" })
        ] })
      ] }),
      /* @__PURE__ */ u("div", { class: "ws-in", style: { display: "flex", flexDirection: "column", gap: "10px", animationDelay: "100ms" }, children: [
        /* @__PURE__ */ u("div", { style: { display: "flex", gap: "2px", background: "rgba(128,128,128,0.06)", borderRadius: "10px", padding: "4px" }, children: [
          oe("heatmap", v("tab_heatmap")),
          oe("weekly", v("tab_weekly")),
          oe("tags", v("tab_tags")),
          oe("trends", v("tab_trends"))
        ] }),
        /* @__PURE__ */ u("div", { style: {
          flex: 1,
          borderRadius: "12px",
          padding: "14px",
          background: "rgba(128,128,128,0.05)",
          border: "1px solid rgba(128,128,128,0.1)"
        }, children: [
          g === "heatmap" && /* @__PURE__ */ u(Ot, { data: n, unit: v("notes") }),
          g === "weekly" && /* @__PURE__ */ u(tt, { data: _, labels: B, color: "#6366f1", unit: v("notes") }),
          g === "tags" && (I.length > 0 ? /* @__PURE__ */ u("div", { children: I.map(([m, T]) => /* @__PURE__ */ u(Bt, { label: m, value: T, max: F, color: "linear-gradient(90deg,#6366f1,#8b5cf6)" }, m)) }) : /* @__PURE__ */ u("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" })),
          g === "trends" && (L.length > 0 ? /* @__PURE__ */ u(tt, { data: L, labels: S, color: "#2563eb", unit: v("chars") }) : /* @__PURE__ */ u("div", { style: { opacity: 0.3, fontSize: "12px", textAlign: "center", padding: "24px 0" }, children: "—" }))
        ] }),
        /* @__PURE__ */ u("div", { style: { textAlign: "right", fontSize: "10px", opacity: 0.2 }, children: v("footer") })
      ] })
    ] });
  }
  const Ft = {
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
  }, Lt = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>";
  System.register([], (e) => ({
    execute: () => {
      e("default", class {
        constructor() {
          it(this, "withSettingPanel", !1);
          Object.assign(this, Ft);
        }
        async init() {
          window.Blinko.addToolBarIcon({
            name: "writing-stats",
            icon: Lt,
            tooltip: "Writing Stats",
            onClick: () => {
              window.Blinko.showDialog({
                title: "✍️ Writing Stats",
                size: "3xl",
                content: () => {
                  const n = document.createElement("div");
                  return Dt(/* @__PURE__ */ u(It, {}), n), n;
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
