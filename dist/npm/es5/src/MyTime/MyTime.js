"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _moment = _interopRequireDefault(require("moment"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("moment/locale/zh-cn");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

_moment.default.locale('zh-cn');

var MyTime =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MyTime, _React$PureComponent);

  function MyTime(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyTime);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyTime).call(this, props));
    _this.state = {
      mineTime: ''
    };

    _this.refershTime = function () {
      var _this2;

      return (_this2 = _this).__refershTime__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.interval = null;
    return _this;
  }

  (0, _createClass2.default)(MyTime, [{
    key: "__refershTime__REACT_HOT_LOADER__",
    value: function __refershTime__REACT_HOT_LOADER__() {
      return this.__refershTime__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__refershTime__REACT_HOT_LOADER__",
    value: function __refershTime__REACT_HOT_LOADER__() {
      var format = this.props.format;
      var time = (0, _moment.default)().format(format || MyTime.defaultProps.format);
      this.setState({
        mineTime: time
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.interval = setInterval(function () {
        return _this3.refershTime();
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var mineTime = this.state.mineTime;
      var styles = this.props.styles;
      var defaltStyle = MyTime.defaultProps.styles;
      return _react.default.createElement("span", {
        style: _objectSpread({}, defaltStyle, {}, styles)
      }, mineTime);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }]);
  return MyTime;
}(_react.default.PureComponent);

MyTime.propTypes = {
  format: _propTypes.default.string,
  styles: _propTypes.default.object
};
MyTime.defaultProps = {
  format: 'YYYY-MM-DD',
  styles: {
    color: '#000',
    textSize: '16px'
  }
};
var _default = MyTime;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MyTime, "MyTime", "/Users/qiu/biosan/BiosanUi/src/MyTime/MyTime.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/MyTime/MyTime.js");
}();

;