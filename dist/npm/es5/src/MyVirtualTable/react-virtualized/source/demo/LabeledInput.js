"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabeledInput = LabeledInput;
exports.InputRow = InputRow;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _LabeledInput = _interopRequireDefault(require("./LabeledInput.css"));

function LabeledInput(_ref) {
  var disabled = _ref.disabled,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value;
  var labelClassName = (0, _clsx2.default)(_LabeledInput.default.Label, (0, _defineProperty2.default)({}, _LabeledInput.default.LabelDisabled, disabled));
  return React.createElement("div", {
    className: _LabeledInput.default.LabeledInput
  }, React.createElement("label", {
    className: labelClassName,
    title: label
  }, label), React.createElement("input", {
    "aria-label": label,
    className: _LabeledInput.default.Input,
    name: name,
    placeholder: placeholder,
    onChange: onChange,
    value: value,
    disabled: disabled
  }));
}

LabeledInput.propTypes = {
  disabled: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.any
};

function InputRow(_ref2) {
  var children = _ref2.children;
  return React.createElement("div", {
    className: _LabeledInput.default.InputRow
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