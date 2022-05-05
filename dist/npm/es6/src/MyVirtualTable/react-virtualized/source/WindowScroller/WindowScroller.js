import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { registerScrollListener, unregisterScrollListener } from './utils/onScroll';
import { getDimensions, getPositionOffset, getScrollOffset } from './utils/dimensions';
import createDetectElementResize from '../vendor/detectElementResize';

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
export var IS_SCROLLING_TIMEOUT = 150;

var getWindow = function getWindow() {
  return typeof window !== 'undefined' ? window : undefined;
};

var WindowScroller =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(WindowScroller, _React$PureComponent);

  function WindowScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WindowScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WindowScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this._window = getWindow();
    _this._isMounted = false;
    _this._positionFromTop = 0;
    _this._positionFromLeft = 0;
    _this._detectElementResize = void 0;
    _this._child = void 0;
    _this.state = _objectSpread({}, getDimensions(_this.props.scrollElement, _this.props), {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    });

    _this._registerChild = function () {
      var _this2;

      return (_this2 = _this).___registerChild__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this._onChildScroll = function () {
      var _this3;

      return (_this3 = _this).___onChildScroll__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this._registerResizeListener = function () {
      var _this4;

      return (_this4 = _this).___registerResizeListener__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this._unregisterResizeListener = function () {
      var _this5;

      return (_this5 = _this).___unregisterResizeListener__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this._onResize = function () {
      var _this6;

      return (_this6 = _this).___onResize__REACT_HOT_LOADER__.apply(_this6, arguments);
    };

    _this.__handleWindowScrollEvent = function () {
      var _this7;

      return (_this7 = _this).____handleWindowScrollEvent__REACT_HOT_LOADER__.apply(_this7, arguments);
    };

    _this.__resetIsScrolling = function () {
      var _this8;

      return (_this8 = _this).____resetIsScrolling__REACT_HOT_LOADER__.apply(_this8, arguments);
    };

    return _this;
  }

  _createClass(WindowScroller, [{
    key: "____resetIsScrolling__REACT_HOT_LOADER__",
    value: function ____resetIsScrolling__REACT_HOT_LOADER__() {
      return this.____resetIsScrolling__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "____handleWindowScrollEvent__REACT_HOT_LOADER__",
    value: function ____handleWindowScrollEvent__REACT_HOT_LOADER__() {
      return this.____handleWindowScrollEvent__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onResize__REACT_HOT_LOADER__",
    value: function ___onResize__REACT_HOT_LOADER__() {
      return this.___onResize__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___unregisterResizeListener__REACT_HOT_LOADER__",
    value: function ___unregisterResizeListener__REACT_HOT_LOADER__() {
      return this.___unregisterResizeListener__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___registerResizeListener__REACT_HOT_LOADER__",
    value: function ___registerResizeListener__REACT_HOT_LOADER__() {
      return this.___registerResizeListener__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onChildScroll__REACT_HOT_LOADER__",
    value: function ___onChildScroll__REACT_HOT_LOADER__() {
      return this.___onChildScroll__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___registerChild__REACT_HOT_LOADER__",
    value: function ___registerChild__REACT_HOT_LOADER__() {
      return this.___registerChild__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollElement;
      var onResize = this.props.onResize;
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width;
      var thisNode = this._child || ReactDOM.findDOMNode(this);

      if (thisNode instanceof Element && scrollElement) {
        var offset = getPositionOffset(thisNode, scrollElement);
        this._positionFromTop = offset.top;
        this._positionFromLeft = offset.left;
      }

      var dimensions = getDimensions(scrollElement, this.props);

      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement;
      this._detectElementResize = createDetectElementResize();
      this.updatePosition(scrollElement);

      if (scrollElement) {
        registerScrollListener(this, scrollElement);

        this._registerResizeListener(scrollElement);
      }

      this._isMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var scrollElement = this.props.scrollElement;
      var prevScrollElement = prevProps.scrollElement;

      if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
        this.updatePosition(scrollElement);
        unregisterScrollListener(this, prevScrollElement);
        registerScrollListener(this, scrollElement);

        this._unregisterResizeListener(prevScrollElement);

        this._registerResizeListener(scrollElement);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var scrollElement = this.props.scrollElement;

      if (scrollElement) {
        unregisterScrollListener(this, scrollElement);

        this._unregisterResizeListener(scrollElement);
      }

      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state2 = this.state,
          isScrolling = _this$state2.isScrolling,
          scrollTop = _this$state2.scrollTop,
          scrollLeft = _this$state2.scrollLeft,
          height = _this$state2.height,
          width = _this$state2.width;
      return children({
        onChildScroll: this._onChildScroll,
        registerChild: this._registerChild,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }
  }, {
    key: "___registerChild__REACT_HOT_LOADER__",
    value: function ___registerChild__REACT_HOT_LOADER__(element) {
      if (element && !(element instanceof Element)) {
        console.warn('WindowScroller registerChild expects to be passed Element or null');
      }

      this._child = element;
      this.updatePosition();
    }
  }, {
    key: "___onChildScroll__REACT_HOT_LOADER__",
    value: function ___onChildScroll__REACT_HOT_LOADER__(_ref) {
      var scrollTop = _ref.scrollTop;

      if (this.state.scrollTop === scrollTop) {
        return;
      }

      var scrollElement = this.props.scrollElement;

      if (scrollElement) {
        if (typeof scrollElement.scrollTo === 'function') {
          scrollElement.scrollTo(0, scrollTop + this._positionFromTop);
        } else {
          scrollElement.scrollTop = scrollTop + this._positionFromTop;
        }
      }
    }
  }, {
    key: "___registerResizeListener__REACT_HOT_LOADER__",
    value: function ___registerResizeListener__REACT_HOT_LOADER__(element) {
      if (element === window) {
        window.addEventListener('resize', this._onResize, false);
      } else {
        this._detectElementResize.addResizeListener(element, this._onResize);
      }
    }
  }, {
    key: "___unregisterResizeListener__REACT_HOT_LOADER__",
    value: function ___unregisterResizeListener__REACT_HOT_LOADER__(element) {
      if (element === window) {
        window.removeEventListener('resize', this._onResize, false);
      } else if (element) {
        this._detectElementResize.removeResizeListener(element, this._onResize);
      }
    }
  }, {
    key: "___onResize__REACT_HOT_LOADER__",
    value: function ___onResize__REACT_HOT_LOADER__() {
      this.updatePosition();
    }
  }, {
    key: "____handleWindowScrollEvent__REACT_HOT_LOADER__",
    value: function ____handleWindowScrollEvent__REACT_HOT_LOADER__() {
      if (!this._isMounted) {
        return;
      }

      var onScroll = this.props.onScroll;
      var scrollElement = this.props.scrollElement;

      if (scrollElement) {
        var scrollOffset = getScrollOffset(scrollElement);
        var scrollLeft = Math.max(0, scrollOffset.left - this._positionFromLeft);
        var scrollTop = Math.max(0, scrollOffset.top - this._positionFromTop);
        this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
        onScroll({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      }
    }
  }, {
    key: "____resetIsScrolling__REACT_HOT_LOADER__",
    value: function ____resetIsScrolling__REACT_HOT_LOADER__() {
      this.setState({
        isScrolling: false
      });
    }
  }]);

  return WindowScroller;
}(React.PureComponent);

WindowScroller.defaultProps = {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT,
  scrollElement: getWindow(),
  serverHeight: 0,
  serverWidth: 0
};
export { WindowScroller as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(IS_SCROLLING_TIMEOUT, "IS_SCROLLING_TIMEOUT", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/WindowScroller.js");

  __REACT_HOT_LOADER__.register(getWindow, "getWindow", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/WindowScroller.js");

  __REACT_HOT_LOADER__.register(WindowScroller, "WindowScroller", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/WindowScroller.js");
}();

;