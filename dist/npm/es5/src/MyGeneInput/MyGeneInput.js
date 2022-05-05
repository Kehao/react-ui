"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/lib/cascader/style");

var _cascader = _interopRequireDefault(require("antd/lib/cascader"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var originOptionsA = [{
  value: '<span>αα</span>',
  label: _react.default.createElement("span", null, "\u03B1\u03B1")
}, {
  value: '<span>--<sup>SEA</sup></span>',
  label: _react.default.createElement("span", null, "--", _react.default.createElement("sup", null, "SEA"))
}, {
  value: '<span>--<sup>THAI</sup></span>',
  label: _react.default.createElement("span", null, "--", _react.default.createElement("sup", null, "THAI"))
}, {
  value: '<span>-α<sup>3.7</sup></span>',
  label: _react.default.createElement("span", null, "-\u03B1", _react.default.createElement("sup", null, "3.7"))
}, {
  value: '<span>-α<sup>4.2</sup></span>',
  label: _react.default.createElement("span", null, "-\u03B1", _react.default.createElement("sup", null, "4.2"))
}, {
  value: '<span>α<sup>QS</sup>α</span>',
  label: _react.default.createElement("span", null, "\u03B1", _react.default.createElement("sup", null, "QS"), "\u03B1")
}, {
  value: '<span>α<sup>CS</sup></span>',
  label: _react.default.createElement("span", null, "\u03B1", _react.default.createElement("sup", null, "CS"))
}, {
  value: '<span>α<sup>WS</sup>α</span>',
  label: _react.default.createElement("span", null, "\u03B1", _react.default.createElement("sup", null, "WS"), "\u03B1")
}];
var originOptionsB = [{
  value: '<span>β<sup>N</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "N"))
}, {
  value: '<span>β<sup>CD41-42</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "CD41-42"))
}, {
  value: '<span>β<sup>CD43</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "CD43"))
}, {
  value: '<span>β<sup>IVS-2-654</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "IVS-2-654"))
}, {
  value: '<span>β<sup>-28</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "-28"))
}, {
  value: '<span>β<sup>-29</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "-29"))
}, {
  value: '<span>β<sup>-30</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "-30"))
}, {
  value: '<span>β<sup>-32</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "-32"))
}, {
  value: '<span>β<sup>-CD71-72</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "-CD71-72"))
}, {
  value: '<span>β<sup>E</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "E"))
}, {
  value: '<span>β<sup>CD17</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "CD17"))
}, {
  value: '<span>β<sup>CD31</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "CD31"))
}, {
  value: '<span>β<sup>CD14-15</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "CD14-15"))
}, {
  value: '<span>β<sup>CD27-28</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "CD27-28"))
}, {
  value: '<span>β<sup>IVS-1-5</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "IVS-1-5"))
}, {
  value: '<span>β<sup>CAP+1</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "CAP+1"))
}, {
  value: '<span>β<sup>IntM</sup></span>',
  label: _react.default.createElement("span", null, "\u03B2", _react.default.createElement("sup", null, "IntM"))
}];

var MyGeneInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MyGeneInput, _React$Component);

  function MyGeneInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyGeneInput);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyGeneInput).call(this, props));

    _this.handleDisplayShowagen = function () {
      var _this2;

      return (_this2 = _this).__handleDisplayShowagen__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.handleDisplayShowbgen = function () {
      var _this3;

      return (_this3 = _this).__handleDisplayShowbgen__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this.optionagen = originOptionsA.map(function (item) {
      return _objectSpread({}, item, {
        children: originOptionsA
      });
    });
    _this.optionbgen = originOptionsB.map(function (item) {
      return _objectSpread({}, item, {
        children: originOptionsB
      });
    });
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(MyGeneInput, [{
    key: "__handleDisplayShowbgen__REACT_HOT_LOADER__",
    value: function __handleDisplayShowbgen__REACT_HOT_LOADER__() {
      return this.__handleDisplayShowbgen__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleDisplayShowagen__REACT_HOT_LOADER__",
    value: function __handleDisplayShowagen__REACT_HOT_LOADER__() {
      return this.__handleDisplayShowagen__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleDisplayShowagen__REACT_HOT_LOADER__",
    value: function __handleDisplayShowagen__REACT_HOT_LOADER__(_, selectedOptions) {
      return _react.default.createElement(_react.default.Fragment, null, originOptionsA.find(function (_A) {
        return _A.value === selectedOptions[0].value;
      }).label, " / ", originOptionsA.find(function (_A) {
        return _A.value === selectedOptions[1].value;
      }).label);
    }
  }, {
    key: "__handleDisplayShowbgen__REACT_HOT_LOADER__",
    value: function __handleDisplayShowbgen__REACT_HOT_LOADER__(_, selectedOptions) {
      if (selectedOptions.length > 0) {
        return _react.default.createElement(_react.default.Fragment, null, originOptionsB.find(function (_B) {
          return _B.value === selectedOptions[0].value;
        }).label, " / ", originOptionsB.find(function (_B) {
          return _B.value === selectedOptions[1].value;
        }).label);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          tableOption = _this$props.tableOption,
          dataSource = _this$props.dataSource,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["tableOption", "dataSource"]);
      var columns = tableOption.map(function (_n) {
        return {
          title: _n.title,
          dataIndex: _n.dataIndex,
          width: _n.width,
          render: function render(text, record, index) {
            var displayRender = _n.options ? function (_, selectedOptions) {
              return _react.default.createElement(_react.default.Fragment, null, _n.options.find(function (_B) {
                return _B.value === selectedOptions[0].value;
              }).label, " / ", _n.options.find(function (_B) {
                return _B.value === selectedOptions[1].value;
              }).label);
            } : _this4["handleDisplayShow".concat(_n.dataIndex)];
            var options = _n.options ? _n.options : _this4["option".concat(_n.dataIndex)];
            return _react.default.createElement(_cascader.default, {
              allowClear: _n.allowClear,
              displayRender: displayRender,
              value: text,
              options: options,
              onChange: function onChange(e) {
                return _this4.props.onSelectChange(_n.dataIndex, index, e);
              },
              placeholder: _n.placeholder
            });
          }
        };
      });
      return _react.default.createElement(_table.default, (0, _extends2.default)({
        columns: columns,
        dataSource: dataSource,
        bordered: true,
        size: "small",
        pagination: false
      }, restProps));
    }
  }]);
  return MyGeneInput;
}(_react.default.Component);

MyGeneInput.defaultProps = {
  tableOption: [],
  dataSource: []
};
MyGeneInput.propTypes = {
  tableOption: _propTypes.default.array,
  dataSource: _propTypes.default.array,
  onSelectChange: _propTypes.default.func,
  selectData: _propTypes.default.array
};
var _default = MyGeneInput;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(originOptionsA, "originOptionsA", "/Users/qiu/biosan/BiosanUi/src/MyGeneInput/MyGeneInput.js");

  __REACT_HOT_LOADER__.register(originOptionsB, "originOptionsB", "/Users/qiu/biosan/BiosanUi/src/MyGeneInput/MyGeneInput.js");

  __REACT_HOT_LOADER__.register(MyGeneInput, "MyGeneInput", "/Users/qiu/biosan/BiosanUi/src/MyGeneInput/MyGeneInput.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/MyGeneInput/MyGeneInput.js");
}();

;