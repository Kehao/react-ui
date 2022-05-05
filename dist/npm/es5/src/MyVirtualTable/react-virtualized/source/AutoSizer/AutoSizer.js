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

var React = _interopRequireWildcard(require("react"));

var _detectElementResize = _interopRequireDefault(require("../vendor/detectElementResize"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AutoSizer =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AutoSizer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AutoSizer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    };
    _this._parentNode = void 0;
    _this._autoSizer = void 0;
    _this._detectElementResize = void 0;

    _this._onResize = function () {
      var _this2;

      return (_this2 = _this).___onResize__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this._setRef = function () {
      var _this3;

      return (_this3 = _this).___setRef__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    return _this;
  }

  (0, _createClass2.default)(AutoSizer, [{
    key: "___setRef__REACT_HOT_LOADER__",
    value: function ___setRef__REACT_HOT_LOADER__() {
      return this.___setRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___onResize__REACT_HOT_LOADER__",
    value: function ___onResize__REACT_HOT_LOADER__() {
      return this.___onResize__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode; // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41

        this._detectElementResize = (0, _detectElementResize.default)(nonce);

        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          style = _this$props.style;
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width; // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = {
        overflow: 'visible'
      };
      var childParams = {};

      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width;
      }
      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */


      return React.createElement("div", {
        className: className,
        ref: this._setRef,
        style: _objectSpread({}, outerStyle, {}, style)
      }, children(childParams));
    }
  }, {
    key: "___onResize__REACT_HOT_LOADER__",
    value: function ___onResize__REACT_HOT_LOADER__() {
      var _this$props2 = this.props,
          disableHeight = _this$props2.disableHeight,
          disableWidth = _this$props2.disableWidth,
          onResize = _this$props2.onResize;

      if (this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.
        var height = this._parentNode.offsetHeight || 0;
        var width = this._parentNode.offsetWidth || 0;
        var style = window.getComputedStyle(this._parentNode) || {};
        var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(style.paddingRight, 10) || 0;
        var paddingTop = parseInt(style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
        var newHeight = height - paddingTop - paddingBottom;
        var newWidth = width - paddingLeft - paddingRight;

        if (!disableHeight && this.state.height !== newHeight || !disableWidth && this.state.width !== newWidth) {
          this.setState({
            height: height - paddingTop - paddingBottom,
            width: width - paddingLeft - paddingRight
          });
          onResize({
            height: height,
            width: width
          });
        }
      }
    }
  }, {
    key: "___setRef__REACT_HOT_LOADER__",
    value: function ___setRef__REACT_HOT_LOADER__(autoSizer) {
      this._autoSizer = autoSizer;
    }
  }]);
  return AutoSizer;
}(React.PureComponent);

exports.default = AutoSizer;
AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AutoSizer, "AutoSizer", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/AutoSizer/AutoSizer.js");
}();

;