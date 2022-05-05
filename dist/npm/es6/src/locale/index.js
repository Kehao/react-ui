import format from './format';
import defaultLang from './lang/zh-CN';
var _lang = defaultLang;

function use(lang) {
  _lang = lang;
}

function t(path, options) {
  var array = path.split('.');
  var current = _lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    var value = current[property];
    if (i === j - 1) return format(value, options);
    if (!value) return '';
    current = value;
  }

  return '';
}

var _default = {
  use: use,
  t: t
};
export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_lang, "_lang", "/Users/qiu/biosan/BiosanUi/src/locale/index.js");

  __REACT_HOT_LOADER__.register(use, "use", "/Users/qiu/biosan/BiosanUi/src/locale/index.js");

  __REACT_HOT_LOADER__.register(t, "t", "/Users/qiu/biosan/BiosanUi/src/locale/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/locale/index.js");
}();

;