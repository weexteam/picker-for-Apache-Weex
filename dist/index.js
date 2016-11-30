(this.nativeLog || function(s) {console.log(s)})('START WEEX PICKER: 0.0.1 Build 20161130');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WeexPicker = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject(".weex-picker {\n    font-size: 1rem;\n    line-height: 1.5;\n    overflow: hidden;\n    display: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-transition: opacity .15s ease;\n    -o-transition: opacity .15s ease;\n    transition: opacity .15s ease;\n    color: #333;\n    background-color: rgba(0, 0, 0, 0.5);\n    direction: ltr;\n}\n.weex-picker-fixed {\n    position: fixed;\n    z-index: 1986;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.weex-picker-mask {\n    position: fixed;\n    z-index: 1986;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.5);\n\n}\n.weex-picker-fixed > .weex-picker-content {\n    position: absolute;\n    right: 0;\n    bottom: -100%;\n    left: 0;\n    max-height: 100%;\n    -webkit-transition: bottom .3s ease;\n    -o-transition: bottom .3s ease;\n    transition: bottom .3s ease;\n}\n.weex-picker-fixed .weex-picker-header {\n    display: block;\n}\n.weex-picker-fixed .weex-picker-footer {\n    display: table;\n}\n.weex-picker-open {\n    display: block;\n    opacity: 0;\n}\n.weex-picker-open {\n    opacity: 1;\n}\n.weex-picker-open > .weex-picker-content {\n    bottom: 0;\n}\n.weex-picker-content {\n    background-color: #fff;\n}\n\n\n.weex-picker-content ul{\n    position: absolute;\n}\n.weex-picker-header {\n    position: relative;\n    height: 1.2rem;\n    border-bottom: 1px solid #eee;\n    background-color: gainsboro;\n\n}\n\n.weex-picker-header a {\n    font-size: 0.4rem;\n    height: 1.2rem;\n    line-height: 1.2rem;\n    text-align: center;\n    width: 50%;\n    display: block;\n    float:left\n\n}\n.weex-picker-title {\n    font-size: 1.125rem;\n    font-weight: normal;\n    line-height: 1.25rem;\n    margin: 0;\n}\n.weex-picker-close {\n    font-size: 2rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 3rem;\n    height: 3rem;\n    color: #999;\n    border-width: 0;\n    background-color: transparent;\n}\n.weex-picker-body {\n    overflow: hidden;\n    height:6rem;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n}\n\n.weex-picker-scroller {\n    height: 6rem;\n    overflow: hidden;\n    position: relative;\n    flex: 1;\n}\n\n.weex-picker-body .weex-picker-scroller{\n    border-right:solid 1px #eee;\n}\n\n.weex-picker-body .weex-picker-scroller:last-child{\n    border-right:none!important;\n}\n\n.weex-picker-body ul{\n    display: block;\n    width: 100%;\n}\n\n.weex-picker-body li {\n    text-align: center;\n    height:1.2rem;\n    line-height: 1.2rem;\n    vertical-align: middle;\n    font-size: 0.4rem;\n}\n\n\n\n.weex-picker-content .weex-picker-bar{\n    position: absolute;\n    top:3.6rem;\n    left:0;\n    height:1.2rem;\n    border-bottom: solid 1px gainsboro;\n    border-top: solid 1px gainsboro;\n    width: 100%;\n    pointer-events: none;\n}\n\n\n.weex-picker-grid {\n    display: table;\n    width: 100%;\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem;\n}\n.picker-cell {\n    position: relative;\n    display: table-cell;\n}\n.picker-cell::before,\n.picker-cell::after {\n    position: absolute;\n    z-index: 0;\n    right: 0;\n    left: 0;\n    display: block;\n    content: '';\n}\n.picker-cell::before {\n    top: 0;\n    bottom: 50%;\n    margin-bottom: 1.25rem;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.05)));\n    background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    border-bottom: 1px solid #eee;\n}\n.picker-cell::after {\n    top: 50%;\n    bottom: 0;\n    margin-top: 1.25rem;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.05)));\n    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    border-top: 1px solid #eee;\n}\n.picker-cell + .picker-cell {\n    border-left: 1px solid #eee;\n}\n.picker-single .picker-cell::before,\n.picker-single .picker-cell::after {\n    display: none;\n}\n.picker-list {\n    position: relative;\n    z-index: 1;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.picker-item {\n    padding: .5rem;\n    text-align: center;\n    white-space: nowrap;\n    color: #999;\n}\n.picker-picked {\n    font-size: 1.125em;\n    color: #0074d9;\n}\n.picker-footer {\n    width: 100%;\n    border-top: 1px solid #eee;\n}\n.wee-picker-cancel,\n.wee-picker-confirm {\n    font-size: 1rem;\n    display: table-cell;\n    width: 50%;\n    padding: 1rem;\n    border-width: 0;\n    background-color: transparent;\n}\n.weex-picker-confirm {\n    color: #0074d9;\n}\n\n\n.pika-single {\n    z-index: 9999;\n    display: block;\n    position: relative;\n    color: #333;\n    background: #fff;\n    border: 1px solid #ccc;\n    border-bottom-color: #bbb;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    align-self: center;\n}\n\n\n.pika-single:before,\n.pika-single:after {\n    content: \" \";\n    display: table;\n}\n.pika-single:after { clear: both }\n.pika-single { *zoom: 1 }\n\n.pika-single.is-hidden {\n    display: none;\n}\n\n.pika-single.is-bound {\n    position: absolute;\n    box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);\n}\n\n.pika-lendar {\n    float: left;\n    width: 6.4rem;\n    margin: 0.213rem;\n}\n\n.pika-title {\n    position: relative;\n    text-align: center;\n}\n\n.pika-label {\n    display: inline-block;\n    *display: inline;\n    position: relative;\n    z-index: 9999;\n    overflow: hidden;\n    margin: 0;\n    padding: 0.13rem 0.08rem;\n    font-size: 0.32rem;\n    line-height: 0.53rem;\n    font-weight: bold;\n    background-color: #fff;\n}\n.pika-title select {\n    cursor: pointer;\n    position: absolute;\n    z-index: 9998;\n    margin: 0;\n    left: 0;\n    top: 0.13rem;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    height: 0.53rem;\n    width: 100%;\n}\n\n.pika-prev,\n.pika-next {\n    display: block;\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    border: 0;\n    padding: 0;\n    width: 0.53rem;\n    height: 0.53rem;\n    /* hide text using text-indent trick, using width value (it's enough) */\n    text-indent: 0.53rem;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: 75% 75%;\n    opacity: .5;\n    *position: absolute;\n    *top: 0;\n}\n\n.pika-prev:hover,\n.pika-next:hover {\n    opacity: 1;\n}\n\n.pika-prev,\n.is-rtl .pika-next {\n    float: left;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');\n    *left: 0;\n}\n\n.pika-next,\n.is-rtl .pika-prev {\n    float: right;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');\n    *right: 0;\n}\n\n.pika-prev.is-disabled,\n.pika-next.is-disabled {\n    cursor: default;\n    opacity: .2;\n}\n\n.pika-select {\n    display: inline-block;\n    *display: inline;\n}\n\n.pika-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    border: 0;\n}\n\n.pika-table th,\n.pika-table td {\n    width: 14.285714285714286%;\n    padding: 0;\n}\n\n.pika-table th {\n    color: #999;\n    font-size: 0.32rem;\n    line-height: 0.66rem;\n    font-weight: bold;\n    text-align: center;\n}\n\n.pika-button {\n    cursor: pointer;\n    display: block;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    outline: none;\n    border: 0;\n    margin: 0;\n    width: 100%;\n    padding: 10px;\n    color: #666;\n    font-size: 0.32rem;\n    line-height: 0.4rem;\n    text-align: right;\n    background: #f5f5f5;\n}\n\n.pika-week {\n    font-size: 0.3rem;\n    color: #999;\n}\n\n.is-today .pika-button {\n    color: #33aaff;\n    font-weight: bold;\n}\n\n.is-selected .pika-button {\n    color: #fff;\n    font-weight: bold;\n    background: #33aaff;\n    box-shadow: inset 0 2px 6px #178fe5;\n    border-radius: 6px;\n}\n\n.is-inrange .pika-button {\n    background: #D5E9F7;\n}\n\n.is-startrange .pika-button {\n    color: #fff;\n    background: #6CB31D;\n    box-shadow: none;\n    border-radius: 6px;\n}\n\n.is-endrange .pika-button {\n    color: #fff;\n    background: #33aaff;\n    box-shadow: none;\n    border-radius: 6px;\n}\n\n.is-disabled .pika-button,\n.is-outside-current-month .pika-button {\n    pointer-events: none;\n    cursor: default;\n    color: #999;\n    opacity: .3;\n}\n\n.pika-button:hover {\n    color: #fff;\n    background: #ff8000;\n    box-shadow: none;\n    border-radius: 6px;\n}\n\n/* styling for abbr */\n.pika-table abbr {\n    border-bottom: none;\n    cursor: help;\n}\n\n",undefined);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var iscroll = createCommonjsModule(function (module) {
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) { return vendors[i].substr(0, vendors[i].length-1); }
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) { return false; }
		if ( _vendor === '' ) { return style; }
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ?
			'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	/*
	This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	- galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
	me.isBadAndroid = (function() {
		var appVersion = window.navigator.appVersion;
		// Android browser is not a chrome browser.
		if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
			var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
			if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
				return parseFloat(safariVersion[1]) < 535.19;
			} else {
				return true;
			}
		} else {
			return false;
		}
	})();

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();
function IScroll (el, options) {
	var this$1 = this;

	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS
		disablePointer : !utils.hasPointer,
		disableTouch : utils.hasPointer || !utils.hasTouch,
		disableMouse : utils.hasPointer || utils.hasTouch,
		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true,
		bindToWrapper: typeof window.onmousedown === "undefined"
	};

	for ( var i in options ) {
		this$1.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

	// Some defaults
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.2.0',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);
		clearTimeout(this.resizeTimeout);
 		this.resizeTimeout = null;
		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
		  // for button property
		  // http://unixpapa.com/js/mouse.html
		  var button;
	    if (!e.which) {
	      /* IE case */
	      button = (e.button < 2) ? 0 :
	               ((e.button == 4) ? 1 : 2);
	    } else {
	      /* All others */
	      button = e.button;
	    }
			if ( button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this._transitionTime();
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}

/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		var arguments$1 = arguments;
		var this$1 = this;

		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this$1._events[type][i].apply(this$1, [].slice.call(arguments$1, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;
		var transitionType = this.options.useTransition && easing.style;
		if ( !time || transitionType ) {
				if(transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		var this$1 = this;

		time = time || 0;

		var durationProp = utils.style.transitionDuration;
		this.scrollerStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.scrollerStyle[durationProp] === '0.0001ms') {
					self.scrollerStyle[durationProp] = '0s';
				}
			});
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this$1.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		var this$1 = this;

		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this$1.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		var this$1 = this;

		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this$1.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},
	_initIndicators: function () {
		var this$1 = this;

		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this$1.indicators.push( new Indicator(this$1, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			if (that.indicators) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = null;
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			if(!that.options.snap) {
				that._execEvent('scrollEnd');
			}
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
		this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var this$1 = this;

			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this$1.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this$1.pages[i][l] = {
							x: Math.max(x, this$1.maxScrollX),
							y: Math.max(y, this$1.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this$1.pages[m] ) {
						this$1.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this$1.maxScrollX);
					y = Math.max(-el[i].offsetTop, this$1.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this$1.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this$1.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		var this$1 = this;

		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this$1.pages[i][0].cx ) {
				x = this$1.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this$1.pages[0][m].cy ) {
				y = this$1.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		var this$1 = this;

		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this$1.options.keyBindings[i] == 'string' ) {
					this$1.options.keyBindings[i] = this$1.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this$1.options.keyBindings[i] = this$1.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( this.enabled && !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	var this$1 = this;

	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this$1.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		var durationProp = utils.style.transitionDuration;
		this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
		// remove 0.0001ms
		var self = this;
		if(utils.isBadAndroid) {
			rAF(function() {
				if(self.wrapperStyle[durationProp] === '0.0001ms') {
					self.wrapperStyle[durationProp] = '0s';
				}
			});
		}
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.fadeScrollbars ) {
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
		}
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		this.indicatorStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.indicatorStyle[durationProp] === '0.0001ms') {
					self.indicatorStyle[durationProp] = '0s';
				}
			});
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return IScroll; } );
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);
});

var modal;
var pickerContainer;
var pickerHeader;
var pickerBody;
var pickerConfirm;
var pickerCancel;
var pickerBar;
var pickerScroller;

function Picker (configs) {
  this.confirmCallback = configs.confirmCallback;
  this.cancelCallback = configs.cancelCallback;
  this.data = configs.data;
  this.column = this._getColumnLength(this.data);
  this.sender = configs.sender;
  this.pickerScrollers = [];
  this.itemScrolls = [];
  this.formateResult = configs.formateResult;
  this.resultIndexs = configs.defaultIndexs || this._getDefaultIndex();
  this._init();
}

Picker.prototype = {

  _init: function () {
    this._create();
    this._addEvent();
    this._createColumn();
    this.show();
    this._createScroll();
    this._initIndex();
  },

  _create: function () {
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'weex-picker weex-picker-fixed';
      pickerContainer = document.createElement('div');
      pickerHeader = document.createElement('div');
      pickerBody = document.createElement('div');

      pickerBar = document.createElement('div');
      pickerBar.className = 'weex-picker-bar';

      pickerContainer.className = 'weex-picker-content';
      pickerHeader.className = 'weex-picker-header';
      pickerBody.className = 'weex-picker-body';
      pickerContainer.appendChild(pickerHeader);
      pickerContainer.appendChild(pickerBody);
      pickerContainer.appendChild(pickerBar);
      modal.appendChild(pickerContainer);
      document.body.appendChild(modal);
    }

    pickerHeader.innerHTML = '';
    pickerConfirm = document.createElement('a');
    pickerCancel = document.createElement('a');
    pickerConfirm.className = 'weex-picker-confirm';
    pickerCancel.className = 'weex-picker-cancel';
    pickerConfirm.innerText = '确定';
    pickerCancel.innerText = '取消';
    pickerHeader.appendChild(pickerCancel);
    pickerHeader.appendChild(pickerConfirm);
  },

  _getColumnLength: function (data) {
    if (typeof (data[0]) === 'object') {
      return data.length
    }
    else {
      return 1
    }
  },

  _getDefaultIndex: function () {
    var result = [];
    for (var i = 0; i < this.column; i++) {
      result[0] = 0;
    }
    return result
  },

  _getCurrentIndex: function () {
    if (this.resultIndexs.length === 1) {
      return this.resultIndexs[0]
    }
    else {
      return this.resultIndexs
    }
  },

  _addEvent: function () {
    var this$1 = this;

    var confirmCallback = function () {
      var indexs = this$1._getCurrentIndex();
      var resultData = this$1.formateResult ? this$1.formateResult(this$1.data, indexs) : indexs;
      var result = {
        result: 'success',
        data: resultData
      };

      this$1.confirmCallback && this$1.sender.performCallback(this$1.confirmCallback, result);
      this$1.hide();
    };

    var cancelCallback = function () {
      this$1.cancelCallback && this$1.sender.performCallback(this$1.cancelCallback);
      var indexs = this$1._getCurrentIndex();
      var resultData = this$1.formateResult ? this$1.formateResult(this$1.data, indexs) : indexs;
      var result = {
        result: 'cancel',
        data: resultData
      };
      this$1.confirmCallback && this$1.sender.performCallback(this$1.confirmCallback, result);
      this$1.hide();
    };

    pickerConfirm.addEventListener('click', confirmCallback);
    pickerCancel.addEventListener('click', cancelCallback);
  },

  _createColumn: function () {
    var this$1 = this;

    var items = this.data;
    pickerBody.innerHTML = '';
    if (this.column > 1) {
      for (var i = 0; i < items.length; i++) {
        this$1._createItem(items[i]);
      }
    }
    else {
      this._createItem(items);
    }
  },

  _createItem: function (items) {
    pickerScroller = document.createElement('div');
    var ui = document.createElement('ul');
    for (var i = -2; i < items.length + 2; i++) {
      var cell = document.createElement('li');
      if (i < 0 || i >= items.length) {
        cell.innerText = '';
      }
      else {
        cell.innerText = items[i];
      }
      ui.appendChild(cell);
    }
    pickerScroller.className = 'weex-picker-scroller';
    pickerScroller.appendChild(ui);
    pickerBody.appendChild(pickerScroller);
    this.pickerScrollers.push(pickerScroller);
  },

  _createScroll: function () {
    var self = this;
    var loop = function ( i ) {
      (function (index) {
        var itemScroll = new iscroll(self.pickerScrollers[i], {
          snap: 'li',
          mouseWheel: true,
          vScrollbar: false,
          hScrollbar: false,
          hScroll: false
        });

        self.itemScrolls.push(itemScroll);

        itemScroll.on('scrollEnd', function () {
          var yIndex = Math.abs(Math.round(-1 * this.y / self.itemHeight));
          self.resultIndexs[index] = yIndex;
          console.log(yIndex);
        });
      })(i);
    };

    for (var i = 0; i < this.pickerScrollers.length; i++) loop( i );
  },

  _initIndex: function () {
    var self = this;
    self.itemHeight = pickerBody.offsetHeight / 5;
    for (var i = 0; i < this.pickerScrollers.length; i++) {
      (function (index) {
        self.itemScrolls[index].goToPage(0, self.resultIndexs[index], 0);
      })(i);
    }
  },

  show: function () {
    modal.className = 'weex-picker weex-picker-fixed weex-picker-open';
  },

  hide: function () {
    modal.className = 'weex-picker weex-picker-fixed weex-picker-close';
  }
};

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var this$1 = this;

        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this$1, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

function isUndefined(input) {
    return input === void 0;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i in momentProperties) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        var arguments$1 = arguments;

        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments$1[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments$1[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments$1[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var this$1 = this;

    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this$1[i] = prop;
        } else {
            this$1['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _ordinalParseLenient.
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    var this$1 = this;

    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this$1[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        var this$1 = this;

        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this$1[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return this._months;
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return this._monthsShort;
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var this$1 = this;

    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this$1._shortMonthsParse[i] = this$1.monthsShort(mom, '').toLocaleLowerCase();
            this$1._longMonthsParse[i] = this$1.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var this$1 = this;

    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this$1._longMonthsParse[i]) {
            this$1._longMonthsParse[i] = new RegExp('^' + this$1.months(mom, '').replace('.', '') + '$', 'i');
            this$1._shortMonthsParse[i] = new RegExp('^' + this$1.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this$1._monthsParse[i]) {
            regex = '^' + this$1.months(mom, '') + '|^' + this$1.monthsShort(mom, '');
            this$1._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this$1._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this$1._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this$1._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    var this$1 = this;

    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this$1.monthsShort(mom, ''));
        longPieces.push(this$1.months(mom, ''));
        mixedPieces.push(this$1.months(mom, ''));
        mixedPieces.push(this$1.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    //can't just apply() to create a date:
    //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
    var date = new Date(y, m, d, h, M, s, ms);

    //the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    //the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return this._weekdays;
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var this$1 = this;

    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this$1._minWeekdaysParse[i] = this$1.weekdaysMin(mom, '').toLocaleLowerCase();
            this$1._shortWeekdaysParse[i] = this$1.weekdaysShort(mom, '').toLocaleLowerCase();
            this$1._weekdaysParse[i] = this$1.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var this$1 = this;

    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this$1._fullWeekdaysParse[i]) {
            this$1._fullWeekdaysParse[i] = new RegExp('^' + this$1.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this$1._shortWeekdaysParse[i] = new RegExp('^' + this$1.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this$1._minWeekdaysParse[i] = new RegExp('^' + this$1.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this$1._weekdaysParse[i]) {
            regex = '^' + this$1.weekdays(mom, '') + '|^' + this$1.weekdaysShort(mom, '') + '|^' + this$1.weekdaysMin(mom, '');
            this$1._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this$1._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this$1._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this$1._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this$1._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    var this$1 = this;

    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this$1.weekdaysMin(mom, '');
        shortp = this$1.weekdaysShort(mom, '');
        longp = this$1.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    ordinalParse: defaultOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
        hooks.createFromInputFallback(config);
    }
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse)) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }

    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (typeof(input) === 'object') {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString () {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        } else {
            return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 < this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$1 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$1;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this[units + 's']();
}

function makeGetter(name) {
    return function () {
        return this._data[name];
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    s: 45,  // seconds to minute
    m: 45,  // minutes to hour
    h: 22,  // hours to day
    d: 26,  // days to month
    M: 11   // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds < thresholds.s && ['s', seconds]  ||
            minutes <= 1           && ['m']           ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours   <= 1           && ['h']           ||
            hours   < thresholds.h && ['hh', hours]   ||
            days    <= 1           && ['d']           ||
            days    < thresholds.d && ['dd', days]    ||
            months  <= 1           && ['M']           ||
            months  < thresholds.M && ['MM', months]  ||
            years   <= 1           && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
}

function humanize (withSuffix) {
    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports

//! moment.js
//! version : 2.17.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

hooks.version = '2.17.0';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;




var moment$1 = Object.freeze({
	default: hooks
});

var createData = function () {
  var hour = [];
  var moment = [];
  var i = 0;
  for (i = 0; i < 24; i++) {
    if (i < 10) {
      hour.push('0' + i);
    }
    else {
      hour.push(i + '');
    }
  }
  for (i = 0; i < 60; i++) {
    if (i < 10) {
      moment.push('0' + i);
    }
    else {
      moment.push(i + '');
    }
  }

  return [hour, moment]
};

var inputData = createData();

var getDefaultIndexs = function (time) {
  var hour = time.format('HH');
  var moment = time.format('mm');
  var result = [0, 0];
  var i = 0;
  for (i = 0; i < inputData[0].length; i++) {
    if (hour === inputData[0][i]) {
      result[0] = i;
    }
  }
  for (i = 0; i < inputData[1].length; i++) {
    if (moment === inputData[1][i]) {
      result[1] = i;
    }
  }

  return result
};

var formateResult = function (data, indexs) {
  var hour = data[0][indexs[0]];
  var moment = data[1][indexs[1]];
  return hour + ':' + moment
};

var TimePicker = function (configs) {
  var time = hooks(configs.value || new Date(), 'HH:mm');
  var value = getDefaultIndexs(time);
  return new Picker({
    data: inputData,
    formateResult: formateResult,
    defaultIndexs: value,
    confirmCallback: configs.confirmCallback,
    sender: configs.sender
  })
};

var require$$0 = ( moment$1 && moment$1['default'] ) || moment$1;

var pikaday = createCommonjsModule(function (module, exports) {
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory)
{
    'use strict';

    var moment;
    if (typeof exports === 'object') {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = require$$0; } catch (e) {}
        module.exports = factory(moment);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function (req)
        {
            // Load moment.js as an optional dependency
            var id = 'moment';
            try { moment = req(id); } catch (e) {}
            return factory(moment);
        });
    } else {
        root.Pikaday = factory(root.moment);
    }
}(commonjsGlobal, function (moment)
{
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isWeekend = function(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    },

    isLeapYear = function(year)
    {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) { date.setHours(0,0,0,0); }
    },

    compareDates = function(a,b)
    {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {

        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the default flag for moment's strict date parsing
        formatStrict: false,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // Render days of the calendar grid that fall in the next or previous month
        showDaysInNextAndPreviousMonths: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        },

        // Theme Classname
        theme: null,

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(opts)
    {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
            if (opts.showDaysInNextAndPreviousMonths) {
                arr.push('is-outside-current-month');
            } else {
                return '<td class="is-empty"></td>';
            }
        }
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
            ariaSelected = 'true';
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                        opts.day +
                 '</button>' +
               '</td>';
    },

    renderWeek = function (d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay()+1)/7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },

    renderRow = function(days, isRTL)
    {
        return '<tr>' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
    },

    renderTitle = function(instance, c, year, month, refYear, randId)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected="selected"': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled="disabled"' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data, randId)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function() {
                            self.hide();
                            if (opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onKeyChange = function(e)
        {
            e = e || window.event;

            if (self.isVisible()) {

                switch(e.keyCode){
                    case 13:
                    case 27:
                        opts.field.blur();
                        break;
                    case 37:
                        e.preventDefault();
                        self.adjustDate('subtract', 1);
                        break;
                    case 38:
                        self.adjustDate('subtract', 7);
                        break;
                    case 39:
                        self.adjustDate('add', 1);
                        break;
                    case 40:
                        self.adjustDate('add', 7);
                        break;
                }
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (hasMoment) {
                date = moment(opts.field.value, opts.format, opts.formatStrict);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);
        addEvent(document, 'keydown', self._onKeyChange);

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            return !isDate(this._d) ? '' : hasMoment ? moment(this._d).format(format || this._o.format) : this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection with fallback for the current date
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : new Date();
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function(sign, days) {

            var day = this.getDate();
            var difference = parseInt(days)*24*60*60*1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            if (hasMoment) {
                if (sign === 'add') {
                    newDay = moment(day).add(days, "days").toDate();
                } else if (sign === 'subtract') {
                    newDay = moment(day).subtract(days, "days").toDate();
                }
            }

            this.setDate(newDay);
        },

        adjustCalendars: function() {
            var this$1 = this;

            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this$1.calendars[c] = adjustCalendar({
                    month: this$1.calendars[0].month + c,
                    year: this$1.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear  = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear  = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }

            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }

            this.draw();
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            var this$1 = this;

            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this$1, c, this$1.calendars[c].year, this$1.calendars[c].month, this$1.calendars[0].year, randId) + this$1.render(this$1.calendars[c].year, this$1.calendars[c].month, randId) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }
            
            if (opts.bound) {
                // let the screen reader user know to use arrow keys
                opts.field.setAttribute('aria-label', 'Use the arrow keys to pick a date');
            }
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) { return; }

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month, randId)
        {
            var this$1 = this;

            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this$1._d) ? compareDates(day, this$1._d) : false,
                    isToday = compareDates(day, now),
                    isEmpty = i < before || i >= (days + before),
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                                 (opts.maxDate && day > opts.maxDate) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day));

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                        day: dayNumber,
                        month: monthNumber,
                        year: yearNumber,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange,
                        showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths
                    };

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL));
                    row = [];
                    r = 0;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this.isVisible()) {
                removeClass(this.el, 'is-hidden');
                this._v = true;
                this.draw();
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (this._o.field) {
                removeEvent(this._o.field, 'change', this._onInputChange);
                if (this._o.bound) {
                    removeEvent(this._o.trigger, 'click', this._onInputClick);
                    removeEvent(this._o.trigger, 'focus', this._onInputFocus);
                    removeEvent(this._o.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;

}));
});

var pickerModule = {
  pick: function (options, confirmCallback, cancelCallback) {
    var items = options.items;
    var index = options.index;
    new Picker({
      data: items,
      defaultIndexs: [index],
      confirmCallback: confirmCallback,
      cancelCallback: cancelCallback,
      sender: this.sender
    });
  },

  pickDate: function (options, confirmCallback) {
    var mask = document.createElement('div');
    mask.className = 'weex-picker-mask';
    var self = this;
    var picker = new pikaday({
      defaultDate: hooks(options.value, 'YYYY-MM-DD').toDate(),
      format: 'YYYY-MM-DD',
      minDate: hooks(options.min, 'YYYY-MM-DD').toDate(),
      maxDate: hooks(options.max, 'YYYY-MM-DD').toDate(),
      onSelect: function (date) {
        confirmCallback && self.sender.performCallback(confirmCallback, { result: 'success', data: hooks(date).format('YYYY-MM-DD') });
        picker.destroy();
        mask.parentNode.removeChild(mask);
      }
    });
    mask.appendChild(picker.el);
    document.body.append(mask);
  },

  pickTime: function (options, confirmCallback) {
    new TimePicker({
      value: options.value,
      confirmCallback: confirmCallback,
      sender: this.sender
    });
  }
};

var meta = {
  picker: [{
    name: 'pick',
    args: ['object', 'function']
  }, {
    name: 'pickDate',
    args: ['object', 'function']
  }, {
    name: 'pickTime',
    args: ['object', 'function']
  }]
};

var index = {
  init: function (Weex) {
    Weex.registerApiModule('picker', pickerModule, meta);
  }
};

return index;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9pc2Nyb2xsL2J1aWxkL2lzY3JvbGwuanMiLCIuLi9zcmMvUGlja2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2hvb2tzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLWFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9pcy1vYmplY3QtZW1wdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvaXMtbnVtYmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLWRhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvbWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2hhcy1vd24tcHJvcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9leHRlbmQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvY3JlYXRlL3V0Yy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvcGFyc2luZy1mbGFncy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9zb21lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2NyZWF0ZS92YWxpZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9pcy11bmRlZmluZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2NvbnN0cnVjdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2Ficy1mbG9vci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy90by1pbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvY29tcGFyZS1hcnJheXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvZGVwcmVjYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLWZ1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9zZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2NvbnN0cnVjdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2tleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2NhbGVuZGFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9mb3JtYXRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9pbnZhbGlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9vcmRpbmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9yZWxhdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy9hbGlhc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3ByaW9yaXRpZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2dldC1zZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvemVyby1maWxsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvcGFyc2UvcmVnZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvcGFyc2UvdG9rZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvY29uc3RhbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2luZGV4LW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL21vbnRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3llYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvY3JlYXRlL2RhdGUtZnJvbS1hcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3dlZWsuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvZGF5LW9mLXdlZWsuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvaG91ci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9sb2NhbGUvYmFzZS1jb25maWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2xvY2FsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvY3JlYXRlL2NoZWNrLW92ZXJmbG93LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2NyZWF0ZS9mcm9tLXN0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9kZWZhdWx0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1hcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWZvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2NyZWF0ZS9mcm9tLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1hbnl0aGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvbG9jYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L21pbi1tYXguanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L25vdy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9jb25zdHJ1Y3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9hYnMtcm91bmQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvb2Zmc2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2R1cmF0aW9uL2NyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvYWRkLXN1YnRyYWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC9jYWxlbmRhci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvY2xvbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2NvbXBhcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2RpZmYuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvZnJvbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvdG8uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2xvY2FsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvc3RhcnQtZW5kLW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC90by10eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC92YWxpZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvY3JlYXRpb24tZGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy93ZWVrLXllYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvcXVhcnRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy9kYXktb2YtbW9udGguanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvZGF5LW9mLXllYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvbWludXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3NlY29uZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy9taWxsaXNlY29uZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy90aW1lem9uZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvcHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC9tb21lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL3ByZS1wb3N0LWZvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9sb2NhbGUvcHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9saXN0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9sb2NhbGUvZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2xvY2FsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9hYnMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vYWRkLXN1YnRyYWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2Ficy1jZWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2R1cmF0aW9uL2J1YmJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9hcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9nZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vaHVtYW5pemUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vaXNvLXN0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9wcm90b3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vZHVyYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvdGltZXN0YW1wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3VuaXRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbW9tZW50LmpzIiwiLi4vc3JjL1RpbWVQaWNrZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcGlrYWRheS9waWthZGF5LmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBpU2Nyb2xsIHY1LjIuMCB+IChjKSAyMDA4LTIwMTYgTWF0dGVvIFNwaW5lbGxpIH4gaHR0cDovL2N1YmlxLm9yZy9saWNlbnNlICovXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgpIHtcbnZhciByQUYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHR8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHR8fFxuXHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdHx8XG5cdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdHx8XG5cdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVx0XHR8fFxuXHRmdW5jdGlvbiAoY2FsbGJhY2spIHsgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7IH07XG5cbnZhciB1dGlscyA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBtZSA9IHt9O1xuXG5cdHZhciBfZWxlbWVudFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG5cdHZhciBfdmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdmVuZG9ycyA9IFsndCcsICd3ZWJraXRUJywgJ01velQnLCAnbXNUJywgJ09UJ10sXG5cdFx0XHR0cmFuc2Zvcm0sXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB2ZW5kb3JzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdHRyYW5zZm9ybSA9IHZlbmRvcnNbaV0gKyAncmFuc2Zvcm0nO1xuXHRcdFx0aWYgKCB0cmFuc2Zvcm0gaW4gX2VsZW1lbnRTdHlsZSApIHJldHVybiB2ZW5kb3JzW2ldLnN1YnN0cigwLCB2ZW5kb3JzW2ldLmxlbmd0aC0xKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKCk7XG5cblx0ZnVuY3Rpb24gX3ByZWZpeFN0eWxlIChzdHlsZSkge1xuXHRcdGlmICggX3ZlbmRvciA9PT0gZmFsc2UgKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKCBfdmVuZG9yID09PSAnJyApIHJldHVybiBzdHlsZTtcblx0XHRyZXR1cm4gX3ZlbmRvciArIHN0eWxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGUuc3Vic3RyKDEpO1xuXHR9XG5cblx0bWUuZ2V0VGltZSA9IERhdGUubm93IHx8IGZ1bmN0aW9uIGdldFRpbWUgKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cblx0bWUuZXh0ZW5kID0gZnVuY3Rpb24gKHRhcmdldCwgb2JqKSB7XG5cdFx0Zm9yICggdmFyIGkgaW4gb2JqICkge1xuXHRcdFx0dGFyZ2V0W2ldID0gb2JqW2ldO1xuXHRcdH1cblx0fTtcblxuXHRtZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZm4sIGNhcHR1cmUpIHtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCAhIWNhcHR1cmUpO1xuXHR9O1xuXG5cdG1lLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xuXHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sICEhY2FwdHVyZSk7XG5cdH07XG5cblx0bWUucHJlZml4UG9pbnRlckV2ZW50ID0gZnVuY3Rpb24gKHBvaW50ZXJFdmVudCkge1xuXHRcdHJldHVybiB3aW5kb3cuTVNQb2ludGVyRXZlbnQgP1xuXHRcdFx0J01TUG9pbnRlcicgKyBwb2ludGVyRXZlbnQuY2hhckF0KDcpLnRvVXBwZXJDYXNlKCkgKyBwb2ludGVyRXZlbnQuc3Vic3RyKDgpOlxuXHRcdFx0cG9pbnRlckV2ZW50O1xuXHR9O1xuXG5cdG1lLm1vbWVudHVtID0gZnVuY3Rpb24gKGN1cnJlbnQsIHN0YXJ0LCB0aW1lLCBsb3dlck1hcmdpbiwgd3JhcHBlclNpemUsIGRlY2VsZXJhdGlvbikge1xuXHRcdHZhciBkaXN0YW5jZSA9IGN1cnJlbnQgLSBzdGFydCxcblx0XHRcdHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZSxcblx0XHRcdGRlc3RpbmF0aW9uLFxuXHRcdFx0ZHVyYXRpb247XG5cblx0XHRkZWNlbGVyYXRpb24gPSBkZWNlbGVyYXRpb24gPT09IHVuZGVmaW5lZCA/IDAuMDAwNiA6IGRlY2VsZXJhdGlvbjtcblxuXHRcdGRlc3RpbmF0aW9uID0gY3VycmVudCArICggc3BlZWQgKiBzcGVlZCApIC8gKCAyICogZGVjZWxlcmF0aW9uICkgKiAoIGRpc3RhbmNlIDwgMCA/IC0xIDogMSApO1xuXHRcdGR1cmF0aW9uID0gc3BlZWQgLyBkZWNlbGVyYXRpb247XG5cblx0XHRpZiAoIGRlc3RpbmF0aW9uIDwgbG93ZXJNYXJnaW4gKSB7XG5cdFx0XHRkZXN0aW5hdGlvbiA9IHdyYXBwZXJTaXplID8gbG93ZXJNYXJnaW4gLSAoIHdyYXBwZXJTaXplIC8gMi41ICogKCBzcGVlZCAvIDggKSApIDogbG93ZXJNYXJnaW47XG5cdFx0XHRkaXN0YW5jZSA9IE1hdGguYWJzKGRlc3RpbmF0aW9uIC0gY3VycmVudCk7XG5cdFx0XHRkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XG5cdFx0fSBlbHNlIGlmICggZGVzdGluYXRpb24gPiAwICkge1xuXHRcdFx0ZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZSA/IHdyYXBwZXJTaXplIC8gMi41ICogKCBzcGVlZCAvIDggKSA6IDA7XG5cdFx0XHRkaXN0YW5jZSA9IE1hdGguYWJzKGN1cnJlbnQpICsgZGVzdGluYXRpb247XG5cdFx0XHRkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGRlc3RpbmF0aW9uOiBNYXRoLnJvdW5kKGRlc3RpbmF0aW9uKSxcblx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvblxuXHRcdH07XG5cdH07XG5cblx0dmFyIF90cmFuc2Zvcm0gPSBfcHJlZml4U3R5bGUoJ3RyYW5zZm9ybScpO1xuXG5cdG1lLmV4dGVuZChtZSwge1xuXHRcdGhhc1RyYW5zZm9ybTogX3RyYW5zZm9ybSAhPT0gZmFsc2UsXG5cdFx0aGFzUGVyc3BlY3RpdmU6IF9wcmVmaXhTdHlsZSgncGVyc3BlY3RpdmUnKSBpbiBfZWxlbWVudFN0eWxlLFxuXHRcdGhhc1RvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csXG5cdFx0aGFzUG9pbnRlcjogISEod2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpLCAvLyBJRTEwIGlzIHByZWZpeGVkXG5cdFx0aGFzVHJhbnNpdGlvbjogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uJykgaW4gX2VsZW1lbnRTdHlsZVxuXHR9KTtcblxuXHQvKlxuXHRUaGlzIHNob3VsZCBmaW5kIGFsbCBBbmRyb2lkIGJyb3dzZXJzIGxvd2VyIHRoYW4gYnVpbGQgNTM1LjE5IChib3RoIHN0b2NrIGJyb3dzZXIgYW5kIHdlYnZpZXcpXG5cdC0gZ2FsYXh5IFMyIGlzIG9rXG4gICAgLSAyLjMuNiA6IGBBcHBsZVdlYktpdC81MzMuMSAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTMzLjFgXG4gICAgLSA0LjAuNCA6IGBBcHBsZVdlYktpdC81MzQuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNC4zMGBcbiAgIC0gZ2FsYXh5IFMzIGlzIGJhZEFuZHJvaWQgKHN0b2NrIGJyb3dlciwgd2VidmlldylcbiAgICAgYEFwcGxlV2ViS2l0LzUzNC4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM0LjMwYFxuICAgLSBnYWxheHkgUzQgaXMgYmFkQW5kcm9pZCAoc3RvY2sgYnJvd2VyLCB3ZWJ2aWV3KVxuICAgICBgQXBwbGVXZWJLaXQvNTM0LjMwIChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzQuMzBgXG4gICAtIGdhbGF4eSBTNSBpcyBPS1xuICAgICBgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzcuMzYgKENocm9tZS8pYFxuICAgLSBnYWxheHkgUzYgaXMgT0tcbiAgICAgYEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2IChDaHJvbWUvKWBcbiAgKi9cblx0bWUuaXNCYWRBbmRyb2lkID0gKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhcHBWZXJzaW9uID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uO1xuXHRcdC8vIEFuZHJvaWQgYnJvd3NlciBpcyBub3QgYSBjaHJvbWUgYnJvd3Nlci5cblx0XHRpZiAoL0FuZHJvaWQvLnRlc3QoYXBwVmVyc2lvbikgJiYgISgvQ2hyb21lXFwvXFxkLy50ZXN0KGFwcFZlcnNpb24pKSkge1xuXHRcdFx0dmFyIHNhZmFyaVZlcnNpb24gPSBhcHBWZXJzaW9uLm1hdGNoKC9TYWZhcmlcXC8oXFxkKy5cXGQpLyk7XG5cdFx0XHRpZihzYWZhcmlWZXJzaW9uICYmIHR5cGVvZiBzYWZhcmlWZXJzaW9uID09PSBcIm9iamVjdFwiICYmIHNhZmFyaVZlcnNpb24ubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQoc2FmYXJpVmVyc2lvblsxXSkgPCA1MzUuMTk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSkoKTtcblxuXHRtZS5leHRlbmQobWUuc3R5bGUgPSB7fSwge1xuXHRcdHRyYW5zZm9ybTogX3RyYW5zZm9ybSxcblx0XHR0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJyksXG5cdFx0dHJhbnNpdGlvbkR1cmF0aW9uOiBfcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25EdXJhdGlvbicpLFxuXHRcdHRyYW5zaXRpb25EZWxheTogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRGVsYXknKSxcblx0XHR0cmFuc2Zvcm1PcmlnaW46IF9wcmVmaXhTdHlsZSgndHJhbnNmb3JtT3JpZ2luJylcblx0fSk7XG5cblx0bWUuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuXHRcdHZhciByZSA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIGMgKyBcIihcXFxcc3wkKVwiKTtcblx0XHRyZXR1cm4gcmUudGVzdChlLmNsYXNzTmFtZSk7XG5cdH07XG5cblx0bWUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuXHRcdGlmICggbWUuaGFzQ2xhc3MoZSwgYykgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG5ld2NsYXNzID0gZS5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblx0XHRuZXdjbGFzcy5wdXNoKGMpO1xuXHRcdGUuY2xhc3NOYW1lID0gbmV3Y2xhc3Muam9pbignICcpO1xuXHR9O1xuXG5cdG1lLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGUsIGMpIHtcblx0XHRpZiAoICFtZS5oYXNDbGFzcyhlLCBjKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjICsgXCIoXFxcXHN8JClcIiwgJ2cnKTtcblx0XHRlLmNsYXNzTmFtZSA9IGUuY2xhc3NOYW1lLnJlcGxhY2UocmUsICcgJyk7XG5cdH07XG5cblx0bWUub2Zmc2V0ID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0dmFyIGxlZnQgPSAtZWwub2Zmc2V0TGVmdCxcblx0XHRcdHRvcCA9IC1lbC5vZmZzZXRUb3A7XG5cblx0XHQvLyBqc2hpbnQgLVcwODRcblx0XHR3aGlsZSAoZWwgPSBlbC5vZmZzZXRQYXJlbnQpIHtcblx0XHRcdGxlZnQgLT0gZWwub2Zmc2V0TGVmdDtcblx0XHRcdHRvcCAtPSBlbC5vZmZzZXRUb3A7XG5cdFx0fVxuXHRcdC8vIGpzaGludCArVzA4NFxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxlZnQ6IGxlZnQsXG5cdFx0XHR0b3A6IHRvcFxuXHRcdH07XG5cdH07XG5cblx0bWUucHJldmVudERlZmF1bHRFeGNlcHRpb24gPSBmdW5jdGlvbiAoZWwsIGV4Y2VwdGlvbnMpIHtcblx0XHRmb3IgKCB2YXIgaSBpbiBleGNlcHRpb25zICkge1xuXHRcdFx0aWYgKCBleGNlcHRpb25zW2ldLnRlc3QoZWxbaV0pICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0bWUuZXh0ZW5kKG1lLmV2ZW50VHlwZSA9IHt9LCB7XG5cdFx0dG91Y2hzdGFydDogMSxcblx0XHR0b3VjaG1vdmU6IDEsXG5cdFx0dG91Y2hlbmQ6IDEsXG5cblx0XHRtb3VzZWRvd246IDIsXG5cdFx0bW91c2Vtb3ZlOiAyLFxuXHRcdG1vdXNldXA6IDIsXG5cblx0XHRwb2ludGVyZG93bjogMyxcblx0XHRwb2ludGVybW92ZTogMyxcblx0XHRwb2ludGVydXA6IDMsXG5cblx0XHRNU1BvaW50ZXJEb3duOiAzLFxuXHRcdE1TUG9pbnRlck1vdmU6IDMsXG5cdFx0TVNQb2ludGVyVXA6IDNcblx0fSk7XG5cblx0bWUuZXh0ZW5kKG1lLmVhc2UgPSB7fSwge1xuXHRcdHF1YWRyYXRpYzoge1xuXHRcdFx0c3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCknLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHJldHVybiBrICogKCAyIC0gayApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2lyY3VsYXI6IHtcblx0XHRcdHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMSwgMC41NywgMC4xLCAxKScsXHQvLyBOb3QgcHJvcGVybHkgXCJjaXJjdWxhclwiIGJ1dCB0aGlzIGxvb2tzIGJldHRlciwgaXQgc2hvdWxkIGJlICgwLjA3NSwgMC44MiwgMC4xNjUsIDEpXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0cmV0dXJuIE1hdGguc3FydCggMSAtICggLS1rICogayApICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRiYWNrOiB7XG5cdFx0XHRzdHlsZTogJ2N1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KScsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0dmFyIGIgPSA0O1xuXHRcdFx0XHRyZXR1cm4gKCBrID0gayAtIDEgKSAqIGsgKiAoICggYiArIDEgKSAqIGsgKyBiICkgKyAxO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ym91bmNlOiB7XG5cdFx0XHRzdHlsZTogJycsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0aWYgKCAoIGsgLz0gMSApIDwgKCAxIC8gMi43NSApICkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblx0XHRcdFx0fSBlbHNlIGlmICggayA8ICggMiAvIDIuNzUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMS41IC8gMi43NSApICkgKiBrICsgMC43NTtcblx0XHRcdFx0fSBlbHNlIGlmICggayA8ICggMi41IC8gMi43NSApICkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjI1IC8gMi43NSApICkgKiBrICsgMC45Mzc1O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjYyNSAvIDIuNzUgKSApICogayArIDAuOTg0Mzc1O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlbGFzdGljOiB7XG5cdFx0XHRzdHlsZTogJycsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0dmFyIGYgPSAwLjIyLFxuXHRcdFx0XHRcdGUgPSAwLjQ7XG5cblx0XHRcdFx0aWYgKCBrID09PSAwICkgeyByZXR1cm4gMDsgfVxuXHRcdFx0XHRpZiAoIGsgPT0gMSApIHsgcmV0dXJuIDE7IH1cblxuXHRcdFx0XHRyZXR1cm4gKCBlICogTWF0aC5wb3coIDIsIC0gMTAgKiBrICkgKiBNYXRoLnNpbiggKCBrIC0gZiAvIDQgKSAqICggMiAqIE1hdGguUEkgKSAvIGYgKSArIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdG1lLnRhcCA9IGZ1bmN0aW9uIChlLCBldmVudE5hbWUpIHtcblx0XHR2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRldi5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcblx0XHRldi5wYWdlWCA9IGUucGFnZVg7XG5cdFx0ZXYucGFnZVkgPSBlLnBhZ2VZO1xuXHRcdGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXYpO1xuXHR9O1xuXG5cdG1lLmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXG5cdFx0XHRldjtcblxuXHRcdGlmICggISgvKFNFTEVDVHxJTlBVVHxURVhUQVJFQSkvaSkudGVzdCh0YXJnZXQudGFnTmFtZSkgKSB7XG5cdFx0XHRldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuXHRcdFx0ZXYuaW5pdE1vdXNlRXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSwgZS52aWV3LCAxLFxuXHRcdFx0XHR0YXJnZXQuc2NyZWVuWCwgdGFyZ2V0LnNjcmVlblksIHRhcmdldC5jbGllbnRYLCB0YXJnZXQuY2xpZW50WSxcblx0XHRcdFx0ZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LFxuXHRcdFx0XHQwLCBudWxsKTtcblxuXHRcdFx0ZXYuX2NvbnN0cnVjdGVkID0gdHJ1ZTtcblx0XHRcdHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIG1lO1xufSkoKTtcbmZ1bmN0aW9uIElTY3JvbGwgKGVsLCBvcHRpb25zKSB7XG5cdHRoaXMud3JhcHBlciA9IHR5cGVvZiBlbCA9PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XG5cdHRoaXMuc2Nyb2xsZXIgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XG5cdHRoaXMuc2Nyb2xsZXJTdHlsZSA9IHRoaXMuc2Nyb2xsZXIuc3R5bGU7XHRcdC8vIGNhY2hlIHN0eWxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcblxuXHR0aGlzLm9wdGlvbnMgPSB7XG5cblx0XHRyZXNpemVTY3JvbGxiYXJzOiB0cnVlLFxuXG5cdFx0bW91c2VXaGVlbFNwZWVkOiAyMCxcblxuXHRcdHNuYXBUaHJlc2hvbGQ6IDAuMzM0LFxuXG4vLyBJTlNFUlQgUE9JTlQ6IE9QVElPTlNcblx0XHRkaXNhYmxlUG9pbnRlciA6ICF1dGlscy5oYXNQb2ludGVyLFxuXHRcdGRpc2FibGVUb3VjaCA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgIXV0aWxzLmhhc1RvdWNoLFxuXHRcdGRpc2FibGVNb3VzZSA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgdXRpbHMuaGFzVG91Y2gsXG5cdFx0c3RhcnRYOiAwLFxuXHRcdHN0YXJ0WTogMCxcblx0XHRzY3JvbGxZOiB0cnVlLFxuXHRcdGRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ6IDUsXG5cdFx0bW9tZW50dW06IHRydWUsXG5cblx0XHRib3VuY2U6IHRydWUsXG5cdFx0Ym91bmNlVGltZTogNjAwLFxuXHRcdGJvdW5jZUVhc2luZzogJycsXG5cblx0XHRwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcblx0XHRwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbjogeyB0YWdOYW1lOiAvXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUKSQvIH0sXG5cblx0XHRIV0NvbXBvc2l0aW5nOiB0cnVlLFxuXHRcdHVzZVRyYW5zaXRpb246IHRydWUsXG5cdFx0dXNlVHJhbnNmb3JtOiB0cnVlLFxuXHRcdGJpbmRUb1dyYXBwZXI6IHR5cGVvZiB3aW5kb3cub25tb3VzZWRvd24gPT09IFwidW5kZWZpbmVkXCJcblx0fTtcblxuXHRmb3IgKCB2YXIgaSBpbiBvcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgb3B0aW9uc1xuXHR0aGlzLnRyYW5zbGF0ZVogPSB0aGlzLm9wdGlvbnMuSFdDb21wb3NpdGluZyAmJiB1dGlscy5oYXNQZXJzcGVjdGl2ZSA/ICcgdHJhbnNsYXRlWigwKScgOiAnJztcblxuXHR0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiA9IHV0aWxzLmhhc1RyYW5zaXRpb24gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb247XG5cdHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gPSB1dGlscy5oYXNUcmFuc2Zvcm0gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybTtcblxuXHR0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoO1xuXHR0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgPSAhdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggJiYgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0O1xuXG5cdC8vIElmIHlvdSB3YW50IGV2ZW50UGFzc3Rocm91Z2ggSSBoYXZlIHRvIGxvY2sgb25lIG9mIHRoZSBheGVzXG5cdHRoaXMub3B0aW9ucy5zY3JvbGxZID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyA/IGZhbHNlIDogdGhpcy5vcHRpb25zLnNjcm9sbFk7XG5cdHRoaXMub3B0aW9ucy5zY3JvbGxYID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ2hvcml6b250YWwnID8gZmFsc2UgOiB0aGlzLm9wdGlvbnMuc2Nyb2xsWDtcblxuXHQvLyBXaXRoIGV2ZW50UGFzc3Rocm91Z2ggd2UgYWxzbyBuZWVkIGxvY2tEaXJlY3Rpb24gbWVjaGFuaXNtXG5cdHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsID0gdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgJiYgIXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoO1xuXHR0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID8gMCA6IHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkO1xuXG5cdHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcgPSB0eXBlb2YgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyA9PSAnc3RyaW5nJyA/IHV0aWxzLmVhc2VbdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZ10gfHwgdXRpbHMuZWFzZS5jaXJjdWxhciA6IHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc7XG5cblx0dGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcgPSB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyA9PT0gdW5kZWZpbmVkID8gNjAgOiB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZztcblxuXHRpZiAoIHRoaXMub3B0aW9ucy50YXAgPT09IHRydWUgKSB7XG5cdFx0dGhpcy5vcHRpb25zLnRhcCA9ICd0YXAnO1xuXHR9XG5cblx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyA9PSAnc2NhbGUnICkge1xuXHRcdHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uID0gZmFsc2U7XG5cdH1cblxuXHR0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24gPyAtMSA6IDE7XG5cbi8vIElOU0VSVCBQT0lOVDogTk9STUFMSVpBVElPTlxuXG5cdC8vIFNvbWUgZGVmYXVsdHNcblx0dGhpcy54ID0gMDtcblx0dGhpcy55ID0gMDtcblx0dGhpcy5kaXJlY3Rpb25YID0gMDtcblx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblx0dGhpcy5fZXZlbnRzID0ge307XG5cbi8vIElOU0VSVCBQT0lOVDogREVGQVVMVFNcblxuXHR0aGlzLl9pbml0KCk7XG5cdHRoaXMucmVmcmVzaCgpO1xuXG5cdHRoaXMuc2Nyb2xsVG8odGhpcy5vcHRpb25zLnN0YXJ0WCwgdGhpcy5vcHRpb25zLnN0YXJ0WSk7XG5cdHRoaXMuZW5hYmxlKCk7XG59XG5cbklTY3JvbGwucHJvdG90eXBlID0ge1xuXHR2ZXJzaW9uOiAnNS4yLjAnLFxuXG5cdF9pbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5faW5pdEV2ZW50cygpO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyB8fCB0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyApIHtcblx0XHRcdHRoaXMuX2luaXRJbmRpY2F0b3JzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubW91c2VXaGVlbCApIHtcblx0XHRcdHRoaXMuX2luaXRXaGVlbCgpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnNuYXAgKSB7XG5cdFx0XHR0aGlzLl9pbml0U25hcCgpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzICkge1xuXHRcdFx0dGhpcy5faW5pdEtleXMoKTtcblx0XHR9XG5cbi8vIElOU0VSVCBQT0lOVDogX2luaXRcblxuXHR9LFxuXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLl9pbml0RXZlbnRzKHRydWUpO1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuIFx0XHR0aGlzLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xuXHRcdHRoaXMuX2V4ZWNFdmVudCgnZGVzdHJveScpO1xuXHR9LFxuXG5cdF90cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggZS50YXJnZXQgIT0gdGhpcy5zY3JvbGxlciB8fCAhdGhpcy5pc0luVHJhbnNpdGlvbiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSgpO1xuXHRcdGlmICggIXRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH1cblx0fSxcblxuXHRfc3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0Ly8gUmVhY3QgdG8gbGVmdCBtb3VzZSBidXR0b24gb25seVxuXHRcdGlmICggdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT0gMSApIHtcblx0XHQgIC8vIGZvciBidXR0b24gcHJvcGVydHlcblx0XHQgIC8vIGh0dHA6Ly91bml4cGFwYS5jb20vanMvbW91c2UuaHRtbFxuXHRcdCAgdmFyIGJ1dHRvbjtcblx0ICAgIGlmICghZS53aGljaCkge1xuXHQgICAgICAvKiBJRSBjYXNlICovXG5cdCAgICAgIGJ1dHRvbiA9IChlLmJ1dHRvbiA8IDIpID8gMCA6XG5cdCAgICAgICAgICAgICAgICgoZS5idXR0b24gPT0gNCkgPyAxIDogMik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvKiBBbGwgb3RoZXJzICovXG5cdCAgICAgIGJ1dHRvbiA9IGUuYnV0dG9uO1xuXHQgICAgfVxuXHRcdFx0aWYgKCBidXR0b24gIT09IDAgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgKHRoaXMuaW5pdGlhdGVkICYmIHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgJiYgIXV0aWxzLmlzQmFkQW5kcm9pZCAmJiAhdXRpbHMucHJldmVudERlZmF1bHRFeGNlcHRpb24oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0dmFyIHBvaW50ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSxcblx0XHRcdHBvcztcblxuXHRcdHRoaXMuaW5pdGlhdGVkXHQ9IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdO1xuXHRcdHRoaXMubW92ZWRcdFx0PSBmYWxzZTtcblx0XHR0aGlzLmRpc3RYXHRcdD0gMDtcblx0XHR0aGlzLmRpc3RZXHRcdD0gMDtcblx0XHR0aGlzLmRpcmVjdGlvblggPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uWSA9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAwO1xuXG5cdFx0dGhpcy5zdGFydFRpbWUgPSB1dGlscy5nZXRUaW1lKCk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG5cdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSgpO1xuXHRcdFx0dGhpcy5pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuXHRcdFx0cG9zID0gdGhpcy5nZXRDb21wdXRlZFBvc2l0aW9uKCk7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGUoTWF0aC5yb3VuZChwb3MueCksIE1hdGgucm91bmQocG9zLnkpKTtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0fSBlbHNlIGlmICggIXRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNBbmltYXRpbmcgKSB7XG5cdFx0XHR0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhcnRYICAgID0gdGhpcy54O1xuXHRcdHRoaXMuc3RhcnRZICAgID0gdGhpcy55O1xuXHRcdHRoaXMuYWJzU3RhcnRYID0gdGhpcy54O1xuXHRcdHRoaXMuYWJzU3RhcnRZID0gdGhpcy55O1xuXHRcdHRoaXMucG9pbnRYICAgID0gcG9pbnQucGFnZVg7XG5cdFx0dGhpcy5wb2ludFkgICAgPSBwb2ludC5wYWdlWTtcblxuXHRcdHRoaXMuX2V4ZWNFdmVudCgnYmVmb3JlU2Nyb2xsU3RhcnQnKTtcblx0fSxcblxuXHRfbW92ZTogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICkge1x0Ly8gaW5jcmVhc2VzIHBlcmZvcm1hbmNlIG9uIEFuZHJvaWQ/IFRPRE86IGNoZWNrIVxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHZhciBwb2ludFx0XHQ9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUsXG5cdFx0XHRkZWx0YVhcdFx0PSBwb2ludC5wYWdlWCAtIHRoaXMucG9pbnRYLFxuXHRcdFx0ZGVsdGFZXHRcdD0gcG9pbnQucGFnZVkgLSB0aGlzLnBvaW50WSxcblx0XHRcdHRpbWVzdGFtcFx0PSB1dGlscy5nZXRUaW1lKCksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0YWJzRGlzdFgsIGFic0Rpc3RZO1xuXG5cdFx0dGhpcy5wb2ludFhcdFx0PSBwb2ludC5wYWdlWDtcblx0XHR0aGlzLnBvaW50WVx0XHQ9IHBvaW50LnBhZ2VZO1xuXG5cdFx0dGhpcy5kaXN0WFx0XHQrPSBkZWx0YVg7XG5cdFx0dGhpcy5kaXN0WVx0XHQrPSBkZWx0YVk7XG5cdFx0YWJzRGlzdFhcdFx0PSBNYXRoLmFicyh0aGlzLmRpc3RYKTtcblx0XHRhYnNEaXN0WVx0XHQ9IE1hdGguYWJzKHRoaXMuZGlzdFkpO1xuXG5cdFx0Ly8gV2UgbmVlZCB0byBtb3ZlIGF0IGxlYXN0IDEwIHBpeGVscyBmb3IgdGhlIHNjcm9sbGluZyB0byBpbml0aWF0ZVxuXHRcdGlmICggdGltZXN0YW1wIC0gdGhpcy5lbmRUaW1lID4gMzAwICYmIChhYnNEaXN0WCA8IDEwICYmIGFic0Rpc3RZIDwgMTApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIElmIHlvdSBhcmUgc2Nyb2xsaW5nIGluIG9uZSBkaXJlY3Rpb24gbG9jayB0aGUgb3RoZXJcblx0XHRpZiAoICF0aGlzLmRpcmVjdGlvbkxvY2tlZCAmJiAhdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgKSB7XG5cdFx0XHRpZiAoIGFic0Rpc3RYID4gYWJzRGlzdFkgKyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCApIHtcblx0XHRcdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAnaCc7XHRcdC8vIGxvY2sgaG9yaXpvbnRhbGx5XG5cdFx0XHR9IGVsc2UgaWYgKCBhYnNEaXN0WSA+PSBhYnNEaXN0WCArIHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkICkge1xuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICd2JztcdFx0Ly8gbG9jayB2ZXJ0aWNhbGx5XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICduJztcdFx0Ly8gbm8gbG9ja1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT0gJ2gnICkge1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAndmVydGljYWwnICkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAnaG9yaXpvbnRhbCcgKSB7XG5cdFx0XHRcdHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZGVsdGFZID0gMDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PSAndicgKSB7XG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICdob3Jpem9udGFsJyApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyApIHtcblx0XHRcdFx0dGhpcy5pbml0aWF0ZWQgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YVggPSAwO1xuXHRcdH1cblxuXHRcdGRlbHRhWCA9IHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCA/IGRlbHRhWCA6IDA7XG5cdFx0ZGVsdGFZID0gdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCA/IGRlbHRhWSA6IDA7XG5cblx0XHRuZXdYID0gdGhpcy54ICsgZGVsdGFYO1xuXHRcdG5ld1kgPSB0aGlzLnkgKyBkZWx0YVk7XG5cblx0XHQvLyBTbG93IGRvd24gaWYgb3V0c2lkZSBvZiB0aGUgYm91bmRhcmllc1xuXHRcdGlmICggbmV3WCA+IDAgfHwgbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcblx0XHRcdG5ld1ggPSB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy54ICsgZGVsdGFYIC8gMyA6IG5ld1ggPiAwID8gMCA6IHRoaXMubWF4U2Nyb2xsWDtcblx0XHR9XG5cdFx0aWYgKCBuZXdZID4gMCB8fCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0bmV3WSA9IHRoaXMub3B0aW9ucy5ib3VuY2UgPyB0aGlzLnkgKyBkZWx0YVkgLyAzIDogbmV3WSA+IDAgPyAwIDogdGhpcy5tYXhTY3JvbGxZO1xuXHRcdH1cblxuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IGRlbHRhWCA+IDAgPyAtMSA6IGRlbHRhWCA8IDAgPyAxIDogMDtcblx0XHR0aGlzLmRpcmVjdGlvblkgPSBkZWx0YVkgPiAwID8gLTEgOiBkZWx0YVkgPCAwID8gMSA6IDA7XG5cblx0XHRpZiAoICF0aGlzLm1vdmVkICkge1xuXHRcdFx0dGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxTdGFydCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubW92ZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5fdHJhbnNsYXRlKG5ld1gsIG5ld1kpO1xuXG4vKiBSRVBMQUNFIFNUQVJUOiBfbW92ZSAqL1xuXG5cdFx0aWYgKCB0aW1lc3RhbXAgLSB0aGlzLnN0YXJ0VGltZSA+IDMwMCApIHtcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuXHRcdFx0dGhpcy5zdGFydFggPSB0aGlzLng7XG5cdFx0XHR0aGlzLnN0YXJ0WSA9IHRoaXMueTtcblx0XHR9XG5cbi8qIFJFUExBQ0UgRU5EOiBfbW92ZSAqL1xuXG5cdH0sXG5cblx0X2VuZDogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICYmICF1dGlscy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbihlLnRhcmdldCwgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHR2YXIgcG9pbnQgPSBlLmNoYW5nZWRUb3VjaGVzID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUsXG5cdFx0XHRtb21lbnR1bVgsXG5cdFx0XHRtb21lbnR1bVksXG5cdFx0XHRkdXJhdGlvbiA9IHV0aWxzLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lLFxuXHRcdFx0bmV3WCA9IE1hdGgucm91bmQodGhpcy54KSxcblx0XHRcdG5ld1kgPSBNYXRoLnJvdW5kKHRoaXMueSksXG5cdFx0XHRkaXN0YW5jZVggPSBNYXRoLmFicyhuZXdYIC0gdGhpcy5zdGFydFgpLFxuXHRcdFx0ZGlzdGFuY2VZID0gTWF0aC5hYnMobmV3WSAtIHRoaXMuc3RhcnRZKSxcblx0XHRcdHRpbWUgPSAwLFxuXHRcdFx0ZWFzaW5nID0gJyc7XG5cblx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gMDtcblx0XHR0aGlzLmluaXRpYXRlZCA9IDA7XG5cdFx0dGhpcy5lbmRUaW1lID0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0Ly8gcmVzZXQgaWYgd2UgYXJlIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcblx0XHRpZiAoIHRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZKTtcdC8vIGVuc3VyZXMgdGhhdCB0aGUgbGFzdCBwb3NpdGlvbiBpcyByb3VuZGVkXG5cblx0XHQvLyB3ZSBzY3JvbGxlZCBsZXNzIHRoYW4gMTAgcGl4ZWxzXG5cdFx0aWYgKCAhdGhpcy5tb3ZlZCApIHtcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnRhcCApIHtcblx0XHRcdFx0dXRpbHMudGFwKGUsIHRoaXMub3B0aW9ucy50YXApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5jbGljayApIHtcblx0XHRcdFx0dXRpbHMuY2xpY2soZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsQ2FuY2VsJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9ldmVudHMuZmxpY2sgJiYgZHVyYXRpb24gPCAyMDAgJiYgZGlzdGFuY2VYIDwgMTAwICYmIGRpc3RhbmNlWSA8IDEwMCApIHtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnZmxpY2snKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBzdGFydCBtb21lbnR1bSBhbmltYXRpb24gaWYgbmVlZGVkXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubW9tZW50dW0gJiYgZHVyYXRpb24gPCAzMDAgKSB7XG5cdFx0XHRtb21lbnR1bVggPSB0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgPyB1dGlscy5tb21lbnR1bSh0aGlzLngsIHRoaXMuc3RhcnRYLCBkdXJhdGlvbiwgdGhpcy5tYXhTY3JvbGxYLCB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy53cmFwcGVyV2lkdGggOiAwLCB0aGlzLm9wdGlvbnMuZGVjZWxlcmF0aW9uKSA6IHsgZGVzdGluYXRpb246IG5ld1gsIGR1cmF0aW9uOiAwIH07XG5cdFx0XHRtb21lbnR1bVkgPSB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsID8gdXRpbHMubW9tZW50dW0odGhpcy55LCB0aGlzLnN0YXJ0WSwgZHVyYXRpb24sIHRoaXMubWF4U2Nyb2xsWSwgdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMud3JhcHBlckhlaWdodCA6IDAsIHRoaXMub3B0aW9ucy5kZWNlbGVyYXRpb24pIDogeyBkZXN0aW5hdGlvbjogbmV3WSwgZHVyYXRpb246IDAgfTtcblx0XHRcdG5ld1ggPSBtb21lbnR1bVguZGVzdGluYXRpb247XG5cdFx0XHRuZXdZID0gbW9tZW50dW1ZLmRlc3RpbmF0aW9uO1xuXHRcdFx0dGltZSA9IE1hdGgubWF4KG1vbWVudHVtWC5kdXJhdGlvbiwgbW9tZW50dW1ZLmR1cmF0aW9uKTtcblx0XHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSAxO1xuXHRcdH1cblxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcCApIHtcblx0XHRcdHZhciBzbmFwID0gdGhpcy5fbmVhcmVzdFNuYXAobmV3WCwgbmV3WSk7XG5cdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gc25hcDtcblx0XHRcdHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuXHRcdFx0XHRcdE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnMobmV3WCAtIHNuYXAueCksIDEwMDApLFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnMobmV3WSAtIHNuYXAueSksIDEwMDApXG5cdFx0XHRcdFx0KSwgMzAwKTtcblx0XHRcdG5ld1ggPSBzbmFwLng7XG5cdFx0XHRuZXdZID0gc25hcC55O1xuXG5cdFx0XHR0aGlzLmRpcmVjdGlvblggPSAwO1xuXHRcdFx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblx0XHRcdGVhc2luZyA9IHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc7XG5cdFx0fVxuXG4vLyBJTlNFUlQgUE9JTlQ6IF9lbmRcblxuXHRcdGlmICggbmV3WCAhPSB0aGlzLnggfHwgbmV3WSAhPSB0aGlzLnkgKSB7XG5cdFx0XHQvLyBjaGFuZ2UgZWFzaW5nIGZ1bmN0aW9uIHdoZW4gc2Nyb2xsZXIgZ29lcyBvdXQgb2YgdGhlIGJvdW5kYXJpZXNcblx0XHRcdGlmICggbmV3WCA+IDAgfHwgbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCB8fCBuZXdZID4gMCB8fCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0XHRlYXNpbmcgPSB1dGlscy5lYXNlLnF1YWRyYXRpYztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCB0aW1lLCBlYXNpbmcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdH0sXG5cblx0X3Jlc2l6ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuXG5cdFx0dGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGF0LnJlZnJlc2goKTtcblx0XHR9LCB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyk7XG5cdH0sXG5cblx0cmVzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHRpbWUpIHtcblx0XHR2YXIgeCA9IHRoaXMueCxcblx0XHRcdHkgPSB0aGlzLnk7XG5cblx0XHR0aW1lID0gdGltZSB8fCAwO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsIHx8IHRoaXMueCA+IDAgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLnggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHR4ID0gdGhpcy5tYXhTY3JvbGxYO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgfHwgdGhpcy55ID4gMCApIHtcblx0XHRcdHkgPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHRoaXMueSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdHkgPSB0aGlzLm1heFNjcm9sbFk7XG5cdFx0fVxuXG5cdFx0aWYgKCB4ID09IHRoaXMueCAmJiB5ID09IHRoaXMueSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcpO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0ZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9LFxuXG5cdGVuYWJsZTogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH0sXG5cblx0cmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZiA9IHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQ7XHRcdC8vIEZvcmNlIHJlZmxvd1xuXG5cdFx0dGhpcy53cmFwcGVyV2lkdGhcdD0gdGhpcy53cmFwcGVyLmNsaWVudFdpZHRoO1xuXHRcdHRoaXMud3JhcHBlckhlaWdodFx0PSB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXG4vKiBSRVBMQUNFIFNUQVJUOiByZWZyZXNoICovXG5cblx0XHR0aGlzLnNjcm9sbGVyV2lkdGhcdD0gdGhpcy5zY3JvbGxlci5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLnNjcm9sbGVySGVpZ2h0XHQ9IHRoaXMuc2Nyb2xsZXIub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0dGhpcy5tYXhTY3JvbGxYXHRcdD0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLnNjcm9sbGVyV2lkdGg7XG5cdFx0dGhpcy5tYXhTY3JvbGxZXHRcdD0gdGhpcy53cmFwcGVySGVpZ2h0IC0gdGhpcy5zY3JvbGxlckhlaWdodDtcblxuLyogUkVQTEFDRSBFTkQ6IHJlZnJlc2ggKi9cblxuXHRcdHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbFx0PSB0aGlzLm9wdGlvbnMuc2Nyb2xsWCAmJiB0aGlzLm1heFNjcm9sbFggPCAwO1xuXHRcdHRoaXMuaGFzVmVydGljYWxTY3JvbGxcdFx0PSB0aGlzLm9wdGlvbnMuc2Nyb2xsWSAmJiB0aGlzLm1heFNjcm9sbFkgPCAwO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsICkge1xuXHRcdFx0dGhpcy5tYXhTY3JvbGxYID0gMDtcblx0XHRcdHRoaXMuc2Nyb2xsZXJXaWR0aCA9IHRoaXMud3JhcHBlcldpZHRoO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR0aGlzLm1heFNjcm9sbFkgPSAwO1xuXHRcdFx0dGhpcy5zY3JvbGxlckhlaWdodCA9IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHR9XG5cblx0XHR0aGlzLmVuZFRpbWUgPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblxuXHRcdHRoaXMud3JhcHBlck9mZnNldCA9IHV0aWxzLm9mZnNldCh0aGlzLndyYXBwZXIpO1xuXG5cdFx0dGhpcy5fZXhlY0V2ZW50KCdyZWZyZXNoJyk7XG5cblx0XHR0aGlzLnJlc2V0UG9zaXRpb24oKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfcmVmcmVzaFxuXG5cdH0sXG5cblx0b246IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcblx0XHRcdHRoaXMuX2V2ZW50c1t0eXBlXSA9IFtdO1xuXHRcdH1cblxuXHRcdHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGZuKTtcblx0fSxcblxuXHRvZmY6IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgaW5kZXggPSB0aGlzLl9ldmVudHNbdHlwZV0uaW5kZXhPZihmbik7XG5cblx0XHRpZiAoIGluZGV4ID4gLTEgKSB7XG5cdFx0XHR0aGlzLl9ldmVudHNbdHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH0sXG5cblx0X2V4ZWNFdmVudDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRpZiAoICF0aGlzLl9ldmVudHNbdHlwZV0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0bCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG5cblx0XHRpZiAoICFsICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdHRoaXMuX2V2ZW50c1t0eXBlXVtpXS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdH1cblx0fSxcblxuXHRzY3JvbGxCeTogZnVuY3Rpb24gKHgsIHksIHRpbWUsIGVhc2luZykge1xuXHRcdHggPSB0aGlzLnggKyB4O1xuXHRcdHkgPSB0aGlzLnkgKyB5O1xuXHRcdHRpbWUgPSB0aW1lIHx8IDA7XG5cblx0XHR0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0c2Nyb2xsVG86IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcblx0XHRlYXNpbmcgPSBlYXNpbmcgfHwgdXRpbHMuZWFzZS5jaXJjdWxhcjtcblxuXHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aW1lID4gMDtcblx0XHR2YXIgdHJhbnNpdGlvblR5cGUgPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiBlYXNpbmcuc3R5bGU7XG5cdFx0aWYgKCAhdGltZSB8fCB0cmFuc2l0aW9uVHlwZSApIHtcblx0XHRcdFx0aWYodHJhbnNpdGlvblR5cGUpIHtcblx0XHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24oZWFzaW5nLnN0eWxlKTtcblx0XHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSh0aW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlKHgsIHkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9hbmltYXRlKHgsIHksIHRpbWUsIGVhc2luZy5mbik7XG5cdFx0fVxuXHR9LFxuXG5cdHNjcm9sbFRvRWxlbWVudDogZnVuY3Rpb24gKGVsLCB0aW1lLCBvZmZzZXRYLCBvZmZzZXRZLCBlYXNpbmcpIHtcblx0XHRlbCA9IGVsLm5vZGVUeXBlID8gZWwgOiB0aGlzLnNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXG5cdFx0aWYgKCAhZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHBvcyA9IHV0aWxzLm9mZnNldChlbCk7XG5cblx0XHRwb3MubGVmdCAtPSB0aGlzLndyYXBwZXJPZmZzZXQubGVmdDtcblx0XHRwb3MudG9wICAtPSB0aGlzLndyYXBwZXJPZmZzZXQudG9wO1xuXG5cdFx0Ly8gaWYgb2Zmc2V0WC9ZIGFyZSB0cnVlIHdlIGNlbnRlciB0aGUgZWxlbWVudCB0byB0aGUgc2NyZWVuXG5cdFx0aWYgKCBvZmZzZXRYID09PSB0cnVlICkge1xuXHRcdFx0b2Zmc2V0WCA9IE1hdGgucm91bmQoZWwub2Zmc2V0V2lkdGggLyAyIC0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoIC8gMik7XG5cdFx0fVxuXHRcdGlmICggb2Zmc2V0WSA9PT0gdHJ1ZSApIHtcblx0XHRcdG9mZnNldFkgPSBNYXRoLnJvdW5kKGVsLm9mZnNldEhlaWdodCAvIDIgLSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMik7XG5cdFx0fVxuXG5cdFx0cG9zLmxlZnQgLT0gb2Zmc2V0WCB8fCAwO1xuXHRcdHBvcy50b3AgIC09IG9mZnNldFkgfHwgMDtcblxuXHRcdHBvcy5sZWZ0ID0gcG9zLmxlZnQgPiAwID8gMCA6IHBvcy5sZWZ0IDwgdGhpcy5tYXhTY3JvbGxYID8gdGhpcy5tYXhTY3JvbGxYIDogcG9zLmxlZnQ7XG5cdFx0cG9zLnRvcCAgPSBwb3MudG9wICA+IDAgPyAwIDogcG9zLnRvcCAgPCB0aGlzLm1heFNjcm9sbFkgPyB0aGlzLm1heFNjcm9sbFkgOiBwb3MudG9wO1xuXG5cdFx0dGltZSA9IHRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aW1lID09PSBudWxsIHx8IHRpbWUgPT09ICdhdXRvJyA/IE1hdGgubWF4KE1hdGguYWJzKHRoaXMueC1wb3MubGVmdCksIE1hdGguYWJzKHRoaXMueS1wb3MudG9wKSkgOiB0aW1lO1xuXG5cdFx0dGhpcy5zY3JvbGxUbyhwb3MubGVmdCwgcG9zLnRvcCwgdGltZSwgZWFzaW5nKTtcblx0fSxcblxuXHRfdHJhbnNpdGlvblRpbWU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblxuXHRcdHZhciBkdXJhdGlvblByb3AgPSB1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247XG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSB0aW1lICsgJ21zJztcblxuXHRcdGlmICggIXRpbWUgJiYgdXRpbHMuaXNCYWRBbmRyb2lkICkge1xuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMC4wMDAxbXMnO1xuXHRcdFx0Ly8gcmVtb3ZlIDAuMDAwMW1zXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRyQUYoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHNlbGYuc2Nyb2xsZXJTdHlsZVtkdXJhdGlvblByb3BdID09PSAnMC4wMDAxbXMnKSB7XG5cdFx0XHRcdFx0c2VsZi5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMHMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblxuXHRcdGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcnNbaV0udHJhbnNpdGlvblRpbWUodGltZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1lXG5cblx0fSxcblxuXHRfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBmdW5jdGlvbiAoZWFzaW5nKSB7XG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XG5cblxuXHRcdGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcnNbaV0udHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKGVhc2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvblxuXG5cdH0sXG5cblx0X3RyYW5zbGF0ZTogZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG5cbi8qIFJFUExBQ0UgU1RBUlQ6IF90cmFuc2xhdGUgKi9cblxuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCcgKyB5ICsgJ3B4KScgKyB0aGlzLnRyYW5zbGF0ZVo7XG5cbi8qIFJFUExBQ0UgRU5EOiBfdHJhbnNsYXRlICovXG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0eCA9IE1hdGgucm91bmQoeCk7XG5cdFx0XHR5ID0gTWF0aC5yb3VuZCh5KTtcblx0XHRcdHRoaXMuc2Nyb2xsZXJTdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0XHR0aGlzLnNjcm9sbGVyU3R5bGUudG9wID0geSArICdweCc7XG5cdFx0fVxuXG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXG5cblx0aWYgKCB0aGlzLmluZGljYXRvcnMgKSB7XG5cdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JzW2ldLnVwZGF0ZVBvc2l0aW9uKCk7XG5cdFx0fVxuXHR9XG5cblxuLy8gSU5TRVJUIFBPSU5UOiBfdHJhbnNsYXRlXG5cblx0fSxcblxuXHRfaW5pdEV2ZW50czogZnVuY3Rpb24gKHJlbW92ZSkge1xuXHRcdHZhciBldmVudFR5cGUgPSByZW1vdmUgPyB1dGlscy5yZW1vdmVFdmVudCA6IHV0aWxzLmFkZEV2ZW50LFxuXHRcdFx0dGFyZ2V0ID0gdGhpcy5vcHRpb25zLmJpbmRUb1dyYXBwZXIgPyB0aGlzLndyYXBwZXIgOiB3aW5kb3c7XG5cblx0XHRldmVudFR5cGUod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzKTtcblx0XHRldmVudFR5cGUod2luZG93LCAncmVzaXplJywgdGhpcyk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5jbGljayApIHtcblx0XHRcdGV2ZW50VHlwZSh0aGlzLndyYXBwZXIsICdjbGljaycsIHRoaXMsIHRydWUpO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlTW91c2UgKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCAnbW91c2Vkb3duJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAnbW91c2Vtb3ZlJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAnbW91c2VjYW5jZWwnLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICdtb3VzZXVwJywgdGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKCB1dGlscy5oYXNQb2ludGVyICYmICF0aGlzLm9wdGlvbnMuZGlzYWJsZVBvaW50ZXIgKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJkb3duJyksIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmNhbmNlbCcpLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcnVwJyksIHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmICggdXRpbHMuaGFzVG91Y2ggJiYgIXRoaXMub3B0aW9ucy5kaXNhYmxlVG91Y2ggKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ3RvdWNobW92ZScsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAndG91Y2hlbmQnLCB0aGlzKTtcblx0XHR9XG5cblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ3RyYW5zaXRpb25lbmQnLCB0aGlzKTtcblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0aGlzKTtcblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ29UcmFuc2l0aW9uRW5kJywgdGhpcyk7XG5cdFx0ZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICdNU1RyYW5zaXRpb25FbmQnLCB0aGlzKTtcblx0fSxcblxuXHRnZXRDb21wdXRlZFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG1hdHJpeCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuc2Nyb2xsZXIsIG51bGwpLFxuXHRcdFx0eCwgeTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybSApIHtcblx0XHRcdG1hdHJpeCA9IG1hdHJpeFt1dGlscy5zdHlsZS50cmFuc2Zvcm1dLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XG5cdFx0XHR4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XG5cdFx0XHR5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHggPSArbWF0cml4LmxlZnQucmVwbGFjZSgvW14tXFxkLl0vZywgJycpO1xuXHRcdFx0eSA9ICttYXRyaXgudG9wLnJlcGxhY2UoL1teLVxcZC5dL2csICcnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4geyB4OiB4LCB5OiB5IH07XG5cdH0sXG5cdF9pbml0SW5kaWNhdG9yczogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBpbnRlcmFjdGl2ZSA9IHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZVNjcm9sbGJhcnMsXG5cdFx0XHRjdXN0b21TdHlsZSA9IHR5cGVvZiB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyAhPSAnc3RyaW5nJyxcblx0XHRcdGluZGljYXRvcnMgPSBbXSxcblx0XHRcdGluZGljYXRvcjtcblxuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdHRoaXMuaW5kaWNhdG9ycyA9IFtdO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyApIHtcblx0XHRcdC8vIFZlcnRpY2FsIHNjcm9sbGJhclxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsWSApIHtcblx0XHRcdFx0aW5kaWNhdG9yID0ge1xuXHRcdFx0XHRcdGVsOiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyKCd2JywgaW50ZXJhY3RpdmUsIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzKSxcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZTogaW50ZXJhY3RpdmUsXG5cdFx0XHRcdFx0ZGVmYXVsdFNjcm9sbGJhcnM6IHRydWUsXG5cdFx0XHRcdFx0Y3VzdG9tU3R5bGU6IGN1c3RvbVN0eWxlLFxuXHRcdFx0XHRcdHJlc2l6ZTogdGhpcy5vcHRpb25zLnJlc2l6ZVNjcm9sbGJhcnMsXG5cdFx0XHRcdFx0c2hyaW5rOiB0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRmYWRlOiB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMsXG5cdFx0XHRcdFx0bGlzdGVuWDogZmFsc2Vcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yLmVsKTtcblx0XHRcdFx0aW5kaWNhdG9ycy5wdXNoKGluZGljYXRvcik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhvcml6b250YWwgc2Nyb2xsYmFyXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zY3JvbGxYICkge1xuXHRcdFx0XHRpbmRpY2F0b3IgPSB7XG5cdFx0XHRcdFx0ZWw6IGNyZWF0ZURlZmF1bHRTY3JvbGxiYXIoJ2gnLCBpbnRlcmFjdGl2ZSwgdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMpLFxuXHRcdFx0XHRcdGludGVyYWN0aXZlOiBpbnRlcmFjdGl2ZSxcblx0XHRcdFx0XHRkZWZhdWx0U2Nyb2xsYmFyczogdHJ1ZSxcblx0XHRcdFx0XHRjdXN0b21TdHlsZTogY3VzdG9tU3R5bGUsXG5cdFx0XHRcdFx0cmVzaXplOiB0aGlzLm9wdGlvbnMucmVzaXplU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRzaHJpbms6IHRoaXMub3B0aW9ucy5zaHJpbmtTY3JvbGxiYXJzLFxuXHRcdFx0XHRcdGZhZGU6IHRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRsaXN0ZW5ZOiBmYWxzZVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChpbmRpY2F0b3IuZWwpO1xuXHRcdFx0XHRpbmRpY2F0b3JzLnB1c2goaW5kaWNhdG9yKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Ly8gVE9ETzogY2hlY2sgY29uY2F0IGNvbXBhdGliaWxpdHlcblx0XHRcdGluZGljYXRvcnMgPSBpbmRpY2F0b3JzLmNvbmNhdCh0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyk7XG5cdFx0fVxuXG5cdFx0Zm9yICggdmFyIGkgPSBpbmRpY2F0b3JzLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9ycy5wdXNoKCBuZXcgSW5kaWNhdG9yKHRoaXMsIGluZGljYXRvcnNbaV0pICk7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogY2hlY2sgaWYgd2UgY2FuIHVzZSBhcnJheS5tYXAgKHdpZGUgY29tcGF0aWJpbGl0eSBhbmQgcGVyZm9ybWFuY2UgaXNzdWVzKVxuXHRcdGZ1bmN0aW9uIF9pbmRpY2F0b3JzTWFwIChmbikge1xuXHRcdFx0aWYgKHRoYXQuaW5kaWNhdG9ycykge1xuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IHRoYXQuaW5kaWNhdG9ycy5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0Zm4uY2FsbCh0aGF0LmluZGljYXRvcnNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMgKSB7XG5cdFx0XHR0aGlzLm9uKCdzY3JvbGxFbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF9pbmRpY2F0b3JzTWFwKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLmZhZGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5vbignc2Nyb2xsQ2FuY2VsJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5mYWRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oJ3Njcm9sbFN0YXJ0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5mYWRlKDEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLm9uKCdiZWZvcmVTY3JvbGxTdGFydCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0X2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRoaXMuZmFkZSgxLCB0cnVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblxuXHRcdHRoaXMub24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRoaXMucmVmcmVzaCgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0X2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRkZWxldGUgdGhpcy5pbmRpY2F0b3JzO1xuXHRcdH0pO1xuXHR9LFxuXG5cdF9pbml0V2hlZWw6IGZ1bmN0aW9uICgpIHtcblx0XHR1dGlscy5hZGRFdmVudCh0aGlzLndyYXBwZXIsICd3aGVlbCcsIHRoaXMpO1xuXHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMud3JhcHBlciwgJ21vdXNld2hlZWwnLCB0aGlzKTtcblx0XHR1dGlscy5hZGRFdmVudCh0aGlzLndyYXBwZXIsICdET01Nb3VzZVNjcm9sbCcsIHRoaXMpO1xuXG5cdFx0dGhpcy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLndoZWVsVGltZW91dCk7XG5cdFx0XHR0aGlzLndoZWVsVGltZW91dCA9IG51bGw7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh0aGlzLndyYXBwZXIsICd3aGVlbCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy53cmFwcGVyLCAnbW91c2V3aGVlbCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy53cmFwcGVyLCAnRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcblx0XHR9KTtcblx0fSxcblxuXHRfd2hlZWw6IGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciB3aGVlbERlbHRhWCwgd2hlZWxEZWx0YVksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0dGhhdCA9IHRoaXM7XG5cblx0XHRpZiAoIHRoaXMud2hlZWxUaW1lb3V0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR0aGF0Ll9leGVjRXZlbnQoJ3Njcm9sbFN0YXJ0Jyk7XG5cdFx0fVxuXG5cdFx0Ly8gRXhlY3V0ZSB0aGUgc2Nyb2xsRW5kIGV2ZW50IGFmdGVyIDQwMG1zIHRoZSB3aGVlbCBzdG9wcGVkIHNjcm9sbGluZ1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLndoZWVsVGltZW91dCk7XG5cdFx0dGhpcy53aGVlbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmKCF0aGF0Lm9wdGlvbnMuc25hcCkge1xuXHRcdFx0XHR0aGF0Ll9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdFx0fVxuXHRcdFx0dGhhdC53aGVlbFRpbWVvdXQgPSB1bmRlZmluZWQ7XG5cdFx0fSwgNDAwKTtcblxuXHRcdGlmICggJ2RlbHRhWCcgaW4gZSApIHtcblx0XHRcdGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xuXHRcdFx0XHR3aGVlbERlbHRhWCA9IC1lLmRlbHRhWCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG5cdFx0XHRcdHdoZWVsRGVsdGFZID0gLWUuZGVsdGFZICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoZWVsRGVsdGFYID0gLWUuZGVsdGFYO1xuXHRcdFx0XHR3aGVlbERlbHRhWSA9IC1lLmRlbHRhWTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCAnd2hlZWxEZWx0YVgnIGluIGUgKSB7XG5cdFx0XHR3aGVlbERlbHRhWCA9IGUud2hlZWxEZWx0YVggLyAxMjAgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuXHRcdFx0d2hlZWxEZWx0YVkgPSBlLndoZWVsRGVsdGFZIC8gMTIwICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcblx0XHR9IGVsc2UgaWYgKCAnd2hlZWxEZWx0YScgaW4gZSApIHtcblx0XHRcdHdoZWVsRGVsdGFYID0gd2hlZWxEZWx0YVkgPSBlLndoZWVsRGVsdGEgLyAxMjAgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoICdkZXRhaWwnIGluIGUgKSB7XG5cdFx0XHR3aGVlbERlbHRhWCA9IHdoZWVsRGVsdGFZID0gLWUuZGV0YWlsIC8gMyAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aGVlbERlbHRhWCAqPSB0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb247XG5cdFx0d2hlZWxEZWx0YVkgKj0gdGhpcy5vcHRpb25zLmludmVydFdoZWVsRGlyZWN0aW9uO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdHdoZWVsRGVsdGFYID0gd2hlZWxEZWx0YVk7XG5cdFx0XHR3aGVlbERlbHRhWSA9IDA7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcCApIHtcblx0XHRcdG5ld1ggPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYO1xuXHRcdFx0bmV3WSA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVk7XG5cblx0XHRcdGlmICggd2hlZWxEZWx0YVggPiAwICkge1xuXHRcdFx0XHRuZXdYLS07XG5cdFx0XHR9IGVsc2UgaWYgKCB3aGVlbERlbHRhWCA8IDAgKSB7XG5cdFx0XHRcdG5ld1grKztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB3aGVlbERlbHRhWSA+IDAgKSB7XG5cdFx0XHRcdG5ld1ktLTtcblx0XHRcdH0gZWxzZSBpZiAoIHdoZWVsRGVsdGFZIDwgMCApIHtcblx0XHRcdFx0bmV3WSsrO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmdvVG9QYWdlKG5ld1gsIG5ld1kpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bmV3WCA9IHRoaXMueCArIE1hdGgucm91bmQodGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsID8gd2hlZWxEZWx0YVggOiAwKTtcblx0XHRuZXdZID0gdGhpcy55ICsgTWF0aC5yb3VuZCh0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsID8gd2hlZWxEZWx0YVkgOiAwKTtcblxuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IHdoZWVsRGVsdGFYID4gMCA/IC0xIDogd2hlZWxEZWx0YVggPCAwID8gMSA6IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25ZID0gd2hlZWxEZWx0YVkgPiAwID8gLTEgOiB3aGVlbERlbHRhWSA8IDAgPyAxIDogMDtcblxuXHRcdGlmICggbmV3WCA+IDAgKSB7XG5cdFx0XHRuZXdYID0gMDtcblx0XHR9IGVsc2UgaWYgKCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0bmV3WCA9IHRoaXMubWF4U2Nyb2xsWDtcblx0XHR9XG5cblx0XHRpZiAoIG5ld1kgPiAwICkge1xuXHRcdFx0bmV3WSA9IDA7XG5cdFx0fSBlbHNlIGlmICggbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdG5ld1kgPSB0aGlzLm1heFNjcm9sbFk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCAwKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfd2hlZWxcblx0fSxcblxuXHRfaW5pdFNuYXA6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0ge307XG5cblx0XHRpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMuc25hcCA9PSAnc3RyaW5nJyApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zbmFwID0gdGhpcy5zY3JvbGxlci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5zbmFwKTtcblx0XHR9XG5cblx0XHR0aGlzLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGkgPSAwLCBsLFxuXHRcdFx0XHRtID0gMCwgbixcblx0XHRcdFx0Y3gsIGN5LFxuXHRcdFx0XHR4ID0gMCwgeSxcblx0XHRcdFx0c3RlcFggPSB0aGlzLm9wdGlvbnMuc25hcFN0ZXBYIHx8IHRoaXMud3JhcHBlcldpZHRoLFxuXHRcdFx0XHRzdGVwWSA9IHRoaXMub3B0aW9ucy5zbmFwU3RlcFkgfHwgdGhpcy53cmFwcGVySGVpZ2h0LFxuXHRcdFx0XHRlbDtcblxuXHRcdFx0dGhpcy5wYWdlcyA9IFtdO1xuXG5cdFx0XHRpZiAoICF0aGlzLndyYXBwZXJXaWR0aCB8fCAhdGhpcy53cmFwcGVySGVpZ2h0IHx8ICF0aGlzLnNjcm9sbGVyV2lkdGggfHwgIXRoaXMuc2Nyb2xsZXJIZWlnaHQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcCA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0Y3ggPSBNYXRoLnJvdW5kKCBzdGVwWCAvIDIgKTtcblx0XHRcdFx0Y3kgPSBNYXRoLnJvdW5kKCBzdGVwWSAvIDIgKTtcblxuXHRcdFx0XHR3aGlsZSAoIHggPiAtdGhpcy5zY3JvbGxlcldpZHRoICkge1xuXHRcdFx0XHRcdHRoaXMucGFnZXNbaV0gPSBbXTtcblx0XHRcdFx0XHRsID0gMDtcblx0XHRcdFx0XHR5ID0gMDtcblxuXHRcdFx0XHRcdHdoaWxlICggeSA+IC10aGlzLnNjcm9sbGVySGVpZ2h0ICkge1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlc1tpXVtsXSA9IHtcblx0XHRcdFx0XHRcdFx0eDogTWF0aC5tYXgoeCwgdGhpcy5tYXhTY3JvbGxYKSxcblx0XHRcdFx0XHRcdFx0eTogTWF0aC5tYXgoeSwgdGhpcy5tYXhTY3JvbGxZKSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IHN0ZXBYLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHN0ZXBZLFxuXHRcdFx0XHRcdFx0XHRjeDogeCAtIGN4LFxuXHRcdFx0XHRcdFx0XHRjeTogeSAtIGN5XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHR5IC09IHN0ZXBZO1xuXHRcdFx0XHRcdFx0bCsrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHggLT0gc3RlcFg7XG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbCA9IHRoaXMub3B0aW9ucy5zbmFwO1xuXHRcdFx0XHRsID0gZWwubGVuZ3RoO1xuXHRcdFx0XHRuID0gLTE7XG5cblx0XHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGlmICggaSA9PT0gMCB8fCBlbFtpXS5vZmZzZXRMZWZ0IDw9IGVsW2ktMV0ub2Zmc2V0TGVmdCApIHtcblx0XHRcdFx0XHRcdG0gPSAwO1xuXHRcdFx0XHRcdFx0bisrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggIXRoaXMucGFnZXNbbV0gKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW21dID0gW107XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0eCA9IE1hdGgubWF4KC1lbFtpXS5vZmZzZXRMZWZ0LCB0aGlzLm1heFNjcm9sbFgpO1xuXHRcdFx0XHRcdHkgPSBNYXRoLm1heCgtZWxbaV0ub2Zmc2V0VG9wLCB0aGlzLm1heFNjcm9sbFkpO1xuXHRcdFx0XHRcdGN4ID0geCAtIE1hdGgucm91bmQoZWxbaV0ub2Zmc2V0V2lkdGggLyAyKTtcblx0XHRcdFx0XHRjeSA9IHkgLSBNYXRoLnJvdW5kKGVsW2ldLm9mZnNldEhlaWdodCAvIDIpO1xuXG5cdFx0XHRcdFx0dGhpcy5wYWdlc1ttXVtuXSA9IHtcblx0XHRcdFx0XHRcdHg6IHgsXG5cdFx0XHRcdFx0XHR5OiB5LFxuXHRcdFx0XHRcdFx0d2lkdGg6IGVsW2ldLm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBlbFtpXS5vZmZzZXRIZWlnaHQsXG5cdFx0XHRcdFx0XHRjeDogY3gsXG5cdFx0XHRcdFx0XHRjeTogY3lcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0aWYgKCB4ID4gdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0XHRcdFx0bSsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmdvVG9QYWdlKHRoaXMuY3VycmVudFBhZ2UucGFnZVggfHwgMCwgdGhpcy5jdXJyZW50UGFnZS5wYWdlWSB8fCAwLCAwKTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNuYXAgdGhyZXNob2xkIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCAlIDEgPT09IDAgKSB7XG5cdFx0XHRcdHRoaXMuc25hcFRocmVzaG9sZFggPSB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZDtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWSA9IHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWCA9IE1hdGgucm91bmQodGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYXVt0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZXS53aWR0aCAqIHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkKTtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWSA9IE1hdGgucm91bmQodGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYXVt0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZXS5oZWlnaHQgKiB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdmbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciB0aW1lID0gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcblx0XHRcdFx0XHRNYXRoLm1heChcblx0XHRcdFx0XHRcdE1hdGgubWluKE1hdGguYWJzKHRoaXMueCAtIHRoaXMuc3RhcnRYKSwgMTAwMCksXG5cdFx0XHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyh0aGlzLnkgLSB0aGlzLnN0YXJ0WSksIDEwMDApXG5cdFx0XHRcdFx0KSwgMzAwKTtcblxuXHRcdFx0dGhpcy5nb1RvUGFnZShcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZS5wYWdlWCArIHRoaXMuZGlyZWN0aW9uWCxcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZS5wYWdlWSArIHRoaXMuZGlyZWN0aW9uWSxcblx0XHRcdFx0dGltZVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSxcblxuXHRfbmVhcmVzdFNuYXA6IGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0aWYgKCAhdGhpcy5wYWdlcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4geyB4OiAwLCB5OiAwLCBwYWdlWDogMCwgcGFnZVk6IDAgfTtcblx0XHR9XG5cblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRsID0gdGhpcy5wYWdlcy5sZW5ndGgsXG5cdFx0XHRtID0gMDtcblxuXHRcdC8vIENoZWNrIGlmIHdlIGV4Y2VlZGVkIHRoZSBzbmFwIHRocmVzaG9sZFxuXHRcdGlmICggTWF0aC5hYnMoeCAtIHRoaXMuYWJzU3RhcnRYKSA8IHRoaXMuc25hcFRocmVzaG9sZFggJiZcblx0XHRcdE1hdGguYWJzKHkgLSB0aGlzLmFic1N0YXJ0WSkgPCB0aGlzLnNuYXBUaHJlc2hvbGRZICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudFBhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKCB4ID4gMCApIHtcblx0XHRcdHggPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHR4ID0gdGhpcy5tYXhTY3JvbGxYO1xuXHRcdH1cblxuXHRcdGlmICggeSA+IDAgKSB7XG5cdFx0XHR5ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB5IDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0eSA9IHRoaXMubWF4U2Nyb2xsWTtcblx0XHR9XG5cblx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRpZiAoIHggPj0gdGhpcy5wYWdlc1tpXVswXS5jeCApIHtcblx0XHRcdFx0eCA9IHRoaXMucGFnZXNbaV1bMF0ueDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bCA9IHRoaXMucGFnZXNbaV0ubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBtIDwgbDsgbSsrICkge1xuXHRcdFx0aWYgKCB5ID49IHRoaXMucGFnZXNbMF1bbV0uY3kgKSB7XG5cdFx0XHRcdHkgPSB0aGlzLnBhZ2VzWzBdW21dLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggaSA9PSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYICkge1xuXHRcdFx0aSArPSB0aGlzLmRpcmVjdGlvblg7XG5cblx0XHRcdGlmICggaSA8IDAgKSB7XG5cdFx0XHRcdGkgPSAwO1xuXHRcdFx0fSBlbHNlIGlmICggaSA+PSB0aGlzLnBhZ2VzLmxlbmd0aCApIHtcblx0XHRcdFx0aSA9IHRoaXMucGFnZXMubGVuZ3RoIC0gMTtcblx0XHRcdH1cblxuXHRcdFx0eCA9IHRoaXMucGFnZXNbaV1bMF0ueDtcblx0XHR9XG5cblx0XHRpZiAoIG0gPT0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWSApIHtcblx0XHRcdG0gKz0gdGhpcy5kaXJlY3Rpb25ZO1xuXG5cdFx0XHRpZiAoIG0gPCAwICkge1xuXHRcdFx0XHRtID0gMDtcblx0XHRcdH0gZWxzZSBpZiAoIG0gPj0gdGhpcy5wYWdlc1swXS5sZW5ndGggKSB7XG5cdFx0XHRcdG0gPSB0aGlzLnBhZ2VzWzBdLmxlbmd0aCAtIDE7XG5cdFx0XHR9XG5cblx0XHRcdHkgPSB0aGlzLnBhZ2VzWzBdW21dLnk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IHgsXG5cdFx0XHR5OiB5LFxuXHRcdFx0cGFnZVg6IGksXG5cdFx0XHRwYWdlWTogbVxuXHRcdH07XG5cdH0sXG5cblx0Z29Ub1BhZ2U6IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcblx0XHRlYXNpbmcgPSBlYXNpbmcgfHwgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZztcblxuXHRcdGlmICggeCA+PSB0aGlzLnBhZ2VzLmxlbmd0aCApIHtcblx0XHRcdHggPSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIGlmICggeCA8IDAgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHR9XG5cblx0XHRpZiAoIHkgPj0gdGhpcy5wYWdlc1t4XS5sZW5ndGggKSB7XG5cdFx0XHR5ID0gdGhpcy5wYWdlc1t4XS5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSBpZiAoIHkgPCAwICkge1xuXHRcdFx0eSA9IDA7XG5cdFx0fVxuXG5cdFx0dmFyIHBvc1ggPSB0aGlzLnBhZ2VzW3hdW3ldLngsXG5cdFx0XHRwb3NZID0gdGhpcy5wYWdlc1t4XVt5XS55O1xuXG5cdFx0dGltZSA9IHRpbWUgPT09IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5zbmFwU3BlZWQgfHwgTWF0aC5tYXgoXG5cdFx0XHRNYXRoLm1heChcblx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnMocG9zWCAtIHRoaXMueCksIDEwMDApLFxuXHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyhwb3NZIC0gdGhpcy55KSwgMTAwMClcblx0XHRcdCksIDMwMCkgOiB0aW1lO1xuXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IHtcblx0XHRcdHg6IHBvc1gsXG5cdFx0XHR5OiBwb3NZLFxuXHRcdFx0cGFnZVg6IHgsXG5cdFx0XHRwYWdlWTogeVxuXHRcdH07XG5cblx0XHR0aGlzLnNjcm9sbFRvKHBvc1gsIHBvc1ksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0bmV4dDogZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xuXHRcdHZhciB4ID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWCxcblx0XHRcdHkgPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZO1xuXG5cdFx0eCsrO1xuXG5cdFx0aWYgKCB4ID49IHRoaXMucGFnZXMubGVuZ3RoICYmIHRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHRcdHkrKztcblx0XHR9XG5cblx0XHR0aGlzLmdvVG9QYWdlKHgsIHksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0cHJldjogZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xuXHRcdHZhciB4ID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWCxcblx0XHRcdHkgPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZO1xuXG5cdFx0eC0tO1xuXG5cdFx0aWYgKCB4IDwgMCAmJiB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuXHRcdFx0eCA9IDA7XG5cdFx0XHR5LS07XG5cdFx0fVxuXG5cdFx0dGhpcy5nb1RvUGFnZSh4LCB5LCB0aW1lLCBlYXNpbmcpO1xuXHR9LFxuXG5cdF9pbml0S2V5czogZnVuY3Rpb24gKGUpIHtcblx0XHQvLyBkZWZhdWx0IGtleSBiaW5kaW5nc1xuXHRcdHZhciBrZXlzID0ge1xuXHRcdFx0cGFnZVVwOiAzMyxcblx0XHRcdHBhZ2VEb3duOiAzNCxcblx0XHRcdGVuZDogMzUsXG5cdFx0XHRob21lOiAzNixcblx0XHRcdGxlZnQ6IDM3LFxuXHRcdFx0dXA6IDM4LFxuXHRcdFx0cmlnaHQ6IDM5LFxuXHRcdFx0ZG93bjogNDBcblx0XHR9O1xuXHRcdHZhciBpO1xuXG5cdFx0Ly8gaWYgeW91IGdpdmUgbWUgY2hhcmFjdGVycyBJIGdpdmUgeW91IGtleWNvZGVcblx0XHRpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MgPT0gJ29iamVjdCcgKSB7XG5cdFx0XHRmb3IgKCBpIGluIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncyApIHtcblx0XHRcdFx0aWYgKCB0eXBlb2YgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldID09ICdzdHJpbmcnICkge1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXSA9IHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmdzID0ge307XG5cdFx0fVxuXG5cdFx0Zm9yICggaSBpbiBrZXlzICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldID0gdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldIHx8IGtleXNbaV07XG5cdFx0fVxuXG5cdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCAna2V5ZG93bicsIHRoaXMpO1xuXG5cdFx0dGhpcy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ2tleWRvd24nLCB0aGlzKTtcblx0XHR9KTtcblx0fSxcblxuXHRfa2V5OiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggIXRoaXMuZW5hYmxlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgc25hcCA9IHRoaXMub3B0aW9ucy5zbmFwLFx0Ly8gd2UgYXJlIHVzaW5nIHRoaXMgYWxvdCwgYmV0dGVyIHRvIGNhY2hlIGl0XG5cdFx0XHRuZXdYID0gc25hcCA/IHRoaXMuY3VycmVudFBhZ2UucGFnZVggOiB0aGlzLngsXG5cdFx0XHRuZXdZID0gc25hcCA/IHRoaXMuY3VycmVudFBhZ2UucGFnZVkgOiB0aGlzLnksXG5cdFx0XHRub3cgPSB1dGlscy5nZXRUaW1lKCksXG5cdFx0XHRwcmV2VGltZSA9IHRoaXMua2V5VGltZSB8fCAwLFxuXHRcdFx0YWNjZWxlcmF0aW9uID0gMC4yNTAsXG5cdFx0XHRwb3M7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG5cdFx0XHRwb3MgPSB0aGlzLmdldENvbXB1dGVkUG9zaXRpb24oKTtcblxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlKE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XG5cdFx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5rZXlBY2NlbGVyYXRpb24gPSBub3cgLSBwcmV2VGltZSA8IDIwMCA/IE1hdGgubWluKHRoaXMua2V5QWNjZWxlcmF0aW9uICsgYWNjZWxlcmF0aW9uLCA1MCkgOiAwO1xuXG5cdFx0c3dpdGNoICggZS5rZXlDb2RlICkge1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucGFnZVVwOlxuXHRcdFx0XHRpZiAoIHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdFx0XHRuZXdYICs9IHNuYXAgPyAxIDogdGhpcy53cmFwcGVyV2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3WSArPSBzbmFwID8gMSA6IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnBhZ2VEb3duOlxuXHRcdFx0XHRpZiAoIHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdFx0XHRuZXdYIC09IHNuYXAgPyAxIDogdGhpcy53cmFwcGVyV2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3WSAtPSBzbmFwID8gMSA6IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmVuZDpcblx0XHRcdFx0bmV3WCA9IHNuYXAgPyB0aGlzLnBhZ2VzLmxlbmd0aC0xIDogdGhpcy5tYXhTY3JvbGxYO1xuXHRcdFx0XHRuZXdZID0gc25hcCA/IHRoaXMucGFnZXNbMF0ubGVuZ3RoLTEgOiB0aGlzLm1heFNjcm9sbFk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MuaG9tZTpcblx0XHRcdFx0bmV3WCA9IDA7XG5cdFx0XHRcdG5ld1kgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmxlZnQ6XG5cdFx0XHRcdG5ld1ggKz0gc25hcCA/IC0xIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnVwOlxuXHRcdFx0XHRuZXdZICs9IHNuYXAgPyAxIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnJpZ2h0OlxuXHRcdFx0XHRuZXdYIC09IHNuYXAgPyAtMSA6IDUgKyB0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5kb3duOlxuXHRcdFx0XHRuZXdZIC09IHNuYXAgPyAxIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHNuYXAgKSB7XG5cdFx0XHR0aGlzLmdvVG9QYWdlKG5ld1gsIG5ld1kpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggbmV3WCA+IDAgKSB7XG5cdFx0XHRuZXdYID0gMDtcblx0XHRcdHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcblx0XHR9IGVsc2UgaWYgKCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0bmV3WCA9IHRoaXMubWF4U2Nyb2xsWDtcblx0XHRcdHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcblx0XHR9XG5cblx0XHRpZiAoIG5ld1kgPiAwICkge1xuXHRcdFx0bmV3WSA9IDA7XG5cdFx0XHR0aGlzLmtleUFjY2VsZXJhdGlvbiA9IDA7XG5cdFx0fSBlbHNlIGlmICggbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdG5ld1kgPSB0aGlzLm1heFNjcm9sbFk7XG5cdFx0XHR0aGlzLmtleUFjY2VsZXJhdGlvbiA9IDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCAwKTtcblxuXHRcdHRoaXMua2V5VGltZSA9IG5vdztcblx0fSxcblxuXHRfYW5pbWF0ZTogZnVuY3Rpb24gKGRlc3RYLCBkZXN0WSwgZHVyYXRpb24sIGVhc2luZ0ZuKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzLFxuXHRcdFx0c3RhcnRYID0gdGhpcy54LFxuXHRcdFx0c3RhcnRZID0gdGhpcy55LFxuXHRcdFx0c3RhcnRUaW1lID0gdXRpbHMuZ2V0VGltZSgpLFxuXHRcdFx0ZGVzdFRpbWUgPSBzdGFydFRpbWUgKyBkdXJhdGlvbjtcblxuXHRcdGZ1bmN0aW9uIHN0ZXAgKCkge1xuXHRcdFx0dmFyIG5vdyA9IHV0aWxzLmdldFRpbWUoKSxcblx0XHRcdFx0bmV3WCwgbmV3WSxcblx0XHRcdFx0ZWFzaW5nO1xuXG5cdFx0XHRpZiAoIG5vdyA+PSBkZXN0VGltZSApIHtcblx0XHRcdFx0dGhhdC5pc0FuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGF0Ll90cmFuc2xhdGUoZGVzdFgsIGRlc3RZKTtcblxuXHRcdFx0XHRpZiAoICF0aGF0LnJlc2V0UG9zaXRpb24odGhhdC5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuXHRcdFx0XHRcdHRoYXQuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG5vdyA9ICggbm93IC0gc3RhcnRUaW1lICkgLyBkdXJhdGlvbjtcblx0XHRcdGVhc2luZyA9IGVhc2luZ0ZuKG5vdyk7XG5cdFx0XHRuZXdYID0gKCBkZXN0WCAtIHN0YXJ0WCApICogZWFzaW5nICsgc3RhcnRYO1xuXHRcdFx0bmV3WSA9ICggZGVzdFkgLSBzdGFydFkgKSAqIGVhc2luZyArIHN0YXJ0WTtcblx0XHRcdHRoYXQuX3RyYW5zbGF0ZShuZXdYLCBuZXdZKTtcblxuXHRcdFx0aWYgKCB0aGF0LmlzQW5pbWF0aW5nICkge1xuXHRcdFx0XHRyQUYoc3RlcCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG5cdFx0c3RlcCgpO1xuXHR9LFxuXHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0XHRzd2l0Y2ggKCBlLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0b3VjaHN0YXJ0Jzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJkb3duJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckRvd24nOlxuXHRcdFx0Y2FzZSAnbW91c2Vkb3duJzpcblx0XHRcdFx0dGhpcy5fc3RhcnQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndG91Y2htb3ZlJzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJtb3ZlJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlck1vdmUnOlxuXHRcdFx0Y2FzZSAnbW91c2Vtb3ZlJzpcblx0XHRcdFx0dGhpcy5fbW92ZShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaGVuZCc6XG5cdFx0XHRjYXNlICdwb2ludGVydXAnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyVXAnOlxuXHRcdFx0Y2FzZSAnbW91c2V1cCc6XG5cdFx0XHRjYXNlICd0b3VjaGNhbmNlbCc6XG5cdFx0XHRjYXNlICdwb2ludGVyY2FuY2VsJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckNhbmNlbCc6XG5cdFx0XHRjYXNlICdtb3VzZWNhbmNlbCc6XG5cdFx0XHRcdHRoaXMuX2VuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcmllbnRhdGlvbmNoYW5nZSc6XG5cdFx0XHRjYXNlICdyZXNpemUnOlxuXHRcdFx0XHR0aGlzLl9yZXNpemUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0cmFuc2l0aW9uZW5kJzpcblx0XHRcdGNhc2UgJ3dlYmtpdFRyYW5zaXRpb25FbmQnOlxuXHRcdFx0Y2FzZSAnb1RyYW5zaXRpb25FbmQnOlxuXHRcdFx0Y2FzZSAnTVNUcmFuc2l0aW9uRW5kJzpcblx0XHRcdFx0dGhpcy5fdHJhbnNpdGlvbkVuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd3aGVlbCc6XG5cdFx0XHRjYXNlICdET01Nb3VzZVNjcm9sbCc6XG5cdFx0XHRjYXNlICdtb3VzZXdoZWVsJzpcblx0XHRcdFx0dGhpcy5fd2hlZWwoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAna2V5ZG93bic6XG5cdFx0XHRcdHRoaXMuX2tleShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjbGljayc6XG5cdFx0XHRcdGlmICggdGhpcy5lbmFibGVkICYmICFlLl9jb25zdHJ1Y3RlZCApIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyIChkaXJlY3Rpb24sIGludGVyYWN0aXZlLCB0eXBlKSB7XG5cdHZhciBzY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHRpZiAoIHR5cGUgPT09IHRydWUgKSB7XG5cdFx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5OTk5Jztcblx0XHRpbmRpY2F0b3Iuc3R5bGUuY3NzVGV4dCA9ICctd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7Ym9yZGVyLXJhZGl1czozcHgnO1xuXHR9XG5cblx0aW5kaWNhdG9yLmNsYXNzTmFtZSA9ICdpU2Nyb2xsSW5kaWNhdG9yJztcblxuXHRpZiAoIGRpcmVjdGlvbiA9PSAnaCcgKSB7XG5cdFx0aWYgKCB0eXBlID09PSB0cnVlICkge1xuXHRcdFx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgKz0gJztoZWlnaHQ6N3B4O2xlZnQ6MnB4O3JpZ2h0OjJweDtib3R0b206MCc7XG5cdFx0XHRpbmRpY2F0b3Iuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXHRcdH1cblx0XHRzY3JvbGxiYXIuY2xhc3NOYW1lID0gJ2lTY3JvbGxIb3Jpem9udGFsU2Nyb2xsYmFyJztcblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGUgPT09IHRydWUgKSB7XG5cdFx0XHRzY3JvbGxiYXIuc3R5bGUuY3NzVGV4dCArPSAnO3dpZHRoOjdweDtib3R0b206MnB4O3RvcDoycHg7cmlnaHQ6MXB4Jztcblx0XHRcdGluZGljYXRvci5zdHlsZS53aWR0aCA9ICcxMDAlJztcblx0XHR9XG5cdFx0c2Nyb2xsYmFyLmNsYXNzTmFtZSA9ICdpU2Nyb2xsVmVydGljYWxTY3JvbGxiYXInO1xuXHR9XG5cblx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgKz0gJztvdmVyZmxvdzpoaWRkZW4nO1xuXG5cdGlmICggIWludGVyYWN0aXZlICkge1xuXHRcdHNjcm9sbGJhci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXHR9XG5cblx0c2Nyb2xsYmFyLmFwcGVuZENoaWxkKGluZGljYXRvcik7XG5cblx0cmV0dXJuIHNjcm9sbGJhcjtcbn1cblxuZnVuY3Rpb24gSW5kaWNhdG9yIChzY3JvbGxlciwgb3B0aW9ucykge1xuXHR0aGlzLndyYXBwZXIgPSB0eXBlb2Ygb3B0aW9ucy5lbCA9PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5lbCkgOiBvcHRpb25zLmVsO1xuXHR0aGlzLndyYXBwZXJTdHlsZSA9IHRoaXMud3JhcHBlci5zdHlsZTtcblx0dGhpcy5pbmRpY2F0b3IgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XG5cdHRoaXMuaW5kaWNhdG9yU3R5bGUgPSB0aGlzLmluZGljYXRvci5zdHlsZTtcblx0dGhpcy5zY3JvbGxlciA9IHNjcm9sbGVyO1xuXG5cdHRoaXMub3B0aW9ucyA9IHtcblx0XHRsaXN0ZW5YOiB0cnVlLFxuXHRcdGxpc3Rlblk6IHRydWUsXG5cdFx0aW50ZXJhY3RpdmU6IGZhbHNlLFxuXHRcdHJlc2l6ZTogdHJ1ZSxcblx0XHRkZWZhdWx0U2Nyb2xsYmFyczogZmFsc2UsXG5cdFx0c2hyaW5rOiBmYWxzZSxcblx0XHRmYWRlOiBmYWxzZSxcblx0XHRzcGVlZFJhdGlvWDogMCxcblx0XHRzcGVlZFJhdGlvWTogMFxuXHR9O1xuXG5cdGZvciAoIHZhciBpIGluIG9wdGlvbnMgKSB7XG5cdFx0dGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcblx0fVxuXG5cdHRoaXMuc2l6ZVJhdGlvWCA9IDE7XG5cdHRoaXMuc2l6ZVJhdGlvWSA9IDE7XG5cdHRoaXMubWF4UG9zWCA9IDA7XG5cdHRoaXMubWF4UG9zWSA9IDA7XG5cblx0aWYgKCB0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUgKSB7XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaCApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMuaW5kaWNhdG9yLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCAndG91Y2hlbmQnLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyICkge1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQodGhpcy5pbmRpY2F0b3IsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG5cdFx0XHR1dGlscy5hZGRFdmVudCh3aW5kb3csIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcnVwJyksIHRoaXMpO1xuXHRcdH1cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlICkge1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQodGhpcy5pbmRpY2F0b3IsICdtb3VzZWRvd24nLCB0aGlzKTtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ21vdXNldXAnLCB0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIHRoaXMub3B0aW9ucy5mYWRlICkge1xuXHRcdHRoaXMud3JhcHBlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0gPSB0aGlzLnNjcm9sbGVyLnRyYW5zbGF0ZVo7XG5cdFx0dmFyIGR1cmF0aW9uUHJvcCA9IHV0aWxzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtcblx0XHR0aGlzLndyYXBwZXJTdHlsZVtkdXJhdGlvblByb3BdID0gdXRpbHMuaXNCYWRBbmRyb2lkID8gJzAuMDAwMW1zJyA6ICcwbXMnO1xuXHRcdC8vIHJlbW92ZSAwLjAwMDFtc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRpZih1dGlscy5pc0JhZEFuZHJvaWQpIHtcblx0XHRcdHJBRihmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoc2VsZi53cmFwcGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9PT0gJzAuMDAwMW1zJykge1xuXHRcdFx0XHRcdHNlbGYud3JhcHBlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMHMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy53cmFwcGVyU3R5bGUub3BhY2l0eSA9ICcwJztcblx0fVxufVxuXG5JbmRpY2F0b3IucHJvdG90eXBlID0ge1xuXHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0XHRzd2l0Y2ggKCBlLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0b3VjaHN0YXJ0Jzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJkb3duJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckRvd24nOlxuXHRcdFx0Y2FzZSAnbW91c2Vkb3duJzpcblx0XHRcdFx0dGhpcy5fc3RhcnQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndG91Y2htb3ZlJzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJtb3ZlJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlck1vdmUnOlxuXHRcdFx0Y2FzZSAnbW91c2Vtb3ZlJzpcblx0XHRcdFx0dGhpcy5fbW92ZShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaGVuZCc6XG5cdFx0XHRjYXNlICdwb2ludGVydXAnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyVXAnOlxuXHRcdFx0Y2FzZSAnbW91c2V1cCc6XG5cdFx0XHRjYXNlICd0b3VjaGNhbmNlbCc6XG5cdFx0XHRjYXNlICdwb2ludGVyY2FuY2VsJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckNhbmNlbCc6XG5cdFx0XHRjYXNlICdtb3VzZWNhbmNlbCc6XG5cdFx0XHRcdHRoaXMuX2VuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LFxuXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIHRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyApIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmZhZGVUaW1lb3V0KTtcblx0XHRcdHRoaXMuZmFkZVRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZSApIHtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMuaW5kaWNhdG9yLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy5pbmRpY2F0b3IsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh0aGlzLmluZGljYXRvciwgJ21vdXNlZG93bicsIHRoaXMpO1xuXG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaG1vdmUnLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScsIHRoaXMpO1xuXG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaGVuZCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJ1cCcpLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ21vdXNldXAnLCB0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyApIHtcblx0XHRcdHRoaXMud3JhcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcHBlcik7XG5cdFx0fVxuXHR9LFxuXG5cdF9zdGFydDogZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHR0aGlzLnRyYW5zaXRpb25UaW1lKCk7XG5cblx0XHR0aGlzLmluaXRpYXRlZCA9IHRydWU7XG5cdFx0dGhpcy5tb3ZlZCA9IGZhbHNlO1xuXHRcdHRoaXMubGFzdFBvaW50WFx0PSBwb2ludC5wYWdlWDtcblx0XHR0aGlzLmxhc3RQb2ludFlcdD0gcG9pbnQucGFnZVk7XG5cblx0XHR0aGlzLnN0YXJ0VGltZVx0PSB1dGlscy5nZXRUaW1lKCk7XG5cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZVRvdWNoICkge1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCAndG91Y2htb3ZlJywgdGhpcyk7XG5cdFx0fVxuXHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlUG9pbnRlciApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVNb3VzZSApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnYmVmb3JlU2Nyb2xsU3RhcnQnKTtcblx0fSxcblxuXHRfbW92ZTogZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlLFxuXHRcdFx0ZGVsdGFYLCBkZWx0YVksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0dGltZXN0YW1wID0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0aWYgKCAhdGhpcy5tb3ZlZCApIHtcblx0XHRcdHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnc2Nyb2xsU3RhcnQnKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vdmVkID0gdHJ1ZTtcblxuXHRcdGRlbHRhWCA9IHBvaW50LnBhZ2VYIC0gdGhpcy5sYXN0UG9pbnRYO1xuXHRcdHRoaXMubGFzdFBvaW50WCA9IHBvaW50LnBhZ2VYO1xuXG5cdFx0ZGVsdGFZID0gcG9pbnQucGFnZVkgLSB0aGlzLmxhc3RQb2ludFk7XG5cdFx0dGhpcy5sYXN0UG9pbnRZID0gcG9pbnQucGFnZVk7XG5cblx0XHRuZXdYID0gdGhpcy54ICsgZGVsdGFYO1xuXHRcdG5ld1kgPSB0aGlzLnkgKyBkZWx0YVk7XG5cblx0XHR0aGlzLl9wb3MobmV3WCwgbmV3WSk7XG5cbi8vIElOU0VSVCBQT0lOVDogaW5kaWNhdG9yLl9tb3ZlXG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0fSxcblxuXHRfZW5kOiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggIXRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ3RvdWNobW92ZScsIHRoaXMpO1xuXHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICdtb3VzZW1vdmUnLCB0aGlzKTtcblxuXHRcdGlmICggdGhpcy5zY3JvbGxlci5vcHRpb25zLnNuYXAgKSB7XG5cdFx0XHR2YXIgc25hcCA9IHRoaXMuc2Nyb2xsZXIuX25lYXJlc3RTbmFwKHRoaXMuc2Nyb2xsZXIueCwgdGhpcy5zY3JvbGxlci55KTtcblxuXHRcdFx0dmFyIHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuXHRcdFx0XHRcdE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnModGhpcy5zY3JvbGxlci54IC0gc25hcC54KSwgMTAwMCksXG5cdFx0XHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyh0aGlzLnNjcm9sbGVyLnkgLSBzbmFwLnkpLCAxMDAwKVxuXHRcdFx0XHRcdCksIDMwMCk7XG5cblx0XHRcdGlmICggdGhpcy5zY3JvbGxlci54ICE9IHNuYXAueCB8fCB0aGlzLnNjcm9sbGVyLnkgIT0gc25hcC55ICkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbGVyLmRpcmVjdGlvblggPSAwO1xuXHRcdFx0XHR0aGlzLnNjcm9sbGVyLmRpcmVjdGlvblkgPSAwO1xuXHRcdFx0XHR0aGlzLnNjcm9sbGVyLmN1cnJlbnRQYWdlID0gc25hcDtcblx0XHRcdFx0dGhpcy5zY3JvbGxlci5zY3JvbGxUbyhzbmFwLngsIHNuYXAueSwgdGltZSwgdGhpcy5zY3JvbGxlci5vcHRpb25zLmJvdW5jZUVhc2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm1vdmVkICkge1xuXHRcdFx0dGhpcy5zY3JvbGxlci5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0XHR9XG5cdH0sXG5cblx0dHJhbnNpdGlvblRpbWU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblx0XHR2YXIgZHVyYXRpb25Qcm9wID0gdXRpbHMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uO1xuXHRcdHRoaXMuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9IHRpbWUgKyAnbXMnO1xuXG5cdFx0aWYgKCAhdGltZSAmJiB1dGlscy5pc0JhZEFuZHJvaWQgKSB7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMC4wMDAxbXMnO1xuXHRcdFx0Ly8gcmVtb3ZlIDAuMDAwMW1zXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRyQUYoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHNlbGYuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9PT0gJzAuMDAwMW1zJykge1xuXHRcdFx0XHRcdHNlbGYuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9ICcwcyc7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHR0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGZ1bmN0aW9uIChlYXNpbmcpIHtcblx0XHR0aGlzLmluZGljYXRvclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XG5cdH0sXG5cblx0cmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMudHJhbnNpdGlvblRpbWUoKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggJiYgIXRoaXMub3B0aW9ucy5saXN0ZW5ZICkge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5ID0gdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWSAmJiAhdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLmRpc3BsYXkgPSB0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5ID0gdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsIHx8IHRoaXMuc2Nyb2xsZXIuaGFzVmVydGljYWxTY3JvbGwgPyAnYmxvY2snIDogJ25vbmUnO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsICYmIHRoaXMuc2Nyb2xsZXIuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR1dGlscy5hZGRDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsQm90aFNjcm9sbGJhcnMnKTtcblx0XHRcdHV0aWxzLnJlbW92ZUNsYXNzKHRoaXMud3JhcHBlciwgJ2lTY3JvbGxMb25lU2Nyb2xsYmFyJyk7XG5cblx0XHRcdGlmICggdGhpcy5vcHRpb25zLmRlZmF1bHRTY3JvbGxiYXJzICYmIHRoaXMub3B0aW9ucy5jdXN0b21TdHlsZSApIHtcblx0XHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCApIHtcblx0XHRcdFx0XHR0aGlzLndyYXBwZXIuc3R5bGUucmlnaHQgPSAnOHB4Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLndyYXBwZXIuc3R5bGUuYm90dG9tID0gJzhweCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dXRpbHMucmVtb3ZlQ2xhc3ModGhpcy53cmFwcGVyLCAnaVNjcm9sbEJvdGhTY3JvbGxiYXJzJyk7XG5cdFx0XHR1dGlscy5hZGRDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsTG9uZVNjcm9sbGJhcicpO1xuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyAmJiB0aGlzLm9wdGlvbnMuY3VzdG9tU3R5bGUgKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG5cdFx0XHRcdFx0dGhpcy53cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJzJweCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy53cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICcycHgnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHIgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1x0Ly8gZm9yY2UgcmVmcmVzaFxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCApIHtcblx0XHRcdHRoaXMud3JhcHBlcldpZHRoID0gdGhpcy53cmFwcGVyLmNsaWVudFdpZHRoO1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMucmVzaXplICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcldpZHRoID0gTWF0aC5tYXgoTWF0aC5yb3VuZCh0aGlzLndyYXBwZXJXaWR0aCAqIHRoaXMud3JhcHBlcldpZHRoIC8gKHRoaXMuc2Nyb2xsZXIuc2Nyb2xsZXJXaWR0aCB8fCB0aGlzLndyYXBwZXJXaWR0aCB8fCAxKSksIDgpO1xuXHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLndpZHRoID0gdGhpcy5pbmRpY2F0b3JXaWR0aCArICdweCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcldpZHRoID0gdGhpcy5pbmRpY2F0b3IuY2xpZW50V2lkdGg7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubWF4UG9zWCA9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5pbmRpY2F0b3JXaWR0aDtcblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdjbGlwJyApIHtcblx0XHRcdFx0dGhpcy5taW5Cb3VuZGFyeVggPSAtdGhpcy5pbmRpY2F0b3JXaWR0aCArIDg7XG5cdFx0XHRcdHRoaXMubWF4Qm91bmRhcnlYID0gdGhpcy53cmFwcGVyV2lkdGggLSA4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5taW5Cb3VuZGFyeVggPSAwO1xuXHRcdFx0XHR0aGlzLm1heEJvdW5kYXJ5WCA9IHRoaXMubWF4UG9zWDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zaXplUmF0aW9YID0gdGhpcy5vcHRpb25zLnNwZWVkUmF0aW9YIHx8ICh0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFggJiYgKHRoaXMubWF4UG9zWCAvIHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWCkpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblkgKSB7XG5cdFx0XHR0aGlzLndyYXBwZXJIZWlnaHQgPSB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMucmVzaXplICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvckhlaWdodCA9IE1hdGgubWF4KE1hdGgucm91bmQodGhpcy53cmFwcGVySGVpZ2h0ICogdGhpcy53cmFwcGVySGVpZ2h0IC8gKHRoaXMuc2Nyb2xsZXIuc2Nyb2xsZXJIZWlnaHQgfHwgdGhpcy53cmFwcGVySGVpZ2h0IHx8IDEpKSwgOCk7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5pbmRpY2F0b3JIZWlnaHQgKyAncHgnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbmRpY2F0b3JIZWlnaHQgPSB0aGlzLmluZGljYXRvci5jbGllbnRIZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubWF4UG9zWSA9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ2NsaXAnICkge1xuXHRcdFx0XHR0aGlzLm1pbkJvdW5kYXJ5WSA9IC10aGlzLmluZGljYXRvckhlaWdodCArIDg7XG5cdFx0XHRcdHRoaXMubWF4Qm91bmRhcnlZID0gdGhpcy53cmFwcGVySGVpZ2h0IC0gODtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWluQm91bmRhcnlZID0gMDtcblx0XHRcdFx0dGhpcy5tYXhCb3VuZGFyeVkgPSB0aGlzLm1heFBvc1k7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubWF4UG9zWSA9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuXHRcdFx0dGhpcy5zaXplUmF0aW9ZID0gdGhpcy5vcHRpb25zLnNwZWVkUmF0aW9ZIHx8ICh0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFkgJiYgKHRoaXMubWF4UG9zWSAvIHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWSkpO1xuXHRcdH1cblxuXHRcdHRoaXMudXBkYXRlUG9zaXRpb24oKTtcblx0fSxcblxuXHR1cGRhdGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciB4ID0gdGhpcy5vcHRpb25zLmxpc3RlblggJiYgTWF0aC5yb3VuZCh0aGlzLnNpemVSYXRpb1ggKiB0aGlzLnNjcm9sbGVyLngpIHx8IDAsXG5cdFx0XHR5ID0gdGhpcy5vcHRpb25zLmxpc3RlblkgJiYgTWF0aC5yb3VuZCh0aGlzLnNpemVSYXRpb1kgKiB0aGlzLnNjcm9sbGVyLnkpIHx8IDA7XG5cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuaWdub3JlQm91bmRhcmllcyApIHtcblx0XHRcdGlmICggeCA8IHRoaXMubWluQm91bmRhcnlYICkge1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcblx0XHRcdFx0XHR0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JXaWR0aCArIHgsIDgpO1xuXHRcdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4Jztcblx0XHRcdFx0fVxuXHRcdFx0XHR4ID0gdGhpcy5taW5Cb3VuZGFyeVg7XG5cdFx0XHR9IGVsc2UgaWYgKCB4ID4gdGhpcy5tYXhCb3VuZGFyeVggKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICkge1xuXHRcdFx0XHRcdHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLmluZGljYXRvcldpZHRoIC0gKHggLSB0aGlzLm1heFBvc1gpLCA4KTtcblx0XHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG5cdFx0XHRcdFx0eCA9IHRoaXMubWF4UG9zWCArIHRoaXMuaW5kaWNhdG9yV2lkdGggLSB0aGlzLndpZHRoO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHggPSB0aGlzLm1heEJvdW5kYXJ5WDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICYmIHRoaXMud2lkdGggIT0gdGhpcy5pbmRpY2F0b3JXaWR0aCApIHtcblx0XHRcdFx0dGhpcy53aWR0aCA9IHRoaXMuaW5kaWNhdG9yV2lkdGg7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB5IDwgdGhpcy5taW5Cb3VuZGFyeVkgKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICkge1xuXHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JIZWlnaHQgKyB5ICogMywgOCk7XG5cdFx0XHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0eSA9IHRoaXMubWluQm91bmRhcnlZO1xuXHRcdFx0fSBlbHNlIGlmICggeSA+IHRoaXMubWF4Qm91bmRhcnlZICkge1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcblx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IE1hdGgubWF4KHRoaXMuaW5kaWNhdG9ySGVpZ2h0IC0gKHkgLSB0aGlzLm1heFBvc1kpICogMywgOCk7XG5cdFx0XHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG5cdFx0XHRcdFx0eSA9IHRoaXMubWF4UG9zWSArIHRoaXMuaW5kaWNhdG9ySGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eSA9IHRoaXMubWF4Qm91bmRhcnlZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgJiYgdGhpcy5oZWlnaHQgIT0gdGhpcy5pbmRpY2F0b3JIZWlnaHQgKSB7XG5cdFx0XHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5pbmRpY2F0b3JIZWlnaHQ7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblxuXHRcdGlmICggdGhpcy5zY3JvbGxlci5vcHRpb25zLnVzZVRyYW5zZm9ybSApIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNmb3JtXSA9ICd0cmFuc2xhdGUoJyArIHggKyAncHgsJyArIHkgKyAncHgpJyArIHRoaXMuc2Nyb2xsZXIudHJhbnNsYXRlWjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXHRcdH1cblx0fSxcblxuXHRfcG9zOiBmdW5jdGlvbiAoeCwgeSkge1xuXHRcdGlmICggeCA8IDAgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB4ID4gdGhpcy5tYXhQb3NYICkge1xuXHRcdFx0eCA9IHRoaXMubWF4UG9zWDtcblx0XHR9XG5cblx0XHRpZiAoIHkgPCAwICkge1xuXHRcdFx0eSA9IDA7XG5cdFx0fSBlbHNlIGlmICggeSA+IHRoaXMubWF4UG9zWSApIHtcblx0XHRcdHkgPSB0aGlzLm1heFBvc1k7XG5cdFx0fVxuXG5cdFx0eCA9IHRoaXMub3B0aW9ucy5saXN0ZW5YID8gTWF0aC5yb3VuZCh4IC8gdGhpcy5zaXplUmF0aW9YKSA6IHRoaXMuc2Nyb2xsZXIueDtcblx0XHR5ID0gdGhpcy5vcHRpb25zLmxpc3RlblkgPyBNYXRoLnJvdW5kKHkgLyB0aGlzLnNpemVSYXRpb1kpIDogdGhpcy5zY3JvbGxlci55O1xuXG5cdFx0dGhpcy5zY3JvbGxlci5zY3JvbGxUbyh4LCB5KTtcblx0fSxcblxuXHRmYWRlOiBmdW5jdGlvbiAodmFsLCBob2xkKSB7XG5cdFx0aWYgKCBob2xkICYmICF0aGlzLnZpc2libGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuZmFkZVRpbWVvdXQpO1xuXHRcdHRoaXMuZmFkZVRpbWVvdXQgPSBudWxsO1xuXG5cdFx0dmFyIHRpbWUgPSB2YWwgPyAyNTAgOiA1MDAsXG5cdFx0XHRkZWxheSA9IHZhbCA/IDAgOiAzMDA7XG5cblx0XHR2YWwgPSB2YWwgPyAnMScgOiAnMCc7XG5cblx0XHR0aGlzLndyYXBwZXJTdHlsZVt1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb25dID0gdGltZSArICdtcyc7XG5cblx0XHR0aGlzLmZhZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0dGhpcy53cmFwcGVyU3R5bGUub3BhY2l0eSA9IHZhbDtcblx0XHRcdHRoaXMudmlzaWJsZSA9ICt2YWw7XG5cdFx0fSkuYmluZCh0aGlzLCB2YWwpLCBkZWxheSk7XG5cdH1cbn07XG5cbklTY3JvbGwudXRpbHMgPSB1dGlscztcblxuaWYgKCB0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzICkge1xuXHRtb2R1bGUuZXhwb3J0cyA9IElTY3JvbGw7XG59IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAgICAgZGVmaW5lKCBmdW5jdGlvbiAoKSB7IHJldHVybiBJU2Nyb2xsOyB9ICk7XG59IGVsc2Uge1xuXHR3aW5kb3cuSVNjcm9sbCA9IElTY3JvbGw7XG59XG5cbn0pKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgpO1xuIiwiXG5pbXBvcnQgJy4vcGlja2VyLmNzcydcbmltcG9ydCBJU2Nyb2xsIGZyb20gJ2lzY3JvbGwnXG5cbmxldCBtb2RhbCwgcGlja2VyQ29udGFpbmVyLCBwaWNrZXJIZWFkZXIsIHBpY2tlckJvZHksIHBpY2tlckNvbmZpcm0sIHBpY2tlckNhbmNlbCwgcGlja2VyQmFyLCBwaWNrZXJTY3JvbGxlclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWNrZXIgKGNvbmZpZ3MpIHtcbiAgdGhpcy5jb25maXJtQ2FsbGJhY2sgPSBjb25maWdzLmNvbmZpcm1DYWxsYmFja1xuICB0aGlzLmNhbmNlbENhbGxiYWNrID0gY29uZmlncy5jYW5jZWxDYWxsYmFja1xuICB0aGlzLmRhdGEgPSBjb25maWdzLmRhdGFcbiAgdGhpcy5jb2x1bW4gPSB0aGlzLl9nZXRDb2x1bW5MZW5ndGgodGhpcy5kYXRhKVxuICB0aGlzLnNlbmRlciA9IGNvbmZpZ3Muc2VuZGVyXG4gIHRoaXMucGlja2VyU2Nyb2xsZXJzID0gW11cbiAgdGhpcy5pdGVtU2Nyb2xscyA9IFtdXG4gIHRoaXMuZm9ybWF0ZVJlc3VsdCA9IGNvbmZpZ3MuZm9ybWF0ZVJlc3VsdFxuICB0aGlzLnJlc3VsdEluZGV4cyA9IGNvbmZpZ3MuZGVmYXVsdEluZGV4cyB8fCB0aGlzLl9nZXREZWZhdWx0SW5kZXgoKVxuICB0aGlzLl9pbml0KClcbn1cblxuUGlja2VyLnByb3RvdHlwZSA9IHtcblxuICBfaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2NyZWF0ZSgpXG4gICAgdGhpcy5fYWRkRXZlbnQoKVxuICAgIHRoaXMuX2NyZWF0ZUNvbHVtbigpXG4gICAgdGhpcy5zaG93KClcbiAgICB0aGlzLl9jcmVhdGVTY3JvbGwoKVxuICAgIHRoaXMuX2luaXRJbmRleCgpXG4gIH0sXG5cbiAgX2NyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICghbW9kYWwpIHtcbiAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlciB3ZWV4LXBpY2tlci1maXhlZCdcbiAgICAgIHBpY2tlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwaWNrZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcGlja2VyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIHBpY2tlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwaWNrZXJCYXIuY2xhc3NOYW1lID0gJ3dlZXgtcGlja2VyLWJhcidcblxuICAgICAgcGlja2VyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1jb250ZW50J1xuICAgICAgcGlja2VySGVhZGVyLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1oZWFkZXInXG4gICAgICBwaWNrZXJCb2R5LmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1ib2R5J1xuICAgICAgcGlja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpY2tlckhlYWRlcilcbiAgICAgIHBpY2tlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwaWNrZXJCb2R5KVxuICAgICAgcGlja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpY2tlckJhcilcbiAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHBpY2tlckNvbnRhaW5lcilcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpXG4gICAgfVxuXG4gICAgcGlja2VySGVhZGVyLmlubmVySFRNTCA9ICcnXG4gICAgcGlja2VyQ29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHBpY2tlckNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHBpY2tlckNvbmZpcm0uY2xhc3NOYW1lID0gJ3dlZXgtcGlja2VyLWNvbmZpcm0nXG4gICAgcGlja2VyQ2FuY2VsLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1jYW5jZWwnXG4gICAgcGlja2VyQ29uZmlybS5pbm5lclRleHQgPSAn56Gu5a6aJ1xuICAgIHBpY2tlckNhbmNlbC5pbm5lclRleHQgPSAn5Y+W5raIJ1xuICAgIHBpY2tlckhlYWRlci5hcHBlbmRDaGlsZChwaWNrZXJDYW5jZWwpXG4gICAgcGlja2VySGVhZGVyLmFwcGVuZENoaWxkKHBpY2tlckNvbmZpcm0pXG4gIH0sXG5cbiAgX2dldENvbHVtbkxlbmd0aDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIChkYXRhWzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkYXRhLmxlbmd0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICB9LFxuXG4gIF9nZXREZWZhdWx0SW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW47IGkrKykge1xuICAgICAgcmVzdWx0WzBdID0gMFxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG5cbiAgX2dldEN1cnJlbnRJbmRleDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJlc3VsdEluZGV4cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdEluZGV4c1swXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdEluZGV4c1xuICAgIH1cbiAgfSxcblxuICBfYWRkRXZlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb25maXJtQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleHMgPSB0aGlzLl9nZXRDdXJyZW50SW5kZXgoKVxuICAgICAgY29uc3QgcmVzdWx0RGF0YSA9IHRoaXMuZm9ybWF0ZVJlc3VsdCA/IHRoaXMuZm9ybWF0ZVJlc3VsdCh0aGlzLmRhdGEsIGluZGV4cykgOiBpbmRleHNcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgcmVzdWx0OiAnc3VjY2VzcycsXG4gICAgICAgIGRhdGE6IHJlc3VsdERhdGFcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb25maXJtQ2FsbGJhY2sgJiYgdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKHRoaXMuY29uZmlybUNhbGxiYWNrLCByZXN1bHQpXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYW5jZWxDYWxsYmFjayAmJiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2sodGhpcy5jYW5jZWxDYWxsYmFjaylcbiAgICAgIGNvbnN0IGluZGV4cyA9IHRoaXMuX2dldEN1cnJlbnRJbmRleCgpXG4gICAgICBjb25zdCByZXN1bHREYXRhID0gdGhpcy5mb3JtYXRlUmVzdWx0ID8gdGhpcy5mb3JtYXRlUmVzdWx0KHRoaXMuZGF0YSwgaW5kZXhzKSA6IGluZGV4c1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICByZXN1bHQ6ICdjYW5jZWwnLFxuICAgICAgICBkYXRhOiByZXN1bHREYXRhXG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpcm1DYWxsYmFjayAmJiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2sodGhpcy5jb25maXJtQ2FsbGJhY2ssIHJlc3VsdClcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuXG4gICAgcGlja2VyQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmZpcm1DYWxsYmFjaylcbiAgICBwaWNrZXJDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxDYWxsYmFjaylcbiAgfSxcblxuICBfY3JlYXRlQ29sdW1uOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmRhdGFcbiAgICBwaWNrZXJCb2R5LmlubmVySFRNTCA9ICcnXG4gICAgaWYgKHRoaXMuY29sdW1uID4gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9jcmVhdGVJdGVtKGl0ZW1zW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUl0ZW0oaXRlbXMpXG4gICAgfVxuICB9LFxuXG4gIF9jcmVhdGVJdGVtOiBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICBwaWNrZXJTY3JvbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgZm9yIChsZXQgaSA9IC0yOyBpIDwgaXRlbXMubGVuZ3RoICsgMjsgaSsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGNlbGwuaW5uZXJUZXh0ID0gJydcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjZWxsLmlubmVyVGV4dCA9IGl0ZW1zW2ldXG4gICAgICB9XG4gICAgICB1aS5hcHBlbmRDaGlsZChjZWxsKVxuICAgIH1cbiAgICBwaWNrZXJTY3JvbGxlci5jbGFzc05hbWUgPSAnd2VleC1waWNrZXItc2Nyb2xsZXInXG4gICAgcGlja2VyU2Nyb2xsZXIuYXBwZW5kQ2hpbGQodWkpXG4gICAgcGlja2VyQm9keS5hcHBlbmRDaGlsZChwaWNrZXJTY3JvbGxlcilcbiAgICB0aGlzLnBpY2tlclNjcm9sbGVycy5wdXNoKHBpY2tlclNjcm9sbGVyKVxuICB9LFxuXG4gIF9jcmVhdGVTY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5waWNrZXJTY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgaXRlbVNjcm9sbCA9IG5ldyBJU2Nyb2xsKHNlbGYucGlja2VyU2Nyb2xsZXJzW2ldLCB7XG4gICAgICAgICAgc25hcDogJ2xpJyxcbiAgICAgICAgICBtb3VzZVdoZWVsOiB0cnVlLFxuICAgICAgICAgIHZTY3JvbGxiYXI6IGZhbHNlLFxuICAgICAgICAgIGhTY3JvbGxiYXI6IGZhbHNlLFxuICAgICAgICAgIGhTY3JvbGw6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5pdGVtU2Nyb2xscy5wdXNoKGl0ZW1TY3JvbGwpXG5cbiAgICAgICAgaXRlbVNjcm9sbC5vbignc2Nyb2xsRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHlJbmRleCA9IE1hdGguYWJzKE1hdGgucm91bmQoLTEgKiB0aGlzLnkgLyBzZWxmLml0ZW1IZWlnaHQpKVxuICAgICAgICAgIHNlbGYucmVzdWx0SW5kZXhzW2luZGV4XSA9IHlJbmRleFxuICAgICAgICAgIGNvbnNvbGUubG9nKHlJbmRleClcbiAgICAgICAgfSlcbiAgICAgIH0pKGkpXG4gICAgfVxuICB9LFxuXG4gIF9pbml0SW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHNlbGYuaXRlbUhlaWdodCA9IHBpY2tlckJvZHkub2Zmc2V0SGVpZ2h0IC8gNVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5waWNrZXJTY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgc2VsZi5pdGVtU2Nyb2xsc1tpbmRleF0uZ29Ub1BhZ2UoMCwgc2VsZi5yZXN1bHRJbmRleHNbaW5kZXhdLCAwKVxuICAgICAgfSkoaSlcbiAgICB9XG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlciB3ZWV4LXBpY2tlci1maXhlZCB3ZWV4LXBpY2tlci1vcGVuJ1xuICB9LFxuXG4gIGhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5jbGFzc05hbWUgPSAnd2VleC1waWNrZXIgd2VleC1waWNrZXItZml4ZWQgd2VleC1waWNrZXItY2xvc2UnXG4gIH1cbn1cblxuIiwiZXhwb3J0IHsgaG9va3MsIHNldEhvb2tDYWxsYmFjayB9O1xuXG52YXIgaG9va0NhbGxiYWNrO1xuXG5mdW5jdGlvbiBob29rcyAoKSB7XG4gICAgcmV0dXJuIGhvb2tDYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG4vLyBUaGlzIGlzIGRvbmUgdG8gcmVnaXN0ZXIgdGhlIG1ldGhvZCBjYWxsZWQgd2l0aCBtb21lbnQoKVxuLy8gd2l0aG91dCBjcmVhdGluZyBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG5mdW5jdGlvbiBzZXRIb29rQ2FsbGJhY2sgKGNhbGxiYWNrKSB7XG4gICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FycmF5KGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2JqZWN0KGlucHV0KSB7XG4gICAgLy8gSUU4IHdpbGwgdHJlYXQgdW5kZWZpbmVkIGFuZCBudWxsIGFzIG9iamVjdCBpZiBpdCB3YXNuJ3QgZm9yXG4gICAgLy8gaW5wdXQgIT0gbnVsbFxuICAgIHJldHVybiBpbnB1dCAhPSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmopIHtcbiAgICB2YXIgaztcbiAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgIC8vIGV2ZW4gaWYgaXRzIG5vdCBvd24gcHJvcGVydHkgSSdkIHN0aWxsIGNhbGwgaXQgbm9uLWVtcHR5XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bWJlcihpbnB1dCkge1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgRGF0ZSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAoYXJyLCBmbikge1xuICAgIHZhciByZXMgPSBbXSwgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHJlcy5wdXNoKGZuKGFycltpXSwgaSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzT3duUHJvcChhLCBiKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBiKTtcbn1cbiIsImltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4vaGFzLW93bi1wcm9wJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcbiAgICBmb3IgKHZhciBpIGluIGIpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgaSkpIHtcbiAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc093blByb3AoYiwgJ3RvU3RyaW5nJykpIHtcbiAgICAgICAgYS50b1N0cmluZyA9IGIudG9TdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKGhhc093blByb3AoYiwgJ3ZhbHVlT2YnKSkge1xuICAgICAgICBhLnZhbHVlT2YgPSBiLnZhbHVlT2Y7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVMb2NhbE9yVVRDIH0gZnJvbSAnLi9mcm9tLWFueXRoaW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVUQyAoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgdHJ1ZSkudXRjKCk7XG59XG4iLCJmdW5jdGlvbiBkZWZhdWx0UGFyc2luZ0ZsYWdzKCkge1xuICAgIC8vIFdlIG5lZWQgdG8gZGVlcCBjbG9uZSB0aGlzIG9iamVjdC5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbXB0eSAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgdW51c2VkVG9rZW5zICAgIDogW10sXG4gICAgICAgIHVudXNlZElucHV0ICAgICA6IFtdLFxuICAgICAgICBvdmVyZmxvdyAgICAgICAgOiAtMixcbiAgICAgICAgY2hhcnNMZWZ0T3ZlciAgIDogMCxcbiAgICAgICAgbnVsbElucHV0ICAgICAgIDogZmFsc2UsXG4gICAgICAgIGludmFsaWRNb250aCAgICA6IG51bGwsXG4gICAgICAgIGludmFsaWRGb3JtYXQgICA6IGZhbHNlLFxuICAgICAgICB1c2VySW52YWxpZGF0ZWQgOiBmYWxzZSxcbiAgICAgICAgaXNvICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIHBhcnNlZERhdGVQYXJ0cyA6IFtdLFxuICAgICAgICBtZXJpZGllbSAgICAgICAgOiBudWxsXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKG0pIHtcbiAgICBpZiAobS5fcGYgPT0gbnVsbCkge1xuICAgICAgICBtLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIG0uX3BmO1xufVxuIiwidmFyIHNvbWU7XG5pZiAoQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICBzb21lID0gQXJyYXkucHJvdG90eXBlLnNvbWU7XG59IGVsc2Uge1xuICAgIHNvbWUgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgaW4gdCAmJiBmdW4uY2FsbCh0aGlzLCB0W2ldLCBpLCB0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHNvbWUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IGV4dGVuZCBmcm9tICcuLi91dGlscy9leHRlbmQnO1xuaW1wb3J0IHsgY3JlYXRlVVRDIH0gZnJvbSAnLi91dGMnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgc29tZSBmcm9tICcuLi91dGlscy9zb21lJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQobSkge1xuICAgIGlmIChtLl9pc1ZhbGlkID09IG51bGwpIHtcbiAgICAgICAgdmFyIGZsYWdzID0gZ2V0UGFyc2luZ0ZsYWdzKG0pO1xuICAgICAgICB2YXIgcGFyc2VkUGFydHMgPSBzb21lLmNhbGwoZmxhZ3MucGFyc2VkRGF0ZVBhcnRzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgIT0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpc05vd1ZhbGlkID0gIWlzTmFOKG0uX2QuZ2V0VGltZSgpKSAmJlxuICAgICAgICAgICAgZmxhZ3Mub3ZlcmZsb3cgPCAwICYmXG4gICAgICAgICAgICAhZmxhZ3MuZW1wdHkgJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkTW9udGggJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkV2Vla2RheSAmJlxuICAgICAgICAgICAgIWZsYWdzLm51bGxJbnB1dCAmJlxuICAgICAgICAgICAgIWZsYWdzLmludmFsaWRGb3JtYXQgJiZcbiAgICAgICAgICAgICFmbGFncy51c2VySW52YWxpZGF0ZWQgJiZcbiAgICAgICAgICAgICghZmxhZ3MubWVyaWRpZW0gfHwgKGZsYWdzLm1lcmlkaWVtICYmIHBhcnNlZFBhcnRzKSk7XG5cbiAgICAgICAgaWYgKG0uX3N0cmljdCkge1xuICAgICAgICAgICAgaXNOb3dWYWxpZCA9IGlzTm93VmFsaWQgJiZcbiAgICAgICAgICAgICAgICBmbGFncy5jaGFyc0xlZnRPdmVyID09PSAwICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MudW51c2VkVG9rZW5zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLmJpZ0hvdXIgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPYmplY3QuaXNGcm96ZW4gPT0gbnVsbCB8fCAhT2JqZWN0LmlzRnJvemVuKG0pKSB7XG4gICAgICAgICAgICBtLl9pc1ZhbGlkID0gaXNOb3dWYWxpZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc05vd1ZhbGlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtLl9pc1ZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZCAoZmxhZ3MpIHtcbiAgICB2YXIgbSA9IGNyZWF0ZVVUQyhOYU4pO1xuICAgIGlmIChmbGFncyAhPSBudWxsKSB7XG4gICAgICAgIGV4dGVuZChnZXRQYXJzaW5nRmxhZ3MobSksIGZsYWdzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS51c2VySW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcbn1cbiIsImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi4vdXRpbHMvaGFzLW93bi1wcm9wJztcbmltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICcuLi91dGlscy9pcy11bmRlZmluZWQnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5cbi8vIFBsdWdpbnMgdGhhdCBhZGQgcHJvcGVydGllcyBzaG91bGQgYWxzbyBhZGQgdGhlIGtleSBoZXJlIChudWxsIHZhbHVlKSxcbi8vIHNvIHdlIGNhbiBwcm9wZXJseSBjbG9uZSBvdXJzZWx2ZXMuXG52YXIgbW9tZW50UHJvcGVydGllcyA9IGhvb2tzLm1vbWVudFByb3BlcnRpZXMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlDb25maWcodG8sIGZyb20pIHtcbiAgICB2YXIgaSwgcHJvcCwgdmFsO1xuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc0FNb21lbnRPYmplY3QpKSB7XG4gICAgICAgIHRvLl9pc0FNb21lbnRPYmplY3QgPSBmcm9tLl9pc0FNb21lbnRPYmplY3Q7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faSkpIHtcbiAgICAgICAgdG8uX2kgPSBmcm9tLl9pO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2YpKSB7XG4gICAgICAgIHRvLl9mID0gZnJvbS5fZjtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9sKSkge1xuICAgICAgICB0by5fbCA9IGZyb20uX2w7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fc3RyaWN0KSkge1xuICAgICAgICB0by5fc3RyaWN0ID0gZnJvbS5fc3RyaWN0O1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3R6bSkpIHtcbiAgICAgICAgdG8uX3R6bSA9IGZyb20uX3R6bTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc1VUQykpIHtcbiAgICAgICAgdG8uX2lzVVRDID0gZnJvbS5faXNVVEM7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fb2Zmc2V0KSkge1xuICAgICAgICB0by5fb2Zmc2V0ID0gZnJvbS5fb2Zmc2V0O1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3BmKSkge1xuICAgICAgICB0by5fcGYgPSBnZXRQYXJzaW5nRmxhZ3MoZnJvbSk7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbG9jYWxlKSkge1xuICAgICAgICB0by5fbG9jYWxlID0gZnJvbS5fbG9jYWxlO1xuICAgIH1cblxuICAgIGlmIChtb21lbnRQcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChpIGluIG1vbWVudFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHByb3AgPSBtb21lbnRQcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgdmFsID0gZnJvbVtwcm9wXTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQodmFsKSkge1xuICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG52YXIgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4vLyBNb21lbnQgcHJvdG90eXBlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIE1vbWVudChjb25maWcpIHtcbiAgICBjb3B5Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG4gICAgdGhpcy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5fZCAhPSBudWxsID8gY29uZmlnLl9kLmdldFRpbWUoKSA6IE5hTik7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICB0aGlzLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wIGluIGNhc2UgdXBkYXRlT2Zmc2V0IGNyZWF0ZXMgbmV3IG1vbWVudFxuICAgIC8vIG9iamVjdHMuXG4gICAgaWYgKHVwZGF0ZUluUHJvZ3Jlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vbWVudCAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1vbWVudCB8fCAob2JqICE9IG51bGwgJiYgb2JqLl9pc0FNb21lbnRPYmplY3QgIT0gbnVsbCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYnNGbG9vciAobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgLy8gLTAgLT4gMFxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcikgfHwgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgIH1cbn1cbiIsImltcG9ydCBhYnNGbG9vciBmcm9tICcuL2Ficy1mbG9vcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50KGFyZ3VtZW50Rm9yQ29lcmNpb24pIHtcbiAgICB2YXIgY29lcmNlZE51bWJlciA9ICthcmd1bWVudEZvckNvZXJjaW9uLFxuICAgICAgICB2YWx1ZSA9IDA7XG5cbiAgICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xuICAgICAgICB2YWx1ZSA9IGFic0Zsb29yKGNvZXJjZWROdW1iZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cbiIsImltcG9ydCB0b0ludCBmcm9tICcuL3RvLWludCc7XG5cbi8vIGNvbXBhcmUgdHdvIGFycmF5cywgcmV0dXJuIHRoZSBudW1iZXIgb2YgZGlmZmVyZW5jZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBcnJheXMoYXJyYXkxLCBhcnJheTIsIGRvbnRDb252ZXJ0KSB7XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICBsZW5ndGhEaWZmID0gTWF0aC5hYnMoYXJyYXkxLmxlbmd0aCAtIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICBkaWZmcyA9IDAsXG4gICAgICAgIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmICgoZG9udENvbnZlcnQgJiYgYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHx8XG4gICAgICAgICAgICAoIWRvbnRDb252ZXJ0ICYmIHRvSW50KGFycmF5MVtpXSkgIT09IHRvSW50KGFycmF5MltpXSkpKSB7XG4gICAgICAgICAgICBkaWZmcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaWZmcyArIGxlbmd0aERpZmY7XG59XG4iLCJpbXBvcnQgZXh0ZW5kIGZyb20gJy4vZXh0ZW5kJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi9ob29rcyc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnLi9pcy11bmRlZmluZWQnO1xuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICAgIGlmIChob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPT09IGZhbHNlICYmXG4gICAgICAgICAgICAodHlwZW9mIGNvbnNvbGUgIT09ICAndW5kZWZpbmVkJykgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignRGVwcmVjYXRpb24gd2FybmluZzogJyArIG1zZyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlKG1zZywgZm4pIHtcbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgIHJldHVybiBleHRlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihudWxsLCBtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaXJzdFRpbWUpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICB2YXIgYXJnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnICs9ICdcXG5bJyArIGkgKyAnXSAnO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgKz0ga2V5ICsgJzogJyArIGFyZ3VtZW50c1swXVtrZXldICsgJywgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2UoMCwgLTIpOyAvLyBSZW1vdmUgdHJhaWxpbmcgY29tbWEgYW5kIHNwYWNlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdhcm4obXNnICsgJ1xcbkFyZ3VtZW50czogJyArIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpLmpvaW4oJycpICsgJ1xcbicgKyAobmV3IEVycm9yKCkpLnN0YWNrKTtcbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sIGZuKTtcbn1cblxudmFyIGRlcHJlY2F0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlU2ltcGxlKG5hbWUsIG1zZykge1xuICAgIGlmIChob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICBob29rcy5kZXByZWNhdGlvbkhhbmRsZXIobmFtZSwgbXNnKTtcbiAgICB9XG4gICAgaWYgKCFkZXByZWNhdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgd2Fybihtc2cpO1xuICAgICAgICBkZXByZWNhdGlvbnNbbmFtZV0gPSB0cnVlO1xuICAgIH1cbn1cblxuaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID0gZmFsc2U7XG5ob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgPSBudWxsO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuLi91dGlscy9pcy1mdW5jdGlvbic7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4uL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vdXRpbHMvaXMtb2JqZWN0JztcbmltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4uL3V0aWxzL2hhcy1vd24tcHJvcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQgKGNvbmZpZykge1xuICAgIHZhciBwcm9wLCBpO1xuICAgIGZvciAoaSBpbiBjb25maWcpIHtcbiAgICAgICAgcHJvcCA9IGNvbmZpZ1tpXTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcCkpIHtcbiAgICAgICAgICAgIHRoaXNbaV0gPSBwcm9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1snXycgKyBpXSA9IHByb3A7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIC8vIExlbmllbnQgb3JkaW5hbCBwYXJzaW5nIGFjY2VwdHMganVzdCBhIG51bWJlciBpbiBhZGRpdGlvbiB0b1xuICAgIC8vIG51bWJlciArIChwb3NzaWJseSkgc3R1ZmYgY29taW5nIGZyb20gX29yZGluYWxQYXJzZUxlbmllbnQuXG4gICAgdGhpcy5fb3JkaW5hbFBhcnNlTGVuaWVudCA9IG5ldyBSZWdFeHAodGhpcy5fb3JkaW5hbFBhcnNlLnNvdXJjZSArICd8JyArICgvXFxkezEsMn0vKS5zb3VyY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY2hpbGRDb25maWcpIHtcbiAgICB2YXIgcmVzID0gZXh0ZW5kKHt9LCBwYXJlbnRDb25maWcpLCBwcm9wO1xuICAgIGZvciAocHJvcCBpbiBjaGlsZENvbmZpZykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW3Byb3BdKSkge1xuICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IHt9O1xuICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIHBhcmVudENvbmZpZ1twcm9wXSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgY2hpbGRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZENvbmZpZ1twcm9wXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzW3Byb3BdID0gY2hpbGRDb25maWdbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChwcm9wIGluIHBhcmVudENvbmZpZykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHByb3ApICYmXG4gICAgICAgICAgICAgICAgIWhhc093blByb3AoY2hpbGRDb25maWcsIHByb3ApICYmXG4gICAgICAgICAgICAgICAgaXNPYmplY3QocGFyZW50Q29uZmlnW3Byb3BdKSkge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGNoYW5nZXMgdG8gcHJvcGVydGllcyBkb24ndCBtb2RpZnkgcGFyZW50IGNvbmZpZ1xuICAgICAgICAgICAgcmVzW3Byb3BdID0gZXh0ZW5kKHt9LCByZXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gTG9jYWxlKGNvbmZpZykge1xuICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4vaGFzLW93bi1wcm9wJztcblxudmFyIGtleXM7XG5cbmlmIChPYmplY3Qua2V5cykge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cztcbn0gZWxzZSB7XG4gICAga2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGksIHJlcyA9IFtdO1xuICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChvYmosIGkpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xufVxuXG5leHBvcnQgeyBrZXlzIGFzIGRlZmF1bHQgfTtcbiIsImV4cG9ydCB2YXIgZGVmYXVsdENhbGVuZGFyID0ge1xuICAgIHNhbWVEYXkgOiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgbmV4dERheSA6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIFthdF0gTFQnLFxuICAgIGxhc3REYXkgOiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG59O1xuXG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuLi91dGlscy9pcy1mdW5jdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxlbmRhciAoa2V5LCBtb20sIG5vdykge1xuICAgIHZhciBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhcltrZXldIHx8IHRoaXMuX2NhbGVuZGFyWydzYW1lRWxzZSddO1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dCkgPyBvdXRwdXQuY2FsbChtb20sIG5vdykgOiBvdXRwdXQ7XG59XG4iLCJleHBvcnQgdmFyIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCA9IHtcbiAgICBMVFMgIDogJ2g6bW06c3MgQScsXG4gICAgTFQgICA6ICdoOm1tIEEnLFxuICAgIEwgICAgOiAnTU0vREQvWVlZWScsXG4gICAgTEwgICA6ICdNTU1NIEQsIFlZWVknLFxuICAgIExMTCAgOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gICAgTExMTCA6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvbmdEYXRlRm9ybWF0IChrZXkpIHtcbiAgICB2YXIgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSxcbiAgICAgICAgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG59XG4iLCJleHBvcnQgdmFyIGRlZmF1bHRJbnZhbGlkRGF0ZSA9ICdJbnZhbGlkIGRhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZERhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnZhbGlkRGF0ZTtcbn1cbiIsImV4cG9ydCB2YXIgZGVmYXVsdE9yZGluYWwgPSAnJWQnO1xuZXhwb3J0IHZhciBkZWZhdWx0T3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGluYWwgKG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9vcmRpbmFsLnJlcGxhY2UoJyVkJywgbnVtYmVyKTtcbn1cblxuIiwiZXhwb3J0IHZhciBkZWZhdWx0UmVsYXRpdmVUaW1lID0ge1xuICAgIGZ1dHVyZSA6ICdpbiAlcycsXG4gICAgcGFzdCAgIDogJyVzIGFnbycsXG4gICAgcyAgOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgbSAgOiAnYSBtaW51dGUnLFxuICAgIG1tIDogJyVkIG1pbnV0ZXMnLFxuICAgIGggIDogJ2FuIGhvdXInLFxuICAgIGhoIDogJyVkIGhvdXJzJyxcbiAgICBkICA6ICdhIGRheScsXG4gICAgZGQgOiAnJWQgZGF5cycsXG4gICAgTSAgOiAnYSBtb250aCcsXG4gICAgTU0gOiAnJWQgbW9udGhzJyxcbiAgICB5ICA6ICdhIHllYXInLFxuICAgIHl5IDogJyVkIHllYXJzJ1xufTtcblxuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvaXMtZnVuY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lIChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIHtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW3N0cmluZ107XG4gICAgcmV0dXJuIChpc0Z1bmN0aW9uKG91dHB1dCkpID9cbiAgICAgICAgb3V0cHV0KG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkgOlxuICAgICAgICBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtYmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc3RGdXR1cmUgKGRpZmYsIG91dHB1dCkge1xuICAgIHZhciBmb3JtYXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbZGlmZiA+IDAgPyAnZnV0dXJlJyA6ICdwYXN0J107XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oZm9ybWF0KSA/IGZvcm1hdChvdXRwdXQpIDogZm9ybWF0LnJlcGxhY2UoLyVzL2ksIG91dHB1dCk7XG59XG4iLCJpbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuLi91dGlscy9oYXMtb3duLXByb3AnO1xuXG52YXIgYWxpYXNlcyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVW5pdEFsaWFzICh1bml0LCBzaG9ydGhhbmQpIHtcbiAgICB2YXIgbG93ZXJDYXNlID0gdW5pdC50b0xvd2VyQ2FzZSgpO1xuICAgIGFsaWFzZXNbbG93ZXJDYXNlXSA9IGFsaWFzZXNbbG93ZXJDYXNlICsgJ3MnXSA9IGFsaWFzZXNbc2hvcnRoYW5kXSA9IHVuaXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVVbml0cyh1bml0cykge1xuICAgIHJldHVybiB0eXBlb2YgdW5pdHMgPT09ICdzdHJpbmcnID8gYWxpYXNlc1t1bml0c10gfHwgYWxpYXNlc1t1bml0cy50b0xvd2VyQ2FzZSgpXSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdFVuaXRzKGlucHV0T2JqZWN0KSB7XG4gICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IHt9LFxuICAgICAgICBub3JtYWxpemVkUHJvcCxcbiAgICAgICAgcHJvcDtcblxuICAgIGZvciAocHJvcCBpbiBpbnB1dE9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChpbnB1dE9iamVjdCwgcHJvcCkpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplVW5pdHMocHJvcCk7XG4gICAgICAgICAgICBpZiAobm9ybWFsaXplZFByb3ApIHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkSW5wdXRbbm9ybWFsaXplZFByb3BdID0gaW5wdXRPYmplY3RbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZElucHV0O1xufVxuXG4iLCJ2YXIgcHJpb3JpdGllcyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVW5pdFByaW9yaXR5KHVuaXQsIHByaW9yaXR5KSB7XG4gICAgcHJpb3JpdGllc1t1bml0XSA9IHByaW9yaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0c09iaikge1xuICAgIHZhciB1bml0cyA9IFtdO1xuICAgIGZvciAodmFyIHUgaW4gdW5pdHNPYmopIHtcbiAgICAgICAgdW5pdHMucHVzaCh7dW5pdDogdSwgcHJpb3JpdHk6IHByaW9yaXRpZXNbdV19KTtcbiAgICB9XG4gICAgdW5pdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuaXRzO1xufVxuIiwiaW1wb3J0IHsgbm9ybWFsaXplVW5pdHMsIG5vcm1hbGl6ZU9iamVjdFVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgeyBnZXRQcmlvcml0aXplZFVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2lzLWZ1bmN0aW9uJztcblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUdldFNldCAodW5pdCwga2VlcFRpbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZXQodGhpcywgdW5pdCwgdmFsdWUpO1xuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIGtlZXBUaW1lKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdldCh0aGlzLCB1bml0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQgKG1vbSwgdW5pdCkge1xuICAgIHJldHVybiBtb20uaXNWYWxpZCgpID9cbiAgICAgICAgbW9tLl9kWydnZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKCkgOiBOYU47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQgKG1vbSwgdW5pdCwgdmFsdWUpIHtcbiAgICBpZiAobW9tLmlzVmFsaWQoKSkge1xuICAgICAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0odmFsdWUpO1xuICAgIH1cbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nR2V0ICh1bml0cykge1xuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICByZXR1cm4gdGhpc1t1bml0c10oKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1NldCAodW5pdHMsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB1bml0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVPYmplY3RVbml0cyh1bml0cyk7XG4gICAgICAgIHZhciBwcmlvcml0aXplZCA9IGdldFByaW9yaXRpemVkVW5pdHModW5pdHMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXRpemVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW3ByaW9yaXRpemVkW2ldLnVuaXRdKHVuaXRzW3ByaW9yaXRpemVkW2ldLnVuaXRdKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB6ZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgdmFyIGFic051bWJlciA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoLFxuICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG4gICAgcmV0dXJuIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgK1xuICAgICAgICBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKSArIGFic051bWJlcjtcbn1cbiIsImltcG9ydCB6ZXJvRmlsbCBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuXG5leHBvcnQgdmFyIGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oW0hoXW1tKHNzKT98TW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UW8/fFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fGtrP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xuXG52YXIgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcblxudmFyIGZvcm1hdEZ1bmN0aW9ucyA9IHt9O1xuXG5leHBvcnQgdmFyIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbi8vIHRva2VuOiAgICAnTSdcbi8vIHBhZGRlZDogICBbJ01NJywgMl1cbi8vIG9yZGluYWw6ICAnTW8nXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb3JtYXRUb2tlbiAodG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZnVuYyA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tjYWxsYmFja10oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgfVxuICAgIGlmIChwYWRkZWQpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG9yZGluYWwpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRva2VuKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCkge1xuICAgIHZhciBhcnJheSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSwgaSwgbGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXSkge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb20pIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnLCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG91dHB1dCArPSBhcnJheVtpXSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJyYXlbaV0uY2FsbChtb20sIGZvcm1hdCkgOiBhcnJheVtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG59XG5cbi8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBtLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcbiAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbG9jYWxlKSB7XG4gICAgdmFyIGkgPSA1O1xuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUubG9uZ0RhdGVGb3JtYXQoaW5wdXQpIHx8IGlucHV0O1xuICAgIH1cblxuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICBpIC09IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cbiIsImV4cG9ydCB2YXIgbWF0Y2gxICAgICAgICAgPSAvXFxkLzsgICAgICAgICAgICAvLyAgICAgICAwIC0gOVxuZXhwb3J0IHZhciBtYXRjaDIgICAgICAgICA9IC9cXGRcXGQvOyAgICAgICAgICAvLyAgICAgIDAwIC0gOTlcbmV4cG9ydCB2YXIgbWF0Y2gzICAgICAgICAgPSAvXFxkezN9LzsgICAgICAgICAvLyAgICAgMDAwIC0gOTk5XG5leHBvcnQgdmFyIG1hdGNoNCAgICAgICAgID0gL1xcZHs0fS87ICAgICAgICAgLy8gICAgMDAwMCAtIDk5OTlcbmV4cG9ydCB2YXIgbWF0Y2g2ICAgICAgICAgPSAvWystXT9cXGR7Nn0vOyAgICAvLyAtOTk5OTk5IC0gOTk5OTk5XG5leHBvcnQgdmFyIG1hdGNoMXRvMiAgICAgID0gL1xcZFxcZD8vOyAgICAgICAgIC8vICAgICAgIDAgLSA5OVxuZXhwb3J0IHZhciBtYXRjaDN0bzQgICAgICA9IC9cXGRcXGRcXGRcXGQ/LzsgICAgIC8vICAgICA5OTkgLSA5OTk5XG5leHBvcnQgdmFyIG1hdGNoNXRvNiAgICAgID0gL1xcZFxcZFxcZFxcZFxcZFxcZD8vOyAvLyAgIDk5OTk5IC0gOTk5OTk5XG5leHBvcnQgdmFyIG1hdGNoMXRvMyAgICAgID0gL1xcZHsxLDN9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OVxuZXhwb3J0IHZhciBtYXRjaDF0bzQgICAgICA9IC9cXGR7MSw0fS87ICAgICAgIC8vICAgICAgIDAgLSA5OTk5XG5leHBvcnQgdmFyIG1hdGNoMXRvNiAgICAgID0gL1srLV0/XFxkezEsNn0vOyAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuXG5leHBvcnQgdmFyIG1hdGNoVW5zaWduZWQgID0gL1xcZCsvOyAgICAgICAgICAgLy8gICAgICAgMCAtIGluZlxuZXhwb3J0IHZhciBtYXRjaFNpZ25lZCAgICA9IC9bKy1dP1xcZCsvOyAgICAgIC8vICAgIC1pbmYgLSBpbmZcblxuZXhwb3J0IHZhciBtYXRjaE9mZnNldCAgICA9IC9afFsrLV1cXGRcXGQ6P1xcZFxcZC9naTsgLy8gKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG5leHBvcnQgdmFyIG1hdGNoU2hvcnRPZmZzZXQgPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9naTsgLy8gKzAwIC0wMCArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcblxuZXhwb3J0IHZhciBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy87IC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG5cbi8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xuZXhwb3J0IHZhciBtYXRjaFdvcmQgPSAvWzAtOV0qWydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdK3xbXFx1MDYwMC1cXHUwNkZGXFwvXSsoXFxzKj9bXFx1MDYwMC1cXHUwNkZGXSspezEsMn0vaTtcblxuXG5pbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuLi91dGlscy9oYXMtb3duLXByb3AnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvaXMtZnVuY3Rpb24nO1xuXG52YXIgcmVnZXhlcyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVnZXhUb2tlbiAodG9rZW4sIHJlZ2V4LCBzdHJpY3RSZWdleCkge1xuICAgIHJlZ2V4ZXNbdG9rZW5dID0gaXNGdW5jdGlvbihyZWdleCkgPyByZWdleCA6IGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlRGF0YSkge1xuICAgICAgICByZXR1cm4gKGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4KSA/IHN0cmljdFJlZ2V4IDogcmVnZXg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbiAodG9rZW4sIGNvbmZpZykge1xuICAgIGlmICghaGFzT3duUHJvcChyZWdleGVzLCB0b2tlbikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodW5lc2NhcGVGb3JtYXQodG9rZW4pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVnZXhlc1t0b2tlbl0oY29uZmlnLl9zdHJpY3QsIGNvbmZpZy5fbG9jYWxlKTtcbn1cblxuLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQocykge1xuICAgIHJldHVybiByZWdleEVzY2FwZShzLnJlcGxhY2UoJ1xcXFwnLCAnJykucmVwbGFjZSgvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLCBmdW5jdGlvbiAobWF0Y2hlZCwgcDEsIHAyLCBwMywgcDQpIHtcbiAgICAgICAgcmV0dXJuIHAxIHx8IHAyIHx8IHAzIHx8IHA0O1xuICAgIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHMpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbn1cbiIsImltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4uL3V0aWxzL2hhcy1vd24tcHJvcCc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi4vdXRpbHMvaXMtbnVtYmVyJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuXG52YXIgdG9rZW5zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJzZVRva2VuICh0b2tlbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgaSwgZnVuYyA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRva2VuID0gW3Rva2VuXTtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGNhbGxiYWNrKSkge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdG9rZW5zW3Rva2VuW2ldXSA9IGZ1bmM7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkV2Vla1BhcnNlVG9rZW4gKHRva2VuLCBjYWxsYmFjaykge1xuICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xuICAgICAgICBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIHRva2VuKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBpbnB1dCwgY29uZmlnKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xuICAgICAgICB0b2tlbnNbdG9rZW5dKGlucHV0LCBjb25maWcuX2EsIGNvbmZpZywgdG9rZW4pO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgWUVBUiA9IDA7XG5leHBvcnQgdmFyIE1PTlRIID0gMTtcbmV4cG9ydCB2YXIgREFURSA9IDI7XG5leHBvcnQgdmFyIEhPVVIgPSAzO1xuZXhwb3J0IHZhciBNSU5VVEUgPSA0O1xuZXhwb3J0IHZhciBTRUNPTkQgPSA1O1xuZXhwb3J0IHZhciBNSUxMSVNFQ09ORCA9IDY7XG5leHBvcnQgdmFyIFdFRUsgPSA3O1xuZXhwb3J0IHZhciBXRUVLREFZID0gODtcbiIsInZhciBpbmRleE9mO1xuXG5pZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICBpbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG59IGVsc2Uge1xuICAgIGluZGV4T2YgPSBmdW5jdGlvbiAobykge1xuICAgICAgICAvLyBJIGtub3dcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXSA9PT0gbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xufVxuXG5leHBvcnQgeyBpbmRleE9mIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGdldCB9IGZyb20gJy4uL21vbWVudC9nZXQtc2V0JztcbmltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4uL3V0aWxzL2hhcy1vd24tcHJvcCc7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiwgbWF0Y2hXb3JkLCByZWdleEVzY2FwZSB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCB7IE1PTlRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi91dGlscy9pcy1hcnJheSc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi4vdXRpbHMvaXMtbnVtYmVyJztcbmltcG9ydCBpbmRleE9mIGZyb20gJy4uL3V0aWxzL2luZGV4LW9mJztcbmltcG9ydCB7IGNyZWF0ZVVUQyB9IGZyb20gJy4uL2NyZWF0ZS91dGMnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCArIDEsIDApKS5nZXRVVENEYXRlKCk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMl0sICdNbycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5tb250aCgpICsgMTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5tb250aHNTaG9ydCh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdNTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5tb250aHModGhpcywgZm9ybWF0KTtcbn0pO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnbW9udGgnLCAnTScpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ21vbnRoJywgOCk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignTScsICAgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdNTScsICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignTU1NJywgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignTU1NTScsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNSZWdleChpc1N0cmljdCk7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ00nLCAnTU0nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W01PTlRIXSA9IHRvSW50KGlucHV0KSAtIDE7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ01NTScsICdNTU1NJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBjb25maWcuX2xvY2FsZS5tb250aHNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cbiAgICBpZiAobW9udGggIT0gbnVsbCkge1xuICAgICAgICBhcnJheVtNT05USF0gPSBtb250aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkTW9udGggPSBpbnB1dDtcbiAgICB9XG59KTtcblxuLy8gTE9DQUxFU1xuXG52YXIgTU9OVEhTX0lOX0ZPUk1BVCA9IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/LztcbmV4cG9ydCB2YXIgZGVmYXVsdExvY2FsZU1vbnRocyA9ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpO1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZU1vbnRocyAobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHM7XG4gICAgfVxuICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRocykgPyB0aGlzLl9tb250aHNbbS5tb250aCgpXSA6XG4gICAgICAgIHRoaXMuX21vbnRoc1sodGhpcy5fbW9udGhzLmlzRm9ybWF0IHx8IE1PTlRIU19JTl9GT1JNQVQpLnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXVttLm1vbnRoKCldO1xufVxuXG5leHBvcnQgdmFyIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKTtcbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVNb250aHNTaG9ydCAobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydDtcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzU2hvcnQpID8gdGhpcy5fbW9udGhzU2hvcnRbbS5tb250aCgpXSA6XG4gICAgICAgIHRoaXMuX21vbnRoc1Nob3J0W01PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSddW20ubW9udGgoKV07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgaWksIG1vbSwgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRocyhtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZU1vbnRoc1BhcnNlIChtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlU3RyaWN0UGFyc2UuY2FsbCh0aGlzLCBtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgfVxuXG4gICAgLy8gVE9ETzogYWRkIHNvcnRpbmdcbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyXG4gICAgLy8gc2VlIHNvcnRpbmcgaW4gY29tcHV0ZU1vbnRoc1BhcnNlXG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJywgJ2knKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJywgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0cmljdCAmJiAhdGhpcy5fbW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHJlZ2V4ID0gJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykgKyAnfF4nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKTtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NTScgJiYgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTScgJiYgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fbW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TW9udGggKG1vbSwgdmFsdWUpIHtcbiAgICB2YXIgZGF5T2ZNb250aDtcblxuICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAvLyBObyBvcFxuICAgICAgICByZXR1cm4gbW9tO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b0ludCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1vbS5sb2NhbGVEYXRhKCkubW9udGhzUGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgLy8gVE9ETzogQW5vdGhlciBzaWxlbnQgZmFpbHVyZT9cbiAgICAgICAgICAgIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRheU9mTW9udGggPSBNYXRoLm1pbihtb20uZGF0ZSgpLCBkYXlzSW5Nb250aChtb20ueWVhcigpLCB2YWx1ZSkpO1xuICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyAnTW9udGgnXSh2YWx1ZSwgZGF5T2ZNb250aCk7XG4gICAgcmV0dXJuIG1vbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldE1vbnRoICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHNldE1vbnRoKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0KHRoaXMsICdNb250aCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNJbk1vbnRoICgpIHtcbiAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSk7XG59XG5cbnZhciBkZWZhdWx0TW9udGhzU2hvcnRSZWdleCA9IG1hdGNoV29yZDtcbmV4cG9ydCBmdW5jdGlvbiBtb250aHNTaG9ydFJlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgIH1cbn1cblxudmFyIGRlZmF1bHRNb250aHNSZWdleCA9IG1hdGNoV29yZDtcbmV4cG9ydCBmdW5jdGlvbiBtb250aHNSZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gZGVmYXVsdE1vbnRoc1JlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZU1vbnRoc1BhcnNlICgpIHtcbiAgICBmdW5jdGlvbiBjbXBMZW5SZXYoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgc2hvcnRQaWVjZXMgPSBbXSwgbG9uZ1BpZWNlcyA9IFtdLCBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICBpLCBtb207XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykpO1xuICAgICAgICBsb25nUGllY2VzLnB1c2godGhpcy5tb250aHMobW9tLCAnJykpO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSB0aGlzLl9tb250aHNSZWdleDtcbiAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG59XG4iLCJpbXBvcnQgeyBtYWtlR2V0U2V0IH0gZnJvbSAnLi4vbW9tZW50L2dldC1zZXQnO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDF0bzQsIG1hdGNoMXRvNiwgbWF0Y2gyLCBtYXRjaDQsIG1hdGNoNiwgbWF0Y2hTaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgeyBZRUFSIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1knLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHkgPSB0aGlzLnllYXIoKTtcbiAgICByZXR1cm4geSA8PSA5OTk5ID8gJycgKyB5IDogJysnICsgeTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyKCkgJSAxMDA7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZJywgICA0XSwgICAgICAgMCwgJ3llYXInKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVknLCAgNV0sICAgICAgIDAsICd5ZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZWScsIDYsIHRydWVdLCAwLCAneWVhcicpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygneWVhcicsICd5Jyk7XG5cbi8vIFBSSU9SSVRJRVNcblxuYWRkVW5pdFByaW9yaXR5KCd5ZWFyJywgMSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignWScsICAgICAgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignWVknLCAgICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignWVlZWScsICAgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignWVlZWVknLCAgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignWVlZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG5hZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtZRUFSXSA9IGlucHV0Lmxlbmd0aCA9PT0gMiA/IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcbn0pO1xuYWRkUGFyc2VUb2tlbignWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ1knLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xufVxuXG5mdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDA7XG59XG5cbi8vIEhPT0tTXG5cbmhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIHRvSW50KGlucHV0KSArICh0b0ludChpbnB1dCkgPiA2OCA/IDE5MDAgOiAyMDAwKTtcbn07XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IHZhciBnZXRTZXRZZWFyID0gbWFrZUdldFNldCgnRnVsbFllYXInLCB0cnVlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldElzTGVhcFllYXIgKCkge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcigpKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRlICh5LCBtLCBkLCBoLCBNLCBzLCBtcykge1xuICAgIC8vY2FuJ3QganVzdCBhcHBseSgpIHRvIGNyZWF0ZSBhIGRhdGU6XG4gICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MTM0OC9pbnN0YW50aWF0aW5nLWEtamF2YXNjcmlwdC1vYmplY3QtYnktY2FsbGluZy1wcm90b3R5cGUtY29uc3RydWN0b3ItYXBwbHlcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKTtcblxuICAgIC8vdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwICYmIGlzRmluaXRlKGRhdGUuZ2V0RnVsbFllYXIoKSkpIHtcbiAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVVENEYXRlICh5KSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcblxuICAgIC8vdGhlIERhdGUuVVRDIGZ1bmN0aW9uIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCAmJiBpc0Zpbml0ZShkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpKSB7XG4gICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xufVxuIiwiaW1wb3J0IHsgZGF5c0luWWVhciB9IGZyb20gJy4veWVhcic7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5cbi8vIHN0YXJ0LW9mLWZpcnN0LXdlZWsgLSBzdGFydC1vZi15ZWFyXG5mdW5jdGlvbiBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpIHtcbiAgICB2YXIgLy8gZmlyc3Qtd2VlayBkYXkgLS0gd2hpY2ggamFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgKDQgZm9yIGlzbywgMSBmb3Igb3RoZXIpXG4gICAgICAgIGZ3ZCA9IDcgKyBkb3cgLSBkb3ksXG4gICAgICAgIC8vIGZpcnN0LXdlZWsgZGF5IGxvY2FsIHdlZWtkYXkgLS0gd2hpY2ggbG9jYWwgd2Vla2RheSBpcyBmd2RcbiAgICAgICAgZndkbHcgPSAoNyArIGNyZWF0ZVVUQ0RhdGUoeWVhciwgMCwgZndkKS5nZXRVVENEYXkoKSAtIGRvdykgJSA3O1xuXG4gICAgcmV0dXJuIC1md2RsdyArIGZ3ZCAtIDE7XG59XG5cbi8vaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlI0NhbGN1bGF0aW5nX2FfZGF0ZV9naXZlbl90aGVfeWVhci4yQ193ZWVrX251bWJlcl9hbmRfd2Vla2RheVxuZXhwb3J0IGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrcyh5ZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgIHZhciBsb2NhbFdlZWtkYXkgPSAoNyArIHdlZWtkYXkgLSBkb3cpICUgNyxcbiAgICAgICAgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgIGRheU9mWWVhciA9IDEgKyA3ICogKHdlZWsgLSAxKSArIGxvY2FsV2Vla2RheSArIHdlZWtPZmZzZXQsXG4gICAgICAgIHJlc1llYXIsIHJlc0RheU9mWWVhcjtcblxuICAgIGlmIChkYXlPZlllYXIgPD0gMCkge1xuICAgICAgICByZXNZZWFyID0geWVhciAtIDE7XG4gICAgICAgIHJlc0RheU9mWWVhciA9IGRheXNJblllYXIocmVzWWVhcikgKyBkYXlPZlllYXI7XG4gICAgfSBlbHNlIGlmIChkYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXIpKSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyIC0gZGF5c0luWWVhcih5ZWFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXNZZWFyID0geWVhcjtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IHJlc1llYXIsXG4gICAgICAgIGRheU9mWWVhcjogcmVzRGF5T2ZZZWFyXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtPZlllYXIobW9tLCBkb3csIGRveSkge1xuICAgIHZhciB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KG1vbS55ZWFyKCksIGRvdywgZG95KSxcbiAgICAgICAgd2VlayA9IE1hdGguZmxvb3IoKG1vbS5kYXlPZlllYXIoKSAtIHdlZWtPZmZzZXQgLSAxKSAvIDcpICsgMSxcbiAgICAgICAgcmVzV2VlaywgcmVzWWVhcjtcblxuICAgIGlmICh3ZWVrIDwgMSkge1xuICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKSAtIDE7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICAgIH0gZWxzZSBpZiAod2VlayA+IHdlZWtzSW5ZZWFyKG1vbS55ZWFyKCksIGRvdywgZG95KSkge1xuICAgICAgICByZXNXZWVrID0gd2VlayAtIHdlZWtzSW5ZZWFyKG1vbS55ZWFyKCksIGRvdywgZG95KTtcbiAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpO1xuICAgICAgICByZXNXZWVrID0gd2VlaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3ZWVrOiByZXNXZWVrLFxuICAgICAgICB5ZWFyOiByZXNZZWFyXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzSW5ZZWFyKHllYXIsIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuICAgIHJldHVybiAoZGF5c0luWWVhcih5ZWFyKSAtIHdlZWtPZmZzZXQgKyB3ZWVrT2Zmc2V0TmV4dCkgLyA3O1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgd2Vla09mWWVhciB9IGZyb20gJy4vd2Vlay1jYWxlbmRhci11dGlscyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3cnLCBbJ3d3JywgMl0sICd3bycsICd3ZWVrJyk7XG5hZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyXSwgJ1dvJywgJ2lzb1dlZWsnKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3dlZWsnLCAndycpO1xuYWRkVW5pdEFsaWFzKCdpc29XZWVrJywgJ1cnKTtcblxuLy8gUFJJT1JJVElFU1xuXG5hZGRVbml0UHJpb3JpdHkoJ3dlZWsnLCA1KTtcbmFkZFVuaXRQcmlvcml0eSgnaXNvV2VlaycsIDUpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ3cnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ3d3JywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignVycsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignV1cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsndycsICd3dycsICdXJywgJ1dXJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDEpXSA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIExPQ0FMRVNcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZVdlZWsgKG1vbSkge1xuICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95KS53ZWVrO1xufVxuXG5leHBvcnQgdmFyIGRlZmF1bHRMb2NhbGVXZWVrID0ge1xuICAgIGRvdyA6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDYgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVGaXJzdERheU9mV2VlayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZlllYXIgKCkge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0V2VlayAoaW5wdXQpIHtcbiAgICB2YXIgd2VlayA9IHRoaXMubG9jYWxlRGF0YSgpLndlZWsodGhpcyk7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0SVNPV2VlayAoaW5wdXQpIHtcbiAgICB2YXIgd2VlayA9IHdlZWtPZlllYXIodGhpcywgMSwgNCkud2VlaztcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoV29yZCwgcmVnZXhFc2NhcGUgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vdXRpbHMvaXMtYXJyYXknO1xuaW1wb3J0IGluZGV4T2YgZnJvbSAnLi4vdXRpbHMvaW5kZXgtb2YnO1xuaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi4vdXRpbHMvaGFzLW93bi1wcm9wJztcbmltcG9ydCB7IGNyZWF0ZVVUQyB9IGZyb20gJy4uL2NyZWF0ZS91dGMnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ2QnLCAwLCAnZG8nLCAnZGF5Jyk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNNaW4odGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c1Nob3J0KHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2UnLCAwLCAwLCAnd2Vla2RheScpO1xuYWRkRm9ybWF0VG9rZW4oJ0UnLCAwLCAwLCAnaXNvV2Vla2RheScpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnZGF5JywgJ2QnKTtcbmFkZFVuaXRBbGlhcygnd2Vla2RheScsICdlJyk7XG5hZGRVbml0QWxpYXMoJ2lzb1dlZWtkYXknLCAnRScpO1xuXG4vLyBQUklPUklUWVxuYWRkVW5pdFByaW9yaXR5KCdkYXknLCAxMSk7XG5hZGRVbml0UHJpb3JpdHkoJ3dlZWtkYXknLCAxMSk7XG5hZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtkYXknLCAxMSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignZCcsICAgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdlJywgICAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ0UnLCAgICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignZGQnLCAgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignZGRkJywgICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignZGRkZCcsICAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZGQnLCAnZGRkJywgJ2RkZGQnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgdmFyIHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgIGlmICh3ZWVrZGF5ICE9IG51bGwpIHtcbiAgICAgICAgd2Vlay5kID0gd2Vla2RheTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkV2Vla2RheSA9IGlucHV0O1xuICAgIH1cbn0pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2QnLCAnZScsICdFJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgaWYgKCFpc05hTihpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgfVxuXG4gICAgaW5wdXQgPSBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCkgJSA3IHx8IDc7XG4gICAgfVxuICAgIHJldHVybiBpc05hTihpbnB1dCkgPyBudWxsIDogaW5wdXQ7XG59XG5cbi8vIExPQ0FMRVNcblxuZXhwb3J0IHZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXMgPSAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyk7XG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXMgKG0sIGZvcm1hdCkge1xuICAgIGlmICghbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXM7XG4gICAgfVxuICAgIHJldHVybiBpc0FycmF5KHRoaXMuX3dlZWtkYXlzKSA/IHRoaXMuX3dlZWtkYXlzW20uZGF5KCldIDpcbiAgICAgICAgdGhpcy5fd2Vla2RheXNbdGhpcy5fd2Vla2RheXMuaXNGb3JtYXQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSddW20uZGF5KCldO1xufVxuXG5leHBvcnQgdmFyIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0ID0gJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKTtcbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1Nob3J0IChtKSB7XG4gICAgcmV0dXJuIChtKSA/IHRoaXMuX3dlZWtkYXlzU2hvcnRbbS5kYXkoKV0gOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xufVxuXG5leHBvcnQgdmFyIGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbiA9ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKTtcbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5c01pbiAobSkge1xuICAgIHJldHVybiAobSkgPyB0aGlzLl93ZWVrZGF5c01pblttLmRheSgpXSA6IHRoaXMuX3dlZWtkYXlzTWluO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdHJpY3RQYXJzZSh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgaWksIG1vbSwgbGxjID0gd2Vla2RheU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyArK2kpIHtcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNQYXJzZSAod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuXG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFwuPycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICdcXC4/JykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFwuPycpICsgJyQnLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgcmVnZXggPSAnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpICsgJ3xeJyArIHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKSArICd8XicgKyB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpO1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZGQnICYmIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkJyAmJiB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZCcgJiYgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0RGF5T2ZXZWVrIChpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cbiAgICB2YXIgZGF5ID0gdGhpcy5faXNVVEMgPyB0aGlzLl9kLmdldFVUQ0RheSgpIDogdGhpcy5fZC5nZXREYXkoKTtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgdGhpcy5sb2NhbGVEYXRhKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoaW5wdXQgLSBkYXksICdkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRMb2NhbGVEYXlPZldlZWsgKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuICAgIHZhciB3ZWVrZGF5ID0gKHRoaXMuZGF5KCkgKyA3IC0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93KSAlIDc7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrZGF5IDogdGhpcy5hZGQoaW5wdXQgLSB3ZWVrZGF5LCAnZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0SVNPRGF5T2ZXZWVrIChpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cblxuICAgIC8vIGJlaGF2ZXMgdGhlIHNhbWUgYXMgbW9tZW50I2RheSBleGNlcHRcbiAgICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxuICAgIC8vIGFzIGEgc2V0dGVyLCBzdW5kYXkgc2hvdWxkIGJlbG9uZyB0byB0aGUgcHJldmlvdXMgd2Vlay5cblxuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIHZhciB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRheSh0aGlzLmRheSgpICUgNyA/IHdlZWtkYXkgOiB3ZWVrZGF5IC0gNyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5KCkgfHwgNztcbiAgICB9XG59XG5cbnZhciBkZWZhdWx0V2Vla2RheXNSZWdleCA9IG1hdGNoV29yZDtcbmV4cG9ydCBmdW5jdGlvbiB3ZWVrZGF5c1JlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1JlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgIH1cbn1cblxudmFyIGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG5leHBvcnQgZnVuY3Rpb24gd2Vla2RheXNTaG9ydFJlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICB9XG59XG5cbnZhciBkZWZhdWx0V2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcbmV4cG9ydCBmdW5jdGlvbiB3ZWVrZGF5c01pblJlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjb21wdXRlV2Vla2RheXNQYXJzZSAoKSB7XG4gICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIG1pblBpZWNlcyA9IFtdLCBzaG9ydFBpZWNlcyA9IFtdLCBsb25nUGllY2VzID0gW10sIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksIG1vbSwgbWlucCwgc2hvcnRwLCBsb25ncDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgIG1pbnAgPSB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpO1xuICAgICAgICBzaG9ydHAgPSB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJyk7XG4gICAgICAgIGxvbmdwID0gdGhpcy53ZWVrZGF5cyhtb20sICcnKTtcbiAgICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgIHNob3J0UGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSB3ZWVrZGF5IChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcblxuICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBsb25nUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1pblBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG59XG4iLCJpbXBvcnQgeyBtYWtlR2V0U2V0IH0gZnJvbSAnLi4vbW9tZW50L2dldC1zZXQnO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIsIG1hdGNoM3RvNCwgbWF0Y2g1dG82IH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IEhPVVIsIE1JTlVURSwgU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5pbXBvcnQgemVyb0ZpbGwgZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmZ1bmN0aW9uIGhGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG91cnMoKSAlIDEyIHx8IDEyO1xufVxuXG5mdW5jdGlvbiBrRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmhvdXJzKCkgfHwgMjQ7XG59XG5cbmFkZEZvcm1hdFRva2VuKCdIJywgWydISCcsIDJdLCAwLCAnaG91cicpO1xuYWRkRm9ybWF0VG9rZW4oJ2gnLCBbJ2hoJywgMl0sIDAsIGhGb3JtYXQpO1xuYWRkRm9ybWF0VG9rZW4oJ2snLCBbJ2trJywgMl0sIDAsIGtGb3JtYXQpO1xuXG5hZGRGb3JtYXRUb2tlbignaG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIGhGb3JtYXQuYXBwbHkodGhpcykgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIGhGb3JtYXQuYXBwbHkodGhpcykgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMikgK1xuICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMik7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ0htbScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJycgKyB0aGlzLmhvdXJzKCkgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ0htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuaG91cnMoKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgIHplcm9GaWxsKHRoaXMuc2Vjb25kcygpLCAyKTtcbn0pO1xuXG5mdW5jdGlvbiBtZXJpZGllbSAodG9rZW4sIGxvd2VyY2FzZSkge1xuICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5tZXJpZGllbSh0aGlzLmhvdXJzKCksIHRoaXMubWludXRlcygpLCBsb3dlcmNhc2UpO1xuICAgIH0pO1xufVxuXG5tZXJpZGllbSgnYScsIHRydWUpO1xubWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdob3VyJywgJ2gnKTtcblxuLy8gUFJJT1JJVFlcbmFkZFVuaXRQcmlvcml0eSgnaG91cicsIDEzKTtcblxuLy8gUEFSU0lOR1xuXG5mdW5jdGlvbiBtYXRjaE1lcmlkaWVtIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbn1cblxuYWRkUmVnZXhUb2tlbignYScsICBtYXRjaE1lcmlkaWVtKTtcbmFkZFJlZ2V4VG9rZW4oJ0EnLCAgbWF0Y2hNZXJpZGllbSk7XG5hZGRSZWdleFRva2VuKCdIJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdoJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdISCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2hoJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG5hZGRSZWdleFRva2VuKCdobW0nLCBtYXRjaDN0bzQpO1xuYWRkUmVnZXhUb2tlbignaG1tc3MnLCBtYXRjaDV0bzYpO1xuYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbmFkZFJlZ2V4VG9rZW4oJ0htbXNzJywgbWF0Y2g1dG82KTtcblxuYWRkUGFyc2VUb2tlbihbJ0gnLCAnSEgnXSwgSE9VUik7XG5hZGRQYXJzZVRva2VuKFsnYScsICdBJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5faXNQbSA9IGNvbmZpZy5fbG9jYWxlLmlzUE0oaW5wdXQpO1xuICAgIGNvbmZpZy5fbWVyaWRpZW0gPSBpbnB1dDtcbn0pO1xuYWRkUGFyc2VUb2tlbihbJ2gnLCAnaGgnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dCk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ2htbScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ2htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICAgIHZhciBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ0htbScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ0htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICAgIHZhciBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG59KTtcblxuLy8gTE9DQUxFU1xuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlSXNQTSAoaW5wdXQpIHtcbiAgICAvLyBJRTggUXVpcmtzIE1vZGUgJiBJRTcgU3RhbmRhcmRzIE1vZGUgZG8gbm90IGFsbG93IGFjY2Vzc2luZyBzdHJpbmdzIGxpa2UgYXJyYXlzXG4gICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXG4gICAgcmV0dXJuICgoaW5wdXQgKyAnJykudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJyk7XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgPSAvW2FwXVxcLj9tP1xcLj8vaTtcbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVNZXJpZGllbSAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XG4gICAgfVxufVxuXG5cbi8vIE1PTUVOVFNcblxuLy8gU2V0dGluZyB0aGUgaG91ciBzaG91bGQga2VlcCB0aGUgdGltZSwgYmVjYXVzZSB0aGUgdXNlciBleHBsaWNpdGx5XG4vLyBzcGVjaWZpZWQgd2hpY2ggaG91ciBoZSB3YW50cy4gU28gdHJ5aW5nIHRvIG1haW50YWluIHRoZSBzYW1lIGhvdXIgKGluXG4vLyBhIG5ldyB0aW1lem9uZSkgbWFrZXMgc2Vuc2UuIEFkZGluZy9zdWJ0cmFjdGluZyBob3VycyBkb2VzIG5vdCBmb2xsb3dcbi8vIHRoaXMgcnVsZS5cbmV4cG9ydCB2YXIgZ2V0U2V0SG91ciA9IG1ha2VHZXRTZXQoJ0hvdXJzJywgdHJ1ZSk7XG4iLCJpbXBvcnQgeyBkZWZhdWx0Q2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IGRlZmF1bHRMb25nRGF0ZUZvcm1hdCB9IGZyb20gJy4vZm9ybWF0cyc7XG5pbXBvcnQgeyBkZWZhdWx0SW52YWxpZERhdGUgfSBmcm9tICcuL2ludmFsaWQnO1xuaW1wb3J0IHsgZGVmYXVsdE9yZGluYWwsIGRlZmF1bHRPcmRpbmFsUGFyc2UgfSBmcm9tICcuL29yZGluYWwnO1xuaW1wb3J0IHsgZGVmYXVsdFJlbGF0aXZlVGltZSB9IGZyb20gJy4vcmVsYXRpdmUnO1xuXG4vLyBtb250aHNcbmltcG9ydCB7XG4gICAgZGVmYXVsdExvY2FsZU1vbnRocyxcbiAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG59IGZyb20gJy4uL3VuaXRzL21vbnRoJztcblxuLy8gd2Vla1xuaW1wb3J0IHsgZGVmYXVsdExvY2FsZVdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcblxuLy8gd2Vla2RheXNcbmltcG9ydCB7XG4gICAgZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxuICAgIGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCxcbn0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyBtZXJpZGllbVxuaW1wb3J0IHsgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgfSBmcm9tICcuLi91bml0cy9ob3VyJztcblxuZXhwb3J0IHZhciBiYXNlQ29uZmlnID0ge1xuICAgIGNhbGVuZGFyOiBkZWZhdWx0Q2FsZW5kYXIsXG4gICAgbG9uZ0RhdGVGb3JtYXQ6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdCxcbiAgICBpbnZhbGlkRGF0ZTogZGVmYXVsdEludmFsaWREYXRlLFxuICAgIG9yZGluYWw6IGRlZmF1bHRPcmRpbmFsLFxuICAgIG9yZGluYWxQYXJzZTogZGVmYXVsdE9yZGluYWxQYXJzZSxcbiAgICByZWxhdGl2ZVRpbWU6IGRlZmF1bHRSZWxhdGl2ZVRpbWUsXG5cbiAgICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXG4gICAgbW9udGhzU2hvcnQ6IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcblxuICAgIHdlZWs6IGRlZmF1bHRMb2NhbGVXZWVrLFxuXG4gICAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgICB3ZWVrZGF5c01pbjogZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxuICAgIHdlZWtkYXlzU2hvcnQ6IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LFxuXG4gICAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2Vcbn07XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuLi91dGlscy9pcy1hcnJheSc7XG5pbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuLi91dGlscy9oYXMtb3duLXByb3AnO1xuaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJy4uL3V0aWxzL2lzLXVuZGVmaW5lZCc7XG5pbXBvcnQgY29tcGFyZUFycmF5cyBmcm9tICcuLi91dGlscy9jb21wYXJlLWFycmF5cyc7XG5pbXBvcnQgeyBkZXByZWNhdGVTaW1wbGUgfSBmcm9tICcuLi91dGlscy9kZXByZWNhdGUnO1xuaW1wb3J0IHsgbWVyZ2VDb25maWdzIH0gZnJvbSAnLi9zZXQnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQga2V5cyBmcm9tICcuLi91dGlscy9rZXlzJztcblxuaW1wb3J0IHsgYmFzZUNvbmZpZyB9IGZyb20gJy4vYmFzZS1jb25maWcnO1xuXG4vLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXG52YXIgbG9jYWxlcyA9IHt9O1xudmFyIGxvY2FsZUZhbWlsaWVzID0ge307XG52YXIgZ2xvYmFsTG9jYWxlO1xuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhbGUoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA/IGtleS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnLScpIDoga2V5O1xufVxuXG4vLyBwaWNrIHRoZSBsb2NhbGUgZnJvbSB0aGUgYXJyYXlcbi8vIHRyeSBbJ2VuLWF1JywgJ2VuLWdiJ10gYXMgJ2VuLWF1JywgJ2VuLWdiJywgJ2VuJywgYXMgaW4gbW92ZSB0aHJvdWdoIHRoZSBsaXN0IHRyeWluZyBlYWNoXG4vLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LCBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XG5mdW5jdGlvbiBjaG9vc2VMb2NhbGUobmFtZXMpIHtcbiAgICB2YXIgaSA9IDAsIGosIG5leHQsIGxvY2FsZSwgc3BsaXQ7XG5cbiAgICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICBzcGxpdCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpXSkuc3BsaXQoJy0nKTtcbiAgICAgICAgaiA9IHNwbGl0Lmxlbmd0aDtcbiAgICAgICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xuICAgICAgICBuZXh0ID0gbmV4dCA/IG5leHQuc3BsaXQoJy0nKSA6IG51bGw7XG4gICAgICAgIHdoaWxlIChqID4gMCkge1xuICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShzcGxpdC5zbGljZSgwLCBqKS5qb2luKCctJykpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dCAmJiBuZXh0Lmxlbmd0aCA+PSBqICYmIGNvbXBhcmVBcnJheXMoc3BsaXQsIG5leHQsIHRydWUpID49IGogLSAxKSB7XG4gICAgICAgICAgICAgICAgLy90aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGxvYWRMb2NhbGUobmFtZSkge1xuICAgIHZhciBvbGRMb2NhbGUgPSBudWxsO1xuICAgIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHJlZ2lzdGVyIGFuZCBsb2FkIGFsbCB0aGUgbG9jYWxlcyBpbiBOb2RlXG4gICAgaWYgKCFsb2NhbGVzW25hbWVdICYmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgJiZcbiAgICAgICAgICAgIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgICAgICAgcmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xuICAgICAgICAgICAgLy8gYmVjYXVzZSBkZWZpbmVMb2NhbGUgY3VycmVudGx5IGFsc28gc2V0cyB0aGUgZ2xvYmFsIGxvY2FsZSwgd2VcbiAgICAgICAgICAgIC8vIHdhbnQgdG8gdW5kbyB0aGF0IGZvciBsYXp5IGxvYWRlZCBsb2NhbGVzXG4gICAgICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUob2xkTG9jYWxlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbi8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4vLyBsb2NhbGUga2V5LlxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZSAoa2V5LCB2YWx1ZXMpIHtcbiAgICB2YXIgZGF0YTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZXMpKSB7XG4gICAgICAgICAgICBkYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gZGVmaW5lTG9jYWxlKGtleSwgdmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAvLyBtb21lbnQuZHVyYXRpb24uX2xvY2FsZSA9IG1vbWVudC5fbG9jYWxlID0gZGF0YTtcbiAgICAgICAgICAgIGdsb2JhbExvY2FsZSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2xvYmFsTG9jYWxlLl9hYmJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lTG9jYWxlIChuYW1lLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgICAgICBjb25maWcuYWJiciA9IG5hbWU7XG4gICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZVNpbXBsZSgnZGVmaW5lTG9jYWxlT3ZlcnJpZGUnLFxuICAgICAgICAgICAgICAgICAgICAndXNlIG1vbWVudC51cGRhdGVMb2NhbGUobG9jYWxlTmFtZSwgY29uZmlnKSB0byBjaGFuZ2UgJyArXG4gICAgICAgICAgICAgICAgICAgICdhbiBleGlzdGluZyBsb2NhbGUuIG1vbWVudC5kZWZpbmVMb2NhbGUobG9jYWxlTmFtZSwgJyArXG4gICAgICAgICAgICAgICAgICAgICdjb25maWcpIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIGNyZWF0aW5nIGEgbmV3IGxvY2FsZSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RlZmluZS1sb2NhbGUvIGZvciBtb3JlIGluZm8uJyk7XG4gICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW25hbWVdLl9jb25maWc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvY2FsZXNbbmFtZV0gPSBuZXcgTG9jYWxlKG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZykpO1xuXG4gICAgICAgIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xuICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIGRlZmluZUxvY2FsZSh4Lm5hbWUsIHguY29uZmlnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cbiAgICAgICAgLy8gY3JlYXRlZCwgc28gd2Ugd29uJ3QgZW5kIHVwIHdpdGggdGhlIGNoaWxkIGxvY2FsZSBzZXQuXG4gICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcblxuXG4gICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxlKG5hbWUsIGNvbmZpZykge1xuICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICB2YXIgbG9jYWxlLCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgICAgICAvLyBNRVJHRVxuICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW25hbWVdLl9jb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnID0gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgbG9jYWxlID0gbmV3IExvY2FsZShjb25maWcpO1xuICAgICAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZTtcblxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBhc3MgbnVsbCBmb3IgY29uZmlnIHRvIHVudXBkYXRlLCB1c2VmdWwgZm9yIHRlc3RzXG4gICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gcmV0dXJucyBsb2NhbGUgZGF0YVxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZSAoa2V5KSB7XG4gICAgdmFyIGxvY2FsZTtcblxuICAgIGlmIChrZXkgJiYga2V5Ll9sb2NhbGUgJiYga2V5Ll9sb2NhbGUuX2FiYnIpIHtcbiAgICAgICAga2V5ID0ga2V5Ll9sb2NhbGUuX2FiYnI7XG4gICAgfVxuXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQXJyYXkoa2V5KSkge1xuICAgICAgICAvL3Nob3J0LWNpcmN1aXQgZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoa2V5KTtcbiAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvb3NlTG9jYWxlKGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0TG9jYWxlcygpIHtcbiAgICByZXR1cm4ga2V5cyhsb2NhbGVzKTtcbn1cbiIsImltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgWUVBUiwgTU9OVEgsIERBVEUsIEhPVVIsIE1JTlVURSwgU0VDT05ELCBNSUxMSVNFQ09ORCwgV0VFSywgV0VFS0RBWSB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdyAobSkge1xuICAgIHZhciBvdmVyZmxvdztcbiAgICB2YXIgYSA9IG0uX2E7XG5cbiAgICBpZiAoYSAmJiBnZXRQYXJzaW5nRmxhZ3MobSkub3ZlcmZsb3cgPT09IC0yKSB7XG4gICAgICAgIG92ZXJmbG93ID1cbiAgICAgICAgICAgIGFbTU9OVEhdICAgICAgIDwgMCB8fCBhW01PTlRIXSAgICAgICA+IDExICA/IE1PTlRIIDpcbiAgICAgICAgICAgIGFbREFURV0gICAgICAgIDwgMSB8fCBhW0RBVEVdICAgICAgICA+IGRheXNJbk1vbnRoKGFbWUVBUl0sIGFbTU9OVEhdKSA/IERBVEUgOlxuICAgICAgICAgICAgYVtIT1VSXSAgICAgICAgPCAwIHx8IGFbSE9VUl0gICAgICAgID4gMjQgfHwgKGFbSE9VUl0gPT09IDI0ICYmIChhW01JTlVURV0gIT09IDAgfHwgYVtTRUNPTkRdICE9PSAwIHx8IGFbTUlMTElTRUNPTkRdICE9PSAwKSkgPyBIT1VSIDpcbiAgICAgICAgICAgIGFbTUlOVVRFXSAgICAgIDwgMCB8fCBhW01JTlVURV0gICAgICA+IDU5ICA/IE1JTlVURSA6XG4gICAgICAgICAgICBhW1NFQ09ORF0gICAgICA8IDAgfHwgYVtTRUNPTkRdICAgICAgPiA1OSAgPyBTRUNPTkQgOlxuICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gPCAwIHx8IGFbTUlMTElTRUNPTkRdID4gOTk5ID8gTUlMTElTRUNPTkQgOlxuICAgICAgICAgICAgLTE7XG5cbiAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dEYXlPZlllYXIgJiYgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpKSB7XG4gICAgICAgICAgICBvdmVyZmxvdyA9IERBVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrcyAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFSztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtkYXkgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUtEQVk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkub3ZlcmZsb3cgPSBvdmVyZmxvdztcbiAgICB9XG5cbiAgICByZXR1cm4gbTtcbn1cblxuIiwiaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZSc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5cbi8vIGlzbyA4NjAxIHJlZ2V4XG4vLyAwMDAwLTAwLTAwIDAwMDAtVzAwIG9yIDAwMDAtVzAwLTAgKyBUICsgMDAgb3IgMDA6MDAgb3IgMDA6MDA6MDAgb3IgMDA6MDA6MDAuMDAwICsgKzAwOjAwIG9yICswMDAwIG9yICswMClcbnZhciBleHRlbmRlZElzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xudmFyIGJhc2ljSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pKD86XFxkXFxkXFxkXFxkfFdcXGRcXGRcXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzpcXGRcXGQoPzpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xuXG52YXIgdHpSZWdleCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/LztcblxudmFyIGlzb0RhdGVzID0gW1xuICAgIFsnWVlZWVlZLU1NLUREJywgL1srLV1cXGR7Nn0tXFxkXFxkLVxcZFxcZC9dLFxuICAgIFsnWVlZWS1NTS1ERCcsIC9cXGR7NH0tXFxkXFxkLVxcZFxcZC9dLFxuICAgIFsnR0dHRy1bV11XVy1FJywgL1xcZHs0fS1XXFxkXFxkLVxcZC9dLFxuICAgIFsnR0dHRy1bV11XVycsIC9cXGR7NH0tV1xcZFxcZC8sIGZhbHNlXSxcbiAgICBbJ1lZWVktREREJywgL1xcZHs0fS1cXGR7M30vXSxcbiAgICBbJ1lZWVktTU0nLCAvXFxkezR9LVxcZFxcZC8sIGZhbHNlXSxcbiAgICBbJ1lZWVlZWU1NREQnLCAvWystXVxcZHsxMH0vXSxcbiAgICBbJ1lZWVlNTUREJywgL1xcZHs4fS9dLFxuICAgIC8vIFlZWVlNTSBpcyBOT1QgYWxsb3dlZCBieSB0aGUgc3RhbmRhcmRcbiAgICBbJ0dHR0dbV11XV0UnLCAvXFxkezR9V1xcZHszfS9dLFxuICAgIFsnR0dHR1tXXVdXJywgL1xcZHs0fVdcXGR7Mn0vLCBmYWxzZV0sXG4gICAgWydZWVlZREREJywgL1xcZHs3fS9dXG5dO1xuXG4vLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXG52YXIgaXNvVGltZXMgPSBbXG4gICAgWydISDptbTpzcy5TU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkXFwuXFxkKy9dLFxuICAgIFsnSEg6bW06c3MsU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZCxcXGQrL10sXG4gICAgWydISDptbTpzcycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZC9dLFxuICAgIFsnSEg6bW0nLCAvXFxkXFxkOlxcZFxcZC9dLFxuICAgIFsnSEhtbXNzLlNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkXFwuXFxkKy9dLFxuICAgIFsnSEhtbXNzLFNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkLFxcZCsvXSxcbiAgICBbJ0hIbW1zcycsIC9cXGRcXGRcXGRcXGRcXGRcXGQvXSxcbiAgICBbJ0hIbW0nLCAvXFxkXFxkXFxkXFxkL10sXG4gICAgWydISCcsIC9cXGRcXGQvXVxuXTtcblxudmFyIGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoXFwtP1xcZCspL2k7XG5cbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbUlTTyhjb25maWcpIHtcbiAgICB2YXIgaSwgbCxcbiAgICAgICAgc3RyaW5nID0gY29uZmlnLl9pLFxuICAgICAgICBtYXRjaCA9IGV4dGVuZGVkSXNvUmVnZXguZXhlYyhzdHJpbmcpIHx8IGJhc2ljSXNvUmVnZXguZXhlYyhzdHJpbmcpLFxuICAgICAgICBhbGxvd1RpbWUsIGRhdGVGb3JtYXQsIHRpbWVGb3JtYXQsIHR6Rm9ybWF0O1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmlzbyA9IHRydWU7XG5cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzb0RhdGVzW2ldWzFdLmV4ZWMobWF0Y2hbMV0pKSB7XG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdCA9IGlzb0RhdGVzW2ldWzBdO1xuICAgICAgICAgICAgICAgIGFsbG93VGltZSA9IGlzb0RhdGVzW2ldWzJdICE9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbM10pIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29UaW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvVGltZXNbaV1bMV0uZXhlYyhtYXRjaFszXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxuICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gKG1hdGNoWzJdIHx8ICcgJykgKyBpc29UaW1lc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbG93VGltZSAmJiB0aW1lRm9ybWF0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFs0XSkge1xuICAgICAgICAgICAgaWYgKHR6UmVnZXguZXhlYyhtYXRjaFs0XSkpIHtcbiAgICAgICAgICAgICAgICB0ekZvcm1hdCA9ICdaJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5fZiA9IGRhdGVGb3JtYXQgKyAodGltZUZvcm1hdCB8fCAnJykgKyAodHpGb3JtYXQgfHwgJycpO1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxufVxuXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdCBvciBmYWxsYmFja1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhjb25maWcuX2kpO1xuXG4gICAgaWYgKG1hdGNoZWQgIT09IG51bGwpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoK21hdGNoZWRbMV0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgfVxufVxuXG5ob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayA9IGRlcHJlY2F0ZShcbiAgICAndmFsdWUgcHJvdmlkZWQgaXMgbm90IGluIGEgcmVjb2duaXplZCBJU08gZm9ybWF0LiBtb21lbnQgY29uc3RydWN0aW9uIGZhbGxzIGJhY2sgdG8ganMgRGF0ZSgpLCAnICtcbiAgICAnd2hpY2ggaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBhbGwgYnJvd3NlcnMgYW5kIHZlcnNpb25zLiBOb24gSVNPIGRhdGUgZm9ybWF0cyBhcmUgJyArXG4gICAgJ2Rpc2NvdXJhZ2VkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYW4gdXBjb21pbmcgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHJlZmVyIHRvICcgK1xuICAgICdodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvIGZvciBtb3JlIGluZm8uJyxcbiAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSArIChjb25maWcuX3VzZVVUQyA/ICcgVVRDJyA6ICcnKSk7XG4gICAgfVxuKTtcbiIsIi8vIFBpY2sgdGhlIGZpcnN0IGRlZmluZWQgb2YgdHdvIG9yIHRocmVlIGFyZ3VtZW50cy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRzKGEsIGIsIGMpIHtcbiAgICBpZiAoYSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBpZiAoYiAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYztcbn1cbiIsImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IHsgY3JlYXRlRGF0ZSwgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4vZGF0ZS1mcm9tLWFycmF5JztcbmltcG9ydCB7IGRheXNJblllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcbmltcG9ydCB7IHdlZWtPZlllYXIsIHdlZWtzSW5ZZWFyLCBkYXlPZlllYXJGcm9tV2Vla3MgfSBmcm9tICcuLi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IFlFQVIsIE1PTlRILCBEQVRFLCBIT1VSLCBNSU5VVEUsIFNFQ09ORCwgTUlMTElTRUNPTkQgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuL2xvY2FsJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi91dGlscy9kZWZhdWx0cyc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5cbmZ1bmN0aW9uIGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKSB7XG4gICAgLy8gaG9va3MgaXMgYWN0dWFsbHkgdGhlIGV4cG9ydGVkIG1vbWVudCBvYmplY3RcbiAgICB2YXIgbm93VmFsdWUgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XG4gICAgaWYgKGNvbmZpZy5fdXNlVVRDKSB7XG4gICAgICAgIHJldHVybiBbbm93VmFsdWUuZ2V0VVRDRnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0VVRDTW9udGgoKSwgbm93VmFsdWUuZ2V0VVRDRGF0ZSgpXTtcbiAgICB9XG4gICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRNb250aCgpLCBub3dWYWx1ZS5nZXREYXRlKCldO1xufVxuXG4vLyBjb252ZXJ0IGFuIGFycmF5IHRvIGEgZGF0ZS5cbi8vIHRoZSBhcnJheSBzaG91bGQgbWlycm9yIHRoZSBwYXJhbWV0ZXJzIGJlbG93XG4vLyBub3RlOiBhbGwgdmFsdWVzIHBhc3QgdGhlIHllYXIgYXJlIG9wdGlvbmFsIGFuZCB3aWxsIGRlZmF1bHQgdG8gdGhlIGxvd2VzdCBwb3NzaWJsZSB2YWx1ZS5cbi8vIFt5ZWFyLCBtb250aCwgZGF5ICwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21BcnJheSAoY29uZmlnKSB7XG4gICAgdmFyIGksIGRhdGUsIGlucHV0ID0gW10sIGN1cnJlbnREYXRlLCB5ZWFyVG9Vc2U7XG5cbiAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKTtcblxuICAgIC8vY29tcHV0ZSBkYXkgb2YgdGhlIHllYXIgZnJvbSB3ZWVrcyBhbmQgd2Vla2RheXNcbiAgICBpZiAoY29uZmlnLl93ICYmIGNvbmZpZy5fYVtEQVRFXSA9PSBudWxsICYmIGNvbmZpZy5fYVtNT05USF0gPT0gbnVsbCkge1xuICAgICAgICBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKTtcbiAgICB9XG5cbiAgICAvL2lmIHRoZSBkYXkgb2YgdGhlIHllYXIgaXMgc2V0LCBmaWd1cmUgb3V0IHdoYXQgaXQgaXNcbiAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIpIHtcbiAgICAgICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyVG9Vc2UpKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dEYXlPZlllYXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoeWVhclRvVXNlLCAwLCBjb25maWcuX2RheU9mWWVhcik7XG4gICAgICAgIGNvbmZpZy5fYVtNT05USF0gPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgICAgIGNvbmZpZy5fYVtEQVRFXSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCBkYXRlLlxuICAgIC8vICogaWYgbm8geWVhciwgbW9udGgsIGRheSBvZiBtb250aCBhcmUgZ2l2ZW4sIGRlZmF1bHQgdG8gdG9kYXlcbiAgICAvLyAqIGlmIGRheSBvZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBtb250aCBhbmQgeWVhclxuICAgIC8vICogaWYgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgb25seSB5ZWFyXG4gICAgLy8gKiBpZiB5ZWFyIGlzIGdpdmVuLCBkb24ndCBkZWZhdWx0IGFueXRoaW5nXG4gICAgZm9yIChpID0gMDsgaSA8IDMgJiYgY29uZmlnLl9hW2ldID09IG51bGw7ICsraSkge1xuICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IGN1cnJlbnREYXRlW2ldO1xuICAgIH1cblxuICAgIC8vIFplcm8gb3V0IHdoYXRldmVyIHdhcyBub3QgZGVmYXVsdGVkLCBpbmNsdWRpbmcgdGltZVxuICAgIGZvciAoOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gKGNvbmZpZy5fYVtpXSA9PSBudWxsKSA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciAyNDowMDowMC4wMDBcbiAgICBpZiAoY29uZmlnLl9hW0hPVVJdID09PSAyNCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW01JTlVURV0gPT09IDAgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtTRUNPTkRdID09PSAwICYmXG4gICAgICAgICAgICBjb25maWcuX2FbTUlMTElTRUNPTkRdID09PSAwKSB7XG4gICAgICAgIGNvbmZpZy5fbmV4dERheSA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IDA7XG4gICAgfVxuXG4gICAgY29uZmlnLl9kID0gKGNvbmZpZy5fdXNlVVRDID8gY3JlYXRlVVRDRGF0ZSA6IGNyZWF0ZURhdGUpLmFwcGx5KG51bGwsIGlucHV0KTtcbiAgICAvLyBBcHBseSB0aW1lem9uZSBvZmZzZXQgZnJvbSBpbnB1dC4gVGhlIGFjdHVhbCB1dGNPZmZzZXQgY2FuIGJlIGNoYW5nZWRcbiAgICAvLyB3aXRoIHBhcnNlWm9uZS5cbiAgICBpZiAoY29uZmlnLl90em0gIT0gbnVsbCkge1xuICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuX25leHREYXkpIHtcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMjQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKSB7XG4gICAgdmFyIHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcCwgd2Vla2RheU92ZXJmbG93O1xuXG4gICAgdyA9IGNvbmZpZy5fdztcbiAgICBpZiAody5HRyAhPSBudWxsIHx8IHcuVyAhPSBudWxsIHx8IHcuRSAhPSBudWxsKSB7XG4gICAgICAgIGRvdyA9IDE7XG4gICAgICAgIGRveSA9IDQ7XG5cbiAgICAgICAgLy8gVE9ETzogV2UgbmVlZCB0byB0YWtlIHRoZSBjdXJyZW50IGlzb1dlZWtZZWFyLCBidXQgdGhhdCBkZXBlbmRzIG9uXG4gICAgICAgIC8vIGhvdyB3ZSBpbnRlcnByZXQgbm93IChsb2NhbCwgdXRjLCBmaXhlZCBvZmZzZXQpLiBTbyBjcmVhdGVcbiAgICAgICAgLy8gYSBub3cgdmVyc2lvbiBvZiBjdXJyZW50IGNvbmZpZyAodGFrZSBsb2NhbC91dGMvb2Zmc2V0IGZsYWdzLCBhbmRcbiAgICAgICAgLy8gY3JlYXRlIG5vdykuXG4gICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5HRywgY29uZmlnLl9hW1lFQVJdLCB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIDEsIDQpLnllYXIpO1xuICAgICAgICB3ZWVrID0gZGVmYXVsdHMody5XLCAxKTtcbiAgICAgICAgd2Vla2RheSA9IGRlZmF1bHRzKHcuRSwgMSk7XG4gICAgICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xuICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvdyA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRvdztcbiAgICAgICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xuXG4gICAgICAgIHZhciBjdXJXZWVrID0gd2Vla09mWWVhcihjcmVhdGVMb2NhbCgpLCBkb3csIGRveSk7XG5cbiAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LmdnLCBjb25maWcuX2FbWUVBUl0sIGN1cldlZWsueWVhcik7XG5cbiAgICAgICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IHdlZWsuXG4gICAgICAgIHdlZWsgPSBkZWZhdWx0cyh3LncsIGN1cldlZWsud2Vlayk7XG5cbiAgICAgICAgaWYgKHcuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyB3ZWVrZGF5IC0tIGxvdyBkYXkgbnVtYmVycyBhcmUgY29uc2lkZXJlZCBuZXh0IHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSB3LmQ7XG4gICAgICAgICAgICBpZiAod2Vla2RheSA8IDAgfHwgd2Vla2RheSA+IDYpIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHcuZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBsb2NhbCB3ZWVrZGF5IC0tIGNvdW50aW5nIHN0YXJ0cyBmcm9tIGJlZ2luaW5nIG9mIHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSB3LmUgKyBkb3c7XG4gICAgICAgICAgICBpZiAody5lIDwgMCB8fCB3LmUgPiA2KSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gYmVnaW5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgd2Vla2RheSA9IGRvdztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VlayA8IDEgfHwgd2VlayA+IHdlZWtzSW5ZZWFyKHdlZWtZZWFyLCBkb3csIGRveSkpIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAod2Vla2RheU92ZXJmbG93ICE9IG51bGwpIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla2RheSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcCA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgICAgICBjb25maWcuX2FbWUVBUl0gPSB0ZW1wLnllYXI7XG4gICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdGVtcC5kYXlPZlllYXI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY29uZmlnRnJvbUlTTyB9IGZyb20gJy4vZnJvbS1zdHJpbmcnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IGdldFBhcnNlUmVnZXhGb3JUb2tlbiB9ICAgZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBleHBhbmRGb3JtYXQsIGZvcm1hdFRva2VuRnVuY3Rpb25zLCBmb3JtYXR0aW5nVG9rZW5zIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgY2hlY2tPdmVyZmxvdyBmcm9tICcuL2NoZWNrLW92ZXJmbG93JztcbmltcG9ydCB7IEhPVVIgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5cbi8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBJU08gc3RhbmRhcmRcbmhvb2tzLklTT184NjAxID0gZnVuY3Rpb24gKCkge307XG5cbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmdcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZykge1xuICAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhbm90aGVyIHBhcnQgb2YgdGhlIGNyZWF0aW9uIGZsb3cgdG8gcHJldmVudCBjaXJjdWxhciBkZXBzXG4gICAgaWYgKGNvbmZpZy5fZiA9PT0gaG9va3MuSVNPXzg2MDEpIHtcbiAgICAgICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlnLl9hID0gW107XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSB0cnVlO1xuXG4gICAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcbiAgICB2YXIgc3RyaW5nID0gJycgKyBjb25maWcuX2ksXG4gICAgICAgIGksIHBhcnNlZElucHV0LCB0b2tlbnMsIHRva2VuLCBza2lwcGVkLFxuICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoID0gMDtcblxuICAgIHRva2VucyA9IGV4cGFuZEZvcm1hdChjb25maWcuX2YsIGNvbmZpZy5fbG9jYWxlKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSB8fCBbXTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHBhcnNlZElucHV0ID0gKHN0cmluZy5tYXRjaChnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykpIHx8IFtdKVswXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rva2VuJywgdG9rZW4sICdwYXJzZWRJbnB1dCcsIHBhcnNlZElucHV0LFxuICAgICAgICAvLyAgICAgICAgICdyZWdleCcsIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSk7XG4gICAgICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgc2tpcHBlZCA9IHN0cmluZy5zdWJzdHIoMCwgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpKTtcbiAgICAgICAgICAgIGlmIChza2lwcGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHNraXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKHN0cmluZy5pbmRleE9mKHBhcnNlZElucHV0KSArIHBhcnNlZElucHV0Lmxlbmd0aCk7XG4gICAgICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoICs9IHBhcnNlZElucHV0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICAvLyBkb24ndCBwYXJzZSBpZiBpdCdzIG5vdCBhIGtub3duIHRva2VuXG4gICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0pIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgcGFyc2VkSW5wdXQsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29uZmlnLl9zdHJpY3QgJiYgIXBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVtYWluaW5nIHVucGFyc2VkIGlucHV0IGxlbmd0aCB0byB0aGUgc3RyaW5nXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuY2hhcnNMZWZ0T3ZlciA9IHN0cmluZ0xlbmd0aCAtIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGg7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc3RyaW5nKTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBfMTJoIGZsYWcgaWYgaG91ciBpcyA8PSAxMlxuICAgIGlmIChjb25maWcuX2FbSE9VUl0gPD0gMTIgJiZcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9PT0gdHJ1ZSAmJlxuICAgICAgICBjb25maWcuX2FbSE9VUl0gPiAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucGFyc2VkRGF0ZVBhcnRzID0gY29uZmlnLl9hLnNsaWNlKDApO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm1lcmlkaWVtID0gY29uZmlnLl9tZXJpZGllbTtcbiAgICAvLyBoYW5kbGUgbWVyaWRpZW1cbiAgICBjb25maWcuX2FbSE9VUl0gPSBtZXJpZGllbUZpeFdyYXAoY29uZmlnLl9sb2NhbGUsIGNvbmZpZy5fYVtIT1VSXSwgY29uZmlnLl9tZXJpZGllbSk7XG5cbiAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICBjaGVja092ZXJmbG93KGNvbmZpZyk7XG59XG5cblxuZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwIChsb2NhbGUsIGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgdmFyIGlzUG07XG5cbiAgICBpZiAobWVyaWRpZW0gPT0gbnVsbCkge1xuICAgICAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH1cbiAgICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUubWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKTtcbiAgICB9IGVsc2UgaWYgKGxvY2FsZS5pc1BNICE9IG51bGwpIHtcbiAgICAgICAgLy8gRmFsbGJhY2tcbiAgICAgICAgaXNQbSA9IGxvY2FsZS5pc1BNKG1lcmlkaWVtKTtcbiAgICAgICAgaWYgKGlzUG0gJiYgaG91ciA8IDEyKSB7XG4gICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNQbSAmJiBob3VyID09PSAxMikge1xuICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuXG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNvcHlDb25maWcgfSBmcm9tICcuLi9tb21lbnQvY29uc3RydWN0b3InO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4uL3V0aWxzL2V4dGVuZCc7XG5cbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGFycmF5IG9mIGZvcm1hdCBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZykge1xuICAgIHZhciB0ZW1wQ29uZmlnLFxuICAgICAgICBiZXN0TW9tZW50LFxuXG4gICAgICAgIHNjb3JlVG9CZWF0LFxuICAgICAgICBpLFxuICAgICAgICBjdXJyZW50U2NvcmU7XG5cbiAgICBpZiAoY29uZmlnLl9mLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb25maWcuX2YubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3VycmVudFNjb3JlID0gMDtcbiAgICAgICAgdGVtcENvbmZpZyA9IGNvcHlDb25maWcoe30sIGNvbmZpZyk7XG4gICAgICAgIGlmIChjb25maWcuX3VzZVVUQyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0ZW1wQ29uZmlnLl91c2VVVEMgPSBjb25maWcuX3VzZVVUQztcbiAgICAgICAgfVxuICAgICAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KHRlbXBDb25maWcpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCh0ZW1wQ29uZmlnKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbnkgaW5wdXQgdGhhdCB3YXMgbm90IHBhcnNlZCBhZGQgYSBwZW5hbHR5IGZvciB0aGF0IGZvcm1hdFxuICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XG5cbiAgICAgICAgLy9vciB0b2tlbnNcbiAgICAgICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgICAgIGlmIChzY29yZVRvQmVhdCA9PSBudWxsIHx8IGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0KSB7XG4gICAgICAgICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgICAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXh0ZW5kKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbn1cbiIsImltcG9ydCB7IG5vcm1hbGl6ZU9iamVjdFVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlscy9tYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbU9iamVjdChjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaSA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGNvbmZpZy5faSk7XG4gICAgY29uZmlnLl9hID0gbWFwKFtpLnllYXIsIGkubW9udGgsIGkuZGF5IHx8IGkuZGF0ZSwgaS5ob3VyLCBpLm1pbnV0ZSwgaS5zZWNvbmQsIGkubWlsbGlzZWNvbmRdLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgfSk7XG5cbiAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbn1cbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4uL3V0aWxzL2lzLWFycmF5JztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi91dGlscy9pcy1vYmplY3QnO1xuaW1wb3J0IGlzT2JqZWN0RW1wdHkgZnJvbSAnLi4vdXRpbHMvaXMtb2JqZWN0LWVtcHR5JztcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi91dGlscy9pcy1udW1iZXInO1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuLi91dGlscy9pcy1kYXRlJztcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbHMvbWFwJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCB7IE1vbWVudCwgaXNNb21lbnQgfSBmcm9tICcuLi9tb21lbnQvY29uc3RydWN0b3InO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgY2hlY2tPdmVyZmxvdyBmcm9tICcuL2NoZWNrLW92ZXJmbG93JztcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcblxuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5IH0gIGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWFycmF5JztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZyB9ICAgICAgICAgIGZyb20gJy4vZnJvbS1zdHJpbmcnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gICAgICAgICAgIGZyb20gJy4vZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBjb25maWdGcm9tT2JqZWN0IH0gICAgICAgICAgZnJvbSAnLi9mcm9tLW9iamVjdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb21Db25maWcgKGNvbmZpZykge1xuICAgIHZhciByZXMgPSBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKSk7XG4gICAgaWYgKHJlcy5fbmV4dERheSkge1xuICAgICAgICAvLyBBZGRpbmcgaXMgc21hcnQgZW5vdWdoIGFyb3VuZCBEU1RcbiAgICAgICAgcmVzLmFkZCgxLCAnZCcpO1xuICAgICAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVDb25maWcgKGNvbmZpZykge1xuICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faSxcbiAgICAgICAgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gICAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoY29uZmlnLl9sKTtcblxuICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCh7bnVsbElucHV0OiB0cnVlfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uZmlnLl9pID0gaW5wdXQgPSBjb25maWcuX2xvY2FsZS5wcmVwYXJzZShpbnB1dCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9tZW50KGlucHV0KSkge1xuICAgICAgICByZXR1cm4gbmV3IE1vbWVudChjaGVja092ZXJmbG93KGlucHV0KSk7XG4gICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IGlucHV0O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0KSB7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICB9ICBlbHNlIHtcbiAgICAgICAgY29uZmlnRnJvbUlucHV0KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1ZhbGlkKGNvbmZpZykpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xufVxuXG5mdW5jdGlvbiBjb25maWdGcm9tSW5wdXQoY29uZmlnKSB7XG4gICAgdmFyIGlucHV0ID0gY29uZmlnLl9pO1xuICAgIGlmIChpbnB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQudmFsdWVPZigpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9hID0gbWFwKGlucHV0LnNsaWNlKDApLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihpbnB1dCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgICAgICAvLyBmcm9tIG1pbGxpc2Vjb25kc1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgaXNVVEMpIHtcbiAgICB2YXIgYyA9IHt9O1xuXG4gICAgaWYgKGxvY2FsZSA9PT0gdHJ1ZSB8fCBsb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHN0cmljdCA9IGxvY2FsZTtcbiAgICAgICAgbG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICgoaXNPYmplY3QoaW5wdXQpICYmIGlzT2JqZWN0RW1wdHkoaW5wdXQpKSB8fFxuICAgICAgICAgICAgKGlzQXJyYXkoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDIzXG4gICAgYy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcbiAgICBjLl91c2VVVEMgPSBjLl9pc1VUQyA9IGlzVVRDO1xuICAgIGMuX2wgPSBsb2NhbGU7XG4gICAgYy5faSA9IGlucHV0O1xuICAgIGMuX2YgPSBmb3JtYXQ7XG4gICAgYy5fc3RyaWN0ID0gc3RyaWN0O1xuXG4gICAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoYyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVMb2NhbE9yVVRDIH0gZnJvbSAnLi9mcm9tLWFueXRoaW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBmYWxzZSk7XG59XG4iLCJpbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi91dGlscy9kZXByZWNhdGUnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vdXRpbHMvaXMtYXJyYXknO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCB9IGZyb20gJy4uL2NyZWF0ZS92YWxpZCc7XG5cbmV4cG9ydCB2YXIgcHJvdG90eXBlTWluID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQoKS5taW4gaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5tYXggaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3RoZXIgPCB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCB2YXIgcHJvdG90eXBlTWF4ID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQoKS5tYXggaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3RoZXIgPiB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbi8vIFBpY2sgYSBtb21lbnQgbSBmcm9tIG1vbWVudHMgc28gdGhhdCBtW2ZuXShvdGhlcikgaXMgdHJ1ZSBmb3IgYWxsXG4vLyBvdGhlci4gVGhpcyByZWxpZXMgb24gdGhlIGZ1bmN0aW9uIGZuIHRvIGJlIHRyYW5zaXRpdmUuXG4vL1xuLy8gbW9tZW50cyBzaG91bGQgZWl0aGVyIGJlIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzIG9yIGFuIGFycmF5LCB3aG9zZVxuLy8gZmlyc3QgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cy5cbmZ1bmN0aW9uIHBpY2tCeShmbiwgbW9tZW50cykge1xuICAgIHZhciByZXMsIGk7XG4gICAgaWYgKG1vbWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkobW9tZW50c1swXSkpIHtcbiAgICAgICAgbW9tZW50cyA9IG1vbWVudHNbMF07XG4gICAgfVxuICAgIGlmICghbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKCk7XG4gICAgfVxuICAgIHJlcyA9IG1vbWVudHNbMF07XG4gICAgZm9yIChpID0gMTsgaSA8IG1vbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKCFtb21lbnRzW2ldLmlzVmFsaWQoKSB8fCBtb21lbnRzW2ldW2ZuXShyZXMpKSB7XG4gICAgICAgICAgICByZXMgPSBtb21lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFRPRE86IFVzZSBbXS5zb3J0IGluc3RlYWQ/XG5leHBvcnQgZnVuY3Rpb24gbWluICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgIHJldHVybiBwaWNrQnkoJ2lzQmVmb3JlJywgYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXggKCkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcmV0dXJuIHBpY2tCeSgnaXNBZnRlcicsIGFyZ3MpO1xufVxuIiwiZXhwb3J0IHZhciBub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIERhdGUubm93ID8gRGF0ZS5ub3coKSA6ICsobmV3IERhdGUoKSk7XG59O1xuIiwiaW1wb3J0IHsgbm9ybWFsaXplT2JqZWN0VW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIER1cmF0aW9uIChkdXJhdGlvbikge1xuICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbiksXG4gICAgICAgIHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMCxcbiAgICAgICAgcXVhcnRlcnMgPSBub3JtYWxpemVkSW5wdXQucXVhcnRlciB8fCAwLFxuICAgICAgICBtb250aHMgPSBub3JtYWxpemVkSW5wdXQubW9udGggfHwgMCxcbiAgICAgICAgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCAwLFxuICAgICAgICBkYXlzID0gbm9ybWFsaXplZElucHV0LmRheSB8fCAwLFxuICAgICAgICBob3VycyA9IG5vcm1hbGl6ZWRJbnB1dC5ob3VyIHx8IDAsXG4gICAgICAgIG1pbnV0ZXMgPSBub3JtYWxpemVkSW5wdXQubWludXRlIHx8IDAsXG4gICAgICAgIHNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQuc2Vjb25kIHx8IDAsXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5taWxsaXNlY29uZCB8fCAwO1xuXG4gICAgLy8gcmVwcmVzZW50YXRpb24gZm9yIGRhdGVBZGRSZW1vdmVcbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSArbWlsbGlzZWNvbmRzICtcbiAgICAgICAgc2Vjb25kcyAqIDFlMyArIC8vIDEwMDBcbiAgICAgICAgbWludXRlcyAqIDZlNCArIC8vIDEwMDAgKiA2MFxuICAgICAgICBob3VycyAqIDEwMDAgKiA2MCAqIDYwOyAvL3VzaW5nIDEwMDAgKiA2MCAqIDYwIGluc3RlYWQgb2YgMzZlNSB0byBhdm9pZCBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnMgaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzI5NzhcbiAgICAvLyBCZWNhdXNlIG9mIGRhdGVBZGRSZW1vdmUgdHJlYXRzIDI0IGhvdXJzIGFzIGRpZmZlcmVudCBmcm9tIGFcbiAgICAvLyBkYXkgd2hlbiB3b3JraW5nIGFyb3VuZCBEU1QsIHdlIG5lZWQgdG8gc3RvcmUgdGhlbSBzZXBhcmF0ZWx5XG4gICAgdGhpcy5fZGF5cyA9ICtkYXlzICtcbiAgICAgICAgd2Vla3MgKiA3O1xuICAgIC8vIEl0IGlzIGltcG9zc2libGUgdHJhbnNsYXRlIG1vbnRocyBpbnRvIGRheXMgd2l0aG91dCBrbm93aW5nXG4gICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcbiAgICAvLyBpdCBzZXBhcmF0ZWx5LlxuICAgIHRoaXMuX21vbnRocyA9ICttb250aHMgK1xuICAgICAgICBxdWFydGVycyAqIDMgK1xuICAgICAgICB5ZWFycyAqIDEyO1xuXG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuXG4gICAgdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKCk7XG5cbiAgICB0aGlzLl9idWJibGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHVyYXRpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEdXJhdGlvbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFic1JvdW5kIChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgtMSAqIG51bWJlcikgKiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB6ZXJvRmlsbCBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xuaW1wb3J0IHsgYWRkU3VidHJhY3QgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcbmltcG9ydCB7IGlzTW9tZW50LCBjb3B5Q29uZmlnIH0gZnJvbSAnLi4vbW9tZW50L2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaE9mZnNldCwgbWF0Y2hTaG9ydE9mZnNldCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBwcmVwYXJlQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL2Zyb20tYW55dGhpbmcnO1xuaW1wb3J0IHsgY3JlYXRlVVRDIH0gZnJvbSAnLi4vY3JlYXRlL3V0Yyc7XG5pbXBvcnQgaXNEYXRlIGZyb20gJy4uL3V0aWxzL2lzLWRhdGUnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnLi4vdXRpbHMvaXMtdW5kZWZpbmVkJztcbmltcG9ydCBjb21wYXJlQXJyYXlzIGZyb20gJy4uL3V0aWxzL2NvbXBhcmUtYXJyYXlzJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmZ1bmN0aW9uIG9mZnNldCAodG9rZW4sIHNlcGFyYXRvcikge1xuICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnV0Y09mZnNldCgpO1xuICAgICAgICB2YXIgc2lnbiA9ICcrJztcbiAgICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XG4gICAgICAgICAgICBzaWduID0gJy0nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaWduICsgemVyb0ZpbGwofn4ob2Zmc2V0IC8gNjApLCAyKSArIHNlcGFyYXRvciArIHplcm9GaWxsKH5+KG9mZnNldCkgJSA2MCwgMik7XG4gICAgfSk7XG59XG5cbm9mZnNldCgnWicsICc6Jyk7XG5vZmZzZXQoJ1paJywgJycpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1onLCAgbWF0Y2hTaG9ydE9mZnNldCk7XG5hZGRSZWdleFRva2VuKCdaWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuYWRkUGFyc2VUb2tlbihbJ1onLCAnWlonXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xuICAgIGNvbmZpZy5fdHptID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG4vLyB0aW1lem9uZSBjaHVua2VyXG4vLyAnKzEwOjAwJyA+IFsnMTAnLCAgJzAwJ11cbi8vICctMTUzMCcgID4gWyctMTUnLCAnMzAnXVxudmFyIGNodW5rT2Zmc2V0ID0gLyhbXFwrXFwtXXxcXGRcXGQpL2dpO1xuXG5mdW5jdGlvbiBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoZXIsIHN0cmluZykge1xuICAgIHZhciBtYXRjaGVzID0gKHN0cmluZyB8fCAnJykubWF0Y2gobWF0Y2hlcik7XG5cbiAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2h1bmsgICA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXSB8fCBbXTtcbiAgICB2YXIgcGFydHMgICA9IChjaHVuayArICcnKS5tYXRjaChjaHVua09mZnNldCkgfHwgWyctJywgMCwgMF07XG4gICAgdmFyIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgdG9JbnQocGFydHNbMl0pO1xuXG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgP1xuICAgICAgMCA6XG4gICAgICBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xufVxuXG4vLyBSZXR1cm4gYSBtb21lbnQgZnJvbSBpbnB1dCwgdGhhdCBpcyBsb2NhbC91dGMvem9uZSBlcXVpdmFsZW50IHRvIG1vZGVsLlxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lV2l0aE9mZnNldChpbnB1dCwgbW9kZWwpIHtcbiAgICB2YXIgcmVzLCBkaWZmO1xuICAgIGlmIChtb2RlbC5faXNVVEMpIHtcbiAgICAgICAgcmVzID0gbW9kZWwuY2xvbmUoKTtcbiAgICAgICAgZGlmZiA9IChpc01vbWVudChpbnB1dCkgfHwgaXNEYXRlKGlucHV0KSA/IGlucHV0LnZhbHVlT2YoKSA6IGNyZWF0ZUxvY2FsKGlucHV0KS52YWx1ZU9mKCkpIC0gcmVzLnZhbHVlT2YoKTtcbiAgICAgICAgLy8gVXNlIGxvdy1sZXZlbCBhcGksIGJlY2F1c2UgdGhpcyBmbiBpcyBsb3ctbGV2ZWwgYXBpLlxuICAgICAgICByZXMuX2Quc2V0VGltZShyZXMuX2QudmFsdWVPZigpICsgZGlmZik7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChyZXMsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQpLmxvY2FsKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRlT2Zmc2V0IChtKSB7XG4gICAgLy8gT24gRmlyZWZveC4yNCBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgYSBmbG9hdGluZyBwb2ludC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9wdWxsLzE4NzFcbiAgICByZXR1cm4gLU1hdGgucm91bmQobS5fZC5nZXRUaW1lem9uZU9mZnNldCgpIC8gMTUpICogMTU7XG59XG5cbi8vIEhPT0tTXG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbi8vIEl0IGlzIGludGVuZGVkIHRvIGtlZXAgdGhlIG9mZnNldCBpbiBzeW5jIHdpdGggdGhlIHRpbWV6b25lLlxuaG9va3MudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge307XG5cbi8vIE1PTUVOVFNcblxuLy8ga2VlcExvY2FsVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0XG4vLyBhZmZlY3RpbmcgdGhlIGxvY2FsIGhvdXIuIFNvIDU6MzE6MjYgKzAzMDAgLS1bdXRjT2Zmc2V0KDIsIHRydWUpXS0tPlxuLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuLy8gKzAyMDAsIHNvIHdlIGFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWQsIHRvIGJlIHZhbGlkLlxuLy9cbi8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuLy8gZnJvbSB0aGUgYWN0dWFsIHJlcHJlc2VudGVkIHRpbWUuIFRoYXQgaXMgd2h5IHdlIGNhbGwgdXBkYXRlT2Zmc2V0XG4vLyBhIHNlY29uZCB0aW1lLiBJbiBjYXNlIGl0IHdhbnRzIHVzIHRvIGNoYW5nZSB0aGUgb2Zmc2V0IGFnYWluXG4vLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2Vcbi8vIHRoZXJlIGlzIG5vIHN1Y2ggdGltZSBpbiB0aGUgZ2l2ZW4gdGltZXpvbmUuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0T2Zmc2V0IChpbnB1dCwga2VlcExvY2FsVGltZSkge1xuICAgIHZhciBvZmZzZXQgPSB0aGlzLl9vZmZzZXQgfHwgMCxcbiAgICAgICAgbG9jYWxBZGp1c3Q7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuICAgICAgICAgICAgaWYgKGlucHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoaW5wdXQpIDwgMTYpIHtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQgKiA2MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lzVVRDICYmIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgIGxvY2FsQWRqdXN0ID0gZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vZmZzZXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5faXNVVEMgPSB0cnVlO1xuICAgICAgICBpZiAobG9jYWxBZGp1c3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hZGQobG9jYWxBZGp1c3QsICdtJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldCAhPT0gaW5wdXQpIHtcbiAgICAgICAgICAgIGlmICgha2VlcExvY2FsVGltZSB8fCB0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgYWRkU3VidHJhY3QodGhpcywgY3JlYXRlRHVyYXRpb24oaW5wdXQgLSBvZmZzZXQsICdtJyksIDEsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gb2Zmc2V0IDogZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRab25lIChpbnB1dCwga2VlcExvY2FsVGltZSkge1xuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpbnB1dCA9IC1pbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9VVEMgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICByZXR1cm4gdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPZmZzZXRUb0xvY2FsIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgaWYgKHRoaXMuX2lzVVRDKSB7XG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xuICAgICAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnRyYWN0KGdldERhdGVPZmZzZXQodGhpcyksICdtJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCAoKSB7XG4gICAgaWYgKHRoaXMuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KHRoaXMuX3R6bSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5faSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgdGhpcy5faSk7XG4gICAgICAgIGlmICh0Wm9uZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCh0Wm9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0FsaWduZWRIb3VyT2Zmc2V0IChpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpbnB1dCA9IGlucHV0ID8gY3JlYXRlTG9jYWwoaW5wdXQpLnV0Y09mZnNldCgpIDogMDtcblxuICAgIHJldHVybiAodGhpcy51dGNPZmZzZXQoKSAtIGlucHV0KSAlIDYwID09PSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KCkgPiB0aGlzLmNsb25lKCkubW9udGgoMCkudXRjT2Zmc2V0KCkgfHxcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCg1KS51dGNPZmZzZXQoKVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQgKCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5faXNEU1RTaGlmdGVkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICAgIH1cblxuICAgIHZhciBjID0ge307XG5cbiAgICBjb3B5Q29uZmlnKGMsIHRoaXMpO1xuICAgIGMgPSBwcmVwYXJlQ29uZmlnKGMpO1xuXG4gICAgaWYgKGMuX2EpIHtcbiAgICAgICAgdmFyIG90aGVyID0gYy5faXNVVEMgPyBjcmVhdGVVVEMoYy5fYSkgOiBjcmVhdGVMb2NhbChjLl9hKTtcbiAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID0gdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgIGNvbXBhcmVBcnJheXMoYy5fYSwgb3RoZXIudG9BcnJheSgpKSA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWwgKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/ICF0aGlzLl9pc1VUQyA6IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVdGNPZmZzZXQgKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1V0YyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwIDogZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBEdXJhdGlvbiwgaXNEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL3V0aWxzL2lzLW51bWJlcic7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcbmltcG9ydCBhYnNSb3VuZCBmcm9tICcuLi91dGlscy9hYnMtcm91bmQnO1xuaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi4vdXRpbHMvaGFzLW93bi1wcm9wJztcbmltcG9ydCB7IERBVEUsIEhPVVIsIE1JTlVURSwgU0VDT05ELCBNSUxMSVNFQ09ORCB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjbG9uZVdpdGhPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuXG4vLyBBU1AuTkVUIGpzb24gZGF0ZSBmb3JtYXQgcmVnZXhcbnZhciBhc3BOZXRSZWdleCA9IC9eKFxcLSk/KD86KFxcZCopWy4gXSk/KFxcZCspXFw6KFxcZCspKD86XFw6KFxcZCspKFxcLlxcZCopPyk/JC87XG5cbi8vIGZyb20gaHR0cDovL2RvY3MuY2xvc3VyZS1saWJyYXJ5Lmdvb2dsZWNvZGUuY29tL2dpdC9jbG9zdXJlX2dvb2dfZGF0ZV9kYXRlLmpzLnNvdXJjZS5odG1sXG4vLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXG4vLyBhbmQgZnVydGhlciBtb2RpZmllZCB0byBhbGxvdyBmb3Igc3RyaW5ncyBjb250YWluaW5nIGJvdGggd2VlayBhbmQgZGF5XG52YXIgaXNvUmVnZXggPSAvXigtKT9QKD86KC0/WzAtOSwuXSopWSk/KD86KC0/WzAtOSwuXSopTSk/KD86KC0/WzAtOSwuXSopVyk/KD86KC0/WzAtOSwuXSopRCk/KD86VCg/OigtP1swLTksLl0qKUgpPyg/OigtP1swLTksLl0qKU0pPyg/OigtP1swLTksLl0qKVMpPyk/JC87XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEdXJhdGlvbiAoaW5wdXQsIGtleSkge1xuICAgIHZhciBkdXJhdGlvbiA9IGlucHV0LFxuICAgICAgICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuICAgICAgICBtYXRjaCA9IG51bGwsXG4gICAgICAgIHNpZ24sXG4gICAgICAgIHJldCxcbiAgICAgICAgZGlmZlJlcztcblxuICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xuICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIG1zIDogaW5wdXQuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgIGQgIDogaW5wdXQuX2RheXMsXG4gICAgICAgICAgICBNICA6IGlucHV0Ll9tb250aHNcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBkdXJhdGlvbltrZXldID0gaW5wdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5taWxsaXNlY29uZHMgPSBpbnB1dDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoISEobWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogMTtcbiAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICB5ICA6IDAsXG4gICAgICAgICAgICBkICA6IHRvSW50KG1hdGNoW0RBVEVdKSAgICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICBoICA6IHRvSW50KG1hdGNoW0hPVVJdKSAgICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICBtICA6IHRvSW50KG1hdGNoW01JTlVURV0pICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICBzICA6IHRvSW50KG1hdGNoW1NFQ09ORF0pICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICBtcyA6IHRvSW50KGFic1JvdW5kKG1hdGNoW01JTExJU0VDT05EXSAqIDEwMDApKSAqIHNpZ24gLy8gdGhlIG1pbGxpc2Vjb25kIGRlY2ltYWwgcG9pbnQgaXMgaW5jbHVkZWQgaW4gdGhlIG1hdGNoXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghIShtYXRjaCA9IGlzb1JlZ2V4LmV4ZWMoaW5wdXQpKSkge1xuICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xuICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIHkgOiBwYXJzZUlzbyhtYXRjaFsyXSwgc2lnbiksXG4gICAgICAgICAgICBNIDogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICAgICAgdyA6IHBhcnNlSXNvKG1hdGNoWzRdLCBzaWduKSxcbiAgICAgICAgICAgIGQgOiBwYXJzZUlzbyhtYXRjaFs1XSwgc2lnbiksXG4gICAgICAgICAgICBoIDogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICAgICAgbSA6IHBhcnNlSXNvKG1hdGNoWzddLCBzaWduKSxcbiAgICAgICAgICAgIHMgOiBwYXJzZUlzbyhtYXRjaFs4XSwgc2lnbilcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID09IG51bGwpIHsvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdvYmplY3QnICYmICgnZnJvbScgaW4gZHVyYXRpb24gfHwgJ3RvJyBpbiBkdXJhdGlvbikpIHtcbiAgICAgICAgZGlmZlJlcyA9IG1vbWVudHNEaWZmZXJlbmNlKGNyZWF0ZUxvY2FsKGR1cmF0aW9uLmZyb20pLCBjcmVhdGVMb2NhbChkdXJhdGlvbi50bykpO1xuXG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgIGR1cmF0aW9uLm1zID0gZGlmZlJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgIGR1cmF0aW9uLk0gPSBkaWZmUmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXQgPSBuZXcgRHVyYXRpb24oZHVyYXRpb24pO1xuXG4gICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfbG9jYWxlJykpIHtcbiAgICAgICAgcmV0Ll9sb2NhbGUgPSBpbnB1dC5fbG9jYWxlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNyZWF0ZUR1cmF0aW9uLmZuID0gRHVyYXRpb24ucHJvdG90eXBlO1xuXG5mdW5jdGlvbiBwYXJzZUlzbyAoaW5wLCBzaWduKSB7XG4gICAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cbiAgICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cbiAgICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXG4gICAgdmFyIHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgLy8gYXBwbHkgc2lnbiB3aGlsZSB3ZSdyZSBhdCBpdFxuICAgIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcbn1cblxuZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgIHZhciByZXMgPSB7bWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDB9O1xuXG4gICAgcmVzLm1vbnRocyA9IG90aGVyLm1vbnRoKCkgLSBiYXNlLm1vbnRoKCkgK1xuICAgICAgICAob3RoZXIueWVhcigpIC0gYmFzZS55ZWFyKCkpICogMTI7XG4gICAgaWYgKGJhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKS5pc0FmdGVyKG90aGVyKSkge1xuICAgICAgICAtLXJlcy5tb250aHM7XG4gICAgfVxuXG4gICAgcmVzLm1pbGxpc2Vjb25kcyA9ICtvdGhlciAtICsoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpKTtcblxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgdmFyIHJlcztcbiAgICBpZiAoIShiYXNlLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiB7bWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDB9O1xuICAgIH1cblxuICAgIG90aGVyID0gY2xvbmVXaXRoT2Zmc2V0KG90aGVyLCBiYXNlKTtcbiAgICBpZiAoYmFzZS5pc0JlZm9yZShvdGhlcikpIHtcbiAgICAgICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShvdGhlciwgYmFzZSk7XG4gICAgICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgcmVzLm1vbnRocyA9IC1yZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG4iLCJpbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4vZ2V0LXNldCc7XG5pbXBvcnQgeyBzZXRNb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbmltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY3JlYXRlJztcbmltcG9ydCB7IGRlcHJlY2F0ZVNpbXBsZSB9IGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZSc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCBhYnNSb3VuZCBmcm9tICcuLi91dGlscy9hYnMtcm91bmQnO1xuXG5cbi8vIFRPRE86IHJlbW92ZSAnbmFtZScgYXJnIGFmdGVyIGRlcHJlY2F0aW9uIGlzIHJlbW92ZWRcbmZ1bmN0aW9uIGNyZWF0ZUFkZGVyKGRpcmVjdGlvbiwgbmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsLCBwZXJpb2QpIHtcbiAgICAgICAgdmFyIGR1ciwgdG1wO1xuICAgICAgICAvL2ludmVydCB0aGUgYXJndW1lbnRzLCBidXQgY29tcGxhaW4gYWJvdXQgaXRcbiAgICAgICAgaWYgKHBlcmlvZCAhPT0gbnVsbCAmJiAhaXNOYU4oK3BlcmlvZCkpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZVNpbXBsZShuYW1lLCAnbW9tZW50KCkuJyArIG5hbWUgICsgJyhwZXJpb2QsIG51bWJlcikgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBtb21lbnQoKS4nICsgbmFtZSArICcobnVtYmVyLCBwZXJpb2QpLiAnICtcbiAgICAgICAgICAgICdTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9hZGQtaW52ZXJ0ZWQtcGFyYW0vIGZvciBtb3JlIGluZm8uJyk7XG4gICAgICAgICAgICB0bXAgPSB2YWw7IHZhbCA9IHBlcmlvZDsgcGVyaW9kID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyArdmFsIDogdmFsO1xuICAgICAgICBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG4gICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGR1ciwgZGlyZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1YnRyYWN0IChtb20sIGR1cmF0aW9uLCBpc0FkZGluZywgdXBkYXRlT2Zmc2V0KSB7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHMsXG4gICAgICAgIGRheXMgPSBhYnNSb3VuZChkdXJhdGlvbi5fZGF5cyksXG4gICAgICAgIG1vbnRocyA9IGFic1JvdW5kKGR1cmF0aW9uLl9tb250aHMpO1xuXG4gICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgIC8vIE5vIG9wXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVPZmZzZXQgPSB1cGRhdGVPZmZzZXQgPT0gbnVsbCA/IHRydWUgOiB1cGRhdGVPZmZzZXQ7XG5cbiAgICBpZiAobWlsbGlzZWNvbmRzKSB7XG4gICAgICAgIG1vbS5fZC5zZXRUaW1lKG1vbS5fZC52YWx1ZU9mKCkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gICAgfVxuICAgIGlmIChkYXlzKSB7XG4gICAgICAgIHNldChtb20sICdEYXRlJywgZ2V0KG1vbSwgJ0RhdGUnKSArIGRheXMgKiBpc0FkZGluZyk7XG4gICAgfVxuICAgIGlmIChtb250aHMpIHtcbiAgICAgICAgc2V0TW9udGgobW9tLCBnZXQobW9tLCAnTW9udGgnKSArIG1vbnRocyAqIGlzQWRkaW5nKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZU9mZnNldCkge1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQobW9tLCBkYXlzIHx8IG1vbnRocyk7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGFkZCAgICAgID0gY3JlYXRlQWRkZXIoMSwgJ2FkZCcpO1xuZXhwb3J0IHZhciBzdWJ0cmFjdCA9IGNyZWF0ZUFkZGVyKC0xLCAnc3VidHJhY3QnKTtcblxuIiwiaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2lzLWZ1bmN0aW9uJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FsZW5kYXJGb3JtYXQobXlNb21lbnQsIG5vdykge1xuICAgIHZhciBkaWZmID0gbXlNb21lbnQuZGlmZihub3csICdkYXlzJywgdHJ1ZSk7XG4gICAgcmV0dXJuIGRpZmYgPCAtNiA/ICdzYW1lRWxzZScgOlxuICAgICAgICAgICAgZGlmZiA8IC0xID8gJ2xhc3RXZWVrJyA6XG4gICAgICAgICAgICBkaWZmIDwgMCA/ICdsYXN0RGF5JyA6XG4gICAgICAgICAgICBkaWZmIDwgMSA/ICdzYW1lRGF5JyA6XG4gICAgICAgICAgICBkaWZmIDwgMiA/ICduZXh0RGF5JyA6XG4gICAgICAgICAgICBkaWZmIDwgNyA/ICduZXh0V2VlaycgOiAnc2FtZUVsc2UnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsZW5kYXIgKHRpbWUsIGZvcm1hdHMpIHtcbiAgICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxuICAgIC8vIEdldHRpbmcgc3RhcnQtb2YtdG9kYXkgZGVwZW5kcyBvbiB3aGV0aGVyIHdlJ3JlIGxvY2FsL3V0Yy9vZmZzZXQgb3Igbm90LlxuICAgIHZhciBub3cgPSB0aW1lIHx8IGNyZWF0ZUxvY2FsKCksXG4gICAgICAgIHNvZCA9IGNsb25lV2l0aE9mZnNldChub3csIHRoaXMpLnN0YXJ0T2YoJ2RheScpLFxuICAgICAgICBmb3JtYXQgPSBob29rcy5jYWxlbmRhckZvcm1hdCh0aGlzLCBzb2QpIHx8ICdzYW1lRWxzZSc7XG5cbiAgICB2YXIgb3V0cHV0ID0gZm9ybWF0cyAmJiAoaXNGdW5jdGlvbihmb3JtYXRzW2Zvcm1hdF0pID8gZm9ybWF0c1tmb3JtYXRdLmNhbGwodGhpcywgbm93KSA6IGZvcm1hdHNbZm9ybWF0XSk7XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXQob3V0cHV0IHx8IHRoaXMubG9jYWxlRGF0YSgpLmNhbGVuZGFyKGZvcm1hdCwgdGhpcywgY3JlYXRlTG9jYWwobm93KSkpO1xufVxuIiwiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBNb21lbnQodGhpcyk7XG59XG4iLCJpbXBvcnQgeyBpc01vbWVudCB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgbm9ybWFsaXplVW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICcuLi91dGlscy9pcy11bmRlZmluZWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBZnRlciAoaW5wdXQsIHVuaXRzKSB7XG4gICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KTtcbiAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKCFpc1VuZGVmaW5lZCh1bml0cykgPyB1bml0cyA6ICdtaWxsaXNlY29uZCcpO1xuICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPiBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxJbnB1dC52YWx1ZU9mKCkgPCB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmVmb3JlIChpbnB1dCwgdW5pdHMpIHtcbiAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHMoIWlzVW5kZWZpbmVkKHVuaXRzKSA/IHVuaXRzIDogJ21pbGxpc2Vjb25kJyk7XG4gICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2VlbiAoZnJvbSwgdG8sIHVuaXRzLCBpbmNsdXNpdml0eSkge1xuICAgIGluY2x1c2l2aXR5ID0gaW5jbHVzaXZpdHkgfHwgJygpJztcbiAgICByZXR1cm4gKGluY2x1c2l2aXR5WzBdID09PSAnKCcgPyB0aGlzLmlzQWZ0ZXIoZnJvbSwgdW5pdHMpIDogIXRoaXMuaXNCZWZvcmUoZnJvbSwgdW5pdHMpKSAmJlxuICAgICAgICAoaW5jbHVzaXZpdHlbMV0gPT09ICcpJyA/IHRoaXMuaXNCZWZvcmUodG8sIHVuaXRzKSA6ICF0aGlzLmlzQWZ0ZXIodG8sIHVuaXRzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWUgKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCksXG4gICAgICAgIGlucHV0TXM7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyB8fCAnbWlsbGlzZWNvbmQnKTtcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID09PSBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dE1zID0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpIDw9IGlucHV0TXMgJiYgaW5wdXRNcyA8PSB0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpLnZhbHVlT2YoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVPckFmdGVyIChpbnB1dCwgdW5pdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoaW5wdXQsIHVuaXRzKSB8fCB0aGlzLmlzQWZ0ZXIoaW5wdXQsdW5pdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lT3JCZWZvcmUgKGlucHV0LCB1bml0cykge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNCZWZvcmUoaW5wdXQsdW5pdHMpO1xufVxuIiwiaW1wb3J0IGFic0Zsb29yIGZyb20gJy4uL3V0aWxzL2Ficy1mbG9vcic7XG5pbXBvcnQgeyBjbG9uZVdpdGhPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xuaW1wb3J0IHsgbm9ybWFsaXplVW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmYgKGlucHV0LCB1bml0cywgYXNGbG9hdCkge1xuICAgIHZhciB0aGF0LFxuICAgICAgICB6b25lRGVsdGEsXG4gICAgICAgIGRlbHRhLCBvdXRwdXQ7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgdGhhdCA9IGNsb25lV2l0aE9mZnNldChpbnB1dCwgdGhpcyk7XG5cbiAgICBpZiAoIXRoYXQuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgem9uZURlbHRhID0gKHRoYXQudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKSAqIDZlNDtcblxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgaWYgKHVuaXRzID09PSAneWVhcicgfHwgdW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICdxdWFydGVyJykge1xuICAgICAgICBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCk7XG4gICAgICAgIGlmICh1bml0cyA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgLyAzO1xuICAgICAgICB9IGVsc2UgaWYgKHVuaXRzID09PSAneWVhcicpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCAvIDEyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsdGEgPSB0aGlzIC0gdGhhdDtcbiAgICAgICAgb3V0cHV0ID0gdW5pdHMgPT09ICdzZWNvbmQnID8gZGVsdGEgLyAxZTMgOiAvLyAxMDAwXG4gICAgICAgICAgICB1bml0cyA9PT0gJ21pbnV0ZScgPyBkZWx0YSAvIDZlNCA6IC8vIDEwMDAgKiA2MFxuICAgICAgICAgICAgdW5pdHMgPT09ICdob3VyJyA/IGRlbHRhIC8gMzZlNSA6IC8vIDEwMDAgKiA2MCAqIDYwXG4gICAgICAgICAgICB1bml0cyA9PT0gJ2RheScgPyAoZGVsdGEgLSB6b25lRGVsdGEpIC8gODY0ZTUgOiAvLyAxMDAwICogNjAgKiA2MCAqIDI0LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICB1bml0cyA9PT0gJ3dlZWsnID8gKGRlbHRhIC0gem9uZURlbHRhKSAvIDYwNDhlNSA6IC8vIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICBkZWx0YTtcbiAgICB9XG4gICAgcmV0dXJuIGFzRmxvYXQgPyBvdXRwdXQgOiBhYnNGbG9vcihvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBtb250aERpZmYgKGEsIGIpIHtcbiAgICAvLyBkaWZmZXJlbmNlIGluIG1vbnRoc1xuICAgIHZhciB3aG9sZU1vbnRoRGlmZiA9ICgoYi55ZWFyKCkgLSBhLnllYXIoKSkgKiAxMikgKyAoYi5tb250aCgpIC0gYS5tb250aCgpKSxcbiAgICAgICAgLy8gYiBpcyBpbiAoYW5jaG9yIC0gMSBtb250aCwgYW5jaG9yICsgMSBtb250aClcbiAgICAgICAgYW5jaG9yID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiwgJ21vbnRocycpLFxuICAgICAgICBhbmNob3IyLCBhZGp1c3Q7XG5cbiAgICBpZiAoYiAtIGFuY2hvciA8IDApIHtcbiAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgLSAxLCAnbW9udGhzJyk7XG4gICAgICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IgLSBhbmNob3IyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbmNob3IyID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiArIDEsICdtb250aHMnKTtcbiAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvcjIgLSBhbmNob3IpO1xuICAgIH1cblxuICAgIC8vY2hlY2sgZm9yIG5lZ2F0aXZlIHplcm8sIHJldHVybiB6ZXJvIGlmIG5lZ2F0aXZlIHplcm9cbiAgICByZXR1cm4gLSh3aG9sZU1vbnRoRGlmZiArIGFkanVzdCkgfHwgMDtcbn1cbiIsImltcG9ydCB7IGZvcm1hdE1vbWVudCB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuLi91dGlscy9pcy1mdW5jdGlvbic7XG5cbmhvb2tzLmRlZmF1bHRGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onO1xuaG9va3MuZGVmYXVsdEZvcm1hdFV0YyA9ICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmxvY2FsZSgnZW4nKS5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0lTT1N0cmluZyAoKSB7XG4gICAgdmFyIG0gPSB0aGlzLmNsb25lKCkudXRjKCk7XG4gICAgaWYgKDAgPCBtLnllYXIoKSAmJiBtLnllYXIoKSA8PSA5OTk5KSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSkge1xuICAgICAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIGEgaHVtYW4gcmVhZGFibGUgcmVwcmVzZW50YXRpb24gb2YgYSBtb21lbnQgdGhhdCBjYW5cbiAqIGFsc28gYmUgZXZhbHVhdGVkIHRvIGdldCBhIG5ldyBtb21lbnQgd2hpY2ggaXMgdGhlIHNhbWVcbiAqXG4gKiBAbGluayBodHRwczovL25vZGVqcy5vcmcvZGlzdC9sYXRlc3QvZG9jcy9hcGkvdXRpbC5odG1sI3V0aWxfY3VzdG9tX2luc3BlY3RfZnVuY3Rpb25fb25fb2JqZWN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gJ21vbWVudC5pbnZhbGlkKC8qICcgKyB0aGlzLl9pICsgJyAqLyknO1xuICAgIH1cbiAgICB2YXIgZnVuYyA9ICdtb21lbnQnO1xuICAgIHZhciB6b25lID0gJyc7XG4gICAgaWYgKCF0aGlzLmlzTG9jYWwoKSkge1xuICAgICAgICBmdW5jID0gdGhpcy51dGNPZmZzZXQoKSA9PT0gMCA/ICdtb21lbnQudXRjJyA6ICdtb21lbnQucGFyc2Vab25lJztcbiAgICAgICAgem9uZSA9ICdaJztcbiAgICB9XG4gICAgdmFyIHByZWZpeCA9ICdbJyArIGZ1bmMgKyAnKFwiXSc7XG4gICAgdmFyIHllYXIgPSAoMCA8IHRoaXMueWVhcigpICYmIHRoaXMueWVhcigpIDw9IDk5OTkpID8gJ1lZWVknIDogJ1lZWVlZWSc7XG4gICAgdmFyIGRhdGV0aW1lID0gJy1NTS1ERFtUXUhIOm1tOnNzLlNTUyc7XG4gICAgdmFyIHN1ZmZpeCA9IHpvbmUgKyAnW1wiKV0nO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KHByZWZpeCArIHllYXIgKyBkYXRldGltZSArIHN1ZmZpeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQgKGlucHV0U3RyaW5nKSB7XG4gICAgaWYgKCFpbnB1dFN0cmluZykge1xuICAgICAgICBpbnB1dFN0cmluZyA9IHRoaXMuaXNVdGMoKSA/IGhvb2tzLmRlZmF1bHRGb3JtYXRVdGMgOiBob29rcy5kZWZhdWx0Rm9ybWF0O1xuICAgIH1cbiAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgaXNNb21lbnQgfSBmcm9tICcuLi9tb21lbnQvY29uc3RydWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbSAodGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHxcbiAgICAgICAgICAgICBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7dG86IHRoaXMsIGZyb206IHRpbWV9KS5sb2NhbGUodGhpcy5sb2NhbGUoKSkuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Ob3cgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICByZXR1cm4gdGhpcy5mcm9tKGNyZWF0ZUxvY2FsKCksIHdpdGhvdXRTdWZmaXgpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgaXNNb21lbnQgfSBmcm9tICcuLi9tb21lbnQvY29uc3RydWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdG8gKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8XG4gICAgICAgICAgICAgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oe2Zyb206IHRoaXMsIHRvOiB0aW1lfSkubG9jYWxlKHRoaXMubG9jYWxlKCkpLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b05vdyAod2l0aG91dFN1ZmZpeCkge1xuICAgIHJldHVybiB0aGlzLnRvKGNyZWF0ZUxvY2FsKCksIHdpdGhvdXRTdWZmaXgpO1xufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlJztcblxuLy8gSWYgcGFzc2VkIGEgbG9jYWxlIGtleSwgaXQgd2lsbCBzZXQgdGhlIGxvY2FsZSBmb3IgdGhpc1xuLy8gaW5zdGFuY2UuICBPdGhlcndpc2UsIGl0IHdpbGwgcmV0dXJuIHRoZSBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8gdmFyaWFibGVzIGZvciB0aGlzIGluc3RhbmNlLlxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZSAoa2V5KSB7XG4gICAgdmFyIG5ld0xvY2FsZURhdGE7XG5cbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdMb2NhbGVEYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgICAgIGlmIChuZXdMb2NhbGVEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2FsZSA9IG5ld0xvY2FsZURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGxhbmcgPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudCgpLmxhbmcoKSBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkLCB1c2UgbW9tZW50KCkubG9jYWxlRGF0YSgpIHRvIGdldCB0aGUgbGFuZ3VhZ2UgY29uZmlndXJhdGlvbi4gVXNlIG1vbWVudCgpLmxvY2FsZSgpIHRvIGNoYW5nZSBsYW5ndWFnZXMuJyxcbiAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlRGF0YSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbn1cbiIsImltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mICh1bml0cykge1xuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIC8vIHRoZSBmb2xsb3dpbmcgc3dpdGNoIGludGVudGlvbmFsbHkgb21pdHMgYnJlYWsga2V5d29yZHNcbiAgICAvLyB0byB1dGlsaXplIGZhbGxpbmcgdGhyb3VnaCB0aGUgY2FzZXMuXG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIHRoaXMubW9udGgoMCk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICB0aGlzLmRhdGUoMSk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICB0aGlzLmhvdXJzKDApO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgIHRoaXMubWludXRlcygwKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcygwKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIHRoaXMubWlsbGlzZWNvbmRzKDApO1xuICAgIH1cblxuICAgIC8vIHdlZWtzIGFyZSBhIHNwZWNpYWwgY2FzZVxuICAgIGlmICh1bml0cyA9PT0gJ3dlZWsnKSB7XG4gICAgICAgIHRoaXMud2Vla2RheSgwKTtcbiAgICB9XG4gICAgaWYgKHVuaXRzID09PSAnaXNvV2VlaycpIHtcbiAgICAgICAgdGhpcy5pc29XZWVrZGF5KDEpO1xuICAgIH1cblxuICAgIC8vIHF1YXJ0ZXJzIGFyZSBhbHNvIHNwZWNpYWxcbiAgICBpZiAodW5pdHMgPT09ICdxdWFydGVyJykge1xuICAgICAgICB0aGlzLm1vbnRoKE1hdGguZmxvb3IodGhpcy5tb250aCgpIC8gMykgKiAzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mICh1bml0cykge1xuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIGlmICh1bml0cyA9PT0gdW5kZWZpbmVkIHx8IHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vICdkYXRlJyBpcyBhbiBhbGlhcyBmb3IgJ2RheScsIHNvIGl0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHN1Y2guXG4gICAgaWYgKHVuaXRzID09PSAnZGF0ZScpIHtcbiAgICAgICAgdW5pdHMgPSAnZGF5JztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGFydE9mKHVuaXRzKS5hZGQoMSwgKHVuaXRzID09PSAnaXNvV2VlaycgPyAnd2VlaycgOiB1bml0cykpLnN1YnRyYWN0KDEsICdtcycpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHZhbHVlT2YgKCkge1xuICAgIHJldHVybiB0aGlzLl9kLnZhbHVlT2YoKSAtICgodGhpcy5fb2Zmc2V0IHx8IDApICogNjAwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5peCAoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkgKCkge1xuICAgIHZhciBtID0gdGhpcztcbiAgICByZXR1cm4gW20ueWVhcigpLCBtLm1vbnRoKCksIG0uZGF0ZSgpLCBtLmhvdXIoKSwgbS5taW51dGUoKSwgbS5zZWNvbmQoKSwgbS5taWxsaXNlY29uZCgpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0ICgpIHtcbiAgICB2YXIgbSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcnM6IG0ueWVhcigpLFxuICAgICAgICBtb250aHM6IG0ubW9udGgoKSxcbiAgICAgICAgZGF0ZTogbS5kYXRlKCksXG4gICAgICAgIGhvdXJzOiBtLmhvdXJzKCksXG4gICAgICAgIG1pbnV0ZXM6IG0ubWludXRlcygpLFxuICAgICAgICBzZWNvbmRzOiBtLnNlY29uZHMoKSxcbiAgICAgICAgbWlsbGlzZWNvbmRzOiBtLm1pbGxpc2Vjb25kcygpXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gICAgLy8gbmV3IERhdGUoTmFOKS50b0pTT04oKSA9PT0gbnVsbFxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMudG9JU09TdHJpbmcoKSA6IG51bGw7XG59XG4iLCJpbXBvcnQgeyBpc1ZhbGlkIGFzIF9pc1ZhbGlkIH0gZnJvbSAnLi4vY3JlYXRlL3ZhbGlkJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZCAoKSB7XG4gICAgcmV0dXJuIF9pc1ZhbGlkKHRoaXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2luZ0ZsYWdzICgpIHtcbiAgICByZXR1cm4gZXh0ZW5kKHt9LCBnZXRQYXJzaW5nRmxhZ3ModGhpcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZEF0ICgpIHtcbiAgICByZXR1cm4gZ2V0UGFyc2luZ0ZsYWdzKHRoaXMpLm92ZXJmbG93O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dDogdGhpcy5faSxcbiAgICAgICAgZm9ybWF0OiB0aGlzLl9mLFxuICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgaXNVVEM6IHRoaXMuX2lzVVRDLFxuICAgICAgICBzdHJpY3Q6IHRoaXMuX3N0cmljdFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMXRvNCwgbWF0Y2gxdG82LCBtYXRjaDIsIG1hdGNoNCwgbWF0Y2g2LCBtYXRjaFNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgd2Vla09mWWVhciwgd2Vla3NJblllYXIsIGRheU9mWWVhckZyb21XZWVrcyB9IGZyb20gJy4vd2Vlay1jYWxlbmRhci11dGlscyc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnZ2cnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLndlZWtZZWFyKCkgJSAxMDA7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydHRycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcbn0pO1xuXG5mdW5jdGlvbiBhZGRXZWVrWWVhckZvcm1hdFRva2VuICh0b2tlbiwgZ2V0dGVyKSB7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgW3Rva2VuLCB0b2tlbi5sZW5ndGhdLCAwLCBnZXR0ZXIpO1xufVxuXG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnJywgICAgICd3ZWVrWWVhcicpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZ2cnLCAgICAnd2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0cnLCAgJ2lzb1dlZWtZZWFyJyk7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHRycsICdpc29XZWVrWWVhcicpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnd2Vla1llYXInLCAnZ2cnKTtcbmFkZFVuaXRBbGlhcygnaXNvV2Vla1llYXInLCAnR0cnKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCd3ZWVrWWVhcicsIDEpO1xuYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrWWVhcicsIDEpO1xuXG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignRycsICAgICAgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignZycsICAgICAgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignR0cnLCAgICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignZ2cnLCAgICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignR0dHRycsICAgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignZ2dnZycsICAgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignR0dHR0cnLCAgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignZ2dnZ2cnLCAgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2dnZ2cnLCAnZ2dnZ2cnLCAnR0dHRycsICdHR0dHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XG59KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydnZycsICdHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbn0pO1xuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRXZWVrWWVhciAoaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbCh0aGlzLFxuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICB0aGlzLndlZWsoKSxcbiAgICAgICAgICAgIHRoaXMud2Vla2RheSgpLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93LFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG95KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldElTT1dlZWtZZWFyIChpbnB1dCkge1xuICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKHRoaXMsXG4gICAgICAgICAgICBpbnB1dCwgdGhpcy5pc29XZWVrKCksIHRoaXMuaXNvV2Vla2RheSgpLCAxLCA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtzSW5ZZWFyICgpIHtcbiAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIDEsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla3NJblllYXIgKCkge1xuICAgIHZhciB3ZWVrSW5mbyA9IHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrO1xuICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgd2Vla0luZm8uZG93LCB3ZWVrSW5mby5kb3kpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRXZWVrWWVhckhlbHBlcihpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICB2YXIgd2Vla3NUYXJnZXQ7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHdlZWtPZlllYXIodGhpcywgZG93LCBkb3kpLnllYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2Vla3NUYXJnZXQgPSB3ZWVrc0luWWVhcihpbnB1dCwgZG93LCBkb3kpO1xuICAgICAgICBpZiAod2VlayA+IHdlZWtzVGFyZ2V0KSB7XG4gICAgICAgICAgICB3ZWVrID0gd2Vla3NUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFdlZWtBbGwuY2FsbCh0aGlzLCBpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0V2Vla0FsbCh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICB2YXIgZGF5T2ZZZWFyRGF0YSA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpLFxuICAgICAgICBkYXRlID0gY3JlYXRlVVRDRGF0ZShkYXlPZlllYXJEYXRhLnllYXIsIDAsIGRheU9mWWVhckRhdGEuZGF5T2ZZZWFyKTtcblxuICAgIHRoaXMueWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgIHRoaXMubW9udGgoZGF0ZS5nZXRVVENNb250aCgpKTtcbiAgICB0aGlzLmRhdGUoZGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IE1PTlRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1EnLCAwLCAnUW8nLCAncXVhcnRlcicpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygncXVhcnRlcicsICdRJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgncXVhcnRlcicsIDcpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1EnLCBtYXRjaDEpO1xuYWRkUGFyc2VUb2tlbignUScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xufSk7XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFF1YXJ0ZXIgKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMykgOiB0aGlzLm1vbnRoKChpbnB1dCAtIDEpICogMyArIHRoaXMubW9udGgoKSAlIDMpO1xufVxuIiwiaW1wb3J0IHsgbWFrZUdldFNldCB9IGZyb20gJy4uL21vbWVudC9nZXQtc2V0JztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IERBVEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignRCcsIFsnREQnLCAyXSwgJ0RvJywgJ2RhdGUnKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2RhdGUnLCAnRCcpO1xuXG4vLyBQUklPUk9JVFlcbmFkZFVuaXRQcmlvcml0eSgnZGF0ZScsIDkpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0QnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ0REJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignRG8nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBpc1N0cmljdCA/IGxvY2FsZS5fb3JkaW5hbFBhcnNlIDogbG9jYWxlLl9vcmRpbmFsUGFyc2VMZW5pZW50O1xufSk7XG5cbmFkZFBhcnNlVG9rZW4oWydEJywgJ0REJ10sIERBVEUpO1xuYWRkUGFyc2VUb2tlbignRG8nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbREFURV0gPSB0b0ludChpbnB1dC5tYXRjaChtYXRjaDF0bzIpWzBdLCAxMCk7XG59KTtcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgdmFyIGdldFNldERheU9mTW9udGggPSBtYWtlR2V0U2V0KCdEYXRlJywgdHJ1ZSk7XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDMsIG1hdGNoMXRvMyB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGRheXNJblllYXIgfSBmcm9tICcuL3llYXInO1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdEREQnLCBbJ0REREQnLCAzXSwgJ0RERG8nLCAnZGF5T2ZZZWFyJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdkYXlPZlllYXInLCAnREREJyk7XG5cbi8vIFBSSU9SSVRZXG5hZGRVbml0UHJpb3JpdHkoJ2RheU9mWWVhcicsIDQpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0RERCcsICBtYXRjaDF0bzMpO1xuYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG5hZGRQYXJzZVRva2VuKFsnREREJywgJ0REREQnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9kYXlPZlllYXIgPSB0b0ludChpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXREYXlPZlllYXIgKGlucHV0KSB7XG4gICAgdmFyIGRheU9mWWVhciA9IE1hdGgucm91bmQoKHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKSAtIHRoaXMuY2xvbmUoKS5zdGFydE9mKCd5ZWFyJykpIC8gODY0ZTUpICsgMTtcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKChpbnB1dCAtIGRheU9mWWVhciksICdkJyk7XG59XG4iLCJpbXBvcnQgeyBtYWtlR2V0U2V0IH0gZnJvbSAnLi4vbW9tZW50L2dldC1zZXQnO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgTUlOVVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDJdLCAwLCAnbWludXRlJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdtaW51dGUnLCAnbScpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ21pbnV0ZScsIDE0KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdtJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFBhcnNlVG9rZW4oWydtJywgJ21tJ10sIE1JTlVURSk7XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IHZhciBnZXRTZXRNaW51dGUgPSBtYWtlR2V0U2V0KCdNaW51dGVzJywgZmFsc2UpO1xuIiwiaW1wb3J0IHsgbWFrZUdldFNldCB9IGZyb20gJy4uL21vbWVudC9nZXQtc2V0JztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IFNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigncycsIFsnc3MnLCAyXSwgMCwgJ3NlY29uZCcpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnc2Vjb25kJywgJ3MnKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdzZWNvbmQnLCAxNSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigncycsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignc3MnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRQYXJzZVRva2VuKFsncycsICdzcyddLCBTRUNPTkQpO1xuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCB2YXIgZ2V0U2V0U2Vjb25kID0gbWFrZUdldFNldCgnU2Vjb25kcycsIGZhbHNlKTtcbiIsImltcG9ydCB7IG1ha2VHZXRTZXQgfSBmcm9tICcuLi9tb21lbnQvZ2V0LXNldCc7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDEsIG1hdGNoMiwgbWF0Y2gzLCBtYXRjaDF0bzMsIG1hdGNoVW5zaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgTUlMTElTRUNPTkQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignUycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTAwKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTApO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTJywgM10sIDAsICdtaWxsaXNlY29uZCcpO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTJywgNF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1MnLCA1XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTJywgNl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTJywgN10sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1MnLCA4XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1NTJywgOV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwMDtcbn0pO1xuXG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdtaWxsaXNlY29uZCcsICdtcycpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ21pbGxpc2Vjb25kJywgMTYpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1MnLCAgICBtYXRjaDF0bzMsIG1hdGNoMSk7XG5hZGRSZWdleFRva2VuKCdTUycsICAgbWF0Y2gxdG8zLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignU1NTJywgIG1hdGNoMXRvMywgbWF0Y2gzKTtcblxudmFyIHRva2VuO1xuZm9yICh0b2tlbiA9ICdTU1NTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICAgIGFkZFJlZ2V4VG9rZW4odG9rZW4sIG1hdGNoVW5zaWduZWQpO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1zKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W01JTExJU0VDT05EXSA9IHRvSW50KCgnMC4nICsgaW5wdXQpICogMTAwMCk7XG59XG5cbmZvciAodG9rZW4gPSAnUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBwYXJzZU1zKTtcbn1cbi8vIE1PTUVOVFNcblxuZXhwb3J0IHZhciBnZXRTZXRNaWxsaXNlY29uZCA9IG1ha2VHZXRTZXQoJ01pbGxpc2Vjb25kcycsIGZhbHNlKTtcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3onLCAgMCwgMCwgJ3pvbmVBYmJyJyk7XG5hZGRGb3JtYXRUb2tlbignenonLCAwLCAwLCAnem9uZU5hbWUnKTtcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Wm9uZUFiYnIgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1VUQyA/ICdVVEMnIDogJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRab25lTmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xufVxuIiwiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbnZhciBwcm90byA9IE1vbWVudC5wcm90b3R5cGU7XG5cbmltcG9ydCB7IGFkZCwgc3VidHJhY3QgfSBmcm9tICcuL2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBjYWxlbmRhciwgZ2V0Q2FsZW5kYXJGb3JtYXQgfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IGNsb25lIH0gZnJvbSAnLi9jbG9uZSc7XG5pbXBvcnQgeyBpc0JlZm9yZSwgaXNCZXR3ZWVuLCBpc1NhbWUsIGlzQWZ0ZXIsIGlzU2FtZU9yQWZ0ZXIsIGlzU2FtZU9yQmVmb3JlIH0gZnJvbSAnLi9jb21wYXJlJztcbmltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYnO1xuaW1wb3J0IHsgZm9ybWF0LCB0b1N0cmluZywgdG9JU09TdHJpbmcsIGluc3BlY3QgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBmcm9tLCBmcm9tTm93IH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IHRvLCB0b05vdyB9IGZyb20gJy4vdG8nO1xuaW1wb3J0IHsgc3RyaW5nR2V0LCBzdHJpbmdTZXQgfSBmcm9tICcuL2dldC1zZXQnO1xuaW1wb3J0IHsgbG9jYWxlLCBsb2NhbGVEYXRhLCBsYW5nIH0gZnJvbSAnLi9sb2NhbGUnO1xuaW1wb3J0IHsgcHJvdG90eXBlTWluLCBwcm90b3R5cGVNYXggfSBmcm9tICcuL21pbi1tYXgnO1xuaW1wb3J0IHsgc3RhcnRPZiwgZW5kT2YgfSBmcm9tICcuL3N0YXJ0LWVuZC1vZic7XG5pbXBvcnQgeyB2YWx1ZU9mLCB0b0RhdGUsIHRvQXJyYXksIHRvT2JqZWN0LCB0b0pTT04sIHVuaXggfSBmcm9tICcuL3RvLXR5cGUnO1xuaW1wb3J0IHsgaXNWYWxpZCwgcGFyc2luZ0ZsYWdzLCBpbnZhbGlkQXQgfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCB7IGNyZWF0aW9uRGF0YSB9IGZyb20gJy4vY3JlYXRpb24tZGF0YSc7XG5cbnByb3RvLmFkZCAgICAgICAgICAgICAgID0gYWRkO1xucHJvdG8uY2FsZW5kYXIgICAgICAgICAgPSBjYWxlbmRhcjtcbnByb3RvLmNsb25lICAgICAgICAgICAgID0gY2xvbmU7XG5wcm90by5kaWZmICAgICAgICAgICAgICA9IGRpZmY7XG5wcm90by5lbmRPZiAgICAgICAgICAgICA9IGVuZE9mO1xucHJvdG8uZm9ybWF0ICAgICAgICAgICAgPSBmb3JtYXQ7XG5wcm90by5mcm9tICAgICAgICAgICAgICA9IGZyb207XG5wcm90by5mcm9tTm93ICAgICAgICAgICA9IGZyb21Ob3c7XG5wcm90by50byAgICAgICAgICAgICAgICA9IHRvO1xucHJvdG8udG9Ob3cgICAgICAgICAgICAgPSB0b05vdztcbnByb3RvLmdldCAgICAgICAgICAgICAgID0gc3RyaW5nR2V0O1xucHJvdG8uaW52YWxpZEF0ICAgICAgICAgPSBpbnZhbGlkQXQ7XG5wcm90by5pc0FmdGVyICAgICAgICAgICA9IGlzQWZ0ZXI7XG5wcm90by5pc0JlZm9yZSAgICAgICAgICA9IGlzQmVmb3JlO1xucHJvdG8uaXNCZXR3ZWVuICAgICAgICAgPSBpc0JldHdlZW47XG5wcm90by5pc1NhbWUgICAgICAgICAgICA9IGlzU2FtZTtcbnByb3RvLmlzU2FtZU9yQWZ0ZXIgICAgID0gaXNTYW1lT3JBZnRlcjtcbnByb3RvLmlzU2FtZU9yQmVmb3JlICAgID0gaXNTYW1lT3JCZWZvcmU7XG5wcm90by5pc1ZhbGlkICAgICAgICAgICA9IGlzVmFsaWQ7XG5wcm90by5sYW5nICAgICAgICAgICAgICA9IGxhbmc7XG5wcm90by5sb2NhbGUgICAgICAgICAgICA9IGxvY2FsZTtcbnByb3RvLmxvY2FsZURhdGEgICAgICAgID0gbG9jYWxlRGF0YTtcbnByb3RvLm1heCAgICAgICAgICAgICAgID0gcHJvdG90eXBlTWF4O1xucHJvdG8ubWluICAgICAgICAgICAgICAgPSBwcm90b3R5cGVNaW47XG5wcm90by5wYXJzaW5nRmxhZ3MgICAgICA9IHBhcnNpbmdGbGFncztcbnByb3RvLnNldCAgICAgICAgICAgICAgID0gc3RyaW5nU2V0O1xucHJvdG8uc3RhcnRPZiAgICAgICAgICAgPSBzdGFydE9mO1xucHJvdG8uc3VidHJhY3QgICAgICAgICAgPSBzdWJ0cmFjdDtcbnByb3RvLnRvQXJyYXkgICAgICAgICAgID0gdG9BcnJheTtcbnByb3RvLnRvT2JqZWN0ICAgICAgICAgID0gdG9PYmplY3Q7XG5wcm90by50b0RhdGUgICAgICAgICAgICA9IHRvRGF0ZTtcbnByb3RvLnRvSVNPU3RyaW5nICAgICAgID0gdG9JU09TdHJpbmc7XG5wcm90by5pbnNwZWN0ICAgICAgICAgICA9IGluc3BlY3Q7XG5wcm90by50b0pTT04gICAgICAgICAgICA9IHRvSlNPTjtcbnByb3RvLnRvU3RyaW5nICAgICAgICAgID0gdG9TdHJpbmc7XG5wcm90by51bml4ICAgICAgICAgICAgICA9IHVuaXg7XG5wcm90by52YWx1ZU9mICAgICAgICAgICA9IHZhbHVlT2Y7XG5wcm90by5jcmVhdGlvbkRhdGEgICAgICA9IGNyZWF0aW9uRGF0YTtcblxuLy8gWWVhclxuaW1wb3J0IHsgZ2V0U2V0WWVhciwgZ2V0SXNMZWFwWWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xucHJvdG8ueWVhciAgICAgICA9IGdldFNldFllYXI7XG5wcm90by5pc0xlYXBZZWFyID0gZ2V0SXNMZWFwWWVhcjtcblxuLy8gV2VlayBZZWFyXG5pbXBvcnQgeyBnZXRTZXRXZWVrWWVhciwgZ2V0U2V0SVNPV2Vla1llYXIsIGdldFdlZWtzSW5ZZWFyLCBnZXRJU09XZWVrc0luWWVhciB9IGZyb20gJy4uL3VuaXRzL3dlZWsteWVhcic7XG5wcm90by53ZWVrWWVhciAgICA9IGdldFNldFdlZWtZZWFyO1xucHJvdG8uaXNvV2Vla1llYXIgPSBnZXRTZXRJU09XZWVrWWVhcjtcblxuLy8gUXVhcnRlclxuaW1wb3J0IHsgZ2V0U2V0UXVhcnRlciB9IGZyb20gJy4uL3VuaXRzL3F1YXJ0ZXInO1xucHJvdG8ucXVhcnRlciA9IHByb3RvLnF1YXJ0ZXJzID0gZ2V0U2V0UXVhcnRlcjtcblxuLy8gTW9udGhcbmltcG9ydCB7IGdldFNldE1vbnRoLCBnZXREYXlzSW5Nb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbnByb3RvLm1vbnRoICAgICAgID0gZ2V0U2V0TW9udGg7XG5wcm90by5kYXlzSW5Nb250aCA9IGdldERheXNJbk1vbnRoO1xuXG4vLyBXZWVrXG5pbXBvcnQgeyBnZXRTZXRXZWVrLCBnZXRTZXRJU09XZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XG5wcm90by53ZWVrICAgICAgICAgICA9IHByb3RvLndlZWtzICAgICAgICA9IGdldFNldFdlZWs7XG5wcm90by5pc29XZWVrICAgICAgICA9IHByb3RvLmlzb1dlZWtzICAgICA9IGdldFNldElTT1dlZWs7XG5wcm90by53ZWVrc0luWWVhciAgICA9IGdldFdlZWtzSW5ZZWFyO1xucHJvdG8uaXNvV2Vla3NJblllYXIgPSBnZXRJU09XZWVrc0luWWVhcjtcblxuLy8gRGF5XG5pbXBvcnQgeyBnZXRTZXREYXlPZk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLW1vbnRoJztcbmltcG9ydCB7IGdldFNldERheU9mV2VlaywgZ2V0U2V0SVNPRGF5T2ZXZWVrLCBnZXRTZXRMb2NhbGVEYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5pbXBvcnQgeyBnZXRTZXREYXlPZlllYXIgfSBmcm9tICcuLi91bml0cy9kYXktb2YteWVhcic7XG5wcm90by5kYXRlICAgICAgID0gZ2V0U2V0RGF5T2ZNb250aDtcbnByb3RvLmRheSAgICAgICAgPSBwcm90by5kYXlzICAgICAgICAgICAgID0gZ2V0U2V0RGF5T2ZXZWVrO1xucHJvdG8ud2Vla2RheSAgICA9IGdldFNldExvY2FsZURheU9mV2VlaztcbnByb3RvLmlzb1dlZWtkYXkgPSBnZXRTZXRJU09EYXlPZldlZWs7XG5wcm90by5kYXlPZlllYXIgID0gZ2V0U2V0RGF5T2ZZZWFyO1xuXG4vLyBIb3VyXG5pbXBvcnQgeyBnZXRTZXRIb3VyIH0gZnJvbSAnLi4vdW5pdHMvaG91cic7XG5wcm90by5ob3VyID0gcHJvdG8uaG91cnMgPSBnZXRTZXRIb3VyO1xuXG4vLyBNaW51dGVcbmltcG9ydCB7IGdldFNldE1pbnV0ZSB9IGZyb20gJy4uL3VuaXRzL21pbnV0ZSc7XG5wcm90by5taW51dGUgPSBwcm90by5taW51dGVzID0gZ2V0U2V0TWludXRlO1xuXG4vLyBTZWNvbmRcbmltcG9ydCB7IGdldFNldFNlY29uZCB9IGZyb20gJy4uL3VuaXRzL3NlY29uZCc7XG5wcm90by5zZWNvbmQgPSBwcm90by5zZWNvbmRzID0gZ2V0U2V0U2Vjb25kO1xuXG4vLyBNaWxsaXNlY29uZFxuaW1wb3J0IHsgZ2V0U2V0TWlsbGlzZWNvbmQgfSBmcm9tICcuLi91bml0cy9taWxsaXNlY29uZCc7XG5wcm90by5taWxsaXNlY29uZCA9IHByb3RvLm1pbGxpc2Vjb25kcyA9IGdldFNldE1pbGxpc2Vjb25kO1xuXG4vLyBPZmZzZXRcbmltcG9ydCB7XG4gICAgZ2V0U2V0T2Zmc2V0LFxuICAgIHNldE9mZnNldFRvVVRDLFxuICAgIHNldE9mZnNldFRvTG9jYWwsXG4gICAgc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQsXG4gICAgaGFzQWxpZ25lZEhvdXJPZmZzZXQsXG4gICAgaXNEYXlsaWdodFNhdmluZ1RpbWUsXG4gICAgaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkLFxuICAgIGdldFNldFpvbmUsXG4gICAgaXNMb2NhbCxcbiAgICBpc1V0Y09mZnNldCxcbiAgICBpc1V0Y1xufSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xucHJvdG8udXRjT2Zmc2V0ICAgICAgICAgICAgPSBnZXRTZXRPZmZzZXQ7XG5wcm90by51dGMgICAgICAgICAgICAgICAgICA9IHNldE9mZnNldFRvVVRDO1xucHJvdG8ubG9jYWwgICAgICAgICAgICAgICAgPSBzZXRPZmZzZXRUb0xvY2FsO1xucHJvdG8ucGFyc2Vab25lICAgICAgICAgICAgPSBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldDtcbnByb3RvLmhhc0FsaWduZWRIb3VyT2Zmc2V0ID0gaGFzQWxpZ25lZEhvdXJPZmZzZXQ7XG5wcm90by5pc0RTVCAgICAgICAgICAgICAgICA9IGlzRGF5bGlnaHRTYXZpbmdUaW1lO1xucHJvdG8uaXNMb2NhbCAgICAgICAgICAgICAgPSBpc0xvY2FsO1xucHJvdG8uaXNVdGNPZmZzZXQgICAgICAgICAgPSBpc1V0Y09mZnNldDtcbnByb3RvLmlzVXRjICAgICAgICAgICAgICAgID0gaXNVdGM7XG5wcm90by5pc1VUQyAgICAgICAgICAgICAgICA9IGlzVXRjO1xuXG4vLyBUaW1lem9uZVxuaW1wb3J0IHsgZ2V0Wm9uZUFiYnIsIGdldFpvbmVOYW1lIH0gZnJvbSAnLi4vdW5pdHMvdGltZXpvbmUnO1xucHJvdG8uem9uZUFiYnIgPSBnZXRab25lQWJicjtcbnByb3RvLnpvbmVOYW1lID0gZ2V0Wm9uZU5hbWU7XG5cbi8vIERlcHJlY2F0aW9uc1xuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlJztcbnByb3RvLmRhdGVzICA9IGRlcHJlY2F0ZSgnZGF0ZXMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIGRhdGUgaW5zdGVhZC4nLCBnZXRTZXREYXlPZk1vbnRoKTtcbnByb3RvLm1vbnRocyA9IGRlcHJlY2F0ZSgnbW9udGhzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb250aCBpbnN0ZWFkJywgZ2V0U2V0TW9udGgpO1xucHJvdG8ueWVhcnMgID0gZGVwcmVjYXRlKCd5ZWFycyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgeWVhciBpbnN0ZWFkJywgZ2V0U2V0WWVhcik7XG5wcm90by56b25lICAgPSBkZXByZWNhdGUoJ21vbWVudCgpLnpvbmUgaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudCgpLnV0Y09mZnNldCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL3pvbmUvJywgZ2V0U2V0Wm9uZSk7XG5wcm90by5pc0RTVFNoaWZ0ZWQgPSBkZXByZWNhdGUoJ2lzRFNUU2hpZnRlZCBpcyBkZXByZWNhdGVkLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9kc3Qtc2hpZnRlZC8gZm9yIG1vcmUgaW5mb3JtYXRpb24nLCBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm90bztcbiIsImltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGNyZWF0ZVVUQyB9IGZyb20gJy4uL2NyZWF0ZS91dGMnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCB9IGZyb20gJy4uL2NyZWF0ZS92YWxpZCc7XG5pbXBvcnQgeyBpc01vbWVudCB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgbWluLCBtYXggfSBmcm9tICcuL21pbi1tYXgnO1xuaW1wb3J0IHsgbm93IH0gZnJvbSAnLi9ub3cnO1xuaW1wb3J0IG1vbWVudFByb3RvdHlwZSBmcm9tICcuL3Byb3RvdHlwZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXggKGlucHV0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsKGlucHV0ICogMTAwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluWm9uZSAoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cykucGFyc2Vab25lKCk7XG59XG5cbmV4cG9ydCB7XG4gICAgbm93LFxuICAgIG1pbixcbiAgICBtYXgsXG4gICAgaXNNb21lbnQsXG4gICAgY3JlYXRlVVRDLFxuICAgIGNyZWF0ZVVuaXgsXG4gICAgY3JlYXRlTG9jYWwsXG4gICAgY3JlYXRlSW5ab25lLFxuICAgIGNyZWF0ZUludmFsaWQsXG4gICAgbW9tZW50UHJvdG90eXBlXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHByZVBhcnNlUG9zdEZvcm1hdCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbn1cbiIsImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG52YXIgcHJvdG8gPSBMb2NhbGUucHJvdG90eXBlO1xuXG5pbXBvcnQgeyBjYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgbG9uZ0RhdGVGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdHMnO1xuaW1wb3J0IHsgaW52YWxpZERhdGUgfSBmcm9tICcuL2ludmFsaWQnO1xuaW1wb3J0IHsgb3JkaW5hbCB9IGZyb20gJy4vb3JkaW5hbCc7XG5pbXBvcnQgeyBwcmVQYXJzZVBvc3RGb3JtYXQgfSBmcm9tICcuL3ByZS1wb3N0LWZvcm1hdCc7XG5pbXBvcnQgeyByZWxhdGl2ZVRpbWUsIHBhc3RGdXR1cmUgfSBmcm9tICcuL3JlbGF0aXZlJztcbmltcG9ydCB7IHNldCB9IGZyb20gJy4vc2V0JztcblxucHJvdG8uY2FsZW5kYXIgICAgICAgID0gY2FsZW5kYXI7XG5wcm90by5sb25nRGF0ZUZvcm1hdCAgPSBsb25nRGF0ZUZvcm1hdDtcbnByb3RvLmludmFsaWREYXRlICAgICA9IGludmFsaWREYXRlO1xucHJvdG8ub3JkaW5hbCAgICAgICAgID0gb3JkaW5hbDtcbnByb3RvLnByZXBhcnNlICAgICAgICA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbnByb3RvLnBvc3Rmb3JtYXQgICAgICA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbnByb3RvLnJlbGF0aXZlVGltZSAgICA9IHJlbGF0aXZlVGltZTtcbnByb3RvLnBhc3RGdXR1cmUgICAgICA9IHBhc3RGdXR1cmU7XG5wcm90by5zZXQgICAgICAgICAgICAgPSBzZXQ7XG5cbi8vIE1vbnRoXG5pbXBvcnQge1xuICAgIGxvY2FsZU1vbnRoc1BhcnNlLFxuICAgIGxvY2FsZU1vbnRocyxcbiAgICBsb2NhbGVNb250aHNTaG9ydCxcbiAgICBtb250aHNSZWdleCxcbiAgICBtb250aHNTaG9ydFJlZ2V4XG59IGZyb20gJy4uL3VuaXRzL21vbnRoJztcblxucHJvdG8ubW9udGhzICAgICAgICAgICAgPSAgICAgICAgbG9jYWxlTW9udGhzO1xucHJvdG8ubW9udGhzU2hvcnQgICAgICAgPSAgICAgICAgbG9jYWxlTW9udGhzU2hvcnQ7XG5wcm90by5tb250aHNQYXJzZSAgICAgICA9ICAgICAgICBsb2NhbGVNb250aHNQYXJzZTtcbnByb3RvLm1vbnRoc1JlZ2V4ICAgICAgID0gbW9udGhzUmVnZXg7XG5wcm90by5tb250aHNTaG9ydFJlZ2V4ICA9IG1vbnRoc1Nob3J0UmVnZXg7XG5cbi8vIFdlZWtcbmltcG9ydCB7IGxvY2FsZVdlZWssIGxvY2FsZUZpcnN0RGF5T2ZZZWFyLCBsb2NhbGVGaXJzdERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xucHJvdG8ud2VlayA9IGxvY2FsZVdlZWs7XG5wcm90by5maXJzdERheU9mWWVhciA9IGxvY2FsZUZpcnN0RGF5T2ZZZWFyO1xucHJvdG8uZmlyc3REYXlPZldlZWsgPSBsb2NhbGVGaXJzdERheU9mV2VlaztcblxuLy8gRGF5IG9mIFdlZWtcbmltcG9ydCB7XG4gICAgbG9jYWxlV2Vla2RheXNQYXJzZSxcbiAgICBsb2NhbGVXZWVrZGF5cyxcbiAgICBsb2NhbGVXZWVrZGF5c01pbixcbiAgICBsb2NhbGVXZWVrZGF5c1Nob3J0LFxuXG4gICAgd2Vla2RheXNSZWdleCxcbiAgICB3ZWVrZGF5c1Nob3J0UmVnZXgsXG4gICAgd2Vla2RheXNNaW5SZWdleFxufSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbnByb3RvLndlZWtkYXlzICAgICAgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzO1xucHJvdG8ud2Vla2RheXNNaW4gICAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNNaW47XG5wcm90by53ZWVrZGF5c1Nob3J0ICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1Nob3J0O1xucHJvdG8ud2Vla2RheXNQYXJzZSAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNQYXJzZTtcblxucHJvdG8ud2Vla2RheXNSZWdleCAgICAgICA9ICAgICAgICB3ZWVrZGF5c1JlZ2V4O1xucHJvdG8ud2Vla2RheXNTaG9ydFJlZ2V4ICA9ICAgICAgICB3ZWVrZGF5c1Nob3J0UmVnZXg7XG5wcm90by53ZWVrZGF5c01pblJlZ2V4ICAgID0gICAgICAgIHdlZWtkYXlzTWluUmVnZXg7XG5cbi8vIEhvdXJzXG5pbXBvcnQgeyBsb2NhbGVJc1BNLCBsb2NhbGVNZXJpZGllbSB9IGZyb20gJy4uL3VuaXRzL2hvdXInO1xuXG5wcm90by5pc1BNID0gbG9jYWxlSXNQTTtcbnByb3RvLm1lcmlkaWVtID0gbG9jYWxlTWVyaWRpZW07XG4iLCJpbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi4vdXRpbHMvaXMtbnVtYmVyJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4vbG9jYWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVVVEMgfSBmcm9tICcuLi9jcmVhdGUvdXRjJztcblxuZnVuY3Rpb24gZ2V0IChmb3JtYXQsIGluZGV4LCBmaWVsZCwgc2V0dGVyKSB7XG4gICAgdmFyIGxvY2FsZSA9IGdldExvY2FsZSgpO1xuICAgIHZhciB1dGMgPSBjcmVhdGVVVEMoKS5zZXQoc2V0dGVyLCBpbmRleCk7XG4gICAgcmV0dXJuIGxvY2FsZVtmaWVsZF0odXRjLCBmb3JtYXQpO1xufVxuXG5mdW5jdGlvbiBsaXN0TW9udGhzSW1wbCAoZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcblxuICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBnZXQoZm9ybWF0LCBpbmRleCwgZmllbGQsICdtb250aCcpO1xuICAgIH1cblxuICAgIHZhciBpO1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBvdXRbaV0gPSBnZXQoZm9ybWF0LCBpLCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8vICgpXG4vLyAoNSlcbi8vIChmbXQsIDUpXG4vLyAoZm10KVxuLy8gKHRydWUpXG4vLyAodHJ1ZSwgNSlcbi8vICh0cnVlLCBmbXQsIDUpXG4vLyAodHJ1ZSwgZm10KVxuZnVuY3Rpb24gbGlzdFdlZWtkYXlzSW1wbCAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCBmaWVsZCkge1xuICAgIGlmICh0eXBlb2YgbG9jYWxlU29ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1hdCA9IGxvY2FsZVNvcnRlZDtcbiAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgIGxvY2FsZVNvcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICB9XG5cbiAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgIHNoaWZ0ID0gbG9jYWxlU29ydGVkID8gbG9jYWxlLl93ZWVrLmRvdyA6IDA7XG5cbiAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZ2V0KGZvcm1hdCwgKGluZGV4ICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICB9XG5cbiAgICB2YXIgaTtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBvdXRbaV0gPSBnZXQoZm9ybWF0LCAoaSArIHNoaWZ0KSAlIDcsIGZpZWxkLCAnZGF5Jyk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0TW9udGhzIChmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RNb250aHNTaG9ydCAoZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCAnbW9udGhzU2hvcnQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RXZWVrZGF5cyAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RXZWVrZGF5c1Nob3J0IChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c1Nob3J0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0V2Vla2RheXNNaW4gKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzTWluJyk7XG59XG4iLCJpbXBvcnQgJy4vcHJvdG90eXBlJztcbmltcG9ydCB7IGdldFNldEdsb2JhbExvY2FsZSB9IGZyb20gJy4vbG9jYWxlcyc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcblxuZ2V0U2V0R2xvYmFsTG9jYWxlKCdlbicsIHtcbiAgICBvcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHZhciBiID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICBvdXRwdXQgPSAodG9JbnQobnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAoYiA9PT0gMikgPyAnbmQnIDpcbiAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICByZXR1cm4gbnVtYmVyICsgb3V0cHV0O1xuICAgIH1cbn0pO1xuIiwiLy8gU2lkZSBlZmZlY3QgaW1wb3J0c1xuaW1wb3J0ICcuL3Byb3RvdHlwZSc7XG5cbmltcG9ydCB7XG4gICAgZ2V0U2V0R2xvYmFsTG9jYWxlLFxuICAgIGRlZmluZUxvY2FsZSxcbiAgICB1cGRhdGVMb2NhbGUsXG4gICAgZ2V0TG9jYWxlLFxuICAgIGxpc3RMb2NhbGVzXG59IGZyb20gJy4vbG9jYWxlcyc7XG5cbmltcG9ydCB7XG4gICAgbGlzdE1vbnRocyxcbiAgICBsaXN0TW9udGhzU2hvcnQsXG4gICAgbGlzdFdlZWtkYXlzLFxuICAgIGxpc3RXZWVrZGF5c1Nob3J0LFxuICAgIGxpc3RXZWVrZGF5c01pblxufSBmcm9tICcuL2xpc3RzJztcblxuZXhwb3J0IHtcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUsXG4gICAgZGVmaW5lTG9jYWxlLFxuICAgIHVwZGF0ZUxvY2FsZSxcbiAgICBnZXRMb2NhbGUsXG4gICAgbGlzdExvY2FsZXMsXG4gICAgbGlzdE1vbnRocyxcbiAgICBsaXN0TW9udGhzU2hvcnQsXG4gICAgbGlzdFdlZWtkYXlzLFxuICAgIGxpc3RXZWVrZGF5c1Nob3J0LFxuICAgIGxpc3RXZWVrZGF5c01pblxufTtcblxuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuXG5ob29rcy5sYW5nID0gZGVwcmVjYXRlKCdtb21lbnQubGFuZyBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZSBpbnN0ZWFkLicsIGdldFNldEdsb2JhbExvY2FsZSk7XG5ob29rcy5sYW5nRGF0YSA9IGRlcHJlY2F0ZSgnbW9tZW50LmxhbmdEYXRhIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlRGF0YSBpbnN0ZWFkLicsIGdldExvY2FsZSk7XG5cbmltcG9ydCAnLi9lbic7XG4iLCJ2YXIgbWF0aEFicyA9IE1hdGguYWJzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWJzICgpIHtcbiAgICB2YXIgZGF0YSAgICAgICAgICAgPSB0aGlzLl9kYXRhO1xuXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gbWF0aEFicyh0aGlzLl9taWxsaXNlY29uZHMpO1xuICAgIHRoaXMuX2RheXMgICAgICAgICA9IG1hdGhBYnModGhpcy5fZGF5cyk7XG4gICAgdGhpcy5fbW9udGhzICAgICAgID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xuXG4gICAgZGF0YS5taWxsaXNlY29uZHMgID0gbWF0aEFicyhkYXRhLm1pbGxpc2Vjb25kcyk7XG4gICAgZGF0YS5zZWNvbmRzICAgICAgID0gbWF0aEFicyhkYXRhLnNlY29uZHMpO1xuICAgIGRhdGEubWludXRlcyAgICAgICA9IG1hdGhBYnMoZGF0YS5taW51dGVzKTtcbiAgICBkYXRhLmhvdXJzICAgICAgICAgPSBtYXRoQWJzKGRhdGEuaG91cnMpO1xuICAgIGRhdGEubW9udGhzICAgICAgICA9IG1hdGhBYnMoZGF0YS5tb250aHMpO1xuICAgIGRhdGEueWVhcnMgICAgICAgICA9IG1hdGhBYnMoZGF0YS55ZWFycyk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi9jcmVhdGUnO1xuXG5mdW5jdGlvbiBhZGRTdWJ0cmFjdCAoZHVyYXRpb24sIGlucHV0LCB2YWx1ZSwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIG90aGVyID0gY3JlYXRlRHVyYXRpb24oaW5wdXQsIHZhbHVlKTtcblxuICAgIGR1cmF0aW9uLl9taWxsaXNlY29uZHMgKz0gZGlyZWN0aW9uICogb3RoZXIuX21pbGxpc2Vjb25kcztcbiAgICBkdXJhdGlvbi5fZGF5cyAgICAgICAgICs9IGRpcmVjdGlvbiAqIG90aGVyLl9kYXlzO1xuICAgIGR1cmF0aW9uLl9tb250aHMgICAgICAgKz0gZGlyZWN0aW9uICogb3RoZXIuX21vbnRocztcblxuICAgIHJldHVybiBkdXJhdGlvbi5fYnViYmxlKCk7XG59XG5cbi8vIHN1cHBvcnRzIG9ubHkgMi4wLXN0eWxlIGFkZCgxLCAncycpIG9yIGFkZChkdXJhdGlvbilcbmV4cG9ydCBmdW5jdGlvbiBhZGQgKGlucHV0LCB2YWx1ZSkge1xuICAgIHJldHVybiBhZGRTdWJ0cmFjdCh0aGlzLCBpbnB1dCwgdmFsdWUsIDEpO1xufVxuXG4vLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBzdWJ0cmFjdCgxLCAncycpIG9yIHN1YnRyYWN0KGR1cmF0aW9uKVxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0IChpbnB1dCwgdmFsdWUpIHtcbiAgICByZXR1cm4gYWRkU3VidHJhY3QodGhpcywgaW5wdXQsIHZhbHVlLCAtMSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYnNDZWlsIChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgYWJzRmxvb3IgZnJvbSAnLi4vdXRpbHMvYWJzLWZsb29yJztcbmltcG9ydCBhYnNDZWlsIGZyb20gJy4uL3V0aWxzL2Ficy1jZWlsJztcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1YmJsZSAoKSB7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcbiAgICB2YXIgZGF5cyAgICAgICAgID0gdGhpcy5fZGF5cztcbiAgICB2YXIgbW9udGhzICAgICAgID0gdGhpcy5fbW9udGhzO1xuICAgIHZhciBkYXRhICAgICAgICAgPSB0aGlzLl9kYXRhO1xuICAgIHZhciBzZWNvbmRzLCBtaW51dGVzLCBob3VycywgeWVhcnMsIG1vbnRoc0Zyb21EYXlzO1xuXG4gICAgLy8gaWYgd2UgaGF2ZSBhIG1peCBvZiBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgdmFsdWVzLCBidWJibGUgZG93biBmaXJzdFxuICAgIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxuICAgIGlmICghKChtaWxsaXNlY29uZHMgPj0gMCAmJiBkYXlzID49IDAgJiYgbW9udGhzID49IDApIHx8XG4gICAgICAgICAgICAobWlsbGlzZWNvbmRzIDw9IDAgJiYgZGF5cyA8PSAwICYmIG1vbnRocyA8PSAwKSkpIHtcbiAgICAgICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xuICAgICAgICBkYXlzID0gMDtcbiAgICAgICAgbW9udGhzID0gMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXG4gICAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxuICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmRzICUgMTAwMDtcblxuICAgIHNlY29uZHMgICAgICAgICAgID0gYWJzRmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gICAgZGF0YS5zZWNvbmRzICAgICAgPSBzZWNvbmRzICUgNjA7XG5cbiAgICBtaW51dGVzICAgICAgICAgICA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgZGF0YS5taW51dGVzICAgICAgPSBtaW51dGVzICUgNjA7XG5cbiAgICBob3VycyAgICAgICAgICAgICA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgZGF0YS5ob3VycyAgICAgICAgPSBob3VycyAlIDI0O1xuXG4gICAgZGF5cyArPSBhYnNGbG9vcihob3VycyAvIDI0KTtcblxuICAgIC8vIGNvbnZlcnQgZGF5cyB0byBtb250aHNcbiAgICBtb250aHNGcm9tRGF5cyA9IGFic0Zsb29yKGRheXNUb01vbnRocyhkYXlzKSk7XG4gICAgbW9udGhzICs9IG1vbnRoc0Zyb21EYXlzO1xuICAgIGRheXMgLT0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzRnJvbURheXMpKTtcblxuICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICB5ZWFycyA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcbiAgICBtb250aHMgJT0gMTI7XG5cbiAgICBkYXRhLmRheXMgICA9IGRheXM7XG4gICAgZGF0YS5tb250aHMgPSBtb250aHM7XG4gICAgZGF0YS55ZWFycyAgPSB5ZWFycztcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c1RvTW9udGhzIChkYXlzKSB7XG4gICAgLy8gNDAwIHllYXJzIGhhdmUgMTQ2MDk3IGRheXMgKHRha2luZyBpbnRvIGFjY291bnQgbGVhcCB5ZWFyIHJ1bGVzKVxuICAgIC8vIDQwMCB5ZWFycyBoYXZlIDEyIG1vbnRocyA9PT0gNDgwMFxuICAgIHJldHVybiBkYXlzICogNDgwMCAvIDE0NjA5Nztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc1RvRGF5cyAobW9udGhzKSB7XG4gICAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXG4gICAgcmV0dXJuIG1vbnRocyAqIDE0NjA5NyAvIDQ4MDA7XG59XG4iLCJpbXBvcnQgeyBkYXlzVG9Nb250aHMsIG1vbnRoc1RvRGF5cyB9IGZyb20gJy4vYnViYmxlJztcbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGFzICh1bml0cykge1xuICAgIHZhciBkYXlzO1xuICAgIHZhciBtb250aHM7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcblxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgaWYgKHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAneWVhcicpIHtcbiAgICAgICAgZGF5cyAgID0gdGhpcy5fZGF5cyAgICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyArIGRheXNUb01vbnRocyhkYXlzKTtcbiAgICAgICAgcmV0dXJuIHVuaXRzID09PSAnbW9udGgnID8gbW9udGhzIDogbW9udGhzIC8gMTI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxuICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyArIE1hdGgucm91bmQobW9udGhzVG9EYXlzKHRoaXMuX21vbnRocykpO1xuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICBjYXNlICd3ZWVrJyAgIDogcmV0dXJuIGRheXMgLyA3ICAgICArIG1pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgICAgICAgIGNhc2UgJ2RheScgICAgOiByZXR1cm4gZGF5cyAgICAgICAgICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICAgICAgICBjYXNlICdob3VyJyAgIDogcmV0dXJuIGRheXMgKiAyNCAgICArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnIDogcmV0dXJuIGRheXMgKiAxNDQwICArIG1pbGxpc2Vjb25kcyAvIDZlNDtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCcgOiByZXR1cm4gZGF5cyAqIDg2NDAwICsgbWlsbGlzZWNvbmRzIC8gMTAwMDtcbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IgcHJldmVudHMgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgaGVyZVxuICAgICAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmQnOiByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHVuaXQgJyArIHVuaXRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVE9ETzogVXNlIHRoaXMuYXMoJ21zJyk/XG5leHBvcnQgZnVuY3Rpb24gdmFsdWVPZiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzICtcbiAgICAgICAgdGhpcy5fZGF5cyAqIDg2NGU1ICtcbiAgICAgICAgKHRoaXMuX21vbnRocyAlIDEyKSAqIDI1OTJlNiArXG4gICAgICAgIHRvSW50KHRoaXMuX21vbnRocyAvIDEyKSAqIDMxNTM2ZTZcbiAgICApO1xufVxuXG5mdW5jdGlvbiBtYWtlQXMgKGFsaWFzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXMoYWxpYXMpO1xuICAgIH07XG59XG5cbmV4cG9ydCB2YXIgYXNNaWxsaXNlY29uZHMgPSBtYWtlQXMoJ21zJyk7XG5leHBvcnQgdmFyIGFzU2Vjb25kcyAgICAgID0gbWFrZUFzKCdzJyk7XG5leHBvcnQgdmFyIGFzTWludXRlcyAgICAgID0gbWFrZUFzKCdtJyk7XG5leHBvcnQgdmFyIGFzSG91cnMgICAgICAgID0gbWFrZUFzKCdoJyk7XG5leHBvcnQgdmFyIGFzRGF5cyAgICAgICAgID0gbWFrZUFzKCdkJyk7XG5leHBvcnQgdmFyIGFzV2Vla3MgICAgICAgID0gbWFrZUFzKCd3Jyk7XG5leHBvcnQgdmFyIGFzTW9udGhzICAgICAgID0gbWFrZUFzKCdNJyk7XG5leHBvcnQgdmFyIGFzWWVhcnMgICAgICAgID0gbWFrZUFzKCd5Jyk7XG4iLCJpbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IGFic0Zsb29yIGZyb20gJy4uL3V0aWxzL2Ficy1mbG9vcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQgKHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgcmV0dXJuIHRoaXNbdW5pdHMgKyAncyddKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VHZXR0ZXIobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW25hbWVdO1xuICAgIH07XG59XG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzID0gbWFrZUdldHRlcignbWlsbGlzZWNvbmRzJyk7XG5leHBvcnQgdmFyIHNlY29uZHMgICAgICA9IG1ha2VHZXR0ZXIoJ3NlY29uZHMnKTtcbmV4cG9ydCB2YXIgbWludXRlcyAgICAgID0gbWFrZUdldHRlcignbWludXRlcycpO1xuZXhwb3J0IHZhciBob3VycyAgICAgICAgPSBtYWtlR2V0dGVyKCdob3VycycpO1xuZXhwb3J0IHZhciBkYXlzICAgICAgICAgPSBtYWtlR2V0dGVyKCdkYXlzJyk7XG5leHBvcnQgdmFyIG1vbnRocyAgICAgICA9IG1ha2VHZXR0ZXIoJ21vbnRocycpO1xuZXhwb3J0IHZhciB5ZWFycyAgICAgICAgPSBtYWtlR2V0dGVyKCd5ZWFycycpO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3MgKCkge1xuICAgIHJldHVybiBhYnNGbG9vcih0aGlzLmRheXMoKSAvIDcpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XG5cbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG52YXIgdGhyZXNob2xkcyA9IHtcbiAgICBzOiA0NSwgIC8vIHNlY29uZHMgdG8gbWludXRlXG4gICAgbTogNDUsICAvLyBtaW51dGVzIHRvIGhvdXJcbiAgICBoOiAyMiwgIC8vIGhvdXJzIHRvIGRheVxuICAgIGQ6IDI2LCAgLy8gZGF5cyB0byBtb250aFxuICAgIE06IDExICAgLy8gbW9udGhzIHRvIHllYXJcbn07XG5cbi8vIGhlbHBlciBmdW5jdGlvbiBmb3IgbW9tZW50LmZuLmZyb20sIG1vbWVudC5mbi5mcm9tTm93LCBhbmQgbW9tZW50LmR1cmF0aW9uLmZuLmh1bWFuaXplXG5mdW5jdGlvbiBzdWJzdGl0dXRlVGltZUFnbyhzdHJpbmcsIG51bWJlciwgd2l0aG91dFN1ZmZpeCwgaXNGdXR1cmUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bWJlciB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpO1xufVxuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWUgKHBvc05lZ0R1cmF0aW9uLCB3aXRob3V0U3VmZml4LCBsb2NhbGUpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBjcmVhdGVEdXJhdGlvbihwb3NOZWdEdXJhdGlvbikuYWJzKCk7XG4gICAgdmFyIHNlY29uZHMgID0gcm91bmQoZHVyYXRpb24uYXMoJ3MnKSk7XG4gICAgdmFyIG1pbnV0ZXMgID0gcm91bmQoZHVyYXRpb24uYXMoJ20nKSk7XG4gICAgdmFyIGhvdXJzICAgID0gcm91bmQoZHVyYXRpb24uYXMoJ2gnKSk7XG4gICAgdmFyIGRheXMgICAgID0gcm91bmQoZHVyYXRpb24uYXMoJ2QnKSk7XG4gICAgdmFyIG1vbnRocyAgID0gcm91bmQoZHVyYXRpb24uYXMoJ00nKSk7XG4gICAgdmFyIHllYXJzICAgID0gcm91bmQoZHVyYXRpb24uYXMoJ3knKSk7XG5cbiAgICB2YXIgYSA9IHNlY29uZHMgPCB0aHJlc2hvbGRzLnMgJiYgWydzJywgc2Vjb25kc10gIHx8XG4gICAgICAgICAgICBtaW51dGVzIDw9IDEgICAgICAgICAgICYmIFsnbSddICAgICAgICAgICB8fFxuICAgICAgICAgICAgbWludXRlcyA8IHRocmVzaG9sZHMubSAmJiBbJ21tJywgbWludXRlc10gfHxcbiAgICAgICAgICAgIGhvdXJzICAgPD0gMSAgICAgICAgICAgJiYgWydoJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICBob3VycyAgIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10gICB8fFxuICAgICAgICAgICAgZGF5cyAgICA8PSAxICAgICAgICAgICAmJiBbJ2QnXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgIGRheXMgICAgPCB0aHJlc2hvbGRzLmQgJiYgWydkZCcsIGRheXNdICAgIHx8XG4gICAgICAgICAgICBtb250aHMgIDw9IDEgICAgICAgICAgICYmIFsnTSddICAgICAgICAgICB8fFxuICAgICAgICAgICAgbW9udGhzICA8IHRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSAgfHxcbiAgICAgICAgICAgIHllYXJzICAgPD0gMSAgICAgICAgICAgJiYgWyd5J10gICAgICAgICAgIHx8IFsneXknLCB5ZWFyc107XG5cbiAgICBhWzJdID0gd2l0aG91dFN1ZmZpeDtcbiAgICBhWzNdID0gK3Bvc05lZ0R1cmF0aW9uID4gMDtcbiAgICBhWzRdID0gbG9jYWxlO1xuICAgIHJldHVybiBzdWJzdGl0dXRlVGltZUFnby5hcHBseShudWxsLCBhKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nIChyb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgaWYgKHJvdW5kaW5nRnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcm91bmQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2Yocm91bmRpbmdGdW5jdGlvbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcm91bmQgPSByb3VuZGluZ0Z1bmN0aW9uO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQgKHRocmVzaG9sZCwgbGltaXQpIHtcbiAgICBpZiAodGhyZXNob2xkc1t0aHJlc2hvbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhyZXNob2xkc1t0aHJlc2hvbGRdO1xuICAgIH1cbiAgICB0aHJlc2hvbGRzW3RocmVzaG9sZF0gPSBsaW1pdDtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1bWFuaXplICh3aXRoU3VmZml4KSB7XG4gICAgdmFyIGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xuICAgIHZhciBvdXRwdXQgPSByZWxhdGl2ZVRpbWUodGhpcywgIXdpdGhTdWZmaXgsIGxvY2FsZSk7XG5cbiAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cbiIsImltcG9ydCBhYnNGbG9vciBmcm9tICcuLi91dGlscy9hYnMtZmxvb3InO1xudmFyIGFicyA9IE1hdGguYWJzO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9JU09TdHJpbmcoKSB7XG4gICAgLy8gZm9yIElTTyBzdHJpbmdzIHdlIGRvIG5vdCB1c2UgdGhlIG5vcm1hbCBidWJibGluZyBydWxlczpcbiAgICAvLyAgKiBtaWxsaXNlY29uZHMgYnViYmxlIHVwIHVudGlsIHRoZXkgYmVjb21lIGhvdXJzXG4gICAgLy8gICogZGF5cyBkbyBub3QgYnViYmxlIGF0IGFsbFxuICAgIC8vICAqIG1vbnRocyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgeWVhcnNcbiAgICAvLyBUaGlzIGlzIGJlY2F1c2UgdGhlcmUgaXMgbm8gY29udGV4dC1mcmVlIGNvbnZlcnNpb24gYmV0d2VlbiBob3VycyBhbmQgZGF5c1xuICAgIC8vICh0aGluayBvZiBjbG9jayBjaGFuZ2VzKVxuICAgIC8vIGFuZCBhbHNvIG5vdCBiZXR3ZWVuIGRheXMgYW5kIG1vbnRocyAoMjgtMzEgZGF5cyBwZXIgbW9udGgpXG4gICAgdmFyIHNlY29uZHMgPSBhYnModGhpcy5fbWlsbGlzZWNvbmRzKSAvIDEwMDA7XG4gICAgdmFyIGRheXMgICAgICAgICA9IGFicyh0aGlzLl9kYXlzKTtcbiAgICB2YXIgbW9udGhzICAgICAgID0gYWJzKHRoaXMuX21vbnRocyk7XG4gICAgdmFyIG1pbnV0ZXMsIGhvdXJzLCB5ZWFycztcblxuICAgIC8vIDM2MDAgc2Vjb25kcyAtPiA2MCBtaW51dGVzIC0+IDEgaG91clxuICAgIG1pbnV0ZXMgICAgICAgICAgID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBob3VycyAgICAgICAgICAgICA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgc2Vjb25kcyAlPSA2MDtcbiAgICBtaW51dGVzICU9IDYwO1xuXG4gICAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICAgIHllYXJzICA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcbiAgICBtb250aHMgJT0gMTI7XG5cblxuICAgIC8vIGluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9kb3JkaWxsZS9tb21lbnQtaXNvZHVyYXRpb24vYmxvYi9tYXN0ZXIvbW9tZW50Lmlzb2R1cmF0aW9uLmpzXG4gICAgdmFyIFkgPSB5ZWFycztcbiAgICB2YXIgTSA9IG1vbnRocztcbiAgICB2YXIgRCA9IGRheXM7XG4gICAgdmFyIGggPSBob3VycztcbiAgICB2YXIgbSA9IG1pbnV0ZXM7XG4gICAgdmFyIHMgPSBzZWNvbmRzO1xuICAgIHZhciB0b3RhbCA9IHRoaXMuYXNTZWNvbmRzKCk7XG5cbiAgICBpZiAoIXRvdGFsKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgQyMncyAoTm9kYSkgYW5kIHB5dGhvbiAoaXNvZGF0ZSkuLi5cbiAgICAgICAgLy8gYnV0IG5vdCBvdGhlciBKUyAoZ29vZy5kYXRlKVxuICAgICAgICByZXR1cm4gJ1AwRCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0b3RhbCA8IDAgPyAnLScgOiAnJykgK1xuICAgICAgICAnUCcgK1xuICAgICAgICAoWSA/IFkgKyAnWScgOiAnJykgK1xuICAgICAgICAoTSA/IE0gKyAnTScgOiAnJykgK1xuICAgICAgICAoRCA/IEQgKyAnRCcgOiAnJykgK1xuICAgICAgICAoKGggfHwgbSB8fCBzKSA/ICdUJyA6ICcnKSArXG4gICAgICAgIChoID8gaCArICdIJyA6ICcnKSArXG4gICAgICAgIChtID8gbSArICdNJyA6ICcnKSArXG4gICAgICAgIChzID8gcyArICdTJyA6ICcnKTtcbn1cbiIsImltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbnZhciBwcm90byA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxuaW1wb3J0IHsgYWJzIH0gZnJvbSAnLi9hYnMnO1xuaW1wb3J0IHsgYWRkLCBzdWJ0cmFjdCB9IGZyb20gJy4vYWRkLXN1YnRyYWN0JztcbmltcG9ydCB7IGFzLCBhc01pbGxpc2Vjb25kcywgYXNTZWNvbmRzLCBhc01pbnV0ZXMsIGFzSG91cnMsIGFzRGF5cywgYXNXZWVrcywgYXNNb250aHMsIGFzWWVhcnMsIHZhbHVlT2YgfSBmcm9tICcuL2FzJztcbmltcG9ydCB7IGJ1YmJsZSB9IGZyb20gJy4vYnViYmxlJztcbmltcG9ydCB7IGdldCwgbWlsbGlzZWNvbmRzLCBzZWNvbmRzLCBtaW51dGVzLCBob3VycywgZGF5cywgbW9udGhzLCB5ZWFycywgd2Vla3MgfSBmcm9tICcuL2dldCc7XG5pbXBvcnQgeyBodW1hbml6ZSB9IGZyb20gJy4vaHVtYW5pemUnO1xuaW1wb3J0IHsgdG9JU09TdHJpbmcgfSBmcm9tICcuL2lzby1zdHJpbmcnO1xuaW1wb3J0IHsgbGFuZywgbG9jYWxlLCBsb2NhbGVEYXRhIH0gZnJvbSAnLi4vbW9tZW50L2xvY2FsZSc7XG5cbnByb3RvLmFicyAgICAgICAgICAgID0gYWJzO1xucHJvdG8uYWRkICAgICAgICAgICAgPSBhZGQ7XG5wcm90by5zdWJ0cmFjdCAgICAgICA9IHN1YnRyYWN0O1xucHJvdG8uYXMgICAgICAgICAgICAgPSBhcztcbnByb3RvLmFzTWlsbGlzZWNvbmRzID0gYXNNaWxsaXNlY29uZHM7XG5wcm90by5hc1NlY29uZHMgICAgICA9IGFzU2Vjb25kcztcbnByb3RvLmFzTWludXRlcyAgICAgID0gYXNNaW51dGVzO1xucHJvdG8uYXNIb3VycyAgICAgICAgPSBhc0hvdXJzO1xucHJvdG8uYXNEYXlzICAgICAgICAgPSBhc0RheXM7XG5wcm90by5hc1dlZWtzICAgICAgICA9IGFzV2Vla3M7XG5wcm90by5hc01vbnRocyAgICAgICA9IGFzTW9udGhzO1xucHJvdG8uYXNZZWFycyAgICAgICAgPSBhc1llYXJzO1xucHJvdG8udmFsdWVPZiAgICAgICAgPSB2YWx1ZU9mO1xucHJvdG8uX2J1YmJsZSAgICAgICAgPSBidWJibGU7XG5wcm90by5nZXQgICAgICAgICAgICA9IGdldDtcbnByb3RvLm1pbGxpc2Vjb25kcyAgID0gbWlsbGlzZWNvbmRzO1xucHJvdG8uc2Vjb25kcyAgICAgICAgPSBzZWNvbmRzO1xucHJvdG8ubWludXRlcyAgICAgICAgPSBtaW51dGVzO1xucHJvdG8uaG91cnMgICAgICAgICAgPSBob3VycztcbnByb3RvLmRheXMgICAgICAgICAgID0gZGF5cztcbnByb3RvLndlZWtzICAgICAgICAgID0gd2Vla3M7XG5wcm90by5tb250aHMgICAgICAgICA9IG1vbnRocztcbnByb3RvLnllYXJzICAgICAgICAgID0geWVhcnM7XG5wcm90by5odW1hbml6ZSAgICAgICA9IGh1bWFuaXplO1xucHJvdG8udG9JU09TdHJpbmcgICAgPSB0b0lTT1N0cmluZztcbnByb3RvLnRvU3RyaW5nICAgICAgID0gdG9JU09TdHJpbmc7XG5wcm90by50b0pTT04gICAgICAgICA9IHRvSVNPU3RyaW5nO1xucHJvdG8ubG9jYWxlICAgICAgICAgPSBsb2NhbGU7XG5wcm90by5sb2NhbGVEYXRhICAgICA9IGxvY2FsZURhdGE7XG5cbi8vIERlcHJlY2F0aW9uc1xuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlJztcblxucHJvdG8udG9Jc29TdHJpbmcgPSBkZXByZWNhdGUoJ3RvSXNvU3RyaW5nKCkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0b0lTT1N0cmluZygpIGluc3RlYWQgKG5vdGljZSB0aGUgY2FwaXRhbHMpJywgdG9JU09TdHJpbmcpO1xucHJvdG8ubGFuZyA9IGxhbmc7XG4iLCIvLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5pbXBvcnQgJy4vcHJvdG90eXBlJztcblxuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XG5pbXBvcnQgeyBpc0R1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQge1xuICAgIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nLFxuICAgIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZFxufSBmcm9tICcuL2h1bWFuaXplJztcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVEdXJhdGlvbixcbiAgICBpc0R1cmF0aW9uLFxuICAgIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nLFxuICAgIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZFxufTtcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaFRpbWVzdGFtcCwgbWF0Y2hTaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1gnLCAwLCAwLCAndW5peCcpO1xuYWRkRm9ybWF0VG9rZW4oJ3gnLCAwLCAwLCAndmFsdWVPZicpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ3gnLCBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdYJywgbWF0Y2hUaW1lc3RhbXApO1xuYWRkUGFyc2VUb2tlbignWCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHBhcnNlRmxvYXQoaW5wdXQsIDEwKSAqIDEwMDApO1xufSk7XG5hZGRQYXJzZVRva2VuKCd4JywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUodG9JbnQoaW5wdXQpKTtcbn0pO1xuIiwiLy8gU2lkZSBlZmZlY3QgaW1wb3J0c1xuaW1wb3J0ICcuL2RheS1vZi1tb250aCc7XG5pbXBvcnQgJy4vZGF5LW9mLXdlZWsnO1xuaW1wb3J0ICcuL2RheS1vZi15ZWFyJztcbmltcG9ydCAnLi9ob3VyJztcbmltcG9ydCAnLi9taWxsaXNlY29uZCc7XG5pbXBvcnQgJy4vbWludXRlJztcbmltcG9ydCAnLi9tb250aCc7XG5pbXBvcnQgJy4vb2Zmc2V0JztcbmltcG9ydCAnLi9xdWFydGVyJztcbmltcG9ydCAnLi9zZWNvbmQnO1xuaW1wb3J0ICcuL3RpbWVzdGFtcCc7XG5pbXBvcnQgJy4vdGltZXpvbmUnO1xuaW1wb3J0ICcuL3dlZWsteWVhcic7XG5pbXBvcnQgJy4vd2Vlayc7XG5pbXBvcnQgJy4veWVhcic7XG5cbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi9hbGlhc2VzJztcblxuZXhwb3J0IHsgbm9ybWFsaXplVW5pdHMgfTtcbiIsIi8vISBtb21lbnQuanNcbi8vISB2ZXJzaW9uIDogMi4xNy4wXG4vLyEgYXV0aG9ycyA6IFRpbSBXb29kLCBJc2tyZW4gQ2hlcm5ldiwgTW9tZW50LmpzIGNvbnRyaWJ1dG9yc1xuLy8hIGxpY2Vuc2UgOiBNSVRcbi8vISBtb21lbnRqcy5jb21cblxuaW1wb3J0IHsgaG9va3MgYXMgbW9tZW50LCBzZXRIb29rQ2FsbGJhY2sgfSBmcm9tICcuL2xpYi91dGlscy9ob29rcyc7XG5cbm1vbWVudC52ZXJzaW9uID0gJzIuMTcuMCc7XG5cbmltcG9ydCB7XG4gICAgbWluLFxuICAgIG1heCxcbiAgICBub3csXG4gICAgaXNNb21lbnQsXG4gICAgbW9tZW50UHJvdG90eXBlIGFzIGZuLFxuICAgIGNyZWF0ZVVUQyAgICAgICBhcyB1dGMsXG4gICAgY3JlYXRlVW5peCAgICAgIGFzIHVuaXgsXG4gICAgY3JlYXRlTG9jYWwgICAgIGFzIGxvY2FsLFxuICAgIGNyZWF0ZUludmFsaWQgICBhcyBpbnZhbGlkLFxuICAgIGNyZWF0ZUluWm9uZSAgICBhcyBwYXJzZVpvbmVcbn0gZnJvbSAnLi9saWIvbW9tZW50L21vbWVudCc7XG5cbmltcG9ydCB7XG4gICAgZ2V0Q2FsZW5kYXJGb3JtYXRcbn0gZnJvbSAnLi9saWIvbW9tZW50L2NhbGVuZGFyJztcblxuaW1wb3J0IHtcbiAgICBkZWZpbmVMb2NhbGUsXG4gICAgdXBkYXRlTG9jYWxlLFxuICAgIGdldFNldEdsb2JhbExvY2FsZSBhcyBsb2NhbGUsXG4gICAgZ2V0TG9jYWxlICAgICAgICAgIGFzIGxvY2FsZURhdGEsXG4gICAgbGlzdExvY2FsZXMgICAgICAgIGFzIGxvY2FsZXMsXG4gICAgbGlzdE1vbnRocyAgICAgICAgIGFzIG1vbnRocyxcbiAgICBsaXN0TW9udGhzU2hvcnQgICAgYXMgbW9udGhzU2hvcnQsXG4gICAgbGlzdFdlZWtkYXlzICAgICAgIGFzIHdlZWtkYXlzLFxuICAgIGxpc3RXZWVrZGF5c01pbiAgICBhcyB3ZWVrZGF5c01pbixcbiAgICBsaXN0V2Vla2RheXNTaG9ydCAgYXMgd2Vla2RheXNTaG9ydFxufSBmcm9tICcuL2xpYi9sb2NhbGUvbG9jYWxlJztcblxuaW1wb3J0IHtcbiAgICBpc0R1cmF0aW9uLFxuICAgIGNyZWF0ZUR1cmF0aW9uIGFzIGR1cmF0aW9uLFxuICAgIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nIGFzIHJlbGF0aXZlVGltZVJvdW5kaW5nLFxuICAgIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCBhcyByZWxhdGl2ZVRpbWVUaHJlc2hvbGRcbn0gZnJvbSAnLi9saWIvZHVyYXRpb24vZHVyYXRpb24nO1xuXG5pbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4vbGliL3VuaXRzL3VuaXRzJztcblxuaW1wb3J0IGlzRGF0ZSBmcm9tICcuL2xpYi91dGlscy9pcy1kYXRlJztcblxuc2V0SG9va0NhbGxiYWNrKGxvY2FsKTtcblxubW9tZW50LmZuICAgICAgICAgICAgICAgICAgICA9IGZuO1xubW9tZW50Lm1pbiAgICAgICAgICAgICAgICAgICA9IG1pbjtcbm1vbWVudC5tYXggICAgICAgICAgICAgICAgICAgPSBtYXg7XG5tb21lbnQubm93ICAgICAgICAgICAgICAgICAgID0gbm93O1xubW9tZW50LnV0YyAgICAgICAgICAgICAgICAgICA9IHV0Yztcbm1vbWVudC51bml4ICAgICAgICAgICAgICAgICAgPSB1bml4O1xubW9tZW50Lm1vbnRocyAgICAgICAgICAgICAgICA9IG1vbnRocztcbm1vbWVudC5pc0RhdGUgICAgICAgICAgICAgICAgPSBpc0RhdGU7XG5tb21lbnQubG9jYWxlICAgICAgICAgICAgICAgID0gbG9jYWxlO1xubW9tZW50LmludmFsaWQgICAgICAgICAgICAgICA9IGludmFsaWQ7XG5tb21lbnQuZHVyYXRpb24gICAgICAgICAgICAgID0gZHVyYXRpb247XG5tb21lbnQuaXNNb21lbnQgICAgICAgICAgICAgID0gaXNNb21lbnQ7XG5tb21lbnQud2Vla2RheXMgICAgICAgICAgICAgID0gd2Vla2RheXM7XG5tb21lbnQucGFyc2Vab25lICAgICAgICAgICAgID0gcGFyc2Vab25lO1xubW9tZW50LmxvY2FsZURhdGEgICAgICAgICAgICA9IGxvY2FsZURhdGE7XG5tb21lbnQuaXNEdXJhdGlvbiAgICAgICAgICAgID0gaXNEdXJhdGlvbjtcbm1vbWVudC5tb250aHNTaG9ydCAgICAgICAgICAgPSBtb250aHNTaG9ydDtcbm1vbWVudC53ZWVrZGF5c01pbiAgICAgICAgICAgPSB3ZWVrZGF5c01pbjtcbm1vbWVudC5kZWZpbmVMb2NhbGUgICAgICAgICAgPSBkZWZpbmVMb2NhbGU7XG5tb21lbnQudXBkYXRlTG9jYWxlICAgICAgICAgID0gdXBkYXRlTG9jYWxlO1xubW9tZW50LmxvY2FsZXMgICAgICAgICAgICAgICA9IGxvY2FsZXM7XG5tb21lbnQud2Vla2RheXNTaG9ydCAgICAgICAgID0gd2Vla2RheXNTaG9ydDtcbm1vbWVudC5ub3JtYWxpemVVbml0cyAgICAgICAgPSBub3JtYWxpemVVbml0cztcbm1vbWVudC5yZWxhdGl2ZVRpbWVSb3VuZGluZyA9IHJlbGF0aXZlVGltZVJvdW5kaW5nO1xubW9tZW50LnJlbGF0aXZlVGltZVRocmVzaG9sZCA9IHJlbGF0aXZlVGltZVRocmVzaG9sZDtcbm1vbWVudC5jYWxlbmRhckZvcm1hdCAgICAgICAgPSBnZXRDYWxlbmRhckZvcm1hdDtcbm1vbWVudC5wcm90b3R5cGUgICAgICAgICAgICAgPSBmbjtcblxuZXhwb3J0IGRlZmF1bHQgbW9tZW50O1xuIiwiaW1wb3J0IFBpY2tlciBmcm9tICcuL1BpY2tlcidcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5jb25zdCBjcmVhdGVEYXRhID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBob3VyID0gW11cbiAgY29uc3QgbW9tZW50ID0gW11cbiAgbGV0IGkgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgaWYgKGkgPCAxMCkge1xuICAgICAgaG91ci5wdXNoKCcwJyArIGkpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaG91ci5wdXNoKGkgKyAnJylcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICBpZiAoaSA8IDEwKSB7XG4gICAgICBtb21lbnQucHVzaCgnMCcgKyBpKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1vbWVudC5wdXNoKGkgKyAnJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW2hvdXIsIG1vbWVudF1cbn1cblxuY29uc3QgaW5wdXREYXRhID0gY3JlYXRlRGF0YSgpXG5cbmNvbnN0IGdldERlZmF1bHRJbmRleHMgPSBmdW5jdGlvbiAodGltZSkge1xuICBjb25zdCBob3VyID0gdGltZS5mb3JtYXQoJ0hIJylcbiAgY29uc3QgbW9tZW50ID0gdGltZS5mb3JtYXQoJ21tJylcbiAgY29uc3QgcmVzdWx0ID0gWzAsIDBdXG4gIGxldCBpID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgaW5wdXREYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGhvdXIgPT09IGlucHV0RGF0YVswXVtpXSkge1xuICAgICAgcmVzdWx0WzBdID0gaVxuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgaW5wdXREYXRhWzFdLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG1vbWVudCA9PT0gaW5wdXREYXRhWzFdW2ldKSB7XG4gICAgICByZXN1bHRbMV0gPSBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBmb3JtYXRlUmVzdWx0ID0gZnVuY3Rpb24gKGRhdGEsIGluZGV4cykge1xuICBjb25zdCBob3VyID0gZGF0YVswXVtpbmRleHNbMF1dXG4gIGNvbnN0IG1vbWVudCA9IGRhdGFbMV1baW5kZXhzWzFdXVxuICByZXR1cm4gaG91ciArICc6JyArIG1vbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29uZmlncykge1xuICBjb25zdCB0aW1lID0gbW9tZW50KGNvbmZpZ3MudmFsdWUgfHwgbmV3IERhdGUoKSwgJ0hIOm1tJylcbiAgY29uc3QgdmFsdWUgPSBnZXREZWZhdWx0SW5kZXhzKHRpbWUpXG4gIHJldHVybiBuZXcgUGlja2VyKHtcbiAgICBkYXRhOiBpbnB1dERhdGEsXG4gICAgZm9ybWF0ZVJlc3VsdDogZm9ybWF0ZVJlc3VsdCxcbiAgICBkZWZhdWx0SW5kZXhzOiB2YWx1ZSxcbiAgICBjb25maXJtQ2FsbGJhY2s6IGNvbmZpZ3MuY29uZmlybUNhbGxiYWNrLFxuICAgIHNlbmRlcjogY29uZmlncy5zZW5kZXJcbiAgfSlcbn1cblxuIiwiLyohXG4gKiBQaWthZGF5XG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQgRGF2aWQgQnVzaGVsbCB8IEJTRCAmIE1JVCBsaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2RidXNoZWxsL1Bpa2FkYXlcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpXG57XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1vbWVudDtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIENvbW1vbkpTIG1vZHVsZVxuICAgICAgICAvLyBMb2FkIG1vbWVudC5qcyBhcyBhbiBvcHRpb25hbCBkZXBlbmRlbmN5XG4gICAgICAgIHRyeSB7IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpOyB9IGNhdGNoIChlKSB7fVxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkobW9tZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShmdW5jdGlvbiAocmVxKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBMb2FkIG1vbWVudC5qcyBhcyBhbiBvcHRpb25hbCBkZXBlbmRlbmN5XG4gICAgICAgICAgICB2YXIgaWQgPSAnbW9tZW50JztcbiAgICAgICAgICAgIHRyeSB7IG1vbWVudCA9IHJlcShpZCk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeShtb21lbnQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LlBpa2FkYXkgPSBmYWN0b3J5KHJvb3QubW9tZW50KTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uIChtb21lbnQpXG57XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogZmVhdHVyZSBkZXRlY3Rpb24gYW5kIGhlbHBlciBmdW5jdGlvbnNcbiAgICAgKi9cbiAgICB2YXIgaGFzTW9tZW50ID0gdHlwZW9mIG1vbWVudCA9PT0gJ2Z1bmN0aW9uJyxcblxuICAgIGhhc0V2ZW50TGlzdGVuZXJzID0gISF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcixcblxuICAgIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuXG4gICAgc3RvID0gd2luZG93LnNldFRpbWVvdXQsXG5cbiAgICBhZGRFdmVudCA9IGZ1bmN0aW9uKGVsLCBlLCBjYWxsYmFjaywgY2FwdHVyZSlcbiAgICB7XG4gICAgICAgIGlmIChoYXNFdmVudExpc3RlbmVycykge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCBjYWxsYmFjaywgISFjYXB0dXJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihlbCwgZSwgY2FsbGJhY2ssIGNhcHR1cmUpXG4gICAge1xuICAgICAgICBpZiAoaGFzRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgY2FsbGJhY2ssICEhY2FwdHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZpcmVFdmVudCA9IGZ1bmN0aW9uKGVsLCBldmVudE5hbWUsIGRhdGEpXG4gICAge1xuICAgICAgICB2YXIgZXY7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICAgICAgICBldi5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICBldiA9IGV4dGVuZChldiwgZGF0YSk7XG4gICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCkge1xuICAgICAgICAgICAgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICAgICAgICAgICAgZXYgPSBleHRlbmQoZXYsIGRhdGEpO1xuICAgICAgICAgICAgZWwuZmlyZUV2ZW50KCdvbicgKyBldmVudE5hbWUsIGV2KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0cmltID0gZnVuY3Rpb24oc3RyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHN0ci50cmltID8gc3RyLnRyaW0oKSA6IHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCcnKTtcbiAgICB9LFxuXG4gICAgaGFzQ2xhc3MgPSBmdW5jdGlvbihlbCwgY24pXG4gICAge1xuICAgICAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbiArICcgJykgIT09IC0xO1xuICAgIH0sXG5cbiAgICBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbilcbiAgICB7XG4gICAgICAgIGlmICghaGFzQ2xhc3MoZWwsIGNuKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gKGVsLmNsYXNzTmFtZSA9PT0gJycpID8gY24gOiBlbC5jbGFzc05hbWUgKyAnICcgKyBjbjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbilcbiAgICB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IHRyaW0oKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykucmVwbGFjZSgnICcgKyBjbiArICcgJywgJyAnKSk7XG4gICAgfSxcblxuICAgIGlzQXJyYXkgPSBmdW5jdGlvbihvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gKC9BcnJheS8pLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpO1xuICAgIH0sXG5cbiAgICBpc0RhdGUgPSBmdW5jdGlvbihvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gKC9EYXRlLykudGVzdChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgJiYgIWlzTmFOKG9iai5nZXRUaW1lKCkpO1xuICAgIH0sXG5cbiAgICBpc1dlZWtlbmQgPSBmdW5jdGlvbihkYXRlKVxuICAgIHtcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHJldHVybiBkYXkgPT09IDAgfHwgZGF5ID09PSA2O1xuICAgIH0sXG5cbiAgICBpc0xlYXBZZWFyID0gZnVuY3Rpb24oeWVhcilcbiAgICB7XG4gICAgICAgIC8vIHNvbHV0aW9uIGJ5IE1hdHRpIFZpcmtrdW5lbjogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDg4MTk1MVxuICAgICAgICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwO1xuICAgIH0sXG5cbiAgICBnZXREYXlzSW5Nb250aCA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFszMSwgaXNMZWFwWWVhcih5ZWFyKSA/IDI5IDogMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVttb250aF07XG4gICAgfSxcblxuICAgIHNldFRvU3RhcnRPZkRheSA9IGZ1bmN0aW9uKGRhdGUpXG4gICAge1xuICAgICAgICBpZiAoaXNEYXRlKGRhdGUpKSBkYXRlLnNldEhvdXJzKDAsMCwwLDApO1xuICAgIH0sXG5cbiAgICBjb21wYXJlRGF0ZXMgPSBmdW5jdGlvbihhLGIpXG4gICAge1xuICAgICAgICAvLyB3ZWFrIGRhdGUgY29tcGFyaXNvbiAodXNlIHNldFRvU3RhcnRPZkRheShkYXRlKSB0byBlbnN1cmUgY29ycmVjdCByZXN1bHQpXG4gICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gICAgfSxcblxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uKHRvLCBmcm9tLCBvdmVyd3JpdGUpXG4gICAge1xuICAgICAgICB2YXIgcHJvcCwgaGFzUHJvcDtcbiAgICAgICAgZm9yIChwcm9wIGluIGZyb20pIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSB0b1twcm9wXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGhhc1Byb3AgJiYgdHlwZW9mIGZyb21bcHJvcF0gPT09ICdvYmplY3QnICYmIGZyb21bcHJvcF0gIT09IG51bGwgJiYgZnJvbVtwcm9wXS5ub2RlTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0ZShmcm9tW3Byb3BdKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b1twcm9wXSA9IG5ldyBEYXRlKGZyb21bcHJvcF0uZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KGZyb21bcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gZnJvbVtwcm9wXS5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gZXh0ZW5kKHt9LCBmcm9tW3Byb3BdLCBvdmVyd3JpdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndyaXRlIHx8ICFoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdG9bcHJvcF0gPSBmcm9tW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bztcbiAgICB9LFxuXG4gICAgYWRqdXN0Q2FsZW5kYXIgPSBmdW5jdGlvbihjYWxlbmRhcikge1xuICAgICAgICBpZiAoY2FsZW5kYXIubW9udGggPCAwKSB7XG4gICAgICAgICAgICBjYWxlbmRhci55ZWFyIC09IE1hdGguY2VpbChNYXRoLmFicyhjYWxlbmRhci5tb250aCkvMTIpO1xuICAgICAgICAgICAgY2FsZW5kYXIubW9udGggKz0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGVuZGFyLm1vbnRoID4gMTEpIHtcbiAgICAgICAgICAgIGNhbGVuZGFyLnllYXIgKz0gTWF0aC5mbG9vcihNYXRoLmFicyhjYWxlbmRhci5tb250aCkvMTIpO1xuICAgICAgICAgICAgY2FsZW5kYXIubW9udGggLT0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBkZWZhdWx0cyBhbmQgbG9jYWxpc2F0aW9uXG4gICAgICovXG4gICAgZGVmYXVsdHMgPSB7XG5cbiAgICAgICAgLy8gYmluZCB0aGUgcGlja2VyIHRvIGEgZm9ybSBmaWVsZFxuICAgICAgICBmaWVsZDogbnVsbCxcblxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IHNob3cvaGlkZSB0aGUgcGlja2VyIG9uIGBmaWVsZGAgZm9jdXMgKGRlZmF1bHQgYHRydWVgIGlmIGBmaWVsZGAgaXMgc2V0KVxuICAgICAgICBib3VuZDogdW5kZWZpbmVkLFxuXG4gICAgICAgIC8vIHBvc2l0aW9uIG9mIHRoZSBkYXRlcGlja2VyLCByZWxhdGl2ZSB0byB0aGUgZmllbGQgKGRlZmF1bHQgdG8gYm90dG9tICYgbGVmdClcbiAgICAgICAgLy8gKCdib3R0b20nICYgJ2xlZnQnIGtleXdvcmRzIGFyZSBub3QgdXNlZCwgJ3RvcCcgJiAncmlnaHQnIGFyZSBtb2RpZmllciBvbiB0aGUgYm90dG9tL2xlZnQgcG9zaXRpb24pXG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tIGxlZnQnLFxuXG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgZml0IGluIHRoZSB2aWV3cG9ydCBldmVuIGlmIGl0IG1lYW5zIHJlcG9zaXRpb25pbmcgZnJvbSB0aGUgcG9zaXRpb24gb3B0aW9uXG4gICAgICAgIHJlcG9zaXRpb246IHRydWUsXG5cbiAgICAgICAgLy8gdGhlIGRlZmF1bHQgb3V0cHV0IGZvcm1hdCBmb3IgYC50b1N0cmluZygpYCBhbmQgYGZpZWxkYCB2YWx1ZVxuICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcblxuICAgICAgICAvLyB0aGUgaW5pdGlhbCBkYXRlIHRvIHZpZXcgd2hlbiBmaXJzdCBvcGVuZWRcbiAgICAgICAgZGVmYXVsdERhdGU6IG51bGwsXG5cbiAgICAgICAgLy8gbWFrZSB0aGUgYGRlZmF1bHREYXRlYCB0aGUgaW5pdGlhbCBzZWxlY3RlZCB2YWx1ZVxuICAgICAgICBzZXREZWZhdWx0RGF0ZTogZmFsc2UsXG5cbiAgICAgICAgLy8gZmlyc3QgZGF5IG9mIHdlZWsgKDA6IFN1bmRheSwgMTogTW9uZGF5IGV0YylcbiAgICAgICAgZmlyc3REYXk6IDAsXG5cbiAgICAgICAgLy8gdGhlIGRlZmF1bHQgZmxhZyBmb3IgbW9tZW50J3Mgc3RyaWN0IGRhdGUgcGFyc2luZ1xuICAgICAgICBmb3JtYXRTdHJpY3Q6IGZhbHNlLFxuXG4gICAgICAgIC8vIHRoZSBtaW5pbXVtL2VhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWRcbiAgICAgICAgbWluRGF0ZTogbnVsbCxcbiAgICAgICAgLy8gdGhlIG1heGltdW0vbGF0ZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWRcbiAgICAgICAgbWF4RGF0ZTogbnVsbCxcblxuICAgICAgICAvLyBudW1iZXIgb2YgeWVhcnMgZWl0aGVyIHNpZGUsIG9yIGFycmF5IG9mIHVwcGVyL2xvd2VyIHJhbmdlXG4gICAgICAgIHllYXJSYW5nZTogMTAsXG5cbiAgICAgICAgLy8gc2hvdyB3ZWVrIG51bWJlcnMgYXQgaGVhZCBvZiByb3dcbiAgICAgICAgc2hvd1dlZWtOdW1iZXI6IGZhbHNlLFxuXG4gICAgICAgIC8vIHVzZWQgaW50ZXJuYWxseSAoZG9uJ3QgY29uZmlnIG91dHNpZGUpXG4gICAgICAgIG1pblllYXI6IDAsXG4gICAgICAgIG1heFllYXI6IDk5OTksXG4gICAgICAgIG1pbk1vbnRoOiB1bmRlZmluZWQsXG4gICAgICAgIG1heE1vbnRoOiB1bmRlZmluZWQsXG5cbiAgICAgICAgc3RhcnRSYW5nZTogbnVsbCxcbiAgICAgICAgZW5kUmFuZ2U6IG51bGwsXG5cbiAgICAgICAgaXNSVEw6IGZhbHNlLFxuXG4gICAgICAgIC8vIEFkZGl0aW9uYWwgdGV4dCB0byBhcHBlbmQgdG8gdGhlIHllYXIgaW4gdGhlIGNhbGVuZGFyIHRpdGxlXG4gICAgICAgIHllYXJTdWZmaXg6ICcnLFxuXG4gICAgICAgIC8vIFJlbmRlciB0aGUgbW9udGggYWZ0ZXIgeWVhciBpbiB0aGUgY2FsZW5kYXIgdGl0bGVcbiAgICAgICAgc2hvd01vbnRoQWZ0ZXJZZWFyOiBmYWxzZSxcblxuICAgICAgICAvLyBSZW5kZXIgZGF5cyBvZiB0aGUgY2FsZW5kYXIgZ3JpZCB0aGF0IGZhbGwgaW4gdGhlIG5leHQgb3IgcHJldmlvdXMgbW9udGhcbiAgICAgICAgc2hvd0RheXNJbk5leHRBbmRQcmV2aW91c01vbnRoczogZmFsc2UsXG5cbiAgICAgICAgLy8gaG93IG1hbnkgbW9udGhzIGFyZSB2aXNpYmxlXG4gICAgICAgIG51bWJlck9mTW9udGhzOiAxLFxuXG4gICAgICAgIC8vIHdoZW4gbnVtYmVyT2ZNb250aHMgaXMgdXNlZCwgdGhpcyB3aWxsIGhlbHAgeW91IHRvIGNob29zZSB3aGVyZSB0aGUgbWFpbiBjYWxlbmRhciB3aWxsIGJlIChkZWZhdWx0IGBsZWZ0YCwgY2FuIGJlIHNldCB0byBgcmlnaHRgKVxuICAgICAgICAvLyBvbmx5IHVzZWQgZm9yIHRoZSBmaXJzdCBkaXNwbGF5IG9yIHdoZW4gYSBzZWxlY3RlZCBkYXRlIGlzIG5vdCB2aXNpYmxlXG4gICAgICAgIG1haW5DYWxlbmRhcjogJ2xlZnQnLFxuXG4gICAgICAgIC8vIFNwZWNpZnkgYSBET00gZWxlbWVudCB0byByZW5kZXIgdGhlIGNhbGVuZGFyIGluXG4gICAgICAgIGNvbnRhaW5lcjogdW5kZWZpbmVkLFxuXG4gICAgICAgIC8vIGludGVybmF0aW9uYWxpemF0aW9uXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHByZXZpb3VzTW9udGggOiAnUHJldmlvdXMgTW9udGgnLFxuICAgICAgICAgICAgbmV4dE1vbnRoICAgICA6ICdOZXh0IE1vbnRoJyxcbiAgICAgICAgICAgIG1vbnRocyAgICAgICAgOiBbJ0phbnVhcnknLCdGZWJydWFyeScsJ01hcmNoJywnQXByaWwnLCdNYXknLCdKdW5lJywnSnVseScsJ0F1Z3VzdCcsJ1NlcHRlbWJlcicsJ09jdG9iZXInLCdOb3ZlbWJlcicsJ0RlY2VtYmVyJ10sXG4gICAgICAgICAgICB3ZWVrZGF5cyAgICAgIDogWydTdW5kYXknLCdNb25kYXknLCdUdWVzZGF5JywnV2VkbmVzZGF5JywnVGh1cnNkYXknLCdGcmlkYXknLCdTYXR1cmRheSddLFxuICAgICAgICAgICAgd2Vla2RheXNTaG9ydCA6IFsnU3VuJywnTW9uJywnVHVlJywnV2VkJywnVGh1JywnRnJpJywnU2F0J11cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUaGVtZSBDbGFzc25hbWVcbiAgICAgICAgdGhlbWU6IG51bGwsXG5cbiAgICAgICAgLy8gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgb25TZWxlY3Q6IG51bGwsXG4gICAgICAgIG9uT3BlbjogbnVsbCxcbiAgICAgICAgb25DbG9zZTogbnVsbCxcbiAgICAgICAgb25EcmF3OiBudWxsXG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogdGVtcGxhdGluZyBmdW5jdGlvbnMgdG8gYWJzdHJhY3QgSFRNTCByZW5kZXJpbmdcbiAgICAgKi9cbiAgICByZW5kZXJEYXlOYW1lID0gZnVuY3Rpb24ob3B0cywgZGF5LCBhYmJyKVxuICAgIHtcbiAgICAgICAgZGF5ICs9IG9wdHMuZmlyc3REYXk7XG4gICAgICAgIHdoaWxlIChkYXkgPj0gNykge1xuICAgICAgICAgICAgZGF5IC09IDc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFiYnIgPyBvcHRzLmkxOG4ud2Vla2RheXNTaG9ydFtkYXldIDogb3B0cy5pMThuLndlZWtkYXlzW2RheV07XG4gICAgfSxcblxuICAgIHJlbmRlckRheSA9IGZ1bmN0aW9uKG9wdHMpXG4gICAge1xuICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgIHZhciBhcmlhU2VsZWN0ZWQgPSAnZmFsc2UnO1xuICAgICAgICBpZiAob3B0cy5pc0VtcHR5KSB7XG4gICAgICAgICAgICBpZiAob3B0cy5zaG93RGF5c0luTmV4dEFuZFByZXZpb3VzTW9udGhzKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goJ2lzLW91dHNpZGUtY3VycmVudC1tb250aCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzx0ZCBjbGFzcz1cImlzLWVtcHR5XCI+PC90ZD4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKCdpcy1kaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmlzVG9kYXkpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKCdpcy10b2RheScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKCdpcy1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgYXJpYVNlbGVjdGVkID0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmlzSW5SYW5nZSkge1xuICAgICAgICAgICAgYXJyLnB1c2goJ2lzLWlucmFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc1N0YXJ0UmFuZ2UpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKCdpcy1zdGFydHJhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuaXNFbmRSYW5nZSkge1xuICAgICAgICAgICAgYXJyLnB1c2goJ2lzLWVuZHJhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICc8dGQgZGF0YS1kYXk9XCInICsgb3B0cy5kYXkgKyAnXCIgY2xhc3M9XCInICsgYXJyLmpvaW4oJyAnKSArICdcIiBhcmlhLXNlbGVjdGVkPVwiJyArIGFyaWFTZWxlY3RlZCArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJwaWthLWJ1dHRvbiBwaWthLWRheVwiIHR5cGU9XCJidXR0b25cIiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtcGlrYS15ZWFyPVwiJyArIG9wdHMueWVhciArICdcIiBkYXRhLXBpa2EtbW9udGg9XCInICsgb3B0cy5tb250aCArICdcIiBkYXRhLXBpa2EtZGF5PVwiJyArIG9wdHMuZGF5ICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5kYXkgK1xuICAgICAgICAgICAgICAgICAnPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAnPC90ZD4nO1xuICAgIH0sXG5cbiAgICByZW5kZXJXZWVrID0gZnVuY3Rpb24gKGQsIG0sIHkpIHtcbiAgICAgICAgLy8gTGlmdGVkIGZyb20gaHR0cDovL2phdmFzY3JpcHQuYWJvdXQuY29tL2xpYnJhcnkvYmx3ZWVreWVhci5odG0sIGxpZ2h0bHkgbW9kaWZpZWQuXG4gICAgICAgIHZhciBvbmVqYW4gPSBuZXcgRGF0ZSh5LCAwLCAxKSxcbiAgICAgICAgICAgIHdlZWtOdW0gPSBNYXRoLmNlaWwoKCgobmV3IERhdGUoeSwgbSwgZCkgLSBvbmVqYW4pIC8gODY0MDAwMDApICsgb25lamFuLmdldERheSgpKzEpLzcpO1xuICAgICAgICByZXR1cm4gJzx0ZCBjbGFzcz1cInBpa2Etd2Vla1wiPicgKyB3ZWVrTnVtICsgJzwvdGQ+JztcbiAgICB9LFxuXG4gICAgcmVuZGVyUm93ID0gZnVuY3Rpb24oZGF5cywgaXNSVEwpXG4gICAge1xuICAgICAgICByZXR1cm4gJzx0cj4nICsgKGlzUlRMID8gZGF5cy5yZXZlcnNlKCkgOiBkYXlzKS5qb2luKCcnKSArICc8L3RyPic7XG4gICAgfSxcblxuICAgIHJlbmRlckJvZHkgPSBmdW5jdGlvbihyb3dzKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICc8dGJvZHk+JyArIHJvd3Muam9pbignJykgKyAnPC90Ym9keT4nO1xuICAgIH0sXG5cbiAgICByZW5kZXJIZWFkID0gZnVuY3Rpb24ob3B0cylcbiAgICB7XG4gICAgICAgIHZhciBpLCBhcnIgPSBbXTtcbiAgICAgICAgaWYgKG9wdHMuc2hvd1dlZWtOdW1iZXIpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKCc8dGg+PC90aD4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnPHRoIHNjb3BlPVwiY29sXCI+PGFiYnIgdGl0bGU9XCInICsgcmVuZGVyRGF5TmFtZShvcHRzLCBpKSArICdcIj4nICsgcmVuZGVyRGF5TmFtZShvcHRzLCBpLCB0cnVlKSArICc8L2FiYnI+PC90aD4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzx0aGVhZD48dHI+JyArIChvcHRzLmlzUlRMID8gYXJyLnJldmVyc2UoKSA6IGFycikuam9pbignJykgKyAnPC90cj48L3RoZWFkPic7XG4gICAgfSxcblxuICAgIHJlbmRlclRpdGxlID0gZnVuY3Rpb24oaW5zdGFuY2UsIGMsIHllYXIsIG1vbnRoLCByZWZZZWFyLCByYW5kSWQpXG4gICAge1xuICAgICAgICB2YXIgaSwgaiwgYXJyLFxuICAgICAgICAgICAgb3B0cyA9IGluc3RhbmNlLl9vLFxuICAgICAgICAgICAgaXNNaW5ZZWFyID0geWVhciA9PT0gb3B0cy5taW5ZZWFyLFxuICAgICAgICAgICAgaXNNYXhZZWFyID0geWVhciA9PT0gb3B0cy5tYXhZZWFyLFxuICAgICAgICAgICAgaHRtbCA9ICc8ZGl2IGlkPVwiJyArIHJhbmRJZCArICdcIiBjbGFzcz1cInBpa2EtdGl0bGVcIiByb2xlPVwiaGVhZGluZ1wiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiPicsXG4gICAgICAgICAgICBtb250aEh0bWwsXG4gICAgICAgICAgICB5ZWFySHRtbCxcbiAgICAgICAgICAgIHByZXYgPSB0cnVlLFxuICAgICAgICAgICAgbmV4dCA9IHRydWU7XG5cbiAgICAgICAgZm9yIChhcnIgPSBbXSwgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnPG9wdGlvbiB2YWx1ZT1cIicgKyAoeWVhciA9PT0gcmVmWWVhciA/IGkgLSBjIDogMTIgKyBpIC0gYykgKyAnXCInICtcbiAgICAgICAgICAgICAgICAoaSA9PT0gbW9udGggPyAnIHNlbGVjdGVkPVwic2VsZWN0ZWRcIic6ICcnKSArXG4gICAgICAgICAgICAgICAgKChpc01pblllYXIgJiYgaSA8IG9wdHMubWluTW9udGgpIHx8IChpc01heFllYXIgJiYgaSA+IG9wdHMubWF4TW9udGgpID8gJ2Rpc2FibGVkPVwiZGlzYWJsZWRcIicgOiAnJykgKyAnPicgK1xuICAgICAgICAgICAgICAgIG9wdHMuaTE4bi5tb250aHNbaV0gKyAnPC9vcHRpb24+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBtb250aEh0bWwgPSAnPGRpdiBjbGFzcz1cInBpa2EtbGFiZWxcIj4nICsgb3B0cy5pMThuLm1vbnRoc1ttb250aF0gKyAnPHNlbGVjdCBjbGFzcz1cInBpa2Etc2VsZWN0IHBpa2Etc2VsZWN0LW1vbnRoXCIgdGFiaW5kZXg9XCItMVwiPicgKyBhcnIuam9pbignJykgKyAnPC9zZWxlY3Q+PC9kaXY+JztcblxuICAgICAgICBpZiAoaXNBcnJheShvcHRzLnllYXJSYW5nZSkpIHtcbiAgICAgICAgICAgIGkgPSBvcHRzLnllYXJSYW5nZVswXTtcbiAgICAgICAgICAgIGogPSBvcHRzLnllYXJSYW5nZVsxXSArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpID0geWVhciAtIG9wdHMueWVhclJhbmdlO1xuICAgICAgICAgICAgaiA9IDEgKyB5ZWFyICsgb3B0cy55ZWFyUmFuZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGFyciA9IFtdOyBpIDwgaiAmJiBpIDw9IG9wdHMubWF4WWVhcjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSBvcHRzLm1pblllYXIpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiJyArIChpID09PSB5ZWFyID8gJyBzZWxlY3RlZD1cInNlbGVjdGVkXCInOiAnJykgKyAnPicgKyAoaSkgKyAnPC9vcHRpb24+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeWVhckh0bWwgPSAnPGRpdiBjbGFzcz1cInBpa2EtbGFiZWxcIj4nICsgeWVhciArIG9wdHMueWVhclN1ZmZpeCArICc8c2VsZWN0IGNsYXNzPVwicGlrYS1zZWxlY3QgcGlrYS1zZWxlY3QteWVhclwiIHRhYmluZGV4PVwiLTFcIj4nICsgYXJyLmpvaW4oJycpICsgJzwvc2VsZWN0PjwvZGl2Pic7XG5cbiAgICAgICAgaWYgKG9wdHMuc2hvd01vbnRoQWZ0ZXJZZWFyKSB7XG4gICAgICAgICAgICBodG1sICs9IHllYXJIdG1sICsgbW9udGhIdG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbCArPSBtb250aEh0bWwgKyB5ZWFySHRtbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc01pblllYXIgJiYgKG1vbnRoID09PSAwIHx8IG9wdHMubWluTW9udGggPj0gbW9udGgpKSB7XG4gICAgICAgICAgICBwcmV2ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNNYXhZZWFyICYmIChtb250aCA9PT0gMTEgfHwgb3B0cy5tYXhNb250aCA8PSBtb250aCkpIHtcbiAgICAgICAgICAgIG5leHQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgICAgICBodG1sICs9ICc8YnV0dG9uIGNsYXNzPVwicGlrYS1wcmV2JyArIChwcmV2ID8gJycgOiAnIGlzLWRpc2FibGVkJykgKyAnXCIgdHlwZT1cImJ1dHRvblwiPicgKyBvcHRzLmkxOG4ucHJldmlvdXNNb250aCArICc8L2J1dHRvbj4nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjID09PSAoaW5zdGFuY2UuX28ubnVtYmVyT2ZNb250aHMgLSAxKSApIHtcbiAgICAgICAgICAgIGh0bWwgKz0gJzxidXR0b24gY2xhc3M9XCJwaWthLW5leHQnICsgKG5leHQgPyAnJyA6ICcgaXMtZGlzYWJsZWQnKSArICdcIiB0eXBlPVwiYnV0dG9uXCI+JyArIG9wdHMuaTE4bi5uZXh0TW9udGggKyAnPC9idXR0b24+JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sICs9ICc8L2Rpdj4nO1xuICAgIH0sXG5cbiAgICByZW5kZXJUYWJsZSA9IGZ1bmN0aW9uKG9wdHMsIGRhdGEsIHJhbmRJZClcbiAgICB7XG4gICAgICAgIHJldHVybiAnPHRhYmxlIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNsYXNzPVwicGlrYS10YWJsZVwiIHJvbGU9XCJncmlkXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJyArIHJhbmRJZCArICdcIj4nICsgcmVuZGVySGVhZChvcHRzKSArIHJlbmRlckJvZHkoZGF0YSkgKyAnPC90YWJsZT4nO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFBpa2FkYXkgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBQaWthZGF5ID0gZnVuY3Rpb24ob3B0aW9ucylcbiAgICB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIG9wdHMgPSBzZWxmLmNvbmZpZyhvcHRpb25zKTtcblxuICAgICAgICBzZWxmLl9vbk1vdXNlRG93biA9IGZ1bmN0aW9uKGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5fdikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNDbGFzcyh0YXJnZXQsICdpcy1kaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHRhcmdldCwgJ3Bpa2EtYnV0dG9uJykgJiYgIWhhc0NsYXNzKHRhcmdldCwgJ2lzLWVtcHR5JykgJiYgIWhhc0NsYXNzKHRhcmdldC5wYXJlbnROb2RlLCAnaXMtZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldERhdGUobmV3IERhdGUodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1waWthLXllYXInKSwgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1waWthLW1vbnRoJyksIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGlrYS1kYXknKSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5ib3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuZmllbGQuYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGFzQ2xhc3ModGFyZ2V0LCAncGlrYS1wcmV2JykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcmV2TW9udGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGFzQ2xhc3ModGFyZ2V0LCAncGlrYS1uZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5uZXh0TW9udGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWhhc0NsYXNzKHRhcmdldCwgJ3Bpa2Etc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIHRvdWNoIGV2ZW50IHByZXZlbnQgbW91c2UgZXZlbnRzIGVtdWxhdGlvblxuICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuX2MgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuX29uQ2hhbmdlID0gZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHRhcmdldCwgJ3Bpa2Etc2VsZWN0LW1vbnRoJykpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmdvdG9Nb250aCh0YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzQ2xhc3ModGFyZ2V0LCAncGlrYS1zZWxlY3QteWVhcicpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nb3RvWWVhcih0YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuX29uS2V5Q2hhbmdlID0gZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5pc1Zpc2libGUoKSkge1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLmZpZWxkLmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGp1c3REYXRlKCdzdWJ0cmFjdCcsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkanVzdERhdGUoJ3N1YnRyYWN0JywgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRqdXN0RGF0ZSgnYWRkJywgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRqdXN0RGF0ZSgnYWRkJywgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5fb25JbnB1dENoYW5nZSA9IGZ1bmN0aW9uKGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBkYXRlO1xuXG4gICAgICAgICAgICBpZiAoZS5maXJlZEJ5ID09PSBzZWxmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc01vbWVudCkge1xuICAgICAgICAgICAgICAgIGRhdGUgPSBtb21lbnQob3B0cy5maWVsZC52YWx1ZSwgb3B0cy5mb3JtYXQsIG9wdHMuZm9ybWF0U3RyaWN0KTtcbiAgICAgICAgICAgICAgICBkYXRlID0gKGRhdGUgJiYgZGF0ZS5pc1ZhbGlkKCkpID8gZGF0ZS50b0RhdGUoKSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShvcHRzLmZpZWxkLnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEYXRlKGRhdGUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2VsZi5fdikge1xuICAgICAgICAgICAgICAgIHNlbGYuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuX29uSW5wdXRGb2N1cyA9IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZi5zaG93KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5fb25JbnB1dENsaWNrID0gZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxmLnNob3coKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLl9vbklucHV0Qmx1ciA9IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gSUUgYWxsb3dzIHBpa2EgZGl2IHRvIGdhaW4gZm9jdXM7IGNhdGNoIGJsdXIgdGhlIGlucHV0IGZpZWxkXG4gICAgICAgICAgICB2YXIgcEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2xhc3MocEVsLCAncGlrYS1zaW5nbGUnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKChwRWwgPSBwRWwucGFyZW50Tm9kZSkpO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGYuX2MpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9iID0gc3RvKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLl9jID0gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5fb25DbGljayA9IGZ1bmN0aW9uKGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgcEVsID0gdGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWhhc0V2ZW50TGlzdGVuZXJzICYmIGhhc0NsYXNzKHRhcmdldCwgJ3Bpa2Etc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5vbmNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdvbmNoYW5nZScsICdyZXR1cm47Jyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50KHRhcmdldCwgJ2NoYW5nZScsIHNlbGYuX29uQ2hhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHBFbCwgJ3Bpa2Etc2luZ2xlJykgfHwgcEVsID09PSBvcHRzLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICgocEVsID0gcEVsLnBhcmVudE5vZGUpKTtcbiAgICAgICAgICAgIGlmIChzZWxmLl92ICYmIHRhcmdldCAhPT0gb3B0cy50cmlnZ2VyICYmIHBFbCAhPT0gb3B0cy50cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWxmLmVsLmNsYXNzTmFtZSA9ICdwaWthLXNpbmdsZScgKyAob3B0cy5pc1JUTCA/ICcgaXMtcnRsJyA6ICcnKSArIChvcHRzLnRoZW1lID8gJyAnICsgb3B0cy50aGVtZSA6ICcnKTtcblxuICAgICAgICBhZGRFdmVudChzZWxmLmVsLCAnbW91c2Vkb3duJywgc2VsZi5fb25Nb3VzZURvd24sIHRydWUpO1xuICAgICAgICBhZGRFdmVudChzZWxmLmVsLCAndG91Y2hlbmQnLCBzZWxmLl9vbk1vdXNlRG93biwgdHJ1ZSk7XG4gICAgICAgIGFkZEV2ZW50KHNlbGYuZWwsICdjaGFuZ2UnLCBzZWxmLl9vbkNoYW5nZSk7XG4gICAgICAgIGFkZEV2ZW50KGRvY3VtZW50LCAna2V5ZG93bicsIHNlbGYuX29uS2V5Q2hhbmdlKTtcblxuICAgICAgICBpZiAob3B0cy5maWVsZCkge1xuICAgICAgICAgICAgaWYgKG9wdHMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5lbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdHMuYm91bmQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlbGYuZWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRzLmZpZWxkLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuZWwsIG9wdHMuZmllbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkRXZlbnQob3B0cy5maWVsZCwgJ2NoYW5nZScsIHNlbGYuX29uSW5wdXRDaGFuZ2UpO1xuXG4gICAgICAgICAgICBpZiAoIW9wdHMuZGVmYXVsdERhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzTW9tZW50ICYmIG9wdHMuZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5kZWZhdWx0RGF0ZSA9IG1vbWVudChvcHRzLmZpZWxkLnZhbHVlLCBvcHRzLmZvcm1hdCkudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5kZWZhdWx0RGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2Uob3B0cy5maWVsZC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRzLnNldERlZmF1bHREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWZEYXRlID0gb3B0cy5kZWZhdWx0RGF0ZTtcblxuICAgICAgICBpZiAoaXNEYXRlKGRlZkRhdGUpKSB7XG4gICAgICAgICAgICBpZiAob3B0cy5zZXREZWZhdWx0RGF0ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShkZWZEYXRlLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nb3RvRGF0ZShkZWZEYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuZ290b0RhdGUobmV3IERhdGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0cy5ib3VuZCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICBzZWxmLmVsLmNsYXNzTmFtZSArPSAnIGlzLWJvdW5kJztcbiAgICAgICAgICAgIGFkZEV2ZW50KG9wdHMudHJpZ2dlciwgJ2NsaWNrJywgc2VsZi5fb25JbnB1dENsaWNrKTtcbiAgICAgICAgICAgIGFkZEV2ZW50KG9wdHMudHJpZ2dlciwgJ2ZvY3VzJywgc2VsZi5fb25JbnB1dEZvY3VzKTtcbiAgICAgICAgICAgIGFkZEV2ZW50KG9wdHMudHJpZ2dlciwgJ2JsdXInLCBzZWxmLl9vbklucHV0Qmx1cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIHB1YmxpYyBQaWthZGF5IEFQSVxuICAgICAqL1xuICAgIFBpa2FkYXkucHJvdG90eXBlID0ge1xuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNvbmZpZ3VyZSBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAqL1xuICAgICAgICBjb25maWc6IGZ1bmN0aW9uKG9wdGlvbnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fbykge1xuICAgICAgICAgICAgICAgIHRoaXMuX28gPSBleHRlbmQoe30sIGRlZmF1bHRzLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG9wdHMgPSBleHRlbmQodGhpcy5fbywgb3B0aW9ucywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIG9wdHMuaXNSVEwgPSAhIW9wdHMuaXNSVEw7XG5cbiAgICAgICAgICAgIG9wdHMuZmllbGQgPSAob3B0cy5maWVsZCAmJiBvcHRzLmZpZWxkLm5vZGVOYW1lKSA/IG9wdHMuZmllbGQgOiBudWxsO1xuXG4gICAgICAgICAgICBvcHRzLnRoZW1lID0gKHR5cGVvZiBvcHRzLnRoZW1lKSA9PT0gJ3N0cmluZycgJiYgb3B0cy50aGVtZSA/IG9wdHMudGhlbWUgOiBudWxsO1xuXG4gICAgICAgICAgICBvcHRzLmJvdW5kID0gISEob3B0cy5ib3VuZCAhPT0gdW5kZWZpbmVkID8gb3B0cy5maWVsZCAmJiBvcHRzLmJvdW5kIDogb3B0cy5maWVsZCk7XG5cbiAgICAgICAgICAgIG9wdHMudHJpZ2dlciA9IChvcHRzLnRyaWdnZXIgJiYgb3B0cy50cmlnZ2VyLm5vZGVOYW1lKSA/IG9wdHMudHJpZ2dlciA6IG9wdHMuZmllbGQ7XG5cbiAgICAgICAgICAgIG9wdHMuZGlzYWJsZVdlZWtlbmRzID0gISFvcHRzLmRpc2FibGVXZWVrZW5kcztcblxuICAgICAgICAgICAgb3B0cy5kaXNhYmxlRGF5Rm4gPSAodHlwZW9mIG9wdHMuZGlzYWJsZURheUZuKSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZGlzYWJsZURheUZuIDogbnVsbDtcblxuICAgICAgICAgICAgdmFyIG5vbSA9IHBhcnNlSW50KG9wdHMubnVtYmVyT2ZNb250aHMsIDEwKSB8fCAxO1xuICAgICAgICAgICAgb3B0cy5udW1iZXJPZk1vbnRocyA9IG5vbSA+IDQgPyA0IDogbm9tO1xuXG4gICAgICAgICAgICBpZiAoIWlzRGF0ZShvcHRzLm1pbkRhdGUpKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5taW5EYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzRGF0ZShvcHRzLm1heERhdGUpKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5tYXhEYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKG9wdHMubWluRGF0ZSAmJiBvcHRzLm1heERhdGUpICYmIG9wdHMubWF4RGF0ZSA8IG9wdHMubWluRGF0ZSkge1xuICAgICAgICAgICAgICAgIG9wdHMubWF4RGF0ZSA9IG9wdHMubWluRGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdHMubWluRGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWluRGF0ZShvcHRzLm1pbkRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdHMubWF4RGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWF4RGF0ZShvcHRzLm1heERhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNBcnJheShvcHRzLnllYXJSYW5nZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmFsbGJhY2sgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAxMDtcbiAgICAgICAgICAgICAgICBvcHRzLnllYXJSYW5nZVswXSA9IHBhcnNlSW50KG9wdHMueWVhclJhbmdlWzBdLCAxMCkgfHwgZmFsbGJhY2s7XG4gICAgICAgICAgICAgICAgb3B0cy55ZWFyUmFuZ2VbMV0gPSBwYXJzZUludChvcHRzLnllYXJSYW5nZVsxXSwgMTApIHx8IGZhbGxiYWNrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRzLnllYXJSYW5nZSA9IE1hdGguYWJzKHBhcnNlSW50KG9wdHMueWVhclJhbmdlLCAxMCkpIHx8IGRlZmF1bHRzLnllYXJSYW5nZTtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy55ZWFyUmFuZ2UgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy55ZWFyUmFuZ2UgPSAxMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3B0cztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmV0dXJuIGEgZm9ybWF0dGVkIHN0cmluZyBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24gKHVzaW5nIE1vbWVudC5qcyBpZiBhdmFpbGFibGUpXG4gICAgICAgICAqL1xuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24oZm9ybWF0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gIWlzRGF0ZSh0aGlzLl9kKSA/ICcnIDogaGFzTW9tZW50ID8gbW9tZW50KHRoaXMuX2QpLmZvcm1hdChmb3JtYXQgfHwgdGhpcy5fby5mb3JtYXQpIDogdGhpcy5fZC50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmV0dXJuIGEgTW9tZW50LmpzIG9iamVjdCBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24gKGlmIGF2YWlsYWJsZSlcbiAgICAgICAgICovXG4gICAgICAgIGdldE1vbWVudDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gaGFzTW9tZW50ID8gbW9tZW50KHRoaXMuX2QpIDogbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogc2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBmcm9tIGEgTW9tZW50LmpzIG9iamVjdCAoaWYgYXZhaWxhYmxlKVxuICAgICAgICAgKi9cbiAgICAgICAgc2V0TW9tZW50OiBmdW5jdGlvbihkYXRlLCBwcmV2ZW50T25TZWxlY3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChoYXNNb21lbnQgJiYgbW9tZW50LmlzTW9tZW50KGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlKGRhdGUudG9EYXRlKCksIHByZXZlbnRPblNlbGVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJldHVybiBhIERhdGUgb2JqZWN0IG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB3aXRoIGZhbGxiYWNrIGZvciB0aGUgY3VycmVudCBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICBnZXREYXRlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBpc0RhdGUodGhpcy5fZCkgPyBuZXcgRGF0ZSh0aGlzLl9kLmdldFRpbWUoKSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBzZXREYXRlOiBmdW5jdGlvbihkYXRlLCBwcmV2ZW50T25TZWxlY3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2QgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX28uZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fby5maWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQodGhpcy5fby5maWVsZCwgJ2NoYW5nZScsIHsgZmlyZWRCeTogdGhpcyB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc0RhdGUoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtaW4gPSB0aGlzLl9vLm1pbkRhdGUsXG4gICAgICAgICAgICAgICAgbWF4ID0gdGhpcy5fby5tYXhEYXRlO1xuXG4gICAgICAgICAgICBpZiAoaXNEYXRlKG1pbikgJiYgZGF0ZSA8IG1pbikge1xuICAgICAgICAgICAgICAgIGRhdGUgPSBtaW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZShtYXgpICYmIGRhdGUgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gbWF4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9kID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgc2V0VG9TdGFydE9mRGF5KHRoaXMuX2QpO1xuICAgICAgICAgICAgdGhpcy5nb3RvRGF0ZSh0aGlzLl9kKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX28uZmllbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLmZpZWxkLnZhbHVlID0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudCh0aGlzLl9vLmZpZWxkLCAnY2hhbmdlJywgeyBmaXJlZEJ5OiB0aGlzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwcmV2ZW50T25TZWxlY3QgJiYgdHlwZW9mIHRoaXMuX28ub25TZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm9uU2VsZWN0LmNhbGwodGhpcywgdGhpcy5nZXREYXRlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjaGFuZ2UgdmlldyB0byBhIHNwZWNpZmljIGRhdGVcbiAgICAgICAgICovXG4gICAgICAgIGdvdG9EYXRlOiBmdW5jdGlvbihkYXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgbmV3Q2FsZW5kYXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoIWlzRGF0ZShkYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsZW5kYXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0VmlzaWJsZURhdGUgPSBuZXcgRGF0ZSh0aGlzLmNhbGVuZGFyc1swXS55ZWFyLCB0aGlzLmNhbGVuZGFyc1swXS5tb250aCwgMSksXG4gICAgICAgICAgICAgICAgICAgIGxhc3RWaXNpYmxlRGF0ZSA9IG5ldyBEYXRlKHRoaXMuY2FsZW5kYXJzW3RoaXMuY2FsZW5kYXJzLmxlbmd0aC0xXS55ZWFyLCB0aGlzLmNhbGVuZGFyc1t0aGlzLmNhbGVuZGFycy5sZW5ndGgtMV0ubW9udGgsIDEpLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlRGF0ZSA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgZW5kIG9mIHRoZSBtb250aFxuICAgICAgICAgICAgICAgIGxhc3RWaXNpYmxlRGF0ZS5zZXRNb250aChsYXN0VmlzaWJsZURhdGUuZ2V0TW9udGgoKSsxKTtcbiAgICAgICAgICAgICAgICBsYXN0VmlzaWJsZURhdGUuc2V0RGF0ZShsYXN0VmlzaWJsZURhdGUuZ2V0RGF0ZSgpLTEpO1xuICAgICAgICAgICAgICAgIG5ld0NhbGVuZGFyID0gKHZpc2libGVEYXRlIDwgZmlyc3RWaXNpYmxlRGF0ZS5nZXRUaW1lKCkgfHwgbGFzdFZpc2libGVEYXRlLmdldFRpbWUoKSA8IHZpc2libGVEYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0NhbGVuZGFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fby5tYWluQ2FsZW5kYXIgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0ubW9udGggKz0gMSAtIHRoaXMuX28ubnVtYmVyT2ZNb250aHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFkanVzdENhbGVuZGFycygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkanVzdERhdGU6IGZ1bmN0aW9uKHNpZ24sIGRheXMpIHtcblxuICAgICAgICAgICAgdmFyIGRheSA9IHRoaXMuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBwYXJzZUludChkYXlzKSoyNCo2MCo2MCoxMDAwO1xuXG4gICAgICAgICAgICB2YXIgbmV3RGF5O1xuXG4gICAgICAgICAgICBpZiAoc2lnbiA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgICAgICBuZXdEYXkgPSBuZXcgRGF0ZShkYXkudmFsdWVPZigpICsgZGlmZmVyZW5jZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNpZ24gPT09ICdzdWJ0cmFjdCcpIHtcbiAgICAgICAgICAgICAgICBuZXdEYXkgPSBuZXcgRGF0ZShkYXkudmFsdWVPZigpIC0gZGlmZmVyZW5jZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoYXNNb21lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnbiA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF5ID0gbW9tZW50KGRheSkuYWRkKGRheXMsIFwiZGF5c1wiKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNpZ24gPT09ICdzdWJ0cmFjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF5ID0gbW9tZW50KGRheSkuc3VidHJhY3QoZGF5cywgXCJkYXlzXCIpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXREYXRlKG5ld0RheSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRqdXN0Q2FsZW5kYXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdID0gYWRqdXN0Q2FsZW5kYXIodGhpcy5jYWxlbmRhcnNbMF0pO1xuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDE7IGMgPCB0aGlzLl9vLm51bWJlck9mTW9udGhzOyBjKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1tjXSA9IGFkanVzdENhbGVuZGFyKHtcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IHRoaXMuY2FsZW5kYXJzWzBdLm1vbnRoICsgYyxcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogdGhpcy5jYWxlbmRhcnNbMF0ueWVhclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ290b1RvZGF5OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZ290b0RhdGUobmV3IERhdGUoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNoYW5nZSB2aWV3IHRvIGEgc3BlY2lmaWMgbW9udGggKHplcm8taW5kZXgsIGUuZy4gMDogSmFudWFyeSlcbiAgICAgICAgICovXG4gICAgICAgIGdvdG9Nb250aDogZnVuY3Rpb24obW9udGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4obW9udGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0ubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRqdXN0Q2FsZW5kYXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbmV4dE1vbnRoOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdLm1vbnRoKys7XG4gICAgICAgICAgICB0aGlzLmFkanVzdENhbGVuZGFycygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHByZXZNb250aDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXS5tb250aC0tO1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RDYWxlbmRhcnMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogY2hhbmdlIHZpZXcgdG8gYSBzcGVjaWZpYyBmdWxsIHllYXIgKGUuZy4gXCIyMDEyXCIpXG4gICAgICAgICAqL1xuICAgICAgICBnb3RvWWVhcjogZnVuY3Rpb24oeWVhcilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCFpc05hTih5ZWFyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdLnllYXIgPSBwYXJzZUludCh5ZWFyLCAxMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RDYWxlbmRhcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogY2hhbmdlIHRoZSBtaW5EYXRlXG4gICAgICAgICAqL1xuICAgICAgICBzZXRNaW5EYXRlOiBmdW5jdGlvbih2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgc2V0VG9TdGFydE9mRGF5KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1pbkRhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1pblllYXIgID0gdmFsdWUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1pbk1vbnRoID0gdmFsdWUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5taW5EYXRlID0gZGVmYXVsdHMubWluRGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1pblllYXIgID0gZGVmYXVsdHMubWluWWVhcjtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1pbk1vbnRoID0gZGVmYXVsdHMubWluTW9udGg7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5zdGFydFJhbmdlID0gZGVmYXVsdHMuc3RhcnRSYW5nZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNoYW5nZSB0aGUgbWF4RGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2V0TWF4RGF0ZTogZnVuY3Rpb24odmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHNldFRvU3RhcnRPZkRheSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5tYXhEYXRlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5tYXhZZWFyID0gdmFsdWUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1heE1vbnRoID0gdmFsdWUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5tYXhEYXRlID0gZGVmYXVsdHMubWF4RGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1heFllYXIgPSBkZWZhdWx0cy5tYXhZZWFyO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWF4TW9udGggPSBkZWZhdWx0cy5tYXhNb250aDtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLmVuZFJhbmdlID0gZGVmYXVsdHMuZW5kUmFuZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFN0YXJ0UmFuZ2U6IGZ1bmN0aW9uKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9vLnN0YXJ0UmFuZ2UgPSB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRFbmRSYW5nZTogZnVuY3Rpb24odmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX28uZW5kUmFuZ2UgPSB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmVmcmVzaCB0aGUgSFRNTFxuICAgICAgICAgKi9cbiAgICAgICAgZHJhdzogZnVuY3Rpb24oZm9yY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fdiAmJiAhZm9yY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3B0cyA9IHRoaXMuX28sXG4gICAgICAgICAgICAgICAgbWluWWVhciA9IG9wdHMubWluWWVhcixcbiAgICAgICAgICAgICAgICBtYXhZZWFyID0gb3B0cy5tYXhZZWFyLFxuICAgICAgICAgICAgICAgIG1pbk1vbnRoID0gb3B0cy5taW5Nb250aCxcbiAgICAgICAgICAgICAgICBtYXhNb250aCA9IG9wdHMubWF4TW9udGgsXG4gICAgICAgICAgICAgICAgaHRtbCA9ICcnLFxuICAgICAgICAgICAgICAgIHJhbmRJZDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3kgPD0gbWluWWVhcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3kgPSBtaW5ZZWFyO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4obWluTW9udGgpICYmIHRoaXMuX20gPCBtaW5Nb250aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tID0gbWluTW9udGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX3kgPj0gbWF4WWVhcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3kgPSBtYXhZZWFyO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4obWF4TW9udGgpICYmIHRoaXMuX20gPiBtYXhNb250aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tID0gbWF4TW9udGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByYW5kSWQgPSAncGlrYS10aXRsZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIDIpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IG9wdHMubnVtYmVyT2ZNb250aHM7IGMrKykge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJwaWthLWxlbmRhclwiPicgKyByZW5kZXJUaXRsZSh0aGlzLCBjLCB0aGlzLmNhbGVuZGFyc1tjXS55ZWFyLCB0aGlzLmNhbGVuZGFyc1tjXS5tb250aCwgdGhpcy5jYWxlbmRhcnNbMF0ueWVhciwgcmFuZElkKSArIHRoaXMucmVuZGVyKHRoaXMuY2FsZW5kYXJzW2NdLnllYXIsIHRoaXMuY2FsZW5kYXJzW2NdLm1vbnRoLCByYW5kSWQpICsgJzwvZGl2Pic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgICAgICAgaWYgKG9wdHMuYm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZihvcHRzLmZpZWxkLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0byhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMudHJpZ2dlci5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fby5vbkRyYXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm9uRHJhdyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG9wdHMuYm91bmQpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgdGhlIHNjcmVlbiByZWFkZXIgdXNlciBrbm93IHRvIHVzZSBhcnJvdyBrZXlzXG4gICAgICAgICAgICAgICAgb3B0cy5maWVsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnVXNlIHRoZSBhcnJvdyBrZXlzIHRvIHBpY2sgYSBkYXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRqdXN0UG9zaXRpb246IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGZpZWxkLCBwRWwsIHdpZHRoLCBoZWlnaHQsIHZpZXdwb3J0V2lkdGgsIHZpZXdwb3J0SGVpZ2h0LCBzY3JvbGxUb3AsIGxlZnQsIHRvcCwgY2xpZW50UmVjdDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX28uY29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgICAgICAgICBmaWVsZCA9IHRoaXMuX28udHJpZ2dlcjtcbiAgICAgICAgICAgIHBFbCA9IGZpZWxkO1xuICAgICAgICAgICAgd2lkdGggPSB0aGlzLmVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB2aWV3cG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNsaWVudFJlY3QgPSBmaWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gY2xpZW50UmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHRvcCA9IGNsaWVudFJlY3QuYm90dG9tICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gcEVsLm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgdG9wICA9IHBFbC5vZmZzZXRUb3AgKyBwRWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHdoaWxlKChwRWwgPSBwRWwub2Zmc2V0UGFyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ICs9IHBFbC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICAgICAgICB0b3AgICs9IHBFbC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkZWZhdWx0IHBvc2l0aW9uIGlzIGJvdHRvbSAmIGxlZnRcbiAgICAgICAgICAgIGlmICgodGhpcy5fby5yZXBvc2l0aW9uICYmIGxlZnQgKyB3aWR0aCA+IHZpZXdwb3J0V2lkdGgpIHx8XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vLnBvc2l0aW9uLmluZGV4T2YoJ3JpZ2h0JykgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICBsZWZ0IC0gd2lkdGggKyBmaWVsZC5vZmZzZXRXaWR0aCA+IDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdCAtIHdpZHRoICsgZmllbGQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHRoaXMuX28ucmVwb3NpdGlvbiAmJiB0b3AgKyBoZWlnaHQgPiB2aWV3cG9ydEhlaWdodCArIHNjcm9sbFRvcCkgfHxcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX28ucG9zaXRpb24uaW5kZXhPZigndG9wJykgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICB0b3AgLSBoZWlnaHQgLSBmaWVsZC5vZmZzZXRIZWlnaHQgPiAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gdG9wIC0gaGVpZ2h0IC0gZmllbGQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmVuZGVyIEhUTUwgZm9yIGEgcGFydGljdWxhciBtb250aFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbih5ZWFyLCBtb250aCwgcmFuZElkKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgb3B0cyAgID0gdGhpcy5fbyxcbiAgICAgICAgICAgICAgICBub3cgICAgPSBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIGRheXMgICA9IGdldERheXNJbk1vbnRoKHllYXIsIG1vbnRoKSxcbiAgICAgICAgICAgICAgICBiZWZvcmUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkuZ2V0RGF5KCksXG4gICAgICAgICAgICAgICAgZGF0YSAgID0gW10sXG4gICAgICAgICAgICAgICAgcm93ICAgID0gW107XG4gICAgICAgICAgICBzZXRUb1N0YXJ0T2ZEYXkobm93KTtcbiAgICAgICAgICAgIGlmIChvcHRzLmZpcnN0RGF5ID4gMCkge1xuICAgICAgICAgICAgICAgIGJlZm9yZSAtPSBvcHRzLmZpcnN0RGF5O1xuICAgICAgICAgICAgICAgIGlmIChiZWZvcmUgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZSArPSA3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcmV2aW91c01vbnRoID0gbW9udGggPT09IDAgPyAxMSA6IG1vbnRoIC0gMSxcbiAgICAgICAgICAgICAgICBuZXh0TW9udGggPSBtb250aCA9PT0gMTEgPyAwIDogbW9udGggKyAxLFxuICAgICAgICAgICAgICAgIHllYXJPZlByZXZpb3VzTW9udGggPSBtb250aCA9PT0gMCA/IHllYXIgLSAxIDogeWVhcixcbiAgICAgICAgICAgICAgICB5ZWFyT2ZOZXh0TW9udGggPSBtb250aCA9PT0gMTEgPyB5ZWFyICsgMSA6IHllYXIsXG4gICAgICAgICAgICAgICAgZGF5c0luUHJldmlvdXNNb250aCA9IGdldERheXNJbk1vbnRoKHllYXJPZlByZXZpb3VzTW9udGgsIHByZXZpb3VzTW9udGgpO1xuICAgICAgICAgICAgdmFyIGNlbGxzID0gZGF5cyArIGJlZm9yZSxcbiAgICAgICAgICAgICAgICBhZnRlciA9IGNlbGxzO1xuICAgICAgICAgICAgd2hpbGUoYWZ0ZXIgPiA3KSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXIgLT0gNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzICs9IDcgLSBhZnRlcjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCByID0gMDsgaSA8IGNlbGxzOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGRheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxICsgKGkgLSBiZWZvcmUpKSxcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZCA9IGlzRGF0ZSh0aGlzLl9kKSA/IGNvbXBhcmVEYXRlcyhkYXksIHRoaXMuX2QpIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGlzVG9kYXkgPSBjb21wYXJlRGF0ZXMoZGF5LCBub3cpLFxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5ID0gaSA8IGJlZm9yZSB8fCBpID49IChkYXlzICsgYmVmb3JlKSxcbiAgICAgICAgICAgICAgICAgICAgZGF5TnVtYmVyID0gMSArIChpIC0gYmVmb3JlKSxcbiAgICAgICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBtb250aCxcbiAgICAgICAgICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXIsXG4gICAgICAgICAgICAgICAgICAgIGlzU3RhcnRSYW5nZSA9IG9wdHMuc3RhcnRSYW5nZSAmJiBjb21wYXJlRGF0ZXMob3B0cy5zdGFydFJhbmdlLCBkYXkpLFxuICAgICAgICAgICAgICAgICAgICBpc0VuZFJhbmdlID0gb3B0cy5lbmRSYW5nZSAmJiBjb21wYXJlRGF0ZXMob3B0cy5lbmRSYW5nZSwgZGF5KSxcbiAgICAgICAgICAgICAgICAgICAgaXNJblJhbmdlID0gb3B0cy5zdGFydFJhbmdlICYmIG9wdHMuZW5kUmFuZ2UgJiYgb3B0cy5zdGFydFJhbmdlIDwgZGF5ICYmIGRheSA8IG9wdHMuZW5kUmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQgPSAob3B0cy5taW5EYXRlICYmIGRheSA8IG9wdHMubWluRGF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRzLm1heERhdGUgJiYgZGF5ID4gb3B0cy5tYXhEYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdHMuZGlzYWJsZVdlZWtlbmRzICYmIGlzV2Vla2VuZChkYXkpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdHMuZGlzYWJsZURheUZuICYmIG9wdHMuZGlzYWJsZURheUZuKGRheSkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBiZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheU51bWJlciA9IGRheXNJblByZXZpb3VzTW9udGggKyBkYXlOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aE51bWJlciA9IHByZXZpb3VzTW9udGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck9mUHJldmlvdXNNb250aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheU51bWJlciA9IGRheU51bWJlciAtIGRheXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aE51bWJlciA9IG5leHRNb250aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyT2ZOZXh0TW9udGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZGF5Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiBkYXlOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogbW9udGhOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kYXk6IGlzVG9kYXksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbXB0eTogaXNFbXB0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3RhcnRSYW5nZTogaXNTdGFydFJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmRSYW5nZTogaXNFbmRSYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5SYW5nZTogaXNJblJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0RheXNJbk5leHRBbmRQcmV2aW91c01vbnRoczogb3B0cy5zaG93RGF5c0luTmV4dEFuZFByZXZpb3VzTW9udGhzXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByb3cucHVzaChyZW5kZXJEYXkoZGF5Q29uZmlnKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoKytyID09PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLnNob3dXZWVrTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cudW5zaGlmdChyZW5kZXJXZWVrKGkgLSBiZWZvcmUsIG1vbnRoLCB5ZWFyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHJlbmRlclJvdyhyb3csIG9wdHMuaXNSVEwpKTtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWJsZShvcHRzLCBkYXRhLCByYW5kSWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzVmlzaWJsZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdjtcbiAgICAgICAgfSxcblxuICAgICAgICBzaG93OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsICdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLl92ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fby5ib3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRFdmVudChkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5fb25DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vLm9uT3Blbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5fdjtcbiAgICAgICAgICAgIGlmICh2ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vLmJvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCAnY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnOyAvLyByZXNldFxuICAgICAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyh0aGlzLmVsLCAnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRoaXMuX28ub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdBTUUgT1ZFUlxuICAgICAgICAgKi9cbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KHRoaXMuZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93biwgdHJ1ZSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudCh0aGlzLmVsLCAndG91Y2hlbmQnLCB0aGlzLl9vbk1vdXNlRG93biwgdHJ1ZSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudCh0aGlzLmVsLCAnY2hhbmdlJywgdGhpcy5fb25DaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX28uZmllbGQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFdmVudCh0aGlzLl9vLmZpZWxkLCAnY2hhbmdlJywgdGhpcy5fb25JbnB1dENoYW5nZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX28uYm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQodGhpcy5fby50cmlnZ2VyLCAnY2xpY2snLCB0aGlzLl9vbklucHV0Q2xpY2spO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudCh0aGlzLl9vLnRyaWdnZXIsICdmb2N1cycsIHRoaXMuX29uSW5wdXRGb2N1cyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50KHRoaXMuX28udHJpZ2dlciwgJ2JsdXInLCB0aGlzLl9vbklucHV0Qmx1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHJldHVybiBQaWthZGF5O1xuXG59KSk7XG4iLCJcbmltcG9ydCBQaWNrZXIgZnJvbSAnLi9QaWNrZXInXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vVGltZVBpY2tlcidcbmltcG9ydCBQaWthZGF5IGZyb20gJ3Bpa2FkYXknXG5cbmNvbnN0IHBpY2tlck1vZHVsZSA9IHtcbiAgcGljazogZnVuY3Rpb24gKG9wdGlvbnMsIGNvbmZpcm1DYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spIHtcbiAgICBjb25zdCBpdGVtcyA9IG9wdGlvbnMuaXRlbXNcbiAgICBjb25zdCBpbmRleCA9IG9wdGlvbnMuaW5kZXhcbiAgICBuZXcgUGlja2VyKHtcbiAgICAgIGRhdGE6IGl0ZW1zLFxuICAgICAgZGVmYXVsdEluZGV4czogW2luZGV4XSxcbiAgICAgIGNvbmZpcm1DYWxsYmFjazogY29uZmlybUNhbGxiYWNrLFxuICAgICAgY2FuY2VsQ2FsbGJhY2s6IGNhbmNlbENhbGxiYWNrLFxuICAgICAgc2VuZGVyOiB0aGlzLnNlbmRlclxuICAgIH0pXG4gIH0sXG5cbiAgcGlja0RhdGU6IGZ1bmN0aW9uIChvcHRpb25zLCBjb25maXJtQ2FsbGJhY2spIHtcbiAgICBjb25zdCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYXNrLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1tYXNrJ1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgcGlja2VyID0gbmV3IFBpa2FkYXkoe1xuICAgICAgZGVmYXVsdERhdGU6IG1vbWVudChvcHRpb25zLnZhbHVlLCAnWVlZWS1NTS1ERCcpLnRvRGF0ZSgpLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgICBtaW5EYXRlOiBtb21lbnQob3B0aW9ucy5taW4sICdZWVlZLU1NLUREJykudG9EYXRlKCksXG4gICAgICBtYXhEYXRlOiBtb21lbnQob3B0aW9ucy5tYXgsICdZWVlZLU1NLUREJykudG9EYXRlKCksXG4gICAgICBvblNlbGVjdDogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrICYmIHNlbGYuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjb25maXJtQ2FsbGJhY2ssIHsgcmVzdWx0OiAnc3VjY2VzcycsIGRhdGE6IG1vbWVudChkYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSB9KVxuICAgICAgICBwaWNrZXIuZGVzdHJveSgpXG4gICAgICAgIG1hc2sucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtYXNrKVxuICAgICAgfVxuICAgIH0pXG4gICAgbWFzay5hcHBlbmRDaGlsZChwaWNrZXIuZWwpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobWFzaylcbiAgfSxcblxuICBwaWNrVGltZTogZnVuY3Rpb24gKG9wdGlvbnMsIGNvbmZpcm1DYWxsYmFjaykge1xuICAgIG5ldyBUaW1lUGlja2VyKHtcbiAgICAgIHZhbHVlOiBvcHRpb25zLnZhbHVlLFxuICAgICAgY29uZmlybUNhbGxiYWNrOiBjb25maXJtQ2FsbGJhY2ssXG4gICAgICBzZW5kZXI6IHRoaXMuc2VuZGVyXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBtZXRhID0ge1xuICBwaWNrZXI6IFt7XG4gICAgbmFtZTogJ3BpY2snLFxuICAgIGFyZ3M6IFsnb2JqZWN0JywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdwaWNrRGF0ZScsXG4gICAgYXJnczogWydvYmplY3QnLCAnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ3BpY2tUaW1lJyxcbiAgICBhcmdzOiBbJ29iamVjdCcsICdmdW5jdGlvbiddXG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKFdlZXgpIHtcbiAgICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdwaWNrZXInLCBwaWNrZXJNb2R1bGUsIG1ldGEpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0aGlzIiwiYXJndW1lbnRzIiwibGV0IiwiY29uc3QiLCJJU2Nyb2xsIiwiaSIsInNvbWUiLCJzZXQiLCJpbmRleE9mIiwiaGFuZGxlU3RyaWN0UGFyc2UiLCJrZXlzIiwiY2FsZW5kYXIiLCJpc1ZhbGlkIiwiX2lzVmFsaWQiLCJwcm90byIsImdldCIsImFkZFN1YnRyYWN0IiwiYWRkIiwic3VidHJhY3QiLCJ2YWx1ZU9mIiwicmVsYXRpdmVUaW1lIiwiYWJzIiwidG9JU09TdHJpbmciLCJtb21lbnQiLCJsb2NhbCIsImZuIiwidXRjIiwidW5peCIsIm1vbnRocyIsImxvY2FsZSIsImludmFsaWQiLCJkdXJhdGlvbiIsIndlZWtkYXlzIiwicGFyc2Vab25lIiwibG9jYWxlRGF0YSIsIm1vbnRoc1Nob3J0Iiwid2Vla2RheXNNaW4iLCJsb2NhbGVzIiwid2Vla2RheXNTaG9ydCIsInJlbGF0aXZlVGltZVJvdW5kaW5nIiwicmVsYXRpdmVUaW1lVGhyZXNob2xkIiwiUGlrYWRheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxDQUFDLFVBQVUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7QUFDbkMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLHFCQUFxQjtDQUNyQyxNQUFNLENBQUMsMkJBQTJCO0NBQ2xDLE1BQU0sQ0FBQyx3QkFBd0I7Q0FDL0IsTUFBTSxDQUFDLHNCQUFzQjtDQUM3QixNQUFNLENBQUMsdUJBQXVCO0NBQzlCLFVBQVUsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7QUFFakUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxZQUFZO0NBQ3hCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQzs7Q0FFWixJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztDQUN4RCxJQUFJLE9BQU8sR0FBRyxDQUFDLFlBQVk7RUFDMUIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0dBQ2xELFNBQVM7R0FDVCxDQUFDLEdBQUcsQ0FBQztHQUNM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QUM7O0VBRXpCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFDdEYsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7RUFFckYsSUFBSSxHQUFHLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDOztFQUVySSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDL0M7O0NBRUQsZUFBZSxFQUFFLFVBQVUsSUFBSSxFQUFFOzs7RUFDaEMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7O0VBRWpCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7RUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztFQUUvQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxZQUFZLEdBQUc7R0FDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENB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RyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztDQUMxQyxDQUFDLENBQUM7QUFDSCxhQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDakQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQzVDLENBQUMsQ0FBQztBQUNILGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUNuRCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxD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QUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDNUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVDOzs7SUFHRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDZixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZGOzs7SUFHRCxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdkIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCOztJQUVELE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7SUFHN0UsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtRQUNyQixNQUFN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
