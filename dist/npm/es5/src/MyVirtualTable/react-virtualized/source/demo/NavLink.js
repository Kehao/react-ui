"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavLink;

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Icon = _interopRequireDefault(require("./Icon"));

var _NavLink = _interopRequireDefault(require("./NavLink.css"));

function NavLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      iconType = _ref.iconType,
      to = _ref.to;
  var link;
  var icon;

  if (iconType) {
    icon = React.createElement(_Icon.default, {
      className: _NavLink.default.Icon,
      type: iconType
    });
  }

  if (to) {
    link = React.createElement(_reactRouterDom.NavLink, {
      activeClassName: _NavLink.default.ActiveNavLink,
      className: _NavLink.default.NavLink,
      to: to
    }, icon, " ", children);
  } else {
    link = React.createElement("a", {
      className: _NavLink.default.NavLink,
      href: href
    }, icon, " ", children);
  }

  return React.createElement("li", {
    className: _NavLink.default.NavListItem
  }, link);
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NavLink, "NavLink", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/NavLink.js");
}();

;