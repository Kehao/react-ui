import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import clsx from 'clsx';
import CodeMirror from 'react-codemirror';
import * as React from 'react';
import { ContentBox, ContentBoxHeader } from '../ContentBox';
import generate from './Generator';
import styles from './Wizard.css';

require('codemirror/mode/jsx/jsx');

var codeMirrorOptions = {
  mode: 'jsx',
  theme: 'dracula'
}; // @TODO Clean up this class; it's pretty hacky.

var Wizard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wizard, _React$Component);

  function Wizard(props) {
    var _this;

    _classCallCheck(this, Wizard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wizard).call(this, props));

    _this.updateState = function () {
      var _this2;

      return (_this2 = _this).__updateState__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.state = {
      key: 0,
      cellsHaveKnownHeight: true,
      cellsHaveKnownWidth: true,
      cellsHaveUniformHeight: true,
      cellsHaveUniformWidth: true,
      collectionHasFixedHeight: false,
      collectionHasFixedWidth: false,
      doNotVirtualizeColumns: false,
      hasMultipleColumns: true,
      hasMultipleRows: true,
      nonCheckerboardPattern: false
    };
    return _this;
  } // TODO Remove this key hack once JedWatson/react-codemirror/issues/106 is fixed


  _createClass(Wizard, [{
    key: "__updateState__REACT_HOT_LOADER__",
    value: function __updateState__REACT_HOT_LOADER__() {
      return this.__updateState__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__updateState__REACT_HOT_LOADER__",
    value: function __updateState__REACT_HOT_LOADER__(obj) {
      return this.setState(function (state) {
        return _objectSpread({}, obj, {
          key: state.key + 1
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var state = this._sanitizeState();

      var markup = generate(state);
      var cellsHaveKnownHeight = state.cellsHaveKnownHeight,
          cellsHaveKnownWidth = state.cellsHaveKnownWidth,
          cellsHaveUniformHeight = state.cellsHaveUniformHeight,
          cellsHaveUniformWidth = state.cellsHaveUniformWidth,
          collectionHasFixedHeight = state.collectionHasFixedHeight,
          collectionHasFixedWidth = state.collectionHasFixedWidth,
          doNotVirtualizeColumns = state.doNotVirtualizeColumns,
          hasMultipleColumns = state.hasMultipleColumns,
          hasMultipleRows = state.hasMultipleRows,
          nonCheckerboardPattern = state.nonCheckerboardPattern;
      return React.createElement("div", {
        className: styles.Wrapper
      }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, {
        text: "Collection Layout and Sizing"
      }), React.createElement(Option, {
        checked: hasMultipleRows,
        label: "Will your collection have more than 1 row of data?",
        onChange: function onChange(hasMultipleRows) {
          return _this3.updateState({
            hasMultipleRows: hasMultipleRows
          });
        }
      }), React.createElement(Option, {
        checked: hasMultipleColumns,
        label: "Will your collection have more than 1 column of data?",
        onChange: function onChange(hasMultipleColumns) {
          return _this3.updateState({
            hasMultipleColumns: hasMultipleColumns
          });
        }
      }), React.createElement(Option, {
        checked: doNotVirtualizeColumns,
        disabled: !hasMultipleColumns,
        label: "Should all your columns be visible at once?",
        onChange: function onChange(doNotVirtualizeColumns) {
          return _this3.updateState({
            doNotVirtualizeColumns: doNotVirtualizeColumns
          });
        }
      }), React.createElement(Option, {
        checked: nonCheckerboardPattern,
        disabled: !hasMultipleColumns || !hasMultipleRows,
        label: "Is your data scattered (not in a checkerboard pattern)?",
        onChange: function onChange(nonCheckerboardPattern) {
          return _this3.updateState({
            nonCheckerboardPattern: nonCheckerboardPattern
          });
        }
      }), React.createElement(Option, {
        disabled: !hasMultipleRows && !hasMultipleColumns,
        checked: collectionHasFixedHeight,
        label: "Does your collection have a fixed height?",
        onChange: function onChange(collectionHasFixedHeight) {
          return _this3.updateState({
            collectionHasFixedHeight: collectionHasFixedHeight
          });
        }
      }), React.createElement(Option, {
        disabled: !hasMultipleRows && !hasMultipleColumns,
        checked: collectionHasFixedWidth,
        label: "Does your collection have a fixed width?",
        onChange: function onChange(collectionHasFixedWidth) {
          return _this3.updateState({
            collectionHasFixedWidth: collectionHasFixedWidth
          });
        }
      })), React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, {
        text: "Cell Sizing"
      }), React.createElement(Option, {
        disabled: nonCheckerboardPattern || doNotVirtualizeColumns || !cellsHaveKnownWidth || !hasMultipleRows && !hasMultipleColumns,
        checked: cellsHaveKnownHeight && !nonCheckerboardPattern && !doNotVirtualizeColumns,
        label: "Do you know the height of your rows ahead of time?",
        onChange: function onChange(cellsHaveKnownHeight) {
          return _this3.updateState({
            cellsHaveKnownHeight: cellsHaveKnownHeight
          });
        }
      }), React.createElement(Option, {
        disabled: nonCheckerboardPattern || doNotVirtualizeColumns || !cellsHaveKnownHeight || !hasMultipleRows && !hasMultipleColumns,
        checked: cellsHaveKnownWidth && !nonCheckerboardPattern && !doNotVirtualizeColumns,
        label: "Do you know the width of your columns ahead of time?",
        onChange: function onChange(cellsHaveKnownWidth) {
          return _this3.updateState({
            cellsHaveKnownWidth: cellsHaveKnownWidth
          });
        }
      }), React.createElement(Option, {
        checked: cellsHaveUniformHeight,
        disabled: !hasMultipleRows || nonCheckerboardPattern || !cellsHaveKnownHeight,
        label: "Are all of your rows the same height?",
        onChange: function onChange(cellsHaveUniformHeight) {
          return _this3.updateState({
            cellsHaveUniformHeight: cellsHaveUniformHeight
          });
        }
      }), React.createElement(Option, {
        checked: cellsHaveUniformWidth,
        disabled: !hasMultipleColumns || nonCheckerboardPattern || !cellsHaveKnownWidth,
        label: "Are all of your columns the same width?",
        onChange: function onChange(cellsHaveUniformWidth) {
          return _this3.updateState({
            cellsHaveUniformWidth: cellsHaveUniformWidth
          });
        }
      })), React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, {
        text: "Suggested Starting Point"
      }), React.createElement(CodeMirror, {
        options: codeMirrorOptions,
        value: markup,
        key: this.state.key
      })));
    }
  }, {
    key: "_sanitizeState",
    value: function _sanitizeState() {
      var _this$state = this.state,
          cellsHaveKnownHeight = _this$state.cellsHaveKnownHeight,
          cellsHaveKnownWidth = _this$state.cellsHaveKnownWidth,
          cellsHaveUniformHeight = _this$state.cellsHaveUniformHeight,
          cellsHaveUniformWidth = _this$state.cellsHaveUniformWidth,
          collectionHasFixedHeight = _this$state.collectionHasFixedHeight,
          collectionHasFixedWidth = _this$state.collectionHasFixedWidth,
          doNotVirtualizeColumns = _this$state.doNotVirtualizeColumns,
          hasMultipleColumns = _this$state.hasMultipleColumns,
          hasMultipleRows = _this$state.hasMultipleRows,
          nonCheckerboardPattern = _this$state.nonCheckerboardPattern;
      return {
        cellsHaveKnownHeight: cellsHaveKnownHeight,
        cellsHaveKnownWidth: cellsHaveKnownWidth,
        cellsHaveUniformHeight: cellsHaveUniformHeight && hasMultipleRows && !nonCheckerboardPattern && cellsHaveKnownHeight,
        cellsHaveUniformWidth: cellsHaveUniformWidth && hasMultipleColumns && !nonCheckerboardPattern && cellsHaveKnownWidth,
        collectionHasFixedHeight: collectionHasFixedHeight,
        collectionHasFixedWidth: collectionHasFixedWidth,
        doNotVirtualizeColumns: doNotVirtualizeColumns && hasMultipleColumns,
        hasMultipleColumns: hasMultipleColumns,
        hasMultipleRows: hasMultipleRows,
        nonCheckerboardPattern: nonCheckerboardPattern && hasMultipleColumns && hasMultipleRows
      };
    }
  }]);

  return Wizard;
}(React.Component);

export { Wizard as default };

function Option(_ref) {
  var checked = _ref.checked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      label = _ref.label,
      _onChange = _ref.onChange;
  return React.createElement("div", {
    className: clsx(styles.Option, _defineProperty({}, styles.OptionDisabled, disabled))
  }, React.createElement("label", {
    className: styles.Label
  }, React.createElement("input", {
    checked: checked,
    className: styles.Input,
    disabled: disabled,
    onChange: function onChange(event) {
      return _onChange(event.target.checked);
    },
    type: "checkbox"
  }), label));
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(codeMirrorOptions, "codeMirrorOptions", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Wizard.js");

  __REACT_HOT_LOADER__.register(Wizard, "Wizard", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Wizard.js");

  __REACT_HOT_LOADER__.register(Option, "Option", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Wizard/Wizard.js");
}();

;