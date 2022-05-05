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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var View =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(View, _Component);

  function View() {
    (0, _classCallCheck2.default)(this, View);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(View).apply(this, arguments));
  }

  (0, _createClass2.default)(View, [{
    key: "render",
    value: function render() {
      var style = Object.hasOwnProperty.call(this.props, 'show') && !this.props.show && {
        display: 'none'
      };
      return _react.default.cloneElement(_react.default.Children.only(this.props.children), {
        style: Object.assign({}, this.props.children.props.style, style)
      });
    }
  }]);
  return View;
}(_react.Component);
/* eslint-disable */


exports.default = View;
View.propTypes = {
  show: _propTypes.default.any
};
/* eslint-enable */

View._typeName = 'View';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(View, "View", "/Users/qiu/biosan/BiosanUi/libs/view/index.js");
}();

;