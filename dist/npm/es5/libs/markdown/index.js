"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _marked = _interopRequireDefault(require("marked"));

var _prismjs = _interopRequireDefault(require("prismjs"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _canvas = _interopRequireDefault(require("./canvas"));

var Markdown =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Markdown, _React$Component);

  function Markdown(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Markdown);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Markdown).call(this, props));
    _this.components = new Map();
    _this.renderer = new _marked.default.Renderer();

    _this.renderer.table = function (header, body) {
      return "<table class=\"grid\"><thead>".concat(header, "</thead><tbody>").concat(body, "</tbody></table>");
    };

    return _this;
  }

  (0, _createClass2.default)(Markdown, [{
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
          var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
              id = _step$value[0],
              component = _step$value[1];

          var div = document.getElementById(id);

          if (div instanceof HTMLElement) {
            _reactDom.default.render(component, div);
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

      _prismjs.default.highlightAll();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var document = this.document(localStorage.getItem('ELEMENT_LANGUAGE') || 'zh-CN');

      if (typeof document === 'string') {
        this.components.clear();
        var html = (0, _marked.default)(document.replace(/:::\s?demo\s?([^]+?):::/g, function (match, p1, offset) {
          var id = offset.toString(36);

          _this2.components.set(id, _react.default.createElement(_canvas.default, Object.assign({
            name: _this2.constructor.name.toLowerCase()
          }, _this2.props), p1));

          return "<div id=".concat(id, "></div>");
        }), {
          renderer: this.renderer
        });
        return _react.default.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: html
          }
        });
      }

      return _react.default.createElement("span", null);
    }
  }]);
  return Markdown;
}(_react.default.Component);

exports.default = Markdown;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Markdown, "Markdown", "/Users/qiu/biosan/BiosanUi/libs/markdown/index.jsx");
}();

;