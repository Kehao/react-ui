"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _default = function _default(min, max) {
  return (0, _utils.createPropType)(function (props, propName, componentName) {
    var value = props[propName];

    if (value < min || value > max) {
      return new Error("Invalid prop ".concat(propName, " of ").concat(componentName, ", should between ").concat(min, " and ").concat(max, "."));
    }
  });
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/libs/props/range.js");
}();

;