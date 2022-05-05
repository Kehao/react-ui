import * as React from 'react';
import SortIndicator from './SortIndicator';

/**
 * Default table header renderer.
 */
export default function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;
  var showSortIndicator = sortBy === dataKey;
  var children = [React.createElement("span", {
    className: "ReactVirtualized__Table__headerTruncatedText",
    key: "label",
    title: label
  }, label)];

  if (showSortIndicator) {
    children.push(React.createElement(SortIndicator, {
      key: "SortIndicator",
      sortDirection: sortDirection
    }));
  }

  return children;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultHeaderRenderer, "defaultHeaderRenderer", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Table/defaultHeaderRenderer.js");
}();

;