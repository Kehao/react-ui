import * as React from 'react';
export default function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      style = _ref.style;
  return React.createElement("div", {
    className: className,
    role: "row",
    style: style
  }, columns);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultHeaderRowRenderer, "defaultHeaderRowRenderer", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Table/defaultHeaderRowRenderer.js");
}();

;