var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isChrome = function isChrome() {
  return !!window.chrome && !!window.chrome.webstore;
};

export var getMaxElementSize = function getMaxElementSize() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }

  return DEFAULT_MAX_ELEMENT_SIZE;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DEFAULT_MAX_ELEMENT_SIZE, "DEFAULT_MAX_ELEMENT_SIZE", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/utils/maxElementSize.js");

  __REACT_HOT_LOADER__.register(CHROME_MAX_ELEMENT_SIZE, "CHROME_MAX_ELEMENT_SIZE", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/utils/maxElementSize.js");

  __REACT_HOT_LOADER__.register(isBrowser, "isBrowser", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/utils/maxElementSize.js");

  __REACT_HOT_LOADER__.register(isChrome, "isChrome", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/utils/maxElementSize.js");

  __REACT_HOT_LOADER__.register(getMaxElementSize, "getMaxElementSize", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Grid/utils/maxElementSize.js");
}();

;