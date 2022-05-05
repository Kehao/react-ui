"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/carousel/style");

var _carousel = _interopRequireDefault(require("antd/lib/carousel"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _webDownloadfile = require("web-downloadfile");

require("./style/index.less");

var IconFont = _icon.default.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1530224_5ejhk1x8pi7.js'
});

var BIOSANCONFIG = 'http://172.16.0.224:8002'; // 超时判断

var Tool = {};
var COUNT = 10;
Tool.sessionTimeOut = {
  logOut: function logOut(xhr) {
    if (xhr && xhr.status !== 200) {
      _message2.default.error('网络错误');

      return;
    }

    var times = sessionStorage.getItem('sessionOutTimes');

    if (!times) {
      _message2.default.warning('登陆验证过期，请重新登录！');

      sessionStorage.setItem('sessionOutTimes', 1);
    }

    window.location.href = BIOSANCONFIG.returnIndex;
  }
};

Tool.beforeSend = function (XMLHttpRequest) {
  XMLHttpRequest.setRequestHeader('authToken', sessionStorage.getItem('sessionId'));
};

var ViewPic =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ViewPic, _React$Component);

  function ViewPic(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ViewPic);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ViewPic).call(this, props));

    _this.getSmallCalList = function () {
      var _this2;

      return (_this2 = _this).__getSmallCalList__REACT_HOT_LOADER__.apply(_this2, arguments);
    };

    _this.currentImgDom = function () {
      var _this3;

      return (_this3 = _this).__currentImgDom__REACT_HOT_LOADER__.apply(_this3, arguments);
    };

    _this.selectedImg = function () {
      var _this4;

      return (_this4 = _this).__selectedImg__REACT_HOT_LOADER__.apply(_this4, arguments);
    };

    _this.handleChange = function () {
      var _this5;

      return (_this5 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this5, arguments);
    };

    _this.getBigCalList = function () {
      var _this6;

      return (_this6 = _this).__getBigCalList__REACT_HOT_LOADER__.apply(_this6, arguments);
    };

    _this.handleMouseDown = function () {
      var _this7;

      return (_this7 = _this).__handleMouseDown__REACT_HOT_LOADER__.apply(_this7, arguments);
    };

    _this.handleMouseMove = function () {
      var _this8;

      return (_this8 = _this).__handleMouseMove__REACT_HOT_LOADER__.apply(_this8, arguments);
    };

    _this.handleMouseUp = function () {
      var _this9;

      return (_this9 = _this).__handleMouseUp__REACT_HOT_LOADER__.apply(_this9, arguments);
    };

    _this.handleFold = function () {
      var _this10;

      return (_this10 = _this).__handleFold__REACT_HOT_LOADER__.apply(_this10, arguments);
    };

    _this.imgToSize = function () {
      var _this11;

      return (_this11 = _this).__imgToSize__REACT_HOT_LOADER__.apply(_this11, arguments);
    };

    _this.handleTurnRight = function () {
      var _this12;

      return (_this12 = _this).__handleTurnRight__REACT_HOT_LOADER__.apply(_this12, arguments);
    };

    _this.handleTurnLeft = function () {
      var _this13;

      return (_this13 = _this).__handleTurnLeft__REACT_HOT_LOADER__.apply(_this13, arguments);
    };

    _this.getDownloadUrl = function () {
      var _this14;

      return (_this14 = _this).__getDownloadUrl__REACT_HOT_LOADER__.apply(_this14, arguments);
    };

    _this.handleDownloadPDF = function () {
      var _this15;

      return (_this15 = _this).__handleDownloadPDF__REACT_HOT_LOADER__.apply(_this15, arguments);
    };

    _this.handleDownload = function () {
      var _this16;

      return (_this16 = _this).__handleDownload__REACT_HOT_LOADER__.apply(_this16, arguments);
    };

    _this.handlePrev = function () {
      var _this17;

      return (_this17 = _this).__handlePrev__REACT_HOT_LOADER__.apply(_this17, arguments);
    };

    _this.handleNext = function () {
      var _this18;

      return (_this18 = _this).__handleNext__REACT_HOT_LOADER__.apply(_this18, arguments);
    };

    _this.state = {
      picHover: false,
      isFold: false,
      selectedKey: 0,
      fileList: [],
      rot: 0,
      isDrag: false,
      settings: {
        pageX: '',
        pageY: ''
      },
      scale: 1
    };
    return _this;
  }

  (0, _createClass2.default)(ViewPic, [{
    key: "__handleNext__REACT_HOT_LOADER__",
    value: function __handleNext__REACT_HOT_LOADER__() {
      return this.__handleNext__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handlePrev__REACT_HOT_LOADER__",
    value: function __handlePrev__REACT_HOT_LOADER__() {
      return this.__handlePrev__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleDownload__REACT_HOT_LOADER__",
    value: function __handleDownload__REACT_HOT_LOADER__() {
      return this.__handleDownload__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleDownloadPDF__REACT_HOT_LOADER__",
    value: function __handleDownloadPDF__REACT_HOT_LOADER__() {
      return this.__handleDownloadPDF__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__getDownloadUrl__REACT_HOT_LOADER__",
    value: function __getDownloadUrl__REACT_HOT_LOADER__() {
      return this.__getDownloadUrl__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleTurnLeft__REACT_HOT_LOADER__",
    value: function __handleTurnLeft__REACT_HOT_LOADER__() {
      return this.__handleTurnLeft__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleTurnRight__REACT_HOT_LOADER__",
    value: function __handleTurnRight__REACT_HOT_LOADER__() {
      return this.__handleTurnRight__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__imgToSize__REACT_HOT_LOADER__",
    value: function __imgToSize__REACT_HOT_LOADER__() {
      return this.__imgToSize__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleFold__REACT_HOT_LOADER__",
    value: function __handleFold__REACT_HOT_LOADER__() {
      return this.__handleFold__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleMouseUp__REACT_HOT_LOADER__",
    value: function __handleMouseUp__REACT_HOT_LOADER__() {
      return this.__handleMouseUp__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleMouseMove__REACT_HOT_LOADER__",
    value: function __handleMouseMove__REACT_HOT_LOADER__() {
      return this.__handleMouseMove__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleMouseDown__REACT_HOT_LOADER__",
    value: function __handleMouseDown__REACT_HOT_LOADER__() {
      return this.__handleMouseDown__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__getBigCalList__REACT_HOT_LOADER__",
    value: function __getBigCalList__REACT_HOT_LOADER__() {
      return this.__getBigCalList__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__handleChange__REACT_HOT_LOADER__",
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__selectedImg__REACT_HOT_LOADER__",
    value: function __selectedImg__REACT_HOT_LOADER__() {
      return this.__selectedImg__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__currentImgDom__REACT_HOT_LOADER__",
    value: function __currentImgDom__REACT_HOT_LOADER__() {
      return this.__currentImgDom__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__getSmallCalList__REACT_HOT_LOADER__",
    value: function __getSmallCalList__REACT_HOT_LOADER__() {
      return this.__getSmallCalList__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        fileList: this.props.fileList,
        selectedKey: this.props.selectedKey,
        download: this.props.download
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.onmousemove = this.handleMouseMove;
      document.onmouseup = this.handleMouseUp;
      var modolWidth = document.getElementById('previewLeft').clientWidth;
      var count = parseInt((modolWidth + 16 - 34 * 2) / 76, 10);
      var selectedKey = this.state.selectedKey;
      var smallImgPage = parseInt(selectedKey / count, 10);
      COUNT = count;
      this.getBigCalList();
      this.refs.carouselSmall.goTo(smallImgPage);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this19 = this;

      this.setState({
        selectedKey: nextProps.selectedKey,
        fileList: nextProps.fileList
      }, function () {
        _this19.getBigCalList();

        _this19.refs.carouselBig.goTo(nextProps.selectedKey);
      });
    }
  }, {
    key: "__getSmallCalList__REACT_HOT_LOADER__",
    value: function __getSmallCalList__REACT_HOT_LOADER__() {
      var _this20 = this;

      var _this$state = this.state,
          fileList = _this$state.fileList,
          selectedKey = _this$state.selectedKey;
      var count = COUNT;
      var list = (0, _toConsumableArray2.default)(fileList);
      var imgList = [];

      for (var i = 0, j = 0; i < fileList.length; i += count, j++) {
        imgList[j] = list.splice(0, count);
      }

      return imgList.map(function (item, i) {
        return _react.default.createElement("div", {
          key: i,
          className: 'small_list'
        }, item.map(function (img, j) {
          return _react.default.createElement("img", {
            key: j,
            alt: "",
            src: img.smallGraphUrl,
            className: 'small_img'.concat(" ", selectedKey === j + i * count ? 'checked_img' : null),
            id: selectedKey === j + i * count ? 'checked' : '',
            onClick: _this20.selectedImg.bind(_this20, j + i * count)
          });
        }));
      });
    }
  }, {
    key: "__currentImgDom__REACT_HOT_LOADER__",
    value: function __currentImgDom__REACT_HOT_LOADER__(selectedKey) {
      var imgs = document.getElementsByClassName('slick-active');
      var currentImg = false;

      for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i].childNodes[0].childNodes[0].childNodes[0];

        if (img.getAttribute('id') === "bigImg".concat(selectedKey)) {
          currentImg = img;
        }
      }

      return currentImg;
    }
  }, {
    key: "__selectedImg__REACT_HOT_LOADER__",
    value: function __selectedImg__REACT_HOT_LOADER__(i) {
      var _this21 = this;

      this.setState({
        rot: 0,
        scale: 1
      }, function () {
        var _this21$state = _this21.state,
            selectedKey = _this21$state.selectedKey,
            rot = _this21$state.rot,
            scale = _this21$state.scale;

        var img = _this21.currentImgDom(selectedKey);

        img.style.transform = "rotate(".concat(rot, "deg) scale(").concat(scale, ")");

        _this21.refs.carouselBig.goTo(i);

        _this21.props.onChange(i);
      });
    }
  }, {
    key: "__handleChange__REACT_HOT_LOADER__",
    value: function __handleChange__REACT_HOT_LOADER__(current) {
      this.props.onChange(current);
      this.refs.carouselSmall.goTo(parseInt(current / COUNT, 10));
    }
  }, {
    key: "__getBigCalList__REACT_HOT_LOADER__",
    value: function __getBigCalList__REACT_HOT_LOADER__() {
      var _this22 = this;

      var _this$state2 = this.state,
          fileList = _this$state2.fileList,
          selectedKey = _this$state2.selectedKey;
      var bigList = fileList.map(function (file, i) {
        return _react.default.createElement("div", {
          key: i,
          className: "big_wrap",
          id: "bigImg-container".concat(i)
        }, /.pdf|.PDF/.test(file.file_name) ? _react.default.createElement("embed", {
          id: "bigImg".concat(i),
          src: "".concat(file.oss_path, "#scrollbars=0&toolbar=0&statusbar=0"),
          onMouseDown: _this22.handleMouseDown,
          style: {
            width: '100%',
            height: '100%'
          }
        }) : _react.default.createElement("img", {
          alt: "",
          id: "bigImg".concat(i),
          src: file.oss_path,
          onMouseDown: _this22.handleMouseDown,
          style: {
            width: '100%'
          }
        }));
      });
      this.setState({
        bigList: bigList
      }, function () {
        _this22.refs.carouselBig.goTo(selectedKey);
      });
    }
  }, {
    key: "__handleMouseDown__REACT_HOT_LOADER__",
    value: function __handleMouseDown__REACT_HOT_LOADER__(e) {
      this.setState({
        isDrag: true
      });
      var _this$state3 = this.state,
          settings = _this$state3.settings,
          selectedKey = _this$state3.selectedKey;
      settings.pageX = e.pageX;
      settings.pageY = e.pageY;
      settings.width = document.getElementById("bigImg-container".concat(selectedKey)).offsetWidth;
      settings.height = document.getElementById("bigImg-container".concat(selectedKey)).offsetHeight;
      this.setState({
        settings: settings
      });
    }
  }, {
    key: "__handleMouseMove__REACT_HOT_LOADER__",
    value: function __handleMouseMove__REACT_HOT_LOADER__(e) {
      if (!this.state.isDrag) return false;
      var _this$state4 = this.state,
          settings = _this$state4.settings,
          selectedKey = _this$state4.selectedKey;
      var img = this.currentImgDom(selectedKey);
      var dx = e.pageX - settings.pageX;
      var dy = e.pageY - settings.pageY;
      if (dx === 0 && dy === 0) return false;
      var newX = parseInt(img.style.left, 10) + dx || dx;
      var newY = parseInt(img.style.top, 10) + dy || dy;
      img.style.left = "".concat(newX, "px");
      img.style.top = "".concat(newY, "px");
      settings.pageX = e.pageX;
      settings.pageY = e.pageY;
      this.setState({
        settings: settings
      });
      return true;
    }
  }, {
    key: "__handleMouseUp__REACT_HOT_LOADER__",
    value: function __handleMouseUp__REACT_HOT_LOADER__() {
      this.setState({
        isDrag: false
      });
    }
  }, {
    key: "__handleFold__REACT_HOT_LOADER__",
    value: function __handleFold__REACT_HOT_LOADER__() {
      var isFold = this.state.isFold;
      var docus = document.getElementsByClassName('big_wrap');

      for (var i = 0; i < docus.length; i++) {
        docus[i].style.height = isFold ? 464 : 552;
      }

      this.setState({
        isFold: !isFold
      });
    }
  }, {
    key: "__imgToSize__REACT_HOT_LOADER__",
    value: function __imgToSize__REACT_HOT_LOADER__(size) {
      var _this$state5 = this.state,
          selectedKey = _this$state5.selectedKey,
          rot = _this$state5.rot;
      var scale = this.state.scale;
      var img = this.currentImgDom(selectedKey);
      scale += size;
      scale = scale < 0.2 ? 0.2 : scale;
      this.setState({
        scale: scale
      });
      img.style.transform = "rotate(".concat(rot * 90, "deg) scale(").concat(scale, ")");
    }
  }, {
    key: "__handleTurnRight__REACT_HOT_LOADER__",
    value: function __handleTurnRight__REACT_HOT_LOADER__() {
      var _this$state6 = this.state,
          selectedKey = _this$state6.selectedKey,
          scale = _this$state6.scale;
      var rot = this.state.rot;
      var img = this.currentImgDom(selectedKey);
      rot += 1;
      img.style.transform = "rotate(".concat(rot * 90, "deg) scale(").concat(scale, ")");
      if (rot === 3) rot = -1;
      this.setState({
        rot: rot
      });
    }
  }, {
    key: "__handleTurnLeft__REACT_HOT_LOADER__",
    value: function __handleTurnLeft__REACT_HOT_LOADER__() {
      var _this$state7 = this.state,
          selectedKey = _this$state7.selectedKey,
          scale = _this$state7.scale;
      var rot = this.state.rot;
      var img = this.currentImgDom(selectedKey);
      rot -= 1;
      if (rot === -1) rot = 3;
      img.style.transform = "rotate(".concat(rot * 90, "deg) scale(").concat(scale, ")");
      this.setState({
        rot: rot
      });
    }
  }, {
    key: "createXmlHttpRequest",
    value: function createXmlHttpRequest() {
      /* eslint-disable no-undef */
      if (window.ActiveXObject) {
        // 如果是IE浏览器
        return new ActiveXObject('Microsoft.XMLHTTP');
      } else if (window.XMLHttpRequest) {
        // 非IE浏览器
        return new XMLHttpRequest();
      }

      return false;
    }
  }, {
    key: "__getDownloadUrl__REACT_HOT_LOADER__",
    value: function __getDownloadUrl__REACT_HOT_LOADER__() {
      var _this23 = this;

      var _this$state8 = this.state,
          fileList = _this$state8.fileList,
          selectedKey = _this$state8.selectedKey,
          download = _this$state8.download;
      var url = fileList[selectedKey].oss_path;
      var fileName = fileList[selectedKey].file_name;

      if (download && download.url) {
        $.ajax({
          type: 'post',
          url: download.url,
          contentType: 'application/json;charset=utf-8;',
          data: JSON.stringify({
            url: url,
            headers: {
              'Context-Type': 'text/xml'
            }
          }),
          beforeSend: function beforeSend(XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader('authToken', download.authToken);
          },
          success: function success(data) {
            if (data.result && data.result === 'success') {
              var path = data.data.oss_path;
              /.pdf|.PDF/.test(path) ? _this23.handleDownloadPDF(path) : _this23.handleDownload(path);
            } else {
              if (data.result === 'nologin') {
                Tool.sessionTimeOut.logOut();
                return;
              }

              _message2.default.error(data.reason);
            }
          },
          error: function error(xhr) {
            Tool.sessionTimeOut.logOut(xhr);
          }
        });
      } else {
        /.pdf|.PDF/.test(fileName) ? this.handleDownloadPDF(url) : this.handleDownload(url);
      }
    }
  }, {
    key: "__handleDownloadPDF__REACT_HOT_LOADER__",
    value: function __handleDownloadPDF__REACT_HOT_LOADER__(url) {
      var _this$state9 = this.state,
          fileList = _this$state9.fileList,
          selectedKey = _this$state9.selectedKey;
      var fileName = fileList[selectedKey].file_name;
      (0, _webDownloadfile.saveFileToLink)(url, fileName.split('.pdf')[0], 'pdf');
    }
  }, {
    key: "__handleDownload__REACT_HOT_LOADER__",
    value: function __handleDownload__REACT_HOT_LOADER__(url) {
      var _this24 = this;

      var _this$state10 = this.state,
          fileList = _this$state10.fileList,
          selectedKey = _this$state10.selectedKey,
          download = _this$state10.download;
      var image = new Image();
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = download && download.url ? url : "".concat(url, "?time=").concat(new Date().valueOf());

      image.onload = function () {
        var base64 = _this24.getBase64Image(image);

        image.setAttribute('src', base64);

        var blob = _this24.convertBase64UrlToBlob(base64);

        var _a = document.createElement('a');

        _a.download = fileList[selectedKey].file_name;
        _a.href = URL.createObjectURL(blob);

        _a.click();

        image.onload = null;
      };
    }
  }, {
    key: "getBase64Image",
    value: function getBase64Image(img) {
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
      return canvas.toDataURL("image/".concat(ext));
    }
  }, {
    key: "convertBase64UrlToBlob",
    value: function convertBase64UrlToBlob(base64) {
      var parts = base64.split(';base64,');
      var contentType = parts[0].split(':')[1];
      var raw = window.atob(parts[1]);
      var rawLength = raw.length;
      var uInt8Array = new Uint8Array(rawLength);

      for (var i = 0; i < rawLength; i++) {
        uInt8Array[i] = raw.charCodeAt(i);
      }

      return new Blob([uInt8Array], {
        type: contentType
      });
    }
  }, {
    key: "__handlePrev__REACT_HOT_LOADER__",
    value: function __handlePrev__REACT_HOT_LOADER__() {
      var _this25 = this;

      // 重置当前图片尺寸和角度
      this.setState({
        rot: 0,
        scale: 1
      }, function () {
        var _this25$state = _this25.state,
            selectedKey = _this25$state.selectedKey,
            rot = _this25$state.rot,
            scale = _this25$state.scale;

        var img = _this25.currentImgDom(selectedKey);

        if (img) {
          img.style.transform = "rotate(".concat(rot, "deg) scale(").concat(scale, ")");

          _this25.refs.carouselBig.prev();
        }
      });
    }
  }, {
    key: "__handleNext__REACT_HOT_LOADER__",
    value: function __handleNext__REACT_HOT_LOADER__() {
      var _this26 = this;

      // 重置当前图片尺寸和角度
      this.setState({
        rot: 0,
        scale: 1
      }, function () {
        var _this26$state = _this26.state,
            selectedKey = _this26$state.selectedKey,
            rot = _this26$state.rot,
            scale = _this26$state.scale;

        var img = _this26.currentImgDom(selectedKey);

        if (img) {
          img.style.transform = "rotate(".concat(rot, "deg) scale(").concat(scale, ")");

          _this26.refs.carouselBig.next();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this27 = this;

      var _this$state11 = this.state,
          picHover = _this$state11.picHover,
          isFold = _this$state11.isFold,
          bigList = _this$state11.bigList,
          scale = _this$state11.scale;
      return _react.default.createElement("div", {
        className: 'left',
        id: "previewLeft"
      }, _react.default.createElement("div", {
        className: 'carl_big',
        style: {
          height: isFold ? '552px' : '464px'
        },
        onMouseOver: function onMouseOver() {
          _this27.setState({
            picHover: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this27.setState({
            picHover: false
          });
        }
      }, _react.default.createElement(_carousel.default, {
        ref: "carouselBig",
        dots: false,
        afterChange: this.handleChange,
        effect: "fade"
      }, bigList), picHover ? [_react.default.createElement(_icon.default, {
        type: "left",
        key: "1",
        className: 'anticon',
        style: {
          left: 0,
          background: 'rgba(0,0,0,.09)'
        },
        onClick: function onClick() {
          _this27.handlePrev();
        }
      }), _react.default.createElement(_icon.default, {
        type: "right",
        key: "2",
        className: 'anticon',
        style: {
          right: 0,
          background: 'rgba(0,0,0,.09)'
        },
        onClick: function onClick() {
          _this27.handleNext();
        }
      })] : ''), _react.default.createElement("div", {
        className: 'func_bar'
      }, _react.default.createElement("span", {
        className: 'icon',
        onClick: this.handleFold
      }, isFold ? _react.default.createElement(_icon.default, {
        type: "up-circle"
      }) : _react.default.createElement(_icon.default, {
        type: "down-circle"
      }), "\u56FE\u7247\u5217\u8868"), "|", _react.default.createElement("span", {
        className: 'size'
      }, _react.default.createElement("span", {
        className: 'icon'.concat(" ", 'icon_left'),
        onClick: this.imgToSize.bind(this, 0.2)
      }, "+"), parseInt(scale * 100, 10), "%", _react.default.createElement("span", {
        className: 'icon'.concat(" ", 'icon_right'),
        onClick: this.imgToSize.bind(this, -0.2)
      }, "-")), "|", _react.default.createElement("span", {
        className: 'turn',
        style: {
          padding: '0 2px 0 8px'
        }
      }, _react.default.createElement(IconFont, {
        type: "iconzuoxuanzhuan",
        onClick: this.handleTurnLeft
      }), _react.default.createElement(IconFont, {
        type: "iconyouxuanzhuan",
        onClick: this.handleTurnRight
      })), "|", _react.default.createElement("span", {
        className: 'icon',
        onClick: this.getDownloadUrl
      }, _react.default.createElement(_icon.default, {
        type: "download"
      }), "\u4E0B\u8F7D")), _react.default.createElement("div", {
        className: 'carl_small',
        style: {
          visibility: isFold ? 'hidden' : 'visible'
        }
      }, _react.default.createElement(_carousel.default, {
        ref: "carouselSmall",
        dots: false
      }, this.getSmallCalList()), _react.default.createElement("span", {
        className: 'span_left'
      }, _react.default.createElement(_icon.default, {
        type: "left",
        onClick: function onClick() {
          _this27.handlePrev();
        }
      })), _react.default.createElement("span", {
        className: 'span_right'
      }, _react.default.createElement(_icon.default, {
        type: "right",
        onClick: function onClick() {
          _this27.handleNext();
        }
      }))));
    }
  }]);
  return ViewPic;
}(_react.default.Component);

exports.default = ViewPic;
ViewPic.propTypes = {
  fileList: _propTypes.default.array,
  download: _propTypes.default.object,
  selectedKey: _propTypes.default.number,
  onChange: _propTypes.default.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(IconFont, "IconFont", "/Users/qiu/biosan/BiosanUi/src/MyPreview/viewPic.js");

  __REACT_HOT_LOADER__.register(BIOSANCONFIG, "BIOSANCONFIG", "/Users/qiu/biosan/BiosanUi/src/MyPreview/viewPic.js");

  __REACT_HOT_LOADER__.register(Tool, "Tool", "/Users/qiu/biosan/BiosanUi/src/MyPreview/viewPic.js");

  __REACT_HOT_LOADER__.register(COUNT, "COUNT", "/Users/qiu/biosan/BiosanUi/src/MyPreview/viewPic.js");

  __REACT_HOT_LOADER__.register(ViewPic, "ViewPic", "/Users/qiu/biosan/BiosanUi/src/MyPreview/viewPic.js");
}();

;