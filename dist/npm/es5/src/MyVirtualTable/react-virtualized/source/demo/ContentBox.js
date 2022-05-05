"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentBox = ContentBox;
exports.ContentBoxHeader = ContentBoxHeader;
exports.ContentBoxParagraph = ContentBoxParagraph;

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ContentBox = _interopRequireDefault(require("./ContentBox.css"));

function ContentBox(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style;
  return React.createElement("div", {
    className: (0, _clsx.default)(_ContentBox.default.ContentBox, className),
    style: style
  }, children);
}

function ContentBoxHeader(_ref2) {
  var text = _ref2.text,
      sourceLink = _ref2.sourceLink,
      docsLink = _ref2.docsLink;
  var links = [];

  if (sourceLink) {
    links.push(React.createElement("a", {
      className: _ContentBox.default.Link,
      href: sourceLink,
      key: "sourceLink"
    }, "Source"));
  }

  if (sourceLink && docsLink) {
    links.push(React.createElement("span", {
      key: "separator"
    }, " | "));
  }

  if (docsLink) {
    links.push(React.createElement("a", {
      className: _ContentBox.default.Link,
      href: docsLink,
      key: "docsLink"
    }, "Docs"));
  }

  return React.createElement("h1", {
    className: _ContentBox.default.Header
  }, text, links.length > 0 && React.createElement("small", {
    className: _ContentBox.default.Small
  }, links));
}

function ContentBoxParagraph(_ref3) {
  var children = _ref3.children;
  return React.createElement("div", {
    className: _ContentBox.default.Paragraph
  }, children);
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ContentBox, "ContentBox", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/ContentBox.js");

  __REACT_HOT_LOADER__.register(ContentBoxHeader, "ContentBoxHeader", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/ContentBox.js");

  __REACT_HOT_LOADER__.register(ContentBoxParagraph, "ContentBoxParagraph", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/ContentBox.js");
}();

;