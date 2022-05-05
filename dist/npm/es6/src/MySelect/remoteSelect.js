import _extends from "@babel/runtime/helpers/extends";
import "antd/lib/spin/style";
import _Spin from "antd/lib/spin";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import "antd/lib/select/style";
import _Select from "antd/lib/select";
import PropTypes from 'prop-types';
import React from 'react';
import { debounce } from '../utils/common';
import request from '../utils/request';
var Option = _Select.Option;

var RemoteSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RemoteSelect, _React$Component);

  function RemoteSelect(props) {
    var _this;

    _classCallCheck(this, RemoteSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RemoteSelect).call(this, props));
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
    _this.search = debounce(_this.search, 800);
    return _this;
  }

  _createClass(RemoteSelect, [{
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
      request(requestConfig).then(function (resp) {
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
          rest = _objectWithoutProperties(_this$props2, ["optionsConfig", "requestConfig", "onChange"]);

      return React.createElement(_Select, _extends({
        mode: "multiple",
        labelInValue: true,
        value: this.state.value,
        notFoundContent: fetching ? React.createElement(_Spin, {
          size: "small"
        }) : null,
        filterOption: false,
        onSearch: this.search,
        onChange: this.handleChange,
        style: {
          width: '100%'
        }
      }, rest), data.map(function (item) {
        return React.createElement(Option, {
          key: item.value,
          value: item.value
        }, item.text);
      }));
    }
  }]);

  return RemoteSelect;
}(React.Component);

RemoteSelect.propTypes = {
  requestConfig: PropTypes.object,
  optionsConfig: PropTypes.object,
  onChange: PropTypes.func
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
export { RemoteSelect as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Option, "Option", "/Users/qiu/biosan/BiosanUi/src/MySelect/remoteSelect.js");

  __REACT_HOT_LOADER__.register(RemoteSelect, "RemoteSelect", "/Users/qiu/biosan/BiosanUi/src/MySelect/remoteSelect.js");
}();

;