import * as React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import Icon from './Icon';
import styles from './NavLink.css';
export default function NavLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      iconType = _ref.iconType,
      to = _ref.to;
  var link;
  var icon;

  if (iconType) {
    icon = React.createElement(Icon, {
      className: styles.Icon,
      type: iconType
    });
  }

  if (to) {
    link = React.createElement(RRNavLink, {
      activeClassName: styles.ActiveNavLink,
      className: styles.NavLink,
      to: to
    }, icon, " ", children);
  } else {
    link = React.createElement("a", {
      className: styles.NavLink,
      href: href
    }, icon, " ", children);
  }

  return React.createElement("li", {
    className: styles.NavListItem
  }, link);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NavLink, "NavLink", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/NavLink.js");
}();

;