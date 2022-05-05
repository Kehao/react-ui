import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import PropTypes from 'prop-types';
import React, { Component } from 'react';

var View =
/*#__PURE__*/
function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      var style = Object.hasOwnProperty.call(this.props, 'show') && !this.props.show && {
        display: 'none'
      };
      return React.cloneElement(React.Children.only(this.props.children), {
        style: Object.assign({}, this.props.children.props.style, style)
      });
    }
  }]);

  return View;
}(Component);
/* eslint-disable */


export { View as default };
View.propTypes = {
  show: PropTypes.any
};
/* eslint-enable */

View._typeName = 'View';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(View, "View", "/Users/qiu/biosan/BiosanUi/libs/view/index.js");
}();

;