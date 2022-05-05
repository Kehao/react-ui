import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import Grid, { accessibilityOverscanIndicesGetter } from '../Grid';
import * as React from 'react';
import clsx from 'clsx';
/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(List, _React$PureComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(List)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.Grid = void 0;

    _this._cellRenderer = function () {
      var _this2;

      return (_this2 = _this).___cellRenderer__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this._setRef = function () {
      var _this3;

      return (_this3 = _this).___setRef__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this._onScroll = function () {
      var _this4;

      return (_this4 = _this).___onScroll__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this._onSectionRendered = function () {
      var _this5;

      return (_this5 = _this).___onSectionRendered__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    return _this;
  }

  _createClass(List, [{
    key: "___onSectionRendered__REACT_HOT_LOADER__",
    value: function ___onSectionRendered__REACT_HOT_LOADER__() {
      return this.___onSectionRendered__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onScroll__REACT_HOT_LOADER__",
    value: function ___onScroll__REACT_HOT_LOADER__() {
      return this.___onScroll__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___setRef__REACT_HOT_LOADER__",
    value: function ___setRef__REACT_HOT_LOADER__() {
      return this.___setRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___cellRenderer__REACT_HOT_LOADER__",
    value: function ___cellRenderer__REACT_HOT_LOADER__() {
      return this.___cellRenderer__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */

  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            scrollTop = _this$Grid$getOffsetF.scrollTop;

        return scrollTop;
      }

      return 0;
    }
    /** CellMeasurer compatibility */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$columnIndex = _ref3.columnIndex,
          columnIndex = _ref3$columnIndex === void 0 ? 0 : _ref3$columnIndex,
          _ref3$rowIndex = _ref3.rowIndex,
          rowIndex = _ref3$rowIndex === void 0 ? 0 : _ref3$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }
    /** See Grid#scrollToPosition */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */

  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          noRowsRenderer = _this$props.noRowsRenderer,
          scrollToIndex = _this$props.scrollToIndex,
          width = _this$props.width;
      var classNames = clsx('ReactVirtualized__List', className);
      return React.createElement(Grid, _extends({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }, {
    key: "___cellRenderer__REACT_HOT_LOADER__",
    value: function ___cellRenderer__REACT_HOT_LOADER__(_ref4) {
      var parent = _ref4.parent,
          rowIndex = _ref4.rowIndex,
          style = _ref4.style,
          isScrolling = _ref4.isScrolling,
          isVisible = _ref4.isVisible,
          key = _ref4.key;
      var rowRenderer = this.props.rowRenderer; // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = Object.getOwnPropertyDescriptor(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    }
  }, {
    key: "___setRef__REACT_HOT_LOADER__",
    value: function ___setRef__REACT_HOT_LOADER__(ref) {
      this.Grid = ref;
    }
  }, {
    key: "___onScroll__REACT_HOT_LOADER__",
    value: function ___onScroll__REACT_HOT_LOADER__(_ref5) {
      var clientHeight = _ref5.clientHeight,
          scrollHeight = _ref5.scrollHeight,
          scrollTop = _ref5.scrollTop;
      var onScroll = this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    }
  }, {
    key: "___onSectionRendered__REACT_HOT_LOADER__",
    value: function ___onSectionRendered__REACT_HOT_LOADER__(_ref6) {
      var rowOverscanStartIndex = _ref6.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref6.rowOverscanStopIndex,
          rowStartIndex = _ref6.rowStartIndex,
          rowStopIndex = _ref6.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }]);

  return List;
}(React.PureComponent);

List.defaultProps = {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
export { List as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(List, "List", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/List/List.js");
}();

;