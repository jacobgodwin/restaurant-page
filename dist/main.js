/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! pizza-header.jpg */ "./src/pizza-header.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-size: 10px;\n  font-family: 'Inter', sans-serif;\n  color: #fff;\n}\n\nbody {\n  margin: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n  width: 100vw;\n}\n\nfooter {\n  background-color: #cd853f;\n  padding: 1rem 0;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  gap: 0.8rem;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 40vh;\n  background-position: 50% 80%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100vw;\n}\n\nheader > section {\n  font-family: 'Yellowtail', cursive;\n  align-self: center;\n  margin: auto;\n  font-size: 10rem;\n  padding: 0 2rem;\n  border-radius: 3rem;\n  background-color: rgba(205, 133, 63, 0.9);\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.6rem;\n  background-color: #cd853f;\n}\n\nnav li {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  margin: 0;\n  padding: 1.2rem;\n  cursor: pointer;\n}\n\nnav li:hover {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  margin: 0;\n  padding: 1.2rem;\n  background-color: #b6732f;\n  cursor: pointer;\n}\n\nnav > ul {\n  display: flex;\n  list-style-type: none;\n  gap: 14rem;\n  margin: 0;\n}\n\n.flex-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2rem 0;\n  gap: 2rem;\n}\n\n.about-para {\n  width: 30vw;\n  background-color: #cd853f;\n  font-size: 1.8rem;\n  padding: 2rem;\n  border-radius: 2rem;\n  box-shadow: 0.8rem 0.8rem 0 #474a48;\n}\n\n.content-heading {\n  color: #474a48;\n  font-size: 4rem;\n  font-family: 'Yellowtail', cursive;\n}\n\n/* Menu Page */\n\n.menu-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  width: 70vw;\n}\n\n.menu-item {\n  background-color: #cd853f;\n  padding: 2rem;\n  border-radius: 2rem;\n  box-shadow: 0.8rem 0.8rem 0 #474a48;\n}\n\n.menu-title {\n  font-size: 3rem;\n  font-family: 'Yellowtail', cursive;\n}\n\n.menu-ingredients {\n  font-size: 1.6rem;\n  font-style: italic;\n}\n\n/* Contact Page */\n\n.contact-content {\n  background-color: #cd853f;\n  font-size: 1.6rem;\n  padding: 2rem;\n  border-radius: 2rem;\n  box-shadow: 0.8rem 0.8rem 0 #474a48;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1.5rem;\n}\n\n.flex-align {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.hours-header {\n  margin-bottom: 1.5rem;\n  margin-top: 2rem;\n}\n\n.hours-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gCAAgC;EAChC,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,yDAAuC;EACvC,YAAY;EACZ,4BAA4B;EAC5B,sBAAsB;EACtB,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,cAAc;EACd,SAAS;EACT,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,cAAc;EACd,SAAS;EACT,eAAe;EACf,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,eAAe;EACf,kCAAkC;AACpC;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,qCAAqC;EACrC,cAAc;EACd,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX","sourcesContent":["html {\n  font-size: 10px;\n  font-family: 'Inter', sans-serif;\n  color: #fff;\n}\n\nbody {\n  margin: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n  width: 100vw;\n}\n\nfooter {\n  background-color: #cd853f;\n  padding: 1rem 0;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  gap: 0.8rem;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  background-image: url(pizza-header.jpg);\n  height: 40vh;\n  background-position: 50% 80%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100vw;\n}\n\nheader > section {\n  font-family: 'Yellowtail', cursive;\n  align-self: center;\n  margin: auto;\n  font-size: 10rem;\n  padding: 0 2rem;\n  border-radius: 3rem;\n  background-color: rgba(205, 133, 63, 0.9);\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.6rem;\n  background-color: #cd853f;\n}\n\nnav li {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  margin: 0;\n  padding: 1.2rem;\n  cursor: pointer;\n}\n\nnav li:hover {\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  margin: 0;\n  padding: 1.2rem;\n  background-color: #b6732f;\n  cursor: pointer;\n}\n\nnav > ul {\n  display: flex;\n  list-style-type: none;\n  gap: 14rem;\n  margin: 0;\n}\n\n.flex-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2rem 0;\n  gap: 2rem;\n}\n\n.about-para {\n  width: 30vw;\n  background-color: #cd853f;\n  font-size: 1.8rem;\n  padding: 2rem;\n  border-radius: 2rem;\n  box-shadow: 0.8rem 0.8rem 0 #474a48;\n}\n\n.content-heading {\n  color: #474a48;\n  font-size: 4rem;\n  font-family: 'Yellowtail', cursive;\n}\n\n/* Menu Page */\n\n.menu-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  width: 70vw;\n}\n\n.menu-item {\n  background-color: #cd853f;\n  padding: 2rem;\n  border-radius: 2rem;\n  box-shadow: 0.8rem 0.8rem 0 #474a48;\n}\n\n.menu-title {\n  font-size: 3rem;\n  font-family: 'Yellowtail', cursive;\n}\n\n.menu-ingredients {\n  font-size: 1.6rem;\n  font-style: italic;\n}\n\n/* Contact Page */\n\n.contact-content {\n  background-color: #cd853f;\n  font-size: 1.6rem;\n  padding: 2rem;\n  border-radius: 2rem;\n  box-shadow: 0.8rem 0.8rem 0 #474a48;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1.5rem;\n}\n\n.flex-align {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.hours-header {\n  margin-bottom: 1.5rem;\n  margin-top: 2rem;\n}\n\n.hours-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buildContact.js":
/*!*****************************!*\
  !*** ./src/buildContact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildContact = () => {
  console.log('This is the Contact button!');
  let main = document.getElementsByTagName('main')[0];
  main.replaceChildren();
  //Section container
  let section = document.createElement('section');
  section.classList.add('contact-info');
  section.classList.add('flex-center');

  //Contact Us line
  let contactIntro = document.createElement('div');
  contactIntro.classList.add('content-heading');
  contactIntro.innerHTML = 'Contact Us';
  section.appendChild(contactIntro);

  //Main contact content
  let contactMain = document.createElement('div');
  contactMain.classList.add('contact-content');
  section.appendChild(contactMain);

  //Phone Number and Icon
  let phone = document.createElement('div');
  phone.classList.add('contact-phone');
  phone.classList.add('flex-align');
  let phoneIcon = document.createElement('i');
  phoneIcon.classList.add('bi', 'bi-telephone-fill');
  phone.appendChild(phoneIcon);
  let phoneNumber = document.createElement('span');
  phoneNumber.innerHTML = '(444)-444-4444';
  phone.appendChild(phoneNumber);

  //Email address and Icon
  let email = document.createElement('div');
  email.classList.add('contact-email');
  email.classList.add('flex-align');
  let emailIcon = document.createElement('i');
  emailIcon.classList.add('bi', 'bi-envelope-fill');
  email.appendChild(emailIcon);
  let emailAddr = document.createElement('span');
  emailAddr.innerHTML = 'slicepizza@pizza.com';
  email.appendChild(emailAddr);

  //Store Hours

  const days = [
    {
      Days: 'Tues - Thurs',
      Hours: '11am - 9pm',
    },
    {
      Days: 'Fri & Sat',
      Hours: '11am - 9:30pm',
    },
    {
      Days: 'Sun',
      Hours: '4pm - 9pm',
    },
    {
      Days: 'Mon',
      Hours: 'Closed',
    },
  ];

  //Store hours div container
  let storeHours = document.createElement('div');
  storeHours.classList.add('hours-container');

  //Header div for store hours
  let hoursHeader = document.createElement('div');
  hoursHeader.classList.add('hours-header');
  hoursHeader.classList.add('flex-align');
  let hoursIcon = document.createElement('i');
  hoursIcon.classList.add('bi', 'bi-clock-fill');
  hoursHeader.appendChild(hoursIcon);
  let hoursHeadText = document.createElement('span');
  hoursHeadText.innerHTML = 'Store Hours';
  hoursHeader.appendChild(hoursHeadText);
  storeHours.appendChild(hoursHeader);

  //Days open
  let hoursList = document.createElement('ul');
  hoursList.classList.add('hours-list');
  for (const day of days) {
    let li = document.createElement('li');
    li.innerHTML = day.Days + ': ' + day.Hours;
    hoursList.appendChild(li);
  }
  storeHours.appendChild(hoursList);

  contactMain.appendChild(storeHours);
  contactMain.appendChild(phone);
  contactMain.appendChild(email);
  contactMain.appendChild(storeHours);
  main.appendChild(section);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildContact);


/***/ }),

/***/ "./src/buildHome.js":
/*!**************************!*\
  !*** ./src/buildHome.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildHome = () => {
  let content = document.getElementById('content');
  let main = document.getElementsByTagName('main');
  let section = document.createElement('section');
  let div = document.createElement('div');
  let p = document.createElement('p');
  let footer = document.getElementsByTagName('footer')[0];
  div.classList.add('content-heading');
  div.innerHTML = 'About';

  p.innerHTML =
    'Slice Pizza serves up authentic, Italian style pizzas. <br><br>Made with our homemade pizza dough. Using Tipo 00 flour, the pizzas are topped with fresh, local ingredients and then cooked in our large brick ovens. Swing by and try a slice today!';

  if (main.length === 0) {
    main = document.createElement('main');

    section.classList.add('flex-center');

    p.classList.add('about-para');

    content.insertBefore(main, footer);

    main.appendChild(section);

    section.appendChild(div);

    section.appendChild(p);
  } else {
    let main = document.getElementsByTagName('main')[0];

    main.replaceChildren();

    section.classList.add('flex-center');

    p.classList.add('about-para');

    content.insertBefore(main, footer);

    main.appendChild(section);

    section.appendChild(div);

    section.appendChild(p);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHome);


/***/ }),

/***/ "./src/buildInitial.js":
/*!*****************************!*\
  !*** ./src/buildInitial.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildInitial = () => {
  let content = document.getElementById('content');
  let header = document.createElement('header');
  let section = document.createElement('section');
  let nav = document.createElement('nav');
  let ul = document.createElement('ul');
  let footer = document.createElement('footer');
  let gitIcon = document.createElement('i');
  let span = document.createElement('span');
  span.innerHTML = 'Jacob Godwin';
  gitIcon.classList.add('bi', 'bi-github');
  footer.appendChild(gitIcon);
  footer.appendChild(span);
  const navOptions = ['Home', 'Menu', 'Contact'];

  content.appendChild(header);
  section.innerHTML = 'Slice Pizza';
  header.appendChild(section);
  header.append(nav);
  nav.appendChild(ul);
  for (const option of navOptions) {
    let li = document.createElement('li');
    li.innerHTML = option;
    ul.appendChild(li);
  }
  content.appendChild(footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildInitial);


/***/ }),

/***/ "./src/buildMenu.js":
/*!**************************!*\
  !*** ./src/buildMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildMenu = () => {
  const menuItems = [
    {
      Title: 'Classico',
      Ingredients: 'San Marzano tomato sauce, bufala mozzarella, fresh basil',
    },
    {
      Title: 'Pepperoni',
      Ingredients: 'San Marzano tomato sauce, fresh mozzarella, pepperoni',
    },
    {
      Title: 'Carnivora',
      Ingredients:
        'San Marzano tomato sauce, fresh mozzarella, pancetta, soppressata, sausage, red onions, garlic, fresh basil',
    },
    {
      Title: 'Vegetarian',
      Ingredients:
        'San Marzano tomato sauce, fresh mozzarella, mushrooms, artichoke, fresh garlic, fresh spinach, grape tomato',
    },
  ];

  function createMenuItem(title, ingredients, id) {
    const menuItem = document.createElement('div');
    menuItem.dataset.menu = id + 1;
    menuItem.classList.add('menu-item');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('menu-title');
    titleDiv.innerHTML = title;
    menuItem.appendChild(titleDiv);

    const ingredientsDiv = document.createElement('div');
    ingredientsDiv.classList.add('menu-ingredients');
    ingredientsDiv.innerHTML = ingredients;
    menuItem.appendChild(ingredientsDiv);

    return menuItem;
  }

  let main = document.getElementsByTagName('main')[0];
  main.replaceChildren();
  let section = document.createElement('section');
  section.classList.add('menu-container');
  for (const item of menuItems) {
    section.appendChild(
      createMenuItem(item.Title, item.Ingredients, menuItems.indexOf(item))
    );
  }
  main.appendChild(section);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMenu);


/***/ }),

/***/ "./src/pizza-header.jpg":
/*!******************************!*\
  !*** ./src/pizza-header.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdb52cc6e1381d16f286.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _buildInitial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildInitial */ "./src/buildInitial.js");
/* harmony import */ var _buildHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildHome */ "./src/buildHome.js");
/* harmony import */ var _buildMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildMenu */ "./src/buildMenu.js");
/* harmony import */ var _buildContact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildContact */ "./src/buildContact.js");






(0,_buildInitial__WEBPACK_IMPORTED_MODULE_1__["default"])();

(0,_buildHome__WEBPACK_IMPORTED_MODULE_2__["default"])();

let navBar = document.getElementsByTagName('li');

for (const item of navBar) {
  if (item.innerHTML === 'Home') {
    item.addEventListener('click', _buildHome__WEBPACK_IMPORTED_MODULE_2__["default"]);
  } else if (item.innerHTML === 'Menu') {
    item.addEventListener('click', _buildMenu__WEBPACK_IMPORTED_MODULE_3__["default"]);
  } else if (item.innerHTML === 'Contact') {
    item.addEventListener('click', _buildContact__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hHNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUI1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FCO0FBQ047QUFDQTtBQUNNOztBQUUxQyx5REFBWTs7QUFFWixzREFBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLGtEQUFTO0FBQzVDLElBQUk7QUFDSixtQ0FBbUMsa0RBQVM7QUFDNUMsSUFBSTtBQUNKLG1DQUFtQyxxREFBWTtBQUMvQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2J1aWxkQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYnVpbGRIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9idWlsZEluaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2J1aWxkTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwicGl6emEtaGVhZGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q4NTNmO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZ2FwOiAwLjhyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDgwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5oZWFkZXIgPiBzZWN0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnWWVsbG93dGFpbCcsIGN1cnNpdmU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LXNpemU6IDEwcmVtO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA1LCAxMzMsIDYzLCAwLjkpO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkODUzZjtcXG59XFxuXFxubmF2IGxpIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiBsaTpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2NzMyZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGdhcDogMTRyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5mbGV4LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDJyZW0gMDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmFib3V0LXBhcmEge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q4NTNmO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDAuOHJlbSAwLjhyZW0gMCAjNDc0YTQ4O1xcbn1cXG5cXG4uY29udGVudC1oZWFkaW5nIHtcXG4gIGNvbG9yOiAjNDc0YTQ4O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdZZWxsb3d0YWlsJywgY3Vyc2l2ZTtcXG59XFxuXFxuLyogTWVudSBQYWdlICovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDRyZW07XFxuICB3aWR0aDogNzB2dztcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q4NTNmO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3gtc2hhZG93OiAwLjhyZW0gMC44cmVtIDAgIzQ3NGE0ODtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdZZWxsb3d0YWlsJywgY3Vyc2l2ZTtcXG59XFxuXFxuLm1lbnUtaW5ncmVkaWVudHMge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIENvbnRhY3QgUGFnZSAqL1xcblxcbi5jb250YWN0LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkODUzZjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3gtc2hhZG93OiAwLjhyZW0gMC44cmVtIDAgIzQ3NGE0ODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmZsZXgtYWxpZ24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5ob3Vycy1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmhvdXJzLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix5REFBdUM7RUFDdkMsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q4NTNmO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZ2FwOiAwLjhyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocGl6emEtaGVhZGVyLmpwZyk7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgODAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciA+IHNlY3Rpb24ge1xcbiAgZm9udC1mYW1pbHk6ICdZZWxsb3d0YWlsJywgY3Vyc2l2ZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDUsIDEzMywgNjMsIDAuOSk7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q4NTNmO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IGxpOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjY3MzJmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZ2FwOiAxNHJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uYWJvdXQtcGFyYSB7XFxuICB3aWR0aDogMzB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDg1M2Y7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYm94LXNoYWRvdzogMC44cmVtIDAuOHJlbSAwICM0NzRhNDg7XFxufVxcblxcbi5jb250ZW50LWhlYWRpbmcge1xcbiAgY29sb3I6ICM0NzRhNDg7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogJ1llbGxvd3RhaWwnLCBjdXJzaXZlO1xcbn1cXG5cXG4vKiBNZW51IFBhZ2UgKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWdhcDogNHJlbTtcXG4gIHdpZHRoOiA3MHZ3O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDg1M2Y7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDAuOHJlbSAwLjhyZW0gMCAjNDc0YTQ4O1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogJ1llbGxvd3RhaWwnLCBjdXJzaXZlO1xcbn1cXG5cXG4ubWVudS1pbmdyZWRpZW50cyB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogQ29udGFjdCBQYWdlICovXFxuXFxuLmNvbnRhY3QtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q4NTNmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDAuOHJlbSAwLjhyZW0gMCAjNDc0YTQ4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uZmxleC1hbGlnbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmhvdXJzLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uaG91cnMtbGlzdCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBidWlsZENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdUaGlzIGlzIHRoZSBDb250YWN0IGJ1dHRvbiEnKTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdO1xuICBtYWluLnJlcGxhY2VDaGlsZHJlbigpO1xuICAvL1NlY3Rpb24gY29udGFpbmVyXG4gIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY2VudGVyJyk7XG5cbiAgLy9Db250YWN0IFVzIGxpbmVcbiAgbGV0IGNvbnRhY3RJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0SW50cm8uY2xhc3NMaXN0LmFkZCgnY29udGVudC1oZWFkaW5nJyk7XG4gIGNvbnRhY3RJbnRyby5pbm5lckhUTUwgPSAnQ29udGFjdCBVcyc7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdEludHJvKTtcblxuICAvL01haW4gY29udGFjdCBjb250ZW50XG4gIGxldCBjb250YWN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0TWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRlbnQnKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0TWFpbik7XG5cbiAgLy9QaG9uZSBOdW1iZXIgYW5kIEljb25cbiAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBob25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtcGhvbmUnKTtcbiAgcGhvbmUuY2xhc3NMaXN0LmFkZCgnZmxleC1hbGlnbicpO1xuICBsZXQgcGhvbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBwaG9uZUljb24uY2xhc3NMaXN0LmFkZCgnYmknLCAnYmktdGVsZXBob25lLWZpbGwnKTtcbiAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcbiAgbGV0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSAnKDQ0NCktNDQ0LTQ0NDQnO1xuICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5cbiAgLy9FbWFpbCBhZGRyZXNzIGFuZCBJY29uXG4gIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWVtYWlsJyk7XG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2ZsZXgtYWxpZ24nKTtcbiAgbGV0IGVtYWlsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZW1haWxJY29uLmNsYXNzTGlzdC5hZGQoJ2JpJywgJ2JpLWVudmVsb3BlLWZpbGwnKTtcbiAgZW1haWwuYXBwZW5kQ2hpbGQoZW1haWxJY29uKTtcbiAgbGV0IGVtYWlsQWRkciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZW1haWxBZGRyLmlubmVySFRNTCA9ICdzbGljZXBpenphQHBpenphLmNvbSc7XG4gIGVtYWlsLmFwcGVuZENoaWxkKGVtYWlsQWRkcik7XG5cbiAgLy9TdG9yZSBIb3Vyc1xuXG4gIGNvbnN0IGRheXMgPSBbXG4gICAge1xuICAgICAgRGF5czogJ1R1ZXMgLSBUaHVycycsXG4gICAgICBIb3VyczogJzExYW0gLSA5cG0nLFxuICAgIH0sXG4gICAge1xuICAgICAgRGF5czogJ0ZyaSAmIFNhdCcsXG4gICAgICBIb3VyczogJzExYW0gLSA5OjMwcG0nLFxuICAgIH0sXG4gICAge1xuICAgICAgRGF5czogJ1N1bicsXG4gICAgICBIb3VyczogJzRwbSAtIDlwbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBEYXlzOiAnTW9uJyxcbiAgICAgIEhvdXJzOiAnQ2xvc2VkJyxcbiAgICB9LFxuICBdO1xuXG4gIC8vU3RvcmUgaG91cnMgZGl2IGNvbnRhaW5lclxuICBsZXQgc3RvcmVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdG9yZUhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWNvbnRhaW5lcicpO1xuXG4gIC8vSGVhZGVyIGRpdiBmb3Igc3RvcmUgaG91cnNcbiAgbGV0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWhlYWRlcicpO1xuICBob3Vyc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdmbGV4LWFsaWduJyk7XG4gIGxldCBob3Vyc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGhvdXJzSWNvbi5jbGFzc0xpc3QuYWRkKCdiaScsICdiaS1jbG9jay1maWxsJyk7XG4gIGhvdXJzSGVhZGVyLmFwcGVuZENoaWxkKGhvdXJzSWNvbik7XG4gIGxldCBob3Vyc0hlYWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBob3Vyc0hlYWRUZXh0LmlubmVySFRNTCA9ICdTdG9yZSBIb3Vycyc7XG4gIGhvdXJzSGVhZGVyLmFwcGVuZENoaWxkKGhvdXJzSGVhZFRleHQpO1xuICBzdG9yZUhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGVyKTtcblxuICAvL0RheXMgb3BlblxuICBsZXQgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaG91cnNMaXN0LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWxpc3QnKTtcbiAgZm9yIChjb25zdCBkYXkgb2YgZGF5cykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gZGF5LkRheXMgKyAnOiAnICsgZGF5LkhvdXJzO1xuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgc3RvcmVIb3Vycy5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xuXG4gIGNvbnRhY3RNYWluLmFwcGVuZENoaWxkKHN0b3JlSG91cnMpO1xuICBjb250YWN0TWFpbi5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIGNvbnRhY3RNYWluLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgY29udGFjdE1haW4uYXBwZW5kQ2hpbGQoc3RvcmVIb3Vycyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZENvbnRhY3Q7XG4iLCJjb25zdCBidWlsZEhvbWUgPSAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpO1xuICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb290ZXInKVswXTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaGVhZGluZycpO1xuICBkaXYuaW5uZXJIVE1MID0gJ0Fib3V0JztcblxuICBwLmlubmVySFRNTCA9XG4gICAgJ1NsaWNlIFBpenphIHNlcnZlcyB1cCBhdXRoZW50aWMsIEl0YWxpYW4gc3R5bGUgcGl6emFzLiA8YnI+PGJyPk1hZGUgd2l0aCBvdXIgaG9tZW1hZGUgcGl6emEgZG91Z2guIFVzaW5nIFRpcG8gMDAgZmxvdXIsIHRoZSBwaXp6YXMgYXJlIHRvcHBlZCB3aXRoIGZyZXNoLCBsb2NhbCBpbmdyZWRpZW50cyBhbmQgdGhlbiBjb29rZWQgaW4gb3VyIGxhcmdlIGJyaWNrIG92ZW5zLiBTd2luZyBieSBhbmQgdHJ5IGEgc2xpY2UgdG9kYXkhJztcblxuICBpZiAobWFpbi5sZW5ndGggPT09IDApIHtcbiAgICBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmbGV4LWNlbnRlcicpO1xuXG4gICAgcC5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYXJhJyk7XG5cbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShtYWluLCBmb290ZXIpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdO1xuXG4gICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZmxleC1jZW50ZXInKTtcblxuICAgIHAuY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYScpO1xuXG4gICAgY29udGVudC5pbnNlcnRCZWZvcmUobWFpbiwgZm9vdGVyKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZEhvbWU7XG4iLCJjb25zdCBidWlsZEluaXRpYWwgPSAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGxldCBnaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5pbm5lckhUTUwgPSAnSmFjb2IgR29kd2luJztcbiAgZ2l0SWNvbi5jbGFzc0xpc3QuYWRkKCdiaScsICdiaS1naXRodWInKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIGNvbnN0IG5hdk9wdGlvbnMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBzZWN0aW9uLmlubmVySFRNTCA9ICdTbGljZSBQaXp6YSc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgaGVhZGVyLmFwcGVuZChuYXYpO1xuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBuYXZPcHRpb25zKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lckhUTUwgPSBvcHRpb247XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkSW5pdGlhbDtcbiIsImNvbnN0IGJ1aWxkTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIFRpdGxlOiAnQ2xhc3NpY28nLFxuICAgICAgSW5ncmVkaWVudHM6ICdTYW4gTWFyemFubyB0b21hdG8gc2F1Y2UsIGJ1ZmFsYSBtb3p6YXJlbGxhLCBmcmVzaCBiYXNpbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBUaXRsZTogJ1BlcHBlcm9uaScsXG4gICAgICBJbmdyZWRpZW50czogJ1NhbiBNYXJ6YW5vIHRvbWF0byBzYXVjZSwgZnJlc2ggbW96emFyZWxsYSwgcGVwcGVyb25pJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIFRpdGxlOiAnQ2Fybml2b3JhJyxcbiAgICAgIEluZ3JlZGllbnRzOlxuICAgICAgICAnU2FuIE1hcnphbm8gdG9tYXRvIHNhdWNlLCBmcmVzaCBtb3p6YXJlbGxhLCBwYW5jZXR0YSwgc29wcHJlc3NhdGEsIHNhdXNhZ2UsIHJlZCBvbmlvbnMsIGdhcmxpYywgZnJlc2ggYmFzaWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgVGl0bGU6ICdWZWdldGFyaWFuJyxcbiAgICAgIEluZ3JlZGllbnRzOlxuICAgICAgICAnU2FuIE1hcnphbm8gdG9tYXRvIHNhdWNlLCBmcmVzaCBtb3p6YXJlbGxhLCBtdXNocm9vbXMsIGFydGljaG9rZSwgZnJlc2ggZ2FybGljLCBmcmVzaCBzcGluYWNoLCBncmFwZSB0b21hdG8nLFxuICAgIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0odGl0bGUsIGluZ3JlZGllbnRzLCBpZCkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uZGF0YXNldC5tZW51ID0gaWQgKyAxO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmdyZWRpZW50c0Rpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWluZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudHNEaXYuaW5uZXJIVE1MID0gaW5ncmVkaWVudHM7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNEaXYpO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xuICB9XG5cbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdO1xuICBtYWluLnJlcGxhY2VDaGlsZHJlbigpO1xuICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgbWVudUl0ZW1zKSB7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKGl0ZW0uVGl0bGUsIGl0ZW0uSW5ncmVkaWVudHMsIG1lbnVJdGVtcy5pbmRleE9mKGl0ZW0pKVxuICAgICk7XG4gIH1cbiAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBidWlsZEluaXRpYWwgZnJvbSAnLi9idWlsZEluaXRpYWwnO1xuaW1wb3J0IGJ1aWxkSG9tZSBmcm9tICcuL2J1aWxkSG9tZSc7XG5pbXBvcnQgYnVpbGRNZW51IGZyb20gJy4vYnVpbGRNZW51JztcbmltcG9ydCBidWlsZENvbnRhY3QgZnJvbSAnLi9idWlsZENvbnRhY3QnO1xuXG5idWlsZEluaXRpYWwoKTtcblxuYnVpbGRIb21lKCk7XG5cbmxldCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcblxuZm9yIChjb25zdCBpdGVtIG9mIG5hdkJhcikge1xuICBpZiAoaXRlbS5pbm5lckhUTUwgPT09ICdIb21lJykge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZEhvbWUpO1xuICB9IGVsc2UgaWYgKGl0ZW0uaW5uZXJIVE1MID09PSAnTWVudScpIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRNZW51KTtcbiAgfSBlbHNlIGlmIChpdGVtLmlubmVySFRNTCA9PT0gJ0NvbnRhY3QnKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkQ29udGFjdCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==