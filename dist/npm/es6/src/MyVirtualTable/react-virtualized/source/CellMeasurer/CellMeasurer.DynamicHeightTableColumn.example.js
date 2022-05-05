import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import * as React from 'react';
import CellMeasurer from './CellMeasurer';
import CellMeasurerCache from './CellMeasurerCache';
import { Column, Table } from '../Table';
import styles from './CellMeasurer.example.css';

var DynamicHeightTableColumn =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DynamicHeightTableColumn, _React$PureComponent);

  function DynamicHeightTableColumn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DynamicHeightTableColumn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DynamicHeightTableColumn)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this._cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 25
    });
    _this._lastRenderedWidth = _this.props.width;

    _this._columnCellRenderer = function () {
      var _this2;

      return (_this2 = _this).___columnCellRenderer__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this._rowGetter = function () {
      var _this3;

      return (_this3 = _this).___rowGetter__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    return _this;
  }

  _createClass(DynamicHeightTableColumn, [{
    key: "___rowGetter__REACT_HOT_LOADER__",
    value: function ___rowGetter__REACT_HOT_LOADER__() {
      return this.___rowGetter__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___columnCellRenderer__REACT_HOT_LOADER__",
    value: function ___columnCellRenderer__REACT_HOT_LOADER__() {
      return this.___columnCellRenderer__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var width = this.props.width;

      if (this._lastRenderedWidth !== this.props.width) {
        this._lastRenderedWidth = this.props.width;

        this._cache.clearAll();
      }

      return React.createElement(Table, {
        deferredMeasurementCache: this._cache,
        headerHeight: 20,
        height: 400,
        overscanRowCount: 2,
        rowClassName: styles.tableRow,
        rowHeight: this._cache.rowHeight,
        rowGetter: this._rowGetter,
        rowCount: 1000,
        width: width
      }, React.createElement(Column, {
        className: styles.tableColumn,
        dataKey: "name",
        label: "Name",
        width: 125
      }), React.createElement(Column, {
        className: styles.tableColumn,
        dataKey: "color",
        label: "Color",
        width: 75
      }), React.createElement(Column, {
        width: width - 200,
        dataKey: "random",
        label: "Dynamic text",
        cellRenderer: this._columnCellRenderer
      }));
    }
  }, {
    key: "___columnCellRenderer__REACT_HOT_LOADER__",
    value: function ___columnCellRenderer__REACT_HOT_LOADER__(_ref) {
      var dataKey = _ref.dataKey,
          parent = _ref.parent,
          rowIndex = _ref.rowIndex;
      var list = this.props.list;
      var datum = list.get(rowIndex % list.size);
      var content = rowIndex % 5 === 0 ? '' : datum.randomLong;
      return React.createElement(CellMeasurer, {
        cache: this._cache,
        columnIndex: 0,
        key: dataKey,
        parent: parent,
        rowIndex: rowIndex
      }, React.createElement("div", {
        className: styles.tableColumn,
        style: {
          whiteSpace: 'normal'
        }
      }, content));
    }
  }, {
    key: "___rowGetter__REACT_HOT_LOADER__",
    value: function ___rowGetter__REACT_HOT_LOADER__(_ref2) {
      var index = _ref2.index;
      var list = this.props.list;
      return list.get(index % list.size);
    }
  }]);

  return DynamicHeightTableColumn;
}(React.PureComponent);

DynamicHeightTableColumn.propTypes = {
  list: PropTypes.instanceOf(Immutable.List).isRequired,
  width: PropTypes.number.isRequired
};
export { DynamicHeightTableColumn as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DynamicHeightTableColumn, "DynamicHeightTableColumn", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/CellMeasurer/CellMeasurer.DynamicHeightTableColumn.example.js");
}();

;