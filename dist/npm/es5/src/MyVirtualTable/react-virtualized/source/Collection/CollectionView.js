"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _createCallbackMemoizer = _interopRequireDefault(require("../utils/createCallbackMemoizer"));

var _scrollbarSize = _interopRequireDefault(require("dom-helpers/util/scrollbarSize"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// @TODO Merge Collection and CollectionView

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};
/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(CollectionView, _React$PureComponent);

  // Invokes callbacks only when their values have changed.
  function CollectionView() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CollectionView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CollectionView)).call.apply(_getPrototypeOf2, [this].concat(args))); // If this component is being rendered server-side, getScrollbarSize() will return undefined.
    // We handle this case in componentDidMount()

    _this.state = {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };
    _this._calculateSizeAndPositionDataOnNextUpdate = false;
    _this._onSectionRenderedMemoizer = (0, _createCallbackMemoizer.default)();
    _this._onScrollMemoizer = (0, _createCallbackMemoizer.default)(false);

    _this._invokeOnSectionRenderedHelper = function () {
      var _this2;

      return (_this2 = _this).___invokeOnSectionRenderedHelper__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this._setScrollingContainerRef = function () {
      var _this3;

      return (_this3 = _this).___setScrollingContainerRef__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this._updateScrollPositionForScrollToCell = function () {
      var _this4;

      return (_this4 = _this).___updateScrollPositionForScrollToCell__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this._onScroll = function () {
      var _this5;

      return (_this5 = _this).___onScroll__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this._scrollbarSize = (0, _scrollbarSize.default)();

    if (_this._scrollbarSize === undefined) {
      _this._scrollbarSizeMeasured = false;
      _this._scrollbarSize = 0;
    } else {
      _this._scrollbarSizeMeasured = true;
    }

    return _this;
  }
  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */


  (0, _createClass2.default)(CollectionView, [{
    key: "___onScroll__REACT_HOT_LOADER__",
    value: function ___onScroll__REACT_HOT_LOADER__() {
      return this.___onScroll__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___updateScrollPositionForScrollToCell__REACT_HOT_LOADER__",
    value: function ___updateScrollPositionForScrollToCell__REACT_HOT_LOADER__() {
      return this.___updateScrollPositionForScrollToCell__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___setScrollingContainerRef__REACT_HOT_LOADER__",
    value: function ___setScrollingContainerRef__REACT_HOT_LOADER__() {
      return this.___setScrollingContainerRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___invokeOnSectionRenderedHelper__REACT_HOT_LOADER__",
    value: function ___invokeOnSectionRenderedHelper__REACT_HOT_LOADER__() {
      return this.___invokeOnSectionRenderedHelper__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }
    /* ---------------------------- Component lifecycle methods ---------------------------- */

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          cellLayoutManager = _this$props.cellLayoutManager,
          scrollLeft = _this$props.scrollLeft,
          scrollToCell = _this$props.scrollToCell,
          scrollTop = _this$props.scrollTop; // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = (0, _scrollbarSize.default)();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      } // Update onSectionRendered callback.


      this._invokeOnSectionRenderedHelper();

      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge.height,
          totalWidth = _cellLayoutManager$ge.width; // Initialize onScroll callback.


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          height = _this$props2.height,
          scrollToAlignment = _this$props2.scrollToAlignment,
          scrollToCell = _this$props2.scrollToCell,
          width = _this$props2.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollPositionChangeReason = _this$state.scrollPositionChangeReason,
          scrollTop = _this$state.scrollTop; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Update scroll offsets if the current :scrollToCell values requires it


      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      } // Update onRowsRendered callback if start/stop indices have changed


      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          autoHeight = _this$props3.autoHeight,
          cellCount = _this$props3.cellCount,
          cellLayoutManager = _this$props3.cellLayoutManager,
          className = _this$props3.className,
          height = _this$props3.height,
          horizontalOverscanSize = _this$props3.horizontalOverscanSize,
          id = _this$props3.id,
          noContentRenderer = _this$props3.noContentRenderer,
          style = _this$props3.style,
          verticalOverscanSize = _this$props3.verticalOverscanSize,
          width = _this$props3.width;
      var _this$state2 = this.state,
          isScrolling = _this$state2.isScrolling,
          scrollLeft = _this$state2.scrollLeft,
          scrollTop = _this$state2.scrollTop; // Memoization reset

      if (this._lastRenderedCellCount !== cellCount || this._lastRenderedCellLayoutManager !== cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        this._lastRenderedCellCount = cellCount;
        this._lastRenderedCellLayoutManager = cellLayoutManager;
        this._calculateSizeAndPositionDataOnNextUpdate = false;
        cellLayoutManager.calculateSizeAndPositionData();
      }

      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge2.height,
          totalWidth = _cellLayoutManager$ge2.width; // Safely expand the rendered area by the specified overscan amount


      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);
      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];
      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      }; // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0; // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23

      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      return React.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props['aria-label'],
        className: (0, _clsx.default)('ReactVirtualized__Collection', className),
        id: id,
        onScroll: this._onScroll,
        role: "grid",
        style: _objectSpread({}, collectionStyle, {}, style),
        tabIndex: 0
      }, cellCount > 0 && React.createElement("div", {
        className: "ReactVirtualized__Collection__innerScrollContainer",
        style: {
          height: totalHeight,
          maxHeight: totalHeight,
          maxWidth: totalWidth,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          width: totalWidth
        }
      }, childrenToDisplay), cellCount === 0 && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: "_enablePointerEventsAfterDelay",
    value: function _enablePointerEventsAfterDelay() {
      var _this6 = this;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this6.props.isScrollingChange;
        isScrollingChange(false);
        _this6._disablePointerEventsTimeoutId = null;

        _this6.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: "___invokeOnSectionRenderedHelper__REACT_HOT_LOADER__",
    value: function ___invokeOnSectionRenderedHelper__REACT_HOT_LOADER__() {
      var _this$props4 = this.props,
          cellLayoutManager = _this$props4.cellLayoutManager,
          onSectionRendered = _this$props4.onSectionRendered;

      this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref) {
      var _this7 = this;

      var scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          totalHeight = _ref.totalHeight,
          totalWidth = _ref.totalWidth;

      this._onScrollMemoizer({
        callback: function callback(_ref2) {
          var scrollLeft = _ref2.scrollLeft,
              scrollTop = _ref2.scrollTop;
          var _this7$props = _this7.props,
              height = _this7$props.height,
              onScroll = _this7$props.onScroll,
              width = _this7$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "___setScrollingContainerRef__REACT_HOT_LOADER__",
    value: function ___setScrollingContainerRef__REACT_HOT_LOADER__(ref) {
      this._scrollingContainer = ref;
    }
  }, {
    key: "_setScrollPosition",
    value: function _setScrollPosition(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: "___updateScrollPositionForScrollToCell__REACT_HOT_LOADER__",
    value: function ___updateScrollPositionForScrollToCell__REACT_HOT_LOADER__() {
      var _this$props5 = this.props,
          cellLayoutManager = _this$props5.cellLayoutManager,
          height = _this$props5.height,
          scrollToAlignment = _this$props5.scrollToAlignment,
          scrollToCell = _this$props5.scrollToCell,
          width = _this$props5.width;
      var _this$state3 = this.state,
          scrollLeft = _this$state3.scrollLeft,
          scrollTop = _this$state3.scrollTop;

      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });

        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          this._setScrollPosition(scrollPosition);
        }
      }
    }
  }, {
    key: "___onScroll__REACT_HOT_LOADER__",
    value: function ___onScroll__REACT_HOT_LOADER__(event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== this._scrollingContainer) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      this._enablePointerEventsAfterDelay(); // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.


      var _this$props6 = this.props,
          cellLayoutManager = _this$props6.cellLayoutManager,
          height = _this$props6.height,
          isScrollingChange = _this$props6.isScrollingChange,
          width = _this$props6.width;
      var scrollbarSize = this._scrollbarSize;

      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge3.height,
          totalWidth = _cellLayoutManager$ge3.width;

      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop)); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED; // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)

        if (!this.state.isScrolling) {
          isScrollingChange(true);
        }

        this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.cellCount === 0 && (prevState.scrollLeft !== 0 || prevState.scrollTop !== 0)) {
        return {
          scrollLeft: 0,
          scrollTop: 0
        };
      } else if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null ? nextProps.scrollTop : prevState.scrollTop
        };
      }

      return null;
    }
  }]);
  return CollectionView;
}(React.PureComponent);

CollectionView.propTypes = {
  'aria-label': _propTypes.default.string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: _propTypes.default.bool,

  /**
   * Number of cells in collection.
   */
  cellCount: _propTypes.default.number.isRequired,

  /**
   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
   */
  cellLayoutManager: _propTypes.default.object.isRequired,

  /**
   * Optional custom CSS class name to attach to root Collection element.
   */
  className: _propTypes.default.string,

  /**
   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
   */
  height: _propTypes.default.number.isRequired,

  /**
   * Optional custom id to attach to root Collection element.
   */
  id: _propTypes.default.string,

  /**
   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  horizontalOverscanSize: _propTypes.default.number.isRequired,
  isScrollingChange: _propTypes.default.func,

  /**
   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
   */
  noContentRenderer: _propTypes.default.func.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */
  onScroll: _propTypes.default.func.isRequired,

  /**
   * Callback invoked with information about the section of the Collection that was just rendered.
   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
   */
  onSectionRendered: _propTypes.default.func.isRequired,

  /**
   * Horizontal offset.
   */
  scrollLeft: _propTypes.default.number,

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: _propTypes.default.oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /**
   * Cell index to ensure visible (by forcefully scrolling if necessary).
   */
  scrollToCell: _propTypes.default.number.isRequired,

  /**
   * Vertical offset.
   */
  scrollTop: _propTypes.default.number,

  /**
   * Optional custom inline style to attach to root Collection element.
   */
  style: _propTypes.default.object,

  /**
   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  verticalOverscanSize: _propTypes.default.number.isRequired,

  /**
   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
   */
  width: _propTypes.default.number.isRequired
};
CollectionView.defaultProps = {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
};
(0, _reactLifecyclesCompat.polyfill)(CollectionView);
var _default = CollectionView;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(IS_SCROLLING_TIMEOUT, "IS_SCROLLING_TIMEOUT", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Collection/CollectionView.js");

  __REACT_HOT_LOADER__.register(SCROLL_POSITION_CHANGE_REASONS, "SCROLL_POSITION_CHANGE_REASONS", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Collection/CollectionView.js");

  __REACT_HOT_LOADER__.register(CollectionView, "CollectionView", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Collection/CollectionView.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Collection/CollectionView.js");
}();

;