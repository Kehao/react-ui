"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IDGenerator = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var IDGenerator =
/*#__PURE__*/
function () {
  function IDGenerator() {
    (0, _classCallCheck2.default)(this, IDGenerator);
    this.id = 0;
  }

  (0, _createClass2.default)(IDGenerator, [{
    key: "next",
    value: function next() {
      return this.id++ & 0xffff;
    }
  }]);
  return IDGenerator;
}();

exports.IDGenerator = IDGenerator;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(IDGenerator, "IDGenerator", "/Users/qiu/biosan/BiosanUi/libs/utils/IDGenerator.js");
}();

;