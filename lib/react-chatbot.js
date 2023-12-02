import * as f from "react";
import Y, { useContext as mt, createContext as Oa, useRef as Ze, useLayoutEffect as nv, useEffect as yt, forwardRef as mn, useMemo as br, useState as pr, Children as ov, createRef as iv, useImperativeHandle as Jl, cloneElement as fs, memo as Zd, useCallback as Qd, Fragment as av } from "react";
import * as sv from "react-dom";
import lv, { createPortal as cv } from "react-dom";
function uv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Us = { exports: {} }, Do = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ou;
function dv() {
  return ou || (ou = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Y, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function m(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var H = y && _[y] || _[g];
      return typeof H == "function" ? H : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(_) {
      {
        for (var H = arguments.length, J = new Array(H > 1 ? H - 1 : 0), fe = 1; fe < H; fe++)
          J[fe - 1] = arguments[fe];
        w("error", _, J);
      }
    }
    function w(_, H, J) {
      {
        var fe = v.ReactDebugCurrentFrame, Me = fe.getStackAddendum();
        Me !== "" && (H += "%s", J = J.concat([Me]));
        var Ae = J.map(function($e) {
          return String($e);
        });
        Ae.unshift("Warning: " + H), Function.prototype.apply.call(console[_], console, Ae);
      }
    }
    var x = !1, E = !1, C = !1, S = !1, M = !1, O;
    O = Symbol.for("react.module.reference");
    function $(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === i || M || _ === o || _ === c || _ === u || S || _ === b || x || E || C || typeof _ == "object" && _ !== null && (_.$$typeof === h || _.$$typeof === d || _.$$typeof === a || _.$$typeof === s || _.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === O || _.getModuleId !== void 0));
    }
    function D(_, H, J) {
      var fe = _.displayName;
      if (fe)
        return fe;
      var Me = H.displayName || H.name || "";
      return Me !== "" ? J + "(" + Me + ")" : J;
    }
    function P(_) {
      return _.displayName || "Context";
    }
    function F(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case s:
            var H = _;
            return P(H) + ".Consumer";
          case a:
            var J = _;
            return P(J._context) + ".Provider";
          case l:
            return D(_, _.render, "ForwardRef");
          case d:
            var fe = _.displayName || null;
            return fe !== null ? fe : F(_.type) || "Memo";
          case h: {
            var Me = _, Ae = Me._payload, $e = Me._init;
            try {
              return F($e(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, L = 0, T, R, N, z, A, j, V;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function K() {
      {
        if (L === 0) {
          T = console.log, R = console.info, N = console.warn, z = console.error, A = console.group, j = console.groupCollapsed, V = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        L++;
      }
    }
    function W() {
      {
        if (L--, L === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, _, {
              value: T
            }),
            info: I({}, _, {
              value: R
            }),
            warn: I({}, _, {
              value: N
            }),
            error: I({}, _, {
              value: z
            }),
            group: I({}, _, {
              value: A
            }),
            groupCollapsed: I({}, _, {
              value: j
            }),
            groupEnd: I({}, _, {
              value: V
            })
          });
        }
        L < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = v.ReactCurrentDispatcher, re;
    function oe(_, H, J) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Me) {
            var fe = Me.stack.trim().match(/\n( *(at )?)/);
            re = fe && fe[1] || "";
          }
        return `
` + re + _;
      }
    }
    var ie = !1, le;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      le = new ye();
    }
    function pe(_, H) {
      if (!_ || ie)
        return "";
      {
        var J = le.get(_);
        if (J !== void 0)
          return J;
      }
      var fe;
      ie = !0;
      var Me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = Q.current, Q.current = null, K();
      try {
        if (H) {
          var $e = function() {
            throw Error();
          };
          if (Object.defineProperty($e.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($e, []);
            } catch (zt) {
              fe = zt;
            }
            Reflect.construct(_, [], $e);
          } else {
            try {
              $e.call();
            } catch (zt) {
              fe = zt;
            }
            _.call($e.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zt) {
            fe = zt;
          }
          _();
        }
      } catch (zt) {
        if (zt && fe && typeof zt.stack == "string") {
          for (var Ce = zt.stack.split(`
`), ot = fe.stack.split(`
`), Qe = Ce.length - 1, Re = ot.length - 1; Qe >= 1 && Re >= 0 && Ce[Qe] !== ot[Re]; )
            Re--;
          for (; Qe >= 1 && Re >= 0; Qe--, Re--)
            if (Ce[Qe] !== ot[Re]) {
              if (Qe !== 1 || Re !== 1)
                do
                  if (Qe--, Re--, Re < 0 || Ce[Qe] !== ot[Re]) {
                    var Rt = `
` + Ce[Qe].replace(" at new ", " at ");
                    return _.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", _.displayName)), typeof _ == "function" && le.set(_, Rt), Rt;
                  }
                while (Qe >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        ie = !1, Q.current = Ae, W(), Error.prepareStackTrace = Me;
      }
      var $r = _ ? _.displayName || _.name : "", Sn = $r ? oe($r) : "";
      return typeof _ == "function" && le.set(_, Sn), Sn;
    }
    function ge(_, H, J) {
      return pe(_, !1);
    }
    function G(_) {
      var H = _.prototype;
      return !!(H && H.isReactComponent);
    }
    function be(_, H, J) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return pe(_, G(_));
      if (typeof _ == "string")
        return oe(_);
      switch (_) {
        case c:
          return oe("Suspense");
        case u:
          return oe("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case l:
            return ge(_.render);
          case d:
            return be(_.type, H, J);
          case h: {
            var fe = _, Me = fe._payload, Ae = fe._init;
            try {
              return be(Ae(Me), H, J);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, _e = {}, Le = v.ReactDebugCurrentFrame;
    function Z(_) {
      if (_) {
        var H = _._owner, J = be(_.type, _._source, H ? H.type : null);
        Le.setExtraStackFrame(J);
      } else
        Le.setExtraStackFrame(null);
    }
    function q(_, H, J, fe, Me) {
      {
        var Ae = Function.call.bind(ve);
        for (var $e in _)
          if (Ae(_, $e)) {
            var Ce = void 0;
            try {
              if (typeof _[$e] != "function") {
                var ot = Error((fe || "React class") + ": " + J + " type `" + $e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[$e] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ot.name = "Invariant Violation", ot;
              }
              Ce = _[$e](H, $e, fe, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qe) {
              Ce = Qe;
            }
            Ce && !(Ce instanceof Error) && (Z(Me), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", J, $e, typeof Ce), Z(null)), Ce instanceof Error && !(Ce.message in _e) && (_e[Ce.message] = !0, Z(Me), p("Failed %s type: %s", J, Ce.message), Z(null));
          }
      }
    }
    var se = Array.isArray;
    function de(_) {
      return se(_);
    }
    function we(_) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, J = H && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return J;
      }
    }
    function Ne(_) {
      try {
        return Bt(_), !1;
      } catch {
        return !0;
      }
    }
    function Bt(_) {
      return "" + _;
    }
    function at(_) {
      if (Ne(_))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", we(_)), Bt(_);
    }
    var Ht = v.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xt, Ie, xe;
    xe = {};
    function gt(_) {
      if (ve.call(_, "ref")) {
        var H = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function $t(_) {
      if (ve.call(_, "key")) {
        var H = Object.getOwnPropertyDescriptor(_, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function yn(_, H) {
      if (typeof _.ref == "string" && Ht.current && H && Ht.current.stateNode !== H) {
        var J = F(Ht.current.type);
        xe[J] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Ht.current.type), _.ref), xe[J] = !0);
      }
    }
    function Lt(_, H) {
      {
        var J = function() {
          xt || (xt = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        J.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function ut(_, H) {
      {
        var J = function() {
          Ie || (Ie = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        J.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Dt = function(_, H, J, fe, Me, Ae, $e) {
      var Ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: _,
        key: H,
        ref: J,
        props: $e,
        // Record the component responsible for creating this element.
        _owner: Ae
      };
      return Ce._store = {}, Object.defineProperty(Ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(Ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.freeze && (Object.freeze(Ce.props), Object.freeze(Ce)), Ce;
    };
    function Ar(_, H, J, fe, Me) {
      {
        var Ae, $e = {}, Ce = null, ot = null;
        J !== void 0 && (at(J), Ce = "" + J), $t(H) && (at(H.key), Ce = "" + H.key), gt(H) && (ot = H.ref, yn(H, Me));
        for (Ae in H)
          ve.call(H, Ae) && !Er.hasOwnProperty(Ae) && ($e[Ae] = H[Ae]);
        if (_ && _.defaultProps) {
          var Qe = _.defaultProps;
          for (Ae in Qe)
            $e[Ae] === void 0 && ($e[Ae] = Qe[Ae]);
        }
        if (Ce || ot) {
          var Re = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          Ce && Lt($e, Re), ot && ut($e, Re);
        }
        return Dt(_, Ce, ot, Me, fe, Ht.current, $e);
      }
    }
    var Ct = v.ReactCurrentOwner, rt = v.ReactDebugCurrentFrame;
    function Yt(_) {
      if (_) {
        var H = _._owner, J = be(_.type, _._source, H ? H.type : null);
        rt.setExtraStackFrame(J);
      } else
        rt.setExtraStackFrame(null);
    }
    var Xe;
    Xe = !1;
    function At(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Ke() {
      {
        if (Ct.current) {
          var _ = F(Ct.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function me(_) {
      {
        if (_ !== void 0) {
          var H = _.fileName.replace(/^.*[\\\/]/, ""), J = _.lineNumber;
          return `

Check your code at ` + H + ":" + J + ".";
        }
        return "";
      }
    }
    var Be = {};
    function nt(_) {
      {
        var H = Ke();
        if (!H) {
          var J = typeof _ == "string" ? _ : _.displayName || _.name;
          J && (H = `

Check the top-level render call using <` + J + ">.");
        }
        return H;
      }
    }
    function dt(_, H) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var J = nt(H);
        if (Be[J])
          return;
        Be[J] = !0;
        var fe = "";
        _ && _._owner && _._owner !== Ct.current && (fe = " It was passed a child from " + F(_._owner.type) + "."), Yt(_), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, fe), Yt(null);
      }
    }
    function Gt(_, H) {
      {
        if (typeof _ != "object")
          return;
        if (de(_))
          for (var J = 0; J < _.length; J++) {
            var fe = _[J];
            At(fe) && dt(fe, H);
          }
        else if (At(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var Me = m(_);
          if (typeof Me == "function" && Me !== _.entries)
            for (var Ae = Me.call(_), $e; !($e = Ae.next()).done; )
              At($e.value) && dt($e.value, H);
        }
      }
    }
    function Or(_) {
      {
        var H = _.type;
        if (H == null || typeof H == "string")
          return;
        var J;
        if (typeof H == "function")
          J = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === d))
          J = H.propTypes;
        else
          return;
        if (J) {
          var fe = F(H);
          q(J, _.props, "prop", fe, _);
        } else if (H.PropTypes !== void 0 && !Xe) {
          Xe = !0;
          var Me = F(H);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Me || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(_) {
      {
        for (var H = Object.keys(_.props), J = 0; J < H.length; J++) {
          var fe = H[J];
          if (fe !== "children" && fe !== "key") {
            Yt(_), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), Yt(null);
            break;
          }
        }
        _.ref !== null && (Yt(_), p("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    function vt(_, H, J, fe, Me, Ae) {
      {
        var $e = $(_);
        if (!$e) {
          var Ce = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = me(Me);
          ot ? Ce += ot : Ce += Ke();
          var Qe;
          _ === null ? Qe = "null" : de(_) ? Qe = "array" : _ !== void 0 && _.$$typeof === t ? (Qe = "<" + (F(_.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : Qe = typeof _, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qe, Ce);
        }
        var Re = Ar(_, H, J, Me, Ae);
        if (Re == null)
          return Re;
        if ($e) {
          var Rt = H.children;
          if (Rt !== void 0)
            if (fe)
              if (de(Rt)) {
                for (var $r = 0; $r < Rt.length; $r++)
                  Gt(Rt[$r], _);
                Object.freeze && Object.freeze(Rt);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gt(Rt, _);
        }
        return _ === n ? dr(Re) : Or(Re), Re;
      }
    }
    function bn(_, H, J) {
      return vt(_, H, J, !0);
    }
    function an(_, H, J) {
      return vt(_, H, J, !1);
    }
    var _r = an, Mt = bn;
    Do.Fragment = n, Do.jsx = _r, Do.jsxs = Mt;
  }()), Do;
}
var Ao = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iu;
function fv() {
  if (iu)
    return Ao;
  iu = 1;
  var e = Y, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, c) {
    var u, d = {}, h = null, b = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (b = l.ref);
    for (u in l)
      n.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: h, ref: b, props: d, _owner: o.current };
  }
  return Ao.Fragment = r, Ao.jsx = a, Ao.jsxs = a, Ao;
}
process.env.NODE_ENV === "production" ? Us.exports = fv() : Us.exports = dv();
var Fe = Us.exports, Jd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = r.apply(null, i);
              s && n.push(s);
            }
          } else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue;
            }
            for (var l in i)
              t.call(i, l) && i[l] && n.push(l);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Jd);
var hv = Jd.exports;
const ee = /* @__PURE__ */ uv(hv);
function Ve() {
  return Ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ve.apply(this, arguments);
}
var qs = { exports: {} }, He = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var au;
function mv() {
  return au || (au = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = !1, g = !1, m = !1, v = !1, p = !1, w;
    w = Symbol.for("react.module.reference");
    function x(G) {
      return !!(typeof G == "string" || typeof G == "function" || G === r || G === o || p || G === n || G === c || G === u || v || G === b || y || g || m || typeof G == "object" && G !== null && (G.$$typeof === h || G.$$typeof === d || G.$$typeof === i || G.$$typeof === a || G.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      G.$$typeof === w || G.getModuleId !== void 0));
    }
    function E(G) {
      if (typeof G == "object" && G !== null) {
        var be = G.$$typeof;
        switch (be) {
          case e:
            var ve = G.type;
            switch (ve) {
              case r:
              case o:
              case n:
              case c:
              case u:
                return ve;
              default:
                var _e = ve && ve.$$typeof;
                switch (_e) {
                  case s:
                  case a:
                  case l:
                  case h:
                  case d:
                  case i:
                    return _e;
                  default:
                    return be;
                }
            }
          case t:
            return be;
        }
      }
    }
    var C = a, S = i, M = e, O = l, $ = r, D = h, P = d, F = t, I = o, L = n, T = c, R = u, N = !1, z = !1;
    function A(G) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function j(G) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(G) {
      return E(G) === a;
    }
    function X(G) {
      return E(G) === i;
    }
    function K(G) {
      return typeof G == "object" && G !== null && G.$$typeof === e;
    }
    function W(G) {
      return E(G) === l;
    }
    function Q(G) {
      return E(G) === r;
    }
    function re(G) {
      return E(G) === h;
    }
    function oe(G) {
      return E(G) === d;
    }
    function ie(G) {
      return E(G) === t;
    }
    function le(G) {
      return E(G) === o;
    }
    function ye(G) {
      return E(G) === n;
    }
    function pe(G) {
      return E(G) === c;
    }
    function ge(G) {
      return E(G) === u;
    }
    He.ContextConsumer = C, He.ContextProvider = S, He.Element = M, He.ForwardRef = O, He.Fragment = $, He.Lazy = D, He.Memo = P, He.Portal = F, He.Profiler = I, He.StrictMode = L, He.Suspense = T, He.SuspenseList = R, He.isAsyncMode = A, He.isConcurrentMode = j, He.isContextConsumer = V, He.isContextProvider = X, He.isElement = K, He.isForwardRef = W, He.isFragment = Q, He.isLazy = re, He.isMemo = oe, He.isPortal = ie, He.isProfiler = le, He.isStrictMode = ye, He.isSuspense = pe, He.isSuspenseList = ge, He.isValidElementType = x, He.typeOf = E;
  }()), He;
}
var Ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var su;
function gv() {
  if (su)
    return Ye;
  su = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var v = m.$$typeof;
      switch (v) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case c:
            case u:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case l:
                case h:
                case d:
                case i:
                  return m;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Ye.ContextConsumer = a, Ye.ContextProvider = i, Ye.Element = e, Ye.ForwardRef = l, Ye.Fragment = r, Ye.Lazy = h, Ye.Memo = d, Ye.Portal = t, Ye.Profiler = o, Ye.StrictMode = n, Ye.Suspense = c, Ye.SuspenseList = u, Ye.isAsyncMode = function() {
    return !1;
  }, Ye.isConcurrentMode = function() {
    return !1;
  }, Ye.isContextConsumer = function(m) {
    return g(m) === a;
  }, Ye.isContextProvider = function(m) {
    return g(m) === i;
  }, Ye.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Ye.isForwardRef = function(m) {
    return g(m) === l;
  }, Ye.isFragment = function(m) {
    return g(m) === r;
  }, Ye.isLazy = function(m) {
    return g(m) === h;
  }, Ye.isMemo = function(m) {
    return g(m) === d;
  }, Ye.isPortal = function(m) {
    return g(m) === t;
  }, Ye.isProfiler = function(m) {
    return g(m) === o;
  }, Ye.isStrictMode = function(m) {
    return g(m) === n;
  }, Ye.isSuspense = function(m) {
    return g(m) === c;
  }, Ye.isSuspenseList = function(m) {
    return g(m) === u;
  }, Ye.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === c || m === u || m === b || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === d || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === y || m.getModuleId !== void 0);
  }, Ye.typeOf = g, Ye;
}
process.env.NODE_ENV === "production" ? qs.exports = gv() : qs.exports = mv();
var ef = qs.exports;
function zn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Y.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(zn(n)) : ef.isFragment(n) && n.props ? r = r.concat(zn(n.props.children, t)) : r.push(n));
  }), r;
}
var Xs = {}, ec = [], vv = function(t) {
  ec.push(t);
};
function bo(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ec.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function pv(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ec.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function tf() {
  Xs = {};
}
function rf(e, t, r) {
  !t && !Xs[r] && (e(!1, r), Xs[r] = !0);
}
function it(e, t) {
  rf(bo, e, t);
}
function yv(e, t) {
  rf(pv, e, t);
}
it.preMessage = vv;
it.resetWarned = tf;
it.noteOnce = yv;
function ke(e) {
  "@babel/helpers - typeof";
  return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ke(e);
}
function bv(e, t) {
  if (ke(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ke(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nf(e) {
  var t = bv(e, "string");
  return ke(t) === "symbol" ? t : String(t);
}
function k(e, t, r) {
  return t = nf(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function lu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lu(Object(r), !0).forEach(function(n) {
      k(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aa(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Ki(e) {
  return aa(e) ? e : e instanceof Y.Component ? lv.findDOMNode(e) : null;
}
function tc(e, t, r) {
  var n = f.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function rc(e, t) {
  typeof e == "function" ? e(t) : ke(e) === "object" && e && "current" in e && (e.current = t);
}
function gn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(o) {
    return o;
  });
  return n.length <= 1 ? n[0] : function(o) {
    t.forEach(function(i) {
      rc(i, o);
    });
  };
}
function nc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return tc(function() {
    return gn.apply(void 0, t);
  }, t, function(n, o) {
    return n.length !== o.length || n.every(function(i, a) {
      return i !== o[a];
    });
  });
}
function Co(e) {
  var t, r, n = ef.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
var Ks = /* @__PURE__ */ f.createContext(null);
function Sv(e) {
  var t = e.children, r = e.onBatchResize, n = f.useRef(0), o = f.useRef([]), i = f.useContext(Ks), a = f.useCallback(function(s, l, c) {
    n.current += 1;
    var u = n.current;
    o.current.push({
      size: s,
      element: l,
      data: c
    }), Promise.resolve().then(function() {
      u === n.current && (r == null || r(o.current), o.current = []);
    }), i == null || i(s, l, c);
  }, [r, i]);
  return /* @__PURE__ */ f.createElement(Ks.Provider, {
    value: a
  }, t);
}
var of = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(o, i) {
      return o[0] === r ? (n = i, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), o = this.__entries__[n];
        return o && o[1];
      }, t.prototype.set = function(r, n) {
        var o = e(this.__entries__, r);
        ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, o = e(n, r);
        ~o && n.splice(o, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          r.call(n, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Zs = typeof window < "u" && typeof document < "u" && window.document === document, sa = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), wv = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(sa) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), xv = 2;
function Cv(e, t) {
  var r = !1, n = !1, o = 0;
  function i() {
    r && (r = !1, e()), n && s();
  }
  function a() {
    wv(i);
  }
  function s() {
    var l = Date.now();
    if (r) {
      if (l - o < xv)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    o = l;
  }
  return s;
}
var Ev = 20, Ov = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], _v = typeof MutationObserver < "u", $v = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Cv(this.refresh.bind(this), Ev);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Zs || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), _v ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Zs || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, o = Ov.some(function(i) {
        return !!~n.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), af = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var o = n[r];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, So = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || sa;
}, sf = _a(0, 0, 0, 0);
function la(e) {
  return parseFloat(e) || 0;
}
function cu(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, o) {
    var i = e["border-" + o + "-width"];
    return n + la(i);
  }, 0);
}
function Mv(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
    var i = o[n], a = e["padding-" + i];
    r[i] = la(a);
  }
  return r;
}
function Rv(e) {
  var t = e.getBBox();
  return _a(0, 0, t.width, t.height);
}
function Pv(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return sf;
  var n = So(e).getComputedStyle(e), o = Mv(n), i = o.left + o.right, a = o.top + o.bottom, s = la(n.width), l = la(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= cu(n, "left", "right") + i), Math.round(l + a) !== r && (l -= cu(n, "top", "bottom") + a)), !Tv(e)) {
    var c = Math.round(s + i) - t, u = Math.round(l + a) - r;
    Math.abs(c) !== 1 && (s -= c), Math.abs(u) !== 1 && (l -= u);
  }
  return _a(o.left, o.top, s, l);
}
var Nv = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof So(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof So(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Tv(e) {
  return e === So(e).document.documentElement;
}
function Iv(e) {
  return Zs ? Nv(e) ? Rv(e) : Pv(e) : sf;
}
function Fv(e) {
  var t = e.x, r = e.y, n = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return af(a, {
    x: t,
    y: r,
    width: n,
    height: o,
    top: r,
    right: t + n,
    bottom: o + r,
    left: t
  }), a;
}
function _a(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Dv = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _a(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Iv(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Av = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = Fv(r);
      af(this, { target: t, contentRect: n });
    }
    return e;
  }()
), jv = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new of(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof So(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Dv(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof So(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new Av(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), lf = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new of(), cf = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = $v.getInstance(), n = new jv(t, r, this);
      lf.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  cf.prototype[e] = function() {
    var t;
    return (t = lf.get(this))[e].apply(t, arguments);
  };
});
var kv = function() {
  return typeof sa.ResizeObserver < "u" ? sa.ResizeObserver : cf;
}(), Gr = /* @__PURE__ */ new Map();
function uf(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = Gr.get(n)) === null || r === void 0 || r.forEach(function(o) {
      return o(n);
    });
  });
}
var df = new kv(uf);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Lv(e, t) {
  Gr.has(e) || (Gr.set(e, /* @__PURE__ */ new Set()), df.observe(e)), Gr.get(e).add(t);
}
function zv(e, t) {
  Gr.has(e) && (Gr.get(e).delete(t), Gr.get(e).size || (df.unobserve(e), Gr.delete(e)));
}
function Tr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nf(n.key), n);
  }
}
function Ir(e, t, r) {
  return t && uu(e.prototype, t), r && uu(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Qs(e, t) {
  return Qs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Qs(e, t);
}
function $a(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Qs(e, t);
}
function ca(e) {
  return ca = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ca(e);
}
function Vv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function je(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wv(e, t) {
  if (t && (ke(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return je(e);
}
function Ma(e) {
  var t = Vv();
  return function() {
    var n = ca(e), o;
    if (t) {
      var i = ca(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Wv(this, o);
  };
}
var Bv = /* @__PURE__ */ function(e) {
  $a(r, e);
  var t = Ma(r);
  function r() {
    return Tr(this, r), t.apply(this, arguments);
  }
  return Ir(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(f.Component);
function Hv(e, t) {
  var r = e.children, n = e.disabled, o = f.useRef(null), i = f.useRef(null), a = f.useContext(Ks), s = typeof r == "function", l = s ? r(o) : r, c = f.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ f.isValidElement(l) && Co(l), d = u ? l.ref : null, h = nc(d, o), b = function() {
    var v;
    return Ki(o.current) || // Support `nativeElement` format
    (o.current && ke(o.current) === "object" ? Ki((v = o.current) === null || v === void 0 ? void 0 : v.nativeElement) : null) || Ki(i.current);
  };
  f.useImperativeHandle(t, function() {
    return b();
  });
  var y = f.useRef(e);
  y.current = e;
  var g = f.useCallback(function(m) {
    var v = y.current, p = v.onResize, w = v.data, x = m.getBoundingClientRect(), E = x.width, C = x.height, S = m.offsetWidth, M = m.offsetHeight, O = Math.floor(E), $ = Math.floor(C);
    if (c.current.width !== O || c.current.height !== $ || c.current.offsetWidth !== S || c.current.offsetHeight !== M) {
      var D = {
        width: O,
        height: $,
        offsetWidth: S,
        offsetHeight: M
      };
      c.current = D;
      var P = S === Math.round(E) ? E : S, F = M === Math.round(C) ? C : M, I = B(B({}, D), {}, {
        offsetWidth: P,
        offsetHeight: F
      });
      a == null || a(I, m, w), p && Promise.resolve().then(function() {
        p(I, m);
      });
    }
  }, []);
  return f.useEffect(function() {
    var m = b();
    return m && !n && Lv(m, g), function() {
      return zv(m, g);
    };
  }, [o.current, n]), /* @__PURE__ */ f.createElement(Bv, {
    ref: i
  }, u ? /* @__PURE__ */ f.cloneElement(l, {
    ref: h
  }) : l);
}
var ff = /* @__PURE__ */ f.forwardRef(Hv);
process.env.NODE_ENV !== "production" && (ff.displayName = "SingleObserver");
var Yv = "rc-observer-key";
function Gv(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : zn(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? bo(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && bo(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, i) {
    var a = (o == null ? void 0 : o.key) || "".concat(Yv, "-").concat(i);
    return /* @__PURE__ */ f.createElement(ff, Ve({}, e, {
      key: a,
      ref: i === 0 ? t : void 0
    }), o);
  });
}
var si = /* @__PURE__ */ f.forwardRef(Gv);
process.env.NODE_ENV !== "production" && (si.displayName = "ResizeObserver");
si.Collection = Sv;
function Eo(e, t) {
  var r = B({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Js(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Uv(e) {
  if (Array.isArray(e))
    return Js(e);
}
function hf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function oc(e, t) {
  if (e) {
    if (typeof e == "string")
      return Js(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Js(e, t);
  }
}
function qv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ue(e) {
  return Uv(e) || hf(e) || oc(e) || qv();
}
var mf = function(t) {
  return +setTimeout(t, 16);
}, gf = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (mf = function(t) {
  return window.requestAnimationFrame(t);
}, gf = function(t) {
  return window.cancelAnimationFrame(t);
});
var du = 0, Ra = /* @__PURE__ */ new Map();
function vf(e) {
  Ra.delete(e);
}
var Ot = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  du += 1;
  var n = du;
  function o(i) {
    if (i === 0)
      vf(n), t();
    else {
      var a = mf(function() {
        o(i - 1);
      });
      Ra.set(n, a);
    }
  }
  return o(r), n;
};
Ot.cancel = function(e) {
  var t = Ra.get(e);
  return vf(e), gf(t);
};
process.env.NODE_ENV !== "production" && (Ot.ids = function() {
  return Ra;
});
function Xv(e) {
  let t;
  const r = (o) => () => {
    t = null, e.apply(void 0, ue(o));
  }, n = function() {
    if (t == null) {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      t = Ot(r(i));
    }
  };
  return n.cancel = () => {
    Ot.cancel(t), t = null;
  }, n;
}
function ic(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Kv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Wt(e, t) {
  if (e == null)
    return {};
  var r = Kv(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function pf(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(i);
    if (it(!l, "Warning: There may be circular references"), l)
      return !1;
    if (i === a)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(i);
    var c = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length)
        return !1;
      for (var u = 0; u < i.length; u++)
        if (!o(i[u], a[u], c))
          return !1;
      return !0;
    }
    if (i && a && ke(i) === "object" && ke(a) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(a).length ? !1 : d.every(function(h) {
        return o(i[h], a[h], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var fu = "%", Zv = /* @__PURE__ */ function() {
  function e(t) {
    Tr(this, e), k(this, "instanceId", void 0), k(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ir(e, [{
    key: "get",
    value: function(r) {
      return this.cache.get(r.join(fu)) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = r.join(fu), i = this.cache.get(o), a = n(i);
      a === null ? this.cache.delete(o) : this.cache.set(o, a);
    }
  }]), e;
}(), el = "data-token-hash", Dn = "data-css-hash", Qv = "data-cache-path", co = "__cssinjs_instance__";
function Jv() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Dn, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[co] = o[co] || e, o[co] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Dn, "]"))).forEach(function(o) {
      var i = o.getAttribute(Dn);
      if (n[i]) {
        if (o[co] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new Zv(e);
}
var ep = /* @__PURE__ */ f.createContext({
  hashPriority: "low",
  cache: Jv(),
  defaultCache: !0
});
const ac = ep;
function jt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function tp(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var hu = "data-rc-order", mu = "data-rc-priority", rp = "rc-util-key", tl = /* @__PURE__ */ new Map();
function yf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : rp;
}
function Pa(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function np(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function bf(e) {
  return Array.from((tl.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Sf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!jt())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = np(n), s = a === "prependQueue", l = document.createElement("style");
  l.setAttribute(hu, a), s && i && l.setAttribute(mu, "".concat(i)), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = e;
  var c = Pa(t), u = c.firstChild;
  if (n) {
    if (s) {
      var d = bf(c).filter(function(h) {
        if (!["prepend", "prependQueue"].includes(h.getAttribute(hu)))
          return !1;
        var b = Number(h.getAttribute(mu) || 0);
        return i >= b;
      });
      if (d.length)
        return c.insertBefore(l, d[d.length - 1].nextSibling), l;
    }
    c.insertBefore(l, u);
  } else
    c.appendChild(l);
  return l;
}
function wf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Pa(t);
  return bf(r).find(function(n) {
    return n.getAttribute(yf(t)) === e;
  });
}
function ua(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = wf(e, t);
  if (r) {
    var n = Pa(t);
    n.removeChild(r);
  }
}
function op(e, t) {
  var r = tl.get(e);
  if (!r || !tp(document, r)) {
    var n = Sf("", t), o = n.parentNode;
    tl.set(e, o), e.removeChild(n);
  }
}
function wo(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Pa(r);
  op(n, r);
  var o = wf(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var l = Sf(e, r);
  return l.setAttribute(yf(r), t), l;
}
function xf(e) {
  if (Array.isArray(e))
    return e;
}
function ip(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, a, s = [], l = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        l = !1;
      } else
        for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); l = !0)
          ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && r.return != null && (a = r.return(), Object(a) !== a))
          return;
      } finally {
        if (c)
          throw o;
      }
    }
    return s;
  }
}
function Cf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ne(e, t) {
  return xf(e) || ip(e, t) || oc(e, t) || Cf();
}
function ap(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var sc = /* @__PURE__ */ function() {
  function e() {
    Tr(this, e), k(this, "cache", void 0), k(this, "keys", void 0), k(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ir(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!a)
          a = void 0;
        else {
          var l, c;
          a = (l = a) === null || l === void 0 || (c = l.map) === null || c === void 0 ? void 0 : c.get(s);
        }
      }), (n = a) !== null && n !== void 0 && n.value && i && (a.value[1] = this.cacheCallTimes++), (o = a) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(c, u) {
            var d = ne(c, 2), h = d[1];
            return o.internalGet(u)[1] < h ? [u, o.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), a = ne(i, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(c, u) {
        if (u === r.length - 1)
          l.set(c, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var d = l.get(c);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : l.set(c, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var i;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var a = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), a;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !ap(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
k(sc, "MAX_CACHE_SIZE", 20);
k(sc, "MAX_CACHE_OFFSET", 5);
var gu = 0, Ef = /* @__PURE__ */ function() {
  function e(t) {
    Tr(this, e), k(this, "derivatives", void 0), k(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = gu, t.length === 0 && bo(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), gu += 1;
  }
  return Ir(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), hs = new sc();
function rl(e) {
  var t = Array.isArray(e) ? e : [e];
  return hs.has(t) || hs.set(t, new Ef(t)), hs.get(t);
}
var sp = /* @__PURE__ */ new WeakMap(), ms = {};
function lp(e, t) {
  for (var r = sp, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(ms) || r.set(ms, e()), r.get(ms);
}
var vu = /* @__PURE__ */ new WeakMap();
function da(e) {
  var t = vu.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof Ef ? t += n.id : n && ke(n) === "object" ? t += da(n) : t += n;
  }), vu.set(e, t)), t;
}
function cp(e, t) {
  return ic("".concat(t, "_").concat(da(e)));
}
var Bo = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), Of = "_bAmBoO_";
function up(e, t, r) {
  if (jt()) {
    var n, o;
    wo(e, Bo);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var a = r ? r(i) : (n = getComputedStyle(i).content) === null || n === void 0 ? void 0 : n.includes(Of);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), ua(Bo), a;
  }
  return !1;
}
var gs = void 0;
function dp() {
  return gs === void 0 && (gs = up("@layer ".concat(Bo, " { .").concat(Bo, ' { content: "').concat(Of, '"!important; } }'), function(e) {
    e.className = Bo;
  })), gs;
}
var pu = process.env.NODE_ENV !== "test" && jt() ? f.useLayoutEffect : f.useEffect, Et = function(t, r) {
  var n = f.useRef(!0);
  pu(function() {
    return t(n.current);
  }, r), pu(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, yu = function(t, r) {
  Et(function(n) {
    if (!n)
      return t();
  }, r);
}, fp = B({}, f), bu = fp.useInsertionEffect, hp = function(t, r, n) {
  f.useMemo(t, n), Et(function() {
    return r(!0);
  }, n);
}, mp = bu ? function(e, t, r) {
  return bu(function() {
    return e(), t();
  }, r);
} : hp;
const gp = mp;
var vp = B({}, f), pp = vp.useInsertionEffect, yp = function(t) {
  var r = [], n = !1;
  function o(i) {
    if (n) {
      process.env.NODE_ENV !== "production" && bo(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(i);
  }
  return f.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(i) {
        return i();
      });
    };
  }, t), o;
}, bp = function() {
  return function(t) {
    t();
  };
}, Sp = typeof pp < "u" ? yp : bp;
const wp = Sp;
function xp() {
  return !1;
}
var nl = !1;
function Cp() {
  return nl;
}
const Ep = process.env.NODE_ENV === "production" ? xp : Cp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var vs = window;
  if (typeof vs.webpackHotUpdate == "function") {
    var Op = vs.webpackHotUpdate;
    vs.webpackHotUpdate = function() {
      return nl = !0, setTimeout(function() {
        nl = !1;
      }, 0), Op.apply(void 0, arguments);
    };
  }
}
function _f(e, t, r, n, o) {
  var i = f.useContext(ac), a = i.cache, s = [e].concat(ue(t)), l = s.join("_"), c = wp([l]), u = Ep(), d = function(g) {
    a.update(s, function(m) {
      var v = m || [], p = ne(v, 2), w = p[0], x = w === void 0 ? 0 : w, E = p[1], C = E;
      process.env.NODE_ENV !== "production" && E && u && (n == null || n(C, u), C = null);
      var S = C || r(), M = [x, S];
      return g ? g(M) : M;
    });
  };
  f.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var h = a.get(s);
  process.env.NODE_ENV !== "production" && !h && (d(), h = a.get(s));
  var b = h[1];
  return gp(function() {
    o == null || o(b);
  }, function(y) {
    return d(function(g) {
      var m = ne(g, 2), v = m[0], p = m[1];
      return y && v === 0 && (o == null || o(b)), [v + 1, p];
    }), function() {
      a.update(s, function(g) {
        var m = g || [], v = ne(m, 2), p = v[0], w = p === void 0 ? 0 : p, x = v[1], E = w - 1;
        return E === 0 ? (c(function() {
          return n == null ? void 0 : n(x, !1);
        }), null) : [w - 1, x];
      });
    };
  }, [l]), b;
}
var _p = {}, $p = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Rn = /* @__PURE__ */ new Map();
function Mp(e) {
  Rn.set(e, (Rn.get(e) || 0) + 1);
}
function Rp(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(el, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[co] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Pp = 0;
function Np(e, t) {
  Rn.set(e, (Rn.get(e) || 0) - 1);
  var r = Array.from(Rn.keys()), n = r.filter(function(o) {
    var i = Rn.get(o) || 0;
    return i <= 0;
  });
  r.length - n.length > Pp && n.forEach(function(o) {
    Rp(o, t), Rn.delete(o);
  });
}
var Tp = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), a = B(B({}, i), r);
  return o && (a = o(a)), a;
};
function Ip(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = mt(ac), o = n.cache.instanceId, i = r.salt, a = i === void 0 ? "" : i, s = r.override, l = s === void 0 ? _p : s, c = r.formatToken, u = r.getComputedToken, d = lp(function() {
    return Object.assign.apply(Object, [{}].concat(ue(t)));
  }, t), h = da(d), b = da(l), y = _f("token", [a, e.id, h, b], function() {
    var g = u ? u(d, l, e) : Tp(d, l, e, c), m = cp(g, a);
    g._tokenKey = m, Mp(m);
    var v = "".concat($p, "-").concat(ic(m));
    return g._hashId = v, [g, v];
  }, function(g) {
    Np(g[0]._tokenKey, o);
  });
  return y;
}
var Fp = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, $f = "comm", Mf = "rule", Rf = "decl", Dp = "@import", Ap = "@keyframes", jp = "@layer", kp = Math.abs, lc = String.fromCharCode;
function Pf(e) {
  return e.trim();
}
function Zi(e, t, r) {
  return e.replace(t, r);
}
function Lp(e, t) {
  return e.indexOf(t);
}
function Ko(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zo(e, t, r) {
  return e.slice(t, r);
}
function Yr(e) {
  return e.length;
}
function zp(e) {
  return e.length;
}
function Pi(e, t) {
  return t.push(e), e;
}
var Na = 1, xo = 1, Nf = 0, sr = 0, pt = 0, Oo = "";
function cc(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Na, column: xo, length: a, return: "", siblings: s };
}
function Vp() {
  return pt;
}
function Wp() {
  return pt = sr > 0 ? Ko(Oo, --sr) : 0, xo--, pt === 10 && (xo = 1, Na--), pt;
}
function yr() {
  return pt = sr < Nf ? Ko(Oo, sr++) : 0, xo++, pt === 10 && (xo = 1, Na++), pt;
}
function An() {
  return Ko(Oo, sr);
}
function Qi() {
  return sr;
}
function Ta(e, t) {
  return Zo(Oo, e, t);
}
function ol(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Bp(e) {
  return Na = xo = 1, Nf = Yr(Oo = e), sr = 0, [];
}
function Hp(e) {
  return Oo = "", e;
}
function ps(e) {
  return Pf(Ta(sr - 1, il(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yp(e) {
  for (; (pt = An()) && pt < 33; )
    yr();
  return ol(e) > 2 || ol(pt) > 3 ? "" : " ";
}
function Gp(e, t) {
  for (; --t && yr() && !(pt < 48 || pt > 102 || pt > 57 && pt < 65 || pt > 70 && pt < 97); )
    ;
  return Ta(e, Qi() + (t < 6 && An() == 32 && yr() == 32));
}
function il(e) {
  for (; yr(); )
    switch (pt) {
      case e:
        return sr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && il(pt);
        break;
      case 40:
        e === 41 && il(e);
        break;
      case 92:
        yr();
        break;
    }
  return sr;
}
function Up(e, t) {
  for (; yr() && e + pt !== 57; )
    if (e + pt === 84 && An() === 47)
      break;
  return "/*" + Ta(t, sr - 1) + "*" + lc(e === 47 ? e : yr());
}
function qp(e) {
  for (; !ol(An()); )
    yr();
  return Ta(e, sr);
}
function Xp(e) {
  return Hp(Ji("", null, null, null, [""], e = Bp(e), 0, [0], e));
}
function Ji(e, t, r, n, o, i, a, s, l) {
  for (var c = 0, u = 0, d = a, h = 0, b = 0, y = 0, g = 1, m = 1, v = 1, p = 0, w = "", x = o, E = i, C = n, S = w; m; )
    switch (y = p, p = yr()) {
      case 40:
        if (y != 108 && Ko(S, d - 1) == 58) {
          Lp(S += Zi(ps(p), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += ps(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Yp(y);
        break;
      case 92:
        S += Gp(Qi() - 1, 7);
        continue;
      case 47:
        switch (An()) {
          case 42:
          case 47:
            Pi(Kp(Up(yr(), Qi()), t, r, l), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * g:
        s[c++] = Yr(S) * v;
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            m = 0;
          case 59 + u:
            v == -1 && (S = Zi(S, /\f/g, "")), b > 0 && Yr(S) - d && Pi(b > 32 ? wu(S + ";", n, r, d - 1, l) : wu(Zi(S, " ", "") + ";", n, r, d - 2, l), l);
            break;
          case 59:
            S += ";";
          default:
            if (Pi(C = Su(S, t, r, c, u, o, s, w, x = [], E = [], d, i), i), p === 123)
              if (u === 0)
                Ji(S, t, C, C, x, i, d, s, E);
              else
                switch (h === 99 && Ko(S, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ji(e, C, C, n && Pi(Su(e, C, C, 0, 0, o, s, w, o, x = [], d, E), E), o, E, d, s, n ? x : E);
                    break;
                  default:
                    Ji(S, C, C, C, [""], E, 0, s, E);
                }
        }
        c = u = b = 0, g = v = 1, w = S = "", d = a;
        break;
      case 58:
        d = 1 + Yr(S), b = y;
      default:
        if (g < 1) {
          if (p == 123)
            --g;
          else if (p == 125 && g++ == 0 && Wp() == 125)
            continue;
        }
        switch (S += lc(p), p * g) {
          case 38:
            v = u > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            s[c++] = (Yr(S) - 1) * v, v = 1;
            break;
          case 64:
            An() === 45 && (S += ps(yr())), h = An(), u = d = Yr(w = S += qp(Qi())), p++;
            break;
          case 45:
            y === 45 && Yr(S) == 2 && (g = 0);
        }
    }
  return i;
}
function Su(e, t, r, n, o, i, a, s, l, c, u, d) {
  for (var h = o - 1, b = o === 0 ? i : [""], y = zp(b), g = 0, m = 0, v = 0; g < n; ++g)
    for (var p = 0, w = Zo(e, h + 1, h = kp(m = a[g])), x = e; p < y; ++p)
      (x = Pf(m > 0 ? b[p] + " " + w : Zi(w, /&\f/g, b[p]))) && (l[v++] = x);
  return cc(e, t, r, o === 0 ? Mf : s, l, c, u, d);
}
function Kp(e, t, r, n) {
  return cc(e, t, r, $f, lc(Vp()), Zo(e, 2, -2), 0, n);
}
function wu(e, t, r, n, o) {
  return cc(e, t, r, Rf, Zo(e, 0, n), Zo(e, n + 1, -1), n, o);
}
function al(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Zp(e, t, r, n) {
  switch (e.type) {
    case jp:
      if (e.children.length)
        break;
    case Dp:
    case Rf:
      return e.return = e.return || e.value;
    case $f:
      return "";
    case Ap:
      return e.return = e.value + "{" + al(e.children, n) + "}";
    case Mf:
      if (!Yr(e.value = e.props.join(",")))
        return "";
  }
  return Yr(r = al(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Tf(e, t) {
  var r = t.path, n = t.parentSelectors;
  it(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Qp = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Tf("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Jp = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Tf("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, xu = "data-ant-cssinjs-cache-path", If = "_FILE_STYLE__", jn, Ff = !0;
function e0() {
  if (!jn && (jn = {}, jt())) {
    var e = document.createElement("div");
    e.className = xu, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = ne(i, 2), s = a[0], l = a[1];
      jn[s] = l;
    });
    var r = document.querySelector("style[".concat(xu, "]"));
    if (r) {
      var n;
      Ff = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function t0(e) {
  return e0(), !!jn[e];
}
function r0(e) {
  var t = jn[e], r = null;
  if (t && jt())
    if (Ff)
      r = If;
    else {
      var n = document.querySelector("style[".concat(Dn, '="').concat(jn[e], '"]'));
      n ? r = n.innerHTML : delete jn[e];
    }
  return [r, t];
}
var Cu = jt(), Df = "_skip_check_", Af = "_multi_value_";
function Eu(e) {
  var t = al(Xp(e), Zp);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function n0(e) {
  return ke(e) === "object" && e && (Df in e || Af in e);
}
function o0(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, l = a.trim().split(/\s+/), c = l[0] || "", u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(u).concat(o).concat(c.slice(u.length)), [c].concat(ue(l.slice(1))).join(" ");
  });
  return i.join(",");
}
var i0 = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = r.hashId, l = r.layer, c = r.path, u = r.hashPriority, d = r.transformers, h = d === void 0 ? [] : d, b = r.linters, y = b === void 0 ? [] : b, g = "", m = {};
  function v(C) {
    var S = C.getName(s);
    if (!m[S]) {
      var M = e(C.style, r, {
        root: !1,
        parentSelectors: a
      }), O = ne(M, 1), $ = O[0];
      m[S] = "@keyframes ".concat(C.getName(s)).concat($);
    }
  }
  function p(C) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(M) {
      Array.isArray(M) ? p(M, S) : M && S.push(M);
    }), S;
  }
  var w = p(Array.isArray(t) ? t : [t]);
  if (w.forEach(function(C) {
    var S = typeof C == "string" && !o ? {} : C;
    if (typeof S == "string")
      g += "".concat(S, `
`);
    else if (S._keyframe)
      v(S);
    else {
      var M = h.reduce(function(O, $) {
        var D;
        return ($ == null || (D = $.visit) === null || D === void 0 ? void 0 : D.call($, O)) || O;
      }, S);
      Object.keys(M).forEach(function(O) {
        var $ = M[O];
        if (ke($) === "object" && $ && (O !== "animationName" || !$._keyframe) && !n0($)) {
          var D = !1, P = O.trim(), F = !1;
          (o || i) && s ? P.startsWith("@") ? D = !0 : P = o0(O, s, u) : o && !s && (P === "&" || P === "") && (P = "", F = !0);
          var I = e($, r, {
            root: F,
            injectHash: D,
            parentSelectors: [].concat(ue(a), [P])
          }), L = ne(I, 2), T = L[0], R = L[1];
          m = B(B({}, m), R), g += "".concat(P).concat(T);
        } else {
          let A = function(j, V) {
            process.env.NODE_ENV !== "production" && (ke($) !== "object" || !($ != null && $[Df])) && [Qp, Jp].concat(ue(y)).forEach(function(W) {
              return W(j, V, {
                path: c,
                hashId: s,
                parentSelectors: a
              });
            });
            var X = j.replace(/[A-Z]/g, function(W) {
              return "-".concat(W.toLowerCase());
            }), K = V;
            !Fp[j] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), j === "animationName" && V !== null && V !== void 0 && V._keyframe && (v(V), K = V.getName(s)), g += "".concat(X, ":").concat(K, ";");
          };
          var N, z = (N = $ == null ? void 0 : $.value) !== null && N !== void 0 ? N : $;
          ke($) === "object" && $ !== null && $ !== void 0 && $[Af] && Array.isArray(z) ? z.forEach(function(j) {
            A(O, j);
          }) : A(O, z);
        }
      });
    }
  }), !o)
    g = "{".concat(g, "}");
  else if (l && dp()) {
    var x = l.split(","), E = x[x.length - 1].trim();
    g = "@layer ".concat(E, " {").concat(g, "}"), x.length > 1 && (g = "@layer ".concat(l, "{%%%:%}").concat(g));
  }
  return [g, m];
};
function a0(e, t) {
  return ic("".concat(e.join("%")).concat(t));
}
function s0() {
  return null;
}
function sl(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, u = f.useContext(ac), d = u.autoClear, h = u.mock, b = u.defaultCache, y = u.hashPriority, g = u.container, m = u.ssrInline, v = u.transformers, p = u.linters, w = u.cache, x = r._tokenKey, E = [x].concat(ue(n)), C = Cu;
  process.env.NODE_ENV !== "production" && h !== void 0 && (C = h === "client");
  var S = _f(
    "style",
    E,
    // Create cache if needed
    function() {
      var P = E.join("|");
      if (t0(P)) {
        var F = r0(P), I = ne(F, 2), L = I[0], T = I[1];
        if (L)
          return [L, x, T, {}, s, c];
      }
      var R = t(), N = i0(R, {
        hashId: o,
        hashPriority: y,
        layer: i,
        path: n.join("-"),
        transformers: v,
        linters: p
      }), z = ne(N, 2), A = z[0], j = z[1], V = Eu(A), X = a0(E, V);
      return [V, x, X, j, s, c];
    },
    // Remove cache if no need
    function(P, F) {
      var I = ne(P, 3), L = I[2];
      (F || d) && Cu && ua(L, {
        mark: Dn
      });
    },
    // Effect: Inject style here
    function(P) {
      var F = ne(P, 4), I = F[0];
      F[1];
      var L = F[2], T = F[3];
      if (C && I !== If) {
        var R = {
          mark: Dn,
          prepend: "queue",
          attachTo: g,
          priority: c
        }, N = typeof a == "function" ? a() : a;
        N && (R.csp = {
          nonce: N
        });
        var z = wo(I, L, R);
        z[co] = w.instanceId, z.setAttribute(el, x), process.env.NODE_ENV !== "production" && z.setAttribute(Qv, E.join("|")), Object.keys(T).forEach(function(A) {
          wo(Eu(T[A]), "_effect-".concat(A), R);
        });
      }
    }
  ), M = ne(S, 3), O = M[0], $ = M[1], D = M[2];
  return function(P) {
    var F;
    if (!m || C || !b)
      F = /* @__PURE__ */ f.createElement(s0, null);
    else {
      var I;
      F = /* @__PURE__ */ f.createElement("style", Ve({}, (I = {}, k(I, el, $), k(I, Dn, D), I), {
        dangerouslySetInnerHTML: {
          __html: O
        }
      }));
    }
    return /* @__PURE__ */ f.createElement(f.Fragment, null, F, P);
  };
}
var ct = /* @__PURE__ */ function() {
  function e(t, r) {
    Tr(this, e), k(this, "name", void 0), k(this, "style", void 0), k(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Ir(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Qn(e) {
  return e.notSplit = !0, e;
}
Qn(["borderTop", "borderBottom"]), Qn(["borderTop"]), Qn(["borderBottom"]), Qn(["borderLeft", "borderRight"]), Qn(["borderLeft"]), Qn(["borderRight"]);
var l0 = /* @__PURE__ */ Oa({});
const uc = l0;
function c0(e) {
  return xf(e) || hf(e) || oc(e) || Cf();
}
function gr(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function jf(e, t, r, n) {
  if (!t.length)
    return r;
  var o = c0(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = ue(e) : s = B({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = jf(s[i], a, r, n), s;
}
function hr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !gr(e, t.slice(0, -1)) ? e : jf(e, t, r, n);
}
function u0(e) {
  return ke(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ou(e) {
  return Array.isArray(e) ? [] : {};
}
var d0 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function uo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Ou(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var l = new Set(s), c = gr(o, a), u = Array.isArray(c);
      if (u || u0(c)) {
        if (!l.has(c)) {
          l.add(c);
          var d = gr(n, a);
          u ? n = hr(n, a, []) : (!d || ke(d) !== "object") && (n = hr(n, a, Ou(c))), d0(c).forEach(function(h) {
            i([].concat(ue(a), [h]), l);
          });
        }
      } else
        n = hr(n, a, c);
    }
    i([]);
  }), n;
}
function kf() {
}
let Br = null;
function f0() {
  Br = null, tf();
}
let dc = kf;
process.env.NODE_ENV !== "production" && (dc = (e, t, r) => {
  it(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && f0();
});
const Lf = /* @__PURE__ */ f.createContext({}), er = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = f.useContext(Lf), r = (n, o, i) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const a = Br;
        Br || (Br = {}), Br[e] = Br[e] || [], Br[e].includes(i || "") || Br[e].push(i || ""), a || console.warn("[antd] There exists deprecated usage in your code:", Br);
      } else
        process.env.NODE_ENV !== "production" && dc(n, e, i);
  };
  return r.deprecated = (n, o, i, a) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${a ? ` ${a}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = kf, e;
}, li = dc, zf = /* @__PURE__ */ Oa(void 0), h0 = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var m0 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const g0 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Vf = g0, v0 = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, m0),
  timePickerLocale: Object.assign({}, Vf)
}, _u = v0, Ut = "${label} is not a valid ${type}", p0 = {
  locale: "en",
  Pagination: h0,
  DatePicker: _u,
  TimePicker: Vf,
  Calendar: _u,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Ut,
        method: Ut,
        array: Ut,
        object: Ut,
        number: Ut,
        date: Ut,
        boolean: Ut,
        integer: Ut,
        float: Ut,
        regexp: Ut,
        email: Ut,
        url: Ut,
        hex: Ut
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
}, Vn = p0;
Object.assign({}, Vn.Modal);
let ea = [];
const $u = () => ea.reduce((e, t) => Object.assign(Object.assign({}, e), t), Vn.Modal);
function y0(e) {
  if (e) {
    const t = Object.assign({}, e);
    return ea.push(t), $u(), () => {
      ea = ea.filter((r) => r !== t), $u();
    };
  }
  Object.assign({}, Vn.Modal);
}
const b0 = /* @__PURE__ */ Oa(void 0), fc = b0, S0 = (e, t) => {
  const r = f.useContext(fc), n = f.useMemo(() => {
    var i;
    const a = t || Vn[e], s = (i = r == null ? void 0 : r[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, t, r]), o = f.useMemo(() => {
    const i = r == null ? void 0 : r.locale;
    return r != null && r.exist && !i ? Vn.locale : i;
  }, [r]);
  return [n, o];
}, w0 = S0, Wf = "internalMark", Bf = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = er("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(n === Wf, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  f.useEffect(() => y0(t && t.Modal), [t]);
  const o = f.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ f.createElement(fc.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Bf.displayName = "LocaleProvider");
const x0 = Bf;
function Pt(e, t) {
  C0(e) && (e = "100%");
  var r = E0(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ni(e) {
  return Math.min(1, Math.max(0, e));
}
function C0(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function E0(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Hf(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ti(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Nn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function O0(e, t, r) {
  return {
    r: Pt(e, 255) * 255,
    g: Pt(t, 255) * 255,
    b: Pt(r, 255) * 255
  };
}
function Mu(e, t, r) {
  e = Pt(e, 255), t = Pt(t, 255), r = Pt(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = 0, s = (n + o) / 2;
  if (n === o)
    a = 0, i = 0;
  else {
    var l = n - o;
    switch (a = s > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
      case e:
        i = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / l + 2;
        break;
      case r:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l: s };
}
function ys(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function _0(e, t, r) {
  var n, o, i;
  if (e = Pt(e, 360), t = Pt(t, 100), r = Pt(r, 100), t === 0)
    o = r, i = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = ys(s, a, e + 1 / 3), o = ys(s, a, e), i = ys(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function ll(e, t, r) {
  e = Pt(e, 255), t = Pt(t, 255), r = Pt(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = n, s = n - o, l = n === 0 ? 0 : s / n;
  if (n === o)
    i = 0;
  else {
    switch (n) {
      case e:
        i = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / s + 2;
        break;
      case r:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, v: a };
}
function $0(e, t, r) {
  e = Pt(e, 360) * 6, t = Pt(t, 100), r = Pt(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), l = n % 6, c = [r, a, i, i, s, r][l], u = [s, r, r, a, i, i][l], d = [i, i, s, r, r, a][l];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function cl(e, t, r, n) {
  var o = [
    Nn(Math.round(e).toString(16)),
    Nn(Math.round(t).toString(16)),
    Nn(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function M0(e, t, r, n, o) {
  var i = [
    Nn(Math.round(e).toString(16)),
    Nn(Math.round(t).toString(16)),
    Nn(Math.round(r).toString(16)),
    Nn(R0(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function R0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ru(e) {
  return Xt(e) / 255;
}
function Xt(e) {
  return parseInt(e, 16);
}
function P0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var ul = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function ao(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = I0(e)), typeof e == "object" && (zr(e.r) && zr(e.g) && zr(e.b) ? (t = O0(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : zr(e.h) && zr(e.s) && zr(e.v) ? (n = Ti(e.s), o = Ti(e.v), t = $0(e.h, n, o), a = !0, s = "hsv") : zr(e.h) && zr(e.s) && zr(e.l) && (n = Ti(e.s), i = Ti(e.l), t = _0(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Hf(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var N0 = "[-\\+]?\\d+%?", T0 = "[-\\+]?\\d*\\.\\d+%?", cn = "(?:".concat(T0, ")|(?:").concat(N0, ")"), bs = "[\\s|\\(]+(".concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")\\s*\\)?"), Ss = "[\\s|\\(]+(".concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")[,|\\s]+(").concat(cn, ")\\s*\\)?"), fr = {
  CSS_UNIT: new RegExp(cn),
  rgb: new RegExp("rgb" + bs),
  rgba: new RegExp("rgba" + Ss),
  hsl: new RegExp("hsl" + bs),
  hsla: new RegExp("hsla" + Ss),
  hsv: new RegExp("hsv" + bs),
  hsva: new RegExp("hsva" + Ss),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function I0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (ul[e])
    e = ul[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = fr.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = fr.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = fr.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = fr.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = fr.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = fr.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = fr.hex8.exec(e), r ? {
    r: Xt(r[1]),
    g: Xt(r[2]),
    b: Xt(r[3]),
    a: Ru(r[4]),
    format: t ? "name" : "hex8"
  } : (r = fr.hex6.exec(e), r ? {
    r: Xt(r[1]),
    g: Xt(r[2]),
    b: Xt(r[3]),
    format: t ? "name" : "hex"
  } : (r = fr.hex4.exec(e), r ? {
    r: Xt(r[1] + r[1]),
    g: Xt(r[2] + r[2]),
    b: Xt(r[3] + r[3]),
    a: Ru(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = fr.hex3.exec(e), r ? {
    r: Xt(r[1] + r[1]),
    g: Xt(r[2] + r[2]),
    b: Xt(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function zr(e) {
  return !!fr.CSS_UNIT.exec(String(e));
}
var Qt = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = P0(t)), this.originalInput = t;
      var o = ao(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, o, i = t.r / 255, a = t.g / 255, s = t.b / 255;
      return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Hf(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ll(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ll(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Mu(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Mu(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), cl(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), M0(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(Pt(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(Pt(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + cl(this.r, this.g, this.b, !1), r = 0, n = Object.entries(ul); r < n.length; r++) {
        var o = n[r], i = o[0], a = o[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, o = this.a < 1 && this.a >= 0, i = !r && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = Ni(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Ni(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Ni(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Ni(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), o = new e(t).toRgb(), i = r / 100, a = {
        r: (o.r - n.r) * i + n.r,
        g: (o.g - n.g) * i + n.g,
        b: (o.b - n.b) * i + n.b,
        a: (o.a - n.a) * i + n.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), o = 360 / r, i = [this];
      for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + o) % 360, i.push(new e(n));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, o = r.s, i = r.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: n, s: o, v: i })), i = (i + s) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), o = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, o = [this], i = 360 / t, a = 1; a < t; a++)
        o.push(new e({ h: (n + a * i) % 360, s: r.s, l: r.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Ii = 2, Pu = 0.16, F0 = 0.05, D0 = 0.05, A0 = 0.15, Yf = 5, Gf = 4, j0 = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Nu(e) {
  var t = e.r, r = e.g, n = e.b, o = ll(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function Fi(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(cl(t, r, n, !1));
}
function k0(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function Tu(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Ii * t : Math.round(e.h) + Ii * t : n = r ? Math.round(e.h) + Ii * t : Math.round(e.h) - Ii * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Iu(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Pu * t : t === Gf ? n = e.s + Pu : n = e.s + F0 * t, n > 1 && (n = 1), r && t === Yf && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Fu(e, t, r) {
  var n;
  return r ? n = e.v + D0 * t : n = e.v - A0 * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Wn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = ao(e), o = Yf; o > 0; o -= 1) {
    var i = Nu(n), a = Fi(ao({
      h: Tu(i, o, !0),
      s: Iu(i, o, !0),
      v: Fu(i, o, !0)
    }));
    r.push(a);
  }
  r.push(Fi(n));
  for (var s = 1; s <= Gf; s += 1) {
    var l = Nu(n), c = Fi(ao({
      h: Tu(l, s),
      s: Iu(l, s),
      v: Fu(l, s)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? j0.map(function(u) {
    var d = u.index, h = u.opacity, b = Fi(k0(ao(t.backgroundColor || "#141414"), ao(r[d]), h * 100));
    return b;
  }) : r;
}
var ws = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, ta = {}, xs = {};
Object.keys(ws).forEach(function(e) {
  ta[e] = Wn(ws[e]), ta[e].primary = ta[e][5], xs[e] = Wn(ws[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), xs[e].primary = xs[e][5];
});
var L0 = ta.blue;
const z0 = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, V0 = z0;
function W0(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    sizeXL: t * (r + 4),
    sizeLG: t * (r + 2),
    sizeMD: t * (r + 1),
    sizeMS: t * r,
    size: t * r,
    sizeSM: t * (r - 1),
    sizeXS: t * (r - 2),
    sizeXXS: t * (r - 3)
    // 4
  };
}
const Uf = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, B0 = Object.assign(Object.assign({}, Uf), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), Qo = B0;
function H0(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: s,
    colorPrimary: l,
    colorBgBase: c,
    colorTextBase: u
  } = e, d = r(l), h = r(o), b = r(i), y = r(a), g = r(s), m = n(c, u), v = e.colorLink || e.colorInfo, p = r(v);
  return Object.assign(Object.assign({}, m), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: h[1],
    colorSuccessBgHover: h[2],
    colorSuccessBorder: h[3],
    colorSuccessBorderHover: h[4],
    colorSuccessHover: h[4],
    colorSuccess: h[6],
    colorSuccessActive: h[7],
    colorSuccessTextHover: h[8],
    colorSuccessText: h[9],
    colorSuccessTextActive: h[10],
    colorErrorBg: y[1],
    colorErrorBgHover: y[2],
    colorErrorBorder: y[3],
    colorErrorBorderHover: y[4],
    colorErrorHover: y[5],
    colorError: y[6],
    colorErrorActive: y[7],
    colorErrorTextHover: y[8],
    colorErrorText: y[9],
    colorErrorTextActive: y[10],
    colorWarningBg: b[1],
    colorWarningBgHover: b[2],
    colorWarningBorder: b[3],
    colorWarningBorderHover: b[4],
    colorWarningHover: b[4],
    colorWarning: b[6],
    colorWarningActive: b[7],
    colorWarningTextHover: b[8],
    colorWarningText: b[9],
    colorWarningTextActive: b[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: p[4],
    colorLink: p[6],
    colorLinkActive: p[7],
    colorBgMask: new Qt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Y0 = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, G0 = Y0;
function U0(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, G0(n));
}
const Vr = (e, t) => new Qt(e).setAlpha(t).toRgbString(), jo = (e, t) => new Qt(e).darken(t).toHexString(), q0 = (e) => {
  const t = Wn(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, X0 = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Vr(n, 0.88),
    colorTextSecondary: Vr(n, 0.65),
    colorTextTertiary: Vr(n, 0.45),
    colorTextQuaternary: Vr(n, 0.25),
    colorFill: Vr(n, 0.15),
    colorFillSecondary: Vr(n, 0.06),
    colorFillTertiary: Vr(n, 0.04),
    colorFillQuaternary: Vr(n, 0.02),
    colorBgLayout: jo(r, 4),
    colorBgContainer: jo(r, 0),
    colorBgElevated: jo(r, 0),
    colorBgSpotlight: Vr(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: jo(r, 15),
    colorBorderSecondary: jo(r, 6)
  };
};
function K0(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const o = n - 1, i = e * Math.pow(2.71828, o / 5), a = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((r) => {
    const n = r + 8;
    return {
      size: r,
      lineHeight: n / r
    };
  });
}
const Z0 = (e) => {
  const t = K0(e), r = t.map((o) => o.size), n = t.map((o) => o.lineHeight);
  return {
    fontSizeSM: r[0],
    fontSize: r[1],
    fontSizeLG: r[2],
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: n[1],
    lineHeightLG: n[2],
    lineHeightSM: n[0],
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
}, Q0 = Z0;
function J0(e) {
  const t = Object.keys(Uf).map((r) => {
    const n = Wn(e[r]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a + 1}`] = n[a], o[`${r}${a + 1}`] = n[a], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), H0(e, {
    generateColorPalettes: q0,
    generateNeutralColorPalettes: X0
  })), Q0(e.fontSize)), W0(e)), V0(e)), U0(e));
}
const qf = rl(J0), Xf = {
  token: Qo,
  override: {
    override: Qo
  },
  hashed: !0
}, Kf = /* @__PURE__ */ Y.createContext(Xf), Zf = "anticon", ey = (e, t) => t || (e ? `ant-${e}` : "ant"), Ge = /* @__PURE__ */ f.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: ey,
  iconPrefixCls: Zf
}), ty = `-ant-${Date.now()}-${Math.random()}`;
function ry(e, t) {
  const r = {}, n = (a, s) => {
    let l = a.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, o = (a, s) => {
    const l = new Qt(a), c = Wn(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = c[1], r[`${s}-color-hover`] = c[4], r[`${s}-color-active`] = c[6], r[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = c[0], r[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new Qt(t.primaryColor), s = Wn(a.toRgbString());
    s.forEach((c, u) => {
      r[`primary-${u + 1}`] = c;
    }), r["primary-color-deprecated-l-35"] = n(a, (c) => c.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, (c) => c.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, (c) => c.tint(20)), r["primary-color-deprecated-t-50"] = n(a, (c) => c.tint(50)), r["primary-color-deprecated-f-12"] = n(a, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const l = new Qt(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (c) => c.setAlpha(c.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((a) => `--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim();
}
function ny(e, t) {
  const r = ry(e, t);
  jt() ? wo(r, `${ty}-dynamic-theme`) : process.env.NODE_ENV !== "production" && li(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const dl = /* @__PURE__ */ f.createContext(!1), Qf = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = f.useContext(dl);
  return /* @__PURE__ */ f.createElement(dl.Provider, {
    value: r ?? n
  }, t);
}, ci = dl, fl = /* @__PURE__ */ f.createContext(void 0), oy = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = f.useContext(fl);
  return /* @__PURE__ */ f.createElement(fl.Provider, {
    value: r || n
  }, t);
}, ui = fl;
function iy() {
  const e = mt(ci), t = mt(ui);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const fa = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], ay = "5.11.2";
function Cs(e) {
  return e >= 0 && e <= 255;
}
function Di(e, t) {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = new Qt(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: l
  } = new Qt(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((r - a * (1 - c)) / c), d = Math.round((n - s * (1 - c)) / c), h = Math.round((o - l * (1 - c)) / c);
    if (Cs(u) && Cs(d) && Cs(h))
      return new Qt({
        r: u,
        g: d,
        b: h,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Qt({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var sy = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Jf(e) {
  const {
    override: t
  } = e, r = sy(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Qo).forEach((h) => {
    delete n[h];
  });
  const o = Object.assign(Object.assign({}, r), n), i = 480, a = 576, s = 768, l = 992, c = 1200, u = 1600;
  if (o.motion === !1) {
    const h = "0s";
    o.motionDurationFast = h, o.motionDurationMid = h, o.motionDurationSlow = h;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: Di(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: Di(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Di(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 4,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: Di(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Qt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Qt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Qt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var Du = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const eh = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, i = Du(t, ["override"]);
  let a = Object.assign(Object.assign({}, n), {
    override: o
  });
  return a = Jf(a), i && Object.entries(i).forEach((s) => {
    let [l, c] = s;
    const {
      theme: u
    } = c, d = Du(c, ["theme"]);
    let h = d;
    u && (h = eh(Object.assign(Object.assign({}, a), d), {
      override: d
    }, u)), a[l] = h;
  }), a;
};
function vn() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n
  } = Y.useContext(Kf), o = `${ay}-${t || ""}`, i = r || qf, [a, s] = Ip(i, [Qo, e], {
    salt: o,
    override: n,
    getComputedToken: eh,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Jf
  });
  return [i, a, t ? s : ""];
}
function Mr(e) {
  var t = f.useRef();
  t.current = e;
  var r = f.useCallback(function() {
    for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return r;
}
function kn(e) {
  var t = f.useRef(!1), r = f.useState(e), n = ne(r, 2), o = n[0], i = n[1];
  f.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, l) {
    l && t.current || i(s);
  }
  return [o, a];
}
function Es(e) {
  return e !== void 0;
}
function di(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, i = r.onChange, a = r.postState, s = kn(function() {
    return Es(o) ? o : Es(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), l = ne(s, 2), c = l[0], u = l[1], d = o !== void 0 ? o : c, h = a ? a(d) : d, b = Mr(i), y = kn([d]), g = ne(y, 2), m = g[0], v = g[1];
  yu(function() {
    var w = m[0];
    c !== w && b(c, w);
  }, [m]), yu(function() {
    Es(o) || u(o);
  }, [o]);
  var p = Mr(function(w, x) {
    u(w, x), v([d], x);
  });
  return [h, p];
}
const ly = (e, t, r, n, o) => {
  const i = e / 2, a = 0, s = i, l = r * 1 / Math.sqrt(2), c = i - r * (1 - 1 / Math.sqrt(2)), u = i - t * (1 / Math.sqrt(2)), d = r * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), h = 2 * i - u, b = d, y = 2 * i - l, g = c, m = 2 * i - a, v = s, p = i * Math.sqrt(2) + r * (Math.sqrt(2) - 2), w = r * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width: e,
    height: e,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: e,
      height: e / 2,
      background: n,
      clipPath: {
        _multi_value_: !0,
        value: [`polygon(${w}px 100%, 50% ${w}px, ${2 * i - w}px 100%, ${w}px 100%)`, `path('M ${a} ${s} A ${r} ${r} 0 0 0 ${l} ${c} L ${u} ${d} A ${t} ${t} 0 0 1 ${h} ${b} L ${y} ${g} A ${r} ${r} 0 0 0 ${m} ${v} Z')`]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: p,
      height: p,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${t}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: o,
      zIndex: 0,
      background: "transparent"
    }
  };
}, en = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, cy = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), uy = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), dy = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), fy = (e, t) => {
  const {
    fontFamily: r,
    fontSize: n
  } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [o]: {
      fontFamily: r,
      fontSize: n,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [o]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, hy = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), my = (e) => ({
  "&:focus-visible": Object.assign({}, hy(e))
}), th = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let hl = !0;
function _t() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!th)
    return Object.assign.apply(Object, [{}].concat(t));
  hl = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(n, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), hl = !0, n;
}
const Au = {};
function gy() {
}
function vy(e) {
  let t, r = e, n = gy;
  return th && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, i) {
      return hl && t.add(i), o[i];
    }
  }), n = (o, i) => {
    var a;
    Au[o] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (a = Au[o]) === null || a === void 0 ? void 0 : a.component), i)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}
const py = (e, t) => {
  const [r, n] = vn();
  return sl({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, cy()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, rh = py;
function lr(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e], [i] = o, a = o.join("-");
  return (s) => {
    const [l, c, u] = vn(), {
      getPrefixCls: d,
      iconPrefixCls: h,
      csp: b
    } = mt(Ge), y = d(), g = {
      theme: l,
      token: c,
      hashId: u,
      nonce: () => b == null ? void 0 : b.nonce,
      clientOnly: n.clientOnly,
      // antd is always at top of styles
      order: n.order || -999
    };
    return sl(Object.assign(Object.assign({}, g), {
      clientOnly: !1,
      path: ["Shared", y]
    }), () => [{
      // Link
      "&": dy(c)
    }]), rh(h, b), [sl(Object.assign(Object.assign({}, g), {
      path: [a, s, h]
    }), () => {
      const {
        token: m,
        flush: v
      } = vy(c), p = Object.assign({}, c[i]);
      if (n.deprecatedTokens) {
        const {
          deprecatedTokens: M
        } = n;
        M.forEach((O) => {
          let [$, D] = O;
          var P;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && it(!(p != null && p[$]), `The token '${String($)}' of ${i} had deprecated, use '${String(D)}' instead.`), (p != null && p[$] || p != null && p[D]) && ((P = p[D]) !== null && P !== void 0 || (p[D] = p == null ? void 0 : p[$]));
        });
      }
      const w = typeof r == "function" ? r(_t(m, p ?? {})) : r, x = Object.assign(Object.assign({}, w), p), E = `.${s}`, C = _t(m, {
        componentCls: E,
        prefixCls: s,
        iconCls: `.${h}`,
        antCls: `.${y}`
      }, x), S = t(C, {
        hashId: u,
        prefixCls: s,
        rootPrefixCls: y,
        iconPrefixCls: h,
        overrideComponentToken: p
      });
      return v(i, x), [n.resetStyle === !1 ? null : fy(C, s), S];
    }), u];
  };
}
const nh = (e, t, r, n) => {
  const o = lr(e, t, r, Object.assign({
    resetStyle: !1,
    // Sub Style should default after root one
    order: -998
  }, n)), i = (a) => {
    let {
      prefixCls: s
    } = a;
    return o(s), null;
  };
  return process.env.NODE_ENV !== "production" && (i.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`), i;
};
function hc(e, t) {
  return fa.reduce((r, n) => {
    const o = e[`${n}1`], i = e[`${n}3`], a = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, r), t(n, {
      lightColor: o,
      lightBorderColor: i,
      darkColor: a,
      textColor: s
    }));
  }, {});
}
function yy(e, t) {
  const r = e || {}, n = r.inherit === !1 || !t ? Xf : t;
  return tc(() => {
    if (!e)
      return t;
    const o = Object.assign({}, n.components);
    return Object.keys(e.components || {}).forEach((i) => {
      o[i] = Object.assign(Object.assign({}, o[i]), e.components[i]);
    }), Object.assign(Object.assign(Object.assign({}, n), r), {
      token: Object.assign(Object.assign({}, n.token), r.token),
      components: o
    });
  }, [r, n], (o, i) => o.some((a, s) => {
    const l = i[s];
    return !pf(a, l, !0);
  }));
}
var by = ["children"], oh = /* @__PURE__ */ f.createContext({});
function Sy(e) {
  var t = e.children, r = Wt(e, by);
  return /* @__PURE__ */ f.createElement(oh.Provider, {
    value: r
  }, t);
}
var wy = /* @__PURE__ */ function(e) {
  $a(r, e);
  var t = Ma(r);
  function r() {
    return Tr(this, r), t.apply(this, arguments);
  }
  return Ir(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(f.Component), $n = "none", Ai = "appear", ji = "enter", ki = "leave", ju = "none", mr = "prepare", fo = "start", ho = "active", mc = "end", ih = "prepared";
function ku(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function xy(e, t) {
  var r = {
    animationend: ku("Animation", "AnimationEnd"),
    transitionend: ku("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Cy = xy(jt(), typeof window < "u" ? window : {}), ah = {};
if (jt()) {
  var Ey = document.createElement("div");
  ah = Ey.style;
}
var Li = {};
function sh(e) {
  if (Li[e])
    return Li[e];
  var t = Cy[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in ah)
        return Li[e] = t[i], Li[e];
    }
  return "";
}
var lh = sh("animationend"), ch = sh("transitionend"), uh = !!(lh && ch), Lu = lh || "animationend", zu = ch || "transitionend";
function Vu(e, t) {
  if (!e)
    return null;
  if (ke(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const Oy = function(e) {
  var t = Ze(), r = Ze(e);
  r.current = e;
  var n = f.useCallback(function(a) {
    r.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(zu, n), a.removeEventListener(Lu, n));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(zu, n), a.addEventListener(Lu, n), t.current = a);
  }
  return f.useEffect(function() {
    return function() {
      o(t.current);
    };
  }, []), [i, o];
};
var dh = jt() ? nv : yt;
const _y = function() {
  var e = f.useRef(null);
  function t() {
    Ot.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Ot(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = i;
  }
  return f.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var $y = [mr, fo, ho, mc], My = [mr, ih], fh = !1, Ry = !0;
function hh(e) {
  return e === ho || e === mc;
}
const Py = function(e, t, r) {
  var n = kn(ju), o = ne(n, 2), i = o[0], a = o[1], s = _y(), l = ne(s, 2), c = l[0], u = l[1];
  function d() {
    a(mr, !0);
  }
  var h = t ? My : $y;
  return dh(function() {
    if (i !== ju && i !== mc) {
      var b = h.indexOf(i), y = h[b + 1], g = r(i);
      g === fh ? a(y, !0) : y && c(function(m) {
        function v() {
          m.isCanceled() || a(y, !0);
        }
        g === !0 ? v() : Promise.resolve(g).then(v);
      });
    }
  }, [e, i]), f.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function Ny(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, l = n.motionLeave, c = l === void 0 ? !0 : l, u = n.motionDeadline, d = n.motionLeaveImmediately, h = n.onAppearPrepare, b = n.onEnterPrepare, y = n.onLeavePrepare, g = n.onAppearStart, m = n.onEnterStart, v = n.onLeaveStart, p = n.onAppearActive, w = n.onEnterActive, x = n.onLeaveActive, E = n.onAppearEnd, C = n.onEnterEnd, S = n.onLeaveEnd, M = n.onVisibleChanged, O = kn(), $ = ne(O, 2), D = $[0], P = $[1], F = kn($n), I = ne(F, 2), L = I[0], T = I[1], R = kn(null), N = ne(R, 2), z = N[0], A = N[1], j = Ze(!1), V = Ze(null);
  function X() {
    return r();
  }
  var K = Ze(!1);
  function W() {
    T($n, !0), A(null, !0);
  }
  function Q(Z) {
    var q = X();
    if (!(Z && !Z.deadline && Z.target !== q)) {
      var se = K.current, de;
      L === Ai && se ? de = E == null ? void 0 : E(q, Z) : L === ji && se ? de = C == null ? void 0 : C(q, Z) : L === ki && se && (de = S == null ? void 0 : S(q, Z)), L !== $n && se && de !== !1 && W();
    }
  }
  var re = Oy(Q), oe = ne(re, 1), ie = oe[0], le = function(q) {
    var se, de, we;
    switch (q) {
      case Ai:
        return se = {}, k(se, mr, h), k(se, fo, g), k(se, ho, p), se;
      case ji:
        return de = {}, k(de, mr, b), k(de, fo, m), k(de, ho, w), de;
      case ki:
        return we = {}, k(we, mr, y), k(we, fo, v), k(we, ho, x), we;
      default:
        return {};
    }
  }, ye = f.useMemo(function() {
    return le(L);
  }, [L]), pe = Py(L, !e, function(Z) {
    if (Z === mr) {
      var q = ye[mr];
      return q ? q(X()) : fh;
    }
    if (be in ye) {
      var se;
      A(((se = ye[be]) === null || se === void 0 ? void 0 : se.call(ye, X(), null)) || null);
    }
    return be === ho && (ie(X()), u > 0 && (clearTimeout(V.current), V.current = setTimeout(function() {
      Q({
        deadline: !0
      });
    }, u))), be === ih && W(), Ry;
  }), ge = ne(pe, 2), G = ge[0], be = ge[1], ve = hh(be);
  K.current = ve, dh(function() {
    P(t);
    var Z = j.current;
    j.current = !0;
    var q;
    !Z && t && s && (q = Ai), Z && t && i && (q = ji), (Z && !t && c || !Z && d && !t && c) && (q = ki);
    var se = le(q);
    q && (e || se[mr]) ? (T(q), G()) : T($n);
  }, [t]), yt(function() {
    // Cancel appear
    (L === Ai && !s || // Cancel enter
    L === ji && !i || // Cancel leave
    L === ki && !c) && T($n);
  }, [s, i, c]), yt(function() {
    return function() {
      j.current = !1, clearTimeout(V.current);
    };
  }, []);
  var _e = f.useRef(!1);
  yt(function() {
    D && (_e.current = !0), D !== void 0 && L === $n && ((_e.current || D) && (M == null || M(D)), _e.current = !0);
  }, [D, L]);
  var Le = z;
  return ye[mr] && be === fo && (Le = B({
    transition: "none"
  }, Le)), [L, be, Le, D ?? t];
}
function Ty(e) {
  var t = e;
  ke(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ f.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, l = o.removeOnLeave, c = l === void 0 ? !0 : l, u = o.forceRender, d = o.children, h = o.motionName, b = o.leavedClassName, y = o.eventProps, g = f.useContext(oh), m = g.motion, v = r(o, m), p = Ze(), w = Ze();
    function x() {
      try {
        return p.current instanceof HTMLElement ? p.current : Ki(w.current);
      } catch {
        return null;
      }
    }
    var E = Ny(v, s, x, o), C = ne(E, 4), S = C[0], M = C[1], O = C[2], $ = C[3], D = f.useRef($);
    $ && (D.current = !0);
    var P = f.useCallback(function(A) {
      p.current = A, rc(i, A);
    }, [i]), F, I = B(B({}, y), {}, {
      visible: s
    });
    if (!d)
      F = null;
    else if (S === $n)
      $ ? F = d(B({}, I), P) : !c && D.current && b ? F = d(B(B({}, I), {}, {
        className: b
      }), P) : u || !c && !b ? F = d(B(B({}, I), {}, {
        style: {
          display: "none"
        }
      }), P) : F = null;
    else {
      var L, T;
      M === mr ? T = "prepare" : hh(M) ? T = "active" : M === fo && (T = "start");
      var R = Vu(h, "".concat(S, "-").concat(T));
      F = d(B(B({}, I), {}, {
        className: ee(Vu(h, S), (L = {}, k(L, R, R && T), k(L, h, typeof h == "string"), L)),
        style: O
      }), P);
    }
    if (/* @__PURE__ */ f.isValidElement(F) && Co(F)) {
      var N = F, z = N.ref;
      z || (F = /* @__PURE__ */ f.cloneElement(F, {
        ref: P
      }));
    }
    return /* @__PURE__ */ f.createElement(wy, {
      ref: w
    }, F);
  });
  return n.displayName = "CSSMotion", n;
}
const tn = Ty(uh);
var ml = "add", gl = "keep", vl = "remove", Os = "removed";
function Iy(e) {
  var t;
  return e && ke(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, B(B({}, t), {}, {
    key: String(t.key)
  });
}
function pl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Iy);
}
function Fy() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = pl(e), a = pl(t);
  i.forEach(function(c) {
    for (var u = !1, d = n; d < o; d += 1) {
      var h = a[d];
      if (h.key === c.key) {
        n < d && (r = r.concat(a.slice(n, d).map(function(b) {
          return B(B({}, b), {}, {
            status: ml
          });
        })), n = d), r.push(B(B({}, h), {}, {
          status: gl
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(B(B({}, c), {}, {
      status: vl
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(c) {
    return B(B({}, c), {}, {
      status: ml
    });
  })));
  var s = {};
  r.forEach(function(c) {
    var u = c.key;
    s[u] = (s[u] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return l.forEach(function(c) {
    r = r.filter(function(u) {
      var d = u.key, h = u.status;
      return d !== c || h !== vl;
    }), r.forEach(function(u) {
      u.key === c && (u.status = gl);
    });
  }), r;
}
var Dy = ["component", "children", "onVisibleChanged", "onAllRemoved"], Ay = ["status"], jy = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function ky(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tn, r = /* @__PURE__ */ function(n) {
    $a(i, n);
    var o = Ma(i);
    function i() {
      var a;
      Tr(this, i);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return a = o.call.apply(o, [this].concat(l)), k(je(a), "state", {
        keyEntities: []
      }), k(je(a), "removeKey", function(u) {
        var d = a.state.keyEntities, h = d.map(function(b) {
          return b.key !== u ? b : B(B({}, b), {}, {
            status: Os
          });
        });
        return a.setState({
          keyEntities: h
        }), h.filter(function(b) {
          var y = b.status;
          return y !== Os;
        }).length;
      }), a;
    }
    return Ir(i, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, u = c.component, d = c.children, h = c.onVisibleChanged, b = c.onAllRemoved, y = Wt(c, Dy), g = u || f.Fragment, m = {};
        return jy.forEach(function(v) {
          m[v] = y[v], delete y[v];
        }), delete y.keys, /* @__PURE__ */ f.createElement(g, y, l.map(function(v, p) {
          var w = v.status, x = Wt(v, Ay), E = w === ml || w === gl;
          return /* @__PURE__ */ f.createElement(t, Ve({}, m, {
            key: x.key,
            visible: E,
            eventProps: x,
            onVisibleChanged: function(S) {
              if (h == null || h(S, {
                key: x.key
              }), !S) {
                var M = s.removeKey(x.key);
                M === 0 && b && b();
              }
            }
          }), function(C, S) {
            return d(B(B({}, C), {}, {
              index: p
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, u = l.keyEntities, d = pl(c), h = Fy(u, d);
        return {
          keyEntities: h.filter(function(b) {
            var y = u.find(function(g) {
              var m = g.key;
              return b.key === m;
            });
            return !(y && y.status === Os && b.status === vl);
          })
        };
      }
    }]), i;
  }(f.Component);
  return k(r, "defaultProps", {
    component: "div"
  }), r;
}
const Ly = ky(uh);
function zy(e) {
  const {
    children: t
  } = e, [, r] = vn(), {
    motion: n
  } = r, o = f.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ f.createElement(Sy, {
    motion: n
  }, t) : t;
}
const mh = /* @__PURE__ */ f.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return er("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (mh.displayName = "PropWarning");
const Vy = process.env.NODE_ENV !== "production" ? mh : () => null;
var Wy = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let yl = !1;
process.env.NODE_ENV;
const By = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], Hy = "ant";
let gh;
function Yy() {
  return gh || Hy;
}
function Gy(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Uy = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n
  } = e;
  t !== void 0 && (gh = t), n && Gy(n) && (process.env.NODE_ENV !== "production" && li(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), ny(Yy(), n));
}, qy = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    form: a,
    locale: s,
    componentSize: l,
    direction: c,
    space: u,
    virtual: d,
    dropdownMatchSelectWidth: h,
    popupMatchSelectWidth: b,
    popupOverflow: y,
    legacyLocale: g,
    parentContext: m,
    iconPrefixCls: v,
    theme: p,
    componentDisabled: w,
    segmented: x,
    statistic: E,
    spin: C,
    calendar: S,
    carousel: M,
    cascader: O,
    collapse: $,
    typography: D,
    checkbox: P,
    descriptions: F,
    divider: I,
    drawer: L,
    skeleton: T,
    steps: R,
    image: N,
    layout: z,
    list: A,
    mentions: j,
    modal: V,
    progress: X,
    result: K,
    slider: W,
    breadcrumb: Q,
    menu: re,
    pagination: oe,
    input: ie,
    empty: le,
    badge: ye,
    radio: pe,
    rate: ge,
    switch: G,
    transfer: be,
    avatar: ve,
    message: _e,
    tag: Le,
    table: Z,
    card: q,
    tabs: se,
    timeline: de,
    timePicker: we,
    upload: Ne,
    notification: Bt,
    tree: at,
    colorPicker: Ht,
    datePicker: Er,
    rangePicker: xt,
    flex: Ie,
    wave: xe,
    dropdown: gt,
    warning: $t
  } = e, yn = f.useCallback((me, Be) => {
    const {
      prefixCls: nt
    } = e;
    if (Be)
      return Be;
    const dt = nt || m.getPrefixCls("");
    return me ? `${dt}-${me}` : dt;
  }, [m.getPrefixCls, e.prefixCls]), Lt = v || m.iconPrefixCls || Zf, ut = r || m.csp;
  rh(Lt, ut);
  const Dt = yy(p, m.theme);
  process.env.NODE_ENV !== "production" && (yl = yl || !!Dt);
  const Ar = {
    csp: ut,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: s || g,
    direction: c,
    space: u,
    virtual: d,
    popupMatchSelectWidth: b ?? h,
    popupOverflow: y,
    getPrefixCls: yn,
    iconPrefixCls: Lt,
    theme: Dt,
    segmented: x,
    statistic: E,
    spin: C,
    calendar: S,
    carousel: M,
    cascader: O,
    collapse: $,
    typography: D,
    checkbox: P,
    descriptions: F,
    divider: I,
    drawer: L,
    skeleton: T,
    steps: R,
    image: N,
    input: ie,
    layout: z,
    list: A,
    mentions: j,
    modal: V,
    progress: X,
    result: K,
    slider: W,
    breadcrumb: Q,
    menu: re,
    pagination: oe,
    empty: le,
    badge: ye,
    radio: pe,
    rate: ge,
    switch: G,
    transfer: be,
    avatar: ve,
    message: _e,
    tag: Le,
    table: Z,
    card: q,
    tabs: se,
    timeline: de,
    timePicker: we,
    upload: Ne,
    notification: Bt,
    tree: at,
    colorPicker: Ht,
    datePicker: Er,
    rangePicker: xt,
    flex: Ie,
    wave: xe,
    dropdown: gt,
    warning: $t
  }, Ct = Object.assign({}, m);
  Object.keys(Ar).forEach((me) => {
    Ar[me] !== void 0 && (Ct[me] = Ar[me]);
  }), By.forEach((me) => {
    const Be = e[me];
    Be && (Ct[me] = Be);
  });
  const rt = tc(() => Ct, Ct, (me, Be) => {
    const nt = Object.keys(me), dt = Object.keys(Be);
    return nt.length !== dt.length || nt.some((Gt) => me[Gt] !== Be[Gt]);
  }), Yt = f.useMemo(() => ({
    prefixCls: Lt,
    csp: ut
  }), [Lt, ut]);
  let Xe = /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(Vy, {
    dropdownMatchSelectWidth: h
  }), t);
  const At = f.useMemo(() => {
    var me, Be, nt, dt;
    return uo(((me = Vn.Form) === null || me === void 0 ? void 0 : me.defaultValidateMessages) || {}, ((nt = (Be = rt.locale) === null || Be === void 0 ? void 0 : Be.Form) === null || nt === void 0 ? void 0 : nt.defaultValidateMessages) || {}, ((dt = rt.form) === null || dt === void 0 ? void 0 : dt.validateMessages) || {}, (a == null ? void 0 : a.validateMessages) || {});
  }, [rt, a == null ? void 0 : a.validateMessages]);
  Object.keys(At).length > 0 && (Xe = /* @__PURE__ */ f.createElement(zf.Provider, {
    value: At
  }, Xe)), s && (Xe = /* @__PURE__ */ f.createElement(x0, {
    locale: s,
    _ANT_MARK__: Wf
  }, Xe)), (Lt || ut) && (Xe = /* @__PURE__ */ f.createElement(uc.Provider, {
    value: Yt
  }, Xe)), l && (Xe = /* @__PURE__ */ f.createElement(oy, {
    size: l
  }, Xe)), Xe = /* @__PURE__ */ f.createElement(zy, null, Xe);
  const Ke = f.useMemo(() => {
    const me = Dt || {}, {
      algorithm: Be,
      token: nt,
      components: dt
    } = me, Gt = Wy(me, ["algorithm", "token", "components"]), Or = Be && (!Array.isArray(Be) || Be.length > 0) ? rl(Be) : qf, dr = {};
    Object.entries(dt || {}).forEach((bn) => {
      let [an, _r] = bn;
      const Mt = Object.assign({}, _r);
      "algorithm" in Mt && (Mt.algorithm === !0 ? Mt.theme = Or : (Array.isArray(Mt.algorithm) || typeof Mt.algorithm == "function") && (Mt.theme = rl(Mt.algorithm)), delete Mt.algorithm), dr[an] = Mt;
    });
    const vt = Object.assign(Object.assign({}, Qo), nt);
    return Object.assign(Object.assign({}, Gt), {
      theme: Or,
      token: vt,
      components: dr,
      override: Object.assign({
        override: vt
      }, dr)
    });
  }, [Dt]);
  return p && (Xe = /* @__PURE__ */ f.createElement(Kf.Provider, {
    value: Ke
  }, Xe)), rt.warning && (Xe = /* @__PURE__ */ f.createElement(Lf.Provider, {
    value: rt.warning
  }, Xe)), w !== void 0 && (Xe = /* @__PURE__ */ f.createElement(Qf, {
    disabled: w
  }, Xe)), /* @__PURE__ */ f.createElement(Ge.Provider, {
    value: rt
  }, Xe);
}, _o = (e) => {
  const t = f.useContext(Ge), r = f.useContext(fc);
  return /* @__PURE__ */ f.createElement(qy, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
_o.ConfigContext = Ge;
_o.SizeContext = ui;
_o.config = Uy;
_o.useConfig = iy;
Object.defineProperty(_o, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && li(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), ui)
});
process.env.NODE_ENV !== "production" && (_o.displayName = "ConfigProvider");
var Xy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Ky = Xy;
function vh(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Zy(e) {
  return vh(e) instanceof ShadowRoot;
}
function ha(e) {
  return Zy(e) ? vh(e) : null;
}
function Qy(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Jy(e, t) {
  it(e, "[@ant-design/icons] ".concat(t));
}
function Wu(e) {
  return ke(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ke(e.icon) === "object" || typeof e.icon == "function");
}
function Bu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[Qy(r)] = n;
    }
    return t;
  }, {});
}
function bl(e, t, r) {
  return r ? /* @__PURE__ */ Y.createElement(e.tag, B(B({
    key: t
  }, Bu(e.attrs)), r), (e.children || []).map(function(n, o) {
    return bl(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Y.createElement(e.tag, B({
    key: t
  }, Bu(e.attrs)), (e.children || []).map(function(n, o) {
    return bl(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function ph(e) {
  return Wn(e)[0];
}
function yh(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var eb = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, tb = function(t) {
  var r = mt(uc), n = r.csp, o = r.prefixCls, i = eb;
  o && (i = i.replace(/anticon/g, o)), yt(function() {
    var a = t.current, s = ha(a);
    wo(i, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, rb = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ho = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function nb(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Ho.primaryColor = t, Ho.secondaryColor = r || ph(t), Ho.calculated = !!r;
}
function ob() {
  return B({}, Ho);
}
var Ia = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, i = t.style, a = t.primaryColor, s = t.secondaryColor, l = Wt(t, rb), c = f.useRef(), u = Ho;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: s || ph(a)
  }), tb(c), Jy(Wu(r), "icon should be icon definiton, but got ".concat(r)), !Wu(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = B(B({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), bl(d.icon, "svg-".concat(d.name), B(B({
    className: n,
    onClick: o,
    style: i,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: c
  }));
};
Ia.displayName = "IconReact";
Ia.getTwoToneColors = ob;
Ia.setTwoToneColors = nb;
const gc = Ia;
function bh(e) {
  var t = yh(e), r = ne(t, 2), n = r[0], o = r[1];
  return gc.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function ib() {
  var e = gc.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var ab = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
bh(L0.primary);
var Fa = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var r, n = e.className, o = e.icon, i = e.spin, a = e.rotate, s = e.tabIndex, l = e.onClick, c = e.twoToneColor, u = Wt(e, ab), d = f.useContext(uc), h = d.prefixCls, b = h === void 0 ? "anticon" : h, y = d.rootClassName, g = ee(y, b, (r = {}, k(r, "".concat(b, "-").concat(o.name), !!o.name), k(r, "".concat(b, "-spin"), !!i || o.name === "loading"), r), n), m = s;
  m === void 0 && l && (m = -1);
  var v = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, p = yh(c), w = ne(p, 2), x = w[0], E = w[1];
  return /* @__PURE__ */ f.createElement("span", Ve({
    role: "img",
    "aria-label": o.name
  }, u, {
    ref: t,
    tabIndex: m,
    onClick: l,
    className: g
  }), /* @__PURE__ */ f.createElement(gc, {
    icon: o,
    primaryColor: x,
    secondaryColor: E,
    style: v
  }));
});
Fa.displayName = "AntdIcon";
Fa.getTwoToneColor = ib;
Fa.setTwoToneColor = bh;
const Tt = Fa;
var Sh = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: Ky
  }));
};
process.env.NODE_ENV !== "production" && (Sh.displayName = "CheckCircleFilled");
const sb = /* @__PURE__ */ f.forwardRef(Sh);
var lb = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const cb = lb;
var wh = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: cb
  }));
};
process.env.NODE_ENV !== "production" && (wh.displayName = "CloseCircleFilled");
const vc = /* @__PURE__ */ f.forwardRef(wh);
var ub = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
const db = ub;
var xh = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: db
  }));
};
process.env.NODE_ENV !== "production" && (xh.displayName = "CloseOutlined");
const fb = /* @__PURE__ */ f.forwardRef(xh);
var hb = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const mb = hb;
var Ch = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: mb
  }));
};
process.env.NODE_ENV !== "production" && (Ch.displayName = "ExclamationCircleFilled");
const gb = /* @__PURE__ */ f.forwardRef(Ch), {
  isValidElement: Da
} = f;
function Eh(e) {
  return e && Da(e) && e.type === f.Fragment;
}
function vb(e, t, r) {
  return Da(e) ? /* @__PURE__ */ f.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function hn(e, t) {
  return vb(e, e, t);
}
const Hu = (e) => typeof e == "object" && e != null && e.nodeType === 1, Yu = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", _s = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return Yu(r.overflowY, t) || Yu(r.overflowX, t) || ((n) => {
      const o = ((i) => {
        if (!i.ownerDocument || !i.ownerDocument.defaultView)
          return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(n);
      return !!o && (o.clientHeight < n.scrollHeight || o.clientWidth < n.scrollWidth);
    })(e);
  }
  return !1;
}, zi = (e, t, r, n, o, i, a, s) => i < e && a > t || i > e && a < t ? 0 : i <= e && s <= r || a >= t && s >= r ? i - e - n : a > t && s < r || i < e && s > r ? a - t + o : 0, pb = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, Gu = (e, t) => {
  var r, n, o, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: a, block: s, inline: l, boundary: c, skipOverflowHiddenElements: u } = t, d = typeof c == "function" ? c : (T) => T !== c;
  if (!Hu(e))
    throw new TypeError("Invalid target");
  const h = document.scrollingElement || document.documentElement, b = [];
  let y = e;
  for (; Hu(y) && d(y); ) {
    if (y = pb(y), y === h) {
      b.push(y);
      break;
    }
    y != null && y === document.body && _s(y) && !_s(document.documentElement) || y != null && _s(y, u) && b.push(y);
  }
  const g = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth, m = (i = (o = window.visualViewport) == null ? void 0 : o.height) != null ? i : innerHeight, { scrollX: v, scrollY: p } = window, { height: w, width: x, top: E, right: C, bottom: S, left: M } = e.getBoundingClientRect(), { top: O, right: $, bottom: D, left: P } = ((T) => {
    const R = window.getComputedStyle(T);
    return { top: parseFloat(R.scrollMarginTop) || 0, right: parseFloat(R.scrollMarginRight) || 0, bottom: parseFloat(R.scrollMarginBottom) || 0, left: parseFloat(R.scrollMarginLeft) || 0 };
  })(e);
  let F = s === "start" || s === "nearest" ? E - O : s === "end" ? S + D : E + w / 2 - O + D, I = l === "center" ? M + x / 2 - P + $ : l === "end" ? C + $ : M - P;
  const L = [];
  for (let T = 0; T < b.length; T++) {
    const R = b[T], { height: N, width: z, top: A, right: j, bottom: V, left: X } = R.getBoundingClientRect();
    if (a === "if-needed" && E >= 0 && M >= 0 && S <= m && C <= g && E >= A && S <= V && M >= X && C <= j)
      return L;
    const K = getComputedStyle(R), W = parseInt(K.borderLeftWidth, 10), Q = parseInt(K.borderTopWidth, 10), re = parseInt(K.borderRightWidth, 10), oe = parseInt(K.borderBottomWidth, 10);
    let ie = 0, le = 0;
    const ye = "offsetWidth" in R ? R.offsetWidth - R.clientWidth - W - re : 0, pe = "offsetHeight" in R ? R.offsetHeight - R.clientHeight - Q - oe : 0, ge = "offsetWidth" in R ? R.offsetWidth === 0 ? 0 : z / R.offsetWidth : 0, G = "offsetHeight" in R ? R.offsetHeight === 0 ? 0 : N / R.offsetHeight : 0;
    if (h === R)
      ie = s === "start" ? F : s === "end" ? F - m : s === "nearest" ? zi(p, p + m, m, Q, oe, p + F, p + F + w, w) : F - m / 2, le = l === "start" ? I : l === "center" ? I - g / 2 : l === "end" ? I - g : zi(v, v + g, g, W, re, v + I, v + I + x, x), ie = Math.max(0, ie + p), le = Math.max(0, le + v);
    else {
      ie = s === "start" ? F - A - Q : s === "end" ? F - V + oe + pe : s === "nearest" ? zi(A, V, N, Q, oe + pe, F, F + w, w) : F - (A + N / 2) + pe / 2, le = l === "start" ? I - X - W : l === "center" ? I - (X + z / 2) + ye / 2 : l === "end" ? I - j + re + ye : zi(X, j, z, W, re + ye, I, I + x, x);
      const { scrollLeft: be, scrollTop: ve } = R;
      ie = G === 0 ? 0 : Math.max(0, Math.min(ve + ie / G, R.scrollHeight - N / G + pe)), le = ge === 0 ? 0 : Math.max(0, Math.min(be + le / ge, R.scrollWidth - z / ge + ye)), F += ve - ie, I += be - le;
    }
    L.push({ el: R, top: ie, left: le });
  }
  return L;
}, yb = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function bb(e, t) {
  if (!e.isConnected || !((o) => {
    let i = o;
    for (; i && i.parentNode; ) {
      if (i.parentNode === document)
        return !0;
      i = i.parentNode instanceof ShadowRoot ? i.parentNode.host : i.parentNode;
    }
    return !1;
  })(e))
    return;
  const r = ((o) => {
    const i = window.getComputedStyle(o);
    return { top: parseFloat(i.scrollMarginTop) || 0, right: parseFloat(i.scrollMarginRight) || 0, bottom: parseFloat(i.scrollMarginBottom) || 0, left: parseFloat(i.scrollMarginLeft) || 0 };
  })(e);
  if (((o) => typeof o == "object" && typeof o.behavior == "function")(t))
    return t.behavior(Gu(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: o, top: i, left: a } of Gu(e, yb(t))) {
    const s = i - r.top + r.bottom, l = a - r.left + r.right;
    o.scroll({ top: s, left: l, behavior: n });
  }
}
function Sl(e) {
  return e != null && e === e.window;
}
function Oh(e, t) {
  var r, n;
  if (typeof window > "u")
    return 0;
  const o = t ? "scrollTop" : "scrollLeft";
  let i = 0;
  return Sl(e) ? i = e[t ? "pageYOffset" : "pageXOffset"] : e instanceof Document ? i = e.documentElement[o] : (e instanceof HTMLElement || e) && (i = e[o]), e && !Sl(e) && typeof i != "number" && (i = (n = ((r = e.ownerDocument) !== null && r !== void 0 ? r : e).documentElement) === null || n === void 0 ? void 0 : n[o]), i;
}
function Sb(e, t, r, n) {
  const o = r - t;
  return e /= n / 2, e < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t;
}
function wb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    getContainer: r = () => window,
    callback: n,
    duration: o = 450
  } = t, i = r(), a = Oh(i, !0), s = Date.now(), l = () => {
    const u = Date.now() - s, d = Sb(u > o ? o : u, a, e, o);
    Sl(i) ? i.scrollTo(window.pageXOffset, d) : i instanceof Document || i.constructor.name === "HTMLDocument" ? i.documentElement.scrollTop = d : i.scrollTop = d, u < o ? Ot(l) : typeof n == "function" && n();
  };
  Ot(l);
}
var xb = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Cb = xb;
var _h = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: Cb
  }));
};
process.env.NODE_ENV !== "production" && (_h.displayName = "LoadingOutlined");
const pc = /* @__PURE__ */ f.forwardRef(_h), $h = /* @__PURE__ */ Y.createContext(void 0);
process.env.NODE_ENV !== "production" && ($h.displayName = "zIndexContext");
const Mh = $h, Mn = 100, Eb = 10, Ob = Mn * Eb, Rh = {
  Modal: Mn,
  Drawer: Mn,
  Popover: Mn,
  Popconfirm: Mn,
  Tooltip: Mn,
  Tour: Mn
}, _b = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50
};
function $b(e) {
  return e in Rh;
}
function Mb(e, t) {
  const [, r] = vn(), n = Y.useContext(Mh), o = $b(e);
  let i = n ?? 0;
  return o ? (i += // Use preset token zIndex by default but not stack when has parent container
  (n ? 0 : r.zIndexPopupBase) + // Container offset
  Rh[e], i = Math.min(i, r.zIndexPopupBase + Ob)) : i += _b[e], [n === void 0 ? t : i, i];
}
function kt() {
  kt = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(T, R, N) {
    T[R] = N.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", l = i.toStringTag || "@@toStringTag";
  function c(T, R, N) {
    return Object.defineProperty(T, R, {
      value: N,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), T[R];
  }
  try {
    c({}, "");
  } catch {
    c = function(N, z, A) {
      return N[z] = A;
    };
  }
  function u(T, R, N, z) {
    var A = R && R.prototype instanceof v ? R : v, j = Object.create(A.prototype), V = new I(z || []);
    return o(j, "_invoke", {
      value: $(T, N, V)
    }), j;
  }
  function d(T, R, N) {
    try {
      return {
        type: "normal",
        arg: T.call(R, N)
      };
    } catch (z) {
      return {
        type: "throw",
        arg: z
      };
    }
  }
  t.wrap = u;
  var h = "suspendedStart", b = "suspendedYield", y = "executing", g = "completed", m = {};
  function v() {
  }
  function p() {
  }
  function w() {
  }
  var x = {};
  c(x, a, function() {
    return this;
  });
  var E = Object.getPrototypeOf, C = E && E(E(L([])));
  C && C !== r && n.call(C, a) && (x = C);
  var S = w.prototype = v.prototype = Object.create(x);
  function M(T) {
    ["next", "throw", "return"].forEach(function(R) {
      c(T, R, function(N) {
        return this._invoke(R, N);
      });
    });
  }
  function O(T, R) {
    function N(A, j, V, X) {
      var K = d(T[A], T, j);
      if (K.type !== "throw") {
        var W = K.arg, Q = W.value;
        return Q && ke(Q) == "object" && n.call(Q, "__await") ? R.resolve(Q.__await).then(function(re) {
          N("next", re, V, X);
        }, function(re) {
          N("throw", re, V, X);
        }) : R.resolve(Q).then(function(re) {
          W.value = re, V(W);
        }, function(re) {
          return N("throw", re, V, X);
        });
      }
      X(K.arg);
    }
    var z;
    o(this, "_invoke", {
      value: function(j, V) {
        function X() {
          return new R(function(K, W) {
            N(j, V, K, W);
          });
        }
        return z = z ? z.then(X, X) : X();
      }
    });
  }
  function $(T, R, N) {
    var z = h;
    return function(A, j) {
      if (z === y)
        throw new Error("Generator is already running");
      if (z === g) {
        if (A === "throw")
          throw j;
        return {
          value: e,
          done: !0
        };
      }
      for (N.method = A, N.arg = j; ; ) {
        var V = N.delegate;
        if (V) {
          var X = D(V, N);
          if (X) {
            if (X === m)
              continue;
            return X;
          }
        }
        if (N.method === "next")
          N.sent = N._sent = N.arg;
        else if (N.method === "throw") {
          if (z === h)
            throw z = g, N.arg;
          N.dispatchException(N.arg);
        } else
          N.method === "return" && N.abrupt("return", N.arg);
        z = y;
        var K = d(T, R, N);
        if (K.type === "normal") {
          if (z = N.done ? g : b, K.arg === m)
            continue;
          return {
            value: K.arg,
            done: N.done
          };
        }
        K.type === "throw" && (z = g, N.method = "throw", N.arg = K.arg);
      }
    };
  }
  function D(T, R) {
    var N = R.method, z = T.iterator[N];
    if (z === e)
      return R.delegate = null, N === "throw" && T.iterator.return && (R.method = "return", R.arg = e, D(T, R), R.method === "throw") || N !== "return" && (R.method = "throw", R.arg = new TypeError("The iterator does not provide a '" + N + "' method")), m;
    var A = d(z, T.iterator, R.arg);
    if (A.type === "throw")
      return R.method = "throw", R.arg = A.arg, R.delegate = null, m;
    var j = A.arg;
    return j ? j.done ? (R[T.resultName] = j.value, R.next = T.nextLoc, R.method !== "return" && (R.method = "next", R.arg = e), R.delegate = null, m) : j : (R.method = "throw", R.arg = new TypeError("iterator result is not an object"), R.delegate = null, m);
  }
  function P(T) {
    var R = {
      tryLoc: T[0]
    };
    1 in T && (R.catchLoc = T[1]), 2 in T && (R.finallyLoc = T[2], R.afterLoc = T[3]), this.tryEntries.push(R);
  }
  function F(T) {
    var R = T.completion || {};
    R.type = "normal", delete R.arg, T.completion = R;
  }
  function I(T) {
    this.tryEntries = [{
      tryLoc: "root"
    }], T.forEach(P, this), this.reset(!0);
  }
  function L(T) {
    if (T || T === "") {
      var R = T[a];
      if (R)
        return R.call(T);
      if (typeof T.next == "function")
        return T;
      if (!isNaN(T.length)) {
        var N = -1, z = function A() {
          for (; ++N < T.length; )
            if (n.call(T, N))
              return A.value = T[N], A.done = !1, A;
          return A.value = e, A.done = !0, A;
        };
        return z.next = z;
      }
    }
    throw new TypeError(ke(T) + " is not iterable");
  }
  return p.prototype = w, o(S, "constructor", {
    value: w,
    configurable: !0
  }), o(w, "constructor", {
    value: p,
    configurable: !0
  }), p.displayName = c(w, l, "GeneratorFunction"), t.isGeneratorFunction = function(T) {
    var R = typeof T == "function" && T.constructor;
    return !!R && (R === p || (R.displayName || R.name) === "GeneratorFunction");
  }, t.mark = function(T) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(T, w) : (T.__proto__ = w, c(T, l, "GeneratorFunction")), T.prototype = Object.create(S), T;
  }, t.awrap = function(T) {
    return {
      __await: T
    };
  }, M(O.prototype), c(O.prototype, s, function() {
    return this;
  }), t.AsyncIterator = O, t.async = function(T, R, N, z, A) {
    A === void 0 && (A = Promise);
    var j = new O(u(T, R, N, z), A);
    return t.isGeneratorFunction(R) ? j : j.next().then(function(V) {
      return V.done ? V.value : j.next();
    });
  }, M(S), c(S, l, "Generator"), c(S, a, function() {
    return this;
  }), c(S, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(T) {
    var R = Object(T), N = [];
    for (var z in R)
      N.push(z);
    return N.reverse(), function A() {
      for (; N.length; ) {
        var j = N.pop();
        if (j in R)
          return A.value = j, A.done = !1, A;
      }
      return A.done = !0, A;
    };
  }, t.values = L, I.prototype = {
    constructor: I,
    reset: function(R) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(F), !R)
        for (var N in this)
          N.charAt(0) === "t" && n.call(this, N) && !isNaN(+N.slice(1)) && (this[N] = e);
    },
    stop: function() {
      this.done = !0;
      var R = this.tryEntries[0].completion;
      if (R.type === "throw")
        throw R.arg;
      return this.rval;
    },
    dispatchException: function(R) {
      if (this.done)
        throw R;
      var N = this;
      function z(W, Q) {
        return V.type = "throw", V.arg = R, N.next = W, Q && (N.method = "next", N.arg = e), !!Q;
      }
      for (var A = this.tryEntries.length - 1; A >= 0; --A) {
        var j = this.tryEntries[A], V = j.completion;
        if (j.tryLoc === "root")
          return z("end");
        if (j.tryLoc <= this.prev) {
          var X = n.call(j, "catchLoc"), K = n.call(j, "finallyLoc");
          if (X && K) {
            if (this.prev < j.catchLoc)
              return z(j.catchLoc, !0);
            if (this.prev < j.finallyLoc)
              return z(j.finallyLoc);
          } else if (X) {
            if (this.prev < j.catchLoc)
              return z(j.catchLoc, !0);
          } else {
            if (!K)
              throw new Error("try statement without catch or finally");
            if (this.prev < j.finallyLoc)
              return z(j.finallyLoc);
          }
        }
      }
    },
    abrupt: function(R, N) {
      for (var z = this.tryEntries.length - 1; z >= 0; --z) {
        var A = this.tryEntries[z];
        if (A.tryLoc <= this.prev && n.call(A, "finallyLoc") && this.prev < A.finallyLoc) {
          var j = A;
          break;
        }
      }
      j && (R === "break" || R === "continue") && j.tryLoc <= N && N <= j.finallyLoc && (j = null);
      var V = j ? j.completion : {};
      return V.type = R, V.arg = N, j ? (this.method = "next", this.next = j.finallyLoc, m) : this.complete(V);
    },
    complete: function(R, N) {
      if (R.type === "throw")
        throw R.arg;
      return R.type === "break" || R.type === "continue" ? this.next = R.arg : R.type === "return" ? (this.rval = this.arg = R.arg, this.method = "return", this.next = "end") : R.type === "normal" && N && (this.next = N), m;
    },
    finish: function(R) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var z = this.tryEntries[N];
        if (z.finallyLoc === R)
          return this.complete(z.completion, z.afterLoc), F(z), m;
      }
    },
    catch: function(R) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var z = this.tryEntries[N];
        if (z.tryLoc === R) {
          var A = z.completion;
          if (A.type === "throw") {
            var j = A.arg;
            F(z);
          }
          return j;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(R, N, z) {
      return this.delegate = {
        iterator: L(R),
        resultName: N,
        nextLoc: z
      }, this.method === "next" && (this.arg = e), m;
    }
  }, t;
}
function Uu(e, t, r, n, o, i, a) {
  try {
    var s = e[i](a), l = s.value;
  } catch (c) {
    r(c);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(n, o);
}
function Hn(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(l) {
        Uu(i, n, o, a, s, "next", l);
      }
      function s(l) {
        Uu(i, n, o, a, s, "throw", l);
      }
      a(void 0);
    });
  };
}
var fi = B({}, sv), Rb = fi.version, Pb = fi.render, Nb = fi.unmountComponentAtNode, Aa;
try {
  var Tb = Number((Rb || "").split(".")[0]);
  Tb >= 18 && (Aa = fi.createRoot);
} catch {
}
function qu(e) {
  var t = fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ke(t) === "object" && (t.usingClientEntryPoint = e);
}
var ma = "__rc_react_root__";
function Ib(e, t) {
  qu(!0);
  var r = t[ma] || Aa(t);
  qu(!1), r.render(e), t[ma] = r;
}
function Fb(e, t) {
  Pb(e, t);
}
function Db(e, t) {
  if (Aa) {
    Ib(e, t);
    return;
  }
  Fb(e, t);
}
function Ab(e) {
  return wl.apply(this, arguments);
}
function wl() {
  return wl = Hn(/* @__PURE__ */ kt().mark(function e(t) {
    return kt().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var o;
              (o = t[ma]) === null || o === void 0 || o.unmount(), delete t[ma];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), wl.apply(this, arguments);
}
function jb(e) {
  Nb(e);
}
function kb(e) {
  return xl.apply(this, arguments);
}
function xl() {
  return xl = Hn(/* @__PURE__ */ kt().mark(function e(t) {
    return kt().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (Aa === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", Ab(t));
          case 2:
            jb(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), xl.apply(this, arguments);
}
const $s = () => ({
  height: 0,
  opacity: 0
}), Xu = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, Lb = (e) => ({
  height: e ? e.offsetHeight : 0
}), Ms = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", zb = function() {
  return {
    motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"}-motion-collapse`,
    onAppearStart: $s,
    onEnterStart: $s,
    onAppearActive: Xu,
    onEnterActive: Xu,
    onLeaveStart: Lb,
    onLeaveActive: $s,
    onAppearEnd: Ms,
    onEnterEnd: Ms,
    onLeaveEnd: Ms,
    motionDeadline: 500
  };
}, Vb = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, Ku = zb, yc = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, a = o.height;
      if (i || a)
        return !0;
    }
  }
  return !1;
}, Wb = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow 0.3s ${e.motionEaseInOut}`, `opacity 0.35s ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Bb = lr("Wave", (e) => [Wb(e)]);
function Hb(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Rs(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Hb(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Yb(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Rs(t) ? t : Rs(r) ? r : Rs(n) ? n : null;
}
const Ph = "ant-wave-target";
function Ps(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Gb = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, o = f.useRef(null), [i, a] = f.useState(null), [s, l] = f.useState([]), [c, u] = f.useState(0), [d, h] = f.useState(0), [b, y] = f.useState(0), [g, m] = f.useState(0), [v, p] = f.useState(!1), w = {
    left: c,
    top: d,
    width: b,
    height: g,
    borderRadius: s.map((C) => `${C}px`).join(" ")
  };
  i && (w["--wave-color"] = i);
  function x() {
    const C = getComputedStyle(r);
    a(Yb(r));
    const S = C.position === "static", {
      borderLeftWidth: M,
      borderTopWidth: O
    } = C;
    u(S ? r.offsetLeft : Ps(-parseFloat(M))), h(S ? r.offsetTop : Ps(-parseFloat(O))), y(r.offsetWidth), m(r.offsetHeight);
    const {
      borderTopLeftRadius: $,
      borderTopRightRadius: D,
      borderBottomLeftRadius: P,
      borderBottomRightRadius: F
    } = C;
    l([$, D, F, P].map((I) => Ps(parseFloat(I))));
  }
  if (f.useEffect(() => {
    if (r) {
      const C = Ot(() => {
        x(), p(!0);
      });
      let S;
      return typeof ResizeObserver < "u" && (S = new ResizeObserver(x), S.observe(r)), () => {
        Ot.cancel(C), S == null || S.disconnect();
      };
    }
  }, []), !v)
    return null;
  const E = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(Ph));
  return /* @__PURE__ */ f.createElement(tn, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (C, S) => {
      var M;
      if (S.deadline || S.propertyName === "opacity") {
        const O = (M = o.current) === null || M === void 0 ? void 0 : M.parentElement;
        kb(O).then(() => {
          O == null || O.remove();
        });
      }
      return !1;
    }
  }, (C) => {
    let {
      className: S
    } = C;
    return /* @__PURE__ */ f.createElement("div", {
      ref: o,
      className: ee(t, {
        "wave-quick": E
      }, S),
      style: w
    });
  });
}, Ub = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild), Db(/* @__PURE__ */ f.createElement(Gb, Object.assign({}, t, {
    target: e
  })), o);
}, qb = Ub;
function Xb(e, t, r) {
  const {
    wave: n
  } = f.useContext(Ge), [, o, i] = vn(), a = Mr((c) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const d = u.querySelector(`.${Ph}`) || u, {
      showEffect: h
    } = n || {};
    (h || qb)(d, {
      className: t,
      token: o,
      component: r,
      event: c,
      hashId: i
    });
  }), s = f.useRef();
  return (c) => {
    Ot.cancel(s.current), s.current = Ot(() => {
      a(c);
    });
  };
}
const Nh = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = mt(Ge), i = Ze(null), a = o("wave"), [, s] = Bb(a), l = Xb(i, ee(a, s), n);
  if (Y.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const d = (h) => {
      !yc(h.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || l(h);
    };
    return u.addEventListener("click", d, !0), () => {
      u.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ Y.isValidElement(t))
    return t ?? null;
  const c = Co(t) ? gn(t.ref, i) : i;
  return hn(t, {
    ref: c
  });
};
process.env.NODE_ENV !== "production" && (Nh.displayName = "Wave");
const Kb = Nh, Zb = (e) => {
  const t = Y.useContext(ui);
  return Y.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, $o = Zb, Qb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, Jb = Qb, e1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-item:empty`]: {
        display: "none"
      }
    }
  };
}, t1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-gap-row-small": {
        rowGap: e.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: e.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: e.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: e.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: e.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: e.spaceGapLargeSize
      }
    }
  };
}, Th = lr("Space", (e) => {
  const t = _t(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [e1(t), t1(t), Jb(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var Ih = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const ja = /* @__PURE__ */ f.createContext(null), bc = (e, t) => {
  const r = f.useContext(ja), n = f.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = r, s = o === "vertical" ? "-vertical-" : "-";
    return ee(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: i,
      [`${e}-compact${s}last-item`]: a,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
}, Cl = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ f.createElement(ja.Provider, {
    value: null
  }, t);
}, r1 = (e) => {
  var {
    children: t
  } = e, r = Ih(e, ["children"]);
  return /* @__PURE__ */ f.createElement(ja.Provider, {
    value: r
  }, t);
}, n1 = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = f.useContext(Ge), {
    size: n,
    direction: o,
    block: i,
    prefixCls: a,
    className: s,
    rootClassName: l,
    children: c
  } = e, u = Ih(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = $o((w) => n ?? w), h = t("space-compact", a), [b, y] = Th(h), g = ee(h, y, {
    [`${h}-rtl`]: r === "rtl",
    [`${h}-block`]: i,
    [`${h}-vertical`]: o === "vertical"
  }, s, l), m = f.useContext(ja), v = zn(c), p = f.useMemo(() => v.map((w, x) => {
    const E = w && w.key || `${h}-item-${x}`;
    return /* @__PURE__ */ f.createElement(r1, {
      key: E,
      compactSize: d,
      compactDirection: o,
      isFirstItem: x === 0 && (!m || (m == null ? void 0 : m.isFirstItem)),
      isLastItem: x === v.length - 1 && (!m || (m == null ? void 0 : m.isLastItem))
    }, w);
  }), [n, v, m]);
  return v.length === 0 ? null : b(/* @__PURE__ */ f.createElement("div", Object.assign({
    className: g
  }, u), p));
}, o1 = n1;
var i1 = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Fh = /* @__PURE__ */ f.createContext(void 0), a1 = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = f.useContext(Ge), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = i1(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = vn();
  let c = "";
  switch (o) {
    case "large":
      c = "lg";
      break;
    case "small":
      c = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const d = er("Button.Group");
    process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = ee(s, {
    [`${s}-${c}`]: c,
    [`${s}-rtl`]: r === "rtl"
  }, i, l);
  return /* @__PURE__ */ f.createElement(Fh.Provider, {
    value: o
  }, /* @__PURE__ */ f.createElement("div", Object.assign({}, a, {
    className: u
  })));
}, s1 = a1, Zu = /^[\u4e00-\u9fa5]{2}$/, El = Zu.test.bind(Zu);
function Qu(e) {
  return typeof e == "string";
}
function Vi(e) {
  return e === "text" || e === "link";
}
function l1(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Qu(e.type) && El(e.props.children) ? hn(e, {
    children: e.props.children.split("").join(r)
  }) : Qu(e) ? El(e) ? /* @__PURE__ */ Y.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ Y.createElement("span", null, e) : Eh(e) ? /* @__PURE__ */ Y.createElement("span", null, e) : e;
}
function c1(e, t) {
  let r = !1;
  const n = [];
  return Y.Children.forEach(e, (o) => {
    const i = typeof o, a = i === "string" || i === "number";
    if (r && a) {
      const s = n.length - 1, l = n[s];
      n[s] = `${l}${o}`;
    } else
      n.push(o);
    r = a;
  }), Y.Children.map(n, (o) => l1(o, t));
}
const u1 = /* @__PURE__ */ mn((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: i
  } = e, a = ee(`${i}-icon`, r);
  return /* @__PURE__ */ Y.createElement("span", {
    ref: t,
    className: a,
    style: n
  }, o);
}), Dh = u1, Ju = /* @__PURE__ */ mn((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: i
  } = e;
  const a = ee(`${r}-loading-icon`, n);
  return /* @__PURE__ */ Y.createElement(Dh, {
    prefixCls: r,
    className: a,
    style: o,
    ref: t
  }, /* @__PURE__ */ Y.createElement(pc, {
    className: i
  }));
}), Ns = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Ts = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), d1 = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: i
  } = e, a = !!r;
  return n ? /* @__PURE__ */ Y.createElement(Ju, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ Y.createElement(tn, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: a,
    removeOnLeave: !0,
    onAppearStart: Ns,
    onAppearActive: Ts,
    onEnterStart: Ns,
    onEnterActive: Ts,
    onLeaveStart: Ts,
    onLeaveActive: Ns
  }, (s, l) => {
    let {
      className: c,
      style: u
    } = s;
    return /* @__PURE__ */ Y.createElement(Ju, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, i), u),
      ref: l,
      iconClassName: c
    });
  });
}, f1 = d1, ed = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), h1 = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: o,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -n,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      ed(`${t}-primary`, o),
      ed(`${t}-danger`, i)
    ]
  };
}, m1 = h1, g1 = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: e.lineHeight,
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${r} + span, > span + ${r}`]: {
        marginInlineStart: e.marginXS
      },
      [`&:not(${t}-icon-only) > ${t}-icon`]: {
        [`&${t}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: e.marginXS
        }
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, my(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -e.lineWidth,
            insetInlineStart: -e.lineWidth,
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${e.lineWidth * 2}px)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${e.lineWidth * 2}px)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Kr = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), v1 = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), p1 = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), y1 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Jo = (e, t, r, n, o, i, a, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    backgroundColor: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, Kr(e, Object.assign({
    backgroundColor: t
  }, a), Object.assign({
    backgroundColor: t
  }, s))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: i || void 0
    }
  })
}), Sc = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, y1(e))
}), Ah = (e) => Object.assign({}, Sc(e)), ga = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), jh = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ah(e)), {
  backgroundColor: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), Kr(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Jo(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Kr(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Jo(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Sc(e))
}), b1 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ah(e)), {
  color: e.primaryColor,
  backgroundColor: e.colorPrimary,
  boxShadow: e.primaryShadow
}), Kr(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), Jo(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: e.colorError,
    boxShadow: e.dangerShadow,
    color: e.dangerColor
  }, Kr(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), Jo(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Sc(e))
}), S1 = (e) => Object.assign(Object.assign({}, jh(e)), {
  borderStyle: "dashed"
}), w1 = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Kr(e.componentCls, {
  color: e.colorLinkHover,
  backgroundColor: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), ga(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Kr(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), ga(e))
}), x1 = (e) => Object.assign(Object.assign(Object.assign({}, Kr(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.textHoverBg
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), ga(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, ga(e)), Kr(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), C1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: jh(e),
    [`${t}-primary`]: b1(e),
    [`${t}-dashed`]: S1(e),
    [`${t}-link`]: w1(e),
    [`${t}-text`]: x1(e),
    [`${t}-ghost`]: Jo(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, wc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    lineHeight: i,
    lineWidth: a,
    borderRadius: s,
    buttonPaddingHorizontal: l,
    iconCls: c
  } = e, u = Math.max(0, (n - o * i) / 2 - a), d = `${r}-icon-only`;
  return [
    // Size
    {
      [`${r}${t}`]: {
        fontSize: o,
        height: n,
        padding: `${u}px ${l}px`,
        borderRadius: s,
        [`&${d}`]: {
          width: n,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${r}-round`]: {
            width: "auto"
          },
          [c]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${r}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${r}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: v1(e)
    },
    {
      [`${r}${r}-round${t}`]: p1(e)
    }
  ];
}, E1 = (e) => wc(_t(e, {
  fontSize: e.contentFontSize
})), O1 = (e) => {
  const t = _t(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return wc(t, `${e.componentCls}-sm`);
}, _1 = (e) => {
  const t = _t(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return wc(t, `${e.componentCls}-lg`);
}, $1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, kh = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r
  } = e;
  return _t(e, {
    buttonPaddingHorizontal: t,
    buttonIconOnlyFontSize: r
  });
}, Lh = (e) => ({
  fontWeight: 400,
  defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
  primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
  dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
  primaryColor: e.colorTextLightSolid,
  dangerColor: e.colorTextLightSolid,
  borderColorDisabled: e.colorBorder,
  defaultGhostColor: e.colorBgContainer,
  ghostBg: "transparent",
  defaultGhostBorderColor: e.colorBgContainer,
  paddingInline: e.paddingContentHorizontal - e.lineWidth,
  paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
  paddingInlineSM: 8 - e.lineWidth,
  onlyIconSize: e.fontSizeLG,
  onlyIconSizeSM: e.fontSizeLG - 2,
  onlyIconSizeLG: e.fontSizeLG + 2,
  groupBorderColor: e.colorPrimaryHover,
  linkHoverBg: "transparent",
  textHoverBg: e.colorBgTextHover,
  defaultColor: e.colorText,
  defaultBg: e.colorBgContainer,
  defaultBorderColor: e.colorBorder,
  defaultBorderColorDisabled: e.colorBorder,
  contentFontSize: e.fontSize,
  contentFontSizeSM: e.fontSize,
  contentFontSizeLG: e.fontSizeLG
}), M1 = lr("Button", (e) => {
  const t = kh(e);
  return [
    // Shared
    g1(t),
    // Size
    O1(t),
    E1(t),
    _1(t),
    // Block
    $1(t),
    // Group (type, ghost, danger, loading)
    C1(t),
    // Button Group
    m1(t)
  ];
}, Lh);
function R1(e, t, r) {
  const {
    focusElCls: n,
    focus: o,
    borderElCls: i
  } = r, a = i ? "> *" : "", s = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function P1(e, t, r) {
  const {
    borderElCls: n
  } = r, o = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function zh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, R1(e, n, t)), P1(r, n, t))
  };
}
function N1(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function T1(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function I1(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, N1(e, t)), T1(e.componentCls, t))
  };
}
const F1 = nh(["Button", "compact"], (e) => {
  const t = kh(e);
  return [
    // Space Compact
    zh(t),
    I1(t)
  ];
}, Lh);
var D1 = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function A1(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const j1 = (e, t) => {
  var r, n;
  const {
    loading: o = !1,
    prefixCls: i,
    type: a = "default",
    danger: s,
    shape: l = "default",
    size: c,
    styles: u,
    disabled: d,
    className: h,
    rootClassName: b,
    children: y,
    icon: g,
    ghost: m = !1,
    block: v = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: p = "button",
    classNames: w,
    style: x = {}
  } = e, E = D1(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: C,
    autoInsertSpaceInButton: S,
    direction: M,
    button: O
  } = mt(Ge), $ = C("btn", i), [D, P] = M1($), F = mt(ci), I = d ?? F, L = mt(Fh), T = br(() => A1(o), [o]), [R, N] = pr(T.loading), [z, A] = pr(!1), V = gn(t, /* @__PURE__ */ iv()), X = ov.count(y) === 1 && !g && !Vi(a);
  yt(() => {
    let q = null;
    T.delay > 0 ? q = setTimeout(() => {
      q = null, N(!0);
    }, T.delay) : N(T.loading);
    function se() {
      q && (clearTimeout(q), q = null);
    }
    return se;
  }, [T]), yt(() => {
    if (!V || !V.current || S === !1)
      return;
    const q = V.current.textContent;
    X && El(q) ? z || A(!0) : z && A(!1);
  }, [V]);
  const K = (q) => {
    const {
      onClick: se
    } = e;
    if (R || I) {
      q.preventDefault();
      return;
    }
    se == null || se(q);
  };
  if (process.env.NODE_ENV !== "production") {
    const q = er("Button");
    process.env.NODE_ENV !== "production" && q(!(typeof g == "string" && g.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${g}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && q(!(m && Vi(a)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const W = S !== !1, {
    compactSize: Q,
    compactItemClassnames: re
  } = bc($, M), oe = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ie = $o((q) => {
    var se, de;
    return (de = (se = c ?? Q) !== null && se !== void 0 ? se : L) !== null && de !== void 0 ? de : q;
  }), le = ie && oe[ie] || "", ye = R ? "loading" : g, pe = Eo(E, ["navigate"]), ge = ee($, P, {
    [`${$}-${l}`]: l !== "default" && l,
    [`${$}-${a}`]: a,
    [`${$}-${le}`]: le,
    [`${$}-icon-only`]: !y && y !== 0 && !!ye,
    [`${$}-background-ghost`]: m && !Vi(a),
    [`${$}-loading`]: R,
    [`${$}-two-chinese-chars`]: z && W && !R,
    [`${$}-block`]: v,
    [`${$}-dangerous`]: !!s,
    [`${$}-rtl`]: M === "rtl"
  }, re, h, b, O == null ? void 0 : O.className), G = Object.assign(Object.assign({}, O == null ? void 0 : O.style), x), be = ee(w == null ? void 0 : w.icon, (r = O == null ? void 0 : O.classNames) === null || r === void 0 ? void 0 : r.icon), ve = Object.assign(Object.assign({}, (u == null ? void 0 : u.icon) || {}), ((n = O == null ? void 0 : O.styles) === null || n === void 0 ? void 0 : n.icon) || {}), _e = g && !R ? /* @__PURE__ */ Y.createElement(Dh, {
    prefixCls: $,
    className: be,
    style: ve
  }, g) : /* @__PURE__ */ Y.createElement(f1, {
    existIcon: !!g,
    prefixCls: $,
    loading: !!R
  }), Le = y || y === 0 ? c1(y, X && W) : null;
  if (pe.href !== void 0)
    return D(/* @__PURE__ */ Y.createElement("a", Object.assign({}, pe, {
      className: ee(ge, {
        [`${$}-disabled`]: I
      }),
      style: G,
      onClick: K,
      ref: V,
      tabIndex: I ? -1 : 0
    }), _e, Le));
  let Z = /* @__PURE__ */ Y.createElement("button", Object.assign({}, E, {
    type: p,
    className: ge,
    style: G,
    onClick: K,
    disabled: I,
    ref: V
  }), _e, Le, re && /* @__PURE__ */ Y.createElement(F1, {
    key: "compact",
    prefixCls: $
  }));
  return Vi(a) || (Z = /* @__PURE__ */ Y.createElement(Kb, {
    component: "Button",
    disabled: !!R
  }, Z)), D(Z);
}, ka = /* @__PURE__ */ mn(j1);
process.env.NODE_ENV !== "production" && (ka.displayName = "Button");
ka.Group = s1;
ka.__ANT_BUTTON = !0;
const k1 = ka;
var Vh = /* @__PURE__ */ f.createContext(null), td = [];
function L1(e, t) {
  var r = f.useState(function() {
    if (!jt())
      return null;
    var y = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && y.setAttribute("data-debug", t), y;
  }), n = ne(r, 1), o = n[0], i = f.useRef(!1), a = f.useContext(Vh), s = f.useState(td), l = ne(s, 2), c = l[0], u = l[1], d = a || (i.current ? void 0 : function(y) {
    u(function(g) {
      var m = [y].concat(ue(g));
      return m;
    });
  });
  function h() {
    o.parentElement || document.body.appendChild(o), i.current = !0;
  }
  function b() {
    var y;
    (y = o.parentElement) === null || y === void 0 || y.removeChild(o), i.current = !1;
  }
  return Et(function() {
    return e ? a ? a(h) : h() : b(), b;
  }, [e]), Et(function() {
    c.length && (c.forEach(function(y) {
      return y();
    }), u(td));
  }, [c]), [o, d];
}
var Is;
function z1(e) {
  if (typeof document > "u")
    return 0;
  if (e || Is === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var r = document.createElement("div"), n = r.style;
    n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", r.appendChild(t), document.body.appendChild(r);
    var o = t.offsetWidth;
    r.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = r.clientWidth), document.body.removeChild(r), Is = o - i;
  }
  return Is;
}
function rd(e) {
  var t = e.match(/^(.*)px$/), r = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(r) ? z1() : r;
}
function V1(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), r = t.width, n = t.height;
  return {
    width: rd(r),
    height: rd(n)
  };
}
function W1() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var B1 = "rc-util-locker-".concat(Date.now()), nd = 0;
function H1(e) {
  var t = !!e, r = f.useState(function() {
    return nd += 1, "".concat(B1, "_").concat(nd);
  }), n = ne(r, 1), o = n[0];
  Et(function() {
    if (t) {
      var i = V1(document.body).width, a = W1();
      wo(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o);
    } else
      ua(o);
    return function() {
      ua(o);
    };
  }, [t, o]);
}
var od = !1;
function Y1(e) {
  return typeof e == "boolean" && (od = e), od;
}
var id = function(t) {
  return t === !1 ? !1 : !jt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, xc = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, o = e.getContainer, i = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, l = e.children, c = f.useState(r), u = ne(c, 2), d = u[0], h = u[1], b = d || r;
  process.env.NODE_ENV !== "production" && it(jt() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), f.useEffect(function() {
    (s || r) && h(r);
  }, [r, s]);
  var y = f.useState(function() {
    return id(o);
  }), g = ne(y, 2), m = g[0], v = g[1];
  f.useEffect(function() {
    var P = id(o);
    v(P ?? null);
  });
  var p = L1(b && !m, i), w = ne(p, 2), x = w[0], E = w[1], C = m ?? x;
  H1(n && r && jt() && (C === x || C === document.body));
  var S = null;
  if (l && Co(l) && t) {
    var M = l;
    S = M.ref;
  }
  var O = nc(S, t);
  if (!b || !jt() || m === void 0)
    return null;
  var $ = C === !1 || Y1(), D = l;
  return t && (D = /* @__PURE__ */ f.cloneElement(l, {
    ref: O
  })), /* @__PURE__ */ f.createElement(Vh.Provider, {
    value: E
  }, $ ? D : /* @__PURE__ */ cv(D, C));
});
process.env.NODE_ENV !== "production" && (xc.displayName = "Portal");
function G1() {
  var e = B({}, f);
  return e.useId;
}
var ad = 0, sd = G1();
const U1 = sd ? (
  // Use React `useId`
  function(t) {
    var r = sd();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = f.useState("ssr-id"), n = ne(r, 2), o = n[0], i = n[1];
    return f.useEffect(function() {
      var a = ad;
      ad += 1, i("rc_unique_".concat(a));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
var Tn = "RC_FORM_INTERNAL_HOOKS", Ue = function() {
  it(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Bn = /* @__PURE__ */ f.createContext({
  getFieldValue: Ue,
  getFieldsValue: Ue,
  getFieldError: Ue,
  getFieldWarning: Ue,
  getFieldsError: Ue,
  isFieldsTouched: Ue,
  isFieldTouched: Ue,
  isFieldValidating: Ue,
  isFieldsValidating: Ue,
  resetFields: Ue,
  setFields: Ue,
  setFieldValue: Ue,
  setFieldsValue: Ue,
  validateFields: Ue,
  submit: Ue,
  getInternalHooks: function() {
    return Ue(), {
      dispatch: Ue,
      initEntityValue: Ue,
      registerField: Ue,
      useSubscribe: Ue,
      setInitialValues: Ue,
      destroyForm: Ue,
      setCallbacks: Ue,
      registerWatch: Ue,
      getFields: Ue,
      setValidateMessages: Ue,
      setPreserve: Ue,
      getInitialValue: Ue
    };
  }
}), ei = /* @__PURE__ */ f.createContext(null);
function Ol(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function q1(e) {
  return e && !!e._init;
}
function In() {
  return In = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, In.apply(this, arguments);
}
function X1(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ti(e, t);
}
function _l(e) {
  return _l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _l(e);
}
function ti(e, t) {
  return ti = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ti(e, t);
}
function K1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ra(e, t, r) {
  return K1() ? ra = Reflect.construct.bind() : ra = function(o, i, a) {
    var s = [null];
    s.push.apply(s, i);
    var l = Function.bind.apply(o, s), c = new l();
    return a && ti(c, a.prototype), c;
  }, ra.apply(null, arguments);
}
function Z1(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function $l(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return $l = function(n) {
    if (n === null || !Z1(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return ra(n, arguments, _l(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ti(o, n);
  }, $l(e);
}
var Q1 = /%[sdj%]/g, Wh = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Wh = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function Ml(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function Jt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = 0, i = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var a = e.replace(Q1, function(s) {
      if (s === "%%")
        return "%";
      if (o >= i)
        return s;
      switch (s) {
        case "%s":
          return String(r[o++]);
        case "%d":
          return Number(r[o++]);
        case "%j":
          try {
            return JSON.stringify(r[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return a;
  }
  return e;
}
function J1(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function wt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || J1(t) && typeof e == "string" && !e);
}
function eS(e, t, r) {
  var n = [], o = 0, i = e.length;
  function a(s) {
    n.push.apply(n, s || []), o++, o === i && r(n);
  }
  e.forEach(function(s) {
    t(s, a);
  });
}
function ld(e, t, r) {
  var n = 0, o = e.length;
  function i(a) {
    if (a && a.length) {
      r(a);
      return;
    }
    var s = n;
    n = n + 1, s < o ? t(e[s], i) : r([]);
  }
  i([]);
}
function tS(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var cd = /* @__PURE__ */ function(e) {
  X1(t, e);
  function t(r, n) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = r, o.fields = n, o;
  }
  return t;
}(/* @__PURE__ */ $l(Error));
function rS(e, t, r, n, o) {
  if (t.first) {
    var i = new Promise(function(h, b) {
      var y = function(v) {
        return n(v), v.length ? b(new cd(v, Ml(v))) : h(o);
      }, g = tS(e);
      ld(g, r, y);
    });
    return i.catch(function(h) {
      return h;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, c = 0, u = [], d = new Promise(function(h, b) {
    var y = function(m) {
      if (u.push.apply(u, m), c++, c === l)
        return n(u), u.length ? b(new cd(u, Ml(u))) : h(o);
    };
    s.length || (n(u), h(o)), s.forEach(function(g) {
      var m = e[g];
      a.indexOf(g) !== -1 ? ld(m, r, y) : eS(m, r, y);
    });
  });
  return d.catch(function(h) {
    return h;
  }), d;
}
function nS(e) {
  return !!(e && e.message !== void 0);
}
function oS(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function ud(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = oS(t, e.fullFields) : n = t[r.field || e.fullField], nS(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function dd(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = In({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var Bh = function(t, r, n, o, i, a) {
  t.required && (!n.hasOwnProperty(t.field) || wt(r, a || t.type)) && o.push(Jt(i.messages.required, t.fullField));
}, iS = function(t, r, n, o, i) {
  (/^\s+$/.test(r) || r === "") && o.push(Jt(i.messages.whitespace, t.fullField));
}, Wi, aS = function() {
  if (Wi)
    return Wi;
  var e = "[a-fA-F\\d:]", t = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + r + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + r + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + r + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + r + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + r + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + r + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + r + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + r + "$)|(?:^" + o + "$)"), a = new RegExp("^" + r + "$"), s = new RegExp("^" + o + "$"), l = function(x) {
    return x && x.exact ? i : new RegExp("(?:" + t(x) + r + t(x) + ")|(?:" + t(x) + o + t(x) + ")", "g");
  };
  l.v4 = function(w) {
    return w && w.exact ? a : new RegExp("" + t(w) + r + t(w), "g");
  }, l.v6 = function(w) {
    return w && w.exact ? s : new RegExp("" + t(w) + o + t(w), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", u = "(?:\\S+(?::\\S*)?@)?", d = l.v4().source, h = l.v6().source, b = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", y = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", m = "(?::\\d{2,5})?", v = '(?:[/?#][^\\s"]*)?', p = "(?:" + c + "|www\\.)" + u + "(?:localhost|" + d + "|" + h + "|" + b + y + g + ")" + m + v;
  return Wi = new RegExp("(?:^" + p + "$)", "i"), Wi;
}, fd = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Wo = {
  integer: function(t) {
    return Wo.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Wo.number(t) && !Wo.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Wo.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(fd.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(aS());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(fd.hex);
  }
}, sS = function(t, r, n, o, i) {
  if (t.required && r === void 0) {
    Bh(t, r, n, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  a.indexOf(s) > -1 ? Wo[s](r) || o.push(Jt(i.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && o.push(Jt(i.messages.types[s], t.fullField, t.type));
}, lS = function(t, r, n, o, i) {
  var a = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = r, d = null, h = typeof r == "number", b = typeof r == "string", y = Array.isArray(r);
  if (h ? d = "number" : b ? d = "string" : y && (d = "array"), !d)
    return !1;
  y && (u = r.length), b && (u = r.replace(c, "_").length), a ? u !== t.len && o.push(Jt(i.messages[d].len, t.fullField, t.len)) : s && !l && u < t.min ? o.push(Jt(i.messages[d].min, t.fullField, t.min)) : l && !s && u > t.max ? o.push(Jt(i.messages[d].max, t.fullField, t.max)) : s && l && (u < t.min || u > t.max) && o.push(Jt(i.messages[d].range, t.fullField, t.min, t.max));
}, Jn = "enum", cS = function(t, r, n, o, i) {
  t[Jn] = Array.isArray(t[Jn]) ? t[Jn] : [], t[Jn].indexOf(r) === -1 && o.push(Jt(i.messages[Jn], t.fullField, t[Jn].join(", ")));
}, uS = function(t, r, n, o, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(Jt(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(r) || o.push(Jt(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Te = {
  required: Bh,
  whitespace: iS,
  type: sS,
  range: lS,
  enum: cS,
  pattern: uS
}, dS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r, "string") && !t.required)
      return n();
    Te.required(t, r, o, a, i, "string"), wt(r, "string") || (Te.type(t, r, o, a, i), Te.range(t, r, o, a, i), Te.pattern(t, r, o, a, i), t.whitespace === !0 && Te.whitespace(t, r, o, a, i));
  }
  n(a);
}, fS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return n();
    Te.required(t, r, o, a, i), r !== void 0 && Te.type(t, r, o, a, i);
  }
  n(a);
}, hS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), wt(r) && !t.required)
      return n();
    Te.required(t, r, o, a, i), r !== void 0 && (Te.type(t, r, o, a, i), Te.range(t, r, o, a, i));
  }
  n(a);
}, mS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return n();
    Te.required(t, r, o, a, i), r !== void 0 && Te.type(t, r, o, a, i);
  }
  n(a);
}, gS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return n();
    Te.required(t, r, o, a, i), wt(r) || Te.type(t, r, o, a, i);
  }
  n(a);
}, vS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return n();
    Te.required(t, r, o, a, i), r !== void 0 && (Te.type(t, r, o, a, i), Te.range(t, r, o, a, i));
  }
  n(a);
}, pS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return n();
    Te.required(t, r, o, a, i), r !== void 0 && (Te.type(t, r, o, a, i), Te.range(t, r, o, a, i));
  }
  n(a);
}, yS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    Te.required(t, r, o, a, i, "array"), r != null && (Te.type(t, r, o, a, i), Te.range(t, r, o, a, i));
  }
  n(a);
}, bS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return n();
    Te.required(t, r, o, a, i), r !== void 0 && Te.type(t, r, o, a, i);
  }
  n(a);
}, SS = "enum", wS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return n();
    Te.required(t, r, o, a, i), r !== void 0 && Te[SS](t, r, o, a, i);
  }
  n(a);
}, xS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r, "string") && !t.required)
      return n();
    Te.required(t, r, o, a, i), wt(r, "string") || Te.pattern(t, r, o, a, i);
  }
  n(a);
}, CS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r, "date") && !t.required)
      return n();
    if (Te.required(t, r, o, a, i), !wt(r, "date")) {
      var l;
      r instanceof Date ? l = r : l = new Date(r), Te.type(t, l, o, a, i), l && Te.range(t, l.getTime(), o, a, i);
    }
  }
  n(a);
}, ES = function(t, r, n, o, i) {
  var a = [], s = Array.isArray(r) ? "array" : typeof r;
  Te.required(t, r, o, a, i, s), n(a);
}, Fs = function(t, r, n, o, i) {
  var a = t.type, s = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (wt(r, a) && !t.required)
      return n();
    Te.required(t, r, o, s, i, a), wt(r, a) || Te.type(t, r, o, s, i);
  }
  n(s);
}, OS = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return n();
    Te.required(t, r, o, a, i);
  }
  n(a);
}, Yo = {
  string: dS,
  method: fS,
  number: hS,
  boolean: mS,
  regexp: gS,
  integer: vS,
  float: pS,
  array: yS,
  object: bS,
  enum: wS,
  pattern: xS,
  date: CS,
  url: Fs,
  hex: Fs,
  email: Fs,
  required: ES,
  any: OS
};
function Rl() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var Pl = Rl(), hi = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Pl, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(n) {
    var o = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(i) {
      var a = n[i];
      o.rules[i] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(n) {
    return n && (this._messages = dd(Rl(), n)), this._messages;
  }, t.validate = function(n, o, i) {
    var a = this;
    o === void 0 && (o = {}), i === void 0 && (i = function() {
    });
    var s = n, l = o, c = i;
    if (typeof l == "function" && (c = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, s), Promise.resolve(s);
    function u(g) {
      var m = [], v = {};
      function p(x) {
        if (Array.isArray(x)) {
          var E;
          m = (E = m).concat.apply(E, x);
        } else
          m.push(x);
      }
      for (var w = 0; w < g.length; w++)
        p(g[w]);
      m.length ? (v = Ml(m), c(m, v)) : c(null, s);
    }
    if (l.messages) {
      var d = this.messages();
      d === Pl && (d = Rl()), dd(d, l.messages), l.messages = d;
    } else
      l.messages = this.messages();
    var h = {}, b = l.keys || Object.keys(this.rules);
    b.forEach(function(g) {
      var m = a.rules[g], v = s[g];
      m.forEach(function(p) {
        var w = p;
        typeof w.transform == "function" && (s === n && (s = In({}, s)), v = s[g] = w.transform(v)), typeof w == "function" ? w = {
          validator: w
        } : w = In({}, w), w.validator = a.getValidationMethod(w), w.validator && (w.field = g, w.fullField = w.fullField || g, w.type = a.getType(w), h[g] = h[g] || [], h[g].push({
          rule: w,
          value: v,
          source: s,
          field: g
        }));
      });
    });
    var y = {};
    return rS(h, l, function(g, m) {
      var v = g.rule, p = (v.type === "object" || v.type === "array") && (typeof v.fields == "object" || typeof v.defaultField == "object");
      p = p && (v.required || !v.required && g.value), v.field = g.field;
      function w(C, S) {
        return In({}, S, {
          fullField: v.fullField + "." + C,
          fullFields: v.fullFields ? [].concat(v.fullFields, [C]) : [C]
        });
      }
      function x(C) {
        C === void 0 && (C = []);
        var S = Array.isArray(C) ? C : [C];
        !l.suppressWarning && S.length && e.warning("async-validator:", S), S.length && v.message !== void 0 && (S = [].concat(v.message));
        var M = S.map(ud(v, s));
        if (l.first && M.length)
          return y[v.field] = 1, m(M);
        if (!p)
          m(M);
        else {
          if (v.required && !g.value)
            return v.message !== void 0 ? M = [].concat(v.message).map(ud(v, s)) : l.error && (M = [l.error(v, Jt(l.messages.required, v.field))]), m(M);
          var O = {};
          v.defaultField && Object.keys(g.value).map(function(P) {
            O[P] = v.defaultField;
          }), O = In({}, O, g.rule.fields);
          var $ = {};
          Object.keys(O).forEach(function(P) {
            var F = O[P], I = Array.isArray(F) ? F : [F];
            $[P] = I.map(w.bind(null, P));
          });
          var D = new e($);
          D.messages(l.messages), g.rule.options && (g.rule.options.messages = l.messages, g.rule.options.error = l.error), D.validate(g.value, g.rule.options || l, function(P) {
            var F = [];
            M && M.length && F.push.apply(F, M), P && P.length && F.push.apply(F, P), m(F.length ? F : null);
          });
        }
      }
      var E;
      if (v.asyncValidator)
        E = v.asyncValidator(v, g.value, x, g.source, l);
      else if (v.validator) {
        try {
          E = v.validator(v, g.value, x, g.source, l);
        } catch (C) {
          console.error == null || console.error(C), l.suppressValidatorError || setTimeout(function() {
            throw C;
          }, 0), x(C.message);
        }
        E === !0 ? x() : E === !1 ? x(typeof v.message == "function" ? v.message(v.fullField || v.field) : v.message || (v.fullField || v.field) + " fails") : E instanceof Array ? x(E) : E instanceof Error && x(E.message);
      }
      E && E.then && E.then(function() {
        return x();
      }, function(C) {
        return x(C);
      });
    }, function(g) {
      u(g);
    }, s);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Yo.hasOwnProperty(n.type))
      throw new Error(Jt("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var o = Object.keys(n), i = o.indexOf("message");
    return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? Yo.required : Yo[this.getType(n)] || void 0;
  }, e;
}();
hi.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Yo[t] = r;
};
hi.warning = Wh;
hi.messages = Pl;
hi.validators = Yo;
var qt = "'${name}' is not a valid ${type}", Hh = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: qt,
    method: qt,
    array: qt,
    object: qt,
    number: qt,
    date: qt,
    boolean: qt,
    integer: qt,
    float: qt,
    regexp: qt,
    email: qt,
    url: qt,
    hex: qt
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, hd = hi;
function _S(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var md = "CODE_LOGIC_ERROR";
function Nl(e, t, r, n, o) {
  return Tl.apply(this, arguments);
}
function Tl() {
  return Tl = Hn(/* @__PURE__ */ kt().mark(function e(t, r, n, o, i) {
    var a, s, l, c, u, d, h, b, y;
    return kt().wrap(function(m) {
      for (; ; )
        switch (m.prev = m.next) {
          case 0:
            return a = B({}, n), delete a.ruleIndex, hd.warning = function() {
            }, a.validator && (s = a.validator, a.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (v) {
                return console.error(v), Promise.reject(md);
              }
            }), l = null, a && a.type === "array" && a.defaultField && (l = a.defaultField, delete a.defaultField), c = new hd(k({}, t, [a])), u = uo(Hh, o.validateMessages), c.messages(u), d = [], m.prev = 10, m.next = 13, Promise.resolve(c.validate(k({}, t, r), B({}, o)));
          case 13:
            m.next = 18;
            break;
          case 15:
            m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (d = m.t0.errors.map(function(v, p) {
              var w = v.message, x = w === md ? u.default : w;
              return /* @__PURE__ */ f.isValidElement(x) ? (
                // Wrap ReactNode with `key`
                f.cloneElement(x, {
                  key: "error_".concat(p)
                })
              ) : x;
            }));
          case 18:
            if (!(!d.length && l)) {
              m.next = 23;
              break;
            }
            return m.next = 21, Promise.all(r.map(function(v, p) {
              return Nl("".concat(t, ".").concat(p), v, l, o, i);
            }));
          case 21:
            return h = m.sent, m.abrupt("return", h.reduce(function(v, p) {
              return [].concat(ue(v), ue(p));
            }, []));
          case 23:
            return b = B(B({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, i), y = d.map(function(v) {
              return typeof v == "string" ? _S(v, b) : v;
            }), m.abrupt("return", y);
          case 26:
          case "end":
            return m.stop();
        }
    }, e, null, [[10, 15]]);
  })), Tl.apply(this, arguments);
}
function $S(e, t, r, n, o, i) {
  var a = e.join("."), s = r.map(function(u, d) {
    var h = u.validator, b = B(B({}, u), {}, {
      ruleIndex: d
    });
    return h && (b.validator = function(y, g, m) {
      var v = !1, p = function() {
        for (var E = arguments.length, C = new Array(E), S = 0; S < E; S++)
          C[S] = arguments[S];
        Promise.resolve().then(function() {
          it(!v, "Your validator function has already return a promise. `callback` will be ignored."), v || m.apply(void 0, C);
        });
      }, w = h(y, g, p);
      v = w && typeof w.then == "function" && typeof w.catch == "function", it(v, "`callback` is deprecated. Please return a promise instead."), v && w.then(function() {
        m();
      }).catch(function(x) {
        m(x || " ");
      });
    }), b;
  }).sort(function(u, d) {
    var h = u.warningOnly, b = u.ruleIndex, y = d.warningOnly, g = d.ruleIndex;
    return !!h == !!y ? b - g : h ? 1 : -1;
  }), l;
  if (o === !0)
    l = new Promise(/* @__PURE__ */ function() {
      var u = Hn(/* @__PURE__ */ kt().mark(function d(h, b) {
        var y, g, m;
        return kt().wrap(function(p) {
          for (; ; )
            switch (p.prev = p.next) {
              case 0:
                y = 0;
              case 1:
                if (!(y < s.length)) {
                  p.next = 12;
                  break;
                }
                return g = s[y], p.next = 5, Nl(a, t, g, n, i);
              case 5:
                if (m = p.sent, !m.length) {
                  p.next = 9;
                  break;
                }
                return b([{
                  errors: m,
                  rule: g
                }]), p.abrupt("return");
              case 9:
                y += 1, p.next = 1;
                break;
              case 12:
                h([]);
              case 13:
              case "end":
                return p.stop();
            }
        }, d);
      }));
      return function(d, h) {
        return u.apply(this, arguments);
      };
    }());
  else {
    var c = s.map(function(u) {
      return Nl(a, t, u, n, i).then(function(d) {
        return {
          errors: d,
          rule: u
        };
      });
    });
    l = (o ? RS(c) : MS(c)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return l.catch(function(u) {
    return u;
  }), l;
}
function MS(e) {
  return Il.apply(this, arguments);
}
function Il() {
  return Il = Hn(/* @__PURE__ */ kt().mark(function e(t) {
    return kt().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(o) {
              var i, a = (i = []).concat.apply(i, ue(o));
              return a;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Il.apply(this, arguments);
}
function RS(e) {
  return Fl.apply(this, arguments);
}
function Fl() {
  return Fl = Hn(/* @__PURE__ */ kt().mark(function e(t) {
    var r;
    return kt().wrap(function(o) {
      for (; ; )
        switch (o.prev = o.next) {
          case 0:
            return r = 0, o.abrupt("return", new Promise(function(i) {
              t.forEach(function(a) {
                a.then(function(s) {
                  s.errors.length && i([s]), r += 1, r === t.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return o.stop();
        }
    }, e);
  })), Fl.apply(this, arguments);
}
function ft(e) {
  return Ol(e);
}
function gd(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var o = gr(e, n);
    r = hr(r, n, o);
  }), r;
}
function go(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return Yh(t, n, r);
  });
}
function Yh(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, o) {
    return e[o] === n;
  });
}
function PS(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || ke(e) !== "object" || ke(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), o = new Set([].concat(r, n));
  return ue(o).every(function(i) {
    var a = e[i], s = t[i];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function NS(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ke(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function vd(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var o = e[t], i = t - r;
  return i > 0 ? [].concat(ue(e.slice(0, r)), [o], ue(e.slice(r, t)), ue(e.slice(t + 1, n))) : i < 0 ? [].concat(ue(e.slice(0, t)), ue(e.slice(t + 1, r + 1)), [o], ue(e.slice(r + 1, n))) : e;
}
var TS = ["name"], nr = [];
function pd(e, t, r, n, o, i) {
  return typeof e == "function" ? e(t, r, "source" in i ? {
    source: i.source
  } : {}) : n !== o;
}
var Cc = /* @__PURE__ */ function(e) {
  $a(r, e);
  var t = Ma(r);
  function r(n) {
    var o;
    if (Tr(this, r), o = t.call(this, n), k(je(o), "state", {
      resetCount: 0
    }), k(je(o), "cancelRegisterFunc", null), k(je(o), "mounted", !1), k(je(o), "touched", !1), k(je(o), "dirty", !1), k(je(o), "validatePromise", void 0), k(je(o), "prevValidating", void 0), k(je(o), "errors", nr), k(je(o), "warnings", nr), k(je(o), "cancelRegister", function() {
      var l = o.props, c = l.preserve, u = l.isListField, d = l.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, c, ft(d)), o.cancelRegisterFunc = null;
    }), k(je(o), "getNamePath", function() {
      var l = o.props, c = l.name, u = l.fieldContext, d = u.prefixName, h = d === void 0 ? [] : d;
      return c !== void 0 ? [].concat(ue(h), ue(c)) : [];
    }), k(je(o), "getRules", function() {
      var l = o.props, c = l.rules, u = c === void 0 ? [] : c, d = l.fieldContext;
      return u.map(function(h) {
        return typeof h == "function" ? h(d) : h;
      });
    }), k(je(o), "refresh", function() {
      o.mounted && o.setState(function(l) {
        var c = l.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), k(je(o), "metaCache", null), k(je(o), "triggerMetaEvent", function(l) {
      var c = o.props.onMetaChange;
      if (c) {
        var u = B(B({}, o.getMeta()), {}, {
          destroy: l
        });
        pf(o.metaCache, u) || c(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), k(je(o), "onStoreChange", function(l, c, u) {
      var d = o.props, h = d.shouldUpdate, b = d.dependencies, y = b === void 0 ? [] : b, g = d.onReset, m = u.store, v = o.getNamePath(), p = o.getValue(l), w = o.getValue(m), x = c && go(c, v);
      switch (u.type === "valueUpdate" && u.source === "external" && p !== w && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = nr, o.warnings = nr, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!c || x) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = nr, o.warnings = nr, o.triggerMetaEvent(), g == null || g(), o.refresh();
            return;
          }
          break;
        case "remove": {
          if (h) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var E = u.data;
          if (x) {
            "touched" in E && (o.touched = E.touched), "validating" in E && !("originRCField" in E) && (o.validatePromise = E.validating ? Promise.resolve([]) : null), "errors" in E && (o.errors = E.errors || nr), "warnings" in E && (o.warnings = E.warnings || nr), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in E && go(c, v, !0)) {
            o.reRender();
            return;
          }
          if (h && !v.length && pd(h, l, m, p, w, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var C = y.map(ft);
          if (C.some(function(S) {
            return go(u.relatedFields, S);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (x || (!y.length || v.length || h) && pd(h, l, m, p, w, u)) {
            o.reRender();
            return;
          }
          break;
      }
      h === !0 && o.reRender();
    }), k(je(o), "validateRules", function(l) {
      var c = o.getNamePath(), u = o.getValue(), d = l || {}, h = d.triggerName, b = d.validateOnly, y = b === void 0 ? !1 : b, g = Promise.resolve().then(/* @__PURE__ */ Hn(/* @__PURE__ */ kt().mark(function m() {
        var v, p, w, x, E, C, S;
        return kt().wrap(function(O) {
          for (; ; )
            switch (O.prev = O.next) {
              case 0:
                if (o.mounted) {
                  O.next = 2;
                  break;
                }
                return O.abrupt("return", []);
              case 2:
                if (v = o.props, p = v.validateFirst, w = p === void 0 ? !1 : p, x = v.messageVariables, E = v.validateDebounce, C = o.getRules(), h && (C = C.filter(function($) {
                  return $;
                }).filter(function($) {
                  var D = $.validateTrigger;
                  if (!D)
                    return !0;
                  var P = Ol(D);
                  return P.includes(h);
                })), !(E && h)) {
                  O.next = 10;
                  break;
                }
                return O.next = 8, new Promise(function($) {
                  setTimeout($, E);
                });
              case 8:
                if (o.validatePromise === g) {
                  O.next = 10;
                  break;
                }
                return O.abrupt("return", []);
              case 10:
                return S = $S(c, u, C, l, w, x), S.catch(function($) {
                  return $;
                }).then(function() {
                  var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nr;
                  if (o.validatePromise === g) {
                    var D;
                    o.validatePromise = null;
                    var P = [], F = [];
                    (D = $.forEach) === null || D === void 0 || D.call($, function(I) {
                      var L = I.rule.warningOnly, T = I.errors, R = T === void 0 ? nr : T;
                      L ? F.push.apply(F, ue(R)) : P.push.apply(P, ue(R));
                    }), o.errors = P, o.warnings = F, o.triggerMetaEvent(), o.reRender();
                  }
                }), O.abrupt("return", S);
              case 13:
              case "end":
                return O.stop();
            }
        }, m);
      })));
      return y || (o.validatePromise = g, o.dirty = !0, o.errors = nr, o.warnings = nr, o.triggerMetaEvent(), o.reRender()), g;
    }), k(je(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), k(je(o), "isFieldTouched", function() {
      return o.touched;
    }), k(je(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var l = o.props.fieldContext, c = l.getInternalHooks(Tn), u = c.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), k(je(o), "getErrors", function() {
      return o.errors;
    }), k(je(o), "getWarnings", function() {
      return o.warnings;
    }), k(je(o), "isListField", function() {
      return o.props.isListField;
    }), k(je(o), "isList", function() {
      return o.props.isList;
    }), k(je(o), "isPreserve", function() {
      return o.props.preserve;
    }), k(je(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var l = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return l;
    }), k(je(o), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var c = o.getMeta();
        return B(B({}, o.getOnlyChild(l(o.getControlled(), c, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = zn(l);
      return u.length !== 1 || !/* @__PURE__ */ f.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), k(je(o), "getValue", function(l) {
      var c = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return gr(l || c(!0), u);
    }), k(je(o), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = o.props, u = c.trigger, d = c.validateTrigger, h = c.getValueFromEvent, b = c.normalize, y = c.valuePropName, g = c.getValueProps, m = c.fieldContext, v = d !== void 0 ? d : m.validateTrigger, p = o.getNamePath(), w = m.getInternalHooks, x = m.getFieldsValue, E = w(Tn), C = E.dispatch, S = o.getValue(), M = g || function(P) {
        return k({}, y, P);
      }, O = l[u], $ = B(B({}, l), M(S));
      $[u] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var P, F = arguments.length, I = new Array(F), L = 0; L < F; L++)
          I[L] = arguments[L];
        h ? P = h.apply(void 0, I) : P = NS.apply(void 0, [y].concat(I)), b && (P = b(P, S, x(!0))), C({
          type: "updateValue",
          namePath: p,
          value: P
        }), O && O.apply(void 0, I);
      };
      var D = Ol(v || []);
      return D.forEach(function(P) {
        var F = $[P];
        $[P] = function() {
          F && F.apply(void 0, arguments);
          var I = o.props.rules;
          I && I.length && C({
            type: "validateField",
            namePath: p,
            triggerName: P
          });
        };
      }), $;
    }), n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, a = i(Tn), s = a.initEntityValue;
      s(je(o));
    }
    return o;
  }
  return Ir(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, i = o.shouldUpdate, a = o.fieldContext;
      if (this.mounted = !0, a) {
        var s = a.getInternalHooks, l = s(Tn), c = l.registerField;
        this.cancelRegisterFunc = c(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, i = this.props.children, a = this.getOnlyChild(i), s = a.child, l = a.isFunction, c;
      return l ? c = s : /* @__PURE__ */ f.isValidElement(s) ? c = /* @__PURE__ */ f.cloneElement(s, this.getControlled(s.props)) : (it(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ f.createElement(f.Fragment, {
        key: o
      }, c);
    }
  }]), r;
}(f.Component);
k(Cc, "contextType", Bn);
k(Cc, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Ec(e) {
  var t = e.name, r = Wt(e, TS), n = f.useContext(Bn), o = f.useContext(ei), i = t !== void 0 ? ft(t) : void 0, a = "keep";
  return r.isListField || (a = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && i.length <= 1 && it(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ f.createElement(Cc, Ve({
    key: a,
    name: i,
    isListField: !!o
  }, r, {
    fieldContext: n
  }));
}
function Gh(e) {
  var t = e.name, r = e.initialValue, n = e.children, o = e.rules, i = e.validateTrigger, a = e.isListField, s = f.useContext(Bn), l = f.useContext(ei), c = f.useRef({
    keys: [],
    id: 0
  }), u = c.current, d = f.useMemo(function() {
    var g = ft(s.prefixName) || [];
    return [].concat(ue(g), ue(ft(t)));
  }, [s.prefixName, t]), h = f.useMemo(function() {
    return B(B({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), b = f.useMemo(function() {
    return {
      getKey: function(m) {
        var v = d.length, p = m[v];
        return [u.keys[p], m.slice(v + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return it(!1, "Form.List only accepts function as children."), null;
  var y = function(m, v, p) {
    var w = p.source;
    return w === "internal" ? !1 : m !== v;
  };
  return /* @__PURE__ */ f.createElement(ei.Provider, {
    value: b
  }, /* @__PURE__ */ f.createElement(Bn.Provider, {
    value: h
  }, /* @__PURE__ */ f.createElement(Ec, {
    name: [],
    shouldUpdate: y,
    rules: o,
    validateTrigger: i,
    initialValue: r,
    isList: !0,
    isListField: a ?? !!l
  }, function(g, m) {
    var v = g.value, p = v === void 0 ? [] : v, w = g.onChange, x = s.getFieldValue, E = function() {
      var O = x(d || []);
      return O || [];
    }, C = {
      add: function(O, $) {
        var D = E();
        $ >= 0 && $ <= D.length ? (u.keys = [].concat(ue(u.keys.slice(0, $)), [u.id], ue(u.keys.slice($))), w([].concat(ue(D.slice(0, $)), [O], ue(D.slice($))))) : (process.env.NODE_ENV !== "production" && ($ < 0 || $ > D.length) && it(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(ue(u.keys), [u.id]), w([].concat(ue(D), [O]))), u.id += 1;
      },
      remove: function(O) {
        var $ = E(), D = new Set(Array.isArray(O) ? O : [O]);
        D.size <= 0 || (u.keys = u.keys.filter(function(P, F) {
          return !D.has(F);
        }), w($.filter(function(P, F) {
          return !D.has(F);
        })));
      },
      move: function(O, $) {
        if (O !== $) {
          var D = E();
          O < 0 || O >= D.length || $ < 0 || $ >= D.length || (u.keys = vd(u.keys, O, $), w(vd(D, O, $)));
        }
      }
    }, S = p || [];
    return Array.isArray(S) || (S = [], process.env.NODE_ENV !== "production" && it(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(S.map(function(M, O) {
      var $ = u.keys[O];
      return $ === void 0 && (u.keys[O] = u.id, $ = u.keys[O], u.id += 1), {
        name: O,
        key: $,
        isListField: !0
      };
    }), C, m);
  })));
}
function IS(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(o, i) {
    e.forEach(function(a, s) {
      a.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        r -= 1, n[s] = l, !(r > 0) && (t && i(n), o(n));
      });
    });
  }) : Promise.resolve([]);
}
var Uh = "__@field_split__";
function Ds(e) {
  return e.map(function(t) {
    return "".concat(ke(t), ":").concat(t);
  }).join(Uh);
}
var eo = /* @__PURE__ */ function() {
  function e() {
    Tr(this, e), k(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Ir(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(Ds(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(Ds(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = this.get(r), i = n(o);
      i ? this.set(r, i) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(Ds(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return ue(this.kvs.entries()).map(function(n) {
        var o = ne(n, 2), i = o[0], a = o[1], s = i.split(Uh);
        return r({
          key: s.map(function(l) {
            var c = l.match(/^([^:]*):(.*)$/), u = ne(c, 3), d = u[1], h = u[2];
            return d === "number" ? Number(h) : h;
          }),
          value: a
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var o = n.key, i = n.value;
        return r[o.join(".")] = i, null;
      }), r;
    }
  }]), e;
}(), FS = ["name"], DS = /* @__PURE__ */ Ir(function e(t) {
  var r = this;
  Tr(this, e), k(this, "formHooked", !1), k(this, "forceRootUpdate", void 0), k(this, "subscribable", !0), k(this, "store", {}), k(this, "fieldEntities", []), k(this, "initialValues", {}), k(this, "callbacks", {}), k(this, "validateMessages", null), k(this, "preserve", null), k(this, "lastValidatePromise", null), k(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), k(this, "getInternalHooks", function(n) {
    return n === Tn ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (it(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), k(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), k(this, "prevWithoutPreserves", null), k(this, "setInitialValues", function(n, o) {
    if (r.initialValues = n || {}, o) {
      var i, a = uo(n, r.store);
      (i = r.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var l = s.key;
        a = hr(a, l, gr(n, l));
      }), r.prevWithoutPreserves = null, r.updateStore(a);
    }
  }), k(this, "destroyForm", function() {
    var n = new eo();
    r.getFieldEntities(!0).forEach(function(o) {
      r.isMergedPreserve(o.isPreserve()) || n.set(o.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }), k(this, "getInitialValue", function(n) {
    var o = gr(r.initialValues, n);
    return n.length ? uo(o) : o;
  }), k(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), k(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), k(this, "setPreserve", function(n) {
    r.preserve = n;
  }), k(this, "watchList", []), k(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(o) {
        return o !== n;
      });
    };
  }), k(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var o = r.getFieldsValue(), i = r.getFieldsValue(!0);
      r.watchList.forEach(function(a) {
        a(o, i, n);
      });
    }
  }), k(this, "timeoutId", null), k(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || it(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), k(this, "updateStore", function(n) {
    r.store = n;
  }), k(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : r.fieldEntities;
  }), k(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new eo();
    return r.getFieldEntities(n).forEach(function(i) {
      var a = i.getNamePath();
      o.set(a, i);
    }), o;
  }), k(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var o = r.getFieldsMap(!0);
    return n.map(function(i) {
      var a = ft(i);
      return o.get(a) || {
        INVALIDATE_NAME_PATH: ft(i)
      };
    });
  }), k(this, "getFieldsValue", function(n, o) {
    r.warningUnhooked();
    var i, a, s;
    if (n === !0 || Array.isArray(n) ? (i = n, a = o) : n && ke(n) === "object" && (s = n.strict, a = n.filter), i === !0 && !a)
      return r.store;
    var l = r.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), c = [];
    return l.forEach(function(u) {
      var d, h, b = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var y, g;
        if ((y = (g = u).isList) !== null && y !== void 0 && y.call(g))
          return;
      } else if (!i && (d = (h = u).isListField) !== null && d !== void 0 && d.call(h))
        return;
      if (!a)
        c.push(b);
      else {
        var m = "getMeta" in u ? u.getMeta() : null;
        a(m) && c.push(b);
      }
    }), gd(r.store, c.map(ft));
  }), k(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var o = ft(n);
    return gr(r.store, o);
  }), k(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntitiesForNamePathList(n);
    return o.map(function(i, a) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: ft(n[a]),
        errors: [],
        warnings: []
      };
    });
  }), k(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var o = ft(n), i = r.getFieldsError([o])[0];
    return i.errors;
  }), k(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var o = ft(n), i = r.getFieldsError([o])[0];
    return i.warnings;
  }), k(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    var a = o[0], s = o[1], l, c = !1;
    o.length === 0 ? l = null : o.length === 1 ? Array.isArray(a) ? (l = a.map(ft), c = !1) : (l = null, c = a) : (l = a.map(ft), c = s);
    var u = r.getFieldEntities(!0), d = function(m) {
      return m.isFieldTouched();
    };
    if (!l)
      return c ? u.every(d) : u.some(d);
    var h = new eo();
    l.forEach(function(g) {
      h.set(g, []);
    }), u.forEach(function(g) {
      var m = g.getNamePath();
      l.forEach(function(v) {
        v.every(function(p, w) {
          return m[w] === p;
        }) && h.update(v, function(p) {
          return [].concat(ue(p), [g]);
        });
      });
    });
    var b = function(m) {
      return m.some(d);
    }, y = h.map(function(g) {
      var m = g.value;
      return m;
    });
    return c ? y.every(b) : y.some(b);
  }), k(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), k(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntities();
    if (!n)
      return o.some(function(a) {
        return a.isFieldValidating();
      });
    var i = n.map(ft);
    return o.some(function(a) {
      var s = a.getNamePath();
      return go(i, s) && a.isFieldValidating();
    });
  }), k(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), k(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new eo(), i = r.getFieldEntities(!0);
    i.forEach(function(l) {
      var c = l.props.initialValue, u = l.getNamePath();
      if (c !== void 0) {
        var d = o.get(u) || /* @__PURE__ */ new Set();
        d.add({
          entity: l,
          value: c
        }), o.set(u, d);
      }
    });
    var a = function(c) {
      c.forEach(function(u) {
        var d = u.props.initialValue;
        if (d !== void 0) {
          var h = u.getNamePath(), b = r.getInitialValue(h);
          if (b !== void 0)
            it(!1, "Form already set 'initialValues' with path '".concat(h.join("."), "'. Field can not overwrite it."));
          else {
            var y = o.get(h);
            if (y && y.size > 1)
              it(!1, "Multiple Field with path '".concat(h.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (y) {
              var g = r.getFieldValue(h), m = u.isListField();
              !m && (!n.skipExist || g === void 0) && r.updateStore(hr(r.store, h, ue(y)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(l) {
      var c = o.get(l);
      if (c) {
        var u;
        (u = s).push.apply(u, ue(ue(c).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = i, a(s);
  }), k(this, "resetFields", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (!n) {
      r.updateStore(uo(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var i = n.map(ft);
    i.forEach(function(a) {
      var s = r.getInitialValue(a);
      r.updateStore(hr(r.store, a, s));
    }), r.resetWithFieldInitialValue({
      namePathList: i
    }), r.notifyObservers(o, i, {
      type: "reset"
    }), r.notifyWatch(i);
  }), k(this, "setFields", function(n) {
    r.warningUnhooked();
    var o = r.store, i = [];
    n.forEach(function(a) {
      var s = a.name, l = Wt(a, FS), c = ft(s);
      i.push(c), "value" in l && r.updateStore(hr(r.store, c, l.value)), r.notifyObservers(o, [c], {
        type: "setField",
        data: a
      });
    }), r.notifyWatch(i);
  }), k(this, "getFields", function() {
    var n = r.getFieldEntities(!0), o = n.map(function(i) {
      var a = i.getNamePath(), s = i.getMeta(), l = B(B({}, s), {}, {
        name: a,
        value: r.getFieldValue(a)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return o;
  }), k(this, "initEntityValue", function(n) {
    var o = n.props.initialValue;
    if (o !== void 0) {
      var i = n.getNamePath(), a = gr(r.store, i);
      a === void 0 && r.updateStore(hr(r.store, i, o));
    }
  }), k(this, "isMergedPreserve", function(n) {
    var o = n !== void 0 ? n : r.preserve;
    return o ?? !0;
  }), k(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var o = n.getNamePath();
    if (r.notifyWatch([o]), n.props.initialValue !== void 0) {
      var i = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(i, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(a, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(d) {
        return d !== n;
      }), !r.isMergedPreserve(s) && (!a || l.length > 1)) {
        var c = a ? void 0 : r.getInitialValue(o);
        if (o.length && r.getFieldValue(o) !== c && r.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !Yh(d.getNamePath(), o)
          );
        })) {
          var u = r.store;
          r.updateStore(hr(u, o, c, !0)), r.notifyObservers(u, [o], {
            type: "remove"
          }), r.triggerDependenciesUpdate(u, o);
        }
      }
      r.notifyWatch([o]);
    };
  }), k(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var o = n.namePath, i = n.value;
        r.updateValue(o, i);
        break;
      }
      case "validateField": {
        var a = n.namePath, s = n.triggerName;
        r.validateFields([a], {
          triggerName: s
        });
        break;
      }
    }
  }), k(this, "notifyObservers", function(n, o, i) {
    if (r.subscribable) {
      var a = B(B({}, i), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(n, o, a);
      });
    } else
      r.forceRootUpdate();
  }), k(this, "triggerDependenciesUpdate", function(n, o) {
    var i = r.getDependencyChildrenFields(o);
    return i.length && r.validateFields(i), r.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(ue(i))
    }), i;
  }), k(this, "updateValue", function(n, o) {
    var i = ft(n), a = r.store;
    r.updateStore(hr(r.store, i, o)), r.notifyObservers(a, [i], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([i]);
    var s = r.triggerDependenciesUpdate(a, i), l = r.callbacks.onValuesChange;
    if (l) {
      var c = gd(r.store, [i]);
      l(c, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([i].concat(ue(s)));
  }), k(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (n) {
      var i = uo(r.store, n);
      r.updateStore(i);
    }
    r.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), k(this, "setFieldValue", function(n, o) {
    r.setFields([{
      name: n,
      value: o
    }]);
  }), k(this, "getDependencyChildrenFields", function(n) {
    var o = /* @__PURE__ */ new Set(), i = [], a = new eo();
    r.getFieldEntities().forEach(function(l) {
      var c = l.props.dependencies;
      (c || []).forEach(function(u) {
        var d = ft(u);
        a.update(d, function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return h.add(l), h;
        });
      });
    });
    var s = function l(c) {
      var u = a.get(c) || /* @__PURE__ */ new Set();
      u.forEach(function(d) {
        if (!o.has(d)) {
          o.add(d);
          var h = d.getNamePath();
          d.isFieldDirty() && h.length && (i.push(h), l(h));
        }
      });
    };
    return s(n), i;
  }), k(this, "triggerOnFieldsChange", function(n, o) {
    var i = r.callbacks.onFieldsChange;
    if (i) {
      var a = r.getFields();
      if (o) {
        var s = new eo();
        o.forEach(function(c) {
          var u = c.name, d = c.errors;
          s.set(u, d);
        }), a.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var l = a.filter(function(c) {
        var u = c.name;
        return go(n, u);
      });
      l.length && i(l, a);
    }
  }), k(this, "validateFields", function(n, o) {
    r.warningUnhooked();
    var i, a;
    Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (i = n, a = o) : a = n;
    var s = !!i, l = s ? i.map(ft) : [], c = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), h = a || {}, b = h.recursive, y = h.dirty;
    r.getFieldEntities(!0).forEach(function(p) {
      if (s || l.push(p.getNamePath()), !(!p.props.rules || !p.props.rules.length) && !(y && !p.isFieldDirty())) {
        var w = p.getNamePath();
        if (d.add(w.join(u)), !s || go(l, w, b)) {
          var x = p.validateRules(B({
            validateMessages: B(B({}, Hh), r.validateMessages)
          }, a));
          c.push(x.then(function() {
            return {
              name: w,
              errors: [],
              warnings: []
            };
          }).catch(function(E) {
            var C, S = [], M = [];
            return (C = E.forEach) === null || C === void 0 || C.call(E, function(O) {
              var $ = O.rule.warningOnly, D = O.errors;
              $ ? M.push.apply(M, ue(D)) : S.push.apply(S, ue(D));
            }), S.length ? Promise.reject({
              name: w,
              errors: S,
              warnings: M
            }) : {
              name: w,
              errors: S,
              warnings: M
            };
          }));
        }
      }
    });
    var g = IS(c);
    r.lastValidatePromise = g, g.catch(function(p) {
      return p;
    }).then(function(p) {
      var w = p.map(function(x) {
        var E = x.name;
        return E;
      });
      r.notifyObservers(r.store, w, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(w, p);
    });
    var m = g.then(function() {
      return r.lastValidatePromise === g ? Promise.resolve(r.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(p) {
      var w = p.filter(function(x) {
        return x && x.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(l),
        errorFields: w,
        outOfDate: r.lastValidatePromise !== g
      });
    });
    m.catch(function(p) {
      return p;
    });
    var v = l.filter(function(p) {
      return d.has(p.join(u));
    });
    return r.triggerOnFieldsChange(v), m;
  }), k(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var o = r.callbacks.onFinish;
      if (o)
        try {
          o(n);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(n) {
      var o = r.callbacks.onFinishFailed;
      o && o(n);
    });
  }), this.forceRootUpdate = t;
});
function Oc(e) {
  var t = f.useRef(), r = f.useState({}), n = ne(r, 2), o = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        o({});
      }, a = new DS(i);
      t.current = a.getForm();
    }
  return [t.current];
}
var Dl = /* @__PURE__ */ f.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), qh = function(t) {
  var r = t.validateMessages, n = t.onFormChange, o = t.onFormFinish, i = t.children, a = f.useContext(Dl), s = f.useRef({});
  return /* @__PURE__ */ f.createElement(Dl.Provider, {
    value: B(B({}, a), {}, {
      validateMessages: B(B({}, a.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, u) {
        n && n(c, {
          changedFields: u,
          forms: s.current
        }), a.triggerFormChange(c, u);
      },
      triggerFormFinish: function(c, u) {
        o && o(c, {
          values: u,
          forms: s.current
        }), a.triggerFormFinish(c, u);
      },
      registerForm: function(c, u) {
        c && (s.current = B(B({}, s.current), {}, k({}, c, u))), a.registerForm(c, u);
      },
      unregisterForm: function(c) {
        var u = B({}, s.current);
        delete u[c], s.current = u, a.unregisterForm(c);
      }
    })
  }, i);
}, AS = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], jS = function(t, r) {
  var n = t.name, o = t.initialValues, i = t.fields, a = t.form, s = t.preserve, l = t.children, c = t.component, u = c === void 0 ? "form" : c, d = t.validateMessages, h = t.validateTrigger, b = h === void 0 ? "onChange" : h, y = t.onValuesChange, g = t.onFieldsChange, m = t.onFinish, v = t.onFinishFailed, p = Wt(t, AS), w = f.useContext(Dl), x = Oc(a), E = ne(x, 1), C = E[0], S = C.getInternalHooks(Tn), M = S.useSubscribe, O = S.setInitialValues, $ = S.setCallbacks, D = S.setValidateMessages, P = S.setPreserve, F = S.destroyForm;
  f.useImperativeHandle(r, function() {
    return C;
  }), f.useEffect(function() {
    return w.registerForm(n, C), function() {
      w.unregisterForm(n);
    };
  }, [w, C, n]), D(B(B({}, w.validateMessages), d)), $({
    onValuesChange: y,
    onFieldsChange: function(V) {
      if (w.triggerFormChange(n, V), g) {
        for (var X = arguments.length, K = new Array(X > 1 ? X - 1 : 0), W = 1; W < X; W++)
          K[W - 1] = arguments[W];
        g.apply(void 0, [V].concat(K));
      }
    },
    onFinish: function(V) {
      w.triggerFormFinish(n, V), m && m(V);
    },
    onFinishFailed: v
  }), P(s);
  var I = f.useRef(null);
  O(o, !I.current), I.current || (I.current = !0), f.useEffect(
    function() {
      return F;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var L, T = typeof l == "function";
  if (T) {
    var R = C.getFieldsValue(!0);
    L = l(R, C);
  } else
    L = l;
  M(!T);
  var N = f.useRef();
  f.useEffect(function() {
    PS(N.current || [], i || []) || C.setFields(i || []), N.current = i;
  }, [i, C]);
  var z = f.useMemo(function() {
    return B(B({}, C), {}, {
      validateTrigger: b
    });
  }, [C, b]), A = /* @__PURE__ */ f.createElement(ei.Provider, {
    value: null
  }, /* @__PURE__ */ f.createElement(Bn.Provider, {
    value: z
  }, L));
  return u === !1 ? A : /* @__PURE__ */ f.createElement(u, Ve({}, p, {
    onSubmit: function(V) {
      V.preventDefault(), V.stopPropagation(), C.submit();
    },
    onReset: function(V) {
      var X;
      V.preventDefault(), C.resetFields(), (X = p.onReset) === null || X === void 0 || X.call(p, V);
    }
  }), A);
};
function yd(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var kS = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = Ze(t);
  it(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Xh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = n === void 0 ? [] : n, i = t[1], a = i === void 0 ? {} : i, s = q1(a) ? {
    form: a
  } : a, l = s.form, c = pr(), u = ne(c, 2), d = u[0], h = u[1], b = br(function() {
    return yd(d);
  }, [d]), y = Ze(b);
  y.current = b;
  var g = mt(Bn), m = l || g, v = m && m._init;
  process.env.NODE_ENV !== "production" && it(t.length === 2 ? l ? v : !0 : v, "useWatch requires a form instance since it can not auto detect from context.");
  var p = ft(o), w = Ze(p);
  return w.current = p, kS(p), yt(
    function() {
      if (v) {
        var x = m.getFieldsValue, E = m.getInternalHooks, C = E(Tn), S = C.registerWatch, M = S(function($, D) {
          var P = gr(s.preserve ? D : $, w.current), F = yd(P);
          y.current !== F && (y.current = F, h(P));
        }), O = gr(s.preserve ? x(!0) : x(), w.current);
        return d !== O && h(O), M;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  ), d;
}
var LS = /* @__PURE__ */ f.forwardRef(jS), Mo = LS;
Mo.FormProvider = qh;
Mo.Field = Ec;
Mo.List = Gh;
Mo.useForm = Oc;
Mo.useWatch = Xh;
const Zr = /* @__PURE__ */ f.createContext({
  labelAlign: "right",
  vertical: !1,
  itemRef: () => {
  }
}), Kh = /* @__PURE__ */ f.createContext(null), Zh = (e) => {
  const t = Eo(e, ["prefixCls"]);
  return /* @__PURE__ */ f.createElement(qh, Object.assign({}, t));
}, _c = /* @__PURE__ */ f.createContext({
  prefixCls: ""
}), Sr = /* @__PURE__ */ f.createContext({});
process.env.NODE_ENV !== "production" && (Sr.displayName = "FormItemInputContext");
const bd = (e) => {
  let {
    children: t,
    status: r,
    override: n
  } = e;
  const o = mt(Sr), i = br(() => {
    const a = Object.assign({}, o);
    return n && delete a.isFormItemInput, r && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [r, n, o]);
  return /* @__PURE__ */ f.createElement(Sr.Provider, {
    value: i
  }, t);
}, zS = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), VS = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), $c = function(e, t, r, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, zS(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, VS(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, WS = new ct("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), BS = new ct("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), HS = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: r
  } = e, n = `${r}-fade`, o = t ? "&" : "";
  return [$c(n, WS, BS, e.motionDurationMid, t), {
    [`
        ${o}${n}-enter,
        ${o}${n}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${o}${n}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
}, Mc = new ct("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), YS = new ct("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Sd = new ct("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), wd = new ct("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), GS = new ct("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), US = new ct("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), qS = new ct("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), XS = new ct("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), KS = new ct("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), ZS = new ct("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), QS = new ct("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), JS = new ct("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), ew = {
  zoom: {
    inKeyframes: Mc,
    outKeyframes: YS
  },
  "zoom-big": {
    inKeyframes: Sd,
    outKeyframes: wd
  },
  "zoom-big-fast": {
    inKeyframes: Sd,
    outKeyframes: wd
  },
  "zoom-left": {
    inKeyframes: qS,
    outKeyframes: XS
  },
  "zoom-right": {
    inKeyframes: KS,
    outKeyframes: ZS
  },
  "zoom-up": {
    inKeyframes: GS,
    outKeyframes: US
  },
  "zoom-down": {
    inKeyframes: QS,
    outKeyframes: JS
  }
}, tw = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = ew[t];
  return [$c(n, o, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, rw = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
}), nw = rw, ow = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
function iw(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, o = e.arrowPos, i = n || {}, a = i.className, s = i.content, l = o.x, c = l === void 0 ? 0 : l, u = o.y, d = u === void 0 ? 0 : u, h = f.useRef();
  if (!r || !r.points)
    return null;
  var b = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var y = r.points[0], g = r.points[1], m = y[0], v = y[1], p = g[0], w = g[1];
    m === p || !["t", "b"].includes(m) ? b.top = d : m === "t" ? b.top = 0 : b.bottom = 0, v === w || !["l", "r"].includes(v) ? b.left = c : v === "l" ? b.left = 0 : b.right = 0;
  }
  return /* @__PURE__ */ f.createElement("div", {
    ref: h,
    className: ee("".concat(t, "-arrow"), a),
    style: b
  }, s);
}
function aw(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, o = e.mask, i = e.motion;
  return o ? /* @__PURE__ */ f.createElement(tn, Ve({}, i, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(a) {
    var s = a.className;
    return /* @__PURE__ */ f.createElement("div", {
      style: {
        zIndex: n
      },
      className: ee("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Qh = /* @__PURE__ */ f.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Qh.displayName = "PopupContent");
var Jh = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, o = e.prefixCls, i = e.style, a = e.target, s = e.onVisibleChanged, l = e.open, c = e.keepDom, u = e.fresh, d = e.onClick, h = e.mask, b = e.arrow, y = e.arrowPos, g = e.align, m = e.motion, v = e.maskMotion, p = e.forceRender, w = e.getPopupContainer, x = e.autoDestroy, E = e.portal, C = e.zIndex, S = e.onMouseEnter, M = e.onMouseLeave, O = e.onPointerEnter, $ = e.ready, D = e.offsetX, P = e.offsetY, F = e.offsetR, I = e.offsetB, L = e.onAlign, T = e.onPrepare, R = e.stretch, N = e.targetWidth, z = e.targetHeight, A = typeof r == "function" ? r() : r, j = l || c, V = (w == null ? void 0 : w.length) > 0, X = f.useState(!w || !V), K = ne(X, 2), W = K[0], Q = K[1];
  if (Et(function() {
    !W && V && a && Q(!0);
  }, [W, V, a]), !W)
    return null;
  var re = "auto", oe = {
    left: "-1000vw",
    top: "-1000vh",
    right: re,
    bottom: re
  };
  if ($ || !l) {
    var ie, le = g.points, ye = g.dynamicInset || ((ie = g._experimental) === null || ie === void 0 ? void 0 : ie.dynamicInset), pe = ye && le[0][1] === "r", ge = ye && le[0][0] === "b";
    pe ? (oe.right = F, oe.left = re) : (oe.left = D, oe.right = re), ge ? (oe.bottom = I, oe.top = re) : (oe.top = P, oe.bottom = re);
  }
  var G = {};
  return R && (R.includes("height") && z ? G.height = z : R.includes("minHeight") && z && (G.minHeight = z), R.includes("width") && N ? G.width = N : R.includes("minWidth") && N && (G.minWidth = N)), l || (G.pointerEvents = "none"), /* @__PURE__ */ f.createElement(E, {
    open: p || j,
    getContainer: w && function() {
      return w(a);
    },
    autoDestroy: x
  }, /* @__PURE__ */ f.createElement(aw, {
    prefixCls: o,
    open: l,
    zIndex: C,
    mask: h,
    motion: v
  }), /* @__PURE__ */ f.createElement(si, {
    onResize: L,
    disabled: !l
  }, function(be) {
    return /* @__PURE__ */ f.createElement(tn, Ve({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: p,
      leavedClassName: "".concat(o, "-hidden")
    }, m, {
      onAppearPrepare: T,
      onEnterPrepare: T,
      visible: l,
      onVisibleChanged: function(_e) {
        var Le;
        m == null || (Le = m.onVisibleChanged) === null || Le === void 0 || Le.call(m, _e), s(_e);
      }
    }), function(ve, _e) {
      var Le = ve.className, Z = ve.style, q = ee(o, Le, n);
      return /* @__PURE__ */ f.createElement("div", {
        ref: gn(be, t, _e),
        className: q,
        style: B(B(B(B({
          "--arrow-x": "".concat(y.x || 0, "px"),
          "--arrow-y": "".concat(y.y || 0, "px")
        }, oe), G), Z), {}, {
          boxSizing: "border-box",
          zIndex: C
        }, i),
        onMouseEnter: S,
        onMouseLeave: M,
        onPointerEnter: O,
        onClick: d
      }, b && /* @__PURE__ */ f.createElement(iw, {
        prefixCls: o,
        arrow: b,
        arrowPos: y,
        align: g
      }), /* @__PURE__ */ f.createElement(Qh, {
        cache: !l && !u
      }, A));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Jh.displayName = "Popup");
var em = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, o = Co(r), i = f.useCallback(function(s) {
    rc(t, n ? n(s) : s);
  }, [n]), a = nc(i, r.ref);
  return o ? /* @__PURE__ */ f.cloneElement(r, {
    ref: a
  }) : r;
});
process.env.NODE_ENV !== "production" && (em.displayName = "TriggerWrapper");
var xd = /* @__PURE__ */ f.createContext(null);
function Cd(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function sw(e, t, r, n) {
  return f.useMemo(function() {
    var o = Cd(r ?? t), i = Cd(n ?? t), a = new Set(o), s = new Set(i);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, t, r, n]);
}
function lw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function cw(e, t, r, n) {
  for (var o = r.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var s, l = i[a];
    if (lw((s = e[l]) === null || s === void 0 ? void 0 : s.points, o, n))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function Ed(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function mi(e) {
  return e.ownerDocument.defaultView;
}
function Al(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var o = mi(r).getComputedStyle(r), i = o.overflowX, a = o.overflowY, s = o.overflow;
    [i, a, s].some(function(l) {
      return n.includes(l);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function ri(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function ko(e) {
  return ri(parseFloat(e), 0);
}
function Od(e, t) {
  var r = B({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var o = mi(n).getComputedStyle(n), i = o.overflow, a = o.overflowClipMargin, s = o.borderTopWidth, l = o.borderBottomWidth, c = o.borderLeftWidth, u = o.borderRightWidth, d = n.getBoundingClientRect(), h = n.offsetHeight, b = n.clientHeight, y = n.offsetWidth, g = n.clientWidth, m = ko(s), v = ko(l), p = ko(c), w = ko(u), x = ri(Math.round(d.width / y * 1e3) / 1e3), E = ri(Math.round(d.height / h * 1e3) / 1e3), C = (y - g - p - w) * x, S = (h - b - m - v) * E, M = m * E, O = v * E, $ = p * x, D = w * x, P = 0, F = 0;
      if (i === "clip") {
        var I = ko(a);
        P = I * x, F = I * E;
      }
      var L = d.x + $ - P, T = d.y + M - F, R = L + d.width + 2 * P - $ - D - C, N = T + d.height + 2 * F - M - O - S;
      r.left = Math.max(r.left, L), r.top = Math.max(r.top, T), r.right = Math.min(r.right, R), r.bottom = Math.min(r.bottom, N);
    }
  }), r;
}
function _d(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function $d(e, t) {
  var r = t || [], n = ne(r, 2), o = n[0], i = n[1];
  return [_d(e.width, o), _d(e.height, i)];
}
function Md() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function to(e, t) {
  var r = t[0], n = t[1], o, i;
  return r === "t" ? i = e.y : r === "b" ? i = e.y + e.height : i = e.y + e.height / 2, n === "l" ? o = e.x : n === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: i
  };
}
function ln(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, o) {
    return o === t ? r[n] || "c" : n;
  }).join("");
}
function uw(e, t, r, n, o, i, a) {
  var s = f.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[n] || {}
  }), l = ne(s, 2), c = l[0], u = l[1], d = f.useRef(0), h = f.useMemo(function() {
    return t ? Al(t) : [];
  }, [t]), b = f.useRef({}), y = function() {
    b.current = {};
  };
  e || y();
  var g = Mr(function() {
    if (t && r && e) {
      let rr = function(Lr, On) {
        var Kn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : q, Zn = A.x + Lr, Io = A.y + On, Fo = Zn + ie, $i = Io + oe, ss = Math.max(Zn, Kn.left), ls = Math.max(Io, Kn.top), cs = Math.min(Fo, Kn.right), us = Math.min($i, Kn.bottom);
        return Math.max(0, (cs - ss) * (us - ls));
      }, _i = function() {
        H = A.y + me, J = H + oe, fe = A.x + Ke, Me = fe + ie;
      };
      var p, w, x = t, E = x.ownerDocument, C = mi(x), S = C.getComputedStyle(x), M = S.width, O = S.height, $ = S.position, D = x.style.left, P = x.style.top, F = x.style.right, I = x.style.bottom, L = x.style.overflow, T = B(B({}, o[n]), i), R = E.createElement("div");
      (p = x.parentElement) === null || p === void 0 || p.appendChild(R), R.style.left = "".concat(x.offsetLeft, "px"), R.style.top = "".concat(x.offsetTop, "px"), R.style.position = $, R.style.height = "".concat(x.offsetHeight, "px"), R.style.width = "".concat(x.offsetWidth, "px"), x.style.left = "0", x.style.top = "0", x.style.right = "auto", x.style.bottom = "auto", x.style.overflow = "hidden";
      var N;
      if (Array.isArray(r))
        N = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var z = r.getBoundingClientRect();
        N = {
          x: z.x,
          y: z.y,
          width: z.width,
          height: z.height
        };
      }
      var A = x.getBoundingClientRect(), j = E.documentElement, V = j.clientWidth, X = j.clientHeight, K = j.scrollWidth, W = j.scrollHeight, Q = j.scrollTop, re = j.scrollLeft, oe = A.height, ie = A.width, le = N.height, ye = N.width, pe = {
        left: 0,
        top: 0,
        right: V,
        bottom: X
      }, ge = {
        left: -re,
        top: -Q,
        right: K - re,
        bottom: W - Q
      }, G = T.htmlRegion, be = "visible", ve = "visibleFirst";
      G !== "scroll" && G !== ve && (G = be);
      var _e = G === ve, Le = Od(ge, h), Z = Od(pe, h), q = G === be ? Z : Le, se = _e ? Z : q;
      x.style.left = "auto", x.style.top = "auto", x.style.right = "0", x.style.bottom = "0";
      var de = x.getBoundingClientRect();
      x.style.left = D, x.style.top = P, x.style.right = F, x.style.bottom = I, x.style.overflow = L, (w = x.parentElement) === null || w === void 0 || w.removeChild(R);
      var we = ri(Math.round(ie / parseFloat(M) * 1e3) / 1e3), Ne = ri(Math.round(oe / parseFloat(O) * 1e3) / 1e3);
      if (we === 0 || Ne === 0 || aa(r) && !yc(r))
        return;
      var Bt = T.offset, at = T.targetOffset, Ht = $d(A, Bt), Er = ne(Ht, 2), xt = Er[0], Ie = Er[1], xe = $d(N, at), gt = ne(xe, 2), $t = gt[0], yn = gt[1];
      N.x -= $t, N.y -= yn;
      var Lt = T.points || [], ut = ne(Lt, 2), Dt = ut[0], Ar = ut[1], Ct = Md(Ar), rt = Md(Dt), Yt = to(N, Ct), Xe = to(A, rt), At = B({}, T), Ke = Yt.x - Xe.x + xt, me = Yt.y - Xe.y + Ie, Be = rr(Ke, me), nt = rr(Ke, me, Z), dt = to(N, ["t", "l"]), Gt = to(A, ["t", "l"]), Or = to(N, ["b", "r"]), dr = to(A, ["b", "r"]), vt = T.overflow || {}, bn = vt.adjustX, an = vt.adjustY, _r = vt.shiftX, Mt = vt.shiftY, _ = function(On) {
        return typeof On == "boolean" ? On : On >= 0;
      }, H, J, fe, Me;
      _i();
      var Ae = _(an), $e = rt[0] === Ct[0];
      if (Ae && rt[0] === "t" && (J > se.bottom || b.current.bt)) {
        var Ce = me;
        $e ? Ce -= oe - le : Ce = dt.y - dr.y - Ie;
        var ot = rr(Ke, Ce), Qe = rr(Ke, Ce, Z);
        // Of course use larger one
        ot > Be || ot === Be && (!_e || // Choose recommend one
        Qe >= nt) ? (b.current.bt = !0, me = Ce, Ie = -Ie, At.points = [ln(rt, 0), ln(Ct, 0)]) : b.current.bt = !1;
      }
      if (Ae && rt[0] === "b" && (H < se.top || b.current.tb)) {
        var Re = me;
        $e ? Re += oe - le : Re = Or.y - Gt.y - Ie;
        var Rt = rr(Ke, Re), $r = rr(Ke, Re, Z);
        // Of course use larger one
        Rt > Be || Rt === Be && (!_e || // Choose recommend one
        $r >= nt) ? (b.current.tb = !0, me = Re, Ie = -Ie, At.points = [ln(rt, 0), ln(Ct, 0)]) : b.current.tb = !1;
      }
      var Sn = _(bn), zt = rt[1] === Ct[1];
      if (Sn && rt[1] === "l" && (Me > se.right || b.current.rl)) {
        var wn = Ke;
        zt ? wn -= ie - ye : wn = dt.x - dr.x - xt;
        var bi = rr(wn, me), Qa = rr(wn, me, Z);
        // Of course use larger one
        bi > Be || bi === Be && (!_e || // Choose recommend one
        Qa >= nt) ? (b.current.rl = !0, Ke = wn, xt = -xt, At.points = [ln(rt, 1), ln(Ct, 1)]) : b.current.rl = !1;
      }
      if (Sn && rt[1] === "r" && (fe < se.left || b.current.lr)) {
        var xn = Ke;
        zt ? xn += ie - ye : xn = Or.x - Gt.x - xt;
        var Si = rr(xn, me), Un = rr(xn, me, Z);
        // Of course use larger one
        Si > Be || Si === Be && (!_e || // Choose recommend one
        Un >= nt) ? (b.current.lr = !0, Ke = xn, xt = -xt, At.points = [ln(rt, 1), ln(Ct, 1)]) : b.current.lr = !1;
      }
      _i();
      var jr = _r === !0 ? 0 : _r;
      typeof jr == "number" && (fe < Z.left && (Ke -= fe - Z.left - xt, N.x + ye < Z.left + jr && (Ke += N.x - Z.left + ye - jr)), Me > Z.right && (Ke -= Me - Z.right - xt, N.x > Z.right - jr && (Ke += N.x - Z.right + jr)));
      var Cn = Mt === !0 ? 0 : Mt;
      typeof Cn == "number" && (H < Z.top && (me -= H - Z.top - Ie, N.y + le < Z.top + Cn && (me += N.y - Z.top + le - Cn)), J > Z.bottom && (me -= J - Z.bottom - Ie, N.y > Z.bottom - Cn && (me += N.y - Z.bottom + Cn)));
      var qn = A.x + Ke, Xn = qn + ie, kr = A.y + me, wi = kr + oe, En = N.x, sn = En + ye, xi = N.y, Ja = xi + le, es = Math.max(qn, En), Ci = Math.min(Xn, sn), ts = (es + Ci) / 2, rs = ts - qn, ns = Math.max(kr, xi), Ei = Math.min(wi, Ja), os = (ns + Ei) / 2, is = os - kr;
      a == null || a(t, At);
      var Oi = de.right - A.x - (Ke + A.width), as = de.bottom - A.y - (me + A.height);
      u({
        ready: !0,
        offsetX: Ke / we,
        offsetY: me / Ne,
        offsetR: Oi / we,
        offsetB: as / Ne,
        arrowX: rs / we,
        arrowY: is / Ne,
        scaleX: we,
        scaleY: Ne,
        align: At
      });
    }
  }), m = function() {
    d.current += 1;
    var w = d.current;
    Promise.resolve().then(function() {
      d.current === w && g();
    });
  }, v = function() {
    u(function(w) {
      return B(B({}, w), {}, {
        ready: !1
      });
    });
  };
  return Et(v, [n]), Et(function() {
    e || v();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, m];
}
function dw(e, t, r, n, o) {
  Et(function() {
    if (e && t && r) {
      let d = function() {
        n(), o();
      };
      var i = t, a = r, s = Al(i), l = Al(a), c = mi(a), u = new Set([c].concat(ue(s), ue(l)));
      return u.forEach(function(h) {
        h.addEventListener("scroll", d, {
          passive: !0
        });
      }), c.addEventListener("resize", d, {
        passive: !0
      }), n(), function() {
        u.forEach(function(h) {
          h.removeEventListener("scroll", d), c.removeEventListener("resize", d);
        });
      };
    }
  }, [e, t, r]);
}
function fw(e, t, r, n, o, i, a, s) {
  var l = f.useRef(e), c = f.useRef(!1);
  l.current !== e && (c.current = !0, l.current = e), f.useEffect(function() {
    var u = Ot(function() {
      c.current = !1;
    });
    return function() {
      Ot.cancel(u);
    };
  }, [e]), f.useEffect(function() {
    if (t && n && (!o || i)) {
      var u = function() {
        var $ = !1, D = function(I) {
          var L = I.target;
          $ = a(L);
        }, P = function(I) {
          var L = I.target;
          !c.current && l.current && !$ && !a(L) && s(!1);
        };
        return [D, P];
      }, d = u(), h = ne(d, 2), b = h[0], y = h[1], g = u(), m = ne(g, 2), v = m[0], p = m[1], w = mi(n);
      w.addEventListener("mousedown", b, !0), w.addEventListener("click", y, !0), w.addEventListener("contextmenu", y, !0);
      var x = ha(r);
      if (x && (x.addEventListener("mousedown", v, !0), x.addEventListener("click", p, !0), x.addEventListener("contextmenu", p, !0)), process.env.NODE_ENV !== "production") {
        var E, C, S = r == null || (E = r.getRootNode) === null || E === void 0 ? void 0 : E.call(r), M = (C = n.getRootNode) === null || C === void 0 ? void 0 : C.call(n);
        bo(S === M, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        w.removeEventListener("mousedown", b, !0), w.removeEventListener("click", y, !0), w.removeEventListener("contextmenu", y, !0), x && (x.removeEventListener("mousedown", v, !0), x.removeEventListener("click", p, !0), x.removeEventListener("contextmenu", p, !0));
      };
    }
  }, [t, r, n, o, i]);
}
var hw = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function mw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xc, t = /* @__PURE__ */ f.forwardRef(function(r, n) {
    var o = r.prefixCls, i = o === void 0 ? "rc-trigger-popup" : o, a = r.children, s = r.action, l = s === void 0 ? "hover" : s, c = r.showAction, u = r.hideAction, d = r.popupVisible, h = r.defaultPopupVisible, b = r.onPopupVisibleChange, y = r.afterPopupVisibleChange, g = r.mouseEnterDelay, m = r.mouseLeaveDelay, v = m === void 0 ? 0.1 : m, p = r.focusDelay, w = r.blurDelay, x = r.mask, E = r.maskClosable, C = E === void 0 ? !0 : E, S = r.getPopupContainer, M = r.forceRender, O = r.autoDestroy, $ = r.destroyPopupOnHide, D = r.popup, P = r.popupClassName, F = r.popupStyle, I = r.popupPlacement, L = r.builtinPlacements, T = L === void 0 ? {} : L, R = r.popupAlign, N = r.zIndex, z = r.stretch, A = r.getPopupClassNameFromAlign, j = r.fresh, V = r.alignPoint, X = r.onPopupClick, K = r.onPopupAlign, W = r.arrow, Q = r.popupMotion, re = r.maskMotion, oe = r.popupTransitionName, ie = r.popupAnimation, le = r.maskTransitionName, ye = r.maskAnimation, pe = r.className, ge = r.getTriggerDOMNode, G = Wt(r, hw), be = O || $ || !1, ve = f.useState(!1), _e = ne(ve, 2), Le = _e[0], Z = _e[1];
    Et(function() {
      Z(ow());
    }, []);
    var q = f.useRef({}), se = f.useContext(xd), de = f.useMemo(function() {
      return {
        registerSubPopup: function(Ee, st) {
          q.current[Ee] = st, se == null || se.registerSubPopup(Ee, st);
        }
      };
    }, [se]), we = U1(), Ne = f.useState(null), Bt = ne(Ne, 2), at = Bt[0], Ht = Bt[1], Er = Mr(function(ce) {
      aa(ce) && at !== ce && Ht(ce), se == null || se.registerSubPopup(we, ce);
    }), xt = f.useState(null), Ie = ne(xt, 2), xe = Ie[0], gt = Ie[1], $t = f.useRef(null), yn = Mr(function(ce) {
      aa(ce) && xe !== ce && (gt(ce), $t.current = ce);
    }), Lt = f.Children.only(a), ut = (Lt == null ? void 0 : Lt.props) || {}, Dt = {}, Ar = Mr(function(ce) {
      var Ee, st, bt = xe;
      return (bt == null ? void 0 : bt.contains(ce)) || ((Ee = ha(bt)) === null || Ee === void 0 ? void 0 : Ee.host) === ce || ce === bt || (at == null ? void 0 : at.contains(ce)) || ((st = ha(at)) === null || st === void 0 ? void 0 : st.host) === ce || ce === at || Object.values(q.current).some(function(lt) {
        return (lt == null ? void 0 : lt.contains(ce)) || ce === lt;
      });
    }), Ct = Ed(i, Q, ie, oe), rt = Ed(i, re, ye, le), Yt = f.useState(h || !1), Xe = ne(Yt, 2), At = Xe[0], Ke = Xe[1], me = d ?? At, Be = Mr(function(ce) {
      d === void 0 && Ke(ce);
    });
    Et(function() {
      Ke(d || !1);
    }, [d]);
    var nt = f.useRef(me);
    nt.current = me;
    var dt = f.useRef([]);
    dt.current = [];
    var Gt = Mr(function(ce) {
      var Ee;
      Be(ce), ((Ee = dt.current[dt.current.length - 1]) !== null && Ee !== void 0 ? Ee : me) !== ce && (dt.current.push(ce), b == null || b(ce));
    }), Or = f.useRef(), dr = function() {
      clearTimeout(Or.current);
    }, vt = function(Ee) {
      var st = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      dr(), st === 0 ? Gt(Ee) : Or.current = setTimeout(function() {
        Gt(Ee);
      }, st * 1e3);
    };
    f.useEffect(function() {
      return dr;
    }, []);
    var bn = f.useState(!1), an = ne(bn, 2), _r = an[0], Mt = an[1];
    Et(function(ce) {
      (!ce || me) && Mt(!0);
    }, [me]);
    var _ = f.useState(null), H = ne(_, 2), J = H[0], fe = H[1], Me = f.useState([0, 0]), Ae = ne(Me, 2), $e = Ae[0], Ce = Ae[1], ot = function(Ee) {
      Ce([Ee.clientX, Ee.clientY]);
    }, Qe = uw(me, at, V ? $e : xe, I, T, R, K), Re = ne(Qe, 11), Rt = Re[0], $r = Re[1], Sn = Re[2], zt = Re[3], wn = Re[4], bi = Re[5], Qa = Re[6], xn = Re[7], Si = Re[8], Un = Re[9], jr = Re[10], Cn = sw(Le, l, c, u), qn = ne(Cn, 2), Xn = qn[0], kr = qn[1], wi = Xn.has("click"), En = kr.has("click") || kr.has("contextMenu"), sn = Mr(function() {
      _r || jr();
    }), xi = function() {
      nt.current && V && En && vt(!1);
    };
    dw(me, xe, at, sn, xi), Et(function() {
      sn();
    }, [$e, I]), Et(function() {
      me && !(T != null && T[I]) && sn();
    }, [JSON.stringify(R)]);
    var Ja = f.useMemo(function() {
      var ce = cw(T, i, Un, V);
      return ee(ce, A == null ? void 0 : A(Un));
    }, [Un, A, T, i, V]);
    f.useImperativeHandle(n, function() {
      return {
        nativeElement: $t.current,
        forceAlign: sn
      };
    });
    var es = f.useState(0), Ci = ne(es, 2), ts = Ci[0], rs = Ci[1], ns = f.useState(0), Ei = ne(ns, 2), os = Ei[0], is = Ei[1], Oi = function() {
      if (z && xe) {
        var Ee = xe.getBoundingClientRect();
        rs(Ee.width), is(Ee.height);
      }
    }, as = function() {
      Oi(), sn();
    }, rr = function(Ee) {
      Mt(!1), jr(), y == null || y(Ee);
    }, _i = function() {
      return new Promise(function(Ee) {
        Oi(), fe(function() {
          return Ee;
        });
      });
    };
    Et(function() {
      J && (jr(), J(), fe(null));
    }, [J]);
    function Lr(ce, Ee, st, bt) {
      Dt[ce] = function(lt) {
        var Mi;
        bt == null || bt(lt), vt(Ee, st);
        for (var ds = arguments.length, nu = new Array(ds > 1 ? ds - 1 : 0), Ri = 1; Ri < ds; Ri++)
          nu[Ri - 1] = arguments[Ri];
        (Mi = ut[ce]) === null || Mi === void 0 || Mi.call.apply(Mi, [ut, lt].concat(nu));
      };
    }
    (wi || En) && (Dt.onClick = function(ce) {
      var Ee;
      nt.current && En ? vt(!1) : !nt.current && wi && (ot(ce), vt(!0));
      for (var st = arguments.length, bt = new Array(st > 1 ? st - 1 : 0), lt = 1; lt < st; lt++)
        bt[lt - 1] = arguments[lt];
      (Ee = ut.onClick) === null || Ee === void 0 || Ee.call.apply(Ee, [ut, ce].concat(bt));
    }), fw(me, En, xe, at, x, C, Ar, vt);
    var On = Xn.has("hover"), Kn = kr.has("hover"), Zn, Io;
    On && (Lr("onMouseEnter", !0, g, function(ce) {
      ot(ce);
    }), Lr("onPointerEnter", !0, g, function(ce) {
      ot(ce);
    }), Zn = function() {
      (me || _r) && vt(!0, g);
    }, V && (Dt.onMouseMove = function(ce) {
      var Ee;
      (Ee = ut.onMouseMove) === null || Ee === void 0 || Ee.call(ut, ce);
    })), Kn && (Lr("onMouseLeave", !1, v), Lr("onPointerLeave", !1, v), Io = function() {
      vt(!1, v);
    }), Xn.has("focus") && Lr("onFocus", !0, p), kr.has("focus") && Lr("onBlur", !1, w), Xn.has("contextMenu") && (Dt.onContextMenu = function(ce) {
      var Ee;
      nt.current && kr.has("contextMenu") ? vt(!1) : (ot(ce), vt(!0)), ce.preventDefault();
      for (var st = arguments.length, bt = new Array(st > 1 ? st - 1 : 0), lt = 1; lt < st; lt++)
        bt[lt - 1] = arguments[lt];
      (Ee = ut.onContextMenu) === null || Ee === void 0 || Ee.call.apply(Ee, [ut, ce].concat(bt));
    }), pe && (Dt.className = ee(ut.className, pe));
    var Fo = B(B({}, ut), Dt), $i = {}, ss = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    ss.forEach(function(ce) {
      G[ce] && ($i[ce] = function() {
        for (var Ee, st = arguments.length, bt = new Array(st), lt = 0; lt < st; lt++)
          bt[lt] = arguments[lt];
        (Ee = Fo[ce]) === null || Ee === void 0 || Ee.call.apply(Ee, [Fo].concat(bt)), G[ce].apply(G, bt);
      });
    });
    var ls = /* @__PURE__ */ f.cloneElement(Lt, B(B({}, Fo), $i)), cs = {
      x: bi,
      y: Qa
    }, us = W ? B({}, W !== !0 ? W : {}) : null;
    return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(si, {
      disabled: !me,
      ref: yn,
      onResize: as
    }, /* @__PURE__ */ f.createElement(em, {
      getTriggerDOMNode: ge
    }, ls)), /* @__PURE__ */ f.createElement(xd.Provider, {
      value: de
    }, /* @__PURE__ */ f.createElement(Jh, {
      portal: e,
      ref: Er,
      prefixCls: i,
      popup: D,
      className: ee(P, Ja),
      style: F,
      target: xe,
      onMouseEnter: Zn,
      onMouseLeave: Io,
      onPointerEnter: Zn,
      zIndex: N,
      open: me,
      keepDom: _r,
      fresh: j,
      onClick: X,
      mask: x,
      motion: Ct,
      maskMotion: rt,
      onVisibleChanged: rr,
      onPrepare: _i,
      forceRender: M,
      autoDestroy: be,
      getPopupContainer: S,
      align: Un,
      arrow: us,
      arrowPos: cs,
      ready: Rt,
      offsetX: $r,
      offsetY: Sn,
      offsetR: zt,
      offsetB: wn,
      onAlign: sn,
      stretch: z,
      targetWidth: ts / xn,
      targetHeight: os / Si
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const gw = mw(xc);
function Go(e, t, r) {
  return ee({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const tm = (e, t) => t || e;
var vw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const pw = vw;
var rm = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: pw
  }));
};
process.env.NODE_ENV !== "production" && (rm.displayName = "SearchOutlined");
const yw = /* @__PURE__ */ f.forwardRef(rm), ni = ["xxl", "xl", "lg", "md", "sm", "xs"], bw = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`
}), Sw = (e) => {
  const t = e, r = [].concat(ni).reverse();
  return r.forEach((n, o) => {
    const i = n.toUpperCase(), a = `screen${i}Min`, s = `screen${i}`;
    if (!(t[a] <= t[s]))
      throw new Error(`${a}<=${s} fails : !(${t[a]}<=${t[s]})`);
    if (o < r.length - 1) {
      const l = `screen${i}Max`;
      if (!(t[s] <= t[l]))
        throw new Error(`${s}<=${l} fails : !(${t[s]}<=${t[l]})`);
      const u = `screen${r[o + 1].toUpperCase()}Min`;
      if (!(t[l] <= t[u]))
        throw new Error(`${l}<=${u} fails : !(${t[l]}<=${t[u]})`);
    }
  }), e;
};
function ww() {
  const [, e] = vn(), t = bw(Sw(e));
  return Y.useMemo(() => {
    const r = /* @__PURE__ */ new Map();
    let n = -1, o = {};
    return {
      matchHandlers: {},
      dispatch(i) {
        return o = i, r.forEach((a) => a(o)), r.size >= 1;
      },
      subscribe(i) {
        return r.size || this.register(), n += 1, r.set(n, i), i(o), n;
      },
      unsubscribe(i) {
        r.delete(i), r.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((i) => {
          const a = t[i], s = this.matchHandlers[a];
          s == null || s.mql.removeListener(s == null ? void 0 : s.listener);
        }), r.clear();
      },
      register() {
        Object.keys(t).forEach((i) => {
          const a = t[i], s = (c) => {
            let {
              matches: u
            } = c;
            this.dispatch(Object.assign(Object.assign({}, o), {
              [i]: u
            }));
          }, l = window.matchMedia(a);
          l.addListener(s), this.matchHandlers[a] = {
            mql: l,
            listener: s
          }, s(l);
        });
      },
      responsiveMap: t
    };
  }, [e]);
}
function nm(e) {
  var t = e.children, r = e.prefixCls, n = e.id, o = e.overlayInnerStyle, i = e.className, a = e.style;
  return /* @__PURE__ */ f.createElement("div", {
    className: ee("".concat(r, "-content"), i),
    style: a
  }, /* @__PURE__ */ f.createElement("div", {
    className: "".concat(r, "-inner"),
    id: n,
    role: "tooltip",
    style: o
  }, typeof t == "function" ? t() : t));
}
var ro = {
  shiftX: 64,
  adjustY: 1
}, no = {
  adjustX: 1,
  shiftY: !0
}, or = [0, 0], xw = {
  left: {
    points: ["cr", "cl"],
    overflow: no,
    offset: [-4, 0],
    targetOffset: or
  },
  right: {
    points: ["cl", "cr"],
    overflow: no,
    offset: [4, 0],
    targetOffset: or
  },
  top: {
    points: ["bc", "tc"],
    overflow: ro,
    offset: [0, -4],
    targetOffset: or
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: ro,
    offset: [0, 4],
    targetOffset: or
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: ro,
    offset: [0, -4],
    targetOffset: or
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: no,
    offset: [-4, 0],
    targetOffset: or
  },
  topRight: {
    points: ["br", "tr"],
    overflow: ro,
    offset: [0, -4],
    targetOffset: or
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: no,
    offset: [4, 0],
    targetOffset: or
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: ro,
    offset: [0, 4],
    targetOffset: or
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: no,
    offset: [4, 0],
    targetOffset: or
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ro,
    offset: [0, 4],
    targetOffset: or
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: no,
    offset: [-4, 0],
    targetOffset: or
  }
}, Cw = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], Ew = function(t, r) {
  var n = t.overlayClassName, o = t.trigger, i = o === void 0 ? ["hover"] : o, a = t.mouseEnterDelay, s = a === void 0 ? 0 : a, l = t.mouseLeaveDelay, c = l === void 0 ? 0.1 : l, u = t.overlayStyle, d = t.prefixCls, h = d === void 0 ? "rc-tooltip" : d, b = t.children, y = t.onVisibleChange, g = t.afterVisibleChange, m = t.transitionName, v = t.animation, p = t.motion, w = t.placement, x = w === void 0 ? "right" : w, E = t.align, C = E === void 0 ? {} : E, S = t.destroyTooltipOnHide, M = S === void 0 ? !1 : S, O = t.defaultVisible, $ = t.getTooltipContainer, D = t.overlayInnerStyle;
  t.arrowContent;
  var P = t.overlay, F = t.id, I = t.showArrow, L = I === void 0 ? !0 : I, T = Wt(t, Cw), R = Ze(null);
  Jl(r, function() {
    return R.current;
  });
  var N = B({}, T);
  "visible" in t && (N.popupVisible = t.visible);
  var z = function() {
    return /* @__PURE__ */ f.createElement(nm, {
      key: "content",
      prefixCls: h,
      id: F,
      overlayInnerStyle: D
    }, P);
  };
  return /* @__PURE__ */ f.createElement(gw, Ve({
    popupClassName: n,
    prefixCls: h,
    popup: z,
    action: i,
    builtinPlacements: xw,
    popupPlacement: x,
    ref: R,
    popupAlign: C,
    getPopupContainer: $,
    onPopupVisibleChange: y,
    afterPopupVisibleChange: g,
    popupTransitionName: m,
    popupAnimation: v,
    popupMotion: p,
    defaultPopupVisible: O,
    autoDestroy: M,
    mouseLeaveDelay: c,
    popupStyle: u,
    mouseEnterDelay: s,
    arrow: L
  }, N), b);
};
const Ow = /* @__PURE__ */ mn(Ew), om = 8;
function im(e) {
  const t = om, {
    contentRadius: r,
    limitVerticalRadius: n
  } = e, o = r > 12 ? r + 2 : 12;
  return {
    dropdownArrowOffset: o,
    dropdownArrowOffsetVertical: n ? t : o
  };
}
function Bi(e, t) {
  return e ? t : {};
}
function _w(e, t) {
  const {
    componentCls: r,
    sizePopupArrow: n,
    borderRadiusXS: o,
    borderRadiusOuter: i,
    boxShadowPopoverArrow: a
  } = e, {
    colorBg: s,
    contentRadius: l = e.borderRadiusLG,
    limitVerticalRadius: c,
    arrowDistance: u = 0,
    arrowPlacement: d = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = t, {
    dropdownArrowOffsetVertical: h,
    dropdownArrowOffset: b
  } = im({
    contentRadius: l,
    limitVerticalRadius: c
  });
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${r}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, ly(n, o, i, s, a)), {
        "&:before": {
          background: s
        }
      })]
    }, Bi(!!d.top, {
      [[`&-placement-top ${r}-arrow`, `&-placement-topLeft ${r}-arrow`, `&-placement-topRight ${r}-arrow`].join(",")]: {
        bottom: u,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: b
        }
      },
      [`&-placement-topRight ${r}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: b
        }
      }
    })), Bi(!!d.bottom, {
      [[`&-placement-bottom ${r}-arrow`, `&-placement-bottomLeft ${r}-arrow`, `&-placement-bottomRight ${r}-arrow`].join(",")]: {
        top: u,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: b
        }
      },
      [`&-placement-bottomRight ${r}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: b
        }
      }
    })), Bi(!!d.left, {
      [[`&-placement-left ${r}-arrow`, `&-placement-leftTop ${r}-arrow`, `&-placement-leftBottom ${r}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: u
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop ${r}-arrow`]: {
        top: h
      },
      [`&-placement-leftBottom ${r}-arrow`]: {
        bottom: h
      }
    })), Bi(!!d.right, {
      [[`&-placement-right ${r}-arrow`, `&-placement-rightTop ${r}-arrow`, `&-placement-rightBottom ${r}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: u
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop ${r}-arrow`]: {
        top: h
      },
      [`&-placement-rightBottom ${r}-arrow`]: {
        bottom: h
      }
    }))
  };
}
function $w(e, t, r, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const o = n && typeof n == "object" ? n : {}, i = {};
  switch (e) {
    case "top":
    case "bottom":
      i.shiftX = t.dropdownArrowOffset * 2 + r, i.shiftY = !0, i.adjustY = !0;
      break;
    case "left":
    case "right":
      i.shiftY = t.dropdownArrowOffsetVertical * 2 + r, i.shiftX = !0, i.adjustX = !0;
      break;
  }
  const a = Object.assign(Object.assign({}, i), o);
  return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a;
}
const Rd = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, Mw = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, Rw = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function Pw(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: o,
    borderRadius: i,
    visibleFirst: a
  } = e, s = t / 2, l = {};
  return Object.keys(Rd).forEach((c) => {
    const u = n && Mw[c] || Rd[c], d = Object.assign(Object.assign({}, u), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (l[c] = d, Rw.has(c) && (d.autoArrow = !1), c) {
      case "top":
      case "topLeft":
      case "topRight":
        d.offset[1] = -s - o;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        d.offset[1] = s + o;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        d.offset[0] = -s - o;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        d.offset[0] = s + o;
        break;
    }
    const h = im({
      contentRadius: i,
      limitVerticalRadius: !0
    });
    if (n)
      switch (c) {
        case "topLeft":
        case "bottomLeft":
          d.offset[0] = -h.dropdownArrowOffset - s;
          break;
        case "topRight":
        case "bottomRight":
          d.offset[0] = h.dropdownArrowOffset + s;
          break;
        case "leftTop":
        case "rightTop":
          d.offset[1] = -h.dropdownArrowOffset - s;
          break;
        case "leftBottom":
        case "rightBottom":
          d.offset[1] = h.dropdownArrowOffset + s;
          break;
      }
    d.overflow = $w(c, h, t, r), a && (d.htmlRegion = "visibleFirst");
  }), l;
}
const Nw = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: r,
    tooltipColor: n,
    tooltipBg: o,
    tooltipBorderRadius: i,
    zIndexPopup: a,
    controlHeight: s,
    boxShadowSecondary: l,
    paddingSM: c,
    paddingXS: u,
    tooltipRadiusOuter: d
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, en(e)), {
        position: "absolute",
        zIndex: a,
        display: "block",
        width: "max-content",
        maxWidth: r,
        visibility: "visible",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": o,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: s,
          minHeight: s,
          padding: `${c / 2}px ${u}px`,
          color: n,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: i,
          boxShadow: l,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: Math.min(i, om)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), hc(e, (h, b) => {
        let {
          darkColor: y
        } = b;
        return {
          [`&${t}-${h}`]: {
            [`${t}-inner`]: {
              backgroundColor: y
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": y
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    _w(_t(e, {
      borderRadiusOuter: d
    }), {
      colorBg: "var(--antd-arrow-background-color)",
      contentRadius: i,
      limitVerticalRadius: !0
    }),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, am = (e, t) => lr("Tooltip", (n) => {
  if (t === !1)
    return [];
  const {
    borderRadius: o,
    colorTextLightSolid: i,
    colorBgDefault: a,
    borderRadiusOuter: s
  } = n, l = _t(n, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: i,
    tooltipBorderRadius: o,
    tooltipBg: a,
    tooltipRadiusOuter: s > 4 ? 4 : s
  });
  return [Nw(l), tw(n, "zoom-big-fast")];
}, (n) => {
  let {
    zIndexPopupBase: o,
    colorBgSpotlight: i
  } = n;
  return {
    zIndexPopup: o + 70,
    colorBgDefault: i
  };
}, {
  resetStyle: !1
})(e), Tw = fa.map((e) => `${e}-inverse`);
function Rc(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(ue(Tw), ue(fa)).includes(e) : fa.includes(e);
}
function sm(e, t) {
  const r = Rc(t), n = ee({
    [`${e}-${t}`]: t && r
  }), o = {}, i = {};
  return t && !r && (o.background = t, i["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: o,
    arrowStyle: i
  };
}
const Iw = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: o,
    color: i,
    overlayInnerStyle: a
  } = e, {
    getPrefixCls: s
  } = f.useContext(Ge), l = s("tooltip", t), [c, u] = am(l, !0), d = sm(l, i), h = d.arrowStyle, b = Object.assign(Object.assign({}, a), d.overlayStyle), y = ee(u, l, `${l}-pure`, `${l}-placement-${n}`, r, d.className);
  return c(/* @__PURE__ */ f.createElement("div", {
    className: y,
    style: h
  }, /* @__PURE__ */ f.createElement("div", {
    className: `${l}-arrow`
  }), /* @__PURE__ */ f.createElement(nm, Object.assign({}, e, {
    className: u,
    prefixCls: l,
    overlayInnerStyle: b
  }), o)));
}, Fw = Iw;
var Dw = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Pc = /* @__PURE__ */ f.forwardRef((e, t) => {
  var r, n;
  const {
    prefixCls: o,
    openClassName: i,
    getTooltipContainer: a,
    overlayClassName: s,
    color: l,
    overlayInnerStyle: c,
    children: u,
    afterOpenChange: d,
    afterVisibleChange: h,
    destroyTooltipOnHide: b,
    arrow: y = !0,
    title: g,
    overlay: m,
    builtinPlacements: v,
    arrowPointAtCenter: p = !1,
    autoAdjustOverflow: w = !0
  } = e, x = !!y, [, E] = vn(), {
    getPopupContainer: C,
    getPrefixCls: S,
    direction: M
  } = f.useContext(Ge), O = er("Tooltip"), $ = f.useRef(null), D = () => {
    var de;
    (de = $.current) === null || de === void 0 || de.forceAlign();
  };
  f.useImperativeHandle(t, () => ({
    forceAlign: D,
    forcePopupAlign: () => {
      O.deprecated(!1, "forcePopupAlign", "forceAlign"), D();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((de) => {
    let [we, Ne] = de;
    O.deprecated(!(we in e), we, Ne);
  }), process.env.NODE_ENV !== "production" && O(!b || typeof b == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && O(!y || typeof y == "boolean" || !("arrowPointAtCenter" in y), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [P, F] = di(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), I = !g && !m && g !== 0, L = (de) => {
    var we, Ne;
    F(I ? !1 : de), I || ((we = e.onOpenChange) === null || we === void 0 || we.call(e, de), (Ne = e.onVisibleChange) === null || Ne === void 0 || Ne.call(e, de));
  }, T = f.useMemo(() => {
    var de, we;
    let Ne = p;
    return typeof y == "object" && (Ne = (we = (de = y.pointAtCenter) !== null && de !== void 0 ? de : y.arrowPointAtCenter) !== null && we !== void 0 ? we : p), v || Pw({
      arrowPointAtCenter: Ne,
      autoAdjustOverflow: w,
      arrowWidth: x ? E.sizePopupArrow : 0,
      borderRadius: E.borderRadius,
      offset: E.marginXXS,
      visibleFirst: !0
    });
  }, [p, y, v, E]), R = f.useMemo(() => g === 0 ? g : m || g || "", [m, g]), N = /* @__PURE__ */ f.createElement(Cl, null, typeof R == "function" ? R() : R), {
    getPopupContainer: z,
    placement: A = "top",
    mouseEnterDelay: j = 0.1,
    mouseLeaveDelay: V = 0.1,
    overlayStyle: X,
    rootClassName: K
  } = e, W = Dw(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), Q = S("tooltip", o), re = S(), oe = e["data-popover-inject"];
  let ie = P;
  !("open" in e) && !("visible" in e) && I && (ie = !1);
  const le = Da(u) && !Eh(u) ? u : /* @__PURE__ */ f.createElement("span", null, u), ye = le.props, pe = !ye.className || typeof ye.className == "string" ? ee(ye.className, i || `${Q}-open`) : ye.className, [ge, G] = am(Q, !oe), be = sm(Q, l), ve = be.arrowStyle, _e = Object.assign(Object.assign({}, c), be.overlayStyle), Le = ee(s, {
    [`${Q}-rtl`]: M === "rtl"
  }, be.className, K, G), [Z, q] = Mb("Tooltip", W.zIndex), se = /* @__PURE__ */ f.createElement(Ow, Object.assign({}, W, {
    zIndex: Z,
    showArrow: x,
    placement: A,
    mouseEnterDelay: j,
    mouseLeaveDelay: V,
    prefixCls: Q,
    overlayClassName: Le,
    overlayStyle: Object.assign(Object.assign({}, ve), X),
    getTooltipContainer: z || a || C,
    ref: $,
    builtinPlacements: T,
    overlay: N,
    visible: ie,
    onVisibleChange: L,
    afterVisibleChange: d ?? h,
    overlayInnerStyle: _e,
    arrowContent: /* @__PURE__ */ f.createElement("span", {
      className: `${Q}-arrow-content`
    }),
    motion: {
      motionName: Vb(re, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!b
  }), ie ? hn(le, {
    className: pe
  }) : le);
  return ge(/* @__PURE__ */ f.createElement(Mh.Provider, {
    value: q
  }, se));
});
process.env.NODE_ENV !== "production" && (Pc.displayName = "Tooltip");
Pc._InternalPanelDoNotUseOrYouWillBeFired = Fw;
const lm = Pc;
var Aw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z" } }] }, name: "vertical-align-top", theme: "outlined" };
const jw = Aw;
var cm = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: jw
  }));
};
process.env.NODE_ENV !== "production" && (cm.displayName = "VerticalAlignTopOutlined");
const kw = /* @__PURE__ */ f.forwardRef(cm), Lw = new ct("antStatusProcessing", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0.5
  },
  "100%": {
    transform: "scale(2.4)",
    opacity: 0
  }
}), zw = new ct("antZoomBadgeIn", {
  "0%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1) translate(50%, -50%)"
  }
}), Vw = new ct("antZoomBadgeOut", {
  "0%": {
    transform: "scale(1) translate(50%, -50%)"
  },
  "100%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  }
}), Ww = new ct("antNoWrapperZoomBadgeIn", {
  "0%": {
    transform: "scale(0)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)"
  }
}), Bw = new ct("antNoWrapperZoomBadgeOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0)",
    opacity: 0
  }
}), Hw = new ct("antBadgeLoadingCircle", {
  "0%": {
    transformOrigin: "50%"
  },
  "100%": {
    transform: "translate(50%, -50%) rotate(360deg)",
    transformOrigin: "50%"
  }
}), Yw = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    antCls: n,
    badgeShadowSize: o,
    motionDurationSlow: i,
    textFontSize: a,
    textFontSizeSM: s,
    statusSize: l,
    dotSize: c,
    textFontWeight: u,
    indicatorHeight: d,
    indicatorHeightSM: h,
    marginXS: b
  } = e, y = `${n}-scroll-number`, g = hc(e, (m, v) => {
    let {
      darkColor: p
    } = v;
    return {
      [`&${t} ${t}-color-${m}`]: {
        background: p,
        [`&:not(${t}-count)`]: {
          color: p
        }
      }
    };
  });
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, en(e)), {
      position: "relative",
      display: "inline-block",
      width: "fit-content",
      lineHeight: 1,
      [`${t}-count`]: {
        zIndex: e.indicatorZIndex,
        minWidth: d,
        height: d,
        color: e.badgeTextColor,
        fontWeight: u,
        fontSize: a,
        lineHeight: `${d}px`,
        whiteSpace: "nowrap",
        textAlign: "center",
        background: e.badgeColor,
        borderRadius: d / 2,
        boxShadow: `0 0 0 ${o}px ${e.badgeShadowColor}`,
        transition: `background ${e.motionDurationMid}`,
        a: {
          color: e.badgeTextColor
        },
        "a:hover": {
          color: e.badgeTextColor
        },
        "a:hover &": {
          background: e.badgeColorHover
        }
      },
      [`${t}-count-sm`]: {
        minWidth: h,
        height: h,
        fontSize: s,
        lineHeight: `${h}px`,
        borderRadius: h / 2
      },
      [`${t}-multiple-words`]: {
        padding: `0 ${e.paddingXS}px`,
        bdi: {
          unicodeBidi: "plaintext"
        }
      },
      [`${t}-dot`]: {
        zIndex: e.indicatorZIndex,
        width: c,
        minWidth: c,
        height: c,
        background: e.badgeColor,
        borderRadius: "100%",
        boxShadow: `0 0 0 ${o}px ${e.badgeShadowColor}`
      },
      [`${t}-dot${y}`]: {
        transition: `background ${i}`
      },
      [`${t}-count, ${t}-dot, ${y}-custom-component`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        transform: "translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&${r}-spin`]: {
          animationName: Hw,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        }
      },
      [`&${t}-status`]: {
        lineHeight: "inherit",
        verticalAlign: "baseline",
        [`${t}-status-dot`]: {
          position: "relative",
          top: -1,
          display: "inline-block",
          width: l,
          height: l,
          verticalAlign: "middle",
          borderRadius: "50%"
        },
        [`${t}-status-success`]: {
          backgroundColor: e.colorSuccess
        },
        [`${t}-status-processing`]: {
          overflow: "visible",
          color: e.colorPrimary,
          backgroundColor: e.colorPrimary,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            width: "100%",
            height: "100%",
            borderWidth: o,
            borderStyle: "solid",
            borderColor: "inherit",
            borderRadius: "50%",
            animationName: Lw,
            animationDuration: e.badgeProcessingDuration,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            content: '""'
          }
        },
        [`${t}-status-default`]: {
          backgroundColor: e.colorTextPlaceholder
        },
        [`${t}-status-error`]: {
          backgroundColor: e.colorError
        },
        [`${t}-status-warning`]: {
          backgroundColor: e.colorWarning
        },
        [`${t}-status-text`]: {
          marginInlineStart: b,
          color: e.colorText,
          fontSize: e.fontSize
        }
      }
    }), g), {
      [`${t}-zoom-appear, ${t}-zoom-enter`]: {
        animationName: zw,
        animationDuration: e.motionDurationSlow,
        animationTimingFunction: e.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`${t}-zoom-leave`]: {
        animationName: Vw,
        animationDuration: e.motionDurationSlow,
        animationTimingFunction: e.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`&${t}-not-a-wrapper`]: {
        [`${t}-zoom-appear, ${t}-zoom-enter`]: {
          animationName: Ww,
          animationDuration: e.motionDurationSlow,
          animationTimingFunction: e.motionEaseOutBack
        },
        [`${t}-zoom-leave`]: {
          animationName: Bw,
          animationDuration: e.motionDurationSlow,
          animationTimingFunction: e.motionEaseOutBack
        },
        [`&:not(${t}-status)`]: {
          verticalAlign: "middle"
        },
        [`${y}-custom-component, ${t}-count`]: {
          transform: "none"
        },
        [`${y}-custom-component, ${y}`]: {
          position: "relative",
          top: "auto",
          display: "block",
          transformOrigin: "50% 50%"
        }
      },
      [`${y}`]: {
        overflow: "hidden",
        [`${y}-only`]: {
          position: "relative",
          display: "inline-block",
          height: d,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,
          WebkitTransformStyle: "preserve-3d",
          WebkitBackfaceVisibility: "hidden",
          [`> p${y}-only-unit`]: {
            height: d,
            margin: 0,
            WebkitTransformStyle: "preserve-3d",
            WebkitBackfaceVisibility: "hidden"
          }
        },
        [`${y}-symbol`]: {
          verticalAlign: "top"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl",
        [`${t}-count, ${t}-dot, ${y}-custom-component`]: {
          transform: "translate(-50%, -50%)"
        }
      }
    })
  };
}, um = (e) => {
  const {
    fontSize: t,
    lineHeight: r,
    lineWidth: n,
    marginXS: o,
    colorBorderBg: i
  } = e, a = Math.round(t * r), s = n, l = e.colorBgContainer, c = e.colorError, u = e.colorErrorHover;
  return _t(e, {
    badgeFontHeight: a,
    badgeShadowSize: s,
    badgeTextColor: l,
    badgeColor: c,
    badgeColorHover: u,
    badgeShadowColor: i,
    badgeProcessingDuration: "1.2s",
    badgeRibbonOffset: o,
    // Follow token just by Design. Not related with token
    badgeRibbonCornerTransform: "scaleY(0.75)",
    badgeRibbonCornerFilter: "brightness(75%)"
  });
}, dm = (e) => {
  const {
    fontSize: t,
    lineHeight: r,
    fontSizeSM: n,
    lineWidth: o
  } = e;
  return {
    indicatorZIndex: "auto",
    indicatorHeight: Math.round(t * r) - 2 * o,
    indicatorHeightSM: t,
    dotSize: n / 2,
    textFontSize: n,
    textFontSizeSM: n,
    textFontWeight: "normal",
    statusSize: n / 2
  };
}, Gw = lr("Badge", (e) => {
  const t = um(e);
  return [Yw(t)];
}, dm), Uw = (e) => {
  const {
    antCls: t,
    badgeFontHeight: r,
    marginXS: n,
    badgeRibbonOffset: o
  } = e, i = `${t}-ribbon`, a = `${t}-ribbon-wrapper`, s = hc(e, (l, c) => {
    let {
      darkColor: u
    } = c;
    return {
      [`&${i}-color-${l}`]: {
        background: u,
        color: u
      }
    };
  });
  return {
    [`${a}`]: {
      position: "relative"
    },
    [`${i}`]: Object.assign(Object.assign(Object.assign(Object.assign({}, en(e)), {
      position: "absolute",
      top: n,
      padding: `0 ${e.paddingXS}px`,
      color: e.colorPrimary,
      lineHeight: `${r}px`,
      whiteSpace: "nowrap",
      backgroundColor: e.colorPrimary,
      borderRadius: e.borderRadiusSM,
      [`${i}-text`]: {
        color: e.colorTextLightSolid
      },
      [`${i}-corner`]: {
        position: "absolute",
        top: "100%",
        width: o,
        height: o,
        color: "currentcolor",
        border: `${o / 2}px solid`,
        transform: e.badgeRibbonCornerTransform,
        transformOrigin: "top",
        filter: e.badgeRibbonCornerFilter
      }
    }), s), {
      [`&${i}-placement-end`]: {
        insetInlineEnd: -o,
        borderEndEndRadius: 0,
        [`${i}-corner`]: {
          insetInlineEnd: 0,
          borderInlineEndColor: "transparent",
          borderBlockEndColor: "transparent"
        }
      },
      [`&${i}-placement-start`]: {
        insetInlineStart: -o,
        borderEndStartRadius: 0,
        [`${i}-corner`]: {
          insetInlineStart: 0,
          borderBlockEndColor: "transparent",
          borderInlineStartColor: "transparent"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, qw = lr(["Badge", "Ribbon"], (e) => {
  const t = um(e);
  return [Uw(t)];
}, dm), fm = (e) => {
  const {
    className: t,
    prefixCls: r,
    style: n,
    color: o,
    children: i,
    text: a,
    placement: s = "end",
    rootClassName: l
  } = e, {
    getPrefixCls: c,
    direction: u
  } = f.useContext(Ge), d = c("ribbon", r), h = Rc(o, !1), b = ee(d, `${d}-placement-${s}`, {
    [`${d}-rtl`]: u === "rtl",
    [`${d}-color-${o}`]: h
  }, t), [y, g] = qw(d), m = {}, v = {};
  return o && !h && (m.background = o, v.color = o), y(/* @__PURE__ */ f.createElement("div", {
    className: ee(`${d}-wrapper`, l, g)
  }, i, /* @__PURE__ */ f.createElement("div", {
    className: ee(b, g),
    style: Object.assign(Object.assign({}, m), n)
  }, /* @__PURE__ */ f.createElement("span", {
    className: `${d}-text`
  }, a), /* @__PURE__ */ f.createElement("div", {
    className: `${d}-corner`,
    style: v
  }))));
};
process.env.NODE_ENV !== "production" && (fm.displayName = "Ribbon");
const Xw = fm;
function Pd(e) {
  let {
    prefixCls: t,
    value: r,
    current: n,
    offset: o = 0
  } = e, i;
  return o && (i = {
    position: "absolute",
    top: `${o}00%`,
    left: 0
  }), /* @__PURE__ */ f.createElement("span", {
    style: i,
    className: ee(`${t}-only-unit`, {
      current: n
    })
  }, r);
}
function Kw(e, t, r) {
  let n = e, o = 0;
  for (; (n + 10) % 10 !== t; )
    n += r, o += r;
  return o;
}
function Zw(e) {
  const {
    prefixCls: t,
    count: r,
    value: n
  } = e, o = Number(n), i = Math.abs(r), [a, s] = f.useState(o), [l, c] = f.useState(i), u = () => {
    s(o), c(i);
  };
  f.useEffect(() => {
    const b = setTimeout(() => {
      u();
    }, 1e3);
    return () => {
      clearTimeout(b);
    };
  }, [o]);
  let d, h;
  if (a === o || Number.isNaN(o) || Number.isNaN(a))
    d = [/* @__PURE__ */ f.createElement(Pd, Object.assign({}, e, {
      key: o,
      current: !0
    }))], h = {
      transition: "none"
    };
  else {
    d = [];
    const b = o + 10, y = [];
    for (let v = o; v <= b; v += 1)
      y.push(v);
    const g = y.findIndex((v) => v % 10 === a);
    d = y.map((v, p) => {
      const w = v % 10;
      return /* @__PURE__ */ f.createElement(Pd, Object.assign({}, e, {
        key: v,
        value: w,
        offset: p - g,
        current: p === g
      }));
    });
    const m = l < i ? 1 : -1;
    h = {
      transform: `translateY(${-Kw(a, o, m)}00%)`
    };
  }
  return /* @__PURE__ */ f.createElement("span", {
    className: `${t}-only`,
    style: h,
    onTransitionEnd: u
  }, d);
}
var Qw = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Jw = /* @__PURE__ */ f.forwardRef((e, t) => {
  const {
    prefixCls: r,
    count: n,
    className: o,
    motionClassName: i,
    style: a,
    title: s,
    show: l,
    component: c = "sup",
    children: u
  } = e, d = Qw(e, ["prefixCls", "count", "className", "motionClassName", "style", "title", "show", "component", "children"]), {
    getPrefixCls: h
  } = f.useContext(Ge), b = h("scroll-number", r), y = Object.assign(Object.assign({}, d), {
    "data-show": l,
    style: a,
    className: ee(b, o, i),
    title: s
  });
  let g = n;
  if (n && Number(n) % 1 === 0) {
    const m = String(n).split("");
    g = /* @__PURE__ */ f.createElement("bdi", null, m.map((v, p) => /* @__PURE__ */ f.createElement(Zw, {
      prefixCls: b,
      count: Number(n),
      value: v,
      // eslint-disable-next-line react/no-array-index-key
      key: m.length - p
    })));
  }
  return a && a.borderColor && (y.style = Object.assign(Object.assign({}, a), {
    boxShadow: `0 0 0 1px ${a.borderColor} inset`
  })), u ? hn(u, (m) => ({
    className: ee(`${b}-custom-component`, m == null ? void 0 : m.className, i)
  })) : /* @__PURE__ */ f.createElement(c, Object.assign({}, y, {
    ref: t
  }), g);
}), ex = Jw;
var tx = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const rx = (e, t) => {
  var r, n, o, i, a;
  const {
    prefixCls: s,
    scrollNumberPrefixCls: l,
    children: c,
    status: u,
    text: d,
    color: h,
    count: b = null,
    overflowCount: y = 99,
    dot: g = !1,
    size: m = "default",
    title: v,
    offset: p,
    style: w,
    className: x,
    rootClassName: E,
    classNames: C,
    styles: S,
    showZero: M = !1
  } = e, O = tx(e, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "rootClassName", "classNames", "styles", "showZero"]), {
    getPrefixCls: $,
    direction: D,
    badge: P
  } = f.useContext(Ge), F = $("badge", s), [I, L] = Gw(F), T = b > y ? `${y}+` : b, R = T === "0" || T === 0, N = b === null || R && !M, z = (u != null || h != null) && N, A = g && !R, j = A ? "" : T, V = br(() => (j == null || j === "" || R && !M) && !A, [j, R, M, A]), X = Ze(b);
  V || (X.current = b);
  const K = X.current, W = Ze(j);
  V || (W.current = j);
  const Q = W.current, re = Ze(A);
  V || (re.current = A);
  const oe = br(() => {
    if (!p)
      return Object.assign(Object.assign({}, P == null ? void 0 : P.style), w);
    const ve = {
      marginTop: p[1]
    };
    return D === "rtl" ? ve.left = parseInt(p[0], 10) : ve.right = -parseInt(p[0], 10), Object.assign(Object.assign(Object.assign({}, ve), P == null ? void 0 : P.style), w);
  }, [D, p, w, P == null ? void 0 : P.style]), ie = v ?? (typeof K == "string" || typeof K == "number" ? K : void 0), le = V || !d ? null : /* @__PURE__ */ f.createElement("span", {
    className: `${F}-status-text`
  }, d), ye = !K || typeof K != "object" ? void 0 : hn(K, (ve) => ({
    style: Object.assign(Object.assign({}, oe), ve.style)
  })), pe = Rc(h, !1), ge = ee(C == null ? void 0 : C.indicator, (r = P == null ? void 0 : P.classNames) === null || r === void 0 ? void 0 : r.indicator, {
    [`${F}-status-dot`]: z,
    [`${F}-status-${u}`]: !!u,
    [`${F}-color-${h}`]: pe
  }), G = {};
  h && !pe && (G.color = h, G.background = h);
  const be = ee(F, {
    [`${F}-status`]: z,
    [`${F}-not-a-wrapper`]: !c,
    [`${F}-rtl`]: D === "rtl"
  }, x, E, P == null ? void 0 : P.className, (n = P == null ? void 0 : P.classNames) === null || n === void 0 ? void 0 : n.root, C == null ? void 0 : C.root, L);
  if (!c && z) {
    const ve = oe.color;
    return I(/* @__PURE__ */ f.createElement("span", Object.assign({}, O, {
      className: be,
      style: Object.assign(Object.assign(Object.assign({}, S == null ? void 0 : S.root), (o = P == null ? void 0 : P.styles) === null || o === void 0 ? void 0 : o.root), oe)
    }), /* @__PURE__ */ f.createElement("span", {
      className: ge,
      style: Object.assign(Object.assign(Object.assign({}, S == null ? void 0 : S.indicator), (i = P == null ? void 0 : P.styles) === null || i === void 0 ? void 0 : i.indicator), G)
    }), d && /* @__PURE__ */ f.createElement("span", {
      style: {
        color: ve
      },
      className: `${F}-status-text`
    }, d)));
  }
  return I(/* @__PURE__ */ f.createElement("span", Object.assign({
    ref: t
  }, O, {
    className: be,
    style: Object.assign(Object.assign({}, (a = P == null ? void 0 : P.styles) === null || a === void 0 ? void 0 : a.root), S == null ? void 0 : S.root)
  }), c, /* @__PURE__ */ f.createElement(tn, {
    visible: !V,
    motionName: `${F}-zoom`,
    motionAppear: !1,
    motionDeadline: 1e3
  }, (ve) => {
    let {
      className: _e,
      ref: Le
    } = ve;
    var Z, q;
    const se = $("scroll-number", l), de = re.current, we = ee(C == null ? void 0 : C.indicator, (Z = P == null ? void 0 : P.classNames) === null || Z === void 0 ? void 0 : Z.indicator, {
      [`${F}-dot`]: de,
      [`${F}-count`]: !de,
      [`${F}-count-sm`]: m === "small",
      [`${F}-multiple-words`]: !de && Q && Q.toString().length > 1,
      [`${F}-status-${u}`]: !!u,
      [`${F}-color-${h}`]: pe
    });
    let Ne = Object.assign(Object.assign(Object.assign({}, S == null ? void 0 : S.indicator), (q = P == null ? void 0 : P.styles) === null || q === void 0 ? void 0 : q.indicator), oe);
    return h && !pe && (Ne = Ne || {}, Ne.background = h), /* @__PURE__ */ f.createElement(ex, {
      prefixCls: se,
      show: !V,
      motionClassName: _e,
      className: we,
      count: Q,
      title: ie,
      style: Ne,
      key: "scrollNumber",
      ref: Le
    }, ye);
  }), le));
}, Nc = /* @__PURE__ */ f.forwardRef(rx);
Nc.Ribbon = Xw;
process.env.NODE_ENV !== "production" && (Nc.displayName = "Badge");
const nx = Nc, ox = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), hm = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), jl = (e) => ({
  borderColor: e.activeBorderColor,
  boxShadow: e.activeShadow,
  outline: 0,
  backgroundColor: e.activeBg
}), mm = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": Object.assign({}, hm(_t(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), gm = (e) => {
  const {
    paddingBlockLG: t,
    fontSizeLG: r,
    lineHeightLG: n,
    borderRadiusLG: o,
    paddingInlineLG: i
  } = e;
  return {
    padding: `${t}px ${i}px`,
    fontSize: r,
    lineHeight: n,
    borderRadius: o
  };
}, vm = (e) => ({
  padding: `${e.paddingBlockSM}px ${e.paddingInlineSM}px`,
  borderRadius: e.borderRadiusSM
}), pm = (e, t) => {
  const {
    componentCls: r,
    colorError: n,
    colorWarning: o,
    errorActiveShadow: i,
    warningActiveShadow: a,
    colorErrorBorderHover: s,
    colorWarningBorderHover: l
  } = e;
  return {
    [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
      borderColor: n,
      "&:hover": {
        borderColor: s
      },
      "&:focus, &:focus-within": Object.assign({}, jl(_t(e, {
        activeBorderColor: n,
        activeShadow: i
      }))),
      [`${r}-prefix, ${r}-suffix`]: {
        color: n
      }
    },
    [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
      borderColor: o,
      "&:hover": {
        borderColor: l
      },
      "&:focus, &:focus-within": Object.assign({}, jl(_t(e, {
        activeBorderColor: o,
        activeShadow: a
      }))),
      [`${r}-prefix, ${r}-suffix`]: {
        color: o
      }
    }
  };
}, ym = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${e.paddingBlock}px ${e.paddingInline}px`,
  color: e.colorText,
  fontSize: e.fontSize,
  lineHeight: e.lineHeight,
  backgroundColor: e.colorBgContainer,
  backgroundImage: "none",
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: e.colorBorder,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, ox(e.colorTextPlaceholder)), {
  "&:hover": Object.assign({}, hm(e)),
  "&:focus, &:focus-within": Object.assign({}, jl(e)),
  "&-disabled, &[disabled]": Object.assign({}, mm(e)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, gm(e)),
  "&-sm": Object.assign({}, vm(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), ix = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, gm(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, vm(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${e.paddingInline}px`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.fontSize,
        textAlign: "center",
        backgroundColor: e.addonBg,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `-${e.paddingBlock + 1}px -${e.paddingInline}px`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${e.lineWidth}px ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${r}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${r}-cascader-picker`]: {
          margin: `-9px -${e.paddingInline}px`,
          backgroundColor: "transparent",
          [`${r}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${t}`]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, uy()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: -e.lineWidth,
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${t}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${r}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${r}-select > ${r}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${r}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: -e.lineWidth,
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, ax = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n
  } = e, o = 16, i = (r - n * 2 - o) / 2;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, en(e)), ym(e)), pm(e, t)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: r,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, sx = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${e.inputAffixPadding}px`
      }
    }
  };
}, lx = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: r,
    colorTextDescription: n,
    motionDurationSlow: o,
    colorIcon: i,
    colorIconHover: a,
    iconCls: s
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ym(e)), {
      display: "inline-flex",
      [`&:not(${t}-affix-wrapper-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${t}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${t}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: n
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: r
        },
        "&-suffix": {
          marginInlineStart: r
        }
      }
    }), sx(e)), {
      // password
      [`${s}${t}-password-icon`]: {
        color: i,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: a
        }
      }
    }), pm(e, `${t}-affix-wrapper`))
  };
}, cx = (e) => {
  const {
    componentCls: t,
    colorError: r,
    colorWarning: n,
    borderRadiusLG: o,
    borderRadiusSM: i
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, en(e)), ix(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: o,
            fontSize: e.fontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: i
          }
        },
        // Status
        "&-status-error": {
          [`${t}-group-addon`]: {
            color: r,
            borderColor: r
          }
        },
        "&-status-warning": {
          [`${t}-group-addon`]: {
            color: n,
            borderColor: n
          }
        },
        "&-disabled": {
          [`${t}-group-addon`]: Object.assign({}, mm(e))
        },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      }
    })
  };
}, ux = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e, n = `${t}-search`;
  return {
    [n]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${n}-button:not(${r}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.lineHeightLG - 2e-4
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${n}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${n}-button:not(${r}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${r}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${n}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${n}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${n}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: -e.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, dx = (e) => {
  const {
    componentCls: t,
    paddingLG: r
  } = e, n = `${t}-textarea`;
  return {
    [n]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: -e.fontSize * e.lineHeight,
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      "&-allow-clear": {
        [`> ${t}`]: {
          paddingInlineEnd: r
        }
      },
      [`&-affix-wrapper${n}-has-feedback`]: {
        [`${t}`]: {
          paddingInlineEnd: r
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingXS,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${n}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      }
    }
  };
}, fx = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
};
function hx(e) {
  return _t(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const mx = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: o,
    controlHeightSM: i,
    controlHeightLG: a,
    fontSizeLG: s,
    lineHeightLG: l,
    paddingSM: c,
    controlPaddingHorizontalSM: u,
    controlPaddingHorizontal: d,
    colorFillAlter: h,
    colorPrimaryHover: b,
    colorPrimary: y,
    controlOutlineWidth: g,
    controlOutline: m,
    colorErrorOutline: v,
    colorWarningOutline: p
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - r * n) / 2 * 10) / 10 - o, 0),
    paddingBlockSM: Math.max(Math.round((i - r * n) / 2 * 10) / 10 - o, 0),
    paddingBlockLG: Math.ceil((a - s * l) / 2 * 10) / 10 - o,
    paddingInline: c - o,
    paddingInlineSM: u - o,
    paddingInlineLG: d - o,
    addonBg: h,
    activeBorderColor: y,
    hoverBorderColor: b,
    activeShadow: `0 0 0 ${g}px ${m}`,
    errorActiveShadow: `0 0 0 ${g}px ${v}`,
    warningActiveShadow: `0 0 0 ${g}px ${p}`,
    hoverBg: "",
    activeBg: ""
  };
}, Tc = lr("Input", (e) => {
  const t = _t(e, hx(e));
  return [
    ax(t),
    dx(t),
    lx(t),
    cx(t),
    ux(t),
    fx(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    zh(t)
  ];
}, mx), gx = /* @__PURE__ */ Oa({}), bm = gx, vx = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, px = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, yx = (e, t) => {
  const {
    componentCls: r,
    gridColumns: n
  } = e, o = {};
  for (let i = n; i >= 0; i--)
    i === 0 ? (o[`${r}${t}-${i}`] = {
      display: "none"
    }, o[`${r}-push-${i}`] = {
      insetInlineStart: "auto"
    }, o[`${r}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, o[`${r}${t}-push-${i}`] = {
      insetInlineStart: "auto"
    }, o[`${r}${t}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, o[`${r}${t}-offset-${i}`] = {
      marginInlineStart: 0
    }, o[`${r}${t}-order-${i}`] = {
      order: 0
    }) : (o[`${r}${t}-${i}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        "--ant-display": "block",
        // Fallback to display if variable not support
        display: "block"
      },
      {
        display: "var(--ant-display)",
        flex: `0 0 ${i / n * 100}%`,
        maxWidth: `${i / n * 100}%`
      }
    ], o[`${r}${t}-push-${i}`] = {
      insetInlineStart: `${i / n * 100}%`
    }, o[`${r}${t}-pull-${i}`] = {
      insetInlineEnd: `${i / n * 100}%`
    }, o[`${r}${t}-offset-${i}`] = {
      marginInlineStart: `${i / n * 100}%`
    }, o[`${r}${t}-order-${i}`] = {
      order: i
    });
  return o;
}, kl = (e, t) => yx(e, t), bx = (e, t, r) => ({
  [`@media (min-width: ${t}px)`]: Object.assign({}, kl(e, r))
}), Sx = lr("Grid", (e) => [vx(e)]), wx = lr("Grid", (e) => {
  const t = _t(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), r = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [px(t), kl(t, ""), kl(t, "-xs"), Object.keys(r).map((n) => bx(t, r[n], n)).reduce((n, o) => Object.assign(Object.assign({}, n), o), {})];
});
var xx = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Cx(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const Ex = ["xs", "sm", "md", "lg", "xl", "xxl"], Sm = /* @__PURE__ */ f.forwardRef((e, t) => {
  const {
    getPrefixCls: r,
    direction: n
  } = f.useContext(Ge), {
    gutter: o,
    wrap: i
  } = f.useContext(bm), {
    prefixCls: a,
    span: s,
    order: l,
    offset: c,
    push: u,
    pull: d,
    className: h,
    children: b,
    flex: y,
    style: g
  } = e, m = xx(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), v = r("col", a), [p, w] = wx(v);
  let x = {};
  Ex.forEach((S) => {
    let M = {};
    const O = e[S];
    typeof O == "number" ? M.span = O : typeof O == "object" && (M = O || {}), delete m[S], x = Object.assign(Object.assign({}, x), {
      [`${v}-${S}-${M.span}`]: M.span !== void 0,
      [`${v}-${S}-order-${M.order}`]: M.order || M.order === 0,
      [`${v}-${S}-offset-${M.offset}`]: M.offset || M.offset === 0,
      [`${v}-${S}-push-${M.push}`]: M.push || M.push === 0,
      [`${v}-${S}-pull-${M.pull}`]: M.pull || M.pull === 0,
      [`${v}-${S}-flex-${M.flex}`]: M.flex || M.flex === "auto",
      [`${v}-rtl`]: n === "rtl"
    });
  });
  const E = ee(v, {
    [`${v}-${s}`]: s !== void 0,
    [`${v}-order-${l}`]: l,
    [`${v}-offset-${c}`]: c,
    [`${v}-push-${u}`]: u,
    [`${v}-pull-${d}`]: d
  }, h, x, w), C = {};
  if (o && o[0] > 0) {
    const S = o[0] / 2;
    C.paddingLeft = S, C.paddingRight = S;
  }
  return y && (C.flex = Cx(y), i === !1 && !C.minWidth && (C.minWidth = 0)), p(/* @__PURE__ */ f.createElement("div", Object.assign({}, m, {
    style: Object.assign(Object.assign({}, C), g),
    className: E,
    ref: t
  }), b));
});
process.env.NODE_ENV !== "production" && (Sm.displayName = "Col");
const wm = Sm;
var Ox = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Nd(e, t) {
  const [r, n] = f.useState(typeof e == "string" ? e : ""), o = () => {
    if (typeof e == "string" && n(e), typeof e == "object")
      for (let i = 0; i < ni.length; i++) {
        const a = ni[i];
        if (!t[a])
          continue;
        const s = e[a];
        if (s !== void 0) {
          n(s);
          return;
        }
      }
  };
  return f.useEffect(() => {
    o();
  }, [JSON.stringify(e), t]), r;
}
const xm = /* @__PURE__ */ f.forwardRef((e, t) => {
  const {
    prefixCls: r,
    justify: n,
    align: o,
    className: i,
    style: a,
    children: s,
    gutter: l = 0,
    wrap: c
  } = e, u = Ox(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]), {
    getPrefixCls: d,
    direction: h
  } = f.useContext(Ge), [b, y] = f.useState({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), [g, m] = f.useState({
    xs: !1,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
    xxl: !1
  }), v = Nd(o, g), p = Nd(n, g), w = f.useRef(l), x = ww();
  f.useEffect(() => {
    const T = x.subscribe((R) => {
      m(R);
      const N = w.current || 0;
      (!Array.isArray(N) && typeof N == "object" || Array.isArray(N) && (typeof N[0] == "object" || typeof N[1] == "object")) && y(R);
    });
    return () => x.unsubscribe(T);
  }, []);
  const E = () => {
    const T = [void 0, void 0];
    return (Array.isArray(l) ? l : [l, void 0]).forEach((N, z) => {
      if (typeof N == "object")
        for (let A = 0; A < ni.length; A++) {
          const j = ni[A];
          if (b[j] && N[j] !== void 0) {
            T[z] = N[j];
            break;
          }
        }
      else
        T[z] = N;
    }), T;
  }, C = d("row", r), [S, M] = Sx(C), O = E(), $ = ee(C, {
    [`${C}-no-wrap`]: c === !1,
    [`${C}-${p}`]: p,
    [`${C}-${v}`]: v,
    [`${C}-rtl`]: h === "rtl"
  }, i, M), D = {}, P = O[0] != null && O[0] > 0 ? O[0] / -2 : void 0;
  P && (D.marginLeft = P, D.marginRight = P), [, D.rowGap] = O;
  const [F, I] = O, L = f.useMemo(() => ({
    gutter: [F, I],
    wrap: c
  }), [F, I, c]);
  return S(/* @__PURE__ */ f.createElement(bm.Provider, {
    value: L
  }, /* @__PURE__ */ f.createElement("div", Object.assign({}, u, {
    className: $,
    style: Object.assign(Object.assign({}, D), a),
    ref: t
  }), s)));
});
process.env.NODE_ENV !== "production" && (xm.displayName = "Row");
const _x = xm;
function oo(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function As(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function va(e, t, r, n) {
  if (r) {
    var o = t;
    if (t.type === "click") {
      var i = e.cloneNode(!0);
      o = Object.create(t, {
        target: {
          value: i
        },
        currentTarget: {
          value: i
        }
      }), i.value = "", r(o);
      return;
    }
    if (n !== void 0) {
      o = Object.create(t, {
        target: {
          value: e
        },
        currentTarget: {
          value: e
        }
      }), e.type !== "file" && (e.value = n), r(o);
      return;
    }
    r(o);
  }
}
function $x(e, t) {
  if (e) {
    e.focus(t);
    var r = t || {}, n = r.cursor;
    if (n) {
      var o = e.value.length;
      switch (n) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(o, o);
          break;
        default:
          e.setSelectionRange(0, o);
      }
    }
  }
}
var Cm = function(t) {
  var r, n, o = t.inputElement, i = t.prefixCls, a = t.prefix, s = t.suffix, l = t.addonBefore, c = t.addonAfter, u = t.className, d = t.style, h = t.disabled, b = t.readOnly, y = t.focused, g = t.triggerFocus, m = t.allowClear, v = t.value, p = t.handleReset, w = t.hidden, x = t.classes, E = t.classNames, C = t.dataAttrs, S = t.styles, M = t.components, O = (M == null ? void 0 : M.affixWrapper) || "span", $ = (M == null ? void 0 : M.groupWrapper) || "span", D = (M == null ? void 0 : M.wrapper) || "span", P = (M == null ? void 0 : M.groupAddon) || "span", F = Ze(null), I = function(Q) {
    var re;
    (re = F.current) !== null && re !== void 0 && re.contains(Q.target) && (g == null || g());
  }, L = function() {
    var Q;
    if (!m)
      return null;
    var re = !h && !b && v, oe = "".concat(i, "-clear-icon"), ie = ke(m) === "object" && m !== null && m !== void 0 && m.clearIcon ? m.clearIcon : "✖";
    return /* @__PURE__ */ Y.createElement("span", {
      onClick: p,
      onMouseDown: function(ye) {
        return ye.preventDefault();
      },
      className: ee(oe, (Q = {}, k(Q, "".concat(oe, "-hidden"), !re), k(Q, "".concat(oe, "-has-suffix"), !!s), Q)),
      role: "button",
      tabIndex: -1
    }, ie);
  }, T = /* @__PURE__ */ fs(o, {
    value: v,
    hidden: w,
    className: ee((r = o.props) === null || r === void 0 ? void 0 : r.className, !As(t) && !oo(t) && u) || null,
    style: B(B({}, (n = o.props) === null || n === void 0 ? void 0 : n.style), !As(t) && !oo(t) ? d : {})
  });
  if (As(t)) {
    var R, N = "".concat(i, "-affix-wrapper"), z = ee(N, (R = {}, k(R, "".concat(N, "-disabled"), h), k(R, "".concat(N, "-focused"), y), k(R, "".concat(N, "-readonly"), b), k(R, "".concat(N, "-input-with-clear-btn"), s && m && v), R), !oo(t) && u, x == null ? void 0 : x.affixWrapper, E == null ? void 0 : E.affixWrapper), A = (s || m) && /* @__PURE__ */ Y.createElement("span", {
      className: ee("".concat(i, "-suffix"), E == null ? void 0 : E.suffix),
      style: S == null ? void 0 : S.suffix
    }, L(), s);
    T = /* @__PURE__ */ Y.createElement(O, Ve({
      className: z,
      style: B(B({}, oo(t) ? void 0 : d), S == null ? void 0 : S.affixWrapper),
      hidden: !oo(t) && w,
      onClick: I
    }, C == null ? void 0 : C.affixWrapper, {
      ref: F
    }), a && /* @__PURE__ */ Y.createElement("span", {
      className: ee("".concat(i, "-prefix"), E == null ? void 0 : E.prefix),
      style: S == null ? void 0 : S.prefix
    }, a), /* @__PURE__ */ fs(o, {
      value: v,
      hidden: null
    }), A);
  }
  if (oo(t)) {
    var j = "".concat(i, "-group"), V = "".concat(j, "-addon"), X = ee("".concat(i, "-wrapper"), j, x == null ? void 0 : x.wrapper), K = ee("".concat(i, "-group-wrapper"), u, x == null ? void 0 : x.group);
    return /* @__PURE__ */ Y.createElement($, {
      className: K,
      style: d,
      hidden: w
    }, /* @__PURE__ */ Y.createElement(D, {
      className: X
    }, l && /* @__PURE__ */ Y.createElement(P, {
      className: V
    }, l), /* @__PURE__ */ fs(T, {
      hidden: null
    }), c && /* @__PURE__ */ Y.createElement(P, {
      className: V
    }, c)));
  }
  return T;
}, Mx = ["show"];
function Em(e, t) {
  return f.useMemo(function() {
    var r = {};
    t && (r.show = ke(t) === "object" && t.formatter ? t.formatter : !!t), r = B(B({}, r), e);
    var n = r, o = n.show, i = Wt(n, Mx);
    return B(B({}, i), {}, {
      show: !!o,
      showFormatter: typeof o == "function" ? o : void 0,
      strategy: i.strategy || function(a) {
        return a.length;
      }
    });
  }, [e, t]);
}
var Rx = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], Px = /* @__PURE__ */ mn(function(e, t) {
  var r = e.autoComplete, n = e.onChange, o = e.onFocus, i = e.onBlur, a = e.onPressEnter, s = e.onKeyDown, l = e.prefixCls, c = l === void 0 ? "rc-input" : l, u = e.disabled, d = e.htmlSize, h = e.className, b = e.maxLength, y = e.suffix, g = e.showCount, m = e.count, v = e.type, p = v === void 0 ? "text" : v, w = e.classes, x = e.classNames, E = e.styles, C = e.onCompositionStart, S = e.onCompositionEnd, M = Wt(e, Rx), O = pr(!1), $ = ne(O, 2), D = $[0], P = $[1], F = Y.useRef(!1), I = Ze(null), L = function(q) {
    I.current && $x(I.current, q);
  }, T = di(e.defaultValue, {
    value: e.value
  }), R = ne(T, 2), N = R[0], z = R[1], A = N == null ? "" : String(N), j = Y.useState(null), V = ne(j, 2), X = V[0], K = V[1], W = Em(m, g), Q = W.max || b, re = W.strategy(A), oe = !!Q && re > Q;
  Jl(t, function() {
    return {
      focus: L,
      blur: function() {
        var q;
        (q = I.current) === null || q === void 0 || q.blur();
      },
      setSelectionRange: function(q, se, de) {
        var we;
        (we = I.current) === null || we === void 0 || we.setSelectionRange(q, se, de);
      },
      select: function() {
        var q;
        (q = I.current) === null || q === void 0 || q.select();
      },
      input: I.current
    };
  }), yt(function() {
    P(function(Z) {
      return Z && u ? !1 : Z;
    });
  }, [u]);
  var ie = function(q, se) {
    var de = se;
    if (!F.current && W.exceedFormatter && W.max && W.strategy(se) > W.max && (de = W.exceedFormatter(se, {
      max: W.max
    }), se !== de)) {
      var we, Ne;
      K([((we = I.current) === null || we === void 0 ? void 0 : we.selectionStart) || 0, ((Ne = I.current) === null || Ne === void 0 ? void 0 : Ne.selectionEnd) || 0]);
    }
    z(de), I.current && va(I.current, q, n, de);
  };
  Y.useEffect(function() {
    if (X) {
      var Z;
      (Z = I.current) === null || Z === void 0 || Z.setSelectionRange.apply(Z, ue(X));
    }
  }, [X]);
  var le = function(q) {
    ie(q, q.target.value);
  }, ye = function(q) {
    F.current = !1, ie(q, q.currentTarget.value), S == null || S(q);
  }, pe = function(q) {
    a && q.key === "Enter" && a(q), s == null || s(q);
  }, ge = function(q) {
    P(!0), o == null || o(q);
  }, G = function(q) {
    P(!1), i == null || i(q);
  }, be = function(q) {
    z(""), L(), I.current && va(I.current, q, n);
  }, ve = oe && "".concat(c, "-out-of-range"), _e = function() {
    var q = Eo(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames"
    ]);
    return /* @__PURE__ */ Y.createElement("input", Ve({
      autoComplete: r
    }, q, {
      onChange: le,
      onFocus: ge,
      onBlur: G,
      onKeyDown: pe,
      className: ee(c, k({}, "".concat(c, "-disabled"), u), x == null ? void 0 : x.input),
      style: E == null ? void 0 : E.input,
      ref: I,
      size: d,
      type: p,
      onCompositionStart: function(de) {
        F.current = !0, C == null || C(de);
      },
      onCompositionEnd: ye
    }));
  }, Le = function() {
    var q = Number(Q) > 0;
    if (y || W.show) {
      var se = W.showFormatter ? W.showFormatter({
        value: A,
        count: re,
        maxLength: Q
      }) : "".concat(re).concat(q ? " / ".concat(Q) : "");
      return /* @__PURE__ */ Y.createElement(Y.Fragment, null, W.show && /* @__PURE__ */ Y.createElement("span", {
        className: ee("".concat(c, "-show-count-suffix"), k({}, "".concat(c, "-show-count-has-suffix"), !!y), x == null ? void 0 : x.count),
        style: B({}, E == null ? void 0 : E.count)
      }, se), y);
    }
    return null;
  };
  return /* @__PURE__ */ Y.createElement(Cm, Ve({}, M, {
    prefixCls: c,
    className: ee(h, ve),
    inputElement: _e(),
    handleReset: be,
    value: A,
    focused: D,
    triggerFocus: L,
    suffix: Le(),
    disabled: u,
    classes: w,
    classNames: x,
    styles: E
  }));
});
const Nx = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = mt(Ge), {
    prefixCls: n,
    className: o
  } = e, i = t("input-group", n), a = t("input"), [s, l] = Tc(a), c = ee(i, {
    [`${i}-lg`]: e.size === "large",
    [`${i}-sm`]: e.size === "small",
    [`${i}-compact`]: e.compact,
    [`${i}-rtl`]: r === "rtl"
  }, l, o), u = mt(Sr), d = br(() => Object.assign(Object.assign({}, u), {
    isFormItemInput: !1
  }), [u]);
  return process.env.NODE_ENV !== "production" && er("Input.Group").deprecated(!1, "Input.Group", "Space.Compact"), s(/* @__PURE__ */ f.createElement("span", {
    className: c,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ f.createElement(Sr.Provider, {
    value: d
  }, e.children)));
}, Tx = Nx;
function Om(e, t) {
  const r = Ze([]), n = () => {
    r.current.push(setTimeout(() => {
      var o, i, a, s;
      !((o = e.current) === null || o === void 0) && o.input && ((i = e.current) === null || i === void 0 ? void 0 : i.input.getAttribute("type")) === "password" && (!((a = e.current) === null || a === void 0) && a.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return yt(() => (t && n(), () => r.current.forEach((o) => {
    o && clearTimeout(o);
  })), []), n;
}
function Ix(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
var Fx = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Dx(e, t) {
  if (!e)
    return;
  e.focus(t);
  const {
    cursor: r
  } = t || {};
  if (r) {
    const n = e.value.length;
    switch (r) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(n, n);
        break;
      default:
        e.setSelectionRange(0, n);
        break;
    }
  }
}
const Ax = /* @__PURE__ */ mn((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: o = !0,
    status: i,
    size: a,
    disabled: s,
    onBlur: l,
    onFocus: c,
    suffix: u,
    allowClear: d,
    addonAfter: h,
    addonBefore: b,
    className: y,
    style: g,
    styles: m,
    rootClassName: v,
    onChange: p,
    classNames: w
  } = e, x = Fx(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames"]), {
    getPrefixCls: E,
    direction: C,
    input: S
  } = Y.useContext(Ge), M = E("input", n), O = Ze(null), [$, D] = Tc(M), {
    compactSize: P,
    compactItemClassnames: F
  } = bc(M, C), I = $o((ie) => {
    var le;
    return (le = a ?? P) !== null && le !== void 0 ? le : ie;
  }), L = Y.useContext(ci), T = s ?? L, {
    status: R,
    hasFeedback: N,
    feedbackIcon: z
  } = mt(Sr), A = tm(R, i), j = Ix(e) || !!N, V = Ze(j);
  if (process.env.NODE_ENV !== "production") {
    const ie = er("Input");
    yt(() => {
      var le;
      j && !V.current && process.env.NODE_ENV !== "production" && ie(document.activeElement === ((le = O.current) === null || le === void 0 ? void 0 : le.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), V.current = j;
    }, [j]);
  }
  const X = Om(O, !0), K = (ie) => {
    X(), l == null || l(ie);
  }, W = (ie) => {
    X(), c == null || c(ie);
  }, Q = (ie) => {
    X(), p == null || p(ie);
  }, re = (N || u) && /* @__PURE__ */ Y.createElement(Y.Fragment, null, u, N && z);
  let oe;
  return typeof d == "object" && (d != null && d.clearIcon) ? oe = d : d && (oe = {
    clearIcon: /* @__PURE__ */ Y.createElement(vc, null)
  }), $(/* @__PURE__ */ Y.createElement(Px, Object.assign({
    ref: gn(t, O),
    prefixCls: M,
    autoComplete: S == null ? void 0 : S.autoComplete
  }, x, {
    disabled: T,
    onBlur: K,
    onFocus: W,
    style: Object.assign(Object.assign({}, S == null ? void 0 : S.style), g),
    styles: Object.assign(Object.assign({}, S == null ? void 0 : S.styles), m),
    suffix: re,
    allowClear: oe,
    className: ee(y, v, F, S == null ? void 0 : S.className),
    onChange: Q,
    addonAfter: h && /* @__PURE__ */ Y.createElement(Cl, null, /* @__PURE__ */ Y.createElement(bd, {
      override: !0,
      status: !0
    }, h)),
    addonBefore: b && /* @__PURE__ */ Y.createElement(Cl, null, /* @__PURE__ */ Y.createElement(bd, {
      override: !0,
      status: !0
    }, b)),
    classNames: Object.assign(Object.assign(Object.assign({}, w), S == null ? void 0 : S.classNames), {
      input: ee({
        [`${M}-sm`]: I === "small",
        [`${M}-lg`]: I === "large",
        [`${M}-rtl`]: C === "rtl",
        [`${M}-borderless`]: !o
      }, !j && Go(M, A), w == null ? void 0 : w.input, (r = S == null ? void 0 : S.classNames) === null || r === void 0 ? void 0 : r.input, D)
    }),
    classes: {
      affixWrapper: ee({
        [`${M}-affix-wrapper-sm`]: I === "small",
        [`${M}-affix-wrapper-lg`]: I === "large",
        [`${M}-affix-wrapper-rtl`]: C === "rtl",
        [`${M}-affix-wrapper-borderless`]: !o
      }, Go(`${M}-affix-wrapper`, A, N), D),
      wrapper: ee({
        [`${M}-group-rtl`]: C === "rtl"
      }, D),
      group: ee({
        [`${M}-group-wrapper-sm`]: I === "small",
        [`${M}-group-wrapper-lg`]: I === "large",
        [`${M}-group-wrapper-rtl`]: C === "rtl",
        [`${M}-group-wrapper-disabled`]: T
      }, Go(`${M}-group-wrapper`, A, N), D)
    }
  })));
}), Ic = Ax;
var jx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const kx = jx;
var _m = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: kx
  }));
};
process.env.NODE_ENV !== "production" && (_m.displayName = "EyeInvisibleOutlined");
const Lx = /* @__PURE__ */ f.forwardRef(_m);
var zx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const Vx = zx;
var $m = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: Vx
  }));
};
process.env.NODE_ENV !== "production" && ($m.displayName = "EyeOutlined");
const Wx = /* @__PURE__ */ f.forwardRef($m);
var Bx = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Hx = (e) => e ? /* @__PURE__ */ f.createElement(Wx, null) : /* @__PURE__ */ f.createElement(Lx, null), Yx = {
  click: "onClick",
  hover: "onMouseOver"
}, Mm = /* @__PURE__ */ f.forwardRef((e, t) => {
  const {
    visibilityToggle: r = !0
  } = e, n = typeof r == "object" && r.visible !== void 0, [o, i] = pr(() => n ? r.visible : !1), a = Ze(null);
  f.useEffect(() => {
    n && i(r.visible);
  }, [n, r]);
  const s = Om(a), l = () => {
    const {
      disabled: E
    } = e;
    E || (o && s(), i((C) => {
      var S;
      const M = !C;
      return typeof r == "object" && ((S = r.onVisibleChange) === null || S === void 0 || S.call(r, M)), M;
    }));
  }, c = (E) => {
    const {
      action: C = "click",
      iconRender: S = Hx
    } = e, M = Yx[C] || "", O = S(o), $ = {
      [M]: l,
      className: `${E}-icon`,
      key: "passwordIcon",
      onMouseDown: (D) => {
        D.preventDefault();
      },
      onMouseUp: (D) => {
        D.preventDefault();
      }
    };
    return /* @__PURE__ */ f.cloneElement(/* @__PURE__ */ f.isValidElement(O) ? O : /* @__PURE__ */ f.createElement("span", null, O), $);
  }, {
    className: u,
    prefixCls: d,
    inputPrefixCls: h,
    size: b
  } = e, y = Bx(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: g
  } = f.useContext(Ge), m = g("input", h), v = g("input-password", d), p = r && c(v), w = ee(v, u, {
    [`${v}-${b}`]: !!b
  }), x = Object.assign(Object.assign({}, Eo(y, ["suffix", "iconRender", "visibilityToggle"])), {
    type: o ? "text" : "password",
    className: w,
    prefixCls: m,
    suffix: p
  });
  return b && (x.size = b), /* @__PURE__ */ f.createElement(Ic, Object.assign({
    ref: gn(t, a)
  }, x));
});
process.env.NODE_ENV !== "production" && (Mm.displayName = "Password");
const Gx = Mm;
var Ux = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Rm = /* @__PURE__ */ f.forwardRef((e, t) => {
  const {
    prefixCls: r,
    inputPrefixCls: n,
    className: o,
    size: i,
    suffix: a,
    enterButton: s = !1,
    addonAfter: l,
    loading: c,
    disabled: u,
    onSearch: d,
    onChange: h,
    onCompositionStart: b,
    onCompositionEnd: y
  } = e, g = Ux(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), {
    getPrefixCls: m,
    direction: v
  } = f.useContext(Ge), p = f.useRef(!1), w = m("input-search", r), x = m("input", n), {
    compactSize: E
  } = bc(w, v), C = $o((A) => {
    var j;
    return (j = i ?? E) !== null && j !== void 0 ? j : A;
  }), S = f.useRef(null), M = (A) => {
    A && A.target && A.type === "click" && d && d(A.target.value, A, {
      source: "clear"
    }), h && h(A);
  }, O = (A) => {
    var j;
    document.activeElement === ((j = S.current) === null || j === void 0 ? void 0 : j.input) && A.preventDefault();
  }, $ = (A) => {
    var j, V;
    d && d((V = (j = S.current) === null || j === void 0 ? void 0 : j.input) === null || V === void 0 ? void 0 : V.value, A, {
      source: "input"
    });
  }, D = (A) => {
    p.current || c || $(A);
  }, P = typeof s == "boolean" ? /* @__PURE__ */ f.createElement(yw, null) : null, F = `${w}-button`;
  let I;
  const L = s || {}, T = L.type && L.type.__ANT_BUTTON === !0;
  T || L.type === "button" ? I = hn(L, Object.assign({
    onMouseDown: O,
    onClick: (A) => {
      var j, V;
      (V = (j = L == null ? void 0 : L.props) === null || j === void 0 ? void 0 : j.onClick) === null || V === void 0 || V.call(j, A), $(A);
    },
    key: "enterButton"
  }, T ? {
    className: F,
    size: C
  } : {})) : I = /* @__PURE__ */ f.createElement(k1, {
    className: F,
    type: s ? "primary" : void 0,
    size: C,
    disabled: u,
    key: "enterButton",
    onMouseDown: O,
    onClick: $,
    loading: c,
    icon: P
  }, s), l && (I = [I, hn(l, {
    key: "addonAfter"
  })]);
  const R = ee(w, {
    [`${w}-rtl`]: v === "rtl",
    [`${w}-${C}`]: !!C,
    [`${w}-with-button`]: !!s
  }, o), N = (A) => {
    p.current = !0, b == null || b(A);
  }, z = (A) => {
    p.current = !1, y == null || y(A);
  };
  return /* @__PURE__ */ f.createElement(Ic, Object.assign({
    ref: gn(S, t),
    onPressEnter: D
  }, g, {
    size: C,
    onCompositionStart: N,
    onCompositionEnd: z,
    prefixCls: x,
    addonAfter: I,
    suffix: a,
    onChange: M,
    className: R,
    disabled: u
  }));
});
process.env.NODE_ENV !== "production" && (Rm.displayName = "Search");
const qx = Rm;
var Xx = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, Kx = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], js = {}, ir;
function Zx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && js[r])
    return js[r];
  var n = window.getComputedStyle(e), o = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), i = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), a = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = Kx.map(function(c) {
    return "".concat(c, ":").concat(n.getPropertyValue(c));
  }).join(";"), l = {
    sizingStyle: s,
    paddingSize: i,
    borderSize: a,
    boxSizing: o
  };
  return t && r && (js[r] = l), l;
}
function Qx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  ir || (ir = document.createElement("textarea"), ir.setAttribute("tab-index", "-1"), ir.setAttribute("aria-hidden", "true"), document.body.appendChild(ir)), e.getAttribute("wrap") ? ir.setAttribute("wrap", e.getAttribute("wrap")) : ir.removeAttribute("wrap");
  var o = Zx(e, t), i = o.paddingSize, a = o.borderSize, s = o.boxSizing, l = o.sizingStyle;
  ir.setAttribute("style", "".concat(l, ";").concat(Xx)), ir.value = e.value || e.placeholder || "";
  var c = void 0, u = void 0, d, h = ir.scrollHeight;
  if (s === "border-box" ? h += a : s === "content-box" && (h -= i), r !== null || n !== null) {
    ir.value = " ";
    var b = ir.scrollHeight - i;
    r !== null && (c = b * r, s === "border-box" && (c = c + i + a), h = Math.max(c, h)), n !== null && (u = b * n, s === "border-box" && (u = u + i + a), d = h > u ? "" : "hidden", h = Math.min(u, h));
  }
  var y = {
    height: h,
    overflowY: d,
    resize: "none"
  };
  return c && (y.minHeight = c), u && (y.maxHeight = u), y;
}
var Jx = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], ks = 0, Ls = 1, zs = 2, eC = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var r = e, n = r.prefixCls;
  r.onPressEnter;
  var o = r.defaultValue, i = r.value, a = r.autoSize, s = r.onResize, l = r.className, c = r.style, u = r.disabled, d = r.onChange, h = r.onInternalAutoSize, b = Wt(r, Jx), y = di(o, {
    value: i,
    postState: function(W) {
      return W ?? "";
    }
  }), g = ne(y, 2), m = g[0], v = g[1], p = function(W) {
    v(W.target.value), d == null || d(W);
  }, w = f.useRef();
  f.useImperativeHandle(t, function() {
    return {
      textArea: w.current
    };
  });
  var x = f.useMemo(function() {
    return a && ke(a) === "object" ? [a.minRows, a.maxRows] : [];
  }, [a]), E = ne(x, 2), C = E[0], S = E[1], M = !!a, O = function() {
    try {
      if (document.activeElement === w.current) {
        var W = w.current, Q = W.selectionStart, re = W.selectionEnd, oe = W.scrollTop;
        w.current.setSelectionRange(Q, re), w.current.scrollTop = oe;
      }
    } catch {
    }
  }, $ = f.useState(zs), D = ne($, 2), P = D[0], F = D[1], I = f.useState(), L = ne(I, 2), T = L[0], R = L[1], N = function() {
    F(ks), process.env.NODE_ENV === "test" && (h == null || h());
  };
  Et(function() {
    M && N();
  }, [i, C, S, M]), Et(function() {
    if (P === ks)
      F(Ls);
    else if (P === Ls) {
      var K = Qx(w.current, !1, C, S);
      F(zs), R(K);
    } else
      O();
  }, [P]);
  var z = f.useRef(), A = function() {
    Ot.cancel(z.current);
  }, j = function(W) {
    P === zs && (s == null || s(W), a && (A(), z.current = Ot(function() {
      N();
    })));
  };
  f.useEffect(function() {
    return A;
  }, []);
  var V = M ? T : null, X = B(B({}, c), V);
  return (P === ks || P === Ls) && (X.overflowY = "hidden", X.overflowX = "hidden"), /* @__PURE__ */ f.createElement(si, {
    onResize: j,
    disabled: !(a || s)
  }, /* @__PURE__ */ f.createElement("textarea", Ve({}, b, {
    ref: w,
    style: X,
    className: ee(n, l, k({}, "".concat(n, "-disabled"), u)),
    disabled: u,
    value: m,
    onChange: p
  })));
}), tC = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "classes", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"], rC = /* @__PURE__ */ Y.forwardRef(function(e, t) {
  var r, n, o = e.defaultValue, i = e.value, a = e.onFocus, s = e.onBlur, l = e.onChange, c = e.allowClear, u = e.maxLength, d = e.onCompositionStart, h = e.onCompositionEnd, b = e.suffix, y = e.prefixCls, g = y === void 0 ? "rc-textarea" : y, m = e.classes, v = e.showCount, p = e.count, w = e.className, x = e.style, E = e.disabled, C = e.hidden, S = e.classNames, M = e.styles, O = e.onResize, $ = Wt(e, tC), D = di(o, {
    value: i,
    defaultValue: o
  }), P = ne(D, 2), F = P[0], I = P[1], L = F == null ? "" : String(F), T = Y.useState(!1), R = ne(T, 2), N = R[0], z = R[1], A = Y.useRef(!1), j = Y.useState(null), V = ne(j, 2), X = V[0], K = V[1], W = Ze(null), Q = function() {
    var xe;
    return (xe = W.current) === null || xe === void 0 ? void 0 : xe.textArea;
  }, re = function() {
    Q().focus();
  };
  Jl(t, function() {
    return {
      resizableTextArea: W.current,
      focus: re,
      blur: function() {
        Q().blur();
      }
    };
  }), yt(function() {
    z(function(Ie) {
      return !E && Ie;
    });
  }, [E]);
  var oe = Y.useState(null), ie = ne(oe, 2), le = ie[0], ye = ie[1];
  Y.useEffect(function() {
    if (le) {
      var Ie;
      (Ie = Q()).setSelectionRange.apply(Ie, ue(le));
    }
  }, [le]);
  var pe = Em(p, v), ge = (r = pe.max) !== null && r !== void 0 ? r : u, G = Number(ge) > 0, be = pe.strategy(L), ve = !!ge && be > ge, _e = function(xe, gt) {
    var $t = gt;
    !A.current && pe.exceedFormatter && pe.max && pe.strategy(gt) > pe.max && ($t = pe.exceedFormatter(gt, {
      max: pe.max
    }), gt !== $t && ye([Q().selectionStart || 0, Q().selectionEnd || 0])), I($t), va(xe.currentTarget, xe, l, $t);
  }, Le = function(xe) {
    A.current = !0, d == null || d(xe);
  }, Z = function(xe) {
    A.current = !1, _e(xe, xe.currentTarget.value), h == null || h(xe);
  }, q = function(xe) {
    _e(xe, xe.target.value);
  }, se = function(xe) {
    var gt = $.onPressEnter, $t = $.onKeyDown;
    xe.key === "Enter" && gt && gt(xe), $t == null || $t(xe);
  }, de = function(xe) {
    z(!0), a == null || a(xe);
  }, we = function(xe) {
    z(!1), s == null || s(xe);
  }, Ne = function(xe) {
    I(""), re(), va(Q(), xe, l);
  }, Bt = b, at;
  pe.show && (pe.showFormatter ? at = pe.showFormatter({
    value: L,
    count: be,
    maxLength: ge
  }) : at = "".concat(be).concat(G ? " / ".concat(ge) : ""), Bt = /* @__PURE__ */ Y.createElement(Y.Fragment, null, Bt, /* @__PURE__ */ Y.createElement("span", {
    className: ee("".concat(g, "-data-count"), S == null ? void 0 : S.count),
    style: M == null ? void 0 : M.count
  }, at)));
  var Ht = function(xe) {
    var gt;
    O == null || O(xe), (gt = Q()) !== null && gt !== void 0 && gt.style.height && K(!0);
  }, Er = !$.autoSize && !v && !c, xt = /* @__PURE__ */ Y.createElement(Cm, {
    value: L,
    allowClear: c,
    handleReset: Ne,
    suffix: Bt,
    prefixCls: g,
    classes: {
      affixWrapper: ee(m == null ? void 0 : m.affixWrapper, (n = {}, k(n, "".concat(g, "-show-count"), v), k(n, "".concat(g, "-textarea-allow-clear"), c), n))
    },
    disabled: E,
    focused: N,
    className: ee(w, ve && "".concat(g, "-out-of-range")),
    style: B(B({}, x), X && !Er ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof at == "string" ? at : void 0
      }
    },
    hidden: C,
    inputElement: /* @__PURE__ */ Y.createElement(eC, Ve({}, $, {
      maxLength: u,
      onKeyDown: se,
      onChange: q,
      onFocus: de,
      onBlur: we,
      onCompositionStart: Le,
      onCompositionEnd: Z,
      className: ee(S == null ? void 0 : S.textarea),
      style: B(B({}, M == null ? void 0 : M.textarea), {}, {
        resize: x == null ? void 0 : x.resize
      }),
      disabled: E,
      prefixCls: g,
      onResize: Ht,
      ref: W
    }))
  });
  return xt;
}), nC = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const oC = /* @__PURE__ */ mn((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: o = !0,
    size: i,
    disabled: a,
    status: s,
    allowClear: l,
    classNames: c,
    rootClassName: u,
    className: d
  } = e, h = nC(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className"]), {
    getPrefixCls: b,
    direction: y
  } = f.useContext(Ge), g = $o(i), m = f.useContext(ci), v = a ?? m, {
    status: p,
    hasFeedback: w,
    feedbackIcon: x
  } = f.useContext(Sr), E = tm(p, s), C = f.useRef(null);
  f.useImperativeHandle(t, () => {
    var D;
    return {
      resizableTextArea: (D = C.current) === null || D === void 0 ? void 0 : D.resizableTextArea,
      focus: (P) => {
        var F, I;
        Dx((I = (F = C.current) === null || F === void 0 ? void 0 : F.resizableTextArea) === null || I === void 0 ? void 0 : I.textArea, P);
      },
      blur: () => {
        var P;
        return (P = C.current) === null || P === void 0 ? void 0 : P.blur();
      }
    };
  });
  const S = b("input", n);
  let M;
  typeof l == "object" && (l != null && l.clearIcon) ? M = l : l && (M = {
    clearIcon: /* @__PURE__ */ f.createElement(vc, null)
  });
  const [O, $] = Tc(S);
  return O(/* @__PURE__ */ f.createElement(rC, Object.assign({}, h, {
    disabled: v,
    allowClear: M,
    className: ee(d, u),
    classes: {
      affixWrapper: ee(`${S}-textarea-affix-wrapper`, {
        [`${S}-affix-wrapper-rtl`]: y === "rtl",
        [`${S}-affix-wrapper-borderless`]: !o,
        [`${S}-affix-wrapper-sm`]: g === "small",
        [`${S}-affix-wrapper-lg`]: g === "large",
        [`${S}-textarea-show-count`]: e.showCount || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
      }, Go(`${S}-affix-wrapper`, E), $)
    },
    classNames: Object.assign(Object.assign({}, c), {
      textarea: ee({
        [`${S}-borderless`]: !o,
        [`${S}-sm`]: g === "small",
        [`${S}-lg`]: g === "large"
      }, Go(S, E), $, c == null ? void 0 : c.textarea)
    }),
    prefixCls: S,
    suffix: w && /* @__PURE__ */ f.createElement("span", {
      className: `${S}-textarea-suffix`
    }, x),
    ref: C
  })));
}), iC = oC, Ro = Ic;
process.env.NODE_ENV !== "production" && (Ro.displayName = "Input");
Ro.Group = Tx;
Ro.Search = qx;
Ro.TextArea = iC;
Ro.Password = Gx;
const aC = Ro;
function Td(e) {
  return ["small", "middle", "large"].includes(e);
}
function Id(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const Pm = /* @__PURE__ */ Y.createContext({
  latestIndex: 0
}), sC = Pm.Provider, lC = (e) => {
  let {
    className: t,
    index: r,
    children: n,
    split: o,
    style: i
  } = e;
  const {
    latestIndex: a
  } = f.useContext(Pm);
  return n == null ? null : /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", {
    className: t,
    style: i
  }, n), r < a && o && /* @__PURE__ */ f.createElement("span", {
    className: `${t}-split`
  }, o));
}, cC = lC;
var uC = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Nm = /* @__PURE__ */ f.forwardRef((e, t) => {
  var r, n;
  const {
    getPrefixCls: o,
    space: i,
    direction: a
  } = f.useContext(Ge), {
    size: s = (i == null ? void 0 : i.size) || "small",
    align: l,
    className: c,
    rootClassName: u,
    children: d,
    direction: h = "horizontal",
    prefixCls: b,
    split: y,
    style: g,
    wrap: m = !1,
    classNames: v,
    styles: p
  } = e, w = uC(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [x, E] = Array.isArray(s) ? s : [s, s], C = Td(E), S = Td(x), M = Id(E), O = Id(x), $ = zn(d, {
    keepEmpty: !0
  }), D = l === void 0 && h === "horizontal" ? "center" : l, P = o("space", b), [F, I] = Th(P), L = ee(P, i == null ? void 0 : i.className, I, `${P}-${h}`, {
    [`${P}-rtl`]: a === "rtl",
    [`${P}-align-${D}`]: D,
    [`${P}-gap-row-${E}`]: C,
    [`${P}-gap-col-${x}`]: S
  }, c, u), T = ee(`${P}-item`, (r = v == null ? void 0 : v.item) !== null && r !== void 0 ? r : (n = i == null ? void 0 : i.classNames) === null || n === void 0 ? void 0 : n.item);
  let R = 0;
  const N = $.map((j, V) => {
    var X, K;
    j != null && (R = V);
    const W = j && j.key || `${T}-${V}`;
    return /* @__PURE__ */ f.createElement(cC, {
      className: T,
      key: W,
      index: V,
      split: y,
      style: (X = p == null ? void 0 : p.item) !== null && X !== void 0 ? X : (K = i == null ? void 0 : i.styles) === null || K === void 0 ? void 0 : K.item
    }, j);
  }), z = f.useMemo(() => ({
    latestIndex: R
  }), [R]);
  if ($.length === 0)
    return null;
  const A = {};
  return m && (A.flexWrap = "wrap"), !S && O && (A.columnGap = x), !C && M && (A.rowGap = E), F(/* @__PURE__ */ f.createElement("div", Object.assign({
    ref: t,
    className: L,
    style: Object.assign(Object.assign(Object.assign({}, A), i == null ? void 0 : i.style), g)
  }, w), /* @__PURE__ */ f.createElement(sC, {
    value: z
  }, N)));
});
process.env.NODE_ENV !== "production" && (Nm.displayName = "Space");
const Tm = Nm;
Tm.Compact = o1;
const dC = Tm, Im = /* @__PURE__ */ Y.createContext(void 0), {
  Provider: fC
} = Im, Fm = Im;
var hC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" } }] }, name: "file-text", theme: "outlined" };
const mC = hC;
var Dm = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: mC
  }));
};
process.env.NODE_ENV !== "production" && (Dm.displayName = "FileTextOutlined");
const Am = /* @__PURE__ */ f.forwardRef(Dm), gC = (e) => {
  const {
    icon: t,
    description: r,
    prefixCls: n,
    className: o
  } = e, i = /* @__PURE__ */ Y.createElement("div", {
    className: `${n}-icon`
  }, /* @__PURE__ */ Y.createElement(Am, null));
  return /* @__PURE__ */ Y.createElement("div", {
    onClick: e.onClick,
    onFocus: e.onFocus,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    className: ee(o, `${n}-content`)
  }, t || r ? /* @__PURE__ */ Y.createElement(Y.Fragment, null, t && /* @__PURE__ */ Y.createElement("div", {
    className: `${n}-icon`
  }, t), r && /* @__PURE__ */ Y.createElement("div", {
    className: `${n}-description`
  }, r)) : i);
}, vC = /* @__PURE__ */ Zd(gC), pC = (e) => e === 0 ? 0 : e - Math.sqrt(Math.pow(e, 2) / 2), Fd = pC, yC = (e) => {
  const {
    componentCls: t,
    floatButtonSize: r,
    motionDurationSlow: n,
    motionEaseInOutCirc: o
  } = e, i = `${t}-group`, a = new ct("antFloatButtonMoveDownIn", {
    "0%": {
      transform: `translate3d(0, ${r}px, 0)`,
      transformOrigin: "0 0",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    }
  }), s = new ct("antFloatButtonMoveDownOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1
    },
    "100%": {
      transform: `translate3d(0, ${r}px, 0)`,
      transformOrigin: "0 0",
      opacity: 0
    }
  });
  return [{
    [`${i}-wrap`]: Object.assign({}, $c(`${i}-wrap`, a, s, n, !0))
  }, {
    [`${i}-wrap`]: {
      [`
          &${i}-wrap-enter,
          &${i}-wrap-appear
        `]: {
        opacity: 0,
        animationTimingFunction: o
      },
      [`&${i}-wrap-leave`]: {
        animationTimingFunction: o
      }
    }
  }];
}, bC = (e) => {
  const {
    antCls: t,
    componentCls: r,
    floatButtonSize: n,
    margin: o,
    borderRadiusLG: i,
    borderRadiusSM: a,
    badgeOffset: s,
    floatButtonBodyPadding: l
  } = e, c = `${r}-group`;
  return {
    [c]: Object.assign(Object.assign({}, en(e)), {
      zIndex: 99,
      display: "block",
      border: "none",
      position: "fixed",
      width: n,
      height: "auto",
      boxShadow: "none",
      minHeight: n,
      insetInlineEnd: e.floatButtonInsetInlineEnd,
      insetBlockEnd: e.floatButtonInsetBlockEnd,
      borderRadius: i,
      [`${c}-wrap`]: {
        zIndex: -1,
        display: "block",
        position: "relative",
        marginBottom: o
      },
      [`&${c}-rtl`]: {
        direction: "rtl"
      },
      [r]: {
        position: "static"
      }
    }),
    [`${c}-circle`]: {
      [`${r}-circle:not(:last-child)`]: {
        marginBottom: e.margin,
        [`${r}-body`]: {
          width: n,
          height: n,
          borderRadius: "50%"
        }
      }
    },
    [`${c}-square`]: {
      [`${r}-square`]: {
        borderRadius: 0,
        padding: 0,
        "&:first-child": {
          borderStartStartRadius: i,
          borderStartEndRadius: i
        },
        "&:last-child": {
          borderEndStartRadius: i,
          borderEndEndRadius: i
        },
        "&:not(:last-child)": {
          borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
        },
        [`${t}-badge`]: {
          [`${t}-badge-count`]: {
            top: -(l + s),
            insetInlineEnd: -(l + s)
          }
        }
      },
      [`${c}-wrap`]: {
        display: "block",
        borderRadius: i,
        boxShadow: e.boxShadowSecondary,
        [`${r}-square`]: {
          boxShadow: "none",
          marginTop: 0,
          borderRadius: 0,
          padding: l,
          "&:first-child": {
            borderStartStartRadius: i,
            borderStartEndRadius: i
          },
          "&:last-child": {
            borderEndStartRadius: i,
            borderEndEndRadius: i
          },
          "&:not(:last-child)": {
            borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
          },
          [`${r}-body`]: {
            width: e.floatButtonBodySize,
            height: e.floatButtonBodySize
          }
        }
      }
    },
    [`${c}-circle-shadow`]: {
      boxShadow: "none"
    },
    [`${c}-square-shadow`]: {
      boxShadow: e.boxShadowSecondary,
      [`${r}-square`]: {
        boxShadow: "none",
        padding: l,
        [`${r}-body`]: {
          width: e.floatButtonBodySize,
          height: e.floatButtonBodySize,
          borderRadius: a
        }
      }
    }
  };
}, SC = (e) => {
  const {
    antCls: t,
    componentCls: r,
    floatButtonBodyPadding: n,
    floatButtonIconSize: o,
    floatButtonSize: i,
    borderRadiusLG: a,
    badgeOffset: s,
    dotOffsetInSquare: l,
    dotOffsetInCircle: c
  } = e;
  return {
    [r]: Object.assign(Object.assign({}, en(e)), {
      border: "none",
      position: "fixed",
      cursor: "pointer",
      zIndex: 99,
      // Do not remove the 'display: block' here.
      // Deleting it will cause marginBottom to become ineffective.
      // Ref: https://github.com/ant-design/ant-design/issues/44700
      display: "block",
      width: i,
      height: i,
      insetInlineEnd: e.floatButtonInsetInlineEnd,
      insetBlockEnd: e.floatButtonInsetBlockEnd,
      boxShadow: e.boxShadowSecondary,
      // Pure Panel
      "&-pure": {
        position: "relative",
        inset: "auto"
      },
      "&:empty": {
        display: "none"
      },
      [`${t}-badge`]: {
        width: "100%",
        height: "100%",
        [`${t}-badge-count`]: {
          transform: "translate(0, 0)",
          transformOrigin: "center",
          top: -s,
          insetInlineEnd: -s
        }
      },
      [`${r}-body`]: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: `all ${e.motionDurationMid}`,
        [`${r}-content`]: {
          overflow: "hidden",
          textAlign: "center",
          minHeight: i,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: `${n / 2}px ${n}px`,
          [`${r}-icon`]: {
            textAlign: "center",
            margin: "auto",
            width: o,
            fontSize: o,
            lineHeight: 1
          }
        }
      }
    }),
    [`${r}-rtl`]: {
      direction: "rtl"
    },
    [`${r}-circle`]: {
      height: i,
      borderRadius: "50%",
      [`${t}-badge`]: {
        [`${t}-badge-dot`]: {
          top: c,
          insetInlineEnd: c
        }
      },
      [`${r}-body`]: {
        borderRadius: "50%"
      }
    },
    [`${r}-square`]: {
      height: "auto",
      minHeight: i,
      borderRadius: a,
      [`${t}-badge`]: {
        [`${t}-badge-dot`]: {
          top: l,
          insetInlineEnd: l
        }
      },
      [`${r}-body`]: {
        height: "auto",
        borderRadius: a
      }
    },
    [`${r}-default`]: {
      backgroundColor: e.floatButtonBackgroundColor,
      transition: `background-color ${e.motionDurationMid}`,
      [`${r}-body`]: {
        backgroundColor: e.floatButtonBackgroundColor,
        transition: `background-color ${e.motionDurationMid}`,
        "&:hover": {
          backgroundColor: e.colorFillContent
        },
        [`${r}-content`]: {
          [`${r}-icon`]: {
            color: e.colorText
          },
          [`${r}-description`]: {
            display: "flex",
            alignItems: "center",
            lineHeight: `${e.fontSizeLG}px`,
            color: e.colorText,
            fontSize: e.fontSizeSM
          }
        }
      }
    },
    [`${r}-primary`]: {
      backgroundColor: e.colorPrimary,
      [`${r}-body`]: {
        backgroundColor: e.colorPrimary,
        transition: `background-color ${e.motionDurationMid}`,
        "&:hover": {
          backgroundColor: e.colorPrimaryHover
        },
        [`${r}-content`]: {
          [`${r}-icon`]: {
            color: e.colorTextLightSolid
          },
          [`${r}-description`]: {
            display: "flex",
            alignItems: "center",
            lineHeight: `${e.fontSizeLG}px`,
            color: e.colorTextLightSolid,
            fontSize: e.fontSizeSM
          }
        }
      }
    }
  };
}, Fc = lr("FloatButton", (e) => {
  const {
    colorTextLightSolid: t,
    colorBgElevated: r,
    controlHeightLG: n,
    marginXXL: o,
    marginLG: i,
    fontSize: a,
    fontSizeIcon: s,
    controlItemBgHover: l,
    paddingXXS: c,
    borderRadiusLG: u
  } = e, d = _t(e, {
    floatButtonBackgroundColor: r,
    floatButtonColor: t,
    floatButtonHoverBackgroundColor: l,
    floatButtonFontSize: a,
    floatButtonIconSize: s * 1.5,
    floatButtonSize: n,
    floatButtonInsetBlockEnd: o,
    floatButtonInsetInlineEnd: i,
    floatButtonBodySize: n - c * 2,
    // 这里的 paddingXXS 是简写，完整逻辑是 (controlHeightLG - (controlHeightLG - paddingXXS * 2)) / 2,
    floatButtonBodyPadding: c,
    badgeOffset: c * 1.5,
    dotOffsetInCircle: Fd(n / 2),
    dotOffsetInSquare: Fd(u)
  });
  return [bC(d), SC(d), HS(e), yC(d)];
});
var wC = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const La = "float-btn", jm = /* @__PURE__ */ mn((e, t) => {
  const {
    prefixCls: r,
    className: n,
    rootClassName: o,
    type: i = "default",
    shape: a = "circle",
    icon: s,
    description: l,
    tooltip: c,
    badge: u = {}
  } = e, d = wC(e, ["prefixCls", "className", "rootClassName", "type", "shape", "icon", "description", "tooltip", "badge"]), {
    getPrefixCls: h,
    direction: b
  } = mt(Ge), y = mt(Fm), g = h(La, r), [m, v] = Fc(g), p = y || a, w = ee(v, g, n, o, `${g}-${i}`, `${g}-${p}`, {
    [`${g}-rtl`]: b === "rtl"
  }), x = br(() => Eo(u, ["title", "children", "status", "text"]), [u]), E = br(() => ({
    prefixCls: g,
    description: l,
    icon: s,
    type: i
  }), [g, l, s, i]);
  let C = /* @__PURE__ */ Y.createElement("div", {
    className: `${g}-body`
  }, /* @__PURE__ */ Y.createElement(vC, Object.assign({}, E)));
  if ("badge" in e && (C = /* @__PURE__ */ Y.createElement(nx, Object.assign({}, x), C)), "tooltip" in e && (C = /* @__PURE__ */ Y.createElement(lm, {
    title: c,
    placement: b === "rtl" ? "right" : "left"
  }, C)), process.env.NODE_ENV !== "production") {
    const S = er("FloatButton");
    process.env.NODE_ENV !== "production" && S(!(a === "circle" && l), "usage", "supported only when `shape` is `square`. Due to narrow space for text, short sentence is recommended.");
  }
  return m(e.href ? /* @__PURE__ */ Y.createElement("a", Object.assign({
    ref: t
  }, d, {
    className: w
  }), C) : /* @__PURE__ */ Y.createElement("button", Object.assign({
    ref: t
  }, d, {
    className: w,
    type: "button"
  }), C));
});
process.env.NODE_ENV !== "production" && (jm.displayName = "FloatButton");
const Yn = jm;
var xC = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const km = /* @__PURE__ */ Y.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    type: o = "default",
    shape: i = "circle",
    visibilityHeight: a = 400,
    icon: s = /* @__PURE__ */ Y.createElement(kw, null),
    target: l,
    onClick: c,
    duration: u = 450
  } = e, d = xC(e, ["prefixCls", "className", "type", "shape", "visibilityHeight", "icon", "target", "onClick", "duration"]), [h, b] = pr(a === 0), y = Y.useRef(null);
  Y.useImperativeHandle(t, () => ({
    nativeElement: y.current
  }));
  const g = () => y.current && y.current.ownerDocument ? y.current.ownerDocument : window, m = Xv((O) => {
    const $ = Oh(O.target, !0);
    b($ >= a);
  });
  yt(() => {
    const $ = (l || g)();
    return m({
      target: $
    }), $ == null || $.addEventListener("scroll", m), () => {
      m.cancel(), $ == null || $.removeEventListener("scroll", m);
    };
  }, [l]);
  const v = (O) => {
    wb(0, {
      getContainer: l || g,
      duration: u
    }), c == null || c(O);
  }, {
    getPrefixCls: p
  } = mt(Ge), w = p(La, r), x = p(), [E] = Fc(w), S = mt(Fm) || i, M = Object.assign({
    prefixCls: w,
    icon: s,
    type: o,
    shape: S
  }, d);
  return E(/* @__PURE__ */ Y.createElement(tn, {
    visible: h,
    motionName: `${x}-fade`
  }, (O) => {
    let {
      className: $
    } = O;
    return /* @__PURE__ */ Y.createElement(Yn, Object.assign({
      ref: y
    }, M, {
      onClick: v,
      className: ee(n, $)
    }));
  }));
});
process.env.NODE_ENV !== "production" && (km.displayName = "BackTop");
const Lm = km;
var CC = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const EC = (e) => {
  const {
    prefixCls: t,
    className: r,
    style: n,
    shape: o = "circle",
    type: i = "default",
    icon: a = /* @__PURE__ */ Y.createElement(Am, null),
    closeIcon: s = /* @__PURE__ */ Y.createElement(fb, null),
    description: l,
    trigger: c,
    children: u,
    onOpenChange: d,
    open: h
  } = e, b = CC(e, ["prefixCls", "className", "style", "shape", "type", "icon", "closeIcon", "description", "trigger", "children", "onOpenChange", "open"]), {
    direction: y,
    getPrefixCls: g
  } = mt(Ge), m = g(La, t), [v, p] = Fc(m), w = `${m}-group`, x = ee(w, p, r, {
    [`${w}-rtl`]: y === "rtl",
    [`${w}-${o}`]: o,
    [`${w}-${o}-shadow`]: !c
  }), E = ee(p, `${w}-wrap`), [C, S] = di(!1, {
    value: h
  }), M = Y.useRef(null), O = Y.useRef(null), $ = Y.useMemo(() => c === "hover" ? {
    onMouseEnter() {
      S(!0), d == null || d(!0);
    },
    onMouseLeave() {
      S(!1), d == null || d(!1);
    }
  } : {}, [c]), D = () => {
    S((F) => (d == null || d(!F), !F));
  }, P = Qd((F) => {
    var I, L;
    if (!((I = M.current) === null || I === void 0) && I.contains(F.target)) {
      !((L = O.current) === null || L === void 0) && L.contains(F.target) && D();
      return;
    }
    S(!1), d == null || d(!1);
  }, [c]);
  if (yt(() => {
    if (c === "click")
      return document.addEventListener("click", P), () => {
        document.removeEventListener("click", P);
      };
  }, [c]), process.env.NODE_ENV !== "production") {
    const F = er("FloatButton.Group");
    process.env.NODE_ENV !== "production" && F(!("open" in e) || !!c, "usage", "`open` need to be used together with `trigger`");
  }
  return v(/* @__PURE__ */ Y.createElement(fC, {
    value: o
  }, /* @__PURE__ */ Y.createElement("div", Object.assign({
    ref: M,
    className: x,
    style: n
  }, $), c && ["click", "hover"].includes(c) ? /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(tn, {
    visible: C,
    motionName: `${w}-wrap`
  }, (F) => {
    let {
      className: I
    } = F;
    return /* @__PURE__ */ Y.createElement("div", {
      className: ee(I, E)
    }, u);
  }), /* @__PURE__ */ Y.createElement(Yn, Object.assign({
    ref: O,
    type: i,
    shape: o,
    icon: C ? s : a,
    description: l,
    "aria-label": e["aria-label"]
  }, b))) : u)));
}, zm = /* @__PURE__ */ Zd(EC);
var Vm = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Dd = (e) => {
  var {
    backTop: t
  } = e, r = Vm(e, ["backTop"]);
  return t ? /* @__PURE__ */ f.createElement(Lm, Object.assign({}, r, {
    visibilityHeight: 0
  })) : /* @__PURE__ */ f.createElement(Yn, Object.assign({}, r));
}, OC = (e) => {
  var {
    className: t,
    items: r
  } = e, n = Vm(e, ["className", "items"]);
  const {
    prefixCls: o
  } = n, {
    getPrefixCls: i
  } = f.useContext(Ge), s = `${i(La, o)}-pure`;
  return r ? /* @__PURE__ */ f.createElement(zm, Object.assign({
    className: ee(t, s)
  }, n), r.map((l, c) => /* @__PURE__ */ f.createElement(Dd, Object.assign({
    key: c
  }, l)))) : /* @__PURE__ */ f.createElement(Dd, Object.assign({
    className: ee(t, s)
  }, n));
}, _C = OC;
Yn.BackTop = Lm;
Yn.Group = zm;
Yn._InternalPanelDoNotUseOrYouWillBeFired = _C;
function pa(e) {
  const [t, r] = f.useState(e);
  return f.useEffect(() => {
    const n = setTimeout(() => {
      r(e);
    }, e.length ? 0 : 10);
    return () => {
      clearTimeout(n);
    };
  }, [e]), t;
}
const $C = (e) => {
  const {
    componentCls: t
  } = e, r = `${t}-show-help`, n = `${t}-show-help-item`;
  return {
    [r]: {
      // Explain holder
      transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [n]: {
        overflow: "hidden",
        transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
        [`&${n}-appear, &${n}-enter`]: {
          transform: "translateY(-5px)",
          opacity: 0,
          "&-active": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${n}-leave-active`]: {
          transform: "translateY(-5px)"
        }
      }
    }
  };
}, MC = $C, RC = (e) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: e.marginLG,
    padding: 0,
    color: e.colorTextDescription,
    fontSize: e.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
  },
  label: {
    fontSize: e.fontSize
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus": {
    outline: 0,
    boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight
  }
}), Ad = (e, t) => {
  const {
    formItemCls: r
  } = e;
  return {
    [r]: {
      [`${r}-label > label`]: {
        height: t
      },
      [`${r}-control-input`]: {
        minHeight: t
      }
    }
  };
}, PC = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [e.componentCls]: Object.assign(Object.assign(Object.assign({}, en(e)), RC(e)), {
      [`${t}-text`]: {
        display: "inline-block",
        paddingInlineEnd: e.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": Object.assign({}, Ad(e, e.controlHeightSM)),
      "&-large": Object.assign({}, Ad(e, e.controlHeightLG))
    })
  };
}, NC = (e) => {
  const {
    formItemCls: t,
    iconCls: r,
    componentCls: n,
    rootPrefixCls: o,
    labelRequiredMarkColor: i,
    labelColor: a,
    labelFontSize: s,
    labelHeight: l,
    labelColonMarginInlineStart: c,
    labelColonMarginInlineEnd: u,
    itemMarginBottom: d
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, en(e)), {
      marginBottom: d,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden.${o}-row`]: {
        // https://github.com/ant-design/ant-design/issues/26141
        display: "none"
      },
      "&-has-warning": {
        [`${t}-split`]: {
          color: e.colorError
        }
      },
      "&-has-error": {
        [`${t}-split`]: {
          color: e.colorWarning
        }
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${t}-label`]: {
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: `${e.lineHeight} - 0.25em`,
          whiteSpace: "unset"
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: l,
          color: a,
          fontSize: s,
          [`> ${r}`]: {
            fontSize: e.fontSize,
            verticalAlign: "top"
          },
          // Required mark
          [`&${t}-required:not(${t}-required-mark-optional)::before`]: {
            display: "inline-block",
            marginInlineEnd: e.marginXXS,
            color: i,
            fontSize: e.fontSize,
            fontFamily: "SimSun, sans-serif",
            lineHeight: 1,
            content: '"*"',
            [`${n}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-optional`]: {
            display: "inline-block",
            marginInlineStart: e.marginXXS,
            color: e.colorTextDescription,
            [`${n}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-tooltip`]: {
            color: e.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: e.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: c,
            marginInlineEnd: u
          },
          [`&${t}-no-colon::after`]: {
            content: '"\\a0"'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${t}-control`]: {
        "--ant-display": "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: e.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%"
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [t]: {
        "&-explain, &-extra": {
          clear: "both",
          color: e.colorTextDescription,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: e.controlHeightSM,
          transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: e.colorError
          },
          "&-warning": {
            color: e.colorWarning
          }
        }
      },
      [`&-with-help ${t}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${t}-feedback-icon`]: {
        fontSize: e.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: Mc,
        animationDuration: e.motionDurationMid,
        animationTimingFunction: e.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: e.colorSuccess
        },
        "&-error": {
          color: e.colorError
        },
        "&-warning": {
          color: e.colorWarning
        },
        "&-validating": {
          color: e.colorPrimary
        }
      }
    })
  };
}, TC = (e) => {
  const {
    componentCls: t,
    formItemCls: r
  } = e;
  return {
    [`${t}-horizontal`]: {
      [`${r}-label`]: {
        flexGrow: 0
      },
      [`${r}-control`]: {
        flex: "1 1 0",
        // https://github.com/ant-design/ant-design/issues/32777
        // https://github.com/ant-design/ant-design/issues/33773
        minWidth: 0
      },
      // Do not change this to `ant-col-24`! `-24` match all the responsive rules
      // https://github.com/ant-design/ant-design/issues/32980
      // https://github.com/ant-design/ant-design/issues/34903
      // https://github.com/ant-design/ant-design/issues/44538
      [`${r}-label[class$='-24'], ${r}-label[class*='-24 ']`]: {
        [`& + ${r}-control`]: {
          minWidth: "unset"
        }
      }
    }
  };
}, IC = (e) => {
  const {
    componentCls: t,
    formItemCls: r
  } = e;
  return {
    [`${t}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [r]: {
        flex: "none",
        marginInlineEnd: e.margin,
        marginBottom: 0,
        "&-row": {
          flexWrap: "nowrap"
        },
        [`> ${r}-label,
        > ${r}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${r}-label`]: {
          flex: "none"
        },
        [`${t}-text`]: {
          display: "inline-block"
        },
        [`${r}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
}, so = (e) => ({
  padding: e.verticalLabelPadding,
  margin: e.verticalLabelMargin,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      // https://github.com/ant-design/ant-design/issues/43538
      visibility: "hidden"
    }
  }
}), FC = (e) => {
  const {
    componentCls: t,
    formItemCls: r,
    rootPrefixCls: n
  } = e;
  return {
    [`${r} ${r}-label`]: so(e),
    // ref: https://github.com/ant-design/ant-design/issues/45122
    [`${t}:not(${t}-inline)`]: {
      [r]: {
        flexWrap: "wrap",
        [`${r}-label, ${r}-control`]: {
          // When developer pass `xs: { span }`,
          // It should follow the `xs` screen config
          // ref: https://github.com/ant-design/ant-design/issues/44386
          [`&:not([class*=" ${n}-col-xs"])`]: {
            flex: "0 0 100%",
            maxWidth: "100%"
          }
        }
      }
    }
  };
}, DC = (e) => {
  const {
    componentCls: t,
    formItemCls: r,
    rootPrefixCls: n
  } = e;
  return {
    [`${t}-vertical`]: {
      [r]: {
        "&-row": {
          flexDirection: "column"
        },
        "&-label > label": {
          height: "auto"
        },
        [`${t}-item-control`]: {
          width: "100%"
        }
      }
    },
    [`${t}-vertical ${r}-label,
      .${n}-col-24${r}-label,
      .${n}-col-xl-24${r}-label`]: so(e),
    [`@media (max-width: ${e.screenXSMax}px)`]: [FC(e), {
      [t]: {
        [`.${n}-col-xs-24${r}-label`]: so(e)
      }
    }],
    [`@media (max-width: ${e.screenSMMax}px)`]: {
      [t]: {
        [`.${n}-col-sm-24${r}-label`]: so(e)
      }
    },
    [`@media (max-width: ${e.screenMDMax}px)`]: {
      [t]: {
        [`.${n}-col-md-24${r}-label`]: so(e)
      }
    },
    [`@media (max-width: ${e.screenLGMax}px)`]: {
      [t]: {
        [`.${n}-col-lg-24${r}-label`]: so(e)
      }
    }
  };
}, Wm = (e, t) => _t(e, {
  formItemCls: `${e.componentCls}-item`,
  rootPrefixCls: t
}), Dc = lr("Form", (e, t) => {
  let {
    rootPrefixCls: r
  } = t;
  const n = Wm(e, r);
  return [PC(n), NC(n), MC(n), TC(n), IC(n), DC(n), nw(n), Mc];
}, (e) => ({
  labelRequiredMarkColor: e.colorError,
  labelColor: e.colorTextHeading,
  labelFontSize: e.fontSize,
  labelHeight: e.controlHeight,
  labelColonMarginInlineStart: e.marginXXS / 2,
  labelColonMarginInlineEnd: e.marginXS,
  itemMarginBottom: e.marginLG,
  verticalLabelPadding: `0 0 ${e.paddingXS}px`,
  verticalLabelMargin: 0
}), {
  // Let From style before the Grid
  // ref https://github.com/ant-design/ant-design/issues/44386
  order: -1e3
}), jd = [];
function Vs(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return {
    key: typeof e == "string" ? e : `${t}-${n}`,
    error: e,
    errorStatus: r
  };
}
const AC = (e) => {
  let {
    help: t,
    helpStatus: r,
    errors: n = jd,
    warnings: o = jd,
    className: i,
    fieldId: a,
    onVisibleChanged: s
  } = e;
  const {
    prefixCls: l
  } = f.useContext(_c), c = `${l}-item-explain`, [, u] = Dc(l), d = br(() => Ku(l), [l]), h = pa(n), b = pa(o), y = f.useMemo(() => t != null ? [Vs(t, "help", r)] : [].concat(ue(h.map((m, v) => Vs(m, "error", "error", v))), ue(b.map((m, v) => Vs(m, "warning", "warning", v)))), [t, r, h, b]), g = {};
  return a && (g.id = `${a}_help`), /* @__PURE__ */ f.createElement(tn, {
    motionDeadline: d.motionDeadline,
    motionName: `${l}-show-help`,
    visible: !!y.length,
    onVisibleChanged: s
  }, (m) => {
    const {
      className: v,
      style: p
    } = m;
    return /* @__PURE__ */ f.createElement("div", Object.assign({}, g, {
      className: ee(c, v, i, u),
      style: p,
      role: "alert"
    }), /* @__PURE__ */ f.createElement(Ly, Object.assign({
      keys: y
    }, Ku(l), {
      motionName: `${l}-show-help-item`,
      component: !1
    }), (w) => {
      const {
        key: x,
        error: E,
        errorStatus: C,
        className: S,
        style: M
      } = w;
      return /* @__PURE__ */ f.createElement("div", {
        key: x,
        className: ee(S, {
          [`${c}-${C}`]: C
        }),
        style: M
      }, E);
    }));
  });
}, Bm = AC, jC = ["parentNode"], kC = "form_item";
function Uo(e) {
  return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e];
}
function Hm(e, t) {
  if (!e.length)
    return;
  const r = e.join("_");
  return t ? `${t}_${r}` : jC.includes(r) ? `${kC}_${r}` : r;
}
function Ym(e, t, r, n, o, i) {
  let a = n;
  return i !== void 0 ? a = i : r.validating ? a = "validating" : e.length ? a = "error" : t.length ? a = "warning" : (r.touched || o && r.validated) && (a = "success"), a;
}
function kd(e) {
  return Uo(e).join("_");
}
function Gm(e) {
  const [t] = Oc(), r = f.useRef({}), n = f.useMemo(() => e ?? Object.assign(Object.assign({}, t), {
    __INTERNAL__: {
      itemRef: (o) => (i) => {
        const a = kd(o);
        i ? r.current[a] = i : delete r.current[a];
      }
    },
    scrollToField: function(o) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const a = Uo(o), s = Hm(a, n.__INTERNAL__.name), l = s ? document.getElementById(s) : null;
      l && bb(l, Object.assign({
        scrollMode: "if-needed",
        block: "nearest"
      }, i));
    },
    getFieldInstance: (o) => {
      const i = kd(o);
      return r.current[i];
    }
  }), [e, t]);
  return [n];
}
const Hi = {};
function LC(e) {
  let {
    name: t
  } = e;
  const r = er("Form");
  yt(() => {
    if (t)
      return Hi[t] = (Hi[t] || 0) + 1, process.env.NODE_ENV !== "production" && r(Hi[t] <= 1, "usage", "There exist multiple Form with same `name`."), () => {
        Hi[t] -= 1;
      };
  }, [t]);
}
var zC = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const VC = (e, t) => {
  const r = f.useContext(ci), {
    getPrefixCls: n,
    direction: o,
    form: i
  } = f.useContext(Ge), {
    prefixCls: a,
    className: s,
    rootClassName: l,
    size: c,
    disabled: u = r,
    form: d,
    colon: h,
    labelAlign: b,
    labelWrap: y,
    labelCol: g,
    wrapperCol: m,
    hideRequiredMark: v,
    layout: p = "horizontal",
    scrollToFirstError: w,
    requiredMark: x,
    onFinishFailed: E,
    name: C,
    style: S,
    feedbackIcons: M
  } = e, O = zC(e, ["prefixCls", "className", "rootClassName", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name", "style", "feedbackIcons"]), $ = $o(c), D = f.useContext(zf);
  process.env.NODE_ENV !== "production" && LC(e);
  const P = br(() => x !== void 0 ? x : i && i.requiredMark !== void 0 ? i.requiredMark : !v, [v, x, i]), F = h ?? (i == null ? void 0 : i.colon), I = n("form", a), [L, T] = Dc(I), R = ee(I, `${I}-${p}`, {
    [`${I}-hide-required-mark`]: P === !1,
    [`${I}-rtl`]: o === "rtl",
    [`${I}-${$}`]: $
  }, T, i == null ? void 0 : i.className, s, l), [N] = Gm(d), {
    __INTERNAL__: z
  } = N;
  z.name = C;
  const A = br(() => ({
    name: C,
    labelAlign: b,
    labelCol: g,
    labelWrap: y,
    wrapperCol: m,
    vertical: p === "vertical",
    colon: F,
    requiredMark: P,
    itemRef: z.itemRef,
    form: N,
    feedbackIcons: M
  }), [C, b, g, m, p, F, P, N, M]);
  f.useImperativeHandle(t, () => N);
  const j = (X, K) => {
    if (X) {
      let W = {
        block: "nearest"
      };
      typeof X == "object" && (W = X), N.scrollToField(K, W);
    }
  }, V = (X) => {
    if (E == null || E(X), X.errorFields.length) {
      const K = X.errorFields[0].name;
      if (w !== void 0) {
        j(w, K);
        return;
      }
      i && i.scrollToFirstError !== void 0 && j(i.scrollToFirstError, K);
    }
  };
  return L(/* @__PURE__ */ f.createElement(Qf, {
    disabled: u
  }, /* @__PURE__ */ f.createElement(ui.Provider, {
    value: $
  }, /* @__PURE__ */ f.createElement(Zh, {
    // This is not list in API, we pass with spread
    validateMessages: D
  }, /* @__PURE__ */ f.createElement(Zr.Provider, {
    value: A
  }, /* @__PURE__ */ f.createElement(Mo, Object.assign({
    id: C
  }, O, {
    name: C,
    onFinishFailed: V,
    form: N,
    style: Object.assign(Object.assign({}, i == null ? void 0 : i.style), S),
    className: R
  })))))));
}, Um = /* @__PURE__ */ f.forwardRef(VC);
process.env.NODE_ENV !== "production" && (Um.displayName = "Form");
const WC = Um;
function BC(e) {
  if (typeof e == "function")
    return e;
  const t = zn(e);
  return t.length <= 1 ? t[0] : t;
}
const qm = () => {
  const {
    status: e,
    errors: t = [],
    warnings: r = []
  } = mt(Sr);
  if (process.env.NODE_ENV !== "production") {
    const n = er("Form.Item");
    process.env.NODE_ENV !== "production" && n(e !== void 0, "usage", "Form.Item.useStatus should be used under Form.Item component. For more information: https://u.ant.design/form-item-usestatus");
  }
  return {
    status: e,
    errors: t,
    warnings: r
  };
};
qm.Context = Sr;
const HC = qm;
function YC(e) {
  const [t, r] = f.useState(e), n = Ze(null), o = Ze([]), i = Ze(!1);
  f.useEffect(() => (i.current = !1, () => {
    i.current = !0, Ot.cancel(n.current), n.current = null;
  }), []);
  function a(s) {
    i.current || (n.current === null && (o.current = [], n.current = Ot(() => {
      n.current = null, r((l) => {
        let c = l;
        return o.current.forEach((u) => {
          c = u(c);
        }), c;
      });
    })), o.current.push(s));
  }
  return [t, a];
}
function GC() {
  const {
    itemRef: e
  } = f.useContext(Zr), t = f.useRef({});
  function r(n, o) {
    const i = o && typeof o == "object" && o.ref, a = n.join("_");
    return (t.current.name !== a || t.current.originRef !== i) && (t.current.name = a, t.current.originRef = i, t.current.ref = gn(e(n), i)), t.current.ref;
  }
  return r;
}
const UC = (e) => {
  const {
    formItemCls: t
  } = e;
  return {
    "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": {
      // Fallback for IE, safe to remove we not support it anymore
      [`${t}-control`]: {
        display: "flex"
      }
    }
  };
}, qC = nh(["Form", "item-item"], (e, t) => {
  let {
    rootPrefixCls: r
  } = t;
  const n = Wm(e, r);
  return [UC(n)];
}), XC = (e) => {
  const {
    prefixCls: t,
    status: r,
    wrapperCol: n,
    children: o,
    errors: i,
    warnings: a,
    _internalItemRender: s,
    extra: l,
    help: c,
    fieldId: u,
    marginBottom: d,
    onErrorVisibleChanged: h
  } = e, b = `${t}-item`, y = f.useContext(Zr), g = n || y.wrapperCol || {}, m = ee(`${b}-control`, g.className), v = f.useMemo(() => Object.assign({}, y), [y]);
  delete v.labelCol, delete v.wrapperCol;
  const p = /* @__PURE__ */ f.createElement("div", {
    className: `${b}-control-input`
  }, /* @__PURE__ */ f.createElement("div", {
    className: `${b}-control-input-content`
  }, o)), w = f.useMemo(() => ({
    prefixCls: t,
    status: r
  }), [t, r]), x = d !== null || i.length || a.length ? /* @__PURE__ */ f.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "nowrap"
    }
  }, /* @__PURE__ */ f.createElement(_c.Provider, {
    value: w
  }, /* @__PURE__ */ f.createElement(Bm, {
    fieldId: u,
    errors: i,
    warnings: a,
    help: c,
    helpStatus: r,
    className: `${b}-explain-connected`,
    onVisibleChanged: h
  })), !!d && /* @__PURE__ */ f.createElement("div", {
    style: {
      width: 0,
      height: d
    }
  })) : null, E = {};
  u && (E.id = `${u}_extra`);
  const C = l ? /* @__PURE__ */ f.createElement("div", Object.assign({}, E, {
    className: `${b}-extra`
  }), l) : null, S = s && s.mark === "pro_table_render" && s.render ? s.render(e, {
    input: p,
    errorList: x,
    extra: C
  }) : /* @__PURE__ */ f.createElement(f.Fragment, null, p, x, C);
  return /* @__PURE__ */ f.createElement(Zr.Provider, {
    value: v
  }, /* @__PURE__ */ f.createElement(wm, Object.assign({}, g, {
    className: m
  }), S), /* @__PURE__ */ f.createElement(qC, {
    prefixCls: t
  }));
}, KC = XC;
var ZC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" };
const QC = ZC;
var Xm = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: QC
  }));
};
process.env.NODE_ENV !== "production" && (Xm.displayName = "QuestionCircleOutlined");
const JC = /* @__PURE__ */ f.forwardRef(Xm);
var eE = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function tE(e) {
  return e ? typeof e == "object" && !/* @__PURE__ */ f.isValidElement(e) ? e : {
    title: e
  } : null;
}
const rE = (e) => {
  let {
    prefixCls: t,
    label: r,
    htmlFor: n,
    labelCol: o,
    labelAlign: i,
    colon: a,
    required: s,
    requiredMark: l,
    tooltip: c
  } = e;
  var u;
  const [d] = w0("Form"), {
    vertical: h,
    labelAlign: b,
    labelCol: y,
    labelWrap: g,
    colon: m
  } = f.useContext(Zr);
  if (!r)
    return null;
  const v = o || y || {}, p = i || b, w = `${t}-item-label`, x = ee(w, p === "left" && `${w}-left`, v.className, {
    [`${w}-wrap`]: !!g
  });
  let E = r;
  const C = a === !0 || m !== !1 && a !== !1;
  C && !h && typeof r == "string" && r.trim() !== "" && (E = r.replace(/[:|：]\s*$/, ""));
  const M = tE(c);
  if (M) {
    const {
      icon: P = /* @__PURE__ */ f.createElement(JC, null)
    } = M, F = eE(M, ["icon"]), I = /* @__PURE__ */ f.createElement(lm, Object.assign({}, F), /* @__PURE__ */ f.cloneElement(P, {
      className: `${t}-item-tooltip`,
      title: ""
    }));
    E = /* @__PURE__ */ f.createElement(f.Fragment, null, E, I);
  }
  const O = l === "optional", $ = typeof l == "function";
  $ ? E = l(E, {
    required: !!s
  }) : O && !s && (E = /* @__PURE__ */ f.createElement(f.Fragment, null, E, /* @__PURE__ */ f.createElement("span", {
    className: `${t}-item-optional`,
    title: ""
  }, (d == null ? void 0 : d.optional) || ((u = Vn.Form) === null || u === void 0 ? void 0 : u.optional))));
  const D = ee({
    [`${t}-item-required`]: s,
    [`${t}-item-required-mark-optional`]: O || $,
    [`${t}-item-no-colon`]: !C
  });
  return /* @__PURE__ */ f.createElement(wm, Object.assign({}, v, {
    className: x
  }), /* @__PURE__ */ f.createElement("label", {
    htmlFor: n,
    className: D,
    title: typeof r == "string" ? r : ""
  }, E));
}, nE = rE, oE = {
  success: sb,
  warning: gb,
  error: vc,
  validating: pc
};
function Km(e) {
  let {
    children: t,
    errors: r,
    warnings: n,
    hasFeedback: o,
    validateStatus: i,
    prefixCls: a,
    meta: s,
    noStyle: l
  } = e;
  const c = `${a}-item`, {
    feedbackIcons: u
  } = f.useContext(Zr), d = Ym(r, n, s, null, !!o, i), {
    isFormItemInput: h,
    status: b,
    hasFeedback: y,
    feedbackIcon: g
  } = f.useContext(Sr), m = f.useMemo(() => {
    var v;
    let p;
    if (o) {
      const x = o !== !0 && o.icons || u, E = d && ((v = x == null ? void 0 : x({
        status: d,
        errors: r,
        warnings: n
      })) === null || v === void 0 ? void 0 : v[d]), C = d && oE[d];
      p = E !== !1 && C ? /* @__PURE__ */ f.createElement("span", {
        className: ee(`${c}-feedback-icon`, `${c}-feedback-icon-${d}`)
      }, E || /* @__PURE__ */ f.createElement(C, null)) : null;
    }
    const w = {
      status: d || "",
      errors: r,
      warnings: n,
      hasFeedback: !!o,
      feedbackIcon: p,
      isFormItemInput: !0
    };
    return l && (w.status = (d ?? b) || "", w.isFormItemInput = h, w.hasFeedback = !!(o ?? y), w.feedbackIcon = o !== void 0 ? w.feedbackIcon : g), w;
  }, [d, o, l, h, b]);
  return /* @__PURE__ */ f.createElement(Sr.Provider, {
    value: m
  }, t);
}
var iE = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function aE(e) {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: o,
    help: i,
    errors: a,
    warnings: s,
    validateStatus: l,
    meta: c,
    hasFeedback: u,
    hidden: d,
    children: h,
    fieldId: b,
    required: y,
    isRequired: g,
    onSubItemMetaChange: m
  } = e, v = iE(e, ["prefixCls", "className", "rootClassName", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "required", "isRequired", "onSubItemMetaChange"]), p = `${t}-item`, {
    requiredMark: w
  } = f.useContext(Zr), x = f.useRef(null), E = pa(a), C = pa(s), S = i != null, M = !!(S || a.length || s.length), O = !!x.current && yc(x.current), [$, D] = f.useState(null);
  Et(() => {
    if (M && x.current) {
      const T = getComputedStyle(x.current);
      D(parseInt(T.marginBottom, 10));
    }
  }, [M, O]);
  const P = (T) => {
    T || D(null);
  }, I = function() {
    let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const R = T ? E : c.errors, N = T ? C : c.warnings;
    return Ym(R, N, c, "", !!u, l);
  }(), L = ee(p, r, n, {
    [`${p}-with-help`]: S || E.length || C.length,
    // Status
    [`${p}-has-feedback`]: I && u,
    [`${p}-has-success`]: I === "success",
    [`${p}-has-warning`]: I === "warning",
    [`${p}-has-error`]: I === "error",
    [`${p}-is-validating`]: I === "validating",
    [`${p}-hidden`]: d
  });
  return /* @__PURE__ */ f.createElement("div", {
    className: L,
    style: o,
    ref: x
  }, /* @__PURE__ */ f.createElement(_x, Object.assign({
    className: `${p}-row`
  }, Eo(v, ["_internalItemRender", "colon", "dependencies", "extra", "fieldKey", "getValueFromEvent", "getValueProps", "htmlFor", "id", "initialValue", "isListField", "label", "labelAlign", "labelCol", "labelWrap", "messageVariables", "name", "normalize", "noStyle", "preserve", "requiredMark", "rules", "shouldUpdate", "trigger", "tooltip", "validateFirst", "validateTrigger", "valuePropName", "wrapperCol", "validateDebounce"])), /* @__PURE__ */ f.createElement(nE, Object.assign({
    htmlFor: b
  }, e, {
    requiredMark: w,
    required: y ?? g,
    prefixCls: t
  })), /* @__PURE__ */ f.createElement(KC, Object.assign({}, e, c, {
    errors: E,
    warnings: C,
    prefixCls: t,
    status: I,
    help: i,
    marginBottom: $,
    onErrorVisibleChanged: P
  }), /* @__PURE__ */ f.createElement(Kh.Provider, {
    value: m
  }, /* @__PURE__ */ f.createElement(Km, {
    prefixCls: t,
    meta: c,
    errors: c.errors,
    warnings: c.warnings,
    hasFeedback: u,
    // Already calculated
    validateStatus: I
  }, h)))), !!$ && /* @__PURE__ */ f.createElement("div", {
    className: `${p}-margin-offset`,
    style: {
      marginBottom: -$
    }
  }));
}
const sE = "__SPLIT__", lE = /* @__PURE__ */ f.memo((e) => {
  let {
    children: t
  } = e;
  return t;
}, (e, t) => e.value === t.value && e.update === t.update && e.childProps.length === t.childProps.length && e.childProps.every((r, n) => r === t.childProps[n]));
function Ld() {
  return {
    errors: [],
    warnings: [],
    touched: !1,
    validating: !1,
    name: [],
    validated: !1
  };
}
function cE(e) {
  const {
    name: t,
    noStyle: r,
    className: n,
    dependencies: o,
    prefixCls: i,
    shouldUpdate: a,
    rules: s,
    children: l,
    required: c,
    label: u,
    messageVariables: d,
    trigger: h = "onChange",
    validateTrigger: b,
    hidden: y,
    help: g
  } = e, {
    getPrefixCls: m
  } = f.useContext(Ge), {
    name: v
  } = f.useContext(Zr), p = BC(l), w = typeof p == "function", x = f.useContext(Kh), {
    validateTrigger: E
  } = f.useContext(Bn), C = b !== void 0 ? b : E, S = t != null, M = m("form", i), [O, $] = Dc(M), D = er("Form.Item");
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && D(t !== null, "usage", "`null` is passed as `name` property");
  const P = f.useContext(ei), F = f.useRef(), [I, L] = YC({}), [T, R] = kn(() => Ld()), N = (W) => {
    const Q = P == null ? void 0 : P.getKey(W.name);
    if (R(W.destroy ? Ld() : W, !0), r && g !== !1 && x) {
      let re = W.name;
      if (W.destroy)
        re = F.current || re;
      else if (Q !== void 0) {
        const [oe, ie] = Q;
        re = [oe].concat(ue(ie)), F.current = re;
      }
      x(W, re);
    }
  }, z = (W, Q) => {
    L((re) => {
      const oe = Object.assign({}, re), le = [].concat(ue(W.name.slice(0, -1)), ue(Q)).join(sE);
      return W.destroy ? delete oe[le] : oe[le] = W, oe;
    });
  }, [A, j] = f.useMemo(() => {
    const W = ue(T.errors), Q = ue(T.warnings);
    return Object.values(I).forEach((re) => {
      W.push.apply(W, ue(re.errors || [])), Q.push.apply(Q, ue(re.warnings || []));
    }), [W, Q];
  }, [I, T.errors, T.warnings]), V = GC();
  function X(W, Q, re) {
    return r && !y ? /* @__PURE__ */ f.createElement(Km, {
      prefixCls: M,
      hasFeedback: e.hasFeedback,
      validateStatus: e.validateStatus,
      meta: T,
      errors: A,
      warnings: j,
      noStyle: !0
    }, W) : /* @__PURE__ */ f.createElement(aE, Object.assign({
      key: "row"
    }, e, {
      className: ee(n, $),
      prefixCls: M,
      fieldId: Q,
      isRequired: re,
      errors: A,
      warnings: j,
      meta: T,
      onSubItemMetaChange: z
    }), W);
  }
  if (!S && !w && !o)
    return O(X(p));
  let K = {};
  return typeof u == "string" ? K.label = u : t && (K.label = String(t)), d && (K = Object.assign(Object.assign({}, K), d)), O(/* @__PURE__ */ f.createElement(Ec, Object.assign({}, e, {
    messageVariables: K,
    trigger: h,
    validateTrigger: C,
    onMetaChange: N
  }), (W, Q, re) => {
    const oe = Uo(t).length && Q ? Q.name : [], ie = Hm(oe, v), le = c !== void 0 ? c : !!(s && s.some((ge) => {
      if (ge && typeof ge == "object" && ge.required && !ge.warningOnly)
        return !0;
      if (typeof ge == "function") {
        const G = ge(re);
        return G && G.required && !G.warningOnly;
      }
      return !1;
    })), ye = Object.assign({}, W);
    let pe = null;
    if (process.env.NODE_ENV !== "production" && D(!(a && o), "usage", "`shouldUpdate` and `dependencies` shouldn't be used together. See https://u.ant.design/form-deps."), Array.isArray(p) && S)
      process.env.NODE_ENV !== "production" && D(!1, "usage", "A `Form.Item` with a `name` prop must have a single child element. For information on how to render more complex form items, see https://u.ant.design/complex-form-item."), pe = p;
    else if (w && (!(a || o) || S))
      process.env.NODE_ENV !== "production" && D(!!(a || o), "usage", "A `Form.Item` with a render function must have either `shouldUpdate` or `dependencies`."), process.env.NODE_ENV !== "production" && D(!S, "usage", "A `Form.Item` with a render function cannot be a field, and thus cannot have a `name` prop.");
    else if (o && !w && !S)
      process.env.NODE_ENV !== "production" && D(!1, "usage", "Must set `name` or use a render function when `dependencies` is set.");
    else if (Da(p)) {
      process.env.NODE_ENV !== "production" && D(p.props.defaultValue === void 0, "usage", "`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");
      const ge = Object.assign(Object.assign({}, p.props), ye);
      if (ge.id || (ge.id = ie), g || A.length > 0 || j.length > 0 || e.extra) {
        const ve = [];
        (g || A.length > 0) && ve.push(`${ie}_help`), e.extra && ve.push(`${ie}_extra`), ge["aria-describedby"] = ve.join(" ");
      }
      A.length > 0 && (ge["aria-invalid"] = "true"), le && (ge["aria-required"] = "true"), Co(p) && (ge.ref = V(oe, p)), new Set([].concat(ue(Uo(h)), ue(Uo(C)))).forEach((ve) => {
        ge[ve] = function() {
          for (var _e, Le, Z, q, se, de = arguments.length, we = new Array(de), Ne = 0; Ne < de; Ne++)
            we[Ne] = arguments[Ne];
          (Z = ye[ve]) === null || Z === void 0 || (_e = Z).call.apply(_e, [ye].concat(we)), (se = (q = p.props)[ve]) === null || se === void 0 || (Le = se).call.apply(Le, [q].concat(we));
        };
      });
      const be = [ge["aria-required"], ge["aria-invalid"], ge["aria-describedby"]];
      pe = /* @__PURE__ */ f.createElement(lE, {
        value: ye[e.valuePropName || "value"],
        update: p,
        childProps: be
      }, hn(p, ge));
    } else
      w && (a || o) && !S ? pe = p(re) : (process.env.NODE_ENV !== "production" && D(!oe.length, "usage", "`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."), pe = p);
    return X(pe, ie, le);
  }));
}
const Zm = cE;
Zm.useStatus = HC;
const uE = Zm;
var dE = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const fE = (e) => {
  var {
    prefixCls: t,
    children: r
  } = e, n = dE(e, ["prefixCls", "children"]);
  if (process.env.NODE_ENV !== "production") {
    const s = er("Form.List");
    process.env.NODE_ENV !== "production" && s(typeof n.name == "number" || (Array.isArray(n.name) ? !!n.name.length : !!n.name), "usage", "Miss `name` prop.");
  }
  const {
    getPrefixCls: o
  } = f.useContext(Ge), i = o("form", t), a = f.useMemo(() => ({
    prefixCls: i,
    status: "error"
  }), [i]);
  return /* @__PURE__ */ f.createElement(Gh, Object.assign({}, n), (s, l, c) => /* @__PURE__ */ f.createElement(_c.Provider, {
    value: a
  }, r(s.map((u) => Object.assign(Object.assign({}, u), {
    fieldKey: u.key
  })), l, {
    errors: c.errors,
    warnings: c.warnings
  })));
}, hE = fE;
function mE() {
  const {
    form: e
  } = mt(Zr);
  return e;
}
const rn = WC;
rn.Item = uE;
rn.List = hE;
rn.ErrorList = Bm;
rn.useForm = Gm;
rn.useFormInstance = mE;
rn.useWatch = Xh;
rn.Provider = Zh;
rn.create = () => {
  process.env.NODE_ENV !== "production" && li(!1, "Form", "antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.");
};
const Yi = rn;
var gE = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
const vE = gE;
var Qm = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: vE
  }));
};
process.env.NODE_ENV !== "production" && (Qm.displayName = "CloseCircleOutlined");
const pE = /* @__PURE__ */ f.forwardRef(Qm);
var yE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z" } }] }, name: "customer-service", theme: "outlined" };
const bE = yE;
var Jm = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: bE
  }));
};
process.env.NODE_ENV !== "production" && (Jm.displayName = "CustomerServiceOutlined");
const SE = /* @__PURE__ */ f.forwardRef(Jm);
var wE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M300 328a60 60 0 10120 0 60 60 0 10-120 0zM852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 660H204V128h616v596zM604 328a60 60 0 10120 0 60 60 0 10-120 0zm250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "robot", theme: "outlined" };
const xE = wE;
var eg = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: xE
  }));
};
process.env.NODE_ENV !== "production" && (eg.displayName = "RobotOutlined");
const CE = /* @__PURE__ */ f.forwardRef(eg);
var EE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z" } }] }, name: "send", theme: "outlined" };
const OE = EE;
var tg = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: OE
  }));
};
process.env.NODE_ENV !== "production" && (tg.displayName = "SendOutlined");
const _E = /* @__PURE__ */ f.forwardRef(tg);
var $E = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, name: "user", theme: "outlined" };
const ME = $E;
var rg = function(t, r) {
  return /* @__PURE__ */ f.createElement(Tt, Ve({}, t, {
    ref: r,
    icon: ME
  }));
};
process.env.NODE_ENV !== "production" && (rg.displayName = "UserOutlined");
const RE = /* @__PURE__ */ f.forwardRef(rg);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ng;
function te() {
  return ng.apply(null, arguments);
}
function PE(e) {
  ng = e;
}
function wr(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ln(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function ze(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ac(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (ze(e, t))
      return !1;
  return !0;
}
function Vt(e) {
  return e === void 0;
}
function Qr(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function gi(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function og(e, t) {
  var r = [], n, o = e.length;
  for (n = 0; n < o; ++n)
    r.push(t(e[n], n));
  return r;
}
function un(e, t) {
  for (var r in t)
    ze(t, r) && (e[r] = t[r]);
  return ze(t, "toString") && (e.toString = t.toString), ze(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Fr(e, t, r, n) {
  return Mg(e, t, r, n, !0).utc();
}
function NE() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function Oe(e) {
  return e._pf == null && (e._pf = NE()), e._pf;
}
var Ll;
Array.prototype.some ? Ll = Array.prototype.some : Ll = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function jc(e) {
  if (e._isValid == null) {
    var t = Oe(e), r = Ll.call(t.parsedDateParts, function(o) {
      return o != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function za(e) {
  var t = Fr(NaN);
  return e != null ? un(Oe(t), e) : Oe(t).userInvalidated = !0, t;
}
var zd = te.momentProperties = [], Ws = !1;
function kc(e, t) {
  var r, n, o, i = zd.length;
  if (Vt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Vt(t._i) || (e._i = t._i), Vt(t._f) || (e._f = t._f), Vt(t._l) || (e._l = t._l), Vt(t._strict) || (e._strict = t._strict), Vt(t._tzm) || (e._tzm = t._tzm), Vt(t._isUTC) || (e._isUTC = t._isUTC), Vt(t._offset) || (e._offset = t._offset), Vt(t._pf) || (e._pf = Oe(t)), Vt(t._locale) || (e._locale = t._locale), i > 0)
    for (r = 0; r < i; r++)
      n = zd[r], o = t[n], Vt(o) || (e[n] = o);
  return e;
}
function vi(e) {
  kc(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ws === !1 && (Ws = !0, te.updateOffset(this), Ws = !1);
}
function xr(e) {
  return e instanceof vi || e != null && e._isAMomentObject != null;
}
function ig(e) {
  te.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function cr(e, t) {
  var r = !0;
  return un(function() {
    if (te.deprecationHandler != null && te.deprecationHandler(null, e), r) {
      var n = [], o, i, a, s = arguments.length;
      for (i = 0; i < s; i++) {
        if (o = "", typeof arguments[i] == "object") {
          o += `
[` + i + "] ";
          for (a in arguments[0])
            ze(arguments[0], a) && (o += a + ": " + arguments[0][a] + ", ");
          o = o.slice(0, -2);
        } else
          o = arguments[i];
        n.push(o);
      }
      ig(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Vd = {};
function ag(e, t) {
  te.deprecationHandler != null && te.deprecationHandler(e, t), Vd[e] || (ig(t), Vd[e] = !0);
}
te.suppressDeprecationWarnings = !1;
te.deprecationHandler = null;
function Dr(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function TE(e) {
  var t, r;
  for (r in e)
    ze(e, r) && (t = e[r], Dr(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function zl(e, t) {
  var r = un({}, e), n;
  for (n in t)
    ze(t, n) && (Ln(e[n]) && Ln(t[n]) ? (r[n] = {}, un(r[n], e[n]), un(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    ze(e, n) && !ze(t, n) && Ln(e[n]) && (r[n] = un({}, r[n]));
  return r;
}
function Lc(e) {
  e != null && this.set(e);
}
var Vl;
Object.keys ? Vl = Object.keys : Vl = function(e) {
  var t, r = [];
  for (t in e)
    ze(e, t) && r.push(t);
  return r;
};
var IE = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function FE(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return Dr(n) ? n.call(t, r) : n;
}
function Nr(e, t, r) {
  var n = "" + Math.abs(e), o = t - n.length, i = e >= 0;
  return (i ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + n;
}
var zc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Gi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Bs = {}, vo = {};
function he(e, t, r, n) {
  var o = n;
  typeof n == "string" && (o = function() {
    return this[n]();
  }), e && (vo[e] = o), t && (vo[t[0]] = function() {
    return Nr(o.apply(this, arguments), t[1], t[2]);
  }), r && (vo[r] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function DE(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function AE(e) {
  var t = e.match(zc), r, n;
  for (r = 0, n = t.length; r < n; r++)
    vo[t[r]] ? t[r] = vo[t[r]] : t[r] = DE(t[r]);
  return function(o) {
    var i = "", a;
    for (a = 0; a < n; a++)
      i += Dr(t[a]) ? t[a].call(o, e) : t[a];
    return i;
  };
}
function na(e, t) {
  return e.isValid() ? (t = sg(t, e.localeData()), Bs[t] = Bs[t] || AE(t), Bs[t](e)) : e.localeData().invalidDate();
}
function sg(e, t) {
  var r = 5;
  function n(o) {
    return t.longDateFormat(o) || o;
  }
  for (Gi.lastIndex = 0; r >= 0 && Gi.test(e); )
    e = e.replace(
      Gi,
      n
    ), Gi.lastIndex = 0, r -= 1;
  return e;
}
var jE = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function kE(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(zc).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var LE = "Invalid date";
function zE() {
  return this._invalidDate;
}
var VE = "%d", WE = /\d{1,2}/;
function BE(e) {
  return this._ordinal.replace("%d", e);
}
var HE = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function YE(e, t, r, n) {
  var o = this._relativeTime[r];
  return Dr(o) ? o(e, t, r, n) : o.replace(/%d/i, e);
}
function GE(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return Dr(r) ? r(t) : r.replace(/%s/i, t);
}
var qo = {};
function It(e, t) {
  var r = e.toLowerCase();
  qo[r] = qo[r + "s"] = qo[t] = e;
}
function ur(e) {
  return typeof e == "string" ? qo[e] || qo[e.toLowerCase()] : void 0;
}
function Vc(e) {
  var t = {}, r, n;
  for (n in e)
    ze(e, n) && (r = ur(n), r && (t[r] = e[n]));
  return t;
}
var lg = {};
function Ft(e, t) {
  lg[e] = t;
}
function UE(e) {
  var t = [], r;
  for (r in e)
    ze(e, r) && t.push({ unit: r, priority: lg[r] });
  return t.sort(function(n, o) {
    return n.priority - o.priority;
  }), t;
}
function Va(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function ar(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Pe(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = ar(t)), r;
}
function Po(e, t) {
  return function(r) {
    return r != null ? (cg(this, e, r), te.updateOffset(this, t), this) : ya(this, e);
  };
}
function ya(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function cg(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Va(e.year()) && e.month() === 1 && e.date() === 29 ? (r = Pe(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Ua(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function qE(e) {
  return e = ur(e), Dr(this[e]) ? this[e]() : this;
}
function XE(e, t) {
  if (typeof e == "object") {
    e = Vc(e);
    var r = UE(e), n, o = r.length;
    for (n = 0; n < o; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = ur(e), Dr(this[e]))
    return this[e](t);
  return this;
}
var ug = /\d/, tr = /\d\d/, dg = /\d{3}/, Wc = /\d{4}/, Wa = /[+-]?\d{6}/, et = /\d\d?/, fg = /\d\d\d\d?/, hg = /\d\d\d\d\d\d?/, Ba = /\d{1,3}/, Bc = /\d{1,4}/, Ha = /[+-]?\d{1,6}/, No = /\d+/, Ya = /[+-]?\d+/, KE = /Z|[+-]\d\d:?\d\d/gi, Ga = /Z|[+-]\d\d(?::?\d\d)?/gi, ZE = /[+-]?\d+(\.\d{1,3})?/, pi = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ba;
ba = {};
function ae(e, t, r) {
  ba[e] = Dr(t) ? t : function(n, o) {
    return n && r ? r : t;
  };
}
function QE(e, t) {
  return ze(ba, e) ? ba[e](t._strict, t._locale) : new RegExp(JE(e));
}
function JE(e) {
  return Kt(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, o, i) {
        return r || n || o || i;
      }
    )
  );
}
function Kt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Wl = {};
function qe(e, t) {
  var r, n = t, o;
  for (typeof e == "string" && (e = [e]), Qr(t) && (n = function(i, a) {
    a[t] = Pe(i);
  }), o = e.length, r = 0; r < o; r++)
    Wl[e[r]] = n;
}
function yi(e, t) {
  qe(e, function(r, n, o, i) {
    o._w = o._w || {}, t(r, o._w, o, i);
  });
}
function eO(e, t, r) {
  t != null && ze(Wl, e) && Wl[e](t, r._a, r, e);
}
var Nt = 0, Ur = 1, Rr = 2, St = 3, vr = 4, qr = 5, Fn = 6, tO = 7, rO = 8;
function nO(e, t) {
  return (e % t + t) % t;
}
var ht;
Array.prototype.indexOf ? ht = Array.prototype.indexOf : ht = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ua(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = nO(t, 12);
  return e += (t - r) / 12, r === 1 ? Va(e) ? 29 : 28 : 31 - r % 7 % 2;
}
he("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
he("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
he("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
It("month", "M");
Ft("month", 8);
ae("M", et);
ae("MM", et, tr);
ae("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
ae("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
qe(["M", "MM"], function(e, t) {
  t[Ur] = Pe(e) - 1;
});
qe(["MMM", "MMMM"], function(e, t, r, n) {
  var o = r._locale.monthsParse(e, n, r._strict);
  o != null ? t[Ur] = o : Oe(r).invalidMonth = e;
});
var oO = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), mg = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), gg = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, iO = pi, aO = pi;
function sO(e, t) {
  return e ? wr(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || gg).test(t) ? "format" : "standalone"][e.month()] : wr(this._months) ? this._months : this._months.standalone;
}
function lO(e, t) {
  return e ? wr(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[gg.test(t) ? "format" : "standalone"][e.month()] : wr(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function cO(e, t, r) {
  var n, o, i, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      i = Fr([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (o = ht.call(this._shortMonthsParse, a), o !== -1 ? o : null) : (o = ht.call(this._longMonthsParse, a), o !== -1 ? o : null) : t === "MMM" ? (o = ht.call(this._shortMonthsParse, a), o !== -1 ? o : (o = ht.call(this._longMonthsParse, a), o !== -1 ? o : null)) : (o = ht.call(this._longMonthsParse, a), o !== -1 ? o : (o = ht.call(this._shortMonthsParse, a), o !== -1 ? o : null));
}
function uO(e, t, r) {
  var n, o, i;
  if (this._monthsParseExact)
    return cO.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (o = Fr([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(o, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(o, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (i = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function vg(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Pe(t);
    else if (t = e.localeData().monthsParse(t), !Qr(t))
      return e;
  }
  return r = Math.min(e.date(), Ua(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function pg(e) {
  return e != null ? (vg(this, e), te.updateOffset(this, !0), this) : ya(this, "Month");
}
function dO() {
  return Ua(this.year(), this.month());
}
function fO(e) {
  return this._monthsParseExact ? (ze(this, "_monthsRegex") || yg.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ze(this, "_monthsShortRegex") || (this._monthsShortRegex = iO), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function hO(e) {
  return this._monthsParseExact ? (ze(this, "_monthsRegex") || yg.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ze(this, "_monthsRegex") || (this._monthsRegex = aO), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function yg() {
  function e(a, s) {
    return s.length - a.length;
  }
  var t = [], r = [], n = [], o, i;
  for (o = 0; o < 12; o++)
    i = Fr([2e3, o]), t.push(this.monthsShort(i, "")), r.push(this.months(i, "")), n.push(this.months(i, "")), n.push(this.monthsShort(i, ""));
  for (t.sort(e), r.sort(e), n.sort(e), o = 0; o < 12; o++)
    t[o] = Kt(t[o]), r[o] = Kt(r[o]);
  for (o = 0; o < 24; o++)
    n[o] = Kt(n[o]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
he("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Nr(e, 4) : "+" + e;
});
he(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
he(0, ["YYYY", 4], 0, "year");
he(0, ["YYYYY", 5], 0, "year");
he(0, ["YYYYYY", 6, !0], 0, "year");
It("year", "y");
Ft("year", 1);
ae("Y", Ya);
ae("YY", et, tr);
ae("YYYY", Bc, Wc);
ae("YYYYY", Ha, Wa);
ae("YYYYYY", Ha, Wa);
qe(["YYYYY", "YYYYYY"], Nt);
qe("YYYY", function(e, t) {
  t[Nt] = e.length === 2 ? te.parseTwoDigitYear(e) : Pe(e);
});
qe("YY", function(e, t) {
  t[Nt] = te.parseTwoDigitYear(e);
});
qe("Y", function(e, t) {
  t[Nt] = parseInt(e, 10);
});
function Xo(e) {
  return Va(e) ? 366 : 365;
}
te.parseTwoDigitYear = function(e) {
  return Pe(e) + (Pe(e) > 68 ? 1900 : 2e3);
};
var bg = Po("FullYear", !0);
function mO() {
  return Va(this.year());
}
function gO(e, t, r, n, o, i, a) {
  var s;
  return e < 100 && e >= 0 ? (s = new Date(e + 400, t, r, n, o, i, a), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, r, n, o, i, a), s;
}
function oi(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Sa(e, t, r) {
  var n = 7 + t - r, o = (7 + oi(e, 0, n).getUTCDay() - t) % 7;
  return -o + n - 1;
}
function Sg(e, t, r, n, o) {
  var i = (7 + r - n) % 7, a = Sa(e, n, o), s = 1 + 7 * (t - 1) + i + a, l, c;
  return s <= 0 ? (l = e - 1, c = Xo(l) + s) : s > Xo(e) ? (l = e + 1, c = s - Xo(e)) : (l = e, c = s), {
    year: l,
    dayOfYear: c
  };
}
function ii(e, t, r) {
  var n = Sa(e.year(), t, r), o = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, i, a;
  return o < 1 ? (a = e.year() - 1, i = o + Xr(a, t, r)) : o > Xr(e.year(), t, r) ? (i = o - Xr(e.year(), t, r), a = e.year() + 1) : (a = e.year(), i = o), {
    week: i,
    year: a
  };
}
function Xr(e, t, r) {
  var n = Sa(e, t, r), o = Sa(e + 1, t, r);
  return (Xo(e) - n + o) / 7;
}
he("w", ["ww", 2], "wo", "week");
he("W", ["WW", 2], "Wo", "isoWeek");
It("week", "w");
It("isoWeek", "W");
Ft("week", 5);
Ft("isoWeek", 5);
ae("w", et);
ae("ww", et, tr);
ae("W", et);
ae("WW", et, tr);
yi(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = Pe(e);
  }
);
function vO(e) {
  return ii(e, this._week.dow, this._week.doy).week;
}
var pO = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function yO() {
  return this._week.dow;
}
function bO() {
  return this._week.doy;
}
function SO(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function wO(e) {
  var t = ii(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
he("d", 0, "do", "day");
he("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
he("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
he("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
he("e", 0, 0, "weekday");
he("E", 0, 0, "isoWeekday");
It("day", "d");
It("weekday", "e");
It("isoWeekday", "E");
Ft("day", 11);
Ft("weekday", 11);
Ft("isoWeekday", 11);
ae("d", et);
ae("e", et);
ae("E", et);
ae("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
ae("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
ae("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
yi(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var o = r._locale.weekdaysParse(e, n, r._strict);
  o != null ? t.d = o : Oe(r).invalidWeekday = e;
});
yi(["d", "e", "E"], function(e, t, r, n) {
  t[n] = Pe(e);
});
function xO(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function CO(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Hc(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var EO = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), wg = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), OO = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), _O = pi, $O = pi, MO = pi;
function RO(e, t) {
  var r = wr(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Hc(r, this._week.dow) : e ? r[e.day()] : r;
}
function PO(e) {
  return e === !0 ? Hc(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function NO(e) {
  return e === !0 ? Hc(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function TO(e, t, r) {
  var n, o, i, a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      i = Fr([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (o = ht.call(this._weekdaysParse, a), o !== -1 ? o : null) : t === "ddd" ? (o = ht.call(this._shortWeekdaysParse, a), o !== -1 ? o : null) : (o = ht.call(this._minWeekdaysParse, a), o !== -1 ? o : null) : t === "dddd" ? (o = ht.call(this._weekdaysParse, a), o !== -1 || (o = ht.call(this._shortWeekdaysParse, a), o !== -1) ? o : (o = ht.call(this._minWeekdaysParse, a), o !== -1 ? o : null)) : t === "ddd" ? (o = ht.call(this._shortWeekdaysParse, a), o !== -1 || (o = ht.call(this._weekdaysParse, a), o !== -1) ? o : (o = ht.call(this._minWeekdaysParse, a), o !== -1 ? o : null)) : (o = ht.call(this._minWeekdaysParse, a), o !== -1 || (o = ht.call(this._weekdaysParse, a), o !== -1) ? o : (o = ht.call(this._shortWeekdaysParse, a), o !== -1 ? o : null));
}
function IO(e, t, r) {
  var n, o, i;
  if (this._weekdaysParseExact)
    return TO.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (o = Fr([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (i = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function FO(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = xO(e, this.localeData()), this.add(e - t, "d")) : t;
}
function DO(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function AO(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = CO(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function jO(e) {
  return this._weekdaysParseExact ? (ze(this, "_weekdaysRegex") || Yc.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ze(this, "_weekdaysRegex") || (this._weekdaysRegex = _O), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function kO(e) {
  return this._weekdaysParseExact ? (ze(this, "_weekdaysRegex") || Yc.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ze(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $O), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function LO(e) {
  return this._weekdaysParseExact ? (ze(this, "_weekdaysRegex") || Yc.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ze(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = MO), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Yc() {
  function e(u, d) {
    return d.length - u.length;
  }
  var t = [], r = [], n = [], o = [], i, a, s, l, c;
  for (i = 0; i < 7; i++)
    a = Fr([2e3, 1]).day(i), s = Kt(this.weekdaysMin(a, "")), l = Kt(this.weekdaysShort(a, "")), c = Kt(this.weekdays(a, "")), t.push(s), r.push(l), n.push(c), o.push(s), o.push(l), o.push(c);
  t.sort(e), r.sort(e), n.sort(e), o.sort(e), this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Gc() {
  return this.hours() % 12 || 12;
}
function zO() {
  return this.hours() || 24;
}
he("H", ["HH", 2], 0, "hour");
he("h", ["hh", 2], 0, Gc);
he("k", ["kk", 2], 0, zO);
he("hmm", 0, 0, function() {
  return "" + Gc.apply(this) + Nr(this.minutes(), 2);
});
he("hmmss", 0, 0, function() {
  return "" + Gc.apply(this) + Nr(this.minutes(), 2) + Nr(this.seconds(), 2);
});
he("Hmm", 0, 0, function() {
  return "" + this.hours() + Nr(this.minutes(), 2);
});
he("Hmmss", 0, 0, function() {
  return "" + this.hours() + Nr(this.minutes(), 2) + Nr(this.seconds(), 2);
});
function xg(e, t) {
  he(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
xg("a", !0);
xg("A", !1);
It("hour", "h");
Ft("hour", 13);
function Cg(e, t) {
  return t._meridiemParse;
}
ae("a", Cg);
ae("A", Cg);
ae("H", et);
ae("h", et);
ae("k", et);
ae("HH", et, tr);
ae("hh", et, tr);
ae("kk", et, tr);
ae("hmm", fg);
ae("hmmss", hg);
ae("Hmm", fg);
ae("Hmmss", hg);
qe(["H", "HH"], St);
qe(["k", "kk"], function(e, t, r) {
  var n = Pe(e);
  t[St] = n === 24 ? 0 : n;
});
qe(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
qe(["h", "hh"], function(e, t, r) {
  t[St] = Pe(e), Oe(r).bigHour = !0;
});
qe("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[St] = Pe(e.substr(0, n)), t[vr] = Pe(e.substr(n)), Oe(r).bigHour = !0;
});
qe("hmmss", function(e, t, r) {
  var n = e.length - 4, o = e.length - 2;
  t[St] = Pe(e.substr(0, n)), t[vr] = Pe(e.substr(n, 2)), t[qr] = Pe(e.substr(o)), Oe(r).bigHour = !0;
});
qe("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[St] = Pe(e.substr(0, n)), t[vr] = Pe(e.substr(n));
});
qe("Hmmss", function(e, t, r) {
  var n = e.length - 4, o = e.length - 2;
  t[St] = Pe(e.substr(0, n)), t[vr] = Pe(e.substr(n, 2)), t[qr] = Pe(e.substr(o));
});
function VO(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var WO = /[ap]\.?m?\.?/i, BO = Po("Hours", !0);
function HO(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Eg = {
  calendar: IE,
  longDateFormat: jE,
  invalidDate: LE,
  ordinal: VE,
  dayOfMonthOrdinalParse: WE,
  relativeTime: HE,
  months: oO,
  monthsShort: mg,
  week: pO,
  weekdays: EO,
  weekdaysMin: OO,
  weekdaysShort: wg,
  meridiemParse: WO
}, tt = {}, Lo = {}, ai;
function YO(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function Wd(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function GO(e) {
  for (var t = 0, r, n, o, i; t < e.length; ) {
    for (i = Wd(e[t]).split("-"), r = i.length, n = Wd(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (o = qa(i.slice(0, r).join("-")), o)
        return o;
      if (n && n.length >= r && YO(i, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return ai;
}
function UO(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function qa(e) {
  var t = null, r;
  if (tt[e] === void 0 && typeof module < "u" && module && module.exports && UO(e))
    try {
      t = ai._abbr, r = require, r("./locale/" + e), fn(t);
    } catch {
      tt[e] = null;
    }
  return tt[e];
}
function fn(e, t) {
  var r;
  return e && (Vt(t) ? r = nn(e) : r = Uc(e, t), r ? ai = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ai._abbr;
}
function Uc(e, t) {
  if (t !== null) {
    var r, n = Eg;
    if (t.abbr = e, tt[e] != null)
      ag(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = tt[e]._config;
    else if (t.parentLocale != null)
      if (tt[t.parentLocale] != null)
        n = tt[t.parentLocale]._config;
      else if (r = qa(t.parentLocale), r != null)
        n = r._config;
      else
        return Lo[t.parentLocale] || (Lo[t.parentLocale] = []), Lo[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return tt[e] = new Lc(zl(n, t)), Lo[e] && Lo[e].forEach(function(o) {
      Uc(o.name, o.config);
    }), fn(e), tt[e];
  } else
    return delete tt[e], null;
}
function qO(e, t) {
  if (t != null) {
    var r, n, o = Eg;
    tt[e] != null && tt[e].parentLocale != null ? tt[e].set(zl(tt[e]._config, t)) : (n = qa(e), n != null && (o = n._config), t = zl(o, t), n == null && (t.abbr = e), r = new Lc(t), r.parentLocale = tt[e], tt[e] = r), fn(e);
  } else
    tt[e] != null && (tt[e].parentLocale != null ? (tt[e] = tt[e].parentLocale, e === fn() && fn(e)) : tt[e] != null && delete tt[e]);
  return tt[e];
}
function nn(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ai;
  if (!wr(e)) {
    if (t = qa(e), t)
      return t;
    e = [e];
  }
  return GO(e);
}
function XO() {
  return Vl(tt);
}
function qc(e) {
  var t, r = e._a;
  return r && Oe(e).overflow === -2 && (t = r[Ur] < 0 || r[Ur] > 11 ? Ur : r[Rr] < 1 || r[Rr] > Ua(r[Nt], r[Ur]) ? Rr : r[St] < 0 || r[St] > 24 || r[St] === 24 && (r[vr] !== 0 || r[qr] !== 0 || r[Fn] !== 0) ? St : r[vr] < 0 || r[vr] > 59 ? vr : r[qr] < 0 || r[qr] > 59 ? qr : r[Fn] < 0 || r[Fn] > 999 ? Fn : -1, Oe(e)._overflowDayOfYear && (t < Nt || t > Rr) && (t = Rr), Oe(e)._overflowWeeks && t === -1 && (t = tO), Oe(e)._overflowWeekday && t === -1 && (t = rO), Oe(e).overflow = t), e;
}
var KO = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ZO = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, QO = /Z|[+-]\d\d(?::?\d\d)?/, Ui = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Hs = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], JO = /^\/?Date\((-?\d+)/i, e_ = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, t_ = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Og(e) {
  var t, r, n = e._i, o = KO.exec(n) || ZO.exec(n), i, a, s, l, c = Ui.length, u = Hs.length;
  if (o) {
    for (Oe(e).iso = !0, t = 0, r = c; t < r; t++)
      if (Ui[t][1].exec(o[1])) {
        a = Ui[t][0], i = Ui[t][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (t = 0, r = u; t < r; t++)
        if (Hs[t][1].exec(o[3])) {
          s = (o[2] || " ") + Hs[t][0];
          break;
        }
      if (s == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && s != null) {
      e._isValid = !1;
      return;
    }
    if (o[4])
      if (QO.exec(o[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (s || "") + (l || ""), Kc(e);
  } else
    e._isValid = !1;
}
function r_(e, t, r, n, o, i) {
  var a = [
    n_(e),
    mg.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(o, 10)
  ];
  return i && a.push(parseInt(i, 10)), a;
}
function n_(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function o_(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function i_(e, t, r) {
  if (e) {
    var n = wg.indexOf(e), o = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== o)
      return Oe(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function a_(e, t, r) {
  if (e)
    return t_[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), o = n % 100, i = (n - o) / 100;
  return i * 60 + o;
}
function _g(e) {
  var t = e_.exec(o_(e._i)), r;
  if (t) {
    if (r = r_(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !i_(t[1], r, e))
      return;
    e._a = r, e._tzm = a_(t[8], t[9], t[10]), e._d = oi.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Oe(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function s_(e) {
  var t = JO.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Og(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (_g(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : te.createFromInputFallback(e);
}
te.createFromInputFallback = cr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function lo(e, t, r) {
  return e ?? t ?? r;
}
function l_(e) {
  var t = new Date(te.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Xc(e) {
  var t, r, n = [], o, i, a;
  if (!e._d) {
    for (o = l_(e), e._w && e._a[Rr] == null && e._a[Ur] == null && c_(e), e._dayOfYear != null && (a = lo(e._a[Nt], o[Nt]), (e._dayOfYear > Xo(a) || e._dayOfYear === 0) && (Oe(e)._overflowDayOfYear = !0), r = oi(a, 0, e._dayOfYear), e._a[Ur] = r.getUTCMonth(), e._a[Rr] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = o[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[St] === 24 && e._a[vr] === 0 && e._a[qr] === 0 && e._a[Fn] === 0 && (e._nextDay = !0, e._a[St] = 0), e._d = (e._useUTC ? oi : gO).apply(
      null,
      n
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[St] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (Oe(e).weekdayMismatch = !0);
  }
}
function c_(e) {
  var t, r, n, o, i, a, s, l, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, a = 4, r = lo(
    t.GG,
    e._a[Nt],
    ii(Je(), 1, 4).year
  ), n = lo(t.W, 1), o = lo(t.E, 1), (o < 1 || o > 7) && (l = !0)) : (i = e._locale._week.dow, a = e._locale._week.doy, c = ii(Je(), i, a), r = lo(t.gg, e._a[Nt], c.year), n = lo(t.w, c.week), t.d != null ? (o = t.d, (o < 0 || o > 6) && (l = !0)) : t.e != null ? (o = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : o = i), n < 1 || n > Xr(r, i, a) ? Oe(e)._overflowWeeks = !0 : l != null ? Oe(e)._overflowWeekday = !0 : (s = Sg(r, n, o, i, a), e._a[Nt] = s.year, e._dayOfYear = s.dayOfYear);
}
te.ISO_8601 = function() {
};
te.RFC_2822 = function() {
};
function Kc(e) {
  if (e._f === te.ISO_8601) {
    Og(e);
    return;
  }
  if (e._f === te.RFC_2822) {
    _g(e);
    return;
  }
  e._a = [], Oe(e).empty = !0;
  var t = "" + e._i, r, n, o, i, a, s = t.length, l = 0, c, u;
  for (o = sg(e._f, e._locale).match(zc) || [], u = o.length, r = 0; r < u; r++)
    i = o[r], n = (t.match(QE(i, e)) || [])[0], n && (a = t.substr(0, t.indexOf(n)), a.length > 0 && Oe(e).unusedInput.push(a), t = t.slice(
      t.indexOf(n) + n.length
    ), l += n.length), vo[i] ? (n ? Oe(e).empty = !1 : Oe(e).unusedTokens.push(i), eO(i, n, e)) : e._strict && !n && Oe(e).unusedTokens.push(i);
  Oe(e).charsLeftOver = s - l, t.length > 0 && Oe(e).unusedInput.push(t), e._a[St] <= 12 && Oe(e).bigHour === !0 && e._a[St] > 0 && (Oe(e).bigHour = void 0), Oe(e).parsedDateParts = e._a.slice(0), Oe(e).meridiem = e._meridiem, e._a[St] = u_(
    e._locale,
    e._a[St],
    e._meridiem
  ), c = Oe(e).era, c !== null && (e._a[Nt] = e._locale.erasConvertYear(c, e._a[Nt])), Xc(e), qc(e);
}
function u_(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function d_(e) {
  var t, r, n, o, i, a, s = !1, l = e._f.length;
  if (l === 0) {
    Oe(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < l; o++)
    i = 0, a = !1, t = kc({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[o], Kc(t), jc(t) && (a = !0), i += Oe(t).charsLeftOver, i += Oe(t).unusedTokens.length * 10, Oe(t).score = i, s ? i < n && (n = i, r = t) : (n == null || i < n || a) && (n = i, r = t, a && (s = !0));
  un(e, r || t);
}
function f_(e) {
  if (!e._d) {
    var t = Vc(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = og(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Xc(e);
  }
}
function h_(e) {
  var t = new vi(qc($g(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function $g(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || nn(e._l), t === null || r === void 0 && t === "" ? za({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), xr(t) ? new vi(qc(t)) : (gi(t) ? e._d = t : wr(r) ? d_(e) : r ? Kc(e) : m_(e), jc(e) || (e._d = null), e));
}
function m_(e) {
  var t = e._i;
  Vt(t) ? e._d = new Date(te.now()) : gi(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? s_(e) : wr(t) ? (e._a = og(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Xc(e)) : Ln(t) ? f_(e) : Qr(t) ? e._d = new Date(t) : te.createFromInputFallback(e);
}
function Mg(e, t, r, n, o) {
  var i = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (Ln(e) && Ac(e) || wr(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = o, i._l = r, i._i = e, i._f = t, i._strict = n, h_(i);
}
function Je(e, t, r, n) {
  return Mg(e, t, r, n, !1);
}
var g_ = cr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Je.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : za();
  }
), v_ = cr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Je.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : za();
  }
);
function Rg(e, t) {
  var r, n;
  if (t.length === 1 && wr(t[0]) && (t = t[0]), !t.length)
    return Je();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function p_() {
  var e = [].slice.call(arguments, 0);
  return Rg("isBefore", e);
}
function y_() {
  var e = [].slice.call(arguments, 0);
  return Rg("isAfter", e);
}
var b_ = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, zo = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function S_(e) {
  var t, r = !1, n, o = zo.length;
  for (t in e)
    if (ze(e, t) && !(ht.call(zo, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < o; ++n)
    if (e[zo[n]]) {
      if (r)
        return !1;
      parseFloat(e[zo[n]]) !== Pe(e[zo[n]]) && (r = !0);
    }
  return !0;
}
function w_() {
  return this._isValid;
}
function x_() {
  return Cr(NaN);
}
function Xa(e) {
  var t = Vc(e), r = t.year || 0, n = t.quarter || 0, o = t.month || 0, i = t.week || t.isoWeek || 0, a = t.day || 0, s = t.hour || 0, l = t.minute || 0, c = t.second || 0, u = t.millisecond || 0;
  this._isValid = S_(t), this._milliseconds = +u + c * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +o + n * 3 + r * 12, this._data = {}, this._locale = nn(), this._bubble();
}
function oa(e) {
  return e instanceof Xa;
}
function Bl(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function C_(e, t, r) {
  var n = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), i = 0, a;
  for (a = 0; a < n; a++)
    (r && e[a] !== t[a] || !r && Pe(e[a]) !== Pe(t[a])) && i++;
  return i + o;
}
function Pg(e, t) {
  he(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + Nr(~~(r / 60), 2) + t + Nr(~~r % 60, 2);
  });
}
Pg("Z", ":");
Pg("ZZ", "");
ae("Z", Ga);
ae("ZZ", Ga);
qe(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Zc(Ga, e);
});
var E_ = /([\+\-]|\d\d)/gi;
function Zc(e, t) {
  var r = (t || "").match(e), n, o, i;
  return r === null ? null : (n = r[r.length - 1] || [], o = (n + "").match(E_) || ["-", 0, 0], i = +(o[1] * 60) + Pe(o[2]), i === 0 ? 0 : o[0] === "+" ? i : -i);
}
function Qc(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (xr(e) || gi(e) ? e.valueOf() : Je(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), te.updateOffset(r, !1), r) : Je(e).local();
}
function Hl(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
te.updateOffset = function() {
};
function O_(e, t, r) {
  var n = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Zc(Ga, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (o = Hl(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), n !== e && (!t || this._changeInProgress ? Ig(
      this,
      Cr(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, te.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Hl(this);
}
function __(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function $_(e) {
  return this.utcOffset(0, e);
}
function M_(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Hl(this), "m")), this;
}
function R_() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Zc(KE, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function P_(e) {
  return this.isValid() ? (e = e ? Je(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function N_() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function T_() {
  if (!Vt(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return kc(e, this), e = $g(e), e._a ? (t = e._isUTC ? Fr(e._a) : Je(e._a), this._isDSTShifted = this.isValid() && C_(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function I_() {
  return this.isValid() ? !this._isUTC : !1;
}
function F_() {
  return this.isValid() ? this._isUTC : !1;
}
function Ng() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var D_ = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, A_ = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Cr(e, t) {
  var r = e, n = null, o, i, a;
  return oa(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Qr(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = D_.exec(e)) ? (o = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: Pe(n[Rr]) * o,
    h: Pe(n[St]) * o,
    m: Pe(n[vr]) * o,
    s: Pe(n[qr]) * o,
    ms: Pe(Bl(n[Fn] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (n = A_.exec(e)) ? (o = n[1] === "-" ? -1 : 1, r = {
    y: _n(n[2], o),
    M: _n(n[3], o),
    w: _n(n[4], o),
    d: _n(n[5], o),
    h: _n(n[6], o),
    m: _n(n[7], o),
    s: _n(n[8], o)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (a = j_(
    Je(r.from),
    Je(r.to)
  ), r = {}, r.ms = a.milliseconds, r.M = a.months), i = new Xa(r), oa(e) && ze(e, "_locale") && (i._locale = e._locale), oa(e) && ze(e, "_isValid") && (i._isValid = e._isValid), i;
}
Cr.fn = Xa.prototype;
Cr.invalid = x_;
function _n(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Bd(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function j_(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Qc(t, e), e.isBefore(t) ? r = Bd(e, t) : (r = Bd(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Tg(e, t) {
  return function(r, n) {
    var o, i;
    return n !== null && !isNaN(+n) && (ag(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = r, r = n, n = i), o = Cr(r, n), Ig(this, o, e), this;
  };
}
function Ig(e, t, r, n) {
  var o = t._milliseconds, i = Bl(t._days), a = Bl(t._months);
  e.isValid() && (n = n ?? !0, a && vg(e, ya(e, "Month") + a * r), i && cg(e, "Date", ya(e, "Date") + i * r), o && e._d.setTime(e._d.valueOf() + o * r), n && te.updateOffset(e, i || a));
}
var k_ = Tg(1, "add"), L_ = Tg(-1, "subtract");
function Fg(e) {
  return typeof e == "string" || e instanceof String;
}
function z_(e) {
  return xr(e) || gi(e) || Fg(e) || Qr(e) || W_(e) || V_(e) || e === null || e === void 0;
}
function V_(e) {
  var t = Ln(e) && !Ac(e), r = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], o, i, a = n.length;
  for (o = 0; o < a; o += 1)
    i = n[o], r = r || ze(e, i);
  return t && r;
}
function W_(e) {
  var t = wr(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !Qr(n) && Fg(e);
  }).length === 0), t && r;
}
function B_(e) {
  var t = Ln(e) && !Ac(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], o, i;
  for (o = 0; o < n.length; o += 1)
    i = n[o], r = r || ze(e, i);
  return t && r;
}
function H_(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Y_(e, t) {
  arguments.length === 1 && (arguments[0] ? z_(arguments[0]) ? (e = arguments[0], t = void 0) : B_(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || Je(), n = Qc(r, this).startOf("day"), o = te.calendarFormat(this, n) || "sameElse", i = t && (Dr(t[o]) ? t[o].call(this, r) : t[o]);
  return this.format(
    i || this.localeData().calendar(o, this, Je(r))
  );
}
function G_() {
  return new vi(this);
}
function U_(e, t) {
  var r = xr(e) ? e : Je(e);
  return this.isValid() && r.isValid() ? (t = ur(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function q_(e, t) {
  var r = xr(e) ? e : Je(e);
  return this.isValid() && r.isValid() ? (t = ur(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function X_(e, t, r, n) {
  var o = xr(e) ? e : Je(e), i = xr(t) ? t : Je(t);
  return this.isValid() && o.isValid() && i.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(o, r) : !this.isBefore(o, r)) && (n[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r))) : !1;
}
function K_(e, t) {
  var r = xr(e) ? e : Je(e), n;
  return this.isValid() && r.isValid() ? (t = ur(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function Z_(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Q_(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function J_(e, t, r) {
  var n, o, i;
  if (!this.isValid())
    return NaN;
  if (n = Qc(e, this), !n.isValid())
    return NaN;
  switch (o = (n.utcOffset() - this.utcOffset()) * 6e4, t = ur(t), t) {
    case "year":
      i = ia(this, n) / 12;
      break;
    case "month":
      i = ia(this, n);
      break;
    case "quarter":
      i = ia(this, n) / 3;
      break;
    case "second":
      i = (this - n) / 1e3;
      break;
    case "minute":
      i = (this - n) / 6e4;
      break;
    case "hour":
      i = (this - n) / 36e5;
      break;
    case "day":
      i = (this - n - o) / 864e5;
      break;
    case "week":
      i = (this - n - o) / 6048e5;
      break;
    default:
      i = this - n;
  }
  return r ? i : ar(i);
}
function ia(e, t) {
  if (e.date() < t.date())
    return -ia(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), o, i;
  return t - n < 0 ? (o = e.clone().add(r - 1, "months"), i = (t - n) / (n - o)) : (o = e.clone().add(r + 1, "months"), i = (t - n) / (o - n)), -(r + i) || 0;
}
te.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
te.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function e$() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function t$(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? na(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Dr(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", na(r, "Z")) : na(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function r$() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, o, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(r + n + o + i);
}
function n$(e) {
  e || (e = this.isUtc() ? te.defaultFormatUtc : te.defaultFormat);
  var t = na(this, e);
  return this.localeData().postformat(t);
}
function o$(e, t) {
  return this.isValid() && (xr(e) && e.isValid() || Je(e).isValid()) ? Cr({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function i$(e) {
  return this.from(Je(), e);
}
function a$(e, t) {
  return this.isValid() && (xr(e) && e.isValid() || Je(e).isValid()) ? Cr({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function s$(e) {
  return this.to(Je(), e);
}
function Dg(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = nn(e), t != null && (this._locale = t), this);
}
var Ag = cr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function jg() {
  return this._locale;
}
var wa = 1e3, po = 60 * wa, xa = 60 * po, kg = (365 * 400 + 97) * 24 * xa;
function yo(e, t) {
  return (e % t + t) % t;
}
function Lg(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - kg : new Date(e, t, r).valueOf();
}
function zg(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - kg : Date.UTC(e, t, r);
}
function l$(e) {
  var t, r;
  if (e = ur(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? zg : Lg, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= yo(
        t + (this._isUTC ? 0 : this.utcOffset() * po),
        xa
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= yo(t, po);
      break;
    case "second":
      t = this._d.valueOf(), t -= yo(t, wa);
      break;
  }
  return this._d.setTime(t), te.updateOffset(this, !0), this;
}
function c$(e) {
  var t, r;
  if (e = ur(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? zg : Lg, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += xa - yo(
        t + (this._isUTC ? 0 : this.utcOffset() * po),
        xa
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += po - yo(t, po) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += wa - yo(t, wa) - 1;
      break;
  }
  return this._d.setTime(t), te.updateOffset(this, !0), this;
}
function u$() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function d$() {
  return Math.floor(this.valueOf() / 1e3);
}
function f$() {
  return new Date(this.valueOf());
}
function h$() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function m$() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function g$() {
  return this.isValid() ? this.toISOString() : null;
}
function v$() {
  return jc(this);
}
function p$() {
  return un({}, Oe(this));
}
function y$() {
  return Oe(this).overflow;
}
function b$() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
he("N", 0, 0, "eraAbbr");
he("NN", 0, 0, "eraAbbr");
he("NNN", 0, 0, "eraAbbr");
he("NNNN", 0, 0, "eraName");
he("NNNNN", 0, 0, "eraNarrow");
he("y", ["y", 1], "yo", "eraYear");
he("y", ["yy", 2], 0, "eraYear");
he("y", ["yyy", 3], 0, "eraYear");
he("y", ["yyyy", 4], 0, "eraYear");
ae("N", Jc);
ae("NN", Jc);
ae("NNN", Jc);
ae("NNNN", P$);
ae("NNNNN", N$);
qe(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var o = r._locale.erasParse(e, n, r._strict);
    o ? Oe(r).era = o : Oe(r).invalidEra = e;
  }
);
ae("y", No);
ae("yy", No);
ae("yyy", No);
ae("yyyy", No);
ae("yo", T$);
qe(["y", "yy", "yyy", "yyyy"], Nt);
qe(["yo"], function(e, t, r, n) {
  var o;
  r._locale._eraYearOrdinalRegex && (o = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[Nt] = r._locale.eraYearOrdinalParse(e, o) : t[Nt] = parseInt(e, 10);
});
function S$(e, t) {
  var r, n, o, i = this._eras || nn("en")._eras;
  for (r = 0, n = i.length; r < n; ++r) {
    switch (typeof i[r].since) {
      case "string":
        o = te(i[r].since).startOf("day"), i[r].since = o.valueOf();
        break;
    }
    switch (typeof i[r].until) {
      case "undefined":
        i[r].until = 1 / 0;
        break;
      case "string":
        o = te(i[r].until).startOf("day").valueOf(), i[r].until = o.valueOf();
        break;
    }
  }
  return i;
}
function w$(e, t, r) {
  var n, o, i = this.eras(), a, s, l;
  for (e = e.toUpperCase(), n = 0, o = i.length; n < o; ++n)
    if (a = i[n].name.toUpperCase(), s = i[n].abbr.toUpperCase(), l = i[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (s === e)
            return i[n];
          break;
        case "NNNN":
          if (a === e)
            return i[n];
          break;
        case "NNNNN":
          if (l === e)
            return i[n];
          break;
      }
    else if ([a, s, l].indexOf(e) >= 0)
      return i[n];
}
function x$(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? te(e.since).year() : te(e.since).year() + (t - e.offset) * r;
}
function C$() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function E$() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function O$() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function _$() {
  var e, t, r, n, o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (r = o[e].since <= o[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), o[e].since <= n && n <= o[e].until || o[e].until <= n && n <= o[e].since)
      return (this.year() - te(o[e].since).year()) * r + o[e].offset;
  return this.year();
}
function $$(e) {
  return ze(this, "_erasNameRegex") || eu.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function M$(e) {
  return ze(this, "_erasAbbrRegex") || eu.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function R$(e) {
  return ze(this, "_erasNarrowRegex") || eu.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Jc(e, t) {
  return t.erasAbbrRegex(e);
}
function P$(e, t) {
  return t.erasNameRegex(e);
}
function N$(e, t) {
  return t.erasNarrowRegex(e);
}
function T$(e, t) {
  return t._eraYearOrdinalRegex || No;
}
function eu() {
  var e = [], t = [], r = [], n = [], o, i, a = this.eras();
  for (o = 0, i = a.length; o < i; ++o)
    t.push(Kt(a[o].name)), e.push(Kt(a[o].abbr)), r.push(Kt(a[o].narrow)), n.push(Kt(a[o].name)), n.push(Kt(a[o].abbr)), n.push(Kt(a[o].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
he(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
he(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ka(e, t) {
  he(0, [e, e.length], 0, t);
}
Ka("gggg", "weekYear");
Ka("ggggg", "weekYear");
Ka("GGGG", "isoWeekYear");
Ka("GGGGG", "isoWeekYear");
It("weekYear", "gg");
It("isoWeekYear", "GG");
Ft("weekYear", 1);
Ft("isoWeekYear", 1);
ae("G", Ya);
ae("g", Ya);
ae("GG", et, tr);
ae("gg", et, tr);
ae("GGGG", Bc, Wc);
ae("gggg", Bc, Wc);
ae("GGGGG", Ha, Wa);
ae("ggggg", Ha, Wa);
yi(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = Pe(e);
  }
);
yi(["gg", "GG"], function(e, t, r, n) {
  t[n] = te.parseTwoDigitYear(e);
});
function I$(e) {
  return Vg.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function F$(e) {
  return Vg.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function D$() {
  return Xr(this.year(), 1, 4);
}
function A$() {
  return Xr(this.isoWeekYear(), 1, 4);
}
function j$() {
  var e = this.localeData()._week;
  return Xr(this.year(), e.dow, e.doy);
}
function k$() {
  var e = this.localeData()._week;
  return Xr(this.weekYear(), e.dow, e.doy);
}
function Vg(e, t, r, n, o) {
  var i;
  return e == null ? ii(this, n, o).year : (i = Xr(e, n, o), t > i && (t = i), L$.call(this, e, t, r, n, o));
}
function L$(e, t, r, n, o) {
  var i = Sg(e, t, r, n, o), a = oi(i.year, 0, i.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
he("Q", 0, "Qo", "quarter");
It("quarter", "Q");
Ft("quarter", 7);
ae("Q", ug);
qe("Q", function(e, t) {
  t[Ur] = (Pe(e) - 1) * 3;
});
function z$(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
he("D", ["DD", 2], "Do", "date");
It("date", "D");
Ft("date", 9);
ae("D", et);
ae("DD", et, tr);
ae("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
qe(["D", "DD"], Rr);
qe("Do", function(e, t) {
  t[Rr] = Pe(e.match(et)[0]);
});
var Wg = Po("Date", !0);
he("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
It("dayOfYear", "DDD");
Ft("dayOfYear", 4);
ae("DDD", Ba);
ae("DDDD", dg);
qe(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = Pe(e);
});
function V$(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
he("m", ["mm", 2], 0, "minute");
It("minute", "m");
Ft("minute", 14);
ae("m", et);
ae("mm", et, tr);
qe(["m", "mm"], vr);
var W$ = Po("Minutes", !1);
he("s", ["ss", 2], 0, "second");
It("second", "s");
Ft("second", 15);
ae("s", et);
ae("ss", et, tr);
qe(["s", "ss"], qr);
var B$ = Po("Seconds", !1);
he("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
he(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
he(0, ["SSS", 3], 0, "millisecond");
he(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
he(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
he(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
he(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
he(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
he(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
It("millisecond", "ms");
Ft("millisecond", 16);
ae("S", Ba, ug);
ae("SS", Ba, tr);
ae("SSS", Ba, dg);
var dn, Bg;
for (dn = "SSSS"; dn.length <= 9; dn += "S")
  ae(dn, No);
function H$(e, t) {
  t[Fn] = Pe(("0." + e) * 1e3);
}
for (dn = "S"; dn.length <= 9; dn += "S")
  qe(dn, H$);
Bg = Po("Milliseconds", !1);
he("z", 0, 0, "zoneAbbr");
he("zz", 0, 0, "zoneName");
function Y$() {
  return this._isUTC ? "UTC" : "";
}
function G$() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var U = vi.prototype;
U.add = k_;
U.calendar = Y_;
U.clone = G_;
U.diff = J_;
U.endOf = c$;
U.format = n$;
U.from = o$;
U.fromNow = i$;
U.to = a$;
U.toNow = s$;
U.get = qE;
U.invalidAt = y$;
U.isAfter = U_;
U.isBefore = q_;
U.isBetween = X_;
U.isSame = K_;
U.isSameOrAfter = Z_;
U.isSameOrBefore = Q_;
U.isValid = v$;
U.lang = Ag;
U.locale = Dg;
U.localeData = jg;
U.max = v_;
U.min = g_;
U.parsingFlags = p$;
U.set = XE;
U.startOf = l$;
U.subtract = L_;
U.toArray = h$;
U.toObject = m$;
U.toDate = f$;
U.toISOString = t$;
U.inspect = r$;
typeof Symbol < "u" && Symbol.for != null && (U[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
U.toJSON = g$;
U.toString = e$;
U.unix = d$;
U.valueOf = u$;
U.creationData = b$;
U.eraName = C$;
U.eraNarrow = E$;
U.eraAbbr = O$;
U.eraYear = _$;
U.year = bg;
U.isLeapYear = mO;
U.weekYear = I$;
U.isoWeekYear = F$;
U.quarter = U.quarters = z$;
U.month = pg;
U.daysInMonth = dO;
U.week = U.weeks = SO;
U.isoWeek = U.isoWeeks = wO;
U.weeksInYear = j$;
U.weeksInWeekYear = k$;
U.isoWeeksInYear = D$;
U.isoWeeksInISOWeekYear = A$;
U.date = Wg;
U.day = U.days = FO;
U.weekday = DO;
U.isoWeekday = AO;
U.dayOfYear = V$;
U.hour = U.hours = BO;
U.minute = U.minutes = W$;
U.second = U.seconds = B$;
U.millisecond = U.milliseconds = Bg;
U.utcOffset = O_;
U.utc = $_;
U.local = M_;
U.parseZone = R_;
U.hasAlignedHourOffset = P_;
U.isDST = N_;
U.isLocal = I_;
U.isUtcOffset = F_;
U.isUtc = Ng;
U.isUTC = Ng;
U.zoneAbbr = Y$;
U.zoneName = G$;
U.dates = cr(
  "dates accessor is deprecated. Use date instead.",
  Wg
);
U.months = cr(
  "months accessor is deprecated. Use month instead",
  pg
);
U.years = cr(
  "years accessor is deprecated. Use year instead",
  bg
);
U.zone = cr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  __
);
U.isDSTShifted = cr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  T_
);
function U$(e) {
  return Je(e * 1e3);
}
function q$() {
  return Je.apply(null, arguments).parseZone();
}
function Hg(e) {
  return e;
}
var We = Lc.prototype;
We.calendar = FE;
We.longDateFormat = kE;
We.invalidDate = zE;
We.ordinal = BE;
We.preparse = Hg;
We.postformat = Hg;
We.relativeTime = YE;
We.pastFuture = GE;
We.set = TE;
We.eras = S$;
We.erasParse = w$;
We.erasConvertYear = x$;
We.erasAbbrRegex = M$;
We.erasNameRegex = $$;
We.erasNarrowRegex = R$;
We.months = sO;
We.monthsShort = lO;
We.monthsParse = uO;
We.monthsRegex = hO;
We.monthsShortRegex = fO;
We.week = vO;
We.firstDayOfYear = bO;
We.firstDayOfWeek = yO;
We.weekdays = RO;
We.weekdaysMin = NO;
We.weekdaysShort = PO;
We.weekdaysParse = IO;
We.weekdaysRegex = jO;
We.weekdaysShortRegex = kO;
We.weekdaysMinRegex = LO;
We.isPM = VO;
We.meridiem = HO;
function Ca(e, t, r, n) {
  var o = nn(), i = Fr().set(n, t);
  return o[r](i, e);
}
function Yg(e, t, r) {
  if (Qr(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ca(e, t, r, "month");
  var n, o = [];
  for (n = 0; n < 12; n++)
    o[n] = Ca(e, n, r, "month");
  return o;
}
function tu(e, t, r, n) {
  typeof e == "boolean" ? (Qr(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, Qr(t) && (r = t, t = void 0), t = t || "");
  var o = nn(), i = e ? o._week.dow : 0, a, s = [];
  if (r != null)
    return Ca(t, (r + i) % 7, n, "day");
  for (a = 0; a < 7; a++)
    s[a] = Ca(t, (a + i) % 7, n, "day");
  return s;
}
function X$(e, t) {
  return Yg(e, t, "months");
}
function K$(e, t) {
  return Yg(e, t, "monthsShort");
}
function Z$(e, t, r) {
  return tu(e, t, r, "weekdays");
}
function Q$(e, t, r) {
  return tu(e, t, r, "weekdaysShort");
}
function J$(e, t, r) {
  return tu(e, t, r, "weekdaysMin");
}
fn("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = Pe(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
te.lang = cr(
  "moment.lang is deprecated. Use moment.locale instead.",
  fn
);
te.langData = cr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  nn
);
var Wr = Math.abs;
function e2() {
  var e = this._data;
  return this._milliseconds = Wr(this._milliseconds), this._days = Wr(this._days), this._months = Wr(this._months), e.milliseconds = Wr(e.milliseconds), e.seconds = Wr(e.seconds), e.minutes = Wr(e.minutes), e.hours = Wr(e.hours), e.months = Wr(e.months), e.years = Wr(e.years), this;
}
function Gg(e, t, r, n) {
  var o = Cr(t, r);
  return e._milliseconds += n * o._milliseconds, e._days += n * o._days, e._months += n * o._months, e._bubble();
}
function t2(e, t) {
  return Gg(this, e, t, 1);
}
function r2(e, t) {
  return Gg(this, e, t, -1);
}
function Hd(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function n2() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, o, i, a, s, l;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Hd(Yl(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, o = ar(e / 1e3), n.seconds = o % 60, i = ar(o / 60), n.minutes = i % 60, a = ar(i / 60), n.hours = a % 24, t += ar(a / 24), l = ar(Ug(t)), r += l, t -= Hd(Yl(l)), s = ar(r / 12), r %= 12, n.days = t, n.months = r, n.years = s, this;
}
function Ug(e) {
  return e * 4800 / 146097;
}
function Yl(e) {
  return e * 146097 / 4800;
}
function o2(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = ur(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + Ug(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(Yl(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function i2() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Pe(this._months / 12) * 31536e6 : NaN;
}
function on(e) {
  return function() {
    return this.as(e);
  };
}
var a2 = on("ms"), s2 = on("s"), l2 = on("m"), c2 = on("h"), u2 = on("d"), d2 = on("w"), f2 = on("M"), h2 = on("Q"), m2 = on("y");
function g2() {
  return Cr(this);
}
function v2(e) {
  return e = ur(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Gn(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var p2 = Gn("milliseconds"), y2 = Gn("seconds"), b2 = Gn("minutes"), S2 = Gn("hours"), w2 = Gn("days"), x2 = Gn("months"), C2 = Gn("years");
function E2() {
  return ar(this.days() / 7);
}
var Hr = Math.round, mo = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function O2(e, t, r, n, o) {
  return o.relativeTime(t || 1, !!r, e, n);
}
function _2(e, t, r, n) {
  var o = Cr(e).abs(), i = Hr(o.as("s")), a = Hr(o.as("m")), s = Hr(o.as("h")), l = Hr(o.as("d")), c = Hr(o.as("M")), u = Hr(o.as("w")), d = Hr(o.as("y")), h = i <= r.ss && ["s", i] || i < r.s && ["ss", i] || a <= 1 && ["m"] || a < r.m && ["mm", a] || s <= 1 && ["h"] || s < r.h && ["hh", s] || l <= 1 && ["d"] || l < r.d && ["dd", l];
  return r.w != null && (h = h || u <= 1 && ["w"] || u < r.w && ["ww", u]), h = h || c <= 1 && ["M"] || c < r.M && ["MM", c] || d <= 1 && ["y"] || ["yy", d], h[2] = t, h[3] = +e > 0, h[4] = n, O2.apply(null, h);
}
function $2(e) {
  return e === void 0 ? Hr : typeof e == "function" ? (Hr = e, !0) : !1;
}
function M2(e, t) {
  return mo[e] === void 0 ? !1 : t === void 0 ? mo[e] : (mo[e] = t, e === "s" && (mo.ss = t - 1), !0);
}
function R2(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = mo, o, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, mo, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), o = this.localeData(), i = _2(this, !r, n, o), r && (i = o.pastFuture(+this, i)), o.postformat(i);
}
var Ys = Math.abs;
function io(e) {
  return (e > 0) - (e < 0) || +e;
}
function Za() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ys(this._milliseconds) / 1e3, t = Ys(this._days), r = Ys(this._months), n, o, i, a, s = this.asSeconds(), l, c, u, d;
  return s ? (n = ar(e / 60), o = ar(n / 60), e %= 60, n %= 60, i = ar(r / 12), r %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = s < 0 ? "-" : "", c = io(this._months) !== io(s) ? "-" : "", u = io(this._days) !== io(s) ? "-" : "", d = io(this._milliseconds) !== io(s) ? "-" : "", l + "P" + (i ? c + i + "Y" : "") + (r ? c + r + "M" : "") + (t ? u + t + "D" : "") + (o || n || e ? "T" : "") + (o ? d + o + "H" : "") + (n ? d + n + "M" : "") + (e ? d + a + "S" : "")) : "P0D";
}
var De = Xa.prototype;
De.isValid = w_;
De.abs = e2;
De.add = t2;
De.subtract = r2;
De.as = o2;
De.asMilliseconds = a2;
De.asSeconds = s2;
De.asMinutes = l2;
De.asHours = c2;
De.asDays = u2;
De.asWeeks = d2;
De.asMonths = f2;
De.asQuarters = h2;
De.asYears = m2;
De.valueOf = i2;
De._bubble = n2;
De.clone = g2;
De.get = v2;
De.milliseconds = p2;
De.seconds = y2;
De.minutes = b2;
De.hours = S2;
De.days = w2;
De.weeks = E2;
De.months = x2;
De.years = C2;
De.humanize = R2;
De.toISOString = Za;
De.toString = Za;
De.toJSON = Za;
De.locale = Dg;
De.localeData = jg;
De.toIsoString = cr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Za
);
De.lang = Ag;
he("X", 0, 0, "unix");
he("x", 0, 0, "valueOf");
ae("x", Ya);
ae("X", ZE);
qe("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
qe("x", function(e, t, r) {
  r._d = new Date(Pe(e));
});
//! moment.js
te.version = "2.29.4";
PE(Je);
te.fn = U;
te.min = p_;
te.max = y_;
te.now = b_;
te.utc = Fr;
te.unix = U$;
te.months = X$;
te.isDate = gi;
te.locale = fn;
te.invalid = za;
te.duration = Cr;
te.isMoment = xr;
te.weekdays = Z$;
te.parseZone = q$;
te.localeData = nn;
te.isDuration = oa;
te.monthsShort = K$;
te.weekdaysMin = J$;
te.defineLocale = Uc;
te.updateLocale = qO;
te.locales = XO;
te.weekdaysShort = Q$;
te.normalizeUnits = ur;
te.relativeTimeRounding = $2;
te.relativeTimeThreshold = M2;
te.calendarFormat = H_;
te.prototype = U;
te.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function qi(e) {
  const t = te().startOf("day").valueOf(), r = new Date(t - 24 * 3600 * 1e3).getTime();
  return e < t && r <= e;
}
function Yd(e) {
  const t = te().year();
  return te(e).year() === t;
}
const P2 = (e) => {
  const r = Date.now() - e;
  let n = "";
  return r <= 6e4 ? n = "刚刚" : r > 6e4 && r < 36e5 ? n = Math.floor(r / 6e4) + "分钟前" : r >= 36e5 && r < 864e5 && !qi(e) ? n = te(e).format("HH:mm") : r > 36e5 && qi(e) ? n = "昨天 " + te(e).format("HH:mm") : r > 864e5 && !qi(e) && Yd(e) ? n = te(e).format("M月D日 HH:mm") : r > 864e5 && !qi(e) && !Yd(e) && (n = te(e).format("YYYY年M月D日 HH:mm")), n;
};
function Jr(e) {
  return Array.isArray ? Array.isArray(e) : Kg(e) === "[object Array]";
}
const N2 = 1 / 0;
function T2(e) {
  if (typeof e == "string")
    return e;
  let t = e + "";
  return t == "0" && 1 / e == -N2 ? "-0" : t;
}
function I2(e) {
  return e == null ? "" : T2(e);
}
function Pr(e) {
  return typeof e == "string";
}
function qg(e) {
  return typeof e == "number";
}
function F2(e) {
  return e === !0 || e === !1 || D2(e) && Kg(e) == "[object Boolean]";
}
function Xg(e) {
  return typeof e == "object";
}
function D2(e) {
  return Xg(e) && e !== null;
}
function Zt(e) {
  return e != null;
}
function Gs(e) {
  return !e.trim().length;
}
function Kg(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const A2 = "Incorrect 'index' type", j2 = (e) => `Invalid value for key ${e}`, k2 = (e) => `Pattern length exceeds max of ${e}.`, L2 = (e) => `Missing ${e} property in key`, z2 = (e) => `Property 'weight' in key '${e}' must be a positive integer`, Gd = Object.prototype.hasOwnProperty;
class V2 {
  constructor(t) {
    this._keys = [], this._keyMap = {};
    let r = 0;
    t.forEach((n) => {
      let o = Zg(n);
      this._keys.push(o), this._keyMap[o.id] = o, r += o.weight;
    }), this._keys.forEach((n) => {
      n.weight /= r;
    });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Zg(e) {
  let t = null, r = null, n = null, o = 1, i = null;
  if (Pr(e) || Jr(e))
    n = e, t = Ud(e), r = Gl(e);
  else {
    if (!Gd.call(e, "name"))
      throw new Error(L2("name"));
    const a = e.name;
    if (n = a, Gd.call(e, "weight") && (o = e.weight, o <= 0))
      throw new Error(z2(a));
    t = Ud(a), r = Gl(a), i = e.getFn;
  }
  return { path: t, id: r, weight: o, src: n, getFn: i };
}
function Ud(e) {
  return Jr(e) ? e : e.split(".");
}
function Gl(e) {
  return Jr(e) ? e.join(".") : e;
}
function W2(e, t) {
  let r = [], n = !1;
  const o = (i, a, s) => {
    if (Zt(i))
      if (!a[s])
        r.push(i);
      else {
        let l = a[s];
        const c = i[l];
        if (!Zt(c))
          return;
        if (s === a.length - 1 && (Pr(c) || qg(c) || F2(c)))
          r.push(I2(c));
        else if (Jr(c)) {
          n = !0;
          for (let u = 0, d = c.length; u < d; u += 1)
            o(c[u], a, s + 1);
        } else
          a.length && o(c, a, s + 1);
      }
  };
  return o(e, Pr(t) ? t.split(".") : t, 0), n ? r : r[0];
}
const B2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, H2 = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, Y2 = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, G2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: W2,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Se = {
  ...H2,
  ...B2,
  ...Y2,
  ...G2
};
const U2 = /[^ ]+/g;
function q2(e = 1, t = 3) {
  const r = /* @__PURE__ */ new Map(), n = Math.pow(10, t);
  return {
    get(o) {
      const i = o.match(U2).length;
      if (r.has(i))
        return r.get(i);
      const a = 1 / Math.pow(i, 0.5 * e), s = parseFloat(Math.round(a * n) / n);
      return r.set(i, s), s;
    },
    clear() {
      r.clear();
    }
  };
}
class ru {
  constructor({
    getFn: t = Se.getFn,
    fieldNormWeight: r = Se.fieldNormWeight
  } = {}) {
    this.norm = q2(r, 3), this.getFn = t, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    this.keys = t, this._keysMap = {}, t.forEach((r, n) => {
      this._keysMap[r.id] = n;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Pr(this.docs[0]) ? this.docs.forEach((t, r) => {
      this._addString(t, r);
    }) : this.docs.forEach((t, r) => {
      this._addObject(t, r);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(t) {
    const r = this.size();
    Pr(t) ? this._addString(t, r) : this._addObject(t, r);
  }
  // Removes the doc at the specified index of the index
  removeAt(t) {
    this.records.splice(t, 1);
    for (let r = t, n = this.size(); r < n; r += 1)
      this.records[r].i -= 1;
  }
  getValueForItemAtKeyId(t, r) {
    return t[this._keysMap[r]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, r) {
    if (!Zt(t) || Gs(t))
      return;
    let n = {
      v: t,
      i: r,
      n: this.norm.get(t)
    };
    this.records.push(n);
  }
  _addObject(t, r) {
    let n = { i: r, $: {} };
    this.keys.forEach((o, i) => {
      let a = o.getFn ? o.getFn(t) : this.getFn(t, o.path);
      if (Zt(a)) {
        if (Jr(a)) {
          let s = [];
          const l = [{ nestedArrIndex: -1, value: a }];
          for (; l.length; ) {
            const { nestedArrIndex: c, value: u } = l.pop();
            if (Zt(u))
              if (Pr(u) && !Gs(u)) {
                let d = {
                  v: u,
                  i: c,
                  n: this.norm.get(u)
                };
                s.push(d);
              } else
                Jr(u) && u.forEach((d, h) => {
                  l.push({
                    nestedArrIndex: h,
                    value: d
                  });
                });
          }
          n.$[i] = s;
        } else if (Pr(a) && !Gs(a)) {
          let s = {
            v: a,
            n: this.norm.get(a)
          };
          n.$[i] = s;
        }
      }
    }), this.records.push(n);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function Qg(e, t, { getFn: r = Se.getFn, fieldNormWeight: n = Se.fieldNormWeight } = {}) {
  const o = new ru({ getFn: r, fieldNormWeight: n });
  return o.setKeys(e.map(Zg)), o.setSources(t), o.create(), o;
}
function X2(e, { getFn: t = Se.getFn, fieldNormWeight: r = Se.fieldNormWeight } = {}) {
  const { keys: n, records: o } = e, i = new ru({ getFn: t, fieldNormWeight: r });
  return i.setKeys(n), i.setIndexRecords(o), i;
}
function Xi(e, {
  errors: t = 0,
  currentLocation: r = 0,
  expectedLocation: n = 0,
  distance: o = Se.distance,
  ignoreLocation: i = Se.ignoreLocation
} = {}) {
  const a = t / e.length;
  if (i)
    return a;
  const s = Math.abs(n - r);
  return o ? a + s / o : s ? 1 : a;
}
function K2(e = [], t = Se.minMatchCharLength) {
  let r = [], n = -1, o = -1, i = 0;
  for (let a = e.length; i < a; i += 1) {
    let s = e[i];
    s && n === -1 ? n = i : !s && n !== -1 && (o = i - 1, o - n + 1 >= t && r.push([n, o]), n = -1);
  }
  return e[i - 1] && i - n >= t && r.push([n, i - 1]), r;
}
const Pn = 32;
function Z2(e, t, r, {
  location: n = Se.location,
  distance: o = Se.distance,
  threshold: i = Se.threshold,
  findAllMatches: a = Se.findAllMatches,
  minMatchCharLength: s = Se.minMatchCharLength,
  includeMatches: l = Se.includeMatches,
  ignoreLocation: c = Se.ignoreLocation
} = {}) {
  if (t.length > Pn)
    throw new Error(k2(Pn));
  const u = t.length, d = e.length, h = Math.max(0, Math.min(n, d));
  let b = i, y = h;
  const g = s > 1 || l, m = g ? Array(d) : [];
  let v;
  for (; (v = e.indexOf(t, y)) > -1; ) {
    let S = Xi(t, {
      currentLocation: v,
      expectedLocation: h,
      distance: o,
      ignoreLocation: c
    });
    if (b = Math.min(S, b), y = v + u, g) {
      let M = 0;
      for (; M < u; )
        m[v + M] = 1, M += 1;
    }
  }
  y = -1;
  let p = [], w = 1, x = u + d;
  const E = 1 << u - 1;
  for (let S = 0; S < u; S += 1) {
    let M = 0, O = x;
    for (; M < O; )
      Xi(t, {
        errors: S,
        currentLocation: h + O,
        expectedLocation: h,
        distance: o,
        ignoreLocation: c
      }) <= b ? M = O : x = O, O = Math.floor((x - M) / 2 + M);
    x = O;
    let $ = Math.max(1, h - O + 1), D = a ? d : Math.min(h + O, d) + u, P = Array(D + 2);
    P[D + 1] = (1 << S) - 1;
    for (let I = D; I >= $; I -= 1) {
      let L = I - 1, T = r[e.charAt(L)];
      if (g && (m[L] = +!!T), P[I] = (P[I + 1] << 1 | 1) & T, S && (P[I] |= (p[I + 1] | p[I]) << 1 | 1 | p[I + 1]), P[I] & E && (w = Xi(t, {
        errors: S,
        currentLocation: L,
        expectedLocation: h,
        distance: o,
        ignoreLocation: c
      }), w <= b)) {
        if (b = w, y = L, y <= h)
          break;
        $ = Math.max(1, 2 * h - y);
      }
    }
    if (Xi(t, {
      errors: S + 1,
      currentLocation: h,
      expectedLocation: h,
      distance: o,
      ignoreLocation: c
    }) > b)
      break;
    p = P;
  }
  const C = {
    isMatch: y >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, w)
  };
  if (g) {
    const S = K2(m, s);
    S.length ? l && (C.indices = S) : C.isMatch = !1;
  }
  return C;
}
function Q2(e) {
  let t = {};
  for (let r = 0, n = e.length; r < n; r += 1) {
    const o = e.charAt(r);
    t[o] = (t[o] || 0) | 1 << n - r - 1;
  }
  return t;
}
class Jg {
  constructor(t, {
    location: r = Se.location,
    threshold: n = Se.threshold,
    distance: o = Se.distance,
    includeMatches: i = Se.includeMatches,
    findAllMatches: a = Se.findAllMatches,
    minMatchCharLength: s = Se.minMatchCharLength,
    isCaseSensitive: l = Se.isCaseSensitive,
    ignoreLocation: c = Se.ignoreLocation
  } = {}) {
    if (this.options = {
      location: r,
      threshold: n,
      distance: o,
      includeMatches: i,
      findAllMatches: a,
      minMatchCharLength: s,
      isCaseSensitive: l,
      ignoreLocation: c
    }, this.pattern = l ? t : t.toLowerCase(), this.chunks = [], !this.pattern.length)
      return;
    const u = (h, b) => {
      this.chunks.push({
        pattern: h,
        alphabet: Q2(h),
        startIndex: b
      });
    }, d = this.pattern.length;
    if (d > Pn) {
      let h = 0;
      const b = d % Pn, y = d - b;
      for (; h < y; )
        u(this.pattern.substr(h, Pn), h), h += Pn;
      if (b) {
        const g = d - Pn;
        u(this.pattern.substr(g), g);
      }
    } else
      u(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: r, includeMatches: n } = this.options;
    if (r || (t = t.toLowerCase()), this.pattern === t) {
      let y = {
        isMatch: !0,
        score: 0
      };
      return n && (y.indices = [[0, t.length - 1]]), y;
    }
    const {
      location: o,
      distance: i,
      threshold: a,
      findAllMatches: s,
      minMatchCharLength: l,
      ignoreLocation: c
    } = this.options;
    let u = [], d = 0, h = !1;
    this.chunks.forEach(({ pattern: y, alphabet: g, startIndex: m }) => {
      const { isMatch: v, score: p, indices: w } = Z2(t, y, g, {
        location: o + m,
        distance: i,
        threshold: a,
        findAllMatches: s,
        minMatchCharLength: l,
        includeMatches: n,
        ignoreLocation: c
      });
      v && (h = !0), d += p, v && w && (u = [...u, ...w]);
    });
    let b = {
      isMatch: h,
      score: h ? d / this.chunks.length : 1
    };
    return h && n && (b.indices = u), b;
  }
}
class pn {
  constructor(t) {
    this.pattern = t;
  }
  static isMultiMatch(t) {
    return qd(t, this.multiRegex);
  }
  static isSingleMatch(t) {
    return qd(t, this.singleRegex);
  }
  search() {
  }
}
function qd(e, t) {
  const r = e.match(t);
  return r ? r[1] : null;
}
class J2 extends pn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(t) {
    const r = t === this.pattern;
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class eM extends pn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(t) {
    const n = t.indexOf(this.pattern) === -1;
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, t.length - 1]
    };
  }
}
class tM extends pn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(t) {
    const r = t.startsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class rM extends pn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(t) {
    const r = !t.startsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, t.length - 1]
    };
  }
}
class nM extends pn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(t) {
    const r = t.endsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [t.length - this.pattern.length, t.length - 1]
    };
  }
}
class oM extends pn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(t) {
    const r = !t.endsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, t.length - 1]
    };
  }
}
class ev extends pn {
  constructor(t, {
    location: r = Se.location,
    threshold: n = Se.threshold,
    distance: o = Se.distance,
    includeMatches: i = Se.includeMatches,
    findAllMatches: a = Se.findAllMatches,
    minMatchCharLength: s = Se.minMatchCharLength,
    isCaseSensitive: l = Se.isCaseSensitive,
    ignoreLocation: c = Se.ignoreLocation
  } = {}) {
    super(t), this._bitapSearch = new Jg(t, {
      location: r,
      threshold: n,
      distance: o,
      includeMatches: i,
      findAllMatches: a,
      minMatchCharLength: s,
      isCaseSensitive: l,
      ignoreLocation: c
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(t) {
    return this._bitapSearch.searchIn(t);
  }
}
class tv extends pn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(t) {
    let r = 0, n;
    const o = [], i = this.pattern.length;
    for (; (n = t.indexOf(this.pattern, r)) > -1; )
      r = n + i, o.push([n, r - 1]);
    const a = !!o.length;
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: o
    };
  }
}
const Ul = [
  J2,
  tv,
  tM,
  rM,
  oM,
  nM,
  eM,
  ev
], Xd = Ul.length, iM = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, aM = "|";
function sM(e, t = {}) {
  return e.split(aM).map((r) => {
    let n = r.trim().split(iM).filter((i) => i && !!i.trim()), o = [];
    for (let i = 0, a = n.length; i < a; i += 1) {
      const s = n[i];
      let l = !1, c = -1;
      for (; !l && ++c < Xd; ) {
        const u = Ul[c];
        let d = u.isMultiMatch(s);
        d && (o.push(new u(d, t)), l = !0);
      }
      if (!l)
        for (c = -1; ++c < Xd; ) {
          const u = Ul[c];
          let d = u.isSingleMatch(s);
          if (d) {
            o.push(new u(d, t));
            break;
          }
        }
    }
    return o;
  });
}
const lM = /* @__PURE__ */ new Set([ev.type, tv.type]);
class cM {
  constructor(t, {
    isCaseSensitive: r = Se.isCaseSensitive,
    includeMatches: n = Se.includeMatches,
    minMatchCharLength: o = Se.minMatchCharLength,
    ignoreLocation: i = Se.ignoreLocation,
    findAllMatches: a = Se.findAllMatches,
    location: s = Se.location,
    threshold: l = Se.threshold,
    distance: c = Se.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: r,
      includeMatches: n,
      minMatchCharLength: o,
      findAllMatches: a,
      ignoreLocation: i,
      location: s,
      threshold: l,
      distance: c
    }, this.pattern = r ? t : t.toLowerCase(), this.query = sM(this.pattern, this.options);
  }
  static condition(t, r) {
    return r.useExtendedSearch;
  }
  searchIn(t) {
    const r = this.query;
    if (!r)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: n, isCaseSensitive: o } = this.options;
    t = o ? t : t.toLowerCase();
    let i = 0, a = [], s = 0;
    for (let l = 0, c = r.length; l < c; l += 1) {
      const u = r[l];
      a.length = 0, i = 0;
      for (let d = 0, h = u.length; d < h; d += 1) {
        const b = u[d], { isMatch: y, indices: g, score: m } = b.search(t);
        if (y) {
          if (i += 1, s += m, n) {
            const v = b.constructor.type;
            lM.has(v) ? a = [...a, ...g] : a.push(g);
          }
        } else {
          s = 0, i = 0, a.length = 0;
          break;
        }
      }
      if (i) {
        let d = {
          isMatch: !0,
          score: s / i
        };
        return n && (d.indices = a), d;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const ql = [];
function uM(...e) {
  ql.push(...e);
}
function Xl(e, t) {
  for (let r = 0, n = ql.length; r < n; r += 1) {
    let o = ql[r];
    if (o.condition(e, t))
      return new o(e, t);
  }
  return new Jg(e, t);
}
const Ea = {
  AND: "$and",
  OR: "$or"
}, Kl = {
  PATH: "$path",
  PATTERN: "$val"
}, Zl = (e) => !!(e[Ea.AND] || e[Ea.OR]), dM = (e) => !!e[Kl.PATH], fM = (e) => !Jr(e) && Xg(e) && !Zl(e), Kd = (e) => ({
  [Ea.AND]: Object.keys(e).map((t) => ({
    [t]: e[t]
  }))
});
function rv(e, t, { auto: r = !0 } = {}) {
  const n = (o) => {
    let i = Object.keys(o);
    const a = dM(o);
    if (!a && i.length > 1 && !Zl(o))
      return n(Kd(o));
    if (fM(o)) {
      const l = a ? o[Kl.PATH] : i[0], c = a ? o[Kl.PATTERN] : o[l];
      if (!Pr(c))
        throw new Error(j2(l));
      const u = {
        keyId: Gl(l),
        pattern: c
      };
      return r && (u.searcher = Xl(c, t)), u;
    }
    let s = {
      children: [],
      operator: i[0]
    };
    return i.forEach((l) => {
      const c = o[l];
      Jr(c) && c.forEach((u) => {
        s.children.push(n(u));
      });
    }), s;
  };
  return Zl(e) || (e = Kd(e)), n(e);
}
function hM(e, { ignoreFieldNorm: t = Se.ignoreFieldNorm }) {
  e.forEach((r) => {
    let n = 1;
    r.matches.forEach(({ key: o, norm: i, score: a }) => {
      const s = o ? o.weight : null;
      n *= Math.pow(
        a === 0 && s ? Number.EPSILON : a,
        (s || 1) * (t ? 1 : i)
      );
    }), r.score = n;
  });
}
function mM(e, t) {
  const r = e.matches;
  t.matches = [], Zt(r) && r.forEach((n) => {
    if (!Zt(n.indices) || !n.indices.length)
      return;
    const { indices: o, value: i } = n;
    let a = {
      indices: o,
      value: i
    };
    n.key && (a.key = n.key.src), n.idx > -1 && (a.refIndex = n.idx), t.matches.push(a);
  });
}
function gM(e, t) {
  t.score = e.score;
}
function vM(e, t, {
  includeMatches: r = Se.includeMatches,
  includeScore: n = Se.includeScore
} = {}) {
  const o = [];
  return r && o.push(mM), n && o.push(gM), e.map((i) => {
    const { idx: a } = i, s = {
      item: t[a],
      refIndex: a
    };
    return o.length && o.forEach((l) => {
      l(i, s);
    }), s;
  });
}
class To {
  constructor(t, r = {}, n) {
    this.options = { ...Se, ...r }, this.options.useExtendedSearch, this._keyStore = new V2(this.options.keys), this.setCollection(t, n);
  }
  setCollection(t, r) {
    if (this._docs = t, r && !(r instanceof ru))
      throw new Error(A2);
    this._myIndex = r || Qg(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(t) {
    Zt(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => !1) {
    const r = [];
    for (let n = 0, o = this._docs.length; n < o; n += 1) {
      const i = this._docs[n];
      t(i, n) && (this.removeAt(n), n -= 1, o -= 1, r.push(i));
    }
    return r;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: r = -1 } = {}) {
    const {
      includeMatches: n,
      includeScore: o,
      shouldSort: i,
      sortFn: a,
      ignoreFieldNorm: s
    } = this.options;
    let l = Pr(t) ? Pr(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t);
    return hM(l, { ignoreFieldNorm: s }), i && l.sort(a), qg(r) && r > -1 && (l = l.slice(0, r)), vM(l, this._docs, {
      includeMatches: n,
      includeScore: o
    });
  }
  _searchStringList(t) {
    const r = Xl(t, this.options), { records: n } = this._myIndex, o = [];
    return n.forEach(({ v: i, i: a, n: s }) => {
      if (!Zt(i))
        return;
      const { isMatch: l, score: c, indices: u } = r.searchIn(i);
      l && o.push({
        item: i,
        idx: a,
        matches: [{ score: c, value: i, norm: s, indices: u }]
      });
    }), o;
  }
  _searchLogical(t) {
    const r = rv(t, this.options), n = (s, l, c) => {
      if (!s.children) {
        const { keyId: d, searcher: h } = s, b = this._findMatches({
          key: this._keyStore.get(d),
          value: this._myIndex.getValueForItemAtKeyId(l, d),
          searcher: h
        });
        return b && b.length ? [
          {
            idx: c,
            item: l,
            matches: b
          }
        ] : [];
      }
      const u = [];
      for (let d = 0, h = s.children.length; d < h; d += 1) {
        const b = s.children[d], y = n(b, l, c);
        if (y.length)
          u.push(...y);
        else if (s.operator === Ea.AND)
          return [];
      }
      return u;
    }, o = this._myIndex.records, i = {}, a = [];
    return o.forEach(({ $: s, i: l }) => {
      if (Zt(s)) {
        let c = n(r, s, l);
        c.length && (i[l] || (i[l] = { idx: l, item: s, matches: [] }, a.push(i[l])), c.forEach(({ matches: u }) => {
          i[l].matches.push(...u);
        }));
      }
    }), a;
  }
  _searchObjectList(t) {
    const r = Xl(t, this.options), { keys: n, records: o } = this._myIndex, i = [];
    return o.forEach(({ $: a, i: s }) => {
      if (!Zt(a))
        return;
      let l = [];
      n.forEach((c, u) => {
        l.push(
          ...this._findMatches({
            key: c,
            value: a[u],
            searcher: r
          })
        );
      }), l.length && i.push({
        idx: s,
        item: a,
        matches: l
      });
    }), i;
  }
  _findMatches({ key: t, value: r, searcher: n }) {
    if (!Zt(r))
      return [];
    let o = [];
    if (Jr(r))
      r.forEach(({ v: i, i: a, n: s }) => {
        if (!Zt(i))
          return;
        const { isMatch: l, score: c, indices: u } = n.searchIn(i);
        l && o.push({
          score: c,
          key: t,
          value: i,
          idx: a,
          norm: s,
          indices: u
        });
      });
    else {
      const { v: i, n: a } = r, { isMatch: s, score: l, indices: c } = n.searchIn(i);
      s && o.push({ score: l, key: t, value: i, norm: a, indices: c });
    }
    return o;
  }
}
To.version = "7.0.0";
To.createIndex = Qg;
To.parseIndex = X2;
To.config = Se;
To.parseQuery = rv;
uM(cM);
const pM = {
  includeScore: !0,
  keys: ["question"]
};
let Ql;
const yM = "亲爱的用户，我不太懂您的意思。";
let Vo;
const bM = Y.memo((e) => {
  const { onClose: t, width: r, title: n, dialogues: o, greet: i, failTips: a, historyMessages: s, onReply: l, getMessages: c, theme: u, robotAvatar: d, userAvatar: h } = e;
  let b = [];
  const [y, g] = pr([]), [m, v] = pr([]), [p, w] = pr(!1);
  yt(() => {
    const O = [];
    for (let D = 0; D < o.length; D++) {
      const P = o[D];
      P.isDefault && O.push(P.question);
    }
    let $ = [];
    s && s.length > 0 && ($ = [...s]), i && $.push({
      createdAt: Date.now(),
      role: "assistant",
      content: i,
      type: "content"
    }), O.length > 0 && (b = O, $.push({
      createdAt: Date.now(),
      role: "assistant",
      list: O,
      type: "list"
    }), v(O)), g($);
  }, []), yt(() => ((Vo || Vo === 0) && clearInterval(Vo), y.length > 0 && (Vo = setInterval(() => {
    g((O) => [
      ...O
    ]);
  }, 3e5)), () => clearInterval(Vo)), [y]);
  const x = (O) => {
    const $ = {
      createdAt: Date.now(),
      role: "assistant",
      content: "",
      type: "content"
    };
    if (Ql) {
      const D = Ql.search(O), P = [];
      let F;
      const I = [];
      for (let L = 0; L < D.length; L++) {
        const T = D[L] && D[L].item;
        T && ($.content ? F === D[L].score ? I.push(T.question) : P.push(T.question) : (F = D[L].score, $.content = T.reply, I.push(T.question)));
      }
      I.length > 1 && ($.type = "list", $.list = I), P.length > 0 ? v(P) : b.length > 0 ? v(b) : v([]);
    }
    return $.content || ($.content = a || yM), l && typeof l == "function" && l($), $;
  }, E = async (O) => {
    if (p)
      return;
    w(!0);
    const $ = {
      createdAt: Date.now(),
      role: "user",
      content: O,
      type: "content"
    };
    g((P) => [
      ...P,
      $
    ]);
    const D = x(O);
    g((P) => [
      ...P,
      D
    ]), w(!1);
  };
  yt(() => {
    const O = document.getElementById("main");
    O && (O.scrollTop = 999999), c && typeof c == "function" && c(y);
  }, [y]);
  const C = Ze(null), [S] = Yi.useForm(), M = (O) => {
    if (p)
      return;
    w(!0);
    const $ = O && O.content && O.content.trim();
    E($), C.current && C.current.setFieldsValue({
      content: ""
    });
  };
  return /* @__PURE__ */ Fe.jsxs("div", { className: "flex flex-column h", children: [
    /* @__PURE__ */ Fe.jsxs("header", { className: `center relative ptmd pbmd header-${u}`, children: [
      /* @__PURE__ */ Fe.jsx("div", { className: "fs6 bold", children: n || "机器人客服为您服务" }),
      /* @__PURE__ */ Fe.jsx(pE, { style: { fontSize: 26 }, className: "icon-close pointer", onClick: t })
    ] }),
    /* @__PURE__ */ Fe.jsx("main", { id: "main", className: "box plsm prsm pbsm overflow-y-auto", children: y.map((O, $) => {
      var D;
      if (O) {
        const P = O.role === "user", F = !y[$ - 1] || O.createdAt - y[$ - 1].createdAt > 3e5;
        return /* @__PURE__ */ Fe.jsxs("div", { children: [
          F && /* @__PURE__ */ Fe.jsx("div", { className: "mtmd center", children: /* @__PURE__ */ Fe.jsx("div", { className: "chatTime inline centered fs2", children: P2(O.createdAt) }) }),
          /* @__PURE__ */ Fe.jsxs("div", { style: { marginTop: "15px" }, children: [
            /* @__PURE__ */ Fe.jsx("div", { className: `faceWrap ${P ? "fright" : "fleft"}`, children: P ? h ? /* @__PURE__ */ Fe.jsx("img", { src: h, className: "face" }) : /* @__PURE__ */ Fe.jsx(RE, { className: "face-icon" }) : d ? /* @__PURE__ */ Fe.jsx("img", { src: d, className: "face" }) : /* @__PURE__ */ Fe.jsx(CE, { className: "face-icon" }) }),
            /* @__PURE__ */ Fe.jsx("div", { className: `${P ? "fright mrxs bgcprimary c1" : "fleft mlxs bgc1"} bubble`, children: O.type === "list" ? /* @__PURE__ */ Fe.jsxs(av, { children: [
              /* @__PURE__ */ Fe.jsx("div", { className: "bold fs4", children: "猜您想问" }),
              (D = O.list) == null ? void 0 : D.map((I, L) => /* @__PURE__ */ Fe.jsxs(
                "div",
                {
                  className: `${L === 0 ? "" : "bdt"} ptxs pbxs pointer`,
                  onClick: () => {
                    E(I);
                  },
                  children: [
                    L + 1,
                    ". ",
                    I
                  ]
                },
                I
              ))
            ] }) : P || O.content ? O.content : /* @__PURE__ */ Fe.jsx(pc, {}) }),
            /* @__PURE__ */ Fe.jsx("div", { className: "clearfix" })
          ] })
        ] }, $);
      }
      return "";
    }) }),
    /* @__PURE__ */ Fe.jsxs("footer", { children: [
      m && m.length > 0 && /* @__PURE__ */ Fe.jsx("div", { className: "overflow-x-auto flex w pbsm ptsm plxs prxs box", children: m.map((O) => /* @__PURE__ */ Fe.jsx(
        "span",
        {
          className: "footTip pointer",
          onClick: () => {
            E(O);
          },
          children: O
        },
        O
      )) }),
      /* @__PURE__ */ Fe.jsx(
        Yi,
        {
          name: "basic",
          form: S,
          ref: (O) => {
            C && (C.current = O);
          },
          initialValues: { content: "" },
          onFinish: M,
          className: "pblg",
          children: /* @__PURE__ */ Fe.jsxs(dC, { children: [
            /* @__PURE__ */ Fe.jsx(
              Yi.Item,
              {
                name: "content",
                style: { marginBottom: 0, paddingLeft: "10px" },
                rules: [{ required: !0, message: "" }],
                children: /* @__PURE__ */ Fe.jsx(
                  aC,
                  {
                    className: "input",
                    style: { width: `${r - 50}px` },
                    placeholder: "请输入您想咨询的问题"
                  }
                )
              }
            ),
            /* @__PURE__ */ Fe.jsx(Yi.Item, { style: { marginBottom: 0 }, children: /* @__PURE__ */ Fe.jsx(
              _E,
              {
                className: `${u === "green" ? "cinfo" : "cprimary"} icon-send`,
                style: { fontSize: 26, color: p ? "#aaa" : "" },
                onClick: () => {
                  S.submit();
                }
              }
            ) })
          ] })
        }
      )
    ] })
  ] });
}), xM = (e) => {
  const { dialogues: t, theme: r } = e, [n, o] = pr(!1), i = () => {
    const u = window.innerWidth || 1200;
    return {
      width: u,
      height: window.innerHeight,
      isMobile: u < 769
    };
  }, [a, s] = pr(i()), l = () => {
    s({
      ...a,
      ...i()
    });
  };
  yt(() => (window.addEventListener("resize", l), () => {
    window.removeEventListener("resize", l);
  }), []), yt(() => {
    Ql = new To(t, pM);
  }, []);
  const c = Qd(() => {
    o((u) => !u);
  }, []);
  return /* @__PURE__ */ Fe.jsxs("div", { id: "chatbotroot", className: `inline chatbotroot-${r || ""}`, children: [
    /* @__PURE__ */ Fe.jsx(
      Yn,
      {
        shape: "circle",
        type: "primary",
        style: {
          right: 50,
          bottom: 50
        },
        icon: /* @__PURE__ */ Fe.jsx(SE, {}),
        onClick: c
      }
    ),
    n && /* @__PURE__ */ Fe.jsx("div", { className: `dialog-container dialog-container-${a.isMobile ? "m" : "w"}`, children: /* @__PURE__ */ Fe.jsx(bM, { ...e, ...a, onClose: c, width: a.isMobile ? a.width : 350 }) })
  ] });
};
export {
  xM as Chatbot
};
