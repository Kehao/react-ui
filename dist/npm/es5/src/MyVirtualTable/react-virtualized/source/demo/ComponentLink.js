"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentLink;

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ComponentLink = _interopRequireDefault(require("./ComponentLink.css"));

function ComponentLink(_ref) {
  var children = _ref.children,
      to = _ref.to;
  return React.createElement("li", {
    className: _ComponentLink.default.NavListItem
  }, React.createElement(_reactRouterDom.NavLink, {
    activeClassName: _ComponentLink.default.ActiveComponentLink,
    className: _ComponentLink.default.ComponentLink,
    to: to
  }, children));
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ComponentLink, "ComponentLink", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/ComponentLink.js");
}();

;