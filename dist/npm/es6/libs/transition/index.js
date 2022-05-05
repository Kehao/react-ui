import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import PropTypes from 'prop-types';
import requestAnimationFrame from 'raf';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var Transition =
/*#__PURE__*/
function (_Component) {
  _inherits(Transition, _Component);

  function Transition(props) {
    var _this;

    _classCallCheck(this, Transition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Transition).call(this, props));
    var children = props.children;
    _this.state = {
      children: children && _this.enhanceChildren(children)
    };
    _this.didEnter = _this.didEnter.bind(_assertThisInitialized(_this));
    _this.didLeave = _this.didLeave.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Transition, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var children = React.isValidElement(this.props.children) && React.Children.only(this.props.children);
      var nextChildren = React.isValidElement(nextProps.children) && React.Children.only(nextProps.children);

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
      var children = React.isValidElement(this.props.children) && React.Children.only(this.props.children);
      var preChildren = React.isValidElement(preProps.children) && React.Children.only(preProps.children);

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

      return React.cloneElement(children, Object.assign({
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
      var childDOM = ReactDOM.findDOMNode(this.el);
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

      var childDOM = ReactDOM.findDOMNode(this.el);
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
          requestAnimationFrame(function () {
            childDOM.style.display = 'none';
            childDOM.classList.remove(leaveActive, leaveTo);
            requestAnimationFrame(resolve);
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
      var childDOM = ReactDOM.findDOMNode(this.el);
      childDOM.addEventListener('transitionend', this.didEnter);
      childDOM.addEventListener('animationend', this.didEnter); // this.animateElement(childDOM, enter, enterActive, this.didEnter);

      requestAnimationFrame(function () {
        // when hidden transition not end
        if (childDOM.classList.contains(leaveActive)) {
          childDOM.classList.remove(leaveActive, leaveTo);
          childDOM.removeEventListener('transitionend', _this4.didLeave);
          childDOM.removeEventListener('animationend', _this4.didLeave);
        }

        childDOM.style.display = '';
        childDOM.classList.add(enter, enterActive);
        onEnter && onEnter();
        requestAnimationFrame(function () {
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
      var childDOM = ReactDOM.findDOMNode(this.el);
      childDOM.addEventListener('transitionend', this.didLeave);
      childDOM.addEventListener('animationend', this.didLeave); // this.animateElement(childDOM, leave, leaveActive, this.didLeave);

      requestAnimationFrame(function () {
        // when enter transition not end
        if (childDOM.classList.contains(enterActive)) {
          childDOM.classList.remove(enterActive, enterTo);
          childDOM.removeEventListener('transitionend', _this5.didEnter);
          childDOM.removeEventListener('animationend', _this5.didEnter);
        }

        childDOM.classList.add(leave, leaveActive);
        onLeave && onLeave();
        requestAnimationFrame(function () {
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
}(Component);

export { Transition as default };
Transition.propTypes = {
  name: PropTypes.string,
  // triggered when enter transition start
  onEnter: PropTypes.func,
  // triggered when enter transition end
  onAfterEnter: PropTypes.func,
  // triggered when leave transition start
  onLeave: PropTypes.func,
  // tiggered when leave transition end
  onAfterLeave: PropTypes.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Transition, "Transition", "/Users/qiu/biosan/BiosanUi/libs/transition/index.js");
}();

;