"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _immutable = require("immutable");

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _ContentBox = require("../demo/ContentBox");

var _AutoSizer = _interopRequireDefault(require("./AutoSizer"));

var _List = _interopRequireDefault(require("../List"));

var _AutoSizerExample = _interopRequireDefault(require("./AutoSizer.example.css"));

var AutoSizerExample =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(AutoSizerExample, _React$PureComponent);

  function AutoSizerExample() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AutoSizerExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AutoSizerExample)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      hideDescription: false
    };

    _this._rowRenderer = function () {
      var _this2;

      return (_this2 = _this).___rowRenderer__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    return _this;
  }

  (0, _createClass2.default)(AutoSizerExample, [{
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
      return React.createElement(_ContentBox.ContentBox, (0, _extends2.default)({}, this.props, {
        style: {
          height: 400
        }
      }), React.createElement(_ContentBox.ContentBoxHeader, {
        text: "AutoSizer",
        sourceLink: "https://github.com/bvaughn/react-virtualized/blob/master/source/AutoSizer/AutoSizer.example.js",
        docsLink: "https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md"
      }), React.createElement(_ContentBox.ContentBoxParagraph, null, React.createElement("label", {
        className: _AutoSizerExample.default.checkboxLabel
      }, React.createElement("input", {
        "aria-label": "Hide description (to show resize)?",
        className: _AutoSizerExample.default.checkbox,
        type: "checkbox",
        checked: hideDescription,
        onChange: function onChange(event) {
          return _this3.setState({
            hideDescription: event.target.checked
          });
        }
      }), "Hide description (to show resize)?")), !hideDescription && React.createElement(_ContentBox.ContentBoxParagraph, null, "This component decorates ", React.createElement("code", null, "List"), ", ", React.createElement("code", null, "Table"), ", or any other component and automatically manages its width and height. It uses Sebastian Decima's", ' ', React.createElement("a", {
        href: "https://github.com/sdecima/javascript-detect-element-resize",
        target: "_blank"
      }, "element resize event"), ' ', "to determine the appropriate size. In this example", ' ', React.createElement("code", null, "AutoSizer"), " grows to fill the remaining width and height of this flex column."), React.createElement("div", {
        className: _AutoSizerExample.default.AutoSizerWrapper
      }, React.createElement(_AutoSizer.default, null, function (_ref) {
        var width = _ref.width,
            height = _ref.height;
        return React.createElement(_List.default, {
          className: _AutoSizerExample.default.List,
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
        className: _AutoSizerExample.default.row,
        style: style
      }, row.name);
    }
  }]);
  return AutoSizerExample;
}(React.PureComponent);

exports.default = AutoSizerExample;
AutoSizerExample.contextTypes = {
  list: _propTypes.default.instanceOf(_immutable.List).isRequired
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AutoSizerExample, "AutoSizerExample", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/AutoSizer/AutoSizer.example.js");
}();

;