"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _domToImage = _interopRequireDefault(require("dom-to-image"));

require("./index.less");

var _common = require("../utils/common");

var MyComPicture =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MyComPicture, _Component);

  function MyComPicture(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyComPicture);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyComPicture).call(this, props));

    _this.downloadPicture = function () {
      var _this2;

      return (_this2 = _this).__downloadPicture__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.downloadPicture = (0, _common.debounce)(_this.downloadPicture, 800); // 防抖

    MyComPicture.downloadPicture = _this.downloadPicture.bind((0, _assertThisInitialized2.default)(_this)); // 抛出方法最重要的一步！！

    return _this;
  }

  (0, _createClass2.default)(MyComPicture, [{
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

      _domToImage.default.toSvg(result, {
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
          args = (0, _objectWithoutProperties2.default)(_this$props, ["content"]);
      return _react.default.createElement("div", null, _react.default.createElement("div", (0, _extends2.default)({
        id: "resultCanvas",
        className: "resultCanvas"
      }, args), _react.default.createElement("div", {
        id: "showCanvas",
        className: "showCanvas"
      }, content())));
    }
  }]);
  return MyComPicture;
}(_react.Component);

exports.default = MyComPicture;
MyComPicture.propTypes = {
  content: _propTypes.default.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MyComPicture, "MyComPicture", "/Users/qiu/biosan/BiosanUi/src/MyComPicture/MyComPicture.js");
}();

;