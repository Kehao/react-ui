import "antd/lib/spin/style";
import _Spin from "antd/lib/spin";
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './style/index.less';
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
    return inner ? React.createElement("div", {
      className: 'bs-inner-loading-container'
    }, React.createElement(_Spin, {
      size: size || 'small',
      className: 'bs-loading'
    })) : createPortal(React.createElement("div", {
      className: 'bs-loading-container'
    }, React.createElement(_Spin, {
      tip: tip,
      size: size || 'large',
      className: 'bs-loading'
    })), document.querySelector('body'));
  }

  return null;
};

MyLoading.propTypes = {
  tip: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  inner: PropTypes.bool
};
var _default = MyLoading;
export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MyLoading, "MyLoading", "/Users/qiu/biosan/BiosanUi/src/MyLoading/MyLoading.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/MyLoading/MyLoading.js");
}();

;