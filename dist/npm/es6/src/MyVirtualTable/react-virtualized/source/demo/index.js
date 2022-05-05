// IE 10+ compatibility for demo (must come before other imports)
import 'babel-polyfill'; // Import react-virtualized styles as part of bootstrap process

import '../../styles.css';
import * as React from 'react';
import { render } from 'react-dom';
import Application from './Application';
render(React.createElement(Application, null), document.getElementById('root')); // Import and attach the favicon

document.querySelector('[rel="shortcut icon"]').href = require('file-loader!./favicon.png');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;