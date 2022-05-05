"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

require("./style/index.less");

var _viewPic = _interopRequireDefault(require("./viewPic"));

var IconFont = _icon.default.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1530224_5ejhk1x8pi7.js'
});

var MyPreview =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MyPreview, _React$Component);

  function MyPreview(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyPreview);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyPreview).call(this, props));

    _this.openModal = function () {
      var _this2;

      return (_this2 = _this).__openModal__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.hideModal = function () {
      var _this3;

      return (_this3 = _this).__hideModal__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this.changeKey = function () {
      var _this4;

      return (_this4 = _this).__changeKey__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this.selectedImg = function () {
      var _this5;

      return (_this5 = _this).__selectedImg__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this.deleteImg = function () {
      var _this6;

      return (_this6 = _this).__deleteImg__REACT_HOT_LOADER__.apply(_this6, arguments);
    };

    _this.renderImg = function () {
      var _this7;

      return (_this7 = _this).__renderImg__REACT_HOT_LOADER__.apply(_this7, arguments);
    };

    _this.state = {
      visible: false,
      fileList: [],
      selectedKey: 0,
      width: '60%'
    };
    return _this;
  }

  (0, _createClass2.default)(MyPreview, [{
    key: "__renderImg__REACT_HOT_LOADER__",
    value: function __renderImg__REACT_HOT_LOADER__() {
      return this.__renderImg__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__deleteImg__REACT_HOT_LOADER__",
    value: function __deleteImg__REACT_HOT_LOADER__() {
      return this.__deleteImg__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__selectedImg__REACT_HOT_LOADER__",
    value: function __selectedImg__REACT_HOT_LOADER__() {
      return this.__selectedImg__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__changeKey__REACT_HOT_LOADER__",
    value: function __changeKey__REACT_HOT_LOADER__() {
      return this.__changeKey__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__hideModal__REACT_HOT_LOADER__",
    value: function __hideModal__REACT_HOT_LOADER__() {
      return this.__hideModal__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__openModal__REACT_HOT_LOADER__",
    value: function __openModal__REACT_HOT_LOADER__() {
      return this.__openModal__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
          fileList = _this$props.fileList,
          download = _this$props.download;
      this.setState({
        fileList: fileList,
        download: download
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.fileList !== this.props.fileList) {
        this.setState({
          fileList: nextProps.fileList
        });
      }
    }
  }, {
    key: "__openModal__REACT_HOT_LOADER__",
    value: function __openModal__REACT_HOT_LOADER__() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: "__hideModal__REACT_HOT_LOADER__",
    value: function __hideModal__REACT_HOT_LOADER__() {
      this.setState({
        visible: false,
        selectedKey: 0
      });
    }
  }, {
    key: "__changeKey__REACT_HOT_LOADER__",
    value: function __changeKey__REACT_HOT_LOADER__(key) {
      var fileList = this.state.fileList;

      if (!fileList || !fileList.length) {
        return;
      }

      this.setState({
        selectedKey: key
      });
    }
  }, {
    key: "__selectedImg__REACT_HOT_LOADER__",
    value: function __selectedImg__REACT_HOT_LOADER__(index) {
      this.setState({
        selectedKey: index,
        visible: true
      });
    }
  }, {
    key: "__deleteImg__REACT_HOT_LOADER__",
    value: function __deleteImg__REACT_HOT_LOADER__(index) {
      this.props.deleteImg(index);
    }
  }, {
    key: "__renderImg__REACT_HOT_LOADER__",
    value: function __renderImg__REACT_HOT_LOADER__(fileList) {
      var _this8 = this;

      return fileList.map(function (img, index) {
        return _react.default.createElement("div", {
          className: 'img_box',
          key: "prev_".concat(index)
        }, _react.default.createElement("div", {
          className: 'img_mask'
        }, _react.default.createElement(IconFont, {
          style: {
            marginRight: '5px'
          },
          type: "iconyulan",
          onClick: function onClick() {
            return _this8.selectedImg(index);
          }
        }), _react.default.createElement(IconFont, {
          style: {
            marginLeft: '5px'
          },
          type: "iconlajitong1",
          onClick: function onClick() {
            return _this8.deleteImg(index);
          }
        })), _react.default.createElement("img", {
          alt: "",
          src: img.smallGraphUrl,
          className: 'img_item'
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          fileList = _this$state.fileList,
          selectedKey = _this$state.selectedKey,
          download = _this$state.download,
          visible = _this$state.visible;
      return _react.default.createElement("div", null, this.renderImg(fileList), _react.default.createElement(_modal.default, {
        title: "\u56FE\u7247\u75C5\u5386",
        visible: visible,
        footer: null,
        width: this.props.width,
        className: 'viewPicModal',
        maskClosable: false,
        onCancel: this.hideModal // destroyOnClose

      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        span: 24,
        className: 'myModal_content'
      }, _react.default.createElement(_viewPic.default, {
        fileList: fileList,
        selectedKey: selectedKey,
        onChange: this.changeKey,
        download: download
      })))));
    }
  }]);
  return MyPreview;
}(_react.default.Component);

exports.default = MyPreview;
MyPreview.propTypes = {
  width: _propTypes.default.string,
  fileList: _propTypes.default.array,
  download: _propTypes.default.object,
  deleteImg: _propTypes.default.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(IconFont, "IconFont", "/Users/qiu/biosan/BiosanUi/src/MyPreview/preview.js");

  __REACT_HOT_LOADER__.register(MyPreview, "MyPreview", "/Users/qiu/biosan/BiosanUi/src/MyPreview/preview.js");
}();

;