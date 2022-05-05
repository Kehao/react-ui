import _construct from "@babel/runtime/helpers/construct";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import "antd/lib/modal/style";
import _Modal from "antd/lib/modal";
import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import "antd/lib/button/style";
import _Button from "antd/lib/button";
import "antd/lib/tabs/style";
import _Tabs from "antd/lib/tabs";
import "antd/lib/form/style";
import _Form from "antd/lib/form";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import { transform } from '@babel/standalone';
import axios from 'axios';
import marked from 'marked';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '../editor';
import { utils } from '../../src';

var Canvas =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Canvas, _React$Component);

  function Canvas(props) {
    var _this;

    _classCallCheck(this, Canvas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this, props));
    _this.playerId = "".concat(parseInt(Math.random() * 1e9, 10).toString(36));
    _this.document = _this.props.children.match(/([^]*)\n?(```[^]+```)/);
    _this.description = marked(_this.document[1]);
    _this.source = _this.document[2].match(/```(.*)\n?([^]+)```/);
    _this.state = {
      showBlock: false
    };
    return _this;
  }

  _createClass(Canvas, [{
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
        var argv = [_this2, React, ReactDOM, axios, _Form, _Tabs, _Button, _Icon, _Modal, utils]; // eslint-disable-next-line no-restricted-syntax

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
        var code = transform("\n        class Demo extends React.Component {\n          ".concat(value, "\n        }\n        const FormDemo = Form.create()(Demo)\n        ReactDOM.render(<FormDemo {...context.props} />, document.getElementById('").concat(_this2.playerId, "'))\n      "), {
          presets: ['flow', 'react'],
          plugins: [['proposal-decorators', {
            legacy: true
          }], ['proposal-class-properties', {
            loose: true
          }]]
        }).code;
        args.push(code); // eslint-disable-next-line prefer-spread, no-new-func

        _construct(Function, _toConsumableArray(args)).apply(null, argv);

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

      return React.createElement("div", {
        className: "demo-block demo-box demo-".concat(this.props.name)
      }, React.createElement("div", {
        className: "source",
        id: this.playerId
      }), this.state.showBlock && React.createElement("div", {
        className: "meta"
      }, this.description && React.createElement("div", {
        ref: "description",
        className: "description",
        dangerouslySetInnerHTML: {
          __html: this.description
        }
      }), React.createElement(Editor, {
        value: this.source[2],
        onChange: function onChange(code) {
          return _this3.renderSource(code);
        }
      })), React.createElement("div", {
        className: "demo-block-control",
        onClick: this.blockControl.bind(this)
      }, this.state.showBlock ? React.createElement("span", null, React.createElement("i", {
        className: "el-icon-caret-top"
      }), this.props.locale.hide) : React.createElement("span", null, React.createElement("i", {
        className: "el-icon-caret-bottom"
      }), this.props.locale.show)));
    }
  }]);

  return Canvas;
}(React.Component);

export { Canvas as default };
Canvas.propTypes = {
  locale: PropTypes.object
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