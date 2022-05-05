import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import { CellMeasurerCache } from '../CellMeasurer';

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCacheDecorator =
/*#__PURE__*/
function () {
  function CellMeasurerCacheDecorator() {
    var _this = this;

    var _params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CellMeasurerCacheDecorator);

    this._cellMeasurerCache = void 0;
    this._columnIndexOffset = void 0;
    this._rowIndexOffset = void 0;

    this.columnWidth = function () {
      return _this.__columnWidth__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.rowHeight = function () {
      return _this.__rowHeight__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    var cellMeasurerCache = _params.cellMeasurerCache,
        _params$columnIndexOf = _params.columnIndexOffset,
        columnIndexOffset = _params$columnIndexOf === void 0 ? 0 : _params$columnIndexOf,
        _params$rowIndexOffse = _params.rowIndexOffset,
        rowIndexOffset = _params$rowIndexOffse === void 0 ? 0 : _params$rowIndexOffse;
    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }

  _createClass(CellMeasurerCacheDecorator, [{
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
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: "__columnWidth__REACT_HOT_LOADER__",
    value: function __columnWidth__REACT_HOT_LOADER__(_ref) {
      var index = _ref.index;

      this._cellMeasurerCache.columnWidth({
        index: index + this._columnIndexOffset
      });
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "__rowHeight__REACT_HOT_LOADER__",
    value: function __rowHeight__REACT_HOT_LOADER__(_ref2) {
      var index = _ref2.index;

      this._cellMeasurerCache.rowHeight({
        index: index + this._rowIndexOffset
      });
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);

  return CellMeasurerCacheDecorator;
}();

export { CellMeasurerCacheDecorator as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CellMeasurerCacheDecorator, "CellMeasurerCacheDecorator", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/MultiGrid/CellMeasurerCacheDecorator.js");
}();

;