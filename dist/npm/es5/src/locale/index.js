"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _format = _interopRequireDefault(require("./format"));

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var _lang = _zhCN.default;

function use(lang) {
  _lang = lang;
}

function t(path, options) {
  var array = path.split('.');
  var current = _lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    var value = current[property];
    if (i === j - 1) return (0, _format.default)(value, options);
    if (!value) return '';
    current = value;
  }

  return '';
}

var _default = {
  use: use,
  t: t
};
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_lang, "_lang", "/Users/qiu/biosan/BiosanUi/src/locale/index.js");

  __REACT_HOT_LOADER__.register(use, "use", "/Users/qiu/biosan/BiosanUi/src/locale/index.js");

  __REACT_HOT_LOADER__.register(t, "t", "/Users/qiu/biosan/BiosanUi/src/locale/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/locale/index.js");
}();

;