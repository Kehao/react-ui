import NodeRSA from 'node-rsa';
/**
 * 公钥私钥生成
 * @param encryptedFormat 加密格式 'pkcs1' or 'pkcs1_oaep'. Default 'pkcs1'
 * @param outputFormat 输出格式 'pkcs1' or 'pkcs8'. Default 'pkcs8'
 * @param len 秘钥长度
 * @returns {object}
 */

var generateKey = function generateKey() {
  var encryptedFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pkcs1';
  var outputFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pkcs8';
  var len = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
  var key = new NodeRSA({
    b: len
  });
  key.setOptions({
    encryptionScheme: encryptedFormat
  }); // 指定加密格式
  // 生成 公钥私钥，制定输出格式 pkcs8标准，pem格式 默认采用base64格式，不做字节der处理

  var publicPem = key.exportKey("".concat(outputFormat, "-public-pem"));
  var privatePem = key.exportKey("".concat(outputFormat, "-private-pem"));
  return {
    publicKey: publicPem,
    privateKey: privatePem
  };
};
/**
 * 输出处理
 * @param key 秘钥
 * @param type 输出格式 'pkcs1' or 'pkcs8'.
 * @param publicOrPrivate 公钥或者私钥 PUBLIC PRIVATE
 * @returns {string} result
 */


var handleKeyFun = function handleKeyFun(key, type, publicOrPrivate) {
  var handleFun = function handleFun(mainKey, param) {
    var keyTemp = mainKey;

    if (key.indexOf("".concat(param, " KEY-----")) === -1) {
      if (type === 'pkcs1') {
        keyTemp = "-----BEGIN RSA ".concat(param, " KEY-----").concat(mainKey, "-----END RSA ").concat(param, " KEY-----");
      } else if (type === 'pkcs8') {
        keyTemp = "-----BEGIN ".concat(param, " KEY-----").concat(mainKey, "-----END ").concat(param, " KEY-----");
      }
    }

    return keyTemp;
  };

  return handleFun(key, publicOrPrivate);
};
/**
 * 加密
 * @param key 加密公钥
 * @param value 需加密值
 * @param encryptedFormat 加密格式 'pkcs1' or 'pkcs1_oaep'. Default 'pkcs1'
 * @param outputFormat 输出格式 'pkcs1' or 'pkcs8'. Default 'pkcs8'
 * @returns {string} result
 */


var encrypt = function encrypt(value, key) {
  var encryptedFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'pkcs1';
  var outputFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'pkcs8';

  try {
    if (!key || !value) {
      return '参数不可为空';
    }

    var pubKey = new NodeRSA(handleKeyFun(key, outputFormat, 'PUBLIC'));
    pubKey.setOptions({
      encryptionScheme: encryptedFormat
    });
    return pubKey.encrypt(value, 'base64');
  } catch (e) {
    return '秘钥规则错误';
  }
};
/**
 * 解密
 * @param value 需解密值
 * @param privateKey 私钥
 * @param encryptedFormat 加密格式 'pkcs1' or 'pkcs1_oaep'. Default 'pkcs1'
 * @param outputFormat 输出格式 'pkcs1' or 'pkcs8'. Default 'pkcs8'
 * @returns {string} result
 */


var decrypt = function decrypt(value, privateKey) {
  var encryptedFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'pkcs1';
  var outputFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'pkcs8';

  try {
    if (!privateKey || !value) {
      return '参数不可为空';
    }

    var keyString = new NodeRSA(handleKeyFun(privateKey, outputFormat, 'PRIVATE'));
    keyString.setOptions({
      encryptionScheme: encryptedFormat
    });
    return keyString.decrypt(value, 'utf8');
  } catch (e) {
    return e;
  }
};

export { generateKey, encrypt, decrypt };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(generateKey, "generateKey", "/Users/qiu/biosan/BiosanUi/src/utils/rsa.js");

  __REACT_HOT_LOADER__.register(handleKeyFun, "handleKeyFun", "/Users/qiu/biosan/BiosanUi/src/utils/rsa.js");

  __REACT_HOT_LOADER__.register(encrypt, "encrypt", "/Users/qiu/biosan/BiosanUi/src/utils/rsa.js");

  __REACT_HOT_LOADER__.register(decrypt, "decrypt", "/Users/qiu/biosan/BiosanUi/src/utils/rsa.js");
}();

;