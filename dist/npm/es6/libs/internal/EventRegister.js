import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import PropTypes from 'prop-types';
import { Component } from 'react';
import { requireCondition } from '../utils';
var windowKey = Symbol.for('er_register_map');
var registerMap = window[windowKey] = window[windowKey] || {
  ids: {}
};

var isNotNull = function isNotNull(t) {
  return t != null;
};

var hasRegistered = function hasRegistered(_ref) {
  var id = _ref.id;
  return isNotNull(registerMap.ids[id]);
};

var cleanRegister = function cleanRegister(props) {
  var target = props.target,
      eventName = props.eventName,
      func = props.func,
      isUseCapture = props.isUseCapture,
      id = props.id;

  if (hasRegistered(props)) {
    target.removeEventListener(eventName, func, isUseCapture);
    delete registerMap.ids[id];
  }
};

var doRegister = function doRegister(props) {
  var id = props.id,
      eventName = props.eventName,
      func = props.func,
      isUseCapture = props.isUseCapture;
  registerMap.ids[id] = id;
  document.addEventListener(eventName, func, isUseCapture);
};
/**
 * register events that hooked up react lifecycle
 */


var EventRegister =
/*#__PURE__*/
function (_Component) {
  _inherits(EventRegister, _Component);

  function EventRegister() {
    _classCallCheck(this, EventRegister);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventRegister).apply(this, arguments));
  }

  _createClass(EventRegister, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          eventName = _this$props.eventName,
          id = _this$props.id;
      var lowerEventName = eventName.toLowerCase();

      if (/^on/.test(lowerEventName)) {
        lowerEventName = lowerEventName.substring(2);
      }

      this.cached = Object.assign({}, this.props, {
        lowerEventName: lowerEventName
      });
      requireCondition(typeof id === 'string', 'id prop is required');
      requireCondition(!hasRegistered(this.cached), "id: ".concat(id, " has been registered"));
      doRegister(this.cached);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cleanRegister(this.cached);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return EventRegister;
}(Component);

export { EventRegister as default };
EventRegister.propTypes = {
  id: PropTypes.string.isRequired,
  target: PropTypes.object.isRequired,
  eventName: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  isUseCapture: PropTypes.bool
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(windowKey, "windowKey", "/Users/qiu/biosan/BiosanUi/libs/internal/EventRegister.jsx");

  __REACT_HOT_LOADER__.register(registerMap, "registerMap", "/Users/qiu/biosan/BiosanUi/libs/internal/EventRegister.jsx");

  __REACT_HOT_LOADER__.register(isNotNull, "isNotNull", "/Users/qiu/biosan/BiosanUi/libs/internal/EventRegister.jsx");

  __REACT_HOT_LOADER__.register(hasRegistered, "hasRegistered", "/Users/qiu/biosan/BiosanUi/libs/internal/EventRegister.jsx");

  __REACT_HOT_LOADER__.register(cleanRegister, "cleanRegister", "/Users/qiu/biosan/BiosanUi/libs/internal/EventRegister.jsx");

  __REACT_HOT_LOADER__.register(doRegister, "doRegister", "/Users/qiu/biosan/BiosanUi/libs/internal/EventRegister.jsx");

  __REACT_HOT_LOADER__.register(EventRegister, "EventRegister", "/Users/qiu/biosan/BiosanUi/libs/internal/EventRegister.jsx");
}();

;