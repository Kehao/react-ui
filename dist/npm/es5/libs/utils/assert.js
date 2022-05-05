"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireCondition = requireCondition;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _errors = require("./errors");

var ErrorConditionFailed =
/*#__PURE__*/
function (_ExtendableError) {
  (0, _inherits2.default)(ErrorConditionFailed, _ExtendableError);

  function ErrorConditionFailed() {
    (0, _classCallCheck2.default)(this, ErrorConditionFailed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorConditionFailed).call(this, args));
  }

  return ErrorConditionFailed;
}(_errors.ExtendableError);

function requireCondition(condition) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pre-condition failed';

  if (!condition) {
    throw new ErrorConditionFailed(msg);
  }
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ErrorConditionFailed, "ErrorConditionFailed", "/Users/qiu/biosan/BiosanUi/libs/utils/assert.js");

  __REACT_HOT_LOADER__.register(requireCondition, "requireCondition", "/Users/qiu/biosan/BiosanUi/libs/utils/assert.js");
}();

;