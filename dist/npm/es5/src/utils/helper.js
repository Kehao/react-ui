"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformHttpBody = transformHttpBody;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _qs = _interopRequireDefault(require("qs"));

/*
 * @Author: 行一
 * @Date: 2019-08-29 13:37:39
 * @LastEditors: 行一
 * @LastEditTime: 2019-08-29 13:37:39
 */

/* eslint-disable no-console */
var error = console.error;
/**
 * request contentType
 * 转换httpbody
 */

function transformHttpBody(contentType) {
  var _contentType = contentType.toUpperCase();

  switch (_contentType) {
    case 'JSON':
      return {
        type: 'application/json; charset=UTF-8',
        transform: function transform(params) {
          try {
            return JSON.stringify(params);
          } catch (_error) {
            error(_error);
            return {};
          }
        }
      };
    // case 'QUERYSTRING':
    //   return {
    //     type: 'application/x-www-form-urlencoded; charset=UTF-8',
    //     transform(params) {
    //       try {
    //         return qs.stringify(params, { arrayFormat: 'brackets' });
    //       } catch (_error) {
    //         error(_error);
    //         return '';
    //       }
    //     },
    //   };

    case 'FORMDATA':
      return {
        type: 'multipart/form-data',
        transform: function transform(params) {
          var isFormdata = Object.prototype.toString.call(params) === '[object FormData]';
          if (isFormdata) return params;
          return Object.keys(params).reduce(function (formdata, b) {
            formdata.append(b, params[b]);
            return formdata;
          }, new FormData());
        }
      };

    case 'QUERYSTRING':
    default:
      return {
        type: 'application/x-www-form-urlencoded; charset=UTF-8',
        transform: function transform(params) {
          try {
            return _qs.default.stringify(params, {
              arrayFormat: 'brackets'
            });
          } catch (_error) {
            error(_error);
            return '';
          }
        }
      };
  }
}

function isObject(obj) {
  return (0, _typeof2.default)(obj) === 'object' && obj != null;
}
/**
 * 用于判断obj是否为纯粹的对象（所谓”纯粹的对象”，就是该对象是通过”{}”或”new Object”创建的。）
 * @param {object} obj
 */


function isPlainObject(obj) {
  var getProto = Object.getPrototypeOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);

  if (!obj || toString.call(obj) !== '[object Object]') {
    return false;
  }

  var proto = getProto(obj);

  if (!proto) {
    return true;
  }

  var Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString;
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(error, "error", "/Users/qiu/biosan/BiosanUi/src/utils/helper.js");

  __REACT_HOT_LOADER__.register(transformHttpBody, "transformHttpBody", "/Users/qiu/biosan/BiosanUi/src/utils/helper.js");

  __REACT_HOT_LOADER__.register(isObject, "isObject", "/Users/qiu/biosan/BiosanUi/src/utils/helper.js");

  __REACT_HOT_LOADER__.register(isPlainObject, "isPlainObject", "/Users/qiu/biosan/BiosanUi/src/utils/helper.js");
}();

;