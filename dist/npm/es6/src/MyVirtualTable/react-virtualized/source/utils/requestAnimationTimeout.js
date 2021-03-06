import { caf, raf } from './animationFrame';
export var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return caf(frame.id);
};
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */

export var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start; // wait for end of processing current event handler, because event handler may be long

  Promise.resolve().then(function () {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = raf(timeout);
    }
  };

  var frame = {
    id: raf(timeout)
  };
  return frame;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(cancelAnimationTimeout, "cancelAnimationTimeout", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/utils/requestAnimationTimeout.js");

  __REACT_HOT_LOADER__.register(requestAnimationTimeout, "requestAnimationTimeout", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/utils/requestAnimationTimeout.js");
}();

;