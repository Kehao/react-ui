"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style/index.less");

var _common = require("../utils/common");

var ButtonGroup = _button.default.Group;

var MyFamilyInput =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MyFamilyInput, _React$PureComponent);

  // static getDerivedStateFromProps(nextProps) {
  //   return null
  // }
  function MyFamilyInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyFamilyInput);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyFamilyInput).call(this, props));

    _this.emptyItem = function () {
      var _this2;

      return (_this2 = _this).__emptyItem__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.triggerChange = function () {
      var _this3;

      return (_this3 = _this).__triggerChange__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this.handleChangeInput = function () {
      var _this4;

      return (_this4 = _this).__handleChangeInput__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this.handleIncrease = function () {
      var _this5;

      return (_this5 = _this).__handleIncrease__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this.handleDelete = function () {
      var _this6;

      return (_this6 = _this).__handleDelete__REACT_HOT_LOADER__.apply(_this6, arguments);
    };

    _this.columns = [{
      title: '姓名',
      dataIndex: 'patientName',
      width: 160,
      render: function render(text, _, index) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: 'validate'
        }), _react.default.createElement(_input.default, {
          disabled: _.disabled,
          style: {
            width: '87%'
          },
          value: text,
          onChange: _this.handleChangeInput.bind((0, _assertThisInitialized2.default)(_this), 'patientName', index)
        }));
      }
    }, {
      title: '性别',
      dataIndex: 'sex',
      width: 100,
      render: function render(text, _, index) {
        return _react.default.createElement(_select.default, {
          disabled: _.disabled,
          value: text,
          onChange: _this.handleChangeInput.bind((0, _assertThisInitialized2.default)(_this), 'sex', index)
        }, _react.default.createElement(_select.default.Option, {
          value: "\u7537"
        }, "\u7537"), _react.default.createElement(_select.default.Option, {
          value: "\u5973"
        }, "\u5973"));
      }
    }, {
      title: '样本类别',
      dataIndex: 'sampleType',
      width: 200,
      render: function render(text, _, index) {
        return _react.default.createElement(_select.default, {
          disabled: _.disabled,
          value: text,
          onChange: _this.handleChangeInput.bind((0, _assertThisInitialized2.default)(_this), 'sampleType', index)
        }, _this.props.sampleTypeList.map(function (n) {
          return _react.default.createElement(_select.default.Option, {
            key: n.sampleTypeId,
            value: n.sampleType
          }, n.sampleType);
        }));
      }
    }, {
      title: 'ID号',
      dataIndex: 'admissionNo',
      width: '120',
      render: function render(text, _, index) {
        return _react.default.createElement(_input.default, {
          disabled: _.disabled,
          value: text,
          onChange: _this.handleChangeInput.bind((0, _assertThisInitialized2.default)(_this), 'admissionNo', index)
        });
      }
    }, {
      title: '备注',
      dataIndex: 'remark',
      width: '160',
      render: function render(text, _, index) {
        return _react.default.createElement(_input.default, {
          disabled: _.disabled,
          value: text,
          onChange: _this.handleChangeInput.bind((0, _assertThisInitialized2.default)(_this), 'remark', index)
        });
      }
    }];
    var initalList = props.value;

    if (!(Array.isArray(props.value) && props.value.length)) {
      initalList = [_this.emptyItem()];
    }

    _this.state = {
      list: initalList
    };
    return _this;
  }

  (0, _createClass2.default)(MyFamilyInput, [{
    key: "__handleDelete__REACT_HOT_LOADER__",
    value: function __handleDelete__REACT_HOT_LOADER__() {
      return this.__handleDelete__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleIncrease__REACT_HOT_LOADER__",
    value: function __handleIncrease__REACT_HOT_LOADER__() {
      return this.__handleIncrease__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleChangeInput__REACT_HOT_LOADER__",
    value: function __handleChangeInput__REACT_HOT_LOADER__() {
      return this.__handleChangeInput__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__triggerChange__REACT_HOT_LOADER__",
    value: function __triggerChange__REACT_HOT_LOADER__() {
      return this.__triggerChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__emptyItem__REACT_HOT_LOADER__",
    value: function __emptyItem__REACT_HOT_LOADER__() {
      return this.__emptyItem__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__emptyItem__REACT_HOT_LOADER__",
    value: function __emptyItem__REACT_HOT_LOADER__() {
      return {
        id: "".concat((0, _common.generatorId)(), "_").concat(Date.now()),
        patientName: '',
        sampleType: '',
        admissionNo: '',
        remark: '',
        sex: '',
        disabled: false // 是否可修改

      };
    }
  }, {
    key: "__triggerChange__REACT_HOT_LOADER__",
    value: function __triggerChange__REACT_HOT_LOADER__(list) {
      var newList = (0, _toConsumableArray2.default)(list);
      var onChange = this.props.onChange;
      this.setState({
        list: newList
      });
      onChange && onChange(newList);
    }
  }, {
    key: "__handleChangeInput__REACT_HOT_LOADER__",
    value: function __handleChangeInput__REACT_HOT_LOADER__(type, index, e) {
      var list = this.state.list;

      if (type === 'sampleType' || type === 'sex') {
        list[index][type] = e;
      } else {
        list[index][type] = e.target.value;
      }

      this.triggerChange(list);
    }
  }, {
    key: "__handleIncrease__REACT_HOT_LOADER__",
    value: function __handleIncrease__REACT_HOT_LOADER__(index, type) {
      var list = this.state.list;
      var data = this.emptyItem();

      if (type === 'top') {
        list.unshift(data);
      } else {
        list.splice(list.length === 0 ? 0 : index + 1, 0, data);
      }

      this.setState({
        list: (0, _toConsumableArray2.default)(list)
      }); // this.triggerChange(list)
    }
  }, {
    key: "__handleDelete__REACT_HOT_LOADER__",
    value: function __handleDelete__REACT_HOT_LOADER__(index) {
      var list = this.state.list;
      list.splice(index, 1);

      if (list.length === 0) {
        list.unshift(this.emptyItem());
      }

      this.triggerChange(list);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var list = this.state.list;
      var maxHeight = this.props.maxHeight;
      var props = {
        style: {
          overflow: 'auto'
        }
      };

      if (maxHeight) {
        props.style.maxHeight = maxHeight;
      }

      return _react.default.createElement(_row.default, (0, _extends2.default)({}, props, {
        className: 'myFamilyInput'
      }), _react.default.createElement(_col.default, {
        span: 21
      }, _react.default.createElement(_table.default, {
        rowKey: "id",
        columns: this.columns,
        size: "small",
        bordered: true,
        pagination: false,
        dataSource: list,
        scroll: {
          x: 700
        }
      })), _react.default.createElement(_col.default, {
        span: 3
      }, _react.default.createElement("div", {
        className: 'operation'
      }, _react.default.createElement(_button.default, {
        icon: "plus",
        shape: "circle",
        style: {
          color: '#369EF5',
          float: 'left',
          marginLeft: '8px',
          fontWeight: 900
        },
        onClick: this.handleIncrease.bind(this, 0, 'top')
      })), list && list.map(function (n, index) {
        return _react.default.createElement("div", {
          key: index,
          className: 'operationRow'
        }, _react.default.createElement(ButtonGroup, {
          style: {
            float: 'left',
            marginLeft: '8px'
          }
        }, !n.disabled && _react.default.createElement(_button.default, {
          icon: "minus",
          shape: "circle",
          style: {
            color: '#369EF5',
            fontWeight: 900
          },
          onClick: _this7.handleDelete.bind(_this7, index)
        }), _react.default.createElement(_button.default, {
          icon: "plus",
          shape: "circle",
          style: {
            color: '#369EF5',
            fontWeight: 900
          },
          onClick: _this7.handleIncrease.bind(_this7, index)
        })));
      })));
    }
  }]);
  return MyFamilyInput;
}(_react.default.PureComponent);

MyFamilyInput.defaultProps = {
  sampleTypeList: [] // { sampleTypeId: 'aa', sampleType: 'bb' }

};
MyFamilyInput.propTypes = {
  value: _propTypes.default.array,
  maxHeight: _propTypes.default.number,
  sampleTypeList: _propTypes.default.array,
  onChange: _propTypes.default.func
};
var _default = MyFamilyInput;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ButtonGroup, "ButtonGroup", "/Users/qiu/biosan/BiosanUi/src/MyFamilyInput/MyFamilyInput.js");

  __REACT_HOT_LOADER__.register(MyFamilyInput, "MyFamilyInput", "/Users/qiu/biosan/BiosanUi/src/MyFamilyInput/MyFamilyInput.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/MyFamilyInput/MyFamilyInput.js");
}();

;