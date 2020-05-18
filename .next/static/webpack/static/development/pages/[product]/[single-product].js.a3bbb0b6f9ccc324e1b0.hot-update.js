webpackHotUpdate("static/development/pages/[product]/[single-product].js",{

/***/ "./src/pages/[product]/[single-product].js":
/*!*************************************************!*\
  !*** ./src/pages/[product]/[single-product].js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_woocommerce_config_woocommerce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/woocommerce/config_woocommerce */ "./src/services/woocommerce/config_woocommerce.js");

var _jsxFileName = "/Users/Dorota/Desktop/WebDev/nextjs-wp-test/front-end/src/pages/[product]/[single-product].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  root: {
    maxWidth: 345
  },
  media: {
    height: 330
  }
}); // Color changes the variation

function ChooseColor() {}

function SingleProduct(_ref) {
  var _this = this;

  var product = _ref.product;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var classes = useStyles();
  console.log("Product", product);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Name: ", product.name), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Price: ", product.price), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Color:"), product.variations[0].variation_gallery_images.map(function (product, index) {
    return __jsx("img", {
      className: classes.media,
      src: product.url,
      title: "Contemplative Reptile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 28
      }
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SingleProduct);

SingleProduct.getInitialProps = function _callee(ctx) {
  var query;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = ctx.query;
          console.log("Query Single Product", _services_woocommerce_config_woocommerce__WEBPACK_IMPORTED_MODULE_7__["default"].get('route').then(function (res) {
            return {
              p: res.data
            };
          })); // return WooCommerce.get(`product/slug=${ctx.query['single-product']}`)

          return _context.abrupt("return", _services_woocommerce_config_woocommerce__WEBPACK_IMPORTED_MODULE_7__["default"].get("product/slug=".concat(ctx.query['single-product'], "/variations")) // return WooCommerce.get(`products/${ctx.query['single-product']}`)
          .then(function (response) {
            return {
              product: response.data
            };
          })["catch"](function (error) {
            return {
              product: error.response.data
            };
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}; // $query = new WP_Query( array( 'name' => 'about-my-life' ) );

/***/ })

})
//# sourceMappingURL=[single-product].js.a3bbb0b6f9ccc324e1b0.hot-update.js.map