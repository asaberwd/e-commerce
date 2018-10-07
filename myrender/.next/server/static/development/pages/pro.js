module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../details.mjs":
/*!**********************!*\
  !*** ../details.mjs ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

 
var details = {
        title : 'my ecommerce',
        describtion : 'ecommerce for selling anything you want is here'
}

/* harmony default export */ __webpack_exports__["default"] = (details);

/***/ }),

/***/ "./component/layout/footer.js":
/*!************************************!*\
  !*** ./component/layout/footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\nodejs\\node-projects\\e-commerce\\myrender\\component\\layout\\footer.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: "colorlib-footer",
    role: "contentinfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row-pb-md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 colorlib-widget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "About Store"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "colorlib-social-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-dribbble",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 colorlib-widget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Customer Care"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "colorlib-footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Returns/Exchange")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Gift Voucher")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Special")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Customer Services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Site maps")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 colorlib-widget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "colorlib-footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "About us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Delivery Information")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Order Tracking")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "colorlib-footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Press")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Exhibitions")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "colorlib-footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "291 South 21th Street, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), " Suite 721 New York NY 10016"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel://1234567920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "+ 1235 2355 98")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:info@yoursite.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "info@yoursite.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "yoursite.com"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gototop js-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "js-gotop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-arrow-up2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/jquery.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/jquery.easing.1.3.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/bootstrap.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/jquery.waypoints.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/jquery.flexslider-min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/owl.carousel.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/jquery.magnific-popup.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/magnific-popup-options.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/bootstrap-datepicker.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/jquery.stellar.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/main.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }));
});

/***/ }),

/***/ "./component/layout/head.js":
/*!**********************************!*\
  !*** ./component/layout/head.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\nodejs\\node-projects\\e-commerce\\myrender\\component\\layout\\head.js";



var myhead = function myhead(props) {
  var title = props.title;
  var desc = props.desc;
  var img = props.img;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "E-commerce App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.desc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity: "sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
    integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
    integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:site_name",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.desc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:title",
    content: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:url",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/css/animate.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/css/icomoon.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/css/bootstrap.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/css/magnific-popup.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/css/flexslider.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/css/owl.carousel.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/css/owl.theme.default.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/css/bootstrap-datepicker.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/fonts/flaticon/font/flaticon.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "./../static/css/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./../static/js/modernizr-2.6.2.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (myhead);

/***/ }),

/***/ "./component/layout/layout.js":
/*!************************************!*\
  !*** ./component/layout/layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./component/layout/navbar.js");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head */ "./component/layout/head.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./component/layout/footer.js");





var layout = function layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: props.title,
    desc: props.desc,
    img: props.img
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cartlen: props.cartlen
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./component/layout/navbar.js":
/*!************************************!*\
  !*** ./component/layout/navbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {
      cart: []
    };
    return _this;
  }

  _createClass(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var cart = localStorage.getItem('cart');

      if (cart) {
        this.setState({
          cart: JSON.parse(cart)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-primary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarTogglerDemo03",
        "aria-controls": "navbarTogglerDemo03",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        route: "index"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-brand"
      }, "Brandat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarTogglerDemo03"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav mr-auto mt-2 mt-lg-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item active"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        route: "index"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link"
      }, "Home ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, "(current)")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        route: "cart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link"
      }, "Cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        route: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link"
      }, "Men"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        route: "contact"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link"
      }, "contact us"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        route: "checkOut"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link"
      }, "check out"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        route: "about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link"
      }, "About Us"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        route: "cart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-shopping-cart"
      }), " Cart [", this.props.cartlen || this.state.cart.length, "] "))))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/pro.js":
/*!**********************!*\
  !*** ./pages/pro.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_layout_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../component/layout/layout.js */ "./component/layout/layout.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../details */ "../details.mjs");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Mypost =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Mypost, _React$Component);

  function Mypost(props) {
    var _this;

    _classCallCheck(this, Mypost);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mypost).call(this, props));
    _this.state = {
      cart: [],
      qua: 1
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.rr = {
      _id: props.data._id,
      price: props.data.unitPrice,
      pic: _this.props.data.pictures[0],
      qua: _this.state.qua,
      pro: _this.props.data.productName,
      total: _this.props.data.unitPrice * 1
    };
    return _this;
  }

  _createClass(Mypost, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pnu = JSON.parse(localStorage.getItem('cart'));

      if (pnu) {
        this.setState({
          cart: pnu
        });
      }
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      var incart = localStorage.getItem('cart');

      if (incart) {
        var prst = this.state.cart;
        prst.push(this.rr);
        this.setState({
          cart: prst
        });
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
        return;
      }

      localStorage.setItem('cart', JSON.stringify([this.rr]));
      var arr = localStorage.getItem('cart');
      this.setState({
        cart: arr
      });
    }
  }, {
    key: "getcounter",
    value: function getcounter() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_layout_layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: this.props.data.productName,
        desc: this.props.data.prodDescription,
        img: this.props.data.pictures[0],
        cartlen: this.state.cart.length
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, _details__WEBPACK_IMPORTED_MODULE_4__["default"].title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _details__WEBPACK_IMPORTED_MODULE_4__["default"].describtion), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row row-pb-lg"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-10 col-md-offset-1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "product-detail-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "product-entry"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "product-img",
        style: {
          backgroundImage: "url(".concat(this.props.data.pictures[0], ")")
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "tag"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "sale"
      }, "Sale"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thumb-nail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "thumb-img",
        style: {
          backgroundImage: "url(".concat(this.props.data.pictures[0], ")")
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "thumb-img",
        style: {
          backgroundImage: "url(".concat(this.props.data.pictures[0], ")")
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "thumb-img",
        style: {
          backgroundImage: "url(".concat(this.props.data.pictures[0], ")")
        }
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-7"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "desc"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, this.props.data.productName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "price"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, this.props.data.unitPrice, " $"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "rate text-right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "icon-star-full"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "icon-star-full"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "icon-star-full"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "icon-star-full"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "icon-star-half"
      }), "(74 Rating)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " ", this.props.data.prodDescription, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "color-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "color-desc"
      }, "Color:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "color color-1"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "color color-2"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "color color-3"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "color color-4"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "color color-5"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "size-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "size-desc"
      }, "Size:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "size size-1"
      }, "xs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "size size-2"
      }, "s"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "size size-3"
      }, "m"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "size size-4"
      }, "l"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "size size-5"
      }, "xl"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "size size-5"
      }, "xxl"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Counter, {
        co: this.getcounter
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "btn btn-primary btn-addtocart",
        onClick: this.onClick
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "icon-shopping-cart"
      }), " Add to Cart"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "nav nav-tabs"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "active"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        "data-toggle": "tab",
        href: "#description"
      }, "Description")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        "data-toggle": "tab",
        href: "#manufacturer"
      }, "Manufacturer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        "data-toggle": "tab",
        href: "#review"
      }, "Reviews"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "description",
        className: "tab-pane fade in active"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "The Big Oxmox advised her not to do so"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Because there were thousands of bad Commas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Wild Question Marks and devious Semikoli"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "She packed her seven versalia"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "tial into the belt and made herself on the way."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "manufacturer",
        className: "tab-pane fade"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way."))));
    }
  }]);

  return Mypost;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Mypost, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:8080/api/products/".concat(query.slug));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (Mypost);

var Counter =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Counter, _React$Component2);

  function Counter() {
    var _this2;

    _classCallCheck(this, Counter);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this));
    _this2.state = {
      counter: 1
    };
    _this2.inc = _this2.inc.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    _this2.dec = _this2.dec.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }

  _createClass(Counter, [{
    key: "inc",
    value: function inc(e) {
      e.preventDefault();
      var co = this.state.counter;
      this.setState({
        counter: co + 1
      });
    }
  }, {
    key: "dec",
    value: function dec(e) {
      e.preventDefault();
      var de = this.state.counter;
      if (de === 1) return 0;
      this.setState({
        counter: de - 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row row-pb-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "input-group-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        className: "quantity-left-minus btn",
        name: "minus",
        "data-type": "minus",
        "data-field": "",
        onClick: this.dec
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "icon-minus2"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "quantity",
        name: "quantity",
        className: "form-control input-number",
        value: this.state.counter,
        min: "1",
        max: "100",
        readOnly: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "input-group-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        className: "quantity-right-plus btn",
        name: "plus",
        "data-type": "plus",
        "data-field": "",
        onClick: this.inc
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "icon-plus2"
      }))))));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('index', '/').add('pro', '/:slug.html').add('cart', '/cart.html').add('about', '/about.html').add('checkOut', '/checkout.html').add('contact', '/contact.html');

/***/ }),

/***/ 4:
/*!****************************!*\
  !*** multi ./pages/pro.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/pro.js */"./pages/pro.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=pro.js.map