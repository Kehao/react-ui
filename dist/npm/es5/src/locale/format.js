"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */
var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
 * format
 *
 * @param {String} string
 * @param {Array} ...args
 * @return {String}
 */

var _default = function _default(string) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var temp = args;

  if (args.length === 1 && (0, _typeof2.default)(args[0]) === 'object') {
    temp = args[0];
  }

  if (!args || !args.hasOwnProperty) {
    temp = {};
  }

  return string.replace(RE_NARGS, function (match, prefix, i, index) {
    var result = '';

    if (string[index - 1] === '{' && string[index + match.length] === '}') {
      return i;
    }

    result = Object.prototype.hasOwnProperty.call(temp, i) ? temp[i] : null;

    if (result === null || result === undefined) {
      return '';
    }

    return result;
  });
};

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RE_NARGS, "RE_NARGS", "/Users/qiu/biosan/BiosanUi/src/locale/format.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/locale/format.js");
}();

;