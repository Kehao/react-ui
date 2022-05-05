"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _standalone = require("@babel/standalone");

var _axios = _interopRequireDefault(require("axios"));

var _marked = _interopRequireDefault(require("marked"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _editor = _interopRequireDefault(require("../editor"));

var _src = require("../../src");

var Canvas =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Canvas, _React$Component);

  function Canvas(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Canvas);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Canvas).call(this, props));
    _this.playerId = "".concat(parseInt(Math.random() * 1e9, 10).toString(36));
    _this.document = _this.props.children.match(/([^]*)\n?(```[^]+```)/);
    _this.description = (0, _marked.default)(_this.document[1]);
    _this.source = _this.document[2].match(/```(.*)\n?([^]+)```/);
    _this.state = {
      showBlock: false
    };
    return _this;
  }

  (0, _createClass2.default)(Canvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderSource(this.source[2]);
    }
  }, {
    key: "blockControl",
    value: function blockControl() {
      this.setState({
        showBlock: !this.state.showBlock
      });
    }
  }, {
    key: "renderSource",
    value: function renderSource(value) {
      var _this2 = this;

      import('../../src').then(function (Element) {
        var args = ['context', 'React', 'ReactDOM', 'axios', 'Form', 'Tabs', 'Button', 'Icon', 'Modal', 'utils'];
        var argv = [_this2, _react.default, _reactDom.default, _axios.default, _form.default, _tabs.default, _button.default, _icon.default, _modal.default, _src.utils]; // eslint-disable-next-line no-restricted-syntax

        for (var key in Element) {
          args.push(key);
          argv.push(Element[key]);
        }

        return {
          args: args,
          argv: argv
        };
      }).then(function (_ref) {
        var args = _ref.args,
            argv = _ref.argv;
        var code = (0, _standalone.transform)("\n        class Demo extends React.Component {\n          ".concat(value, "\n        }\n        const FormDemo = Form.create()(Demo)\n        ReactDOM.render(<FormDemo {...context.props} />, document.getElementById('").concat(_this2.playerId, "'))\n      "), {
          presets: ['flow', 'react'],
          plugins: [['proposal-decorators', {
            legacy: true
          }], ['proposal-class-properties', {
            loose: true
          }]]
        }).code;
        args.push(code); // eslint-disable-next-line prefer-spread, no-new-func

        (0, _construct2.default)(Function, (0, _toConsumableArray2.default)(args)).apply(null, argv);
        _this2.source[2] = value;
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          throw err;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("div", {
        className: "demo-block demo-box demo-".concat(this.props.name)
      }, _react.default.createElement("div", {
        className: "source",
        id: this.playerId
      }), this.state.showBlock && _react.default.createElement("div", {
        className: "meta"
      }, this.description && _react.default.createElement("div", {
        ref: "description",
        className: "description",
        dangerouslySetInnerHTML: {
          __html: this.description
        }
      }), _react.default.createElement(_editor.default, {
        value: this.source[2],
        onChange: function onChange(code) {
          return _this3.renderSource(code);
        }
      })), _react.default.createElement("div", {
        className: "demo-block-control",
        onClick: this.blockControl.bind(this)
      }, this.state.showBlock ? _react.default.createElement("span", null, _react.default.createElement("i", {
        className: "el-icon-caret-top"
      }), this.props.locale.hide) : _react.default.createElement("span", null, _react.default.createElement("i", {
        className: "el-icon-caret-bottom"
      }), this.props.locale.show)));
    }
  }]);
  return Canvas;
}(_react.default.Component);

exports.default = Canvas;
Canvas.propTypes = {
  locale: _propTypes.default.object
};
Canvas.defaultProps = {
  locale: {}
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Canvas, "Canvas", "/Users/qiu/biosan/BiosanUi/libs/markdown/canvas.jsx");
}();

;