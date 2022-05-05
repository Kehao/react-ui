import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

var MyTime =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MyTime, _React$PureComponent);

  function MyTime(props) {
    var _this;

    _classCallCheck(this, MyTime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyTime).call(this, props));
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

  _createClass(MyTime, [{
    key: "__refershTime__REACT_HOT_LOADER__",
    value: function __refershTime__REACT_HOT_LOADER__() {
      return this.__refershTime__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__refershTime__REACT_HOT_LOADER__",
    value: function __refershTime__REACT_HOT_LOADER__() {
      var format = this.props.format;
      var time = moment().format(format || MyTime.defaultProps.format);
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
      return React.createElement("span", {
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
}(React.PureComponent);

MyTime.propTypes = {
  format: PropTypes.string,
  styles: PropTypes.object
};
MyTime.defaultProps = {
  format: 'YYYY-MM-DD',
  styles: {
    color: '#000',
    textSize: '16px'
  }
};
var _default = MyTime;
export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MyTime, "MyTime", "/Users/qiu/biosan/BiosanUi/src/MyTime/MyTime.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/MyTime/MyTime.js");
}();

;