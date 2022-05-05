import _defineProperty from "@babel/runtime/helpers/defineProperty";
import PropTypes from 'prop-types';
import * as React from 'react';
import clsx from 'clsx';
import styles from './LabeledInput.css';
export function LabeledInput(_ref) {
  var disabled = _ref.disabled,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value;
  var labelClassName = clsx(styles.Label, _defineProperty({}, styles.LabelDisabled, disabled));
  return React.createElement("div", {
    className: styles.LabeledInput
  }, React.createElement("label", {
    className: labelClassName,
    title: label
  }, label), React.createElement("input", {
    "aria-label": label,
    className: styles.Input,
    name: name,
    placeholder: placeholder,
    onChange: onChange,
    value: value,
    disabled: disabled
  }));
}
LabeledInput.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any
};
export function InputRow(_ref2) {
  var children = _ref2.children;
  return React.createElement("div", {
    className: styles.InputRow
  }, children);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LabeledInput, "LabeledInput", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/LabeledInput.js");

  __REACT_HOT_LOADER__.register(InputRow, "InputRow", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/demo/LabeledInput.js");
}();

;