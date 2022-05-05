"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _utils = require("../utils");

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
  (0, _inherits2.default)(EventRegister, _Component);

  function EventRegister() {
    (0, _classCallCheck2.default)(this, EventRegister);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EventRegister).apply(this, arguments));
  }

  (0, _createClass2.default)(EventRegister, [{
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
      (0, _utils.requireCondition)(typeof id === 'string', 'id prop is required');
      (0, _utils.requireCondition)(!hasRegistered(this.cached), "id: ".concat(id, " has been registered"));
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
}(_react.Component);

exports.default = EventRegister;
EventRegister.propTypes = {
  id: _propTypes.default.string.isRequired,
  target: _propTypes.default.object.isRequired,
  eventName: _propTypes.default.string.isRequired,
  func: _propTypes.default.func.isRequired,
  isUseCapture: _propTypes.default.bool
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