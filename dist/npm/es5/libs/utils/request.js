"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

/*
 * @Author: 行一
 * @Date: 2019-07-18 14:01:19
 * @LastEditors: 行一
 * @LastEditTime: 2019-09-12 15:46:29
 */
function request(_ref) {
  var url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data;

  function formateData(data) {
    var formdata = new FormData();

    for (var key in data) {
      if (data.hasOwnProperty(key)) formdata.append(key, data[key]);
    }

    return formdata;
  }

  return new Promise(function (resolve, reject) {
    var xhr;
    var postdata = formateData(data);

    try {
      xhr = new XMLHttpRequest();
    } catch (e) {
      xhr = window.ActiveXobject('Msxml12.XMLHTTP');
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        return xhr.status === 200 ? resolve(true) : reject(false);
      }
    };

    xhr.onerror = function (error) {
      reject(error);
    };

    xhr.open('post', url, true);
    xhr.send(postdata);
  });
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(request, "request", "/Users/qiu/biosan/BiosanUi/libs/utils/request.js");
}();

;