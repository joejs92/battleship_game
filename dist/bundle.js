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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow: hidden;
}

body{
    background-color: papayawhip;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 4fr;
}

.main_container {
    display: grid;
    grid-template-columns: 1fr 4fr;
}

.container {
    display: grid;
    border: 2px solid black;
}

#left_main {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

#carrier {
    height: 58px;
    width: 316px;
    position: absolute;
    z-index: 1;
} 

#battleship {
    height: 58px;
    width: 250px;
    position: absolute;
    z-index: 1;
}

#destroyer {
    height: 58px;
    width: 188px;
    position: absolute;
    z-index: 1;
}

#submarine {
    height: 58px;
    width: 188px;
    position: absolute;
    z-index: 1;
}

#ptBoat {
    /* For checking the sizes of the boats.
    position: absolute;
    left: 516px;
    top: 480px; */
    height: 58px;
    width: 124px;
    position: absolute;
    z-index: 1;
}

#ship_header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 108px;
    letter-spacing: 8px;
}

header {
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 216px;
    letter-spacing: 32px;
    border:0px;
}

.ship_cell {
    border: 2px solid black;
    font-size: xx-large;
}

#gameTable {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: xx-large;
}

#gameTable p{
    padding: 8px;
    text-align: center;
}

#gameTable .container{
    display: block;
}

.gameBoard{
    display: grid;
    height: 100%;
    padding: 0px 64px 64px 64px;
    grid-template-rows: auto;
}

.boardRow {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.playerSquare, .computerSquare {
    border: 2px solid black;
    background-color: rgb(50, 130, 235);
}

.playerSquare:hover {
    background-color: gray;
}

/* .playerSquare {
    height: 58px;
    width: 62.5px;
    overflow: visible;
} */

.computerSquare:hover {
    background-color: rgba(201, 19, 19, 0.33);
}

button {
    font-size: xx-large;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI;;;iBAGa;IACb,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,8DAA8D;AAClE;;AAEA;IACI,uBAAuB;IACvB,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;;GAIG;;AAEH;IACI,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\nbody{\n    background-color: papayawhip;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n}\n\n.main_container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.container {\n    display: grid;\n    border: 2px solid black;\n}\n\n#left_main {\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n#carrier {\n    height: 58px;\n    width: 316px;\n    position: absolute;\n    z-index: 1;\n} \n\n#battleship {\n    height: 58px;\n    width: 250px;\n    position: absolute;\n    z-index: 1;\n}\n\n#destroyer {\n    height: 58px;\n    width: 188px;\n    position: absolute;\n    z-index: 1;\n}\n\n#submarine {\n    height: 58px;\n    width: 188px;\n    position: absolute;\n    z-index: 1;\n}\n\n#ptBoat {\n    /* For checking the sizes of the boats.\n    position: absolute;\n    left: 516px;\n    top: 480px; */\n    height: 58px;\n    width: 124px;\n    position: absolute;\n    z-index: 1;\n}\n\n#ship_header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 108px;\n    letter-spacing: 8px;\n}\n\nheader {\n    border: 2px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 216px;\n    letter-spacing: 32px;\n    border:0px;\n}\n\n.ship_cell {\n    border: 2px solid black;\n    font-size: xx-large;\n}\n\n#gameTable {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    font-size: xx-large;\n}\n\n#gameTable p{\n    padding: 8px;\n    text-align: center;\n}\n\n#gameTable .container{\n    display: block;\n}\n\n.gameBoard{\n    display: grid;\n    height: 100%;\n    padding: 0px 64px 64px 64px;\n    grid-template-rows: auto;\n}\n\n.boardRow {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n.playerSquare, .computerSquare {\n    border: 2px solid black;\n    background-color: rgb(50, 130, 235);\n}\n\n.playerSquare:hover {\n    background-color: gray;\n}\n\n/* .playerSquare {\n    height: 58px;\n    width: 62.5px;\n    overflow: visible;\n} */\n\n.computerSquare:hover {\n    background-color: rgba(201, 19, 19, 0.33);\n}\n\nbutton {\n    font-size: xx-large;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* module decorator */ module = __webpack_require__.hmd(module);


class Ship{
    constructor(type,hitNumber){
        this.type = type;
        this.hitNumber = hitNumber;
        this.sunk = false;
        this.currentHits = 0;
    }

    isSunk(){
        if(this.currentHits == this.hitNumber){
            this.sunk = true;
        }
        return this.sunk;
    }

    hit(){
        this.currentHits += 1;
    }
}
//const playerCarrier = new Ship('carrier', 5);
/* Gameboard works fine. Lots of room for refactoring and
improvement. Will be interesting to integrate with the 
DOM. Should be only one point in the function that 
interacts with the outside world.
*/
class Gameboard{
    constructor(size, name){
        this.size = size;
        this.name = name;
        this.shipCoordinates = [];
        this.misses = [];
        this.guesses = [];
        this.carrier = new Ship('carrier',5);
        this.battleship = new Ship('battleship',4);
        this.destroyer = new Ship('destroyer',3);
        this.submarine = new Ship('submarine',3);
        this.ptBoat = new Ship('ptBoat',2);
        this.ships = {
            'carrier':this.carrier,
            'battleship':this.battleship,
            'destroyer':this.destroyer,
            'submarine':this.destroyer,
            'ptBoat':this.ptBoat
        }
        this.currentShip = null;
    }

    checkValidity(value,length,direction){
        //Checking that coordinates are on the board.
        if(value[0] > this.size || value[1] > this.size || value[0] < 1 || value[1] < 1){
            return false;
        }
        //Checking that ship doesn't go off the board.
        if(direction == 'up'){
            if(value[1] + length -1 > this.size){
                return false;
            }
            else{
                return true;
            }
        }
        else if(direction == 'down'){
            if(value[1] - length +1 < 1){
                return false;
            }
            else{
                return true;
            } 
        }
        else if(direction == 'right'){
            if(value[0] + length -1 > this.size){
                return false;
            }
            else{
                return true;
            }
        }
        else if(direction == 'left'){
            if(value[0] - length +1 < 1){
                return false;
            }
            else{
                return true;
            } 
        }
    }

    checkCollision(value,length,direction){
        let collision = false;
        if(direction == 'up'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]== this.shipCoordinates[j][0][0] && value[1]+i == this.shipCoordinates[j][0][1]){
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'down'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]== this.shipCoordinates[j][0][0] && value[1]-i == this.shipCoordinates[j][0][1]){
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'right'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]+i == this.shipCoordinates[j][0][0] && value[1] == this.shipCoordinates[j][0][1]){
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'left'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]-i == this.shipCoordinates[j][0][0] && value[1] == this.shipCoordinates[j][0][1]){
                        collision = true;
                    }
                }
            }
        }
        return collision;
    }

    placeShip(value,direction){
        const length = this.currentShip.hitNumber;
        if(this.checkValidity(value,length,direction) == true && this.checkCollision(value,length,direction) == false){
            if(direction == 'up'){
                for(let i = 0; i < length; i++){
                    const coordinate = [[value[0],value[1]+i],this.currentShip.type];
                    this.shipCoordinates.push(coordinate);
                }
            }
            else if(direction == 'down'){
                for(let i = 0; i < length; i++){
                    const coordinate = [[value[0],value[1]-i],this.currentShip.type];
                    this.shipCoordinates.push(coordinate);
                }
            }
            else if(direction == 'right'){
                for(let i = 0; i < length; i++){
                    const coordinate = [[value[0]+i,value[1]],this.currentShip.type];
                    this.shipCoordinates.push(coordinate);
                }
            }
            else if(direction == 'left'){
                for(let i = 0; i < length; i++){
                    const coordinate = [[value[0]-i,value[1]],this.currentShip.type];
                    this.shipCoordinates.push(coordinate);
                }
            }
        }
        else{
            return false;
        }
    }

    receiveAttack(value){
        let attack = true;
        //Checking guesses to see if coordinate has been
        //guessed before.
        for(let i = 0; i < this.guesses.length; i++){
            if(value[0] == this.guesses[i][0] && value[1] == this.guesses[i][1]){
                attack = false;
            }
        }
        //Check if valid coordinate.
        if(this.checkValidity(value,1,'up') == false){
            attack = false;
        }
        //Check for a collision.
        if(this.checkCollision(value,1,'up') == false){
            attack = false;
            this.misses.push(value);
            this.guesses.push(value);
        }
        if(attack == true) {
            //Should have an event notification to show
            //either hit or miss.
            for(let i = 0; i < this.shipCoordinates.length; i++){
                if(value[0]== this.shipCoordinates[i][0][0] && value[1] == this.shipCoordinates[i][0][1]){
                    this.ships[this.shipCoordinates[i][1]].currentHits += 1;
                }
            };
            this.guesses.push(value);
        }
    }

    setCurrentShip(value){
        this.currentShip = this.ships[value];
    }

    shipsSunk(){
        let allSunk = true;
        const keys = Object.keys(this.ships);
        for(let i = 0; i < keys.length; i++){
            if(this.ships[keys[i]].sunk == false){
                allSunk = false;
            }
        }
       return allSunk;
    }
}

class Player{
    constructor(playerName){
        this.playerName = playerName;
        this.playerGameboard = new Gameboard(10,playerName);
    };
    /*For now
    just assume that the opponent is the computer. In the
    future it can be modified for two players.***
    */
    placePlayerShip(shipType,coordinate,direction){
        this.playerGameboard.setCurrentShip(shipType);
        this.playerGameboard.placeShip(coordinate,direction);
    };
}

const gameboard = new Gameboard(10,"computer");
//gameboard.setCurrentShip("carrier");
//console.log(gameboard.guesses);
module.exports = gameboard;

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQ0FBaUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDcE9BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDVkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFwYXlhd2hpcDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xufVxuXG4ubWFpbl9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4jbGVmdF9tYWluIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbn1cblxuI2NhcnJpZXIge1xuICAgIGhlaWdodDogNThweDtcbiAgICB3aWR0aDogMzE2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG59IFxuXG4jYmF0dGxlc2hpcCB7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuI2Rlc3Ryb3llciB7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuI3N1Ym1hcmluZSB7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuI3B0Qm9hdCB7XG4gICAgLyogRm9yIGNoZWNraW5nIHRoZSBzaXplcyBvZiB0aGUgYm9hdHMuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUxNnB4O1xuICAgIHRvcDogNDgwcHg7ICovXG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIHdpZHRoOiAxMjRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuI3NoaXBfaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMDhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xufVxuXG5oZWFkZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAzMnB4O1xuICAgIGJvcmRlcjowcHg7XG59XG5cbi5zaGlwX2NlbGwge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbiNnYW1lVGFibGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbiNnYW1lVGFibGUgcHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZ2FtZVRhYmxlIC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5nYW1lQm9hcmR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDY0cHggNjRweCA2NHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbn1cblxuLmJvYXJkUm93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xufVxuXG4ucGxheWVyU3F1YXJlLCAuY29tcHV0ZXJTcXVhcmUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgMTMwLCAyMzUpO1xufVxuXG4ucGxheWVyU3F1YXJlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4vKiAucGxheWVyU3F1YXJlIHtcbiAgICBoZWlnaHQ6IDU4cHg7XG4gICAgd2lkdGg6IDYyLjVweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn0gKi9cblxuLmNvbXB1dGVyU3F1YXJlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMTksIDE5LCAwLjMzKTtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0k7OztpQkFHYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4REFBOEQ7QUFDbEU7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOzs7O0dBSUc7O0FBRUg7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhcGF5YXdoaXA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNsZWZ0X21haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuI2NhcnJpZXIge1xcbiAgICBoZWlnaHQ6IDU4cHg7XFxuICAgIHdpZHRoOiAzMTZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn0gXFxuXFxuI2JhdHRsZXNoaXAge1xcbiAgICBoZWlnaHQ6IDU4cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZGVzdHJveWVyIHtcXG4gICAgaGVpZ2h0OiA1OHB4O1xcbiAgICB3aWR0aDogMTg4cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI3N1Ym1hcmluZSB7XFxuICAgIGhlaWdodDogNThweDtcXG4gICAgd2lkdGg6IDE4OHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNwdEJvYXQge1xcbiAgICAvKiBGb3IgY2hlY2tpbmcgdGhlIHNpemVzIG9mIHRoZSBib2F0cy5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MTZweDtcXG4gICAgdG9wOiA0ODBweDsgKi9cXG4gICAgaGVpZ2h0OiA1OHB4O1xcbiAgICB3aWR0aDogMTI0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI3NoaXBfaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTA4cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMTZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDMycHg7XFxuICAgIGJvcmRlcjowcHg7XFxufVxcblxcbi5zaGlwX2NlbGwge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuI2dhbWVUYWJsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuI2dhbWVUYWJsZSBwe1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVUYWJsZSAuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmdhbWVCb2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwcHggNjRweCA2NHB4IDY0cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuXFxuLmJvYXJkUm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbi5wbGF5ZXJTcXVhcmUsIC5jb21wdXRlclNxdWFyZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDEzMCwgMjM1KTtcXG59XFxuXFxuLnBsYXllclNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi8qIC5wbGF5ZXJTcXVhcmUge1xcbiAgICBoZWlnaHQ6IDU4cHg7XFxuICAgIHdpZHRoOiA2Mi41cHg7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn0gKi9cXG5cXG4uY29tcHV0ZXJTcXVhcmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMTksIDE5LCAwLjMzKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY2xhc3MgU2hpcHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLGhpdE51bWJlcil7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaGl0TnVtYmVyID0gaGl0TnVtYmVyO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyZW50SGl0cyA9IDA7XG4gICAgfVxuXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudEhpdHMgPT0gdGhpcy5oaXROdW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cblxuICAgIGhpdCgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRIaXRzICs9IDE7XG4gICAgfVxufVxuLy9jb25zdCBwbGF5ZXJDYXJyaWVyID0gbmV3IFNoaXAoJ2NhcnJpZXInLCA1KTtcbi8qIEdhbWVib2FyZCB3b3JrcyBmaW5lLiBMb3RzIG9mIHJvb20gZm9yIHJlZmFjdG9yaW5nIGFuZFxuaW1wcm92ZW1lbnQuIFdpbGwgYmUgaW50ZXJlc3RpbmcgdG8gaW50ZWdyYXRlIHdpdGggdGhlIFxuRE9NLiBTaG91bGQgYmUgb25seSBvbmUgcG9pbnQgaW4gdGhlIGZ1bmN0aW9uIHRoYXQgXG5pbnRlcmFjdHMgd2l0aCB0aGUgb3V0c2lkZSB3b3JsZC5cbiovXG5jbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgbmFtZSl7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2hpcENvb3JkaW5hdGVzID0gW107XG4gICAgICAgIHRoaXMubWlzc2VzID0gW107XG4gICAgICAgIHRoaXMuZ3Vlc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLmNhcnJpZXIgPSBuZXcgU2hpcCgnY2FycmllcicsNSk7XG4gICAgICAgIHRoaXMuYmF0dGxlc2hpcCA9IG5ldyBTaGlwKCdiYXR0bGVzaGlwJyw0KTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZXIgPSBuZXcgU2hpcCgnZGVzdHJveWVyJywzKTtcbiAgICAgICAgdGhpcy5zdWJtYXJpbmUgPSBuZXcgU2hpcCgnc3VibWFyaW5lJywzKTtcbiAgICAgICAgdGhpcy5wdEJvYXQgPSBuZXcgU2hpcCgncHRCb2F0JywyKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHtcbiAgICAgICAgICAgICdjYXJyaWVyJzp0aGlzLmNhcnJpZXIsXG4gICAgICAgICAgICAnYmF0dGxlc2hpcCc6dGhpcy5iYXR0bGVzaGlwLFxuICAgICAgICAgICAgJ2Rlc3Ryb3llcic6dGhpcy5kZXN0cm95ZXIsXG4gICAgICAgICAgICAnc3VibWFyaW5lJzp0aGlzLmRlc3Ryb3llcixcbiAgICAgICAgICAgICdwdEJvYXQnOnRoaXMucHRCb2F0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2hlY2tWYWxpZGl0eSh2YWx1ZSxsZW5ndGgsZGlyZWN0aW9uKXtcbiAgICAgICAgLy9DaGVja2luZyB0aGF0IGNvb3JkaW5hdGVzIGFyZSBvbiB0aGUgYm9hcmQuXG4gICAgICAgIGlmKHZhbHVlWzBdID4gdGhpcy5zaXplIHx8IHZhbHVlWzFdID4gdGhpcy5zaXplIHx8IHZhbHVlWzBdIDwgMSB8fCB2YWx1ZVsxXSA8IDEpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vQ2hlY2tpbmcgdGhhdCBzaGlwIGRvZXNuJ3QgZ28gb2ZmIHRoZSBib2FyZC5cbiAgICAgICAgaWYoZGlyZWN0aW9uID09ICd1cCcpe1xuICAgICAgICAgICAgaWYodmFsdWVbMV0gKyBsZW5ndGggLTEgPiB0aGlzLnNpemUpe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ2Rvd24nKXtcbiAgICAgICAgICAgIGlmKHZhbHVlWzFdIC0gbGVuZ3RoICsxIDwgMSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ3JpZ2h0Jyl7XG4gICAgICAgICAgICBpZih2YWx1ZVswXSArIGxlbmd0aCAtMSA+IHRoaXMuc2l6ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PSAnbGVmdCcpe1xuICAgICAgICAgICAgaWYodmFsdWVbMF0gLSBsZW5ndGggKzEgPCAxKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKHZhbHVlLGxlbmd0aCxkaXJlY3Rpb24pe1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PSAndXAnKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuc2hpcENvb3JkaW5hdGVzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWVbMF09PSB0aGlzLnNoaXBDb29yZGluYXRlc1tqXVswXVswXSAmJiB2YWx1ZVsxXStpID09IHRoaXMuc2hpcENvb3JkaW5hdGVzW2pdWzBdWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ2Rvd24nKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuc2hpcENvb3JkaW5hdGVzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWVbMF09PSB0aGlzLnNoaXBDb29yZGluYXRlc1tqXVswXVswXSAmJiB2YWx1ZVsxXS1pID09IHRoaXMuc2hpcENvb3JkaW5hdGVzW2pdWzBdWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ3JpZ2h0Jyl7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLnNoaXBDb29yZGluYXRlcy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlWzBdK2kgPT0gdGhpcy5zaGlwQ29vcmRpbmF0ZXNbal1bMF1bMF0gJiYgdmFsdWVbMV0gPT0gdGhpcy5zaGlwQ29vcmRpbmF0ZXNbal1bMF1bMV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PSAnbGVmdCcpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5zaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZVswXS1pID09IHRoaXMuc2hpcENvb3JkaW5hdGVzW2pdWzBdWzBdICYmIHZhbHVlWzFdID09IHRoaXMuc2hpcENvb3JkaW5hdGVzW2pdWzBdWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAodmFsdWUsZGlyZWN0aW9uKXtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5jdXJyZW50U2hpcC5oaXROdW1iZXI7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tWYWxpZGl0eSh2YWx1ZSxsZW5ndGgsZGlyZWN0aW9uKSA9PSB0cnVlICYmIHRoaXMuY2hlY2tDb2xsaXNpb24odmFsdWUsbGVuZ3RoLGRpcmVjdGlvbikgPT0gZmFsc2Upe1xuICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09ICd1cCcpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBbW3ZhbHVlWzBdLHZhbHVlWzFdK2ldLHRoaXMuY3VycmVudFNoaXAudHlwZV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ2Rvd24nKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW1t2YWx1ZVswXSx2YWx1ZVsxXS1pXSx0aGlzLmN1cnJlbnRTaGlwLnR5cGVdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09ICdyaWdodCcpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBbW3ZhbHVlWzBdK2ksdmFsdWVbMV1dLHRoaXMuY3VycmVudFNoaXAudHlwZV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ2xlZnQnKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW1t2YWx1ZVswXS1pLHZhbHVlWzFdXSx0aGlzLmN1cnJlbnRTaGlwLnR5cGVdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh2YWx1ZSl7XG4gICAgICAgIGxldCBhdHRhY2sgPSB0cnVlO1xuICAgICAgICAvL0NoZWNraW5nIGd1ZXNzZXMgdG8gc2VlIGlmIGNvb3JkaW5hdGUgaGFzIGJlZW5cbiAgICAgICAgLy9ndWVzc2VkIGJlZm9yZS5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ3Vlc3Nlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZih2YWx1ZVswXSA9PSB0aGlzLmd1ZXNzZXNbaV1bMF0gJiYgdmFsdWVbMV0gPT0gdGhpcy5ndWVzc2VzW2ldWzFdKXtcbiAgICAgICAgICAgICAgICBhdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL0NoZWNrIGlmIHZhbGlkIGNvb3JkaW5hdGUuXG4gICAgICAgIGlmKHRoaXMuY2hlY2tWYWxpZGl0eSh2YWx1ZSwxLCd1cCcpID09IGZhbHNlKXtcbiAgICAgICAgICAgIGF0dGFjayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vQ2hlY2sgZm9yIGEgY29sbGlzaW9uLlxuICAgICAgICBpZih0aGlzLmNoZWNrQ29sbGlzaW9uKHZhbHVlLDEsJ3VwJykgPT0gZmFsc2Upe1xuICAgICAgICAgICAgYXR0YWNrID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1pc3Nlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZ3Vlc3Nlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZihhdHRhY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy9TaG91bGQgaGF2ZSBhbiBldmVudCBub3RpZmljYXRpb24gdG8gc2hvd1xuICAgICAgICAgICAgLy9laXRoZXIgaGl0IG9yIG1pc3MuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlWzBdPT0gdGhpcy5zaGlwQ29vcmRpbmF0ZXNbaV1bMF1bMF0gJiYgdmFsdWVbMV0gPT0gdGhpcy5zaGlwQ29vcmRpbmF0ZXNbaV1bMF1bMV0pe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcENvb3JkaW5hdGVzW2ldWzFdXS5jdXJyZW50SGl0cyArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmd1ZXNzZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDdXJyZW50U2hpcCh2YWx1ZSl7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzW3ZhbHVlXTtcbiAgICB9XG5cbiAgICBzaGlwc1N1bmsoKXtcbiAgICAgICAgbGV0IGFsbFN1bmsgPSB0cnVlO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zaGlwcyk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcHNba2V5c1tpXV0uc3VuayA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgYWxsU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgcmV0dXJuIGFsbFN1bms7XG4gICAgfVxufVxuXG5jbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IocGxheWVyTmFtZSl7XG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IHBsYXllck5hbWU7XG4gICAgICAgIHRoaXMucGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgxMCxwbGF5ZXJOYW1lKTtcbiAgICB9O1xuICAgIC8qRm9yIG5vd1xuICAgIGp1c3QgYXNzdW1lIHRoYXQgdGhlIG9wcG9uZW50IGlzIHRoZSBjb21wdXRlci4gSW4gdGhlXG4gICAgZnV0dXJlIGl0IGNhbiBiZSBtb2RpZmllZCBmb3IgdHdvIHBsYXllcnMuKioqXG4gICAgKi9cbiAgICBwbGFjZVBsYXllclNoaXAoc2hpcFR5cGUsY29vcmRpbmF0ZSxkaXJlY3Rpb24pe1xuICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZC5zZXRDdXJyZW50U2hpcChzaGlwVHlwZSk7XG4gICAgICAgIHRoaXMucGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcChjb29yZGluYXRlLGRpcmVjdGlvbik7XG4gICAgfTtcbn1cblxuY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgxMCxcImNvbXB1dGVyXCIpO1xuLy9nYW1lYm9hcmQuc2V0Q3VycmVudFNoaXAoXCJjYXJyaWVyXCIpO1xuLy9jb25zb2xlLmxvZyhnYW1lYm9hcmQuZ3Vlc3Nlcyk7XG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=