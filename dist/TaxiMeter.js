"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// Keyframes for animations
var pulse = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n  100% { transform: scale(1); }\n"])));

// Styled components for UI
var MeterContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #2c3e50, #34495e);\n  color: white;\n  padding: 20px;\n  border-radius: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n  width: 300px;\n  margin: 20px auto;\n  animation: ", " 2s infinite;\n"])), pulse);
var Display = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin: 10px 0;\n  color: #f1c40f;\n"])));
var Label = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  color: #bdc3c7;\n  text-transform: uppercase;\n"])));
var Button = _styledComponents["default"].button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background: #e74c3c;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1rem;\n  margin-top: 10px;\n  transition: background 0.3s ease;\n\n  &:hover {\n    background: #c0392b;\n  }\n"])));
var TaxiMeter = function TaxiMeter(_ref) {
  var _ref$permeter = _ref.permeter,
    permeter = _ref$permeter === void 0 ? 1000 : _ref$permeter,
    meterofdistance = _ref.meterofdistance;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    distance = _useState2[0],
    setDistance = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isRunning = _useState4[0],
    setIsRunning = _useState4[1];
  var intervalRef = (0, _react.useRef)(null);

  // Calculate fare based on distance and per-meter rate
  var fare = (distance * permeter).toLocaleString();

  // Start the meter
  var startMeter = function startMeter() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(function () {
        setDistance(function (prevDistance) {
          if (prevDistance >= meterofdistance) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return meterofdistance;
          }
          return prevDistance + 1;
        });
      }, 1000); // Update every second
    }
  };

  // Reset the meter
  var resetMeter = function resetMeter() {
    clearInterval(intervalRef.current);
    setDistance(0);
    setIsRunning(false);
  };

  // Cleanup interval on unmount
  (0, _react.useEffect)(function () {
    return function () {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(MeterContainer, null, /*#__PURE__*/_react["default"].createElement(Label, null, "Whole Distance "), /*#__PURE__*/_react["default"].createElement(Display, null, meterofdistance, "m"), /*#__PURE__*/_react["default"].createElement(Label, null, "Distance Traveled"), /*#__PURE__*/_react["default"].createElement(Display, null, distance, "m"), /*#__PURE__*/_react["default"].createElement(Label, null, "Total Fare"), /*#__PURE__*/_react["default"].createElement(Display, {
    dir: "rtl"
  }, fare, " \u062A\u0648\u0645\u0627\u0646"), !isRunning ? /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: startMeter,
    disabled: distance >= meterofdistance
  }, distance === 0 ? "Start Meter" : "Resume") : /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: resetMeter
  }, "Reset"));
};
var _default = exports["default"] = TaxiMeter;