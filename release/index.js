var Xt = Object.defineProperty;
var Gt = (C, f, M) => f in C ? Xt(C, f, { enumerable: !0, configurable: !0, writable: !0, value: M }) : C[f] = M;
var _t = (C, f, M) => (Gt(C, typeof f != "symbol" ? f + "" : f, M), M);
(function() {
  var C, f, M, H, me, xe, be, ie, q, L, ke, _e, ae, le, Y = {}, X = [], at = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, j = Array.isArray;
  function N(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function se(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function ce(e, t, n) {
    var o, i, r, _ = {};
    for (r in t)
      r == "key" ? o = t[r] : r == "ref" ? i = t[r] : _[r] = t[r];
    if (arguments.length > 2 && (_.children = arguments.length > 3 ? C.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
      for (r in e.defaultProps)
        _[r] === void 0 && (_[r] = e.defaultProps[r]);
    return G(e, _, o, i, null);
  }
  function G(e, t, n, o, i) {
    var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++M, __i: -1, __u: 0 };
    return i == null && f.vnode != null && f.vnode(r), r;
  }
  function I(e) {
    return e.children;
  }
  function z(e, t) {
    this.props = e, this.context = t;
  }
  function R(e, t) {
    if (t == null)
      return e.__ ? R(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null)
        return n.__e;
    return typeof e.type == "function" ? R(e) : null;
  }
  function lt(e) {
    if (e.__P && e.__d) {
      var t = e.__v, n = t.__e, o = [], i = [], r = N({}, t);
      r.__v = t.__v + 1, f.vnode && f.vnode(r), ue(e.__P, r, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? R(t), !!(32 & t.__u), i), r.__v = t.__v, r.__.__k[r.__i] = r, Ne(o, r, i), t.__e = t.__ = null, r.__e != n && we(r);
    }
  }
  function we(e) {
    if ((e = e.__) != null && e.__c != null)
      return e.__e = e.__c.base = null, e.__k.some(function(t) {
        if (t != null && t.__e != null)
          return e.__e = e.__c.base = t.__e;
      }), we(e);
  }
  function $e(e) {
    (!e.__d && (e.__d = !0) && H.push(e) && !J.__r++ || me != f.debounceRendering) && ((me = f.debounceRendering) || xe)(J);
  }
  function J() {
    try {
      for (var e, t = 1; H.length; )
        H.length > t && H.sort(be), e = H.shift(), t = H.length, lt(e);
    } finally {
      H.length = J.__r = 0;
    }
  }
  function Se(e, t, n, o, i, r, _, s, c, l, p) {
    var h, a, d, g, $, k, w = o && o.__k || X, y = t.length;
    for (c = st(n, t, w, c, y), h = 0; h < y; h++)
      (d = n.__k[h]) != null && (a = d.__i != -1 && w[d.__i] || Y, d.__i = h, k = ue(e, d, a, i, r, _, s, c, l, p), g = d.__e, d.ref && a.ref != d.ref && (a.ref && pe(a.ref, null, d), p.push(d.ref, d.__c || g, d)), $ == null && g != null && ($ = g), 4 & d.__u ? (c = Te(d, c, e), a.__e && (a.__e = null)) : typeof d.type == "function" && k !== void 0 ? c = k : g && (c = g.nextSibling), d.__u &= -7);
    return n.__e = $, c;
  }
  function st(e, t, n, o, i) {
    var r, _, s, c, l, p = n.length, h = p, a = 0;
    for (e.__k = new Array(i), r = 0; r < i; r++)
      (_ = t[r]) != null && typeof _ != "boolean" && typeof _ != "function" ? (typeof _ == "string" || typeof _ == "number" || typeof _ == "bigint" || _.constructor == String ? _ = e.__k[r] = G(null, _, null, null, null) : j(_) ? _ = e.__k[r] = G(I, { children: _ }, null, null, null) : _.constructor === void 0 && _.__b > 0 ? _ = e.__k[r] = G(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : e.__k[r] = _, c = r + a, _.__ = e, _.__b = e.__b + 1, s = null, (l = _.__i = ct(_, n, c, h)) != -1 && (h--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > p ? a-- : i < p && a++), typeof _.type != "function" && (_.__u |= 4)) : l != c && (l == c - 1 ? a-- : l == c + 1 ? a++ : (l > c ? a-- : a++, _.__u |= 4))) : e.__k[r] = null;
    if (h)
      for (r = 0; r < p; r++)
        (s = n[r]) != null && !(2 & s.__u) && (s.__e == o && (o = R(s)), We(s, s));
    return o;
  }
  function Te(e, t, n) {
    var o, i;
    if (typeof e.type == "function") {
      for (o = e.__k, i = 0; o && i < o.length; i++)
        o[i] && (o[i].__ = e, t = Te(o[i], t, n));
      return t;
    }
    e.__e != t && (t && e.type && !t.parentNode && (t = R(e)), t = n.insertBefore(e.__e, t || null));
    do
      t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function K(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (j(e) ? e.some(function(n) {
      K(n, t);
    }) : t.push(e)), t;
  }
  function ct(e, t, n, o) {
    var i, r, _, s = e.key, c = e.type, l = t[n], p = l != null && (2 & l.__u) == 0;
    if (l === null && s == null || p && s == l.key && c == l.type)
      return n;
    if (o > (p ? 1 : 0)) {
      for (i = n - 1, r = n + 1; i >= 0 || r < t.length; )
        if ((l = t[_ = i >= 0 ? i-- : r++]) != null && !(2 & l.__u) && s == l.key && c == l.type)
          return _;
    }
    return -1;
  }
  function De(e, t, n) {
    t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || at.test(t) ? n : n + "px";
  }
  function Q(e, t, n, o, i) {
    var r, _;
    e:
      if (t == "style")
        if (typeof n == "string")
          e.style.cssText = n;
        else {
          if (typeof o == "string" && (e.style.cssText = o = ""), o)
            for (t in o)
              n && t in n || De(e.style, t, "");
          if (n)
            for (t in n)
              o && n[t] == o[t] || De(e.style, t, n[t]);
        }
      else if (t[0] == "o" && t[1] == "n")
        r = t != (t = t.replace(ke, "$1")), _ = t.toLowerCase(), t = _ in e || t == "onFocusOut" || t == "onFocusIn" ? _.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o ? n[L] = o[L] : (n[L] = _e, e.addEventListener(t, r ? le : ae, r)) : e.removeEventListener(t, r ? le : ae, r);
      else {
        if (i == "http://www.w3.org/2000/svg")
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
  function Ce(e) {
    return function(t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t[q] == null)
          t[q] = _e++;
        else if (t[q] < n[L])
          return;
        return n(f.event ? f.event(t) : t);
      }
    };
  }
  function ue(e, t, n, o, i, r, _, s, c, l) {
    var p, h, a, d, g, $, k, w, y, m, B, W, O, F, A, V, S = t.type;
    if (t.constructor !== void 0)
      return null;
    128 & n.__u && (c = !!(32 & n.__u), r = [s = t.__e = n.__e]), (p = f.__b) && p(t);
    e:
      if (typeof S == "function") {
        h = _.length;
        try {
          if (y = t.props, m = S.prototype && S.prototype.render, B = (p = S.contextType) && o[p.__c], W = p ? B ? B.props.value : p.__ : o, n.__c ? w = (a = t.__c = n.__c).__ = a.__E : (m ? t.__c = a = new S(y, W) : (t.__c = a = new z(y, W), a.constructor = S, a.render = pt), B && B.sub(a), a.state || (a.state = {}), a.__n = o, d = a.__d = !0, a.__h = [], a._sb = []), m && a.__s == null && (a.__s = a.state), m && S.getDerivedStateFromProps != null && (a.__s == a.state && (a.__s = N({}, a.__s)), N(a.__s, S.getDerivedStateFromProps(y, a.__s))), g = a.props, $ = a.state, a.__v = t, d)
            m && S.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), m && a.componentDidMount != null && a.__h.push(a.componentDidMount);
          else {
            if (m && S.getDerivedStateFromProps == null && y !== g && a.componentWillReceiveProps != null && a.componentWillReceiveProps(y, W), t.__v == n.__v || !a.__e && a.shouldComponentUpdate != null && a.shouldComponentUpdate(y, a.__s, W) === !1) {
              t.__v != n.__v && (a.props = y, a.state = a.__s, a.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(E) {
                E && (E.__ = t);
              }), X.push.apply(a.__h, a._sb), a._sb = [], a.__h.length && _.push(a), s = R(n);
              break e;
            }
            a.componentWillUpdate != null && a.componentWillUpdate(y, a.__s, W), m && a.componentDidUpdate != null && a.__h.push(function() {
              a.componentDidUpdate(g, $, k);
            });
          }
          if (a.context = W, a.props = y, a.__P = e, a.__e = !1, O = f.__r, F = 0, m)
            a.state = a.__s, a.__d = !1, O && O(t), p = a.render(a.props, a.state, a.context), X.push.apply(a.__h, a._sb), a._sb = [];
          else
            do
              a.__d = !1, O && O(t), p = a.render(a.props, a.state, a.context), a.state = a.__s;
            while (a.__d && ++F < 25);
          a.state = a.__s, a.getChildContext != null && (o = N(N({}, o), a.getChildContext())), m && !d && a.getSnapshotBeforeUpdate != null && (k = a.getSnapshotBeforeUpdate(g, $)), A = p != null && p.type === I && p.key == null ? ze(p.props.children) : p, s = Se(e, j(A) ? A : [A], t, n, o, i, r, _, s, c, l), a.base = t.__e, t.__u &= -161, a.__h.length && _.push(a), w && (a.__E = a.__ = null);
        } catch (E) {
          if (_.length = h, t.__v = null, c || r != null) {
            if (E.then) {
              for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; )
                s = s.nextSibling;
              r != null && (r[r.indexOf(s)] = null), t.__e = s;
            } else if (r != null)
              for (V = r.length; V--; )
                se(r[V]);
          } else
            t.__e = n.__e;
          t.__k == null && (t.__k = n.__k || []), E.then || Pe(t), f.__e(E, t, n);
        }
      } else
        r == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = ut(n.__e, t, n, o, i, r, _, c, l);
    return (p = f.diffed) && p(t), 128 & t.__u ? void 0 : s;
  }
  function Pe(e) {
    e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Pe));
  }
  function Ne(e, t, n) {
    for (var o = 0; o < n.length; o++)
      pe(n[o], n[++o], n[++o]);
    f.__c && f.__c(t, e), e.some(function(i) {
      try {
        e = i.__h, i.__h = [], e.some(function(r) {
          r.call(i);
        });
      } catch (r) {
        f.__e(r, i.__v);
      }
    });
  }
  function ze(e) {
    return typeof e != "object" || e == null || e.__b > 0 ? e : j(e) ? e.map(ze) : e.constructor !== void 0 ? null : N({}, e);
  }
  function ut(e, t, n, o, i, r, _, s, c) {
    var l, p, h, a, d, g, $, k = n.props || Y, w = t.props, y = t.type;
    if (y == "svg" ? i = "http://www.w3.org/2000/svg" : y == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), r != null) {
      for (l = 0; l < r.length; l++)
        if ((d = r[l]) && "setAttribute" in d == !!y && (y ? d.localName == y : d.nodeType == 3)) {
          e = d, r[l] = null;
          break;
        }
    }
    if (e == null) {
      if (y == null)
        return document.createTextNode(w);
      e = document.createElementNS(i, y, w.is && w), s && (f.__m && f.__m(t, r), s = !1), r = null;
    }
    if (y == null)
      k === w || s && e.data == w || (e.data = w);
    else {
      if (r = y == "textarea" && w.defaultValue != null ? null : r && C.call(e.childNodes), !s && r != null)
        for (k = {}, l = 0; l < e.attributes.length; l++)
          k[(d = e.attributes[l]).name] = d.value;
      for (l in k)
        d = k[l], l == "dangerouslySetInnerHTML" ? h = d : l == "children" || l in w || l == "value" && "defaultValue" in w || l == "checked" && "defaultChecked" in w || Q(e, l, null, d, i);
      for (l in w)
        d = w[l], l == "children" ? a = d : l == "dangerouslySetInnerHTML" ? p = d : l == "value" ? g = d : l == "checked" ? $ = d : s && typeof d != "function" || k[l] === d || Q(e, l, d, k[l], i);
      if (p)
        s || h && (p.__html == h.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
      else if (h && (e.innerHTML = ""), Se(t.type == "template" ? e.content : e, j(a) ? a : [a], t, n, o, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, r, _, r ? r[0] : n.__k && R(n, 0), s, c), r != null)
        for (l = r.length; l--; )
          se(r[l]);
      s && y != "textarea" || (l = "value", y == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[l] || y == "progress" && !g || y == "option" && g != k[l]) && Q(e, l, g, k[l], i), l = "checked", $ != null && $ != e[l] && Q(e, l, $, k[l], i));
    }
    return e;
  }
  function pe(e, t, n) {
    try {
      if (typeof e == "function") {
        var o = typeof e.__u == "function";
        o && e.__u(), o && t == null || (e.__u = e(t));
      } else
        e.current = t;
    } catch (i) {
      f.__e(i, n);
    }
  }
  function We(e, t, n) {
    var o, i;
    if (f.unmount && f.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || pe(o, null, t)), (o = e.__c) != null) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (r) {
          f.__e(r, t);
        }
      o.base = o.__P = o.__n = null;
    }
    if (o = e.__k)
      for (i = 0; i < o.length; i++)
        o[i] && We(o[i], t, n || typeof e.type != "function");
    n || se(e.__e), e.__c = e.__ = e.__e = void 0;
  }
  function pt(e, t, n) {
    return this.constructor(e, n);
  }
  function dt(e, t, n) {
    var o, i, r, _;
    t == document && (t = document.documentElement), f.__ && f.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], _ = [], ue(t, e = (!o && n || t).__k = ce(I, null, [e]), i || Y, Y, t.namespaceURI, !o && n ? [n] : i ? null : t.firstChild ? C.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o, _), Ne(r, e, _), e.props.children = null;
  }
  C = X.slice, f = { __e: function(e, t, n, o) {
    for (var i, r, _; t = t.__; )
      if ((i = t.__c) && !i.__)
        try {
          if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), _ = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), _ = i.__d), _)
            return i.__E = i;
        } catch (s) {
          e = s;
        }
    throw e;
  } }, M = 0, z.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = N({}, this.state), typeof e == "function" && (e = e(N({}, n), this.props)), e && N(n, e), e != null && this.__v && (t && this._sb.push(t), $e(this));
  }, z.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), $e(this));
  }, z.prototype.render = I, H = [], xe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, be = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, J.__r = 0, ie = Math.random().toString(8), q = "__d" + ie, L = "__a" + ie, ke = /(PointerCapture)$|Capture$/i, _e = 0, ae = Ce(!1), le = Ce(!0);
  var ft = 0;
  function u(e, t, n, o, i, r) {
    t || (t = {});
    var _, s, c = t;
    if ("ref" in c)
      for (s in c = {}, t)
        s == "ref" ? _ = t[s] : c[s] = t[s];
    var l = { type: e, props: c, key: n, ref: _, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ft, __i: -1, __u: 0, __source: i, __self: r };
    if (typeof e == "function" && (_ = e.defaultProps))
      for (s in _)
        c[s] === void 0 && (c[s] = _[s]);
    return f.vnode && f.vnode(l), l;
  }
  var Z, x, de, Me, fe = 0, He = [], b = f, Ae = b.__b, Ee = b.__r, Re = b.diffed, Be = b.__c, Oe = b.unmount, Ue = b.__;
  function Ie(e, t) {
    b.__h && b.__h(x, e, fe || t), fe = 0;
    var n = x.__H || (x.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function D(e) {
    return fe = 1, ht(Le, e);
  }
  function ht(e, t, n) {
    var o = Ie(Z++, 2);
    if (o.t = e, !o.__c && (o.__ = [n ? n(t) : Le(void 0, t), function(s) {
      var c = o.__N ? o.__N[0] : o.__[0], l = o.t(c, s);
      c !== l && (o.__N = [l, o.__[1]], o.__c.setState({}));
    }], o.__c = x, !x.__f)) {
      var i = function(s, c, l) {
        if (!o.__c.__H)
          return !0;
        var p = !1, h = o.__c.props !== s;
        if (o.__c.__H.__.some(function(d) {
          if (d.__N) {
            p = !0;
            var g = d.__[0];
            d.__ = d.__N, d.__N = void 0, g !== d.__[0] && (h = !0);
          }
        }), r) {
          var a = r.call(this, s, c, l);
          return p ? a || h : a;
        }
        return !p || h;
      };
      x.__f = !0;
      var r = x.shouldComponentUpdate, _ = x.componentWillUpdate;
      x.componentWillUpdate = function(s, c, l) {
        if (this.__e) {
          var p = r;
          r = void 0, i(s, c, l), r = p;
        }
        _ && _.call(this, s, c, l);
      }, x.shouldComponentUpdate = i;
    }
    return o.__N || o.__;
  }
  function gt(e, t) {
    var n = Ie(Z++, 3);
    !b.__s && mt(n.__H, t) && (n.__ = e, n.u = t, x.__H.__h.push(n));
  }
  function yt() {
    for (var e; e = He.shift(); ) {
      var t = e.__H;
      if (e.__P && t)
        try {
          t.__h.some(ee), t.__h.some(he), t.__h = [];
        } catch (n) {
          t.__h = [], b.__e(n, e.__v);
        }
    }
  }
  b.__b = function(e) {
    x = null, Ae && Ae(e);
  }, b.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ue && Ue(e, t);
  }, b.__r = function(e) {
    Ee && Ee(e), Z = 0;
    var t = (x = e.__c).__H;
    t && (de === x ? (t.__h = [], x.__h = [], t.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (t.__h.some(ee), t.__h.some(he), t.__h = [], Z = 0)), de = x;
  }, b.diffed = function(e) {
    Re && Re(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (He.push(t) !== 1 && Me === b.requestAnimationFrame || ((Me = b.requestAnimationFrame) || vt)(yt)), t.__H.__.some(function(n) {
      n.u && (n.__H = n.u, n.u = void 0);
    })), de = x = null;
  }, b.__c = function(e, t) {
    t.some(function(n) {
      try {
        n.__h.some(ee), n.__h = n.__h.filter(function(o) {
          return !o.__ || he(o);
        });
      } catch (o) {
        t.some(function(i) {
          i.__h && (i.__h = []);
        }), t = [], b.__e(o, n.__v);
      }
    }), Be && Be(e, t);
  }, b.unmount = function(e) {
    Oe && Oe(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.some(function(o) {
      try {
        ee(o);
      } catch (i) {
        t = i;
      }
    }), n.__H = void 0, t && b.__e(t, n.__v));
  };
  var Fe = typeof requestAnimationFrame == "function";
  function vt(e) {
    var t, n = function() {
      clearTimeout(o), Fe && cancelAnimationFrame(t), setTimeout(e);
    }, o = setTimeout(n, 35);
    Fe && (t = requestAnimationFrame(n));
  }
  function ee(e) {
    var t = x, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), x = t;
  }
  function he(e) {
    var t = x;
    e.__c = e.__(), x = t;
  }
  function mt(e, t) {
    return !e || e.length !== t.length || t.some(function(n, o) {
      return n !== e[o];
    });
  }
  function Le(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function xt(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function je(e, t) {
    for (var n in e)
      if (n !== "__source" && !(n in t))
        return !0;
    for (var o in t)
      if (o !== "__source" && e[o] !== t[o])
        return !0;
    return !1;
  }
  function Ve(e, t) {
    this.props = e, this.context = t;
  }
  (Ve.prototype = new z()).isPureReactComponent = !0, Ve.prototype.shouldComponentUpdate = function(e, t) {
    return je(this.props, e) || je(this.state, t);
  };
  var qe = f.__b;
  f.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), qe && qe(e);
  };
  var bt = f.__e;
  f.__e = function(e, t, n, o) {
    if (e.then) {
      for (var i, r = t; r = r.__; )
        if ((i = r.__c) && i.__c)
          return t.__e == null && (t.__e = n.__e, t.__k = n.__k || []), i.__c(e, t);
    }
    bt(e, t, n, o);
  };
  var Ye = f.unmount;
  function Xe(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), e.__c.__H = null), (e = xt({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
      return Xe(o, t, n);
    })), e;
  }
  function Ge(e, t, n) {
    return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
      return Ge(o, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
  }
  function ge() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Je(e) {
    var t = e.__ && e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function te() {
    this.i = null, this.l = null;
  }
  f.unmount = function(e) {
    var t = e.__c;
    t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Ye && Ye(e);
  }, (ge.prototype = new z()).__c = function(e, t) {
    var n = t.__c, o = this;
    o.o == null && (o.o = []), o.o.push(n);
    var i = Je(o.__v), r = !1, _ = function() {
      r || o.__z || (r = !0, n.__R = null, i ? i(c) : c());
    };
    n.__R = _;
    var s = n.__P;
    n.__P = null;
    var c = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var l = o.state.__a;
          o.__v.__k[0] = Ge(l, l.__c.__P, l.__c.__O);
        }
        var p;
        for (o.setState({ __a: o.__b = null }); p = o.o.pop(); )
          p.__P = s, p.forceUpdate();
      }
    };
    o.__u++ || 32 & t.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(_, _);
  }, ge.prototype.componentWillUnmount = function() {
    this.o = [];
  }, ge.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = Xe(this.__b, n, o.__O = o.__P);
      }
      this.__b = null;
    }
    var i = t.__a && ce(I, null, e.fallback);
    return i && (i.__u &= -33), [ce(I, null, t.__a ? null : e.children), i];
  };
  var Ke = function(e, t, n) {
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
    var t = this, n = Je(t.__v), o = t.l.get(e);
    return o[0]++, function(i) {
      var r = function() {
        t.props.revealOrder ? (o.push(i), Ke(t, e, o)) : i();
      };
      n ? n(r) : r();
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
      Ke(e, n, t);
    });
  };
  var kt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, wt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $t = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, St = /[A-Z0-9]/g, Tt = typeof document < "u", Dt = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  function Ct(e, t, n) {
    return t.__k == null && (t.textContent = ""), dt(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  z.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var Qe = f.event;
  f.event = function(e) {
    return Qe && (e = Qe(e)), e.persist = function() {
    }, e.isPropagationStopped = function() {
      return this.cancelBubble;
    }, e.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, e.nativeEvent = e;
  };
  var Pt = { configurable: !0, get: function() {
    return this.class;
  } }, Ze = f.vnode;
  f.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var n = t.props, o = t.type, i = {}, r = o.indexOf("-") == -1;
      for (var _ in n) {
        var s = n[_];
        if (!(_ === "value" && "defaultValue" in n && s == null || Tt && _ === "children" && o === "noscript" || _ === "class" || _ === "className")) {
          var c = _.toLowerCase();
          _ === "defaultValue" && "value" in n && n.value == null ? _ = "value" : _ === "download" && s === !0 ? s = "" : c === "translate" && s === "no" ? s = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? _ = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || Dt(n.type) ? c === "onfocus" ? _ = "onfocusin" : c === "onblur" ? _ = "onfocusout" : $t.test(_) && (_ = c) : c = _ = "oninput" : r && wt.test(_) ? _ = _.replace(St, "-$&").toLowerCase() : s === null && (s = void 0), c === "oninput" && i[_ = c] && (_ = "oninputCapture"), i[_] = s;
        }
      }
      o == "select" && (i.multiple && Array.isArray(i.value) && (i.value = K(n.children).forEach(function(l) {
        l.props.selected = i.value.indexOf(l.props.value) != -1;
      })), i.defaultValue != null && (i.value = K(n.children).forEach(function(l) {
        l.props.selected = i.multiple ? i.defaultValue.indexOf(l.props.value) != -1 : i.defaultValue == l.props.value;
      }))), n.class && !n.className ? (i.class = n.class, Object.defineProperty(i, "className", Pt)) : n.className && (i.class = i.className = n.className), t.props = i;
    }(e), e.$$typeof = kt, Ze && Ze(e);
  };
  var et = f.__r;
  f.__r = function(e) {
    et && et(e), e.__c;
  };
  var tt = f.diffed;
  f.diffed = function(e) {
    tt && tt(e);
    var t = e.props, n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
  };
  const Nt = {
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
  }, zt = {
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
  function ye(e) {
    return e >= 1e4 ? (e / 1e4).toFixed(1) + "w" : e >= 1e3 ? (e / 1e3).toFixed(1) + "k" : String(e);
  }
  function Wt(e) {
    if (!e.length)
      return { cur: 0, longest: 0 };
    const t = new Set(e.map((c) => c.date)), n = (c) => c.toISOString().slice(0, 10), o = /* @__PURE__ */ new Date();
    o.setHours(0, 0, 0, 0);
    let i = 0;
    for (let c = 0; c <= 365; c++) {
      const l = new Date(o);
      if (l.setDate(l.getDate() - c), t.has(n(l)))
        i++;
      else
        break;
    }
    const r = [...e].sort((c, l) => c.date.localeCompare(l.date));
    let _ = 0, s = 0;
    for (let c = 0; c < r.length; c++)
      s = c === 0 ? 1 : (new Date(r[c].date).getTime() - new Date(r[c - 1].date).getTime()) / 864e5 === 1 ? s + 1 : 1, s > _ && (_ = s);
    return { cur: i, longest: _ };
  }
  function Mt(e) {
    const t = [], n = /* @__PURE__ */ new Date();
    for (let o = e - 1; o >= 0; o--) {
      const i = new Date(n.getFullYear(), n.getMonth() - o, 1);
      t.push(`${i.getFullYear()}-${String(i.getMonth() + 1).padStart(2, "0")}`);
    }
    return t;
  }
  const Ht = () => /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u("path", { d: "M12 20h9" }),
    /* @__PURE__ */ u("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" })
  ] }), At = () => /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u("polyline", { points: "4 7 4 4 20 4 20 7" }),
    /* @__PURE__ */ u("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
    /* @__PURE__ */ u("line", { x1: "12", y1: "4", x2: "12", y2: "20" })
  ] }), Et = () => /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ u("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ u("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ u("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }), Rt = () => /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ u("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }) });
  function Bt({ text: e, children: t }) {
    const [n, o] = D(!1);
    return /* @__PURE__ */ u(
      "div",
      {
        style: { position: "relative", display: "contents" },
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
          t,
          n && e && /* @__PURE__ */ u("div", { style: {
            position: "absolute",
            bottom: "calc(100% + 6px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(10,10,20,0.88)",
            color: "#fff",
            padding: "4px 9px",
            borderRadius: "7px",
            fontSize: "11px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 999,
            boxShadow: "0 2px 10px rgba(0,0,0,0.25)"
          }, children: e })
        ]
      }
    );
  }
  function nt({ data: e, labels: t, color: n, unit: o }) {
    const i = Math.max(...e, 1);
    return /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "flex-end", gap: "3px", height: "72px", width: "100%" }, children: e.map((r, _) => /* @__PURE__ */ u("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }, children: [
      /* @__PURE__ */ u(Bt, { text: r > 0 ? `${t[_]}: ${ye(r)} ${o}` : "", children: /* @__PURE__ */ u("div", { style: { position: "relative", width: "100%" }, children: /* @__PURE__ */ u("div", { style: {
        width: "100%",
        borderRadius: "3px 3px 0 0",
        background: r > 0 ? n : "rgba(128,128,128,0.1)",
        height: `${Math.max(r / i * 52, r > 0 ? 4 : 0)}px`,
        transition: "height 0.5s cubic-bezier(.4,0,.2,1)",
        opacity: r > 0 ? 0.35 + 0.65 * (r / i) : 1
      } }) }) }),
      /* @__PURE__ */ u("span", { style: { fontSize: "9px", opacity: 0.4, marginTop: "3px", fontWeight: 500, lineHeight: 1 }, children: t[_] })
    ] }, _)) });
  }
  function Ot({ label: e, value: t, max: n, color: o }) {
    return /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "7px" }, children: [
      /* @__PURE__ */ u("span", { style: { fontSize: "11px", opacity: 0.65, width: "72px", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: e }),
      /* @__PURE__ */ u("div", { style: { flex: 1, background: "rgba(128,128,128,0.1)", borderRadius: "4px", height: "8px", overflow: "hidden" }, children: /* @__PURE__ */ u("div", { style: {
        width: `${t / n * 100}%`,
        height: "100%",
        background: o,
        borderRadius: "4px",
        transition: "width 0.6s cubic-bezier(.4,0,.2,1)"
      } }) }),
      /* @__PURE__ */ u("span", { style: { fontSize: "11px", opacity: 0.5, width: "24px", textAlign: "right", flexShrink: 0 }, children: t })
    ] });
  }
  function Ut({ data: e }) {
    const t = {};
    e.forEach((p) => {
      t[p.date] = p.count;
    });
    const n = Math.max(...Object.values(t), 1), o = [], i = /* @__PURE__ */ new Date();
    i.setHours(0, 0, 0, 0);
    const r = new Date(i);
    for (r.setDate(r.getDate() - 17 * 7 + 1); r.getDay() !== 0; )
      r.setDate(r.getDate() - 1);
    let _ = [];
    for (let p = new Date(r); p <= i; p.setDate(p.getDate() + 1)) {
      const h = p.toISOString().slice(0, 10);
      _.push({ date: h, count: t[h] || 0 }), _.length === 7 && (o.push(_), _ = []);
    }
    _.length && o.push(_);
    const [s, c] = D(null), l = (p) => {
      if (p === 0)
        return "rgba(128,128,128,0.12)";
      const h = p / n;
      return h < 0.25 ? "rgba(99,102,241,0.3)" : h < 0.5 ? "rgba(99,102,241,0.52)" : h < 0.75 ? "rgba(99,102,241,0.72)" : "#6366f1";
    };
    return /* @__PURE__ */ u("div", { style: { overflowX: "auto", overflowY: "visible", paddingBottom: "4px" }, children: [
      /* @__PURE__ */ u("div", { style: { display: "inline-flex", gap: "3px", minWidth: "max-content" }, children: o.map((p, h) => /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: "3px" }, children: p.map((a, d) => /* @__PURE__ */ u(
        "div",
        {
          onMouseEnter: (g) => {
            const $ = g.currentTarget.getBoundingClientRect();
            c({ text: `${a.date}${a.count > 0 ? ": " + a.count : ""}`, x: $.left + $.width / 2, y: $.top });
          },
          onMouseLeave: () => c(null),
          style: {
            width: "11px",
            height: "11px",
            borderRadius: "2px",
            background: l(a.count),
            cursor: (a.count > 0, "default")
          }
        },
        d
      )) }, h)) }),
      s && /* @__PURE__ */ u("div", { style: {
        position: "fixed",
        top: s.y - 34,
        left: s.x,
        transform: "translateX(-50%)",
        background: "rgba(10,10,20,0.88)",
        color: "#fff",
        padding: "4px 9px",
        borderRadius: "7px",
        fontSize: "11px",
        pointerEvents: "none",
        zIndex: 9999,
        whiteSpace: "nowrap",
        boxShadow: "0 2px 10px rgba(0,0,0,0.25)"
      }, children: s.text })
    ] });
  }
  function ne({ value: e, label: t, icon: n, accent: o }) {
    return /* @__PURE__ */ u("div", { style: {
      borderRadius: "12px",
      padding: "12px 8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "5px",
      background: `${o}10`,
      border: `1px solid ${o}22`
    }, children: [
      /* @__PURE__ */ u("span", { style: { color: o, opacity: 0.8 }, children: n }),
      /* @__PURE__ */ u("span", { style: { fontSize: "22px", fontWeight: 800, lineHeight: 1 }, children: e }),
      /* @__PURE__ */ u("span", { style: { fontSize: "10px", opacity: 0.5, textAlign: "center", fontWeight: 600, lineHeight: 1.2 }, children: t })
    ] });
  }
  function It({ title: e, children: t }) {
    return /* @__PURE__ */ u("div", { style: { borderRadius: "12px", padding: "12px", background: "rgba(128,128,128,0.05)", border: "1px solid rgba(128,128,128,0.1)" }, children: [
      e && /* @__PURE__ */ u("div", { style: { fontSize: "11px", fontWeight: 700, opacity: 0.5, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }, children: e }),
      t
    ] });
  }
  function Ft() {
    return /* @__PURE__ */ u("div", { style: { padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }, children: [
      /* @__PURE__ */ u("style", { children: "@keyframes ws-pulse{0%,100%{opacity:.35}50%{opacity:.7}}" }),
      [90, 56, 100, 100].map((e, t) => /* @__PURE__ */ u("div", { style: {
        height: `${e}px`,
        borderRadius: "12px",
        background: "rgba(128,128,128,0.1)",
        animation: `ws-pulse 1.4s ease-in-out ${t * 0.12}s infinite`
      } }, t))
    ] });
  }
  function Lt() {
    var ot, rt;
    const [e, t] = D(!0), [n, o] = D([]), [i, r] = D([]), [_, s] = D({ cur: 0, longest: 0 }), [c, l] = D(0), [p, h] = D(0), [a, d] = D([0, 0, 0, 0, 0, 0, 0]), [g, $] = D("heatmap"), [k, w] = D(
      (ot = window.Blinko.i18n.language) != null && ot.startsWith("zh") ? "zh" : "en"
    ), y = k === "zh" ? zt : Nt, m = (v) => y[v], B = m("weeks").split(",");
    if (gt(() => {
      const v = window.Blinko.api.analytics, T = Mt(6);
      Promise.all([
        v.dailyNoteCount.mutate(),
        ...T.map((U) => v.monthlyStats.mutate({ month: U }).catch(() => null))
      ]).then(([U, ...qt]) => {
        o(U), s(Wt(U)), l(U.reduce((P, ve) => P + ve.count, 0)), h(U.length);
        const it = [0, 0, 0, 0, 0, 0, 0];
        U.forEach((P) => {
          it[(/* @__PURE__ */ new Date(P.date + "T12:00:00")).getDay()] += P.count;
        }), d(it);
        const Yt = qt.map((P, ve) => P ? {
          month: T[ve].slice(5),
          noteCount: P.noteCount,
          totalWords: P.totalWords,
          activeDays: P.activeDays,
          tagStats: P.tagStats || []
        } : null).filter(Boolean);
        r(Yt), t(!1);
      }).catch(() => t(!1));
    }, []), e)
      return /* @__PURE__ */ u(Ft, {});
    const W = i.reduce((v, T) => v + T.totalWords, 0), O = i.flatMap((v) => v.tagStats), F = {};
    O.forEach((v) => {
      v.tagName !== "Others" && (F[v.tagName] = (F[v.tagName] || 0) + v.count);
    });
    const A = Object.entries(F).sort((v, T) => T[1] - v[1]).slice(0, 8), V = ((rt = A[0]) == null ? void 0 : rt[1]) || 1, S = i.map((v) => v.totalWords), E = i.map((v) => v.month), oe = _.cur > 0, re = (v, T) => /* @__PURE__ */ u("button", { onClick: () => $(v), style: {
      padding: "5px 12px",
      borderRadius: "8px",
      fontSize: "11px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      outline: "none",
      background: g === v ? "rgba(99,102,241,0.15)" : "transparent",
      color: g === v ? "#6366f1" : "inherit",
      opacity: g === v ? 1 : 0.45,
      transition: "all 0.18s"
    }, children: T });
    return /* @__PURE__ */ u("div", { style: { padding: "14px", display: "flex", flexDirection: "column", gap: "9px", width: "100%", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ u("style", { children: `
        @keyframes ws-up { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .ws-in { animation: ws-up 0.3s ease both; }
      ` }),
      /* @__PURE__ */ u("div", { class: "ws-in", style: {
        background: oe ? "linear-gradient(135deg,#7c3aed 0%,#4f46e5 55%,#2563eb 100%)" : "linear-gradient(135deg,#374151 0%,#1f2937 100%)",
        borderRadius: "16px",
        padding: "18px 16px 14px",
        color: "white",
        boxShadow: oe ? "0 6px 24px rgba(99,60,237,0.28)" : "none",
        animationDelay: "0ms"
      }, children: [
        /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "6px" }, children: /* @__PURE__ */ u("button", { onClick: () => w((v) => v === "zh" ? "en" : "zh"), style: {
          background: "rgba(255,255,255,0.15)",
          border: "none",
          color: "white",
          borderRadius: "6px",
          padding: "3px 10px",
          fontSize: "11px",
          fontWeight: 600,
          cursor: "pointer"
        }, children: k === "zh" ? "EN" : "中文" }) }),
        /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }, children: [
          /* @__PURE__ */ u("div", { style: { fontSize: "48px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px" }, children: _.cur }),
          /* @__PURE__ */ u("div", { style: { fontSize: "13px", opacity: 0.85, fontWeight: 600 }, children: m("streak") }),
          !oe && /* @__PURE__ */ u("div", { style: { fontSize: "12px", opacity: 0.45, marginTop: "2px" }, children: m("writeToday") }),
          oe && /* @__PURE__ */ u("div", { style: { display: "flex", gap: "4px", marginTop: "8px", flexWrap: "wrap", justifyContent: "center", maxWidth: "200px" }, children: [
            Array.from({ length: Math.min(_.cur, 21) }).map((v, T) => /* @__PURE__ */ u("div", { style: { width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.85)" } }, T)),
            _.cur > 21 && /* @__PURE__ */ u("span", { style: { fontSize: "11px", opacity: 0.7 }, children: [
              "+",
              _.cur - 21
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u("div", { class: "ws-in", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", animationDelay: "60ms" }, children: [
        /* @__PURE__ */ u(ne, { value: ye(c), label: m("totalNotes"), icon: /* @__PURE__ */ u(Ht, {}), accent: "#3b82f6" }),
        /* @__PURE__ */ u(ne, { value: ye(W), label: m("totalChars"), icon: /* @__PURE__ */ u(At, {}), accent: "#8b5cf6" }),
        /* @__PURE__ */ u(ne, { value: p, label: m("activeDays"), icon: /* @__PURE__ */ u(Et, {}), accent: "#22c55e" }),
        /* @__PURE__ */ u(ne, { value: _.longest, label: m("bestStreak"), icon: /* @__PURE__ */ u(Rt, {}), accent: "#f59e0b" })
      ] }),
      /* @__PURE__ */ u("div", { class: "ws-in", style: { animationDelay: "120ms" }, children: /* @__PURE__ */ u(It, { children: [
        /* @__PURE__ */ u("div", { style: { display: "flex", gap: "2px", marginBottom: "12px", flexWrap: "wrap" }, children: [
          re("heatmap", m("tab_heatmap")),
          re("weekly", m("tab_weekly")),
          re("tags", m("tab_tags")),
          re("trends", m("tab_trends"))
        ] }),
        g === "heatmap" && /* @__PURE__ */ u(Ut, { data: n }),
        g === "weekly" && /* @__PURE__ */ u(nt, { data: a, labels: B, color: "#6366f1", unit: m("notes") }),
        g === "tags" && (A.length > 0 ? /* @__PURE__ */ u("div", { children: A.map(([v, T]) => /* @__PURE__ */ u(Ot, { label: v, value: T, max: V, color: "linear-gradient(90deg,#6366f1,#8b5cf6)" }, v)) }) : /* @__PURE__ */ u("div", { style: { opacity: 0.4, fontSize: "12px", textAlign: "center", padding: "16px 0" }, children: "—" })),
        g === "trends" && S.length > 0 && /* @__PURE__ */ u(nt, { data: S, labels: E, color: "#2563eb", unit: m("chars") })
      ] }) }),
      /* @__PURE__ */ u("div", { style: { textAlign: "center", fontSize: "10px", opacity: 0.2, paddingBottom: "2px" }, children: m("footer") })
    ] });
  }
  const jt = {
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
  }, Vt = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='20' x2='18' y2='10'/><line x1='12' y1='20' x2='12' y2='4'/><line x1='6' y1='20' x2='6' y2='14'/></svg>";
  System.register([], (e) => ({
    execute: () => {
      e("default", class {
        constructor() {
          _t(this, "withSettingPanel", !1);
          Object.assign(this, jt);
        }
        async init() {
          window.Blinko.addToolBarIcon({
            name: "writing-stats",
            icon: Vt,
            tooltip: "Writing Stats",
            onClick: () => {
              window.Blinko.showDialog({
                title: "✍️ Writing Stats",
                size: "sm",
                content: () => {
                  const n = document.createElement("div");
                  return Ct(/* @__PURE__ */ u(Lt, {}), n), n;
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
