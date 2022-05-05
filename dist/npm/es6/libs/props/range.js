import { createPropType } from '../utils';

var _default = function _default(min, max) {
  return createPropType(function (props, propName, componentName) {
    var value = props[propName];

    if (value < min || value > max) {
      return new Error("Invalid prop ".concat(propName, " of ").concat(componentName, ", should between ").concat(min, " and ").concat(max, "."));
    }
  });
};

export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/libs/props/range.js");
}();

;