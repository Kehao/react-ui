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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var Component =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Component, _React$Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "classNames",
    value: function classNames() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (0, _classnames.default)(args);
    }
  }, {
    key: "className",
    value: function className() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.classNames.apply(this, args.concat([this.props.className]));
    }
  }, {
    key: "style",
    value: function style(args) {
      return Object.assign({}, args, this.props.style);
    }
  }]);
  return Component;
}(_react.default.Component);

exports.default = Component;
Component.propTypes = {
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Component, "Component", "/Users/qiu/biosan/BiosanUi/libs/component/index.js");
}();

;