import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import marked from 'marked';
import prism from 'prismjs';
import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './canvas';

var Markdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Markdown, _React$Component);

  function Markdown(props) {
    var _this;

    _classCallCheck(this, Markdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Markdown).call(this, props));
    _this.components = new Map();
    _this.renderer = new marked.Renderer();

    _this.renderer.table = function (header, body) {
      return "<table class=\"grid\"><thead>".concat(header, "</thead><tbody>").concat(body, "</tbody></table>");
    };

    return _this;
  }

  _createClass(Markdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderDOM();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderDOM();
    }
  }, {
    key: "renderDOM",
    value: function renderDOM() {
      // eslint-disable-next-line no-restricted-syntax
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              id = _step$value[0],
              component = _step$value[1];

          var div = document.getElementById(id);

          if (div instanceof HTMLElement) {
            ReactDOM.render(component, div);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      prism.highlightAll();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var document = this.document(localStorage.getItem('ELEMENT_LANGUAGE') || 'zh-CN');

      if (typeof document === 'string') {
        this.components.clear();
        var html = marked(document.replace(/:::\s?demo\s?([^]+?):::/g, function (match, p1, offset) {
          var id = offset.toString(36);

          _this2.components.set(id, React.createElement(Canvas, Object.assign({
            name: _this2.constructor.name.toLowerCase()
          }, _this2.props), p1));

          return "<div id=".concat(id, "></div>");
        }), {
          renderer: this.renderer
        });
        return React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: html
          }
        });
      }

      return React.createElement("span", null);
    }
  }]);

  return Markdown;
}(React.Component);

export { Markdown as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Markdown, "Markdown", "/Users/qiu/biosan/BiosanUi/libs/markdown/index.jsx");
}();

;