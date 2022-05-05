import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _wrapNativeSuper from "@babel/runtime/helpers/wrapNativeSuper";
// taken from : http://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax
export var ExtendableError =
/*#__PURE__*/
function (_Error) {
  _inherits(ExtendableError, _Error);

  function ExtendableError(message) {
    var _this;

    _classCallCheck(this, ExtendableError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExtendableError).call(this, message));
    _this.name = _this.constructor.name;
    _this.message = message;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }

    return _this;
  }

  return ExtendableError;
}(_wrapNativeSuper(Error));
export var MethodImplementationRequiredError =
/*#__PURE__*/
function (_ExtendableError) {
  _inherits(MethodImplementationRequiredError, _ExtendableError);

  function MethodImplementationRequiredError(msg) {
    _classCallCheck(this, MethodImplementationRequiredError);

    return _possibleConstructorReturn(this, _getPrototypeOf(MethodImplementationRequiredError).call(this, msg));
  }

  return MethodImplementationRequiredError;
}(ExtendableError);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ExtendableError, "ExtendableError", "/Users/qiu/biosan/BiosanUi/libs/utils/errors.js");

  __REACT_HOT_LOADER__.register(MethodImplementationRequiredError, "MethodImplementationRequiredError", "/Users/qiu/biosan/BiosanUi/libs/utils/errors.js");
}();

;