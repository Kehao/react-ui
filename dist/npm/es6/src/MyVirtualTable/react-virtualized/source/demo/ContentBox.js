import * as React from 'react';
import clsx from 'clsx';
import styles from './ContentBox.css';
export function ContentBox(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style;
  return React.createElement("div", {
    className: clsx(styles.ContentBox, className),
    style: style
  }, children);
}
export function ContentBoxHeader(_ref2) {
  var text = _ref2.text,
      sourceLink = _ref2.sourceLink,
      docsLink = _ref2.docsLink;
  var links = [];

  if (sourceLink) {
    links.push(React.createElement("a", {
      className: styles.Link,
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
      className: styles.Link,
      href: docsLink,
      key: "docsLink"
    }, "Docs"));
  }

  return React.createElement("h1", {
    className: styles.Header
  }, text, links.length > 0 && React.createElement("small", {
    className: styles.Small
  }, links));
}
export function ContentBoxParagraph(_ref3) {
  var children = _ref3.children;
  return React.createElement("div", {
    className: styles.Paragraph
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