"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/upload/style");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../utils/request/index"));

require("./index.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var uuidv1 = require('uuid/v1');

var OssUpload =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(OssUpload, _React$Component);

  function OssUpload() {
    var _this;

    (0, _classCallCheck2.default)(this, OssUpload);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OssUpload).call(this));

    _this.beforeUpload = function () {
      var _this2;

      return (_this2 = _this).__beforeUpload__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.checkTasks = function () {
      var _this3;

      return (_this3 = _this).__checkTasks__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this.initRequest = function () {
      var _this4;

      return (_this4 = _this).__initRequest__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this.state = {
      waitUploadFilelist: [],
      isUploading: false
    };
    _this.uploadRequest = _this.uploadRequest.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(OssUpload, [{
    key: "__initRequest__REACT_HOT_LOADER__",
    value: function __initRequest__REACT_HOT_LOADER__() {
      return this.__initRequest__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__checkTasks__REACT_HOT_LOADER__",
    value: function __checkTasks__REACT_HOT_LOADER__() {
      return this.__checkTasks__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__beforeUpload__REACT_HOT_LOADER__",
    value: function __beforeUpload__REACT_HOT_LOADER__() {
      return this.__beforeUpload__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__beforeUpload__REACT_HOT_LOADER__",
    value: function __beforeUpload__REACT_HOT_LOADER__(file, filelist) {
      // 当前上传任务完成进行下一次上传
      if (this.state.isUploading) return false;
      this.setState({
        waitUploadFilelist: filelist
      });
      var canUpload = true;

      if (this.props.beforeUpload) {
        canUpload = this.props.beforeUpload(file, filelist);
      }

      return canUpload;
    }
  }, {
    key: "uploadRequest",
    value: function uploadRequest() {
      var that = this;
      if (this.state.isUploading) return;
      var requestPromises = that.initRequest();
      that.checkTasks(requestPromises);
    }
  }, {
    key: "__checkTasks__REACT_HOT_LOADER__",
    value: function __checkTasks__REACT_HOT_LOADER__(requestPromises) {
      var _this5 = this;

      var resolveQueue = [];
      var rejectQueue = [];

      var isComplete = function isComplete() {
        if (resolveQueue.length + rejectQueue.length === _this5.state.waitUploadFilelist.length) {
          _this5.props.batchComplete(resolveQueue, rejectQueue);

          _this5.setState({
            isUploading: false
          });
        }
      };

      return requestPromises.forEach(function (requestTask, index) {
        var uploadFile = _this5.state.waitUploadFilelist[index];
        requestTask.then(function () {
          resolveQueue.push(uploadFile);
          isComplete();
        }).catch(function () {
          rejectQueue.push(uploadFile);
          isComplete();
        });
      });
    }
  }, {
    key: "__initRequest__REACT_HOT_LOADER__",
    value: function __initRequest__REACT_HOT_LOADER__() {
      var _this6 = this;

      var _this$props = this.props,
          action = _this$props.action,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? {} : _this$props$data;
      this.setState({
        isUploading: true
      });
      return this.state.waitUploadFilelist.map(function (file) {
        var key = "".concat(data.ossSubdirectory).concat(uuidv1(), "_").concat(file.name); // eslint-disable-next-line no-param-reassign

        file.key = key;
        return (0, _index.default)({
          url: action,
          method: 'post',
          timeout: _this6.props.taskTimeout,
          contentType: 'FORMDATA',
          params: _objectSpread({}, data, {
            key: key,
            file: file
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          beforeUpload = _this$props2.beforeUpload,
          batchComplete = _this$props2.batchComplete,
          restProps = (0, _objectWithoutProperties2.default)(_this$props2, ["beforeUpload", "batchComplete"]);
      return _react.default.createElement(_spin.default, {
        spinning: this.state.isUploading
      }, _react.default.createElement(_upload.default, (0, _extends2.default)({}, restProps, {
        beforeUpload: this.beforeUpload,
        customRequest: this.uploadRequest
      }), this.props.children || null));
    }
  }]);
  return OssUpload;
}(_react.default.Component);

exports.default = OssUpload;
OssUpload.propTypes = {
  batchComplete: _propTypes.default.func,
  beforeUpload: _propTypes.default.func,
  action: _propTypes.default.string,
  data: _propTypes.default.object,
  taskTimeout: _propTypes.default.number
};
OssUpload.defaultProps = {
  /**
     * 批次上传完成回调
     * @param success resolveQueue
     * @param fail rejectQueue
     */
  batchComplete: function batchComplete() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args;
  },

  /**
     * 单任务上传超时时间
     */
  taskTimeout: 2000
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OssUpload, "OssUpload", "/Users/qiu/biosan/BiosanUi/src/MyOssUpload/MyOssUpload.js");
}();

;