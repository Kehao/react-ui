"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _common = require("../utils/common");

var _request = _interopRequireDefault(require("../utils/request"));

var Option = _select.default.Option;

var RemoteSelect =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RemoteSelect, _React$Component);

  function RemoteSelect(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RemoteSelect);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RemoteSelect).call(this, props));
    _this.state = {
      data: [],
      value: [],
      fetching: false
    };

    _this.search = function () {
      var _this2;

      return (_this2 = _this).__search__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.handleChange = function () {
      var _this3;

      return (_this3 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this.lastFetchId = 0;
    _this.search = (0, _common.debounce)(_this.search, 800);
    return _this;
  }

  (0, _createClass2.default)(RemoteSelect, [{
    key: "__handleChange__REACT_HOT_LOADER__",
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__search__REACT_HOT_LOADER__",
    value: function __search__REACT_HOT_LOADER__() {
      return this.__search__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__search__REACT_HOT_LOADER__",
    value: function __search__REACT_HOT_LOADER__(value) {
      var _this4 = this;

      var _this$props = this.props,
          optionsConfig = _this$props.optionsConfig,
          requestConfig = _this$props.requestConfig;
      this.setState({
        data: [],
        fetching: true
      });
      requestConfig.params = Object.assign(requestConfig.params || {}, {
        searchKey: value
      });
      (0, _request.default)(requestConfig).then(function (resp) {
        if (!resp || !Array.isArray(resp.data)) {
          _this4.setState({
            fetching: false
          });

          return;
        }

        var data = resp.data.map(function (item) {
          return {
            text: item[optionsConfig.label],
            value: item[optionsConfig.value]
          };
        });

        _this4.setState({
          data: data,
          fetching: false
        });
      }).catch(function () {
        _this4.setState({
          fetching: false
        });
      });
    }
  }, {
    key: "__handleChange__REACT_HOT_LOADER__",
    value: function __handleChange__REACT_HOT_LOADER__(value) {
      this.setState({
        value: value,
        data: [],
        fetching: false
      });
      this.props.onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          fetching = _this$state.fetching,
          data = _this$state.data;
      var _this$props2 = this.props,
          optionsConfig = _this$props2.optionsConfig,
          requestConfig = _this$props2.requestConfig,
          onChange = _this$props2.onChange,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, ["optionsConfig", "requestConfig", "onChange"]);
      return _react.default.createElement(_select.default, (0, _extends2.default)({
        mode: "multiple",
        labelInValue: true,
        value: this.state.value,
        notFoundContent: fetching ? _react.default.createElement(_spin.default, {
          size: "small"
        }) : null,
        filterOption: false,
        onSearch: this.search,
        onChange: this.handleChange,
        style: {
          width: '100%'
        }
      }, rest), data.map(function (item) {
        return _react.default.createElement(Option, {
          key: item.value,
          value: item.value
        }, item.text);
      }));
    }
  }]);
  return RemoteSelect;
}(_react.default.Component);

exports.default = RemoteSelect;
RemoteSelect.propTypes = {
  requestConfig: _propTypes.default.object,
  optionsConfig: _propTypes.default.object,
  onChange: _propTypes.default.func
};
RemoteSelect.defaultProps = {
  optionsConfig: {
    label: 'balel',
    value: 'value'
  },
  placeholder: '请输入关键字',

  /**
   * value值变化回调
   */
  onChange: function onChange(val) {
    return val;
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Option, "Option", "/Users/qiu/biosan/BiosanUi/src/MySelect/remoteSelect.js");

  __REACT_HOT_LOADER__.register(RemoteSelect, "RemoteSelect", "/Users/qiu/biosan/BiosanUi/src/MySelect/remoteSelect.js");
}();

;