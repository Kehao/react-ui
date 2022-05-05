"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _immutable = _interopRequireDefault(require("immutable"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _CellMeasurer = _interopRequireDefault(require("./CellMeasurer"));

var _CellMeasurerCache = _interopRequireDefault(require("./CellMeasurerCache"));

var _Table = require("../Table");

var _CellMeasurerExample = _interopRequireDefault(require("./CellMeasurer.example.css"));

var DynamicHeightTableColumn =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(DynamicHeightTableColumn, _React$PureComponent);

  function DynamicHeightTableColumn() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DynamicHeightTableColumn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DynamicHeightTableColumn)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this._cache = new _CellMeasurerCache.default({
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

  (0, _createClass2.default)(DynamicHeightTableColumn, [{
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

      return React.createElement(_Table.Table, {
        deferredMeasurementCache: this._cache,
        headerHeight: 20,
        height: 400,
        overscanRowCount: 2,
        rowClassName: _CellMeasurerExample.default.tableRow,
        rowHeight: this._cache.rowHeight,
        rowGetter: this._rowGetter,
        rowCount: 1000,
        width: width
      }, React.createElement(_Table.Column, {
        className: _CellMeasurerExample.default.tableColumn,
        dataKey: "name",
        label: "Name",
        width: 125
      }), React.createElement(_Table.Column, {
        className: _CellMeasurerExample.default.tableColumn,
        dataKey: "color",
        label: "Color",
        width: 75
      }), React.createElement(_Table.Column, {
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
      return React.createElement(_CellMeasurer.default, {
        cache: this._cache,
        columnIndex: 0,
        key: dataKey,
        parent: parent,
        rowIndex: rowIndex
      }, React.createElement("div", {
        className: _CellMeasurerExample.default.tableColumn,
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

exports.default = DynamicHeightTableColumn;
DynamicHeightTableColumn.propTypes = {
  list: _propTypes.default.instanceOf(_immutable.default.List).isRequired,
  width: _propTypes.default.number.isRequired
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DynamicHeightTableColumn, "DynamicHeightTableColumn", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/CellMeasurer/CellMeasurer.DynamicHeightTableColumn.example.js");
}();

;