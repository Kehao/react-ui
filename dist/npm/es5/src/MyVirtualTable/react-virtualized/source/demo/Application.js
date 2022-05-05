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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _immutable = _interopRequireDefault(require("immutable"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _reactRouterDom = require("react-router-dom");

var _ComponentLink = _interopRequireDefault(require("./ComponentLink"));

var _Application = _interopRequireDefault(require("./Application.css"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

var _Wizard = _interopRequireDefault(require("./Wizard"));

var _Icon = require("./Icon");

var _utils = require("./utils");

var _ArrowKeyStepper = _interopRequireDefault(require("../ArrowKeyStepper/ArrowKeyStepper.example"));

var _AutoSizer = _interopRequireDefault(require("../AutoSizer/AutoSizer.example"));

var _CellMeasurer = _interopRequireDefault(require("../CellMeasurer/CellMeasurer.example"));

var _Collection = _interopRequireDefault(require("../Collection/Collection.example"));

var _ColumnSizer = _interopRequireDefault(require("../ColumnSizer/ColumnSizer.example"));

var _Grid = _interopRequireDefault(require("../Grid/Grid.example"));

var _InfiniteLoader = _interopRequireDefault(require("../InfiniteLoader/InfiniteLoader.example"));

var _List = _interopRequireDefault(require("../List/List.example"));

var _Masonry = _interopRequireDefault(require("../Masonry/Masonry.example"));

var _MultiGrid = _interopRequireDefault(require("../MultiGrid/MultiGrid.example"));

var _ScrollSync = _interopRequireDefault(require("../ScrollSync/ScrollSync.example"));

var _Table = _interopRequireDefault(require("../Table/Table.example"));

var _WindowScroller = _interopRequireDefault(require("../WindowScroller/WindowScroller.example"));

var COMPONENT_EXAMPLES_MAP = {
  '/components/ArrowKeyStepper': _ArrowKeyStepper.default,
  '/components/AutoSizer': _AutoSizer.default,
  '/components/CellMeasurer': _CellMeasurer.default,
  '/components/Collection': _Collection.default,
  '/components/ColumnSizer': _ColumnSizer.default,
  '/components/Grid': _Grid.default,
  '/components/Masonry': _Masonry.default,
  '/components/InfiniteLoader': _InfiniteLoader.default,
  '/components/List': _List.default,
  '/components/MultiGrid': _MultiGrid.default,
  '/components/ScrollSync': _ScrollSync.default,
  '/components/Table': _Table.default,
  '/components/WindowScroller': _WindowScroller.default
}; // HACK Generate arbitrary data for use in example components :)

var list = _immutable.default.List((0, _utils.generateRandomList)());

var Application =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Application, _React$PureComponent);

  function Application(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Application);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Application).call(this, props));
    _this.state = {
      isScrollingCustomElement: false
    };
    _this.setScrollingCustomElement = _this.setScrollingCustomElement.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Application, [{
    key: "setScrollingCustomElement",
    value: function setScrollingCustomElement(custom) {
      this.setState({
        isScrollingCustomElement: custom
      });
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var _this$state = this.state,
          customElement = _this$state.customElement,
          isScrollingCustomElement = _this$state.isScrollingCustomElement;
      return {
        list: list,
        customElement: customElement,
        isScrollingCustomElement: isScrollingCustomElement,
        setScrollingCustomElement: this.setScrollingCustomElement
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isScrollingCustomElement = this.state.isScrollingCustomElement;
      var bodyStyle = isScrollingCustomElement ? _Application.default.ScrollingBody : _Application.default.Body;
      return React.createElement(_reactRouterDom.HashRouter, null, React.createElement("div", {
        className: _Application.default.demo
      }, React.createElement("div", {
        className: _Application.default.headerRow
      }, React.createElement("div", {
        className: _Application.default.logoRow
      }, React.createElement("div", {
        className: _Application.default.ReactVirtualizedContainer
      }, React.createElement("img", {
        alt: "React virtualized",
        className: _Application.default.logo,
        src: "https://cloud.githubusercontent.com/assets/29597/11736841/c0497158-9f87-11e5-8dfe-9c0be97d4286.png"
      }), React.createElement("div", {
        className: _Application.default.PrimaryLogoText
      }, "React"), React.createElement("div", {
        className: _Application.default.SecondaryLogoText
      }, "Virtualized")), React.createElement("ul", {
        className: _Application.default.NavList
      }, React.createElement(_NavLink.default, {
        to: "/components/List",
        iconType: _Icon.TYPES.COMPONENTS
      }, "Components"), React.createElement(_NavLink.default, {
        to: "/wizard",
        iconType: _Icon.TYPES.WIZARD
      }, "Wizard"), React.createElement(_NavLink.default, {
        href: "https://github.com/bvaughn/react-virtualized",
        iconType: _Icon.TYPES.SOURCE
      }, "Source"), React.createElement(_NavLink.default, {
        href: "https://github.com/bvaughn/react-virtualized/tree/master/docs#documentation",
        iconType: _Icon.TYPES.DOCUMENTATION
      }, "Documentation"), React.createElement(_NavLink.default, {
        href: "https://github.com/bvaughn/react-virtualized/issues",
        iconType: _Icon.TYPES.ISSUES
      }, "Issues"))), React.createElement("div", {
        className: _Application.default.ComponentList
      }, React.createElement(_ComponentLink.default, {
        to: "/components/Collection"
      }, "Collection"), React.createElement(_ComponentLink.default, {
        to: "/components/Grid"
      }, "Grid"), React.createElement(_ComponentLink.default, {
        to: "/components/List"
      }, "List"), React.createElement(_ComponentLink.default, {
        to: "/components/Masonry"
      }, "Masonry"), React.createElement(_ComponentLink.default, {
        to: "/components/Table"
      }, "Table")), React.createElement("div", {
        className: _Application.default.HighOrderComponentList
      }, React.createElement(_ComponentLink.default, {
        to: "/components/ArrowKeyStepper"
      }, "ArrowKeyStepper"), React.createElement(_ComponentLink.default, {
        to: "/components/AutoSizer"
      }, "AutoSizer"), React.createElement(_ComponentLink.default, {
        to: "/components/CellMeasurer"
      }, "CellMeasurer"), React.createElement(_ComponentLink.default, {
        to: "/components/ColumnSizer"
      }, "ColumnSizer"), React.createElement(_ComponentLink.default, {
        to: "/components/InfiniteLoader"
      }, "InfiniteLoader"), React.createElement(_ComponentLink.default, {
        to: "/components/MultiGrid"
      }, "MultiGrid"), React.createElement(_ComponentLink.default, {
        to: "/components/ScrollSync"
      }, "ScrollSync"), React.createElement(_ComponentLink.default, {
        to: "/components/WindowScroller"
      }, "WindowScroller"))), React.createElement("div", {
        className: bodyStyle,
        ref: function ref(e) {
          return _this2.setState({
            customElement: e
          });
        }
      }, React.createElement("div", {
        className: _Application.default.column
      }, React.createElement(_reactRouterDom.Route, {
        path: "/wizard",
        component: _Wizard.default
      }), Object.keys(COMPONENT_EXAMPLES_MAP).map(function (route) {
        return React.createElement(_reactRouterDom.Route, {
          key: route,
          path: route,
          component: COMPONENT_EXAMPLES_MAP[route]
        });
      }), React.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        render: function render() {
          return React.createElement(_reactRouter.Redirect, {
            to: "/components/List"
          });
        }
      })))));
    }
  }]);
  return Application;
}(React.PureComponent);

exports.default = Application;
Application.childContextTypes = {
  list: _propTypes.default.instanceOf(_immutable.default.List).isRequired,
  customElement: _propTypes.default.any,
  isScrollingCustomElement: _propTypes.default.bool.isRequired,
  setScrollingCustomElement: _propTypes.default.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(COMPONENT_EXAMPLES_MAP, "COMPONENT_EXAMPLES_MAP", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Application.js");

  __REACT_HOT_LOADER__.register(list, "list", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Application.js");

  __REACT_HOT_LOADER__.register(Application, "Application", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/Application.js");
}();

;