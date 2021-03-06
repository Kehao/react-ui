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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _raf = _interopRequireDefault(require("raf"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var Transition =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Transition, _Component);

  function Transition(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Transition);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Transition).call(this, props));
    var children = props.children;
    _this.state = {
      children: children && _this.enhanceChildren(children)
    };
    _this.didEnter = _this.didEnter.bind((0, _assertThisInitialized2.default)(_this));
    _this.didLeave = _this.didLeave.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Transition, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var children = _react.default.isValidElement(this.props.children) && _react.default.Children.only(this.props.children);

      var nextChildren = _react.default.isValidElement(nextProps.children) && _react.default.Children.only(nextProps.children);

      if (!nextProps.name) {
        this.setState({
          children: nextChildren
        });
        return;
      }

      if (this.isViewComponent(nextChildren)) {
        this.setState({
          children: this.enhanceChildren(nextChildren, {
            show: children ? children.props.show : true
          })
        });
      } else if (nextChildren) {
        this.setState({
          children: this.enhanceChildren(nextChildren)
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps) {
      if (!this.props.name) return;

      var children = _react.default.isValidElement(this.props.children) && _react.default.Children.only(this.props.children);

      var preChildren = _react.default.isValidElement(preProps.children) && _react.default.Children.only(preProps.children);

      if (this.isViewComponent(children)) {
        if ((!preChildren || !preChildren.props.show) && children.props.show) {
          this.toggleVisible();
        } else if (preChildren && preChildren.props.show && !children.props.show) {
          this.toggleHidden();
        }
      } else if (!preChildren && children) {
        this.toggleVisible();
      } else if (preChildren && !children) {
        this.toggleHidden();
      }
    }
  }, {
    key: "enhanceChildren",
    value: function enhanceChildren(children, props) {
      var _this2 = this;

      return _react.default.cloneElement(children, Object.assign({
        ref: function ref(el) {
          _this2.el = el;
        }
      }, props));
    }
  }, {
    key: "isViewComponent",
    value: function isViewComponent(element) {
      return element && element.type._typeName === 'View';
    }
    /* css animation fix when animation applyied to .{action} instanceof .{action}-active */

  }, {
    key: "animateElement",
    value: function animateElement(element, action, active, fn) {
      element.classList.add(active);
      var styles = getComputedStyle(element);
      var duration = parseFloat(styles.animationDuration) || parseFloat(styles.transitionDuration);
      element.classList.add(action);

      if (duration === 0) {
        var _styles = getComputedStyle(element);

        var _duration = parseFloat(_styles.animationDuration) || parseFloat(_styles.transitionDuration);

        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          fn();
        }, _duration * 1000);
      }

      element.classList.remove(action, active);
    }
  }, {
    key: "didEnter",
    value: function didEnter(e) {
      var childDOM = _reactDom.default.findDOMNode(this.el);

      if (!e || e.target !== childDOM) return;
      var onAfterEnter = this.props.onAfterEnter;
      var _this$transitionClass = this.transitionClass,
          enterActive = _this$transitionClass.enterActive,
          enterTo = _this$transitionClass.enterTo;
      childDOM.classList.remove(enterActive, enterTo);
      childDOM.removeEventListener('transitionend', this.didEnter);
      childDOM.removeEventListener('animationend', this.didEnter);
      onAfterEnter && onAfterEnter();
    }
  }, {
    key: "didLeave",
    value: function didLeave(e) {
      var _this3 = this;

      var childDOM = _reactDom.default.findDOMNode(this.el);

      if (!e || e.target !== childDOM) return;
      var _this$props = this.props,
          onAfterLeave = _this$props.onAfterLeave,
          children = _this$props.children;
      var _this$transitionClass2 = this.transitionClass,
          leaveActive = _this$transitionClass2.leaveActive,
          leaveTo = _this$transitionClass2.leaveTo;
      new Promise(function (resolve) {
        if (_this3.isViewComponent(children)) {
          childDOM.removeEventListener('transitionend', _this3.didLeave);
          childDOM.removeEventListener('animationend', _this3.didLeave);
          (0, _raf.default)(function () {
            childDOM.style.display = 'none';
            childDOM.classList.remove(leaveActive, leaveTo);
            (0, _raf.default)(resolve);
          });
        } else {
          _this3.setState({
            children: null
          }, resolve);
        }
      }).then(function () {
        onAfterLeave && onAfterLeave();
      });
    }
  }, {
    key: "toggleVisible",
    value: function toggleVisible() {
      var _this4 = this;

      var onEnter = this.props.onEnter;
      var _this$transitionClass3 = this.transitionClass,
          enter = _this$transitionClass3.enter,
          enterActive = _this$transitionClass3.enterActive,
          enterTo = _this$transitionClass3.enterTo,
          leaveActive = _this$transitionClass3.leaveActive,
          leaveTo = _this$transitionClass3.leaveTo;

      var childDOM = _reactDom.default.findDOMNode(this.el);

      childDOM.addEventListener('transitionend', this.didEnter);
      childDOM.addEventListener('animationend', this.didEnter); // this.animateElement(childDOM, enter, enterActive, this.didEnter);

      (0, _raf.default)(function () {
        // when hidden transition not end
        if (childDOM.classList.contains(leaveActive)) {
          childDOM.classList.remove(leaveActive, leaveTo);
          childDOM.removeEventListener('transitionend', _this4.didLeave);
          childDOM.removeEventListener('animationend', _this4.didLeave);
        }

        childDOM.style.display = '';
        childDOM.classList.add(enter, enterActive);
        onEnter && onEnter();
        (0, _raf.default)(function () {
          childDOM.classList.remove(enter);
          childDOM.classList.add(enterTo);
        });
      });
    }
  }, {
    key: "toggleHidden",
    value: function toggleHidden() {
      var _this5 = this;

      var onLeave = this.props.onLeave;
      var _this$transitionClass4 = this.transitionClass,
          leave = _this$transitionClass4.leave,
          leaveActive = _this$transitionClass4.leaveActive,
          leaveTo = _this$transitionClass4.leaveTo,
          enterActive = _this$transitionClass4.enterActive,
          enterTo = _this$transitionClass4.enterTo;

      var childDOM = _reactDom.default.findDOMNode(this.el);

      childDOM.addEventListener('transitionend', this.didLeave);
      childDOM.addEventListener('animationend', this.didLeave); // this.animateElement(childDOM, leave, leaveActive, this.didLeave);

      (0, _raf.default)(function () {
        // when enter transition not end
        if (childDOM.classList.contains(enterActive)) {
          childDOM.classList.remove(enterActive, enterTo);
          childDOM.removeEventListener('transitionend', _this5.didEnter);
          childDOM.removeEventListener('animationend', _this5.didEnter);
        }

        childDOM.classList.add(leave, leaveActive);
        onLeave && onLeave();
        (0, _raf.default)(function () {
          childDOM.classList.remove(leave);
          childDOM.classList.add(leaveTo);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.children || null;
    }
  }, {
    key: "transitionClass",
    get: function get() {
      var name = this.props.name;
      return {
        enter: "".concat(name, "-enter"),
        enterActive: "".concat(name, "-enter-active"),
        enterTo: "".concat(name, "-enter-to"),
        leave: "".concat(name, "-leave"),
        leaveActive: "".concat(name, "-leave-active"),
        leaveTo: "".concat(name, "-leave-to")
      };
    }
  }]);
  return Transition;
}(_react.Component);

exports.default = Transition;
Transition.propTypes = {
  name: _propTypes.default.string,
  // triggered when enter transition start
  onEnter: _propTypes.default.func,
  // triggered when enter transition end
  onAfterEnter: _propTypes.default.func,
  // triggered when leave transition start
  onLeave: _propTypes.default.func,
  // tiggered when leave transition end
  onAfterLeave: _propTypes.default.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Transition, "Transition", "/Users/qiu/biosan/BiosanUi/libs/transition/index.js");
}();

;