import React from 'react';

function firstChild(props) {
  var childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

export { firstChild };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(firstChild, "firstChild", "/Users/qiu/biosan/BiosanUi/libs/utils/react.js");
}();

;