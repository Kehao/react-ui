"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _codemirror = _interopRequireDefault(require("codemirror"));

require("codemirror/addon/comment/comment");

require("codemirror/keymap/sublime");

require("codemirror/lib/codemirror.css");

require("codemirror/mode/jsx/jsx");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

require("./style.scss");

var Editor =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Editor, _Component);

  function Editor() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Editor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Editor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getRef = function () {
      var _this2;

      return (_this2 = _this).__getRef__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    return _this;
  }

  (0, _createClass2.default)(Editor, [{
    key: "__getRef__REACT_HOT_LOADER__",
    value: function __getRef__REACT_HOT_LOADER__() {
      return this.__getRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;
      this.cm = (0, _codemirror.default)(this.editor, {
        mode: 'jsx',
        theme: 'react',
        keyMap: 'sublime',
        viewportMargin: Infinity,
        lineNumbers: false,
        dragDrop: false
      });
      this.cm.setValue(value);
      this.cm.on('changes', function (cm) {
        if (onChange) {
          clearTimeout(_this3.timeout);
          _this3.timeout = setTimeout(function () {
            onChange(cm.getValue());
          }, 300);
        }
      });
    }
  }, {
    key: "__getRef__REACT_HOT_LOADER__",
    value: function __getRef__REACT_HOT_LOADER__(ref) {
      this.editor = ref;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "editor",
        ref: this.getRef
      });
    }
  }]);
  return Editor;
}(_react.Component);

exports.default = Editor;
Editor.propTypes = {
  onChange: _propTypes.default.func,
  value: _propTypes.default.string
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Editor, "Editor", "/Users/qiu/biosan/BiosanUi/libs/editor/index.jsx");
}();

;