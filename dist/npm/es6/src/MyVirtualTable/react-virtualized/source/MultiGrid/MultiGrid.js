import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import * as React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import CellMeasurerCacheDecorator from './CellMeasurerCacheDecorator';
import Grid from '../Grid';
var SCROLLBAR_SIZE_BUFFER = 20;
/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MultiGrid, _React$PureComponent);

  function MultiGrid(props, context) {
    var _this;

    _classCallCheck(this, MultiGrid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiGrid).call(this, props, context));
    _this.state = {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false
    };
    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;

    _this._bottomLeftGridRef = function () {
      var _this2;

      return (_this2 = _this).___bottomLeftGridRef__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this._bottomRightGridRef = function () {
      var _this3;

      return (_this3 = _this).___bottomRightGridRef__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this._cellRendererBottomLeftGrid = function () {
      var _this4;

      return (_this4 = _this).___cellRendererBottomLeftGrid__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this._cellRendererBottomRightGrid = function () {
      var _this5;

      return (_this5 = _this).___cellRendererBottomRightGrid__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this._cellRendererTopRightGrid = function () {
      var _this6;

      return (_this6 = _this).___cellRendererTopRightGrid__REACT_HOT_LOADER__.apply(_this6, arguments);
    };

    _this._columnWidthRightGrid = function () {
      var _this7;

      return (_this7 = _this).___columnWidthRightGrid__REACT_HOT_LOADER__.apply(_this7, arguments);
    };

    _this._onScroll = function () {
      var _this8;

      return (_this8 = _this).___onScroll__REACT_HOT_LOADER__.apply(_this8, arguments);
    };

    _this._onScrollbarPresenceChange = function () {
      var _this9;

      return (_this9 = _this).___onScrollbarPresenceChange__REACT_HOT_LOADER__.apply(_this9, arguments);
    };

    _this._onScrollLeft = function () {
      var _this10;

      return (_this10 = _this).___onScrollLeft__REACT_HOT_LOADER__.apply(_this10, arguments);
    };

    _this._onScrollTop = function () {
      var _this11;

      return (_this11 = _this).___onScrollTop__REACT_HOT_LOADER__.apply(_this11, arguments);
    };

    _this._rowHeightBottomGrid = function () {
      var _this12;

      return (_this12 = _this).___rowHeightBottomGrid__REACT_HOT_LOADER__.apply(_this12, arguments);
    };

    _this._topLeftGridRef = function () {
      var _this13;

      return (_this13 = _this).___topLeftGridRef__REACT_HOT_LOADER__.apply(_this13, arguments);
    };

    _this._topRightGridRef = function () {
      var _this14;

      return (_this14 = _this).___topRightGridRef__REACT_HOT_LOADER__.apply(_this14, arguments);
    };

    var deferredMeasurementCache = props.deferredMeasurementCache,
        fixedColumnCount = props.fixedColumnCount,
        fixedRowCount = props.fixedRowCount;

    _this._maybeCalculateCachedStyles(true);

    if (deferredMeasurementCache) {
      _this._deferredMeasurementCacheBottomLeftGrid = fixedRowCount > 0 ? new CellMeasurerCacheDecorator({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: 0,
        rowIndexOffset: fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheBottomRightGrid = fixedColumnCount > 0 || fixedRowCount > 0 ? new CellMeasurerCacheDecorator({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: fixedColumnCount,
        rowIndexOffset: fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheTopRightGrid = fixedColumnCount > 0 ? new CellMeasurerCacheDecorator({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: fixedColumnCount,
        rowIndexOffset: 0
      }) : deferredMeasurementCache;
    }

    return _this;
  }

  _createClass(MultiGrid, [{
    key: "___topRightGridRef__REACT_HOT_LOADER__",
    value: function ___topRightGridRef__REACT_HOT_LOADER__() {
      return this.___topRightGridRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___topLeftGridRef__REACT_HOT_LOADER__",
    value: function ___topLeftGridRef__REACT_HOT_LOADER__() {
      return this.___topLeftGridRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___rowHeightBottomGrid__REACT_HOT_LOADER__",
    value: function ___rowHeightBottomGrid__REACT_HOT_LOADER__() {
      return this.___rowHeightBottomGrid__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onScrollTop__REACT_HOT_LOADER__",
    value: function ___onScrollTop__REACT_HOT_LOADER__() {
      return this.___onScrollTop__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onScrollLeft__REACT_HOT_LOADER__",
    value: function ___onScrollLeft__REACT_HOT_LOADER__() {
      return this.___onScrollLeft__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onScrollbarPresenceChange__REACT_HOT_LOADER__",
    value: function ___onScrollbarPresenceChange__REACT_HOT_LOADER__() {
      return this.___onScrollbarPresenceChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onScroll__REACT_HOT_LOADER__",
    value: function ___onScroll__REACT_HOT_LOADER__() {
      return this.___onScroll__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___columnWidthRightGrid__REACT_HOT_LOADER__",
    value: function ___columnWidthRightGrid__REACT_HOT_LOADER__() {
      return this.___columnWidthRightGrid__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___cellRendererTopRightGrid__REACT_HOT_LOADER__",
    value: function ___cellRendererTopRightGrid__REACT_HOT_LOADER__() {
      return this.___cellRendererTopRightGrid__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___cellRendererBottomRightGrid__REACT_HOT_LOADER__",
    value: function ___cellRendererBottomRightGrid__REACT_HOT_LOADER__() {
      return this.___cellRendererBottomRightGrid__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___cellRendererBottomLeftGrid__REACT_HOT_LOADER__",
    value: function ___cellRendererBottomLeftGrid__REACT_HOT_LOADER__() {
      return this.___cellRendererBottomLeftGrid__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___bottomRightGridRef__REACT_HOT_LOADER__",
    value: function ___bottomRightGridRef__REACT_HOT_LOADER__() {
      return this.___bottomRightGridRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___bottomLeftGridRef__REACT_HOT_LOADER__",
    value: function ___bottomLeftGridRef__REACT_HOT_LOADER__() {
      return this.___bottomLeftGridRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "forceUpdateGrids",
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }
    /** See Grid#invalidateCellSizeAfterRender */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === void 0 ? 0 : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === void 0 ? 0 : _ref$rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$columnIndex = _ref2.columnIndex,
          columnIndex = _ref2$columnIndex === void 0 ? 0 : _ref2$columnIndex,
          _ref2$rowIndex = _ref2.rowIndex,
          rowIndex = _ref2$rowIndex === void 0 ? 0 : _ref2$rowIndex;

      var _this$props = this.props,
          fixedColumnCount = _this$props.fixedColumnCount,
          fixedRowCount = _this$props.fixedRowCount;
      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);
      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });
      this._leftGridWidth = null;
      this._topGridHeight = null;

      this._maybeCalculateCachedStyles(true);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          scrollLeft = _this$props2.scrollLeft,
          scrollTop = _this$props2.scrollTop;

      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};

        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }

        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }

      this._handleInvalidatedGridSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          onScroll = _this$props3.onScroll,
          onSectionRendered = _this$props3.onSectionRendered,
          onScrollbarPresenceChange = _this$props3.onScrollbarPresenceChange,
          scrollLeftProp = _this$props3.scrollLeft,
          scrollToColumn = _this$props3.scrollToColumn,
          scrollTopProp = _this$props3.scrollTop,
          scrollToRow = _this$props3.scrollToRow,
          rest = _objectWithoutProperties(_this$props3, ["onScroll", "onSectionRendered", "onScrollbarPresenceChange", "scrollLeft", "scrollToColumn", "scrollTop", "scrollToRow"]);

      this._prepareForRender(); // Don't render any of our Grids if there are no cells.
      // This mirrors what Grid does,
      // And prevents us from recording inaccurage measurements when used with CellMeasurer.


      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      } // scrollTop and scrollLeft props are explicitly filtered out and ignored


      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;
      return React.createElement("div", {
        style: this._containerOuterStyle
      }, React.createElement("div", {
        style: this._containerTopStyle
      }, this._renderTopLeftGrid(rest), this._renderTopRightGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollLeft: scrollLeft
      }))), React.createElement("div", {
        style: this._containerBottomStyle
      }, this._renderBottomLeftGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollTop: scrollTop
      })), this._renderBottomRightGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        onSectionRendered: onSectionRendered,
        scrollLeft: scrollLeft,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow,
        scrollTop: scrollTop
      }))));
    }
  }, {
    key: "___bottomLeftGridRef__REACT_HOT_LOADER__",
    value: function ___bottomLeftGridRef__REACT_HOT_LOADER__(ref) {
      this._bottomLeftGrid = ref;
    }
  }, {
    key: "___bottomRightGridRef__REACT_HOT_LOADER__",
    value: function ___bottomRightGridRef__REACT_HOT_LOADER__(ref) {
      this._bottomRightGrid = ref;
    }
  }, {
    key: "___cellRendererBottomLeftGrid__REACT_HOT_LOADER__",
    value: function ___cellRendererBottomLeftGrid__REACT_HOT_LOADER__(_ref3) {
      var rowIndex = _ref3.rowIndex,
          rest = _objectWithoutProperties(_ref3, ["rowIndex"]);

      var _this$props4 = this.props,
          cellRenderer = _this$props4.cellRenderer,
          fixedRowCount = _this$props4.fixedRowCount,
          rowCount = _this$props4.rowCount;

      if (rowIndex === rowCount - fixedRowCount) {
        return React.createElement("div", {
          key: rest.key,
          style: _objectSpread({}, rest.style, {
            height: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread({}, rest, {
          parent: this,
          rowIndex: rowIndex + fixedRowCount
        }));
      }
    }
  }, {
    key: "___cellRendererBottomRightGrid__REACT_HOT_LOADER__",
    value: function ___cellRendererBottomRightGrid__REACT_HOT_LOADER__(_ref4) {
      var columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex,
          rest = _objectWithoutProperties(_ref4, ["columnIndex", "rowIndex"]);

      var _this$props5 = this.props,
          cellRenderer = _this$props5.cellRenderer,
          fixedColumnCount = _this$props5.fixedColumnCount,
          fixedRowCount = _this$props5.fixedRowCount;
      return cellRenderer(_objectSpread({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: this,
        rowIndex: rowIndex + fixedRowCount
      }));
    }
  }, {
    key: "___cellRendererTopRightGrid__REACT_HOT_LOADER__",
    value: function ___cellRendererTopRightGrid__REACT_HOT_LOADER__(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rest = _objectWithoutProperties(_ref5, ["columnIndex"]);

      var _this$props6 = this.props,
          cellRenderer = _this$props6.cellRenderer,
          columnCount = _this$props6.columnCount,
          fixedColumnCount = _this$props6.fixedColumnCount;

      if (columnIndex === columnCount - fixedColumnCount) {
        return React.createElement("div", {
          key: rest.key,
          style: _objectSpread({}, rest.style, {
            width: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread({}, rest, {
          columnIndex: columnIndex + fixedColumnCount,
          parent: this
        }));
      }
    }
  }, {
    key: "___columnWidthRightGrid__REACT_HOT_LOADER__",
    value: function ___columnWidthRightGrid__REACT_HOT_LOADER__(_ref6) {
      var index = _ref6.index;
      var _this$props7 = this.props,
          columnCount = _this$props7.columnCount,
          fixedColumnCount = _this$props7.fixedColumnCount,
          columnWidth = _this$props7.columnWidth;
      var _this$state2 = this.state,
          scrollbarSize = _this$state2.scrollbarSize,
          showHorizontalScrollbar = _this$state2.showHorizontalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) {
        return scrollbarSize;
      }

      return typeof columnWidth === 'function' ? columnWidth({
        index: index + fixedColumnCount
      }) : columnWidth;
    }
  }, {
    key: "_getBottomGridHeight",
    value: function _getBottomGridHeight(props) {
      var height = props.height;

      var topGridHeight = this._getTopGridHeight(props);

      return height - topGridHeight;
    }
  }, {
    key: "_getLeftGridWidth",
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount,
          columnWidth = props.columnWidth;

      if (this._leftGridWidth == null) {
        if (typeof columnWidth === 'function') {
          var leftGridWidth = 0;

          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({
              index: index
            });
          }

          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }

      return this._leftGridWidth;
    }
  }, {
    key: "_getRightGridWidth",
    value: function _getRightGridWidth(props) {
      var width = props.width;

      var leftGridWidth = this._getLeftGridWidth(props);

      return width - leftGridWidth;
    }
  }, {
    key: "_getTopGridHeight",
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight;

      if (this._topGridHeight == null) {
        if (typeof rowHeight === 'function') {
          var topGridHeight = 0;

          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({
              index: index
            });
          }

          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }

      return this._topGridHeight;
    }
  }, {
    key: "_handleInvalidatedGridSize",
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
        this.forceUpdate();
      }
    }
    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */

  }, {
    key: "_maybeCalculateCachedStyles",
    value: function _maybeCalculateCachedStyles(resetAll) {
      var _this$props8 = this.props,
          columnWidth = _this$props8.columnWidth,
          enableFixedColumnScroll = _this$props8.enableFixedColumnScroll,
          enableFixedRowScroll = _this$props8.enableFixedRowScroll,
          height = _this$props8.height,
          fixedColumnCount = _this$props8.fixedColumnCount,
          fixedRowCount = _this$props8.fixedRowCount,
          rowHeight = _this$props8.rowHeight,
          style = _this$props8.style,
          styleBottomLeftGrid = _this$props8.styleBottomLeftGrid,
          styleBottomRightGrid = _this$props8.styleBottomRightGrid,
          styleTopLeftGrid = _this$props8.styleTopLeftGrid,
          styleTopRightGrid = _this$props8.styleTopRightGrid,
          width = _this$props8.width;
      var sizeChange = resetAll || height !== this._lastRenderedHeight || width !== this._lastRenderedWidth;
      var leftSizeChange = resetAll || columnWidth !== this._lastRenderedColumnWidth || fixedColumnCount !== this._lastRenderedFixedColumnCount;
      var topSizeChange = resetAll || fixedRowCount !== this._lastRenderedFixedRowCount || rowHeight !== this._lastRenderedRowHeight;

      if (resetAll || sizeChange || style !== this._lastRenderedStyle) {
        this._containerOuterStyle = _objectSpread({
          height: height,
          overflow: 'visible',
          // Let :focus outline show through
          width: width
        }, style);
      }

      if (resetAll || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(this.props),
          position: 'relative',
          width: width
        };
        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(this.props),
          overflow: 'visible',
          // Let :focus outline show through
          position: 'relative',
          width: width
        };
      }

      if (resetAll || styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid) {
        this._bottomLeftGridStyle = _objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }

      if (resetAll || leftSizeChange || styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid) {
        this._bottomRightGridStyle = _objectSpread({
          left: this._getLeftGridWidth(this.props),
          position: 'absolute'
        }, styleBottomRightGrid);
      }

      if (resetAll || styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) {
        this._topLeftGridStyle = _objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }

      if (resetAll || leftSizeChange || styleTopRightGrid !== this._lastRenderedStyleTopRightGrid) {
        this._topRightGridStyle = _objectSpread({
          left: this._getLeftGridWidth(this.props),
          overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }

      this._lastRenderedColumnWidth = columnWidth;
      this._lastRenderedFixedColumnCount = fixedColumnCount;
      this._lastRenderedFixedRowCount = fixedRowCount;
      this._lastRenderedHeight = height;
      this._lastRenderedRowHeight = rowHeight;
      this._lastRenderedStyle = style;
      this._lastRenderedStyleBottomLeftGrid = styleBottomLeftGrid;
      this._lastRenderedStyleBottomRightGrid = styleBottomRightGrid;
      this._lastRenderedStyleTopLeftGrid = styleTopLeftGrid;
      this._lastRenderedStyleTopRightGrid = styleTopRightGrid;
      this._lastRenderedWidth = width;
    }
  }, {
    key: "_prepareForRender",
    value: function _prepareForRender() {
      if (this._lastRenderedColumnWidth !== this.props.columnWidth || this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount) {
        this._leftGridWidth = null;
      }

      if (this._lastRenderedFixedRowCount !== this.props.fixedRowCount || this._lastRenderedRowHeight !== this.props.rowHeight) {
        this._topGridHeight = null;
      }

      this._maybeCalculateCachedStyles();

      this._lastRenderedColumnWidth = this.props.columnWidth;
      this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
      this._lastRenderedFixedRowCount = this.props.fixedRowCount;
      this._lastRenderedRowHeight = this.props.rowHeight;
    }
  }, {
    key: "___onScroll__REACT_HOT_LOADER__",
    value: function ___onScroll__REACT_HOT_LOADER__(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft,
          scrollTop = scrollInfo.scrollTop;
      this.setState({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
      var onScroll = this.props.onScroll;

      if (onScroll) {
        onScroll(scrollInfo);
      }
    }
  }, {
    key: "___onScrollbarPresenceChange__REACT_HOT_LOADER__",
    value: function ___onScrollbarPresenceChange__REACT_HOT_LOADER__(_ref7) {
      var horizontal = _ref7.horizontal,
          size = _ref7.size,
          vertical = _ref7.vertical;
      var _this$state3 = this.state,
          showHorizontalScrollbar = _this$state3.showHorizontalScrollbar,
          showVerticalScrollbar = _this$state3.showVerticalScrollbar;

      if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
        this.setState({
          scrollbarSize: size,
          showHorizontalScrollbar: horizontal,
          showVerticalScrollbar: vertical
        });
        var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;

        if (typeof onScrollbarPresenceChange === 'function') {
          onScrollbarPresenceChange({
            horizontal: horizontal,
            size: size,
            vertical: vertical
          });
        }
      }
    }
  }, {
    key: "___onScrollLeft__REACT_HOT_LOADER__",
    value: function ___onScrollLeft__REACT_HOT_LOADER__(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;

      this._onScroll({
        scrollLeft: scrollLeft,
        scrollTop: this.state.scrollTop
      });
    }
  }, {
    key: "___onScrollTop__REACT_HOT_LOADER__",
    value: function ___onScrollTop__REACT_HOT_LOADER__(scrollInfo) {
      var scrollTop = scrollInfo.scrollTop;

      this._onScroll({
        scrollTop: scrollTop,
        scrollLeft: this.state.scrollLeft
      });
    }
  }, {
    key: "_renderBottomLeftGrid",
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          hideBottomLeftGridScrollbar = props.hideBottomLeftGridScrollbar;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;

      if (!fixedColumnCount) {
        return null;
      }

      var additionalRowCount = showVerticalScrollbar ? 1 : 0,
          height = this._getBottomGridHeight(props),
          width = this._getLeftGridWidth(props),
          scrollbarSize = this.state.showVerticalScrollbar ? this.state.scrollbarSize : 0,
          gridWidth = hideBottomLeftGridScrollbar ? width + scrollbarSize : width;

      var bottomLeftGrid = React.createElement(Grid, _extends({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        className: this.props.classNameBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: height,
        onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: gridWidth
      }));

      if (hideBottomLeftGridScrollbar) {
        return React.createElement("div", {
          className: "BottomLeftGrid_ScrollWrapper",
          style: _objectSpread({}, this._bottomLeftGridStyle, {
            height: height,
            width: width,
            overflowY: 'hidden'
          })
        }, bottomLeftGrid);
      }

      return bottomLeftGrid;
    }
  }, {
    key: "_renderBottomRightGrid",
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollToColumn = props.scrollToColumn,
          scrollToRow = props.scrollToRow;
      return React.createElement(Grid, _extends({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        className: this.props.classNameBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopLeftGrid",
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount;

      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }

      return React.createElement(Grid, _extends({}, props, {
        className: this.props.classNameTopLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopRightGrid",
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount,
          enableFixedRowScroll = props.enableFixedRowScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          scrollLeft = props.scrollLeft,
          hideTopRightGridScrollbar = props.hideTopRightGridScrollbar;
      var _this$state4 = this.state,
          showHorizontalScrollbar = _this$state4.showHorizontalScrollbar,
          scrollbarSize = _this$state4.scrollbarSize;

      if (!fixedRowCount) {
        return null;
      }

      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0,
          height = this._getTopGridHeight(props),
          width = this._getRightGridWidth(props),
          additionalHeight = showHorizontalScrollbar ? scrollbarSize : 0;

      var gridHeight = height,
          style = this._topRightGridStyle;

      if (hideTopRightGridScrollbar) {
        gridHeight = height + additionalHeight;
        style = _objectSpread({}, this._topRightGridStyle, {
          left: 0
        });
      }

      var topRightGrid = React.createElement(Grid, _extends({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        className: this.props.classNameTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: gridHeight,
        onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: style,
        tabIndex: null,
        width: width
      }));

      if (hideTopRightGridScrollbar) {
        return React.createElement("div", {
          className: "TopRightGrid_ScrollWrapper",
          style: _objectSpread({}, this._topRightGridStyle, {
            height: height,
            width: width,
            overflowX: 'hidden'
          })
        }, topRightGrid);
      }

      return topRightGrid;
    }
  }, {
    key: "___rowHeightBottomGrid__REACT_HOT_LOADER__",
    value: function ___rowHeightBottomGrid__REACT_HOT_LOADER__(_ref8) {
      var index = _ref8.index;
      var _this$props9 = this.props,
          fixedRowCount = _this$props9.fixedRowCount,
          rowCount = _this$props9.rowCount,
          rowHeight = _this$props9.rowHeight;
      var _this$state5 = this.state,
          scrollbarSize = _this$state5.scrollbarSize,
          showVerticalScrollbar = _this$state5.showVerticalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showVerticalScrollbar && index === rowCount - fixedRowCount) {
        return scrollbarSize;
      }

      return typeof rowHeight === 'function' ? rowHeight({
        index: index + fixedRowCount
      }) : rowHeight;
    }
  }, {
    key: "___topLeftGridRef__REACT_HOT_LOADER__",
    value: function ___topLeftGridRef__REACT_HOT_LOADER__(ref) {
      this._topLeftGrid = ref;
    }
  }, {
    key: "___topRightGridRef__REACT_HOT_LOADER__",
    value: function ___topRightGridRef__REACT_HOT_LOADER__(ref) {
      this._topRightGrid = ref;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null && nextProps.scrollLeft >= 0 ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null && nextProps.scrollTop >= 0 ? nextProps.scrollTop : prevState.scrollTop
        };
      }

      return null;
    }
  }]);

  return MultiGrid;
}(React.PureComponent);

MultiGrid.propTypes = {
  classNameBottomLeftGrid: PropTypes.string.isRequired,
  classNameBottomRightGrid: PropTypes.string.isRequired,
  classNameTopLeftGrid: PropTypes.string.isRequired,
  classNameTopRightGrid: PropTypes.string.isRequired,
  enableFixedColumnScroll: PropTypes.bool.isRequired,
  enableFixedRowScroll: PropTypes.bool.isRequired,
  fixedColumnCount: PropTypes.number.isRequired,
  fixedRowCount: PropTypes.number.isRequired,
  onScrollbarPresenceChange: PropTypes.func,
  style: PropTypes.object.isRequired,
  styleBottomLeftGrid: PropTypes.object.isRequired,
  styleBottomRightGrid: PropTypes.object.isRequired,
  styleTopLeftGrid: PropTypes.object.isRequired,
  styleTopRightGrid: PropTypes.object.isRequired,
  hideTopRightGridScrollbar: PropTypes.bool,
  hideBottomLeftGridScrollbar: PropTypes.bool
};
MultiGrid.defaultProps = {
  classNameBottomLeftGrid: '',
  classNameBottomRightGrid: '',
  classNameTopLeftGrid: '',
  classNameTopRightGrid: '',
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {},
  hideTopRightGridScrollbar: false,
  hideBottomLeftGridScrollbar: false
};
polyfill(MultiGrid);
var _default = MultiGrid;
export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SCROLLBAR_SIZE_BUFFER, "SCROLLBAR_SIZE_BUFFER", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/MultiGrid/MultiGrid.js");

  __REACT_HOT_LOADER__.register(MultiGrid, "MultiGrid", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/MultiGrid/MultiGrid.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/MultiGrid/MultiGrid.js");
}();

;