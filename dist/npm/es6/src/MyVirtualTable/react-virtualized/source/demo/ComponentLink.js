import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ComponentLink.css';
export default function ComponentLink(_ref) {
  var children = _ref.children,
      to = _ref.to;
  return React.createElement("li", {
    className: styles.NavListItem
  }, React.createElement(NavLink, {
    activeClassName: styles.ActiveComponentLink,
    className: styles.ComponentLink,
    to: to
  }, children));
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ComponentLink, "ComponentLink", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/ComponentLink.js");
}();

;