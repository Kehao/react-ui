// Properly handle server-side rendering.
var win;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
} // requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/


var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

export var raf = request;
export var caf = cancel;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(win, "win", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/utils/animationFrame.js");

  __REACT_HOT_LOADER__.register(request, "request", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/utils/animationFrame.js");

  __REACT_HOT_LOADER__.register(cancel, "cancel", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/utils/animationFrame.js");

  __REACT_HOT_LOADER__.register(raf, "raf", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/utils/animationFrame.js");

  __REACT_HOT_LOADER__.register(caf, "caf", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/utils/animationFrame.js");
}();

;