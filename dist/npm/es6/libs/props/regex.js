import { createPropType } from '../utils';

var _default = createPropType(function (props, propName, componentName) {
  var value = props[propName];

  if (!(value instanceof RegExp)) {
    return new Error("Invalid prop ".concat(propName, " of ").concat(componentName, ", should be valid regex."));
  }
});

export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/libs/props/regex.js");
}();

;