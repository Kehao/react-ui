"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("babel-polyfill");

require("../../styles.css");

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _Application = _interopRequireDefault(require("./Application"));

// IE 10+ compatibility for demo (must come before other imports)
// Import react-virtualized styles as part of bootstrap process
(0, _reactDom.render)(React.createElement(_Application.default, null), document.getElementById('root')); // Import and attach the favicon

document.querySelector('[rel="shortcut icon"]').href = require('file-loader!./favicon.png');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;