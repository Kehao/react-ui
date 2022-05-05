import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import domToImage from 'dom-to-image';
import './index.less';
import { debounce } from '../utils/common';

var MyComPicture =
/*#__PURE__*/
function (_Component) {
  _inherits(MyComPicture, _Component);

  function MyComPicture(props) {
    var _this;

    _classCallCheck(this, MyComPicture);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyComPicture).call(this, props));

    _this.downloadPicture = function () {
      var _this2;

      return (_this2 = _this).__downloadPicture__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.downloadPicture = debounce(_this.downloadPicture, 800); // 防抖

    MyComPicture.downloadPicture = _this.downloadPicture.bind(_assertThisInitialized(_this)); // 抛出方法最重要的一步！！

    return _this;
  }

  _createClass(MyComPicture, [{
    key: "__downloadPicture__REACT_HOT_LOADER__",
    value: function __downloadPicture__REACT_HOT_LOADER__() {
      return this.__downloadPicture__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__downloadPicture__REACT_HOT_LOADER__",
    value: function __downloadPicture__REACT_HOT_LOADER__() {
      var pictureName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '图片.png';
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var pictureName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '图片.png';
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var filter = function filter(nodeObj) {
        return nodeObj.tagName !== 'i';
      };

      var result = document.getElementById('resultCanvas');
      var showCanvas = document.getElementById('showCanvas'); // 转svg下载

      domToImage.toSvg(result, {
        filter: filter
      }).then(function (dataUrl) {
        var image = new Image();
        image.crossOrigin = 'Anonymous';
        image.src = dataUrl; // 给图片对象写入base64编码的svg流

        image.setAttribute('id', 'codeCanvas');
        showCanvas.style.display = 'none'; // 原模块处理

        result.appendChild(image); // 等待image dom生成

        setTimeout(function () {
          var node = document.getElementById('codeCanvas');
          var nodeWidth = node.offsetWidth;
          var nodeHeight = node.offsetHeight; // 生成画布

          var canvas = document.createElement('canvas');
          canvas.width = nodeWidth * scale;
          canvas.height = nodeHeight * scale;
          var context = canvas.getContext('2d');
          context.drawImage(image, 0, 0, nodeWidth, nodeHeight, 0, 0, nodeWidth * scale, nodeHeight * scale);
          canvas.getContext('2d').scale(scale, scale); // 模拟a标签下载

          var a = document.createElement('a');
          a.href = canvas.toDataURL('image/png');
          a.download = pictureName;
          a.click(); // 回收销毁

          a.remove();
          node.remove();
          showCanvas.style.display = 'block';
        }, 10);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          args = _objectWithoutProperties(_this$props, ["content"]);

      return React.createElement("div", null, React.createElement("div", _extends({
        id: "resultCanvas",
        className: "resultCanvas"
      }, args), React.createElement("div", {
        id: "showCanvas",
        className: "showCanvas"
      }, content())));
    }
  }]);

  return MyComPicture;
}(Component);

MyComPicture.propTypes = {
  content: PropTypes.func
};
export { MyComPicture as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MyComPicture, "MyComPicture", "/Users/qiu/biosan/BiosanUi/src/MyComPicture/MyComPicture.js");
}();

;