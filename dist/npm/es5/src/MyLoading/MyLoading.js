"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style/index.less");

/**
 * MyLoading 组件
 * @param {string} tip - loading的文本描述
 * @param {string} size - size控制Spin的大小
 * @param {boolean} loading - loading控制是否展示
 * @param {boolean} inner - inner控制是否局部挂载
 * @author: zhangsiyi@biosan.cn
 */
var MyLoading = function MyLoading(_ref) {
  var _ref$tip = _ref.tip,
      tip = _ref$tip === void 0 ? '' : _ref$tip,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '' : _ref$size,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$inner = _ref.inner,
      inner = _ref$inner === void 0 ? false : _ref$inner;

  if (loading) {
    return inner ? _react.default.createElement("div", {
      className: 'bs-inner-loading-container'
    }, _react.default.createElement(_spin.default, {
      size: size || 'small',
      className: 'bs-loading'
    })) : (0, _reactDom.createPortal)(_react.default.createElement("div", {
      className: 'bs-loading-container'
    }, _react.default.createElement(_spin.default, {
      tip: tip,
      size: size || 'large',
      className: 'bs-loading'
    })), document.querySelector('body'));
  }

  return null;
};

MyLoading.propTypes = {
  tip: _propTypes.default.string,
  size: _propTypes.default.string,
  loading: _propTypes.default.bool,
  inner: _propTypes.default.bool
};
var _default = MyLoading;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MyLoading, "MyLoading", "/Users/qiu/biosan/BiosanUi/src/MyLoading/MyLoading.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/MyLoading/MyLoading.js");
}();

;