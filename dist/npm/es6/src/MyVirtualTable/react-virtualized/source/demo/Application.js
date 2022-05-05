import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Redirect } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import ComponentLink from './ComponentLink';
import styles from './Application.css';
import NavLink from './NavLink';
import Wizard from './Wizard';
import { TYPES } from './Icon';
import { generateRandomList } from './utils';
import ArrowKeyStepperExample from '../ArrowKeyStepper/ArrowKeyStepper.example';
import AutoSizerExample from '../AutoSizer/AutoSizer.example';
import CellMeasurerExample from '../CellMeasurer/CellMeasurer.example';
import CollectionExample from '../Collection/Collection.example';
import ColumnSizerExample from '../ColumnSizer/ColumnSizer.example';
import GridExample from '../Grid/Grid.example';
import InfiniteLoaderExample from '../InfiniteLoader/InfiniteLoader.example';
import ListExample from '../List/List.example';
import MasonryExample from '../Masonry/Masonry.example';
import MultiGridExample from '../MultiGrid/MultiGrid.example';
import ScrollSyncExample from '../ScrollSync/ScrollSync.example';
import TableExample from '../Table/Table.example';
import WindowScrollerExample from '../WindowScroller/WindowScroller.example';
var COMPONENT_EXAMPLES_MAP = {
  '/components/ArrowKeyStepper': ArrowKeyStepperExample,
  '/components/AutoSizer': AutoSizerExample,
  '/components/CellMeasurer': CellMeasurerExample,
  '/components/Collection': CollectionExample,
  '/components/ColumnSizer': ColumnSizerExample,
  '/components/Grid': GridExample,
  '/components/Masonry': MasonryExample,
  '/components/InfiniteLoader': InfiniteLoaderExample,
  '/components/List': ListExample,
  '/components/MultiGrid': MultiGridExample,
  '/components/ScrollSync': ScrollSyncExample,
  '/components/Table': TableExample,
  '/components/WindowScroller': WindowScrollerExample
}; // HACK Generate arbitrary data for use in example components :)

var list = Immutable.List(generateRandomList());

var Application =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Application, _React$PureComponent);

  function Application(props) {
    var _this;

    _classCallCheck(this, Application);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Application).call(this, props));
    _this.state = {
      isScrollingCustomElement: false
    };
    _this.setScrollingCustomElement = _this.setScrollingCustomElement.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Application, [{
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
      var bodyStyle = isScrollingCustomElement ? styles.ScrollingBody : styles.Body;
      return React.createElement(HashRouter, null, React.createElement("div", {
        className: styles.demo
      }, React.createElement("div", {
        className: styles.headerRow
      }, React.createElement("div", {
        className: styles.logoRow
      }, React.createElement("div", {
        className: styles.ReactVirtualizedContainer
      }, React.createElement("img", {
        alt: "React virtualized",
        className: styles.logo,
        src: "https://cloud.githubusercontent.com/assets/29597/11736841/c0497158-9f87-11e5-8dfe-9c0be97d4286.png"
      }), React.createElement("div", {
        className: styles.PrimaryLogoText
      }, "React"), React.createElement("div", {
        className: styles.SecondaryLogoText
      }, "Virtualized")), React.createElement("ul", {
        className: styles.NavList
      }, React.createElement(NavLink, {
        to: "/components/List",
        iconType: TYPES.COMPONENTS
      }, "Components"), React.createElement(NavLink, {
        to: "/wizard",
        iconType: TYPES.WIZARD
      }, "Wizard"), React.createElement(NavLink, {
        href: "https://github.com/bvaughn/react-virtualized",
        iconType: TYPES.SOURCE
      }, "Source"), React.createElement(NavLink, {
        href: "https://github.com/bvaughn/react-virtualized/tree/master/docs#documentation",
        iconType: TYPES.DOCUMENTATION
      }, "Documentation"), React.createElement(NavLink, {
        href: "https://github.com/bvaughn/react-virtualized/issues",
        iconType: TYPES.ISSUES
      }, "Issues"))), React.createElement("div", {
        className: styles.ComponentList
      }, React.createElement(ComponentLink, {
        to: "/components/Collection"
      }, "Collection"), React.createElement(ComponentLink, {
        to: "/components/Grid"
      }, "Grid"), React.createElement(ComponentLink, {
        to: "/components/List"
      }, "List"), React.createElement(ComponentLink, {
        to: "/components/Masonry"
      }, "Masonry"), React.createElement(ComponentLink, {
        to: "/components/Table"
      }, "Table")), React.createElement("div", {
        className: styles.HighOrderComponentList
      }, React.createElement(ComponentLink, {
        to: "/components/ArrowKeyStepper"
      }, "ArrowKeyStepper"), React.createElement(ComponentLink, {
        to: "/components/AutoSizer"
      }, "AutoSizer"), React.createElement(ComponentLink, {
        to: "/components/CellMeasurer"
      }, "CellMeasurer"), React.createElement(ComponentLink, {
        to: "/components/ColumnSizer"
      }, "ColumnSizer"), React.createElement(ComponentLink, {
        to: "/components/InfiniteLoader"
      }, "InfiniteLoader"), React.createElement(ComponentLink, {
        to: "/components/MultiGrid"
      }, "MultiGrid"), React.createElement(ComponentLink, {
        to: "/components/ScrollSync"
      }, "ScrollSync"), React.createElement(ComponentLink, {
        to: "/components/WindowScroller"
      }, "WindowScroller"))), React.createElement("div", {
        className: bodyStyle,
        ref: function ref(e) {
          return _this2.setState({
            customElement: e
          });
        }
      }, React.createElement("div", {
        className: styles.column
      }, React.createElement(Route, {
        path: "/wizard",
        component: Wizard
      }), Object.keys(COMPONENT_EXAMPLES_MAP).map(function (route) {
        return React.createElement(Route, {
          key: route,
          path: route,
          component: COMPONENT_EXAMPLES_MAP[route]
        });
      }), React.createElement(Route, {
        exact: true,
        path: "/",
        render: function render() {
          return React.createElement(Redirect, {
            to: "/components/List"
          });
        }
      })))));
    }
  }]);

  return Application;
}(React.PureComponent);

Application.childContextTypes = {
  list: PropTypes.instanceOf(Immutable.List).isRequired,
  customElement: PropTypes.any,
  isScrollingCustomElement: PropTypes.bool.isRequired,
  setScrollingCustomElement: PropTypes.func
};
export { Application as default };
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