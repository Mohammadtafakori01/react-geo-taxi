"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SearchAndLocation = function SearchAndLocation(_ref) {
  var searchQuery = _ref.searchQuery,
    setSearchQuery = _ref.setSearchQuery,
    handleSearch = _ref.handleSearch,
    handleGetLocation = _ref.handleGetLocation,
    isLocating = _ref.isLocating;
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
    placeholder: "Search location",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    },
    style: {
      flex: "1 1 200px",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd"
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSearch,
    style: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "8px",
      minWidth: "100px"
    }
  }, "Search"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleGetLocation,
    disabled: isLocating,
    style: {
      padding: "10px 20px",
      backgroundColor: "#4285F4",
      color: "white",
      border: "none",
      borderRadius: "8px",
      minWidth: "140px"
    }
  }, isLocating ? "Locating..." : "📍 Current Location"));
};
var _default = exports["default"] = SearchAndLocation;