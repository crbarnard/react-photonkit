(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactPhotonKit"] = factory(require("react"));
	else
		root["ReactPhotonKit"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleMaps = {
	CLASSES: {
		button: 'btn',
		icon: 'icon',
		toolbar: 'toolbar',
		pane: 'pane',
		'nav-group': 'nav-group',
		'nav-group-item': 'nav-group-item',
		'tab-group': 'tab-group',
		'tab-item': 'tab-item',
		'list-group': 'list-group',
		'list-group-item': 'list-group-item'
	},
	STYLES: ['default', 'primary', 'positive', 'negative', 'warning'],
	SIZES: {
		large: 'large',
		mini: 'mini',
		sm: 'sm',
		'one-fourth': 'one-fourth',
		'one-third': 'one-third'
	},
	TYPES: {
		header: 'header',
		footer: 'footer'
	}
};

var Component = exports.Component = function (_React$Component) {
	_inherits(Component, _React$Component);

	function Component() {
		_classCallCheck(this, Component);

		return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
	}

	_createClass(Component, [{
		key: 'getPtClassSet',
		value: function getPtClassSet() {
			var classes = {};
			var ptClass = this.props.ptClass && styleMaps.CLASSES[this.props.ptClass];

			if (ptClass) {
				classes[ptClass] = true;
				var prefix = ptClass + '-';
				var ptSize = this.props.ptSize && styleMaps.SIZES[this.props.ptSize];

				if (ptSize) {
					classes[prefix + ptSize] = true;
				}

				if (this.props.ptStyle) {
					if (styleMaps.STYLES.indexOf(this.props.ptStyle) >= 0) {
						classes[prefix + this.props.ptStyle] = true;
					} else {
						classes[this.props.ptStyle] = true;
					}
				}

				var ptType = this.props.ptType && styleMaps.TYPES[this.props.ptType];
				if (ptType) {
					classes[prefix + ptType] = true;
				}

				return classes;
			}
		}
	}]);

	return Component;
}(_react2.default.Component);

Component.propTypes = {
	ptClass: _react2.default.PropTypes.string,
	ptStyle: _react2.default.PropTypes.string,
	ptSize: _react2.default.PropTypes.string,
	ptType: _react2.default.PropTypes.string
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Photon$Component) {
	_inherits(Icon, _Photon$Component);

	function Icon() {
		_classCallCheck(this, Icon);

		return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	}

	_createClass(Icon, [{
		key: 'render',
		value: function render() {
			var props = Object.assign({}, this.props);
			var classes = this.getPtClassSet();
			classes['icon-' + props.glyph] = true;
			classes['icon-text'] = props.withText;
			classes['icon-close-tab'] = props.tab;
			var className = (0, _classnames2.default)(props.className, classes);

			delete props.ptClass;
			delete props.glyph;
			delete props.withText;
			delete props.tab;

			return _react2.default.createElement('span', _extends({}, props, { className: className }));
		}
	}]);

	return Icon;
}(Photon.Component);

exports.default = Icon;


Icon.defaultProps = {
	ptClass: 'icon',
	withText: false,
	tab: false
};

Icon.propTypes = {
	glyph: _react2.default.PropTypes.string.isRequired,
	withText: _react2.default.PropTypes.bool,
	tab: _react2.default.PropTypes.bool
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDrag", function() { return MultiDragPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swap", function() { return SwapPlugin; });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ __webpack_exports__["default"] = (Sortable);



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2614e058b2dcb9d6e2e964730d795540.eot";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionBar = function (_React$Component) {
	_inherits(ActionBar, _React$Component);

	function ActionBar() {
		_classCallCheck(this, ActionBar);

		return _possibleConstructorReturn(this, (ActionBar.__proto__ || Object.getPrototypeOf(ActionBar)).apply(this, arguments));
	}

	_createClass(ActionBar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "toolbar-actions" },
				this.props.children
			);
		}
	}]);

	return ActionBar;
}(_react2.default.Component);

exports.default = ActionBar;


ActionBar.propTypes = {
	children: _react2.default.PropTypes.node
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = function (_React$Component) {
	_inherits(ButtonGroup, _React$Component);

	function ButtonGroup() {
		_classCallCheck(this, ButtonGroup);

		return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
	}

	_createClass(ButtonGroup, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "btn-group" },
				this.props.children
			);
		}
	}]);

	return ButtonGroup;
}(_react2.default.Component);

exports.default = ButtonGroup;


ButtonGroup.propTypes = {
	children: _react2.default.PropTypes.node
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Photon$Component) {
	_inherits(Button, _Photon$Component);

	function Button(props) {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

		_this._node = _this._node.bind(_this);
		return _this;
	}

	_createClass(Button, [{
		key: '_node',
		value: function _node(n) {
			this.node = n;
		}
	}, {
		key: 'getIconComponent',
		value: function getIconComponent() {
			var withText = this.props.text && this.props.text.length > 0;
			if (this.props.glyph) {
				return _react2.default.createElement(_icon2.default, { glyph: this.props.glyph, withText: withText });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = Object.assign({}, this.props);
			var icon = this.getIconComponent();
			var classes = this.getPtClassSet();
			classes.active = this.props.active;
			classes['btn-form'] = this.props.form;
			classes['pull-right'] = this.props.pullRight;
			var className = (0, _classnames2.default)(this.props.className, classes);

			delete props.ptClass;
			delete props.ptStyle;
			delete props.ptSize;
			delete props.btSize;
			delete props.glyph;
			delete props.withText;
			delete props.active;
			delete props.pullRight;
			delete props.text;

			return _react2.default.createElement(
				'button',
				_extends({}, props, { className: className, onClick: this.props.onClick, ref: this._node }),
				icon,
				this.props.text
			);
		}
	}]);

	return Button;
}(Photon.Component);

exports.default = Button;


Button.defaultProps = {
	ptClass: 'button',
	ptStyle: 'default',
	active: false,
	pullRight: false
};

Button.propTypes = {
	pullRight: _react2.default.PropTypes.bool,
	active: _react2.default.PropTypes.bool,
	form: _react2.default.PropTypes.bool,
	onClick: _react2.default.PropTypes.func
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_Photon$Component) {
	_inherits(CheckBox, _Photon$Component);

	function CheckBox(props) {
		_classCallCheck(this, CheckBox);

		var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

		_this.state = {
			checked: props.checked
		};

		_this._node = _this._node.bind(_this);
		return _this;
	}

	_createClass(CheckBox, [{
		key: '_node',
		value: function _node(n) {
			this.node = n;
		}
	}, {
		key: 'isChecked',
		value: function isChecked() {
			return this.node.querySelector('input').checked;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'checkbox', ref: this._node },
				_react2.default.createElement(
					'label',
					null,
					_react2.default.createElement('input', _extends({}, this.props, { type: 'checkbox' })),
					this.props.label
				)
			);
		}
	}]);

	return CheckBox;
}(Photon.Component);

exports.default = CheckBox;


CheckBox.propTypes = {
	label: _react2.default.PropTypes.string,
	checked: _react2.default.PropTypes.bool
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$Component) {
	_inherits(Content, _React$Component);

	function Content() {
		_classCallCheck(this, Content);

		return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
	}

	_createClass(Content, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "window-content" },
				this.props.children
			);
		}
	}]);

	return Content;
}(_react2.default.Component);

exports.default = Content;


Content.propTypes = {
	children: _react2.default.PropTypes.node
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Photon$Component) {
	_inherits(Input, _Photon$Component);

	function Input(props) {
		_classCallCheck(this, Input);

		var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

		_this._node = _this._node.bind(_this);
		return _this;
	}

	_createClass(Input, [{
		key: '_node',
		value: function _node(n) {
			this.node = n;
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.node.querySelector('input').value;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'form-group', ref: this._node },
				_react2.default.createElement(
					'label',
					null,
					this.props.label
				),
				_react2.default.createElement('input', _extends({}, this.props, { className: 'form-control', placeholder: this.props.placeholder, type: this.props.type }))
			);
		}
	}]);

	return Input;
}(Photon.Component);

exports.default = Input;


Input.defaultProps = {
	type: 'text'
};

Input.propTypes = {
	label: _react2.default.PropTypes.string
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

var _sortablejs = __webpack_require__(4);

var _sortablejs2 = _interopRequireDefault(_sortablejs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGroup = function (_Photon$Component) {
	_inherits(ListGroup, _Photon$Component);

	function ListGroup(props) {
		_classCallCheck(this, ListGroup);

		var _this = _possibleConstructorReturn(this, (ListGroup.__proto__ || Object.getPrototypeOf(ListGroup)).call(this, props));

		_this._node = _this._node.bind(_this);
		return _this;
	}

	_createClass(ListGroup, [{
		key: '_node',
		value: function _node(n) {
			if (n) {
				this.node = n;
				this.sortable = _sortablejs2.default.create(n, {
					handle: '.list-group',
					disabled: !this.props.draggable
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.sortable) {
				this.sortable.destory();
				this.sortable = null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = this.getPtClassSet();
			var className = (0, _classnames2.default)(this.props.className, classes);

			return _react2.default.createElement(
				'ul',
				{ className: className, ref: this._node },
				this.props.children
			);
		}
	}]);

	return ListGroup;
}(Photon.Component);

exports.default = ListGroup;


ListGroup.defaultProps = {
	ptClass: 'list-group',
	draggable: false
};

ListGroup.propTypes = {
	draggable: _react2.default.PropTypes.bool
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Photon$Component) {
	_inherits(ListItem, _Photon$Component);

	function ListItem() {
		_classCallCheck(this, ListItem);

		return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
	}

	_createClass(ListItem, [{
		key: 'render',
		value: function render() {
			var classes = this.getPtClassSet();
			classes.active = this.props.active;
			var className = (0, _classnames2.default)(this.props.className, classes);
			var img = void 0;

			if (this.props.image) {
				img = _react2.default.createElement('img', { className: 'img-circle media-object pull-left', src: this.props.image, width: '32', height: '32' });
			}

			return _react2.default.createElement(
				'li',
				{ className: className },
				img,
				_react2.default.createElement(
					'div',
					{ className: 'media-body' },
					_react2.default.createElement(
						'strong',
						null,
						this.props.title
					),
					_react2.default.createElement(
						'p',
						null,
						this.props.subtitle
					)
				)
			);
		}
	}]);

	return ListItem;
}(Photon.Component);

exports.default = ListItem;


ListItem.propTypes = {
	active: _react2.default.PropTypes.bool,
	image: _react2.default.PropTypes.string,
	title: _react2.default.PropTypes.string.isRequired,
	subtitle: _react2.default.PropTypes.string
};

ListItem.defaultProps = {
	ptClass: 'list-group-item',
	active: false
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavGroupItem = function (_Photon$Component) {
	_inherits(NavGroupItem, _Photon$Component);

	function NavGroupItem() {
		_classCallCheck(this, NavGroupItem);

		return _possibleConstructorReturn(this, (NavGroupItem.__proto__ || Object.getPrototypeOf(NavGroupItem)).apply(this, arguments));
	}

	_createClass(NavGroupItem, [{
		key: 'getIconComponent',
		value: function getIconComponent() {
			if (this.props.glyph) {
				return _react2.default.createElement(_icon2.default, { glyph: this.props.glyph, withText: true });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = Object.assign({}, this.props);
			var classes = this.getPtClassSet();
			classes.active = props.active;
			var className = (0, _classnames2.default)(props.className, classes);
			var icon = this.getIconComponent();

			delete props.eventKey;
			delete props.ptClass;
			delete props.glyph;
			delete props.withText;
			delete props.active;
			delete props.text;

			return _react2.default.createElement(
				'a',
				_extends({}, props, { className: className }),
				icon,
				this.props.text
			);
		}
	}]);

	return NavGroupItem;
}(Photon.Component);

exports.default = NavGroupItem;


NavGroupItem.defaultProps = {
	ptClass: 'nav-group-item',
	active: false
};

NavGroupItem.propTypes = {
	active: _react2.default.PropTypes.bool,
	text: _react2.default.PropTypes.string.isRequired,
	glyph: _react2.default.PropTypes.string
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

var _sortablejs = __webpack_require__(4);

var _sortablejs2 = _interopRequireDefault(_sortablejs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavGroup = function (_Photon$Component) {
	_inherits(NavGroup, _Photon$Component);

	function NavGroup(props) {
		_classCallCheck(this, NavGroup);

		var _this = _possibleConstructorReturn(this, (NavGroup.__proto__ || Object.getPrototypeOf(NavGroup)).call(this, props));

		_this.state = {
			activeKey: props.activeKey,
			children: props.children
		};

		_this._node = _this._node.bind(_this);
		return _this;
	}

	_createClass(NavGroup, [{
		key: '_node',
		value: function _node(n) {
			if (n) {
				this.node = n;
				this.sortable = _sortablejs2.default.create(n, {
					handle: '.nav-group',
					disabled: !this.props.draggable
				});
			}
		}
	}, {
		key: 'renderNav',
		value: function renderNav(child, index) {
			var _this2 = this;

			var active = this.state.activeKey === child.props.eventKey;
			return _react2.default.cloneElement(child, {
				active: active,
				key: 'nav-group-item-' + index,
				onClick: function onClick() {
					_this2.setState({
						activeKey: child.props.eventKey
					});

					if (_this2.props.onSelect) {
						return _this2.props.onSelect(child.props.eventKey);
					}
				}
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.sortable) {
				this.sortable.destory();
				this.sortable = null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var classes = this.getPtClassSet();
			var className = (0, _classnames2.default)(this.props.className, classes);
			var childNavs = void 0;

			if (this.state.children) {
				childNavs = this.state.children.map(function (child, index) {
					return _this3.renderNav(child, index);
				});
			}
			return _react2.default.createElement(
				'nav',
				{ className: className, ref: this._node },
				childNavs
			);
		}
	}]);

	return NavGroup;
}(Photon.Component);

exports.default = NavGroup;


NavGroup.defaultProps = {
	activeKey: '',
	ptClass: 'nav-group',
	draggable: false
};

NavGroup.propTypes = {
	activeKey: _react2.default.PropTypes.any,
	onSelect: _react2.default.PropTypes.func,
	draggable: _react2.default.PropTypes.bool
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavTitle = function (_React$Component) {
	_inherits(NavTitle, _React$Component);

	function NavTitle() {
		_classCallCheck(this, NavTitle);

		return _possibleConstructorReturn(this, (NavTitle.__proto__ || Object.getPrototypeOf(NavTitle)).apply(this, arguments));
	}

	_createClass(NavTitle, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"h5",
				{ className: "nav-group-title" },
				this.props.children
			);
		}
	}]);

	return NavTitle;
}(_react2.default.Component);

exports.default = NavTitle;


NavTitle.propTypes = {
	children: _react2.default.PropTypes.node
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Options = function (_React$Component) {
	_inherits(Options, _React$Component);

	function Options() {
		_classCallCheck(this, Options);

		var _this = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this));

		_this.refSelectIndex = _this.refSelectIndex.bind(_this);
		return _this;
	}

	_createClass(Options, [{
		key: "refSelectIndex",
		value: function refSelectIndex(sel) {
			this.select = sel;
		}
	}, {
		key: "getSelectedIndex",
		value: function getSelectedIndex() {
			if (this.select) {
				return this.select.selectedIndex;
			}
		}
	}, {
		key: "render",
		value: function render() {
			if (this.props.items.length > 0) {
				var items = this.props.items.map(function (item, i) {
					var key = "option-" + i;
					return _react2.default.createElement(
						"option",
						{ key: key },
						item
					);
				});

				return _react2.default.createElement(
					"select",
					{ className: "form-control", ref: this.refSelectIndex },
					items
				);
			}

			return _react2.default.createElement("span", null);
		}
	}]);

	return Options;
}(_react2.default.Component);

exports.default = Options;


Options.defaultProps = {
	items: []
};

Options.propTypes = {
	items: _react2.default.PropTypes.array
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaneGroup = function (_React$Component) {
	_inherits(PaneGroup, _React$Component);

	function PaneGroup() {
		_classCallCheck(this, PaneGroup);

		return _possibleConstructorReturn(this, (PaneGroup.__proto__ || Object.getPrototypeOf(PaneGroup)).apply(this, arguments));
	}

	_createClass(PaneGroup, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "pane-group" },
				this.props.children
			);
		}
	}]);

	return PaneGroup;
}(_react2.default.Component);

exports.default = PaneGroup;


PaneGroup.propTypes = {
	children: _react2.default.PropTypes.node
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pane = function (_Photon$Component) {
	_inherits(Pane, _Photon$Component);

	function Pane() {
		_classCallCheck(this, Pane);

		return _possibleConstructorReturn(this, (Pane.__proto__ || Object.getPrototypeOf(Pane)).apply(this, arguments));
	}

	_createClass(Pane, [{
		key: 'render',
		value: function render() {
			var classes = this.getPtClassSet();
			classes.sidebar = this.props.sidebar;
			var className = (0, _classnames2.default)(this.props.className, classes);

			return _react2.default.createElement(
				'div',
				{ className: className },
				this.props.children
			);
		}
	}]);

	return Pane;
}(Photon.Component);

exports.default = Pane;


Pane.propTypes = {
	sidebar: _react2.default.PropTypes.bool
};

Pane.defaultProps = {
	ptClass: 'pane',
	sidebar: false
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = function (_React$Component) {
	_inherits(RadioGroup, _React$Component);

	function RadioGroup(props) {
		_classCallCheck(this, RadioGroup);

		var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

		_this.state = {
			checkedIndex: 0
		};
		return _this;
	}

	_createClass(RadioGroup, [{
		key: 'onChange',
		value: function onChange(index) {
			return this.setState({
				checkedIndex: index
			});
		}
	}, {
		key: 'getCheckedIndex',
		value: function getCheckedIndex() {
			return this.state.checkedIndex;
		}
	}, {
		key: 'getChildren',
		value: function getChildren() {
			var _this2 = this;

			var children = [];
			var index = 0;

			this.props.children.forEach(function (child, i) {
				var extra = {
					key: i
				};
				var checked = _this2.state.checkedIndex === index;
				extra.name = _this2.props.name;
				extra.checked = checked;
				extra.onChange = _this2.onChange.bind(_this2, index++);
				children.push(_react2.default.cloneElement(child, extra));
			});

			this.children = children;
			return this.children;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.getChildren()
			);
		}
	}]);

	return RadioGroup;
}(_react2.default.Component);

exports.default = RadioGroup;


RadioGroup.propTypes = {
	children: _react2.default.PropTypes.node,
	name: _react2.default.PropTypes.string.isRequired
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_Photon$Component) {
	_inherits(Radio, _Photon$Component);

	function Radio() {
		_classCallCheck(this, Radio);

		return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
	}

	_createClass(Radio, [{
		key: 'handleChangeRadio',
		value: function handleChangeRadio(event) {
			if (this.props.onChange) {
				this.props.onChange(event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'radio' },
				_react2.default.createElement(
					'label',
					null,
					_react2.default.createElement('input', _extends({}, this.props, { type: 'radio', onChange: this.handleChangeRadio })),
					this.props.label
				)
			);
		}
	}]);

	return Radio;
}(Photon.Component);

exports.default = Radio;


Radio.propTypes = {
	label: _react2.default.PropTypes.string
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

var _sortablejs = __webpack_require__(4);

var _sortablejs2 = _interopRequireDefault(_sortablejs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabGroup = function (_Photon$Component) {
	_inherits(TabGroup, _Photon$Component);

	function TabGroup(props) {
		_classCallCheck(this, TabGroup);

		var _this = _possibleConstructorReturn(this, (TabGroup.__proto__ || Object.getPrototypeOf(TabGroup)).call(this, props));

		_this.state = {
			activeKey: props.activeKey,
			children: props.children
		};

		// ref function to avoid creating multiple instancein the path of render
		_this._node = _this._node.bind(_this);
		return _this;
	}

	_createClass(TabGroup, [{
		key: '_node',
		value: function _node(n) {
			if (n) {
				this.node = n;
				this.sortable = _sortablejs2.default.create(this.node.querySelector('.tab-group'), {
					handle: '.tab-group',
					disabled: !this.props.draggable
				});
			}
		}
	}, {
		key: 'renderTab',
		value: function renderTab(child, index) {
			var _this2 = this;

			var active = this.state.activeKey === child.props.eventKey;
			return _react2.default.cloneElement(child, {
				active: active,
				key: 'tab-item-' + index,
				onClick: function onClick() {
					_this2.setState({
						activeKey: child.props.eventKey
					});

					if (_this2.props.onSelect) {
						_this2.props.onSelect(child.props.eventKey);
					}
				}
			});
		}
	}, {
		key: 'renderPane',
		value: function renderPane(child) {
			var active = this.state.activeKey === child.props.eventKey;
			if (active) {
				return child.props.children;
			}

			return null;
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.sortable) {
				this.sortable.destory();
				this.sortable = null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var classes = this.getPtClassSet();
			var className = (0, _classnames2.default)(this.props.className, classes);

			var childTabs = void 0;
			var childPane = void 0;

			if (this.state.children) {
				childTabs = this.state.children.map(function (child, index) {
					return _this3.renderTab(child, index);
				});

				childPane = this.state.children.map(function (child, index) {
					return _this3.renderPane(child, index);
				});
			}

			return _react2.default.createElement(
				'div',
				{ ref: this._node },
				_react2.default.createElement(
					'div',
					{ className: className },
					childTabs
				),
				_react2.default.createElement(
					'div',
					null,
					childPane
				)
			);
		}
	}]);

	return TabGroup;
}(Photon.Component);

exports.default = TabGroup;


TabGroup.defaultProps = {
	activeKey: '',
	ptClass: 'tab-group',
	draggable: false
};

TabGroup.propTypes = {
	activeKey: _react2.default.PropTypes.any,
	onSelect: _react2.default.PropTypes.func,
	draggable: _react2.default.PropTypes.bool
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabItem = function (_Photon$Component) {
	_inherits(TabItem, _Photon$Component);

	function TabItem() {
		_classCallCheck(this, TabItem);

		return _possibleConstructorReturn(this, (TabItem.__proto__ || Object.getPrototypeOf(TabItem)).apply(this, arguments));
	}

	_createClass(TabItem, [{
		key: 'getIconComponent',
		value: function getIconComponent() {
			if (this.props.glyph) {
				return _react2.default.createElement(_icon2.default, { glyph: this.props.glyph, withText: true });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = Object.assign({}, this.props);
			var classes = this.getPtClassSet();
			classes.active = props.active;
			var className = (0, _classnames2.default)(props.className, classes);
			var icon = this.getIconComponent();

			delete props.ptClass;
			delete props.active;
			delete props.eventKey;

			return _react2.default.createElement(
				'a',
				_extends({}, props, { className: className }),
				icon,
				this.props.title
			);
		}
	}]);

	return TabItem;
}(Photon.Component);

exports.default = TabItem;


TabItem.defaultProps = {
	ptClass: 'tab-item',
	active: false
};

TabItem.propTypes = {
	active: _react2.default.PropTypes.bool,
	title: _react2.default.PropTypes.string.isRequired,
	glyph: _react2.default.PropTypes.string
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
	_inherits(Table, _React$Component);

	function Table(props) {
		_classCallCheck(this, Table);

		var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

		_this._node = _this._node.bind(_this);
		return _this;
	}

	_createClass(Table, [{
		key: "_node",
		value: function _node(n) {
			this.node = n;
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"table",
				{ className: "table-striped", ref: this._node },
				this.props.children
			);
		}
	}]);

	return Table;
}(_react2.default.Component);

exports.default = Table;


Table.propTypes = {
	children: _react2.default.PropTypes.node
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableArea = function (_React$Component) {
	_inherits(TableArea, _React$Component);

	function TableArea(props) {
		_classCallCheck(this, TableArea);

		var _this = _possibleConstructorReturn(this, (TableArea.__proto__ || Object.getPrototypeOf(TableArea)).call(this, props));

		_this.refTextArea = _this.refTextArea.bind(_this);
		return _this;
	}

	_createClass(TableArea, [{
		key: "getValue",
		value: function getValue() {
			return this.textArea.value;
		}
	}, {
		key: "refTextArea",
		value: function refTextArea(ta) {
			this.textArea = ta;
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "form-group" },
				_react2.default.createElement(
					"label",
					null,
					this.props.label
				),
				_react2.default.createElement(
					"textarea",
					_extends({}, this.props, { className: "form-control", placeholder: this.props.placeholder, ref: this.refTextArea }),
					this.props.children
				)
			);
		}
	}]);

	return TableArea;
}(_react2.default.Component);

exports.default = TableArea;


TableArea.propTypes = {
	children: _react2.default.PropTypes.node,
	placeholder: _react2.default.PropTypes.string,
	label: _react2.default.PropTypes.string
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _photon = __webpack_require__(1);

var Photon = _interopRequireWildcard(_photon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_Photon$Component) {
	_inherits(Toolbar, _Photon$Component);

	function Toolbar(props) {
		_classCallCheck(this, Toolbar);

		var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

		_this._node = _this._node.bind(_this);
		return _this;
	}

	_createClass(Toolbar, [{
		key: '_node',
		value: function _node(n) {
			this.node = n;
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = this.getPtClassSet();
			var className = (0, _classnames2.default)(this.props.className, classes);
			var title = void 0;

			if (this.props.title) {
				title = _react2.default.createElement(
					'h1',
					{ className: 'title' },
					this.props.title
				);
			}

			if (this.props.ptType === 'footer') {
				return _react2.default.createElement(
					'footer',
					{ className: className, ref: this._node },
					title,
					this.props.children
				);
			}

			return _react2.default.createElement(
				'header',
				{ className: className, ref: this._node },
				title,
				this.props.children
			);
		}
	}]);

	return Toolbar;
}(Photon.Component);

exports.default = Toolbar;


Toolbar.defaultProps = {
	ptClass: 'toolbar',
	ptType: 'header'
};

Toolbar.propTypes = {
	title: _react2.default.PropTypes.string
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Window = function (_React$Component) {
	_inherits(Window, _React$Component);

	function Window() {
		_classCallCheck(this, Window);

		return _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).apply(this, arguments));
	}

	_createClass(Window, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "window" },
				this.props.children
			);
		}
	}]);

	return Window;
}(_react2.default.Component);

exports.default = Window;


Window.propTypes = {
	children: _react2.default.PropTypes.node
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(33)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./photon.min.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./photon.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Window = exports.Toolbar = exports.TextArea = exports.Table = exports.TabItem = exports.TabGroup = exports.RadioGroup = exports.Radio = exports.PaneGroup = exports.Pane = exports.Options = exports.NavTitle = exports.NavGroupItem = exports.NavGroup = exports.ListItem = exports.ListGroup = exports.Input = exports.Icon = exports.Content = exports.CheckBox = exports.ButtonGroup = exports.Button = exports.Actionbar = exports.PhotonStyle = undefined;

var _photonMin = __webpack_require__(28);

var _photonMin2 = _interopRequireDefault(_photonMin);

var _actionbar = __webpack_require__(6);

var _actionbar2 = _interopRequireDefault(_actionbar);

var _button = __webpack_require__(8);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(7);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _checkbox = __webpack_require__(9);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _content = __webpack_require__(10);

var _content2 = _interopRequireDefault(_content);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(11);

var _input2 = _interopRequireDefault(_input);

var _listGroup = __webpack_require__(12);

var _listGroup2 = _interopRequireDefault(_listGroup);

var _listItem = __webpack_require__(13);

var _listItem2 = _interopRequireDefault(_listItem);

var _navGroup = __webpack_require__(15);

var _navGroup2 = _interopRequireDefault(_navGroup);

var _navGroupItem = __webpack_require__(14);

var _navGroupItem2 = _interopRequireDefault(_navGroupItem);

var _navTitle = __webpack_require__(16);

var _navTitle2 = _interopRequireDefault(_navTitle);

var _options = __webpack_require__(17);

var _options2 = _interopRequireDefault(_options);

var _pane = __webpack_require__(19);

var _pane2 = _interopRequireDefault(_pane);

var _paneGroup = __webpack_require__(18);

var _paneGroup2 = _interopRequireDefault(_paneGroup);

var _radio = __webpack_require__(21);

var _radio2 = _interopRequireDefault(_radio);

var _radioGroup = __webpack_require__(20);

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _tabGroup = __webpack_require__(22);

var _tabGroup2 = _interopRequireDefault(_tabGroup);

var _tabItem = __webpack_require__(23);

var _tabItem2 = _interopRequireDefault(_tabItem);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _textarea = __webpack_require__(25);

var _textarea2 = _interopRequireDefault(_textarea);

var _toolbar = __webpack_require__(26);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _window = __webpack_require__(27);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PhotonStyle = _photonMin2.default;
exports.Actionbar = _actionbar2.default;
exports.Button = _button2.default;
exports.ButtonGroup = _buttonGroup2.default;
exports.CheckBox = _checkbox2.default;
exports.Content = _content2.default;
exports.Icon = _icon2.default;
exports.Input = _input2.default;
exports.ListGroup = _listGroup2.default;
exports.ListItem = _listItem2.default;
exports.NavGroup = _navGroup2.default;
exports.NavGroupItem = _navGroupItem2.default;
exports.NavTitle = _navTitle2.default;
exports.Options = _options2.default;
exports.Pane = _pane2.default;
exports.PaneGroup = _paneGroup2.default;
exports.Radio = _radio2.default;
exports.RadioGroup = _radioGroup2.default;
exports.TabGroup = _tabGroup2.default;
exports.TabItem = _tabItem2.default;
exports.Table = _table2.default;
exports.TextArea = _textarea2.default;
exports.Toolbar = _toolbar2.default;
exports.Window = _window2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";/*!\n * =====================================================\n * Photon v0.1.2\n * Copyright 2015 Connor Sears\n * Licensed under MIT (https://github.com/connors/proton/blob/master/LICENSE)\n *\n * v0.1.2 designed by @connors.\n * =====================================================\n */audio,canvas,progress,sub,sup,video{vertical-align:baseline}body,html{height:100%}hr,html,label{overflow:hidden}.clearfix:after,.toolbar-actions:after,.toolbar:after{clear:both}*,img{-webkit-user-drag:text}.list-group *,.nav-group-item,h1,h2,h3,h4,h5,h6,label,td,th{white-space:nowrap;text-overflow:ellipsis}audio:not([controls]){display:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:36px}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sup{top:-.5em}.pane-group,.window{top:0;left:0;right:0}sub{bottom:-.25em}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}*{cursor:default;-webkit-user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box}html{width:100%}body{padding:0;margin:0;font-family:system,-apple-system,\".SFNSDisplay-Regular\",\"Helvetica Neue\",Helvetica,\"Segoe UI\",sans-serif;font-size:13px;line-height:1.6;color:#333;background-color:transparent}.btn-dropdown:after,.icon:before{font-family:photon-entypo}hr{margin:15px 0;background:0 0;border:0;border-bottom:1px solid #ddd}h1,h2,h3,h4,h5,h6{margin-top:20px;margin-bottom:10px;font-weight:500;overflow:hidden}.btn .icon,.toolbar-header .title{margin-top:1px}h2{font-size:30px}h3{font-size:24px}h4{font-size:18px}h5{font-size:14px}.btn,h6{font-size:12px}.window{position:absolute;bottom:0;display:flex;flex-direction:column;background-color:#fff}.window-content{position:relative;overflow-y:auto;display:flex;flex:1}.selectable-text{cursor:text;-webkit-user-select:text}.btn,.title{cursor:default}.text-center{text-align:center}.text-right{text-align:right}.text-left{text-align:left}.btn,.title{text-align:center}.pull-left{float:left}.pull-right{float:right}.padded{padding:10px}.padded-less{padding:5px}.padded-more{padding:20px}.padded-vertically{padding-top:10px;padding-bottom:10px}.padded-vertically-less{padding-top:5px;padding-bottom:5px}.padded-vertically-more{padding-top:20px;padding-bottom:20px}.padded-horizontally{padding-right:10px;padding-left:10px}.padded-horizontally-less{padding-right:5px;padding-left:5px}.padded-horizontally-more{padding-right:20px;padding-left:20px}.padded-top{padding-top:10px}.padded-top-less{padding-top:5px}.padded-top-more{padding-top:20px}.padded-bottom{padding-bottom:10px}.padded-bottom-less{padding-bottom:5px}.padded-bottom-more{padding-bottom:20px}.sidebar{background-color:#f5f5f4}.draggable{-webkit-app-region:drag}.btn,.btn-group{vertical-align:middle;-webkit-app-region:no-drag}.clearfix:after,.clearfix:before{display:table;content:\" \"}.btn{display:inline-block;padding:3px 8px;margin-bottom:0;line-height:1.4;white-space:nowrap;background-image:none;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.06)}.btn:focus{outline:0;box-shadow:none}.btn-mini{padding:2px 6px}.btn-large{padding:6px 12px}.btn-form{padding-right:20px;padding-left:20px}.btn-default{color:#333;background-color:#fcfcfc;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fcfcfc),color-stop(100%,#f1f1f1));background-image:-webkit-linear-gradient(top,#fcfcfc 0,#f1f1f1 100%);background-image:linear-gradient(to bottom,#fcfcfc 0,#f1f1f1 100%);border-color:#c2c0c2 #c2c0c2 #a19fa1}.btn-default:active{background-color:#ddd;background-image:none}.btn-negative,.btn-positive,.btn-primary,.btn-warning{color:#fff;text-shadow:0 1px 1px rgba(0,0,0,.1)}.btn-primary{border-color:#388df8 #388df8 #0866dc;background-color:#6eb4f7;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#6eb4f7),color-stop(100%,#1a82fb));background-image:-webkit-linear-gradient(top,#6eb4f7 0,#1a82fb 100%);background-image:linear-gradient(to bottom,#6eb4f7 0,#1a82fb 100%)}.btn-primary:active{background-color:#3e9bf4;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#3e9bf4),color-stop(100%,#0469de));background-image:-webkit-linear-gradient(top,#3e9bf4 0,#0469de 100%);background-image:linear-gradient(to bottom,#3e9bf4 0,#0469de 100%)}.btn-positive{border-color:#29a03b #29a03b #248b34;background-color:#5bd46d;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#5bd46d),color-stop(100%,#29a03b));background-image:-webkit-linear-gradient(top,#5bd46d 0,#29a03b 100%);background-image:linear-gradient(to bottom,#5bd46d 0,#29a03b 100%)}.btn-positive:active{background-color:#34c84a;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#34c84a),color-stop(100%,#248b34));background-image:-webkit-linear-gradient(top,#34c84a 0,#248b34 100%);background-image:linear-gradient(to bottom,#34c84a 0,#248b34 100%)}.btn-negative{border-color:#fb2f29 #fb2f29 #fb1710;background-color:#fd918d;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fd918d),color-stop(100%,#fb2f29));background-image:-webkit-linear-gradient(top,#fd918d 0,#fb2f29 100%);background-image:linear-gradient(to bottom,#fd918d 0,#fb2f29 100%)}.btn-negative:active{background-color:#fc605b;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fc605b),color-stop(100%,#fb1710));background-image:-webkit-linear-gradient(top,#fc605b 0,#fb1710 100%);background-image:linear-gradient(to bottom,#fc605b 0,#fb1710 100%)}.btn-warning{border-color:#fcaa0e #fcaa0e #ee9d02;background-color:#fece72;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fece72),color-stop(100%,#fcaa0e));background-image:-webkit-linear-gradient(top,#fece72 0,#fcaa0e 100%);background-image:linear-gradient(to bottom,#fece72 0,#fcaa0e 100%)}.btn-warning:active{background-color:#fdbc40;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fdbc40),color-stop(100%,#ee9d02));background-image:-webkit-linear-gradient(top,#fdbc40 0,#ee9d02 100%);background-image:linear-gradient(to bottom,#fdbc40 0,#ee9d02 100%)}.btn .icon{float:left;width:14px;height:14px;margin-bottom:1px;color:#737475;font-size:14px;line-height:1}.btn .icon-text{margin-right:5px}.btn-dropdown:after{margin-left:5px;content:\"\\E873\"}.btn-group{position:relative;display:inline-block}.toolbar-actions:after,.toolbar-actions:before,.toolbar:after,.toolbar:before{display:table;content:\" \"}.btn-group .btn{position:relative;float:left}.btn-group .btn:active,.btn-group .btn:focus{z-index:2}.btn-group .btn.active{z-index:3}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-group>.btn:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group .btn+.btn{border-left:1px solid #c2c0c2}.btn-group .btn+.btn.active{border-left:0}.btn-group .active{color:#fff;border:1px solid transparent;background-color:#6d6c6d;background-image:none}.btn-group .active .icon{color:#fff}.toolbar{min-height:22px;box-shadow:inset 0 1px 0 #f5f4f5;background-color:#e8e6e8;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#e8e6e8),color-stop(100%,#d1cfd1));background-image:-webkit-linear-gradient(top,#e8e6e8 0,#d1cfd1 100%);background-image:linear-gradient(to bottom,#e8e6e8 0,#d1cfd1 100%)}.toolbar-header{border-bottom:1px solid #c2c0c2}.toolbar-footer{border-top:1px solid #c2c0c2;-webkit-app-region:drag}.title{margin:0;font-size:12px;font-weight:400;color:#555}.toolbar-borderless{border-top:0;border-bottom:0}.toolbar-actions{margin-top:4px;margin-bottom:3px;padding-right:3px;padding-left:3px;padding-bottom:3px;-webkit-app-region:drag}.form-control,label{display:inline-block;font-size:13px}.toolbar-actions>.btn,.toolbar-actions>.btn-group{margin-left:4px;margin-right:4px}label{margin-bottom:5px}input[type=search]{-webkit-appearance:textfield;box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;line-height:normal}.checkbox,.form-group,.radio{margin-bottom:10px}.form-control{width:100%;min-height:25px;padding:5px 10px;line-height:1.6;background-color:#fff;border:1px solid #ddd;border-radius:4px;outline:0}.form-control:focus{border-color:#6db3fd;box-shadow:3px 3px 0 #6db3fd,-3px -3px 0 #6db3fd,-3px 3px 0 #6db3fd,3px -3px 0 #6db3fd}textarea{height:auto}.checkbox,.radio{position:relative;display:block;margin-top:10px}.checkbox label,.radio label{padding-left:20px;margin-bottom:0;font-weight:400}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-left:-20px;margin-top:4px}.form-actions .btn{margin-right:10px}.form-actions .btn:last-child{margin-right:0}.pane-group{position:absolute;bottom:0;display:flex}.icon:before,.pane,.tab-item{position:relative}.pane{overflow-y:auto;flex:1;border-left:1px solid #ddd}.list-group *,.media-body,.nav-group-item,td,th{overflow:hidden}.pane:first-child{border-left:0}.pane-sm{max-width:220px;min-width:150px}.pane-mini{width:80px;flex:none}.pane-one-fourth{width:25%;flex:none}.pane-one-third{width:33.3%}.img-circle{border-radius:50%}.img-rounded{border-radius:4px}.list-group{width:100%;list-style:none;margin:0;padding:0}.list-group *{margin:0}.list-group-item{padding:10px;font-size:12px;color:#414142;border-top:1px solid #ddd}.list-group-item:first-child{border-top:0}.list-group-item.active,.list-group-item.selected{color:#fff;background-color:#116cd6}.list-group-header{padding:10px}.media-object{margin-top:3px}.media-object.pull-left{margin-right:10px}.media-object.pull-right{margin-left:10px}.nav-group{font-size:14px}.nav-group-item{padding:2px 10px 2px 25px;display:block;color:#333;text-decoration:none}.nav-group-item.active,.nav-group-item:active{background-color:#dcdfe1}.nav-group-item .icon{width:19px;height:18px;float:left;color:#737475;margin-top:-3px;margin-right:7px;font-size:18px;text-align:center}.nav-group-title{margin:0;padding:10px 10px 2px;font-size:12px;font-weight:500;color:#666}.icon:before,th{font-weight:400}@font-face{font-family:photon-entypo;src:url(" + __webpack_require__(5) + ");src:url(" + __webpack_require__(5) + "?#iefix) format(\"eot\"),url(" + __webpack_require__(34) + ") format(\"woff\"),url(" + __webpack_require__(32) + ") format(\"truetype\");font-weight:400;font-style:normal}.icon:before{display:inline-block;speak:none;font-size:100%;font-style:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-note:before{content:'\\E800'}.icon-note-beamed:before{content:'\\E801'}.icon-music:before{content:'\\E802'}.icon-search:before{content:'\\E803'}.icon-flashlight:before{content:'\\E804'}.icon-mail:before{content:'\\E805'}.icon-heart:before{content:'\\E806'}.icon-heart-empty:before{content:'\\E807'}.icon-star:before{content:'\\E808'}.icon-star-empty:before{content:'\\E809'}.icon-user:before{content:'\\E80A'}.icon-users:before{content:'\\E80B'}.icon-user-add:before{content:'\\E80C'}.icon-video:before{content:'\\E80D'}.icon-picture:before{content:'\\E80E'}.icon-camera:before{content:'\\E80F'}.icon-layout:before{content:'\\E810'}.icon-menu:before{content:'\\E811'}.icon-check:before{content:'\\E812'}.icon-cancel:before{content:'\\E813'}.icon-cancel-circled:before{content:'\\E814'}.icon-cancel-squared:before{content:'\\E815'}.icon-plus:before{content:'\\E816'}.icon-plus-circled:before{content:'\\E817'}.icon-plus-squared:before{content:'\\E818'}.icon-minus:before{content:'\\E819'}.icon-minus-circled:before{content:'\\E81A'}.icon-minus-squared:before{content:'\\E81B'}.icon-help:before{content:'\\E81C'}.icon-help-circled:before{content:'\\E81D'}.icon-info:before{content:'\\E81E'}.icon-info-circled:before{content:'\\E81F'}.icon-back:before{content:'\\E820'}.icon-home:before{content:'\\E821'}.icon-link:before{content:'\\E822'}.icon-attach:before{content:'\\E823'}.icon-lock:before{content:'\\E824'}.icon-lock-open:before{content:'\\E825'}.icon-eye:before{content:'\\E826'}.icon-tag:before{content:'\\E827'}.icon-bookmark:before{content:'\\E828'}.icon-bookmarks:before{content:'\\E829'}.icon-flag:before{content:'\\E82A'}.icon-thumbs-up:before{content:'\\E82B'}.icon-thumbs-down:before{content:'\\E82C'}.icon-download:before{content:'\\E82D'}.icon-upload:before{content:'\\E82E'}.icon-upload-cloud:before{content:'\\E82F'}.icon-reply:before{content:'\\E830'}.icon-reply-all:before{content:'\\E831'}.icon-forward:before{content:'\\E832'}.icon-quote:before{content:'\\E833'}.icon-code:before{content:'\\E834'}.icon-export:before{content:'\\E835'}.icon-pencil:before{content:'\\E836'}.icon-feather:before{content:'\\E837'}.icon-print:before{content:'\\E838'}.icon-retweet:before{content:'\\E839'}.icon-keyboard:before{content:'\\E83A'}.icon-comment:before{content:'\\E83B'}.icon-chat:before{content:'\\E83C'}.icon-bell:before{content:'\\E83D'}.icon-attention:before{content:'\\E83E'}.icon-alert:before{content:'\\E83F'}.icon-vcard:before{content:'\\E840'}.icon-address:before{content:'\\E841'}.icon-location:before{content:'\\E842'}.icon-map:before{content:'\\E843'}.icon-direction:before{content:'\\E844'}.icon-compass:before{content:'\\E845'}.icon-cup:before{content:'\\E846'}.icon-trash:before{content:'\\E847'}.icon-doc:before{content:'\\E848'}.icon-docs:before{content:'\\E849'}.icon-doc-landscape:before{content:'\\E84A'}.icon-doc-text:before{content:'\\E84B'}.icon-doc-text-inv:before{content:'\\E84C'}.icon-newspaper:before{content:'\\E84D'}.icon-book-open:before{content:'\\E84E'}.icon-book:before{content:'\\E84F'}.icon-folder:before{content:'\\E850'}.icon-archive:before{content:'\\E851'}.icon-box:before{content:'\\E852'}.icon-rss:before{content:'\\E853'}.icon-phone:before{content:'\\E854'}.icon-cog:before{content:'\\E855'}.icon-tools:before{content:'\\E856'}.icon-share:before{content:'\\E857'}.icon-shareable:before{content:'\\E858'}.icon-basket:before{content:'\\E859'}.icon-bag:before{content:'\\E85A'}.icon-calendar:before{content:'\\E85B'}.icon-login:before{content:'\\E85C'}.icon-logout:before{content:'\\E85D'}.icon-mic:before{content:'\\E85E'}.icon-mute:before{content:'\\E85F'}.icon-sound:before{content:'\\E860'}.icon-volume:before{content:'\\E861'}.icon-clock:before{content:'\\E862'}.icon-hourglass:before{content:'\\E863'}.icon-lamp:before{content:'\\E864'}.icon-light-down:before{content:'\\E865'}.icon-light-up:before{content:'\\E866'}.icon-adjust:before{content:'\\E867'}.icon-block:before{content:'\\E868'}.icon-resize-full:before{content:'\\E869'}.icon-resize-small:before{content:'\\E86A'}.icon-popup:before{content:'\\E86B'}.icon-publish:before{content:'\\E86C'}.icon-window:before{content:'\\E86D'}.icon-arrow-combo:before{content:'\\E86E'}.icon-down-circled:before{content:'\\E86F'}.icon-left-circled:before{content:'\\E870'}.icon-right-circled:before{content:'\\E871'}.icon-up-circled:before{content:'\\E872'}.icon-down-open:before{content:'\\E873'}.icon-left-open:before{content:'\\E874'}.icon-right-open:before{content:'\\E875'}.icon-up-open:before{content:'\\E876'}.icon-down-open-mini:before{content:'\\E877'}.icon-left-open-mini:before{content:'\\E878'}.icon-right-open-mini:before{content:'\\E879'}.icon-up-open-mini:before{content:'\\E87A'}.icon-down-open-big:before{content:'\\E87B'}.icon-left-open-big:before{content:'\\E87C'}.icon-right-open-big:before{content:'\\E87D'}.icon-up-open-big:before{content:'\\E87E'}.icon-down:before{content:'\\E87F'}.icon-left:before{content:'\\E880'}.icon-right:before{content:'\\E881'}.icon-up:before{content:'\\E882'}.icon-down-dir:before{content:'\\E883'}.icon-left-dir:before{content:'\\E884'}.icon-right-dir:before{content:'\\E885'}.icon-up-dir:before{content:'\\E886'}.icon-down-bold:before{content:'\\E887'}.icon-left-bold:before{content:'\\E888'}.icon-right-bold:before{content:'\\E889'}.icon-up-bold:before{content:'\\E88A'}.icon-down-thin:before{content:'\\E88B'}.icon-left-thin:before{content:'\\E88C'}.icon-right-thin:before{content:'\\E88D'}.icon-up-thin:before{content:'\\E88E'}.icon-ccw:before{content:'\\E88F'}.icon-cw:before{content:'\\E890'}.icon-arrows-ccw:before{content:'\\E891'}.icon-level-down:before{content:'\\E892'}.icon-level-up:before{content:'\\E893'}.icon-shuffle:before{content:'\\E894'}.icon-loop:before{content:'\\E895'}.icon-switch:before{content:'\\E896'}.icon-play:before{content:'\\E897'}.icon-stop:before{content:'\\E898'}.icon-pause:before{content:'\\E899'}.icon-record:before{content:'\\E89A'}.icon-to-end:before{content:'\\E89B'}.icon-to-start:before{content:'\\E89C'}.icon-fast-forward:before{content:'\\E89D'}.icon-fast-backward:before{content:'\\E89E'}.icon-progress-0:before{content:'\\E89F'}.icon-progress-1:before{content:'\\E8A0'}.icon-progress-2:before{content:'\\E8A1'}.icon-progress-3:before{content:'\\E8A2'}.icon-target:before{content:'\\E8A3'}.icon-palette:before{content:'\\E8A4'}.icon-list:before{content:'\\E8A5'}.icon-list-add:before{content:'\\E8A6'}.icon-signal:before{content:'\\E8A7'}.icon-trophy:before{content:'\\E8A8'}.icon-battery:before{content:'\\E8A9'}.icon-back-in-time:before{content:'\\E8AA'}.icon-monitor:before{content:'\\E8AB'}.icon-mobile:before{content:'\\E8AC'}.icon-network:before{content:'\\E8AD'}.icon-cd:before{content:'\\E8AE'}.icon-inbox:before{content:'\\E8AF'}.icon-install:before{content:'\\E8B0'}.icon-globe:before{content:'\\E8B1'}.icon-cloud:before{content:'\\E8B2'}.icon-cloud-thunder:before{content:'\\E8B3'}.icon-flash:before{content:'\\E8B4'}.icon-moon:before{content:'\\E8B5'}.icon-flight:before{content:'\\E8B6'}.icon-paper-plane:before{content:'\\E8B7'}.icon-leaf:before{content:'\\E8B8'}.icon-lifebuoy:before{content:'\\E8B9'}.icon-mouse:before{content:'\\E8BA'}.icon-briefcase:before{content:'\\E8BB'}.icon-suitcase:before{content:'\\E8BC'}.icon-dot:before{content:'\\E8BD'}.icon-dot-2:before{content:'\\E8BE'}.icon-dot-3:before{content:'\\E8BF'}.icon-brush:before{content:'\\E8C0'}.icon-magnet:before{content:'\\E8C1'}.icon-infinity:before{content:'\\E8C2'}.icon-erase:before{content:'\\E8C3'}.icon-chart-pie:before{content:'\\E8C4'}.icon-chart-line:before{content:'\\E8C5'}.icon-chart-bar:before{content:'\\E8C6'}.icon-chart-area:before{content:'\\E8C7'}.icon-tape:before{content:'\\E8C8'}.icon-graduation-cap:before{content:'\\E8C9'}.icon-language:before{content:'\\E8CA'}.icon-ticket:before{content:'\\E8CB'}.icon-water:before{content:'\\E8CC'}.icon-droplet:before{content:'\\E8CD'}.icon-air:before{content:'\\E8CE'}.icon-credit-card:before{content:'\\E8CF'}.icon-floppy:before{content:'\\E8D0'}.icon-clipboard:before{content:'\\E8D1'}.icon-megaphone:before{content:'\\E8D2'}.icon-database:before{content:'\\E8D3'}.icon-drive:before{content:'\\E8D4'}.icon-bucket:before{content:'\\E8D5'}.icon-thermometer:before{content:'\\E8D6'}.icon-key:before{content:'\\E8D7'}.icon-flow-cascade:before{content:'\\E8D8'}.icon-flow-branch:before{content:'\\E8D9'}.icon-flow-tree:before{content:'\\E8DA'}.icon-flow-line:before{content:'\\E8DB'}.icon-flow-parallel:before{content:'\\E8DC'}.icon-rocket:before{content:'\\E8DD'}.icon-gauge:before{content:'\\E8DE'}.icon-traffic-cone:before{content:'\\E8DF'}.icon-cc:before{content:'\\E8E0'}.icon-cc-by:before{content:'\\E8E1'}.icon-cc-nc:before{content:'\\E8E2'}.icon-cc-nc-eu:before{content:'\\E8E3'}.icon-cc-nc-jp:before{content:'\\E8E4'}.icon-cc-sa:before{content:'\\E8E5'}.icon-cc-nd:before{content:'\\E8E6'}.icon-cc-pd:before{content:'\\E8E7'}.icon-cc-zero:before{content:'\\E8E8'}.icon-cc-share:before{content:'\\E8E9'}.icon-cc-remix:before{content:'\\E8EA'}.icon-github:before{content:'\\E8EB'}.icon-github-circled:before{content:'\\E8EC'}.icon-flickr:before{content:'\\E8ED'}.icon-flickr-circled:before{content:'\\E8EE'}.icon-vimeo:before{content:'\\E8EF'}.icon-vimeo-circled:before{content:'\\E8F0'}.icon-twitter:before{content:'\\E8F1'}.icon-twitter-circled:before{content:'\\E8F2'}.icon-facebook:before{content:'\\E8F3'}.icon-facebook-circled:before{content:'\\E8F4'}.icon-facebook-squared:before{content:'\\E8F5'}.icon-gplus:before{content:'\\E8F6'}.icon-gplus-circled:before{content:'\\E8F7'}.icon-pinterest:before{content:'\\E8F8'}.icon-pinterest-circled:before{content:'\\E8F9'}.icon-tumblr:before{content:'\\E8FA'}.icon-tumblr-circled:before{content:'\\E8FB'}.icon-linkedin:before{content:'\\E8FC'}.icon-linkedin-circled:before{content:'\\E8FD'}.icon-dribbble:before{content:'\\E8FE'}.icon-dribbble-circled:before{content:'\\E8FF'}.icon-stumbleupon:before{content:'\\E900'}.icon-stumbleupon-circled:before{content:'\\E901'}.icon-lastfm:before{content:'\\E902'}.icon-lastfm-circled:before{content:'\\E903'}.icon-rdio:before{content:'\\E904'}.icon-rdio-circled:before{content:'\\E905'}.icon-spotify:before{content:'\\E906'}.icon-spotify-circled:before{content:'\\E907'}.icon-qq:before{content:'\\E908'}.icon-instagram:before{content:'\\E909'}.icon-dropbox:before{content:'\\E90A'}.icon-evernote:before{content:'\\E90B'}.icon-flattr:before{content:'\\E90C'}.icon-skype:before{content:'\\E90D'}.icon-skype-circled:before{content:'\\E90E'}.icon-renren:before{content:'\\E90F'}.icon-sina-weibo:before{content:'\\E910'}.icon-paypal:before{content:'\\E911'}.icon-picasa:before{content:'\\E912'}.icon-soundcloud:before{content:'\\E913'}.icon-mixi:before{content:'\\E914'}.icon-behance:before{content:'\\E915'}.icon-google-circles:before{content:'\\E916'}.icon-vkontakte:before{content:'\\E917'}.icon-smashing:before{content:'\\E918'}.icon-sweden:before{content:'\\E919'}.icon-db-shape:before{content:'\\E91A'}.icon-logo-db:before{content:'\\E91B'}table{border-spacing:0;width:100%;border:0;border-collapse:separate;font-size:12px;text-align:left}.table-striped tr:nth-child(even),thead{background-color:#f5f5f4}tbody{background-color:#fff}.table-striped tr:active:nth-child(even),tr:active{color:#fff;background-color:#116cd6}thead tr:active{color:#333;background-color:#f5f5f4}th{border-right:1px solid #ddd;border-bottom:1px solid #ddd}td,th{padding:2px 15px}td:last-child,th:last-child{border-right:0}.tab-group{margin-top:-1px;display:flex;border-top:1px solid #989698;border-bottom:1px solid #989698}.tab-item{flex:1;padding:3px;font-size:12px;text-align:center;border-left:1px solid #989698;background-color:#b8b6b8;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#b8b6b8),color-stop(100%,#b0aeb0));background-image:-webkit-linear-gradient(top,#b8b6b8 0,#b0aeb0 100%);background-image:linear-gradient(to bottom,#b8b6b8 0,#b0aeb0 100%)}.tab-item:first-child{border-left:0}.tab-item.active{background-color:#d4d2d4;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#d4d2d4),color-stop(100%,#cccacc));background-image:-webkit-linear-gradient(top,#d4d2d4 0,#cccacc 100%);background-image:linear-gradient(to bottom,#d4d2d4 0,#cccacc 100%)}.tab-item .icon-close-tab:hover,.tab-item:after{background-color:rgba(0,0,0,.08)}.tab-item .icon-close-tab{position:absolute;top:50%;left:5px;width:15px;height:15px;font-size:15px;line-height:15px;text-align:center;color:#666;opacity:0;transition:opacity .1s linear,background-color .1s linear;border-radius:3px;transform:translateY(-50%);z-index:10}.tab-item:after{position:absolute;top:0;right:0;bottom:0;left:0;content:\"\";opacity:0;transition:opacity .1s linear;z-index:1}.tab-item:hover .icon-close-tab,.tab-item:hover:not(.active):after{opacity:1}.tab-item-fixed{flex:none;padding:3px 10px}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1382c29cdb72f6c99043675d6e13b625.ttf";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ })
/******/ ]);
});