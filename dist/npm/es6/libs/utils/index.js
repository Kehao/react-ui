/*
 * @Author: 行一
 * @Date: 2019-06-07 09:39:35
 * @LastEditors: 行一
 * @LastEditTime: 2019-06-07 09:39:35
 */
import { requireCondition } from './assert';
import * as Errors from './errors';
import * as ReactUtils from './react';
export { default as DateUtils } from './date';
export { IDGenerator } from './IDGenerator';
export { requireCondition, ReactUtils, Errors };
export function watchPropertyChange(target, property, cb) {
  requireCondition(target != null && typeof property === 'string' && typeof cb === 'function', 'invalid arguments');
  var cache = null;
  if (!target) return;

  if (!target.__watch_cache) {
    target.__watch_cache = {};
  }

  cache = target.__watch_cache;
  requireCondition(cache[property] == null, "duplicated watch on ".concat(target, " 's ").concat(property));
  cache[property] = cb;
  var origin = target[property];
  Object.defineProperty(target, property, {
    configurable: true,
    get: function get() {
      return origin;
    },
    set: function set(value) {
      origin = value;

      if (cache[property]) {
        cache[property](origin);
      }
    }
  });
  return function () {
    if (target.__watch_cache && target.__watch_cache[property]) {
      delete target.__watch_cache[property];
      delete target[property];
      target[property] = origin;
    }
  };
}
export function createPropType(validate) {
  // Chainable isRequired
  function checkType(isRequired, props, propName, componentName) {
    var _componentName = componentName || '<<anonymous>>';

    if (props[propName] == null) {
      if (isRequired) {
        return new Error("Required `".concat(propName, "` was not specified in ") + "`".concat(_componentName, "`."));
      }

      return null;
    }

    return validate(props, propName, _componentName);
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // take from :  http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/

export function hashCode(str) {
  if (str == null || str.length === 0) return 0;
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }

  return hash;
}
export function pick(obj, keys) {
  requireCondition(obj != null && Array.isArray(keys));
  var r = {};
  keys.forEach(function (e) {
    return r[e] = obj[e];
  });
  return r;
}
export function range(start, stop, step) {
  var tempStart = start;
  var tempStop = stop;
  var tempStep = step;

  if (tempStop == null) {
    tempStop = tempStart || 0;
    tempStart = 0;
  }

  if (!tempStep) {
    tempStep = tempStop < tempStart ? -1 : 1;
  }

  var length = Math.max(Math.ceil((tempStop - tempStart) / tempStep), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, tempStart += tempStep) {
    range[idx] = tempStart;
  }

  return range;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(watchPropertyChange, "watchPropertyChange", "/Users/qiu/biosan/BiosanUi/libs/utils/index.js");

  __REACT_HOT_LOADER__.register(createPropType, "createPropType", "/Users/qiu/biosan/BiosanUi/libs/utils/index.js");

  __REACT_HOT_LOADER__.register(hashCode, "hashCode", "/Users/qiu/biosan/BiosanUi/libs/utils/index.js");

  __REACT_HOT_LOADER__.register(pick, "pick", "/Users/qiu/biosan/BiosanUi/libs/utils/index.js");

  __REACT_HOT_LOADER__.register(range, "range", "/Users/qiu/biosan/BiosanUi/libs/utils/index.js");
}();

;