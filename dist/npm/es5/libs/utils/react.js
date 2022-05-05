"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstChild = firstChild;

var _react = _interopRequireDefault(require("react"));

function firstChild(props) {
  var childrenArray = _react.default.Children.toArray(props.children);

  return childrenArray[0] || null;
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(firstChild, "firstChild", "/Users/qiu/biosan/BiosanUi/libs/utils/react.js");
}();

;