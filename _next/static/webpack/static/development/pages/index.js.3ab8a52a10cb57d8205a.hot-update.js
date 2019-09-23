webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/certificate_list/CertificateList.tsx":
/*!*********************************************************!*\
  !*** ./components/certificate_list/CertificateList.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/vedpetkar/src/github.com/vpetkar/vpetkar.github.io-src/components/certificate_list/CertificateList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




var CERTIFICATES = [{
  title: 'HTML5',
  completionDate: new Date('2019-09-22'),
  imageUrl: '/static/cert-1014-15680677.jpg',
  pdfUrl: '/static/cert-1014-15680677.pdf'
}];

function CertificateList(props) {
  var certificateListItems = CERTIFICATES.map(function (certificate) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      style: {
        width: '18rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Card"].Img, {
      variant: "top",
      src: certificate.imageUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Card"].Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, certificate.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Card"].Subtitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Completed on ", certificate.completionDate.toLocaleDateString()), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Card"].Link, {
      href: certificate.pdfUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Download PDF")));
  });
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    className: "justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Sololearn Certificates")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.sololearn.com/Profile/15680677/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCoffee"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "View profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["CardColumns"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, certificateListItems), ";"));
}

/* harmony default export */ __webpack_exports__["default"] = (CertificateList);

/***/ })

})
//# sourceMappingURL=index.js.3ab8a52a10cb57d8205a.hot-update.js.map