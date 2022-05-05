import "antd/lib/spin/style";
import _Spin from "antd/lib/spin";
import "antd/lib/pagination/style";
import _Pagination from "antd/lib/pagination";
import _extends from "@babel/runtime/helpers/extends";
import "antd/lib/checkbox/style";
import _Checkbox from "antd/lib/checkbox";
import "antd/lib/popover/style";
import _Popover from "antd/lib/popover";
import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import "antd/lib/input/style";
import _Input from "antd/lib/input";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Resizable } from 'react-resizable';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import { debounce } from '../utils/common';
import { isPlainObject } from '../utils/helper';
import { defaultTableHeaderRowRenderer, SortDirection } from './react-virtualized/source';
import { Column, Table } from './react-virtualized/source/Table';
import './react-virtualized/source/styles.css'; // only needs to be imported once

var Search = _Input.Search; // import BaseTable from './baseComp';
// Table data as an array of objects

var PopoverContainer = function PopoverContainer(_ref) {
  var children = _ref.children;

  function stopPropagation(e) {
    e && e.stopPropagation();
  }

  return React.createElement("div", {
    className: "ReactVirtual__popover__container",
    onClick: stopPropagation
  }, children);
};

var VirtualTable =
/*#__PURE__*/
function (_Component) {
  _inherits(VirtualTable, _Component);

  // sortedDataSource = _defaultSort();
  function VirtualTable(props, context) {
    var _this2;

    _classCallCheck(this, VirtualTable);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(VirtualTable).call(this, props, context));
    _this2.allRowKeys = [];
    _this2.rowHeight = 25;

    _this2.onRowClick = function () {
      var _this3;

      return (_this3 = _this2).__onRowClick__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this2.onRowDoubleClick = function () {
      var _this4;

      return (_this4 = _this2).__onRowDoubleClick__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this2.selectedAll = function () {
      var _this5;

      return (_this5 = _this2).__selectedAll__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this2.onSelect = function () {
      var _this6;

      return (_this6 = _this2).__onSelect__REACT_HOT_LOADER__.apply(_this6, arguments);
    };

    _this2.checkboxHandler = function () {
      var _this7;

      return (_this7 = _this2).__checkboxHandler__REACT_HOT_LOADER__.apply(_this7, arguments);
    };

    _this2.getTableHeader = function () {
      var _this8;

      return (_this8 = _this2).__getTableHeader__REACT_HOT_LOADER__.apply(_this8, arguments);
    };

    _this2.getTableGrid = function () {
      var _this9;

      return (_this9 = _this2).__getTableGrid__REACT_HOT_LOADER__.apply(_this9, arguments);
    };

    _this2.getLeftTable = function () {
      var _this10;

      return (_this10 = _this2).__getLeftTable__REACT_HOT_LOADER__.apply(_this10, arguments);
    };

    _this2.getRightTable = function () {
      var _this11;

      return (_this11 = _this2).__getRightTable__REACT_HOT_LOADER__.apply(_this11, arguments);
    };

    _this2.listenCenterTableScroll = function () {
      var _this12;

      return (_this12 = _this2).__listenCenterTableScroll__REACT_HOT_LOADER__.apply(_this12, arguments);
    };

    _this2.setFixedTable = function () {
      var _this13;

      return (_this13 = _this2).__setFixedTable__REACT_HOT_LOADER__.apply(_this13, arguments);
    };

    _this2.setVisibleHeight = function () {
      var _this14;

      return (_this14 = _this2).__setVisibleHeight__REACT_HOT_LOADER__.apply(_this14, arguments);
    };

    _this2._addGridScrollListener = function () {
      var _this15;

      return (_this15 = _this2).___addGridScrollListener__REACT_HOT_LOADER__.apply(_this15, arguments);
    };

    _this2._initScrollToIndex = function () {
      var _this16;

      return (_this16 = _this2).___initScrollToIndex__REACT_HOT_LOADER__.apply(_this16, arguments);
    };

    _this2._defaultTableHeaderRowRenderer = function () {
      var _this17;

      return (_this17 = _this2).___defaultTableHeaderRowRenderer__REACT_HOT_LOADER__.apply(_this17, arguments);
    };

    _this2.setRowClassnames = function () {
      var _this18;

      return (_this18 = _this2).__setRowClassnames__REACT_HOT_LOADER__.apply(_this18, arguments);
    };

    _this2._defaultSort = function () {
      var _this19;

      return (_this19 = _this2).___defaultSort__REACT_HOT_LOADER__.apply(_this19, arguments);
    };

    _this2._sort = function () {
      var _this20;

      return (_this20 = _this2).___sort__REACT_HOT_LOADER__.apply(_this20, arguments);
    };

    _this2._sortList = function () {
      var _this21;

      return (_this21 = _this2).___sortList__REACT_HOT_LOADER__.apply(_this21, arguments);
    };

    _this2.diffFixedColumns = function () {
      var _this22;

      return (_this22 = _this2).__diffFixedColumns__REACT_HOT_LOADER__.apply(_this22, arguments);
    };

    _this2.transColumns = function () {
      var _this23;

      return (_this23 = _this2).__transColumns__REACT_HOT_LOADER__.apply(_this23, arguments);
    };

    _this2.handleExpandedRowIcon = function () {
      var _this24;

      return (_this24 = _this2).__handleExpandedRowIcon__REACT_HOT_LOADER__.apply(_this24, arguments);
    };

    _this2.PopoverVisibleChange = function () {
      var _this25;

      return (_this25 = _this2).__PopoverVisibleChange__REACT_HOT_LOADER__.apply(_this25, arguments);
    };

    _this2.handleExpandedCancel = function () {
      var _this26;

      return (_this26 = _this2).__handleExpandedCancel__REACT_HOT_LOADER__.apply(_this26, arguments);
    };

    _this2.formatColumns = function () {
      var _this27;

      return (_this27 = _this2).__formatColumns__REACT_HOT_LOADER__.apply(_this27, arguments);
    };

    _this2.getPrefixColumns = function () {
      var _this28;

      return (_this28 = _this2).__getPrefixColumns__REACT_HOT_LOADER__.apply(_this28, arguments);
    };

    var sortedDataSource = _this2._defaultSort(_this2.props.dataSource);

    var _this2$props = _this2.props,
        sortBy = _this2$props.sortBy,
        sortDirection = _this2$props.sortDirection,
        columns = _this2$props.columns;
    _this2.state = {
      dataSource: sortedDataSource,
      expandedRowKeys: [],
      sortBy: sortBy,
      sortDirection: sortDirection,
      Columns: _this2.formatColumns(columns),
      columnsData: columns
    };
    return _this2;
  }

  _createClass(VirtualTable, [{
    key: "__getPrefixColumns__REACT_HOT_LOADER__",
    value: function __getPrefixColumns__REACT_HOT_LOADER__() {
      return this.__getPrefixColumns__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__formatColumns__REACT_HOT_LOADER__",
    value: function __formatColumns__REACT_HOT_LOADER__() {
      return this.__formatColumns__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleExpandedCancel__REACT_HOT_LOADER__",
    value: function __handleExpandedCancel__REACT_HOT_LOADER__() {
      return this.__handleExpandedCancel__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__PopoverVisibleChange__REACT_HOT_LOADER__",
    value: function __PopoverVisibleChange__REACT_HOT_LOADER__() {
      return this.__PopoverVisibleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleExpandedRowIcon__REACT_HOT_LOADER__",
    value: function __handleExpandedRowIcon__REACT_HOT_LOADER__() {
      return this.__handleExpandedRowIcon__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__transColumns__REACT_HOT_LOADER__",
    value: function __transColumns__REACT_HOT_LOADER__() {
      return this.__transColumns__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__diffFixedColumns__REACT_HOT_LOADER__",
    value: function __diffFixedColumns__REACT_HOT_LOADER__() {
      return this.__diffFixedColumns__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___sortList__REACT_HOT_LOADER__",
    value: function ___sortList__REACT_HOT_LOADER__() {
      return this.___sortList__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___sort__REACT_HOT_LOADER__",
    value: function ___sort__REACT_HOT_LOADER__() {
      return this.___sort__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___defaultSort__REACT_HOT_LOADER__",
    value: function ___defaultSort__REACT_HOT_LOADER__() {
      return this.___defaultSort__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__setRowClassnames__REACT_HOT_LOADER__",
    value: function __setRowClassnames__REACT_HOT_LOADER__() {
      return this.__setRowClassnames__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___defaultTableHeaderRowRenderer__REACT_HOT_LOADER__",
    value: function ___defaultTableHeaderRowRenderer__REACT_HOT_LOADER__() {
      return this.___defaultTableHeaderRowRenderer__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___initScrollToIndex__REACT_HOT_LOADER__",
    value: function ___initScrollToIndex__REACT_HOT_LOADER__() {
      return this.___initScrollToIndex__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "___addGridScrollListener__REACT_HOT_LOADER__",
    value: function ___addGridScrollListener__REACT_HOT_LOADER__() {
      return this.___addGridScrollListener__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__setVisibleHeight__REACT_HOT_LOADER__",
    value: function __setVisibleHeight__REACT_HOT_LOADER__() {
      return this.__setVisibleHeight__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__setFixedTable__REACT_HOT_LOADER__",
    value: function __setFixedTable__REACT_HOT_LOADER__() {
      return this.__setFixedTable__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__listenCenterTableScroll__REACT_HOT_LOADER__",
    value: function __listenCenterTableScroll__REACT_HOT_LOADER__() {
      return this.__listenCenterTableScroll__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__getRightTable__REACT_HOT_LOADER__",
    value: function __getRightTable__REACT_HOT_LOADER__() {
      return this.__getRightTable__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__getLeftTable__REACT_HOT_LOADER__",
    value: function __getLeftTable__REACT_HOT_LOADER__() {
      return this.__getLeftTable__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__getTableGrid__REACT_HOT_LOADER__",
    value: function __getTableGrid__REACT_HOT_LOADER__() {
      return this.__getTableGrid__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__getTableHeader__REACT_HOT_LOADER__",
    value: function __getTableHeader__REACT_HOT_LOADER__() {
      return this.__getTableHeader__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__checkboxHandler__REACT_HOT_LOADER__",
    value: function __checkboxHandler__REACT_HOT_LOADER__() {
      return this.__checkboxHandler__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__onSelect__REACT_HOT_LOADER__",
    value: function __onSelect__REACT_HOT_LOADER__() {
      return this.__onSelect__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__selectedAll__REACT_HOT_LOADER__",
    value: function __selectedAll__REACT_HOT_LOADER__() {
      return this.__selectedAll__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__onRowDoubleClick__REACT_HOT_LOADER__",
    value: function __onRowDoubleClick__REACT_HOT_LOADER__() {
      return this.__onRowDoubleClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__onRowClick__REACT_HOT_LOADER__",
    value: function __onRowClick__REACT_HOT_LOADER__() {
      return this.__onRowClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this29 = this;

      if (this.props.dataSource !== nextProps.dataSource) {
        var sortedDataSource = this._defaultSort(nextProps.dataSource);

        this.setState({
          dataSource: sortedDataSource
        });
        sortedDataSource.forEach(function (element) {
          _this29.props.rowKey && _this29.allRowKeys.push(element[_this29.props.rowKey]);
        });
      }

      if (this.props.columns !== nextProps.columns) {
        this.setState({
          columnsData: nextProps.columns,
          Columns: this.formatColumns(nextProps.columns)
        });
      }

      if (this.props.sortBy !== nextProps.sortBy || this.props.sortDirection !== nextProps.sortDirection) {
        this.setState({
          sortBy: nextProps.sortBy,
          sortDirection: nextProps.sortDirection
        });
      } // 受控的排序信息


      if (nextProps.scrollToDataKey && this.props.scrollToDataKey !== nextProps.scrollToDataKey) {
        var value = '';
        this.state.dataSource.map(function (item, index) {
          if (item[_this29.props.rowKey] === nextProps.scrollToDataKey) {
            value = index;
          }

          return item;
        });

        this._onScrollToRowChange(value);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.listenCenterTableScroll();
      this.setFixedTable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.listenCenterTableScroll();
      this.setFixedTable();

      if (prevState.dataSource !== this.state.dataSource) {
        this._initScrollToIndex();
      }
    }
  }, {
    key: "__onRowClick__REACT_HOT_LOADER__",
    value: function __onRowClick__REACT_HOT_LOADER__(_ref2) {
      var event = _ref2.event,
          index = _ref2.index,
          rowData = _ref2.rowData;
      this.props.onRowClick && this.props.onRowClick(event, index, rowData);
    }
  }, {
    key: "__onRowDoubleClick__REACT_HOT_LOADER__",
    value: function __onRowDoubleClick__REACT_HOT_LOADER__(_ref3) {
      var event = _ref3.event,
          index = _ref3.index,
          rowData = _ref3.rowData;
      this.props.onRowDoubleClick && this.props.onRowDoubleClick(event, index, rowData);
    }
  }, {
    key: "__selectedAll__REACT_HOT_LOADER__",
    value: function __selectedAll__REACT_HOT_LOADER__(e) {
      var isChecked = e.target.checked;

      if (this.props.rowSelection.selectedAll) {
        this.props.rowSelection.selectedAll(isChecked, isChecked ? this.allRowKeys : [], isChecked ? this.props.dataSource : []);
      }
    }
  }, {
    key: "__onSelect__REACT_HOT_LOADER__",
    value: function __onSelect__REACT_HOT_LOADER__(e, cellData, rowData) {
      e && e.stopPropagation();
      var _selectedKeys = this.props.rowSelection.selectedKeys;
      var dataSource = this.props.dataSource;
      var rowKey = this.props.rowKey;
      var isChecked = e.target.checked;
      var selectedKeys = [];
      var selectedRows = [];

      if (!isChecked) {
        selectedKeys = _toConsumableArray(_selectedKeys).filter(function (element) {
          return element !== cellData;
        });
      } else {
        selectedKeys = [].concat(_toConsumableArray(_selectedKeys), [cellData]);
      }

      selectedRows = _toConsumableArray(dataSource).filter(function (item) {
        return selectedKeys.includes(item[rowKey]);
      });
      this.props.rowSelection.onSelected && this.props.rowSelection.onSelected(isChecked, selectedKeys, selectedRows, cellData, rowData);
    }
  }, {
    key: "__checkboxHandler__REACT_HOT_LOADER__",
    value: function __checkboxHandler__REACT_HOT_LOADER__(e) {
      e && e.stopPropagation();
    }
  }, {
    key: "__getTableHeader__REACT_HOT_LOADER__",
    value: function __getTableHeader__REACT_HOT_LOADER__(e) {
      this.centerTableHeader = e;
    }
  }, {
    key: "__getTableGrid__REACT_HOT_LOADER__",
    value: function __getTableGrid__REACT_HOT_LOADER__(e) {
      if (e) {
        this.gridBody = ReactDOM.findDOMNode(e.Grid);

        this._addGridScrollListener();
      }
    }
  }, {
    key: "__getLeftTable__REACT_HOT_LOADER__",
    value: function __getLeftTable__REACT_HOT_LOADER__(e) {
      this.leftTable = e;

      if (e) {
        this.leftTableBody = ReactDOM.findDOMNode(e.Grid);
      }
    }
  }, {
    key: "__getRightTable__REACT_HOT_LOADER__",
    value: function __getRightTable__REACT_HOT_LOADER__(e) {
      this.rightTable = e;

      if (e) {
        this.rightTableBody = ReactDOM.findDOMNode(e.Grid);
      }
    }
  }, {
    key: "__listenCenterTableScroll__REACT_HOT_LOADER__",
    value: function __listenCenterTableScroll__REACT_HOT_LOADER__() {
      var _this30 = this;

      var centerTable = this.gridBody; // 禁用左右固定table的scroll事件
      // setTimeout(() => {

      function wheel(event) {
        var e = event || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      }

      var leftTable = ReactDOM.findDOMNode(this.leftTable);
      this.ReactVirtual__table__fixed_left = leftTable && leftTable.querySelector('.ReactVirtualized__Table__Grid');
      this.ReactVirtual__table__fixed_left && (this.ReactVirtual__table__fixed_left.onmousewheel = wheel);
      var rightTable = ReactDOM.findDOMNode(this.rightTable);
      this.ReactVirtual__table__fixed_right = rightTable && rightTable.querySelector('.ReactVirtualized__Table__Grid');
      this.ReactVirtual__table__fixed_right && (this.ReactVirtual__table__fixed_right.onmousewheel = wheel); // }, 1000);
      // 监听center__table的scroll事件
      // 防抖处理

      centerTable && (centerTable.onscroll = debounce(function (e) {
        _this30.ReactVirtual__table__fixed_left && (_this30.ReactVirtual__table__fixed_left.scrollTop = e.target.scrollTop);
        _this30.ReactVirtual__table__fixed_right && (_this30.ReactVirtual__table__fixed_right.scrollTop = e.target.scrollTop);
      }, 350));
    }
  }, {
    key: "__setFixedTable__REACT_HOT_LOADER__",
    value: function __setFixedTable__REACT_HOT_LOADER__() {
      var visibleHeight = this.setVisibleHeight();
      var scrollbarWidth = this.setScrollbarWidth(); // const { tableHeight } = this.state;

      if (visibleHeight !== this.visibleHeight) {
        this.visibleHeight = visibleHeight;
        this.leftTableBody && (this.leftTableBody.style.height = "".concat(visibleHeight, "px"));
        this.rightTableBody && (this.rightTableBody.style.height = "".concat(visibleHeight, "px"));
      }

      if (scrollbarWidth !== this.scrollbarWidth) {
        this.scrollbarWidth = scrollbarWidth;
        var centerTableScrollPadding = this.scrollbarWidth; // virtualTable 在出现滚动条时会给table加 数值为滚动条宽度的 paddingRight

        this.rightTable && (ReactDOM.findDOMNode(this.rightTable).style.right = "".concat(scrollbarWidth, "px"));
        this.rightTable && (ReactDOM.findDOMNode(this.rightTable).style.paddingRight = "".concat(centerTableScrollPadding, "px"));
        this.centerTableHeader && (this.centerTableHeader.style.marginRight = "".concat(centerTableScrollPadding, "px"));
      }
    }
  }, {
    key: "__setVisibleHeight__REACT_HOT_LOADER__",
    value: function __setVisibleHeight__REACT_HOT_LOADER__() {
      return this.gridBody.clientHeight || 0;
    }
  }, {
    key: "setScrollbarWidth",
    value: function setScrollbarWidth() {
      if (this.gridBody) {
        var Grid = this.gridBody;
        var clientWidth = Grid.clientWidth || 0;
        var offsetWidth = Grid.offsetWidth || 0;
        return offsetWidth - clientWidth;
      }

      return 0;
    }
  }, {
    key: "___addGridScrollListener__REACT_HOT_LOADER__",
    value: function ___addGridScrollListener__REACT_HOT_LOADER__() {
      var _this31 = this;

      var _this = this;

      this.gridBody.addEventListener('scroll', function () {
        _this.centerTableHeader.children[0].style.left = "".concat(-_this31.scrollLeft, "px");
      });
    }
  }, {
    key: "_onScrollToRowChange",
    value: function _onScrollToRowChange(value) {
      if (!value && value !== 0) {
        return;
      }

      var dataSource = this.state.dataSource;
      var scrollToIndex = Math.min(dataSource.size, parseInt(value, 10));

      if (isNaN(scrollToIndex)) {
        scrollToIndex = undefined;
      }

      this.gridBody.scrollTop = scrollToIndex * this.rowHeight;
    }
  }, {
    key: "___initScrollToIndex__REACT_HOT_LOADER__",
    value: function ___initScrollToIndex__REACT_HOT_LOADER__() {
      this.SearchDataKey = '';
      this.SearchIndexList = [];
      this.SearchIndex = 0;
    }
  }, {
    key: "___defaultTableHeaderRowRenderer__REACT_HOT_LOADER__",
    value: function ___defaultTableHeaderRowRenderer__REACT_HOT_LOADER__(props, tableType) {
      var _this32 = this;

      var columns = props.columns;
      var SearchColumns = columns.map(function (item) {
        var _item$props = item.props,
            cellRenderer = _item$props.cellRenderer,
            dataKey = _item$props.dataKey,
            label = _item$props.label,
            disableSearch = _item$props.disableSearch;
        var key = item.key;
        return React.createElement(Resizable, {
          key: "".concat(key, "_resizable"),
          height: _this32.rowHeight,
          width: item.props.style.width,
          style: {
            outline: '1px solid #fff'
          },
          onResize: function onResize(e, _ref4) {
            var size = _ref4.size;
            var propsColumns = _this32.state.columnsData;

            _this32.setState(function () {
              var nextColumns = propsColumns.map(function (columnsItem) {
                if (columnsItem.dataIndex === dataKey) {
                  return _objectSpread({}, columnsItem, {
                    width: size.width
                  });
                }

                return _objectSpread({}, columnsItem);
              });
              return {
                columnsData: nextColumns,
                Columns: _this32.formatColumns(nextColumns)
              };
            });
          },
          draggableOpts: {
            enableUserSelectHack: false
          }
        }, disableSearch ? item : React.createElement("div", {
          className: "ReactVirtual__Table__Search__Header__Warpper"
        }, React.createElement("div", {
          className: "ReactVirtual__Table__Search__Header__Label"
        }, item), React.createElement("div", {
          className: "ReactVirtual__Table__Search__Header__Search"
        }, React.createElement(_Popover, {
          content: React.createElement("div", null, React.createElement(Search, {
            ref: function ref(node) {
              _this32.searchInput = node;
            },
            placeholder: "\u67E5\u8BE2".concat(label),
            onSearch: function onSearch(text) {
              var SearchIndexList = [];
              var SearchDataKey = dataKey + text;

              if (_this32.SearchDataKey !== SearchDataKey) {
                _this32.state.dataSource.map(function (record, rowIndex) {
                  var value = record[dataKey];

                  if (typeof cellRenderer === 'function') {
                    var getText = function getText(val) {
                      if (_typeof(val) === 'object') {
                        return getText(val.props.children) || '';
                      }

                      return val;
                    };

                    value = cellRenderer({
                      cellData: value,
                      rowData: record,
                      rowIndex: rowIndex
                    });
                    value = getText(value);
                  }

                  if (value && value.indexOf(text) > -1) {
                    SearchIndexList.push(rowIndex);
                  }

                  return item;
                });

                _this32.SearchDataKey = SearchDataKey;
                _this32.SearchIndexList = SearchIndexList;
                _this32.SearchIndex = 0;
              } else {
                _this32.SearchIndex++;
              }

              _this32._onScrollToRowChange(_this32.SearchIndexList[_this32.SearchIndex % _this32.SearchIndexList.length]);
            },
            style: {
              width: 188,
              marginBottom: 8,
              display: 'block'
            }
          })),
          placement: "topRight",
          trigger: "click"
        }, React.createElement(_Icon, {
          type: "search"
        })))));
      });
      return React.createElement("div", {
        style: {
          background: '#5a6a82',
          overflow: 'hidden',
          borderTopLeftRadius: tableType === 'right' || tableType === 'center' ? '5px' : '',
          borderTopRightRadius: tableType === 'right' ? '' : '5px'
        },
        ref: tableType === 'center' ? this.getTableHeader : ''
      }, defaultTableHeaderRowRenderer(_objectSpread({}, props, {
        columns: SearchColumns,
        style: _objectSpread({}, props.style, {
          position: 'relative',
          overflow: 'visible' // 覆盖

        })
      })));
    }
  }, {
    key: "__setRowClassnames__REACT_HOT_LOADER__",
    value: function __setRowClassnames__REACT_HOT_LOADER__(index) {
      var _this$props = this.props,
          rowKey = _this$props.rowKey,
          rowSelection = _this$props.rowSelection,
          setRowClassnames = _this$props.setRowClassnames;
      var rowClassName = index % 2 === 1 ? 'ReactVirtual_form-row-odd' : 'ReactVirtual_form-row-noodd';
      var _this$state = this.state,
          _this$state$dataSourc = _this$state.dataSource,
          dataSource = _this$state$dataSourc === void 0 ? {} : _this$state$dataSourc,
          expandedRowKeys = _this$state.expandedRowKeys;
      var currentLineRowKey = index > -1 && dataSource.get(index)[rowKey];
      var rowClass = setRowClassnames && (typeof setRowClassnames === 'function' ? setRowClassnames({
        index: index,
        record: dataSource.get(index)
      }) : setRowClassnames);

      if (rowClass) {
        rowClassName += " ".concat(rowClass);
      }

      if (!currentLineRowKey) {
        return '';
      }

      var isSelected = rowSelection && rowSelection.selectedKeys.includes(currentLineRowKey);

      if (isSelected) {
        rowClassName += ' ReactVirtualized__Row__selected';
      } // 子表悬显，row背景色


      if (expandedRowKeys.includes(currentLineRowKey)) {
        rowClassName += ' ReactVirtualized__ExpandedRow';
      }

      return rowClassName;
    }
  }, {
    key: "___defaultSort__REACT_HOT_LOADER__",
    value: function ___defaultSort__REACT_HOT_LOADER__() {
      var dataSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var dataSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _this$props2 = this.props,
          sortBy = _this$props2.sortBy,
          sortDirection = _this$props2.sortDirection;
      return this._sortList({
        sortBy: sortBy,
        sortDirection: sortDirection,
        dataSource: dataSource
      });
    }
  }, {
    key: "___sort__REACT_HOT_LOADER__",
    value: function ___sort__REACT_HOT_LOADER__(_ref5) {
      var sortBy = _ref5.sortBy,
          sortDirection = _ref5.sortDirection;
      var onSort = this.props.onSort;

      if (onSort) {
        onSort({
          sortBy: sortBy,
          sortDirection: sortDirection,
          virtualTableInstance: this
        });
      } else {
        var sortedDataSource = this._sortList({
          sortBy: sortBy,
          sortDirection: sortDirection,
          dataSource: this.props.dataSource
        });

        this.setState({
          dataSource: sortedDataSource
        });
      }

      this.setState({
        sortBy: sortBy,
        sortDirection: sortDirection
      });
    }
  }, {
    key: "___sortList__REACT_HOT_LOADER__",
    value: function ___sortList__REACT_HOT_LOADER__(_ref6) {
      var sortBy = _ref6.sortBy,
          sortDirection = _ref6.sortDirection,
          _ref6$dataSource = _ref6.dataSource,
          dataSource = _ref6$dataSource === void 0 ? [] : _ref6$dataSource;
      // dataSource = (dataSource.length ? dataSource : this.props.dataSource) || [];
      var list = Immutable.List(dataSource);

      if (dataSource && dataSource.length && sortBy) {
        return list.sortBy(function (item) {
          return item[sortBy];
        }).update(function (listItem) {
          return sortDirection === SortDirection.DESC ? listItem.reverse() : listItem;
        });
      }

      return list;
    }
  }, {
    key: "_getDatum",
    value: function _getDatum(list, index) {
      return list.get(index % list.size);
    }
  }, {
    key: "__diffFixedColumns__REACT_HOT_LOADER__",
    value: function __diffFixedColumns__REACT_HOT_LOADER__() {
      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var leftColumns = [];
      var rightColumns = [];
      var centerColumns = [];
      columns.forEach(function (item) {
        if (item.fixed === 'right') {
          rightColumns.push(item);
        } else if (item.fixed === 'left') {
          leftColumns.push(item);
        } else {
          centerColumns.push(item);
        }
      });
      return {
        leftColumns: leftColumns,
        rightColumns: rightColumns,
        centerColumns: leftColumns.concat(centerColumns).concat(rightColumns) // 解决配置情况下  左右固定列乱序的情况

      };
    }
  }, {
    key: "__transColumns__REACT_HOT_LOADER__",
    value: function __transColumns__REACT_HOT_LOADER__() {
      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return columns.map(function (item) {
        var cellRenderer = item.render ? function (_ref7) {
          var cellData = _ref7.cellData,
              rowData = _ref7.rowData,
              rowIndex = _ref7.rowIndex;
          var returnItem = item.render(cellData, rowData, rowIndex);

          if (isPlainObject(returnItem)) {
            if (returnItem.$$typeof) {
              return returnItem;
            }

            return '';
          } // 判断render返回值是否为纯粹的函数    暂时解决当react子节点为object时报错的问题


          return returnItem;
        } : function (_ref8) {
          var cellData = _ref8.cellData;
          return cellData;
        };
        return React.createElement(Column, {
          key: item.dataIndex,
          flexShrink: 0,
          label: item.title,
          cellRenderer: cellRenderer,
          dataKey: item.dataIndex,
          disableSort: !item.sorter,
          disableSearch: item.disableSearch,
          width: parseInt(item.width, 10) || 100
        });
      });
    }
  }, {
    key: "__handleExpandedRowIcon__REACT_HOT_LOADER__",
    value: function __handleExpandedRowIcon__REACT_HOT_LOADER__(e) {
      e && e.stopPropagation();
    }
  }, {
    key: "__PopoverVisibleChange__REACT_HOT_LOADER__",
    value: function __PopoverVisibleChange__REACT_HOT_LOADER__(rowKey, visible) {
      var expandedRowKeys = visible ? [].concat(_toConsumableArray(this.state.expandedRowKeys), [rowKey]) : _toConsumableArray(this.state.expandedRowKeys).filter(function (key) {
        return key !== rowKey;
      });
      this.setState({
        expandedRowKeys: expandedRowKeys
      });
    }
  }, {
    key: "__handleExpandedCancel__REACT_HOT_LOADER__",
    value: function __handleExpandedCancel__REACT_HOT_LOADER__() {
      var _this33 = this;

      var documentOriginalHandler = document.onclick;

      document.onclick = function (event) {
        // handle original cb
        documentOriginalHandler && documentOriginalHandler();

        if (event && event.target.className.indexOf('ReactVirtual__expandedRow__icon') > -1) {
          return;
        } // 当前若存在展开项收起


        if (_this33.expandedRowIsOpen) {
          var filterKeys = _toConsumableArray(_this33.state.expandedRowKeys).filter(function (key) {
            return key !== _this33.expandedRowIsOpen;
          });

          _this33.setState({
            expandedRowKeys: filterKeys
          }, function () {
            _this33.expandedRowIsOpen = null;
          });
        }
      };
    }
  }, {
    key: "__formatColumns__REACT_HOT_LOADER__",
    value: function __formatColumns__REACT_HOT_LOADER__() {
      var _this34 = this;

      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var Columns = this.diffFixedColumns(columns);
      Object.keys(Columns).forEach(function (item) {
        Columns[item] = _this34.transColumns(Columns[item]);
      });
      return Columns;
    }
  }, {
    key: "__getPrefixColumns__REACT_HOT_LOADER__",
    value: function __getPrefixColumns__REACT_HOT_LOADER__() {
      var _this35 = this;

      var _this$props3 = this.props,
          ExpandedRowRender = _this$props3.ExpandedRowRender,
          rowSelection = _this$props3.rowSelection,
          rowKey = _this$props3.rowKey,
          showIndex = _this$props3.showIndex,
          onExpand = _this$props3.onExpand;
      var ExpandedRowRenderColumn = ExpandedRowRender ? React.createElement(Column, {
        flexShrink: 0,
        cellRenderer: function cellRenderer(_ref9) {
          var rowData = _ref9.rowData;
          return React.createElement(_Popover, {
            overlayClassName: "ReactVirtual__Popover",
            content: React.createElement(PopoverContainer, null, React.createElement(ExpandedRowRender, {
              rowData: rowData
            })),
            placement: "bottomLeft",
            title: "",
            trigger: "click",
            onVisibleChange: onExpand ? function (visible) {
              _this35.PopoverVisibleChange(rowData[rowKey], visible);

              onExpand(visible, rowData);
            } : null
          }, React.createElement("span", {
            className: "ReactVirtual__expandedRow__icon",
            onClick: function onClick(e) {
              return _this35.handleExpandedRowIcon(e, rowData[rowKey]);
            }
          }, _this35.state.expandedRowKeys.includes(rowData[rowKey]) ? '-' : '+'));
        },
        key: 'index',
        dataKey: 'index',
        width: 32,
        disableSort: true,
        disableSearch: true
      }) : null;
      var rowSelectionColumn = rowSelection ? React.createElement(Column, {
        label: React.createElement(_Checkbox, {
          onChange: function onChange(e) {
            return _this35.selectedAll(e);
          }
        }),
        flexShrink: 0,
        cellRenderer: function cellRenderer(_ref10) {
          var cellData = _ref10.cellData,
              rowData = _ref10.rowData,
              rowIndex = _ref10.rowIndex;
          return React.createElement(_Checkbox, {
            "data-rowKey": cellData,
            checked: rowSelection.selectedKeys.includes(cellData),
            onChange: function onChange(e) {
              return _this35.onSelect(e, cellData, rowData, rowIndex);
            },
            onClick: _this35.checkboxHandler
          });
        },
        key: rowKey,
        dataKey: rowKey,
        width: 40,
        disableSort: true,
        disableSearch: true
      }) : null;
      var showIndexColumn = showIndex ? React.createElement(Column, {
        flexShrink: 0,
        label: '',
        cellRenderer: function cellRenderer(_ref11) {
          var rowIndex = _ref11.rowIndex;
          return rowIndex + 1;
        },
        key: 'index',
        dataKey: "index",
        width: 40,
        disableSort: true,
        disableSearch: true
      }) : null;
      return [ExpandedRowRenderColumn, rowSelectionColumn, showIndexColumn];
    }
  }, {
    key: "noRowsRenderer",
    value: function noRowsRenderer() {
      return React.createElement("div", {
        style: {
          textAlign: 'center',
          lineHeight: '30px',
          borderBottom: '1px solid #e8e8e8',
          color: 'rgba(0,0,0,0.45)'
        }
      }, "\u6682\u65E0\u6570\u636E");
    }
  }, {
    key: "render",
    value: function render() {
      var _this36 = this;

      var _this$props4 = this.props,
          pagination = _this$props4.pagination,
          _this$props4$height = _this$props4.height,
          height = _this$props4$height === void 0 ? 300 : _this$props4$height,
          _this$props4$loading = _this$props4.loading,
          loading = _this$props4$loading === void 0 ? false : _this$props4$loading;
      var _this$state2 = this.state,
          _this$state2$dataSour = _this$state2.dataSource,
          dataSource = _this$state2$dataSour === void 0 ? {} : _this$state2$dataSour,
          _this$state2$Columns = _this$state2.Columns,
          Columns = _this$state2$Columns === void 0 ? {} : _this$state2$Columns;
      var _Columns$leftColumns = Columns.leftColumns,
          leftColumns = _Columns$leftColumns === void 0 ? [] : _Columns$leftColumns,
          _Columns$rightColumns = Columns.rightColumns,
          rightColumns = _Columns$rightColumns === void 0 ? [] : _Columns$rightColumns,
          _Columns$centerColumn = Columns.centerColumns,
          centerColumns = _Columns$centerColumn === void 0 ? [] : _Columns$centerColumn;
      return React.createElement("div", {
        className: "ReactVirtual__Table__container"
      }, React.createElement(_Spin, {
        spinning: loading
      }, Boolean(leftColumns.length) && React.createElement(Table, {
        width: 120,
        height: height,
        className: "ReactVirtual__Table_left",
        headerHeight: 30,
        headerClassName: 'table_head_style',
        rowHeight: this.rowHeight,
        onRowClick: this.onRowClick,
        onRowDoubleClick: this.onRowDoubleClick // onRowMouseOut={()=>{
        //     this.setState({
        //         hoverIndex: -1
        //     })
        // }}
        // onRowMouseOver={({event, index}) => {
        //     this.setState({
        //         hoverIndex: index
        //     })
        // }}
        ,
        rowCount: dataSource.size || 0,
        rowGetter: function rowGetter(_ref12) {
          var index = _ref12.index;
          return _this36._getDatum(dataSource, index);
        },
        rowClassName: function rowClassName(_ref13) {
          var index = _ref13.index;
          return _this36.setRowClassnames(index);
        },
        headerRowRenderer: function headerRowRenderer(props) {
          return _this36._defaultTableHeaderRowRenderer(props, 'right');
        },
        ref: this.getLeftTable,
        sort: this._sort,
        sortBy: this.state.sortBy,
        sortDirection: this.state.sortDirection
      }, this.getPrefixColumns(), leftColumns), React.createElement(Table, {
        width: 900,
        height: height,
        className: "ReactVirtual__Table__center",
        headerHeight: 30,
        headerClassName: 'table_head_style',
        rowHeight: this.rowHeight,
        onRowClick: this.onRowClick,
        onRowDoubleClick: this.onRowDoubleClick,
        noRowsRenderer: this.noRowsRenderer // onRowMouseOut={()=>{
        //     this.setState({
        //         hoverIndex: -1
        //     })
        // }}
        // onRowMouseOver={({index}) => {
        //     this.setState({
        //         hoverIndex: index
        //     })
        // }}
        // onRowMouseOut={({event, index}) => {
        //   event.preventDefault();
        //   let currentLine = document.querySelector(`.ReactVirtualized__Table__row[aria-rowindex='${index + 1}']`);
        //   let classNames = currentLine.className.split(' ');
        //   classNames = classNames.filter(className => !(className.indexOf('ReactVirtual__Table__hover') > -1));
        //   currentLine.className = classNames.join(' ');
        // }}
        // onRowMouseOver={({event, index}) => {
        //   event.preventDefault();
        //   let currentLine = document.querySelector(`.ReactVirtualized__Table__row[aria-rowindex='${index + 1}']`);
        //   currentLine.className = `${currentLine.className} ReactVirtual__Table__hover`;
        // }}
        ,
        rowCount: dataSource.size,
        rowGetter: function rowGetter(_ref14) {
          var index = _ref14.index;
          return _this36._getDatum(dataSource, index);
        },
        rowClassName: function rowClassName(_ref15) {
          var index = _ref15.index;
          return _this36.setRowClassnames(index);
        },
        headerRowRenderer: function headerRowRenderer(props) {
          return _this36._defaultTableHeaderRowRenderer(props, 'center');
        },
        ref: this.getTableGrid,
        sort: this._sort,
        sortBy: this.state.sortBy,
        sortDirection: this.state.sortDirection
      }, this.getPrefixColumns(), centerColumns), Boolean(rightColumns.length) && React.createElement(Table, {
        width: 120,
        height: height,
        className: "ReactVirtual__Table_right",
        headerHeight: 30,
        headerClassName: 'table_head_style',
        rowHeight: this.rowHeight,
        onRowClick: this.onRowClick,
        onRowDoubleClick: this.onRowDoubleClick // onRowMouseOut={()=>{
        //     this.setState({
        //         hoverIndex: -1
        //     })
        // }}
        // onRowMouseOver={({index}) => {
        //     this.setState({
        //         hoverIndex: index
        //     })
        // }}
        ,
        rowCount: dataSource.size,
        rowGetter: function rowGetter(_ref16) {
          var index = _ref16.index;
          return _this36._getDatum(dataSource, index);
        },
        rowClassName: function rowClassName(_ref17) {
          var index = _ref17.index;
          return _this36.setRowClassnames(index);
        },
        headerRowRenderer: this._defaultTableHeaderRowRenderer,
        ref: this.getRightTable,
        sort: this._sort,
        sortBy: this.state.sortBy,
        sortDirection: this.state.sortDirection
      }, rightColumns), Boolean(dataSource.size && pagination) && React.createElement(_Pagination, _extends({
        size: "small",
        className: "ReactVirtual__Table__pagination"
      }, pagination))));
    }
  }]);

  return VirtualTable;
}(Component);

VirtualTable.propTypes = {
  dataSource: PropTypes.array,
  rowSelection: PropTypes.object,
  pagination: PropTypes.object,
  rowKey: PropTypes.string,
  onRowDoubleClick: PropTypes.func,
  onRowClick: PropTypes.func,
  showIndex: PropTypes.bool,
  onExpand: PropTypes.func,
  ExpandedRowRender: PropTypes.func,
  columns: PropTypes.array,
  height: PropTypes.number,
  onSort: PropTypes.func,
  sortBy: PropTypes.string,
  sortDirection: PropTypes.string,
  loading: PropTypes.bool,
  scrollToDataKey: PropTypes.string,
  setRowClassnames: PropTypes.func
};
export { VirtualTable as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Search, "Search", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/MyVirtualTable.js");

  __REACT_HOT_LOADER__.register(PopoverContainer, "PopoverContainer", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/MyVirtualTable.js");

  __REACT_HOT_LOADER__.register(VirtualTable, "VirtualTable", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/MyVirtualTable.js");
}();

;