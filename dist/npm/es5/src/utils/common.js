"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.deepCopy = deepCopy;
Object.defineProperty(exports, "cookies", {
  enumerable: true,
  get: function get() {
    return _jsCookie.default;
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function get() {
    return _lodash.default;
  }
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function get() {
    return _lodash2.default;
  }
});
exports.generatorId = exports.storage = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _lodash2 = _interopRequireDefault(require("lodash.throttle"));

var _lodash3 = _interopRequireDefault(require("lodash.uniqueid"));

var _helper = require("./helper");

/**
 * 本地存储
*/
var storage = {
  storage: window.localStorage,
  session: {
    storage: window.sessionStorage
  }
};
exports.storage = storage;
var storageApi = {
  set: function set(key, value) {
    if (!key || !value) return;
    var _val = value;

    if ((0, _typeof2.default)(value) === 'object') {
      try {
        _val = JSON.stringify(value);
      } catch (error) {
        /* eslint-disable no-console */
        console.error(error);
        return;
      }
    }

    this.storage.setItem(key, _val);
  },
  get: function get(key) {
    if (!key) return;
    var value = this.storage.getItem(key);

    try {
      value = JSON.parse(value);
    } catch (error) {
      /* eslint-disable no-console */
      console.error(error);
    } // eslint-disable-next-line consistent-return


    return value;
  },
  remove: function remove(key) {
    if (!key) return;
    this.storage.removeItem(key);
  },
  clear: function clear() {
    this.storage.clear();
  }
};
storage.__proto__ = storageApi;
storage.session.__proto__ = storageApi;
/**
 * deepCopy
 * 对象/数组深拷贝
 */

function deepCopy(source) {
  if (!(0, _helper.isObject)(source)) return source;
  var target = Array.isArray(source) ? [] : {}; // eslint-disable-next-line no-restricted-syntax

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if ((0, _helper.isObject)(source[key])) {
        target[key] = deepCopy(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  return target;
}

function hasClass(el, className) {
  var reg = new RegExp("(^|\\s)".concat(className, "(\\s|$)"));
  return reg.test(el.className);
}

function addClass(el, className) {
  if (!el) {
    return;
  }

  if (hasClass(el, className)) {
    return;
  }

  var newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' '); // eslint-disable-line
}
/**
 * 生成唯一id
 */


var generatorId = function generatorId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'nodeinfo_id';
  return (0, _lodash3.default)(prefix);
};

exports.generatorId = generatorId;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(storage, "storage", "/Users/qiu/biosan/BiosanUi/src/utils/common.js");

  __REACT_HOT_LOADER__.register(storageApi, "storageApi", "/Users/qiu/biosan/BiosanUi/src/utils/common.js");

  __REACT_HOT_LOADER__.register(deepCopy, "deepCopy", "/Users/qiu/biosan/BiosanUi/src/utils/common.js");

  __REACT_HOT_LOADER__.register(hasClass, "hasClass", "/Users/qiu/biosan/BiosanUi/src/utils/common.js");

  __REACT_HOT_LOADER__.register(addClass, "addClass", "/Users/qiu/biosan/BiosanUi/src/utils/common.js");

  __REACT_HOT_LOADER__.register(generatorId, "generatorId", "/Users/qiu/biosan/BiosanUi/src/utils/common.js");
}();

;