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

var _clsx2 = _interopRequireDefault(require("clsx"));

var _immutable = _interopRequireDefault(require("immutable"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _ContentBox = require("../demo/ContentBox");

var _LabeledInput = require("../demo/LabeledInput");

var _WindowScroller = _interopRequireDefault(require("./WindowScroller"));

var _List = _interopRequireDefault(require("../List"));

var _AutoSizer = _interopRequireDefault(require("../AutoSizer"));

var _WindowScrollerExample = _interopRequireDefault(require("./WindowScroller.example.css"));

var WindowScrollerExample =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(WindowScrollerExample, _React$PureComponent);

  function WindowScrollerExample() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, WindowScrollerExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WindowScrollerExample)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      scrollToIndex: -1,
      showHeaderText: true
    };
    _this._windowScroller = void 0;

    _this._hideHeader = function () {
      var _this2;

      return (_this2 = _this).___hideHeader__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this._rowRenderer = function () {
      var _this3;

      return (_this3 = _this).___rowRenderer__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this._setRef = function () {
      var _this4;

      return (_this4 = _this).___setRef__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this._onCheckboxChange = function () {
      var _this5;

      return (_this5 = _this).___onCheckboxChange__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this._onScrollToRowChange = function () {
      var _this6;

      return (_this6 = _this).___onScrollToRowChange__REACT_HOT_LOADER__.apply(_this6, arguments);
    };

    return _this;
  }

  (0, _createClass2.default)(WindowScrollerExample, [{
    key: "___onScrollToRowChange__REACT_HOT_LOADER__",
    value: function ___onScrollToRowChange__REACT_HOT_LOADER__() {
      return this.___onScrollToRowChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onCheckboxChange__REACT_HOT_LOADER__",
    value: function ___onCheckboxChange__REACT_HOT_LOADER__() {
      return this.___onCheckboxChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___setRef__REACT_HOT_LOADER__",
    value: function ___setRef__REACT_HOT_LOADER__() {
      return this.___setRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___rowRenderer__REACT_HOT_LOADER__",
    value: function ___rowRenderer__REACT_HOT_LOADER__() {
      return this.___rowRenderer__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___hideHeader__REACT_HOT_LOADER__",
    value: function ___hideHeader__REACT_HOT_LOADER__() {
      return this.___hideHeader__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$context = this.context,
          customElement = _this$context.customElement,
          isScrollingCustomElement = _this$context.isScrollingCustomElement,
          list = _this$context.list;
      var _this$state = this.state,
          scrollToIndex = _this$state.scrollToIndex,
          showHeaderText = _this$state.showHeaderText;
      return React.createElement(_ContentBox.ContentBox, null, React.createElement(_ContentBox.ContentBoxHeader, {
        text: "WindowScroller",
        sourceLink: "https://github.com/bvaughn/react-virtualized/blob/master/source/WindowScroller/WindowScroller.example.js",
        docsLink: "https://github.com/bvaughn/react-virtualized/blob/master/docs/WindowScroller.md"
      }), showHeaderText && React.createElement(_ContentBox.ContentBoxParagraph, null, "This component decorates ", React.createElement("code", null, "List"), ", ", React.createElement("code", null, "Table"), ", or any other component and manages the window scroll to scroll through the list"), showHeaderText && React.createElement(_ContentBox.ContentBoxParagraph, null, React.createElement("button", {
        onClick: this._hideHeader
      }, "Hide header text")), React.createElement(_ContentBox.ContentBoxParagraph, null, React.createElement("label", {
        className: _WindowScrollerExample.default.checkboxLabel
      }, React.createElement("input", {
        "aria-label": "Use custom element for scrolling",
        className: _WindowScrollerExample.default.checkbox,
        type: "checkbox",
        checked: isScrollingCustomElement,
        onChange: this._onCheckboxChange
      }), "Use custom element for scrolling")), React.createElement(_LabeledInput.InputRow, null, React.createElement(_LabeledInput.LabeledInput, {
        label: "Scroll to",
        name: "onScrollToRow",
        placeholder: "Index...",
        onChange: this._onScrollToRowChange,
        value: scrollToIndex || ''
      })), React.createElement(_WindowScroller.default, {
        ref: this._setRef,
        scrollElement: isScrollingCustomElement ? customElement : window
      }, function (_ref) {
        var height = _ref.height,
            isScrolling = _ref.isScrolling,
            registerChild = _ref.registerChild,
            onChildScroll = _ref.onChildScroll,
            scrollTop = _ref.scrollTop;
        return React.createElement("div", {
          className: _WindowScrollerExample.default.WindowScrollerWrapper
        }, React.createElement(_AutoSizer.default, {
          disableHeight: true
        }, function (_ref2) {
          var width = _ref2.width;
          return React.createElement("div", {
            ref: registerChild
          }, React.createElement(_List.default, {
            ref: function ref(el) {
              window.listEl = el;
            },
            autoHeight: true,
            className: _WindowScrollerExample.default.List,
            height: height,
            isScrolling: isScrolling,
            onScroll: onChildScroll,
            overscanRowCount: 2,
            rowCount: list.size,
            rowHeight: 30,
            rowRenderer: _this7._rowRenderer,
            scrollToIndex: scrollToIndex,
            scrollTop: scrollTop,
            width: width
          }));
        }));
      }));
    }
  }, {
    key: "___hideHeader__REACT_HOT_LOADER__",
    value: function ___hideHeader__REACT_HOT_LOADER__() {
      var _this8 = this;

      var showHeaderText = this.state.showHeaderText;
      this.setState({
        showHeaderText: !showHeaderText
      }, function () {
        if (_this8._windowScroller) {
          _this8._windowScroller.updatePosition();
        }
      });
    }
  }, {
    key: "___rowRenderer__REACT_HOT_LOADER__",
    value: function ___rowRenderer__REACT_HOT_LOADER__(_ref3) {
      var _clsx;

      var index = _ref3.index,
          isScrolling = _ref3.isScrolling,
          isVisible = _ref3.isVisible,
          key = _ref3.key,
          style = _ref3.style;
      var list = this.context.list;
      var row = list.get(index);
      var className = (0, _clsx2.default)(_WindowScrollerExample.default.row, (_clsx = {}, (0, _defineProperty2.default)(_clsx, _WindowScrollerExample.default.rowScrolling, isScrolling), (0, _defineProperty2.default)(_clsx, "isVisible", isVisible), _clsx));
      return React.createElement("div", {
        key: key,
        className: className,
        style: style
      }, row.name);
    }
  }, {
    key: "___setRef__REACT_HOT_LOADER__",
    value: function ___setRef__REACT_HOT_LOADER__(windowScroller) {
      this._windowScroller = windowScroller;
    }
  }, {
    key: "___onCheckboxChange__REACT_HOT_LOADER__",
    value: function ___onCheckboxChange__REACT_HOT_LOADER__(event) {
      this.context.setScrollingCustomElement(event.target.checked);
    }
  }, {
    key: "___onScrollToRowChange__REACT_HOT_LOADER__",
    value: function ___onScrollToRowChange__REACT_HOT_LOADER__(event) {
      var _this9 = this;

      var list = this.context.list;
      var scrollToIndex = Math.min(list.size - 1, parseInt(event.target.value, 10));

      if (isNaN(scrollToIndex)) {
        scrollToIndex = undefined;
      }

      setTimeout(function () {
        _this9.setState({
          scrollToIndex: scrollToIndex
        });
      }, 0);
    }
  }]);
  return WindowScrollerExample;
}(React.PureComponent);

exports.default = WindowScrollerExample;
WindowScrollerExample.contextTypes = {
  customElement: _propTypes.default.any,
  isScrollingCustomElement: _propTypes.default.bool.isRequired,
  list: _propTypes.default.instanceOf(_immutable.default.List).isRequired,
  setScrollingCustomElement: _propTypes.default.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WindowScrollerExample, "WindowScrollerExample", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/WindowScroller.example.js");
}();

;