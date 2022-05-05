import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import CodeMirror from 'codemirror';
import 'codemirror/addon/comment/comment';
import 'codemirror/keymap/sublime';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.scss';

var Editor =
/*#__PURE__*/
function (_Component) {
  _inherits(Editor, _Component);

  function Editor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Editor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getRef = function () {
      var _this2;

      return (_this2 = _this).__getRef__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    return _this;
  }

  _createClass(Editor, [{
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
      this.cm = CodeMirror(this.editor, {
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
      return React.createElement("div", {
        className: "editor",
        ref: this.getRef
      });
    }
  }]);

  return Editor;
}(Component);

export { Editor as default };
Editor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Editor, "Editor", "/Users/qiu/biosan/BiosanUi/libs/editor/index.jsx");
}();

;