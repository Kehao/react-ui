/**
 * 加法
 * @param arg1 数字操作左
 * @param arg2 数字操作右
 * @returns {number} reslut
 * @author: zhangsiyi@biosan.cn
 */
function add(arg1, arg2) {
  if ((!arg1 || !arg2) && arg1 !== 0 && arg2 !== 0) {
    if (!arg1 && arg2) {
      return arg2;
    } else if (!arg2 && arg1) {
      return arg1;
    }

    return null;
  }

  var digits1 = null;
  var digits2 = null;
  var maxDigits = null;

  try {
    digits1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    digits1 = 0;
  }

  try {
    digits2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    digits2 = 0;
  } // eslint-disable-next-line no-restricted-properties


  maxDigits = Math.pow(10, Math.max(digits1, digits2));
  var fixedNumber = digits1 > digits2 ? digits1 : digits2;
  var result = (arg1 * maxDigits + arg2 * maxDigits) / maxDigits;
  return Number(result.toFixed(fixedNumber));
}
/**
 * 减法
 * @param arg1 数字操作左
 * @param arg2 数字操作右
 * @returns {number} reslut
 * @author: zhangsiyi@biosan.cn
 */


function sub(arg1, arg2) {
  if ((!arg1 || !arg2) && arg1 !== 0 && arg2 !== 0) {
    if (!arg1 && arg2) {
      return -arg2;
    } else if (!arg2 && arg1) {
      return arg1;
    }

    return null;
  }

  var digits1 = null;
  var digits2 = null;
  var maxDigits = null;

  try {
    digits1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    digits1 = 0;
  }

  try {
    digits2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    digits2 = 0;
  } // eslint-disable-next-line no-restricted-properties


  maxDigits = Math.pow(10, Math.max(digits1, digits2));
  var fixedNumber = digits1 > digits2 ? digits1 : digits2;
  var result = (arg1 * maxDigits - arg2 * maxDigits) / maxDigits;
  return Number(result.toFixed(fixedNumber));
}
/**
 * 乘法
 * @param arg1 数字操作左
 * @param arg2 数字操作右
 * @returns {number} result
 * @author: zhangsiyi@biosan.cn
 */


function mul(arg1, arg2) {
  if ((!arg1 || !arg2) && arg1 !== 0 && arg2 !== 0) {
    return null;
  }

  if (arg1 || arg1 === 0) {
    var digits = null;
    var s1 = arg1.toString();
    var s2 = arg2.toString();

    try {
      digits += s1.split('.')[1].length;
    } catch (e) {
      digits = 0;
    }

    try {
      digits += s2.split('.')[1].length;
    } catch (e) {
      digits = 0;
    }

    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / // eslint-disable-next-line no-restricted-properties
    Math.pow(10, digits);
  }

  return null;
}
/**
 * 除法
 * @param arg1 数字操作左
 * @param arg2 数字操作右
 * @returns {number} result
 * @author: zhangsiyi@biosan.cn
 */


function div(arg1, arg2) {
  if (!arg1 || !arg2) {
    if (arg2 === 0 || arg2 === '0') {
      return null;
    } else if (arg1 === 0 || arg1 === '0') {
      return 0;
    }
  }

  var int1 = 0;
  var int2 = 0;
  var digits1 = null;
  var digits2 = null;

  try {
    digits1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    digits1 = 0;
  }

  try {
    digits2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    digits2 = 0;
  }

  int1 = Number(arg1.toString().replace('.', ''));
  int2 = Number(arg2.toString().replace('.', '')); // eslint-disable-next-line no-restricted-properties

  return int1 / int2 * Math.pow(10, digits2 - digits1);
}

export { add, mul, sub, div };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(add, "add", "/Users/qiu/biosan/BiosanUi/src/utils/numberOperate.js");

  __REACT_HOT_LOADER__.register(sub, "sub", "/Users/qiu/biosan/BiosanUi/src/utils/numberOperate.js");

  __REACT_HOT_LOADER__.register(mul, "mul", "/Users/qiu/biosan/BiosanUi/src/utils/numberOperate.js");

  __REACT_HOT_LOADER__.register(div, "div", "/Users/qiu/biosan/BiosanUi/src/utils/numberOperate.js");
}();

;