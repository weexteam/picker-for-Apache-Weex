(this.nativeLog || function(s) {console.log(s)})('START WEEX PICKER: 0.0.2 Build 20161229');

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
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

hooks.version = '2.17.1';

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
    debugger
    console.log(hooks(options.min, 'YYYY-MM-DD').toDate());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9pc2Nyb2xsL2J1aWxkL2lzY3JvbGwuanMiLCIuLi9zcmMvUGlja2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2hvb2tzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLWFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9pcy1vYmplY3QtZW1wdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvaXMtbnVtYmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLWRhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvbWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2hhcy1vd24tcHJvcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9leHRlbmQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvY3JlYXRlL3V0Yy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvcGFyc2luZy1mbGFncy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9zb21lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2NyZWF0ZS92YWxpZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9pcy11bmRlZmluZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2NvbnN0cnVjdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2Ficy1mbG9vci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy90by1pbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvY29tcGFyZS1hcnJheXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvZGVwcmVjYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLWZ1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9zZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2NvbnN0cnVjdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2tleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2NhbGVuZGFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9mb3JtYXRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9pbnZhbGlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9vcmRpbmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9yZWxhdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy9hbGlhc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3ByaW9yaXRpZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2dldC1zZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvemVyby1maWxsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvcGFyc2UvcmVnZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvcGFyc2UvdG9rZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvY29uc3RhbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2luZGV4LW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL21vbnRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3llYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvY3JlYXRlL2RhdGUtZnJvbS1hcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3dlZWsuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvZGF5LW9mLXdlZWsuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvaG91ci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9sb2NhbGUvYmFzZS1jb25maWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2xvY2FsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvY3JlYXRlL2NoZWNrLW92ZXJmbG93LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2NyZWF0ZS9mcm9tLXN0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9kZWZhdWx0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1hcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWZvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2NyZWF0ZS9mcm9tLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1hbnl0aGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvbG9jYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L21pbi1tYXguanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L25vdy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9jb25zdHJ1Y3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9hYnMtcm91bmQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvb2Zmc2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2R1cmF0aW9uL2NyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvYWRkLXN1YnRyYWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC9jYWxlbmRhci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvY2xvbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2NvbXBhcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2RpZmYuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvZnJvbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvdG8uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2xvY2FsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvc3RhcnQtZW5kLW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC90by10eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC92YWxpZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvY3JlYXRpb24tZGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy93ZWVrLXllYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvcXVhcnRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy9kYXktb2YtbW9udGguanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvZGF5LW9mLXllYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvbWludXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3NlY29uZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy9taWxsaXNlY29uZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy90aW1lem9uZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvcHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC9tb21lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL3ByZS1wb3N0LWZvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9sb2NhbGUvcHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9saXN0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9sb2NhbGUvZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2xvY2FsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9hYnMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vYWRkLXN1YnRyYWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2Ficy1jZWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2R1cmF0aW9uL2J1YmJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9hcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9nZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vaHVtYW5pemUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vaXNvLXN0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9wcm90b3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vZHVyYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvdGltZXN0YW1wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3VuaXRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbW9tZW50LmpzIiwiLi4vc3JjL1RpbWVQaWNrZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcGlrYWRheS9waWthZGF5LmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBpU2Nyb2xsIHY1LjIuMCB+IChjKSAyMDA4LTIwMTYgTWF0dGVvIFNwaW5lbGxpIH4gaHR0cDovL2N1YmlxLm9yZy9saWNlbnNlICovXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgpIHtcbnZhciByQUYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHR8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHR8fFxuXHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdHx8XG5cdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdHx8XG5cdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVx0XHR8fFxuXHRmdW5jdGlvbiAoY2FsbGJhY2spIHsgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7IH07XG5cbnZhciB1dGlscyA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBtZSA9IHt9O1xuXG5cdHZhciBfZWxlbWVudFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG5cdHZhciBfdmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdmVuZG9ycyA9IFsndCcsICd3ZWJraXRUJywgJ01velQnLCAnbXNUJywgJ09UJ10sXG5cdFx0XHR0cmFuc2Zvcm0sXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB2ZW5kb3JzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdHRyYW5zZm9ybSA9IHZlbmRvcnNbaV0gKyAncmFuc2Zvcm0nO1xuXHRcdFx0aWYgKCB0cmFuc2Zvcm0gaW4gX2VsZW1lbnRTdHlsZSApIHJldHVybiB2ZW5kb3JzW2ldLnN1YnN0cigwLCB2ZW5kb3JzW2ldLmxlbmd0aC0xKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKCk7XG5cblx0ZnVuY3Rpb24gX3ByZWZpeFN0eWxlIChzdHlsZSkge1xuXHRcdGlmICggX3ZlbmRvciA9PT0gZmFsc2UgKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKCBfdmVuZG9yID09PSAnJyApIHJldHVybiBzdHlsZTtcblx0XHRyZXR1cm4gX3ZlbmRvciArIHN0eWxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGUuc3Vic3RyKDEpO1xuXHR9XG5cblx0bWUuZ2V0VGltZSA9IERhdGUubm93IHx8IGZ1bmN0aW9uIGdldFRpbWUgKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cblx0bWUuZXh0ZW5kID0gZnVuY3Rpb24gKHRhcmdldCwgb2JqKSB7XG5cdFx0Zm9yICggdmFyIGkgaW4gb2JqICkge1xuXHRcdFx0dGFyZ2V0W2ldID0gb2JqW2ldO1xuXHRcdH1cblx0fTtcblxuXHRtZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZm4sIGNhcHR1cmUpIHtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCAhIWNhcHR1cmUpO1xuXHR9O1xuXG5cdG1lLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xuXHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sICEhY2FwdHVyZSk7XG5cdH07XG5cblx0bWUucHJlZml4UG9pbnRlckV2ZW50ID0gZnVuY3Rpb24gKHBvaW50ZXJFdmVudCkge1xuXHRcdHJldHVybiB3aW5kb3cuTVNQb2ludGVyRXZlbnQgP1xuXHRcdFx0J01TUG9pbnRlcicgKyBwb2ludGVyRXZlbnQuY2hhckF0KDcpLnRvVXBwZXJDYXNlKCkgKyBwb2ludGVyRXZlbnQuc3Vic3RyKDgpOlxuXHRcdFx0cG9pbnRlckV2ZW50O1xuXHR9O1xuXG5cdG1lLm1vbWVudHVtID0gZnVuY3Rpb24gKGN1cnJlbnQsIHN0YXJ0LCB0aW1lLCBsb3dlck1hcmdpbiwgd3JhcHBlclNpemUsIGRlY2VsZXJhdGlvbikge1xuXHRcdHZhciBkaXN0YW5jZSA9IGN1cnJlbnQgLSBzdGFydCxcblx0XHRcdHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZSxcblx0XHRcdGRlc3RpbmF0aW9uLFxuXHRcdFx0ZHVyYXRpb247XG5cblx0XHRkZWNlbGVyYXRpb24gPSBkZWNlbGVyYXRpb24gPT09IHVuZGVmaW5lZCA/IDAuMDAwNiA6IGRlY2VsZXJhdGlvbjtcblxuXHRcdGRlc3RpbmF0aW9uID0gY3VycmVudCArICggc3BlZWQgKiBzcGVlZCApIC8gKCAyICogZGVjZWxlcmF0aW9uICkgKiAoIGRpc3RhbmNlIDwgMCA/IC0xIDogMSApO1xuXHRcdGR1cmF0aW9uID0gc3BlZWQgLyBkZWNlbGVyYXRpb247XG5cblx0XHRpZiAoIGRlc3RpbmF0aW9uIDwgbG93ZXJNYXJnaW4gKSB7XG5cdFx0XHRkZXN0aW5hdGlvbiA9IHdyYXBwZXJTaXplID8gbG93ZXJNYXJnaW4gLSAoIHdyYXBwZXJTaXplIC8gMi41ICogKCBzcGVlZCAvIDggKSApIDogbG93ZXJNYXJnaW47XG5cdFx0XHRkaXN0YW5jZSA9IE1hdGguYWJzKGRlc3RpbmF0aW9uIC0gY3VycmVudCk7XG5cdFx0XHRkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XG5cdFx0fSBlbHNlIGlmICggZGVzdGluYXRpb24gPiAwICkge1xuXHRcdFx0ZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZSA/IHdyYXBwZXJTaXplIC8gMi41ICogKCBzcGVlZCAvIDggKSA6IDA7XG5cdFx0XHRkaXN0YW5jZSA9IE1hdGguYWJzKGN1cnJlbnQpICsgZGVzdGluYXRpb247XG5cdFx0XHRkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGRlc3RpbmF0aW9uOiBNYXRoLnJvdW5kKGRlc3RpbmF0aW9uKSxcblx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvblxuXHRcdH07XG5cdH07XG5cblx0dmFyIF90cmFuc2Zvcm0gPSBfcHJlZml4U3R5bGUoJ3RyYW5zZm9ybScpO1xuXG5cdG1lLmV4dGVuZChtZSwge1xuXHRcdGhhc1RyYW5zZm9ybTogX3RyYW5zZm9ybSAhPT0gZmFsc2UsXG5cdFx0aGFzUGVyc3BlY3RpdmU6IF9wcmVmaXhTdHlsZSgncGVyc3BlY3RpdmUnKSBpbiBfZWxlbWVudFN0eWxlLFxuXHRcdGhhc1RvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csXG5cdFx0aGFzUG9pbnRlcjogISEod2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpLCAvLyBJRTEwIGlzIHByZWZpeGVkXG5cdFx0aGFzVHJhbnNpdGlvbjogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uJykgaW4gX2VsZW1lbnRTdHlsZVxuXHR9KTtcblxuXHQvKlxuXHRUaGlzIHNob3VsZCBmaW5kIGFsbCBBbmRyb2lkIGJyb3dzZXJzIGxvd2VyIHRoYW4gYnVpbGQgNTM1LjE5IChib3RoIHN0b2NrIGJyb3dzZXIgYW5kIHdlYnZpZXcpXG5cdC0gZ2FsYXh5IFMyIGlzIG9rXG4gICAgLSAyLjMuNiA6IGBBcHBsZVdlYktpdC81MzMuMSAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTMzLjFgXG4gICAgLSA0LjAuNCA6IGBBcHBsZVdlYktpdC81MzQuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNC4zMGBcbiAgIC0gZ2FsYXh5IFMzIGlzIGJhZEFuZHJvaWQgKHN0b2NrIGJyb3dlciwgd2VidmlldylcbiAgICAgYEFwcGxlV2ViS2l0LzUzNC4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM0LjMwYFxuICAgLSBnYWxheHkgUzQgaXMgYmFkQW5kcm9pZCAoc3RvY2sgYnJvd2VyLCB3ZWJ2aWV3KVxuICAgICBgQXBwbGVXZWJLaXQvNTM0LjMwIChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzQuMzBgXG4gICAtIGdhbGF4eSBTNSBpcyBPS1xuICAgICBgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzcuMzYgKENocm9tZS8pYFxuICAgLSBnYWxheHkgUzYgaXMgT0tcbiAgICAgYEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2IChDaHJvbWUvKWBcbiAgKi9cblx0bWUuaXNCYWRBbmRyb2lkID0gKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhcHBWZXJzaW9uID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uO1xuXHRcdC8vIEFuZHJvaWQgYnJvd3NlciBpcyBub3QgYSBjaHJvbWUgYnJvd3Nlci5cblx0XHRpZiAoL0FuZHJvaWQvLnRlc3QoYXBwVmVyc2lvbikgJiYgISgvQ2hyb21lXFwvXFxkLy50ZXN0KGFwcFZlcnNpb24pKSkge1xuXHRcdFx0dmFyIHNhZmFyaVZlcnNpb24gPSBhcHBWZXJzaW9uLm1hdGNoKC9TYWZhcmlcXC8oXFxkKy5cXGQpLyk7XG5cdFx0XHRpZihzYWZhcmlWZXJzaW9uICYmIHR5cGVvZiBzYWZhcmlWZXJzaW9uID09PSBcIm9iamVjdFwiICYmIHNhZmFyaVZlcnNpb24ubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQoc2FmYXJpVmVyc2lvblsxXSkgPCA1MzUuMTk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSkoKTtcblxuXHRtZS5leHRlbmQobWUuc3R5bGUgPSB7fSwge1xuXHRcdHRyYW5zZm9ybTogX3RyYW5zZm9ybSxcblx0XHR0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJyksXG5cdFx0dHJhbnNpdGlvbkR1cmF0aW9uOiBfcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25EdXJhdGlvbicpLFxuXHRcdHRyYW5zaXRpb25EZWxheTogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRGVsYXknKSxcblx0XHR0cmFuc2Zvcm1PcmlnaW46IF9wcmVmaXhTdHlsZSgndHJhbnNmb3JtT3JpZ2luJylcblx0fSk7XG5cblx0bWUuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuXHRcdHZhciByZSA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIGMgKyBcIihcXFxcc3wkKVwiKTtcblx0XHRyZXR1cm4gcmUudGVzdChlLmNsYXNzTmFtZSk7XG5cdH07XG5cblx0bWUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuXHRcdGlmICggbWUuaGFzQ2xhc3MoZSwgYykgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG5ld2NsYXNzID0gZS5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblx0XHRuZXdjbGFzcy5wdXNoKGMpO1xuXHRcdGUuY2xhc3NOYW1lID0gbmV3Y2xhc3Muam9pbignICcpO1xuXHR9O1xuXG5cdG1lLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGUsIGMpIHtcblx0XHRpZiAoICFtZS5oYXNDbGFzcyhlLCBjKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjICsgXCIoXFxcXHN8JClcIiwgJ2cnKTtcblx0XHRlLmNsYXNzTmFtZSA9IGUuY2xhc3NOYW1lLnJlcGxhY2UocmUsICcgJyk7XG5cdH07XG5cblx0bWUub2Zmc2V0ID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0dmFyIGxlZnQgPSAtZWwub2Zmc2V0TGVmdCxcblx0XHRcdHRvcCA9IC1lbC5vZmZzZXRUb3A7XG5cblx0XHQvLyBqc2hpbnQgLVcwODRcblx0XHR3aGlsZSAoZWwgPSBlbC5vZmZzZXRQYXJlbnQpIHtcblx0XHRcdGxlZnQgLT0gZWwub2Zmc2V0TGVmdDtcblx0XHRcdHRvcCAtPSBlbC5vZmZzZXRUb3A7XG5cdFx0fVxuXHRcdC8vIGpzaGludCArVzA4NFxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxlZnQ6IGxlZnQsXG5cdFx0XHR0b3A6IHRvcFxuXHRcdH07XG5cdH07XG5cblx0bWUucHJldmVudERlZmF1bHRFeGNlcHRpb24gPSBmdW5jdGlvbiAoZWwsIGV4Y2VwdGlvbnMpIHtcblx0XHRmb3IgKCB2YXIgaSBpbiBleGNlcHRpb25zICkge1xuXHRcdFx0aWYgKCBleGNlcHRpb25zW2ldLnRlc3QoZWxbaV0pICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0bWUuZXh0ZW5kKG1lLmV2ZW50VHlwZSA9IHt9LCB7XG5cdFx0dG91Y2hzdGFydDogMSxcblx0XHR0b3VjaG1vdmU6IDEsXG5cdFx0dG91Y2hlbmQ6IDEsXG5cblx0XHRtb3VzZWRvd246IDIsXG5cdFx0bW91c2Vtb3ZlOiAyLFxuXHRcdG1vdXNldXA6IDIsXG5cblx0XHRwb2ludGVyZG93bjogMyxcblx0XHRwb2ludGVybW92ZTogMyxcblx0XHRwb2ludGVydXA6IDMsXG5cblx0XHRNU1BvaW50ZXJEb3duOiAzLFxuXHRcdE1TUG9pbnRlck1vdmU6IDMsXG5cdFx0TVNQb2ludGVyVXA6IDNcblx0fSk7XG5cblx0bWUuZXh0ZW5kKG1lLmVhc2UgPSB7fSwge1xuXHRcdHF1YWRyYXRpYzoge1xuXHRcdFx0c3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCknLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHJldHVybiBrICogKCAyIC0gayApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2lyY3VsYXI6IHtcblx0XHRcdHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMSwgMC41NywgMC4xLCAxKScsXHQvLyBOb3QgcHJvcGVybHkgXCJjaXJjdWxhclwiIGJ1dCB0aGlzIGxvb2tzIGJldHRlciwgaXQgc2hvdWxkIGJlICgwLjA3NSwgMC44MiwgMC4xNjUsIDEpXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0cmV0dXJuIE1hdGguc3FydCggMSAtICggLS1rICogayApICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRiYWNrOiB7XG5cdFx0XHRzdHlsZTogJ2N1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KScsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0dmFyIGIgPSA0O1xuXHRcdFx0XHRyZXR1cm4gKCBrID0gayAtIDEgKSAqIGsgKiAoICggYiArIDEgKSAqIGsgKyBiICkgKyAxO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ym91bmNlOiB7XG5cdFx0XHRzdHlsZTogJycsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0aWYgKCAoIGsgLz0gMSApIDwgKCAxIC8gMi43NSApICkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblx0XHRcdFx0fSBlbHNlIGlmICggayA8ICggMiAvIDIuNzUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMS41IC8gMi43NSApICkgKiBrICsgMC43NTtcblx0XHRcdFx0fSBlbHNlIGlmICggayA8ICggMi41IC8gMi43NSApICkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjI1IC8gMi43NSApICkgKiBrICsgMC45Mzc1O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjYyNSAvIDIuNzUgKSApICogayArIDAuOTg0Mzc1O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlbGFzdGljOiB7XG5cdFx0XHRzdHlsZTogJycsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0dmFyIGYgPSAwLjIyLFxuXHRcdFx0XHRcdGUgPSAwLjQ7XG5cblx0XHRcdFx0aWYgKCBrID09PSAwICkgeyByZXR1cm4gMDsgfVxuXHRcdFx0XHRpZiAoIGsgPT0gMSApIHsgcmV0dXJuIDE7IH1cblxuXHRcdFx0XHRyZXR1cm4gKCBlICogTWF0aC5wb3coIDIsIC0gMTAgKiBrICkgKiBNYXRoLnNpbiggKCBrIC0gZiAvIDQgKSAqICggMiAqIE1hdGguUEkgKSAvIGYgKSArIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdG1lLnRhcCA9IGZ1bmN0aW9uIChlLCBldmVudE5hbWUpIHtcblx0XHR2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRldi5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcblx0XHRldi5wYWdlWCA9IGUucGFnZVg7XG5cdFx0ZXYucGFnZVkgPSBlLnBhZ2VZO1xuXHRcdGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXYpO1xuXHR9O1xuXG5cdG1lLmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXG5cdFx0XHRldjtcblxuXHRcdGlmICggISgvKFNFTEVDVHxJTlBVVHxURVhUQVJFQSkvaSkudGVzdCh0YXJnZXQudGFnTmFtZSkgKSB7XG5cdFx0XHRldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuXHRcdFx0ZXYuaW5pdE1vdXNlRXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSwgZS52aWV3LCAxLFxuXHRcdFx0XHR0YXJnZXQuc2NyZWVuWCwgdGFyZ2V0LnNjcmVlblksIHRhcmdldC5jbGllbnRYLCB0YXJnZXQuY2xpZW50WSxcblx0XHRcdFx0ZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LFxuXHRcdFx0XHQwLCBudWxsKTtcblxuXHRcdFx0ZXYuX2NvbnN0cnVjdGVkID0gdHJ1ZTtcblx0XHRcdHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIG1lO1xufSkoKTtcbmZ1bmN0aW9uIElTY3JvbGwgKGVsLCBvcHRpb25zKSB7XG5cdHRoaXMud3JhcHBlciA9IHR5cGVvZiBlbCA9PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XG5cdHRoaXMuc2Nyb2xsZXIgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XG5cdHRoaXMuc2Nyb2xsZXJTdHlsZSA9IHRoaXMuc2Nyb2xsZXIuc3R5bGU7XHRcdC8vIGNhY2hlIHN0eWxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcblxuXHR0aGlzLm9wdGlvbnMgPSB7XG5cblx0XHRyZXNpemVTY3JvbGxiYXJzOiB0cnVlLFxuXG5cdFx0bW91c2VXaGVlbFNwZWVkOiAyMCxcblxuXHRcdHNuYXBUaHJlc2hvbGQ6IDAuMzM0LFxuXG4vLyBJTlNFUlQgUE9JTlQ6IE9QVElPTlNcblx0XHRkaXNhYmxlUG9pbnRlciA6ICF1dGlscy5oYXNQb2ludGVyLFxuXHRcdGRpc2FibGVUb3VjaCA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgIXV0aWxzLmhhc1RvdWNoLFxuXHRcdGRpc2FibGVNb3VzZSA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgdXRpbHMuaGFzVG91Y2gsXG5cdFx0c3RhcnRYOiAwLFxuXHRcdHN0YXJ0WTogMCxcblx0XHRzY3JvbGxZOiB0cnVlLFxuXHRcdGRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ6IDUsXG5cdFx0bW9tZW50dW06IHRydWUsXG5cblx0XHRib3VuY2U6IHRydWUsXG5cdFx0Ym91bmNlVGltZTogNjAwLFxuXHRcdGJvdW5jZUVhc2luZzogJycsXG5cblx0XHRwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcblx0XHRwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbjogeyB0YWdOYW1lOiAvXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUKSQvIH0sXG5cblx0XHRIV0NvbXBvc2l0aW5nOiB0cnVlLFxuXHRcdHVzZVRyYW5zaXRpb246IHRydWUsXG5cdFx0dXNlVHJhbnNmb3JtOiB0cnVlLFxuXHRcdGJpbmRUb1dyYXBwZXI6IHR5cGVvZiB3aW5kb3cub25tb3VzZWRvd24gPT09IFwidW5kZWZpbmVkXCJcblx0fTtcblxuXHRmb3IgKCB2YXIgaSBpbiBvcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgb3B0aW9uc1xuXHR0aGlzLnRyYW5zbGF0ZVogPSB0aGlzLm9wdGlvbnMuSFdDb21wb3NpdGluZyAmJiB1dGlscy5oYXNQZXJzcGVjdGl2ZSA/ICcgdHJhbnNsYXRlWigwKScgOiAnJztcblxuXHR0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiA9IHV0aWxzLmhhc1RyYW5zaXRpb24gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb247XG5cdHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gPSB1dGlscy5oYXNUcmFuc2Zvcm0gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybTtcblxuXHR0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoO1xuXHR0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgPSAhdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggJiYgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0O1xuXG5cdC8vIElmIHlvdSB3YW50IGV2ZW50UGFzc3Rocm91Z2ggSSBoYXZlIHRvIGxvY2sgb25lIG9mIHRoZSBheGVzXG5cdHRoaXMub3B0aW9ucy5zY3JvbGxZID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyA/IGZhbHNlIDogdGhpcy5vcHRpb25zLnNjcm9sbFk7XG5cdHRoaXMub3B0aW9ucy5zY3JvbGxYID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ2hvcml6b250YWwnID8gZmFsc2UgOiB0aGlzLm9wdGlvbnMuc2Nyb2xsWDtcblxuXHQvLyBXaXRoIGV2ZW50UGFzc3Rocm91Z2ggd2UgYWxzbyBuZWVkIGxvY2tEaXJlY3Rpb24gbWVjaGFuaXNtXG5cdHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsID0gdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgJiYgIXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoO1xuXHR0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID8gMCA6IHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkO1xuXG5cdHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcgPSB0eXBlb2YgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyA9PSAnc3RyaW5nJyA/IHV0aWxzLmVhc2VbdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZ10gfHwgdXRpbHMuZWFzZS5jaXJjdWxhciA6IHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc7XG5cblx0dGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcgPSB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyA9PT0gdW5kZWZpbmVkID8gNjAgOiB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZztcblxuXHRpZiAoIHRoaXMub3B0aW9ucy50YXAgPT09IHRydWUgKSB7XG5cdFx0dGhpcy5vcHRpb25zLnRhcCA9ICd0YXAnO1xuXHR9XG5cblx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyA9PSAnc2NhbGUnICkge1xuXHRcdHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uID0gZmFsc2U7XG5cdH1cblxuXHR0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24gPyAtMSA6IDE7XG5cbi8vIElOU0VSVCBQT0lOVDogTk9STUFMSVpBVElPTlxuXG5cdC8vIFNvbWUgZGVmYXVsdHNcblx0dGhpcy54ID0gMDtcblx0dGhpcy55ID0gMDtcblx0dGhpcy5kaXJlY3Rpb25YID0gMDtcblx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblx0dGhpcy5fZXZlbnRzID0ge307XG5cbi8vIElOU0VSVCBQT0lOVDogREVGQVVMVFNcblxuXHR0aGlzLl9pbml0KCk7XG5cdHRoaXMucmVmcmVzaCgpO1xuXG5cdHRoaXMuc2Nyb2xsVG8odGhpcy5vcHRpb25zLnN0YXJ0WCwgdGhpcy5vcHRpb25zLnN0YXJ0WSk7XG5cdHRoaXMuZW5hYmxlKCk7XG59XG5cbklTY3JvbGwucHJvdG90eXBlID0ge1xuXHR2ZXJzaW9uOiAnNS4yLjAnLFxuXG5cdF9pbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5faW5pdEV2ZW50cygpO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyB8fCB0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyApIHtcblx0XHRcdHRoaXMuX2luaXRJbmRpY2F0b3JzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubW91c2VXaGVlbCApIHtcblx0XHRcdHRoaXMuX2luaXRXaGVlbCgpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnNuYXAgKSB7XG5cdFx0XHR0aGlzLl9pbml0U25hcCgpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzICkge1xuXHRcdFx0dGhpcy5faW5pdEtleXMoKTtcblx0XHR9XG5cbi8vIElOU0VSVCBQT0lOVDogX2luaXRcblxuXHR9LFxuXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLl9pbml0RXZlbnRzKHRydWUpO1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuIFx0XHR0aGlzLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xuXHRcdHRoaXMuX2V4ZWNFdmVudCgnZGVzdHJveScpO1xuXHR9LFxuXG5cdF90cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggZS50YXJnZXQgIT0gdGhpcy5zY3JvbGxlciB8fCAhdGhpcy5pc0luVHJhbnNpdGlvbiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSgpO1xuXHRcdGlmICggIXRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH1cblx0fSxcblxuXHRfc3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0Ly8gUmVhY3QgdG8gbGVmdCBtb3VzZSBidXR0b24gb25seVxuXHRcdGlmICggdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT0gMSApIHtcblx0XHQgIC8vIGZvciBidXR0b24gcHJvcGVydHlcblx0XHQgIC8vIGh0dHA6Ly91bml4cGFwYS5jb20vanMvbW91c2UuaHRtbFxuXHRcdCAgdmFyIGJ1dHRvbjtcblx0ICAgIGlmICghZS53aGljaCkge1xuXHQgICAgICAvKiBJRSBjYXNlICovXG5cdCAgICAgIGJ1dHRvbiA9IChlLmJ1dHRvbiA8IDIpID8gMCA6XG5cdCAgICAgICAgICAgICAgICgoZS5idXR0b24gPT0gNCkgPyAxIDogMik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvKiBBbGwgb3RoZXJzICovXG5cdCAgICAgIGJ1dHRvbiA9IGUuYnV0dG9uO1xuXHQgICAgfVxuXHRcdFx0aWYgKCBidXR0b24gIT09IDAgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgKHRoaXMuaW5pdGlhdGVkICYmIHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgJiYgIXV0aWxzLmlzQmFkQW5kcm9pZCAmJiAhdXRpbHMucHJldmVudERlZmF1bHRFeGNlcHRpb24oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0dmFyIHBvaW50ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSxcblx0XHRcdHBvcztcblxuXHRcdHRoaXMuaW5pdGlhdGVkXHQ9IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdO1xuXHRcdHRoaXMubW92ZWRcdFx0PSBmYWxzZTtcblx0XHR0aGlzLmRpc3RYXHRcdD0gMDtcblx0XHR0aGlzLmRpc3RZXHRcdD0gMDtcblx0XHR0aGlzLmRpcmVjdGlvblggPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uWSA9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAwO1xuXG5cdFx0dGhpcy5zdGFydFRpbWUgPSB1dGlscy5nZXRUaW1lKCk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG5cdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSgpO1xuXHRcdFx0dGhpcy5pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuXHRcdFx0cG9zID0gdGhpcy5nZXRDb21wdXRlZFBvc2l0aW9uKCk7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGUoTWF0aC5yb3VuZChwb3MueCksIE1hdGgucm91bmQocG9zLnkpKTtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0fSBlbHNlIGlmICggIXRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNBbmltYXRpbmcgKSB7XG5cdFx0XHR0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhcnRYICAgID0gdGhpcy54O1xuXHRcdHRoaXMuc3RhcnRZICAgID0gdGhpcy55O1xuXHRcdHRoaXMuYWJzU3RhcnRYID0gdGhpcy54O1xuXHRcdHRoaXMuYWJzU3RhcnRZID0gdGhpcy55O1xuXHRcdHRoaXMucG9pbnRYICAgID0gcG9pbnQucGFnZVg7XG5cdFx0dGhpcy5wb2ludFkgICAgPSBwb2ludC5wYWdlWTtcblxuXHRcdHRoaXMuX2V4ZWNFdmVudCgnYmVmb3JlU2Nyb2xsU3RhcnQnKTtcblx0fSxcblxuXHRfbW92ZTogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICkge1x0Ly8gaW5jcmVhc2VzIHBlcmZvcm1hbmNlIG9uIEFuZHJvaWQ/IFRPRE86IGNoZWNrIVxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHZhciBwb2ludFx0XHQ9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUsXG5cdFx0XHRkZWx0YVhcdFx0PSBwb2ludC5wYWdlWCAtIHRoaXMucG9pbnRYLFxuXHRcdFx0ZGVsdGFZXHRcdD0gcG9pbnQucGFnZVkgLSB0aGlzLnBvaW50WSxcblx0XHRcdHRpbWVzdGFtcFx0PSB1dGlscy5nZXRUaW1lKCksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0YWJzRGlzdFgsIGFic0Rpc3RZO1xuXG5cdFx0dGhpcy5wb2ludFhcdFx0PSBwb2ludC5wYWdlWDtcblx0XHR0aGlzLnBvaW50WVx0XHQ9IHBvaW50LnBhZ2VZO1xuXG5cdFx0dGhpcy5kaXN0WFx0XHQrPSBkZWx0YVg7XG5cdFx0dGhpcy5kaXN0WVx0XHQrPSBkZWx0YVk7XG5cdFx0YWJzRGlzdFhcdFx0PSBNYXRoLmFicyh0aGlzLmRpc3RYKTtcblx0XHRhYnNEaXN0WVx0XHQ9IE1hdGguYWJzKHRoaXMuZGlzdFkpO1xuXG5cdFx0Ly8gV2UgbmVlZCB0byBtb3ZlIGF0IGxlYXN0IDEwIHBpeGVscyBmb3IgdGhlIHNjcm9sbGluZyB0byBpbml0aWF0ZVxuXHRcdGlmICggdGltZXN0YW1wIC0gdGhpcy5lbmRUaW1lID4gMzAwICYmIChhYnNEaXN0WCA8IDEwICYmIGFic0Rpc3RZIDwgMTApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIElmIHlvdSBhcmUgc2Nyb2xsaW5nIGluIG9uZSBkaXJlY3Rpb24gbG9jayB0aGUgb3RoZXJcblx0XHRpZiAoICF0aGlzLmRpcmVjdGlvbkxvY2tlZCAmJiAhdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgKSB7XG5cdFx0XHRpZiAoIGFic0Rpc3RYID4gYWJzRGlzdFkgKyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCApIHtcblx0XHRcdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAnaCc7XHRcdC8vIGxvY2sgaG9yaXpvbnRhbGx5XG5cdFx0XHR9IGVsc2UgaWYgKCBhYnNEaXN0WSA+PSBhYnNEaXN0WCArIHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkICkge1xuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICd2JztcdFx0Ly8gbG9jayB2ZXJ0aWNhbGx5XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICduJztcdFx0Ly8gbm8gbG9ja1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT0gJ2gnICkge1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAndmVydGljYWwnICkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAnaG9yaXpvbnRhbCcgKSB7XG5cdFx0XHRcdHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZGVsdGFZID0gMDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PSAndicgKSB7XG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICdob3Jpem9udGFsJyApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyApIHtcblx0XHRcdFx0dGhpcy5pbml0aWF0ZWQgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YVggPSAwO1xuXHRcdH1cblxuXHRcdGRlbHRhWCA9IHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCA/IGRlbHRhWCA6IDA7XG5cdFx0ZGVsdGFZID0gdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCA/IGRlbHRhWSA6IDA7XG5cblx0XHRuZXdYID0gdGhpcy54ICsgZGVsdGFYO1xuXHRcdG5ld1kgPSB0aGlzLnkgKyBkZWx0YVk7XG5cblx0XHQvLyBTbG93IGRvd24gaWYgb3V0c2lkZSBvZiB0aGUgYm91bmRhcmllc1xuXHRcdGlmICggbmV3WCA+IDAgfHwgbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcblx0XHRcdG5ld1ggPSB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy54ICsgZGVsdGFYIC8gMyA6IG5ld1ggPiAwID8gMCA6IHRoaXMubWF4U2Nyb2xsWDtcblx0XHR9XG5cdFx0aWYgKCBuZXdZID4gMCB8fCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0bmV3WSA9IHRoaXMub3B0aW9ucy5ib3VuY2UgPyB0aGlzLnkgKyBkZWx0YVkgLyAzIDogbmV3WSA+IDAgPyAwIDogdGhpcy5tYXhTY3JvbGxZO1xuXHRcdH1cblxuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IGRlbHRhWCA+IDAgPyAtMSA6IGRlbHRhWCA8IDAgPyAxIDogMDtcblx0XHR0aGlzLmRpcmVjdGlvblkgPSBkZWx0YVkgPiAwID8gLTEgOiBkZWx0YVkgPCAwID8gMSA6IDA7XG5cblx0XHRpZiAoICF0aGlzLm1vdmVkICkge1xuXHRcdFx0dGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxTdGFydCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubW92ZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5fdHJhbnNsYXRlKG5ld1gsIG5ld1kpO1xuXG4vKiBSRVBMQUNFIFNUQVJUOiBfbW92ZSAqL1xuXG5cdFx0aWYgKCB0aW1lc3RhbXAgLSB0aGlzLnN0YXJ0VGltZSA+IDMwMCApIHtcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuXHRcdFx0dGhpcy5zdGFydFggPSB0aGlzLng7XG5cdFx0XHR0aGlzLnN0YXJ0WSA9IHRoaXMueTtcblx0XHR9XG5cbi8qIFJFUExBQ0UgRU5EOiBfbW92ZSAqL1xuXG5cdH0sXG5cblx0X2VuZDogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICYmICF1dGlscy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbihlLnRhcmdldCwgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHR2YXIgcG9pbnQgPSBlLmNoYW5nZWRUb3VjaGVzID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUsXG5cdFx0XHRtb21lbnR1bVgsXG5cdFx0XHRtb21lbnR1bVksXG5cdFx0XHRkdXJhdGlvbiA9IHV0aWxzLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lLFxuXHRcdFx0bmV3WCA9IE1hdGgucm91bmQodGhpcy54KSxcblx0XHRcdG5ld1kgPSBNYXRoLnJvdW5kKHRoaXMueSksXG5cdFx0XHRkaXN0YW5jZVggPSBNYXRoLmFicyhuZXdYIC0gdGhpcy5zdGFydFgpLFxuXHRcdFx0ZGlzdGFuY2VZID0gTWF0aC5hYnMobmV3WSAtIHRoaXMuc3RhcnRZKSxcblx0XHRcdHRpbWUgPSAwLFxuXHRcdFx0ZWFzaW5nID0gJyc7XG5cblx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gMDtcblx0XHR0aGlzLmluaXRpYXRlZCA9IDA7XG5cdFx0dGhpcy5lbmRUaW1lID0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0Ly8gcmVzZXQgaWYgd2UgYXJlIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcblx0XHRpZiAoIHRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZKTtcdC8vIGVuc3VyZXMgdGhhdCB0aGUgbGFzdCBwb3NpdGlvbiBpcyByb3VuZGVkXG5cblx0XHQvLyB3ZSBzY3JvbGxlZCBsZXNzIHRoYW4gMTAgcGl4ZWxzXG5cdFx0aWYgKCAhdGhpcy5tb3ZlZCApIHtcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnRhcCApIHtcblx0XHRcdFx0dXRpbHMudGFwKGUsIHRoaXMub3B0aW9ucy50YXApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5jbGljayApIHtcblx0XHRcdFx0dXRpbHMuY2xpY2soZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsQ2FuY2VsJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9ldmVudHMuZmxpY2sgJiYgZHVyYXRpb24gPCAyMDAgJiYgZGlzdGFuY2VYIDwgMTAwICYmIGRpc3RhbmNlWSA8IDEwMCApIHtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnZmxpY2snKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBzdGFydCBtb21lbnR1bSBhbmltYXRpb24gaWYgbmVlZGVkXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubW9tZW50dW0gJiYgZHVyYXRpb24gPCAzMDAgKSB7XG5cdFx0XHRtb21lbnR1bVggPSB0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgPyB1dGlscy5tb21lbnR1bSh0aGlzLngsIHRoaXMuc3RhcnRYLCBkdXJhdGlvbiwgdGhpcy5tYXhTY3JvbGxYLCB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy53cmFwcGVyV2lkdGggOiAwLCB0aGlzLm9wdGlvbnMuZGVjZWxlcmF0aW9uKSA6IHsgZGVzdGluYXRpb246IG5ld1gsIGR1cmF0aW9uOiAwIH07XG5cdFx0XHRtb21lbnR1bVkgPSB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsID8gdXRpbHMubW9tZW50dW0odGhpcy55LCB0aGlzLnN0YXJ0WSwgZHVyYXRpb24sIHRoaXMubWF4U2Nyb2xsWSwgdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMud3JhcHBlckhlaWdodCA6IDAsIHRoaXMub3B0aW9ucy5kZWNlbGVyYXRpb24pIDogeyBkZXN0aW5hdGlvbjogbmV3WSwgZHVyYXRpb246IDAgfTtcblx0XHRcdG5ld1ggPSBtb21lbnR1bVguZGVzdGluYXRpb247XG5cdFx0XHRuZXdZID0gbW9tZW50dW1ZLmRlc3RpbmF0aW9uO1xuXHRcdFx0dGltZSA9IE1hdGgubWF4KG1vbWVudHVtWC5kdXJhdGlvbiwgbW9tZW50dW1ZLmR1cmF0aW9uKTtcblx0XHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSAxO1xuXHRcdH1cblxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcCApIHtcblx0XHRcdHZhciBzbmFwID0gdGhpcy5fbmVhcmVzdFNuYXAobmV3WCwgbmV3WSk7XG5cdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gc25hcDtcblx0XHRcdHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuXHRcdFx0XHRcdE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnMobmV3WCAtIHNuYXAueCksIDEwMDApLFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnMobmV3WSAtIHNuYXAueSksIDEwMDApXG5cdFx0XHRcdFx0KSwgMzAwKTtcblx0XHRcdG5ld1ggPSBzbmFwLng7XG5cdFx0XHRuZXdZID0gc25hcC55O1xuXG5cdFx0XHR0aGlzLmRpcmVjdGlvblggPSAwO1xuXHRcdFx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblx0XHRcdGVhc2luZyA9IHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc7XG5cdFx0fVxuXG4vLyBJTlNFUlQgUE9JTlQ6IF9lbmRcblxuXHRcdGlmICggbmV3WCAhPSB0aGlzLnggfHwgbmV3WSAhPSB0aGlzLnkgKSB7XG5cdFx0XHQvLyBjaGFuZ2UgZWFzaW5nIGZ1bmN0aW9uIHdoZW4gc2Nyb2xsZXIgZ29lcyBvdXQgb2YgdGhlIGJvdW5kYXJpZXNcblx0XHRcdGlmICggbmV3WCA+IDAgfHwgbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCB8fCBuZXdZID4gMCB8fCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0XHRlYXNpbmcgPSB1dGlscy5lYXNlLnF1YWRyYXRpYztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCB0aW1lLCBlYXNpbmcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdH0sXG5cblx0X3Jlc2l6ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuXG5cdFx0dGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGF0LnJlZnJlc2goKTtcblx0XHR9LCB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyk7XG5cdH0sXG5cblx0cmVzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHRpbWUpIHtcblx0XHR2YXIgeCA9IHRoaXMueCxcblx0XHRcdHkgPSB0aGlzLnk7XG5cblx0XHR0aW1lID0gdGltZSB8fCAwO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsIHx8IHRoaXMueCA+IDAgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLnggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHR4ID0gdGhpcy5tYXhTY3JvbGxYO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgfHwgdGhpcy55ID4gMCApIHtcblx0XHRcdHkgPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHRoaXMueSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdHkgPSB0aGlzLm1heFNjcm9sbFk7XG5cdFx0fVxuXG5cdFx0aWYgKCB4ID09IHRoaXMueCAmJiB5ID09IHRoaXMueSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcpO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0ZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9LFxuXG5cdGVuYWJsZTogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH0sXG5cblx0cmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZiA9IHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQ7XHRcdC8vIEZvcmNlIHJlZmxvd1xuXG5cdFx0dGhpcy53cmFwcGVyV2lkdGhcdD0gdGhpcy53cmFwcGVyLmNsaWVudFdpZHRoO1xuXHRcdHRoaXMud3JhcHBlckhlaWdodFx0PSB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXG4vKiBSRVBMQUNFIFNUQVJUOiByZWZyZXNoICovXG5cblx0XHR0aGlzLnNjcm9sbGVyV2lkdGhcdD0gdGhpcy5zY3JvbGxlci5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLnNjcm9sbGVySGVpZ2h0XHQ9IHRoaXMuc2Nyb2xsZXIub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0dGhpcy5tYXhTY3JvbGxYXHRcdD0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLnNjcm9sbGVyV2lkdGg7XG5cdFx0dGhpcy5tYXhTY3JvbGxZXHRcdD0gdGhpcy53cmFwcGVySGVpZ2h0IC0gdGhpcy5zY3JvbGxlckhlaWdodDtcblxuLyogUkVQTEFDRSBFTkQ6IHJlZnJlc2ggKi9cblxuXHRcdHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbFx0PSB0aGlzLm9wdGlvbnMuc2Nyb2xsWCAmJiB0aGlzLm1heFNjcm9sbFggPCAwO1xuXHRcdHRoaXMuaGFzVmVydGljYWxTY3JvbGxcdFx0PSB0aGlzLm9wdGlvbnMuc2Nyb2xsWSAmJiB0aGlzLm1heFNjcm9sbFkgPCAwO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsICkge1xuXHRcdFx0dGhpcy5tYXhTY3JvbGxYID0gMDtcblx0XHRcdHRoaXMuc2Nyb2xsZXJXaWR0aCA9IHRoaXMud3JhcHBlcldpZHRoO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR0aGlzLm1heFNjcm9sbFkgPSAwO1xuXHRcdFx0dGhpcy5zY3JvbGxlckhlaWdodCA9IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHR9XG5cblx0XHR0aGlzLmVuZFRpbWUgPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblxuXHRcdHRoaXMud3JhcHBlck9mZnNldCA9IHV0aWxzLm9mZnNldCh0aGlzLndyYXBwZXIpO1xuXG5cdFx0dGhpcy5fZXhlY0V2ZW50KCdyZWZyZXNoJyk7XG5cblx0XHR0aGlzLnJlc2V0UG9zaXRpb24oKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfcmVmcmVzaFxuXG5cdH0sXG5cblx0b246IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcblx0XHRcdHRoaXMuX2V2ZW50c1t0eXBlXSA9IFtdO1xuXHRcdH1cblxuXHRcdHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGZuKTtcblx0fSxcblxuXHRvZmY6IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgaW5kZXggPSB0aGlzLl9ldmVudHNbdHlwZV0uaW5kZXhPZihmbik7XG5cblx0XHRpZiAoIGluZGV4ID4gLTEgKSB7XG5cdFx0XHR0aGlzLl9ldmVudHNbdHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH0sXG5cblx0X2V4ZWNFdmVudDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRpZiAoICF0aGlzLl9ldmVudHNbdHlwZV0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0bCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG5cblx0XHRpZiAoICFsICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdHRoaXMuX2V2ZW50c1t0eXBlXVtpXS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdH1cblx0fSxcblxuXHRzY3JvbGxCeTogZnVuY3Rpb24gKHgsIHksIHRpbWUsIGVhc2luZykge1xuXHRcdHggPSB0aGlzLnggKyB4O1xuXHRcdHkgPSB0aGlzLnkgKyB5O1xuXHRcdHRpbWUgPSB0aW1lIHx8IDA7XG5cblx0XHR0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0c2Nyb2xsVG86IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcblx0XHRlYXNpbmcgPSBlYXNpbmcgfHwgdXRpbHMuZWFzZS5jaXJjdWxhcjtcblxuXHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aW1lID4gMDtcblx0XHR2YXIgdHJhbnNpdGlvblR5cGUgPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiBlYXNpbmcuc3R5bGU7XG5cdFx0aWYgKCAhdGltZSB8fCB0cmFuc2l0aW9uVHlwZSApIHtcblx0XHRcdFx0aWYodHJhbnNpdGlvblR5cGUpIHtcblx0XHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24oZWFzaW5nLnN0eWxlKTtcblx0XHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSh0aW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlKHgsIHkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9hbmltYXRlKHgsIHksIHRpbWUsIGVhc2luZy5mbik7XG5cdFx0fVxuXHR9LFxuXG5cdHNjcm9sbFRvRWxlbWVudDogZnVuY3Rpb24gKGVsLCB0aW1lLCBvZmZzZXRYLCBvZmZzZXRZLCBlYXNpbmcpIHtcblx0XHRlbCA9IGVsLm5vZGVUeXBlID8gZWwgOiB0aGlzLnNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXG5cdFx0aWYgKCAhZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHBvcyA9IHV0aWxzLm9mZnNldChlbCk7XG5cblx0XHRwb3MubGVmdCAtPSB0aGlzLndyYXBwZXJPZmZzZXQubGVmdDtcblx0XHRwb3MudG9wICAtPSB0aGlzLndyYXBwZXJPZmZzZXQudG9wO1xuXG5cdFx0Ly8gaWYgb2Zmc2V0WC9ZIGFyZSB0cnVlIHdlIGNlbnRlciB0aGUgZWxlbWVudCB0byB0aGUgc2NyZWVuXG5cdFx0aWYgKCBvZmZzZXRYID09PSB0cnVlICkge1xuXHRcdFx0b2Zmc2V0WCA9IE1hdGgucm91bmQoZWwub2Zmc2V0V2lkdGggLyAyIC0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoIC8gMik7XG5cdFx0fVxuXHRcdGlmICggb2Zmc2V0WSA9PT0gdHJ1ZSApIHtcblx0XHRcdG9mZnNldFkgPSBNYXRoLnJvdW5kKGVsLm9mZnNldEhlaWdodCAvIDIgLSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMik7XG5cdFx0fVxuXG5cdFx0cG9zLmxlZnQgLT0gb2Zmc2V0WCB8fCAwO1xuXHRcdHBvcy50b3AgIC09IG9mZnNldFkgfHwgMDtcblxuXHRcdHBvcy5sZWZ0ID0gcG9zLmxlZnQgPiAwID8gMCA6IHBvcy5sZWZ0IDwgdGhpcy5tYXhTY3JvbGxYID8gdGhpcy5tYXhTY3JvbGxYIDogcG9zLmxlZnQ7XG5cdFx0cG9zLnRvcCAgPSBwb3MudG9wICA+IDAgPyAwIDogcG9zLnRvcCAgPCB0aGlzLm1heFNjcm9sbFkgPyB0aGlzLm1heFNjcm9sbFkgOiBwb3MudG9wO1xuXG5cdFx0dGltZSA9IHRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aW1lID09PSBudWxsIHx8IHRpbWUgPT09ICdhdXRvJyA/IE1hdGgubWF4KE1hdGguYWJzKHRoaXMueC1wb3MubGVmdCksIE1hdGguYWJzKHRoaXMueS1wb3MudG9wKSkgOiB0aW1lO1xuXG5cdFx0dGhpcy5zY3JvbGxUbyhwb3MubGVmdCwgcG9zLnRvcCwgdGltZSwgZWFzaW5nKTtcblx0fSxcblxuXHRfdHJhbnNpdGlvblRpbWU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblxuXHRcdHZhciBkdXJhdGlvblByb3AgPSB1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247XG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSB0aW1lICsgJ21zJztcblxuXHRcdGlmICggIXRpbWUgJiYgdXRpbHMuaXNCYWRBbmRyb2lkICkge1xuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMC4wMDAxbXMnO1xuXHRcdFx0Ly8gcmVtb3ZlIDAuMDAwMW1zXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRyQUYoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHNlbGYuc2Nyb2xsZXJTdHlsZVtkdXJhdGlvblByb3BdID09PSAnMC4wMDAxbXMnKSB7XG5cdFx0XHRcdFx0c2VsZi5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMHMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblxuXHRcdGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcnNbaV0udHJhbnNpdGlvblRpbWUodGltZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1lXG5cblx0fSxcblxuXHRfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBmdW5jdGlvbiAoZWFzaW5nKSB7XG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XG5cblxuXHRcdGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcnNbaV0udHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKGVhc2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvblxuXG5cdH0sXG5cblx0X3RyYW5zbGF0ZTogZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG5cbi8qIFJFUExBQ0UgU1RBUlQ6IF90cmFuc2xhdGUgKi9cblxuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCcgKyB5ICsgJ3B4KScgKyB0aGlzLnRyYW5zbGF0ZVo7XG5cbi8qIFJFUExBQ0UgRU5EOiBfdHJhbnNsYXRlICovXG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0eCA9IE1hdGgucm91bmQoeCk7XG5cdFx0XHR5ID0gTWF0aC5yb3VuZCh5KTtcblx0XHRcdHRoaXMuc2Nyb2xsZXJTdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0XHR0aGlzLnNjcm9sbGVyU3R5bGUudG9wID0geSArICdweCc7XG5cdFx0fVxuXG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXG5cblx0aWYgKCB0aGlzLmluZGljYXRvcnMgKSB7XG5cdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JzW2ldLnVwZGF0ZVBvc2l0aW9uKCk7XG5cdFx0fVxuXHR9XG5cblxuLy8gSU5TRVJUIFBPSU5UOiBfdHJhbnNsYXRlXG5cblx0fSxcblxuXHRfaW5pdEV2ZW50czogZnVuY3Rpb24gKHJlbW92ZSkge1xuXHRcdHZhciBldmVudFR5cGUgPSByZW1vdmUgPyB1dGlscy5yZW1vdmVFdmVudCA6IHV0aWxzLmFkZEV2ZW50LFxuXHRcdFx0dGFyZ2V0ID0gdGhpcy5vcHRpb25zLmJpbmRUb1dyYXBwZXIgPyB0aGlzLndyYXBwZXIgOiB3aW5kb3c7XG5cblx0XHRldmVudFR5cGUod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzKTtcblx0XHRldmVudFR5cGUod2luZG93LCAncmVzaXplJywgdGhpcyk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5jbGljayApIHtcblx0XHRcdGV2ZW50VHlwZSh0aGlzLndyYXBwZXIsICdjbGljaycsIHRoaXMsIHRydWUpO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlTW91c2UgKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCAnbW91c2Vkb3duJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAnbW91c2Vtb3ZlJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAnbW91c2VjYW5jZWwnLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICdtb3VzZXVwJywgdGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKCB1dGlscy5oYXNQb2ludGVyICYmICF0aGlzLm9wdGlvbnMuZGlzYWJsZVBvaW50ZXIgKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJkb3duJyksIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmNhbmNlbCcpLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcnVwJyksIHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmICggdXRpbHMuaGFzVG91Y2ggJiYgIXRoaXMub3B0aW9ucy5kaXNhYmxlVG91Y2ggKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ3RvdWNobW92ZScsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAndG91Y2hlbmQnLCB0aGlzKTtcblx0XHR9XG5cblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ3RyYW5zaXRpb25lbmQnLCB0aGlzKTtcblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0aGlzKTtcblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ29UcmFuc2l0aW9uRW5kJywgdGhpcyk7XG5cdFx0ZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICdNU1RyYW5zaXRpb25FbmQnLCB0aGlzKTtcblx0fSxcblxuXHRnZXRDb21wdXRlZFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG1hdHJpeCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuc2Nyb2xsZXIsIG51bGwpLFxuXHRcdFx0eCwgeTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybSApIHtcblx0XHRcdG1hdHJpeCA9IG1hdHJpeFt1dGlscy5zdHlsZS50cmFuc2Zvcm1dLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XG5cdFx0XHR4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XG5cdFx0XHR5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHggPSArbWF0cml4LmxlZnQucmVwbGFjZSgvW14tXFxkLl0vZywgJycpO1xuXHRcdFx0eSA9ICttYXRyaXgudG9wLnJlcGxhY2UoL1teLVxcZC5dL2csICcnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4geyB4OiB4LCB5OiB5IH07XG5cdH0sXG5cdF9pbml0SW5kaWNhdG9yczogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBpbnRlcmFjdGl2ZSA9IHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZVNjcm9sbGJhcnMsXG5cdFx0XHRjdXN0b21TdHlsZSA9IHR5cGVvZiB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyAhPSAnc3RyaW5nJyxcblx0XHRcdGluZGljYXRvcnMgPSBbXSxcblx0XHRcdGluZGljYXRvcjtcblxuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdHRoaXMuaW5kaWNhdG9ycyA9IFtdO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyApIHtcblx0XHRcdC8vIFZlcnRpY2FsIHNjcm9sbGJhclxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsWSApIHtcblx0XHRcdFx0aW5kaWNhdG9yID0ge1xuXHRcdFx0XHRcdGVsOiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyKCd2JywgaW50ZXJhY3RpdmUsIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzKSxcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZTogaW50ZXJhY3RpdmUsXG5cdFx0XHRcdFx0ZGVmYXVsdFNjcm9sbGJhcnM6IHRydWUsXG5cdFx0XHRcdFx0Y3VzdG9tU3R5bGU6IGN1c3RvbVN0eWxlLFxuXHRcdFx0XHRcdHJlc2l6ZTogdGhpcy5vcHRpb25zLnJlc2l6ZVNjcm9sbGJhcnMsXG5cdFx0XHRcdFx0c2hyaW5rOiB0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRmYWRlOiB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMsXG5cdFx0XHRcdFx0bGlzdGVuWDogZmFsc2Vcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yLmVsKTtcblx0XHRcdFx0aW5kaWNhdG9ycy5wdXNoKGluZGljYXRvcik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhvcml6b250YWwgc2Nyb2xsYmFyXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zY3JvbGxYICkge1xuXHRcdFx0XHRpbmRpY2F0b3IgPSB7XG5cdFx0XHRcdFx0ZWw6IGNyZWF0ZURlZmF1bHRTY3JvbGxiYXIoJ2gnLCBpbnRlcmFjdGl2ZSwgdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMpLFxuXHRcdFx0XHRcdGludGVyYWN0aXZlOiBpbnRlcmFjdGl2ZSxcblx0XHRcdFx0XHRkZWZhdWx0U2Nyb2xsYmFyczogdHJ1ZSxcblx0XHRcdFx0XHRjdXN0b21TdHlsZTogY3VzdG9tU3R5bGUsXG5cdFx0XHRcdFx0cmVzaXplOiB0aGlzLm9wdGlvbnMucmVzaXplU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRzaHJpbms6IHRoaXMub3B0aW9ucy5zaHJpbmtTY3JvbGxiYXJzLFxuXHRcdFx0XHRcdGZhZGU6IHRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRsaXN0ZW5ZOiBmYWxzZVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChpbmRpY2F0b3IuZWwpO1xuXHRcdFx0XHRpbmRpY2F0b3JzLnB1c2goaW5kaWNhdG9yKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Ly8gVE9ETzogY2hlY2sgY29uY2F0IGNvbXBhdGliaWxpdHlcblx0XHRcdGluZGljYXRvcnMgPSBpbmRpY2F0b3JzLmNvbmNhdCh0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyk7XG5cdFx0fVxuXG5cdFx0Zm9yICggdmFyIGkgPSBpbmRpY2F0b3JzLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9ycy5wdXNoKCBuZXcgSW5kaWNhdG9yKHRoaXMsIGluZGljYXRvcnNbaV0pICk7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogY2hlY2sgaWYgd2UgY2FuIHVzZSBhcnJheS5tYXAgKHdpZGUgY29tcGF0aWJpbGl0eSBhbmQgcGVyZm9ybWFuY2UgaXNzdWVzKVxuXHRcdGZ1bmN0aW9uIF9pbmRpY2F0b3JzTWFwIChmbikge1xuXHRcdFx0aWYgKHRoYXQuaW5kaWNhdG9ycykge1xuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IHRoYXQuaW5kaWNhdG9ycy5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0Zm4uY2FsbCh0aGF0LmluZGljYXRvcnNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMgKSB7XG5cdFx0XHR0aGlzLm9uKCdzY3JvbGxFbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF9pbmRpY2F0b3JzTWFwKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLmZhZGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5vbignc2Nyb2xsQ2FuY2VsJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5mYWRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oJ3Njcm9sbFN0YXJ0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5mYWRlKDEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLm9uKCdiZWZvcmVTY3JvbGxTdGFydCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0X2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRoaXMuZmFkZSgxLCB0cnVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblxuXHRcdHRoaXMub24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRoaXMucmVmcmVzaCgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0X2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRkZWxldGUgdGhpcy5pbmRpY2F0b3JzO1xuXHRcdH0pO1xuXHR9LFxuXG5cdF9pbml0V2hlZWw6IGZ1bmN0aW9uICgpIHtcblx0XHR1dGlscy5hZGRFdmVudCh0aGlzLndyYXBwZXIsICd3aGVlbCcsIHRoaXMpO1xuXHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMud3JhcHBlciwgJ21vdXNld2hlZWwnLCB0aGlzKTtcblx0XHR1dGlscy5hZGRFdmVudCh0aGlzLndyYXBwZXIsICdET01Nb3VzZVNjcm9sbCcsIHRoaXMpO1xuXG5cdFx0dGhpcy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLndoZWVsVGltZW91dCk7XG5cdFx0XHR0aGlzLndoZWVsVGltZW91dCA9IG51bGw7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh0aGlzLndyYXBwZXIsICd3aGVlbCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy53cmFwcGVyLCAnbW91c2V3aGVlbCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy53cmFwcGVyLCAnRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcblx0XHR9KTtcblx0fSxcblxuXHRfd2hlZWw6IGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciB3aGVlbERlbHRhWCwgd2hlZWxEZWx0YVksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0dGhhdCA9IHRoaXM7XG5cblx0XHRpZiAoIHRoaXMud2hlZWxUaW1lb3V0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR0aGF0Ll9leGVjRXZlbnQoJ3Njcm9sbFN0YXJ0Jyk7XG5cdFx0fVxuXG5cdFx0Ly8gRXhlY3V0ZSB0aGUgc2Nyb2xsRW5kIGV2ZW50IGFmdGVyIDQwMG1zIHRoZSB3aGVlbCBzdG9wcGVkIHNjcm9sbGluZ1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLndoZWVsVGltZW91dCk7XG5cdFx0dGhpcy53aGVlbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmKCF0aGF0Lm9wdGlvbnMuc25hcCkge1xuXHRcdFx0XHR0aGF0Ll9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdFx0fVxuXHRcdFx0dGhhdC53aGVlbFRpbWVvdXQgPSB1bmRlZmluZWQ7XG5cdFx0fSwgNDAwKTtcblxuXHRcdGlmICggJ2RlbHRhWCcgaW4gZSApIHtcblx0XHRcdGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xuXHRcdFx0XHR3aGVlbERlbHRhWCA9IC1lLmRlbHRhWCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG5cdFx0XHRcdHdoZWVsRGVsdGFZID0gLWUuZGVsdGFZICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoZWVsRGVsdGFYID0gLWUuZGVsdGFYO1xuXHRcdFx0XHR3aGVlbERlbHRhWSA9IC1lLmRlbHRhWTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCAnd2hlZWxEZWx0YVgnIGluIGUgKSB7XG5cdFx0XHR3aGVlbERlbHRhWCA9IGUud2hlZWxEZWx0YVggLyAxMjAgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuXHRcdFx0d2hlZWxEZWx0YVkgPSBlLndoZWVsRGVsdGFZIC8gMTIwICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcblx0XHR9IGVsc2UgaWYgKCAnd2hlZWxEZWx0YScgaW4gZSApIHtcblx0XHRcdHdoZWVsRGVsdGFYID0gd2hlZWxEZWx0YVkgPSBlLndoZWVsRGVsdGEgLyAxMjAgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoICdkZXRhaWwnIGluIGUgKSB7XG5cdFx0XHR3aGVlbERlbHRhWCA9IHdoZWVsRGVsdGFZID0gLWUuZGV0YWlsIC8gMyAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aGVlbERlbHRhWCAqPSB0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb247XG5cdFx0d2hlZWxEZWx0YVkgKj0gdGhpcy5vcHRpb25zLmludmVydFdoZWVsRGlyZWN0aW9uO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdHdoZWVsRGVsdGFYID0gd2hlZWxEZWx0YVk7XG5cdFx0XHR3aGVlbERlbHRhWSA9IDA7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcCApIHtcblx0XHRcdG5ld1ggPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYO1xuXHRcdFx0bmV3WSA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVk7XG5cblx0XHRcdGlmICggd2hlZWxEZWx0YVggPiAwICkge1xuXHRcdFx0XHRuZXdYLS07XG5cdFx0XHR9IGVsc2UgaWYgKCB3aGVlbERlbHRhWCA8IDAgKSB7XG5cdFx0XHRcdG5ld1grKztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB3aGVlbERlbHRhWSA+IDAgKSB7XG5cdFx0XHRcdG5ld1ktLTtcblx0XHRcdH0gZWxzZSBpZiAoIHdoZWVsRGVsdGFZIDwgMCApIHtcblx0XHRcdFx0bmV3WSsrO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmdvVG9QYWdlKG5ld1gsIG5ld1kpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bmV3WCA9IHRoaXMueCArIE1hdGgucm91bmQodGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsID8gd2hlZWxEZWx0YVggOiAwKTtcblx0XHRuZXdZID0gdGhpcy55ICsgTWF0aC5yb3VuZCh0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsID8gd2hlZWxEZWx0YVkgOiAwKTtcblxuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IHdoZWVsRGVsdGFYID4gMCA/IC0xIDogd2hlZWxEZWx0YVggPCAwID8gMSA6IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25ZID0gd2hlZWxEZWx0YVkgPiAwID8gLTEgOiB3aGVlbERlbHRhWSA8IDAgPyAxIDogMDtcblxuXHRcdGlmICggbmV3WCA+IDAgKSB7XG5cdFx0XHRuZXdYID0gMDtcblx0XHR9IGVsc2UgaWYgKCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0bmV3WCA9IHRoaXMubWF4U2Nyb2xsWDtcblx0XHR9XG5cblx0XHRpZiAoIG5ld1kgPiAwICkge1xuXHRcdFx0bmV3WSA9IDA7XG5cdFx0fSBlbHNlIGlmICggbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdG5ld1kgPSB0aGlzLm1heFNjcm9sbFk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCAwKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfd2hlZWxcblx0fSxcblxuXHRfaW5pdFNuYXA6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0ge307XG5cblx0XHRpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMuc25hcCA9PSAnc3RyaW5nJyApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zbmFwID0gdGhpcy5zY3JvbGxlci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5zbmFwKTtcblx0XHR9XG5cblx0XHR0aGlzLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGkgPSAwLCBsLFxuXHRcdFx0XHRtID0gMCwgbixcblx0XHRcdFx0Y3gsIGN5LFxuXHRcdFx0XHR4ID0gMCwgeSxcblx0XHRcdFx0c3RlcFggPSB0aGlzLm9wdGlvbnMuc25hcFN0ZXBYIHx8IHRoaXMud3JhcHBlcldpZHRoLFxuXHRcdFx0XHRzdGVwWSA9IHRoaXMub3B0aW9ucy5zbmFwU3RlcFkgfHwgdGhpcy53cmFwcGVySGVpZ2h0LFxuXHRcdFx0XHRlbDtcblxuXHRcdFx0dGhpcy5wYWdlcyA9IFtdO1xuXG5cdFx0XHRpZiAoICF0aGlzLndyYXBwZXJXaWR0aCB8fCAhdGhpcy53cmFwcGVySGVpZ2h0IHx8ICF0aGlzLnNjcm9sbGVyV2lkdGggfHwgIXRoaXMuc2Nyb2xsZXJIZWlnaHQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcCA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0Y3ggPSBNYXRoLnJvdW5kKCBzdGVwWCAvIDIgKTtcblx0XHRcdFx0Y3kgPSBNYXRoLnJvdW5kKCBzdGVwWSAvIDIgKTtcblxuXHRcdFx0XHR3aGlsZSAoIHggPiAtdGhpcy5zY3JvbGxlcldpZHRoICkge1xuXHRcdFx0XHRcdHRoaXMucGFnZXNbaV0gPSBbXTtcblx0XHRcdFx0XHRsID0gMDtcblx0XHRcdFx0XHR5ID0gMDtcblxuXHRcdFx0XHRcdHdoaWxlICggeSA+IC10aGlzLnNjcm9sbGVySGVpZ2h0ICkge1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlc1tpXVtsXSA9IHtcblx0XHRcdFx0XHRcdFx0eDogTWF0aC5tYXgoeCwgdGhpcy5tYXhTY3JvbGxYKSxcblx0XHRcdFx0XHRcdFx0eTogTWF0aC5tYXgoeSwgdGhpcy5tYXhTY3JvbGxZKSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IHN0ZXBYLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHN0ZXBZLFxuXHRcdFx0XHRcdFx0XHRjeDogeCAtIGN4LFxuXHRcdFx0XHRcdFx0XHRjeTogeSAtIGN5XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHR5IC09IHN0ZXBZO1xuXHRcdFx0XHRcdFx0bCsrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHggLT0gc3RlcFg7XG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbCA9IHRoaXMub3B0aW9ucy5zbmFwO1xuXHRcdFx0XHRsID0gZWwubGVuZ3RoO1xuXHRcdFx0XHRuID0gLTE7XG5cblx0XHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGlmICggaSA9PT0gMCB8fCBlbFtpXS5vZmZzZXRMZWZ0IDw9IGVsW2ktMV0ub2Zmc2V0TGVmdCApIHtcblx0XHRcdFx0XHRcdG0gPSAwO1xuXHRcdFx0XHRcdFx0bisrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggIXRoaXMucGFnZXNbbV0gKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW21dID0gW107XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0eCA9IE1hdGgubWF4KC1lbFtpXS5vZmZzZXRMZWZ0LCB0aGlzLm1heFNjcm9sbFgpO1xuXHRcdFx0XHRcdHkgPSBNYXRoLm1heCgtZWxbaV0ub2Zmc2V0VG9wLCB0aGlzLm1heFNjcm9sbFkpO1xuXHRcdFx0XHRcdGN4ID0geCAtIE1hdGgucm91bmQoZWxbaV0ub2Zmc2V0V2lkdGggLyAyKTtcblx0XHRcdFx0XHRjeSA9IHkgLSBNYXRoLnJvdW5kKGVsW2ldLm9mZnNldEhlaWdodCAvIDIpO1xuXG5cdFx0XHRcdFx0dGhpcy5wYWdlc1ttXVtuXSA9IHtcblx0XHRcdFx0XHRcdHg6IHgsXG5cdFx0XHRcdFx0XHR5OiB5LFxuXHRcdFx0XHRcdFx0d2lkdGg6IGVsW2ldLm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBlbFtpXS5vZmZzZXRIZWlnaHQsXG5cdFx0XHRcdFx0XHRjeDogY3gsXG5cdFx0XHRcdFx0XHRjeTogY3lcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0aWYgKCB4ID4gdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0XHRcdFx0bSsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmdvVG9QYWdlKHRoaXMuY3VycmVudFBhZ2UucGFnZVggfHwgMCwgdGhpcy5jdXJyZW50UGFnZS5wYWdlWSB8fCAwLCAwKTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNuYXAgdGhyZXNob2xkIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCAlIDEgPT09IDAgKSB7XG5cdFx0XHRcdHRoaXMuc25hcFRocmVzaG9sZFggPSB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZDtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWSA9IHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWCA9IE1hdGgucm91bmQodGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYXVt0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZXS53aWR0aCAqIHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkKTtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWSA9IE1hdGgucm91bmQodGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYXVt0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZXS5oZWlnaHQgKiB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdmbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciB0aW1lID0gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcblx0XHRcdFx0XHRNYXRoLm1heChcblx0XHRcdFx0XHRcdE1hdGgubWluKE1hdGguYWJzKHRoaXMueCAtIHRoaXMuc3RhcnRYKSwgMTAwMCksXG5cdFx0XHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyh0aGlzLnkgLSB0aGlzLnN0YXJ0WSksIDEwMDApXG5cdFx0XHRcdFx0KSwgMzAwKTtcblxuXHRcdFx0dGhpcy5nb1RvUGFnZShcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZS5wYWdlWCArIHRoaXMuZGlyZWN0aW9uWCxcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZS5wYWdlWSArIHRoaXMuZGlyZWN0aW9uWSxcblx0XHRcdFx0dGltZVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSxcblxuXHRfbmVhcmVzdFNuYXA6IGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0aWYgKCAhdGhpcy5wYWdlcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4geyB4OiAwLCB5OiAwLCBwYWdlWDogMCwgcGFnZVk6IDAgfTtcblx0XHR9XG5cblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRsID0gdGhpcy5wYWdlcy5sZW5ndGgsXG5cdFx0XHRtID0gMDtcblxuXHRcdC8vIENoZWNrIGlmIHdlIGV4Y2VlZGVkIHRoZSBzbmFwIHRocmVzaG9sZFxuXHRcdGlmICggTWF0aC5hYnMoeCAtIHRoaXMuYWJzU3RhcnRYKSA8IHRoaXMuc25hcFRocmVzaG9sZFggJiZcblx0XHRcdE1hdGguYWJzKHkgLSB0aGlzLmFic1N0YXJ0WSkgPCB0aGlzLnNuYXBUaHJlc2hvbGRZICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudFBhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKCB4ID4gMCApIHtcblx0XHRcdHggPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHR4ID0gdGhpcy5tYXhTY3JvbGxYO1xuXHRcdH1cblxuXHRcdGlmICggeSA+IDAgKSB7XG5cdFx0XHR5ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB5IDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0eSA9IHRoaXMubWF4U2Nyb2xsWTtcblx0XHR9XG5cblx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRpZiAoIHggPj0gdGhpcy5wYWdlc1tpXVswXS5jeCApIHtcblx0XHRcdFx0eCA9IHRoaXMucGFnZXNbaV1bMF0ueDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bCA9IHRoaXMucGFnZXNbaV0ubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBtIDwgbDsgbSsrICkge1xuXHRcdFx0aWYgKCB5ID49IHRoaXMucGFnZXNbMF1bbV0uY3kgKSB7XG5cdFx0XHRcdHkgPSB0aGlzLnBhZ2VzWzBdW21dLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggaSA9PSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYICkge1xuXHRcdFx0aSArPSB0aGlzLmRpcmVjdGlvblg7XG5cblx0XHRcdGlmICggaSA8IDAgKSB7XG5cdFx0XHRcdGkgPSAwO1xuXHRcdFx0fSBlbHNlIGlmICggaSA+PSB0aGlzLnBhZ2VzLmxlbmd0aCApIHtcblx0XHRcdFx0aSA9IHRoaXMucGFnZXMubGVuZ3RoIC0gMTtcblx0XHRcdH1cblxuXHRcdFx0eCA9IHRoaXMucGFnZXNbaV1bMF0ueDtcblx0XHR9XG5cblx0XHRpZiAoIG0gPT0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWSApIHtcblx0XHRcdG0gKz0gdGhpcy5kaXJlY3Rpb25ZO1xuXG5cdFx0XHRpZiAoIG0gPCAwICkge1xuXHRcdFx0XHRtID0gMDtcblx0XHRcdH0gZWxzZSBpZiAoIG0gPj0gdGhpcy5wYWdlc1swXS5sZW5ndGggKSB7XG5cdFx0XHRcdG0gPSB0aGlzLnBhZ2VzWzBdLmxlbmd0aCAtIDE7XG5cdFx0XHR9XG5cblx0XHRcdHkgPSB0aGlzLnBhZ2VzWzBdW21dLnk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IHgsXG5cdFx0XHR5OiB5LFxuXHRcdFx0cGFnZVg6IGksXG5cdFx0XHRwYWdlWTogbVxuXHRcdH07XG5cdH0sXG5cblx0Z29Ub1BhZ2U6IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcblx0XHRlYXNpbmcgPSBlYXNpbmcgfHwgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZztcblxuXHRcdGlmICggeCA+PSB0aGlzLnBhZ2VzLmxlbmd0aCApIHtcblx0XHRcdHggPSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIGlmICggeCA8IDAgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHR9XG5cblx0XHRpZiAoIHkgPj0gdGhpcy5wYWdlc1t4XS5sZW5ndGggKSB7XG5cdFx0XHR5ID0gdGhpcy5wYWdlc1t4XS5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSBpZiAoIHkgPCAwICkge1xuXHRcdFx0eSA9IDA7XG5cdFx0fVxuXG5cdFx0dmFyIHBvc1ggPSB0aGlzLnBhZ2VzW3hdW3ldLngsXG5cdFx0XHRwb3NZID0gdGhpcy5wYWdlc1t4XVt5XS55O1xuXG5cdFx0dGltZSA9IHRpbWUgPT09IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5zbmFwU3BlZWQgfHwgTWF0aC5tYXgoXG5cdFx0XHRNYXRoLm1heChcblx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnMocG9zWCAtIHRoaXMueCksIDEwMDApLFxuXHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyhwb3NZIC0gdGhpcy55KSwgMTAwMClcblx0XHRcdCksIDMwMCkgOiB0aW1lO1xuXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IHtcblx0XHRcdHg6IHBvc1gsXG5cdFx0XHR5OiBwb3NZLFxuXHRcdFx0cGFnZVg6IHgsXG5cdFx0XHRwYWdlWTogeVxuXHRcdH07XG5cblx0XHR0aGlzLnNjcm9sbFRvKHBvc1gsIHBvc1ksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0bmV4dDogZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xuXHRcdHZhciB4ID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWCxcblx0XHRcdHkgPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZO1xuXG5cdFx0eCsrO1xuXG5cdFx0aWYgKCB4ID49IHRoaXMucGFnZXMubGVuZ3RoICYmIHRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHRcdHkrKztcblx0XHR9XG5cblx0XHR0aGlzLmdvVG9QYWdlKHgsIHksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0cHJldjogZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xuXHRcdHZhciB4ID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWCxcblx0XHRcdHkgPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZO1xuXG5cdFx0eC0tO1xuXG5cdFx0aWYgKCB4IDwgMCAmJiB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuXHRcdFx0eCA9IDA7XG5cdFx0XHR5LS07XG5cdFx0fVxuXG5cdFx0dGhpcy5nb1RvUGFnZSh4LCB5LCB0aW1lLCBlYXNpbmcpO1xuXHR9LFxuXG5cdF9pbml0S2V5czogZnVuY3Rpb24gKGUpIHtcblx0XHQvLyBkZWZhdWx0IGtleSBiaW5kaW5nc1xuXHRcdHZhciBrZXlzID0ge1xuXHRcdFx0cGFnZVVwOiAzMyxcblx0XHRcdHBhZ2VEb3duOiAzNCxcblx0XHRcdGVuZDogMzUsXG5cdFx0XHRob21lOiAzNixcblx0XHRcdGxlZnQ6IDM3LFxuXHRcdFx0dXA6IDM4LFxuXHRcdFx0cmlnaHQ6IDM5LFxuXHRcdFx0ZG93bjogNDBcblx0XHR9O1xuXHRcdHZhciBpO1xuXG5cdFx0Ly8gaWYgeW91IGdpdmUgbWUgY2hhcmFjdGVycyBJIGdpdmUgeW91IGtleWNvZGVcblx0XHRpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MgPT0gJ29iamVjdCcgKSB7XG5cdFx0XHRmb3IgKCBpIGluIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncyApIHtcblx0XHRcdFx0aWYgKCB0eXBlb2YgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldID09ICdzdHJpbmcnICkge1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXSA9IHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmdzID0ge307XG5cdFx0fVxuXG5cdFx0Zm9yICggaSBpbiBrZXlzICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldID0gdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldIHx8IGtleXNbaV07XG5cdFx0fVxuXG5cdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCAna2V5ZG93bicsIHRoaXMpO1xuXG5cdFx0dGhpcy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ2tleWRvd24nLCB0aGlzKTtcblx0XHR9KTtcblx0fSxcblxuXHRfa2V5OiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggIXRoaXMuZW5hYmxlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgc25hcCA9IHRoaXMub3B0aW9ucy5zbmFwLFx0Ly8gd2UgYXJlIHVzaW5nIHRoaXMgYWxvdCwgYmV0dGVyIHRvIGNhY2hlIGl0XG5cdFx0XHRuZXdYID0gc25hcCA/IHRoaXMuY3VycmVudFBhZ2UucGFnZVggOiB0aGlzLngsXG5cdFx0XHRuZXdZID0gc25hcCA/IHRoaXMuY3VycmVudFBhZ2UucGFnZVkgOiB0aGlzLnksXG5cdFx0XHRub3cgPSB1dGlscy5nZXRUaW1lKCksXG5cdFx0XHRwcmV2VGltZSA9IHRoaXMua2V5VGltZSB8fCAwLFxuXHRcdFx0YWNjZWxlcmF0aW9uID0gMC4yNTAsXG5cdFx0XHRwb3M7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG5cdFx0XHRwb3MgPSB0aGlzLmdldENvbXB1dGVkUG9zaXRpb24oKTtcblxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlKE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XG5cdFx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5rZXlBY2NlbGVyYXRpb24gPSBub3cgLSBwcmV2VGltZSA8IDIwMCA/IE1hdGgubWluKHRoaXMua2V5QWNjZWxlcmF0aW9uICsgYWNjZWxlcmF0aW9uLCA1MCkgOiAwO1xuXG5cdFx0c3dpdGNoICggZS5rZXlDb2RlICkge1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucGFnZVVwOlxuXHRcdFx0XHRpZiAoIHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdFx0XHRuZXdYICs9IHNuYXAgPyAxIDogdGhpcy53cmFwcGVyV2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3WSArPSBzbmFwID8gMSA6IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnBhZ2VEb3duOlxuXHRcdFx0XHRpZiAoIHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdFx0XHRuZXdYIC09IHNuYXAgPyAxIDogdGhpcy53cmFwcGVyV2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3WSAtPSBzbmFwID8gMSA6IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmVuZDpcblx0XHRcdFx0bmV3WCA9IHNuYXAgPyB0aGlzLnBhZ2VzLmxlbmd0aC0xIDogdGhpcy5tYXhTY3JvbGxYO1xuXHRcdFx0XHRuZXdZID0gc25hcCA/IHRoaXMucGFnZXNbMF0ubGVuZ3RoLTEgOiB0aGlzLm1heFNjcm9sbFk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MuaG9tZTpcblx0XHRcdFx0bmV3WCA9IDA7XG5cdFx0XHRcdG5ld1kgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmxlZnQ6XG5cdFx0XHRcdG5ld1ggKz0gc25hcCA/IC0xIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnVwOlxuXHRcdFx0XHRuZXdZICs9IHNuYXAgPyAxIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnJpZ2h0OlxuXHRcdFx0XHRuZXdYIC09IHNuYXAgPyAtMSA6IDUgKyB0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5kb3duOlxuXHRcdFx0XHRuZXdZIC09IHNuYXAgPyAxIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHNuYXAgKSB7XG5cdFx0XHR0aGlzLmdvVG9QYWdlKG5ld1gsIG5ld1kpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggbmV3WCA+IDAgKSB7XG5cdFx0XHRuZXdYID0gMDtcblx0XHRcdHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcblx0XHR9IGVsc2UgaWYgKCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0bmV3WCA9IHRoaXMubWF4U2Nyb2xsWDtcblx0XHRcdHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcblx0XHR9XG5cblx0XHRpZiAoIG5ld1kgPiAwICkge1xuXHRcdFx0bmV3WSA9IDA7XG5cdFx0XHR0aGlzLmtleUFjY2VsZXJhdGlvbiA9IDA7XG5cdFx0fSBlbHNlIGlmICggbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdG5ld1kgPSB0aGlzLm1heFNjcm9sbFk7XG5cdFx0XHR0aGlzLmtleUFjY2VsZXJhdGlvbiA9IDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCAwKTtcblxuXHRcdHRoaXMua2V5VGltZSA9IG5vdztcblx0fSxcblxuXHRfYW5pbWF0ZTogZnVuY3Rpb24gKGRlc3RYLCBkZXN0WSwgZHVyYXRpb24sIGVhc2luZ0ZuKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzLFxuXHRcdFx0c3RhcnRYID0gdGhpcy54LFxuXHRcdFx0c3RhcnRZID0gdGhpcy55LFxuXHRcdFx0c3RhcnRUaW1lID0gdXRpbHMuZ2V0VGltZSgpLFxuXHRcdFx0ZGVzdFRpbWUgPSBzdGFydFRpbWUgKyBkdXJhdGlvbjtcblxuXHRcdGZ1bmN0aW9uIHN0ZXAgKCkge1xuXHRcdFx0dmFyIG5vdyA9IHV0aWxzLmdldFRpbWUoKSxcblx0XHRcdFx0bmV3WCwgbmV3WSxcblx0XHRcdFx0ZWFzaW5nO1xuXG5cdFx0XHRpZiAoIG5vdyA+PSBkZXN0VGltZSApIHtcblx0XHRcdFx0dGhhdC5pc0FuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGF0Ll90cmFuc2xhdGUoZGVzdFgsIGRlc3RZKTtcblxuXHRcdFx0XHRpZiAoICF0aGF0LnJlc2V0UG9zaXRpb24odGhhdC5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuXHRcdFx0XHRcdHRoYXQuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG5vdyA9ICggbm93IC0gc3RhcnRUaW1lICkgLyBkdXJhdGlvbjtcblx0XHRcdGVhc2luZyA9IGVhc2luZ0ZuKG5vdyk7XG5cdFx0XHRuZXdYID0gKCBkZXN0WCAtIHN0YXJ0WCApICogZWFzaW5nICsgc3RhcnRYO1xuXHRcdFx0bmV3WSA9ICggZGVzdFkgLSBzdGFydFkgKSAqIGVhc2luZyArIHN0YXJ0WTtcblx0XHRcdHRoYXQuX3RyYW5zbGF0ZShuZXdYLCBuZXdZKTtcblxuXHRcdFx0aWYgKCB0aGF0LmlzQW5pbWF0aW5nICkge1xuXHRcdFx0XHRyQUYoc3RlcCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG5cdFx0c3RlcCgpO1xuXHR9LFxuXHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0XHRzd2l0Y2ggKCBlLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0b3VjaHN0YXJ0Jzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJkb3duJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckRvd24nOlxuXHRcdFx0Y2FzZSAnbW91c2Vkb3duJzpcblx0XHRcdFx0dGhpcy5fc3RhcnQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndG91Y2htb3ZlJzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJtb3ZlJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlck1vdmUnOlxuXHRcdFx0Y2FzZSAnbW91c2Vtb3ZlJzpcblx0XHRcdFx0dGhpcy5fbW92ZShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaGVuZCc6XG5cdFx0XHRjYXNlICdwb2ludGVydXAnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyVXAnOlxuXHRcdFx0Y2FzZSAnbW91c2V1cCc6XG5cdFx0XHRjYXNlICd0b3VjaGNhbmNlbCc6XG5cdFx0XHRjYXNlICdwb2ludGVyY2FuY2VsJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckNhbmNlbCc6XG5cdFx0XHRjYXNlICdtb3VzZWNhbmNlbCc6XG5cdFx0XHRcdHRoaXMuX2VuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcmllbnRhdGlvbmNoYW5nZSc6XG5cdFx0XHRjYXNlICdyZXNpemUnOlxuXHRcdFx0XHR0aGlzLl9yZXNpemUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0cmFuc2l0aW9uZW5kJzpcblx0XHRcdGNhc2UgJ3dlYmtpdFRyYW5zaXRpb25FbmQnOlxuXHRcdFx0Y2FzZSAnb1RyYW5zaXRpb25FbmQnOlxuXHRcdFx0Y2FzZSAnTVNUcmFuc2l0aW9uRW5kJzpcblx0XHRcdFx0dGhpcy5fdHJhbnNpdGlvbkVuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd3aGVlbCc6XG5cdFx0XHRjYXNlICdET01Nb3VzZVNjcm9sbCc6XG5cdFx0XHRjYXNlICdtb3VzZXdoZWVsJzpcblx0XHRcdFx0dGhpcy5fd2hlZWwoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAna2V5ZG93bic6XG5cdFx0XHRcdHRoaXMuX2tleShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjbGljayc6XG5cdFx0XHRcdGlmICggdGhpcy5lbmFibGVkICYmICFlLl9jb25zdHJ1Y3RlZCApIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyIChkaXJlY3Rpb24sIGludGVyYWN0aXZlLCB0eXBlKSB7XG5cdHZhciBzY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHRpZiAoIHR5cGUgPT09IHRydWUgKSB7XG5cdFx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5OTk5Jztcblx0XHRpbmRpY2F0b3Iuc3R5bGUuY3NzVGV4dCA9ICctd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7Ym9yZGVyLXJhZGl1czozcHgnO1xuXHR9XG5cblx0aW5kaWNhdG9yLmNsYXNzTmFtZSA9ICdpU2Nyb2xsSW5kaWNhdG9yJztcblxuXHRpZiAoIGRpcmVjdGlvbiA9PSAnaCcgKSB7XG5cdFx0aWYgKCB0eXBlID09PSB0cnVlICkge1xuXHRcdFx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgKz0gJztoZWlnaHQ6N3B4O2xlZnQ6MnB4O3JpZ2h0OjJweDtib3R0b206MCc7XG5cdFx0XHRpbmRpY2F0b3Iuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXHRcdH1cblx0XHRzY3JvbGxiYXIuY2xhc3NOYW1lID0gJ2lTY3JvbGxIb3Jpem9udGFsU2Nyb2xsYmFyJztcblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGUgPT09IHRydWUgKSB7XG5cdFx0XHRzY3JvbGxiYXIuc3R5bGUuY3NzVGV4dCArPSAnO3dpZHRoOjdweDtib3R0b206MnB4O3RvcDoycHg7cmlnaHQ6MXB4Jztcblx0XHRcdGluZGljYXRvci5zdHlsZS53aWR0aCA9ICcxMDAlJztcblx0XHR9XG5cdFx0c2Nyb2xsYmFyLmNsYXNzTmFtZSA9ICdpU2Nyb2xsVmVydGljYWxTY3JvbGxiYXInO1xuXHR9XG5cblx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgKz0gJztvdmVyZmxvdzpoaWRkZW4nO1xuXG5cdGlmICggIWludGVyYWN0aXZlICkge1xuXHRcdHNjcm9sbGJhci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXHR9XG5cblx0c2Nyb2xsYmFyLmFwcGVuZENoaWxkKGluZGljYXRvcik7XG5cblx0cmV0dXJuIHNjcm9sbGJhcjtcbn1cblxuZnVuY3Rpb24gSW5kaWNhdG9yIChzY3JvbGxlciwgb3B0aW9ucykge1xuXHR0aGlzLndyYXBwZXIgPSB0eXBlb2Ygb3B0aW9ucy5lbCA9PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5lbCkgOiBvcHRpb25zLmVsO1xuXHR0aGlzLndyYXBwZXJTdHlsZSA9IHRoaXMud3JhcHBlci5zdHlsZTtcblx0dGhpcy5pbmRpY2F0b3IgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XG5cdHRoaXMuaW5kaWNhdG9yU3R5bGUgPSB0aGlzLmluZGljYXRvci5zdHlsZTtcblx0dGhpcy5zY3JvbGxlciA9IHNjcm9sbGVyO1xuXG5cdHRoaXMub3B0aW9ucyA9IHtcblx0XHRsaXN0ZW5YOiB0cnVlLFxuXHRcdGxpc3Rlblk6IHRydWUsXG5cdFx0aW50ZXJhY3RpdmU6IGZhbHNlLFxuXHRcdHJlc2l6ZTogdHJ1ZSxcblx0XHRkZWZhdWx0U2Nyb2xsYmFyczogZmFsc2UsXG5cdFx0c2hyaW5rOiBmYWxzZSxcblx0XHRmYWRlOiBmYWxzZSxcblx0XHRzcGVlZFJhdGlvWDogMCxcblx0XHRzcGVlZFJhdGlvWTogMFxuXHR9O1xuXG5cdGZvciAoIHZhciBpIGluIG9wdGlvbnMgKSB7XG5cdFx0dGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcblx0fVxuXG5cdHRoaXMuc2l6ZVJhdGlvWCA9IDE7XG5cdHRoaXMuc2l6ZVJhdGlvWSA9IDE7XG5cdHRoaXMubWF4UG9zWCA9IDA7XG5cdHRoaXMubWF4UG9zWSA9IDA7XG5cblx0aWYgKCB0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUgKSB7XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaCApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMuaW5kaWNhdG9yLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCAndG91Y2hlbmQnLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyICkge1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQodGhpcy5pbmRpY2F0b3IsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG5cdFx0XHR1dGlscy5hZGRFdmVudCh3aW5kb3csIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcnVwJyksIHRoaXMpO1xuXHRcdH1cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlICkge1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQodGhpcy5pbmRpY2F0b3IsICdtb3VzZWRvd24nLCB0aGlzKTtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ21vdXNldXAnLCB0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIHRoaXMub3B0aW9ucy5mYWRlICkge1xuXHRcdHRoaXMud3JhcHBlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0gPSB0aGlzLnNjcm9sbGVyLnRyYW5zbGF0ZVo7XG5cdFx0dmFyIGR1cmF0aW9uUHJvcCA9IHV0aWxzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtcblx0XHR0aGlzLndyYXBwZXJTdHlsZVtkdXJhdGlvblByb3BdID0gdXRpbHMuaXNCYWRBbmRyb2lkID8gJzAuMDAwMW1zJyA6ICcwbXMnO1xuXHRcdC8vIHJlbW92ZSAwLjAwMDFtc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRpZih1dGlscy5pc0JhZEFuZHJvaWQpIHtcblx0XHRcdHJBRihmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoc2VsZi53cmFwcGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9PT0gJzAuMDAwMW1zJykge1xuXHRcdFx0XHRcdHNlbGYud3JhcHBlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMHMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy53cmFwcGVyU3R5bGUub3BhY2l0eSA9ICcwJztcblx0fVxufVxuXG5JbmRpY2F0b3IucHJvdG90eXBlID0ge1xuXHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0XHRzd2l0Y2ggKCBlLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0b3VjaHN0YXJ0Jzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJkb3duJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckRvd24nOlxuXHRcdFx0Y2FzZSAnbW91c2Vkb3duJzpcblx0XHRcdFx0dGhpcy5fc3RhcnQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndG91Y2htb3ZlJzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJtb3ZlJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlck1vdmUnOlxuXHRcdFx0Y2FzZSAnbW91c2Vtb3ZlJzpcblx0XHRcdFx0dGhpcy5fbW92ZShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaGVuZCc6XG5cdFx0XHRjYXNlICdwb2ludGVydXAnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyVXAnOlxuXHRcdFx0Y2FzZSAnbW91c2V1cCc6XG5cdFx0XHRjYXNlICd0b3VjaGNhbmNlbCc6XG5cdFx0XHRjYXNlICdwb2ludGVyY2FuY2VsJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckNhbmNlbCc6XG5cdFx0XHRjYXNlICdtb3VzZWNhbmNlbCc6XG5cdFx0XHRcdHRoaXMuX2VuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LFxuXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIHRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyApIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmZhZGVUaW1lb3V0KTtcblx0XHRcdHRoaXMuZmFkZVRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZSApIHtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMuaW5kaWNhdG9yLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy5pbmRpY2F0b3IsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh0aGlzLmluZGljYXRvciwgJ21vdXNlZG93bicsIHRoaXMpO1xuXG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaG1vdmUnLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScsIHRoaXMpO1xuXG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaGVuZCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJ1cCcpLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ21vdXNldXAnLCB0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyApIHtcblx0XHRcdHRoaXMud3JhcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcHBlcik7XG5cdFx0fVxuXHR9LFxuXG5cdF9zdGFydDogZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHR0aGlzLnRyYW5zaXRpb25UaW1lKCk7XG5cblx0XHR0aGlzLmluaXRpYXRlZCA9IHRydWU7XG5cdFx0dGhpcy5tb3ZlZCA9IGZhbHNlO1xuXHRcdHRoaXMubGFzdFBvaW50WFx0PSBwb2ludC5wYWdlWDtcblx0XHR0aGlzLmxhc3RQb2ludFlcdD0gcG9pbnQucGFnZVk7XG5cblx0XHR0aGlzLnN0YXJ0VGltZVx0PSB1dGlscy5nZXRUaW1lKCk7XG5cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZVRvdWNoICkge1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCAndG91Y2htb3ZlJywgdGhpcyk7XG5cdFx0fVxuXHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlUG9pbnRlciApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVNb3VzZSApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnYmVmb3JlU2Nyb2xsU3RhcnQnKTtcblx0fSxcblxuXHRfbW92ZTogZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlLFxuXHRcdFx0ZGVsdGFYLCBkZWx0YVksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0dGltZXN0YW1wID0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0aWYgKCAhdGhpcy5tb3ZlZCApIHtcblx0XHRcdHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnc2Nyb2xsU3RhcnQnKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vdmVkID0gdHJ1ZTtcblxuXHRcdGRlbHRhWCA9IHBvaW50LnBhZ2VYIC0gdGhpcy5sYXN0UG9pbnRYO1xuXHRcdHRoaXMubGFzdFBvaW50WCA9IHBvaW50LnBhZ2VYO1xuXG5cdFx0ZGVsdGFZID0gcG9pbnQucGFnZVkgLSB0aGlzLmxhc3RQb2ludFk7XG5cdFx0dGhpcy5sYXN0UG9pbnRZID0gcG9pbnQucGFnZVk7XG5cblx0XHRuZXdYID0gdGhpcy54ICsgZGVsdGFYO1xuXHRcdG5ld1kgPSB0aGlzLnkgKyBkZWx0YVk7XG5cblx0XHR0aGlzLl9wb3MobmV3WCwgbmV3WSk7XG5cbi8vIElOU0VSVCBQT0lOVDogaW5kaWNhdG9yLl9tb3ZlXG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0fSxcblxuXHRfZW5kOiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggIXRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ3RvdWNobW92ZScsIHRoaXMpO1xuXHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICdtb3VzZW1vdmUnLCB0aGlzKTtcblxuXHRcdGlmICggdGhpcy5zY3JvbGxlci5vcHRpb25zLnNuYXAgKSB7XG5cdFx0XHR2YXIgc25hcCA9IHRoaXMuc2Nyb2xsZXIuX25lYXJlc3RTbmFwKHRoaXMuc2Nyb2xsZXIueCwgdGhpcy5zY3JvbGxlci55KTtcblxuXHRcdFx0dmFyIHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuXHRcdFx0XHRcdE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnModGhpcy5zY3JvbGxlci54IC0gc25hcC54KSwgMTAwMCksXG5cdFx0XHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyh0aGlzLnNjcm9sbGVyLnkgLSBzbmFwLnkpLCAxMDAwKVxuXHRcdFx0XHRcdCksIDMwMCk7XG5cblx0XHRcdGlmICggdGhpcy5zY3JvbGxlci54ICE9IHNuYXAueCB8fCB0aGlzLnNjcm9sbGVyLnkgIT0gc25hcC55ICkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbGVyLmRpcmVjdGlvblggPSAwO1xuXHRcdFx0XHR0aGlzLnNjcm9sbGVyLmRpcmVjdGlvblkgPSAwO1xuXHRcdFx0XHR0aGlzLnNjcm9sbGVyLmN1cnJlbnRQYWdlID0gc25hcDtcblx0XHRcdFx0dGhpcy5zY3JvbGxlci5zY3JvbGxUbyhzbmFwLngsIHNuYXAueSwgdGltZSwgdGhpcy5zY3JvbGxlci5vcHRpb25zLmJvdW5jZUVhc2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm1vdmVkICkge1xuXHRcdFx0dGhpcy5zY3JvbGxlci5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0XHR9XG5cdH0sXG5cblx0dHJhbnNpdGlvblRpbWU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblx0XHR2YXIgZHVyYXRpb25Qcm9wID0gdXRpbHMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uO1xuXHRcdHRoaXMuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9IHRpbWUgKyAnbXMnO1xuXG5cdFx0aWYgKCAhdGltZSAmJiB1dGlscy5pc0JhZEFuZHJvaWQgKSB7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMC4wMDAxbXMnO1xuXHRcdFx0Ly8gcmVtb3ZlIDAuMDAwMW1zXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRyQUYoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHNlbGYuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9PT0gJzAuMDAwMW1zJykge1xuXHRcdFx0XHRcdHNlbGYuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9ICcwcyc7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHR0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGZ1bmN0aW9uIChlYXNpbmcpIHtcblx0XHR0aGlzLmluZGljYXRvclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XG5cdH0sXG5cblx0cmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMudHJhbnNpdGlvblRpbWUoKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggJiYgIXRoaXMub3B0aW9ucy5saXN0ZW5ZICkge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5ID0gdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWSAmJiAhdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLmRpc3BsYXkgPSB0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5ID0gdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsIHx8IHRoaXMuc2Nyb2xsZXIuaGFzVmVydGljYWxTY3JvbGwgPyAnYmxvY2snIDogJ25vbmUnO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsICYmIHRoaXMuc2Nyb2xsZXIuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR1dGlscy5hZGRDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsQm90aFNjcm9sbGJhcnMnKTtcblx0XHRcdHV0aWxzLnJlbW92ZUNsYXNzKHRoaXMud3JhcHBlciwgJ2lTY3JvbGxMb25lU2Nyb2xsYmFyJyk7XG5cblx0XHRcdGlmICggdGhpcy5vcHRpb25zLmRlZmF1bHRTY3JvbGxiYXJzICYmIHRoaXMub3B0aW9ucy5jdXN0b21TdHlsZSApIHtcblx0XHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCApIHtcblx0XHRcdFx0XHR0aGlzLndyYXBwZXIuc3R5bGUucmlnaHQgPSAnOHB4Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLndyYXBwZXIuc3R5bGUuYm90dG9tID0gJzhweCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dXRpbHMucmVtb3ZlQ2xhc3ModGhpcy53cmFwcGVyLCAnaVNjcm9sbEJvdGhTY3JvbGxiYXJzJyk7XG5cdFx0XHR1dGlscy5hZGRDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsTG9uZVNjcm9sbGJhcicpO1xuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyAmJiB0aGlzLm9wdGlvbnMuY3VzdG9tU3R5bGUgKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG5cdFx0XHRcdFx0dGhpcy53cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJzJweCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy53cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICcycHgnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHIgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1x0Ly8gZm9yY2UgcmVmcmVzaFxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCApIHtcblx0XHRcdHRoaXMud3JhcHBlcldpZHRoID0gdGhpcy53cmFwcGVyLmNsaWVudFdpZHRoO1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMucmVzaXplICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcldpZHRoID0gTWF0aC5tYXgoTWF0aC5yb3VuZCh0aGlzLndyYXBwZXJXaWR0aCAqIHRoaXMud3JhcHBlcldpZHRoIC8gKHRoaXMuc2Nyb2xsZXIuc2Nyb2xsZXJXaWR0aCB8fCB0aGlzLndyYXBwZXJXaWR0aCB8fCAxKSksIDgpO1xuXHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLndpZHRoID0gdGhpcy5pbmRpY2F0b3JXaWR0aCArICdweCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcldpZHRoID0gdGhpcy5pbmRpY2F0b3IuY2xpZW50V2lkdGg7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubWF4UG9zWCA9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5pbmRpY2F0b3JXaWR0aDtcblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdjbGlwJyApIHtcblx0XHRcdFx0dGhpcy5taW5Cb3VuZGFyeVggPSAtdGhpcy5pbmRpY2F0b3JXaWR0aCArIDg7XG5cdFx0XHRcdHRoaXMubWF4Qm91bmRhcnlYID0gdGhpcy53cmFwcGVyV2lkdGggLSA4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5taW5Cb3VuZGFyeVggPSAwO1xuXHRcdFx0XHR0aGlzLm1heEJvdW5kYXJ5WCA9IHRoaXMubWF4UG9zWDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zaXplUmF0aW9YID0gdGhpcy5vcHRpb25zLnNwZWVkUmF0aW9YIHx8ICh0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFggJiYgKHRoaXMubWF4UG9zWCAvIHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWCkpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblkgKSB7XG5cdFx0XHR0aGlzLndyYXBwZXJIZWlnaHQgPSB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMucmVzaXplICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvckhlaWdodCA9IE1hdGgubWF4KE1hdGgucm91bmQodGhpcy53cmFwcGVySGVpZ2h0ICogdGhpcy53cmFwcGVySGVpZ2h0IC8gKHRoaXMuc2Nyb2xsZXIuc2Nyb2xsZXJIZWlnaHQgfHwgdGhpcy53cmFwcGVySGVpZ2h0IHx8IDEpKSwgOCk7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5pbmRpY2F0b3JIZWlnaHQgKyAncHgnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbmRpY2F0b3JIZWlnaHQgPSB0aGlzLmluZGljYXRvci5jbGllbnRIZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubWF4UG9zWSA9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ2NsaXAnICkge1xuXHRcdFx0XHR0aGlzLm1pbkJvdW5kYXJ5WSA9IC10aGlzLmluZGljYXRvckhlaWdodCArIDg7XG5cdFx0XHRcdHRoaXMubWF4Qm91bmRhcnlZID0gdGhpcy53cmFwcGVySGVpZ2h0IC0gODtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWluQm91bmRhcnlZID0gMDtcblx0XHRcdFx0dGhpcy5tYXhCb3VuZGFyeVkgPSB0aGlzLm1heFBvc1k7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubWF4UG9zWSA9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuXHRcdFx0dGhpcy5zaXplUmF0aW9ZID0gdGhpcy5vcHRpb25zLnNwZWVkUmF0aW9ZIHx8ICh0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFkgJiYgKHRoaXMubWF4UG9zWSAvIHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWSkpO1xuXHRcdH1cblxuXHRcdHRoaXMudXBkYXRlUG9zaXRpb24oKTtcblx0fSxcblxuXHR1cGRhdGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciB4ID0gdGhpcy5vcHRpb25zLmxpc3RlblggJiYgTWF0aC5yb3VuZCh0aGlzLnNpemVSYXRpb1ggKiB0aGlzLnNjcm9sbGVyLngpIHx8IDAsXG5cdFx0XHR5ID0gdGhpcy5vcHRpb25zLmxpc3RlblkgJiYgTWF0aC5yb3VuZCh0aGlzLnNpemVSYXRpb1kgKiB0aGlzLnNjcm9sbGVyLnkpIHx8IDA7XG5cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuaWdub3JlQm91bmRhcmllcyApIHtcblx0XHRcdGlmICggeCA8IHRoaXMubWluQm91bmRhcnlYICkge1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcblx0XHRcdFx0XHR0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JXaWR0aCArIHgsIDgpO1xuXHRcdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4Jztcblx0XHRcdFx0fVxuXHRcdFx0XHR4ID0gdGhpcy5taW5Cb3VuZGFyeVg7XG5cdFx0XHR9IGVsc2UgaWYgKCB4ID4gdGhpcy5tYXhCb3VuZGFyeVggKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICkge1xuXHRcdFx0XHRcdHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLmluZGljYXRvcldpZHRoIC0gKHggLSB0aGlzLm1heFBvc1gpLCA4KTtcblx0XHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG5cdFx0XHRcdFx0eCA9IHRoaXMubWF4UG9zWCArIHRoaXMuaW5kaWNhdG9yV2lkdGggLSB0aGlzLndpZHRoO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHggPSB0aGlzLm1heEJvdW5kYXJ5WDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICYmIHRoaXMud2lkdGggIT0gdGhpcy5pbmRpY2F0b3JXaWR0aCApIHtcblx0XHRcdFx0dGhpcy53aWR0aCA9IHRoaXMuaW5kaWNhdG9yV2lkdGg7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB5IDwgdGhpcy5taW5Cb3VuZGFyeVkgKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICkge1xuXHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JIZWlnaHQgKyB5ICogMywgOCk7XG5cdFx0XHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0eSA9IHRoaXMubWluQm91bmRhcnlZO1xuXHRcdFx0fSBlbHNlIGlmICggeSA+IHRoaXMubWF4Qm91bmRhcnlZICkge1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcblx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IE1hdGgubWF4KHRoaXMuaW5kaWNhdG9ySGVpZ2h0IC0gKHkgLSB0aGlzLm1heFBvc1kpICogMywgOCk7XG5cdFx0XHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG5cdFx0XHRcdFx0eSA9IHRoaXMubWF4UG9zWSArIHRoaXMuaW5kaWNhdG9ySGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eSA9IHRoaXMubWF4Qm91bmRhcnlZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgJiYgdGhpcy5oZWlnaHQgIT0gdGhpcy5pbmRpY2F0b3JIZWlnaHQgKSB7XG5cdFx0XHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5pbmRpY2F0b3JIZWlnaHQ7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblxuXHRcdGlmICggdGhpcy5zY3JvbGxlci5vcHRpb25zLnVzZVRyYW5zZm9ybSApIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNmb3JtXSA9ICd0cmFuc2xhdGUoJyArIHggKyAncHgsJyArIHkgKyAncHgpJyArIHRoaXMuc2Nyb2xsZXIudHJhbnNsYXRlWjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXHRcdH1cblx0fSxcblxuXHRfcG9zOiBmdW5jdGlvbiAoeCwgeSkge1xuXHRcdGlmICggeCA8IDAgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB4ID4gdGhpcy5tYXhQb3NYICkge1xuXHRcdFx0eCA9IHRoaXMubWF4UG9zWDtcblx0XHR9XG5cblx0XHRpZiAoIHkgPCAwICkge1xuXHRcdFx0eSA9IDA7XG5cdFx0fSBlbHNlIGlmICggeSA+IHRoaXMubWF4UG9zWSApIHtcblx0XHRcdHkgPSB0aGlzLm1heFBvc1k7XG5cdFx0fVxuXG5cdFx0eCA9IHRoaXMub3B0aW9ucy5saXN0ZW5YID8gTWF0aC5yb3VuZCh4IC8gdGhpcy5zaXplUmF0aW9YKSA6IHRoaXMuc2Nyb2xsZXIueDtcblx0XHR5ID0gdGhpcy5vcHRpb25zLmxpc3RlblkgPyBNYXRoLnJvdW5kKHkgLyB0aGlzLnNpemVSYXRpb1kpIDogdGhpcy5zY3JvbGxlci55O1xuXG5cdFx0dGhpcy5zY3JvbGxlci5zY3JvbGxUbyh4LCB5KTtcblx0fSxcblxuXHRmYWRlOiBmdW5jdGlvbiAodmFsLCBob2xkKSB7XG5cdFx0aWYgKCBob2xkICYmICF0aGlzLnZpc2libGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuZmFkZVRpbWVvdXQpO1xuXHRcdHRoaXMuZmFkZVRpbWVvdXQgPSBudWxsO1xuXG5cdFx0dmFyIHRpbWUgPSB2YWwgPyAyNTAgOiA1MDAsXG5cdFx0XHRkZWxheSA9IHZhbCA/IDAgOiAzMDA7XG5cblx0XHR2YWwgPSB2YWwgPyAnMScgOiAnMCc7XG5cblx0XHR0aGlzLndyYXBwZXJTdHlsZVt1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb25dID0gdGltZSArICdtcyc7XG5cblx0XHR0aGlzLmZhZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0dGhpcy53cmFwcGVyU3R5bGUub3BhY2l0eSA9IHZhbDtcblx0XHRcdHRoaXMudmlzaWJsZSA9ICt2YWw7XG5cdFx0fSkuYmluZCh0aGlzLCB2YWwpLCBkZWxheSk7XG5cdH1cbn07XG5cbklTY3JvbGwudXRpbHMgPSB1dGlscztcblxuaWYgKCB0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzICkge1xuXHRtb2R1bGUuZXhwb3J0cyA9IElTY3JvbGw7XG59IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAgICAgZGVmaW5lKCBmdW5jdGlvbiAoKSB7IHJldHVybiBJU2Nyb2xsOyB9ICk7XG59IGVsc2Uge1xuXHR3aW5kb3cuSVNjcm9sbCA9IElTY3JvbGw7XG59XG5cbn0pKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgpO1xuIiwiXG5pbXBvcnQgJy4vcGlja2VyLmNzcydcbmltcG9ydCBJU2Nyb2xsIGZyb20gJ2lzY3JvbGwnXG5cbmxldCBtb2RhbCwgcGlja2VyQ29udGFpbmVyLCBwaWNrZXJIZWFkZXIsIHBpY2tlckJvZHksIHBpY2tlckNvbmZpcm0sIHBpY2tlckNhbmNlbCwgcGlja2VyQmFyLCBwaWNrZXJTY3JvbGxlclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWNrZXIgKGNvbmZpZ3MpIHtcbiAgdGhpcy5jb25maXJtQ2FsbGJhY2sgPSBjb25maWdzLmNvbmZpcm1DYWxsYmFja1xuICB0aGlzLmNhbmNlbENhbGxiYWNrID0gY29uZmlncy5jYW5jZWxDYWxsYmFja1xuICB0aGlzLmRhdGEgPSBjb25maWdzLmRhdGFcbiAgdGhpcy5jb2x1bW4gPSB0aGlzLl9nZXRDb2x1bW5MZW5ndGgodGhpcy5kYXRhKVxuICB0aGlzLnNlbmRlciA9IGNvbmZpZ3Muc2VuZGVyXG4gIHRoaXMucGlja2VyU2Nyb2xsZXJzID0gW11cbiAgdGhpcy5pdGVtU2Nyb2xscyA9IFtdXG4gIHRoaXMuZm9ybWF0ZVJlc3VsdCA9IGNvbmZpZ3MuZm9ybWF0ZVJlc3VsdFxuICB0aGlzLnJlc3VsdEluZGV4cyA9IGNvbmZpZ3MuZGVmYXVsdEluZGV4cyB8fCB0aGlzLl9nZXREZWZhdWx0SW5kZXgoKVxuICB0aGlzLl9pbml0KClcbn1cblxuUGlja2VyLnByb3RvdHlwZSA9IHtcblxuICBfaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2NyZWF0ZSgpXG4gICAgdGhpcy5fYWRkRXZlbnQoKVxuICAgIHRoaXMuX2NyZWF0ZUNvbHVtbigpXG4gICAgdGhpcy5zaG93KClcbiAgICB0aGlzLl9jcmVhdGVTY3JvbGwoKVxuICAgIHRoaXMuX2luaXRJbmRleCgpXG4gIH0sXG5cbiAgX2NyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICghbW9kYWwpIHtcbiAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlciB3ZWV4LXBpY2tlci1maXhlZCdcbiAgICAgIHBpY2tlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwaWNrZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcGlja2VyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIHBpY2tlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwaWNrZXJCYXIuY2xhc3NOYW1lID0gJ3dlZXgtcGlja2VyLWJhcidcblxuICAgICAgcGlja2VyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1jb250ZW50J1xuICAgICAgcGlja2VySGVhZGVyLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1oZWFkZXInXG4gICAgICBwaWNrZXJCb2R5LmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1ib2R5J1xuICAgICAgcGlja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpY2tlckhlYWRlcilcbiAgICAgIHBpY2tlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwaWNrZXJCb2R5KVxuICAgICAgcGlja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpY2tlckJhcilcbiAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHBpY2tlckNvbnRhaW5lcilcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpXG4gICAgfVxuXG4gICAgcGlja2VySGVhZGVyLmlubmVySFRNTCA9ICcnXG4gICAgcGlja2VyQ29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHBpY2tlckNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHBpY2tlckNvbmZpcm0uY2xhc3NOYW1lID0gJ3dlZXgtcGlja2VyLWNvbmZpcm0nXG4gICAgcGlja2VyQ2FuY2VsLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1jYW5jZWwnXG4gICAgcGlja2VyQ29uZmlybS5pbm5lclRleHQgPSAn56Gu5a6aJ1xuICAgIHBpY2tlckNhbmNlbC5pbm5lclRleHQgPSAn5Y+W5raIJ1xuICAgIHBpY2tlckhlYWRlci5hcHBlbmRDaGlsZChwaWNrZXJDYW5jZWwpXG4gICAgcGlja2VySGVhZGVyLmFwcGVuZENoaWxkKHBpY2tlckNvbmZpcm0pXG4gIH0sXG5cbiAgX2dldENvbHVtbkxlbmd0aDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIChkYXRhWzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkYXRhLmxlbmd0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICB9LFxuXG4gIF9nZXREZWZhdWx0SW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW47IGkrKykge1xuICAgICAgcmVzdWx0WzBdID0gMFxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG5cbiAgX2dldEN1cnJlbnRJbmRleDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJlc3VsdEluZGV4cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdEluZGV4c1swXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdEluZGV4c1xuICAgIH1cbiAgfSxcblxuICBfYWRkRXZlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb25maXJtQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleHMgPSB0aGlzLl9nZXRDdXJyZW50SW5kZXgoKVxuICAgICAgY29uc3QgcmVzdWx0RGF0YSA9IHRoaXMuZm9ybWF0ZVJlc3VsdCA/IHRoaXMuZm9ybWF0ZVJlc3VsdCh0aGlzLmRhdGEsIGluZGV4cykgOiBpbmRleHNcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgcmVzdWx0OiAnc3VjY2VzcycsXG4gICAgICAgIGRhdGE6IHJlc3VsdERhdGFcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb25maXJtQ2FsbGJhY2sgJiYgdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKHRoaXMuY29uZmlybUNhbGxiYWNrLCByZXN1bHQpXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYW5jZWxDYWxsYmFjayAmJiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2sodGhpcy5jYW5jZWxDYWxsYmFjaylcbiAgICAgIGNvbnN0IGluZGV4cyA9IHRoaXMuX2dldEN1cnJlbnRJbmRleCgpXG4gICAgICBjb25zdCByZXN1bHREYXRhID0gdGhpcy5mb3JtYXRlUmVzdWx0ID8gdGhpcy5mb3JtYXRlUmVzdWx0KHRoaXMuZGF0YSwgaW5kZXhzKSA6IGluZGV4c1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICByZXN1bHQ6ICdjYW5jZWwnLFxuICAgICAgICBkYXRhOiByZXN1bHREYXRhXG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpcm1DYWxsYmFjayAmJiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2sodGhpcy5jb25maXJtQ2FsbGJhY2ssIHJlc3VsdClcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuXG4gICAgcGlja2VyQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmZpcm1DYWxsYmFjaylcbiAgICBwaWNrZXJDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxDYWxsYmFjaylcbiAgfSxcblxuICBfY3JlYXRlQ29sdW1uOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmRhdGFcbiAgICBwaWNrZXJCb2R5LmlubmVySFRNTCA9ICcnXG4gICAgaWYgKHRoaXMuY29sdW1uID4gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9jcmVhdGVJdGVtKGl0ZW1zW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUl0ZW0oaXRlbXMpXG4gICAgfVxuICB9LFxuXG4gIF9jcmVhdGVJdGVtOiBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICBwaWNrZXJTY3JvbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgZm9yIChsZXQgaSA9IC0yOyBpIDwgaXRlbXMubGVuZ3RoICsgMjsgaSsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGNlbGwuaW5uZXJUZXh0ID0gJydcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjZWxsLmlubmVyVGV4dCA9IGl0ZW1zW2ldXG4gICAgICB9XG4gICAgICB1aS5hcHBlbmRDaGlsZChjZWxsKVxuICAgIH1cbiAgICBwaWNrZXJTY3JvbGxlci5jbGFzc05hbWUgPSAnd2VleC1waWNrZXItc2Nyb2xsZXInXG4gICAgcGlja2VyU2Nyb2xsZXIuYXBwZW5kQ2hpbGQodWkpXG4gICAgcGlja2VyQm9keS5hcHBlbmRDaGlsZChwaWNrZXJTY3JvbGxlcilcbiAgICB0aGlzLnBpY2tlclNjcm9sbGVycy5wdXNoKHBpY2tlclNjcm9sbGVyKVxuICB9LFxuXG4gIF9jcmVhdGVTY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5waWNrZXJTY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgaXRlbVNjcm9sbCA9IG5ldyBJU2Nyb2xsKHNlbGYucGlja2VyU2Nyb2xsZXJzW2ldLCB7XG4gICAgICAgICAgc25hcDogJ2xpJyxcbiAgICAgICAgICBtb3VzZVdoZWVsOiB0cnVlLFxuICAgICAgICAgIHZTY3JvbGxiYXI6IGZhbHNlLFxuICAgICAgICAgIGhTY3JvbGxiYXI6IGZhbHNlLFxuICAgICAgICAgIGhTY3JvbGw6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5pdGVtU2Nyb2xscy5wdXNoKGl0ZW1TY3JvbGwpXG5cbiAgICAgICAgaXRlbVNjcm9sbC5vbignc2Nyb2xsRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHlJbmRleCA9IE1hdGguYWJzKE1hdGgucm91bmQoLTEgKiB0aGlzLnkgLyBzZWxmLml0ZW1IZWlnaHQpKVxuICAgICAgICAgIHNlbGYucmVzdWx0SW5kZXhzW2luZGV4XSA9IHlJbmRleFxuICAgICAgICB9KVxuICAgICAgfSkoaSlcbiAgICB9XG4gIH0sXG5cbiAgX2luaXRJbmRleDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5pdGVtSGVpZ2h0ID0gcGlja2VyQm9keS5vZmZzZXRIZWlnaHQgLyA1XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBpY2tlclNjcm9sbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBzZWxmLml0ZW1TY3JvbGxzW2luZGV4XS5nb1RvUGFnZSgwLCBzZWxmLnJlc3VsdEluZGV4c1tpbmRleF0sIDApXG4gICAgICB9KShpKVxuICAgIH1cbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gJ3dlZXgtcGlja2VyIHdlZXgtcGlja2VyLWZpeGVkIHdlZXgtcGlja2VyLW9wZW4nXG4gIH0sXG5cbiAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlciB3ZWV4LXBpY2tlci1maXhlZCB3ZWV4LXBpY2tlci1jbG9zZSdcbiAgfVxufVxuXG4iLCJleHBvcnQgeyBob29rcywgc2V0SG9va0NhbGxiYWNrIH07XG5cbnZhciBob29rQ2FsbGJhY2s7XG5cbmZ1bmN0aW9uIGhvb2tzICgpIHtcbiAgICByZXR1cm4gaG9va0NhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbi8vIFRoaXMgaXMgZG9uZSB0byByZWdpc3RlciB0aGUgbWV0aG9kIGNhbGxlZCB3aXRoIG1vbWVudCgpXG4vLyB3aXRob3V0IGNyZWF0aW5nIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbmZ1bmN0aW9uIHNldEhvb2tDYWxsYmFjayAoY2FsbGJhY2spIHtcbiAgICBob29rQ2FsbGJhY2sgPSBjYWxsYmFjaztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXJyYXkoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBBcnJheSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3QoaW5wdXQpIHtcbiAgICAvLyBJRTggd2lsbCB0cmVhdCB1bmRlZmluZWQgYW5kIG51bGwgYXMgb2JqZWN0IGlmIGl0IHdhc24ndCBmb3JcbiAgICAvLyBpbnB1dCAhPSBudWxsXG4gICAgcmV0dXJuIGlucHV0ICE9IG51bGwgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09iamVjdEVtcHR5KG9iaikge1xuICAgIHZhciBrO1xuICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgLy8gZXZlbiBpZiBpdHMgbm90IG93biBwcm9wZXJ0eSBJJ2Qgc3RpbGwgY2FsbCBpdCBub24tZW1wdHlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtYmVyKGlucHV0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBEYXRlIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcChhcnIsIGZuKSB7XG4gICAgdmFyIHJlcyA9IFtdLCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgcmVzLnB1c2goZm4oYXJyW2ldLCBpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNPd25Qcm9wKGEsIGIpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGIpO1xufVxuIiwiaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi9oYXMtb3duLXByb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQoYSwgYikge1xuICAgIGZvciAodmFyIGkgaW4gYikge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChiLCBpKSkge1xuICAgICAgICAgICAgYVtpXSA9IGJbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzT3duUHJvcChiLCAndG9TdHJpbmcnKSkge1xuICAgICAgICBhLnRvU3RyaW5nID0gYi50b1N0cmluZztcbiAgICB9XG5cbiAgICBpZiAoaGFzT3duUHJvcChiLCAndmFsdWVPZicpKSB7XG4gICAgICAgIGEudmFsdWVPZiA9IGIudmFsdWVPZjtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUxvY2FsT3JVVEMgfSBmcm9tICcuL2Zyb20tYW55dGhpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVVRDIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCB0cnVlKS51dGMoKTtcbn1cbiIsImZ1bmN0aW9uIGRlZmF1bHRQYXJzaW5nRmxhZ3MoKSB7XG4gICAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxuICAgIHJldHVybiB7XG4gICAgICAgIGVtcHR5ICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICB1bnVzZWRUb2tlbnMgICAgOiBbXSxcbiAgICAgICAgdW51c2VkSW5wdXQgICAgIDogW10sXG4gICAgICAgIG92ZXJmbG93ICAgICAgICA6IC0yLFxuICAgICAgICBjaGFyc0xlZnRPdmVyICAgOiAwLFxuICAgICAgICBudWxsSW5wdXQgICAgICAgOiBmYWxzZSxcbiAgICAgICAgaW52YWxpZE1vbnRoICAgIDogbnVsbCxcbiAgICAgICAgaW52YWxpZEZvcm1hdCAgIDogZmFsc2UsXG4gICAgICAgIHVzZXJJbnZhbGlkYXRlZCA6IGZhbHNlLFxuICAgICAgICBpc28gICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgcGFyc2VkRGF0ZVBhcnRzIDogW10sXG4gICAgICAgIG1lcmlkaWVtICAgICAgICA6IG51bGxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJzaW5nRmxhZ3MobSkge1xuICAgIGlmIChtLl9wZiA9PSBudWxsKSB7XG4gICAgICAgIG0uX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuICAgIH1cbiAgICByZXR1cm4gbS5fcGY7XG59XG4iLCJ2YXIgc29tZTtcbmlmIChBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgIHNvbWUgPSBBcnJheS5wcm90b3R5cGUuc29tZTtcbn0gZWxzZSB7XG4gICAgc29tZSA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XG4gICAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0ICYmIGZ1bi5jYWxsKHRoaXMsIHRbaV0sIGksIHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgc29tZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgZXh0ZW5kIGZyb20gJy4uL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgeyBjcmVhdGVVVEMgfSBmcm9tICcuL3V0Yyc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCBzb21lIGZyb20gJy4uL3V0aWxzL3NvbWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChtKSB7XG4gICAgaWYgKG0uX2lzVmFsaWQgPT0gbnVsbCkge1xuICAgICAgICB2YXIgZmxhZ3MgPSBnZXRQYXJzaW5nRmxhZ3MobSk7XG4gICAgICAgIHZhciBwYXJzZWRQYXJ0cyA9IHNvbWUuY2FsbChmbGFncy5wYXJzZWREYXRlUGFydHMsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAhPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGlzTm93VmFsaWQgPSAhaXNOYU4obS5fZC5nZXRUaW1lKCkpICYmXG4gICAgICAgICAgICBmbGFncy5vdmVyZmxvdyA8IDAgJiZcbiAgICAgICAgICAgICFmbGFncy5lbXB0eSAmJlxuICAgICAgICAgICAgIWZsYWdzLmludmFsaWRNb250aCAmJlxuICAgICAgICAgICAgIWZsYWdzLmludmFsaWRXZWVrZGF5ICYmXG4gICAgICAgICAgICAhZmxhZ3MubnVsbElucHV0ICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZEZvcm1hdCAmJlxuICAgICAgICAgICAgIWZsYWdzLnVzZXJJbnZhbGlkYXRlZCAmJlxuICAgICAgICAgICAgKCFmbGFncy5tZXJpZGllbSB8fCAoZmxhZ3MubWVyaWRpZW0gJiYgcGFyc2VkUGFydHMpKTtcblxuICAgICAgICBpZiAobS5fc3RyaWN0KSB7XG4gICAgICAgICAgICBpc05vd1ZhbGlkID0gaXNOb3dWYWxpZCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLmNoYXJzTGVmdE92ZXIgPT09IDAgJiZcbiAgICAgICAgICAgICAgICBmbGFncy51bnVzZWRUb2tlbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MuYmlnSG91ciA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5pc0Zyb3plbiA9PSBudWxsIHx8ICFPYmplY3QuaXNGcm96ZW4obSkpIHtcbiAgICAgICAgICAgIG0uX2lzVmFsaWQgPSBpc05vd1ZhbGlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzTm93VmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG0uX2lzVmFsaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkIChmbGFncykge1xuICAgIHZhciBtID0gY3JlYXRlVVRDKE5hTik7XG4gICAgaWYgKGZsYWdzICE9IG51bGwpIHtcbiAgICAgICAgZXh0ZW5kKGdldFBhcnNpbmdGbGFncyhtKSwgZmxhZ3MpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLnVzZXJJbnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1VuZGVmaW5lZChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gdm9pZCAwO1xufVxuIiwiaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuLi91dGlscy9oYXMtb3duLXByb3AnO1xuaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJy4uL3V0aWxzL2lzLXVuZGVmaW5lZCc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcblxuLy8gUGx1Z2lucyB0aGF0IGFkZCBwcm9wZXJ0aWVzIHNob3VsZCBhbHNvIGFkZCB0aGUga2V5IGhlcmUgKG51bGwgdmFsdWUpLFxuLy8gc28gd2UgY2FuIHByb3Blcmx5IGNsb25lIG91cnNlbHZlcy5cbnZhciBtb21lbnRQcm9wZXJ0aWVzID0gaG9va3MubW9tZW50UHJvcGVydGllcyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY29weUNvbmZpZyh0bywgZnJvbSkge1xuICAgIHZhciBpLCBwcm9wLCB2YWw7XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2lzQU1vbWVudE9iamVjdCkpIHtcbiAgICAgICAgdG8uX2lzQU1vbWVudE9iamVjdCA9IGZyb20uX2lzQU1vbWVudE9iamVjdDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pKSkge1xuICAgICAgICB0by5faSA9IGZyb20uX2k7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fZikpIHtcbiAgICAgICAgdG8uX2YgPSBmcm9tLl9mO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2wpKSB7XG4gICAgICAgIHRvLl9sID0gZnJvbS5fbDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9zdHJpY3QpKSB7XG4gICAgICAgIHRvLl9zdHJpY3QgPSBmcm9tLl9zdHJpY3Q7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fdHptKSkge1xuICAgICAgICB0by5fdHptID0gZnJvbS5fdHptO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2lzVVRDKSkge1xuICAgICAgICB0by5faXNVVEMgPSBmcm9tLl9pc1VUQztcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9vZmZzZXQpKSB7XG4gICAgICAgIHRvLl9vZmZzZXQgPSBmcm9tLl9vZmZzZXQ7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fcGYpKSB7XG4gICAgICAgIHRvLl9wZiA9IGdldFBhcnNpbmdGbGFncyhmcm9tKTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9sb2NhbGUpKSB7XG4gICAgICAgIHRvLl9sb2NhbGUgPSBmcm9tLl9sb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKG1vbWVudFByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGkgaW4gbW9tZW50UHJvcGVydGllcykge1xuICAgICAgICAgICAgcHJvcCA9IG1vbWVudFByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICB2YWwgPSBmcm9tW3Byb3BdO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgdG9bcHJvcF0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbnZhciB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG5cbi8vIE1vbWVudCBwcm90b3R5cGUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gTW9tZW50KGNvbmZpZykge1xuICAgIGNvcHlDb25maWcodGhpcywgY29uZmlnKTtcbiAgICB0aGlzLl9kID0gbmV3IERhdGUoY29uZmlnLl9kICE9IG51bGwgPyBjb25maWcuX2QuZ2V0VGltZSgpIDogTmFOKTtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICAvLyBQcmV2ZW50IGluZmluaXRlIGxvb3AgaW4gY2FzZSB1cGRhdGVPZmZzZXQgY3JlYXRlcyBuZXcgbW9tZW50XG4gICAgLy8gb2JqZWN0cy5cbiAgICBpZiAodXBkYXRlSW5Qcm9ncmVzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9tZW50IChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTW9tZW50IHx8IChvYmogIT0gbnVsbCAmJiBvYmouX2lzQU1vbWVudE9iamVjdCAhPSBudWxsKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFic0Zsb29yIChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAvLyAtMCAtPiAwXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKSB8fCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IGFic0Zsb29yIGZyb20gJy4vYWJzLWZsb29yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnQoYXJndW1lbnRGb3JDb2VyY2lvbikge1xuICAgIHZhciBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb24sXG4gICAgICAgIHZhbHVlID0gMDtcblxuICAgIGlmIChjb2VyY2VkTnVtYmVyICE9PSAwICYmIGlzRmluaXRlKGNvZXJjZWROdW1iZXIpKSB7XG4gICAgICAgIHZhbHVlID0gYWJzRmxvb3IoY29lcmNlZE51bWJlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IHRvSW50IGZyb20gJy4vdG8taW50JztcblxuLy8gY29tcGFyZSB0d28gYXJyYXlzLCByZXR1cm4gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheTEsIGFycmF5MiwgZG9udENvbnZlcnQpIHtcbiAgICB2YXIgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCksXG4gICAgICAgIGxlbmd0aERpZmYgPSBNYXRoLmFicyhhcnJheTEubGVuZ3RoIC0gYXJyYXkyLmxlbmd0aCksXG4gICAgICAgIGRpZmZzID0gMCxcbiAgICAgICAgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSkgfHxcbiAgICAgICAgICAgICghZG9udENvbnZlcnQgJiYgdG9JbnQoYXJyYXkxW2ldKSAhPT0gdG9JbnQoYXJyYXkyW2ldKSkpIHtcbiAgICAgICAgICAgIGRpZmZzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcbn1cbiIsImltcG9ydCBleHRlbmQgZnJvbSAnLi9leHRlbmQnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuL2hvb2tzJztcbmltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICcuL2lzLXVuZGVmaW5lZCc7XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gICAgaWYgKGhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgICh0eXBlb2YgY29uc29sZSAhPT0gICd1bmRlZmluZWQnKSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdEZXByZWNhdGlvbiB3YXJuaW5nOiAnICsgbXNnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGUobXNnLCBmbikge1xuICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGV4dGVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG51bGwsIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpcnN0VGltZSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIHZhciBhcmc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZyA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBhcmcgKz0gJ1xcblsnICsgaSArICddICc7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyArPSBrZXkgKyAnOiAnICsgYXJndW1lbnRzWzBdW2tleV0gKyAnLCAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZSgwLCAtMik7IC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBhbmQgc3BhY2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2Fybihtc2cgKyAnXFxuQXJndW1lbnRzOiAnICsgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykuam9pbignJykgKyAnXFxuJyArIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSwgZm4pO1xufVxuXG52YXIgZGVwcmVjYXRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGVTaW1wbGUobmFtZSwgbXNnKSB7XG4gICAgaWYgKGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihuYW1lLCBtc2cpO1xuICAgIH1cbiAgICBpZiAoIWRlcHJlY2F0aW9uc1tuYW1lXSkge1xuICAgICAgICB3YXJuKG1zZyk7XG4gICAgICAgIGRlcHJlY2F0aW9uc1tuYW1lXSA9IHRydWU7XG4gICAgfVxufVxuXG5ob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPSBmYWxzZTtcbmhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciA9IG51bGw7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgRnVuY3Rpb24gfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2lzLWZ1bmN0aW9uJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi91dGlscy9pcy1vYmplY3QnO1xuaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi4vdXRpbHMvaGFzLW93bi1wcm9wJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldCAoY29uZmlnKSB7XG4gICAgdmFyIHByb3AsIGk7XG4gICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICBwcm9wID0gY29uZmlnW2ldO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihwcm9wKSkge1xuICAgICAgICAgICAgdGhpc1tpXSA9IHByb3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzWydfJyArIGldID0gcHJvcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgLy8gTGVuaWVudCBvcmRpbmFsIHBhcnNpbmcgYWNjZXB0cyBqdXN0IGEgbnVtYmVyIGluIGFkZGl0aW9uIHRvXG4gICAgLy8gbnVtYmVyICsgKHBvc3NpYmx5KSBzdHVmZiBjb21pbmcgZnJvbSBfb3JkaW5hbFBhcnNlTGVuaWVudC5cbiAgICB0aGlzLl9vcmRpbmFsUGFyc2VMZW5pZW50ID0gbmV3IFJlZ0V4cCh0aGlzLl9vcmRpbmFsUGFyc2Uuc291cmNlICsgJ3wnICsgKC9cXGR7MSwyfS8pLnNvdXJjZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjaGlsZENvbmZpZykge1xuICAgIHZhciByZXMgPSBleHRlbmQoe30sIHBhcmVudENvbmZpZyksIHByb3A7XG4gICAgZm9yIChwcm9wIGluIGNoaWxkQ29uZmlnKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSkge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgcmVzW3Byb3BdID0ge307XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgcGFyZW50Q29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBjaGlsZENvbmZpZ1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW3Byb3BdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSBjaGlsZENvbmZpZ1twcm9wXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gcGFyZW50Q29uZmlnKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKHBhcmVudENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXG4gICAgICAgICAgICByZXNbcHJvcF0gPSBleHRlbmQoe30sIHJlc1twcm9wXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBMb2NhbGUoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi9oYXMtb3duLXByb3AnO1xuXG52YXIga2V5cztcblxuaWYgKE9iamVjdC5rZXlzKSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzO1xufSBlbHNlIHtcbiAgICBrZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgaSwgcmVzID0gW107XG4gICAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKG9iaiwgaSkpIHtcbiAgICAgICAgICAgICAgICByZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGtleXMgYXMgZGVmYXVsdCB9O1xuIiwiZXhwb3J0IHZhciBkZWZhdWx0Q2FsZW5kYXIgPSB7XG4gICAgc2FtZURheSA6ICdbVG9kYXkgYXRdIExUJyxcbiAgICBuZXh0RGF5IDogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICAgIG5leHRXZWVrIDogJ2RkZGQgW2F0XSBMVCcsXG4gICAgbGFzdERheSA6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gICAgbGFzdFdlZWsgOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbn07XG5cbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2lzLWZ1bmN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGVuZGFyIChrZXksIG1vbSwgbm93KSB7XG4gICAgdmFyIG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXJbJ3NhbWVFbHNlJ107XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob3V0cHV0KSA/IG91dHB1dC5jYWxsKG1vbSwgbm93KSA6IG91dHB1dDtcbn1cbiIsImV4cG9ydCB2YXIgZGVmYXVsdExvbmdEYXRlRm9ybWF0ID0ge1xuICAgIExUUyAgOiAnaDptbTpzcyBBJyxcbiAgICBMVCAgIDogJ2g6bW0gQScsXG4gICAgTCAgICA6ICdNTS9ERC9ZWVlZJyxcbiAgICBMTCAgIDogJ01NTU0gRCwgWVlZWScsXG4gICAgTExMICA6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgICBMTExMIDogJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9uZ0RhdGVGb3JtYXQgKGtleSkge1xuICAgIHZhciBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldLFxuICAgICAgICBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSA9IGZvcm1hdFVwcGVyLnJlcGxhY2UoL01NTU18TU18RER8ZGRkZC9nLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbn1cbiIsImV4cG9ydCB2YXIgZGVmYXVsdEludmFsaWREYXRlID0gJ0ludmFsaWQgZGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkRGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xufVxuIiwiZXhwb3J0IHZhciBkZWZhdWx0T3JkaW5hbCA9ICclZCc7XG5leHBvcnQgdmFyIGRlZmF1bHRPcmRpbmFsUGFyc2UgPSAvXFxkezEsMn0vO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbCAobnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xufVxuXG4iLCJleHBvcnQgdmFyIGRlZmF1bHRSZWxhdGl2ZVRpbWUgPSB7XG4gICAgZnV0dXJlIDogJ2luICVzJyxcbiAgICBwYXN0ICAgOiAnJXMgYWdvJyxcbiAgICBzICA6ICdhIGZldyBzZWNvbmRzJyxcbiAgICBtICA6ICdhIG1pbnV0ZScsXG4gICAgbW0gOiAnJWQgbWludXRlcycsXG4gICAgaCAgOiAnYW4gaG91cicsXG4gICAgaGggOiAnJWQgaG91cnMnLFxuICAgIGQgIDogJ2EgZGF5JyxcbiAgICBkZCA6ICclZCBkYXlzJyxcbiAgICBNICA6ICdhIG1vbnRoJyxcbiAgICBNTSA6ICclZCBtb250aHMnLFxuICAgIHkgIDogJ2EgeWVhcicsXG4gICAgeXkgOiAnJWQgeWVhcnMnXG59O1xuXG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuLi91dGlscy9pcy1mdW5jdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUgKG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkge1xuICAgIHZhciBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyaW5nXTtcbiAgICByZXR1cm4gKGlzRnVuY3Rpb24ob3V0cHV0KSkgP1xuICAgICAgICBvdXRwdXQobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKSA6XG4gICAgICAgIG91dHB1dC5yZXBsYWNlKC8lZC9pLCBudW1iZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzdEZ1dHVyZSAoZGlmZiwgb3V0cHV0KSB7XG4gICAgdmFyIGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihmb3JtYXQpID8gZm9ybWF0KG91dHB1dCkgOiBmb3JtYXQucmVwbGFjZSgvJXMvaSwgb3V0cHV0KTtcbn1cbiIsImltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4uL3V0aWxzL2hhcy1vd24tcHJvcCc7XG5cbnZhciBhbGlhc2VzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRVbml0QWxpYXMgKHVuaXQsIHNob3J0aGFuZCkge1xuICAgIHZhciBsb3dlckNhc2UgPSB1bml0LnRvTG93ZXJDYXNlKCk7XG4gICAgYWxpYXNlc1tsb3dlckNhc2VdID0gYWxpYXNlc1tsb3dlckNhc2UgKyAncyddID0gYWxpYXNlc1tzaG9ydGhhbmRdID0gdW5pdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1bml0cyA9PT0gJ3N0cmluZycgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3QpIHtcbiAgICB2YXIgbm9ybWFsaXplZElucHV0ID0ge30sXG4gICAgICAgIG5vcm1hbGl6ZWRQcm9wLFxuICAgICAgICBwcm9wO1xuXG4gICAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGlucHV0T2JqZWN0LCBwcm9wKSkge1xuICAgICAgICAgICAgbm9ybWFsaXplZFByb3AgPSBub3JtYWxpemVVbml0cyhwcm9wKTtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemVkSW5wdXQ7XG59XG5cbiIsInZhciBwcmlvcml0aWVzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRVbml0UHJpb3JpdHkodW5pdCwgcHJpb3JpdHkpIHtcbiAgICBwcmlvcml0aWVzW3VuaXRdID0gcHJpb3JpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzT2JqKSB7XG4gICAgdmFyIHVuaXRzID0gW107XG4gICAgZm9yICh2YXIgdSBpbiB1bml0c09iaikge1xuICAgICAgICB1bml0cy5wdXNoKHt1bml0OiB1LCBwcmlvcml0eTogcHJpb3JpdGllc1t1XX0pO1xuICAgIH1cbiAgICB1bml0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICB9KTtcbiAgICByZXR1cm4gdW5pdHM7XG59XG4iLCJpbXBvcnQgeyBub3JtYWxpemVVbml0cywgbm9ybWFsaXplT2JqZWN0VW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcbmltcG9ydCB7IGdldFByaW9yaXRpemVkVW5pdHMgfSBmcm9tICcuLi91bml0cy9wcmlvcml0aWVzJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvaXMtZnVuY3Rpb24nO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlR2V0U2V0ICh1bml0LCBrZWVwVGltZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNldCh0aGlzLCB1bml0LCB2YWx1ZSk7XG4gICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMsIHVuaXQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldCAobW9tLCB1bml0KSB7XG4gICAgcmV0dXJuIG1vbS5pc1ZhbGlkKCkgP1xuICAgICAgICBtb20uX2RbJ2dldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0oKSA6IE5hTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCAobW9tLCB1bml0LCB2YWx1ZSkge1xuICAgIGlmIChtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSh2YWx1ZSk7XG4gICAgfVxufVxuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdHZXQgKHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nU2V0ICh1bml0cywgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHVuaXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKHVuaXRzKTtcbiAgICAgICAgdmFyIHByaW9yaXRpemVkID0gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0cyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpb3JpdGl6ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbcHJpb3JpdGl6ZWRbaV0udW5pdF0odW5pdHNbcHJpb3JpdGl6ZWRbaV0udW5pdF0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHplcm9GaWxsKG51bWJlciwgdGFyZ2V0TGVuZ3RoLCBmb3JjZVNpZ24pIHtcbiAgICB2YXIgYWJzTnVtYmVyID0gJycgKyBNYXRoLmFicyhudW1iZXIpLFxuICAgICAgICB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGgsXG4gICAgICAgIHNpZ24gPSBudW1iZXIgPj0gMDtcbiAgICByZXR1cm4gKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArXG4gICAgICAgIE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpICsgYWJzTnVtYmVyO1xufVxuIiwiaW1wb3J0IHplcm9GaWxsIGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5cbmV4cG9ydCB2YXIgZm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhbSGhdbW0oc3MpP3xNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRbz98WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98a2s/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2c7XG5cbnZhciBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nO1xuXG52YXIgZm9ybWF0RnVuY3Rpb25zID0ge307XG5cbmV4cG9ydCB2YXIgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7fTtcblxuLy8gdG9rZW46ICAgICdNJ1xuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuLy8gb3JkaW5hbDogICdNbydcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuICh0b2tlbiwgcGFkZGVkLCBvcmRpbmFsLCBjYWxsYmFjaykge1xuICAgIHZhciBmdW5jID0gY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2NhbGxiYWNrXSgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gZnVuYztcbiAgICB9XG4gICAgaWYgKHBhZGRlZCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHplcm9GaWxsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgcGFkZGVkWzFdLCBwYWRkZWRbMl0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAob3JkaW5hbCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5vcmRpbmFsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdG9rZW4pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhpbnB1dCkge1xuICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLCBpLCBsZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dKSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vbSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJycsIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGFycmF5W2ldIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KSA6IGFycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbn1cblxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9tZW50KG0sIGZvcm1hdCkge1xuICAgIGlmICghbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIG0ubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxuXG4gICAgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbS5sb2NhbGVEYXRhKCkpO1xuICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0obSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICB2YXIgaSA9IDU7XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgfVxuXG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGxvY2FsRm9ybWF0dGluZ1Rva2VucywgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKTtcbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIGkgLT0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xufVxuIiwiZXhwb3J0IHZhciBtYXRjaDEgICAgICAgICA9IC9cXGQvOyAgICAgICAgICAgIC8vICAgICAgIDAgLSA5XG5leHBvcnQgdmFyIG1hdGNoMiAgICAgICAgID0gL1xcZFxcZC87ICAgICAgICAgIC8vICAgICAgMDAgLSA5OVxuZXhwb3J0IHZhciBtYXRjaDMgICAgICAgICA9IC9cXGR7M30vOyAgICAgICAgIC8vICAgICAwMDAgLSA5OTlcbmV4cG9ydCB2YXIgbWF0Y2g0ICAgICAgICAgPSAvXFxkezR9LzsgICAgICAgICAvLyAgICAwMDAwIC0gOTk5OVxuZXhwb3J0IHZhciBtYXRjaDYgICAgICAgICA9IC9bKy1dP1xcZHs2fS87ICAgIC8vIC05OTk5OTkgLSA5OTk5OTlcbmV4cG9ydCB2YXIgbWF0Y2gxdG8yICAgICAgPSAvXFxkXFxkPy87ICAgICAgICAgLy8gICAgICAgMCAtIDk5XG5leHBvcnQgdmFyIG1hdGNoM3RvNCAgICAgID0gL1xcZFxcZFxcZFxcZD8vOyAgICAgLy8gICAgIDk5OSAtIDk5OTlcbmV4cG9ydCB2YXIgbWF0Y2g1dG82ICAgICAgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy87IC8vICAgOTk5OTkgLSA5OTk5OTlcbmV4cG9ydCB2YXIgbWF0Y2gxdG8zICAgICAgPSAvXFxkezEsM30vOyAgICAgICAvLyAgICAgICAwIC0gOTk5XG5leHBvcnQgdmFyIG1hdGNoMXRvNCAgICAgID0gL1xcZHsxLDR9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OTlcbmV4cG9ydCB2YXIgbWF0Y2gxdG82ICAgICAgPSAvWystXT9cXGR7MSw2fS87ICAvLyAtOTk5OTk5IC0gOTk5OTk5XG5cbmV4cG9ydCB2YXIgbWF0Y2hVbnNpZ25lZCAgPSAvXFxkKy87ICAgICAgICAgICAvLyAgICAgICAwIC0gaW5mXG5leHBvcnQgdmFyIG1hdGNoU2lnbmVkICAgID0gL1srLV0/XFxkKy87ICAgICAgLy8gICAgLWluZiAtIGluZlxuXG5leHBvcnQgdmFyIG1hdGNoT2Zmc2V0ICAgID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpOyAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbmV4cG9ydCB2YXIgbWF0Y2hTaG9ydE9mZnNldCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2dpOyAvLyArMDAgLTAwICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuXG5leHBvcnQgdmFyIG1hdGNoVGltZXN0YW1wID0gL1srLV0/XFxkKyhcXC5cXGR7MSwzfSk/LzsgLy8gMTIzNDU2Nzg5IDEyMzQ1Njc4OS4xMjNcblxuLy8gYW55IHdvcmQgKG9yIHR3bykgY2hhcmFjdGVycyBvciBudW1iZXJzIGluY2x1ZGluZyB0d28vdGhyZWUgd29yZCBtb250aCBpbiBhcmFiaWMuXG4vLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXG5leHBvcnQgdmFyIG1hdGNoV29yZCA9IC9bMC05XSpbJ2EtelxcdTAwQTAtXFx1MDVGRlxcdTA3MDAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rfFtcXHUwNjAwLVxcdTA2RkZcXC9dKyhcXHMqP1tcXHUwNjAwLVxcdTA2RkZdKyl7MSwyfS9pO1xuXG5cbmltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4uL3V0aWxzL2hhcy1vd24tcHJvcCc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuLi91dGlscy9pcy1mdW5jdGlvbic7XG5cbnZhciByZWdleGVzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZWdleFRva2VuICh0b2tlbiwgcmVnZXgsIHN0cmljdFJlZ2V4KSB7XG4gICAgcmVnZXhlc1t0b2tlbl0gPSBpc0Z1bmN0aW9uKHJlZ2V4KSA/IHJlZ2V4IDogZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGVEYXRhKSB7XG4gICAgICAgIHJldHVybiAoaXNTdHJpY3QgJiYgc3RyaWN0UmVnZXgpID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyc2VSZWdleEZvclRva2VuICh0b2tlbiwgY29uZmlnKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wKHJlZ2V4ZXMsIHRva2VuKSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xuICAgIH1cblxuICAgIHJldHVybiByZWdleGVzW3Rva2VuXShjb25maWcuX3N0cmljdCwgY29uZmlnLl9sb2NhbGUpO1xufVxuXG4vLyBDb2RlIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTYxNDkzL2lzLXRoZXJlLWEtcmVnZXhwLWVzY2FwZS1mdW5jdGlvbi1pbi1qYXZhc2NyaXB0XG5mdW5jdGlvbiB1bmVzY2FwZUZvcm1hdChzKSB7XG4gICAgcmV0dXJuIHJlZ2V4RXNjYXBlKHMucmVwbGFjZSgnXFxcXCcsICcnKS5yZXBsYWNlKC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkge1xuICAgICAgICByZXR1cm4gcDEgfHwgcDIgfHwgcDMgfHwgcDQ7XG4gICAgfSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnZXhFc2NhcGUocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xufVxuIiwiaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi4vdXRpbHMvaGFzLW93bi1wcm9wJztcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi91dGlscy9pcy1udW1iZXInO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5cbnZhciB0b2tlbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBhcnNlVG9rZW4gKHRva2VuLCBjYWxsYmFjaykge1xuICAgIHZhciBpLCBmdW5jID0gY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdG9rZW4gPSBbdG9rZW5dO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgICAgICBhcnJheVtjYWxsYmFja10gPSB0b0ludChpbnB1dCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0b2tlbnNbdG9rZW5baV1dID0gZnVuYztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbiAodG9rZW4sIGNhbGxiYWNrKSB7XG4gICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG4gICAgICAgIGNhbGxiYWNrKGlucHV0LCBjb25maWcuX3csIGNvbmZpZywgdG9rZW4pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIGlucHV0LCBjb25maWcpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCAmJiBoYXNPd25Qcm9wKHRva2VucywgdG9rZW4pKSB7XG4gICAgICAgIHRva2Vuc1t0b2tlbl0oaW5wdXQsIGNvbmZpZy5fYSwgY29uZmlnLCB0b2tlbik7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBZRUFSID0gMDtcbmV4cG9ydCB2YXIgTU9OVEggPSAxO1xuZXhwb3J0IHZhciBEQVRFID0gMjtcbmV4cG9ydCB2YXIgSE9VUiA9IDM7XG5leHBvcnQgdmFyIE1JTlVURSA9IDQ7XG5leHBvcnQgdmFyIFNFQ09ORCA9IDU7XG5leHBvcnQgdmFyIE1JTExJU0VDT05EID0gNjtcbmV4cG9ydCB2YXIgV0VFSyA9IDc7XG5leHBvcnQgdmFyIFdFRUtEQVkgPSA4O1xuIiwidmFyIGluZGV4T2Y7XG5cbmlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgIGluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbn0gZWxzZSB7XG4gICAgaW5kZXhPZiA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIC8vIEkga25vd1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGluZGV4T2YgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vbW9tZW50L2dldC1zZXQnO1xuaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi4vdXRpbHMvaGFzLW93bi1wcm9wJztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyLCBtYXRjaFdvcmQsIHJlZ2V4RXNjYXBlIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IHsgTU9OVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL3V0aWxzL2lzLWFycmF5JztcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi91dGlscy9pcy1udW1iZXInO1xuaW1wb3J0IGluZGV4T2YgZnJvbSAnLi4vdXRpbHMvaW5kZXgtb2YnO1xuaW1wb3J0IHsgY3JlYXRlVVRDIH0gZnJvbSAnLi4vY3JlYXRlL3V0Yyc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoICsgMSwgMCkpLmdldFVUQ0RhdGUoKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignTScsIFsnTU0nLCAyXSwgJ01vJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1vbnRoKCkgKyAxO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdNTU0nLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ01NTU0nLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRocyh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdtb250aCcsICdNJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnbW9udGgnLCA4KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdNJywgICAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ01NJywgICBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdNTU0nLCAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xufSk7XG5hZGRSZWdleFRva2VuKCdNTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnTScsICdNTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnTU1NJywgJ01NTU0nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgIC8vIGlmIHdlIGRpZG4ndCBmaW5kIGEgbW9udGggbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkLlxuICAgIGlmIChtb250aCAhPSBudWxsKSB7XG4gICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRNb250aCA9IGlucHV0O1xuICAgIH1cbn0pO1xuXG4vLyBMT0NBTEVTXG5cbnZhciBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT8vO1xuZXhwb3J0IHZhciBkZWZhdWx0TG9jYWxlTW9udGhzID0gJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyk7XG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlTW9udGhzIChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRocztcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzKSA/IHRoaXMuX21vbnRoc1ttLm1vbnRoKCldIDpcbiAgICAgICAgdGhpcy5fbW9udGhzWyh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSddW20ubW9udGgoKV07XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0ID0gJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpO1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZU1vbnRoc1Nob3J0IChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0O1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydCkgPyB0aGlzLl9tb250aHNTaG9ydFttLm1vbnRoKCldIDpcbiAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRbTU9OVEhTX0lOX0ZPUk1BVC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ11bbS5tb250aCgpXTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBpaSwgbW9tLCBsbGMgPSBtb250aE5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbm90IHVzZWRcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyArK2kpIHtcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlTW9udGhzUGFyc2UgKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXJcbiAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgcmVnZXggPSAnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKSArICd8XicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpO1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU1NJyAmJiB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NJyAmJiB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNb250aCAobW9tLCB2YWx1ZSkge1xuICAgIHZhciBkYXlPZk1vbnRoO1xuXG4gICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgIC8vIE5vIG9wXG4gICAgICAgIHJldHVybiBtb207XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gbW9tLmxvY2FsZURhdGEoKS5tb250aHNQYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAvLyBUT0RPOiBBbm90aGVyIHNpbGVudCBmYWlsdXJlP1xuICAgICAgICAgICAgaWYgKCFpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF5T2ZNb250aCA9IE1hdGgubWluKG1vbS5kYXRlKCksIGRheXNJbk1vbnRoKG1vbS55ZWFyKCksIHZhbHVlKSk7XG4gICAgbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArICdNb250aCddKHZhbHVlLCBkYXlPZk1vbnRoKTtcbiAgICByZXR1cm4gbW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0TW9udGggKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgc2V0TW9udGgodGhpcywgdmFsdWUpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXQodGhpcywgJ01vbnRoJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c0luTW9udGggKCkge1xuICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpKTtcbn1cblxudmFyIGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc1Nob3J0UmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZU1vbnRoc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgfVxufVxuXG52YXIgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc1JlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlTW9udGhzUGFyc2UgKCkge1xuICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBzaG9ydFBpZWNlcyA9IFtdLCBsb25nUGllY2VzID0gW10sIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksIG1vbTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgIHNob3J0UGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChtb20sICcnKSk7XG4gICAgICAgIGxvbmdQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhtb20sICcnKSk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHMobW9tLCAnJykpO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykpO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbn1cbiIsImltcG9ydCB7IG1ha2VHZXRTZXQgfSBmcm9tICcuLi9tb21lbnQvZ2V0LXNldCc7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMXRvNCwgbWF0Y2gxdG82LCBtYXRjaDIsIG1hdGNoNCwgbWF0Y2g2LCBtYXRjaFNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCB7IFlFQVIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignWScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeSA9IHRoaXMueWVhcigpO1xuICAgIHJldHVybiB5IDw9IDk5OTkgPyAnJyArIHkgOiAnKycgKyB5O1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnWVknLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnllYXIoKSAlIDEwMDtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVknLCAgIDRdLCAgICAgICAwLCAneWVhcicpO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZWScsICA1XSwgICAgICAgMCwgJ3llYXInKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVlZJywgNiwgdHJ1ZV0sIDAsICd5ZWFyJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCd5ZWFyJywgJ3knKTtcblxuLy8gUFJJT1JJVElFU1xuXG5hZGRVbml0UHJpb3JpdHkoJ3llYXInLCAxKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdZJywgICAgICBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdZWScsICAgICBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdZWVlZJywgICBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdZWVlZWScsICBtYXRjaDF0bzYsIG1hdGNoNik7XG5hZGRSZWdleFRva2VuKCdZWVlZWVknLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbmFkZFBhcnNlVG9rZW4oWydZWVlZWScsICdZWVlZWVknXSwgWUVBUik7XG5hZGRQYXJzZVRva2VuKCdZWVlZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W1lFQVJdID0gaW5wdXQubGVuZ3RoID09PSAyID8gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpIDogdG9JbnQoaW5wdXQpO1xufSk7XG5hZGRQYXJzZVRva2VuKCdZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtZRUFSXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbn0pO1xuYWRkUGFyc2VUb2tlbignWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICAgIHJldHVybiAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMDtcbn1cblxuLy8gSE9PS1NcblxuaG9va3MucGFyc2VUd29EaWdpdFllYXIgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gdG9JbnQoaW5wdXQpICsgKHRvSW50KGlucHV0KSA+IDY4ID8gMTkwMCA6IDIwMDApO1xufTtcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgdmFyIGdldFNldFllYXIgPSBtYWtlR2V0U2V0KCdGdWxsWWVhcicsIHRydWUpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXNMZWFwWWVhciAoKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKCkpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGUgKHksIG0sIGQsIGgsIE0sIHMsIG1zKSB7XG4gICAgLy9jYW4ndCBqdXN0IGFwcGx5KCkgdG8gY3JlYXRlIGEgZGF0ZTpcbiAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTgxMzQ4L2luc3RhbnRpYXRpbmctYS1qYXZhc2NyaXB0LW9iamVjdC1ieS1jYWxsaW5nLXByb3RvdHlwZS1jb25zdHJ1Y3Rvci1hcHBseVxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpO1xuXG4gICAgLy90aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRGdWxsWWVhcigpKSkge1xuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVUQ0RhdGUgKHkpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuXG4gICAgLy90aGUgRGF0ZS5VVEMgZnVuY3Rpb24gcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwICYmIGlzRmluaXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSkpIHtcbiAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG59XG4iLCJpbXBvcnQgeyBkYXlzSW5ZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcblxuLy8gc3RhcnQtb2YtZmlyc3Qtd2VlayAtIHN0YXJ0LW9mLXllYXJcbmZ1bmN0aW9uIGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSkge1xuICAgIHZhciAvLyBmaXJzdC13ZWVrIGRheSAtLSB3aGljaCBqYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayAoNCBmb3IgaXNvLCAxIGZvciBvdGhlcilcbiAgICAgICAgZndkID0gNyArIGRvdyAtIGRveSxcbiAgICAgICAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICAgICAgICBmd2RsdyA9ICg3ICsgY3JlYXRlVVRDRGF0ZSh5ZWFyLCAwLCBmd2QpLmdldFVUQ0RheSgpIC0gZG93KSAlIDc7XG5cbiAgICByZXR1cm4gLWZ3ZGx3ICsgZndkIC0gMTtcbn1cblxuLy9odHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG5leHBvcnQgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIGxvY2FsV2Vla2RheSA9ICg3ICsgd2Vla2RheSAtIGRvdykgJSA3LFxuICAgICAgICB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcbiAgICAgICAgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldCxcbiAgICAgICAgcmVzWWVhciwgcmVzRGF5T2ZZZWFyO1xuXG4gICAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyIC0gMTtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5c0luWWVhcihyZXNZZWFyKSArIGRheU9mWWVhcjtcbiAgICB9IGVsc2UgaWYgKGRheU9mWWVhciA+IGRheXNJblllYXIoeWVhcikpIHtcbiAgICAgICAgcmVzWWVhciA9IHllYXIgKyAxO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXIgLSBkYXlzSW5ZZWFyKHllYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogcmVzWWVhcixcbiAgICAgICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXJcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla09mWWVhcihtb20sIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQobW9tLnllYXIoKSwgZG93LCBkb3kpLFxuICAgICAgICB3ZWVrID0gTWF0aC5mbG9vcigobW9tLmRheU9mWWVhcigpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxLFxuICAgICAgICByZXNXZWVrLCByZXNZZWFyO1xuXG4gICAgaWYgKHdlZWsgPCAxKSB7XG4gICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpIC0gMTtcbiAgICAgICAgcmVzV2VlayA9IHdlZWsgKyB3ZWVrc0luWWVhcihyZXNZZWFyLCBkb3csIGRveSk7XG4gICAgfSBlbHNlIGlmICh3ZWVrID4gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpKSB7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpO1xuICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCk7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHdlZWs6IHJlc1dlZWssXG4gICAgICAgIHllYXI6IHJlc1llYXJcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NJblllYXIoeWVhciwgZG93LCBkb3kpIHtcbiAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgIHdlZWtPZmZzZXROZXh0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIgKyAxLCBkb3csIGRveSk7XG4gICAgcmV0dXJuIChkYXlzSW5ZZWFyKHllYXIpIC0gd2Vla09mZnNldCArIHdlZWtPZmZzZXROZXh0KSAvIDc7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyB3ZWVrT2ZZZWFyIH0gZnJvbSAnLi93ZWVrLWNhbGVuZGFyLXV0aWxzJztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigndycsIFsnd3cnLCAyXSwgJ3dvJywgJ3dlZWsnKTtcbmFkZEZvcm1hdFRva2VuKCdXJywgWydXVycsIDJdLCAnV28nLCAnaXNvV2VlaycpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnd2VlaycsICd3Jyk7XG5hZGRVbml0QWxpYXMoJ2lzb1dlZWsnLCAnVycpO1xuXG4vLyBQUklPUklUSUVTXG5cbmFkZFVuaXRQcmlvcml0eSgnd2VlaycsIDUpO1xuYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrJywgNSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigndycsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignd3cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdXJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdXVycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWyd3JywgJ3d3JywgJ1cnLCAnV1cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMSldID0gdG9JbnQoaW5wdXQpO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuLy8gTE9DQUxFU1xuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlV2VlayAobW9tKSB7XG4gICAgcmV0dXJuIHdlZWtPZlllYXIobW9tLCB0aGlzLl93ZWVrLmRvdywgdGhpcy5fd2Vlay5kb3kpLndlZWs7XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdExvY2FsZVdlZWsgPSB7XG4gICAgZG93IDogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZXZWVrICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVGaXJzdERheU9mWWVhciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG95O1xufVxuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRXZWVrIChpbnB1dCkge1xuICAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRJU09XZWVrIChpbnB1dCkge1xuICAgIHZhciB3ZWVrID0gd2Vla09mWWVhcih0aGlzLCAxLCA0KS53ZWVrO1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2hXb3JkLCByZWdleEVzY2FwZSB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi91dGlscy9pcy1hcnJheSc7XG5pbXBvcnQgaW5kZXhPZiBmcm9tICcuLi91dGlscy9pbmRleC1vZic7XG5pbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuLi91dGlscy9oYXMtb3duLXByb3AnO1xuaW1wb3J0IHsgY3JlYXRlVVRDIH0gZnJvbSAnLi4vY3JlYXRlL3V0Yyc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignZCcsIDAsICdkbycsICdkYXknKTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c01pbih0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzU2hvcnQodGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignZGRkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXModGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignZScsIDAsIDAsICd3ZWVrZGF5Jyk7XG5hZGRGb3JtYXRUb2tlbignRScsIDAsIDAsICdpc29XZWVrZGF5Jyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdkYXknLCAnZCcpO1xuYWRkVW5pdEFsaWFzKCd3ZWVrZGF5JywgJ2UnKTtcbmFkZFVuaXRBbGlhcygnaXNvV2Vla2RheScsICdFJyk7XG5cbi8vIFBSSU9SSVRZXG5hZGRVbml0UHJpb3JpdHkoJ2RheScsIDExKTtcbmFkZFVuaXRQcmlvcml0eSgnd2Vla2RheScsIDExKTtcbmFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla2RheScsIDExKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdkJywgICAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2UnLCAgICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignRScsICAgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdkZCcsICAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5hZGRSZWdleFRva2VuKCdkZGQnLCAgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xufSk7XG5hZGRSZWdleFRva2VuKCdkZGRkJywgICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XG59KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydkZCcsICdkZGQnLCAnZGRkZCddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB2YXIgd2Vla2RheSA9IGNvbmZpZy5fbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgLy8gaWYgd2UgZGlkbid0IGdldCBhIHdlZWtkYXkgbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkXG4gICAgaWYgKHdlZWtkYXkgIT0gbnVsbCkge1xuICAgICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRXZWVrZGF5ID0gaW5wdXQ7XG4gICAgfVxufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZCcsICdlJywgJ0UnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG5mdW5jdGlvbiBwYXJzZVdlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBpZiAoIWlzTmFOKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICB9XG5cbiAgICBpbnB1dCA9IGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KTtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KSAlIDcgfHwgNztcbiAgICB9XG4gICAgcmV0dXJuIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcbn1cblxuLy8gTE9DQUxFU1xuXG5leHBvcnQgdmFyIGRlZmF1bHRMb2NhbGVXZWVrZGF5cyA9ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKTtcbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5cyAobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5cztcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fd2Vla2RheXMpID8gdGhpcy5fd2Vla2RheXNbbS5kYXkoKV0gOlxuICAgICAgICB0aGlzLl93ZWVrZGF5c1t0aGlzLl93ZWVrZGF5cy5pc0Zvcm1hdC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ11bbS5kYXkoKV07XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgPSAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdCgnXycpO1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzU2hvcnQgKG0pIHtcbiAgICByZXR1cm4gKG0pID8gdGhpcy5fd2Vla2RheXNTaG9ydFttLmRheSgpXSA6IHRoaXMuX3dlZWtkYXlzU2hvcnQ7XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluID0gJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpO1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzTWluIChtKSB7XG4gICAgcmV0dXJuIChtKSA/IHRoaXMuX3dlZWtkYXlzTWluW20uZGF5KCldIDogdGhpcy5fd2Vla2RheXNNaW47XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBpaSwgbW9tLCBsbGMgPSB3ZWVrZGF5TmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1BhcnNlICh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVN0cmljdFBhcnNlLmNhbGwodGhpcywgd2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG5cbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMud2Vla2RheXMobW9tLCAnJykucmVwbGFjZSgnLicsICdcXC4/JykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcLj8nKSArICckJywgJ2knKTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykucmVwbGFjZSgnLicsICdcXC4/JykgKyAnJCcsICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgICAgICByZWdleCA9ICdeJyArIHRoaXMud2Vla2RheXMobW9tLCAnJykgKyAnfF4nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpICsgJ3xeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkZCcgJiYgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGQnICYmIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkJyAmJiB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXREYXlPZldlZWsgKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuICAgIHZhciBkYXkgPSB0aGlzLl9pc1VUQyA/IHRoaXMuX2QuZ2V0VVRDRGF5KCkgOiB0aGlzLl9kLmdldERheSgpO1xuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpbnB1dCAtIGRheSwgJ2QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGF5O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldExvY2FsZURheU9mV2VlayAoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG4gICAgdmFyIHdlZWtkYXkgPSAodGhpcy5kYXkoKSArIDcgLSB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3cpICUgNztcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWtkYXkgOiB0aGlzLmFkZChpbnB1dCAtIHdlZWtkYXksICdkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRJU09EYXlPZldlZWsgKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuXG4gICAgLy8gYmVoYXZlcyB0aGUgc2FtZSBhcyBtb21lbnQjZGF5IGV4Y2VwdFxuICAgIC8vIGFzIGEgZ2V0dGVyLCByZXR1cm5zIDcgaW5zdGVhZCBvZiAwICgxLTcgcmFuZ2UgaW5zdGVhZCBvZiAwLTYpXG4gICAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuXG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5KHRoaXMuZGF5KCkgJSA3ID8gd2Vla2RheSA6IHdlZWtkYXkgLSA3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXkoKSB8fCA3O1xuICAgIH1cbn1cblxudmFyIGRlZmF1bHRXZWVrZGF5c1JlZ2V4ID0gbWF0Y2hXb3JkO1xuZXhwb3J0IGZ1bmN0aW9uIHdlZWtkYXlzUmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgfVxufVxuXG52YXIgZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleCA9IG1hdGNoV29yZDtcbmV4cG9ydCBmdW5jdGlvbiB3ZWVrZGF5c1Nob3J0UmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSBkZWZhdWx0V2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgIH1cbn1cblxudmFyIGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4ID0gbWF0Y2hXb3JkO1xuZXhwb3J0IGZ1bmN0aW9uIHdlZWtkYXlzTWluUmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNNaW5SZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzTWluUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGNvbXB1dGVXZWVrZGF5c1BhcnNlICgpIHtcbiAgICBmdW5jdGlvbiBjbXBMZW5SZXYoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgbWluUGllY2VzID0gW10sIHNob3J0UGllY2VzID0gW10sIGxvbmdQaWVjZXMgPSBbXSwgbWl4ZWRQaWVjZXMgPSBbXSxcbiAgICAgICAgaSwgbW9tLCBtaW5wLCBzaG9ydHAsIGxvbmdwO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgbWlucCA9IHRoaXMud2Vla2RheXNNaW4obW9tLCAnJyk7XG4gICAgICAgIHNob3J0cCA9IHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKTtcbiAgICAgICAgbG9uZ3AgPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpO1xuICAgICAgICBtaW5QaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIHdlZWtkYXkgKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgbWluUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcbiAgICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuXG4gICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWluUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbn1cbiIsImltcG9ydCB7IG1ha2VHZXRTZXQgfSBmcm9tICcuLi9tb21lbnQvZ2V0LXNldCc7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiwgbWF0Y2gzdG80LCBtYXRjaDV0bzYgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgSE9VUiwgTUlOVVRFLCBTRUNPTkQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcbmltcG9ydCB6ZXJvRmlsbCBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gaEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3VycygpICUgMTIgfHwgMTI7XG59XG5cbmZ1bmN0aW9uIGtGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG91cnMoKSB8fCAyNDtcbn1cblxuYWRkRm9ybWF0VG9rZW4oJ0gnLCBbJ0hIJywgMl0sIDAsICdob3VyJyk7XG5hZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyXSwgMCwgaEZvcm1hdCk7XG5hZGRGb3JtYXRUb2tlbignaycsIFsna2snLCAyXSwgMCwga0Zvcm1hdCk7XG5cbmFkZEZvcm1hdFRva2VuKCdobW0nLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignaG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgIHplcm9GaWxsKHRoaXMuc2Vjb25kcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuaG91cnMoKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgdGhpcy5ob3VycygpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpO1xufSk7XG5cbmZ1bmN0aW9uIG1lcmlkaWVtICh0b2tlbiwgbG93ZXJjYXNlKSB7XG4gICAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1lcmlkaWVtKHRoaXMuaG91cnMoKSwgdGhpcy5taW51dGVzKCksIGxvd2VyY2FzZSk7XG4gICAgfSk7XG59XG5cbm1lcmlkaWVtKCdhJywgdHJ1ZSk7XG5tZXJpZGllbSgnQScsIGZhbHNlKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2hvdXInLCAnaCcpO1xuXG4vLyBQUklPUklUWVxuYWRkVW5pdFByaW9yaXR5KCdob3VyJywgMTMpO1xuXG4vLyBQQVJTSU5HXG5cbmZ1bmN0aW9uIG1hdGNoTWVyaWRpZW0gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLl9tZXJpZGllbVBhcnNlO1xufVxuXG5hZGRSZWdleFRva2VuKCdhJywgIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignQScsICBtYXRjaE1lcmlkaWVtKTtcbmFkZFJlZ2V4VG9rZW4oJ0gnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2gnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ0hIJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignaGgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbmFkZFJlZ2V4VG9rZW4oJ2htbScsIG1hdGNoM3RvNCk7XG5hZGRSZWdleFRva2VuKCdobW1zcycsIG1hdGNoNXRvNik7XG5hZGRSZWdleFRva2VuKCdIbW0nLCBtYXRjaDN0bzQpO1xuYWRkUmVnZXhUb2tlbignSG1tc3MnLCBtYXRjaDV0bzYpO1xuXG5hZGRQYXJzZVRva2VuKFsnSCcsICdISCddLCBIT1VSKTtcbmFkZFBhcnNlVG9rZW4oWydhJywgJ0EnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XG4gICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xufSk7XG5hZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XG4gICAgdmFyIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XG4gICAgdmFyIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbn0pO1xuXG4vLyBMT0NBTEVTXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVJc1BNIChpbnB1dCkge1xuICAgIC8vIElFOCBRdWlya3MgTW9kZSAmIElFNyBTdGFuZGFyZHMgTW9kZSBkbyBub3QgYWxsb3cgYWNjZXNzaW5nIHN0cmluZ3MgbGlrZSBhcnJheXNcbiAgICAvLyBVc2luZyBjaGFyQXQgc2hvdWxkIGJlIG1vcmUgY29tcGF0aWJsZS5cbiAgICByZXR1cm4gKChpbnB1dCArICcnKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3AnKTtcbn1cblxuZXhwb3J0IHZhciBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSA9IC9bYXBdXFwuP20/XFwuPy9pO1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZU1lcmlkaWVtIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgIGlmIChob3VycyA+IDExKSB7XG4gICAgICAgIHJldHVybiBpc0xvd2VyID8gJ3BtJyA6ICdQTSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcbiAgICB9XG59XG5cblxuLy8gTU9NRU5UU1xuXG4vLyBTZXR0aW5nIHRoZSBob3VyIHNob3VsZCBrZWVwIHRoZSB0aW1lLCBiZWNhdXNlIHRoZSB1c2VyIGV4cGxpY2l0bHlcbi8vIHNwZWNpZmllZCB3aGljaCBob3VyIGhlIHdhbnRzLiBTbyB0cnlpbmcgdG8gbWFpbnRhaW4gdGhlIHNhbWUgaG91ciAoaW5cbi8vIGEgbmV3IHRpbWV6b25lKSBtYWtlcyBzZW5zZS4gQWRkaW5nL3N1YnRyYWN0aW5nIGhvdXJzIGRvZXMgbm90IGZvbGxvd1xuLy8gdGhpcyBydWxlLlxuZXhwb3J0IHZhciBnZXRTZXRIb3VyID0gbWFrZUdldFNldCgnSG91cnMnLCB0cnVlKTtcbiIsImltcG9ydCB7IGRlZmF1bHRDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgZGVmYXVsdExvbmdEYXRlRm9ybWF0IH0gZnJvbSAnLi9mb3JtYXRzJztcbmltcG9ydCB7IGRlZmF1bHRJbnZhbGlkRGF0ZSB9IGZyb20gJy4vaW52YWxpZCc7XG5pbXBvcnQgeyBkZWZhdWx0T3JkaW5hbCwgZGVmYXVsdE9yZGluYWxQYXJzZSB9IGZyb20gJy4vb3JkaW5hbCc7XG5pbXBvcnQgeyBkZWZhdWx0UmVsYXRpdmVUaW1lIH0gZnJvbSAnLi9yZWxhdGl2ZSc7XG5cbi8vIG1vbnRoc1xuaW1wb3J0IHtcbiAgICBkZWZhdWx0TG9jYWxlTW9udGhzLFxuICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcbn0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuXG4vLyB3ZWVrXG5pbXBvcnQgeyBkZWZhdWx0TG9jYWxlV2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xuXG4vLyB3ZWVrZGF5c1xuaW1wb3J0IHtcbiAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXMsXG4gICAgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxuICAgIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LFxufSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vIG1lcmlkaWVtXG5pbXBvcnQgeyBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSB9IGZyb20gJy4uL3VuaXRzL2hvdXInO1xuXG5leHBvcnQgdmFyIGJhc2VDb25maWcgPSB7XG4gICAgY2FsZW5kYXI6IGRlZmF1bHRDYWxlbmRhcixcbiAgICBsb25nRGF0ZUZvcm1hdDogZGVmYXVsdExvbmdEYXRlRm9ybWF0LFxuICAgIGludmFsaWREYXRlOiBkZWZhdWx0SW52YWxpZERhdGUsXG4gICAgb3JkaW5hbDogZGVmYXVsdE9yZGluYWwsXG4gICAgb3JkaW5hbFBhcnNlOiBkZWZhdWx0T3JkaW5hbFBhcnNlLFxuICAgIHJlbGF0aXZlVGltZTogZGVmYXVsdFJlbGF0aXZlVGltZSxcblxuICAgIG1vbnRoczogZGVmYXVsdExvY2FsZU1vbnRocyxcbiAgICBtb250aHNTaG9ydDogZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LFxuXG4gICAgd2VlazogZGVmYXVsdExvY2FsZVdlZWssXG5cbiAgICB3ZWVrZGF5czogZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxuICAgIHdlZWtkYXlzTWluOiBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXG4gICAgd2Vla2RheXNTaG9ydDogZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXG5cbiAgICBtZXJpZGllbVBhcnNlOiBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZVxufTtcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4uL3V0aWxzL2lzLWFycmF5JztcbmltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4uL3V0aWxzL2hhcy1vd24tcHJvcCc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnLi4vdXRpbHMvaXMtdW5kZWZpbmVkJztcbmltcG9ydCBjb21wYXJlQXJyYXlzIGZyb20gJy4uL3V0aWxzL2NvbXBhcmUtYXJyYXlzJztcbmltcG9ydCB7IGRlcHJlY2F0ZVNpbXBsZSB9IGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZSc7XG5pbXBvcnQgeyBtZXJnZUNvbmZpZ3MgfSBmcm9tICcuL3NldCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCBrZXlzIGZyb20gJy4uL3V0aWxzL2tleXMnO1xuXG5pbXBvcnQgeyBiYXNlQ29uZmlnIH0gZnJvbSAnLi9iYXNlLWNvbmZpZyc7XG5cbi8vIGludGVybmFsIHN0b3JhZ2UgZm9yIGxvY2FsZSBjb25maWcgZmlsZXNcbnZhciBsb2NhbGVzID0ge307XG52YXIgbG9jYWxlRmFtaWxpZXMgPSB7fTtcbnZhciBnbG9iYWxMb2NhbGU7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShrZXkpIHtcbiAgICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XG59XG5cbi8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxuLy8gdHJ5IFsnZW4tYXUnLCAnZW4tZ2InXSBhcyAnZW4tYXUnLCAnZW4tZ2InLCAnZW4nLCBhcyBpbiBtb3ZlIHRocm91Z2ggdGhlIGxpc3QgdHJ5aW5nIGVhY2hcbi8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcbmZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lcykge1xuICAgIHZhciBpID0gMCwgaiwgbmV4dCwgbG9jYWxlLCBzcGxpdDtcblxuICAgIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2ldKS5zcGxpdCgnLScpO1xuICAgICAgICBqID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICBuZXh0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2kgKyAxXSk7XG4gICAgICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcbiAgICAgICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0ICYmIG5leHQubGVuZ3RoID49IGogJiYgY29tcGFyZUFycmF5cyhzcGxpdCwgbmV4dCwgdHJ1ZSkgPj0gaiAtIDEpIHtcbiAgICAgICAgICAgICAgICAvL3RoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqLS07XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lKSB7XG4gICAgdmFyIG9sZExvY2FsZSA9IG51bGw7XG4gICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgICBpZiAoIWxvY2FsZXNbbmFtZV0gJiYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJlxuICAgICAgICAgICAgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbGRMb2NhbGUgPSBnbG9iYWxMb2NhbGUuX2FiYnI7XG4gICAgICAgICAgICByZXF1aXJlKCcuL2xvY2FsZS8nICsgbmFtZSk7XG4gICAgICAgICAgICAvLyBiZWNhdXNlIGRlZmluZUxvY2FsZSBjdXJyZW50bHkgYWxzbyBzZXRzIHRoZSBnbG9iYWwgbG9jYWxlLCB3ZVxuICAgICAgICAgICAgLy8gd2FudCB0byB1bmRvIHRoYXQgZm9yIGxhenkgbG9hZGVkIGxvY2FsZXNcbiAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBsb2FkIGxvY2FsZSBhbmQgdGhlbiBzZXQgdGhlIGdsb2JhbCBsb2NhbGUuICBJZlxuLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBnbG9iYWxcbi8vIGxvY2FsZSBrZXkuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlIChrZXksIHZhbHVlcykge1xuICAgIHZhciBkYXRhO1xuICAgIGlmIChrZXkpIHtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcbiAgICAgICAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIG1vbWVudC5kdXJhdGlvbi5fbG9jYWxlID0gbW9tZW50Ll9sb2NhbGUgPSBkYXRhO1xuICAgICAgICAgICAgZ2xvYmFsTG9jYWxlID0gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnbG9iYWxMb2NhbGUuX2FiYnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVMb2NhbGUgKG5hbWUsIGNvbmZpZykge1xuICAgIGlmIChjb25maWcgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKCdkZWZpbmVMb2NhbGVPdmVycmlkZScsXG4gICAgICAgICAgICAgICAgICAgICd1c2UgbW9tZW50LnVwZGF0ZUxvY2FsZShsb2NhbGVOYW1lLCBjb25maWcpIHRvIGNoYW5nZSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FuIGV4aXN0aW5nIGxvY2FsZS4gbW9tZW50LmRlZmluZUxvY2FsZShsb2NhbGVOYW1lLCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpZykgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgY3JlYXRpbmcgYSBuZXcgbG9jYWxlICcgK1xuICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZGVmaW5lLWxvY2FsZS8gZm9yIG1vcmUgaW5mby4nKTtcbiAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbbmFtZV0uX2NvbmZpZztcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLl9jb25maWc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XG5cbiAgICAgICAgaWYgKGxvY2FsZUZhbWlsaWVzW25hbWVdKSB7XG4gICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHNldCB0aGUgbG9jYWxlIEFGVEVSIGFsbCBjaGlsZCBsb2NhbGVzIGhhdmUgYmVlblxuICAgICAgICAvLyBjcmVhdGVkLCBzbyB3ZSB3b24ndCBlbmQgdXAgd2l0aCB0aGUgY2hpbGQgbG9jYWxlIHNldC5cbiAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG5cbiAgICAgICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlZnVsIGZvciB0ZXN0aW5nXG4gICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZSwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgIHZhciBsb2NhbGUsIHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgICAgIC8vIE1FUkdFXG4gICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbbmFtZV0uX2NvbmZpZztcbiAgICAgICAgfVxuICAgICAgICBjb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpO1xuICAgICAgICBsb2NhbGUgPSBuZXcgTG9jYWxlKGNvbmZpZyk7XG4gICAgICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xuICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlO1xuXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyByZXR1cm5zIGxvY2FsZSBkYXRhXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlIChrZXkpIHtcbiAgICB2YXIgbG9jYWxlO1xuXG4gICAgaWYgKGtleSAmJiBrZXkuX2xvY2FsZSAmJiBrZXkuX2xvY2FsZS5fYWJicikge1xuICAgICAgICBrZXkgPSBrZXkuX2xvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xuICAgIH1cblxuICAgIGlmICghaXNBcnJheShrZXkpKSB7XG4gICAgICAgIC8vc2hvcnQtY2lyY3VpdCBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShrZXkpO1xuICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICB9XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9vc2VMb2NhbGUoa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCkge1xuICAgIHJldHVybiBrZXlzKGxvY2FsZXMpO1xufVxuIiwiaW1wb3J0IHsgZGF5c0luTW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XG5pbXBvcnQgeyBZRUFSLCBNT05USCwgREFURSwgSE9VUiwgTUlOVVRFLCBTRUNPTkQsIE1JTExJU0VDT05ELCBXRUVLLCBXRUVLREFZIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja092ZXJmbG93IChtKSB7XG4gICAgdmFyIG92ZXJmbG93O1xuICAgIHZhciBhID0gbS5fYTtcblxuICAgIGlmIChhICYmIGdldFBhcnNpbmdGbGFncyhtKS5vdmVyZmxvdyA9PT0gLTIpIHtcbiAgICAgICAgb3ZlcmZsb3cgPVxuICAgICAgICAgICAgYVtNT05USF0gICAgICAgPCAwIHx8IGFbTU9OVEhdICAgICAgID4gMTEgID8gTU9OVEggOlxuICAgICAgICAgICAgYVtEQVRFXSAgICAgICAgPCAxIHx8IGFbREFURV0gICAgICAgID4gZGF5c0luTW9udGgoYVtZRUFSXSwgYVtNT05USF0pID8gREFURSA6XG4gICAgICAgICAgICBhW0hPVVJdICAgICAgICA8IDAgfHwgYVtIT1VSXSAgICAgICAgPiAyNCB8fCAoYVtIT1VSXSA9PT0gMjQgJiYgKGFbTUlOVVRFXSAhPT0gMCB8fCBhW1NFQ09ORF0gIT09IDAgfHwgYVtNSUxMSVNFQ09ORF0gIT09IDApKSA/IEhPVVIgOlxuICAgICAgICAgICAgYVtNSU5VVEVdICAgICAgPCAwIHx8IGFbTUlOVVRFXSAgICAgID4gNTkgID8gTUlOVVRFIDpcbiAgICAgICAgICAgIGFbU0VDT05EXSAgICAgIDwgMCB8fCBhW1NFQ09ORF0gICAgICA+IDU5ICA/IFNFQ09ORCA6XG4gICAgICAgICAgICBhW01JTExJU0VDT05EXSA8IDAgfHwgYVtNSUxMSVNFQ09ORF0gPiA5OTkgPyBNSUxMSVNFQ09ORCA6XG4gICAgICAgICAgICAtMTtcblxuICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd0RheU9mWWVhciAmJiAob3ZlcmZsb3cgPCBZRUFSIHx8IG92ZXJmbG93ID4gREFURSkpIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID0gREFURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtzICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla2RheSAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFS0RBWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICAgIH1cblxuICAgIHJldHVybiBtO1xufVxuXG4iLCJpbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcblxuLy8gaXNvIDg2MDEgcmVnZXhcbi8vIDAwMDAtMDAtMDAgMDAwMC1XMDAgb3IgMDAwMC1XMDAtMCArIFQgKyAwMCBvciAwMDowMCBvciAwMDowMDowMCBvciAwMDowMDowMC4wMDAgKyArMDA6MDAgb3IgKzAwMDAgb3IgKzAwKVxudmFyIGV4dGVuZGVkSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pLSg/OlxcZFxcZC1cXGRcXGR8V1xcZFxcZC1cXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzo6XFxkXFxkKD86OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC87XG52YXIgYmFzaWNJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSkoPzpcXGRcXGRcXGRcXGR8V1xcZFxcZFxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OlxcZFxcZCg/OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC87XG5cbnZhciB0elJlZ2V4ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vO1xuXG52YXIgaXNvRGF0ZXMgPSBbXG4gICAgWydZWVlZWVktTU0tREQnLCAvWystXVxcZHs2fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgWydZWVlZLU1NLUREJywgL1xcZHs0fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgWydHR0dHLVtXXVdXLUUnLCAvXFxkezR9LVdcXGRcXGQtXFxkL10sXG4gICAgWydHR0dHLVtXXVdXJywgL1xcZHs0fS1XXFxkXFxkLywgZmFsc2VdLFxuICAgIFsnWVlZWS1EREQnLCAvXFxkezR9LVxcZHszfS9dLFxuICAgIFsnWVlZWS1NTScsIC9cXGR7NH0tXFxkXFxkLywgZmFsc2VdLFxuICAgIFsnWVlZWVlZTU1ERCcsIC9bKy1dXFxkezEwfS9dLFxuICAgIFsnWVlZWU1NREQnLCAvXFxkezh9L10sXG4gICAgLy8gWVlZWU1NIGlzIE5PVCBhbGxvd2VkIGJ5IHRoZSBzdGFuZGFyZFxuICAgIFsnR0dHR1tXXVdXRScsIC9cXGR7NH1XXFxkezN9L10sXG4gICAgWydHR0dHW1ddV1cnLCAvXFxkezR9V1xcZHsyfS8sIGZhbHNlXSxcbiAgICBbJ1lZWVlEREQnLCAvXFxkezd9L11cbl07XG5cbi8vIGlzbyB0aW1lIGZvcm1hdHMgYW5kIHJlZ2V4ZXNcbnZhciBpc29UaW1lcyA9IFtcbiAgICBbJ0hIOm1tOnNzLlNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGRcXC5cXGQrL10sXG4gICAgWydISDptbTpzcyxTU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkLFxcZCsvXSxcbiAgICBbJ0hIOm1tOnNzJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkL10sXG4gICAgWydISDptbScsIC9cXGRcXGQ6XFxkXFxkL10sXG4gICAgWydISG1tc3MuU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGRcXC5cXGQrL10sXG4gICAgWydISG1tc3MsU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGQsXFxkKy9dLFxuICAgIFsnSEhtbXNzJywgL1xcZFxcZFxcZFxcZFxcZFxcZC9dLFxuICAgIFsnSEhtbScsIC9cXGRcXGRcXGRcXGQvXSxcbiAgICBbJ0hIJywgL1xcZFxcZC9dXG5dO1xuXG52YXIgYXNwTmV0SnNvblJlZ2V4ID0gL15cXC8/RGF0ZVxcKChcXC0/XFxkKykvaTtcblxuLy8gZGF0ZSBmcm9tIGlzbyBmb3JtYXRcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tSVNPKGNvbmZpZykge1xuICAgIHZhciBpLCBsLFxuICAgICAgICBzdHJpbmcgPSBjb25maWcuX2ksXG4gICAgICAgIG1hdGNoID0gZXh0ZW5kZWRJc29SZWdleC5leGVjKHN0cmluZykgfHwgYmFzaWNJc29SZWdleC5leGVjKHN0cmluZyksXG4gICAgICAgIGFsbG93VGltZSwgZGF0ZUZvcm1hdCwgdGltZUZvcm1hdCwgdHpGb3JtYXQ7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaXNvID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvRGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNvRGF0ZXNbaV1bMV0uZXhlYyhtYXRjaFsxXSkpIHtcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0ID0gaXNvRGF0ZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgYWxsb3dUaW1lID0gaXNvRGF0ZXNbaV1bMl0gIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFszXSkge1xuICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb1RpbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpc29UaW1lc1tpXVsxXS5leGVjKG1hdGNoWzNdKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaFsyXSBzaG91bGQgYmUgJ1QnIG9yIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgIHRpbWVGb3JtYXQgPSAobWF0Y2hbMl0gfHwgJyAnKSArIGlzb1RpbWVzW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dUaW1lICYmIHRpbWVGb3JtYXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoWzRdKSB7XG4gICAgICAgICAgICBpZiAodHpSZWdleC5leGVjKG1hdGNoWzRdKSkge1xuICAgICAgICAgICAgICAgIHR6Rm9ybWF0ID0gJ1onO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLl9mID0gZGF0ZUZvcm1hdCArICh0aW1lRm9ybWF0IHx8ICcnKSArICh0ekZvcm1hdCB8fCAnJyk7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0IG9yIGZhbGxiYWNrXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZyhjb25maWcpIHtcbiAgICB2YXIgbWF0Y2hlZCA9IGFzcE5ldEpzb25SZWdleC5leGVjKGNvbmZpZy5faSk7XG5cbiAgICBpZiAobWF0Y2hlZCAhPT0gbnVsbCkge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICAgICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICB9XG59XG5cbmhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrID0gZGVwcmVjYXRlKFxuICAgICd2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xuICAgICd3aGljaCBpcyBub3QgcmVsaWFibGUgYWNyb3NzIGFsbCBicm93c2VycyBhbmQgdmVyc2lvbnMuIE5vbiBJU08gZGF0ZSBmb3JtYXRzIGFyZSAnICtcbiAgICAnZGlzY291cmFnZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhbiB1cGNvbWluZyBtYWpvciByZWxlYXNlLiBQbGVhc2UgcmVmZXIgdG8gJyArXG4gICAgJ2h0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvanMtZGF0ZS8gZm9yIG1vcmUgaW5mby4nLFxuICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoY29uZmlnLl9pICsgKGNvbmZpZy5fdXNlVVRDID8gJyBVVEMnIDogJycpKTtcbiAgICB9XG4pO1xuIiwiLy8gUGljayB0aGUgZmlyc3QgZGVmaW5lZCBvZiB0d28gb3IgdGhyZWUgYXJndW1lbnRzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdHMoYSwgYiwgYykge1xuICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGlmIChiICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBjO1xufVxuIiwiaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgeyBjcmVhdGVEYXRlLCBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi9kYXRlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgZGF5c0luWWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xuaW1wb3J0IHsgd2Vla09mWWVhciwgd2Vla3NJblllYXIsIGRheU9mWWVhckZyb21XZWVrcyB9IGZyb20gJy4uL3VuaXRzL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgWUVBUiwgTU9OVEgsIERBVEUsIEhPVVIsIE1JTlVURSwgU0VDT05ELCBNSUxMSVNFQ09ORCB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4vbG9jYWwnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL3V0aWxzL2RlZmF1bHRzJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcblxuZnVuY3Rpb24gY3VycmVudERhdGVBcnJheShjb25maWcpIHtcbiAgICAvLyBob29rcyBpcyBhY3R1YWxseSB0aGUgZXhwb3J0ZWQgbW9tZW50IG9iamVjdFxuICAgIHZhciBub3dWYWx1ZSA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICBpZiAoY29uZmlnLl91c2VVVEMpIHtcbiAgICAgICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRVVENGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRVVENNb250aCgpLCBub3dWYWx1ZS5nZXRVVENEYXRlKCldO1xuICAgIH1cbiAgICByZXR1cm4gW25vd1ZhbHVlLmdldEZ1bGxZZWFyKCksIG5vd1ZhbHVlLmdldE1vbnRoKCksIG5vd1ZhbHVlLmdldERhdGUoKV07XG59XG5cbi8vIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkYXRlLlxuLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcbi8vIG5vdGU6IGFsbCB2YWx1ZXMgcGFzdCB0aGUgeWVhciBhcmUgb3B0aW9uYWwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxuLy8gW3llYXIsIG1vbnRoLCBkYXkgLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbUFycmF5IChjb25maWcpIHtcbiAgICB2YXIgaSwgZGF0ZSwgaW5wdXQgPSBbXSwgY3VycmVudERhdGUsIHllYXJUb1VzZTtcblxuICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGVBcnJheShjb25maWcpO1xuXG4gICAgLy9jb21wdXRlIGRheSBvZiB0aGUgeWVhciBmcm9tIHdlZWtzIGFuZCB3ZWVrZGF5c1xuICAgIGlmIChjb25maWcuX3cgJiYgY29uZmlnLl9hW0RBVEVdID09IG51bGwgJiYgY29uZmlnLl9hW01PTlRIXSA9PSBudWxsKSB7XG4gICAgICAgIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpO1xuICAgIH1cblxuICAgIC8vaWYgdGhlIGRheSBvZiB0aGUgeWVhciBpcyBzZXQsIGZpZ3VyZSBvdXQgd2hhdCBpdCBpc1xuICAgIGlmIChjb25maWcuX2RheU9mWWVhcikge1xuICAgICAgICB5ZWFyVG9Vc2UgPSBkZWZhdWx0cyhjb25maWcuX2FbWUVBUl0sIGN1cnJlbnREYXRlW1lFQVJdKTtcblxuICAgICAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXJUb1VzZSkpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd0RheU9mWWVhciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRlID0gY3JlYXRlVVRDRGF0ZSh5ZWFyVG9Vc2UsIDAsIGNvbmZpZy5fZGF5T2ZZZWFyKTtcbiAgICAgICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgY29uZmlnLl9hW0RBVEVdID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IGRhdGUuXG4gICAgLy8gKiBpZiBubyB5ZWFyLCBtb250aCwgZGF5IG9mIG1vbnRoIGFyZSBnaXZlbiwgZGVmYXVsdCB0byB0b2RheVxuICAgIC8vICogaWYgZGF5IG9mIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG1vbnRoIGFuZCB5ZWFyXG4gICAgLy8gKiBpZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBvbmx5IHllYXJcbiAgICAvLyAqIGlmIHllYXIgaXMgZ2l2ZW4sIGRvbid0IGRlZmF1bHQgYW55dGhpbmdcbiAgICBmb3IgKGkgPSAwOyBpIDwgMyAmJiBjb25maWcuX2FbaV0gPT0gbnVsbDsgKytpKSB7XG4gICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XG4gICAgfVxuXG4gICAgLy8gWmVybyBvdXQgd2hhdGV2ZXIgd2FzIG5vdCBkZWZhdWx0ZWQsIGluY2x1ZGluZyB0aW1lXG4gICAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSAoY29uZmlnLl9hW2ldID09IG51bGwpID8gKGkgPT09IDIgPyAxIDogMCkgOiBjb25maWcuX2FbaV07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIDI0OjAwOjAwLjAwMFxuICAgIGlmIChjb25maWcuX2FbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgICAgICBjb25maWcuX2FbTUlOVVRFXSA9PT0gMCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW1NFQ09ORF0gPT09IDAgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNSUxMSVNFQ09ORF0gPT09IDApIHtcbiAgICAgICAgY29uZmlnLl9uZXh0RGF5ID0gdHJ1ZTtcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMDtcbiAgICB9XG5cbiAgICBjb25maWcuX2QgPSAoY29uZmlnLl91c2VVVEMgPyBjcmVhdGVVVENEYXRlIDogY3JlYXRlRGF0ZSkuYXBwbHkobnVsbCwgaW5wdXQpO1xuICAgIC8vIEFwcGx5IHRpbWV6b25lIG9mZnNldCBmcm9tIGlucHV0LiBUaGUgYWN0dWFsIHV0Y09mZnNldCBjYW4gYmUgY2hhbmdlZFxuICAgIC8vIHdpdGggcGFyc2Vab25lLlxuICAgIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5fbmV4dERheSkge1xuICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAyNDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpIHtcbiAgICB2YXIgdywgd2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95LCB0ZW1wLCB3ZWVrZGF5T3ZlcmZsb3c7XG5cbiAgICB3ID0gY29uZmlnLl93O1xuICAgIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcbiAgICAgICAgZG93ID0gMTtcbiAgICAgICAgZG95ID0gNDtcblxuICAgICAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHRha2UgdGhlIGN1cnJlbnQgaXNvV2Vla1llYXIsIGJ1dCB0aGF0IGRlcGVuZHMgb25cbiAgICAgICAgLy8gaG93IHdlIGludGVycHJldCBub3cgKGxvY2FsLCB1dGMsIGZpeGVkIG9mZnNldCkuIFNvIGNyZWF0ZVxuICAgICAgICAvLyBhIG5vdyB2ZXJzaW9uIG9mIGN1cnJlbnQgY29uZmlnICh0YWtlIGxvY2FsL3V0Yy9vZmZzZXQgZmxhZ3MsIGFuZFxuICAgICAgICAvLyBjcmVhdGUgbm93KS5cbiAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LkdHLCBjb25maWcuX2FbWUVBUl0sIHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgMSwgNCkueWVhcik7XG4gICAgICAgIHdlZWsgPSBkZWZhdWx0cyh3LlcsIDEpO1xuICAgICAgICB3ZWVrZGF5ID0gZGVmYXVsdHMody5FLCAxKTtcbiAgICAgICAgaWYgKHdlZWtkYXkgPCAxIHx8IHdlZWtkYXkgPiA3KSB7XG4gICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG93ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG93O1xuICAgICAgICBkb3kgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3k7XG5cbiAgICAgICAgdmFyIGN1cldlZWsgPSB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIGRvdywgZG95KTtcblxuICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuZ2csIGNvbmZpZy5fYVtZRUFSXSwgY3VyV2Vlay55ZWFyKTtcblxuICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgd2Vlay5cbiAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcudywgY3VyV2Vlay53ZWVrKTtcblxuICAgICAgICBpZiAody5kICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xuICAgICAgICAgICAgd2Vla2RheSA9IHcuZDtcbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgMCB8fCB3ZWVrZGF5ID4gNikge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAody5lICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgd2Vla2RheSA9IHcuZSArIGRvdztcbiAgICAgICAgICAgIGlmICh3LmUgPCAwIHx8IHcuZSA+IDYpIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBiZWdpbmluZyBvZiB3ZWVrXG4gICAgICAgICAgICB3ZWVrZGF5ID0gZG93O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWVrIDwgMSB8fCB3ZWVrID4gd2Vla3NJblllYXIod2Vla1llYXIsIGRvdywgZG95KSkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh3ZWVrZGF5T3ZlcmZsb3cgIT0gbnVsbCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgICAgIGNvbmZpZy5fYVtZRUFSXSA9IHRlbXAueWVhcjtcbiAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPSB0ZW1wLmRheU9mWWVhcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjb25maWdGcm9tSVNPIH0gZnJvbSAnLi9mcm9tLXN0cmluZyc7XG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xuaW1wb3J0IHsgZ2V0UGFyc2VSZWdleEZvclRva2VuIH0gICBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IGV4cGFuZEZvcm1hdCwgZm9ybWF0VG9rZW5GdW5jdGlvbnMsIGZvcm1hdHRpbmdUb2tlbnMgfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCBjaGVja092ZXJmbG93IGZyb20gJy4vY2hlY2stb3ZlcmZsb3cnO1xuaW1wb3J0IHsgSE9VUiB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxuaG9va3MuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogTW92ZSB0aGlzIHRvIGFub3RoZXIgcGFydCBvZiB0aGUgY3JlYXRpb24gZmxvdyB0byBwcmV2ZW50IGNpcmN1bGFyIGRlcHNcbiAgICBpZiAoY29uZmlnLl9mID09PSBob29rcy5JU09fODYwMSkge1xuICAgICAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWcuX2EgPSBbXTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IHRydWU7XG5cbiAgICAvLyBUaGlzIGFycmF5IGlzIHVzZWQgdG8gbWFrZSBhIERhdGUsIGVpdGhlciB3aXRoIGBuZXcgRGF0ZWAgb3IgYERhdGUuVVRDYFxuICAgIHZhciBzdHJpbmcgPSAnJyArIGNvbmZpZy5faSxcbiAgICAgICAgaSwgcGFyc2VkSW5wdXQsIHRva2VucywgdG9rZW4sIHNraXBwZWQsXG4gICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggPSAwO1xuXG4gICAgdG9rZW5zID0gZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgcGFyc2VkSW5wdXQgPSAoc3RyaW5nLm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSkgfHwgW10pWzBdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndG9rZW4nLCB0b2tlbiwgJ3BhcnNlZElucHV0JywgcGFyc2VkSW5wdXQsXG4gICAgICAgIC8vICAgICAgICAgJ3JlZ2V4JywgZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcpKTtcbiAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICBza2lwcGVkID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkpO1xuICAgICAgICAgICAgaWYgKHNraXBwZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2Uoc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoKTtcbiAgICAgICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggKz0gcGFyc2VkSW5wdXQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvbid0IHBhcnNlIGlmIGl0J3Mgbm90IGEga25vd24gdG9rZW5cbiAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcuX3N0cmljdCAmJiAhcGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5jaGFyc0xlZnRPdmVyID0gc3RyaW5nTGVuZ3RoIC0gdG90YWxQYXJzZWRJbnB1dExlbmd0aDtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChzdHJpbmcpO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIF8xMmggZmxhZyBpZiBob3VyIGlzIDw9IDEyXG4gICAgaWYgKGNvbmZpZy5fYVtIT1VSXSA8PSAxMiAmJlxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA+IDApIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5wYXJzZWREYXRlUGFydHMgPSBjb25maWcuX2Euc2xpY2UoMCk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykubWVyaWRpZW0gPSBjb25maWcuX21lcmlkaWVtO1xuICAgIC8vIGhhbmRsZSBtZXJpZGllbVxuICAgIGNvbmZpZy5fYVtIT1VSXSA9IG1lcmlkaWVtRml4V3JhcChjb25maWcuX2xvY2FsZSwgY29uZmlnLl9hW0hPVVJdLCBjb25maWcuX21lcmlkaWVtKTtcblxuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgIGNoZWNrT3ZlcmZsb3coY29uZmlnKTtcbn1cblxuXG5mdW5jdGlvbiBtZXJpZGllbUZpeFdyYXAgKGxvY2FsZSwgaG91ciwgbWVyaWRpZW0pIHtcbiAgICB2YXIgaXNQbTtcblxuICAgIGlmIChtZXJpZGllbSA9PSBudWxsKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxuICAgIGlmIChsb2NhbGUubWVyaWRpZW1Ib3VyICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pO1xuICAgIH0gZWxzZSBpZiAobG9jYWxlLmlzUE0gIT0gbnVsbCkge1xuICAgICAgICAvLyBGYWxsYmFja1xuICAgICAgICBpc1BtID0gbG9jYWxlLmlzUE0obWVyaWRpZW0pO1xuICAgICAgICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW5cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY29weUNvbmZpZyB9IGZyb20gJy4uL21vbWVudC9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi4vdXRpbHMvZXh0ZW5kJztcblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKSB7XG4gICAgdmFyIHRlbXBDb25maWcsXG4gICAgICAgIGJlc3RNb21lbnQsXG5cbiAgICAgICAgc2NvcmVUb0JlYXQsXG4gICAgICAgIGksXG4gICAgICAgIGN1cnJlbnRTY29yZTtcblxuICAgIGlmIChjb25maWcuX2YubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbmZpZy5fZi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjdXJyZW50U2NvcmUgPSAwO1xuICAgICAgICB0ZW1wQ29uZmlnID0gY29weUNvbmZpZyh7fSwgY29uZmlnKTtcbiAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBDb25maWcuX3VzZVVUQyA9IGNvbmZpZy5fdXNlVVRDO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBDb25maWcuX2YgPSBjb25maWcuX2ZbaV07XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQodGVtcENvbmZpZyk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKHRlbXBDb25maWcpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGFueSBpbnB1dCB0aGF0IHdhcyBub3QgcGFyc2VkIGFkZCBhIHBlbmFsdHkgZm9yIHRoYXQgZm9ybWF0XG4gICAgICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuY2hhcnNMZWZ0T3ZlcjtcblxuICAgICAgICAvL29yIHRva2Vuc1xuICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnVudXNlZFRva2Vucy5sZW5ndGggKiAxMDtcblxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuc2NvcmUgPSBjdXJyZW50U2NvcmU7XG5cbiAgICAgICAgaWYgKHNjb3JlVG9CZWF0ID09IG51bGwgfHwgY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQpIHtcbiAgICAgICAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHRlbmQoY29uZmlnLCBiZXN0TW9tZW50IHx8IHRlbXBDb25maWcpO1xufVxuIiwiaW1wb3J0IHsgbm9ybWFsaXplT2JqZWN0VW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9IGZyb20gJy4vZnJvbS1hcnJheSc7XG5pbXBvcnQgbWFwIGZyb20gJy4uL3V0aWxzL21hcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZykge1xuICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoY29uZmlnLl9pKTtcbiAgICBjb25maWcuX2EgPSBtYXAoW2kueWVhciwgaS5tb250aCwgaS5kYXkgfHwgaS5kYXRlLCBpLmhvdXIsIGkubWludXRlLCBpLnNlY29uZCwgaS5taWxsaXNlY29uZF0sIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBwYXJzZUludChvYmosIDEwKTtcbiAgICB9KTtcblxuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xufVxuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vdXRpbHMvaXMtYXJyYXknO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL3V0aWxzL2lzLW9iamVjdCc7XG5pbXBvcnQgaXNPYmplY3RFbXB0eSBmcm9tICcuLi91dGlscy9pcy1vYmplY3QtZW1wdHknO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL3V0aWxzL2lzLW51bWJlcic7XG5pbXBvcnQgaXNEYXRlIGZyb20gJy4uL3V0aWxzL2lzLWRhdGUnO1xuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlscy9tYXAnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgTW9tZW50LCBpc01vbWVudCB9IGZyb20gJy4uL21vbWVudC9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCBjaGVja092ZXJmbG93IGZyb20gJy4vY2hlY2stb3ZlcmZsb3cnO1xuaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuXG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkgfSAgZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtYXJyYXknO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nIH0gICAgICAgICAgZnJvbSAnLi9mcm9tLXN0cmluZyc7XG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSAgICAgICAgICAgZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IGNvbmZpZ0Zyb21PYmplY3QgfSAgICAgICAgICBmcm9tICcuL2Zyb20tb2JqZWN0JztcblxuZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyAoY29uZmlnKSB7XG4gICAgdmFyIHJlcyA9IG5ldyBNb21lbnQoY2hlY2tPdmVyZmxvdyhwcmVwYXJlQ29uZmlnKGNvbmZpZykpKTtcbiAgICBpZiAocmVzLl9uZXh0RGF5KSB7XG4gICAgICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgICAgICByZXMuYWRkKDEsICdkJyk7XG4gICAgICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUNvbmZpZyAoY29uZmlnKSB7XG4gICAgdmFyIGlucHV0ID0gY29uZmlnLl9pLFxuICAgICAgICBmb3JtYXQgPSBjb25maWcuX2Y7XG5cbiAgICBjb25maWcuX2xvY2FsZSA9IGNvbmZpZy5fbG9jYWxlIHx8IGdldExvY2FsZShjb25maWcuX2wpO1xuXG4gICAgaWYgKGlucHV0ID09PSBudWxsIHx8IChmb3JtYXQgPT09IHVuZGVmaW5lZCAmJiBpbnB1dCA9PT0gJycpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKHtudWxsSW5wdXQ6IHRydWV9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb21lbnQoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3coaW5wdXQpKTtcbiAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9kID0gaW5wdXQ7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGZvcm1hdCkpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgIH0gIGVsc2Uge1xuICAgICAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWQoY29uZmlnKSkge1xuICAgICAgICBjb25maWcuX2QgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpIHtcbiAgICB2YXIgaW5wdXQgPSBjb25maWcuX2k7XG4gICAgaWYgKGlucHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaG9va3Mubm93KCkpO1xuICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShpbnB1dC52YWx1ZU9mKCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nKGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICBjb25maWcuX2EgPSBtYXAoaW5wdXQuc2xpY2UoMCksIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChvYmosIDEwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKGlucHV0KSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uZmlnRnJvbU9iamVjdChjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIC8vIGZyb20gbWlsbGlzZWNvbmRzXG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsT3JVVEMgKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBpc1VUQykge1xuICAgIHZhciBjID0ge307XG5cbiAgICBpZiAobG9jYWxlID09PSB0cnVlIHx8IGxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgc3RyaWN0ID0gbG9jYWxlO1xuICAgICAgICBsb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKChpc09iamVjdChpbnB1dCkgJiYgaXNPYmplY3RFbXB0eShpbnB1dCkpIHx8XG4gICAgICAgICAgICAoaXNBcnJheShpbnB1dCkgJiYgaW5wdXQubGVuZ3RoID09PSAwKSkge1xuICAgICAgICBpbnB1dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gb2JqZWN0IGNvbnN0cnVjdGlvbiBtdXN0IGJlIGRvbmUgdGhpcyB3YXkuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcbiAgICBjLl9pc0FNb21lbnRPYmplY3QgPSB0cnVlO1xuICAgIGMuX3VzZVVUQyA9IGMuX2lzVVRDID0gaXNVVEM7XG4gICAgYy5fbCA9IGxvY2FsZTtcbiAgICBjLl9pID0gaW5wdXQ7XG4gICAgYy5fZiA9IGZvcm1hdDtcbiAgICBjLl9zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUxvY2FsT3JVVEMgfSBmcm9tICcuL2Zyb20tYW55dGhpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYWwgKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGZhbHNlKTtcbn1cbiIsImltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZSc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi91dGlscy9pcy1hcnJheSc7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkIH0gZnJvbSAnLi4vY3JlYXRlL3ZhbGlkJztcblxuZXhwb3J0IHZhciBwcm90b3R5cGVNaW4gPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudCgpLm1pbiBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1heCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvdGhlciA8IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IHZhciBwcm90b3R5cGVNYXggPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudCgpLm1heCBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1pbiBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvdGhlciA+IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuLy8gUGljayBhIG1vbWVudCBtIGZyb20gbW9tZW50cyBzbyB0aGF0IG1bZm5dKG90aGVyKSBpcyB0cnVlIGZvciBhbGxcbi8vIG90aGVyLiBUaGlzIHJlbGllcyBvbiB0aGUgZnVuY3Rpb24gZm4gdG8gYmUgdHJhbnNpdGl2ZS5cbi8vXG4vLyBtb21lbnRzIHNob3VsZCBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMgb3IgYW4gYXJyYXksIHdob3NlXG4vLyBmaXJzdCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzLlxuZnVuY3Rpb24gcGlja0J5KGZuLCBtb21lbnRzKSB7XG4gICAgdmFyIHJlcywgaTtcbiAgICBpZiAobW9tZW50cy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShtb21lbnRzWzBdKSkge1xuICAgICAgICBtb21lbnRzID0gbW9tZW50c1swXTtcbiAgICB9XG4gICAgaWYgKCFtb21lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoKTtcbiAgICB9XG4gICAgcmVzID0gbW9tZW50c1swXTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbW9tZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoIW1vbWVudHNbaV0uaXNWYWxpZCgpIHx8IG1vbWVudHNbaV1bZm5dKHJlcykpIHtcbiAgICAgICAgICAgIHJlcyA9IG1vbWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gVE9ETzogVXNlIFtdLnNvcnQgaW5zdGVhZD9cbmV4cG9ydCBmdW5jdGlvbiBtaW4gKCkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcmV0dXJuIHBpY2tCeSgnaXNCZWZvcmUnLCBhcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heCAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICByZXR1cm4gcGlja0J5KCdpc0FmdGVyJywgYXJncyk7XG59XG4iLCJleHBvcnQgdmFyIG5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3cgPyBEYXRlLm5vdygpIDogKyhuZXcgRGF0ZSgpKTtcbn07XG4iLCJpbXBvcnQgeyBub3JtYWxpemVPYmplY3RVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gRHVyYXRpb24gKGR1cmF0aW9uKSB7XG4gICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGR1cmF0aW9uKSxcbiAgICAgICAgeWVhcnMgPSBub3JtYWxpemVkSW5wdXQueWVhciB8fCAwLFxuICAgICAgICBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDAsXG4gICAgICAgIG1vbnRocyA9IG5vcm1hbGl6ZWRJbnB1dC5tb250aCB8fCAwLFxuICAgICAgICB3ZWVrcyA9IG5vcm1hbGl6ZWRJbnB1dC53ZWVrIHx8IDAsXG4gICAgICAgIGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDAsXG4gICAgICAgIGhvdXJzID0gbm9ybWFsaXplZElucHV0LmhvdXIgfHwgMCxcbiAgICAgICAgbWludXRlcyA9IG5vcm1hbGl6ZWRJbnB1dC5taW51dGUgfHwgMCxcbiAgICAgICAgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmQgfHwgMCxcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kIHx8IDA7XG5cbiAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9ICttaWxsaXNlY29uZHMgK1xuICAgICAgICBzZWNvbmRzICogMWUzICsgLy8gMTAwMFxuICAgICAgICBtaW51dGVzICogNmU0ICsgLy8gMTAwMCAqIDYwXG4gICAgICAgIGhvdXJzICogMTAwMCAqIDYwICogNjA7IC8vdXNpbmcgMTAwMCAqIDYwICogNjAgaW5zdGVhZCBvZiAzNmU1IHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjk3OFxuICAgIC8vIEJlY2F1c2Ugb2YgZGF0ZUFkZFJlbW92ZSB0cmVhdHMgMjQgaG91cnMgYXMgZGlmZmVyZW50IGZyb20gYVxuICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcbiAgICB0aGlzLl9kYXlzID0gK2RheXMgK1xuICAgICAgICB3ZWVrcyAqIDc7XG4gICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAvLyB3aGljaCBtb250aHMgeW91IGFyZSBhcmUgdGFsa2luZyBhYm91dCwgc28gd2UgaGF2ZSB0byBzdG9yZVxuICAgIC8vIGl0IHNlcGFyYXRlbHkuXG4gICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArXG4gICAgICAgIHF1YXJ0ZXJzICogMyArXG4gICAgICAgIHllYXJzICogMTI7XG5cbiAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUoKTtcblxuICAgIHRoaXMuX2J1YmJsZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEdXJhdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJzUm91bmQgKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKC0xICogbnVtYmVyKSAqIC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHplcm9GaWxsIGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NyZWF0ZSc7XG5pbXBvcnQgeyBhZGRTdWJ0cmFjdCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgaXNNb21lbnQsIGNvcHlDb25maWcgfSBmcm9tICcuLi9tb21lbnQvY29uc3RydWN0b3InO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoT2Zmc2V0LCBtYXRjaFNob3J0T2Zmc2V0IH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IHByZXBhcmVDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvZnJvbS1hbnl0aGluZyc7XG5pbXBvcnQgeyBjcmVhdGVVVEMgfSBmcm9tICcuLi9jcmVhdGUvdXRjJztcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi4vdXRpbHMvaXMtZGF0ZSc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcbmltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICcuLi91dGlscy9pcy11bmRlZmluZWQnO1xuaW1wb3J0IGNvbXBhcmVBcnJheXMgZnJvbSAnLi4vdXRpbHMvY29tcGFyZS1hcnJheXMnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gb2Zmc2V0ICh0b2tlbiwgc2VwYXJhdG9yKSB7XG4gICAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudXRjT2Zmc2V0KCk7XG4gICAgICAgIHZhciBzaWduID0gJysnO1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gLW9mZnNldDtcbiAgICAgICAgICAgIHNpZ24gPSAnLSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpZ24gKyB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICsgc2VwYXJhdG9yICsgemVyb0ZpbGwofn4ob2Zmc2V0KSAlIDYwLCAyKTtcbiAgICB9KTtcbn1cblxub2Zmc2V0KCdaJywgJzonKTtcbm9mZnNldCgnWlonLCAnJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignWicsICBtYXRjaFNob3J0T2Zmc2V0KTtcbmFkZFJlZ2V4VG9rZW4oJ1paJywgbWF0Y2hTaG9ydE9mZnNldCk7XG5hZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX3VzZVVUQyA9IHRydWU7XG4gICAgY29uZmlnLl90em0gPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIHRpbWV6b25lIGNodW5rZXJcbi8vICcrMTA6MDAnID4gWycxMCcsICAnMDAnXVxuLy8gJy0xNTMwJyAgPiBbJy0xNScsICczMCddXG52YXIgY2h1bmtPZmZzZXQgPSAvKFtcXCtcXC1dfFxcZFxcZCkvZ2k7XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlciwgc3RyaW5nKSB7XG4gICAgdmFyIG1hdGNoZXMgPSAoc3RyaW5nIHx8ICcnKS5tYXRjaChtYXRjaGVyKTtcblxuICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjaHVuayAgID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdIHx8IFtdO1xuICAgIHZhciBwYXJ0cyAgID0gKGNodW5rICsgJycpLm1hdGNoKGNodW5rT2Zmc2V0KSB8fCBbJy0nLCAwLCAwXTtcbiAgICB2YXIgbWludXRlcyA9ICsocGFydHNbMV0gKiA2MCkgKyB0b0ludChwYXJ0c1syXSk7XG5cbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCA/XG4gICAgICAwIDpcbiAgICAgIHBhcnRzWzBdID09PSAnKycgPyBtaW51dGVzIDogLW1pbnV0ZXM7XG59XG5cbi8vIFJldHVybiBhIG1vbWVudCBmcm9tIGlucHV0LCB0aGF0IGlzIGxvY2FsL3V0Yy96b25lIGVxdWl2YWxlbnQgdG8gbW9kZWwuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCBtb2RlbCkge1xuICAgIHZhciByZXMsIGRpZmY7XG4gICAgaWYgKG1vZGVsLl9pc1VUQykge1xuICAgICAgICByZXMgPSBtb2RlbC5jbG9uZSgpO1xuICAgICAgICBkaWZmID0gKGlzTW9tZW50KGlucHV0KSB8fCBpc0RhdGUoaW5wdXQpID8gaW5wdXQudmFsdWVPZigpIDogY3JlYXRlTG9jYWwoaW5wdXQpLnZhbHVlT2YoKSkgLSByZXMudmFsdWVPZigpO1xuICAgICAgICAvLyBVc2UgbG93LWxldmVsIGFwaSwgYmVjYXVzZSB0aGlzIGZuIGlzIGxvdy1sZXZlbCBhcGkuXG4gICAgICAgIHJlcy5fZC5zZXRUaW1lKHJlcy5fZC52YWx1ZU9mKCkgKyBkaWZmKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbChpbnB1dCkubG9jYWwoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGVPZmZzZXQgKG0pIHtcbiAgICAvLyBPbiBGaXJlZm94LjI0IERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyBhIGZsb2F0aW5nIHBvaW50LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L3B1bGwvMTg3MVxuICAgIHJldHVybiAtTWF0aC5yb3VuZChtLl9kLmdldFRpbWV6b25lT2Zmc2V0KCkgLyAxNSkgKiAxNTtcbn1cblxuLy8gSE9PS1NcblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciBhIG1vbWVudCBpcyBtdXRhdGVkLlxuLy8gSXQgaXMgaW50ZW5kZWQgdG8ga2VlcCB0aGUgb2Zmc2V0IGluIHN5bmMgd2l0aCB0aGUgdGltZXpvbmUuXG5ob29rcy51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gTU9NRU5UU1xuXG4vLyBrZWVwTG9jYWxUaW1lID0gdHJ1ZSBtZWFucyBvbmx5IGNoYW5nZSB0aGUgdGltZXpvbmUsIHdpdGhvdXRcbi8vIGFmZmVjdGluZyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt1dGNPZmZzZXQoMiwgdHJ1ZSldLS0+XG4vLyA1OjMxOjI2ICswMjAwIEl0IGlzIHBvc3NpYmxlIHRoYXQgNTozMToyNiBkb2Vzbid0IGV4aXN0IHdpdGggb2Zmc2V0XG4vLyArMDIwMCwgc28gd2UgYWRqdXN0IHRoZSB0aW1lIGFzIG5lZWRlZCwgdG8gYmUgdmFsaWQuXG4vL1xuLy8gS2VlcGluZyB0aGUgdGltZSBhY3R1YWxseSBhZGRzL3N1YnRyYWN0cyAob25lIGhvdXIpXG4vLyBmcm9tIHRoZSBhY3R1YWwgcmVwcmVzZW50ZWQgdGltZS4gVGhhdCBpcyB3aHkgd2UgY2FsbCB1cGRhdGVPZmZzZXRcbi8vIGEgc2Vjb25kIHRpbWUuIEluIGNhc2UgaXQgd2FudHMgdXMgdG8gY2hhbmdlIHRoZSBvZmZzZXQgYWdhaW5cbi8vIF9jaGFuZ2VJblByb2dyZXNzID09IHRydWUgY2FzZSwgdGhlbiB3ZSBoYXZlIHRvIGFkanVzdCwgYmVjYXVzZVxuLy8gdGhlcmUgaXMgbm8gc3VjaCB0aW1lIGluIHRoZSBnaXZlbiB0aW1lem9uZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRPZmZzZXQgKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XG4gICAgdmFyIG9mZnNldCA9IHRoaXMuX29mZnNldCB8fCAwLFxuICAgICAgICBsb2NhbEFkanVzdDtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlucHV0ID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG4gICAgICAgICAgICBpZiAoaW5wdXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhpbnB1dCkgPCAxNikge1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dCAqIDYwO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faXNVVEMgJiYga2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgbG9jYWxBZGp1c3QgPSBnZXREYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29mZnNldCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9pc1VUQyA9IHRydWU7XG4gICAgICAgIGlmIChsb2NhbEFkanVzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChsb2NhbEFkanVzdCwgJ20nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2Zmc2V0ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgaWYgKCFrZWVwTG9jYWxUaW1lIHx8IHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBhZGRTdWJ0cmFjdCh0aGlzLCBjcmVhdGVEdXJhdGlvbihpbnB1dCAtIG9mZnNldCwgJ20nKSwgMSwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyBvZmZzZXQgOiBnZXREYXRlT2Zmc2V0KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFpvbmUgKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlucHV0ID0gLWlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtdGhpcy51dGNPZmZzZXQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPZmZzZXRUb1VUQyAoa2VlcExvY2FsVGltZSkge1xuICAgIHJldHVybiB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvTG9jYWwgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICBpZiAodGhpcy5faXNVVEMpIHtcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzKSwgJ20nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0ICgpIHtcbiAgICBpZiAodGhpcy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy51dGNPZmZzZXQodGhpcy5fdHptKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9pID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdFpvbmUgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoT2Zmc2V0LCB0aGlzLl9pKTtcbiAgICAgICAgaWYgKHRab25lICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KHRab25lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQgKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlucHV0ID0gaW5wdXQgPyBjcmVhdGVMb2NhbChpbnB1dCkudXRjT2Zmc2V0KCkgOiAwO1xuXG4gICAgcmV0dXJuICh0aGlzLnV0Y09mZnNldCgpIC0gaW5wdXQpICUgNjAgPT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZSAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCgwKS51dGNPZmZzZXQoKSB8fFxuICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDUpLnV0Y09mZnNldCgpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCAoKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9pc0RTVFNoaWZ0ZWQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG4gICAgfVxuXG4gICAgdmFyIGMgPSB7fTtcblxuICAgIGNvcHlDb25maWcoYywgdGhpcyk7XG4gICAgYyA9IHByZXBhcmVDb25maWcoYyk7XG5cbiAgICBpZiAoYy5fYSkge1xuICAgICAgICB2YXIgb3RoZXIgPSBjLl9pc1VUQyA/IGNyZWF0ZVVUQyhjLl9hKSA6IGNyZWF0ZUxvY2FsKGMuX2EpO1xuICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPSB0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgY29tcGFyZUFycmF5cyhjLl9hLCBvdGhlci50b0FycmF5KCkpID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gIXRoaXMuX2lzVVRDIDogZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1V0Y09mZnNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVXRjICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyAmJiB0aGlzLl9vZmZzZXQgPT09IDAgOiBmYWxzZTtcbn1cbiIsImltcG9ydCB7IER1cmF0aW9uLCBpc0R1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi4vdXRpbHMvaXMtbnVtYmVyJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuaW1wb3J0IGFic1JvdW5kIGZyb20gJy4uL3V0aWxzL2Ficy1yb3VuZCc7XG5pbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuLi91dGlscy9oYXMtb3duLXByb3AnO1xuaW1wb3J0IHsgREFURSwgSE9VUiwgTUlOVVRFLCBTRUNPTkQsIE1JTExJU0VDT05EIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGNsb25lV2l0aE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5cbi8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxudmFyIGFzcE5ldFJlZ2V4ID0gL14oXFwtKT8oPzooXFxkKilbLiBdKT8oXFxkKylcXDooXFxkKykoPzpcXDooXFxkKykoXFwuXFxkKik/KT8kLztcblxuLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbi8vIHNvbWV3aGF0IG1vcmUgaW4gbGluZSB3aXRoIDQuNC4zLjIgMjAwNCBzcGVjLCBidXQgYWxsb3dzIGRlY2ltYWwgYW55d2hlcmVcbi8vIGFuZCBmdXJ0aGVyIG1vZGlmaWVkIHRvIGFsbG93IGZvciBzdHJpbmdzIGNvbnRhaW5pbmcgYm90aCB3ZWVrIGFuZCBkYXlcbnZhciBpc29SZWdleCA9IC9eKC0pP1AoPzooLT9bMC05LC5dKilZKT8oPzooLT9bMC05LC5dKilNKT8oPzooLT9bMC05LC5dKilXKT8oPzooLT9bMC05LC5dKilEKT8oPzpUKD86KC0/WzAtOSwuXSopSCk/KD86KC0/WzAtOSwuXSopTSk/KD86KC0/WzAtOSwuXSopUyk/KT8kLztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUR1cmF0aW9uIChpbnB1dCwga2V5KSB7XG4gICAgdmFyIGR1cmF0aW9uID0gaW5wdXQsXG4gICAgICAgIC8vIG1hdGNoaW5nIGFnYWluc3QgcmVnZXhwIGlzIGV4cGVuc2l2ZSwgZG8gaXQgb24gZGVtYW5kXG4gICAgICAgIG1hdGNoID0gbnVsbCxcbiAgICAgICAgc2lnbixcbiAgICAgICAgcmV0LFxuICAgICAgICBkaWZmUmVzO1xuXG4gICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpKSB7XG4gICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgbXMgOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgZCAgOiBpbnB1dC5fZGF5cyxcbiAgICAgICAgICAgIE0gIDogaW5wdXQuX21vbnRoc1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uW2tleV0gPSBpbnB1dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1pbGxpc2Vjb25kcyA9IGlucHV0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICghIShtYXRjaCA9IGFzcE5ldFJlZ2V4LmV4ZWMoaW5wdXQpKSkge1xuICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xuICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIHkgIDogMCxcbiAgICAgICAgICAgIGQgIDogdG9JbnQobWF0Y2hbREFURV0pICAgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgIGggIDogdG9JbnQobWF0Y2hbSE9VUl0pICAgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgIG0gIDogdG9JbnQobWF0Y2hbTUlOVVRFXSkgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgIHMgIDogdG9JbnQobWF0Y2hbU0VDT05EXSkgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgIG1zIDogdG9JbnQoYWJzUm91bmQobWF0Y2hbTUlMTElTRUNPTkRdICogMTAwMCkpICogc2lnbiAvLyB0aGUgbWlsbGlzZWNvbmQgZGVjaW1hbCBwb2ludCBpcyBpbmNsdWRlZCBpbiB0aGUgbWF0Y2hcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgIHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IDE7XG4gICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgeSA6IHBhcnNlSXNvKG1hdGNoWzJdLCBzaWduKSxcbiAgICAgICAgICAgIE0gOiBwYXJzZUlzbyhtYXRjaFszXSwgc2lnbiksXG4gICAgICAgICAgICB3IDogcGFyc2VJc28obWF0Y2hbNF0sIHNpZ24pLFxuICAgICAgICAgICAgZCA6IHBhcnNlSXNvKG1hdGNoWzVdLCBzaWduKSxcbiAgICAgICAgICAgIGggOiBwYXJzZUlzbyhtYXRjaFs2XSwgc2lnbiksXG4gICAgICAgICAgICBtIDogcGFyc2VJc28obWF0Y2hbN10sIHNpZ24pLFxuICAgICAgICAgICAgcyA6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPT0gbnVsbCkgey8vIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ29iamVjdCcgJiYgKCdmcm9tJyBpbiBkdXJhdGlvbiB8fCAndG8nIGluIGR1cmF0aW9uKSkge1xuICAgICAgICBkaWZmUmVzID0gbW9tZW50c0RpZmZlcmVuY2UoY3JlYXRlTG9jYWwoZHVyYXRpb24uZnJvbSksIGNyZWF0ZUxvY2FsKGR1cmF0aW9uLnRvKSk7XG5cbiAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgZHVyYXRpb24ubXMgPSBkaWZmUmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgZHVyYXRpb24uTSA9IGRpZmZSZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJldCA9IG5ldyBEdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkgJiYgaGFzT3duUHJvcChpbnB1dCwgJ19sb2NhbGUnKSkge1xuICAgICAgICByZXQuX2xvY2FsZSA9IGlucHV0Ll9sb2NhbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuY3JlYXRlRHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG5cbmZ1bmN0aW9uIHBhcnNlSXNvIChpbnAsIHNpZ24pIHtcbiAgICAvLyBXZSdkIG5vcm1hbGx5IHVzZSB+fmlucCBmb3IgdGhpcywgYnV0IHVuZm9ydHVuYXRlbHkgaXQgYWxzb1xuICAgIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxuICAgIC8vIGlucCBtYXkgYmUgdW5kZWZpbmVkLCBzbyBjYXJlZnVsIGNhbGxpbmcgcmVwbGFjZSBvbiBpdC5cbiAgICB2YXIgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XG4gICAgcmV0dXJuIChpc05hTihyZXMpID8gMCA6IHJlcykgKiBzaWduO1xufVxuXG5mdW5jdGlvbiBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgdmFyIHJlcyA9IHttaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMH07XG5cbiAgICByZXMubW9udGhzID0gb3RoZXIubW9udGgoKSAtIGJhc2UubW9udGgoKSArXG4gICAgICAgIChvdGhlci55ZWFyKCkgLSBiYXNlLnllYXIoKSkgKiAxMjtcbiAgICBpZiAoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpLmlzQWZ0ZXIob3RoZXIpKSB7XG4gICAgICAgIC0tcmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gKyhiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJykpO1xuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICB2YXIgcmVzO1xuICAgIGlmICghKGJhc2UuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIHttaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMH07XG4gICAgfVxuXG4gICAgb3RoZXIgPSBjbG9uZVdpdGhPZmZzZXQob3RoZXIsIGJhc2UpO1xuICAgIGlmIChiYXNlLmlzQmVmb3JlKG90aGVyKSkge1xuICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKG90aGVyLCBiYXNlKTtcbiAgICAgICAgcmVzLm1pbGxpc2Vjb25kcyA9IC1yZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICByZXMubW9udGhzID0gLXJlcy5tb250aHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn1cbiIsImltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi9nZXQtc2V0JztcbmltcG9ydCB7IHNldE1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xuaW1wb3J0IHsgZGVwcmVjYXRlU2ltcGxlIH0gZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IGFic1JvdW5kIGZyb20gJy4uL3V0aWxzL2Ficy1yb3VuZCc7XG5cblxuLy8gVE9ETzogcmVtb3ZlICduYW1lJyBhcmcgYWZ0ZXIgZGVwcmVjYXRpb24gaXMgcmVtb3ZlZFxuZnVuY3Rpb24gY3JlYXRlQWRkZXIoZGlyZWN0aW9uLCBuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwsIHBlcmlvZCkge1xuICAgICAgICB2YXIgZHVyLCB0bXA7XG4gICAgICAgIC8vaW52ZXJ0IHRoZSBhcmd1bWVudHMsIGJ1dCBjb21wbGFpbiBhYm91dCBpdFxuICAgICAgICBpZiAocGVyaW9kICE9PSBudWxsICYmICFpc05hTigrcGVyaW9kKSkge1xuICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKG5hbWUsICdtb21lbnQoKS4nICsgbmFtZSAgKyAnKHBlcmlvZCwgbnVtYmVyKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG1vbWVudCgpLicgKyBuYW1lICsgJyhudW1iZXIsIHBlcmlvZCkuICcgK1xuICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2FkZC1pbnZlcnRlZC1wYXJhbS8gZm9yIG1vcmUgaW5mby4nKTtcbiAgICAgICAgICAgIHRtcCA9IHZhbDsgdmFsID0gcGVyaW9kOyBwZXJpb2QgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICB2YWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICt2YWwgOiB2YWw7XG4gICAgICAgIGR1ciA9IGNyZWF0ZUR1cmF0aW9uKHZhbCwgcGVyaW9kKTtcbiAgICAgICAgYWRkU3VidHJhY3QodGhpcywgZHVyLCBkaXJlY3Rpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU3VidHJhY3QgKG1vbSwgZHVyYXRpb24sIGlzQWRkaW5nLCB1cGRhdGVPZmZzZXQpIHtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZHVyYXRpb24uX21pbGxpc2Vjb25kcyxcbiAgICAgICAgZGF5cyA9IGFic1JvdW5kKGR1cmF0aW9uLl9kYXlzKSxcbiAgICAgICAgbW9udGhzID0gYWJzUm91bmQoZHVyYXRpb24uX21vbnRocyk7XG5cbiAgICBpZiAoIW1vbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgLy8gTm8gb3BcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZU9mZnNldCA9IHVwZGF0ZU9mZnNldCA9PSBudWxsID8gdHJ1ZSA6IHVwZGF0ZU9mZnNldDtcblxuICAgIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgbW9tLl9kLnNldFRpbWUobW9tLl9kLnZhbHVlT2YoKSArIG1pbGxpc2Vjb25kcyAqIGlzQWRkaW5nKTtcbiAgICB9XG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgc2V0KG1vbSwgJ0RhdGUnLCBnZXQobW9tLCAnRGF0ZScpICsgZGF5cyAqIGlzQWRkaW5nKTtcbiAgICB9XG4gICAgaWYgKG1vbnRocykge1xuICAgICAgICBzZXRNb250aChtb20sIGdldChtb20sICdNb250aCcpICsgbW9udGhzICogaXNBZGRpbmcpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlT2Zmc2V0KSB7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChtb20sIGRheXMgfHwgbW9udGhzKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgYWRkICAgICAgPSBjcmVhdGVBZGRlcigxLCAnYWRkJyk7XG5leHBvcnQgdmFyIHN1YnRyYWN0ID0gY3JlYXRlQWRkZXIoLTEsICdzdWJ0cmFjdCcpO1xuXG4iLCJpbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBjbG9uZVdpdGhPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvaXMtZnVuY3Rpb24nO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWxlbmRhckZvcm1hdChteU1vbWVudCwgbm93KSB7XG4gICAgdmFyIGRpZmYgPSBteU1vbWVudC5kaWZmKG5vdywgJ2RheXMnLCB0cnVlKTtcbiAgICByZXR1cm4gZGlmZiA8IC02ID8gJ3NhbWVFbHNlJyA6XG4gICAgICAgICAgICBkaWZmIDwgLTEgPyAnbGFzdFdlZWsnIDpcbiAgICAgICAgICAgIGRpZmYgPCAwID8gJ2xhc3REYXknIDpcbiAgICAgICAgICAgIGRpZmYgPCAxID8gJ3NhbWVEYXknIDpcbiAgICAgICAgICAgIGRpZmYgPCAyID8gJ25leHREYXknIDpcbiAgICAgICAgICAgIGRpZmYgPCA3ID8gJ25leHRXZWVrJyA6ICdzYW1lRWxzZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxlbmRhciAodGltZSwgZm9ybWF0cykge1xuICAgIC8vIFdlIHdhbnQgdG8gY29tcGFyZSB0aGUgc3RhcnQgb2YgdG9kYXksIHZzIHRoaXMuXG4gICAgLy8gR2V0dGluZyBzdGFydC1vZi10b2RheSBkZXBlbmRzIG9uIHdoZXRoZXIgd2UncmUgbG9jYWwvdXRjL29mZnNldCBvciBub3QuXG4gICAgdmFyIG5vdyA9IHRpbWUgfHwgY3JlYXRlTG9jYWwoKSxcbiAgICAgICAgc29kID0gY2xvbmVXaXRoT2Zmc2V0KG5vdywgdGhpcykuc3RhcnRPZignZGF5JyksXG4gICAgICAgIGZvcm1hdCA9IGhvb2tzLmNhbGVuZGFyRm9ybWF0KHRoaXMsIHNvZCkgfHwgJ3NhbWVFbHNlJztcblxuICAgIHZhciBvdXRwdXQgPSBmb3JtYXRzICYmIChpc0Z1bmN0aW9uKGZvcm1hdHNbZm9ybWF0XSkgPyBmb3JtYXRzW2Zvcm1hdF0uY2FsbCh0aGlzLCBub3cpIDogZm9ybWF0c1tmb3JtYXRdKTtcblxuICAgIHJldHVybiB0aGlzLmZvcm1hdChvdXRwdXQgfHwgdGhpcy5sb2NhbGVEYXRhKCkuY2FsZW5kYXIoZm9ybWF0LCB0aGlzLCBjcmVhdGVMb2NhbChub3cpKSk7XG59XG4iLCJpbXBvcnQgeyBNb21lbnQgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lICgpIHtcbiAgICByZXR1cm4gbmV3IE1vbWVudCh0aGlzKTtcbn1cbiIsImltcG9ydCB7IGlzTW9tZW50IH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJy4uL3V0aWxzL2lzLXVuZGVmaW5lZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FmdGVyIChpbnB1dCwgdW5pdHMpIHtcbiAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHMoIWlzVW5kZWZpbmVkKHVuaXRzKSA/IHVuaXRzIDogJ21pbGxpc2Vjb25kJyk7XG4gICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA+IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbElucHV0LnZhbHVlT2YoKSA8IHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCZWZvcmUgKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyghaXNVbmRlZmluZWQodW5pdHMpID8gdW5pdHMgOiAnbWlsbGlzZWNvbmQnKTtcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuIChmcm9tLCB0bywgdW5pdHMsIGluY2x1c2l2aXR5KSB7XG4gICAgaW5jbHVzaXZpdHkgPSBpbmNsdXNpdml0eSB8fCAnKCknO1xuICAgIHJldHVybiAoaW5jbHVzaXZpdHlbMF0gPT09ICcoJyA/IHRoaXMuaXNBZnRlcihmcm9tLCB1bml0cykgOiAhdGhpcy5pc0JlZm9yZShmcm9tLCB1bml0cykpICYmXG4gICAgICAgIChpbmNsdXNpdml0eVsxXSA9PT0gJyknID8gdGhpcy5pc0JlZm9yZSh0bywgdW5pdHMpIDogIXRoaXMuaXNBZnRlcih0bywgdW5pdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZSAoaW5wdXQsIHVuaXRzKSB7XG4gICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KSxcbiAgICAgICAgaW5wdXRNcztcbiAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzIHx8ICdtaWxsaXNlY29uZCcpO1xuICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPT09IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0TXMgPSBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU9yQWZ0ZXIgKGlucHV0LCB1bml0cykge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNBZnRlcihpbnB1dCx1bml0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVPckJlZm9yZSAoaW5wdXQsIHVuaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0JlZm9yZShpbnB1dCx1bml0cyk7XG59XG4iLCJpbXBvcnQgYWJzRmxvb3IgZnJvbSAnLi4vdXRpbHMvYWJzLWZsb29yJztcbmltcG9ydCB7IGNsb25lV2l0aE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZiAoaW5wdXQsIHVuaXRzLCBhc0Zsb2F0KSB7XG4gICAgdmFyIHRoYXQsXG4gICAgICAgIHpvbmVEZWx0YSxcbiAgICAgICAgZGVsdGEsIG91dHB1dDtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICB0aGF0ID0gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCB0aGlzKTtcblxuICAgIGlmICghdGhhdC5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICB6b25lRGVsdGEgPSAodGhhdC51dGNPZmZzZXQoKSAtIHRoaXMudXRjT2Zmc2V0KCkpICogNmU0O1xuXG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG5cbiAgICBpZiAodW5pdHMgPT09ICd5ZWFyJyB8fCB1bml0cyA9PT0gJ21vbnRoJyB8fCB1bml0cyA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KTtcbiAgICAgICAgaWYgKHVuaXRzID09PSAncXVhcnRlcicpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCAvIDM7XG4gICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0IC8gMTI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkZWx0YSA9IHRoaXMgLSB0aGF0O1xuICAgICAgICBvdXRwdXQgPSB1bml0cyA9PT0gJ3NlY29uZCcgPyBkZWx0YSAvIDFlMyA6IC8vIDEwMDBcbiAgICAgICAgICAgIHVuaXRzID09PSAnbWludXRlJyA/IGRlbHRhIC8gNmU0IDogLy8gMTAwMCAqIDYwXG4gICAgICAgICAgICB1bml0cyA9PT0gJ2hvdXInID8gZGVsdGEgLyAzNmU1IDogLy8gMTAwMCAqIDYwICogNjBcbiAgICAgICAgICAgIHVuaXRzID09PSAnZGF5JyA/IChkZWx0YSAtIHpvbmVEZWx0YSkgLyA4NjRlNSA6IC8vIDEwMDAgKiA2MCAqIDYwICogMjQsIG5lZ2F0ZSBkc3RcbiAgICAgICAgICAgIHVuaXRzID09PSAnd2VlaycgPyAoZGVsdGEgLSB6b25lRGVsdGEpIC8gNjA0OGU1IDogLy8gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcsIG5lZ2F0ZSBkc3RcbiAgICAgICAgICAgIGRlbHRhO1xuICAgIH1cbiAgICByZXR1cm4gYXNGbG9hdCA/IG91dHB1dCA6IGFic0Zsb29yKG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIG1vbnRoRGlmZiAoYSwgYikge1xuICAgIC8vIGRpZmZlcmVuY2UgaW4gbW9udGhzXG4gICAgdmFyIHdob2xlTW9udGhEaWZmID0gKChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyKSArIChiLm1vbnRoKCkgLSBhLm1vbnRoKCkpLFxuICAgICAgICAvLyBiIGlzIGluIChhbmNob3IgLSAxIG1vbnRoLCBhbmNob3IgKyAxIG1vbnRoKVxuICAgICAgICBhbmNob3IgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmLCAnbW9udGhzJyksXG4gICAgICAgIGFuY2hvcjIsIGFkanVzdDtcblxuICAgIGlmIChiIC0gYW5jaG9yIDwgMCkge1xuICAgICAgICBhbmNob3IyID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiAtIDEsICdtb250aHMnKTtcbiAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvciAtIGFuY2hvcjIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmICsgMSwgJ21vbnRocycpO1xuICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICBhZGp1c3QgPSAoYiAtIGFuY2hvcikgLyAoYW5jaG9yMiAtIGFuY2hvcik7XG4gICAgfVxuXG4gICAgLy9jaGVjayBmb3IgbmVnYXRpdmUgemVybywgcmV0dXJuIHplcm8gaWYgbmVnYXRpdmUgemVyb1xuICAgIHJldHVybiAtKHdob2xlTW9udGhEaWZmICsgYWRqdXN0KSB8fCAwO1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0TW9tZW50IH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2lzLWZ1bmN0aW9uJztcblxuaG9va3MuZGVmYXVsdEZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWic7XG5ob29rcy5kZWZhdWx0Rm9ybWF0VXRjID0gJ1lZWVktTU0tRERUSEg6bW06c3NbWl0nO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubG9jYWxlKCdlbicpLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSVNPU3RyaW5nICgpIHtcbiAgICB2YXIgbSA9IHRoaXMuY2xvbmUoKS51dGMoKTtcbiAgICBpZiAoMCA8IG0ueWVhcigpICYmIG0ueWVhcigpIDw9IDk5OTkpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpKSB7XG4gICAgICAgICAgICAvLyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgfjUweCBmYXN0ZXIsIHVzZSBpdCB3aGVuIHdlIGNhblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQobSwgJ1lZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQobSwgJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBodW1hbiByZWFkYWJsZSByZXByZXNlbnRhdGlvbiBvZiBhIG1vbWVudCB0aGF0IGNhblxuICogYWxzbyBiZSBldmFsdWF0ZWQgdG8gZ2V0IGEgbmV3IG1vbWVudCB3aGljaCBpcyB0aGUgc2FtZVxuICpcbiAqIEBsaW5rIGh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L2xhdGVzdC9kb2NzL2FwaS91dGlsLmh0bWwjdXRpbF9jdXN0b21faW5zcGVjdF9mdW5jdGlvbl9vbl9vYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiAnbW9tZW50LmludmFsaWQoLyogJyArIHRoaXMuX2kgKyAnICovKSc7XG4gICAgfVxuICAgIHZhciBmdW5jID0gJ21vbWVudCc7XG4gICAgdmFyIHpvbmUgPSAnJztcbiAgICBpZiAoIXRoaXMuaXNMb2NhbCgpKSB7XG4gICAgICAgIGZ1bmMgPSB0aGlzLnV0Y09mZnNldCgpID09PSAwID8gJ21vbWVudC51dGMnIDogJ21vbWVudC5wYXJzZVpvbmUnO1xuICAgICAgICB6b25lID0gJ1onO1xuICAgIH1cbiAgICB2YXIgcHJlZml4ID0gJ1snICsgZnVuYyArICcoXCJdJztcbiAgICB2YXIgeWVhciA9ICgwIDwgdGhpcy55ZWFyKCkgJiYgdGhpcy55ZWFyKCkgPD0gOTk5OSkgPyAnWVlZWScgOiAnWVlZWVlZJztcbiAgICB2YXIgZGF0ZXRpbWUgPSAnLU1NLUREW1RdSEg6bW06c3MuU1NTJztcbiAgICB2YXIgc3VmZml4ID0gem9uZSArICdbXCIpXSc7XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXQocHJlZml4ICsgeWVhciArIGRhdGV0aW1lICsgc3VmZml4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCAoaW5wdXRTdHJpbmcpIHtcbiAgICBpZiAoIWlucHV0U3RyaW5nKSB7XG4gICAgICAgIGlucHV0U3RyaW5nID0gdGhpcy5pc1V0YygpID8gaG9va3MuZGVmYXVsdEZvcm1hdFV0YyA6IGhvb2tzLmRlZmF1bHRGb3JtYXQ7XG4gICAgfVxuICAgIHZhciBvdXRwdXQgPSBmb3JtYXRNb21lbnQodGhpcywgaW5wdXRTdHJpbmcpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5wb3N0Zm9ybWF0KG91dHB1dCk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NyZWF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBpc01vbWVudCB9IGZyb20gJy4uL21vbWVudC9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tICh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fFxuICAgICAgICAgICAgIGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHt0bzogdGhpcywgZnJvbTogdGltZX0pLmxvY2FsZSh0aGlzLmxvY2FsZSgpKS5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbU5vdyAod2l0aG91dFN1ZmZpeCkge1xuICAgIHJldHVybiB0aGlzLmZyb20oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NyZWF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBpc01vbWVudCB9IGZyb20gJy4uL21vbWVudC9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiB0byAodGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHxcbiAgICAgICAgICAgICBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7ZnJvbTogdGhpcywgdG86IHRpbWV9KS5sb2NhbGUodGhpcy5sb2NhbGUoKSkuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTm93ICh3aXRob3V0U3VmZml4KSB7XG4gICAgcmV0dXJuIHRoaXMudG8oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi91dGlscy9kZXByZWNhdGUnO1xuXG4vLyBJZiBwYXNzZWQgYSBsb2NhbGUga2V5LCBpdCB3aWxsIHNldCB0aGUgbG9jYWxlIGZvciB0aGlzXG4vLyBpbnN0YW5jZS4gIE90aGVyd2lzZSwgaXQgd2lsbCByZXR1cm4gdGhlIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyB2YXJpYWJsZXMgZm9yIHRoaXMgaW5zdGFuY2UuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlIChrZXkpIHtcbiAgICB2YXIgbmV3TG9jYWxlRGF0YTtcblxuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0xvY2FsZURhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgaWYgKG5ld0xvY2FsZURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxlID0gbmV3TG9jYWxlRGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgbGFuZyA9IGRlcHJlY2F0ZShcbiAgICAnbW9tZW50KCkubGFuZygpIGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQsIHVzZSBtb21lbnQoKS5sb2NhbGVEYXRhKCkgdG8gZ2V0IHRoZSBsYW5ndWFnZSBjb25maWd1cmF0aW9uLiBVc2UgbW9tZW50KCkubG9jYWxlKCkgdG8gY2hhbmdlIGxhbmd1YWdlcy4nLFxuICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xufVxuIiwiaW1wb3J0IHsgbm9ybWFsaXplVW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2YgKHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgLy8gdGhlIGZvbGxvd2luZyBzd2l0Y2ggaW50ZW50aW9uYWxseSBvbWl0cyBicmVhayBrZXl3b3Jkc1xuICAgIC8vIHRvIHV0aWxpemUgZmFsbGluZyB0aHJvdWdoIHRoZSBjYXNlcy5cbiAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgdGhpcy5tb250aCgwKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIHRoaXMuZGF0ZSgxKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIHRoaXMuaG91cnMoMCk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgdGhpcy5taW51dGVzKDApO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgdGhpcy5zZWNvbmRzKDApO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgdGhpcy5taWxsaXNlY29uZHMoMCk7XG4gICAgfVxuXG4gICAgLy8gd2Vla3MgYXJlIGEgc3BlY2lhbCBjYXNlXG4gICAgaWYgKHVuaXRzID09PSAnd2VlaycpIHtcbiAgICAgICAgdGhpcy53ZWVrZGF5KDApO1xuICAgIH1cbiAgICBpZiAodW5pdHMgPT09ICdpc29XZWVrJykge1xuICAgICAgICB0aGlzLmlzb1dlZWtkYXkoMSk7XG4gICAgfVxuXG4gICAgLy8gcXVhcnRlcnMgYXJlIGFsc28gc3BlY2lhbFxuICAgIGlmICh1bml0cyA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgICAgIHRoaXMubW9udGgoTWF0aC5mbG9vcih0aGlzLm1vbnRoKCkgLyAzKSAqIDMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kT2YgKHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gJ2RhdGUnIGlzIGFuIGFsaWFzIGZvciAnZGF5Jywgc28gaXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgc3VjaC5cbiAgICBpZiAodW5pdHMgPT09ICdkYXRlJykge1xuICAgICAgICB1bml0cyA9ICdkYXknO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXJ0T2YodW5pdHMpLmFkZCgxLCAodW5pdHMgPT09ICdpc29XZWVrJyA/ICd3ZWVrJyA6IHVuaXRzKSkuc3VidHJhY3QoMSwgJ21zJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdmFsdWVPZiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2QudmFsdWVPZigpIC0gKCh0aGlzLl9vZmZzZXQgfHwgMCkgKiA2MDAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml4ICgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlICgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheSAoKSB7XG4gICAgdmFyIG0gPSB0aGlzO1xuICAgIHJldHVybiBbbS55ZWFyKCksIG0ubW9udGgoKSwgbS5kYXRlKCksIG0uaG91cigpLCBtLm1pbnV0ZSgpLCBtLnNlY29uZCgpLCBtLm1pbGxpc2Vjb25kKCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QgKCkge1xuICAgIHZhciBtID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyczogbS55ZWFyKCksXG4gICAgICAgIG1vbnRoczogbS5tb250aCgpLFxuICAgICAgICBkYXRlOiBtLmRhdGUoKSxcbiAgICAgICAgaG91cnM6IG0uaG91cnMoKSxcbiAgICAgICAgbWludXRlczogbS5taW51dGVzKCksXG4gICAgICAgIHNlY29uZHM6IG0uc2Vjb25kcygpLFxuICAgICAgICBtaWxsaXNlY29uZHM6IG0ubWlsbGlzZWNvbmRzKClcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgICAvLyBuZXcgRGF0ZShOYU4pLnRvSlNPTigpID09PSBudWxsXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy50b0lTT1N0cmluZygpIDogbnVsbDtcbn1cbiIsImltcG9ydCB7IGlzVmFsaWQgYXMgX2lzVmFsaWQgfSBmcm9tICcuLi9jcmVhdGUvdmFsaWQnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuLi91dGlscy9leHRlbmQnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkICgpIHtcbiAgICByZXR1cm4gX2lzVmFsaWQodGhpcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzaW5nRmxhZ3MgKCkge1xuICAgIHJldHVybiBleHRlbmQoe30sIGdldFBhcnNpbmdGbGFncyh0aGlzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkQXQgKCkge1xuICAgIHJldHVybiBnZXRQYXJzaW5nRmxhZ3ModGhpcykub3ZlcmZsb3c7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRpb25EYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0OiB0aGlzLl9pLFxuICAgICAgICBmb3JtYXQ6IHRoaXMuX2YsXG4gICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlLFxuICAgICAgICBpc1VUQzogdGhpcy5faXNVVEMsXG4gICAgICAgIHN0cmljdDogdGhpcy5fc3RyaWN0XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gxdG80LCBtYXRjaDF0bzYsIG1hdGNoMiwgbWF0Y2g0LCBtYXRjaDYsIG1hdGNoU2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkV2Vla1BhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyB3ZWVrT2ZZZWFyLCB3ZWVrc0luWWVhciwgZGF5T2ZZZWFyRnJvbVdlZWtzIH0gZnJvbSAnLi93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydnZycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMud2Vla1llYXIoKSAlIDEwMDtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ0dHJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpICUgMTAwO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4gKHRva2VuLCBnZXR0ZXIpIHtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbdG9rZW4sIHRva2VuLmxlbmd0aF0sIDAsIGdldHRlcik7XG59XG5cbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2cnLCAgICAgJ3dlZWtZZWFyJyk7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnZycsICAgICd3ZWVrWWVhcicpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHRycsICAnaXNvV2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0dHJywgJ2lzb1dlZWtZZWFyJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCd3ZWVrWWVhcicsICdnZycpO1xuYWRkVW5pdEFsaWFzKCdpc29XZWVrWWVhcicsICdHRycpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ3dlZWtZZWFyJywgMSk7XG5hZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtZZWFyJywgMSk7XG5cblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdHJywgICAgICBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdnJywgICAgICBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdHRycsICAgICBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdnZycsICAgICBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdHR0dHJywgICBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdnZ2dnJywgICBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdHR0dHRycsICBtYXRjaDF0bzYsIG1hdGNoNik7XG5hZGRSZWdleFRva2VuKCdnZ2dnZycsICBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZ2dnZycsICdnZ2dnZycsICdHR0dHJywgJ0dHR0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDIpXSA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW5dID0gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xufSk7XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFdlZWtZZWFyIChpbnB1dCkge1xuICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKHRoaXMsXG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIHRoaXMud2VlaygpLFxuICAgICAgICAgICAgdGhpcy53ZWVrZGF5KCksXG4gICAgICAgICAgICB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3csXG4gICAgICAgICAgICB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3kpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0SVNPV2Vla1llYXIgKGlucHV0KSB7XG4gICAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyLmNhbGwodGhpcyxcbiAgICAgICAgICAgIGlucHV0LCB0aGlzLmlzb1dlZWsoKSwgdGhpcy5pc29XZWVrZGF5KCksIDEsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIgKCkge1xuICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgMSwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrc0luWWVhciAoKSB7XG4gICAgdmFyIHdlZWtJbmZvID0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWs7XG4gICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCB3ZWVrSW5mby5kb3csIHdlZWtJbmZvLmRveSk7XG59XG5cbmZ1bmN0aW9uIGdldFNldFdlZWtZZWFySGVscGVyKGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgIHZhciB3ZWVrc1RhcmdldDtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gd2Vla09mWWVhcih0aGlzLCBkb3csIGRveSkueWVhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XG4gICAgICAgIGlmICh3ZWVrID4gd2Vla3NUYXJnZXQpIHtcbiAgICAgICAgICAgIHdlZWsgPSB3ZWVrc1RhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0V2Vla0FsbC5jYWxsKHRoaXMsIGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRXZWVrQWxsKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgIHZhciBkYXlPZlllYXJEYXRhID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSksXG4gICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKGRheU9mWWVhckRhdGEueWVhciwgMCwgZGF5T2ZZZWFyRGF0YS5kYXlPZlllYXIpO1xuXG4gICAgdGhpcy55ZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgdGhpcy5tb250aChkYXRlLmdldFVUQ01vbnRoKCkpO1xuICAgIHRoaXMuZGF0ZShkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDEgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgTU9OVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignUScsIDAsICdRbycsICdxdWFydGVyJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdxdWFydGVyJywgJ1EnKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdxdWFydGVyJywgNyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignUScsIG1hdGNoMSk7XG5hZGRQYXJzZVRva2VuKCdRJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W01PTlRIXSA9ICh0b0ludChpbnB1dCkgLSAxKSAqIDM7XG59KTtcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0UXVhcnRlciAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IE1hdGguY2VpbCgodGhpcy5tb250aCgpICsgMSkgLyAzKSA6IHRoaXMubW9udGgoKGlucHV0IC0gMSkgKiAzICsgdGhpcy5tb250aCgpICUgMyk7XG59XG4iLCJpbXBvcnQgeyBtYWtlR2V0U2V0IH0gZnJvbSAnLi4vbW9tZW50L2dldC1zZXQnO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgREFURSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdEJywgWydERCcsIDJdLCAnRG8nLCAnZGF0ZScpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnZGF0ZScsICdEJyk7XG5cbi8vIFBSSU9ST0lUWVxuYWRkVW5pdFByaW9yaXR5KCdkYXRlJywgOSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignRCcsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGlzU3RyaWN0ID8gbG9jYWxlLl9vcmRpbmFsUGFyc2UgOiBsb2NhbGUuX29yZGluYWxQYXJzZUxlbmllbnQ7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ0QnLCAnREQnXSwgREFURSk7XG5hZGRQYXJzZVRva2VuKCdEbycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtEQVRFXSA9IHRvSW50KGlucHV0Lm1hdGNoKG1hdGNoMXRvMilbMF0sIDEwKTtcbn0pO1xuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCB2YXIgZ2V0U2V0RGF5T2ZNb250aCA9IG1ha2VHZXRTZXQoJ0RhdGUnLCB0cnVlKTtcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMywgbWF0Y2gxdG8zIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgZGF5c0luWWVhciB9IGZyb20gJy4veWVhcic7XG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ0RERCcsIFsnRERERCcsIDNdLCAnREREbycsICdkYXlPZlllYXInKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2RheU9mWWVhcicsICdEREQnKTtcblxuLy8gUFJJT1JJVFlcbmFkZFVuaXRQcmlvcml0eSgnZGF5T2ZZZWFyJywgNCk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignREREJywgIG1hdGNoMXRvMyk7XG5hZGRSZWdleFRva2VuKCdEREREJywgbWF0Y2gzKTtcbmFkZFBhcnNlVG9rZW4oWydEREQnLCAnRERERCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldERheU9mWWVhciAoaW5wdXQpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gTWF0aC5yb3VuZCgodGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpIC0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ3llYXInKSkgLyA4NjRlNSkgKyAxO1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gZGF5T2ZZZWFyIDogdGhpcy5hZGQoKGlucHV0IC0gZGF5T2ZZZWFyKSwgJ2QnKTtcbn1cbiIsImltcG9ydCB7IG1ha2VHZXRTZXQgfSBmcm9tICcuLi9tb21lbnQvZ2V0LXNldCc7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBNSU5VVEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ20nLCBbJ21tJywgMl0sIDAsICdtaW51dGUnKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ21pbnV0ZScsICdtJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnbWludXRlJywgMTQpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ20nLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ21tJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUGFyc2VUb2tlbihbJ20nLCAnbW0nXSwgTUlOVVRFKTtcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgdmFyIGdldFNldE1pbnV0ZSA9IG1ha2VHZXRTZXQoJ01pbnV0ZXMnLCBmYWxzZSk7XG4iLCJpbXBvcnQgeyBtYWtlR2V0U2V0IH0gZnJvbSAnLi4vbW9tZW50L2dldC1zZXQnO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdzJywgWydzcycsIDJdLCAwLCAnc2Vjb25kJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdzZWNvbmQnLCAncycpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ3NlY29uZCcsIDE1KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdzJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdzcycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFBhcnNlVG9rZW4oWydzJywgJ3NzJ10sIFNFQ09ORCk7XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IHZhciBnZXRTZXRTZWNvbmQgPSBtYWtlR2V0U2V0KCdTZWNvbmRzJywgZmFsc2UpO1xuIiwiaW1wb3J0IHsgbWFrZUdldFNldCB9IGZyb20gJy4uL21vbWVudC9nZXQtc2V0JztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMSwgbWF0Y2gyLCBtYXRjaDMsIG1hdGNoMXRvMywgbWF0Y2hVbnNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBNSUxMSVNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdTJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMDApO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnU1MnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1MnLCAzXSwgMCwgJ21pbGxpc2Vjb25kJyk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1MnLCA0XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTUycsIDVdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1MnLCA2XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1MnLCA3XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTUycsIDhdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTU1MnLCA5XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDAwO1xufSk7XG5cblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ21pbGxpc2Vjb25kJywgJ21zJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnbWlsbGlzZWNvbmQnLCAxNik7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignUycsICAgIG1hdGNoMXRvMywgbWF0Y2gxKTtcbmFkZFJlZ2V4VG9rZW4oJ1NTJywgICBtYXRjaDF0bzMsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdTU1MnLCAgbWF0Y2gxdG8zLCBtYXRjaDMpO1xuXG52YXIgdG9rZW47XG5mb3IgKHRva2VuID0gJ1NTU1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgYWRkUmVnZXhUb2tlbih0b2tlbiwgbWF0Y2hVbnNpZ25lZCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTXMoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQoKCcwLicgKyBpbnB1dCkgKiAxMDAwKTtcbn1cblxuZm9yICh0b2tlbiA9ICdTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xufVxuLy8gTU9NRU5UU1xuXG5leHBvcnQgdmFyIGdldFNldE1pbGxpc2Vjb25kID0gbWFrZUdldFNldCgnTWlsbGlzZWNvbmRzJywgZmFsc2UpO1xuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigneicsICAwLCAwLCAnem9uZUFiYnInKTtcbmFkZEZvcm1hdFRva2VuKCd6eicsIDAsIDAsICd6b25lTmFtZScpO1xuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRab25lQWJiciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ1VUQycgOiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVOYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG59XG4iLCJpbXBvcnQgeyBNb21lbnQgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxudmFyIHByb3RvID0gTW9tZW50LnByb3RvdHlwZTtcblxuaW1wb3J0IHsgYWRkLCBzdWJ0cmFjdCB9IGZyb20gJy4vYWRkLXN1YnRyYWN0JztcbmltcG9ydCB7IGNhbGVuZGFyLCBnZXRDYWxlbmRhckZvcm1hdCB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgY2xvbmUgfSBmcm9tICcuL2Nsb25lJztcbmltcG9ydCB7IGlzQmVmb3JlLCBpc0JldHdlZW4sIGlzU2FtZSwgaXNBZnRlciwgaXNTYW1lT3JBZnRlciwgaXNTYW1lT3JCZWZvcmUgfSBmcm9tICcuL2NvbXBhcmUnO1xuaW1wb3J0IHsgZGlmZiB9IGZyb20gJy4vZGlmZic7XG5pbXBvcnQgeyBmb3JtYXQsIHRvU3RyaW5nLCB0b0lTT1N0cmluZywgaW5zcGVjdCB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IGZyb20sIGZyb21Ob3cgfSBmcm9tICcuL2Zyb20nO1xuaW1wb3J0IHsgdG8sIHRvTm93IH0gZnJvbSAnLi90byc7XG5pbXBvcnQgeyBzdHJpbmdHZXQsIHN0cmluZ1NldCB9IGZyb20gJy4vZ2V0LXNldCc7XG5pbXBvcnQgeyBsb2NhbGUsIGxvY2FsZURhdGEsIGxhbmcgfSBmcm9tICcuL2xvY2FsZSc7XG5pbXBvcnQgeyBwcm90b3R5cGVNaW4sIHByb3RvdHlwZU1heCB9IGZyb20gJy4vbWluLW1heCc7XG5pbXBvcnQgeyBzdGFydE9mLCBlbmRPZiB9IGZyb20gJy4vc3RhcnQtZW5kLW9mJztcbmltcG9ydCB7IHZhbHVlT2YsIHRvRGF0ZSwgdG9BcnJheSwgdG9PYmplY3QsIHRvSlNPTiwgdW5peCB9IGZyb20gJy4vdG8tdHlwZSc7XG5pbXBvcnQgeyBpc1ZhbGlkLCBwYXJzaW5nRmxhZ3MsIGludmFsaWRBdCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgY3JlYXRpb25EYXRhIH0gZnJvbSAnLi9jcmVhdGlvbi1kYXRhJztcblxucHJvdG8uYWRkICAgICAgICAgICAgICAgPSBhZGQ7XG5wcm90by5jYWxlbmRhciAgICAgICAgICA9IGNhbGVuZGFyO1xucHJvdG8uY2xvbmUgICAgICAgICAgICAgPSBjbG9uZTtcbnByb3RvLmRpZmYgICAgICAgICAgICAgID0gZGlmZjtcbnByb3RvLmVuZE9mICAgICAgICAgICAgID0gZW5kT2Y7XG5wcm90by5mb3JtYXQgICAgICAgICAgICA9IGZvcm1hdDtcbnByb3RvLmZyb20gICAgICAgICAgICAgID0gZnJvbTtcbnByb3RvLmZyb21Ob3cgICAgICAgICAgID0gZnJvbU5vdztcbnByb3RvLnRvICAgICAgICAgICAgICAgID0gdG87XG5wcm90by50b05vdyAgICAgICAgICAgICA9IHRvTm93O1xucHJvdG8uZ2V0ICAgICAgICAgICAgICAgPSBzdHJpbmdHZXQ7XG5wcm90by5pbnZhbGlkQXQgICAgICAgICA9IGludmFsaWRBdDtcbnByb3RvLmlzQWZ0ZXIgICAgICAgICAgID0gaXNBZnRlcjtcbnByb3RvLmlzQmVmb3JlICAgICAgICAgID0gaXNCZWZvcmU7XG5wcm90by5pc0JldHdlZW4gICAgICAgICA9IGlzQmV0d2VlbjtcbnByb3RvLmlzU2FtZSAgICAgICAgICAgID0gaXNTYW1lO1xucHJvdG8uaXNTYW1lT3JBZnRlciAgICAgPSBpc1NhbWVPckFmdGVyO1xucHJvdG8uaXNTYW1lT3JCZWZvcmUgICAgPSBpc1NhbWVPckJlZm9yZTtcbnByb3RvLmlzVmFsaWQgICAgICAgICAgID0gaXNWYWxpZDtcbnByb3RvLmxhbmcgICAgICAgICAgICAgID0gbGFuZztcbnByb3RvLmxvY2FsZSAgICAgICAgICAgID0gbG9jYWxlO1xucHJvdG8ubG9jYWxlRGF0YSAgICAgICAgPSBsb2NhbGVEYXRhO1xucHJvdG8ubWF4ICAgICAgICAgICAgICAgPSBwcm90b3R5cGVNYXg7XG5wcm90by5taW4gICAgICAgICAgICAgICA9IHByb3RvdHlwZU1pbjtcbnByb3RvLnBhcnNpbmdGbGFncyAgICAgID0gcGFyc2luZ0ZsYWdzO1xucHJvdG8uc2V0ICAgICAgICAgICAgICAgPSBzdHJpbmdTZXQ7XG5wcm90by5zdGFydE9mICAgICAgICAgICA9IHN0YXJ0T2Y7XG5wcm90by5zdWJ0cmFjdCAgICAgICAgICA9IHN1YnRyYWN0O1xucHJvdG8udG9BcnJheSAgICAgICAgICAgPSB0b0FycmF5O1xucHJvdG8udG9PYmplY3QgICAgICAgICAgPSB0b09iamVjdDtcbnByb3RvLnRvRGF0ZSAgICAgICAgICAgID0gdG9EYXRlO1xucHJvdG8udG9JU09TdHJpbmcgICAgICAgPSB0b0lTT1N0cmluZztcbnByb3RvLmluc3BlY3QgICAgICAgICAgID0gaW5zcGVjdDtcbnByb3RvLnRvSlNPTiAgICAgICAgICAgID0gdG9KU09OO1xucHJvdG8udG9TdHJpbmcgICAgICAgICAgPSB0b1N0cmluZztcbnByb3RvLnVuaXggICAgICAgICAgICAgID0gdW5peDtcbnByb3RvLnZhbHVlT2YgICAgICAgICAgID0gdmFsdWVPZjtcbnByb3RvLmNyZWF0aW9uRGF0YSAgICAgID0gY3JlYXRpb25EYXRhO1xuXG4vLyBZZWFyXG5pbXBvcnQgeyBnZXRTZXRZZWFyLCBnZXRJc0xlYXBZZWFyIH0gZnJvbSAnLi4vdW5pdHMveWVhcic7XG5wcm90by55ZWFyICAgICAgID0gZ2V0U2V0WWVhcjtcbnByb3RvLmlzTGVhcFllYXIgPSBnZXRJc0xlYXBZZWFyO1xuXG4vLyBXZWVrIFllYXJcbmltcG9ydCB7IGdldFNldFdlZWtZZWFyLCBnZXRTZXRJU09XZWVrWWVhciwgZ2V0V2Vla3NJblllYXIsIGdldElTT1dlZWtzSW5ZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay15ZWFyJztcbnByb3RvLndlZWtZZWFyICAgID0gZ2V0U2V0V2Vla1llYXI7XG5wcm90by5pc29XZWVrWWVhciA9IGdldFNldElTT1dlZWtZZWFyO1xuXG4vLyBRdWFydGVyXG5pbXBvcnQgeyBnZXRTZXRRdWFydGVyIH0gZnJvbSAnLi4vdW5pdHMvcXVhcnRlcic7XG5wcm90by5xdWFydGVyID0gcHJvdG8ucXVhcnRlcnMgPSBnZXRTZXRRdWFydGVyO1xuXG4vLyBNb250aFxuaW1wb3J0IHsgZ2V0U2V0TW9udGgsIGdldERheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xucHJvdG8ubW9udGggICAgICAgPSBnZXRTZXRNb250aDtcbnByb3RvLmRheXNJbk1vbnRoID0gZ2V0RGF5c0luTW9udGg7XG5cbi8vIFdlZWtcbmltcG9ydCB7IGdldFNldFdlZWssIGdldFNldElTT1dlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcbnByb3RvLndlZWsgICAgICAgICAgID0gcHJvdG8ud2Vla3MgICAgICAgID0gZ2V0U2V0V2VlaztcbnByb3RvLmlzb1dlZWsgICAgICAgID0gcHJvdG8uaXNvV2Vla3MgICAgID0gZ2V0U2V0SVNPV2VlaztcbnByb3RvLndlZWtzSW5ZZWFyICAgID0gZ2V0V2Vla3NJblllYXI7XG5wcm90by5pc29XZWVrc0luWWVhciA9IGdldElTT1dlZWtzSW5ZZWFyO1xuXG4vLyBEYXlcbmltcG9ydCB7IGdldFNldERheU9mTW9udGggfSBmcm9tICcuLi91bml0cy9kYXktb2YtbW9udGgnO1xuaW1wb3J0IHsgZ2V0U2V0RGF5T2ZXZWVrLCBnZXRTZXRJU09EYXlPZldlZWssIGdldFNldExvY2FsZURheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcbmltcG9ydCB7IGdldFNldERheU9mWWVhciB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi15ZWFyJztcbnByb3RvLmRhdGUgICAgICAgPSBnZXRTZXREYXlPZk1vbnRoO1xucHJvdG8uZGF5ICAgICAgICA9IHByb3RvLmRheXMgICAgICAgICAgICAgPSBnZXRTZXREYXlPZldlZWs7XG5wcm90by53ZWVrZGF5ICAgID0gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrO1xucHJvdG8uaXNvV2Vla2RheSA9IGdldFNldElTT0RheU9mV2VlaztcbnByb3RvLmRheU9mWWVhciAgPSBnZXRTZXREYXlPZlllYXI7XG5cbi8vIEhvdXJcbmltcG9ydCB7IGdldFNldEhvdXIgfSBmcm9tICcuLi91bml0cy9ob3VyJztcbnByb3RvLmhvdXIgPSBwcm90by5ob3VycyA9IGdldFNldEhvdXI7XG5cbi8vIE1pbnV0ZVxuaW1wb3J0IHsgZ2V0U2V0TWludXRlIH0gZnJvbSAnLi4vdW5pdHMvbWludXRlJztcbnByb3RvLm1pbnV0ZSA9IHByb3RvLm1pbnV0ZXMgPSBnZXRTZXRNaW51dGU7XG5cbi8vIFNlY29uZFxuaW1wb3J0IHsgZ2V0U2V0U2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvc2Vjb25kJztcbnByb3RvLnNlY29uZCA9IHByb3RvLnNlY29uZHMgPSBnZXRTZXRTZWNvbmQ7XG5cbi8vIE1pbGxpc2Vjb25kXG5pbXBvcnQgeyBnZXRTZXRNaWxsaXNlY29uZCB9IGZyb20gJy4uL3VuaXRzL21pbGxpc2Vjb25kJztcbnByb3RvLm1pbGxpc2Vjb25kID0gcHJvdG8ubWlsbGlzZWNvbmRzID0gZ2V0U2V0TWlsbGlzZWNvbmQ7XG5cbi8vIE9mZnNldFxuaW1wb3J0IHtcbiAgICBnZXRTZXRPZmZzZXQsXG4gICAgc2V0T2Zmc2V0VG9VVEMsXG4gICAgc2V0T2Zmc2V0VG9Mb2NhbCxcbiAgICBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCxcbiAgICBoYXNBbGlnbmVkSG91ck9mZnNldCxcbiAgICBpc0RheWxpZ2h0U2F2aW5nVGltZSxcbiAgICBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQsXG4gICAgZ2V0U2V0Wm9uZSxcbiAgICBpc0xvY2FsLFxuICAgIGlzVXRjT2Zmc2V0LFxuICAgIGlzVXRjXG59IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5wcm90by51dGNPZmZzZXQgICAgICAgICAgICA9IGdldFNldE9mZnNldDtcbnByb3RvLnV0YyAgICAgICAgICAgICAgICAgID0gc2V0T2Zmc2V0VG9VVEM7XG5wcm90by5sb2NhbCAgICAgICAgICAgICAgICA9IHNldE9mZnNldFRvTG9jYWw7XG5wcm90by5wYXJzZVpvbmUgICAgICAgICAgICA9IHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0O1xucHJvdG8uaGFzQWxpZ25lZEhvdXJPZmZzZXQgPSBoYXNBbGlnbmVkSG91ck9mZnNldDtcbnByb3RvLmlzRFNUICAgICAgICAgICAgICAgID0gaXNEYXlsaWdodFNhdmluZ1RpbWU7XG5wcm90by5pc0xvY2FsICAgICAgICAgICAgICA9IGlzTG9jYWw7XG5wcm90by5pc1V0Y09mZnNldCAgICAgICAgICA9IGlzVXRjT2Zmc2V0O1xucHJvdG8uaXNVdGMgICAgICAgICAgICAgICAgPSBpc1V0YztcbnByb3RvLmlzVVRDICAgICAgICAgICAgICAgID0gaXNVdGM7XG5cbi8vIFRpbWV6b25lXG5pbXBvcnQgeyBnZXRab25lQWJiciwgZ2V0Wm9uZU5hbWUgfSBmcm9tICcuLi91bml0cy90aW1lem9uZSc7XG5wcm90by56b25lQWJiciA9IGdldFpvbmVBYmJyO1xucHJvdG8uem9uZU5hbWUgPSBnZXRab25lTmFtZTtcblxuLy8gRGVwcmVjYXRpb25zXG5pbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi91dGlscy9kZXByZWNhdGUnO1xucHJvdG8uZGF0ZXMgID0gZGVwcmVjYXRlKCdkYXRlcyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgZGF0ZSBpbnN0ZWFkLicsIGdldFNldERheU9mTW9udGgpO1xucHJvdG8ubW9udGhzID0gZGVwcmVjYXRlKCdtb250aHMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbnRoIGluc3RlYWQnLCBnZXRTZXRNb250aCk7XG5wcm90by55ZWFycyAgPSBkZXByZWNhdGUoJ3llYXJzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSB5ZWFyIGluc3RlYWQnLCBnZXRTZXRZZWFyKTtcbnByb3RvLnpvbmUgICA9IGRlcHJlY2F0ZSgnbW9tZW50KCkuem9uZSBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50KCkudXRjT2Zmc2V0IGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3Mvem9uZS8nLCBnZXRTZXRab25lKTtcbnByb3RvLmlzRFNUU2hpZnRlZCA9IGRlcHJlY2F0ZSgnaXNEU1RTaGlmdGVkIGlzIGRlcHJlY2F0ZWQuIFNlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RzdC1zaGlmdGVkLyBmb3IgbW9yZSBpbmZvcm1hdGlvbicsIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3RvO1xuIiwiaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgY3JlYXRlVVRDIH0gZnJvbSAnLi4vY3JlYXRlL3V0Yyc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkIH0gZnJvbSAnLi4vY3JlYXRlL3ZhbGlkJztcbmltcG9ydCB7IGlzTW9tZW50IH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBtaW4sIG1heCB9IGZyb20gJy4vbWluLW1heCc7XG5pbXBvcnQgeyBub3cgfSBmcm9tICcuL25vdyc7XG5pbXBvcnQgbW9tZW50UHJvdG90eXBlIGZyb20gJy4vcHJvdG90eXBlJztcblxuZnVuY3Rpb24gY3JlYXRlVW5peCAoaW5wdXQpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQgKiAxMDAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5ab25lICgpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5wYXJzZVpvbmUoKTtcbn1cblxuZXhwb3J0IHtcbiAgICBub3csXG4gICAgbWluLFxuICAgIG1heCxcbiAgICBpc01vbWVudCxcbiAgICBjcmVhdGVVVEMsXG4gICAgY3JlYXRlVW5peCxcbiAgICBjcmVhdGVMb2NhbCxcbiAgICBjcmVhdGVJblpvbmUsXG4gICAgY3JlYXRlSW52YWxpZCxcbiAgICBtb21lbnRQcm90b3R5cGVcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gcHJlUGFyc2VQb3N0Rm9ybWF0IChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbnZhciBwcm90byA9IExvY2FsZS5wcm90b3R5cGU7XG5cbmltcG9ydCB7IGNhbGVuZGFyIH0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBsb25nRGF0ZUZvcm1hdCB9IGZyb20gJy4vZm9ybWF0cyc7XG5pbXBvcnQgeyBpbnZhbGlkRGF0ZSB9IGZyb20gJy4vaW52YWxpZCc7XG5pbXBvcnQgeyBvcmRpbmFsIH0gZnJvbSAnLi9vcmRpbmFsJztcbmltcG9ydCB7IHByZVBhcnNlUG9zdEZvcm1hdCB9IGZyb20gJy4vcHJlLXBvc3QtZm9ybWF0JztcbmltcG9ydCB7IHJlbGF0aXZlVGltZSwgcGFzdEZ1dHVyZSB9IGZyb20gJy4vcmVsYXRpdmUnO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnLi9zZXQnO1xuXG5wcm90by5jYWxlbmRhciAgICAgICAgPSBjYWxlbmRhcjtcbnByb3RvLmxvbmdEYXRlRm9ybWF0ICA9IGxvbmdEYXRlRm9ybWF0O1xucHJvdG8uaW52YWxpZERhdGUgICAgID0gaW52YWxpZERhdGU7XG5wcm90by5vcmRpbmFsICAgICAgICAgPSBvcmRpbmFsO1xucHJvdG8ucHJlcGFyc2UgICAgICAgID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xucHJvdG8ucG9zdGZvcm1hdCAgICAgID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xucHJvdG8ucmVsYXRpdmVUaW1lICAgID0gcmVsYXRpdmVUaW1lO1xucHJvdG8ucGFzdEZ1dHVyZSAgICAgID0gcGFzdEZ1dHVyZTtcbnByb3RvLnNldCAgICAgICAgICAgICA9IHNldDtcblxuLy8gTW9udGhcbmltcG9ydCB7XG4gICAgbG9jYWxlTW9udGhzUGFyc2UsXG4gICAgbG9jYWxlTW9udGhzLFxuICAgIGxvY2FsZU1vbnRoc1Nob3J0LFxuICAgIG1vbnRoc1JlZ2V4LFxuICAgIG1vbnRoc1Nob3J0UmVnZXhcbn0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuXG5wcm90by5tb250aHMgICAgICAgICAgICA9ICAgICAgICBsb2NhbGVNb250aHM7XG5wcm90by5tb250aHNTaG9ydCAgICAgICA9ICAgICAgICBsb2NhbGVNb250aHNTaG9ydDtcbnByb3RvLm1vbnRoc1BhcnNlICAgICAgID0gICAgICAgIGxvY2FsZU1vbnRoc1BhcnNlO1xucHJvdG8ubW9udGhzUmVnZXggICAgICAgPSBtb250aHNSZWdleDtcbnByb3RvLm1vbnRoc1Nob3J0UmVnZXggID0gbW9udGhzU2hvcnRSZWdleDtcblxuLy8gV2Vla1xuaW1wb3J0IHsgbG9jYWxlV2VlaywgbG9jYWxlRmlyc3REYXlPZlllYXIsIGxvY2FsZUZpcnN0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XG5wcm90by53ZWVrID0gbG9jYWxlV2VlaztcbnByb3RvLmZpcnN0RGF5T2ZZZWFyID0gbG9jYWxlRmlyc3REYXlPZlllYXI7XG5wcm90by5maXJzdERheU9mV2VlayA9IGxvY2FsZUZpcnN0RGF5T2ZXZWVrO1xuXG4vLyBEYXkgb2YgV2Vla1xuaW1wb3J0IHtcbiAgICBsb2NhbGVXZWVrZGF5c1BhcnNlLFxuICAgIGxvY2FsZVdlZWtkYXlzLFxuICAgIGxvY2FsZVdlZWtkYXlzTWluLFxuICAgIGxvY2FsZVdlZWtkYXlzU2hvcnQsXG5cbiAgICB3ZWVrZGF5c1JlZ2V4LFxuICAgIHdlZWtkYXlzU2hvcnRSZWdleCxcbiAgICB3ZWVrZGF5c01pblJlZ2V4XG59IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxucHJvdG8ud2Vla2RheXMgICAgICAgPSAgICAgICAgbG9jYWxlV2Vla2RheXM7XG5wcm90by53ZWVrZGF5c01pbiAgICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c01pbjtcbnByb3RvLndlZWtkYXlzU2hvcnQgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzU2hvcnQ7XG5wcm90by53ZWVrZGF5c1BhcnNlICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1BhcnNlO1xuXG5wcm90by53ZWVrZGF5c1JlZ2V4ICAgICAgID0gICAgICAgIHdlZWtkYXlzUmVnZXg7XG5wcm90by53ZWVrZGF5c1Nob3J0UmVnZXggID0gICAgICAgIHdlZWtkYXlzU2hvcnRSZWdleDtcbnByb3RvLndlZWtkYXlzTWluUmVnZXggICAgPSAgICAgICAgd2Vla2RheXNNaW5SZWdleDtcblxuLy8gSG91cnNcbmltcG9ydCB7IGxvY2FsZUlzUE0sIGxvY2FsZU1lcmlkaWVtIH0gZnJvbSAnLi4vdW5pdHMvaG91cic7XG5cbnByb3RvLmlzUE0gPSBsb2NhbGVJc1BNO1xucHJvdG8ubWVyaWRpZW0gPSBsb2NhbGVNZXJpZGllbTtcbiIsImltcG9ydCBpc051bWJlciBmcm9tICcuLi91dGlscy9pcy1udW1iZXInO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi9sb2NhbGVzJztcbmltcG9ydCB7IGNyZWF0ZVVUQyB9IGZyb20gJy4uL2NyZWF0ZS91dGMnO1xuXG5mdW5jdGlvbiBnZXQgKGZvcm1hdCwgaW5kZXgsIGZpZWxkLCBzZXR0ZXIpIHtcbiAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCk7XG4gICAgdmFyIHV0YyA9IGNyZWF0ZVVUQygpLnNldChzZXR0ZXIsIGluZGV4KTtcbiAgICByZXR1cm4gbG9jYWxlW2ZpZWxkXSh1dGMsIGZvcm1hdCk7XG59XG5cbmZ1bmN0aW9uIGxpc3RNb250aHNJbXBsIChmb3JtYXQsIGluZGV4LCBmaWVsZCkge1xuICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuXG4gICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGdldChmb3JtYXQsIGluZGV4LCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgfVxuXG4gICAgdmFyIGk7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIG91dFtpXSA9IGdldChmb3JtYXQsIGksIGZpZWxkLCAnbW9udGgnKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLy8gKClcbi8vICg1KVxuLy8gKGZtdCwgNSlcbi8vIChmbXQpXG4vLyAodHJ1ZSlcbi8vICh0cnVlLCA1KVxuLy8gKHRydWUsIGZtdCwgNSlcbi8vICh0cnVlLCBmbXQpXG5mdW5jdGlvbiBsaXN0V2Vla2RheXNJbXBsIChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbGVTb3J0ZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0ID0gbG9jYWxlU29ydGVkO1xuICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgbG9jYWxlU29ydGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuICAgIH1cblxuICAgIHZhciBsb2NhbGUgPSBnZXRMb2NhbGUoKSxcbiAgICAgICAgc2hpZnQgPSBsb2NhbGVTb3J0ZWQgPyBsb2NhbGUuX3dlZWsuZG93IDogMDtcblxuICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBnZXQoZm9ybWF0LCAoaW5kZXggKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgIH1cblxuICAgIHZhciBpO1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIG91dFtpXSA9IGdldChmb3JtYXQsIChpICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RNb250aHMgKGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRocycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdE1vbnRoc1Nob3J0IChmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHNTaG9ydCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFdlZWtkYXlzIChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5cycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFdlZWtkYXlzU2hvcnQgKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzU2hvcnQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RXZWVrZGF5c01pbiAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXNNaW4nKTtcbn1cbiIsImltcG9ydCAnLi9wcm90b3R5cGUnO1xuaW1wb3J0IHsgZ2V0U2V0R2xvYmFsTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGVzJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuXG5nZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xuICAgIG9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgIG91dHB1dCA9ICh0b0ludChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcbiAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBvdXRwdXQ7XG4gICAgfVxufSk7XG4iLCIvLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5pbXBvcnQgJy4vcHJvdG90eXBlJztcblxuaW1wb3J0IHtcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUsXG4gICAgZGVmaW5lTG9jYWxlLFxuICAgIHVwZGF0ZUxvY2FsZSxcbiAgICBnZXRMb2NhbGUsXG4gICAgbGlzdExvY2FsZXNcbn0gZnJvbSAnLi9sb2NhbGVzJztcblxuaW1wb3J0IHtcbiAgICBsaXN0TW9udGhzLFxuICAgIGxpc3RNb250aHNTaG9ydCxcbiAgICBsaXN0V2Vla2RheXMsXG4gICAgbGlzdFdlZWtkYXlzU2hvcnQsXG4gICAgbGlzdFdlZWtkYXlzTWluXG59IGZyb20gJy4vbGlzdHMnO1xuXG5leHBvcnQge1xuICAgIGdldFNldEdsb2JhbExvY2FsZSxcbiAgICBkZWZpbmVMb2NhbGUsXG4gICAgdXBkYXRlTG9jYWxlLFxuICAgIGdldExvY2FsZSxcbiAgICBsaXN0TG9jYWxlcyxcbiAgICBsaXN0TW9udGhzLFxuICAgIGxpc3RNb250aHNTaG9ydCxcbiAgICBsaXN0V2Vla2RheXMsXG4gICAgbGlzdFdlZWtkYXlzU2hvcnQsXG4gICAgbGlzdFdlZWtkYXlzTWluXG59O1xuXG5pbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi91dGlscy9kZXByZWNhdGUnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5cbmhvb2tzLmxhbmcgPSBkZXByZWNhdGUoJ21vbWVudC5sYW5nIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlIGluc3RlYWQuJywgZ2V0U2V0R2xvYmFsTG9jYWxlKTtcbmhvb2tzLmxhbmdEYXRhID0gZGVwcmVjYXRlKCdtb21lbnQubGFuZ0RhdGEgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGVEYXRhIGluc3RlYWQuJywgZ2V0TG9jYWxlKTtcblxuaW1wb3J0ICcuL2VuJztcbiIsInZhciBtYXRoQWJzID0gTWF0aC5hYnM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhYnMgKCkge1xuICAgIHZhciBkYXRhICAgICAgICAgICA9IHRoaXMuX2RhdGE7XG5cbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBtYXRoQWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XG4gICAgdGhpcy5fZGF5cyAgICAgICAgID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICB0aGlzLl9tb250aHMgICAgICAgPSBtYXRoQWJzKHRoaXMuX21vbnRocyk7XG5cbiAgICBkYXRhLm1pbGxpc2Vjb25kcyAgPSBtYXRoQWJzKGRhdGEubWlsbGlzZWNvbmRzKTtcbiAgICBkYXRhLnNlY29uZHMgICAgICAgPSBtYXRoQWJzKGRhdGEuc2Vjb25kcyk7XG4gICAgZGF0YS5taW51dGVzICAgICAgID0gbWF0aEFicyhkYXRhLm1pbnV0ZXMpO1xuICAgIGRhdGEuaG91cnMgICAgICAgICA9IG1hdGhBYnMoZGF0YS5ob3Vycyk7XG4gICAgZGF0YS5tb250aHMgICAgICAgID0gbWF0aEFicyhkYXRhLm1vbnRocyk7XG4gICAgZGF0YS55ZWFycyAgICAgICAgID0gbWF0aEFicyhkYXRhLnllYXJzKTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XG5cbmZ1bmN0aW9uIGFkZFN1YnRyYWN0IChkdXJhdGlvbiwgaW5wdXQsIHZhbHVlLCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgb3RoZXIgPSBjcmVhdGVEdXJhdGlvbihpbnB1dCwgdmFsdWUpO1xuXG4gICAgZHVyYXRpb24uX21pbGxpc2Vjb25kcyArPSBkaXJlY3Rpb24gKiBvdGhlci5fbWlsbGlzZWNvbmRzO1xuICAgIGR1cmF0aW9uLl9kYXlzICAgICAgICAgKz0gZGlyZWN0aW9uICogb3RoZXIuX2RheXM7XG4gICAgZHVyYXRpb24uX21vbnRocyAgICAgICArPSBkaXJlY3Rpb24gKiBvdGhlci5fbW9udGhzO1xuXG4gICAgcmV0dXJuIGR1cmF0aW9uLl9idWJibGUoKTtcbn1cblxuLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgYWRkKDEsICdzJykgb3IgYWRkKGR1cmF0aW9uKVxuZXhwb3J0IGZ1bmN0aW9uIGFkZCAoaW5wdXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGFkZFN1YnRyYWN0KHRoaXMsIGlucHV0LCB2YWx1ZSwgMSk7XG59XG5cbi8vIHN1cHBvcnRzIG9ubHkgMi4wLXN0eWxlIHN1YnRyYWN0KDEsICdzJykgb3Igc3VidHJhY3QoZHVyYXRpb24pXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QgKGlucHV0LCB2YWx1ZSkge1xuICAgIHJldHVybiBhZGRTdWJ0cmFjdCh0aGlzLCBpbnB1dCwgdmFsdWUsIC0xKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFic0NlaWwgKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIpO1xuICAgIH1cbn1cbiIsImltcG9ydCBhYnNGbG9vciBmcm9tICcuLi91dGlscy9hYnMtZmxvb3InO1xuaW1wb3J0IGFic0NlaWwgZnJvbSAnLi4vdXRpbHMvYWJzLWNlaWwnO1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuXG5leHBvcnQgZnVuY3Rpb24gYnViYmxlICgpIHtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xuICAgIHZhciBkYXlzICAgICAgICAgPSB0aGlzLl9kYXlzO1xuICAgIHZhciBtb250aHMgICAgICAgPSB0aGlzLl9tb250aHM7XG4gICAgdmFyIGRhdGEgICAgICAgICA9IHRoaXMuX2RhdGE7XG4gICAgdmFyIHNlY29uZHMsIG1pbnV0ZXMsIGhvdXJzLCB5ZWFycywgbW9udGhzRnJvbURheXM7XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XG4gICAgLy8gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yMTY2XG4gICAgaWYgKCEoKG1pbGxpc2Vjb25kcyA+PSAwICYmIGRheXMgPj0gMCAmJiBtb250aHMgPj0gMCkgfHxcbiAgICAgICAgICAgIChtaWxsaXNlY29uZHMgPD0gMCAmJiBkYXlzIDw9IDAgJiYgbW9udGhzIDw9IDApKSkge1xuICAgICAgICBtaWxsaXNlY29uZHMgKz0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzKSArIGRheXMpICogODY0ZTU7XG4gICAgICAgIGRheXMgPSAwO1xuICAgICAgICBtb250aHMgPSAwO1xuICAgIH1cblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcbiAgICAvLyBleGFtcGxlcyBvZiB3aGF0IHRoYXQgbWVhbnMuXG4gICAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gICAgc2Vjb25kcyAgICAgICAgICAgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICBkYXRhLnNlY29uZHMgICAgICA9IHNlY29uZHMgJSA2MDtcblxuICAgIG1pbnV0ZXMgICAgICAgICAgID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBkYXRhLm1pbnV0ZXMgICAgICA9IG1pbnV0ZXMgJSA2MDtcblxuICAgIGhvdXJzICAgICAgICAgICAgID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcbiAgICBkYXRhLmhvdXJzICAgICAgICA9IGhvdXJzICUgMjQ7XG5cbiAgICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xuXG4gICAgLy8gY29udmVydCBkYXlzIHRvIG1vbnRoc1xuICAgIG1vbnRoc0Zyb21EYXlzID0gYWJzRmxvb3IoZGF5c1RvTW9udGhzKGRheXMpKTtcbiAgICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XG4gICAgZGF5cyAtPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHNGcm9tRGF5cykpO1xuXG4gICAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICAgIHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgIG1vbnRocyAlPSAxMjtcblxuICAgIGRhdGEuZGF5cyAgID0gZGF5cztcbiAgICBkYXRhLm1vbnRocyA9IG1vbnRocztcbiAgICBkYXRhLnllYXJzICA9IHllYXJzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzVG9Nb250aHMgKGRheXMpIHtcbiAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gICAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXG4gICAgcmV0dXJuIGRheXMgKiA0ODAwIC8gMTQ2MDk3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzVG9EYXlzIChtb250aHMpIHtcbiAgICAvLyB0aGUgcmV2ZXJzZSBvZiBkYXlzVG9Nb250aHNcbiAgICByZXR1cm4gbW9udGhzICogMTQ2MDk3IC8gNDgwMDtcbn1cbiIsImltcG9ydCB7IGRheXNUb01vbnRocywgbW9udGhzVG9EYXlzIH0gZnJvbSAnLi9idWJibGUnO1xuaW1wb3J0IHsgbm9ybWFsaXplVW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXMgKHVuaXRzKSB7XG4gICAgdmFyIGRheXM7XG4gICAgdmFyIG1vbnRocztcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xuXG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG5cbiAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgICBkYXlzICAgPSB0aGlzLl9kYXlzICAgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvTW9udGhzKGRheXMpO1xuICAgICAgICByZXR1cm4gdW5pdHMgPT09ICdtb250aCcgPyBtb250aHMgOiBtb250aHMgLyAxMjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBoYW5kbGUgbWlsbGlzZWNvbmRzIHNlcGFyYXRlbHkgYmVjYXVzZSBvZiBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAoaXNzdWUgIzE4NjcpXG4gICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZChtb250aHNUb0RheXModGhpcy5fbW9udGhzKSk7XG4gICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnICAgOiByZXR1cm4gZGF5cyAvIDcgICAgICsgbWlsbGlzZWNvbmRzIC8gNjA0OGU1O1xuICAgICAgICAgICAgY2FzZSAnZGF5JyAgICA6IHJldHVybiBkYXlzICAgICAgICAgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInICAgOiByZXR1cm4gZGF5cyAqIDI0ICAgICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZScgOiByZXR1cm4gZGF5cyAqIDE0NDAgICsgbWlsbGlzZWNvbmRzIC8gNmU0O1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJyA6IHJldHVybiBkYXlzICogODY0MDAgKyBtaWxsaXNlY29uZHMgLyAxMDAwO1xuICAgICAgICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXG4gICAgICAgICAgICBjYXNlICdtaWxsaXNlY29uZCc6IHJldHVybiBNYXRoLmZsb29yKGRheXMgKiA4NjRlNSkgKyBtaWxsaXNlY29uZHM7XG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdW5pdCAnICsgdW5pdHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBUT0RPOiBVc2UgdGhpcy5hcygnbXMnKT9cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZU9mICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgK1xuICAgICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xuICAgICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcbiAgICAgICAgdG9JbnQodGhpcy5fbW9udGhzIC8gMTIpICogMzE1MzZlNlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIG1ha2VBcyAoYWxpYXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcyhhbGlhcyk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHZhciBhc01pbGxpc2Vjb25kcyA9IG1ha2VBcygnbXMnKTtcbmV4cG9ydCB2YXIgYXNTZWNvbmRzICAgICAgPSBtYWtlQXMoJ3MnKTtcbmV4cG9ydCB2YXIgYXNNaW51dGVzICAgICAgPSBtYWtlQXMoJ20nKTtcbmV4cG9ydCB2YXIgYXNIb3VycyAgICAgICAgPSBtYWtlQXMoJ2gnKTtcbmV4cG9ydCB2YXIgYXNEYXlzICAgICAgICAgPSBtYWtlQXMoJ2QnKTtcbmV4cG9ydCB2YXIgYXNXZWVrcyAgICAgICAgPSBtYWtlQXMoJ3cnKTtcbmV4cG9ydCB2YXIgYXNNb250aHMgICAgICAgPSBtYWtlQXMoJ00nKTtcbmV4cG9ydCB2YXIgYXNZZWFycyAgICAgICAgPSBtYWtlQXMoJ3knKTtcbiIsImltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgYWJzRmxvb3IgZnJvbSAnLi4vdXRpbHMvYWJzLWZsb29yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldCAodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICByZXR1cm4gdGhpc1t1bml0cyArICdzJ10oKTtcbn1cblxuZnVuY3Rpb24gbWFrZUdldHRlcihuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbbmFtZV07XG4gICAgfTtcbn1cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHMgPSBtYWtlR2V0dGVyKCdtaWxsaXNlY29uZHMnKTtcbmV4cG9ydCB2YXIgc2Vjb25kcyAgICAgID0gbWFrZUdldHRlcignc2Vjb25kcycpO1xuZXhwb3J0IHZhciBtaW51dGVzICAgICAgPSBtYWtlR2V0dGVyKCdtaW51dGVzJyk7XG5leHBvcnQgdmFyIGhvdXJzICAgICAgICA9IG1ha2VHZXR0ZXIoJ2hvdXJzJyk7XG5leHBvcnQgdmFyIGRheXMgICAgICAgICA9IG1ha2VHZXR0ZXIoJ2RheXMnKTtcbmV4cG9ydCB2YXIgbW9udGhzICAgICAgID0gbWFrZUdldHRlcignbW9udGhzJyk7XG5leHBvcnQgdmFyIHllYXJzICAgICAgICA9IG1ha2VHZXR0ZXIoJ3llYXJzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrcyAoKSB7XG4gICAgcmV0dXJuIGFic0Zsb29yKHRoaXMuZGF5cygpIC8gNyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcblxudmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcbnZhciB0aHJlc2hvbGRzID0ge1xuICAgIHM6IDQ1LCAgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgICBtOiA0NSwgIC8vIG1pbnV0ZXMgdG8gaG91clxuICAgIGg6IDIyLCAgLy8gaG91cnMgdG8gZGF5XG4gICAgZDogMjYsICAvLyBkYXlzIHRvIG1vbnRoXG4gICAgTTogMTEgICAvLyBtb250aHMgdG8geWVhclxufTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbmZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cmluZywgbnVtYmVyLCB3aXRob3V0U3VmZml4LCBpc0Z1dHVyZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5yZWxhdGl2ZVRpbWUobnVtYmVyIHx8IDEsICEhd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSk7XG59XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZSAocG9zTmVnRHVyYXRpb24sIHdpdGhvdXRTdWZmaXgsIGxvY2FsZSkge1xuICAgIHZhciBkdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uKHBvc05lZ0R1cmF0aW9uKS5hYnMoKTtcbiAgICB2YXIgc2Vjb25kcyAgPSByb3VuZChkdXJhdGlvbi5hcygncycpKTtcbiAgICB2YXIgbWludXRlcyAgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKTtcbiAgICB2YXIgaG91cnMgICAgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKTtcbiAgICB2YXIgZGF5cyAgICAgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKTtcbiAgICB2YXIgbW9udGhzICAgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKTtcbiAgICB2YXIgeWVhcnMgICAgPSByb3VuZChkdXJhdGlvbi5hcygneScpKTtcblxuICAgIHZhciBhID0gc2Vjb25kcyA8IHRocmVzaG9sZHMucyAmJiBbJ3MnLCBzZWNvbmRzXSAgfHxcbiAgICAgICAgICAgIG1pbnV0ZXMgPD0gMSAgICAgICAgICAgJiYgWydtJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICBtaW51dGVzIDwgdGhyZXNob2xkcy5tICYmIFsnbW0nLCBtaW51dGVzXSB8fFxuICAgICAgICAgICAgaG91cnMgICA8PSAxICAgICAgICAgICAmJiBbJ2gnXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgIGhvdXJzICAgPCB0aHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSAgIHx8XG4gICAgICAgICAgICBkYXlzICAgIDw9IDEgICAgICAgICAgICYmIFsnZCddICAgICAgICAgICB8fFxuICAgICAgICAgICAgZGF5cyAgICA8IHRocmVzaG9sZHMuZCAmJiBbJ2RkJywgZGF5c10gICAgfHxcbiAgICAgICAgICAgIG1vbnRocyAgPD0gMSAgICAgICAgICAgJiYgWydNJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICBtb250aHMgIDwgdGhyZXNob2xkcy5NICYmIFsnTU0nLCBtb250aHNdICB8fFxuICAgICAgICAgICAgeWVhcnMgICA8PSAxICAgICAgICAgICAmJiBbJ3knXSAgICAgICAgICAgfHwgWyd5eScsIHllYXJzXTtcblxuICAgIGFbMl0gPSB3aXRob3V0U3VmZml4O1xuICAgIGFbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xuICAgIGFbNF0gPSBsb2NhbGU7XG4gICAgcmV0dXJuIHN1YnN0aXR1dGVUaW1lQWdvLmFwcGx5KG51bGwsIGEpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IHRoZSByb3VuZGluZyBmdW5jdGlvbiBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmcgKHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICBpZiAocm91bmRpbmdGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByb3VuZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZihyb3VuZGluZ0Z1bmN0aW9uKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByb3VuZCA9IHJvdW5kaW5nRnVuY3Rpb247XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgYSB0aHJlc2hvbGQgZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCAodGhyZXNob2xkLCBsaW1pdCkge1xuICAgIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChsaW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aHJlc2hvbGRzW3RocmVzaG9sZF07XG4gICAgfVxuICAgIHRocmVzaG9sZHNbdGhyZXNob2xkXSA9IGxpbWl0O1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHVtYW5pemUgKHdpdGhTdWZmaXgpIHtcbiAgICB2YXIgbG9jYWxlID0gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgdmFyIG91dHB1dCA9IHJlbGF0aXZlVGltZSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcblxuICAgIGlmICh3aXRoU3VmZml4KSB7XG4gICAgICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuIiwiaW1wb3J0IGFic0Zsb29yIGZyb20gJy4uL3V0aWxzL2Ficy1mbG9vcic7XG52YXIgYWJzID0gTWF0aC5hYnM7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0lTT1N0cmluZygpIHtcbiAgICAvLyBmb3IgSVNPIHN0cmluZ3Mgd2UgZG8gbm90IHVzZSB0aGUgbm9ybWFsIGJ1YmJsaW5nIHJ1bGVzOlxuICAgIC8vICAqIG1pbGxpc2Vjb25kcyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgaG91cnNcbiAgICAvLyAgKiBkYXlzIGRvIG5vdCBidWJibGUgYXQgYWxsXG4gICAgLy8gICogbW9udGhzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSB5ZWFyc1xuICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB0aGVyZSBpcyBubyBjb250ZXh0LWZyZWUgY29udmVyc2lvbiBiZXR3ZWVuIGhvdXJzIGFuZCBkYXlzXG4gICAgLy8gKHRoaW5rIG9mIGNsb2NrIGNoYW5nZXMpXG4gICAgLy8gYW5kIGFsc28gbm90IGJldHdlZW4gZGF5cyBhbmQgbW9udGhzICgyOC0zMSBkYXlzIHBlciBtb250aClcbiAgICB2YXIgc2Vjb25kcyA9IGFicyh0aGlzLl9taWxsaXNlY29uZHMpIC8gMTAwMDtcbiAgICB2YXIgZGF5cyAgICAgICAgID0gYWJzKHRoaXMuX2RheXMpO1xuICAgIHZhciBtb250aHMgICAgICAgPSBhYnModGhpcy5fbW9udGhzKTtcbiAgICB2YXIgbWludXRlcywgaG91cnMsIHllYXJzO1xuXG4gICAgLy8gMzYwMCBzZWNvbmRzIC0+IDYwIG1pbnV0ZXMgLT4gMSBob3VyXG4gICAgbWludXRlcyAgICAgICAgICAgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIGhvdXJzICAgICAgICAgICAgID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcbiAgICBzZWNvbmRzICU9IDYwO1xuICAgIG1pbnV0ZXMgJT0gNjA7XG5cbiAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgeWVhcnMgID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgIG1vbnRocyAlPSAxMjtcblxuXG4gICAgLy8gaW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2RvcmRpbGxlL21vbWVudC1pc29kdXJhdGlvbi9ibG9iL21hc3Rlci9tb21lbnQuaXNvZHVyYXRpb24uanNcbiAgICB2YXIgWSA9IHllYXJzO1xuICAgIHZhciBNID0gbW9udGhzO1xuICAgIHZhciBEID0gZGF5cztcbiAgICB2YXIgaCA9IGhvdXJzO1xuICAgIHZhciBtID0gbWludXRlcztcbiAgICB2YXIgcyA9IHNlY29uZHM7XG4gICAgdmFyIHRvdGFsID0gdGhpcy5hc1NlY29uZHMoKTtcblxuICAgIGlmICghdG90YWwpIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBDIydzIChOb2RhKSBhbmQgcHl0aG9uIChpc29kYXRlKS4uLlxuICAgICAgICAvLyBidXQgbm90IG90aGVyIEpTIChnb29nLmRhdGUpXG4gICAgICAgIHJldHVybiAnUDBEJztcbiAgICB9XG5cbiAgICByZXR1cm4gKHRvdGFsIDwgMCA/ICctJyA6ICcnKSArXG4gICAgICAgICdQJyArXG4gICAgICAgIChZID8gWSArICdZJyA6ICcnKSArXG4gICAgICAgIChNID8gTSArICdNJyA6ICcnKSArXG4gICAgICAgIChEID8gRCArICdEJyA6ICcnKSArXG4gICAgICAgICgoaCB8fCBtIHx8IHMpID8gJ1QnIDogJycpICtcbiAgICAgICAgKGggPyBoICsgJ0gnIDogJycpICtcbiAgICAgICAgKG0gPyBtICsgJ00nIDogJycpICtcbiAgICAgICAgKHMgPyBzICsgJ1MnIDogJycpO1xufVxuIiwiaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxudmFyIHByb3RvID0gRHVyYXRpb24ucHJvdG90eXBlO1xuXG5pbXBvcnQgeyBhYnMgfSBmcm9tICcuL2Ficyc7XG5pbXBvcnQgeyBhZGQsIHN1YnRyYWN0IH0gZnJvbSAnLi9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgYXMsIGFzTWlsbGlzZWNvbmRzLCBhc1NlY29uZHMsIGFzTWludXRlcywgYXNIb3VycywgYXNEYXlzLCBhc1dlZWtzLCBhc01vbnRocywgYXNZZWFycywgdmFsdWVPZiB9IGZyb20gJy4vYXMnO1xuaW1wb3J0IHsgYnViYmxlIH0gZnJvbSAnLi9idWJibGUnO1xuaW1wb3J0IHsgZ2V0LCBtaWxsaXNlY29uZHMsIHNlY29uZHMsIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCBtb250aHMsIHllYXJzLCB3ZWVrcyB9IGZyb20gJy4vZ2V0JztcbmltcG9ydCB7IGh1bWFuaXplIH0gZnJvbSAnLi9odW1hbml6ZSc7XG5pbXBvcnQgeyB0b0lTT1N0cmluZyB9IGZyb20gJy4vaXNvLXN0cmluZyc7XG5pbXBvcnQgeyBsYW5nLCBsb2NhbGUsIGxvY2FsZURhdGEgfSBmcm9tICcuLi9tb21lbnQvbG9jYWxlJztcblxucHJvdG8uYWJzICAgICAgICAgICAgPSBhYnM7XG5wcm90by5hZGQgICAgICAgICAgICA9IGFkZDtcbnByb3RvLnN1YnRyYWN0ICAgICAgID0gc3VidHJhY3Q7XG5wcm90by5hcyAgICAgICAgICAgICA9IGFzO1xucHJvdG8uYXNNaWxsaXNlY29uZHMgPSBhc01pbGxpc2Vjb25kcztcbnByb3RvLmFzU2Vjb25kcyAgICAgID0gYXNTZWNvbmRzO1xucHJvdG8uYXNNaW51dGVzICAgICAgPSBhc01pbnV0ZXM7XG5wcm90by5hc0hvdXJzICAgICAgICA9IGFzSG91cnM7XG5wcm90by5hc0RheXMgICAgICAgICA9IGFzRGF5cztcbnByb3RvLmFzV2Vla3MgICAgICAgID0gYXNXZWVrcztcbnByb3RvLmFzTW9udGhzICAgICAgID0gYXNNb250aHM7XG5wcm90by5hc1llYXJzICAgICAgICA9IGFzWWVhcnM7XG5wcm90by52YWx1ZU9mICAgICAgICA9IHZhbHVlT2Y7XG5wcm90by5fYnViYmxlICAgICAgICA9IGJ1YmJsZTtcbnByb3RvLmdldCAgICAgICAgICAgID0gZ2V0O1xucHJvdG8ubWlsbGlzZWNvbmRzICAgPSBtaWxsaXNlY29uZHM7XG5wcm90by5zZWNvbmRzICAgICAgICA9IHNlY29uZHM7XG5wcm90by5taW51dGVzICAgICAgICA9IG1pbnV0ZXM7XG5wcm90by5ob3VycyAgICAgICAgICA9IGhvdXJzO1xucHJvdG8uZGF5cyAgICAgICAgICAgPSBkYXlzO1xucHJvdG8ud2Vla3MgICAgICAgICAgPSB3ZWVrcztcbnByb3RvLm1vbnRocyAgICAgICAgID0gbW9udGhzO1xucHJvdG8ueWVhcnMgICAgICAgICAgPSB5ZWFycztcbnByb3RvLmh1bWFuaXplICAgICAgID0gaHVtYW5pemU7XG5wcm90by50b0lTT1N0cmluZyAgICA9IHRvSVNPU3RyaW5nO1xucHJvdG8udG9TdHJpbmcgICAgICAgPSB0b0lTT1N0cmluZztcbnByb3RvLnRvSlNPTiAgICAgICAgID0gdG9JU09TdHJpbmc7XG5wcm90by5sb2NhbGUgICAgICAgICA9IGxvY2FsZTtcbnByb3RvLmxvY2FsZURhdGEgICAgID0gbG9jYWxlRGF0YTtcblxuLy8gRGVwcmVjYXRpb25zXG5pbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi91dGlscy9kZXByZWNhdGUnO1xuXG5wcm90by50b0lzb1N0cmluZyA9IGRlcHJlY2F0ZSgndG9Jc29TdHJpbmcoKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHRvSVNPU3RyaW5nKCkgaW5zdGVhZCAobm90aWNlIHRoZSBjYXBpdGFscyknLCB0b0lTT1N0cmluZyk7XG5wcm90by5sYW5nID0gbGFuZztcbiIsIi8vIFNpZGUgZWZmZWN0IGltcG9ydHNcbmltcG9ydCAnLi9wcm90b3R5cGUnO1xuXG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB7IGlzRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7XG4gICAgZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmcsXG4gICAgZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkXG59IGZyb20gJy4vaHVtYW5pemUnO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZUR1cmF0aW9uLFxuICAgIGlzRHVyYXRpb24sXG4gICAgZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmcsXG4gICAgZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkXG59O1xuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoVGltZXN0YW1wLCBtYXRjaFNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignWCcsIDAsIDAsICd1bml4Jyk7XG5hZGRGb3JtYXRUb2tlbigneCcsIDAsIDAsICd2YWx1ZU9mJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigneCcsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ1gnLCBtYXRjaFRpbWVzdGFtcCk7XG5hZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUocGFyc2VGbG9hdChpbnB1dCwgMTApICogMTAwMCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ3gnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSh0b0ludChpbnB1dCkpO1xufSk7XG4iLCIvLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5pbXBvcnQgJy4vZGF5LW9mLW1vbnRoJztcbmltcG9ydCAnLi9kYXktb2Ytd2Vlayc7XG5pbXBvcnQgJy4vZGF5LW9mLXllYXInO1xuaW1wb3J0ICcuL2hvdXInO1xuaW1wb3J0ICcuL21pbGxpc2Vjb25kJztcbmltcG9ydCAnLi9taW51dGUnO1xuaW1wb3J0ICcuL21vbnRoJztcbmltcG9ydCAnLi9vZmZzZXQnO1xuaW1wb3J0ICcuL3F1YXJ0ZXInO1xuaW1wb3J0ICcuL3NlY29uZCc7XG5pbXBvcnQgJy4vdGltZXN0YW1wJztcbmltcG9ydCAnLi90aW1lem9uZSc7XG5pbXBvcnQgJy4vd2Vlay15ZWFyJztcbmltcG9ydCAnLi93ZWVrJztcbmltcG9ydCAnLi95ZWFyJztcblxuaW1wb3J0IHsgbm9ybWFsaXplVW5pdHMgfSBmcm9tICcuL2FsaWFzZXMnO1xuXG5leHBvcnQgeyBub3JtYWxpemVVbml0cyB9O1xuIiwiLy8hIG1vbWVudC5qc1xuLy8hIHZlcnNpb24gOiAyLjE3LjFcbi8vISBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXG4vLyEgbGljZW5zZSA6IE1JVFxuLy8hIG1vbWVudGpzLmNvbVxuXG5pbXBvcnQgeyBob29rcyBhcyBtb21lbnQsIHNldEhvb2tDYWxsYmFjayB9IGZyb20gJy4vbGliL3V0aWxzL2hvb2tzJztcblxubW9tZW50LnZlcnNpb24gPSAnMi4xNy4xJztcblxuaW1wb3J0IHtcbiAgICBtaW4sXG4gICAgbWF4LFxuICAgIG5vdyxcbiAgICBpc01vbWVudCxcbiAgICBtb21lbnRQcm90b3R5cGUgYXMgZm4sXG4gICAgY3JlYXRlVVRDICAgICAgIGFzIHV0YyxcbiAgICBjcmVhdGVVbml4ICAgICAgYXMgdW5peCxcbiAgICBjcmVhdGVMb2NhbCAgICAgYXMgbG9jYWwsXG4gICAgY3JlYXRlSW52YWxpZCAgIGFzIGludmFsaWQsXG4gICAgY3JlYXRlSW5ab25lICAgIGFzIHBhcnNlWm9uZVxufSBmcm9tICcuL2xpYi9tb21lbnQvbW9tZW50JztcblxuaW1wb3J0IHtcbiAgICBnZXRDYWxlbmRhckZvcm1hdFxufSBmcm9tICcuL2xpYi9tb21lbnQvY2FsZW5kYXInO1xuXG5pbXBvcnQge1xuICAgIGRlZmluZUxvY2FsZSxcbiAgICB1cGRhdGVMb2NhbGUsXG4gICAgZ2V0U2V0R2xvYmFsTG9jYWxlIGFzIGxvY2FsZSxcbiAgICBnZXRMb2NhbGUgICAgICAgICAgYXMgbG9jYWxlRGF0YSxcbiAgICBsaXN0TG9jYWxlcyAgICAgICAgYXMgbG9jYWxlcyxcbiAgICBsaXN0TW9udGhzICAgICAgICAgYXMgbW9udGhzLFxuICAgIGxpc3RNb250aHNTaG9ydCAgICBhcyBtb250aHNTaG9ydCxcbiAgICBsaXN0V2Vla2RheXMgICAgICAgYXMgd2Vla2RheXMsXG4gICAgbGlzdFdlZWtkYXlzTWluICAgIGFzIHdlZWtkYXlzTWluLFxuICAgIGxpc3RXZWVrZGF5c1Nob3J0ICBhcyB3ZWVrZGF5c1Nob3J0XG59IGZyb20gJy4vbGliL2xvY2FsZS9sb2NhbGUnO1xuXG5pbXBvcnQge1xuICAgIGlzRHVyYXRpb24sXG4gICAgY3JlYXRlRHVyYXRpb24gYXMgZHVyYXRpb24sXG4gICAgZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmcgYXMgcmVsYXRpdmVUaW1lUm91bmRpbmcsXG4gICAgZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkIGFzIHJlbGF0aXZlVGltZVRocmVzaG9sZFxufSBmcm9tICcuL2xpYi9kdXJhdGlvbi9kdXJhdGlvbic7XG5cbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi9saWIvdW5pdHMvdW5pdHMnO1xuXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vbGliL3V0aWxzL2lzLWRhdGUnO1xuXG5zZXRIb29rQ2FsbGJhY2sobG9jYWwpO1xuXG5tb21lbnQuZm4gICAgICAgICAgICAgICAgICAgID0gZm47XG5tb21lbnQubWluICAgICAgICAgICAgICAgICAgID0gbWluO1xubW9tZW50Lm1heCAgICAgICAgICAgICAgICAgICA9IG1heDtcbm1vbWVudC5ub3cgICAgICAgICAgICAgICAgICAgPSBub3c7XG5tb21lbnQudXRjICAgICAgICAgICAgICAgICAgID0gdXRjO1xubW9tZW50LnVuaXggICAgICAgICAgICAgICAgICA9IHVuaXg7XG5tb21lbnQubW9udGhzICAgICAgICAgICAgICAgID0gbW9udGhzO1xubW9tZW50LmlzRGF0ZSAgICAgICAgICAgICAgICA9IGlzRGF0ZTtcbm1vbWVudC5sb2NhbGUgICAgICAgICAgICAgICAgPSBsb2NhbGU7XG5tb21lbnQuaW52YWxpZCAgICAgICAgICAgICAgID0gaW52YWxpZDtcbm1vbWVudC5kdXJhdGlvbiAgICAgICAgICAgICAgPSBkdXJhdGlvbjtcbm1vbWVudC5pc01vbWVudCAgICAgICAgICAgICAgPSBpc01vbWVudDtcbm1vbWVudC53ZWVrZGF5cyAgICAgICAgICAgICAgPSB3ZWVrZGF5cztcbm1vbWVudC5wYXJzZVpvbmUgICAgICAgICAgICAgPSBwYXJzZVpvbmU7XG5tb21lbnQubG9jYWxlRGF0YSAgICAgICAgICAgID0gbG9jYWxlRGF0YTtcbm1vbWVudC5pc0R1cmF0aW9uICAgICAgICAgICAgPSBpc0R1cmF0aW9uO1xubW9tZW50Lm1vbnRoc1Nob3J0ICAgICAgICAgICA9IG1vbnRoc1Nob3J0O1xubW9tZW50LndlZWtkYXlzTWluICAgICAgICAgICA9IHdlZWtkYXlzTWluO1xubW9tZW50LmRlZmluZUxvY2FsZSAgICAgICAgICA9IGRlZmluZUxvY2FsZTtcbm1vbWVudC51cGRhdGVMb2NhbGUgICAgICAgICAgPSB1cGRhdGVMb2NhbGU7XG5tb21lbnQubG9jYWxlcyAgICAgICAgICAgICAgID0gbG9jYWxlcztcbm1vbWVudC53ZWVrZGF5c1Nob3J0ICAgICAgICAgPSB3ZWVrZGF5c1Nob3J0O1xubW9tZW50Lm5vcm1hbGl6ZVVuaXRzICAgICAgICA9IG5vcm1hbGl6ZVVuaXRzO1xubW9tZW50LnJlbGF0aXZlVGltZVJvdW5kaW5nID0gcmVsYXRpdmVUaW1lUm91bmRpbmc7XG5tb21lbnQucmVsYXRpdmVUaW1lVGhyZXNob2xkID0gcmVsYXRpdmVUaW1lVGhyZXNob2xkO1xubW9tZW50LmNhbGVuZGFyRm9ybWF0ICAgICAgICA9IGdldENhbGVuZGFyRm9ybWF0O1xubW9tZW50LnByb3RvdHlwZSAgICAgICAgICAgICA9IGZuO1xuXG5leHBvcnQgZGVmYXVsdCBtb21lbnQ7XG4iLCJpbXBvcnQgUGlja2VyIGZyb20gJy4vUGlja2VyJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmNvbnN0IGNyZWF0ZURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhvdXIgPSBbXVxuICBjb25zdCBtb21lbnQgPSBbXVxuICBsZXQgaSA9IDBcbiAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBpZiAoaSA8IDEwKSB7XG4gICAgICBob3VyLnB1c2goJzAnICsgaSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBob3VyLnB1c2goaSArICcnKVxuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgIGlmIChpIDwgMTApIHtcbiAgICAgIG1vbWVudC5wdXNoKCcwJyArIGkpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbW9tZW50LnB1c2goaSArICcnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbaG91ciwgbW9tZW50XVxufVxuXG5jb25zdCBpbnB1dERhdGEgPSBjcmVhdGVEYXRhKClcblxuY29uc3QgZ2V0RGVmYXVsdEluZGV4cyA9IGZ1bmN0aW9uICh0aW1lKSB7XG4gIGNvbnN0IGhvdXIgPSB0aW1lLmZvcm1hdCgnSEgnKVxuICBjb25zdCBtb21lbnQgPSB0aW1lLmZvcm1hdCgnbW0nKVxuICBjb25zdCByZXN1bHQgPSBbMCwgMF1cbiAgbGV0IGkgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBpbnB1dERhdGFbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaG91ciA9PT0gaW5wdXREYXRhWzBdW2ldKSB7XG4gICAgICByZXN1bHRbMF0gPSBpXG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDA7IGkgPCBpbnB1dERhdGFbMV0ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobW9tZW50ID09PSBpbnB1dERhdGFbMV1baV0pIHtcbiAgICAgIHJlc3VsdFsxXSA9IGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGZvcm1hdGVSZXN1bHQgPSBmdW5jdGlvbiAoZGF0YSwgaW5kZXhzKSB7XG4gIGNvbnN0IGhvdXIgPSBkYXRhWzBdW2luZGV4c1swXV1cbiAgY29uc3QgbW9tZW50ID0gZGF0YVsxXVtpbmRleHNbMV1dXG4gIHJldHVybiBob3VyICsgJzonICsgbW9tZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb25maWdzKSB7XG4gIGNvbnN0IHRpbWUgPSBtb21lbnQoY29uZmlncy52YWx1ZSB8fCBuZXcgRGF0ZSgpLCAnSEg6bW0nKVxuICBjb25zdCB2YWx1ZSA9IGdldERlZmF1bHRJbmRleHModGltZSlcbiAgcmV0dXJuIG5ldyBQaWNrZXIoe1xuICAgIGRhdGE6IGlucHV0RGF0YSxcbiAgICBmb3JtYXRlUmVzdWx0OiBmb3JtYXRlUmVzdWx0LFxuICAgIGRlZmF1bHRJbmRleHM6IHZhbHVlLFxuICAgIGNvbmZpcm1DYWxsYmFjazogY29uZmlncy5jb25maXJtQ2FsbGJhY2ssXG4gICAgc2VuZGVyOiBjb25maWdzLnNlbmRlclxuICB9KVxufVxuXG4iLCIvKiFcbiAqIFBpa2FkYXlcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNCBEYXZpZCBCdXNoZWxsIHwgQlNEICYgTUlUIGxpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vZGJ1c2hlbGwvUGlrYWRheVxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSlcbntcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbW9tZW50O1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gQ29tbW9uSlMgbW9kdWxlXG4gICAgICAgIC8vIExvYWQgbW9tZW50LmpzIGFzIGFuIG9wdGlvbmFsIGRlcGVuZGVuY3lcbiAgICAgICAgdHJ5IHsgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShtb21lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uIChyZXEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIExvYWQgbW9tZW50LmpzIGFzIGFuIG9wdGlvbmFsIGRlcGVuZGVuY3lcbiAgICAgICAgICAgIHZhciBpZCA9ICdtb21lbnQnO1xuICAgICAgICAgICAgdHJ5IHsgbW9tZW50ID0gcmVxKGlkKTsgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5KG1vbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuUGlrYWRheSA9IGZhY3Rvcnkocm9vdC5tb21lbnQpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKG1vbWVudClcbntcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvKipcbiAgICAgKiBmZWF0dXJlIGRldGVjdGlvbiBhbmQgaGVscGVyIGZ1bmN0aW9uc1xuICAgICAqL1xuICAgIHZhciBoYXNNb21lbnQgPSB0eXBlb2YgbW9tZW50ID09PSAnZnVuY3Rpb24nLFxuXG4gICAgaGFzRXZlbnRMaXN0ZW5lcnMgPSAhIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyLFxuXG4gICAgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXG5cbiAgICBzdG8gPSB3aW5kb3cuc2V0VGltZW91dCxcblxuICAgIGFkZEV2ZW50ID0gZnVuY3Rpb24oZWwsIGUsIGNhbGxiYWNrLCBjYXB0dXJlKVxuICAgIHtcbiAgICAgICAgaWYgKGhhc0V2ZW50TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGUsIGNhbGxiYWNrLCAhIWNhcHR1cmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGVsLCBlLCBjYWxsYmFjaywgY2FwdHVyZSlcbiAgICB7XG4gICAgICAgIGlmIChoYXNFdmVudExpc3RlbmVycykge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCBjYWxsYmFjaywgISFjYXB0dXJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZmlyZUV2ZW50ID0gZnVuY3Rpb24oZWwsIGV2ZW50TmFtZSwgZGF0YSlcbiAgICB7XG4gICAgICAgIHZhciBldjtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgICAgICAgIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgICAgICAgIGV2LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgIGV2ID0gZXh0ZW5kKGV2LCBkYXRhKTtcbiAgICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KSB7XG4gICAgICAgICAgICBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG4gICAgICAgICAgICBldiA9IGV4dGVuZChldiwgZGF0YSk7XG4gICAgICAgICAgICBlbC5maXJlRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgZXYpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHRyaW0gPSBmdW5jdGlvbihzdHIpXG4gICAge1xuICAgICAgICByZXR1cm4gc3RyLnRyaW0gPyBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csJycpO1xuICAgIH0sXG5cbiAgICBoYXNDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbilcbiAgICB7XG4gICAgICAgIHJldHVybiAoJyAnICsgZWwuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgJyArIGNuICsgJyAnKSAhPT0gLTE7XG4gICAgfSxcblxuICAgIGFkZENsYXNzID0gZnVuY3Rpb24oZWwsIGNuKVxuICAgIHtcbiAgICAgICAgaWYgKCFoYXNDbGFzcyhlbCwgY24pKSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSAoZWwuY2xhc3NOYW1lID09PSAnJykgPyBjbiA6IGVsLmNsYXNzTmFtZSArICcgJyArIGNuO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWwsIGNuKVxuICAgIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gdHJpbSgoJyAnICsgZWwuY2xhc3NOYW1lICsgJyAnKS5yZXBsYWNlKCcgJyArIGNuICsgJyAnLCAnICcpKTtcbiAgICB9LFxuXG4gICAgaXNBcnJheSA9IGZ1bmN0aW9uKG9iailcbiAgICB7XG4gICAgICAgIHJldHVybiAoL0FycmF5LykudGVzdChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSk7XG4gICAgfSxcblxuICAgIGlzRGF0ZSA9IGZ1bmN0aW9uKG9iailcbiAgICB7XG4gICAgICAgIHJldHVybiAoL0RhdGUvKS50ZXN0KE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSAmJiAhaXNOYU4ob2JqLmdldFRpbWUoKSk7XG4gICAgfSxcblxuICAgIGlzV2Vla2VuZCA9IGZ1bmN0aW9uKGRhdGUpXG4gICAge1xuICAgICAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgcmV0dXJuIGRheSA9PT0gMCB8fCBkYXkgPT09IDY7XG4gICAgfSxcblxuICAgIGlzTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyKVxuICAgIHtcbiAgICAgICAgLy8gc29sdXRpb24gYnkgTWF0dGkgVmlya2t1bmVuOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80ODgxOTUxXG4gICAgICAgIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDA7XG4gICAgfSxcblxuICAgIGdldERheXNJbk1vbnRoID0gZnVuY3Rpb24oeWVhciwgbW9udGgpXG4gICAge1xuICAgICAgICByZXR1cm4gWzMxLCBpc0xlYXBZZWFyKHllYXIpID8gMjkgOiAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vbnRoXTtcbiAgICB9LFxuXG4gICAgc2V0VG9TdGFydE9mRGF5ID0gZnVuY3Rpb24oZGF0ZSlcbiAgICB7XG4gICAgICAgIGlmIChpc0RhdGUoZGF0ZSkpIGRhdGUuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgfSxcblxuICAgIGNvbXBhcmVEYXRlcyA9IGZ1bmN0aW9uKGEsYilcbiAgICB7XG4gICAgICAgIC8vIHdlYWsgZGF0ZSBjb21wYXJpc29uICh1c2Ugc2V0VG9TdGFydE9mRGF5KGRhdGUpIHRvIGVuc3VyZSBjb3JyZWN0IHJlc3VsdClcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgICB9LFxuXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24odG8sIGZyb20sIG92ZXJ3cml0ZSlcbiAgICB7XG4gICAgICAgIHZhciBwcm9wLCBoYXNQcm9wO1xuICAgICAgICBmb3IgKHByb3AgaW4gZnJvbSkge1xuICAgICAgICAgICAgaGFzUHJvcCA9IHRvW3Byb3BdICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCAmJiB0eXBlb2YgZnJvbVtwcm9wXSA9PT0gJ29iamVjdCcgJiYgZnJvbVtwcm9wXSAhPT0gbnVsbCAmJiBmcm9tW3Byb3BdLm5vZGVOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNEYXRlKGZyb21bcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gbmV3IERhdGUoZnJvbVtwcm9wXS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkoZnJvbVtwcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9bcHJvcF0gPSBmcm9tW3Byb3BdLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bcHJvcF0gPSBleHRlbmQoe30sIGZyb21bcHJvcF0sIG92ZXJ3cml0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyd3JpdGUgfHwgIWhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0b1twcm9wXSA9IGZyb21bcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH0sXG5cbiAgICBhZGp1c3RDYWxlbmRhciA9IGZ1bmN0aW9uKGNhbGVuZGFyKSB7XG4gICAgICAgIGlmIChjYWxlbmRhci5tb250aCA8IDApIHtcbiAgICAgICAgICAgIGNhbGVuZGFyLnllYXIgLT0gTWF0aC5jZWlsKE1hdGguYWJzKGNhbGVuZGFyLm1vbnRoKS8xMik7XG4gICAgICAgICAgICBjYWxlbmRhci5tb250aCArPSAxMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsZW5kYXIubW9udGggPiAxMSkge1xuICAgICAgICAgICAgY2FsZW5kYXIueWVhciArPSBNYXRoLmZsb29yKE1hdGguYWJzKGNhbGVuZGFyLm1vbnRoKS8xMik7XG4gICAgICAgICAgICBjYWxlbmRhci5tb250aCAtPSAxMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsZW5kYXI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGRlZmF1bHRzIGFuZCBsb2NhbGlzYXRpb25cbiAgICAgKi9cbiAgICBkZWZhdWx0cyA9IHtcblxuICAgICAgICAvLyBiaW5kIHRoZSBwaWNrZXIgdG8gYSBmb3JtIGZpZWxkXG4gICAgICAgIGZpZWxkOiBudWxsLFxuXG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgc2hvdy9oaWRlIHRoZSBwaWNrZXIgb24gYGZpZWxkYCBmb2N1cyAoZGVmYXVsdCBgdHJ1ZWAgaWYgYGZpZWxkYCBpcyBzZXQpXG4gICAgICAgIGJvdW5kOiB1bmRlZmluZWQsXG5cbiAgICAgICAgLy8gcG9zaXRpb24gb2YgdGhlIGRhdGVwaWNrZXIsIHJlbGF0aXZlIHRvIHRoZSBmaWVsZCAoZGVmYXVsdCB0byBib3R0b20gJiBsZWZ0KVxuICAgICAgICAvLyAoJ2JvdHRvbScgJiAnbGVmdCcga2V5d29yZHMgYXJlIG5vdCB1c2VkLCAndG9wJyAmICdyaWdodCcgYXJlIG1vZGlmaWVyIG9uIHRoZSBib3R0b20vbGVmdCBwb3NpdGlvbilcbiAgICAgICAgcG9zaXRpb246ICdib3R0b20gbGVmdCcsXG5cbiAgICAgICAgLy8gYXV0b21hdGljYWxseSBmaXQgaW4gdGhlIHZpZXdwb3J0IGV2ZW4gaWYgaXQgbWVhbnMgcmVwb3NpdGlvbmluZyBmcm9tIHRoZSBwb3NpdGlvbiBvcHRpb25cbiAgICAgICAgcmVwb3NpdGlvbjogdHJ1ZSxcblxuICAgICAgICAvLyB0aGUgZGVmYXVsdCBvdXRwdXQgZm9ybWF0IGZvciBgLnRvU3RyaW5nKClgIGFuZCBgZmllbGRgIHZhbHVlXG4gICAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuXG4gICAgICAgIC8vIHRoZSBpbml0aWFsIGRhdGUgdG8gdmlldyB3aGVuIGZpcnN0IG9wZW5lZFxuICAgICAgICBkZWZhdWx0RGF0ZTogbnVsbCxcblxuICAgICAgICAvLyBtYWtlIHRoZSBgZGVmYXVsdERhdGVgIHRoZSBpbml0aWFsIHNlbGVjdGVkIHZhbHVlXG4gICAgICAgIHNldERlZmF1bHREYXRlOiBmYWxzZSxcblxuICAgICAgICAvLyBmaXJzdCBkYXkgb2Ygd2VlayAoMDogU3VuZGF5LCAxOiBNb25kYXkgZXRjKVxuICAgICAgICBmaXJzdERheTogMCxcblxuICAgICAgICAvLyB0aGUgZGVmYXVsdCBmbGFnIGZvciBtb21lbnQncyBzdHJpY3QgZGF0ZSBwYXJzaW5nXG4gICAgICAgIGZvcm1hdFN0cmljdDogZmFsc2UsXG5cbiAgICAgICAgLy8gdGhlIG1pbmltdW0vZWFybGllc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZFxuICAgICAgICBtaW5EYXRlOiBudWxsLFxuICAgICAgICAvLyB0aGUgbWF4aW11bS9sYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZFxuICAgICAgICBtYXhEYXRlOiBudWxsLFxuXG4gICAgICAgIC8vIG51bWJlciBvZiB5ZWFycyBlaXRoZXIgc2lkZSwgb3IgYXJyYXkgb2YgdXBwZXIvbG93ZXIgcmFuZ2VcbiAgICAgICAgeWVhclJhbmdlOiAxMCxcblxuICAgICAgICAvLyBzaG93IHdlZWsgbnVtYmVycyBhdCBoZWFkIG9mIHJvd1xuICAgICAgICBzaG93V2Vla051bWJlcjogZmFsc2UsXG5cbiAgICAgICAgLy8gdXNlZCBpbnRlcm5hbGx5IChkb24ndCBjb25maWcgb3V0c2lkZSlcbiAgICAgICAgbWluWWVhcjogMCxcbiAgICAgICAgbWF4WWVhcjogOTk5OSxcbiAgICAgICAgbWluTW9udGg6IHVuZGVmaW5lZCxcbiAgICAgICAgbWF4TW9udGg6IHVuZGVmaW5lZCxcblxuICAgICAgICBzdGFydFJhbmdlOiBudWxsLFxuICAgICAgICBlbmRSYW5nZTogbnVsbCxcblxuICAgICAgICBpc1JUTDogZmFsc2UsXG5cbiAgICAgICAgLy8gQWRkaXRpb25hbCB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgeWVhciBpbiB0aGUgY2FsZW5kYXIgdGl0bGVcbiAgICAgICAgeWVhclN1ZmZpeDogJycsXG5cbiAgICAgICAgLy8gUmVuZGVyIHRoZSBtb250aCBhZnRlciB5ZWFyIGluIHRoZSBjYWxlbmRhciB0aXRsZVxuICAgICAgICBzaG93TW9udGhBZnRlclllYXI6IGZhbHNlLFxuXG4gICAgICAgIC8vIFJlbmRlciBkYXlzIG9mIHRoZSBjYWxlbmRhciBncmlkIHRoYXQgZmFsbCBpbiB0aGUgbmV4dCBvciBwcmV2aW91cyBtb250aFxuICAgICAgICBzaG93RGF5c0luTmV4dEFuZFByZXZpb3VzTW9udGhzOiBmYWxzZSxcblxuICAgICAgICAvLyBob3cgbWFueSBtb250aHMgYXJlIHZpc2libGVcbiAgICAgICAgbnVtYmVyT2ZNb250aHM6IDEsXG5cbiAgICAgICAgLy8gd2hlbiBudW1iZXJPZk1vbnRocyBpcyB1c2VkLCB0aGlzIHdpbGwgaGVscCB5b3UgdG8gY2hvb3NlIHdoZXJlIHRoZSBtYWluIGNhbGVuZGFyIHdpbGwgYmUgKGRlZmF1bHQgYGxlZnRgLCBjYW4gYmUgc2V0IHRvIGByaWdodGApXG4gICAgICAgIC8vIG9ubHkgdXNlZCBmb3IgdGhlIGZpcnN0IGRpc3BsYXkgb3Igd2hlbiBhIHNlbGVjdGVkIGRhdGUgaXMgbm90IHZpc2libGVcbiAgICAgICAgbWFpbkNhbGVuZGFyOiAnbGVmdCcsXG5cbiAgICAgICAgLy8gU3BlY2lmeSBhIERPTSBlbGVtZW50IHRvIHJlbmRlciB0aGUgY2FsZW5kYXIgaW5cbiAgICAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG5cbiAgICAgICAgLy8gaW50ZXJuYXRpb25hbGl6YXRpb25cbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgcHJldmlvdXNNb250aCA6ICdQcmV2aW91cyBNb250aCcsXG4gICAgICAgICAgICBuZXh0TW9udGggICAgIDogJ05leHQgTW9udGgnLFxuICAgICAgICAgICAgbW9udGhzICAgICAgICA6IFsnSmFudWFyeScsJ0ZlYnJ1YXJ5JywnTWFyY2gnLCdBcHJpbCcsJ01heScsJ0p1bmUnLCdKdWx5JywnQXVndXN0JywnU2VwdGVtYmVyJywnT2N0b2JlcicsJ05vdmVtYmVyJywnRGVjZW1iZXInXSxcbiAgICAgICAgICAgIHdlZWtkYXlzICAgICAgOiBbJ1N1bmRheScsJ01vbmRheScsJ1R1ZXNkYXknLCdXZWRuZXNkYXknLCdUaHVyc2RheScsJ0ZyaWRheScsJ1NhdHVyZGF5J10sXG4gICAgICAgICAgICB3ZWVrZGF5c1Nob3J0IDogWydTdW4nLCdNb24nLCdUdWUnLCdXZWQnLCdUaHUnLCdGcmknLCdTYXQnXVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoZW1lIENsYXNzbmFtZVxuICAgICAgICB0aGVtZTogbnVsbCxcblxuICAgICAgICAvLyBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICBvblNlbGVjdDogbnVsbCxcbiAgICAgICAgb25PcGVuOiBudWxsLFxuICAgICAgICBvbkNsb3NlOiBudWxsLFxuICAgICAgICBvbkRyYXc6IG51bGxcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiB0ZW1wbGF0aW5nIGZ1bmN0aW9ucyB0byBhYnN0cmFjdCBIVE1MIHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHJlbmRlckRheU5hbWUgPSBmdW5jdGlvbihvcHRzLCBkYXksIGFiYnIpXG4gICAge1xuICAgICAgICBkYXkgKz0gb3B0cy5maXJzdERheTtcbiAgICAgICAgd2hpbGUgKGRheSA+PSA3KSB7XG4gICAgICAgICAgICBkYXkgLT0gNztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWJiciA/IG9wdHMuaTE4bi53ZWVrZGF5c1Nob3J0W2RheV0gOiBvcHRzLmkxOG4ud2Vla2RheXNbZGF5XTtcbiAgICB9LFxuXG4gICAgcmVuZGVyRGF5ID0gZnVuY3Rpb24ob3B0cylcbiAgICB7XG4gICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgdmFyIGFyaWFTZWxlY3RlZCA9ICdmYWxzZSc7XG4gICAgICAgIGlmIChvcHRzLmlzRW1wdHkpIHtcbiAgICAgICAgICAgIGlmIChvcHRzLnNob3dEYXlzSW5OZXh0QW5kUHJldmlvdXNNb250aHMpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCgnaXMtb3V0c2lkZS1jdXJyZW50LW1vbnRoJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnPHRkIGNsYXNzPVwiaXMtZW1wdHlcIj48L3RkPic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgYXJyLnB1c2goJ2lzLWRpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuaXNUb2RheSkge1xuICAgICAgICAgICAgYXJyLnB1c2goJ2lzLXRvZGF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgYXJyLnB1c2goJ2lzLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICBhcmlhU2VsZWN0ZWQgPSAndHJ1ZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuaXNJblJhbmdlKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnaXMtaW5yYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmlzU3RhcnRSYW5nZSkge1xuICAgICAgICAgICAgYXJyLnB1c2goJ2lzLXN0YXJ0cmFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc0VuZFJhbmdlKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnaXMtZW5kcmFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzx0ZCBkYXRhLWRheT1cIicgKyBvcHRzLmRheSArICdcIiBjbGFzcz1cIicgKyBhcnIuam9pbignICcpICsgJ1wiIGFyaWEtc2VsZWN0ZWQ9XCInICsgYXJpYVNlbGVjdGVkICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cInBpa2EtYnV0dG9uIHBpa2EtZGF5XCIgdHlwZT1cImJ1dHRvblwiICcgK1xuICAgICAgICAgICAgICAgICAgICAnZGF0YS1waWthLXllYXI9XCInICsgb3B0cy55ZWFyICsgJ1wiIGRhdGEtcGlrYS1tb250aD1cIicgKyBvcHRzLm1vbnRoICsgJ1wiIGRhdGEtcGlrYS1kYXk9XCInICsgb3B0cy5kYXkgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLmRheSArXG4gICAgICAgICAgICAgICAgICc8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICc8L3RkPic7XG4gICAgfSxcblxuICAgIHJlbmRlcldlZWsgPSBmdW5jdGlvbiAoZCwgbSwgeSkge1xuICAgICAgICAvLyBMaWZ0ZWQgZnJvbSBodHRwOi8vamF2YXNjcmlwdC5hYm91dC5jb20vbGlicmFyeS9ibHdlZWt5ZWFyLmh0bSwgbGlnaHRseSBtb2RpZmllZC5cbiAgICAgICAgdmFyIG9uZWphbiA9IG5ldyBEYXRlKHksIDAsIDEpLFxuICAgICAgICAgICAgd2Vla051bSA9IE1hdGguY2VpbCgoKChuZXcgRGF0ZSh5LCBtLCBkKSAtIG9uZWphbikgLyA4NjQwMDAwMCkgKyBvbmVqYW4uZ2V0RGF5KCkrMSkvNyk7XG4gICAgICAgIHJldHVybiAnPHRkIGNsYXNzPVwicGlrYS13ZWVrXCI+JyArIHdlZWtOdW0gKyAnPC90ZD4nO1xuICAgIH0sXG5cbiAgICByZW5kZXJSb3cgPSBmdW5jdGlvbihkYXlzLCBpc1JUTClcbiAgICB7XG4gICAgICAgIHJldHVybiAnPHRyPicgKyAoaXNSVEwgPyBkYXlzLnJldmVyc2UoKSA6IGRheXMpLmpvaW4oJycpICsgJzwvdHI+JztcbiAgICB9LFxuXG4gICAgcmVuZGVyQm9keSA9IGZ1bmN0aW9uKHJvd3MpXG4gICAge1xuICAgICAgICByZXR1cm4gJzx0Ym9keT4nICsgcm93cy5qb2luKCcnKSArICc8L3Rib2R5Pic7XG4gICAgfSxcblxuICAgIHJlbmRlckhlYWQgPSBmdW5jdGlvbihvcHRzKVxuICAgIHtcbiAgICAgICAgdmFyIGksIGFyciA9IFtdO1xuICAgICAgICBpZiAob3B0cy5zaG93V2Vla051bWJlcikge1xuICAgICAgICAgICAgYXJyLnB1c2goJzx0aD48L3RoPicpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKCc8dGggc2NvcGU9XCJjb2xcIj48YWJiciB0aXRsZT1cIicgKyByZW5kZXJEYXlOYW1lKG9wdHMsIGkpICsgJ1wiPicgKyByZW5kZXJEYXlOYW1lKG9wdHMsIGksIHRydWUpICsgJzwvYWJicj48L3RoPicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnPHRoZWFkPjx0cj4nICsgKG9wdHMuaXNSVEwgPyBhcnIucmV2ZXJzZSgpIDogYXJyKS5qb2luKCcnKSArICc8L3RyPjwvdGhlYWQ+JztcbiAgICB9LFxuXG4gICAgcmVuZGVyVGl0bGUgPSBmdW5jdGlvbihpbnN0YW5jZSwgYywgeWVhciwgbW9udGgsIHJlZlllYXIsIHJhbmRJZClcbiAgICB7XG4gICAgICAgIHZhciBpLCBqLCBhcnIsXG4gICAgICAgICAgICBvcHRzID0gaW5zdGFuY2UuX28sXG4gICAgICAgICAgICBpc01pblllYXIgPSB5ZWFyID09PSBvcHRzLm1pblllYXIsXG4gICAgICAgICAgICBpc01heFllYXIgPSB5ZWFyID09PSBvcHRzLm1heFllYXIsXG4gICAgICAgICAgICBodG1sID0gJzxkaXYgaWQ9XCInICsgcmFuZElkICsgJ1wiIGNsYXNzPVwicGlrYS10aXRsZVwiIHJvbGU9XCJoZWFkaW5nXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCI+JyxcbiAgICAgICAgICAgIG1vbnRoSHRtbCxcbiAgICAgICAgICAgIHllYXJIdG1sLFxuICAgICAgICAgICAgcHJldiA9IHRydWUsXG4gICAgICAgICAgICBuZXh0ID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKGFyciA9IFtdLCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKCc8b3B0aW9uIHZhbHVlPVwiJyArICh5ZWFyID09PSByZWZZZWFyID8gaSAtIGMgOiAxMiArIGkgLSBjKSArICdcIicgK1xuICAgICAgICAgICAgICAgIChpID09PSBtb250aCA/ICcgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJzogJycpICtcbiAgICAgICAgICAgICAgICAoKGlzTWluWWVhciAmJiBpIDwgb3B0cy5taW5Nb250aCkgfHwgKGlzTWF4WWVhciAmJiBpID4gb3B0cy5tYXhNb250aCkgPyAnZGlzYWJsZWQ9XCJkaXNhYmxlZFwiJyA6ICcnKSArICc+JyArXG4gICAgICAgICAgICAgICAgb3B0cy5pMThuLm1vbnRoc1tpXSArICc8L29wdGlvbj4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbnRoSHRtbCA9ICc8ZGl2IGNsYXNzPVwicGlrYS1sYWJlbFwiPicgKyBvcHRzLmkxOG4ubW9udGhzW21vbnRoXSArICc8c2VsZWN0IGNsYXNzPVwicGlrYS1zZWxlY3QgcGlrYS1zZWxlY3QtbW9udGhcIiB0YWJpbmRleD1cIi0xXCI+JyArIGFyci5qb2luKCcnKSArICc8L3NlbGVjdD48L2Rpdj4nO1xuXG4gICAgICAgIGlmIChpc0FycmF5KG9wdHMueWVhclJhbmdlKSkge1xuICAgICAgICAgICAgaSA9IG9wdHMueWVhclJhbmdlWzBdO1xuICAgICAgICAgICAgaiA9IG9wdHMueWVhclJhbmdlWzFdICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkgPSB5ZWFyIC0gb3B0cy55ZWFyUmFuZ2U7XG4gICAgICAgICAgICBqID0gMSArIHllYXIgKyBvcHRzLnllYXJSYW5nZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoYXJyID0gW107IGkgPCBqICYmIGkgPD0gb3B0cy5tYXhZZWFyOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID49IG9wdHMubWluWWVhcikge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKCc8b3B0aW9uIHZhbHVlPVwiJyArIGkgKyAnXCInICsgKGkgPT09IHllYXIgPyAnIHNlbGVjdGVkPVwic2VsZWN0ZWRcIic6ICcnKSArICc+JyArIChpKSArICc8L29wdGlvbj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB5ZWFySHRtbCA9ICc8ZGl2IGNsYXNzPVwicGlrYS1sYWJlbFwiPicgKyB5ZWFyICsgb3B0cy55ZWFyU3VmZml4ICsgJzxzZWxlY3QgY2xhc3M9XCJwaWthLXNlbGVjdCBwaWthLXNlbGVjdC15ZWFyXCIgdGFiaW5kZXg9XCItMVwiPicgKyBhcnIuam9pbignJykgKyAnPC9zZWxlY3Q+PC9kaXY+JztcblxuICAgICAgICBpZiAob3B0cy5zaG93TW9udGhBZnRlclllYXIpIHtcbiAgICAgICAgICAgIGh0bWwgKz0geWVhckh0bWwgKyBtb250aEh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sICs9IG1vbnRoSHRtbCArIHllYXJIdG1sO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTWluWWVhciAmJiAobW9udGggPT09IDAgfHwgb3B0cy5taW5Nb250aCA+PSBtb250aCkpIHtcbiAgICAgICAgICAgIHByZXYgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc01heFllYXIgJiYgKG1vbnRoID09PSAxMSB8fCBvcHRzLm1heE1vbnRoIDw9IG1vbnRoKSkge1xuICAgICAgICAgICAgbmV4dCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgICAgIGh0bWwgKz0gJzxidXR0b24gY2xhc3M9XCJwaWthLXByZXYnICsgKHByZXYgPyAnJyA6ICcgaXMtZGlzYWJsZWQnKSArICdcIiB0eXBlPVwiYnV0dG9uXCI+JyArIG9wdHMuaTE4bi5wcmV2aW91c01vbnRoICsgJzwvYnV0dG9uPic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPT09IChpbnN0YW5jZS5fby5udW1iZXJPZk1vbnRocyAtIDEpICkge1xuICAgICAgICAgICAgaHRtbCArPSAnPGJ1dHRvbiBjbGFzcz1cInBpa2EtbmV4dCcgKyAobmV4dCA/ICcnIDogJyBpcy1kaXNhYmxlZCcpICsgJ1wiIHR5cGU9XCJidXR0b25cIj4nICsgb3B0cy5pMThuLm5leHRNb250aCArICc8L2J1dHRvbj4nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGh0bWwgKz0gJzwvZGl2Pic7XG4gICAgfSxcblxuICAgIHJlbmRlclRhYmxlID0gZnVuY3Rpb24ob3B0cywgZGF0YSwgcmFuZElkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICc8dGFibGUgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2xhc3M9XCJwaWthLXRhYmxlXCIgcm9sZT1cImdyaWRcIiBhcmlhLWxhYmVsbGVkYnk9XCInICsgcmFuZElkICsgJ1wiPicgKyByZW5kZXJIZWFkKG9wdHMpICsgcmVuZGVyQm9keShkYXRhKSArICc8L3RhYmxlPic7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUGlrYWRheSBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIFBpa2FkYXkgPSBmdW5jdGlvbihvcHRpb25zKVxuICAgIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgb3B0cyA9IHNlbGYuY29uZmlnKG9wdGlvbnMpO1xuXG4gICAgICAgIHNlbGYuX29uTW91c2VEb3duID0gZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCFzZWxmLl92KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhhc0NsYXNzKHRhcmdldCwgJ2lzLWRpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2xhc3ModGFyZ2V0LCAncGlrYS1idXR0b24nKSAmJiAhaGFzQ2xhc3ModGFyZ2V0LCAnaXMtZW1wdHknKSAmJiAhaGFzQ2xhc3ModGFyZ2V0LnBhcmVudE5vZGUsICdpcy1kaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShuZXcgRGF0ZSh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBpa2EteWVhcicpLCB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBpa2EtbW9udGgnKSwgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1waWthLWRheScpKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmJvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG8oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMuZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5maWVsZC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChoYXNDbGFzcyh0YXJnZXQsICdwaWthLXByZXYnKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByZXZNb250aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChoYXNDbGFzcyh0YXJnZXQsICdwaWthLW5leHQnKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5leHRNb250aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGFzQ2xhc3ModGFyZ2V0LCAncGlrYS1zZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdG91Y2ggZXZlbnQgcHJldmVudCBtb3VzZSBldmVudHMgZW11bGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fYyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5fb25DaGFuZ2UgPSBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzQ2xhc3ModGFyZ2V0LCAncGlrYS1zZWxlY3QtbW9udGgnKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZ290b01vbnRoKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNDbGFzcyh0YXJnZXQsICdwaWthLXNlbGVjdC15ZWFyJykpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmdvdG9ZZWFyKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5fb25LZXlDaGFuZ2UgPSBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmlzVmlzaWJsZSgpKSB7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuZmllbGQuYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkanVzdERhdGUoJ3N1YnRyYWN0JywgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRqdXN0RGF0ZSgnc3VidHJhY3QnLCA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGp1c3REYXRlKCdhZGQnLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGp1c3REYXRlKCdhZGQnLCA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLl9vbklucHV0Q2hhbmdlID0gZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGRhdGU7XG5cbiAgICAgICAgICAgIGlmIChlLmZpcmVkQnkgPT09IHNlbGYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzTW9tZW50KSB7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IG1vbWVudChvcHRzLmZpZWxkLnZhbHVlLCBvcHRzLmZvcm1hdCwgb3B0cy5mb3JtYXRTdHJpY3QpO1xuICAgICAgICAgICAgICAgIGRhdGUgPSAoZGF0ZSAmJiBkYXRlLmlzVmFsaWQoKSkgPyBkYXRlLnRvRGF0ZSgpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKG9wdHMuZmllbGQudmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0RhdGUoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZWxmLl92KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5fb25JbnB1dEZvY3VzID0gZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxmLnNob3coKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLl9vbklucHV0Q2xpY2sgPSBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGYuc2hvdygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuX29uSW5wdXRCbHVyID0gZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBJRSBhbGxvd3MgcGlrYSBkaXYgdG8gZ2FpbiBmb2N1czsgY2F0Y2ggYmx1ciB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgICAgIHZhciBwRWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyhwRWwsICdwaWthLXNpbmdsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoKHBFbCA9IHBFbC5wYXJlbnROb2RlKSk7XG5cbiAgICAgICAgICAgIGlmICghc2VsZi5fYykge1xuICAgICAgICAgICAgICAgIHNlbGYuX2IgPSBzdG8oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuX2MgPSBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLl9vbkNsaWNrID0gZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCxcbiAgICAgICAgICAgICAgICBwRWwgPSB0YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGFzRXZlbnRMaXN0ZW5lcnMgJiYgaGFzQ2xhc3ModGFyZ2V0LCAncGlrYS1zZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0Lm9uY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ29uY2hhbmdlJywgJ3JldHVybjsnKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkRXZlbnQodGFyZ2V0LCAnY2hhbmdlJywgc2VsZi5fb25DaGFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2xhc3MocEVsLCAncGlrYS1zaW5nbGUnKSB8fCBwRWwgPT09IG9wdHMudHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKChwRWwgPSBwRWwucGFyZW50Tm9kZSkpO1xuICAgICAgICAgICAgaWYgKHNlbGYuX3YgJiYgdGFyZ2V0ICE9PSBvcHRzLnRyaWdnZXIgJiYgcEVsICE9PSBvcHRzLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlbGYuZWwuY2xhc3NOYW1lID0gJ3Bpa2Etc2luZ2xlJyArIChvcHRzLmlzUlRMID8gJyBpcy1ydGwnIDogJycpICsgKG9wdHMudGhlbWUgPyAnICcgKyBvcHRzLnRoZW1lIDogJycpO1xuXG4gICAgICAgIGFkZEV2ZW50KHNlbGYuZWwsICdtb3VzZWRvd24nLCBzZWxmLl9vbk1vdXNlRG93biwgdHJ1ZSk7XG4gICAgICAgIGFkZEV2ZW50KHNlbGYuZWwsICd0b3VjaGVuZCcsIHNlbGYuX29uTW91c2VEb3duLCB0cnVlKTtcbiAgICAgICAgYWRkRXZlbnQoc2VsZi5lbCwgJ2NoYW5nZScsIHNlbGYuX29uQ2hhbmdlKTtcbiAgICAgICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXlkb3duJywgc2VsZi5fb25LZXlDaGFuZ2UpO1xuXG4gICAgICAgIGlmIChvcHRzLmZpZWxkKSB7XG4gICAgICAgICAgICBpZiAob3B0cy5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmVsKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0cy5ib3VuZCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsZi5lbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdHMuZmllbGQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5lbCwgb3B0cy5maWVsZC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRFdmVudChvcHRzLmZpZWxkLCAnY2hhbmdlJywgc2VsZi5fb25JbnB1dENoYW5nZSk7XG5cbiAgICAgICAgICAgIGlmICghb3B0cy5kZWZhdWx0RGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNNb21lbnQgJiYgb3B0cy5maWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRzLmRlZmF1bHREYXRlID0gbW9tZW50KG9wdHMuZmllbGQudmFsdWUsIG9wdHMuZm9ybWF0KS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcHRzLmRlZmF1bHREYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShvcHRzLmZpZWxkLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdHMuc2V0RGVmYXVsdERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlZkRhdGUgPSBvcHRzLmRlZmF1bHREYXRlO1xuXG4gICAgICAgIGlmIChpc0RhdGUoZGVmRGF0ZSkpIHtcbiAgICAgICAgICAgIGlmIChvcHRzLnNldERlZmF1bHREYXRlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXREYXRlKGRlZkRhdGUsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmdvdG9EYXRlKGRlZkRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5nb3RvRGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRzLmJvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHNlbGYuZWwuY2xhc3NOYW1lICs9ICcgaXMtYm91bmQnO1xuICAgICAgICAgICAgYWRkRXZlbnQob3B0cy50cmlnZ2VyLCAnY2xpY2snLCBzZWxmLl9vbklucHV0Q2xpY2spO1xuICAgICAgICAgICAgYWRkRXZlbnQob3B0cy50cmlnZ2VyLCAnZm9jdXMnLCBzZWxmLl9vbklucHV0Rm9jdXMpO1xuICAgICAgICAgICAgYWRkRXZlbnQob3B0cy50cmlnZ2VyLCAnYmx1cicsIHNlbGYuX29uSW5wdXRCbHVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogcHVibGljIFBpa2FkYXkgQVBJXG4gICAgICovXG4gICAgUGlrYWRheS5wcm90b3R5cGUgPSB7XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogY29uZmlndXJlIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgICovXG4gICAgICAgIGNvbmZpZzogZnVuY3Rpb24ob3B0aW9ucylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9vKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbyA9IGV4dGVuZCh7fSwgZGVmYXVsdHMsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgb3B0cyA9IGV4dGVuZCh0aGlzLl9vLCBvcHRpb25zLCB0cnVlKTtcblxuICAgICAgICAgICAgb3B0cy5pc1JUTCA9ICEhb3B0cy5pc1JUTDtcblxuICAgICAgICAgICAgb3B0cy5maWVsZCA9IChvcHRzLmZpZWxkICYmIG9wdHMuZmllbGQubm9kZU5hbWUpID8gb3B0cy5maWVsZCA6IG51bGw7XG5cbiAgICAgICAgICAgIG9wdHMudGhlbWUgPSAodHlwZW9mIG9wdHMudGhlbWUpID09PSAnc3RyaW5nJyAmJiBvcHRzLnRoZW1lID8gb3B0cy50aGVtZSA6IG51bGw7XG5cbiAgICAgICAgICAgIG9wdHMuYm91bmQgPSAhIShvcHRzLmJvdW5kICE9PSB1bmRlZmluZWQgPyBvcHRzLmZpZWxkICYmIG9wdHMuYm91bmQgOiBvcHRzLmZpZWxkKTtcblxuICAgICAgICAgICAgb3B0cy50cmlnZ2VyID0gKG9wdHMudHJpZ2dlciAmJiBvcHRzLnRyaWdnZXIubm9kZU5hbWUpID8gb3B0cy50cmlnZ2VyIDogb3B0cy5maWVsZDtcblxuICAgICAgICAgICAgb3B0cy5kaXNhYmxlV2Vla2VuZHMgPSAhIW9wdHMuZGlzYWJsZVdlZWtlbmRzO1xuXG4gICAgICAgICAgICBvcHRzLmRpc2FibGVEYXlGbiA9ICh0eXBlb2Ygb3B0cy5kaXNhYmxlRGF5Rm4pID09PSAnZnVuY3Rpb24nID8gb3B0cy5kaXNhYmxlRGF5Rm4gOiBudWxsO1xuXG4gICAgICAgICAgICB2YXIgbm9tID0gcGFyc2VJbnQob3B0cy5udW1iZXJPZk1vbnRocywgMTApIHx8IDE7XG4gICAgICAgICAgICBvcHRzLm51bWJlck9mTW9udGhzID0gbm9tID4gNCA/IDQgOiBub207XG5cbiAgICAgICAgICAgIGlmICghaXNEYXRlKG9wdHMubWluRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBvcHRzLm1pbkRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNEYXRlKG9wdHMubWF4RGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBvcHRzLm1heERhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgob3B0cy5taW5EYXRlICYmIG9wdHMubWF4RGF0ZSkgJiYgb3B0cy5tYXhEYXRlIDwgb3B0cy5taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5tYXhEYXRlID0gb3B0cy5taW5EYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0cy5taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNaW5EYXRlKG9wdHMubWluRGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0cy5tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYXhEYXRlKG9wdHMubWF4RGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0FycmF5KG9wdHMueWVhclJhbmdlKSkge1xuICAgICAgICAgICAgICAgIHZhciBmYWxsYmFjayA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDEwO1xuICAgICAgICAgICAgICAgIG9wdHMueWVhclJhbmdlWzBdID0gcGFyc2VJbnQob3B0cy55ZWFyUmFuZ2VbMF0sIDEwKSB8fCBmYWxsYmFjaztcbiAgICAgICAgICAgICAgICBvcHRzLnllYXJSYW5nZVsxXSA9IHBhcnNlSW50KG9wdHMueWVhclJhbmdlWzFdLCAxMCkgfHwgZmFsbGJhY2s7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdHMueWVhclJhbmdlID0gTWF0aC5hYnMocGFyc2VJbnQob3B0cy55ZWFyUmFuZ2UsIDEwKSkgfHwgZGVmYXVsdHMueWVhclJhbmdlO1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLnllYXJSYW5nZSA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRzLnllYXJSYW5nZSA9IDEwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvcHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZXR1cm4gYSBmb3JtYXR0ZWQgc3RyaW5nIG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbiAodXNpbmcgTW9tZW50LmpzIGlmIGF2YWlsYWJsZSlcbiAgICAgICAgICovXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbihmb3JtYXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAhaXNEYXRlKHRoaXMuX2QpID8gJycgOiBoYXNNb21lbnQgPyBtb21lbnQodGhpcy5fZCkuZm9ybWF0KGZvcm1hdCB8fCB0aGlzLl9vLmZvcm1hdCkgOiB0aGlzLl9kLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZXR1cm4gYSBNb21lbnQuanMgb2JqZWN0IG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbiAoaWYgYXZhaWxhYmxlKVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TW9tZW50OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNNb21lbnQgPyBtb21lbnQodGhpcy5fZCkgOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGZyb20gYSBNb21lbnQuanMgb2JqZWN0IChpZiBhdmFpbGFibGUpXG4gICAgICAgICAqL1xuICAgICAgICBzZXRNb21lbnQ6IGZ1bmN0aW9uKGRhdGUsIHByZXZlbnRPblNlbGVjdClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGhhc01vbWVudCAmJiBtb21lbnQuaXNNb21lbnQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGUoZGF0ZS50b0RhdGUoKSwgcHJldmVudE9uU2VsZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmV0dXJuIGEgRGF0ZSBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIHdpdGggZmFsbGJhY2sgZm9yIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgICAgICovXG4gICAgICAgIGdldERhdGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGlzRGF0ZSh0aGlzLl9kKSA/IG5ldyBEYXRlKHRoaXMuX2QuZ2V0VGltZSgpKSA6IG5ldyBEYXRlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNldCB0aGUgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIHNldERhdGU6IGZ1bmN0aW9uKGRhdGUsIHByZXZlbnRPblNlbGVjdClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fby5maWVsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vLmZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudCh0aGlzLl9vLmZpZWxkLCAnY2hhbmdlJywgeyBmaXJlZEJ5OiB0aGlzIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzRGF0ZShkYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG1pbiA9IHRoaXMuX28ubWluRGF0ZSxcbiAgICAgICAgICAgICAgICBtYXggPSB0aGlzLl9vLm1heERhdGU7XG5cbiAgICAgICAgICAgIGlmIChpc0RhdGUobWluKSAmJiBkYXRlIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IG1pbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlKG1heCkgJiYgZGF0ZSA+IG1heCkge1xuICAgICAgICAgICAgICAgIGRhdGUgPSBtYXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICBzZXRUb1N0YXJ0T2ZEYXkodGhpcy5fZCk7XG4gICAgICAgICAgICB0aGlzLmdvdG9EYXRlKHRoaXMuX2QpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fby5maWVsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX28uZmllbGQudmFsdWUgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KHRoaXMuX28uZmllbGQsICdjaGFuZ2UnLCB7IGZpcmVkQnk6IHRoaXMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXByZXZlbnRPblNlbGVjdCAmJiB0eXBlb2YgdGhpcy5fby5vblNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX28ub25TZWxlY3QuY2FsbCh0aGlzLCB0aGlzLmdldERhdGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNoYW5nZSB2aWV3IHRvIGEgc3BlY2lmaWMgZGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgZ290b0RhdGU6IGZ1bmN0aW9uKGRhdGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBuZXdDYWxlbmRhciA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICghaXNEYXRlKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jYWxlbmRhcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RWaXNpYmxlRGF0ZSA9IG5ldyBEYXRlKHRoaXMuY2FsZW5kYXJzWzBdLnllYXIsIHRoaXMuY2FsZW5kYXJzWzBdLm1vbnRoLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFZpc2libGVEYXRlID0gbmV3IERhdGUodGhpcy5jYWxlbmRhcnNbdGhpcy5jYWxlbmRhcnMubGVuZ3RoLTFdLnllYXIsIHRoaXMuY2FsZW5kYXJzW3RoaXMuY2FsZW5kYXJzLmxlbmd0aC0xXS5tb250aCwgMSksXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVEYXRlID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBlbmQgb2YgdGhlIG1vbnRoXG4gICAgICAgICAgICAgICAgbGFzdFZpc2libGVEYXRlLnNldE1vbnRoKGxhc3RWaXNpYmxlRGF0ZS5nZXRNb250aCgpKzEpO1xuICAgICAgICAgICAgICAgIGxhc3RWaXNpYmxlRGF0ZS5zZXREYXRlKGxhc3RWaXNpYmxlRGF0ZS5nZXREYXRlKCktMSk7XG4gICAgICAgICAgICAgICAgbmV3Q2FsZW5kYXIgPSAodmlzaWJsZURhdGUgPCBmaXJzdFZpc2libGVEYXRlLmdldFRpbWUoKSB8fCBsYXN0VmlzaWJsZURhdGUuZ2V0VGltZSgpIDwgdmlzaWJsZURhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3Q2FsZW5kYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vLm1haW5DYWxlbmRhciA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXS5tb250aCArPSAxIC0gdGhpcy5fby5udW1iZXJPZk1vbnRocztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWRqdXN0Q2FsZW5kYXJzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRqdXN0RGF0ZTogZnVuY3Rpb24oc2lnbiwgZGF5cykge1xuXG4gICAgICAgICAgICB2YXIgZGF5ID0gdGhpcy5nZXREYXRlKCk7XG4gICAgICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IHBhcnNlSW50KGRheXMpKjI0KjYwKjYwKjEwMDA7XG5cbiAgICAgICAgICAgIHZhciBuZXdEYXk7XG5cbiAgICAgICAgICAgIGlmIChzaWduID09PSAnYWRkJykge1xuICAgICAgICAgICAgICAgIG5ld0RheSA9IG5ldyBEYXRlKGRheS52YWx1ZU9mKCkgKyBkaWZmZXJlbmNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2lnbiA9PT0gJ3N1YnRyYWN0Jykge1xuICAgICAgICAgICAgICAgIG5ld0RheSA9IG5ldyBEYXRlKGRheS52YWx1ZU9mKCkgLSBkaWZmZXJlbmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhhc01vbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChzaWduID09PSAnYWRkJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdEYXkgPSBtb21lbnQoZGF5KS5hZGQoZGF5cywgXCJkYXlzXCIpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2lnbiA9PT0gJ3N1YnRyYWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBuZXdEYXkgPSBtb21lbnQoZGF5KS5zdWJ0cmFjdChkYXlzLCBcImRheXNcIikudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldERhdGUobmV3RGF5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGp1c3RDYWxlbmRhcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0gPSBhZGp1c3RDYWxlbmRhcih0aGlzLmNhbGVuZGFyc1swXSk7XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMTsgYyA8IHRoaXMuX28ubnVtYmVyT2ZNb250aHM7IGMrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzW2NdID0gYWRqdXN0Q2FsZW5kYXIoe1xuICAgICAgICAgICAgICAgICAgICBtb250aDogdGhpcy5jYWxlbmRhcnNbMF0ubW9udGggKyBjLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiB0aGlzLmNhbGVuZGFyc1swXS55ZWFyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnb3RvVG9kYXk6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5nb3RvRGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogY2hhbmdlIHZpZXcgdG8gYSBzcGVjaWZpYyBtb250aCAoemVyby1pbmRleCwgZS5nLiAwOiBKYW51YXJ5KVxuICAgICAgICAgKi9cbiAgICAgICAgZ290b01vbnRoOiBmdW5jdGlvbihtb250aClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCFpc05hTihtb250aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXS5tb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RDYWxlbmRhcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBuZXh0TW9udGg6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0ubW9udGgrKztcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0Q2FsZW5kYXJzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJldk1vbnRoOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdLm1vbnRoLS07XG4gICAgICAgICAgICB0aGlzLmFkanVzdENhbGVuZGFycygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjaGFuZ2UgdmlldyB0byBhIHNwZWNpZmljIGZ1bGwgeWVhciAoZS5nLiBcIjIwMTJcIilcbiAgICAgICAgICovXG4gICAgICAgIGdvdG9ZZWFyOiBmdW5jdGlvbih5ZWFyKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKHllYXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0ueWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkanVzdENhbGVuZGFycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjaGFuZ2UgdGhlIG1pbkRhdGVcbiAgICAgICAgICovXG4gICAgICAgIHNldE1pbkRhdGU6IGZ1bmN0aW9uKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICBzZXRUb1N0YXJ0T2ZEYXkodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWluRGF0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWluWWVhciAgPSB2YWx1ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWluTW9udGggPSB2YWx1ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1pbkRhdGUgPSBkZWZhdWx0cy5taW5EYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWluWWVhciAgPSBkZWZhdWx0cy5taW5ZZWFyO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWluTW9udGggPSBkZWZhdWx0cy5taW5Nb250aDtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLnN0YXJ0UmFuZ2UgPSBkZWZhdWx0cy5zdGFydFJhbmdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogY2hhbmdlIHRoZSBtYXhEYXRlXG4gICAgICAgICAqL1xuICAgICAgICBzZXRNYXhEYXRlOiBmdW5jdGlvbih2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgc2V0VG9TdGFydE9mRGF5KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1heERhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1heFllYXIgPSB2YWx1ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWF4TW9udGggPSB2YWx1ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1heERhdGUgPSBkZWZhdWx0cy5tYXhEYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWF4WWVhciA9IGRlZmF1bHRzLm1heFllYXI7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5tYXhNb250aCA9IGRlZmF1bHRzLm1heE1vbnRoO1xuICAgICAgICAgICAgICAgIHRoaXMuX28uZW5kUmFuZ2UgPSBkZWZhdWx0cy5lbmRSYW5nZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0U3RhcnRSYW5nZTogZnVuY3Rpb24odmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX28uc3RhcnRSYW5nZSA9IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEVuZFJhbmdlOiBmdW5jdGlvbih2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fby5lbmRSYW5nZSA9IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZWZyZXNoIHRoZSBIVE1MXG4gICAgICAgICAqL1xuICAgICAgICBkcmF3OiBmdW5jdGlvbihmb3JjZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl92ICYmICFmb3JjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcHRzID0gdGhpcy5fbyxcbiAgICAgICAgICAgICAgICBtaW5ZZWFyID0gb3B0cy5taW5ZZWFyLFxuICAgICAgICAgICAgICAgIG1heFllYXIgPSBvcHRzLm1heFllYXIsXG4gICAgICAgICAgICAgICAgbWluTW9udGggPSBvcHRzLm1pbk1vbnRoLFxuICAgICAgICAgICAgICAgIG1heE1vbnRoID0gb3B0cy5tYXhNb250aCxcbiAgICAgICAgICAgICAgICBodG1sID0gJycsXG4gICAgICAgICAgICAgICAgcmFuZElkO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5feSA8PSBtaW5ZZWFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5feSA9IG1pblllYXI7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihtaW5Nb250aCkgJiYgdGhpcy5fbSA8IG1pbk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX20gPSBtaW5Nb250aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5feSA+PSBtYXhZZWFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5feSA9IG1heFllYXI7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihtYXhNb250aCkgJiYgdGhpcy5fbSA+IG1heE1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX20gPSBtYXhNb250aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJhbmRJZCA9ICdwaWthLXRpdGxlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgMik7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgb3B0cy5udW1iZXJPZk1vbnRoczsgYysrKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cInBpa2EtbGVuZGFyXCI+JyArIHJlbmRlclRpdGxlKHRoaXMsIGMsIHRoaXMuY2FsZW5kYXJzW2NdLnllYXIsIHRoaXMuY2FsZW5kYXJzW2NdLm1vbnRoLCB0aGlzLmNhbGVuZGFyc1swXS55ZWFyLCByYW5kSWQpICsgdGhpcy5yZW5kZXIodGhpcy5jYWxlbmRhcnNbY10ueWVhciwgdGhpcy5jYWxlbmRhcnNbY10ubW9udGgsIHJhbmRJZCkgKyAnPC9kaXY+JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICAgICAgICBpZiAob3B0cy5ib3VuZCkge1xuICAgICAgICAgICAgICAgIGlmKG9wdHMuZmllbGQudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy50cmlnZ2VyLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vLm9uRHJhdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX28ub25EcmF3KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3B0cy5ib3VuZCkge1xuICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgc2NyZWVuIHJlYWRlciB1c2VyIGtub3cgdG8gdXNlIGFycm93IGtleXNcbiAgICAgICAgICAgICAgICBvcHRzLmZpZWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdVc2UgdGhlIGFycm93IGtleXMgdG8gcGljayBhIGRhdGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhZGp1c3RQb3NpdGlvbjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZmllbGQsIHBFbCwgd2lkdGgsIGhlaWdodCwgdmlld3BvcnRXaWR0aCwgdmlld3BvcnRIZWlnaHQsIHNjcm9sbFRvcCwgbGVmdCwgdG9wLCBjbGllbnRSZWN0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fby5jb250YWluZXIpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiAgICAgICAgICAgIGZpZWxkID0gdGhpcy5fby50cmlnZ2VyO1xuICAgICAgICAgICAgcEVsID0gZmllbGQ7XG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMuZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHZpZXdwb3J0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50UmVjdCA9IGZpZWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGxlZnQgPSBjbGllbnRSZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdG9wID0gY2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBwRWwub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICB0b3AgID0gcEVsLm9mZnNldFRvcCArIHBFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgd2hpbGUoKHBFbCA9IHBFbC5vZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgKz0gcEVsLm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHRvcCAgKz0gcEVsLm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRlZmF1bHQgcG9zaXRpb24gaXMgYm90dG9tICYgbGVmdFxuICAgICAgICAgICAgaWYgKCh0aGlzLl9vLnJlcG9zaXRpb24gJiYgbGVmdCArIHdpZHRoID4gdmlld3BvcnRXaWR0aCkgfHxcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX28ucG9zaXRpb24uaW5kZXhPZigncmlnaHQnKSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgLSB3aWR0aCArIGZpZWxkLm9mZnNldFdpZHRoID4gMFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0IC0gd2lkdGggKyBmaWVsZC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodGhpcy5fby5yZXBvc2l0aW9uICYmIHRvcCArIGhlaWdodCA+IHZpZXdwb3J0SGVpZ2h0ICsgc2Nyb2xsVG9wKSB8fFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fby5wb3NpdGlvbi5pbmRleE9mKCd0b3AnKSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgIHRvcCAtIGhlaWdodCAtIGZpZWxkLm9mZnNldEhlaWdodCA+IDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0b3AgPSB0b3AgLSBoZWlnaHQgLSBmaWVsZC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZW5kZXIgSFRNTCBmb3IgYSBwYXJ0aWN1bGFyIG1vbnRoXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCByYW5kSWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBvcHRzICAgPSB0aGlzLl9vLFxuICAgICAgICAgICAgICAgIG5vdyAgICA9IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgZGF5cyAgID0gZ2V0RGF5c0luTW9udGgoeWVhciwgbW9udGgpLFxuICAgICAgICAgICAgICAgIGJlZm9yZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKSxcbiAgICAgICAgICAgICAgICBkYXRhICAgPSBbXSxcbiAgICAgICAgICAgICAgICByb3cgICAgPSBbXTtcbiAgICAgICAgICAgIHNldFRvU3RhcnRPZkRheShub3cpO1xuICAgICAgICAgICAgaWYgKG9wdHMuZmlyc3REYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYmVmb3JlIC09IG9wdHMuZmlyc3REYXk7XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlICs9IDc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByZXZpb3VzTW9udGggPSBtb250aCA9PT0gMCA/IDExIDogbW9udGggLSAxLFxuICAgICAgICAgICAgICAgIG5leHRNb250aCA9IG1vbnRoID09PSAxMSA/IDAgOiBtb250aCArIDEsXG4gICAgICAgICAgICAgICAgeWVhck9mUHJldmlvdXNNb250aCA9IG1vbnRoID09PSAwID8geWVhciAtIDEgOiB5ZWFyLFxuICAgICAgICAgICAgICAgIHllYXJPZk5leHRNb250aCA9IG1vbnRoID09PSAxMSA/IHllYXIgKyAxIDogeWVhcixcbiAgICAgICAgICAgICAgICBkYXlzSW5QcmV2aW91c01vbnRoID0gZ2V0RGF5c0luTW9udGgoeWVhck9mUHJldmlvdXNNb250aCwgcHJldmlvdXNNb250aCk7XG4gICAgICAgICAgICB2YXIgY2VsbHMgPSBkYXlzICsgYmVmb3JlLFxuICAgICAgICAgICAgICAgIGFmdGVyID0gY2VsbHM7XG4gICAgICAgICAgICB3aGlsZShhZnRlciA+IDcpIHtcbiAgICAgICAgICAgICAgICBhZnRlciAtPSA3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMgKz0gNyAtIGFmdGVyO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHIgPSAwOyBpIDwgY2VsbHM7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEgKyAoaSAtIGJlZm9yZSkpLFxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID0gaXNEYXRlKHRoaXMuX2QpID8gY29tcGFyZURhdGVzKGRheSwgdGhpcy5fZCkgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXNUb2RheSA9IGNvbXBhcmVEYXRlcyhkYXksIG5vdyksXG4gICAgICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBpIDwgYmVmb3JlIHx8IGkgPj0gKGRheXMgKyBiZWZvcmUpLFxuICAgICAgICAgICAgICAgICAgICBkYXlOdW1iZXIgPSAxICsgKGkgLSBiZWZvcmUpLFxuICAgICAgICAgICAgICAgICAgICBtb250aE51bWJlciA9IG1vbnRoLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhcixcbiAgICAgICAgICAgICAgICAgICAgaXNTdGFydFJhbmdlID0gb3B0cy5zdGFydFJhbmdlICYmIGNvbXBhcmVEYXRlcyhvcHRzLnN0YXJ0UmFuZ2UsIGRheSksXG4gICAgICAgICAgICAgICAgICAgIGlzRW5kUmFuZ2UgPSBvcHRzLmVuZFJhbmdlICYmIGNvbXBhcmVEYXRlcyhvcHRzLmVuZFJhbmdlLCBkYXkpLFxuICAgICAgICAgICAgICAgICAgICBpc0luUmFuZ2UgPSBvcHRzLnN0YXJ0UmFuZ2UgJiYgb3B0cy5lbmRSYW5nZSAmJiBvcHRzLnN0YXJ0UmFuZ2UgPCBkYXkgJiYgZGF5IDwgb3B0cy5lbmRSYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZCA9IChvcHRzLm1pbkRhdGUgJiYgZGF5IDwgb3B0cy5taW5EYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdHMubWF4RGF0ZSAmJiBkYXkgPiBvcHRzLm1heERhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0cy5kaXNhYmxlV2Vla2VuZHMgJiYgaXNXZWVrZW5kKGRheSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0cy5kaXNhYmxlRGF5Rm4gJiYgb3B0cy5kaXNhYmxlRGF5Rm4oZGF5KSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5TnVtYmVyID0gZGF5c0luUHJldmlvdXNNb250aCArIGRheU51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gcHJldmlvdXNNb250aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyT2ZQcmV2aW91c01vbnRoO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5TnVtYmVyID0gZGF5TnVtYmVyIC0gZGF5cztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gbmV4dE1vbnRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJPZk5leHRNb250aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkYXlDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6IGRheU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBtb250aE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IHllYXJOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RheTogaXNUb2RheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VtcHR5OiBpc0VtcHR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdGFydFJhbmdlOiBpc1N0YXJ0UmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VuZFJhbmdlOiBpc0VuZFJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNJblJhbmdlOiBpc0luUmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGF5c0luTmV4dEFuZFByZXZpb3VzTW9udGhzOiBvcHRzLnNob3dEYXlzSW5OZXh0QW5kUHJldmlvdXNNb250aHNcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKHJlbmRlckRheShkYXlDb25maWcpKTtcblxuICAgICAgICAgICAgICAgIGlmICgrK3IgPT09IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMuc2hvd1dlZWtOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy51bnNoaWZ0KHJlbmRlcldlZWsoaSAtIGJlZm9yZSwgbW9udGgsIHllYXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2gocmVuZGVyUm93KHJvdywgb3B0cy5pc1JUTCkpO1xuICAgICAgICAgICAgICAgICAgICByb3cgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYmxlKG9wdHMsIGRhdGEsIHJhbmRJZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNWaXNpYmxlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2lzLWhpZGRlbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3YgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vLmJvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50KGRvY3VtZW50LCAnY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX28ub25PcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX28ub25PcGVuLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLl92O1xuICAgICAgICAgICAgaWYgKHYgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX28uYm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoZG9jdW1lbnQsICdjbGljaycsIHRoaXMuX29uQ2xpY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7IC8vIHJlc2V0XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUudG9wID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKHRoaXMuZWwsICdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLl92ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGhpcy5fby5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX28ub25DbG9zZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR0FNRSBPVkVSXG4gICAgICAgICAqL1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQodGhpcy5lbCwgJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duLCB0cnVlKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KHRoaXMuZWwsICd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VEb3duLCB0cnVlKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KHRoaXMuZWwsICdjaGFuZ2UnLCB0aGlzLl9vbkNoYW5nZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fby5maWVsZCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50KHRoaXMuX28uZmllbGQsICdjaGFuZ2UnLCB0aGlzLl9vbklucHV0Q2hhbmdlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fby5ib3VuZCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudCh0aGlzLl9vLnRyaWdnZXIsICdjbGljaycsIHRoaXMuX29uSW5wdXRDbGljayk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50KHRoaXMuX28udHJpZ2dlciwgJ2ZvY3VzJywgdGhpcy5fb25JbnB1dEZvY3VzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQodGhpcy5fby50cmlnZ2VyLCAnYmx1cicsIHRoaXMuX29uSW5wdXRCbHVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5lbC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIFBpa2FkYXk7XG5cbn0pKTtcbiIsIlxuaW1wb3J0IFBpY2tlciBmcm9tICcuL1BpY2tlcidcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi9UaW1lUGlja2VyJ1xuaW1wb3J0IFBpa2FkYXkgZnJvbSAncGlrYWRheSdcblxuY29uc3QgcGlja2VyTW9kdWxlID0ge1xuICBwaWNrOiBmdW5jdGlvbiAob3B0aW9ucywgY29uZmlybUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaykge1xuICAgIGNvbnN0IGl0ZW1zID0gb3B0aW9ucy5pdGVtc1xuICAgIGNvbnN0IGluZGV4ID0gb3B0aW9ucy5pbmRleFxuICAgIG5ldyBQaWNrZXIoe1xuICAgICAgZGF0YTogaXRlbXMsXG4gICAgICBkZWZhdWx0SW5kZXhzOiBbaW5kZXhdLFxuICAgICAgY29uZmlybUNhbGxiYWNrOiBjb25maXJtQ2FsbGJhY2ssXG4gICAgICBjYW5jZWxDYWxsYmFjazogY2FuY2VsQ2FsbGJhY2ssXG4gICAgICBzZW5kZXI6IHRoaXMuc2VuZGVyXG4gICAgfSlcbiAgfSxcblxuICBwaWNrRGF0ZTogZnVuY3Rpb24gKG9wdGlvbnMsIGNvbmZpcm1DYWxsYmFjaykge1xuICAgIGNvbnN0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1hc2suY2xhc3NOYW1lID0gJ3dlZXgtcGlja2VyLW1hc2snXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBkZWJ1Z2dlclxuICAgIGNvbnNvbGUubG9nKG1vbWVudChvcHRpb25zLm1pbiwgJ1lZWVktTU0tREQnKS50b0RhdGUoKSlcbiAgICBjb25zdCBwaWNrZXIgPSBuZXcgUGlrYWRheSh7XG4gICAgICBkZWZhdWx0RGF0ZTogbW9tZW50KG9wdGlvbnMudmFsdWUsICdZWVlZLU1NLUREJykudG9EYXRlKCksXG4gICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICAgIG1pbkRhdGU6IG1vbWVudChvcHRpb25zLm1pbiwgJ1lZWVktTU0tREQnKS50b0RhdGUoKSxcbiAgICAgIG1heERhdGU6IG1vbWVudChvcHRpb25zLm1heCwgJ1lZWVktTU0tREQnKS50b0RhdGUoKSxcbiAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2sgJiYgc2VsZi5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNvbmZpcm1DYWxsYmFjaywgeyByZXN1bHQ6ICdzdWNjZXNzJywgZGF0YTogbW9tZW50KGRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIH0pXG4gICAgICAgIHBpY2tlci5kZXN0cm95KClcbiAgICAgICAgbWFzay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1hc2spXG4gICAgICB9XG4gICAgfSlcbiAgICBtYXNrLmFwcGVuZENoaWxkKHBpY2tlci5lbClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtYXNrKVxuICB9LFxuXG4gIHBpY2tUaW1lOiBmdW5jdGlvbiAob3B0aW9ucywgY29uZmlybUNhbGxiYWNrKSB7XG4gICAgbmV3IFRpbWVQaWNrZXIoe1xuICAgICAgdmFsdWU6IG9wdGlvbnMudmFsdWUsXG4gICAgICBjb25maXJtQ2FsbGJhY2s6IGNvbmZpcm1DYWxsYmFjayxcbiAgICAgIHNlbmRlcjogdGhpcy5zZW5kZXJcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIHBpY2tlcjogW3tcbiAgICBuYW1lOiAncGljaycsXG4gICAgYXJnczogWydvYmplY3QnLCAnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ3BpY2tEYXRlJyxcbiAgICBhcmdzOiBbJ29iamVjdCcsICdmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAncGlja1RpbWUnLFxuICAgIGFyZ3M6IFsnb2JqZWN0JywgJ2Z1bmN0aW9uJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ3BpY2tlcicsIHBpY2tlck1vZHVsZSwgbWV0YSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRoaXMiLCJhcmd1bWVudHMiLCJsZXQiLCJjb25zdCIsIklTY3JvbGwiLCJpIiwic29tZSIsInNldCIsImluZGV4T2YiLCJoYW5kbGVTdHJpY3RQYXJzZSIsImtleXMiLCJjYWxlbmRhciIsImlzVmFsaWQiLCJfaXNWYWxpZCIsInByb3RvIiwiZ2V0IiwiYWRkU3VidHJhY3QiLCJhZGQiLCJzdWJ0cmFjdCIsInZhbHVlT2YiLCJyZWxhdGl2ZVRpbWUiLCJhYnMiLCJ0b0lTT1N0cmluZyIsIm1vbWVudCIsImxvY2FsIiwiZm4iLCJ1dGMiLCJ1bml4IiwibW9udGhzIiwibG9jYWxlIiwiaW52YWxpZCIsImR1cmF0aW9uIiwid2Vla2RheXMiLCJwYXJzZVpvbmUiLCJsb2NhbGVEYXRhIiwibW9udGhzU2hvcnQiLCJ3ZWVrZGF5c01pbiIsImxvY2FsZXMiLCJ3ZWVrZGF5c1Nob3J0IiwicmVsYXRpdmVUaW1lUm91bmRpbmciLCJyZWxhdGl2ZVRpbWVUaHJlc2hvbGQiLCJQaWthZGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLENBQUMsVUFBVSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtBQUNuQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMscUJBQXFCO0NBQ3JDLE1BQU0sQ0FBQywyQkFBMkI7Q0FDbEMsTUFBTSxDQUFDLHdCQUF3QjtDQUMvQixNQUFNLENBQUMsc0JBQXNCO0NBQzdCLE1BQU0sQ0FBQyx1QkFBdUI7Q0FDOUIsVUFBVSxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDOztBQUVqRSxJQUFJLEtBQUssR0FBRyxDQUFDLFlBQVk7Q0FDeEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDOztDQUVaLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0NBQ3hELElBQUksT0FBTyxHQUFHLENBQUMsWUFBWTtFQUMxQixJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJ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SSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDdkI7O0VBRUQsT0FBTztHQUNOLENBQUMsRUFBRSxDQUFDO0dBQ0osQ0FBQyxFQUFFLENBQUM7R0FDSixLQUFLLEVBQUUsQ0FBQztHQUNSLEtBQUssRUFBRSxDQUFDO0dBQ1IsQ0FBQztFQUNGOztDQUVELFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtFQUN2QyxNQUFNLEdBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDOztFQUU3QyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRztHQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0dBQzFCLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0dBQ25CLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDTjs7RUFFRCxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRztHQUNoQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0dBQzdCLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0dBQ25CLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDTjs7RUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUUzQixJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRztH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Q0FBQyxDQUFDLENBQUM7R0FDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7R0FDNUI7O0VBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7RUFFcEcsU0FBUyxDQUFDLENBQUMsT0FBTztHQUNqQixLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU07SUFDbkMsS0FBSyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUc7S0FDMUQsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztLQUNyQyxNQUFNO0tBQ04sSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUN0QztJQUNELE1BQU07R0FDUCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVE7SUFDckMsS0FBSyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUc7S0FDMUQsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztLQUNyQyxNQUFNO0tBQ04sSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUN0QztJQUNELE1BQU07R0FDUCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUc7SUFDaEMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNwRCxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxD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Q0FBQztRQUNyQyxLQUFLLEdBQUdBLE1BQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCOzs7SUFHRCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hEOztJQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLElBQUksQ0FBQyxtQkFB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R0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztDQUMxQyxDQUFDLENBQUM7QUFDSCxhQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDakQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQzVDLENBQUMsQ0FBQztBQUNILGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUNuRCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FB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LEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDNUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVDOzs7SUFHRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDZixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZGOzs7SUFHRCxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdkIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCOztJQUVELE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7SUFHN0UsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtRQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwRTs7SUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDakIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDeEI7Q0FDSjs7QUFFRCxTQUFTLHFCQUFxQixDQUFDLE1BQU0sRUFBRTtJQUNuQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxlQUFlLENBQUM7O0lBRWhFLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtRQUM1QyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsR0FBRyxHQUFHLENBQUMsQ0FBQzs7Ozs7O1FBTVIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRixJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDMUI7S0FDSixNQUFNO1FBQ0gsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMvQixHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztRQUUvQixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUVsRCxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7OztRQUd6RCxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUVuQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFOztZQUViLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLGVBQWUsR0FBRyxJQUFJLENBQUM7YUFDMUI7U0FDSixNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7O1lBRXBCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixlQUFlLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1NBQ0osTUFBTTs7WUFFSCxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO0tBQ0o7SUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ3BELGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0tBQ2pELE1BQU0sSUFBSSxlQUFlLElBQUksSUFBSSxFQUFFO1FBQ2hDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7S0FDbkQsTUFBTTtRQUNILElBQUksR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN0QztDQUNKOzs7QUNoSUQsS0FBSyxDQUFDLFFBQVEsR0FBRyxZQUFZLEVBQUUsQ0FBQzs7O0FBR2hDLEFBQU8sU0FBUyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUU7O0lBRTlDLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQzlCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixPQUFPO0tBQ1Y7O0lBRUQsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7O0lBR3JDLElBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRTtRQUN2QixDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTztRQUN0QyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU07UUFDNUIsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDOztJQUUvQixNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7SUFFL0UsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2hDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsV0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1FBRzVFLElBQUksV0FBVyxFQUFFO1lBQ2IsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRDtZQUNELE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hFLHNCQUFzQixJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDaEQ7O1FBRUQsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLFdBQVcsRUFBRTtnQkFDYixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN6QztpQkFDSTtnQkFDRCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRDtZQUNELHVCQUF1QixDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdkQ7YUFDSSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEQ7S0FDSjs7O0lBR0QsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsR0FBRyxZQUFZLEdBQUcsc0JBQXNCLENBQUM7SUFDOUUsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNuQixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwRDs7O0lBR0QsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDckIsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJO1FBQ3hDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0tBQy9DOztJQUVELGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDOztJQUVwRCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUVyRixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ3pCOzs7QUFHRCxTQUFTLGVBQWUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUM5QyxJQUFJLElBQUksQ0FBQzs7SUFFVCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7O1FBRWxCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1FBQzdCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDOUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFOztRQUU1QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ25CLElBQUksSUFBSSxFQUFFLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmLE1BQU07O1FBRUgsT0FBTyxJQUFJLENBQUM7S0FDZjtDQUNKOzs7QUNuR0QsQUFBTyxTQUFTLHdCQUF3QixDQUFDLE1BQU0sRUFBRTtJQUM3QyxJQUFJLFVBQVU7UUFDVixVQUFVOztRQUVWLFdBQVc7UUFDWCxDQUFDO1FBQ0QsWUFBWSxDQUFDOztJQUVqQixJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN4QixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM3QyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU87S0FDVjs7SUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUN4QixVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdkM7UUFDRCxVQUFVLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUM7O1FBRXRDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEIsU0FBUztTQUNaOzs7UUFHRCxZQUFZLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs7O1FBRzFELFlBQVksSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7O1FBRXJFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDOztRQUVqRCxJQUFJLFdBQVcsSUFBSSxJQUFJLElBQUksWUFBWSxHQUFHLFdBQVcsRUFBRTtZQUNuRCxXQUFXLEdBQUcsWUFBWSxDQUFDO1lBQzNCLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDM0I7S0FDSjs7SUFFRCxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsSUFBSSxVQUFVLENBQUMsQ0FBQztDQUM1Qzs7QUM3Q00sU0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDckMsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFO1FBQ1gsT0FBTztLQUNWOztJQUVELElBQUksQ0FBQyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFO1FBQzFHLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDbkMsQ0FBQyxDQUFDOztJQUVILGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUMzQjs7QUNJRCxTQUFTLGdCQUFnQixFQUFFLE1BQU0sRUFBRTtJQUMvQixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7O1FBRWQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7S0FDNUI7O0lBRUQsT0FBTyxHQUFHLENBQUM7Q0FDZDs7QUFFRCxBQUFPLFNBQVMsYUFBYSxFQUFFLE1BQU0sRUFBRTtJQUNuQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRTtRQUNqQixNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7SUFFdkIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7O0lBRXhELElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQzFELE9BQU8sYUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDM0M7O0lBRUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDM0IsTUFBTSxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEQ7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMzQyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0tBQ3JCLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDeEIsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDcEMsTUFBTSxJQUFJLE1BQU0sRUFBRTtRQUNmLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JDLE9BQU87UUFDSixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDM0I7O0lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQixNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztLQUNwQjs7SUFFRCxPQUFPLE1BQU0sQ0FBQztDQUNqQjs7QUFFRCxTQUFTLGVBQWUsQ0FBQyxNQUFNLEVBQUU7SUFDN0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN0QixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDckIsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNyQyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDekMsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNsQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM1QixNQUFNLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFHLEVBQUU7WUFDM0MsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUNILGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMzQixNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNuQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM1QixNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFOztRQUV4QixNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9CLE1BQU07UUFDSCxLQUFLLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekM7Q0FDSjs7QUFFRCxBQUFPLFNBQVMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUNwRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7O0lBRVgsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDckMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixNQUFNLEdBQUcsU0FBUyxDQUFDO0tBQ3RCOztJQUVELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDNUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztLQUNyQjs7O0lBR0QsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBQ2QsQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDYixDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNkLENBQUMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOztJQUVuQixPQUFPLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzlCOztBQzFHTSxTQUFTLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDeEQsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDakU7O0FDQ00sSUFBSSxZQUFZLEdBQUcsU0FBUztJQUMvQixvR0FBb0c7SUFDcEcsWUFBWTtRQUNSLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQyxPQUFPLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUN0QyxNQUFNO1lBQ0gsT0FBTyxhQUFhLEVBQUUsQ0FBQztTQUMxQjtLQUNKO0NBQ0osQ0FBQzs7QUFFRixBQUFPLElBQUksWUFBWSxHQUFHLFNBQVM7SUFDL0Isb0dBQW9HO0lBQ3BHLFlBQVk7UUFDUixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkMsT0FBTyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7U0FDdEMsTUFBTTtZQUNILE9BQU8sYUFBYSxFQUFFLENBQUM7U0FDMUI7S0FDSjtDQUNKLENBQUM7Ozs7Ozs7QUFPRixTQUFTLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFO0lBQ3pCLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNYLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEI7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNqQixPQUFPLFdBQVcsRUFBRSxDQUFDO0tBQ3hCO0lBQ0QsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtLQUNKO0lBQ0QsT0FBTyxHQUFHLENBQUM7Q0FDZDs7O0FBR0QsQUFBTyxTQUFTLEdBQUcsSUFBSTtJQUNuQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBRXZDLE9BQU8sTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNuQzs7QUFFRCxBQUFPLFNBQVMsR0FBRyxJQUFJO0lBQ25CLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7SUFFdkMsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ2xDOztBQzlETSxJQUFJLEdBQUcsR0FBRyxZQUFZO0lBQ3pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztDQUNoRCxDQUFDOztBQ0NLLFNBQVMsUUFBUSxFQUFFLFFBQVEsRUFBRTtJQUNoQyxJQUFJLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7UUFDaEQsS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNqQyxRQUFRLEdBQUcsZUFBZSxDQUFDLE9BQU8sSUFBSSxDQUFDO1FBQ3ZDLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxJQUFJLENBQUM7UUFDbkMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNqQyxJQUFJLEdBQUcsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQy9CLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDakMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQztRQUNyQyxPQUFPLEdBQUcsZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQ3JDLFlBQVksR0FBRyxlQUFlLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQzs7O0lBR3BELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxZQUFZO1FBQzlCLE9BQU8sR0FBRyxHQUFHO1FBQ2IsT0FBTyxHQUFHLEdBQUc7UUFDYixLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7OztJQUczQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSTtRQUNkLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7SUFJZCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTTtRQUNsQixRQUFRLEdBQUcsQ0FBQztRQUNaLEtBQUssR0FBRyxFQUFFLENBQUM7O0lBRWYsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7O0lBRWhCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUM7O0lBRTNCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUNsQjs7QUFFRCxBQUFPLFNBQVMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUM3QixPQUFPLEdBQUcsWUFBWSxRQUFRLENBQUM7Q0FDbEM7O0FDeENjLFNBQVMsUUFBUSxFQUFFLE1BQU0sRUFBRTtJQUN0QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdkMsTUFBTTtRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3QjtDQUNKOzs7O0FDWUQsU0FBUyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUMvQixjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtRQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ1osTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ2pCLElBQUksR0FBRyxHQUFHLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekYsQ0FBQyxDQUFDO0NBQ047O0FBRUQsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQixNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7O0FBSWpCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztBQUN0QyxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDdEMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDdkQsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsTUFBTSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUMzRCxDQUFDLENBQUM7Ozs7Ozs7QUFPSCxJQUFJLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQzs7QUFFcEMsU0FBUyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO0lBQ3ZDLElBQUksT0FBTyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7SUFFNUMsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7O0lBRUQsSUFBSSxLQUFLLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hELElBQUksS0FBSyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRWpELE9BQU8sT0FBTyxLQUFLLENBQUM7TUFDbEIsQ0FBQztNQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO0NBQzNDOzs7QUFHRCxBQUFPLFNBQVMsZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDMUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQ2QsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2QsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBRTNHLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsT0FBTyxHQUFHLENBQUM7S0FDZCxNQUFNO1FBQ0gsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDckM7Q0FDSjs7QUFFRCxTQUFTLGFBQWEsRUFBRSxDQUFDLEVBQUU7OztJQUd2QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0NBQzFEOzs7Ozs7QUFNRCxLQUFLLENBQUMsWUFBWSxHQUFHLFlBQVksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQWNwQyxBQUFPLFNBQVMsWUFBWSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDaEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO1FBQzFCLFdBQVcsQ0FBQztJQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2YsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDM0IsS0FBSyxHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM3QixLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLGFBQWEsRUFBRTtZQUMvQixXQUFXLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQyxXQUFXLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNwRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmLE1BQU07UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyRDtDQUNKOztBQUVELEFBQU8sU0FBUyxVQUFVLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtJQUM5QyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDZixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDbEI7O1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7O1FBRXJDLE9BQU8sSUFBSSxDQUFDO0tBQ2YsTUFBTTtRQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDNUI7Q0FDSjs7QUFFRCxBQUFPLFNBQVMsY0FBYyxFQUFFLGFBQWEsRUFBRTtJQUMzQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQzNDOztBQUVELEFBQU8sU0FBUyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUU7SUFDN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O1FBRXBCLElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7S0FDSjtJQUNELE9BQU8sSUFBSSxDQUFDO0NBQ2Y7O0FBRUQsQUFBTyxTQUFTLHVCQUF1QixJQUFJO0lBQ3ZDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0IsTUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUU7UUFDcEMsSUFBSSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO2FBQ0k7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzQjtLQUNKO0lBQ0QsT0FBTyxJQUFJLENBQUM7Q0FDZjs7QUFFRCxBQUFPLFNBQVMsb0JBQW9CLEVBQUUsS0FBSyxFQUFFO0lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxLQUFLLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7O0lBRW5ELE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNoRDs7QUFFRCxBQUFPLFNBQVMsb0JBQW9CLElBQUk7SUFDcEMsT0FBTztRQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtRQUNwRCxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7S0FDdkQsQ0FBQztDQUNMOztBQUVELEFBQU8sU0FBUywyQkFBMkIsSUFBSTtJQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNsQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDN0I7O0lBRUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOztJQUVYLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFckIsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ04sSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQy9CLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoRCxNQUFNO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7S0FDOUI7O0lBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0NBQzdCOztBQUVELEFBQU8sU0FBUyxPQUFPLElBQUk7SUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztDQUNoRDs7QUFFRCxBQUFPLFNBQVMsV0FBVyxJQUFJO0lBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0NBQy9DOztBQUVELEFBQU8sU0FBUyxLQUFLLElBQUk7SUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7Q0FDckU7OztBQ2hPRCxJQUFJLFdBQVcsR0FBRyx1REFBdUQsQ0FBQzs7Ozs7QUFLMUUsSUFBSSxRQUFRLEdBQUcsNklBQTZJLENBQUM7O0FBRTdKLEFBQU8sU0FBUyxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QyxJQUFJLFFBQVEsR0FBRyxLQUFLOztRQUVoQixLQUFLLEdBQUcsSUFBSTtRQUNaLElBQUk7UUFDSixHQUFHO1FBQ0gsT0FBTyxDQUFDOztJQUVaLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLFFBQVEsR0FBRztZQUNQLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYTtZQUN4QixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUs7WUFDaEIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPO1NBQ3JCLENBQUM7S0FDTCxNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLEdBQUcsRUFBRTtZQUNMLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDekIsTUFBTTtZQUNILFFBQVEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0tBQ0osTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDNUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxRQUFRLEdBQUc7WUFDUCxDQUFDLElBQUksQ0FBQztZQUNOLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLDJCQUEyQixJQUFJO1lBQ3RELENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLDJCQUEyQixJQUFJO1lBQ3RELENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHlCQUF5QixJQUFJO1lBQ3RELENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHlCQUF5QixJQUFJO1lBQ3RELEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7U0FDekQsQ0FBQztLQUNMLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3pDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsUUFBUSxHQUFHO1lBQ1AsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQzVCLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUM1QixDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDNUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQzVCLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUM1QixDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDNUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1NBQy9CLENBQUM7S0FDTCxNQUFNLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtRQUN6QixRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ2pCLE1BQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsRUFBRTtRQUNqRixPQUFPLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBRWxGLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxRQUFRLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbkMsUUFBUSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0tBQy9COztJQUVELEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFFN0IsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRTtRQUNuRCxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDL0I7O0lBRUQsT0FBTyxHQUFHLENBQUM7Q0FDZDs7QUFFRCxjQUFjLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7O0FBRXZDLFNBQVMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7Ozs7SUFJMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUVuRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Q0FDeEM7O0FBRUQsU0FBUyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzVDLElBQUksR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBRXZDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDckMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsRCxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUM7S0FDaEI7O0lBRUQsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRWpFLE9BQU8sR0FBRyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ3BDLElBQUksR0FBRyxDQUFDO0lBQ1IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ3RDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2Qzs7SUFFRCxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEIsR0FBRyxHQUFHLHlCQUF5QixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNoRCxNQUFNO1FBQ0gsR0FBRyxHQUFHLHlCQUF5QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNyQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUM1Qjs7SUFFRCxPQUFPLEdBQUcsQ0FBQztDQUNkOzs7QUM5R0QsU0FBUyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRTtJQUNsQyxPQUFPLFVBQVUsR0FBRyxFQUFFLE1BQU0sRUFBRTtRQUMxQixJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUM7O1FBRWIsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsZUFBZSxDQUFDLElBQUksRUFBRSxXQUFXLEdBQUcsSUFBSSxJQUFJLHNEQUFzRCxHQUFHLElBQUksR0FBRyxvQkFBb0I7WUFDaEksOEVBQThFLENBQUMsQ0FBQztZQUNoRixHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDekM7O1FBRUQsR0FBRyxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0MsR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUM7S0FDZixDQUFDO0NBQ0w7O0FBRUQsQUFBTyxTQUFTLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7SUFDaEUsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWE7UUFDckMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9CLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztJQUV4QyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFOztRQUVoQixPQUFPO0tBQ1Y7O0lBRUQsWUFBWSxHQUFHLFlBQVksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVksQ0FBQzs7SUFFMUQsSUFBSSxZQUFZLEVBQUU7UUFDZCxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztLQUM5RDtJQUNELElBQUksSUFBSSxFQUFFO1FBQ05ILEtBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsSUFBSSxNQUFNLEVBQUU7UUFDUixRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsSUFBSSxZQUFZLEVBQUU7UUFDZCxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksTUFBTSxDQUFDLENBQUM7S0FDM0M7Q0FDSjs7QUFFRCxBQUFPLElBQUksR0FBRyxRQUFRLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUMsQUFBTyxJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7O0FDaEQzQyxTQUFTLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDN0MsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVU7WUFDckIsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVU7WUFDdEIsSUFBSSxHQUFHLENBQUMsR0FBRyxTQUFTO1lBQ3BCLElBQUksR0FBRyxDQUFDLEdBQUcsU0FBUztZQUNwQixJQUFJLEdBQUcsQ0FBQyxHQUFHLFNBQVM7WUFDcEIsSUFBSSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDO0NBQzlDOztBQUVELEFBQU8sU0FBU0ksVUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7OztJQUdyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksV0FBVyxFQUFFO1FBQzNCLEdBQUcsR0FBRyxlQUFlLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDL0MsTUFBTSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQzs7SUFFM0QsSUFBSSxNQUFNLEdBQUcsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztJQUUxRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVGOztBQ3ZCTSxTQUFTLEtBQUssSUFBSTtJQUNyQixPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzNCOztBQ0NNLFNBQVMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDbkMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQzNDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsS0FBSyxHQUFHLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsYUFBYSxDQUFDLENBQUM7SUFDcEUsSUFBSSxLQUFLLEtBQUssYUFBYSxFQUFFO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoRCxNQUFNO1FBQ0gsT0FBTyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2RTtDQUNKOztBQUVELEFBQU8sU0FBUyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUNwQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDM0MsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQztJQUNwRSxJQUFJLEtBQUssS0FBSyxhQUFhLEVBQUU7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hELE1BQU07UUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3JFO0NBQ0o7O0FBRUQsQUFBTyxTQUFTLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDckQsV0FBVyxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUM7SUFDbEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ3RGOztBQUVELEFBQU8sU0FBUyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUNsQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDekQsT0FBTyxDQUFDO0lBQ1osSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQzNDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLElBQUksYUFBYSxDQUFDLENBQUM7SUFDL0MsSUFBSSxLQUFLLEtBQUssYUFBYSxFQUFFO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNsRCxNQUFNO1FBQ0gsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzdHO0NBQ0o7O0FBRUQsQUFBTyxTQUFTLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQ3pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDakU7O0FBRUQsQUFBTyxTQUFTLGNBQWMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDbEU7O0FDdERNLFNBQVMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0lBQ3pDLElBQUksSUFBSTtRQUNKLFNBQVM7UUFDVCxLQUFLLEVBQUUsTUFBTSxDQUFDOztJQUVsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7O0lBRUQsSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBRXBDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDakIsT0FBTyxHQUFHLENBQUM7S0FDZDs7SUFFRCxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDOztJQUV4RCxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUU5QixJQUFJLEtBQUssS0FBSyxNQUFNLElBQUksS0FBSyxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQzlELE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNyQixNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN2QixNQUFNLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUN6QixNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUN4QjtLQUNKLE1BQU07UUFDSCxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNwQixNQUFNLEdBQUcsS0FBSyxLQUFLLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRztZQUNyQyxLQUFLLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHO1lBQ2hDLEtBQUssS0FBSyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUk7WUFDL0IsS0FBSyxLQUFLLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxLQUFLO1lBQzdDLEtBQUssS0FBSyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsTUFBTTtZQUMvQyxLQUFLLENBQUM7S0FDYjtJQUNELE9BQU8sT0FBTyxHQUFHLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDOUM7O0FBRUQsU0FBUyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7SUFFdEIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7O1FBRXZFLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7UUFDaEQsT0FBTyxFQUFFLE1BQU0sQ0FBQzs7SUFFcEIsSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNoQixPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztRQUV0RCxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUM7S0FDOUMsTUFBTTtRQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7O1FBRXRELE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztLQUM5Qzs7O0lBR0QsT0FBTyxDQUFDLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUMxQzs7QUN6REQsS0FBSyxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztBQUM3QyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsd0JBQXdCLENBQUM7O0FBRWxELEFBQU8sU0FBUyxRQUFRLElBQUk7SUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0NBQy9FOztBQUVELEFBQU8sU0FBUyxXQUFXLElBQUk7SUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1FBQ2xDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7O1lBRXhDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDLE1BQU07WUFDSCxPQUFPLFlBQVksQ0FBQyxDQUFDLEVBQUUsOEJBQThCLENBQUMsQ0FBQztTQUMxRDtLQUNKLE1BQU07UUFDSCxPQUFPLFlBQVksQ0FBQyxDQUFDLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztLQUM1RDtDQUNKOzs7Ozs7OztBQVFELEFBQU8sU0FBUyxPQUFPLElBQUk7SUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNqQixPQUFPLG9CQUFvQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO0tBQ2xEO0lBQ0QsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ3BCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsWUFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xFLElBQUksR0FBRyxHQUFHLENBQUM7S0FDZDtJQUNELElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUN4RSxJQUFJLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztJQUN2QyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDOztJQUUzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7Q0FDekQ7O0FBRUQsQUFBTyxTQUFTLE1BQU0sRUFBRSxXQUFXLEVBQUU7SUFDakMsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNkLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7S0FDN0U7SUFDRCxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUMvQzs7QUNuRE0sU0FBUyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNuQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ2hHLE1BQU07UUFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMxQztDQUNKOztBQUVELEFBQU8sU0FBUyxPQUFPLEVBQUUsYUFBYSxFQUFFO0lBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztDQUNsRDs7QUNaTSxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3JDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ25DLE9BQU8sY0FBYyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDaEcsTUFBTTtRQUNILE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFDO0NBQ0o7O0FBRUQsQUFBTyxTQUFTLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDbEMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQ2hEOzs7OztBQ1ZELEFBQU8sU0FBUyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLElBQUksYUFBYSxDQUFDOztJQUVsQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUM3QixNQUFNO1FBQ0gsYUFBYSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0NBQ0o7O0FBRUQsQUFBTyxJQUFJLElBQUksR0FBRyxTQUFTO0lBQ3ZCLGlKQUFpSjtJQUNqSixVQUFVLEdBQUcsRUFBRTtRQUNYLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM1QixNQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0tBQ0o7Q0FDSixDQUFDOztBQUVGLEFBQU8sU0FBUyxVQUFVLElBQUk7SUFDMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0NBQ3ZCOztBQy9CTSxTQUFTLE9BQU8sRUFBRSxLQUFLLEVBQUU7SUFDNUIsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0lBRzlCLFFBQVEsS0FBSztRQUNULEtBQUssTUFBTTtZQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRWxCLEtBQUssU0FBUyxDQUFDO1FBQ2YsS0FBSyxPQUFPO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFakIsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLFNBQVMsQ0FBQztRQUNmLEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxNQUFNO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFbEIsS0FBSyxNQUFNO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFcEIsS0FBSyxRQUFRO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFcEIsS0FBSyxRQUFRO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1Qjs7O0lBR0QsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7SUFDRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0Qjs7O0lBR0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7O0lBRUQsT0FBTyxJQUFJLENBQUM7Q0FDZjs7QUFFRCxBQUFPLFNBQVMsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMxQixLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssYUFBYSxFQUFFO1FBQ2hELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7OztJQUdELElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtRQUNsQixLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ2pCOztJQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQy9GOztBQzFETSxTQUFTLE9BQU8sSUFBSTtJQUN2QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Q0FDNUQ7O0FBRUQsQUFBTyxTQUFTLElBQUksSUFBSTtJQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0NBQzVDOztBQUVELEFBQU8sU0FBUyxNQUFNLElBQUk7SUFDdEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztDQUNuQzs7QUFFRCxBQUFPLFNBQVMsT0FBTyxJQUFJO0lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNiLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztDQUM3Rjs7QUFFRCxBQUFPLFNBQVMsUUFBUSxJQUFJO0lBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNiLE9BQU87UUFDSCxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUNmLE1BQU0sRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1FBQ2pCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7UUFDaEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDcEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDcEIsWUFBWSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUU7S0FDakMsQ0FBQztDQUNMOztBQUVELEFBQU8sU0FBUyxNQUFNLElBQUk7O0lBRXRCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7Q0FDckQ7O0FDN0JNLFNBQVNDLFNBQU8sSUFBSTtJQUN2QixPQUFPQyxPQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDekI7O0FBRUQsQUFBTyxTQUFTLFlBQVksSUFBSTtJQUM1QixPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDNUM7O0FBRUQsQUFBTyxTQUFTLFNBQVMsSUFBSTtJQUN6QixPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7Q0FDekM7O0FDZE0sU0FBUyxZQUFZLEdBQUc7SUFDM0IsT0FBTztRQUNILEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTztRQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO0tBQ3ZCLENBQUM7Q0FDTDs7OztBQ0tELGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7SUFDeEMsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDO0NBQ2hDLENBQUMsQ0FBQzs7QUFFSCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQztDQUNuQyxDQUFDLENBQUM7O0FBRUgsU0FBUyxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQzVDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUN2RDs7QUFFRCxzQkFBc0IsQ0FBQyxNQUFNLE1BQU0sVUFBVSxDQUFDLENBQUM7QUFDL0Msc0JBQXNCLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLHNCQUFzQixDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQztBQUMvQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7Ozs7QUFJL0MsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQixZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O0FBSWxDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7QUFLbEMsYUFBYSxDQUFDLEdBQUcsT0FBTyxXQUFXLENBQUMsQ0FBQztBQUNyQyxhQUFhLENBQUMsR0FBRyxPQUFPLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLGFBQWEsQ0FBQyxJQUFJLE1BQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLGFBQWEsQ0FBQyxJQUFJLE1BQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLGFBQWEsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLGFBQWEsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUUzQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFVBQVUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQ3hGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUMzQyxDQUFDLENBQUM7O0FBRUgsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBVSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNoRCxDQUFDLENBQUM7Ozs7QUFJSCxBQUFPLFNBQVMsY0FBYyxFQUFFLEtBQUssRUFBRTtJQUNuQyxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJO1lBQzdCLEtBQUs7WUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRztZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3hDOztBQUVELEFBQU8sU0FBUyxpQkFBaUIsRUFBRSxLQUFLLEVBQUU7SUFDdEMsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDM0Q7O0FBRUQsQUFBTyxTQUFTLGlCQUFpQixJQUFJO0lBQ2pDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDekM7O0FBRUQsQUFBTyxTQUFTLGNBQWMsSUFBSTtJQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUMvRDs7QUFFRCxTQUFTLG9CQUFvQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFDMUQsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2YsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDMUMsTUFBTTtRQUNILFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUN0QjtRQUNELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2hFO0NBQ0o7O0FBRUQsU0FBUyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNuRCxJQUFJLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ3JFLElBQUksR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUV6RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM3QixPQUFPLElBQUksQ0FBQztDQUNmOzs7O0FDaEdELGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzs7OztBQUl4QyxZQUFZLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7O0FBSTdCLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7QUFJOUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzQixhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3pDLENBQUMsQ0FBQzs7OztBQUlILEFBQU8sU0FBUyxhQUFhLEVBQUUsS0FBSyxFQUFFO0lBQ2xDLE9BQU8sS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUM3Rzs7OztBQ3BCRCxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7OztBQUk3QyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7QUFHMUIsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzs7OztBQUkzQixhQUFhLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxRQUFRLEVBQUUsTUFBTSxFQUFFO0lBQzVDLE9BQU8sUUFBUSxHQUFHLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO0NBQ3hFLENBQUMsQ0FBQzs7QUFFSCxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFVLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ3RELENBQUMsQ0FBQzs7OztBQUlILEFBQU8sSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O0FDeEJ2RCxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQzs7OztBQUl4RCxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7QUFHakMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7OztBQUloQyxhQUFhLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUIsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDM0QsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDcEMsQ0FBQyxDQUFDOzs7Ozs7QUFNSCxBQUFPLFNBQVMsZUFBZSxFQUFFLEtBQUssRUFBRTtJQUNwQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JHLE9BQU8sS0FBSyxJQUFJLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUN6RTs7OztBQ3pCRCxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzs7OztBQUk1QyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7O0FBSTVCLGVBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7QUFJOUIsYUFBYSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUMvQixhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2QyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7QUFJbkMsQUFBTyxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7O0FDbEJ2RCxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzs7OztBQUk1QyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7O0FBSTVCLGVBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7QUFJOUIsYUFBYSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUMvQixhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2QyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7QUFJbkMsQUFBTyxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7O0FDakJ2RCxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtJQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUN2QyxDQUFDLENBQUM7O0FBRUgsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtJQUN4QyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztDQUN0QyxDQUFDLENBQUM7O0FBRUgsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDaEQsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtJQUMxQyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FDbEMsQ0FBQyxDQUFDO0FBQ0gsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtJQUMzQyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUM7Q0FDbkMsQ0FBQyxDQUFDO0FBQ0gsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtJQUM1QyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7Q0FDcEMsQ0FBQyxDQUFDO0FBQ0gsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtJQUM3QyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUM7Q0FDckMsQ0FBQyxDQUFDO0FBQ0gsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtJQUM5QyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUM7Q0FDdEMsQ0FBQyxDQUFDO0FBQ0gsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtJQUMvQyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUM7Q0FDdkMsQ0FBQyxDQUFDOzs7OztBQUtILFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7QUFJbEMsZUFBZSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7OztBQUluQyxhQUFhLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN6QyxhQUFhLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN6QyxhQUFhLENBQUMsS0FBSyxHQUFHLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFekMsSUFBSSxLQUFLLENBQUM7QUFDVixLQUFLLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLEdBQUcsRUFBRTtJQUNsRCxhQUFhLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQ3ZDOztBQUVELFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztDQUNyRDs7QUFFRCxLQUFLLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLEdBQUcsRUFBRTtJQUMvQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ2pDOzs7QUFHRCxBQUFPLElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7OztBQ2hFakUsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQzs7OztBQUl2QyxBQUFPLFNBQVMsV0FBVyxJQUFJO0lBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0NBQ25DOztBQUVELEFBQU8sU0FBUyxXQUFXLElBQUk7SUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLDRCQUE0QixHQUFHLEVBQUUsQ0FBQztDQUMxRDs7QUNiRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDOztBQUU3QixBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFFQSxLQUFLLENBQUMsR0FBRyxpQkFBaUIsR0FBRyxDQUFDO0FBQzlCLEtBQUssQ0FBQyxRQUFRLFlBQVlGLFVBQVEsQ0FBQztBQUNuQyxLQUFLLENBQUMsS0FBSyxlQUFlLEtBQUssQ0FBQztBQUNoQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsSUFBSSxDQUFDO0FBQy9CLEtBQUssQ0FBQyxLQUFLLGVBQWUsS0FBSyxDQUFDO0FBQ2hDLEtBQUssQ0FBQyxNQUFNLGNBQWMsTUFBTSxDQUFDO0FBQ2pDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixJQUFJLENBQUM7QUFDL0IsS0FBSyxDQUFDLE9BQU8sYUFBYSxPQUFPLENBQUM7QUFDbEMsS0FBSyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztBQUM3QixLQUFLLENBQUMsS0FBSyxlQUFlLEtBQUssQ0FBQztBQUNoQyxLQUFLLENBQUMsR0FBRyxpQkFBaUIsU0FBUyxDQUFDO0FBQ3BDLEtBQUssQ0FBQyxTQUFTLFdBQVcsU0FBUyxDQUFDO0FBQ3BDLEtBQUssQ0FBQyxPQUFPLGFBQWEsT0FBTyxDQUFDO0FBQ2xDLEtBQUssQ0FBQyxRQUFRLFlBQVksUUFBUSxDQUFDO0FBQ25DLEtBQUssQ0FBQyxTQUFTLFdBQVcsU0FBUyxDQUFDO0FBQ3BDLEtBQUssQ0FBQyxNQUFNLGNBQWMsTUFBTSxDQUFDO0FBQ2pDLEtBQUssQ0FBQyxhQUFhLE9BQU8sYUFBYSxDQUFDO0FBQ3hDLEtBQUssQ0FBQyxjQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLEtBQUssQ0FBQyxPQUFPLGFBQWFDLFNBQU8sQ0FBQztBQUNsQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsSUFBSSxDQUFDO0FBQy9CLEtBQUssQ0FBQyxNQUFNLGNBQWMsTUFBTSxDQUFDO0FBQ2pDLEtBQUssQ0FBQyxVQUFVLFVBQVUsVUFBVSxDQUFDO0FBQ3JDLEtBQUssQ0FBQyxHQUFHLGlCQUFpQixZQUFZLENBQUM7QUFDdkMsS0FBSyxDQUFDLEdBQUcsaUJBQWlCLFlBQVksQ0FBQztBQUN2QyxLQUFLLENBQUMsWUFBWSxRQUFRLFlBQVksQ0FBQztBQUN2QyxLQUFLLENBQUMsR0FBRyxpQkFBaUIsU0FBUyxDQUFDO0FBQ3BDLEtBQUssQ0FBQyxPQUFPLGFBQWEsT0FBTyxDQUFDO0FBQ2xDLEtBQUssQ0FBQyxRQUFRLFlBQVksUUFBUSxDQUFDO0FBQ25DLEtBQUssQ0FBQyxPQUFPLGFBQWEsT0FBTyxDQUFDO0FBQ2xDLEtBQUssQ0FBQyxRQUFRLFlBQVksUUFBUSxDQUFDO0FBQ25DLEtBQUssQ0FBQyxNQUFNLGNBQWMsTUFBTSxDQUFDO0FBQ2pDLEtBQUssQ0FBQyxXQUFXLFNBQVMsV0FBVyxDQUFDO0FBQ3RDLEtBQUssQ0FBQyxPQUFPLGFBQWEsT0FBTyxDQUFDO0FBQ2xDLEtBQUssQ0FBQyxNQUFNLGNBQWMsTUFBTSxDQUFDO0FBQ2pDLEtBQUssQ0FBQyxRQUFRLFlBQVksUUFBUSxDQUFDO0FBQ25DLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixJQUFJLENBQUM7QUFDL0IsS0FBSyxDQUFDLE9BQU8sYUFBYSxPQUFPLENBQUM7QUFDbEMsS0FBSyxDQUFDLFlBQVksUUFBUSxZQUFZLENBQUM7OztBQUd2QyxBQUNBLEtBQUssQ0FBQyxJQUFJLFNBQVMsVUFBVSxDQUFDO0FBQzlCLEtBQUssQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDOzs7QUFHakMsQUFDQSxLQUFLLENBQUMsUUFBUSxNQUFNLGNBQWMsQ0FBQztBQUNuQyxLQUFLLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDOzs7QUFHdEMsQUFDQSxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDOzs7QUFHL0MsQUFDQSxLQUFLLENBQUMsS0FBSyxTQUFTLFdBQVcsQ0FBQztBQUNoQyxLQUFLLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQzs7O0FBR25DLEFBQ0EsS0FBSyxDQUFDLElBQUksYUFBYSxLQUFLLENBQUMsS0FBSyxVQUFVLFVBQVUsQ0FBQztBQUN2RCxLQUFLLENBQUMsT0FBTyxVQUFVLEtBQUssQ0FBQyxRQUFRLE9BQU8sYUFBYSxDQUFDO0FBQzFELEtBQUssQ0FBQyxXQUFXLE1BQU0sY0FBYyxDQUFDO0FBQ3RDLEtBQUssQ0FBQyxjQUFjLEdBQUcsaUJBQWlCLENBQUM7OztBQUd6QyxBQUNBLEFBQ0EsQUFDQSxLQUFLLENBQUMsSUFBSSxTQUFTLGdCQUFnQixDQUFDO0FBQ3BDLEtBQUssQ0FBQyxHQUFHLFVBQVUsS0FBSyxDQUFDLElBQUksZUFBZSxlQUFlLENBQUM7QUFDNUQsS0FBSyxDQUFDLE9BQU8sTUFBTSxxQkFBcUIsQ0FBQztBQUN6QyxLQUFLLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO0FBQ3RDLEtBQUssQ0FBQyxTQUFTLElBQUksZUFBZSxDQUFDOzs7QUFHbkMsQUFDQSxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDOzs7QUFHdEMsQUFDQSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDOzs7QUFHNUMsQUFDQSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDOzs7QUFHNUMsQUFDQSxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxZQUFZLEdBQUcsaUJBQWlCLENBQUM7OztBQUczRCxBQWFBLEtBQUssQ0FBQyxTQUFTLGNBQWMsWUFBWSxDQUFDO0FBQzFDLEtBQUssQ0FBQyxHQUFHLG9CQUFvQixjQUFjLENBQUM7QUFDNUMsS0FBSyxDQUFDLEtBQUssa0JBQWtCLGdCQUFnQixDQUFDO0FBQzlDLEtBQUssQ0FBQyxTQUFTLGNBQWMsdUJBQXVCLENBQUM7QUFDckQsS0FBSyxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO0FBQ2xELEtBQUssQ0FBQyxLQUFLLGtCQUFrQixvQkFBb0IsQ0FBQztBQUNsRCxLQUFLLENBQUMsT0FBTyxnQkFBZ0IsT0FBTyxDQUFDO0FBQ3JDLEtBQUssQ0FBQyxXQUFXLFlBQVksV0FBVyxDQUFDO0FBQ3pDLEtBQUssQ0FBQyxLQUFLLGtCQUFrQixLQUFLLENBQUM7QUFDbkMsS0FBSyxDQUFDLEtBQUssa0JBQWtCLEtBQUssQ0FBQzs7O0FBR25DLEFBQ0EsS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDN0IsS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7OztBQUc3QixBQUNBLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLGlEQUFpRCxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDOUYsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsa0RBQWtELEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDMUYsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsZ0RBQWdELEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdkYsS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsMEdBQTBHLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakosS0FBSyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMseUdBQXlHLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxBQUV2SyxBQUFxQjs7QUM3SXJCLFNBQVMsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUN4QixPQUFPLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7Q0FDcEM7O0FBRUQsU0FBUyxZQUFZLElBQUk7SUFDckIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztDQUN6RCxBQUVELEFBV0U7O0FDM0JLLFNBQVMsa0JBQWtCLEVBQUUsTUFBTSxFQUFFO0lBQ3hDLE9BQU8sTUFBTSxDQUFDO0NBQ2pCOztBQ0FELElBQUlFLE9BQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDOztBQUU3QixBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUVBQSxPQUFLLENBQUMsUUFBUSxVQUFVLFFBQVEsQ0FBQztBQUNqQ0EsT0FBSyxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUM7QUFDdkNBLE9BQUssQ0FBQyxXQUFXLE9BQU8sV0FBVyxDQUFDO0FBQ3BDQSxPQUFLLENBQUMsT0FBTyxXQUFXLE9BQU8sQ0FBQztBQUNoQ0EsT0FBSyxDQUFDLFFBQVEsVUFBVSxrQkFBa0IsQ0FBQztBQUMzQ0EsT0FBSyxDQUFDLFVBQVUsUUFBUSxrQkFBa0IsQ0FBQztBQUMzQ0EsT0FBSyxDQUFDLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDckNBLE9BQUssQ0FBQyxVQUFVLFFBQVEsVUFBVSxDQUFDO0FBQ25DQSxPQUFLLENBQUMsR0FBRyxlQUFlLEdBQUcsQ0FBQzs7O0FBRzVCLEFBUUFBLE9BQUssQ0FBQyxNQUFNLHFCQUFxQixZQUFZLENBQUM7QUFDOUNBLE9BQUssQ0FBQyxXQUFXLGdCQUFnQixpQkFBaUIsQ0FBQztBQUNuREEsT0FBSyxDQUFDLFdBQVcsZ0JBQWdCLGlCQUFpQixDQUFDO0FBQ25EQSxPQUFLLENBQUMsV0FBVyxTQUFTLFdBQVcsQ0FBQztBQUN0Q0EsT0FBSyxDQUFDLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDOzs7QUFHM0MsQUFDQUEsT0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDeEJBLE9BQUssQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7QUFDNUNBLE9BQUssQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7OztBQUc1QyxBQVdBQSxPQUFLLENBQUMsUUFBUSxnQkFBZ0IsY0FBYyxDQUFDO0FBQzdDQSxPQUFLLENBQUMsV0FBVyxhQUFhLGlCQUFpQixDQUFDO0FBQ2hEQSxPQUFLLENBQUMsYUFBYSxXQUFXLG1CQUFtQixDQUFDO0FBQ2xEQSxPQUFLLENBQUMsYUFBYSxXQUFXLG1CQUFtQixDQUFDOztBQUVsREEsT0FBSyxDQUFDLGFBQWEsZ0JBQWdCLGFBQWEsQ0FBQztBQUNqREEsT0FBSyxDQUFDLGtCQUFrQixXQUFXLGtCQUFrQixDQUFDO0FBQ3REQSxPQUFLLENBQUMsZ0JBQWdCLGFBQWEsZ0JBQWdCLENBQUM7OztBQUdwRCxBQUVBQSxPQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN4QkEsT0FBSyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7O0FDaEVoQyxTQUFTQyxLQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQ3hDLElBQUksTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQ3pCLElBQUksR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3JDOztBQUVELFNBQVMsY0FBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDZixNQUFNLEdBQUcsU0FBUyxDQUFDO0tBQ3RCOztJQUVELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDOztJQUV0QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDZixPQUFPQSxLQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0M7O0lBRUQsSUFBSSxDQUFDLENBQUM7SUFDTixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEtBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQUMzQztJQUNELE9BQU8sR0FBRyxDQUFDO0NBQ2Q7Ozs7Ozs7Ozs7QUFVRCxTQUFTLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzRCxJQUFJLE9BQU8sWUFBWSxLQUFLLFNBQVMsRUFBRTtRQUNuQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ2YsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN0Qjs7UUFFRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztLQUN6QixNQUFNO1FBQ0gsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUN0QixLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2YsWUFBWSxHQUFHLEtBQUssQ0FBQzs7UUFFckIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNmLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDdEI7O1FBRUQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7S0FDekI7O0lBRUQsSUFBSSxNQUFNLEdBQUcsU0FBUyxFQUFFO1FBQ3BCLEtBQUssR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDOztJQUVoRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDZixPQUFPQSxLQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDekQ7O0lBRUQsSUFBSSxDQUFDLENBQUM7SUFDTixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEtBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN2RDtJQUNELE9BQU8sR0FBRyxDQUFDO0NBQ2Q7O0FBRUQsQUFBTyxTQUFTLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQ3ZDLE9BQU8sY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDbEQ7O0FBRUQsQUFBTyxTQUFTLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQzVDLE9BQU8sY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7Q0FDdkQ7O0FBRUQsQUFBTyxTQUFTLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUN2RCxPQUFPLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0NBQ3BFOztBQUVELEFBQU8sU0FBUyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUM1RCxPQUFPLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0NBQ3pFOztBQUVELEFBQU8sU0FBUyxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDMUQsT0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztDQUN2RTs7QUN4RkQsa0JBQWtCLENBQUMsSUFBSSxFQUFFO0lBQ3JCLFlBQVksRUFBRSxzQkFBc0I7SUFDcEMsT0FBTyxHQUFHLFVBQVUsTUFBTSxFQUFFO1FBQ3hCLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxFQUFFO1lBQ2YsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSTtZQUNoRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJO1lBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUk7WUFDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM1QixPQUFPLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDMUI7Q0FDSixDQUFDLENBQUM7O0FDZEg7QUFDQSxBQUVBLEFBUUEsQUFRQSxBQWFBLEFBQ0EsQUFFQSxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyx1REFBdUQsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3BHLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLCtEQUErRCxFQUFFLFNBQVMsQ0FBQyxDQUFDLEFBRXZHLEFBQWM7O0FDdENkLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7O0FBRXZCLEFBQU8sU0FBUyxHQUFHLElBQUk7SUFDbkIsSUFBSSxJQUFJLGFBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQzs7SUFFaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELElBQUksQ0FBQyxLQUFLLFdBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsT0FBTyxTQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0lBRTNDLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxJQUFJLENBQUMsT0FBTyxTQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDLE9BQU8sU0FBUyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxLQUFLLFdBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsTUFBTSxVQUFVLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsSUFBSSxDQUFDLEtBQUssV0FBVyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUV6QyxPQUFPLElBQUksQ0FBQztDQUNmOztBQ2ZELFNBQVNDLGFBQVcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDckQsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFFekMsUUFBUSxDQUFDLGFBQWEsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUMxRCxRQUFRLENBQUMsS0FBSyxZQUFZLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2xELFFBQVEsQ0FBQyxPQUFPLFVBQVUsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7O0lBRXBELE9BQU8sUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQzdCOzs7QUFHRCxBQUFPLFNBQVNDLEtBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQy9CLE9BQU9ELGFBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztDQUM3Qzs7O0FBR0QsQUFBTyxTQUFTRSxVQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUNwQyxPQUFPRixhQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM5Qzs7QUNwQmMsU0FBUyxPQUFPLEVBQUUsTUFBTSxFQUFFO0lBQ3JDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3QixNQUFNO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVCO0NBQ0o7O0FDRk0sU0FBUyxNQUFNLElBQUk7SUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN0QyxJQUFJLElBQUksV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzlCLElBQUksTUFBTSxTQUFTLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSSxJQUFJLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM5QixJQUFJLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUM7Ozs7SUFJbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN0RCxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDN0QsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDZDs7OztJQUlELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQzs7SUFFeEMsT0FBTyxhQUFhLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbEQsSUFBSSxDQUFDLE9BQU8sUUFBUSxPQUFPLEdBQUcsRUFBRSxDQUFDOztJQUVqQyxPQUFPLGFBQWEsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUMsT0FBTyxRQUFRLE9BQU8sR0FBRyxFQUFFLENBQUM7O0lBRWpDLEtBQUssZUFBZSxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxLQUFLLFVBQVUsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7SUFFL0IsSUFBSSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7OztJQUc3QixjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sSUFBSSxjQUFjLENBQUM7SUFDekIsSUFBSSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs7O0lBRzlDLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sSUFBSSxFQUFFLENBQUM7O0lBRWIsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDckIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7O0lBRXBCLE9BQU8sSUFBSSxDQUFDO0NBQ2Y7O0FBRUQsQUFBTyxTQUFTLFlBQVksRUFBRSxJQUFJLEVBQUU7OztJQUdoQyxPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0NBQy9COztBQUVELEFBQU8sU0FBUyxZQUFZLEVBQUUsTUFBTSxFQUFFOztJQUVsQyxPQUFPLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0NBQ2pDOztBQ3hETSxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUU7SUFDdkIsSUFBSSxJQUFJLENBQUM7SUFDVCxJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7O0lBRXRDLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBRTlCLElBQUksS0FBSyxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ3ZDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxLQUFLLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDN0MsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLE9BQU8sS0FBSyxLQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNuRCxNQUFNOztRQUVILElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNELFFBQVEsS0FBSztZQUNULEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQzVELEtBQUssS0FBSyxNQUFNLE9BQU8sSUFBSSxXQUFXLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDM0QsS0FBSyxNQUFNLEtBQUssT0FBTyxJQUFJLEdBQUcsRUFBRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDMUQsS0FBSyxRQUFRLEdBQUcsT0FBTyxJQUFJLEdBQUcsSUFBSSxJQUFJLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDekQsS0FBSyxRQUFRLEdBQUcsT0FBTyxJQUFJLEdBQUcsS0FBSyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7O1lBRTFELEtBQUssYUFBYSxFQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDO1lBQ25FLFNBQVMsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDckQ7S0FDSjtDQUNKOzs7QUFHRCxBQUFPLFNBQVNHLFNBQU8sSUFBSTtJQUN2QixPQUFPO1FBQ0gsSUFBSSxDQUFDLGFBQWE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNO1FBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE9BQU87S0FDckMsQ0FBQztDQUNMOztBQUVELFNBQVMsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUNwQixPQUFPLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekIsQ0FBQztDQUNMOztBQUVELEFBQU8sSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLEFBQU8sSUFBSSxTQUFTLFFBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLEFBQU8sSUFBSSxTQUFTLFFBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLEFBQU8sSUFBSSxPQUFPLFVBQVUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLEFBQU8sSUFBSSxNQUFNLFdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLEFBQU8sSUFBSSxPQUFPLFVBQVUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLEFBQU8sSUFBSSxRQUFRLFNBQVMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLEFBQU8sSUFBSSxPQUFPLFVBQVUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQ25EakMsU0FBU0osS0FBRyxFQUFFLEtBQUssRUFBRTtJQUN4QixLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO0NBQzlCOztBQUVELFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRTtJQUN0QixPQUFPLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0IsQ0FBQztDQUNMOztBQUVELEFBQU8sSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JELEFBQU8sSUFBSSxPQUFPLFFBQVEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELEFBQU8sSUFBSSxPQUFPLFFBQVEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELEFBQU8sSUFBSSxLQUFLLFVBQVUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLEFBQU8sSUFBSSxJQUFJLFdBQVcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLEFBQU8sSUFBSSxNQUFNLFNBQVMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLEFBQU8sSUFBSSxLQUFLLFVBQVUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU5QyxBQUFPLFNBQVMsS0FBSyxJQUFJO0lBQ3JCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUNwQzs7QUN0QkQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN2QixJQUFJLFVBQVUsR0FBRztJQUNiLENBQUMsRUFBRSxFQUFFO0lBQ0wsQ0FBQyxFQUFFLEVBQUU7SUFDTCxDQUFDLEVBQUUsRUFBRTtJQUNMLENBQUMsRUFBRSxFQUFFO0lBQ0wsQ0FBQyxFQUFFLEVBQUU7Q0FDUixDQUFDOzs7QUFHRixTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7SUFDeEUsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDOUU7O0FBRUQsU0FBU0ssY0FBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO0lBQzFELElBQUksUUFBUSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwRCxJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksT0FBTyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxLQUFLLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksTUFBTSxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxLQUFLLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFFdkMsSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDL0IsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1lBQ3pDLEtBQUssTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDL0IsS0FBSyxLQUFLLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1lBQ3ZDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDL0IsSUFBSSxNQUFNLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ3RDLE1BQU0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDL0IsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1lBQ3hDLEtBQUssTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFFbkUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDZCxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDM0M7OztBQUdELEFBQU8sU0FBUywwQkFBMEIsRUFBRSxnQkFBZ0IsRUFBRTtJQUMxRCxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtRQUNoQyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssVUFBVSxFQUFFO1FBQ3pDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUM7Q0FDaEI7OztBQUdELEFBQU8sU0FBUywyQkFBMkIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0lBQzNELElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNyQyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUNyQixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNoQztJQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDOUIsT0FBTyxJQUFJLENBQUM7Q0FDZjs7QUFFRCxBQUFPLFNBQVMsUUFBUSxFQUFFLFVBQVUsRUFBRTtJQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0IsSUFBSSxNQUFNLEdBQUdBLGNBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7O0lBRXJELElBQUksVUFBVSxFQUFFO1FBQ1osTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0M7O0lBRUQsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ3BDOztBQzFFRCxJQUFJQyxLQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7QUFFbkIsQUFBTyxTQUFTQyxhQUFXLEdBQUc7Ozs7Ozs7O0lBUTFCLElBQUksT0FBTyxHQUFHRCxLQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUM3QyxJQUFJLElBQUksV0FBV0EsS0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxJQUFJLE1BQU0sU0FBU0EsS0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxJQUFJLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDOzs7SUFHMUIsT0FBTyxhQUFhLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDM0MsS0FBSyxlQUFlLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDM0MsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNkLE9BQU8sSUFBSSxFQUFFLENBQUM7OztJQUdkLEtBQUssSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sSUFBSSxFQUFFLENBQUM7Ozs7SUFJYixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDZCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDYixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDZCxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDaEIsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7SUFFN0IsSUFBSSxDQUFDLEtBQUssRUFBRTs7O1FBR1IsT0FBTyxLQUFLLENBQUM7S0FDaEI7O0lBRUQsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUN6QixHQUFHO1FBQ0gsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQzFCOztBQ2pERCxJQUFJUCxPQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7QUFFL0IsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUVBQSxPQUFLLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQztBQUMzQkEsT0FBSyxDQUFDLEdBQUcsY0FBY0csS0FBRyxDQUFDO0FBQzNCSCxPQUFLLENBQUMsUUFBUSxTQUFTSSxVQUFRLENBQUM7QUFDaENKLE9BQUssQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDO0FBQzFCQSxPQUFLLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztBQUN0Q0EsT0FBSyxDQUFDLFNBQVMsUUFBUSxTQUFTLENBQUM7QUFDakNBLE9BQUssQ0FBQyxTQUFTLFFBQVEsU0FBUyxDQUFDO0FBQ2pDQSxPQUFLLENBQUMsT0FBTyxVQUFVLE9BQU8sQ0FBQztBQUMvQkEsT0FBSyxDQUFDLE1BQU0sV0FBVyxNQUFNLENBQUM7QUFDOUJBLE9BQUssQ0FBQyxPQUFPLFVBQVUsT0FBTyxDQUFDO0FBQy9CQSxPQUFLLENBQUMsUUFBUSxTQUFTLFFBQVEsQ0FBQztBQUNoQ0EsT0FBSyxDQUFDLE9BQU8sVUFBVSxPQUFPLENBQUM7QUFDL0JBLE9BQUssQ0FBQyxPQUFPLFVBQVVLLFNBQU8sQ0FBQztBQUMvQkwsT0FBSyxDQUFDLE9BQU8sVUFBVSxNQUFNLENBQUM7QUFDOUJBLE9BQUssQ0FBQyxHQUFHLGNBQWNDLEtBQUcsQ0FBQztBQUMzQkQsT0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUM7QUFDcENBLE9BQUssQ0FBQyxPQUFPLFVBQVUsT0FBTyxDQUFDO0FBQy9CQSxPQUFLLENBQUMsT0FBTyxVQUFVLE9BQU8sQ0FBQztBQUMvQkEsT0FBSyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUM7QUFDN0JBLE9BQUssQ0FBQyxJQUFJLGFBQWEsSUFBSSxDQUFDO0FBQzVCQSxPQUFLLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQztBQUM3QkEsT0FBSyxDQUFDLE1BQU0sV0FBVyxNQUFNLENBQUM7QUFDOUJBLE9BQUssQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDO0FBQzdCQSxPQUFLLENBQUMsUUFBUSxTQUFTLFFBQVEsQ0FBQztBQUNoQ0EsT0FBSyxDQUFDLFdBQVcsTUFBTVEsYUFBVyxDQUFDO0FBQ25DUixPQUFLLENBQUMsUUFBUSxTQUFTUSxhQUFXLENBQUM7QUFDbkNSLE9BQUssQ0FBQyxNQUFNLFdBQVdRLGFBQVcsQ0FBQztBQUNuQ1IsT0FBSyxDQUFDLE1BQU0sV0FBVyxNQUFNLENBQUM7QUFDOUJBLE9BQUssQ0FBQyxVQUFVLE9BQU8sVUFBVSxDQUFDOzs7QUFHbEMsQUFFQUEsT0FBSyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMscUZBQXFGLEVBQUVRLGFBQVcsQ0FBQyxDQUFDO0FBQ2xJUixPQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7QUMvQ2xCLHNCQUNBLEFBRUEsQUFDQSxBQUNBLEFBS0EsQUFLRTs7OztBQ1JGLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7Ozs7QUFJckMsYUFBYSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNoQyxhQUFhLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ25DLGFBQWEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUMvQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Q0FDdEQsQ0FBQyxDQUFDO0FBQ0gsYUFBYSxDQUFDLEdBQUcsRUFBRSxVQUFVLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQy9DLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDdEMsQ0FBQyxDQUFDOztBQ25CSCxzQkFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFFQSxBQUVBLEFBQTBCOztBQ25CMUI7Ozs7OztBQU1BLEFBRUFTLEtBQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDOztBQUUxQixBQWFBLEFBSUEsQUFhQSxBQU9BLEFBRUEsQUFFQSxlQUFlLENBQUNDLFdBQUssQ0FBQyxDQUFDOztBQUV2QkQsS0FBTSxDQUFDLEVBQUUsc0JBQXNCRSxLQUFFLENBQUM7QUFDbENGLEtBQU0sQ0FBQyxHQUFHLHFCQUFxQixHQUFHLENBQUM7QUFDbkNBLEtBQU0sQ0FBQyxHQUFHLHFCQUFxQixHQUFHLENBQUM7QUFDbkNBLEtBQU0sQ0FBQyxHQUFHLHFCQUFxQixHQUFHLENBQUM7QUFDbkNBLEtBQU0sQ0FBQyxHQUFHLHFCQUFxQkcsU0FBRyxDQUFDO0FBQ25DSCxLQUFNLENBQUMsSUFBSSxvQkFBb0JJLFVBQUksQ0FBQztBQUNwQ0osS0FBTSxDQUFDLE1BQU0sa0JBQWtCSyxVQUFNLENBQUM7QUFDdENMLEtBQU0sQ0FBQyxNQUFNLGtCQUFrQixNQUFNLENBQUM7QUFDdENBLEtBQU0sQ0FBQyxNQUFNLGtCQUFrQk0sa0JBQU0sQ0FBQztBQUN0Q04sS0FBTSxDQUFDLE9BQU8saUJBQWlCTyxhQUFPLENBQUM7QUFDdkNQLEtBQU0sQ0FBQyxRQUFRLGdCQUFnQlEsY0FBUSxDQUFDO0FBQ3hDUixLQUFNLENBQUMsUUFBUSxnQkFBZ0IsUUFBUSxDQUFDO0FBQ3hDQSxLQUFNLENBQUMsUUFBUSxnQkFBZ0JTLFlBQVEsQ0FBQztBQUN4Q1QsS0FBTSxDQUFDLFNBQVMsZUFBZVUsWUFBUyxDQUFDO0FBQ3pDVixLQUFNLENBQUMsVUFBVSxjQUFjVyxTQUFVLENBQUM7QUFDMUNYLEtBQU0sQ0FBQyxVQUFVLGNBQWMsVUFBVSxDQUFDO0FBQzFDQSxLQUFNLENBQUMsV0FBVyxhQUFhWSxlQUFXLENBQUM7QUFDM0NaLEtBQU0sQ0FBQyxXQUFXLGFBQWFhLGVBQVcsQ0FBQztBQUMzQ2IsS0FBTSxDQUFDLFlBQVksWUFBWSxZQUFZLENBQUM7QUFDNUNBLEtBQU0sQ0FBQyxZQUFZLFlBQVksWUFBWSxDQUFDO0FBQzVDQSxLQUFNLENBQUMsT0FBTyxpQkFBaUJjLFdBQU8sQ0FBQztBQUN2Q2QsS0FBTSxDQUFDLGFBQWEsV0FBV2UsaUJBQWEsQ0FBQztBQUM3Q2YsS0FBTSxDQUFDLGNBQWMsVUFBVSxjQUFjLENBQUM7QUFDOUNBLEtBQU0sQ0FBQyxvQkFBb0IsR0FBR2dCLDBCQUFvQixDQUFDO0FBQ25EaEIsS0FBTSxDQUFDLHFCQUFxQixHQUFHaUIsMkJBQXFCLENBQUM7QUFDckRqQixLQUFNLENBQUMsY0FBYyxVQUFVLGlCQUFpQixDQUFDO0FBQ2pEQSxLQUFNLENBQUMsU0FBUyxlQUFlRSxLQUFFLENBQUM7O0FBRWxDLEFBQXNCOzs7Ozs7O0FDOUV0QnRCLElBQU0sVUFBVSxHQUFHLFlBQVk7RUFDN0JBLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQTtFQUNmQSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUE7RUFDakJELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUNULEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtNQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO0tBQ25CO1NBQ0k7TUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtLQUNsQjtHQUNGO0VBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO01BQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7S0FDckI7U0FDSTtNQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0tBQ3BCO0dBQ0Y7O0VBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7Q0FDdEIsQ0FBQTs7QUFFREMsSUFBTSxTQUFTLEdBQUcsVUFBVSxFQUFFLENBQUE7O0FBRTlCQSxJQUFNLGdCQUFnQixHQUFHLFVBQVUsSUFBSSxFQUFFO0VBQ3ZDQSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0VBQzlCQSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0VBQ2hDQSxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtFQUNyQkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0VBQ1QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3hDLElBQUksSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUM1QixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ2Q7R0FDRjtFQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN4QyxJQUFJLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDOUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNkO0dBQ0Y7O0VBRUQsT0FBTyxNQUFNO0NBQ2QsQ0FBQTs7QUFFREMsSUFBTSxhQUFhLEdBQUcsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFO0VBQzVDQSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7RUFDL0JBLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtFQUNqQyxPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTTtDQUMzQixDQUFBOztBQUVELGlCQUFlLFVBQVUsT0FBTyxFQUFFO0VBQ2hDQSxJQUFNLElBQUksR0FBR29CLEtBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUE7RUFDekRwQixJQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtFQUNwQyxPQUFPLElBQUksTUFBTSxDQUFDO0lBQ2hCLElBQUksRUFBRSxTQUFTO0lBQ2YsYUFBYSxFQUFFLGFBQWE7SUFDNUIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlO0lBQ3hDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtHQUN2QixDQUFDO0NBQ0gsQ0FBQTs7Ozs7Ozs7Ozs7QUMxREQsQ0FBQyxVQUFVLElBQUksRUFBRSxPQUFPO0FBQ3hCO0lBQ0ksWUFBWSxDQUFDOztJQUViLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7OztRQUc3QixJQUFJLEVBQUUsTUFBTSxHQUFHLFVBQWlCLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDaEQsY0FBYyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwQyxNQUFNLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O1FBRW5ELE1BQU0sQ0FBQyxVQUFVLEdBQUc7UUFDcEI7O1lBRUksSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDO1lBQ2xCLElBQUksRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCLENBQUMsQ0FBQztLQUNOLE1BQU07UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdkM7Q0FDSixDQUFDSCxjQUFJLEVBQUUsVUFBVSxNQUFNO0FBQ3hCO0lBQ0ksWUFBWSxDQUFDOzs7OztJQUtiLElBQUksU0FBUyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVU7O0lBRTVDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCOztJQUU3QyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVE7O0lBRTFCLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVTs7SUFFdkIsUUFBUSxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTztJQUM1QztRQUNJLElBQUksaUJBQWlCLEVBQUU7WUFDbkIsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DLE1BQU07WUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdEM7S0FDSjs7SUFFRCxXQUFXLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPO0lBQy9DO1FBQ0ksSUFBSSxpQkFBaUIsRUFBRTtZQUNuQixFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEQsTUFBTTtZQUNILEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0QztLQUNKOztJQUVELFNBQVMsR0FBRyxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSTtJQUN4QztRQUNJLElBQUksRUFBRSxDQUFDOztRQUVQLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUN0QixFQUFFLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4QyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QixNQUFNLElBQUksUUFBUSxDQUFDLGlCQUFpQixFQUFFO1lBQ25DLEVBQUUsR0FBRyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNsQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDSjs7SUFFRCxJQUFJLEdBQUcsU0FBUyxHQUFHO0lBQ25CO1FBQ0ksT0FBTyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMvRDs7SUFFRCxRQUFRLEdBQUcsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMxQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDcEU7O0lBRUQsUUFBUSxHQUFHLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDMUI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNuQixFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUN2RTtLQUNKOztJQUVELFdBQVcsR0FBRyxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzdCO1FBQ0ksRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDaEY7O0lBRUQsT0FBTyxHQUFHLFNBQVMsR0FBRztJQUN0QjtRQUNJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzlEOztJQUVELE1BQU0sR0FBRyxTQUFTLEdBQUc7SUFDckI7UUFDSSxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUN0Rjs7SUFFRCxTQUFTLEdBQUcsU0FBUyxJQUFJO0lBQ3pCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOztJQUVELFVBQVUsR0FBRyxTQUFTLElBQUk7SUFDMUI7O1FBRUksT0FBTyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztLQUNqRTs7SUFFRCxjQUFjLEdBQUcsU0FBUyxJQUFJLEVBQUUsS0FBSztJQUNyQztRQUNJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUY7O0lBRUQsZUFBZSxHQUFHLFNBQVMsSUFBSTtJQUMvQjtRQUNJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBO0tBQzVDOztJQUVELFlBQVksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzNCOztRQUVJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN0Qzs7SUFFRCxNQUFNLEdBQUcsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVM7SUFDckM7UUFDSSxJQUFJLElBQUksRUFBRSxPQUFPLENBQUM7UUFDbEIsS0FBSyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2YsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUM7WUFDakMsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUNwQixJQUFJLFNBQVMsRUFBRTt3QkFDWCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7cUJBQzdDO2lCQUNKO3FCQUNJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUMxQixJQUFJLFNBQVMsRUFBRTt3QkFDWCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEM7aUJBQ0osTUFBTTtvQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0osTUFBTSxJQUFJLFNBQVMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtTQUNKO1FBQ0QsT0FBTyxFQUFFLENBQUM7S0FDYjs7SUFFRCxjQUFjLEdBQUcsU0FBUyxRQUFRLEVBQUU7UUFDaEMsSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNwQixRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEQsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sUUFBUSxDQUFDO0tBQ25COzs7OztJQUtELFFBQVEsR0FBRzs7O1FBR1AsS0FBSyxFQUFFLElBQUk7OztRQUdYLEtBQUssRUFBRSxTQUFTOzs7O1FBSWhCLFFBQVEsRUFBRSxhQUFhOzs7UUFHdkIsVUFBVSxFQUFFLElBQUk7OztRQUdoQixNQUFNLEVBQUUsWUFBWTs7O1FBR3BCLFdBQVcsRUFBRSxJQUFJOzs7UUFHakIsY0FBYyxFQUFFLEtBQUs7OztRQUdyQixRQUFRLEVBQUUsQ0FBQzs7O1FBR1gsWUFBWSxFQUFFLEtBQUs7OztRQUduQixPQUFPLEVBQUUsSUFBSTs7UUFFYixPQUFPLEVBQUUsSUFBSTs7O1FBR2IsU0FBUyxFQUFFLEVBQUU7OztRQUdiLGNBQWMsRUFBRSxLQUFLOzs7UUFHckIsT0FBTyxFQUFFLENBQUM7UUFDVixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxTQUFTOztRQUVuQixVQUFVLEVBQUUsSUFBSTtRQUNoQixRQUFRLEVBQUUsSUFBSTs7UUFFZCxLQUFLLEVBQUUsS0FBSzs7O1FBR1osVUFBVSxFQUFFLEVBQUU7OztRQUdkLGtCQUFrQixFQUFFLEtBQUs7OztRQUd6QiwrQkFBK0IsRUFBRSxLQUFLOzs7UUFHdEMsY0FBYyxFQUFFLENBQUM7Ozs7UUFJakIsWUFBWSxFQUFFLE1BQU07OztRQUdwQixTQUFTLEVBQUUsU0FBUzs7O1FBR3BCLElBQUksRUFBRTtZQUNGLGFBQWEsR0FBRyxnQkFBZ0I7WUFDaEMsU0FBUyxPQUFPLFlBQVk7WUFDNUIsTUFBTSxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDL0gsUUFBUSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3hGLGFBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUM5RDs7O1FBR0QsS0FBSyxFQUFFLElBQUk7OztRQUdYLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLElBQUk7UUFDWixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxJQUFJO0tBQ2Y7Ozs7OztJQU1ELGFBQWEsR0FBRyxTQUFTLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUN4QztRQUNJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNiLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hFOztJQUVELFNBQVMsR0FBRyxTQUFTLElBQUk7SUFDekI7UUFDSSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsK0JBQStCLEVBQUU7Z0JBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQzthQUN4QyxNQUFNO2dCQUNILE9BQU8sNEJBQTRCLENBQUM7YUFDdkM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hCLFlBQVksR0FBRyxNQUFNLENBQUM7U0FDekI7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQW1CLEdBQUcsWUFBWSxHQUFHLElBQUk7aUJBQ25HLHFEQUFxRDtvQkFDbEQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSTt3QkFDdkcsSUFBSSxDQUFDLEdBQUc7aUJBQ2YsV0FBVztlQUNiLE9BQU8sQ0FBQztLQUNsQjs7SUFFRCxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7UUFFNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksUUFBUSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0YsT0FBTyx3QkFBd0IsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3ZEOztJQUVELFNBQVMsR0FBRyxTQUFTLElBQUksRUFBRSxLQUFLO0lBQ2hDO1FBQ0ksT0FBTyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ3RFOztJQUVELFVBQVUsR0FBRyxTQUFTLElBQUk7SUFDMUI7UUFDSSxPQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztLQUNqRDs7SUFFRCxVQUFVLEdBQUcsU0FBUyxJQUFJO0lBQzFCO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6QjtRQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7U0FDN0g7UUFDRCxPQUFPLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDO0tBQ3hGOztJQUVELFdBQVcsR0FBRyxTQUFTLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTTtJQUNoRTtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO1lBQ1QsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFO1lBQ2xCLFNBQVMsR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU87WUFDakMsU0FBUyxHQUFHLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTztZQUNqQyxJQUFJLEdBQUcsV0FBVyxHQUFHLE1BQU0sR0FBRyw0REFBNEQ7WUFDMUYsU0FBUztZQUNULFFBQVE7WUFDUixJQUFJLEdBQUcsSUFBSTtZQUNYLElBQUksR0FBRyxJQUFJLENBQUM7O1FBRWhCLEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLEtBQUssT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHO2lCQUNyRSxDQUFDLEtBQUssS0FBSyxHQUFHLHNCQUFzQixFQUFFLEVBQUUsQ0FBQztpQkFDekMsQ0FBQyxTQUFTLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLE1BQU0sU0FBUyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcscUJBQXFCLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztnQkFDekcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7U0FDMUM7O1FBRUQsU0FBUyxHQUFHLDBCQUEwQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLDhEQUE4RCxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUM7O1FBRXJLLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0IsTUFBTTtZQUNILENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pDOztRQUVELEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQzthQUMvRztTQUNKO1FBQ0QsUUFBUSxHQUFHLDBCQUEwQixHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLDZEQUE2RCxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUM7O1FBRWxLLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3pCLElBQUksSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDO1NBQ2hDLE1BQU07WUFDSCxJQUFJLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUNoQzs7UUFFRCxJQUFJLFNBQVMsS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNoQjs7UUFFRCxJQUFJLFNBQVMsS0FBSyxLQUFLLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNoQjs7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVCxJQUFJLElBQUksMEJBQTBCLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxjQUFjLENBQUMsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7U0FDbEk7UUFDRCxJQUFJLENBQUMsTUFBTSxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsR0FBRztZQUN6QyxJQUFJLElBQUksMEJBQTBCLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxjQUFjLENBQUMsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7U0FDOUg7O1FBRUQsT0FBTyxJQUFJLElBQUksUUFBUSxDQUFDO0tBQzNCOztJQUVELFdBQVcsR0FBRyxTQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTTtJQUN6QztRQUNJLE9BQU8seUZBQXlGLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQztLQUN2Szs7Ozs7O0lBTUQsT0FBTyxHQUFHLFNBQVMsT0FBTztJQUMxQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUk7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFFaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDOUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDVixPQUFPO2FBQ1Y7WUFDRCxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1QsT0FBTzthQUNWOztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEVBQUU7b0JBQ2pILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNaLEdBQUcsQ0FBQyxXQUFXOzRCQUNYLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDWixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0NBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDckI7eUJBQ0osRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDWDtpQkFDSjtxQkFDSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDcEI7cUJBQ0ksSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFO29CQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0o7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBRTs7Z0JBRWxDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtvQkFDbEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN0QixNQUFNO29CQUNILENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN0QixPQUFPLEtBQUssQ0FBQztpQkFDaEI7YUFDSixNQUFNO2dCQUNILElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO1NBQ0osQ0FBQzs7UUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQjtZQUNJLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7aUJBQ0ksSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1NBQ0osQ0FBQzs7UUFFRixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUM5QjtZQUNJLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQzs7WUFFdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7O2dCQUVsQixPQUFPLENBQUMsQ0FBQyxPQUFPO29CQUNaLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRTt3QkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNsQixNQUFNO29CQUNWLEtBQUssRUFBRTt3QkFDSCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixNQUFNO29CQUNWLEtBQUssRUFBRTt3QkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsTUFBTTtvQkFDVixLQUFLLEVBQUU7d0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLE1BQU07b0JBQ1YsS0FBSyxFQUFFO3dCQUNILElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixNQUFNO2lCQUNiO2FBQ0o7U0FDSixDQUFDOztRQUVGLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ2hDO1lBQ0ksSUFBSSxJQUFJLENBQUM7O1lBRVQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDcEIsT0FBTzthQUNWO1lBQ0QsSUFBSSxTQUFTLEVBQUU7Z0JBQ1gsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO2FBQzFEO2lCQUNJO2dCQUNELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNqRDtZQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2NBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDVixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDZjtTQUNKLENBQUM7O1FBRUYsSUFBSSxDQUFDLGFBQWEsR0FBRztRQUNyQjtZQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmLENBQUM7O1FBRUYsSUFBSSxDQUFDLGFBQWEsR0FBRztRQUNyQjtZQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmLENBQUM7O1FBRUYsSUFBSSxDQUFDLFlBQVksR0FBRztRQUNwQjs7WUFFSSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ2pDLEdBQUc7Z0JBQ0MsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxFQUFFO29CQUM5QixPQUFPO2lCQUNWO2FBQ0o7b0JBQ08sR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUc7O1lBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNWLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVc7b0JBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztTQUNuQixDQUFDOztRQUVGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCO1lBQ0ksQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLFVBQVU7Z0JBQ2pDLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUMzQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzlDO2FBQ0o7WUFDRCxHQUFHO2dCQUNDLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDdEQsT0FBTztpQkFDVjthQUNKO29CQUNPLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxHQUFHO1lBQy9CLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDNUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2Y7U0FDSixDQUFDOztRQUVGLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQzs7UUFFekcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxRQUFRLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O1FBRWpELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEMsTUFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7WUFFcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO29CQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ3JFLE1BQU07b0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDN0Q7Z0JBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7YUFDOUI7U0FDSjs7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOztRQUUvQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQy9CLE1BQU07Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtTQUNKLE1BQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztTQUM3Qjs7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxXQUFXLENBQUM7WUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQsTUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO0tBQ0osQ0FBQzs7Ozs7O0lBTUYsT0FBTyxDQUFDLFNBQVMsR0FBRzs7Ozs7O1FBTWhCLE1BQU0sRUFBRSxTQUFTLE9BQU87UUFDeEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDVixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3hDOztZQUVELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFFMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7WUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1lBRXJFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1lBRWhGLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBRWxGLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7WUFFbkYsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzs7WUFFOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7O1lBRXpGLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7WUFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdkM7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7O1lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxRQUFRLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksUUFBUSxDQUFDO2FBQ25FLE1BQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQztnQkFDOUUsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7aUJBQ3hCO2FBQ0o7O1lBRUQsT0FBTyxJQUFJLENBQUM7U0FDZjs7Ozs7UUFLRCxRQUFRLEVBQUUsU0FBUyxNQUFNO1FBQ3pCO1lBQ0ksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hIOzs7OztRQUtELFNBQVMsRUFBRTtRQUNYO1lBQ0ksT0FBTyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDN0M7Ozs7O1FBS0QsU0FBUyxFQUFFLFNBQVMsSUFBSSxFQUFFLGVBQWU7UUFDekM7WUFDSSxJQUFJLFNBQVMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQzthQUNoRDtTQUNKOzs7OztRQUtELE9BQU8sRUFBRTtRQUNUO1lBQ0ksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ3JFOzs7OztRQUtELE9BQU8sRUFBRSxTQUFTLElBQUksRUFBRSxlQUFlO1FBQ3ZDO1lBQ0ksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQzs7Z0JBRWYsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtvQkFDZixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ3pEOztnQkFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QjtZQUNELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMxQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZixPQUFPO2FBQ1Y7O1lBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPO2dCQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7O1lBRTFCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7Z0JBQzNCLElBQUksR0FBRyxHQUFHLENBQUM7YUFDZCxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7Z0JBQ2xDLElBQUksR0FBRyxHQUFHLENBQUM7YUFDZDs7WUFFRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRXZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUMvQztTQUNKOzs7OztRQUtELFFBQVEsRUFBRSxTQUFTLElBQUk7UUFDdkI7WUFDSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7O1lBRXZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2YsT0FBTzthQUNWOztZQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQy9FLGVBQWUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQzFILFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O2dCQUVqQyxlQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELFdBQVcsSUFBSSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksZUFBZSxDQUFDLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZHOztZQUVELElBQUksV0FBVyxFQUFFO2dCQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztvQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7aUJBQzNCLENBQUMsQ0FBQztnQkFDSCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxLQUFLLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUN6RDthQUNKOztZQUVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjs7UUFFRCxVQUFVLEVBQUUsU0FBUyxJQUFJLEVBQUUsSUFBSSxFQUFFOztZQUU3QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs7WUFFOUMsSUFBSSxNQUFNLENBQUM7O1lBRVgsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUNoQixNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO2FBQ2pELE1BQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUM1QixNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO2FBQ2pEOztZQUVELElBQUksU0FBUyxFQUFFO2dCQUNYLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtvQkFDaEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNuRCxNQUFNLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtvQkFDNUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUN4RDthQUNKOztZQUVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7O1FBRUQsZUFBZSxFQUFFLFdBQVc7OztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3Q0EsTUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7b0JBQy9CLEtBQUssRUFBRUEsTUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztvQkFDbEMsSUFBSSxFQUFFQSxNQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQy9CLENBQUMsQ0FBQzthQUNOO1lBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7O1FBRUQsU0FBUyxFQUFFO1FBQ1g7WUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztTQUM3Qjs7Ozs7UUFLRCxTQUFTLEVBQUUsU0FBUyxLQUFLO1FBQ3pCO1lBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDMUI7U0FDSjs7UUFFRCxTQUFTLEVBQUU7UUFDWDtZQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCOztRQUVELFNBQVMsRUFBRTtRQUNYO1lBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7Ozs7O1FBS0QsUUFBUSxFQUFFLFNBQVMsSUFBSTtRQUN2QjtZQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzFCO1NBQ0o7Ozs7O1FBS0QsVUFBVSxFQUFFLFNBQVMsS0FBSztRQUMxQjtZQUNJLEdBQUcsS0FBSyxZQUFZLElBQUksRUFBRTtnQkFDdEIsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZDLE1BQU07Z0JBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDcEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQzthQUM1Qzs7WUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjs7Ozs7UUFLRCxVQUFVLEVBQUUsU0FBUyxLQUFLO1FBQzFCO1lBQ0ksR0FBRyxLQUFLLFlBQVksSUFBSSxFQUFFO2dCQUN0QixlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkMsTUFBTTtnQkFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ3hDOztZQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmOztRQUVELGFBQWEsRUFBRSxTQUFTLEtBQUs7UUFDN0I7WUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDOUI7O1FBRUQsV0FBVyxFQUFFLFNBQVMsS0FBSztRQUMzQjtZQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUM1Qjs7Ozs7UUFLRCxJQUFJLEVBQUUsU0FBUyxLQUFLO1FBQ3BCOzs7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsT0FBTzthQUNWO1lBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO2dCQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87Z0JBQ3RCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtnQkFDeEIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO2dCQUN4QixJQUFJLEdBQUcsRUFBRTtnQkFDVCxNQUFNLENBQUM7O1lBRVgsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLE9BQU8sRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO2lCQUN0QjthQUNKO1lBQ0QsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLE9BQU8sRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO2lCQUN0QjthQUNKOztZQUVELE1BQU0sR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBRXpGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxJQUFJLElBQUksMkJBQTJCLEdBQUcsV0FBVyxDQUFDQSxNQUFJLEVBQUUsQ0FBQyxFQUFFQSxNQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRUEsTUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUVBLE1BQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHQSxNQUFJLENBQUMsTUFBTSxDQUFDQSxNQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRUEsTUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQ2pPOztZQUVELElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7WUFFekIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUM3QixHQUFHLENBQUMsV0FBVzt3QkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNUO2FBQ0o7O1lBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7O1lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztnQkFFWixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsbUNBQW1DLENBQUMsQ0FBQzthQUM5RTtTQUNKOztRQUVELGNBQWMsRUFBRTtRQUNoQjtZQUNJLElBQUksS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDOztZQUUvRixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUEsT0FBTyxFQUFBOztZQUU5QixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOztZQUVwQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDeEIsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNaLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUM1QixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDOUIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDMUUsY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7WUFDN0UsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7O1lBRWhHLElBQUksT0FBTyxLQUFLLENBQUMscUJBQXFCLEtBQUssVUFBVSxFQUFFO2dCQUNuRCxVQUFVLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzNDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQzVDLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDaEQsTUFBTTtnQkFDSCxJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDdEIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztnQkFDeEMsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLFlBQVksR0FBRztvQkFDNUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLEdBQUcsS0FBSyxHQUFHLENBQUMsU0FBUyxDQUFDO2lCQUN6QjthQUNKOzs7WUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLElBQUksSUFBSSxHQUFHLEtBQUssR0FBRyxhQUFhOztvQkFFL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUM7aUJBQ3ZDO2NBQ0g7Z0JBQ0UsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUMzQztZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLGNBQWMsR0FBRyxTQUFTOztvQkFFNUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEMsR0FBRyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUM7aUJBQ3hDO2NBQ0g7Z0JBQ0UsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQzthQUMzQzs7WUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNsQzs7Ozs7UUFLRCxNQUFNLEVBQUUsU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU07UUFDcEM7OztZQUNJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNoQixHQUFHLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ25CLElBQUksS0FBSyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztnQkFDcEMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUMxQyxJQUFJLEtBQUssRUFBRTtnQkFDWCxHQUFHLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDeEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNaLE1BQU0sSUFBSSxDQUFDLENBQUM7aUJBQ2Y7YUFDSjtZQUNELElBQUksYUFBYSxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDO2dCQUM1QyxTQUFTLEdBQUcsS0FBSyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7Z0JBQ3hDLG1CQUFtQixHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJO2dCQUNuRCxlQUFlLEdBQUcsS0FBSyxLQUFLLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUk7Z0JBQ2hELG1CQUFtQixHQUFHLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM3RSxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsTUFBTTtnQkFDckIsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNsQixNQUFNLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUNkO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUNyQztnQkFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7b0JBQzdDLFVBQVUsR0FBRyxNQUFNLENBQUNBLE1BQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFQSxNQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSztvQkFDakUsT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO29CQUNoQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQztvQkFDNUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO29CQUM1QixXQUFXLEdBQUcsS0FBSztvQkFDbkIsVUFBVSxHQUFHLElBQUk7b0JBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQztvQkFDcEUsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO29CQUM5RCxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUTtvQkFDNUYsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU87a0NBQ2xDLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7a0NBQ25DLElBQUksQ0FBQyxlQUFlLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2tDQUN2QyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Z0JBRS9ELElBQUksT0FBTyxFQUFFO29CQUNULElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRTt3QkFDWixTQUFTLEdBQUcsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO3dCQUM1QyxXQUFXLEdBQUcsYUFBYSxDQUFDO3dCQUM1QixVQUFVLEdBQUcsbUJBQW1CLENBQUM7cUJBQ3BDLE1BQU07d0JBQ0gsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQzdCLFdBQVcsR0FBRyxTQUFTLENBQUM7d0JBQ3hCLFVBQVUsR0FBRyxlQUFlLENBQUM7cUJBQ2hDO2lCQUNKOztnQkFFRCxJQUFJLFNBQVMsR0FBRzt3QkFDUixHQUFHLEVBQUUsU0FBUzt3QkFDZCxLQUFLLEVBQUUsV0FBVzt3QkFDbEIsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLFVBQVUsRUFBRSxVQUFVO3dCQUN0QixPQUFPLEVBQUUsT0FBTzt3QkFDaEIsVUFBVSxFQUFFLFVBQVU7d0JBQ3RCLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixZQUFZLEVBQUUsWUFBWTt3QkFDMUIsVUFBVSxFQUFFLFVBQVU7d0JBQ3RCLFNBQVMsRUFBRSxTQUFTO3dCQUNwQiwrQkFBK0IsRUFBRSxJQUFJLENBQUMsK0JBQStCO3FCQUN4RSxDQUFDOztnQkFFTixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOztnQkFFL0IsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ1gsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO3dCQUNyQixHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNwRDtvQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ1QsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDVDthQUNKO1lBQ0QsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxQzs7UUFFRCxTQUFTLEVBQUU7UUFDWDtZQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNsQjs7UUFFRCxJQUFJLEVBQUU7UUFDTjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ25CLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtvQkFDZixRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDekI7Z0JBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtvQkFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjthQUNKO1NBQ0o7O1FBRUQsSUFBSSxFQUFFO1FBQ047WUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtnQkFDYixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO29CQUNmLFdBQVcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDakQ7Z0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7b0JBQzFELElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDOUI7YUFDSjtTQUNKOzs7OztRQUtELE9BQU8sRUFBRTtRQUNUO1lBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0QsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUQsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO2dCQUNmLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO29CQUNmLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMxRCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDMUQsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzNEO2FBQ0o7WUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNDO1NBQ0o7O0tBRUosQ0FBQzs7SUFFRixPQUFPLE9BQU8sQ0FBQzs7Q0FFbEIsQ0FBQyxFQUFFOzs7QUNscUNKRyxJQUFNLFlBQVksR0FBRztFQUNuQixJQUFJLEVBQUUsVUFBVSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRTtJQUN4REEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQTtJQUMzQkEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQTtJQUMzQixJQUFJLE1BQU0sQ0FBQztNQUNULElBQUksRUFBRSxLQUFLO01BQ1gsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDO01BQ3RCLGVBQWUsRUFBRSxlQUFlO01BQ2hDLGNBQWMsRUFBRSxjQUFjO01BQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtLQUNwQixDQUFDLENBQUE7R0FDSDs7RUFFRCxRQUFRLEVBQUUsVUFBVSxPQUFPLEVBQUUsZUFBZSxFQUFFO0lBQzVDQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUE7SUFDbkNBLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNqQixRQUFRO0lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQ29CLEtBQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDdkRwQixJQUFNLE1BQU0sR0FBRyxJQUFJc0MsT0FBTyxDQUFDO01BQ3pCLFdBQVcsRUFBRWxCLEtBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRTtNQUN6RCxNQUFNLEVBQUUsWUFBWTtNQUNwQixPQUFPLEVBQUVBLEtBQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRTtNQUNuRCxPQUFPLEVBQUVBLEtBQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRTtNQUNuRCxRQUFRLEVBQUUsVUFBVSxJQUFJLEVBQUU7UUFDeEIsZUFBZSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFQSxLQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMvSCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7T0FDbEM7S0FDRixDQUFDLENBQUE7SUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtHQUMzQjs7RUFFRCxRQUFRLEVBQUUsVUFBVSxPQUFPLEVBQUUsZUFBZSxFQUFFO0lBQzVDLElBQUksVUFBVSxDQUFDO01BQ2IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO01BQ3BCLGVBQWUsRUFBRSxlQUFlO01BQ2hDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtLQUNwQixDQUFDLENBQUE7R0FDSDtDQUNGLENBQUE7O0FBRURwQixJQUFNLElBQUksR0FBRztFQUNYLE1BQU0sRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO0dBQzdCLEVBQUU7SUFDRCxJQUFJLEVBQUUsVUFBVTtJQUNoQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO0dBQzdCLEVBQUU7SUFDRCxJQUFJLEVBQUUsVUFBVTtJQUNoQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO0dBQzdCLENBQUM7Q0FDSCxDQUFBOztBQUVELFlBQWU7RUFDYixJQUFJLEVBQUUsVUFBVSxJQUFJLEVBQUU7SUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7R0FDckQ7Q0FDRixDQUFBOzs7OyJ9
