import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.min.css';

var noop = function noop() {};

var MyViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(MyViewer, _Component);

  function MyViewer(props) {
    var _this;

    _classCallCheck(this, MyViewer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyViewer).call(this, props));

    _this.renderImgs = function () {
      var _this2;

      return (_this2 = _this).__renderImgs__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.container = null;
    _this.viewer = null;
    return _this;
  }

  _createClass(MyViewer, [{
    key: "__renderImgs__REACT_HOT_LOADER__",
    value: function __renderImgs__REACT_HOT_LOADER__() {
      return this.__renderImgs__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.viewerInit();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.viewer) return;
      this.viewerInit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.viewer) this.viewer.destroy();
    }
  }, {
    key: "viewerInit",
    value: function viewerInit() {
      if (this.viewer) this.viewer.destroy();
      var _this$props = this.props,
          _this$props$options = _this$props.options,
          options = _this$props$options === void 0 ? {} : _this$props$options,
          visible = _this$props.visible,
          _this$props$onClose = _this$props.onClose,
          onClose = _this$props$onClose === void 0 ? noop : _this$props$onClose;
      var isInline = typeof options.inline === 'undefined' ? true : options.inline;
      this.viewer = new Viewer(this.container, _objectSpread({}, options)); // eslint-disable-next-line func-names

      this.viewer.hide = function () {
        !isInline && onClose();
        (options.hide || noop)();
      };

      if (isInline) this.viewer.show();
      if (!isInline && visible) this.viewer.show();
    }
  }, {
    key: "__renderImgs__REACT_HOT_LOADER__",
    value: function __renderImgs__REACT_HOT_LOADER__(imgs) {
      var imgList;

      if (typeof imgs === 'string') {
        imgList = [imgs];
      } else if (Array.isArray(imgs)) {
        imgList = imgs;
      } else {
        throw Error('参数filtList必须是字符串或者字符串数组！');
      }

      return imgList.map(function (file) {
        return React.createElement("img", {
          src: file,
          key: file,
          alt: ""
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          fileList = _this$props2.fileList,
          others = _objectWithoutProperties(_this$props2, ["fileList"]);

      return React.createElement("div", _extends({
        ref: function ref(container) {
          _this3.container = container;
        }
      }, others, {
        style: {
          display: 'none'
        }
      }), this.renderImgs(fileList));
    }
  }]);

  return MyViewer;
}(Component);

MyViewer.propTypes = {
  options: PropTypes.object,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  fileList: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};
export { MyViewer as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(noop, "noop", "/Users/qiu/biosan/BiosanUi/src/MyViewer/MyViewer.js");

  __REACT_HOT_LOADER__.register(MyViewer, "MyViewer", "/Users/qiu/biosan/BiosanUi/src/MyViewer/MyViewer.js");
}();

;