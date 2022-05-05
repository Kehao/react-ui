import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import axios from 'axios';
import { transformHttpBody } from '../helper';
/* eslint-disable no-console */

var log = console.log;

var isSucc = function isSucc(resp) {
  return resp.code === 0;
};

var _fetch = function _fetch(options) {
  var data = options.data,
      url = options.url,
      _options$timeout = options.timeout,
      timeout = _options$timeout === void 0 ? 5000 : _options$timeout,
      _options$contentType = options.contentType,
      contentType = _options$contentType === void 0 ? 'queryString' : _options$contentType,
      _options$withCredenti = options.withCredentials,
      withCredentials = _options$withCredenti === void 0 ? false : _options$withCredenti;
  var method = (options.method || 'get').toLowerCase();
  var params = method === 'get' ? options.data : {};
  log('request body==>', data);

  var _transformHttpBody = transformHttpBody(contentType),
      type = _transformHttpBody.type,
      transform = _transformHttpBody.transform;

  var instance = axios.create({
    timeout: timeout,
    headers: {
      'Content-Type': type
    },
    withCredentials: withCredentials
  });
  return instance({
    url: url,
    data: data,
    method: method,
    params: params,
    transformRequest: [transform]
  });
};

export default function request(options) {
  var opts = _objectSpread({}, options);

  var success = opts.success;
  var error = opts.error;
  opts.params = _objectSpread({}, opts.params);
  opts.data = _objectSpread({}, opts.params);
  delete opts.success;
  delete opts.error;
  isSucc = request.isSucc || isSucc;
  return _fetch(opts).then(function (response) {
    var resp = response.data;
    log("response success: ".concat(opts.url));
    log(resp);

    if (isSucc(resp)) {
      typeof success === 'function' && success(resp);
    } else {
      typeof error === 'function' && error(resp.message || resp.msg);
    }

    return Promise.resolve(resp);
  }).catch(function (_error) {
    log("response fail: ".concat(opts.url));
    log(_error);
    var msg = _error.message || '网络错误';
    return Promise.reject(new Error(msg));
  });
}
request.axios = axios;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(log, "log", "/Users/qiu/biosan/BiosanUi/src/utils/request/index.js");

  __REACT_HOT_LOADER__.register(isSucc, "isSucc", "/Users/qiu/biosan/BiosanUi/src/utils/request/index.js");

  __REACT_HOT_LOADER__.register(_fetch, "_fetch", "/Users/qiu/biosan/BiosanUi/src/utils/request/index.js");

  __REACT_HOT_LOADER__.register(request, "request", "/Users/qiu/biosan/BiosanUi/src/utils/request/index.js");
}();

;