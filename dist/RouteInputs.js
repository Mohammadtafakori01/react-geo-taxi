"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var RouteInputs = function RouteInputs(_ref) {
  var origin = _ref.origin,
    target = _ref.target,
    setSelecting = _ref.setSelecting,
    setOrigin = _ref.setOrigin,
    setTarget = _ref.setTarget,
    vectorSource = _ref.vectorSource;
  var clearRoute = function clearRoute() {
    setOrigin(null);
    setTarget(null);
    setSelecting("origin");
    vectorSource.current.clear();
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: "10px",
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      padding: "8px"
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Tap to set start",
    value: origin ? "".concat(origin[0].toFixed(5), ", ").concat(origin[1].toFixed(5)) : "",
    onClick: function onClick() {
      return setSelecting("origin");
    },
    readOnly: true,
    style: {
      flex: "1 1 200px",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      cursor: "pointer"
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Tap to set destination",
    value: target ? "".concat(target[0].toFixed(5), ", ").concat(target[1].toFixed(5)) : "",
    onClick: function onClick() {
      return setSelecting("target");
    },
    readOnly: true,
    style: {
      flex: "1 1 200px",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      cursor: "pointer"
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: clearRoute,
    style: {
      padding: "10px 20px",
      backgroundColor: "#ff4444",
      color: "white",
      border: "none",
      borderRadius: "8px",
      minWidth: "120px"
    }
  }, "Clear Route"));
};
var _default = exports["default"] = RouteInputs;