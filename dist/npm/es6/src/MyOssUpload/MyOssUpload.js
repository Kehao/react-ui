import "antd/lib/spin/style";
import _Spin from "antd/lib/spin";
import "antd/lib/upload/style";
import _Upload from "antd/lib/upload";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import request from '../utils/request/index';
import './index.less';

var uuidv1 = require('uuid/v1');

var OssUpload =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OssUpload, _React$Component);

  function OssUpload() {
    var _this;

    _classCallCheck(this, OssUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OssUpload).call(this));

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
    _this.uploadRequest = _this.uploadRequest.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OssUpload, [{
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
        return request({
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
          restProps = _objectWithoutProperties(_this$props2, ["beforeUpload", "batchComplete"]);

      return React.createElement(_Spin, {
        spinning: this.state.isUploading
      }, React.createElement(_Upload, _extends({}, restProps, {
        beforeUpload: this.beforeUpload,
        customRequest: this.uploadRequest
      }), this.props.children || null));
    }
  }]);

  return OssUpload;
}(React.Component);

OssUpload.propTypes = {
  batchComplete: PropTypes.func,
  beforeUpload: PropTypes.func,
  action: PropTypes.string,
  data: PropTypes.object,
  taskTimeout: PropTypes.number
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
export { OssUpload as default };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OssUpload, "OssUpload", "/Users/qiu/biosan/BiosanUi/src/MyOssUpload/MyOssUpload.js");
}();

;