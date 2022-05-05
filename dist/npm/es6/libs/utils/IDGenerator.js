import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
export var IDGenerator =
/*#__PURE__*/
function () {
  function IDGenerator() {
    _classCallCheck(this, IDGenerator);

    this.id = 0;
  }

  _createClass(IDGenerator, [{
    key: "next",
    value: function next() {
      return this.id++ & 0xffff;
    }
  }]);

  return IDGenerator;
}();
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(IDGenerator, "IDGenerator", "/Users/qiu/biosan/BiosanUi/libs/utils/IDGenerator.js");
}();

;