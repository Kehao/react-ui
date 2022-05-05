import "antd/lib/row/style";
import _Row from "antd/lib/row";
import _extends from "@babel/runtime/helpers/extends";
import "antd/lib/col/style";
import _Col from "antd/lib/col";
import "antd/lib/table/style";
import _Table from "antd/lib/table";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import "antd/lib/select/style";
import _Select from "antd/lib/select";
import "antd/lib/input/style";
import _Input from "antd/lib/input";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import "antd/lib/button/style";
import _Button from "antd/lib/button";
import React from 'react';
import PropTypes from 'prop-types';
import './style/index.less';
import { generatorId } from '../utils/common';
var ButtonGroup = _Button.Group;

var MyFamilyInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MyFamilyInput, _React$PureComponent);

  // static getDerivedStateFromProps(nextProps) {
  //   return null
  // }
  function MyFamilyInput(props) {
    var _this;

    _classCallCheck(this, MyFamilyInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyFamilyInput).call(this, props));

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
        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: 'validate'
        }), React.createElement(_Input, {
          disabled: _.disabled,
          style: {
            width: '87%'
          },
          value: text,
          onChange: _this.handleChangeInput.bind(_assertThisInitialized(_this), 'patientName', index)
        }));
      }
    }, {
      title: '性别',
      dataIndex: 'sex',
      width: 100,
      render: function render(text, _, index) {
        return React.createElement(_Select, {
          disabled: _.disabled,
          value: text,
          onChange: _this.handleChangeInput.bind(_assertThisInitialized(_this), 'sex', index)
        }, React.createElement(_Select.Option, {
          value: "\u7537"
        }, "\u7537"), React.createElement(_Select.Option, {
          value: "\u5973"
        }, "\u5973"));
      }
    }, {
      title: '样本类别',
      dataIndex: 'sampleType',
      width: 200,
      render: function render(text, _, index) {
        return React.createElement(_Select, {
          disabled: _.disabled,
          value: text,
          onChange: _this.handleChangeInput.bind(_assertThisInitialized(_this), 'sampleType', index)
        }, _this.props.sampleTypeList.map(function (n) {
          return React.createElement(_Select.Option, {
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
        return React.createElement(_Input, {
          disabled: _.disabled,
          value: text,
          onChange: _this.handleChangeInput.bind(_assertThisInitialized(_this), 'admissionNo', index)
        });
      }
    }, {
      title: '备注',
      dataIndex: 'remark',
      width: '160',
      render: function render(text, _, index) {
        return React.createElement(_Input, {
          disabled: _.disabled,
          value: text,
          onChange: _this.handleChangeInput.bind(_assertThisInitialized(_this), 'remark', index)
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

  _createClass(MyFamilyInput, [{
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
        id: "".concat(generatorId(), "_").concat(Date.now()),
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
      var newList = _toConsumableArray(list);

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
        list: _toConsumableArray(list)
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

      return React.createElement(_Row, _extends({}, props, {
        className: 'myFamilyInput'
      }), React.createElement(_Col, {
        span: 21
      }, React.createElement(_Table, {
        rowKey: "id",
        columns: this.columns,
        size: "small",
        bordered: true,
        pagination: false,
        dataSource: list,
        scroll: {
          x: 700
        }
      })), React.createElement(_Col, {
        span: 3
      }, React.createElement("div", {
        className: 'operation'
      }, React.createElement(_Button, {
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
        return React.createElement("div", {
          key: index,
          className: 'operationRow'
        }, React.createElement(ButtonGroup, {
          style: {
            float: 'left',
            marginLeft: '8px'
          }
        }, !n.disabled && React.createElement(_Button, {
          icon: "minus",
          shape: "circle",
          style: {
            color: '#369EF5',
            fontWeight: 900
          },
          onClick: _this7.handleDelete.bind(_this7, index)
        }), React.createElement(_Button, {
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
}(React.PureComponent);

MyFamilyInput.defaultProps = {
  sampleTypeList: [] // { sampleTypeId: 'aa', sampleType: 'bb' }

};
MyFamilyInput.propTypes = {
  value: PropTypes.array,
  maxHeight: PropTypes.number,
  sampleTypeList: PropTypes.array,
  onChange: PropTypes.func
};
var _default = MyFamilyInput;
export default _default;
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