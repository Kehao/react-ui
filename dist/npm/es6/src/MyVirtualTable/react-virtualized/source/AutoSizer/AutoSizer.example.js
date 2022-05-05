import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import { List as ImmutableList } from 'immutable';
import PropTypes from 'prop-types';
import * as React from 'react';
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox';
import AutoSizer from './AutoSizer';
import List from '../List';
import styles from './AutoSizer.example.css';

var AutoSizerExample =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AutoSizerExample, _React$PureComponent);

  function AutoSizerExample() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AutoSizerExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AutoSizerExample)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      hideDescription: false
    };

    _this._rowRenderer = function () {
      var _this2;

      return (_this2 = _this).___rowRenderer__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    return _this;
  }

  _createClass(AutoSizerExample, [{
    key: "___rowRenderer__REACT_HOT_LOADER__",
    value: function ___rowRenderer__REACT_HOT_LOADER__() {
      return this.___rowRenderer__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var list = this.context.list;
      var hideDescription = this.state.hideDescription;
      return React.createElement(ContentBox, _extends({}, this.props, {
        style: {
          height: 400
        }
      }), React.createElement(ContentBoxHeader, {
        text: "AutoSizer",
        sourceLink: "https://github.com/bvaughn/react-virtualized/blob/master/source/AutoSizer/AutoSizer.example.js",
        docsLink: "https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md"
      }), React.createElement(ContentBoxParagraph, null, React.createElement("label", {
        className: styles.checkboxLabel
      }, React.createElement("input", {
        "aria-label": "Hide description (to show resize)?",
        className: styles.checkbox,
        type: "checkbox",
        checked: hideDescription,
        onChange: function onChange(event) {
          return _this3.setState({
            hideDescription: event.target.checked
          });
        }
      }), "Hide description (to show resize)?")), !hideDescription && React.createElement(ContentBoxParagraph, null, "This component decorates ", React.createElement("code", null, "List"), ", ", React.createElement("code", null, "Table"), ", or any other component and automatically manages its width and height. It uses Sebastian Decima's", ' ', React.createElement("a", {
        href: "https://github.com/sdecima/javascript-detect-element-resize",
        target: "_blank"
      }, "element resize event"), ' ', "to determine the appropriate size. In this example", ' ', React.createElement("code", null, "AutoSizer"), " grows to fill the remaining width and height of this flex column."), React.createElement("div", {
        className: styles.AutoSizerWrapper
      }, React.createElement(AutoSizer, null, function (_ref) {
        var width = _ref.width,
            height = _ref.height;
        return React.createElement(List, {
          className: styles.List,
          height: height,
          rowCount: list.size,
          rowHeight: 30,
          rowRenderer: _this3._rowRenderer,
          width: width
        });
      })));
    }
  }, {
    key: "___rowRenderer__REACT_HOT_LOADER__",
    value: function ___rowRenderer__REACT_HOT_LOADER__(_ref2) {
      var index = _ref2.index,
          key = _ref2.key,
          style = _ref2.style;
      var list = this.context.list;
      var row = list.get(index);
      return React.createElement("div", {
        key: key,
        className: styles.row,
        style: style
      }, row.name);
    }
  }]);

  return AutoSizerExample;
}(React.PureComponent);

AutoSizerExample.contextTypes = {
  list: PropTypes.instanceOf(ImmutableList).isRequired
};
export { AutoSizerExample as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AutoSizerExample, "AutoSizerExample", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/AutoSizer/AutoSizer.example.js");
}();

;