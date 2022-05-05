export var SCROLL_DIRECTION_BACKWARD = -1;
export var SCROLL_DIRECTION_FORWARD = 1;
export var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
export var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

export default function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;
  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SCROLL_DIRECTION_BACKWARD, "SCROLL_DIRECTION_BACKWARD", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/accessibilityOverscanIndicesGetter.js");

  __REACT_HOT_LOADER__.register(SCROLL_DIRECTION_FORWARD, "SCROLL_DIRECTION_FORWARD", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/accessibilityOverscanIndicesGetter.js");

  __REACT_HOT_LOADER__.register(SCROLL_DIRECTION_HORIZONTAL, "SCROLL_DIRECTION_HORIZONTAL", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/accessibilityOverscanIndicesGetter.js");

  __REACT_HOT_LOADER__.register(SCROLL_DIRECTION_VERTICAL, "SCROLL_DIRECTION_VERTICAL", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/accessibilityOverscanIndicesGetter.js");

  __REACT_HOT_LOADER__.register(defaultOverscanIndicesGetter, "defaultOverscanIndicesGetter", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/accessibilityOverscanIndicesGetter.js");
}();

;