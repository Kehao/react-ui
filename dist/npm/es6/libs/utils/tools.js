export function delayPromise(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(reject, ms);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(delayPromise, "delayPromise", "/Users/qiu/biosan/BiosanUi/libs/utils/tools.js");
}();

;