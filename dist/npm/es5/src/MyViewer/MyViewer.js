"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _viewerjs = _interopRequireDefault(require("viewerjs"));

require("viewerjs/dist/viewer.min.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var noop = function noop() {};

var MyViewer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MyViewer, _Component);

  function MyViewer(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyViewer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyViewer).call(this, props));

    _this.renderImgs = function () {
      var _this2;

      return (_this2 = _this).__renderImgs__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.container = null;
    _this.viewer = null;
    return _this;
  }

  (0, _createClass2.default)(MyViewer, [{
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
      this.viewer = new _viewerjs.default(this.container, _objectSpread({}, options)); // eslint-disable-next-line func-names

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
        return _react.default.createElement("img", {
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
          others = (0, _objectWithoutProperties2.default)(_this$props2, ["fileList"]);
      return _react.default.createElement("div", (0, _extends2.default)({
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
}(_react.Component);

exports.default = MyViewer;
MyViewer.propTypes = {
  options: _propTypes.default.object,
  visible: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  fileList: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array])
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(noop, "noop", "/Users/qiu/biosan/BiosanUi/src/MyViewer/MyViewer.js");

  __REACT_HOT_LOADER__.register(MyViewer, "MyViewer", "/Users/qiu/biosan/BiosanUi/src/MyViewer/MyViewer.js");
}();

;