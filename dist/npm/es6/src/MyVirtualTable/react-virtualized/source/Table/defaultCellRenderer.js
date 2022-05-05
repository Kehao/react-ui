/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
export default function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultCellRenderer, "defaultCellRenderer", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Table/defaultCellRenderer.js");
}();

;