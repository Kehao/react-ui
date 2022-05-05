import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import { ExtendableError } from './errors';

var ErrorConditionFailed =
/*#__PURE__*/
function (_ExtendableError) {
  _inherits(ErrorConditionFailed, _ExtendableError);

  function ErrorConditionFailed() {
    _classCallCheck(this, ErrorConditionFailed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorConditionFailed).call(this, args));
  }

  return ErrorConditionFailed;
}(ExtendableError);

export function requireCondition(condition) {
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