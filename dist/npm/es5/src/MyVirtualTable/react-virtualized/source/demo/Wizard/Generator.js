"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Generator;

function Generator(_ref) {
  var cellsHaveKnownHeight = _ref.cellsHaveKnownHeight,
      cellsHaveKnownWidth = _ref.cellsHaveKnownWidth,
      cellsHaveUniformHeight = _ref.cellsHaveUniformHeight,
      cellsHaveUniformWidth = _ref.cellsHaveUniformWidth,
      collectionHasFixedHeight = _ref.collectionHasFixedHeight,
      collectionHasFixedWidth = _ref.collectionHasFixedWidth,
      doNotVirtualizeColumns = _ref.doNotVirtualizeColumns,
      hasMultipleColumns = _ref.hasMultipleColumns,
      hasMultipleRows = _ref.hasMultipleRows,
      nonCheckerboardPattern = _ref.nonCheckerboardPattern;

  if (!hasMultipleColumns && !hasMultipleRows) {
    return "<div>Looks like you don't need react-virtualized.</div>";
  }

  var baseComponent = getBaseComponent({
    doNotVirtualizeColumns: doNotVirtualizeColumns,
    hasMultipleColumns: hasMultipleColumns,
    nonCheckerboardPattern: nonCheckerboardPattern
  });
  var useAutoSizer = !collectionHasFixedHeight || !collectionHasFixedWidth;
  var useCellMeasurer = !doNotVirtualizeColumns && !nonCheckerboardPattern && (!cellsHaveKnownHeight || !cellsHaveKnownWidth); // TODO Share these with CellMeasurer?

  var heightValue = collectionHasFixedHeight ? 600 : 'height';
  var widthValue = collectionHasFixedWidth ? 800 : 'width';
  baseComponent.props.height = heightValue;
  baseComponent.props.width = widthValue;

  if (baseComponent.columnWidthProp) {
    baseComponent.props[baseComponent.columnWidthProp] = hasMultipleColumns ? cellsHaveKnownWidth ? cellsHaveUniformWidth ? 100 : '({ index }) => 100' : 'getColumnWidth' : widthValue;
  }

  if (baseComponent.rowHeightProp) {
    baseComponent.props[baseComponent.rowHeightProp] = hasMultipleRows ? cellsHaveKnownHeight ? cellsHaveUniformHeight ? 50 : '({ index }) => 50' : 'getRowHeight' : heightValue;
  }

  if (baseComponent.columnCountProp) {
    baseComponent.props[baseComponent.columnCountProp] = hasMultipleColumns ? 'numColumns' : '1';
  }

  if (baseComponent.rowCountProp) {
    baseComponent.props[baseComponent.rowCountProp] = hasMultipleRows ? hasMultipleColumns ? 'numRows' : 'collection.size' : '1';
  }

  var component = baseComponent;

  if (useCellMeasurer) {
    component = getCellMeasurer({
      cellsHaveKnownHeight: cellsHaveKnownHeight,
      collectionHasFixedHeight: collectionHasFixedHeight,
      collectionHasFixedWidth: collectionHasFixedWidth,
      child: component,
      indentation: useAutoSizer ? 4 : 0
    });
  }

  if (useAutoSizer) {
    component = getAutoSizer({
      child: component
    });
  }

  return componentToString({
    component: component
  });
}

function componentToString(_ref2) {
  var component = _ref2.component,
      _ref2$indentation = _ref2.indentation,
      indentation = _ref2$indentation === void 0 ? 0 : _ref2$indentation;
  var spaces = indentationToSpaces(indentation);
  var hasProps = Object.keys(component.props).length > 0;
  var markup = [];

  if (hasProps) {
    markup.push("".concat(spaces, "<").concat(component.name));
  } else {
    markup.push("".concat(spaces, "<").concat(component.name, ">"));
  }

  if (hasProps) {
    markup.push(Object.keys(component.props).sort().map(function (key) {
      return "".concat(spaces, "  ").concat(key, "={").concat(component.props[key], "}");
    }).join("\n"));
  }

  if (component.children) {
    if (hasProps) {
      markup.push("".concat(spaces, ">"));
    }

    markup.push(component.children);
  }

  if (component.children) {
    markup.push("".concat(spaces, "</").concat(component.name, ">"));
  } else if (hasProps) {
    markup.push("".concat(spaces, "/>"));
  }

  return markup.join("\n");
}

function getAutoSizer(_ref3) {
  var child = _ref3.child,
      collectionHasFixedHeight = _ref3.collectionHasFixedHeight,
      collectionHasFixedWidth = _ref3.collectionHasFixedWidth;
  var props = {};

  if (collectionHasFixedHeight) {
    props.disableHeight = true;
  }

  if (collectionHasFixedWidth) {
    props.disableWidth = true;
  }

  var methodSignature = '{({ height, width })';

  if (collectionHasFixedWidth) {
    methodSignature = '{({ height })';
  } else if (collectionHasFixedHeight) {
    methodSignature = '{({ width })';
  }

  var children = [];
  children.push("  ".concat(methodSignature, " => ("));
  children.push(componentToString({
    component: child,
    indentation: 4
  }));
  children.push('  )}');
  return {
    name: 'AutoSizer',
    props: props,
    children: children.join("\n")
  };
}

function getBaseComponent(_ref4) {
  var doNotVirtualizeColumns = _ref4.doNotVirtualizeColumns,
      hasMultipleColumns = _ref4.hasMultipleColumns,
      nonCheckerboardPattern = _ref4.nonCheckerboardPattern;

  if (nonCheckerboardPattern) {
    return getCollectionMarkup();
  } else if (!hasMultipleColumns) {
    return getListMarkup();
  } else if (doNotVirtualizeColumns) {
    return getTableMarkup();
  } else {
    return getGridMarkup();
  }
}

function getCellMeasurer(_ref5) {
  var cellsHaveKnownHeight = _ref5.cellsHaveKnownHeight,
      collectionHasFixedHeight = _ref5.collectionHasFixedHeight,
      collectionHasFixedWidth = _ref5.collectionHasFixedWidth,
      child = _ref5.child,
      indentation = _ref5.indentation;
  var spaces = indentationToSpaces(indentation); // TODO Share these with render()?

  var heightValue = collectionHasFixedHeight ? 600 : 'height';
  var widthValue = collectionHasFixedWidth ? 800 : 'width';
  var props = {
    cellRenderer: 'yourCellRenderer',
    // @TODO pass down?
    columnCount: 'numColumns',
    rowCount: 'numRows'
  };
  var methodSignature; // @TODO CellMeasurer doesn't support both dynamic widths and heights. Warn about this.

  if (cellsHaveKnownHeight) {
    props.height = heightValue;
    methodSignature = '{({ getColumnWidth })';
  } else {
    props.width = widthValue;
    methodSignature = '{({ getRowHeight })';
  }

  var children = [];
  children.push("".concat(spaces, "  ").concat(methodSignature, " => ("));
  children.push(componentToString({
    component: child,
    indentation: indentation + 4
  }));
  children.push("".concat(spaces, "  )}"));
  return {
    name: 'CellMeasurer',
    props: props,
    children: children.join("\n")
  };
}

function getCollectionMarkup() {
  return {
    name: 'Collection',
    props: {
      cellCount: 'collection.size',
      cellRenderer: '({ index }) => collection.getIn([index, "name"])',
      cellSizeAndPositionGetter: '({ index, isScrolling  }) => ({ height, width, x, y })'
    }
  };
}

function getTableMarkup() {
  return {
    name: 'Table',
    props: {
      headerHeight: 30,
      rowGetter: '({ index }) => collection.get(index)'
    },
    rowCountProp: 'rowCount',
    rowHeightProp: 'rowHeight',
    children: '<!-- Insert Column children here -->' // @TODO

  };
}

function getGridMarkup() {
  return {
    name: 'Grid',
    props: {
      cellRenderer: '({ columnIndex, key, rowIndex, style }) => <div key={key} style={style}>...</div>'
    },
    columnCountProp: 'columnCount',
    columnWidthProp: 'columnWidth',
    rowCountProp: 'rowCount',
    rowHeightProp: 'rowHeight'
  };
}

function getListMarkup() {
  return {
    name: 'List',
    props: {
      rowRenderer: '({ index, key, style }) => <div key={key} style={style}>...</div>'
    },
    rowHeightProp: 'rowHeight'
  };
}

function indentationToSpaces(indentation) {
  return Array.from(Array(indentation)).map(function () {
    return ' ';
  }).join('');
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Generator, "Generator", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");

  __REACT_HOT_LOADER__.register(componentToString, "componentToString", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");

  __REACT_HOT_LOADER__.register(getAutoSizer, "getAutoSizer", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");

  __REACT_HOT_LOADER__.register(getBaseComponent, "getBaseComponent", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");

  __REACT_HOT_LOADER__.register(getCellMeasurer, "getCellMeasurer", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");

  __REACT_HOT_LOADER__.register(getCollectionMarkup, "getCollectionMarkup", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");

  __REACT_HOT_LOADER__.register(getTableMarkup, "getTableMarkup", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");

  __REACT_HOT_LOADER__.register(getGridMarkup, "getGridMarkup", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");

  __REACT_HOT_LOADER__.register(getListMarkup, "getListMarkup", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");

  __REACT_HOT_LOADER__.register(indentationToSpaces, "indentationToSpaces", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Generator.js");
}();

;