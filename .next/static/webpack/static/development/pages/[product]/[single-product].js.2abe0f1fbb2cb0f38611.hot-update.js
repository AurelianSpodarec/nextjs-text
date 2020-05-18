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








function ChooseColor(_ref) {
  var _this = this;

  var colors = _ref.colors;
  return colors.map(function (color, index) {
    return __jsx("button", {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: "".concat(color)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    });
  });
}

function getColors(variation) {
  console.log("color", variation.variations);
  return variation.variations.map(function (item, index) {
    return item.attributes.attribute_pa_color;
  });
} // function getProductById(products, id) {
//     return products.find(product => product.variation_id === id);
// }


function SingleProduct(_ref2) {
  var _this2 = this;

  var product = _ref2.product;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  console.log("Product", product);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      productIndex = _useState[0],
      setProductIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(product),
      productData = _useState2[0],
      setProductData = _useState2[1];

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Name: ", productData.name), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Price: ", productData.variations[productIndex].display_price), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, productData.variations.map(function (object, index) {
    return __jsx("button", {
      onClick: function onClick() {
        return setProductIndex(index);
      },
      key: index,
      style: {
        border: index === productIndex ? '3px solid red' : '',
        height: '50px',
        width: '50px',
        backgroundColor: "".concat(object.attributes.attribute_pa_color)
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    });
  })), __jsx("button", {
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Add to cart")), productData.variations[productIndex].variation_gallery_images.map(function (product, index) {
    return __jsx("img", {
      src: product.url,
      height: "300px",
      title: "Contemplative Reptile",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
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
//# sourceMappingURL=[single-product].js.2abe0f1fbb2cb0f38611.hot-update.js.map