webpackHotUpdate("static\\development\\pages\\pro.js",{

/***/ "./pages/pro.js":
/*!**********************!*\
  !*** ./pages/pro.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_layout_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../component/layout/layout.js */ "./component/layout/layout.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../details */ "../details.mjs");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);



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
      qua: 1,
      pro: {
        _id: props.data._id,
        price: props.data.unitPrice,
        pic: _this.props.data.pictures[0],
        qua: 1,
        pro: _this.props.data.productName,
        total: _this.props.data.unitPrice * 1
      }
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.rr = {
      _id: props.data._id,
      price: props.data.unitPrice,
      pic: _this.props.data.pictures[0],
      qua: 1,
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
        prst.push(this.state.pro);
        this.setState({
          cart: prst
        });
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
        return;
      }

      localStorage.setItem('cart', JSON.stringify([this.state.pro]));
      var arr = localStorage.getItem('cart');
      this.setState({
        cart: arr
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.cart.length);
      console.log(this.rr);
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
      }, "xxl"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Counter, null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/pro")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=pro.js.1d9ab37463ed0e9ac9bb.hot-update.js.map