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

var _react = _interopRequireWildcard(require("react"));

var ANIMATION_DURATION = 300;

var CollapseTransition =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CollapseTransition, _Component);

  function CollapseTransition() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CollapseTransition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CollapseTransition)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.props = void 0;
    _this.selfRef = void 0;
    _this.leaveTimer = void 0;
    _this.enterTimer = void 0;
    return _this;
  }

  (0, _createClass2.default)(CollapseTransition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.beforeEnter();

      if (this.props.isShow) {
        this.enter();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.beforeLeave();
      this.leave();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isShow !== nextProps.isShow) {
        this.triggerChange(nextProps.isShow);
      }
    }
  }, {
    key: "triggerChange",
    value: function triggerChange(isShow) {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);

      if (isShow) {
        this.beforeEnter();
        this.enter();
      } else {
        this.beforeLeave();
        this.leave();
      }
    }
  }, {
    key: "beforeEnter",
    value: function beforeEnter() {
      var el = this.selfRef; // prepare

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.height = '0';
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  }, {
    key: "enter",
    value: function enter() {
      var _this2 = this;

      var el = this.selfRef; // start

      el.style.display = 'block';

      if (el.scrollHeight !== 0) {
        el.style.height = "".concat(el.scrollHeight, "px");
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }

      el.style.overflow = 'hidden';
      this.enterTimer = setTimeout(function () {
        return _this2.afterEnter();
      }, ANIMATION_DURATION);
    }
  }, {
    key: "afterEnter",
    value: function afterEnter() {
      var el = this.selfRef;
      el.style.display = 'block';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave() {
      var el = this.selfRef;
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.display = 'block';

      if (el.scrollHeight !== 0) {
        el.style.height = "".concat(el.scrollHeight, "px");
      }

      el.style.overflow = 'hidden';
    }
  }, {
    key: "leave",
    value: function leave() {
      var _this3 = this;

      var el = this.selfRef;

      if (el.scrollHeight !== 0) {
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }

      this.leaveTimer = setTimeout(function () {
        return _this3.afterLeave();
      }, ANIMATION_DURATION);
    }
  }, {
    key: "afterLeave",
    value: function afterLeave() {
      var el = this.selfRef;

      if (!el) {
        return;
      }

      el.style.display = 'none';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react.default.createElement("div", {
        className: "collapse-transition",
        style: {
          overflow: 'hidden'
        },
        ref: function ref(e) {
          return _this4.selfRef = e;
        }
      }, this.props.children);
    }
  }]);
  return CollapseTransition;
}(_react.Component);

exports.default = CollapseTransition;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ANIMATION_DURATION, "ANIMATION_DURATION", "/Users/qiu/biosan/BiosanUi/libs/collapse/index.jsx");

  __REACT_HOT_LOADER__.register(CollapseTransition, "CollapseTransition", "/Users/qiu/biosan/BiosanUi/libs/collapse/index.jsx");
}();

;