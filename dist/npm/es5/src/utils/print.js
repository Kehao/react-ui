"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _reactDom = require("react-dom");

var _coreJs = require("core-js");

/**
 * Print指定的 react component
 * @param {object} options - config
 * @author: zhangsiyi@biosan.cn
 */
var Print = function Print(options) {
  var content = options.content,
      pageStyle = options.pageStyle,
      onBeforePrint = options.onBeforePrint,
      onAfterPrint = options.onAfterPrint,
      _options$bodyClass = options.bodyClass,
      bodyClass = _options$bodyClass === void 0 ? '' : _options$bodyClass,
      _options$copyStyles = options.copyStyles,
      copyStyles = _options$copyStyles === void 0 ? true : _options$copyStyles;
  var contentEl = content; // 判断是否传入有效的content

  if (contentEl === undefined || contentEl === null) {
    // eslint-disable-next-line no-console
    console.error('content is not available');
    return;
  }

  var printWindow = document.createElement('iframe');
  printWindow.style.position = 'absolute';
  printWindow.style.top = '-1000px';
  printWindow.style.left = '-1000px';
  var contentNodes = (0, _reactDom.findDOMNode)(contentEl);
  var linkNodes = document.querySelectorAll('link[rel="stylesheet"]');
  var linkTotal = linkNodes.length || 0;
  var linksLoaded = [];
  var linksErrored = [];

  var removeWindow = function removeWindow(target) {
    setTimeout(function () {
      target.parentNode.removeChild(target);
    }, 500);
  };

  var triggerPrint = function triggerPrint(target) {
    if (onBeforePrint) {
      onBeforePrint();
    }

    setTimeout(function () {
      target.contentWindow.focus();
      target.contentWindow.print();
      removeWindow(target);

      if (onAfterPrint) {
        onAfterPrint();
      }
    }, 500);
  };

  var markLoaded = function markLoaded(linkNode, loaded) {
    if (loaded) {
      linksLoaded.push(linkNode);
    } else {
      // eslint-disable-next-line no-console
      console.error('unable to load a link. It may be invalid.We will continue attempting to print the page. The link the errored was:', linkNode); // eslint-disable-line no-console

      linksErrored.push(linkNode);
    } // We may have errors, but attempt to print anyways - maybe they are trivial and the user will
    // be ok ignoring them


    if (linksLoaded.length + linksErrored.length === linkTotal) {
      triggerPrint(printWindow);
    }
  };

  printWindow.onload = function () {
    /* IE11 support */
    if (window.navigator && window.navigator.userAgent.indexOf('Trident/7.0') > -1) {
      printWindow.onload = null;
    }

    var domDoc = printWindow.contentDocument || printWindow.contentWindow.document;
    var srcCanvasEls = (0, _toConsumableArray2.default)(contentNodes.querySelectorAll('canvas'));
    domDoc.open();
    domDoc.write(contentNodes.outerHTML);
    domDoc.close();
    /* remove date/time from top */

    var defaultPageStyle = pageStyle === undefined ? '@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } } html,body { overflow: auto!important; height: auto!important; }' : pageStyle;
    var styleEl = domDoc.createElement('style');
    styleEl.appendChild(domDoc.createTextNode(defaultPageStyle));
    domDoc.head.appendChild(styleEl);

    if (bodyClass.length) {
      domDoc.body.classList.add(bodyClass);
    }

    var canvasEls = domDoc.querySelectorAll('canvas');
    (0, _toConsumableArray2.default)(canvasEls).forEach(function (node, index) {
      node.getContext('2d').drawImage(srcCanvasEls[index], 0, 0);
    });

    if (copyStyles !== false) {
      var headEls = document.querySelectorAll('style, link[rel="stylesheet"]');
      (0, _toConsumableArray2.default)(headEls).forEach(function (node, index) {
        if (node.tagName === 'STYLE') {
          var newHeadEl = domDoc.createElement(node.tagName);

          if (node.sheet) {
            var styleCSS = '';

            for (var i = 0; i < node.sheet.cssRules.length; i++) {
              // catch 'member not found' error on cssText
              if (typeof node.sheet.cssRules[i].cssText === 'string') {
                styleCSS += "".concat(node.sheet.cssRules[i].cssText, "\r\n");
              }
            }

            newHeadEl.setAttribute('id', "react-to-print-".concat(index));
            newHeadEl.appendChild(domDoc.createTextNode(styleCSS));
            domDoc.head.appendChild(newHeadEl);
          }
        } else {
          var attributes = (0, _toConsumableArray2.default)(node.attributes);
          var hrefAttr = attributes.filter(function (attr) {
            return attr.nodeName === 'href';
          });
          var hasHref = hrefAttr.length ? !!hrefAttr[0].nodeValue : false; // Many browsers will do all sorts of weird things if they encounter an empty `href`
          // tag (which is invalid HTML). Some will attempt to load the current page. Some will
          // attempt to load the page's parent directory. These problems can cause
          // `react-to-print` to stop  without any error being thrown. To avoid such problems we
          // simply do not attempt to load these links.

          if (hasHref) {
            var _newHeadEl = domDoc.createElement(node.tagName);

            attributes.forEach(function (attr) {
              _newHeadEl.setAttribute(attr.nodeName, attr.nodeValue);
            });
            _newHeadEl.onload = markLoaded.bind(null, _newHeadEl, true);
            _newHeadEl.onerror = markLoaded.bind(null, _newHeadEl, false);
            domDoc.head.appendChild(_newHeadEl);
          } else {
            // eslint-disable-next-line no-console
            console.warn("We encountered a <link> tag with an empty 'href' attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:", node);
            markLoaded(node, true); // `true` because we've already shown a warning for this
          }
        }
      });
    }

    if (linkTotal === 0 || copyStyles === false) {
      triggerPrint(printWindow);
    }
  };

  document.body.appendChild(printWindow); // eslint-disable-next-line consistent-return

  return (0, _coreJs.delay)(1000);
};

var _default = Print;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Print, "Print", "/Users/qiu/biosan/BiosanUi/src/utils/print.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/qiu/biosan/BiosanUi/src/utils/print.js");
}();

;