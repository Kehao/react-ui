"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MethodImplementationRequiredError = exports.ExtendableError = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

// taken from : http://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax
var ExtendableError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2.default)(ExtendableError, _Error);

  function ExtendableError(message) {
    var _this;

    (0, _classCallCheck2.default)(this, ExtendableError);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ExtendableError).call(this, message));
    _this.name = _this.constructor.name;
    _this.message = message;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace((0, _assertThisInitialized2.default)(_this), _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }

    return _this;
  }

  return ExtendableError;
}((0, _wrapNativeSuper2.default)(Error));

exports.ExtendableError = ExtendableError;

var MethodImplementationRequiredError =
/*#__PURE__*/
function (_ExtendableError) {
  (0, _inherits2.default)(MethodImplementationRequiredError, _ExtendableError);

  function MethodImplementationRequiredError(msg) {
    (0, _classCallCheck2.default)(this, MethodImplementationRequiredError);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MethodImplementationRequiredError).call(this, msg));
  }

  return MethodImplementationRequiredError;
}(ExtendableError);

exports.MethodImplementationRequiredError = MethodImplementationRequiredError;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ExtendableError, "ExtendableError", "/Users/qiu/biosan/BiosanUi/libs/utils/errors.js");

  __REACT_HOT_LOADER__.register(MethodImplementationRequiredError, "MethodImplementationRequiredError", "/Users/qiu/biosan/BiosanUi/libs/utils/errors.js");
}();

;