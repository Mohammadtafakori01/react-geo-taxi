"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("ol/ol.css");
var _Map = _interopRequireDefault(require("ol/Map"));
var _View = _interopRequireDefault(require("ol/View"));
var _Tile = _interopRequireDefault(require("ol/layer/Tile"));
var _OSM = _interopRequireDefault(require("ol/source/OSM"));
var _Vector = _interopRequireDefault(require("ol/layer/Vector"));
var _Vector2 = _interopRequireDefault(require("ol/source/Vector"));
var _Feature = _interopRequireDefault(require("ol/Feature"));
var _geom = require("ol/geom");
var _proj = require("ol/proj");
var _style = require("ol/style");
var _SearchAndLocation = _interopRequireDefault(require("./SearchAndLocation"));
var _RouteInputs = _interopRequireDefault(require("./RouteInputs"));
var _TaxiMeter = _interopRequireDefault(require("./TaxiMeter"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MapWrapper = function MapWrapper() {
  var mapRef = (0, _react.useRef)(null);
  var vectorSource = (0, _react.useRef)(new _Vector2["default"]());
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    origin = _useState2[0],
    setOrigin = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    target = _useState4[0],
    setTarget = _useState4[1];
  var _useState5 = (0, _react.useState)("origin"),
    _useState6 = _slicedToArray(_useState5, 2),
    selecting = _useState6[0],
    setSelecting = _useState6[1];
  var selectingRef = (0, _react.useRef)(selecting);
  (0, _react.useEffect)(function () {
    selectingRef.current = selecting;
  }, [selecting]);
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    searchQuery = _useState8[0],
    setSearchQuery = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    map = _useState10[0],
    setMap = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    distance = _useState12[0],
    setDistance = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    currentLocation = _useState14[0],
    setCurrentLocation = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isLocating = _useState16[0],
    setIsLocating = _useState16[1];
  var _useState17 = (0, _react.useState)((0, _proj.fromLonLat)([51.389, 35.6892])),
    _useState18 = _slicedToArray(_useState17, 2),
    coordinate = _useState18[0],
    setCoordinate = _useState18[1];
  var handleGetLocation = function handleGetLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(function (pos) {
      setCurrentLocation([pos.coords.longitude, pos.coords.latitude]);
      setIsLocating(false);
    }, function (err) {
      alert("Error getting location: " + err.message);
      setIsLocating(false);
    }, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    });
  };
  (0, _react.useEffect)(function () {
    if (currentLocation && map) {
      vectorSource.current.getFeatures().filter(function (f) {
        return f.get("type") === "current";
      }).forEach(function (f) {
        return vectorSource.current.removeFeature(f);
      });
      var marker = new _Feature["default"]({
        type: "current",
        geometry: new _geom.Point((0, _proj.fromLonLat)(currentLocation))
      });
      marker.setStyle(new _style.Style({
        image: new _style.Circle({
          radius: 8,
          fill: new _style.Fill({
            color: "#4285F4"
          }),
          stroke: new _style.Stroke({
            color: "#fff",
            width: 2
          })
        })
      }));
      vectorSource.current.addFeature(marker);
      map.getView().animate({
        center: (0, _proj.fromLonLat)(currentLocation),
        zoom: 16,
        duration: 500
      });
    }
  }, [currentLocation, map]);
  (0, _react.useEffect)(function () {
    var mapInstance = new _Map["default"]({
      target: mapRef.current,
      layers: [new _Tile["default"]({
        source: new _OSM["default"]()
      }), new _Vector["default"]({
        source: vectorSource.current
      })],
      view: new _View["default"]({
        center: coordinate,
        zoom: 13
      })
    });
    mapInstance.on("click", function (evt) {
      var lonLat = (0, _proj.toLonLat)(evt.coordinate);
      if (selectingRef.current === "origin") {
        setOrigin(lonLat);
        setSelecting("target");
      } else if (selectingRef.current === "target") {
        setTarget(lonLat);
        setSelecting(null);
      }
    });
    setMap(mapInstance);
    return function () {
      return mapInstance.setTarget(null);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (origin && target) {
      var start = "".concat(origin[0].toFixed(6), ",").concat(origin[1].toFixed(6));
      var end = "".concat(target[0].toFixed(6), ",").concat(target[1].toFixed(6));
      fetch("https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62489995d5e5960e4f1e8d9959039de493d5&start=".concat(start, "&end=").concat(end)).then(function (res) {
        if (!res.ok) throw new Error("HTTP error! Status: ".concat(res.status));
        return res.json();
      }).then(function (data) {
        var coords = data.features[0].geometry.coordinates.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            lo = _ref2[0],
            la = _ref2[1];
          return (0, _proj.fromLonLat)([lo, la]);
        });
        var route = new _Feature["default"](new _geom.LineString(coords));
        route.setStyle(new _style.Style({
          stroke: new _style.Stroke({
            color: "blue",
            width: 4
          })
        }));
        vectorSource.current.addFeature(route);
        setDistance(data.features[0].properties.summary.distance);
        map.getView().fit(route.getGeometry().getExtent(), {
          padding: [50, 50, 50, 50],
          duration: 500
        });
      })["catch"](function (e) {
        return console.error("Route error:", e.message);
      });
    }
  }, [origin, target, map]);
  (0, _react.useEffect)(function () {
    vectorSource.current.clear();
    if (origin) {
      var of = new _Feature["default"](new _geom.Point((0, _proj.fromLonLat)(origin)));
      of.setStyle(new _style.Style({
        image: new _style.Circle({
          radius: 6,
          fill: new _style.Fill({
            color: "green"
          })
        })
      }));
      vectorSource.current.addFeature(of);
    }
    if (target) {
      var tf = new _Feature["default"](new _geom.Point((0, _proj.fromLonLat)(target)));
      tf.setStyle(new _style.Style({
        image: new _style.Circle({
          radius: 6,
          fill: new _style.Fill({
            color: "red"
          })
        })
      }));
      vectorSource.current.addFeature(tf);
    }
  }, [origin, target]);
  var handleSearch = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var r, d, c;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://nominatim.openstreetmap.org/search?format=json&q=".concat(encodeURIComponent(searchQuery)));
          case 3:
            r = _context.sent;
            _context.next = 6;
            return r.json();
          case 6:
            d = _context.sent;
            if (d.length > 0) {
              c = (0, _proj.fromLonLat)([parseFloat(d[0].lon), parseFloat(d[0].lat)]);
              setCoordinate(c);
              map.getView().animate({
                center: c,
                zoom: 15,
                duration: 500
              });
            } else {
              alert("Location not found");
            }
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error("Search error:", _context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function handleSearch() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: "100%",
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react["default"].createElement(_SearchAndLocation["default"], {
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    handleSearch: handleSearch,
    handleGetLocation: handleGetLocation,
    isLocating: isLocating
  }), /*#__PURE__*/_react["default"].createElement(_RouteInputs["default"], {
    origin: origin,
    target: target,
    setSelecting: setSelecting,
    setOrigin: setOrigin,
    setTarget: setTarget,
    vectorSource: vectorSource
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: mapRef,
    style: {
      width: "100%",
      height: "50vh",
      minHeight: "400px",
      touchAction: "none",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: "16px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_TaxiMeter["default"], {
    meterofdistance: parseInt(distance),
    permeter: 8,
    key: distance
  })));
};
var _default = exports["default"] = MapWrapper;