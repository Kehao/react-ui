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

var React = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var ArrowKeyStepper =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ArrowKeyStepper, _React$PureComponent);

  function ArrowKeyStepper() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ArrowKeyStepper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ArrowKeyStepper)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      scrollToColumn: 0,
      scrollToRow: 0
    };
    _this._columnStartIndex = 0;
    _this._columnStopIndex = 0;
    _this._rowStartIndex = 0;
    _this._rowStopIndex = 0;

    _this._onKeyDown = function () {
      var _this2;

      return (_this2 = _this).___onKeyDown__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this._onSectionRendered = function () {
      var _this3;

      return (_this3 = _this).___onSectionRendered__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    return _this;
  }

  (0, _createClass2.default)(ArrowKeyStepper, [{
    key: "___onSectionRendered__REACT_HOT_LOADER__",
    value: function ___onSectionRendered__REACT_HOT_LOADER__() {
      return this.___onSectionRendered__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onKeyDown__REACT_HOT_LOADER__",
    value: function ___onKeyDown__REACT_HOT_LOADER__() {
      return this.___onKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "setScrollIndexes",
    value: function setScrollIndexes(_ref) {
      var scrollToColumn = _ref.scrollToColumn,
          scrollToRow = _ref.scrollToRow;
      this.setState({
        scrollToRow: scrollToRow,
        scrollToColumn: scrollToColumn
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;

      var _this$_getScrollState = this._getScrollState(),
          scrollToColumn = _this$_getScrollState.scrollToColumn,
          scrollToRow = _this$_getScrollState.scrollToRow;

      return React.createElement("div", {
        className: className,
        onKeyDown: this._onKeyDown
      }, children({
        onSectionRendered: this._onSectionRendered,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow
      }));
    }
  }, {
    key: "___onKeyDown__REACT_HOT_LOADER__",
    value: function ___onKeyDown__REACT_HOT_LOADER__(event) {
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          disabled = _this$props2.disabled,
          mode = _this$props2.mode,
          rowCount = _this$props2.rowCount;

      if (disabled) {
        return;
      }

      var _this$_getScrollState2 = this._getScrollState(),
          scrollToColumnPrevious = _this$_getScrollState2.scrollToColumn,
          scrollToRowPrevious = _this$_getScrollState2.scrollToRow;

      var _this$_getScrollState3 = this._getScrollState(),
          scrollToColumn = _this$_getScrollState3.scrollToColumn,
          scrollToRow = _this$_getScrollState3.scrollToRow; // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.


      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(this._rowStopIndex + 1, rowCount - 1);
          break;

        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(this._columnStartIndex - 1, 0);
          break;

        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(this._columnStopIndex + 1, columnCount - 1);
          break;

        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(this._rowStartIndex - 1, 0);
          break;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        this._updateScrollState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    }
  }, {
    key: "___onSectionRendered__REACT_HOT_LOADER__",
    value: function ___onSectionRendered__REACT_HOT_LOADER__(_ref2) {
      var columnStartIndex = _ref2.columnStartIndex,
          columnStopIndex = _ref2.columnStopIndex,
          rowStartIndex = _ref2.rowStartIndex,
          rowStopIndex = _ref2.rowStopIndex;
      this._columnStartIndex = columnStartIndex;
      this._columnStopIndex = columnStopIndex;
      this._rowStartIndex = rowStartIndex;
      this._rowStopIndex = rowStopIndex;
    }
  }, {
    key: "_getScrollState",
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: "_updateScrollState",
    value: function _updateScrollState(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn,
          scrollToRow = _ref3.scrollToRow;
      var _this$props3 = this.props,
          isControlled = _this$props3.isControlled,
          onScrollToChange = _this$props3.onScrollToChange;

      if (typeof onScrollToChange === 'function') {
        onScrollToChange({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }

      if (!isControlled) {
        this.setState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isControlled) {
        return null;
      }

      if (nextProps.scrollToColumn !== prevState.scrollToColumn || nextProps.scrollToRow !== prevState.scrollToRow) {
        return {
          scrollToColumn: nextProps.scrollToColumn,
          scrollToRow: nextProps.scrollToRow
        };
      }

      return null;
    }
  }]);
  return ArrowKeyStepper;
}(React.PureComponent);

ArrowKeyStepper.defaultProps = {
  disabled: false,
  isControlled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
};
(0, _reactLifecyclesCompat.polyfill)(ArrowKeyStepper);
var _default = ArrowKeyStepper;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ArrowKeyStepper, "ArrowKeyStepper", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/ArrowKeyStepper/ArrowKeyStepper.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/ArrowKeyStepper/ArrowKeyStepper.js");
}();

;