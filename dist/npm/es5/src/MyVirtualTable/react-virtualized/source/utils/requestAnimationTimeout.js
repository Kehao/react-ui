"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAnimationTimeout = exports.cancelAnimationTimeout = void 0;

var _animationFrame = require("./animationFrame");

var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return (0, _animationFrame.caf)(frame.id);
};
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */


exports.cancelAnimationTimeout = cancelAnimationTimeout;

var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start; // wait for end of processing current event handler, because event handler may be long

  Promise.resolve().then(function () {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = (0, _animationFrame.raf)(timeout);
    }
  };

  var frame = {
    id: (0, _animationFrame.raf)(timeout)
  };
  return frame;
};

exports.requestAnimationTimeout = requestAnimationTimeout;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(cancelAnimationTimeout, "cancelAnimationTimeout", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/utils/requestAnimationTimeout.js");

  __REACT_HOT_LOADER__.register(requestAnimationTimeout, "requestAnimationTimeout", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/utils/requestAnimationTimeout.js");
}();

;