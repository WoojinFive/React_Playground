webpackHotUpdate("static\\development\\pages\\auth.js",{

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/User */ "./components/User.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\WOOJIN\\Desktop\\coding\\React_Playground\\complete-guide\\nextjs-toturial\\pages\\auth\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var AuthIndexPage = function AuthIndexPage(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "The Auth Index Page - ", props.appName), __jsx(_components_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Woojin",
    age: 34,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }));
};

AuthIndexPage.getInitialProps = function (context) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        appName: 'Super App (Auth)'
      });
    }, 1000);
  });
  return promise;
};

/* harmony default export */ __webpack_exports__["default"] = (AuthIndexPage);

/***/ })

})
//# sourceMappingURL=auth.js.ef15a85b52a321d23168.hot-update.js.map