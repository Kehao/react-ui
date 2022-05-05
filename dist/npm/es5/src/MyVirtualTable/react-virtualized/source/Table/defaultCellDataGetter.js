"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultCellDataGetter;

/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey,
      rowData = _ref.rowData;

  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultCellDataGetter, "defaultCellDataGetter", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Table/defaultCellDataGetter.js");
}();

;