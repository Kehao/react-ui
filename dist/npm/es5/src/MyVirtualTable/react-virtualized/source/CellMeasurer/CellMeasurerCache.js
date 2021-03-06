"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_WIDTH = exports.DEFAULT_HEIGHT = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DEFAULT_HEIGHT = 30;
exports.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
var DEFAULT_WIDTH = 100; // Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.

exports.DEFAULT_WIDTH = DEFAULT_WIDTH;

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCache =
/*#__PURE__*/
function () {
  function CellMeasurerCache() {
    var _this = this;

    var _params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0, _classCallCheck2.default)(this, CellMeasurerCache);
    this._cellHeightCache = {};
    this._cellWidthCache = {};
    this._columnWidthCache = {};
    this._rowHeightCache = {};
    this._defaultHeight = void 0;
    this._defaultWidth = void 0;
    this._minHeight = void 0;
    this._minWidth = void 0;
    this._keyMapper = void 0;
    this._hasFixedHeight = void 0;
    this._hasFixedWidth = void 0;
    this._columnCount = 0;
    this._rowCount = 0;

    this.columnWidth = function () {
      return _this.__columnWidth__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.rowHeight = function () {
      return _this.__rowHeight__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    var defaultHeight = _params.defaultHeight,
        defaultWidth = _params.defaultWidth,
        fixedHeight = _params.fixedHeight,
        fixedWidth = _params.fixedWidth,
        keyMapper = _params.keyMapper,
        minHeight = _params.minHeight,
        minWidth = _params.minWidth;
    this._hasFixedHeight = fixedHeight === true;
    this._hasFixedWidth = fixedWidth === true;
    this._minHeight = minHeight || 0;
    this._minWidth = minWidth || 0;
    this._keyMapper = keyMapper || defaultKeyMapper;
    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);

    if (process.env.NODE_ENV !== 'production') {
      if (this._hasFixedHeight === false && this._hasFixedWidth === false) {
        console.warn("CellMeasurerCache should only measure a cell's width or height. " + 'You have configured CellMeasurerCache to measure both. ' + 'This will result in poor performance.');
      }

      if (this._hasFixedHeight === false && this._defaultHeight === 0) {
        console.warn('Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }

      if (this._hasFixedWidth === false && this._defaultWidth === 0) {
        console.warn('Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }
    }
  }

  (0, _createClass2.default)(CellMeasurerCache, [{
    key: "__rowHeight__REACT_HOT_LOADER__",
    value: function __rowHeight__REACT_HOT_LOADER__() {
      return this.__rowHeight__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__columnWidth__REACT_HOT_LOADER__",
    value: function __columnWidth__REACT_HOT_LOADER__() {
      return this.__columnWidth__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "clear",
    value: function clear(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      delete this._cellHeightCache[key];
      delete this._cellWidthCache[key];

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellHeightCache = {};
      this._cellWidthCache = {};
      this._columnWidthCache = {};
      this._rowHeightCache = {};
      this._rowCount = 0;
      this._columnCount = 0;
    }
  }, {
    key: "__columnWidth__REACT_HOT_LOADER__",
    value: function __columnWidth__REACT_HOT_LOADER__(_ref) {
      var index = _ref.index;

      var key = this._keyMapper(0, index);

      return this._columnWidthCache.hasOwnProperty(key) ? this._columnWidthCache[key] : this._defaultWidth;
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._hasFixedHeight;
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._hasFixedWidth;
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedHeight) {
        return this._defaultHeight;
      } else {
        var _key = this._keyMapper(rowIndex, columnIndex);

        return this._cellHeightCache.hasOwnProperty(_key) ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
      }
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedWidth) {
        return this._defaultWidth;
      } else {
        var _key2 = this._keyMapper(rowIndex, columnIndex);

        return this._cellWidthCache.hasOwnProperty(_key2) ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
      }
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      return this._cellHeightCache.hasOwnProperty(key);
    }
  }, {
    key: "__rowHeight__REACT_HOT_LOADER__",
    value: function __rowHeight__REACT_HOT_LOADER__(_ref2) {
      var index = _ref2.index;

      var key = this._keyMapper(index, 0);

      return this._rowHeightCache.hasOwnProperty(key) ? this._rowHeightCache[key] : this._defaultHeight;
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      var key = this._keyMapper(rowIndex, columnIndex);

      if (columnIndex >= this._columnCount) {
        this._columnCount = columnIndex + 1;
      }

      if (rowIndex >= this._rowCount) {
        this._rowCount = rowIndex + 1;
      } // Size is cached per cell so we don't have to re-measure if cells are re-ordered.


      this._cellHeightCache[key] = height;
      this._cellWidthCache[key] = width;

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "_updateCachedColumnAndRowSizes",
    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
      // Pre-cache these derived values for faster lookup later.
      // Reads are expected to occur more frequently than writes in this case.
      // Only update non-fixed dimensions though to avoid doing unnecessary work.
      if (!this._hasFixedWidth) {
        var columnWidth = 0;

        for (var i = 0; i < this._rowCount; i++) {
          columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
        }

        var columnKey = this._keyMapper(0, columnIndex);

        this._columnWidthCache[columnKey] = columnWidth;
      }

      if (!this._hasFixedHeight) {
        var rowHeight = 0;

        for (var _i = 0; _i < this._columnCount; _i++) {
          rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
        }

        var rowKey = this._keyMapper(rowIndex, 0);

        this._rowHeightCache[rowKey] = rowHeight;
      }
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._defaultWidth;
    }
  }]);
  return CellMeasurerCache;
}();

exports.default = CellMeasurerCache;

function defaultKeyMapper(rowIndex, columnIndex) {
  return "".concat(rowIndex, "-").concat(columnIndex);
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DEFAULT_HEIGHT, "DEFAULT_HEIGHT", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/CellMeasurer/CellMeasurerCache.js");

  __REACT_HOT_LOADER__.register(DEFAULT_WIDTH, "DEFAULT_WIDTH", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/CellMeasurer/CellMeasurerCache.js");

  __REACT_HOT_LOADER__.register(CellMeasurerCache, "CellMeasurerCache", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/CellMeasurer/CellMeasurerCache.js");

  __REACT_HOT_LOADER__.register(defaultKeyMapper, "defaultKeyMapper", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/CellMeasurer/CellMeasurerCache.js");
}();

;