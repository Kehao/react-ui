import "antd/lib/table/style";
import _Table from "antd/lib/table";
import _extends from "@babel/runtime/helpers/extends";
import "antd/lib/cascader/style";
import _Cascader from "antd/lib/cascader";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
var originOptionsA = [{
  value: '<span>αα</span>',
  label: React.createElement("span", null, "\u03B1\u03B1")
}, {
  value: '<span>--<sup>SEA</sup></span>',
  label: React.createElement("span", null, "--", React.createElement("sup", null, "SEA"))
}, {
  value: '<span>--<sup>THAI</sup></span>',
  label: React.createElement("span", null, "--", React.createElement("sup", null, "THAI"))
}, {
  value: '<span>-α<sup>3.7</sup></span>',
  label: React.createElement("span", null, "-\u03B1", React.createElement("sup", null, "3.7"))
}, {
  value: '<span>-α<sup>4.2</sup></span>',
  label: React.createElement("span", null, "-\u03B1", React.createElement("sup", null, "4.2"))
}, {
  value: '<span>α<sup>QS</sup>α</span>',
  label: React.createElement("span", null, "\u03B1", React.createElement("sup", null, "QS"), "\u03B1")
}, {
  value: '<span>α<sup>CS</sup></span>',
  label: React.createElement("span", null, "\u03B1", React.createElement("sup", null, "CS"))
}, {
  value: '<span>α<sup>WS</sup>α</span>',
  label: React.createElement("span", null, "\u03B1", React.createElement("sup", null, "WS"), "\u03B1")
}];
var originOptionsB = [{
  value: '<span>β<sup>N</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "N"))
}, {
  value: '<span>β<sup>CD41-42</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "CD41-42"))
}, {
  value: '<span>β<sup>CD43</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "CD43"))
}, {
  value: '<span>β<sup>IVS-2-654</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "IVS-2-654"))
}, {
  value: '<span>β<sup>-28</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "-28"))
}, {
  value: '<span>β<sup>-29</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "-29"))
}, {
  value: '<span>β<sup>-30</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "-30"))
}, {
  value: '<span>β<sup>-32</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "-32"))
}, {
  value: '<span>β<sup>-CD71-72</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "-CD71-72"))
}, {
  value: '<span>β<sup>E</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "E"))
}, {
  value: '<span>β<sup>CD17</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "CD17"))
}, {
  value: '<span>β<sup>CD31</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "CD31"))
}, {
  value: '<span>β<sup>CD14-15</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "CD14-15"))
}, {
  value: '<span>β<sup>CD27-28</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "CD27-28"))
}, {
  value: '<span>β<sup>IVS-1-5</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "IVS-1-5"))
}, {
  value: '<span>β<sup>CAP+1</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "CAP+1"))
}, {
  value: '<span>β<sup>IntM</sup></span>',
  label: React.createElement("span", null, "\u03B2", React.createElement("sup", null, "IntM"))
}];

var MyGeneInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyGeneInput, _React$Component);

  function MyGeneInput(props) {
    var _this;

    _classCallCheck(this, MyGeneInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyGeneInput).call(this, props));

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

  _createClass(MyGeneInput, [{
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
      return React.createElement(React.Fragment, null, originOptionsA.find(function (_A) {
        return _A.value === selectedOptions[0].value;
      }).label, " / ", originOptionsA.find(function (_A) {
        return _A.value === selectedOptions[1].value;
      }).label);
    }
  }, {
    key: "__handleDisplayShowbgen__REACT_HOT_LOADER__",
    value: function __handleDisplayShowbgen__REACT_HOT_LOADER__(_, selectedOptions) {
      if (selectedOptions.length > 0) {
        return React.createElement(React.Fragment, null, originOptionsB.find(function (_B) {
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
          restProps = _objectWithoutProperties(_this$props, ["tableOption", "dataSource"]);

      var columns = tableOption.map(function (_n) {
        return {
          title: _n.title,
          dataIndex: _n.dataIndex,
          width: _n.width,
          render: function render(text, record, index) {
            var displayRender = _n.options ? function (_, selectedOptions) {
              return React.createElement(React.Fragment, null, _n.options.find(function (_B) {
                return _B.value === selectedOptions[0].value;
              }).label, " / ", _n.options.find(function (_B) {
                return _B.value === selectedOptions[1].value;
              }).label);
            } : _this4["handleDisplayShow".concat(_n.dataIndex)];
            var options = _n.options ? _n.options : _this4["option".concat(_n.dataIndex)];
            return React.createElement(_Cascader, {
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
      return React.createElement(_Table, _extends({
        columns: columns,
        dataSource: dataSource,
        bordered: true,
        size: "small",
        pagination: false
      }, restProps));
    }
  }]);

  return MyGeneInput;
}(React.Component);

MyGeneInput.defaultProps = {
  tableOption: [],
  dataSource: []
};
MyGeneInput.propTypes = {
  tableOption: PropTypes.array,
  dataSource: PropTypes.array,
  onSelectChange: PropTypes.func,
  selectData: PropTypes.array
};
var _default = MyGeneInput;
export default _default;
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