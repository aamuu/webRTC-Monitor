(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WebrtcTroubleshooter"] = factory();
	else
		root["WebrtcTroubleshooter"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;

  if (!this._events) this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++) {
      listeners[i].apply(this, args);
    }
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events || !this._events[type]) return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;

  if (!this._events) return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) {
      this.removeListener(type, listeners[listeners.length - 1]);
    }
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

/***/ }),

/***/ "./node_modules/getscreenmedia/getscreenmedia.js":
/*!*******************************************************!*\
  !*** ./node_modules/getscreenmedia/getscreenmedia.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var adapter = __webpack_require__(/*! webrtc-adapter */ "./node_modules/webrtc-adapter/src/js/adapter_core.js");

module.exports = function (constraints, cb) {
    var hasConstraints = arguments.length === 2;
    var callback = hasConstraints ? cb : constraints;
    var error;

    if (adapter.browserDetails.browser === 'chrome') {
        // check that the extension is installed by looking for a
        // sessionStorage variable that contains the extension id
        // this has to be set after installation unless the content
        // script does that
        if (sessionStorage.getScreenMediaJSExtensionId) {
            chrome.runtime.sendMessage(sessionStorage.getScreenMediaJSExtensionId, { type: 'getScreen', id: 1 }, null, function (data) {
                if (!data || data.sourceId === '') {
                    // user canceled
                    var error = new Error('NavigatorUserMediaError');
                    error.name = 'NotAllowedError';
                    callback(error);
                } else {
                    constraints = hasConstraints && constraints || { audio: false, video: {
                            mandatory: {
                                chromeMediaSource: 'desktop',
                                maxWidth: window.screen.width,
                                maxHeight: window.screen.height,
                                maxFrameRate: 3
                            }
                        } };
                    constraints.video.mandatory.chromeMediaSourceId = data.sourceId;
                    window.navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                        callback(null, stream);
                    }).catch(function (err) {
                        callback(err);
                    });
                }
            });
        } else if (window.cefGetScreenMedia) {
            //window.cefGetScreenMedia is experimental - may be removed without notice
            window.cefGetScreenMedia(function (sourceId) {
                if (!sourceId) {
                    var error = new Error('cefGetScreenMediaError');
                    error.name = 'CEF_GETSCREENMEDIA_CANCELED';
                    callback(error);
                } else {
                    constraints = hasConstraints && constraints || { audio: false, video: {
                            mandatory: {
                                chromeMediaSource: 'desktop',
                                maxWidth: window.screen.width,
                                maxHeight: window.screen.height,
                                maxFrameRate: 3
                            }
                        } };
                    constraints.video.mandatory.chromeMediaSourceId = sourceId;
                    window.navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                        callback(null, stream);
                    }).catch(function (err) {
                        callback(err);
                    });
                }
            });
        } else {
            error = new Error('Screensharing is not supported');
            error.name = 'NotSupportedError';
            callback(error);
        }
    } else if (adapter.browserDetails.browser === 'firefox' && adapter.browserDetails.version >= 33) {
        constraints = hasConstraints && constraints || {
            video: {
                mediaSource: 'window'
            }
        };
        window.navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            callback(null, stream);
        }).catch(function (err) {
            callback(err);
        });
    } else if (adapter.browserDetails.browser === 'edge' && 'getDisplayMedia' in window.navigator) {
        window.navigator.getDisplayMedia({ video: true }).then(function (stream) {
            callback(null, stream);
        }).catch(function (err) {
            callback(err);
        });
    } else {
        error = new Error('Screensharing is not supported');
        error.name = 'NotSupportedError';
        callback(error);
    }
};

/***/ }),

/***/ "./node_modules/hark/hark.js":
/*!***********************************!*\
  !*** ./node_modules/hark/hark.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");

function getMaxVolume(analyser, fftBins) {
  var maxVolume = -Infinity;
  analyser.getFloatFrequencyData(fftBins);

  for (var i = 4, ii = fftBins.length; i < ii; i++) {
    if (fftBins[i] > maxVolume && fftBins[i] < 0) {
      maxVolume = fftBins[i];
    }
  };

  return maxVolume;
}

var audioContextType;
if (typeof window !== 'undefined') {
  audioContextType = window.AudioContext || window.webkitAudioContext;
}
// use a single audio context due to hardware limits
var audioContext = null;
module.exports = function (stream, options) {
  var harker = new WildEmitter();

  // make it not break in non-supported browsers
  if (!audioContextType) return harker;

  //Config
  var options = options || {},
      smoothing = options.smoothing || 0.1,
      interval = options.interval || 50,
      threshold = options.threshold,
      play = options.play,
      history = options.history || 10,
      audioContext = options.audioContext || null,
      running = true;

  //Setup Audio Context
  if (!audioContext) {
    audioContext = new audioContextType();
  }
  var sourceNode, fftBins, analyser;

  analyser = audioContext.createAnalyser();
  analyser.fftSize = 512;
  analyser.smoothingTimeConstant = smoothing;
  fftBins = new Float32Array(analyser.frequencyBinCount);

  if (stream.jquery) stream = stream[0];
  if (stream instanceof HTMLAudioElement || stream instanceof HTMLVideoElement) {
    //Audio Tag
    sourceNode = audioContext.createMediaElementSource(stream);
    if (typeof play === 'undefined') play = true;
    threshold = threshold || -50;
  } else {
    //WebRTC Stream
    sourceNode = audioContext.createMediaStreamSource(stream);
    threshold = threshold || -50;
  }

  sourceNode.connect(analyser);
  if (play) analyser.connect(audioContext.destination);

  harker.speaking = false;

  harker.suspend = function () {
    return audioContext.suspend();
  };
  harker.resume = function () {
    return audioContext.resume();
  };
  Object.defineProperty(harker, 'state', { get: function get() {
      return audioContext.state;
    } });
  audioContext.onstatechange = function () {
    harker.emit('state_change', audioContext.state);
  };

  harker.setThreshold = function (t) {
    threshold = t;
  };

  harker.setInterval = function (i) {
    interval = i;
  };

  harker.stop = function () {
    running = false;
    harker.emit('volume_change', -100, threshold);
    if (harker.speaking) {
      harker.speaking = false;
      harker.emit('stopped_speaking');
    }
    analyser.disconnect();
    sourceNode.disconnect();
  };
  harker.speakingHistory = [];
  for (var i = 0; i < history; i++) {
    harker.speakingHistory.push(0);
  }

  // Poll the analyser node to determine if speaking
  // and emit events if changed
  var looper = function looper() {
    setTimeout(function () {

      //check if stop has been called
      if (!running) {
        return;
      }

      var currentVolume = getMaxVolume(analyser, fftBins);

      harker.emit('volume_change', currentVolume, threshold);

      var history = 0;
      if (currentVolume > threshold && !harker.speaking) {
        // trigger quickly, short history
        for (var i = harker.speakingHistory.length - 3; i < harker.speakingHistory.length; i++) {
          history += harker.speakingHistory[i];
        }
        if (history >= 2) {
          harker.speaking = true;
          harker.emit('speaking');
        }
      } else if (currentVolume < threshold && harker.speaking) {
        for (var i = 0; i < harker.speakingHistory.length; i++) {
          history += harker.speakingHistory[i];
        }
        if (history == 0) {
          harker.speaking = false;
          harker.emit('stopped_speaking');
        }
      }
      harker.speakingHistory.shift();
      harker.speakingHistory.push(0 + (currentVolume > threshold));

      looper();
    }, interval);
  };
  looper();

  return harker;
};

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),

/***/ "./node_modules/localmedia/localmedia.js":
/*!***********************************************!*\
  !*** ./node_modules/localmedia/localmedia.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var hark = __webpack_require__(/*! hark */ "./node_modules/hark/hark.js");
var getScreenMedia = __webpack_require__(/*! getscreenmedia */ "./node_modules/getscreenmedia/getscreenmedia.js");
var WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");
var mockconsole = __webpack_require__(/*! mockconsole */ "./node_modules/mockconsole/mockconsole.js");

function isAllTracksEnded(stream) {
    var isAllTracksEnded = true;
    stream.getTracks().forEach(function (t) {
        isAllTracksEnded = t.readyState === 'ended' && isAllTracksEnded;
    });
    return isAllTracksEnded;
}

function shouldWorkAroundFirefoxStopStream() {
    if (typeof window === 'undefined') {
        return false;
    }
    if (!window.navigator.mozGetUserMedia) {
        return false;
    }
    var match = window.navigator.userAgent.match(/Firefox\/(\d+)\./);
    var version = match && match.length >= 1 && parseInt(match[1], 10);
    return version < 50;
}

function LocalMedia(opts) {
    WildEmitter.call(this);

    var config = this.config = {
        detectSpeakingEvents: false,
        audioFallback: false,
        media: {
            audio: true,
            video: true
        },
        harkOptions: null,
        logger: mockconsole
    };

    var item;
    for (item in opts) {
        if (opts.hasOwnProperty(item)) {
            this.config[item] = opts[item];
        }
    }

    this.logger = config.logger;
    this._log = this.logger.log.bind(this.logger, 'LocalMedia:');
    this._logerror = this.logger.error.bind(this.logger, 'LocalMedia:');

    this.localStreams = [];
    this.localScreens = [];

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        this._logerror('Your browser does not support local media capture.');
    }

    this._audioMonitors = [];
    this.on('localStreamStopped', this._stopAudioMonitor.bind(this));
    this.on('localScreenStopped', this._stopAudioMonitor.bind(this));
}

util.inherits(LocalMedia, WildEmitter);

LocalMedia.prototype.start = function (mediaConstraints, cb) {
    var self = this;
    var constraints = mediaConstraints || this.config.media;

    this.emit('localStreamRequested', constraints);

    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        if (constraints.audio && self.config.detectSpeakingEvents) {
            self._setupAudioMonitor(stream, self.config.harkOptions);
        }
        self.localStreams.push(stream);

        stream.getTracks().forEach(function (track) {
            track.addEventListener('ended', function () {
                if (isAllTracksEnded(stream)) {
                    self._removeStream(stream);
                }
            });
        });

        self.emit('localStream', stream);

        if (cb) {
            return cb(null, stream);
        }
    }).catch(function (err) {
        // Fallback for users without a camera
        if (self.config.audioFallback && err.name === 'NotFoundError' && constraints.video !== false) {
            constraints.video = false;
            self.start(constraints, cb);
            return;
        }

        self.emit('localStreamRequestFailed', constraints);

        if (cb) {
            return cb(err, null);
        }
    });
};

LocalMedia.prototype.stop = function (stream) {
    this.stopStream(stream);
    this.stopScreenShare(stream);
};

LocalMedia.prototype.stopStream = function (stream) {
    var self = this;

    if (stream) {
        var idx = this.localStreams.indexOf(stream);
        if (idx > -1) {
            stream.getTracks().forEach(function (track) {
                track.stop();
            });

            //Half-working fix for Firefox, see: https://bugzilla.mozilla.org/show_bug.cgi?id=1208373
            if (shouldWorkAroundFirefoxStopStream()) {
                this._removeStream(stream);
            }
        }
    } else {
        this.localStreams.forEach(function (stream) {
            stream.getTracks().forEach(function (track) {
                track.stop();
            });

            //Half-working fix for Firefox, see: https://bugzilla.mozilla.org/show_bug.cgi?id=1208373
            if (shouldWorkAroundFirefoxStopStream()) {
                self._removeStream(stream);
            }
        });
    }
};

LocalMedia.prototype.startScreenShare = function (constraints, cb) {
    var self = this;

    this.emit('localScreenRequested');

    if (typeof constraints === 'function' && !cb) {
        cb = constraints;
        constraints = null;
    }

    getScreenMedia(constraints, function (err, stream) {
        if (!err) {
            self.localScreens.push(stream);

            stream.getTracks().forEach(function (track) {
                track.addEventListener('ended', function () {
                    var isAllTracksEnded = true;
                    stream.getTracks().forEach(function (t) {
                        isAllTracksEnded = t.readyState === 'ended' && isAllTracksEnded;
                    });

                    if (isAllTracksEnded) {
                        self._removeStream(stream);
                    }
                });
            });

            self.emit('localScreen', stream);
        } else {
            self.emit('localScreenRequestFailed');
        }

        // enable the callback
        if (cb) {
            return cb(err, stream);
        }
    });
};

LocalMedia.prototype.stopScreenShare = function (stream) {
    var self = this;

    if (stream) {
        var idx = this.localScreens.indexOf(stream);
        if (idx > -1) {
            stream.getTracks().forEach(function (track) {
                track.stop();
            });

            //Half-working fix for Firefox, see: https://bugzilla.mozilla.org/show_bug.cgi?id=1208373
            if (shouldWorkAroundFirefoxStopStream()) {
                this._removeStream(stream);
            }
        }
    } else {
        this.localScreens.forEach(function (stream) {
            stream.getTracks().forEach(function (track) {
                track.stop();
            });

            //Half-working fix for Firefox, see: https://bugzilla.mozilla.org/show_bug.cgi?id=1208373
            if (shouldWorkAroundFirefoxStopStream()) {
                self._removeStream(stream);
            }
        });
    }
};

// Audio controls
LocalMedia.prototype.mute = function () {
    this._audioEnabled(false);
    this.emit('audioOff');
};

LocalMedia.prototype.unmute = function () {
    this._audioEnabled(true);
    this.emit('audioOn');
};

// Video controls
LocalMedia.prototype.pauseVideo = function () {
    this._videoEnabled(false);
    this.emit('videoOff');
};
LocalMedia.prototype.resumeVideo = function () {
    this._videoEnabled(true);
    this.emit('videoOn');
};

// Combined controls
LocalMedia.prototype.pause = function () {
    this.mute();
    this.pauseVideo();
};
LocalMedia.prototype.resume = function () {
    this.unmute();
    this.resumeVideo();
};

// Internal methods for enabling/disabling audio/video
LocalMedia.prototype._audioEnabled = function (bool) {
    this.localStreams.forEach(function (stream) {
        stream.getAudioTracks().forEach(function (track) {
            track.enabled = !!bool;
        });
    });
};
LocalMedia.prototype._videoEnabled = function (bool) {
    this.localStreams.forEach(function (stream) {
        stream.getVideoTracks().forEach(function (track) {
            track.enabled = !!bool;
        });
    });
};

// check if all audio streams are enabled
LocalMedia.prototype.isAudioEnabled = function () {
    var enabled = true;
    this.localStreams.forEach(function (stream) {
        stream.getAudioTracks().forEach(function (track) {
            enabled = enabled && track.enabled;
        });
    });
    return enabled;
};

// check if all video streams are enabled
LocalMedia.prototype.isVideoEnabled = function () {
    var enabled = true;
    this.localStreams.forEach(function (stream) {
        stream.getVideoTracks().forEach(function (track) {
            enabled = enabled && track.enabled;
        });
    });
    return enabled;
};

LocalMedia.prototype._removeStream = function (stream) {
    var idx = this.localStreams.indexOf(stream);
    if (idx > -1) {
        this.localStreams.splice(idx, 1);
        this.emit('localStreamStopped', stream);
    } else {
        idx = this.localScreens.indexOf(stream);
        if (idx > -1) {
            this.localScreens.splice(idx, 1);
            this.emit('localScreenStopped', stream);
        }
    }
};

LocalMedia.prototype._setupAudioMonitor = function (stream, harkOptions) {
    this._log('Setup audio');
    var audio = hark(stream, harkOptions);
    var self = this;
    var timeout;

    audio.on('speaking', function () {
        self.emit('speaking');
    });

    audio.on('stopped_speaking', function () {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(function () {
            self.emit('stoppedSpeaking');
        }, 1000);
    });
    audio.on('volume_change', function (volume, threshold) {
        self.emit('volumeChange', volume, threshold);
    });

    this._audioMonitors.push({ audio: audio, stream: stream });
};

LocalMedia.prototype._stopAudioMonitor = function (stream) {
    var idx = -1;
    this._audioMonitors.forEach(function (monitors, i) {
        if (monitors.stream === stream) {
            idx = i;
        }
    });

    if (idx > -1) {
        this._audioMonitors[idx].audio.stop();
        this._audioMonitors.splice(idx, 1);
    }
};

module.exports = LocalMedia;

/***/ }),

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    _Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor());
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor());
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/mockconsole/mockconsole.js":
/*!*************************************************!*\
  !*** ./node_modules/mockconsole/mockconsole.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var methods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(",");
var l = methods.length;
var fn = function fn() {};
var mockconsole = {};

while (l--) {
    mockconsole[methods[l]] = fn;
}

module.exports = mockconsole;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js":
/*!******************************************************************!*\
  !*** ./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


var SDPUtils = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : dtlsRole || 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    // spec.
    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' + trackId + '\r\n';
    sdp += 'a=' + msid;
    // for Chrome. Legacy should no longer be required.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;

    // RTX
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
      sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
}

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function (url) {
        var validTurn = url.indexOf('turn:') === 0 && url.indexOf('transport=udp') !== -1 && url.indexOf('turn:[') === -1 && !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 && url.indexOf('?transport=udp') === -1;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function findCodecByPayloadType(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function rtxCapabilityMatches(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function (lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' && lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates().find(function (remoteCandidate) {
    return candidate.foundation === remoteCandidate.foundation && candidate.ip === remoteCandidate.ip && candidate.port === remoteCandidate.port && candidate.priority === remoteCandidate.priority && candidate.protocol === remoteCandidate.protocol && candidate.type === remoteCandidate.type;
  });
  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }
  return !alreadyAdded;
}

function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function (window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack', { track: track }));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack', { track: track }));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = { receiver: receiver };
    trackEvent.streams = streams;
    window.setTimeout(function () {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function RTCPeerConnection(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(function (method) {
      pc[method] = _eventTarget[method].bind(_eventTarget);
    });

    this.canTrickleIceCandidates = null;

    this.needNegotiation = false;

    this.localStreams = [];
    this.remoteStreams = [];

    this._localDescription = null;
    this._remoteDescription = null;

    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';

    config = JSON.parse(JSON.stringify(config || {}));

    this.usingBundle = config.bundlePolicy === 'max-bundle';
    if (config.rtcpMuxPolicy === 'negotiate') {
      throw makeError('NotSupportedError', 'rtcpMuxPolicy \'negotiate\' is not supported');
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;
      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;
      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

    this._iceGatherers = [];
    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config;

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;

    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function get() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function get() {
      return this._remoteDescription;
    }
  });

  // set up event handlers on prototype
  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function (name, event) {
    if (this._isClosed) {
      return;
    }
    this.dispatchEvent(event);
    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function () {
    var event = new Event('icegatheringstatechange');
    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function () {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function () {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function () {
    return this.remoteStreams;
  };

  // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function (kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function (track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function (s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function (stream) {
    var pc = this;
    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function (track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function (track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function (event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function (track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function (sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function (t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError', 'Sender was not created by this connection.');
    }
    var stream = transceiver.stream;

    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;

    // remove the stream from the set of local streams
    var localStreams = this.transceivers.map(function (t) {
      return t.stream;
    });
    if (localStreams.indexOf(stream) === -1 && this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function (stream) {
    var pc = this;
    stream.getTracks().forEach(function (track) {
      var sender = pc.getSenders().find(function (s) {
        return s.track === track;
      });
      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpSender;
    }).map(function (transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpReceiver;
    }).map(function (transceiver) {
      return transceiver.rtpReceiver;
    });
  };

  RTCPeerConnection.prototype._createIceGatherer = function (sdpMLineIndex, usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }
    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state', { value: 'new', writable: true });

    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.
      iceGatherer.state = end ? 'completed' : 'gathering';
      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };
    iceGatherer.addEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  };

  // start gathering from an RTCIceGatherer.
  RTCPeerConnection.prototype._gather = function (mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) {
      return;
    }
    var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
    iceGatherer.onlocalcandidate = function (evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }
      var event = new Event('icecandidate');
      event.candidate = { sdpMid: mid, sdpMLineIndex: sdpMLineIndex };

      var cand = evt.candidate;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      var end = !cand || Object.keys(cand).length === 0;
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        }
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        // also the usernameFragment. TODO: update SDP to take both variants.
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate, SDPUtils.parseCandidate(serializedCandidate));

        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function () {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }

      // update local description.
      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex] += 'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] += 'a=end-of-candidates\r\n';
      }
      pc._localDescription.sdp = SDPUtils.getDescription(pc._localDescription.sdp) + sections.join('');
      var complete = pc.transceivers.every(function (transceiver) {
        return transceiver.iceGatherer && transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';
        pc._emitGatheringStateChange();
      }

      // Emit candidate. Also emit null candidate when all gatherers are
      // complete.
      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }
      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));
        pc.iceGatheringState = 'complete';
        pc._emitGatheringStateChange();
      }
    };

    // emit already gathered candidates.
    window.setTimeout(function () {
      bufferedCandidateEvents.forEach(function (e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function () {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function () {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function () {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function () {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state', { value: 'failed', writable: true });
      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function (sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function (transceiver, send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video' && transceiver.recvEncodingParameters && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function (p) {
          delete p.rtx;
        });
      }
      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }
      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function (description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription', description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not set local ' + description.type + ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });

      pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        // treat bundle-only as not-rejected.
        var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? 'controlling' : 'controlled');
            }
            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities, remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          pc._transceive(transceiver, params.codecs.length > 0, false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function (description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription', description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not set remote ' + description.type + ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function (stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart, 'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart, 'a=ice-options:')[0];
    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ').indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function (mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      // treat bundle-only as not-rejected.
      var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (rejected || kind === 'application' && (protocol === 'DTLS/SCTP' || protocol === 'UDP/DTLS/SCTP')) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters = SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection, 'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:').map(function (cand) {
        return SDPUtils.parseCandidate(cand);
      }).filter(function (cand) {
        return cand.component === 1;
      });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') && !rejected && usingBundle && sdpMLineIndex > 0 && pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport);
        }
        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
            return codec.name !== 'rtx';
          });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        var isNewTrack = false;
        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            // FIXME: does not work with Plan B.
            if (remoteMsid && remoteMsid.stream === '-') {
              // no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function get() {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, 'id', {
                get: function get() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function (s) {
            var nativeTrack = s.getTracks().find(function (t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        pc._transceive(pc.transceivers[sdpMLineIndex], false, isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) && (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters, 'controlling');
          }
          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        }

        pc._transceive(transceiver, direction === 'sendrecv' || direction === 'recvonly', direction === 'sendrecv' || direction === 'sendonly');

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        if (rtpReceiver && (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }
    Object.keys(streams).forEach(function (sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function () {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function (item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function (item) {
      if (item[2]) {
        return;
      }
      fireAddTrack(pc, item[0], item[1], []);
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function () {
      if (!(pc && pc.transceivers)) {
        return;
      }
      pc.transceivers.forEach(function (transceiver) {
        if (transceiver.iceTransport && transceiver.iceTransport.state === 'new' && transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' + 'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function () {
    this.transceivers.forEach(function (transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._isClosed = true;
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function (newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this._dispatchEvent('signalingstatechange', event);
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function () {
    var pc = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function () {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');
        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  };

  // Update the ice connection state.
  RTCPeerConnection.prototype._updateIceConnectionState = function () {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      states[transceiver.iceTransport.state]++;
    });

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this._dispatchEvent('iceconnectionstatechange', event);
    }
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function () {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      states[transceiver.iceTransport.state]++;
      states[transceiver.dtlsTransport.state]++;
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');
      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function () {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function (t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function (t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    var offerOptions = arguments[0];
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError('Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function (transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver('video');
        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
          return codec.name !== 'rtx';
        });
      }
      localCapabilities.codecs.forEach(function (codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' && codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }

        // for subsequent offers, we might have to re-use the payload
        // type of the last offer.
        if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function (remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() && codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function (hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function (rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' && !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities, 'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' && (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function () {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' || pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    var mediaSectionsInOffer = SDPUtils.getMediaSections(pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }
      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') {
            // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol + ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' + 'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' + 'a=rtpmap:120 VP8/90000\r\n';
        }
        sdp += 'c=IN IP4 0.0.0.0\r\n' + 'a=inactive\r\n' + 'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' && !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function (c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities, 'answer', transceiver.stream, pc._dtlsRole);
      if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
    var pc = this;
    var sections;
    if (candidate && !(candidate.sdpMLineIndex !== undefined || candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    }

    // TODO: needs to go into ops queue.
    return new Promise(function (resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError', 'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join('');
          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }
          var cand = Object.keys(candidate.candidate).length > 0 ? SDPUtils.parseCandidate(candidate.candidate) : {};
          // Ignore Chrome's invalid candidates since Edge does not like them.
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component && cand.component !== 1) {
            return resolve();
          }
          // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.
          if (sdpMLineIndex === 0 || sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError', 'Can not add ICE candidate'));
            }
          }

          // update the remoteDescription.
          var candidateString = candidate.candidate.trim();
          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' + (cand.type ? candidateString : 'end-of-candidates') + '\r\n';
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join('');
        } else {
          return reject(makeError('OperationError', 'Can not add ICE candidate'));
        }
      }
      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function (selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function (transceiver) {
        if (transceiver.rtpSender && transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });
      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }
      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function (transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport', 'dtlsTransport'].forEach(function (method) {
        if (transceiver[method]) {
          promises.push(transceiver[method].getStats());
        }
      });
    });
    return Promise.all(promises).then(function (allStats) {
      var results = new Map();
      allStats.forEach(function (stats) {
        stats.forEach(function (stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };

  // fix low-level stat names and return Map instead of object.
  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer', 'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function (ortcObjectName) {
    var obj = window[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function () {
        return nativeGetstats.apply(this).then(function (nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function (id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });

  // legacy callback shims. Should be moved to adapter.js some days.
  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;
      if (typeof args[0] === 'function' || typeof args[1] === 'function') {
        // legacy
        return nativeMethod.apply(this, [arguments[2]]).then(function (description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function (error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;
      if (typeof args[1] === 'function' || typeof args[2] === 'function') {
        // legacy
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function (error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.
  ['getStats'].forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;
      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  return RTCPeerConnection;
};

/***/ }),

/***/ "./node_modules/rtcpeerconnection/rtcpeerconnection.js":
/*!*************************************************************!*\
  !*** ./node_modules/rtcpeerconnection/rtcpeerconnection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var SJJ = __webpack_require__(/*! sdp-jingle-json */ "./node_modules/sdp-jingle-json/index.js");
var WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");
var cloneDeep = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");

function PeerConnection(config, constraints) {
    var self = this;
    var item;
    WildEmitter.call(this);

    config = config || {};
    config.iceServers = config.iceServers || [];

    // make sure this only gets enabled in Google Chrome
    // EXPERIMENTAL FLAG, might get removed without notice
    this.enableChromeNativeSimulcast = false;
    if (constraints && constraints.optional && window.chrome && navigator.appVersion.match(/Chromium\//) === null) {
        constraints.optional.forEach(function (constraint) {
            if (constraint.enableChromeNativeSimulcast) {
                self.enableChromeNativeSimulcast = true;
            }
        });
    }

    // EXPERIMENTAL FLAG, might get removed without notice
    this.enableMultiStreamHacks = false;
    if (constraints && constraints.optional && window.chrome) {
        constraints.optional.forEach(function (constraint) {
            if (constraint.enableMultiStreamHacks) {
                self.enableMultiStreamHacks = true;
            }
        });
    }
    // EXPERIMENTAL FLAG, might get removed without notice
    this.restrictBandwidth = 0;
    if (constraints && constraints.optional) {
        constraints.optional.forEach(function (constraint) {
            if (constraint.andyetRestrictBandwidth) {
                self.restrictBandwidth = constraint.andyetRestrictBandwidth;
            }
        });
    }

    // EXPERIMENTAL FLAG, might get removed without notice
    // bundle up ice candidates, only works for jingle mode
    // number > 0 is the delay to wait for additional candidates
    // ~20ms seems good
    this.batchIceCandidates = 0;
    if (constraints && constraints.optional) {
        constraints.optional.forEach(function (constraint) {
            if (constraint.andyetBatchIce) {
                self.batchIceCandidates = constraint.andyetBatchIce;
            }
        });
    }
    this.batchedIceCandidates = [];

    // EXPERIMENTAL FLAG, might get removed without notice
    // this attemps to strip out candidates with an already known foundation
    // and type -- i.e. those which are gathered via the same TURN server
    // but different transports (TURN udp, tcp and tls respectively)
    if (constraints && constraints.optional && window.chrome) {
        constraints.optional.forEach(function (constraint) {
            if (constraint.andyetFasterICE) {
                self.eliminateDuplicateCandidates = constraint.andyetFasterICE;
            }
        });
    }
    // EXPERIMENTAL FLAG, might get removed without notice
    // when using a server such as the jitsi videobridge we don't need to signal
    // our candidates
    if (constraints && constraints.optional) {
        constraints.optional.forEach(function (constraint) {
            if (constraint.andyetDontSignalCandidates) {
                self.dontSignalCandidates = constraint.andyetDontSignalCandidates;
            }
        });
    }

    // EXPERIMENTAL FLAG, might get removed without notice
    this.assumeSetLocalSuccess = false;
    if (constraints && constraints.optional) {
        constraints.optional.forEach(function (constraint) {
            if (constraint.andyetAssumeSetLocalSuccess) {
                self.assumeSetLocalSuccess = constraint.andyetAssumeSetLocalSuccess;
            }
        });
    }

    // EXPERIMENTAL FLAG, might get removed without notice
    // working around https://bugzilla.mozilla.org/show_bug.cgi?id=1087551
    // pass in a timeout for this
    if (window.navigator.mozGetUserMedia) {
        if (constraints && constraints.optional) {
            this.wtFirefox = 0;
            constraints.optional.forEach(function (constraint) {
                if (constraint.andyetFirefoxMakesMeSad) {
                    self.wtFirefox = constraint.andyetFirefoxMakesMeSad;
                    if (self.wtFirefox > 0) {
                        self.firefoxcandidatebuffer = [];
                    }
                }
            });
        }
    }

    this.pc = new RTCPeerConnection(config, constraints);

    if (typeof this.pc.getLocalStreams === 'function') {
        this.getLocalStreams = this.pc.getLocalStreams.bind(this.pc);
    } else {
        this.getLocalStreams = function () {
            return [];
        };
    }

    if (typeof this.pc.getRemoteStreams === 'function') {
        this.getRemoteStreams = this.pc.getRemoteStreams.bind(this.pc);
    } else {
        this.getRemoteStreams = function () {
            return [];
        };
    }

    this.addStream = this.pc.addStream.bind(this.pc);

    this.removeStream = function (stream) {
        if (typeof self.pc.removeStream === 'function') {
            self.pc.removeStream.apply(self.pc, arguments);
        } else if (typeof self.pc.removeTrack === 'function') {
            stream.getTracks().forEach(function (track) {
                self.pc.removeTrack(track);
            });
        }
    };

    if (typeof this.pc.removeTrack === 'function') {
        this.removeTrack = this.pc.removeTrack.bind(this.pc);
    }

    // proxy some events directly
    this.pc.onremovestream = this.emit.bind(this, 'removeStream');
    this.pc.onremovetrack = this.emit.bind(this, 'removeTrack');
    this.pc.onaddstream = this.emit.bind(this, 'addStream');
    this.pc.onnegotiationneeded = this.emit.bind(this, 'negotiationNeeded');
    this.pc.oniceconnectionstatechange = this.emit.bind(this, 'iceConnectionStateChange');
    this.pc.onsignalingstatechange = this.emit.bind(this, 'signalingStateChange');

    // handle ice candidate and data channel events
    this.pc.onicecandidate = this._onIce.bind(this);
    this.pc.ondatachannel = this._onDataChannel.bind(this);

    this.localDescription = {
        contents: []
    };
    this.remoteDescription = {
        contents: []
    };

    this.config = {
        debug: false,
        sid: '',
        isInitiator: true,
        sdpSessionID: Date.now(),
        useJingle: false
    };

    this.iceCredentials = {
        local: {},
        remote: {}
    };

    // apply our config
    for (item in config) {
        this.config[item] = config[item];
    }

    if (this.config.debug) {
        this.on('*', function () {
            var logger = config.logger || console;
            logger.log('PeerConnection event:', arguments);
        });
    }
    this.hadLocalStunCandidate = false;
    this.hadRemoteStunCandidate = false;
    this.hadLocalRelayCandidate = false;
    this.hadRemoteRelayCandidate = false;

    this.hadLocalIPv6Candidate = false;
    this.hadRemoteIPv6Candidate = false;

    // keeping references for all our data channels
    // so they dont get garbage collected
    // can be removed once the following bugs have been fixed
    // https://crbug.com/405545
    // https://bugzilla.mozilla.org/show_bug.cgi?id=964092
    // to be filed for opera
    this._remoteDataChannels = [];
    this._localDataChannels = [];

    this._candidateBuffer = [];
}

util.inherits(PeerConnection, WildEmitter);

Object.defineProperty(PeerConnection.prototype, 'signalingState', {
    get: function get() {
        return this.pc.signalingState;
    }
});
Object.defineProperty(PeerConnection.prototype, 'iceConnectionState', {
    get: function get() {
        return this.pc.iceConnectionState;
    }
});

PeerConnection.prototype._role = function () {
    return this.isInitiator ? 'initiator' : 'responder';
};

// Add a stream to the peer connection object
PeerConnection.prototype.addStream = function (stream) {
    this.localStream = stream;
    this.pc.addStream(stream);
};

// helper function to check if a remote candidate is a stun/relay
// candidate or an ipv6 candidate
PeerConnection.prototype._checkLocalCandidate = function (candidate) {
    var cand = SJJ.toCandidateJSON(candidate);
    if (cand.type == 'srflx') {
        this.hadLocalStunCandidate = true;
    } else if (cand.type == 'relay') {
        this.hadLocalRelayCandidate = true;
    }
    if (cand.ip.indexOf(':') != -1) {
        this.hadLocalIPv6Candidate = true;
    }
};

// helper function to check if a remote candidate is a stun/relay
// candidate or an ipv6 candidate
PeerConnection.prototype._checkRemoteCandidate = function (candidate) {
    var cand = SJJ.toCandidateJSON(candidate);
    if (cand.type == 'srflx') {
        this.hadRemoteStunCandidate = true;
    } else if (cand.type == 'relay') {
        this.hadRemoteRelayCandidate = true;
    }
    if (cand.ip.indexOf(':') != -1) {
        this.hadRemoteIPv6Candidate = true;
    }
};

// Init and add ice candidate object with correct constructor
PeerConnection.prototype.processIce = function (update, cb) {
    cb = cb || function () {};
    var self = this;

    // ignore any added ice candidates to avoid errors. why does the
    // spec not do this?
    if (this.pc.signalingState === 'closed') return cb();

    if (update.contents || update.jingle && update.jingle.contents) {
        var contentNames = this.remoteDescription.contents.map(function (c) {
            return c.name;
        });
        var contents = update.contents || update.jingle.contents;

        contents.forEach(function (content) {
            var transport = content.transport || {};
            var candidates = transport.candidates || [];
            var mline = contentNames.indexOf(content.name);
            var mid = content.name;
            var remoteContent = self.remoteDescription.contents.find(function (c) {
                return c.name === content.name;
            });

            // process candidates as a callback, in case we need to
            // update ufrag and pwd with offer/answer
            var processCandidates = function processCandidates() {
                candidates.forEach(function (candidate) {
                    var iceCandidate = SJJ.toCandidateSDP(candidate);
                    self.pc.addIceCandidate(new RTCIceCandidate({
                        candidate: iceCandidate,
                        sdpMLineIndex: mline,
                        sdpMid: mid
                    }), function () {
                        // well, this success callback is pretty meaningless
                    }, function (err) {
                        self.emit('error', err);
                    });
                    self._checkRemoteCandidate(iceCandidate);
                });
                cb();
            };

            if (self.iceCredentials.remote[content.name] && transport.ufrag && self.iceCredentials.remote[content.name].ufrag !== transport.ufrag) {
                if (remoteContent) {
                    remoteContent.transport.ufrag = transport.ufrag;
                    remoteContent.transport.pwd = transport.pwd;
                    var offer = {
                        type: 'offer',
                        jingle: self.remoteDescription
                    };
                    offer.sdp = SJJ.toSessionSDP(offer.jingle, {
                        sid: self.config.sdpSessionID,
                        role: self._role(),
                        direction: 'incoming'
                    });
                    self.pc.setRemoteDescription(new RTCSessionDescription(offer), function () {
                        processCandidates();
                    }, function (err) {
                        self.emit('error', err);
                    });
                } else {
                    self.emit('error', 'ice restart failed to find matching content');
                }
            } else {
                processCandidates();
            }
        });
    } else {
        // working around https://code.google.com/p/webrtc/issues/detail?id=3669
        if (update.candidate && update.candidate.candidate.indexOf('a=') !== 0) {
            update.candidate.candidate = 'a=' + update.candidate.candidate;
        }

        if (this.wtFirefox && this.firefoxcandidatebuffer !== null) {
            // we cant add this yet due to https://bugzilla.mozilla.org/show_bug.cgi?id=1087551
            if (this.pc.localDescription && this.pc.localDescription.type === 'offer') {
                this.firefoxcandidatebuffer.push(update.candidate);
                return cb();
            }
        }

        self.pc.addIceCandidate(new RTCIceCandidate(update.candidate), function () {}, function (err) {
            self.emit('error', err);
        });
        self._checkRemoteCandidate(update.candidate.candidate);
        cb();
    }
};

// Generate and emit an offer with the given constraints
PeerConnection.prototype.offer = function (constraints, cb) {
    var self = this;
    var hasConstraints = arguments.length === 2;
    var mediaConstraints = hasConstraints && constraints ? constraints : {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1
    };
    cb = hasConstraints ? cb : constraints;
    cb = cb || function () {};

    if (this.pc.signalingState === 'closed') return cb('Already closed');

    // Actually generate the offer
    this.pc.createOffer(function (offer) {
        // does not work for jingle, but jingle.js doesn't need
        // this hack...
        var expandedOffer = {
            type: 'offer',
            sdp: offer.sdp
        };
        if (self.assumeSetLocalSuccess) {
            self.emit('offer', expandedOffer);
            cb(null, expandedOffer);
        }
        self._candidateBuffer = [];
        self.pc.setLocalDescription(offer, function () {
            var jingle;
            if (self.config.useJingle) {
                jingle = SJJ.toSessionJSON(offer.sdp, {
                    role: self._role(),
                    direction: 'outgoing'
                });
                jingle.sid = self.config.sid;
                self.localDescription = jingle;

                // Save ICE credentials
                jingle.contents.forEach(function (content) {
                    var transport = content.transport || {};
                    if (transport.ufrag) {
                        self.iceCredentials.local[content.name] = {
                            ufrag: transport.ufrag,
                            pwd: transport.pwd
                        };
                    }
                });

                expandedOffer.jingle = jingle;
            }
            expandedOffer.sdp.split('\r\n').forEach(function (line) {
                if (line.indexOf('a=candidate:') === 0) {
                    self._checkLocalCandidate(line);
                }
            });

            if (!self.assumeSetLocalSuccess) {
                self.emit('offer', expandedOffer);
                cb(null, expandedOffer);
            }
        }, function (err) {
            self.emit('error', err);
            cb(err);
        });
    }, function (err) {
        self.emit('error', err);
        cb(err);
    }, mediaConstraints);
};

// Process an incoming offer so that ICE may proceed before deciding
// to answer the request.
PeerConnection.prototype.handleOffer = function (offer, cb) {
    cb = cb || function () {};
    var self = this;
    offer.type = 'offer';
    if (offer.jingle) {
        if (this.enableChromeNativeSimulcast) {
            offer.jingle.contents.forEach(function (content) {
                if (content.name === 'video') {
                    content.application.googConferenceFlag = true;
                }
            });
        }
        if (this.enableMultiStreamHacks) {
            // add a mixed video stream as first stream
            offer.jingle.contents.forEach(function (content) {
                if (content.name === 'video') {
                    var sources = content.application.sources || [];
                    if (sources.length === 0 || sources[0].ssrc !== "3735928559") {
                        sources.unshift({
                            ssrc: "3735928559", // 0xdeadbeef
                            parameters: [{
                                key: "cname",
                                value: "deadbeef"
                            }, {
                                key: "msid",
                                value: "mixyourfecintothis please"
                            }]
                        });
                        content.application.sources = sources;
                    }
                }
            });
        }
        if (self.restrictBandwidth > 0) {
            if (offer.jingle.contents.length >= 2 && offer.jingle.contents[1].name === 'video') {
                var content = offer.jingle.contents[1];
                var hasBw = content.application && content.application.bandwidth && content.application.bandwidth.bandwidth;
                if (!hasBw) {
                    offer.jingle.contents[1].application.bandwidth = { type: 'AS', bandwidth: self.restrictBandwidth.toString() };
                    offer.sdp = SJJ.toSessionSDP(offer.jingle, {
                        sid: self.config.sdpSessionID,
                        role: self._role(),
                        direction: 'outgoing'
                    });
                }
            }
        }
        // Save ICE credentials
        offer.jingle.contents.forEach(function (content) {
            var transport = content.transport || {};
            if (transport.ufrag) {
                self.iceCredentials.remote[content.name] = {
                    ufrag: transport.ufrag,
                    pwd: transport.pwd
                };
            }
        });
        offer.sdp = SJJ.toSessionSDP(offer.jingle, {
            sid: self.config.sdpSessionID,
            role: self._role(),
            direction: 'incoming'
        });
        self.remoteDescription = offer.jingle;
    }
    offer.sdp.split('\r\n').forEach(function (line) {
        if (line.indexOf('a=candidate:') === 0) {
            self._checkRemoteCandidate(line);
        }
    });
    self.pc.setRemoteDescription(new RTCSessionDescription(offer), function () {
        cb();
    }, cb);
};

// Answer an offer with audio only
PeerConnection.prototype.answerAudioOnly = function (cb) {
    var mediaConstraints = {
        mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
        }
    };
    this._answer(mediaConstraints, cb);
};

// Answer an offer without offering to recieve
PeerConnection.prototype.answerBroadcastOnly = function (cb) {
    var mediaConstraints = {
        mandatory: {
            OfferToReceiveAudio: false,
            OfferToReceiveVideo: false
        }
    };
    this._answer(mediaConstraints, cb);
};

// Answer an offer with given constraints default is audio/video
PeerConnection.prototype.answer = function (constraints, cb) {
    var hasConstraints = arguments.length === 2;
    var callback = hasConstraints ? cb : constraints;
    var mediaConstraints = hasConstraints && constraints ? constraints : {
        mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
        }
    };

    this._answer(mediaConstraints, callback);
};

// Process an answer
PeerConnection.prototype.handleAnswer = function (answer, cb) {
    cb = cb || function () {};
    var self = this;
    if (answer.jingle) {
        answer.sdp = SJJ.toSessionSDP(answer.jingle, {
            sid: self.config.sdpSessionID,
            role: self._role(),
            direction: 'incoming'
        });
        self.remoteDescription = answer.jingle;

        // Save ICE credentials
        answer.jingle.contents.forEach(function (content) {
            var transport = content.transport || {};
            if (transport.ufrag) {
                self.iceCredentials.remote[content.name] = {
                    ufrag: transport.ufrag,
                    pwd: transport.pwd
                };
            }
        });
    }
    answer.sdp.split('\r\n').forEach(function (line) {
        if (line.indexOf('a=candidate:') === 0) {
            self._checkRemoteCandidate(line);
        }
    });
    self.pc.setRemoteDescription(new RTCSessionDescription(answer), function () {
        if (self.wtFirefox) {
            window.setTimeout(function () {
                self.firefoxcandidatebuffer.forEach(function (candidate) {
                    // add candidates later
                    self.pc.addIceCandidate(new RTCIceCandidate(candidate), function () {}, function (err) {
                        self.emit('error', err);
                    });
                    self._checkRemoteCandidate(candidate.candidate);
                });
                self.firefoxcandidatebuffer = null;
            }, self.wtFirefox);
        }
        cb(null);
    }, cb);
};

// Close the peer connection
PeerConnection.prototype.close = function () {
    this.pc.close();

    this._localDataChannels = [];
    this._remoteDataChannels = [];

    this.emit('close');
};

// Internal code sharing for various types of answer methods
PeerConnection.prototype._answer = function (constraints, cb) {
    cb = cb || function () {};
    var self = this;
    if (!this.pc.remoteDescription) {
        // the old API is used, call handleOffer
        throw new Error('remoteDescription not set');
    }

    if (this.pc.signalingState === 'closed') return cb('Already closed');

    self.pc.createAnswer(function (answer) {
        var sim = [];
        if (self.enableChromeNativeSimulcast) {
            // native simulcast part 1: add another SSRC
            answer.jingle = SJJ.toSessionJSON(answer.sdp, {
                role: self._role(),
                direction: 'outgoing'
            });
            if (answer.jingle.contents.length >= 2 && answer.jingle.contents[1].name === 'video') {
                var groups = answer.jingle.contents[1].application.sourceGroups || [];
                var hasSim = false;
                groups.forEach(function (group) {
                    if (group.semantics == 'SIM') hasSim = true;
                });
                if (!hasSim && answer.jingle.contents[1].application.sources.length) {
                    var newssrc = JSON.parse(JSON.stringify(answer.jingle.contents[1].application.sources[0]));
                    newssrc.ssrc = '' + Math.floor(Math.random() * 0xffffffff); // FIXME: look for conflicts
                    answer.jingle.contents[1].application.sources.push(newssrc);

                    sim.push(answer.jingle.contents[1].application.sources[0].ssrc);
                    sim.push(newssrc.ssrc);
                    groups.push({
                        semantics: 'SIM',
                        sources: sim
                    });

                    // also create an RTX one for the SIM one
                    var rtxssrc = JSON.parse(JSON.stringify(newssrc));
                    rtxssrc.ssrc = '' + Math.floor(Math.random() * 0xffffffff); // FIXME: look for conflicts
                    answer.jingle.contents[1].application.sources.push(rtxssrc);
                    groups.push({
                        semantics: 'FID',
                        sources: [newssrc.ssrc, rtxssrc.ssrc]
                    });

                    answer.jingle.contents[1].application.sourceGroups = groups;
                    answer.sdp = SJJ.toSessionSDP(answer.jingle, {
                        sid: self.config.sdpSessionID,
                        role: self._role(),
                        direction: 'outgoing'
                    });
                }
            }
        }
        var expandedAnswer = {
            type: 'answer',
            sdp: answer.sdp
        };
        if (self.assumeSetLocalSuccess) {
            // not safe to do when doing simulcast mangling
            var copy = cloneDeep(expandedAnswer);
            self.emit('answer', copy);
            cb(null, copy);
        }
        self._candidateBuffer = [];
        self.pc.setLocalDescription(answer, function () {
            if (self.config.useJingle) {
                var jingle = SJJ.toSessionJSON(answer.sdp, {
                    role: self._role(),
                    direction: 'outgoing'
                });
                jingle.sid = self.config.sid;
                self.localDescription = jingle;
                expandedAnswer.jingle = jingle;
            }
            if (self.enableChromeNativeSimulcast) {
                // native simulcast part 2:
                // signal multiple tracks to the receiver
                // for anything in the SIM group
                if (!expandedAnswer.jingle) {
                    expandedAnswer.jingle = SJJ.toSessionJSON(answer.sdp, {
                        role: self._role(),
                        direction: 'outgoing'
                    });
                }
                expandedAnswer.jingle.contents[1].application.sources.forEach(function (source, idx) {
                    // the floor idx/2 is a hack that relies on a particular order
                    // of groups, alternating between sim and rtx
                    source.parameters = source.parameters.map(function (parameter) {
                        if (parameter.key === 'msid') {
                            parameter.value += '-' + Math.floor(idx / 2);
                        }
                        return parameter;
                    });
                });
                expandedAnswer.sdp = SJJ.toSessionSDP(expandedAnswer.jingle, {
                    sid: self.sdpSessionID,
                    role: self._role(),
                    direction: 'outgoing'
                });
            }
            expandedAnswer.sdp.split('\r\n').forEach(function (line) {
                if (line.indexOf('a=candidate:') === 0) {
                    self._checkLocalCandidate(line);
                }
            });
            if (!self.assumeSetLocalSuccess) {
                var copy = cloneDeep(expandedAnswer);
                self.emit('answer', copy);
                cb(null, copy);
            }
        }, function (err) {
            self.emit('error', err);
            cb(err);
        });
    }, function (err) {
        self.emit('error', err);
        cb(err);
    }, constraints);
};

// Internal method for emitting ice candidates on our peer object
PeerConnection.prototype._onIce = function (event) {
    var self = this;
    if (event.candidate) {
        if (this.dontSignalCandidates) return;
        var ice = event.candidate;

        var expandedCandidate = {
            candidate: {
                candidate: ice.candidate,
                sdpMid: ice.sdpMid,
                sdpMLineIndex: ice.sdpMLineIndex
            }
        };
        this._checkLocalCandidate(ice.candidate);

        var cand = SJJ.toCandidateJSON(ice.candidate);

        var already;
        var idx;
        if (this.eliminateDuplicateCandidates && cand.type === 'relay') {
            // drop candidates with same foundation, component
            // take local type pref into account so we don't ignore udp
            // ones when we know about a TCP one. unlikely but...
            already = this._candidateBuffer.filter(function (c) {
                return c.type === 'relay';
            }).map(function (c) {
                return c.foundation + ':' + c.component;
            });
            idx = already.indexOf(cand.foundation + ':' + cand.component);
            // remember: local type pref of udp is 0, tcp 1, tls 2
            if (idx > -1 && cand.priority >> 24 >= already[idx].priority >> 24) {
                // drop it, same foundation with higher (worse) type pref
                return;
            }
        }
        if (this.config.bundlePolicy === 'max-bundle') {
            // drop candidates which are duplicate for audio/video/data
            // duplicate means same host/port but different sdpMid
            already = this._candidateBuffer.filter(function (c) {
                return cand.type === c.type;
            }).map(function (cand) {
                return cand.address + ':' + cand.port;
            });
            idx = already.indexOf(cand.address + ':' + cand.port);
            if (idx > -1) return;
        }
        // also drop rtcp candidates since we know the peer supports RTCP-MUX
        // this is a workaround until browsers implement this natively
        if (this.config.rtcpMuxPolicy === 'require' && cand.component === '2') {
            return;
        }
        this._candidateBuffer.push(cand);

        if (self.config.useJingle) {
            if (!ice.sdpMid) {
                // firefox doesn't set this
                if (self.pc.remoteDescription && self.pc.remoteDescription.type === 'offer') {
                    // preserve name from remote
                    ice.sdpMid = self.remoteDescription.contents[ice.sdpMLineIndex].name;
                } else {
                    ice.sdpMid = self.localDescription.contents[ice.sdpMLineIndex].name;
                }
            }
            if (!self.iceCredentials.local[ice.sdpMid]) {
                var jingle = SJJ.toSessionJSON(self.pc.localDescription.sdp, {
                    role: self._role(),
                    direction: 'outgoing'
                });
                jingle.contents.forEach(function (content) {
                    var transport = content.transport || {};
                    if (transport.ufrag) {
                        self.iceCredentials.local[content.name] = {
                            ufrag: transport.ufrag,
                            pwd: transport.pwd
                        };
                    }
                });
            }
            expandedCandidate.jingle = {
                contents: [{
                    name: ice.sdpMid,
                    creator: self._role(),
                    transport: {
                        transportType: 'iceUdp',
                        ufrag: self.iceCredentials.local[ice.sdpMid].ufrag,
                        pwd: self.iceCredentials.local[ice.sdpMid].pwd,
                        candidates: [cand]
                    }
                }]
            };
            if (self.batchIceCandidates > 0) {
                if (self.batchedIceCandidates.length === 0) {
                    window.setTimeout(function () {
                        var contents = {};
                        self.batchedIceCandidates.forEach(function (content) {
                            content = content.contents[0];
                            if (!contents[content.name]) contents[content.name] = content;
                            contents[content.name].transport.candidates.push(content.transport.candidates[0]);
                        });
                        var newCand = {
                            jingle: {
                                contents: []
                            }
                        };
                        Object.keys(contents).forEach(function (name) {
                            newCand.jingle.contents.push(contents[name]);
                        });
                        self.batchedIceCandidates = [];
                        self.emit('ice', newCand);
                    }, self.batchIceCandidates);
                }
                self.batchedIceCandidates.push(expandedCandidate.jingle);
                return;
            }
        }
        this.emit('ice', expandedCandidate);
    } else {
        this.emit('endOfCandidates');
    }
};

// Internal method for processing a new data channel being added by the
// other peer.
PeerConnection.prototype._onDataChannel = function (event) {
    // make sure we keep a reference so this doesn't get garbage collected
    var channel = event.channel;
    this._remoteDataChannels.push(channel);

    this.emit('addChannel', channel);
};

// Create a data channel spec reference:
// http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCDataChannelInit
PeerConnection.prototype.createDataChannel = function (name, opts) {
    var channel = this.pc.createDataChannel(name, opts);

    // make sure we keep a reference so this doesn't get garbage collected
    this._localDataChannels.push(channel);

    return channel;
};

PeerConnection.prototype.getStats = function () {
    if (typeof arguments[0] === 'function') {
        var cb = arguments[0];
        this.pc.getStats().then(function (res) {
            cb(null, res);
        }, function (err) {
            cb(err);
        });
    } else {
        return this.pc.getStats.apply(this.pc, arguments);
    }
};

module.exports = PeerConnection;

/***/ }),

/***/ "./node_modules/sdp-jingle-json/index.js":
/*!***********************************************!*\
  !*** ./node_modules/sdp-jingle-json/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toSDP = __webpack_require__(/*! ./lib/tosdp */ "./node_modules/sdp-jingle-json/lib/tosdp.js");
var toJSON = __webpack_require__(/*! ./lib/tojson */ "./node_modules/sdp-jingle-json/lib/tojson.js");

// Converstion from JSON to SDP

exports.toIncomingSDPOffer = function (session) {
    return toSDP.toSessionSDP(session, {
        role: 'responder',
        direction: 'incoming'
    });
};
exports.toOutgoingSDPOffer = function (session) {
    return toSDP.toSessionSDP(session, {
        role: 'initiator',
        direction: 'outgoing'
    });
};
exports.toIncomingSDPAnswer = function (session) {
    return toSDP.toSessionSDP(session, {
        role: 'initiator',
        direction: 'incoming'
    });
};
exports.toOutgoingSDPAnswer = function (session) {
    return toSDP.toSessionSDP(session, {
        role: 'responder',
        direction: 'outgoing'
    });
};
exports.toIncomingMediaSDPOffer = function (media) {
    return toSDP.toMediaSDP(media, {
        role: 'responder',
        direction: 'incoming'
    });
};
exports.toOutgoingMediaSDPOffer = function (media) {
    return toSDP.toMediaSDP(media, {
        role: 'initiator',
        direction: 'outgoing'
    });
};
exports.toIncomingMediaSDPAnswer = function (media) {
    return toSDP.toMediaSDP(media, {
        role: 'initiator',
        direction: 'incoming'
    });
};
exports.toOutgoingMediaSDPAnswer = function (media) {
    return toSDP.toMediaSDP(media, {
        role: 'responder',
        direction: 'outgoing'
    });
};
exports.toCandidateSDP = toSDP.toCandidateSDP;
exports.toMediaSDP = toSDP.toMediaSDP;
exports.toSessionSDP = toSDP.toSessionSDP;

// Conversion from SDP to JSON

exports.toIncomingJSONOffer = function (sdp, creators) {
    return toJSON.toSessionJSON(sdp, {
        role: 'responder',
        direction: 'incoming',
        creators: creators
    });
};
exports.toOutgoingJSONOffer = function (sdp, creators) {
    return toJSON.toSessionJSON(sdp, {
        role: 'initiator',
        direction: 'outgoing',
        creators: creators
    });
};
exports.toIncomingJSONAnswer = function (sdp, creators) {
    return toJSON.toSessionJSON(sdp, {
        role: 'initiator',
        direction: 'incoming',
        creators: creators
    });
};
exports.toOutgoingJSONAnswer = function (sdp, creators) {
    return toJSON.toSessionJSON(sdp, {
        role: 'responder',
        direction: 'outgoing',
        creators: creators
    });
};
exports.toIncomingMediaJSONOffer = function (sdp, creator) {
    return toJSON.toMediaJSON(sdp, {
        role: 'responder',
        direction: 'incoming',
        creator: creator
    });
};
exports.toOutgoingMediaJSONOffer = function (sdp, creator) {
    return toJSON.toMediaJSON(sdp, {
        role: 'initiator',
        direction: 'outgoing',
        creator: creator
    });
};
exports.toIncomingMediaJSONAnswer = function (sdp, creator) {
    return toJSON.toMediaJSON(sdp, {
        role: 'initiator',
        direction: 'incoming',
        creator: creator
    });
};
exports.toOutgoingMediaJSONAnswer = function (sdp, creator) {
    return toJSON.toMediaJSON(sdp, {
        role: 'responder',
        direction: 'outgoing',
        creator: creator
    });
};
exports.toCandidateJSON = toJSON.toCandidateJSON;
exports.toMediaJSON = toJSON.toMediaJSON;
exports.toSessionJSON = toJSON.toSessionJSON;

/***/ }),

/***/ "./node_modules/sdp-jingle-json/lib/parsers.js":
/*!*****************************************************!*\
  !*** ./node_modules/sdp-jingle-json/lib/parsers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.lines = function (sdp) {
    return sdp.split(/\r?\n/).filter(function (line) {
        return line.length > 0;
    });
};

exports.findLine = function (prefix, mediaLines, sessionLines) {
    var prefixLength = prefix.length;
    for (var i = 0; i < mediaLines.length; i++) {
        if (mediaLines[i].substr(0, prefixLength) === prefix) {
            return mediaLines[i];
        }
    }
    // Continue searching in parent session section
    if (!sessionLines) {
        return false;
    }

    for (var j = 0; j < sessionLines.length; j++) {
        if (sessionLines[j].substr(0, prefixLength) === prefix) {
            return sessionLines[j];
        }
    }

    return false;
};

exports.findLines = function (prefix, mediaLines, sessionLines) {
    var results = [];
    var prefixLength = prefix.length;
    for (var i = 0; i < mediaLines.length; i++) {
        if (mediaLines[i].substr(0, prefixLength) === prefix) {
            results.push(mediaLines[i]);
        }
    }
    if (results.length || !sessionLines) {
        return results;
    }
    for (var j = 0; j < sessionLines.length; j++) {
        if (sessionLines[j].substr(0, prefixLength) === prefix) {
            results.push(sessionLines[j]);
        }
    }
    return results;
};

exports.mline = function (line) {
    var parts = line.substr(2).split(' ');
    var parsed = {
        media: parts[0],
        port: parts[1],
        proto: parts[2],
        formats: []
    };
    for (var i = 3; i < parts.length; i++) {
        if (parts[i]) {
            parsed.formats.push(parts[i]);
        }
    }
    return parsed;
};

exports.rtpmap = function (line) {
    var parts = line.substr(9).split(' ');
    var parsed = {
        id: parts.shift()
    };

    parts = parts[0].split('/');

    parsed.name = parts[0];
    parsed.clockrate = parts[1];
    parsed.channels = parts.length == 3 ? parts[2] : '1';
    return parsed;
};

exports.sctpmap = function (line) {
    // based on -05 draft
    var parts = line.substr(10).split(' ');
    var parsed = {
        number: parts.shift(),
        protocol: parts.shift(),
        streams: parts.shift()
    };
    return parsed;
};

exports.fmtp = function (line) {
    var kv, key, value;
    var parts = line.substr(line.indexOf(' ') + 1).split(';');
    var parsed = [];
    for (var i = 0; i < parts.length; i++) {
        kv = parts[i].split('=');
        key = kv[0].trim();
        value = kv[1];
        if (key && value) {
            parsed.push({ key: key, value: value });
        } else if (key) {
            parsed.push({ key: '', value: key });
        }
    }
    return parsed;
};

exports.crypto = function (line) {
    var parts = line.substr(9).split(' ');
    var parsed = {
        tag: parts[0],
        cipherSuite: parts[1],
        keyParams: parts[2],
        sessionParams: parts.slice(3).join(' ')
    };
    return parsed;
};

exports.fingerprint = function (line) {
    var parts = line.substr(14).split(' ');
    return {
        hash: parts[0],
        value: parts[1]
    };
};

exports.extmap = function (line) {
    var parts = line.substr(9).split(' ');
    var parsed = {};

    var idpart = parts.shift();
    var sp = idpart.indexOf('/');
    if (sp >= 0) {
        parsed.id = idpart.substr(0, sp);
        parsed.senders = idpart.substr(sp + 1);
    } else {
        parsed.id = idpart;
        parsed.senders = 'sendrecv';
    }

    parsed.uri = parts.shift() || '';

    return parsed;
};

exports.rtcpfb = function (line) {
    var parts = line.substr(10).split(' ');
    var parsed = {};
    parsed.id = parts.shift();
    parsed.type = parts.shift();
    if (parsed.type === 'trr-int') {
        parsed.value = parts.shift();
    } else {
        parsed.subtype = parts.shift() || '';
    }
    parsed.parameters = parts;
    return parsed;
};

exports.candidate = function (line) {
    var parts;
    if (line.indexOf('a=candidate:') === 0) {
        parts = line.substring(12).split(' ');
    } else {
        // no a=candidate
        parts = line.substring(10).split(' ');
    }

    var candidate = {
        foundation: parts[0],
        component: parts[1],
        protocol: parts[2].toLowerCase(),
        priority: parts[3],
        ip: parts[4],
        port: parts[5],
        // skip parts[6] == 'typ'
        type: parts[7],
        generation: '0'
    };

    for (var i = 8; i < parts.length; i += 2) {
        if (parts[i] === 'raddr') {
            candidate.relAddr = parts[i + 1];
        } else if (parts[i] === 'rport') {
            candidate.relPort = parts[i + 1];
        } else if (parts[i] === 'generation') {
            candidate.generation = parts[i + 1];
        } else if (parts[i] === 'tcptype') {
            candidate.tcpType = parts[i + 1];
        }
    }

    candidate.network = '1';

    return candidate;
};

exports.sourceGroups = function (lines) {
    var parsed = [];
    for (var i = 0; i < lines.length; i++) {
        var parts = lines[i].substr(13).split(' ');
        parsed.push({
            semantics: parts.shift(),
            sources: parts
        });
    }
    return parsed;
};

exports.sources = function (lines) {
    // http://tools.ietf.org/html/rfc5576
    var parsed = [];
    var sources = {};
    for (var i = 0; i < lines.length; i++) {
        var parts = lines[i].substr(7).split(' ');
        var ssrc = parts.shift();

        if (!sources[ssrc]) {
            var source = {
                ssrc: ssrc,
                parameters: []
            };
            parsed.push(source);

            // Keep an index
            sources[ssrc] = source;
        }

        parts = parts.join(' ').split(':');
        var attribute = parts.shift();
        var value = parts.join(':') || null;

        sources[ssrc].parameters.push({
            key: attribute,
            value: value
        });
    }

    return parsed;
};

exports.groups = function (lines) {
    // http://tools.ietf.org/html/rfc5888
    var parsed = [];
    var parts;
    for (var i = 0; i < lines.length; i++) {
        parts = lines[i].substr(8).split(' ');
        parsed.push({
            semantics: parts.shift(),
            contents: parts
        });
    }
    return parsed;
};

exports.bandwidth = function (line) {
    var parts = line.substr(2).split(':');
    var parsed = {};
    parsed.type = parts.shift();
    parsed.bandwidth = parts.shift();
    return parsed;
};

exports.msid = function (line) {
    var data = line.substr(7);
    var parts = data.split(' ');
    return {
        msid: data,
        mslabel: parts[0],
        label: parts[1]
    };
};

/***/ }),

/***/ "./node_modules/sdp-jingle-json/lib/senders.js":
/*!*****************************************************!*\
  !*** ./node_modules/sdp-jingle-json/lib/senders.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    initiator: {
        incoming: {
            initiator: 'recvonly',
            responder: 'sendonly',
            both: 'sendrecv',
            none: 'inactive',
            recvonly: 'initiator',
            sendonly: 'responder',
            sendrecv: 'both',
            inactive: 'none'
        },
        outgoing: {
            initiator: 'sendonly',
            responder: 'recvonly',
            both: 'sendrecv',
            none: 'inactive',
            recvonly: 'responder',
            sendonly: 'initiator',
            sendrecv: 'both',
            inactive: 'none'
        }
    },
    responder: {
        incoming: {
            initiator: 'sendonly',
            responder: 'recvonly',
            both: 'sendrecv',
            none: 'inactive',
            recvonly: 'responder',
            sendonly: 'initiator',
            sendrecv: 'both',
            inactive: 'none'
        },
        outgoing: {
            initiator: 'recvonly',
            responder: 'sendonly',
            both: 'sendrecv',
            none: 'inactive',
            recvonly: 'initiator',
            sendonly: 'responder',
            sendrecv: 'both',
            inactive: 'none'
        }
    }
};

/***/ }),

/***/ "./node_modules/sdp-jingle-json/lib/tojson.js":
/*!****************************************************!*\
  !*** ./node_modules/sdp-jingle-json/lib/tojson.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SENDERS = __webpack_require__(/*! ./senders */ "./node_modules/sdp-jingle-json/lib/senders.js");
var parsers = __webpack_require__(/*! ./parsers */ "./node_modules/sdp-jingle-json/lib/parsers.js");
var idCounter = Math.random();

exports._setIdCounter = function (counter) {
    idCounter = counter;
};

exports.toSessionJSON = function (sdp, opts) {
    var i;
    var creators = opts.creators || [];
    var role = opts.role || 'initiator';
    var direction = opts.direction || 'outgoing';

    // Divide the SDP into session and media sections.
    var media = sdp.split(/\r?\nm=/);
    for (i = 1; i < media.length; i++) {
        media[i] = 'm=' + media[i];
        if (i !== media.length - 1) {
            media[i] += '\r\n';
        }
    }
    var session = media.shift() + '\r\n';
    var sessionLines = parsers.lines(session);
    var parsed = {};

    var contents = [];
    for (i = 0; i < media.length; i++) {
        contents.push(exports.toMediaJSON(media[i], session, {
            role: role,
            direction: direction,
            creator: creators[i] || 'initiator'
        }));
    }
    parsed.contents = contents;

    var groupLines = parsers.findLines('a=group:', sessionLines);
    if (groupLines.length) {
        parsed.groups = parsers.groups(groupLines);
    }

    return parsed;
};

exports.toMediaJSON = function (media, session, opts) {
    var creator = opts.creator || 'initiator';
    var role = opts.role || 'initiator';
    var direction = opts.direction || 'outgoing';

    var lines = parsers.lines(media);
    var sessionLines = parsers.lines(session);
    var mline = parsers.mline(lines[0]);

    var content = {
        creator: creator,
        name: mline.media,
        application: {
            applicationType: 'rtp',
            media: mline.media,
            payloads: [],
            encryption: [],
            feedback: [],
            headerExtensions: []
        },
        transport: {
            transportType: 'iceUdp',
            candidates: [],
            fingerprints: []
        }
    };
    if (mline.media == 'application') {
        // FIXME: the description is most likely to be independent
        // of the SDP and should be processed by other parts of the library
        content.application = {
            applicationType: 'datachannel'
        };
        content.transport.sctp = [];
    }
    var desc = content.application;
    var trans = content.transport;

    // If we have a mid, use that for the content name instead.
    var mid = parsers.findLine('a=mid:', lines);
    if (mid) {
        content.name = mid.substr(6);
    }

    if (parsers.findLine('a=sendrecv', lines, sessionLines)) {
        content.senders = 'both';
    } else if (parsers.findLine('a=sendonly', lines, sessionLines)) {
        content.senders = SENDERS[role][direction].sendonly;
    } else if (parsers.findLine('a=recvonly', lines, sessionLines)) {
        content.senders = SENDERS[role][direction].recvonly;
    } else if (parsers.findLine('a=inactive', lines, sessionLines)) {
        content.senders = 'none';
    }

    if (desc.applicationType == 'rtp') {
        var bandwidth = parsers.findLine('b=', lines);
        if (bandwidth) {
            desc.bandwidth = parsers.bandwidth(bandwidth);
        }

        var ssrc = parsers.findLine('a=ssrc:', lines);
        if (ssrc) {
            desc.ssrc = ssrc.substr(7).split(' ')[0];
        }

        var rtpmapLines = parsers.findLines('a=rtpmap:', lines);
        rtpmapLines.forEach(function (line) {
            var payload = parsers.rtpmap(line);
            payload.parameters = [];
            payload.feedback = [];

            var fmtpLines = parsers.findLines('a=fmtp:' + payload.id, lines);
            // There should only be one fmtp line per payload
            fmtpLines.forEach(function (line) {
                payload.parameters = parsers.fmtp(line);
            });

            var fbLines = parsers.findLines('a=rtcp-fb:' + payload.id, lines);
            fbLines.forEach(function (line) {
                payload.feedback.push(parsers.rtcpfb(line));
            });

            desc.payloads.push(payload);
        });

        var cryptoLines = parsers.findLines('a=crypto:', lines, sessionLines);
        cryptoLines.forEach(function (line) {
            desc.encryption.push(parsers.crypto(line));
        });

        if (parsers.findLine('a=rtcp-mux', lines)) {
            desc.mux = true;
        }

        var fbLines = parsers.findLines('a=rtcp-fb:*', lines);
        fbLines.forEach(function (line) {
            desc.feedback.push(parsers.rtcpfb(line));
        });

        var extLines = parsers.findLines('a=extmap:', lines);
        extLines.forEach(function (line) {
            var ext = parsers.extmap(line);

            ext.senders = SENDERS[role][direction][ext.senders];

            desc.headerExtensions.push(ext);
        });

        var ssrcGroupLines = parsers.findLines('a=ssrc-group:', lines);
        desc.sourceGroups = parsers.sourceGroups(ssrcGroupLines || []);

        var ssrcLines = parsers.findLines('a=ssrc:', lines);
        var sources = desc.sources = parsers.sources(ssrcLines || []);

        var msidLine = parsers.findLine('a=msid:', lines);
        if (msidLine) {
            var msid = parsers.msid(msidLine);
            ['msid', 'mslabel', 'label'].forEach(function (key) {
                for (var i = 0; i < sources.length; i++) {
                    var found = false;
                    for (var j = 0; j < sources[i].parameters.length; j++) {
                        if (sources[i].parameters[j].key === key) {
                            found = true;
                        }
                    }
                    if (!found) {
                        sources[i].parameters.push({ key: key, value: msid[key] });
                    }
                }
            });
        }

        if (parsers.findLine('a=x-google-flag:conference', lines, sessionLines)) {
            desc.googConferenceFlag = true;
        }
    }

    // transport specific attributes
    var fingerprintLines = parsers.findLines('a=fingerprint:', lines, sessionLines);
    var setup = parsers.findLine('a=setup:', lines, sessionLines);
    fingerprintLines.forEach(function (line) {
        var fp = parsers.fingerprint(line);
        if (setup) {
            fp.setup = setup.substr(8);
        }
        trans.fingerprints.push(fp);
    });

    var ufragLine = parsers.findLine('a=ice-ufrag:', lines, sessionLines);
    var pwdLine = parsers.findLine('a=ice-pwd:', lines, sessionLines);
    if (ufragLine && pwdLine) {
        trans.ufrag = ufragLine.substr(12);
        trans.pwd = pwdLine.substr(10);
        trans.candidates = [];

        var candidateLines = parsers.findLines('a=candidate:', lines, sessionLines);
        candidateLines.forEach(function (line) {
            trans.candidates.push(exports.toCandidateJSON(line));
        });
    }

    if (desc.applicationType == 'datachannel') {
        var sctpmapLines = parsers.findLines('a=sctpmap:', lines);
        sctpmapLines.forEach(function (line) {
            var sctp = parsers.sctpmap(line);
            trans.sctp.push(sctp);
        });
    }

    return content;
};

exports.toCandidateJSON = function (line) {
    var candidate = parsers.candidate(line.split(/\r?\n/)[0]);
    candidate.id = (idCounter++).toString(36).substr(0, 12);
    return candidate;
};

/***/ }),

/***/ "./node_modules/sdp-jingle-json/lib/tosdp.js":
/*!***************************************************!*\
  !*** ./node_modules/sdp-jingle-json/lib/tosdp.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SENDERS = __webpack_require__(/*! ./senders */ "./node_modules/sdp-jingle-json/lib/senders.js");

exports.toSessionSDP = function (session, opts) {
    var role = opts.role || 'initiator';
    var direction = opts.direction || 'outgoing';
    var sid = opts.sid || session.sid || Date.now();
    var time = opts.time || Date.now();

    var sdp = ['v=0', 'o=- ' + sid + ' ' + time + ' IN IP4 0.0.0.0', 's=-', 't=0 0'];

    var contents = session.contents || [];
    var hasSources = false;
    contents.forEach(function (content) {
        if (content.application.sources && content.application.sources.length) {
            hasSources = true;
        }
    });

    if (hasSources) {
        sdp.push('a=msid-semantic: WMS *');
    }

    var groups = session.groups || [];
    groups.forEach(function (group) {
        sdp.push('a=group:' + group.semantics + ' ' + group.contents.join(' '));
    });

    contents.forEach(function (content) {
        sdp.push(exports.toMediaSDP(content, opts));
    });

    return sdp.join('\r\n') + '\r\n';
};

exports.toMediaSDP = function (content, opts) {
    var sdp = [];

    var role = opts.role || 'initiator';
    var direction = opts.direction || 'outgoing';

    var desc = content.application;
    var transport = content.transport;
    var payloads = desc.payloads || [];
    var fingerprints = transport && transport.fingerprints || [];

    var mline = [];
    if (desc.applicationType == 'datachannel') {
        mline.push('application');
        mline.push('1');
        mline.push('DTLS/SCTP');
        if (transport.sctp) {
            transport.sctp.forEach(function (map) {
                mline.push(map.number);
            });
        }
    } else {
        mline.push(desc.media);
        mline.push('1');
        if (fingerprints.length > 0) {
            mline.push('UDP/TLS/RTP/SAVPF');
        } else if (desc.encryption && desc.encryption.length > 0) {
            mline.push('RTP/SAVPF');
        } else {
            mline.push('RTP/AVPF');
        }
        payloads.forEach(function (payload) {
            mline.push(payload.id);
        });
    }

    sdp.push('m=' + mline.join(' '));

    sdp.push('c=IN IP4 0.0.0.0');
    if (desc.bandwidth && desc.bandwidth.type && desc.bandwidth.bandwidth) {
        sdp.push('b=' + desc.bandwidth.type + ':' + desc.bandwidth.bandwidth);
    }
    if (desc.applicationType == 'rtp') {
        sdp.push('a=rtcp:1 IN IP4 0.0.0.0');
    }

    if (transport) {
        if (transport.ufrag) {
            sdp.push('a=ice-ufrag:' + transport.ufrag);
        }
        if (transport.pwd) {
            sdp.push('a=ice-pwd:' + transport.pwd);
        }

        var pushedSetup = false;
        fingerprints.forEach(function (fingerprint) {
            sdp.push('a=fingerprint:' + fingerprint.hash + ' ' + fingerprint.value);
            if (fingerprint.setup && !pushedSetup) {
                sdp.push('a=setup:' + fingerprint.setup);
            }
        });

        if (transport.sctp) {
            transport.sctp.forEach(function (map) {
                sdp.push('a=sctpmap:' + map.number + ' ' + map.protocol + ' ' + map.streams);
            });
        }
    }

    if (desc.applicationType == 'rtp') {
        sdp.push('a=' + (SENDERS[role][direction][content.senders] || 'sendrecv'));
    }
    sdp.push('a=mid:' + content.name);

    if (desc.sources && desc.sources.length) {
        var streams = {};
        desc.sources.forEach(function (source) {
            (source.parameters || []).forEach(function (param) {
                if (param.key === 'msid') {
                    streams[param.value] = 1;
                }
            });
        });
        streams = Object.keys(streams);
        if (streams.length === 1) {
            sdp.push('a=msid:' + streams[0]);
        }
    }

    if (desc.mux) {
        sdp.push('a=rtcp-mux');
    }

    var encryption = desc.encryption || [];
    encryption.forEach(function (crypto) {
        sdp.push('a=crypto:' + crypto.tag + ' ' + crypto.cipherSuite + ' ' + crypto.keyParams + (crypto.sessionParams ? ' ' + crypto.sessionParams : ''));
    });
    if (desc.googConferenceFlag) {
        sdp.push('a=x-google-flag:conference');
    }

    payloads.forEach(function (payload) {
        var rtpmap = 'a=rtpmap:' + payload.id + ' ' + payload.name + '/' + payload.clockrate;
        if (payload.channels && payload.channels != '1') {
            rtpmap += '/' + payload.channels;
        }
        sdp.push(rtpmap);

        if (payload.parameters && payload.parameters.length) {
            var fmtp = ['a=fmtp:' + payload.id];
            var parameters = [];
            payload.parameters.forEach(function (param) {
                parameters.push((param.key ? param.key + '=' : '') + param.value);
            });
            fmtp.push(parameters.join(';'));
            sdp.push(fmtp.join(' '));
        }

        if (payload.feedback) {
            payload.feedback.forEach(function (fb) {
                if (fb.type === 'trr-int') {
                    sdp.push('a=rtcp-fb:' + payload.id + ' trr-int ' + (fb.value ? fb.value : '0'));
                } else {
                    sdp.push('a=rtcp-fb:' + payload.id + ' ' + fb.type + (fb.subtype ? ' ' + fb.subtype : ''));
                }
            });
        }
    });

    if (desc.feedback) {
        desc.feedback.forEach(function (fb) {
            if (fb.type === 'trr-int') {
                sdp.push('a=rtcp-fb:* trr-int ' + (fb.value ? fb.value : '0'));
            } else {
                sdp.push('a=rtcp-fb:* ' + fb.type + (fb.subtype ? ' ' + fb.subtype : ''));
            }
        });
    }

    var hdrExts = desc.headerExtensions || [];
    hdrExts.forEach(function (hdr) {
        sdp.push('a=extmap:' + hdr.id + (hdr.senders ? '/' + SENDERS[role][direction][hdr.senders] : '') + ' ' + hdr.uri);
    });

    var ssrcGroups = desc.sourceGroups || [];
    ssrcGroups.forEach(function (ssrcGroup) {
        sdp.push('a=ssrc-group:' + ssrcGroup.semantics + ' ' + ssrcGroup.sources.join(' '));
    });

    var ssrcs = desc.sources || [];
    ssrcs.forEach(function (ssrc) {
        for (var i = 0; i < ssrc.parameters.length; i++) {
            var param = ssrc.parameters[i];
            sdp.push('a=ssrc:' + (ssrc.ssrc || desc.ssrc) + ' ' + param.key + (param.value ? ':' + param.value : ''));
        }
    });

    var candidates = transport.candidates || [];
    candidates.forEach(function (candidate) {
        sdp.push(exports.toCandidateSDP(candidate));
    });

    return sdp.join('\r\n');
};

exports.toCandidateSDP = function (candidate) {
    var sdp = [];

    sdp.push(candidate.foundation);
    sdp.push(candidate.component);
    sdp.push(candidate.protocol.toUpperCase());
    sdp.push(candidate.priority);
    sdp.push(candidate.ip);
    sdp.push(candidate.port);

    var type = candidate.type;
    sdp.push('typ');
    sdp.push(type);
    if (type === 'srflx' || type === 'prflx' || type === 'relay') {
        if (candidate.relAddr && candidate.relPort) {
            sdp.push('raddr');
            sdp.push(candidate.relAddr);
            sdp.push('rport');
            sdp.push(candidate.relPort);
        }
    }
    if (candidate.tcpType && candidate.protocol.toUpperCase() == 'TCP') {
        sdp.push('tcptype');
        sdp.push(candidate.tcpType);
    }

    sdp.push('generation');
    sdp.push(candidate.generation || '0');

    // FIXME: apparently this is wrong per spec
    // but then, we need this when actually putting this into
    // SDP so it's going to stay.
    // decision needs to be revisited when browsers dont
    // accept this any longer
    return 'a=candidate:' + sdp.join(' ');
};

/***/ }),

/***/ "./node_modules/sdp/sdp.js":
/*!*********************************!*\
  !*** ./node_modules/sdp/sdp.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* eslint-env node */


// SDP helpers.

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function () {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function (blob) {
  return blob.trim().split('\n').map(function (line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function (blob) {
  var parts = blob.split('\nm=');
  return parts.map(function (part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function (blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function (line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function (line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default:
        // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function (candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function (line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function (line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function (codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function (line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function (headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function (line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function (codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function (param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function (line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function (codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function (fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function (line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function (mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function (line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function (params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function (fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function (line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function (line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function (params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function (mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) {
    // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default:
          // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function (kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function (codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function (codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function (codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function (extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function (line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function (part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function (codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = { ssrc: secondarySsrc };
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: secondarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function (params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function (mediaSection) {
  var rtcpParameters = {};

  var cname;
  // Gets the first SSRC. Note that with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (obj) {
    return obj.attribute === 'cname';
  })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function (mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return { stream: parts[0], track: parts[1] };
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (parts) {
    return parts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return { stream: parts[0], track: parts[1] };
  }
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function () {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
SDPUtils.writeSessionBoilerplate = function (sessId, sessVer) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' + 'o=thisisadapterortc ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
};

SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' + transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
      sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function (mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
      // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function (mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function (mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// Expose public methods.
if (( false ? undefined : _typeof(module)) === 'object') {
  module.exports = SDPUtils;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isBuffer(arg) {
  return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s':
        return String(args[i++]);
      case '%d':
        return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};

// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;
exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }
  return debugs[set];
};

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};

  array.forEach(function (val, idx) {
    hash[val] = true;
  });

  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) &&
  // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect &&
  // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}

// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_core.js":
/*!************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_core.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */



var adapterFactory = __webpack_require__(/*! ./adapter_factory.js */ "./node_modules/webrtc-adapter/src/js/adapter_factory.js");
module.exports = adapterFactory({ window: global.window });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_factory.js":
/*!***************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_factory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */



var utils = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
// Shimming starts here.
module.exports = function (dependencies, opts) {
  var window = dependencies && dependencies.window;

  var options = {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true
  };

  for (var key in opts) {
    if (hasOwnProperty.call(opts, key)) {
      options[key] = opts[key];
    }
  }

  // Utils.
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  // Uncomment the line below if you want logging to occur, including logging
  // for the switch statement below. Can also be turned on in the browser via
  // adapter.disableLog(false), but then logging from the switch statement below
  // will not appear.
  // require('./utils').disableLog(false);

  // Browser shims.
  var chromeShim = __webpack_require__(/*! ./chrome/chrome_shim */ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js") || null;
  var edgeShim = __webpack_require__(/*! ./edge/edge_shim */ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js") || null;
  var firefoxShim = __webpack_require__(/*! ./firefox/firefox_shim */ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js") || null;
  var safariShim = __webpack_require__(/*! ./safari/safari_shim */ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js") || null;
  var commonShim = __webpack_require__(/*! ./common_shim */ "./node_modules/webrtc-adapter/src/js/common_shim.js") || null;

  // Export to the adapter global object visible in the browser.
  var adapter = {
    browserDetails: browserDetails,
    commonShim: commonShim,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;
      commonShim.shimCreateObjectURL(window);

      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      chromeShim.shimSourceObject(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      chromeShim.shimSenderReceiverGetStats(window);
      chromeShim.fixNegotiationNeeded(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;
      commonShim.shimCreateObjectURL(window);

      firefoxShim.shimGetUserMedia(window);
      firefoxShim.shimSourceObject(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);
      firefoxShim.shimRemoveStream(window);
      firefoxShim.shimSenderGetStats(window);
      firefoxShim.shimReceiverGetStats(window);
      firefoxShim.shimRTCDataChannel(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = edgeShim;
      commonShim.shimCreateObjectURL(window);

      edgeShim.shimGetUserMedia(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);

      // the edge shim implements the full RTCIceCandidate object.

      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'safari':
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;
      commonShim.shimCreateObjectURL(window);

      safariShim.shimRTCIceServerUrls(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimTrackEventTransceiver(window);
      safariShim.shimGetUserMedia(window);
      safariShim.shimCreateOfferLegacy(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
var logging = utils.log;

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(function (name) {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(function (id) {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  var filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  var trackStats = [];
  result.forEach(function (value) {
    if (value.type === 'track' && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(function (trackStat) {
    result.forEach(function (stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

module.exports = {
  shimGetUserMedia: __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js"),
  shimMediaStream: function shimMediaStream(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  },

  shimOnTrack: function shimOnTrack(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function get() {
          return this._ontrack;
        },
        set: function set(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
          }
          this.addEventListener('track', this._ontrack = f);
        },
        enumerable: true,
        configurable: true
      });
      var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function () {
        var pc = this;
        if (!pc._ontrackpoly) {
          pc._ontrackpoly = function (e) {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', function (te) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function (r) {
                  return r.track && r.track.id === te.track.id;
                });
              } else {
                receiver = { track: te.track };
              }

              var event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = { receiver: receiver };
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(function (track) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function (r) {
                  return r.track && r.track.id === track.id;
                });
              } else {
                receiver = { track: track };
              }
              var event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.transceiver = { receiver: receiver };
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
          };
          pc.addEventListener('addstream', pc._ontrackpoly);
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    } else if (!('RTCRtpTransceiver' in window)) {
      utils.wrapPeerConnectionEvent(window, 'track', function (e) {
        if (!e.transceiver) {
          e.transceiver = { receiver: e.receiver };
        }
        return e;
      });
    }
  },

  shimGetSendersWithDtmf: function shimGetSendersWithDtmf(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
      var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
        return {
          track: track,
          get dtmf() {
            if (this._dtmf === undefined) {
              if (track.kind === 'audio') {
                this._dtmf = pc.createDTMFSender(track);
              } else {
                this._dtmf = null;
              }
            }
            return this._dtmf;
          },
          _pc: pc
        };
      };

      // augment addTrack when getSenders is not available.
      if (!window.RTCPeerConnection.prototype.getSenders) {
        window.RTCPeerConnection.prototype.getSenders = function () {
          this._senders = this._senders || [];
          return this._senders.slice(); // return a copy of the internal state.
        };
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
          var pc = this;
          var sender = origAddTrack.apply(pc, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(pc, track);
            pc._senders.push(sender);
          }
          return sender;
        };

        var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
        window.RTCPeerConnection.prototype.removeTrack = function (sender) {
          var pc = this;
          origRemoveTrack.apply(pc, arguments);
          var idx = pc._senders.indexOf(sender);
          if (idx !== -1) {
            pc._senders.splice(idx, 1);
          }
        };
      }
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      window.RTCPeerConnection.prototype.addStream = function (stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origAddStream.apply(pc, [stream]);
        stream.getTracks().forEach(function (track) {
          pc._senders.push(shimSenderWithDtmf(pc, track));
        });
      };

      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
      window.RTCPeerConnection.prototype.removeStream = function (stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origRemoveStream.apply(pc, [stream]);

        stream.getTracks().forEach(function (track) {
          var sender = pc._senders.find(function (s) {
            return s.track === track;
          });
          if (sender) {
            pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
          }
        });
      };
    } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      window.RTCPeerConnection.prototype.getSenders = function () {
        var pc = this;
        var senders = origGetSenders.apply(pc, []);
        senders.forEach(function (sender) {
          sender._pc = pc;
        });
        return senders;
      };

      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function get() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = this._pc.createDTMFSender(this.track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
    }
  },

  shimSenderReceiverGetStats: function shimSenderReceiverGetStats(window) {
    if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
      return;
    }

    // shim sender stats.
    if (!('getStats' in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      if (origGetSenders) {
        window.RTCPeerConnection.prototype.getSenders = function () {
          var pc = this;
          var senders = origGetSenders.apply(pc, []);
          senders.forEach(function (sender) {
            sender._pc = pc;
          });
          return senders;
        };
      }

      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      if (origAddTrack) {
        window.RTCPeerConnection.prototype.addTrack = function () {
          var sender = origAddTrack.apply(this, arguments);
          sender._pc = this;
          return sender;
        };
      }
      window.RTCRtpSender.prototype.getStats = function () {
        var sender = this;
        return this._pc.getStats().then(function (result) {
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          return filterStats(result, sender.track, true);
        });
      };
    }

    // shim receiver stats.
    if (!('getStats' in window.RTCRtpReceiver.prototype)) {
      var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
      if (origGetReceivers) {
        window.RTCPeerConnection.prototype.getReceivers = function () {
          var pc = this;
          var receivers = origGetReceivers.apply(pc, []);
          receivers.forEach(function (receiver) {
            receiver._pc = pc;
          });
          return receivers;
        };
      }
      utils.wrapPeerConnectionEvent(window, 'track', function (e) {
        e.receiver._pc = e.srcElement;
        return e;
      });
      window.RTCRtpReceiver.prototype.getStats = function () {
        var receiver = this;
        return this._pc.getStats().then(function (result) {
          return filterStats(result, receiver.track, false);
        });
      };
    }

    if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
      return;
    }

    // shim RTCPeerConnection.getStats(track).
    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function () {
      var pc = this;
      if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
        var track = arguments[0];
        var sender;
        var receiver;
        var err;
        pc.getSenders().forEach(function (s) {
          if (s.track === track) {
            if (sender) {
              err = true;
            } else {
              sender = s;
            }
          }
        });
        pc.getReceivers().forEach(function (r) {
          if (r.track === track) {
            if (receiver) {
              err = true;
            } else {
              receiver = r;
            }
          }
          return r.track === track;
        });
        if (err || sender && receiver) {
          return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
        } else if (sender) {
          return sender.getStats();
        } else if (receiver) {
          return receiver.getStats();
        }
        return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
      }
      return origGetStats.apply(pc, arguments);
    };
  },

  shimSourceObject: function shimSourceObject(window) {
    var URL = window && window.URL;

    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
      if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function get() {
            return this._srcObject;
          },
          set: function set(stream) {
            var self = this;
            // Use _srcObject as a private property for this shim
            this._srcObject = stream;
            if (this.src) {
              URL.revokeObjectURL(this.src);
            }

            if (!stream) {
              this.src = '';
              return undefined;
            }
            this.src = URL.createObjectURL(stream);
            // We need to recreate the blob url when a track is added or
            // removed. Doing it manually since we want to avoid a recursion.
            stream.addEventListener('addtrack', function () {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
            stream.addEventListener('removetrack', function () {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
          }
        });
      }
    }
  },

  shimAddTrackRemoveTrackWithNative: function shimAddTrackRemoveTrackWithNative(window) {
    // shim addTrack/removeTrack with native variants in order to make
    // the interactions with legacy getLocalStreams behave as in other browsers.
    // Keeps a mapping stream.id => [stream, rtpsenders...]
    window.RTCPeerConnection.prototype.getLocalStreams = function () {
      var pc = this;
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
        return pc._shimmedLocalStreams[streamId][0];
      });
    };

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
      if (!stream) {
        return origAddTrack.apply(this, arguments);
      }
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      var sender = origAddTrack.apply(this, arguments);
      if (!this._shimmedLocalStreams[stream.id]) {
        this._shimmedLocalStreams[stream.id] = [stream, sender];
      } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
        this._shimmedLocalStreams[stream.id].push(sender);
      }
      return sender;
    };

    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function (stream) {
      var pc = this;
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      stream.getTracks().forEach(function (track) {
        var alreadyExists = pc.getSenders().find(function (s) {
          return s.track === track;
        });
        if (alreadyExists) {
          throw new DOMException('Track already exists.', 'InvalidAccessError');
        }
      });
      var existingSenders = pc.getSenders();
      origAddStream.apply(this, arguments);
      var newSenders = pc.getSenders().filter(function (newSender) {
        return existingSenders.indexOf(newSender) === -1;
      });
      this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      delete this._shimmedLocalStreams[stream.id];
      return origRemoveStream.apply(this, arguments);
    };

    var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function (sender) {
      var pc = this;
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      if (sender) {
        Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
          var idx = pc._shimmedLocalStreams[streamId].indexOf(sender);
          if (idx !== -1) {
            pc._shimmedLocalStreams[streamId].splice(idx, 1);
          }
          if (pc._shimmedLocalStreams[streamId].length === 1) {
            delete pc._shimmedLocalStreams[streamId];
          }
        });
      }
      return origRemoveTrack.apply(this, arguments);
    };
  },

  shimAddTrackRemoveTrack: function shimAddTrackRemoveTrack(window) {
    var browserDetails = utils.detectBrowser(window);
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
      return this.shimAddTrackRemoveTrackWithNative(window);
    }

    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function () {
      var pc = this;
      var nativeStreams = origGetLocalStreams.apply(this);
      pc._reverseStreams = pc._reverseStreams || {};
      return nativeStreams.map(function (stream) {
        return pc._reverseStreams[stream.id];
      });
    };

    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function (stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      stream.getTracks().forEach(function (track) {
        var alreadyExists = pc.getSenders().find(function (s) {
          return s.track === track;
        });
        if (alreadyExists) {
          throw new DOMException('Track already exists.', 'InvalidAccessError');
        }
      });
      // Add identity mapping for consistency with addTrack.
      // Unless this is being used with a stream from addTrack.
      if (!pc._reverseStreams[stream.id]) {
        var newStream = new window.MediaStream(stream.getTracks());
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        stream = newStream;
      }
      origAddStream.apply(pc, [stream]);
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      origRemoveStream.apply(pc, [pc._streams[stream.id] || stream]);
      delete pc._reverseStreams[pc._streams[stream.id] ? pc._streams[stream.id].id : stream.id];
      delete pc._streams[stream.id];
    };

    window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
      var pc = this;
      if (pc.signalingState === 'closed') {
        throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
      }
      var streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
        return t === track;
      })) {
        // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
      }

      var alreadyExists = pc.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }

      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};
      var oldStream = pc._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);

        // Trigger ONN async.
        Promise.resolve().then(function () {
          pc.dispatchEvent(new Event('negotiationneeded'));
        });
      } else {
        var newStream = new window.MediaStream([track]);
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        pc.addStream(newStream);
      }
      return pc.getSenders().find(function (s) {
        return s.track === track;
      });
    };

    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp
      });
    }
    function replaceExternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp
      });
    }
    ['createOffer', 'createAnswer'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function () {
        var pc = this;
        var args = arguments;
        var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
        if (isLegacyCall) {
          return nativeMethod.apply(pc, [function (description) {
            var desc = replaceInternalStreamId(pc, description);
            args[0].apply(null, [desc]);
          }, function (err) {
            if (args[1]) {
              args[1].apply(null, err);
            }
          }, arguments[2]]);
        }
        return nativeMethod.apply(pc, arguments).then(function (description) {
          return replaceInternalStreamId(pc, description);
        });
      };
    });

    var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function () {
      var pc = this;
      if (!arguments.length || !arguments[0].type) {
        return origSetLocalDescription.apply(pc, arguments);
      }
      arguments[0] = replaceExternalStreamId(pc, arguments[0]);
      return origSetLocalDescription.apply(pc, arguments);
    };

    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

    var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
    Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
      get: function get() {
        var pc = this;
        var description = origLocalDescription.get.apply(this);
        if (description.type === '') {
          return description;
        }
        return replaceInternalStreamId(pc, description);
      }
    });

    window.RTCPeerConnection.prototype.removeTrack = function (sender) {
      var pc = this;
      if (pc.signalingState === 'closed') {
        throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
      }
      var isLocal = sender._pc === pc;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      pc._streams = pc._streams || {};
      var stream;
      Object.keys(pc._streams).forEach(function (streamid) {
        var hasTrack = pc._streams[streamid].getTracks().find(function (track) {
          return sender.track === track;
        });
        if (hasTrack) {
          stream = pc._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          pc.removeStream(pc._reverseStreams[stream.id]);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        pc.dispatchEvent(new Event('negotiationneeded'));
      }
    };
  },

  shimPeerConnection: function shimPeerConnection(window) {
    var browserDetails = utils.detectBrowser(window);

    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
      window.RTCPeerConnection = function (pcConfig, pcConstraints) {
        // Translate iceTransportPolicy to iceTransports,
        // see https://code.google.com/p/webrtc/issues/detail?id=4869
        // this was fixed in M56 along with unprefixing RTCPeerConnection.
        logging('PeerConnection');
        if (pcConfig && pcConfig.iceTransportPolicy) {
          pcConfig.iceTransports = pcConfig.iceTransportPolicy;
        }

        return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = window.webkitRTCPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      if (window.webkitRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function get() {
            return window.webkitRTCPeerConnection.generateCertificate;
          }
        });
      }
    } else {
      // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
      var OrigPeerConnection = window.RTCPeerConnection;
      window.RTCPeerConnection = function (pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
          var newIceServers = [];
          for (var i = 0; i < pcConfig.iceServers.length; i++) {
            var server = pcConfig.iceServers[i];
            if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
              utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
              server = JSON.parse(JSON.stringify(server));
              server.urls = server.url;
              newIceServers.push(server);
            } else {
              newIceServers.push(pcConfig.iceServers[i]);
            }
          }
          pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function get() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }

    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function (selector, successCallback, errorCallback) {
      var pc = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats.apply(this, arguments);
      }

      // When spec-style getStats is supported, return those when called with
      // either no arguments or the selector argument is null.
      if (origGetStats.length === 0 && (arguments.length === 0 || typeof arguments[0] !== 'function')) {
        return origGetStats.apply(this, []);
      }

      var fixChromeStats_ = function fixChromeStats_(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function (report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: {
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            }[report.type] || report.type
          };
          report.names().forEach(function (name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      // shim getStats with maplike support
      var makeMapStats = function makeMapStats(stats) {
        return new Map(Object.keys(stats).map(function (key) {
          return [key, stats[key]];
        }));
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper_ = function successCallbackWrapper_(response) {
          args[1](makeMapStats(fixChromeStats_(response)));
        };

        return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
      }

      // promise-support
      return new Promise(function (resolve, reject) {
        origGetStats.apply(pc, [function (response) {
          resolve(makeMapStats(fixChromeStats_(response)));
        }, reject]);
      }).then(successCallback, errorCallback);
    };

    // add promise support -- natively available in Chrome 51
    if (browserDetails.version < 51) {
      ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function () {
          var args = arguments;
          var pc = this;
          var promise = new Promise(function (resolve, reject) {
            nativeMethod.apply(pc, [args[0], resolve, reject]);
          });
          if (args.length < 2) {
            return promise;
          }
          return promise.then(function () {
            args[1].apply(null, []);
          }, function (err) {
            if (args.length >= 3) {
              args[2].apply(null, [err]);
            }
          });
        };
      });
    }

    // promise support for createOffer and createAnswer. Available (without
    // bugs) since M52: crbug/619289
    if (browserDetails.version < 52) {
      ['createOffer', 'createAnswer'].forEach(function (method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function () {
          var pc = this;
          if (arguments.length < 1 || arguments.length === 1 && _typeof(arguments[0]) === 'object') {
            var opts = arguments.length === 1 ? arguments[0] : undefined;
            return new Promise(function (resolve, reject) {
              nativeMethod.apply(pc, [resolve, reject, opts]);
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    }

    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      };
    });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function () {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  },

  fixNegotiationNeeded: function fixNegotiationNeeded(window) {
    utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function (e) {
      var pc = e.target;
      if (pc.signalingState !== 'stable') {
        return;
      }
      return e;
    });
  },

  shimGetDisplayMedia: function shimGetDisplayMedia(window, getSourceId) {
    if ('getDisplayMedia' in window.navigator) {
      return;
    }
    // getSourceId is a function that returns a promise resolving with
    // the sourceId of the screen/window/tab to be shared.
    if (typeof getSourceId !== 'function') {
      console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
      return;
    }
    navigator.getDisplayMedia = function (constraints) {
      return getSourceId(constraints).then(function (sourceId) {
        constraints.video = {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: sourceId,
            maxFrameRate: constraints.video.frameRate || 3
          }
        };
        return navigator.mediaDevices.getUserMedia(constraints);
      });
    };
  }
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
var logging = utils.log;

// Expose public methods.
module.exports = function (window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;

  var constraintsToChrome_ = function constraintsToChrome_(c) {
    if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function (key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function oldname_(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name === 'deviceId' ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function (mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function shimConstraints_(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && _typeof(constraints.audio) === 'object') {
      var remap = function remap(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && _typeof(constraints.video) === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'undefined' ? 'undefined' : _typeof(face)) === 'object' ? face : { ideal: face });
      var getSupportedFacingModeLies = browserDetails.version < 66;

      if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices = devices.filter(function (d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function (d) {
              return matches.some(function (match) {
                return d.label.toLowerCase().indexOf(match) !== -1;
              });
            });
            if (!dev && devices.length && matches.indexOf('back') !== -1) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function shimError_(e) {
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString: function toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function (c) {
      navigator.webkitGetUserMedia(c, onSuccess, function (e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };

  navigator.getUserMedia = getUserMedia_;

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
    return new Promise(function (resolve, reject) {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  };

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {
      getUserMedia: getUserMediaPromise_,
      enumerateDevices: function enumerateDevices() {
        return new Promise(function (resolve) {
          var kinds = { audio: 'audioinput', video: 'videoinput' };
          return window.MediaStreamTrack.getSources(function (devices) {
            resolve(devices.map(function (device) {
              return { label: device.label,
                kind: kinds[device.kind],
                deviceId: device.id,
                groupId: '' };
            }));
          });
        });
      },
      getSupportedConstraints: function getSupportedConstraints() {
        return {
          deviceId: true, echoCancellation: true, facingMode: true,
          frameRate: true, height: true, width: true
        };
      }
    };
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function (constraints) {
      return getUserMediaPromise_(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (cs) {
      return shimConstraints_(cs, function (c) {
        return origGetUserMedia(c).then(function (stream) {
          if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function (track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function (e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function () {
      logging('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function () {
      logging('Dummy mediaDevices.removeEventListener called.');
    };
  }
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/common_shim.js":
/*!***********************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/common_shim.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var SDPUtils = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");

module.exports = {
  shimRTCIceCandidate: function shimRTCIceCandidate(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
      return;
    }

    var NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function (args) {
      // Remove the a= which shouldn't be part of the candidate string.
      if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
        args = JSON.parse(JSON.stringify(args));
        args.candidate = args.candidate.substr(2);
      }

      if (args.candidate && args.candidate.length) {
        // Augment the native candidate with the parsed fields.
        var nativeCandidate = new NativeRTCIceCandidate(args);
        var parsedCandidate = SDPUtils.parseCandidate(args.candidate);
        var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

        // Add a serializer that does not serialize the extra attributes.
        augmentedCandidate.toJSON = function () {
          return {
            candidate: augmentedCandidate.candidate,
            sdpMid: augmentedCandidate.sdpMid,
            sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
            usernameFragment: augmentedCandidate.usernameFragment
          };
        };
        return augmentedCandidate;
      }
      return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
      if (e.candidate) {
        Object.defineProperty(e, 'candidate', {
          value: new window.RTCIceCandidate(e.candidate),
          writable: 'false'
        });
      }
      return e;
    });
  },

  // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

  shimCreateObjectURL: function shimCreateObjectURL(window) {
    var URL = window && window.URL;

    if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.HTMLMediaElement && 'srcObject' in window.HTMLMediaElement.prototype && URL.createObjectURL && URL.revokeObjectURL)) {
      // Only shim CreateObjectURL using srcObject if srcObject exists.
      return undefined;
    }

    var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
    var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
    var streams = new Map(),
        newId = 0;

    URL.createObjectURL = function (stream) {
      if ('getTracks' in stream) {
        var url = 'polyblob:' + ++newId;
        streams.set(url, stream);
        utils.deprecated('URL.createObjectURL(stream)', 'elem.srcObject = stream');
        return url;
      }
      return nativeCreateObjectURL(stream);
    };
    URL.revokeObjectURL = function (url) {
      nativeRevokeObjectURL(url);
      streams.delete(url);
    };

    var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype, 'src');
    Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
      get: function get() {
        return dsc.get.apply(this);
      },
      set: function set(url) {
        this.srcObject = streams.get(url) || null;
        return dsc.set.apply(this, [url]);
      }
    });

    var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
    window.HTMLMediaElement.prototype.setAttribute = function () {
      if (arguments.length === 2 && ('' + arguments[0]).toLowerCase() === 'src') {
        this.srcObject = streams.get(arguments[1]) || null;
      }
      return nativeSetAttribute.apply(this, arguments);
    };
  },

  shimMaxMessageSize: function shimMaxMessageSize(window) {
    if (window.RTCSctpTransport || !window.RTCPeerConnection) {
      return;
    }
    var browserDetails = utils.detectBrowser(window);

    if (!('sctp' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
        get: function get() {
          return typeof this._sctp === 'undefined' ? null : this._sctp;
        }
      });
    }

    var sctpInDescription = function sctpInDescription(description) {
      var sections = SDPUtils.splitSections(description.sdp);
      sections.shift();
      return sections.some(function (mediaSection) {
        var mLine = SDPUtils.parseMLine(mediaSection);
        return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
      });
    };

    var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
      // TODO: Is there a better solution for detecting Firefox?
      var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (match === null || match.length < 2) {
        return -1;
      }
      var version = parseInt(match[1], 10);
      // Test for NaN (yes, this is ugly)
      return version !== version ? -1 : version;
    };

    var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
      // Every implementation we know can send at least 64 KiB.
      // Note: Although Chrome is technically able to send up to 256 KiB, the
      //       data does not reach the other peer reliably.
      //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
      var canSendMaxMessageSize = 65536;
      if (browserDetails.browser === 'firefox') {
        if (browserDetails.version < 57) {
          if (remoteIsFirefox === -1) {
            // FF < 57 will send in 16 KiB chunks using the deprecated PPID
            // fragmentation.
            canSendMaxMessageSize = 16384;
          } else {
            // However, other FF (and RAWRTC) can reassemble PPID-fragmented
            // messages. Thus, supporting ~2 GiB when sending.
            canSendMaxMessageSize = 2147483637;
          }
        } else if (browserDetails.version < 60) {
          // Currently, all FF >= 57 will reset the remote maximum message size
          // to the default value when a data channel is created at a later
          // stage. :(
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
          canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
        } else {
          // FF >= 60 supports sending ~2 GiB
          canSendMaxMessageSize = 2147483637;
        }
      }
      return canSendMaxMessageSize;
    };

    var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
      // Note: 65536 bytes is the default value from the SDP spec. Also,
      //       every implementation we know supports receiving 65536 bytes.
      var maxMessageSize = 65536;

      // FF 57 has a slightly incorrect default remote max message size, so
      // we need to adjust it here to avoid a failure when sending.
      // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
      if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
        maxMessageSize = 65535;
      }

      var match = SDPUtils.matchPrefix(description.sdp, 'a=max-message-size:');
      if (match.length > 0) {
        maxMessageSize = parseInt(match[0].substr(19), 10);
      } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
        // If the maximum message size is not present in the remote SDP and
        // both local and remote are Firefox, the remote peer can receive
        // ~2 GiB.
        maxMessageSize = 2147483637;
      }
      return maxMessageSize;
    };

    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function () {
      var pc = this;
      pc._sctp = null;

      if (sctpInDescription(arguments[0])) {
        // Check if the remote is FF.
        var isFirefox = getRemoteFirefoxVersion(arguments[0]);

        // Get the maximum message size the local peer is capable of sending
        var canSendMMS = getCanSendMaxMessageSize(isFirefox);

        // Get the maximum message size of the remote peer.
        var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

        // Determine final maximum message size
        var maxMessageSize;
        if (canSendMMS === 0 && remoteMMS === 0) {
          maxMessageSize = Number.POSITIVE_INFINITY;
        } else if (canSendMMS === 0 || remoteMMS === 0) {
          maxMessageSize = Math.max(canSendMMS, remoteMMS);
        } else {
          maxMessageSize = Math.min(canSendMMS, remoteMMS);
        }

        // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
        // attribute.
        var sctp = {};
        Object.defineProperty(sctp, 'maxMessageSize', {
          get: function get() {
            return maxMessageSize;
          }
        });
        pc._sctp = sctp;
      }

      return origSetRemoteDescription.apply(pc, arguments);
    };
  },

  shimSendThrowTypeError: function shimSendThrowTypeError(window) {
    if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
      return;
    }

    // Note: Although Firefox >= 57 has a native implementation, the maximum
    //       message size can be reset for all data channels at a later stage.
    //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

    function wrapDcSend(dc, pc) {
      var origDataChannelSend = dc.send;
      dc.send = function () {
        var data = arguments[0];
        var length = data.length || data.size || data.byteLength;
        if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
          throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
        }
        return origDataChannelSend.apply(dc, arguments);
      };
    }
    var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function () {
      var pc = this;
      var dataChannel = origCreateDataChannel.apply(pc, arguments);
      wrapDcSend(dataChannel, pc);
      return dataChannel;
    };
    utils.wrapPeerConnectionEvent(window, 'datachannel', function (e) {
      wrapDcSend(e.channel, e.target);
      return e;
    });
  }
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/edge_shim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


var utils = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
var filterIceServers = __webpack_require__(/*! ./filtericeservers */ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js");
var shimRTCPeerConnection = __webpack_require__(/*! rtcpeerconnection-shim */ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js");

module.exports = {
  shimGetUserMedia: __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js"),
  shimPeerConnection: function shimPeerConnection(window) {
    var browserDetails = utils.detectBrowser(window);

    if (window.RTCIceGatherer) {
      if (!window.RTCIceCandidate) {
        window.RTCIceCandidate = function (args) {
          return args;
        };
      }
      if (!window.RTCSessionDescription) {
        window.RTCSessionDescription = function (args) {
          return args;
        };
      }
      // this adds an additional event listener to MediaStrackTrack that signals
      // when a tracks enabled property was changed. Workaround for a bug in
      // addStream, see below. No longer required in 15025+
      if (browserDetails.version < 15025) {
        var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
        Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
          set: function set(value) {
            origMSTEnabled.set.call(this, value);
            var ev = new Event('enabled');
            ev.enabled = value;
            this.dispatchEvent(ev);
          }
        });
      }
    }

    // ORTC defines the DTMF sender a bit different.
    // https://github.com/w3c/ortc/issues/714
    if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function get() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = new window.RTCDtmfSender(this);
            } else if (this.track.kind === 'video') {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
    }
    // Edge currently only implements the RTCDtmfSender, not the
    // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
    if (window.RTCDtmfSender && !window.RTCDTMFSender) {
      window.RTCDTMFSender = window.RTCDtmfSender;
    }

    var RTCPeerConnectionShim = shimRTCPeerConnection(window, browserDetails.version);
    window.RTCPeerConnection = function (config) {
      if (config && config.iceServers) {
        config.iceServers = filterIceServers(config.iceServers);
      }
      return new RTCPeerConnectionShim(config);
    };
    window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
  },
  shimReplaceTrack: function shimReplaceTrack(window) {
    // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
    if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
      window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
    }
  }
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


var utils = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
module.exports = function (iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function (url) {
        var validTurn = url.indexOf('turn:') === 0 && url.indexOf('transport=udp') !== -1 && url.indexOf('turn:[') === -1 && !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 && url.indexOf('?transport=udp') === -1;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getusermedia.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


// Expose public methods.

module.exports = function (window) {
  var navigator = window && window.navigator;

  var shimError_ = function shimError_(e) {
    return {
      name: { PermissionDeniedError: 'NotAllowedError' }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function toString() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function (c) {
    return origGetUserMedia(c).catch(function (e) {
      return Promise.reject(shimError_(e));
    });
  };
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");

module.exports = {
  shimGetUserMedia: __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js"),
  shimOnTrack: function shimOnTrack(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function get() {
          return this._ontrack;
        },
        set: function set(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function (e) {
            e.stream.getTracks().forEach(function (track) {
              var event = new Event('track');
              event.track = track;
              event.receiver = { track: track };
              event.transceiver = { receiver: event.receiver };
              event.streams = [e.stream];
              this.dispatchEvent(event);
            }.bind(this));
          }.bind(this));
        }
      });
    }
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
      Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get: function get() {
          return { receiver: this.receiver };
        }
      });
    }
  },

  shimSourceObject: function shimSourceObject(window) {
    // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
      if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function get() {
            return this.mozSrcObject;
          },
          set: function set(stream) {
            this.mozSrcObject = stream;
          }
        });
      }
    }
  },

  shimPeerConnection: function shimPeerConnection(window) {
    var browserDetails = utils.detectBrowser(window);

    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
      return; // probably media.peerconnection.enabled=false in about:config
    }
    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function (pcConfig, pcConstraints) {
        if (browserDetails.version < 38) {
          // .urls is not supported in FF < 38.
          // create RTCIceServers with a single url.
          if (pcConfig && pcConfig.iceServers) {
            var newIceServers = [];
            for (var i = 0; i < pcConfig.iceServers.length; i++) {
              var server = pcConfig.iceServers[i];
              if (server.hasOwnProperty('urls')) {
                for (var j = 0; j < server.urls.length; j++) {
                  var newServer = {
                    url: server.urls[j]
                  };
                  if (server.urls[j].indexOf('turn') === 0) {
                    newServer.username = server.username;
                    newServer.credential = server.credential;
                  }
                  newIceServers.push(newServer);
                }
              } else {
                newIceServers.push(pcConfig.iceServers[i]);
              }
            }
            pcConfig.iceServers = newIceServers;
          }
        }
        return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = window.mozRTCPeerConnection.prototype;

      // wrap static methods. Currently just generateCertificate.
      if (window.mozRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function get() {
            return window.mozRTCPeerConnection.generateCertificate;
          }
        });
      }

      window.RTCSessionDescription = window.mozRTCSessionDescription;
      window.RTCIceCandidate = window.mozRTCIceCandidate;
    }

    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      };
    });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function () {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };

    // shim getStats with maplike support
    var makeMapStats = function makeMapStats(stats) {
      var map = new Map();
      Object.keys(stats).forEach(function (key) {
        map.set(key, stats[key]);
        map[key] = stats[key];
      });
      return map;
    };

    var modernStatsTypes = {
      inboundrtp: 'inbound-rtp',
      outboundrtp: 'outbound-rtp',
      candidatepair: 'candidate-pair',
      localcandidate: 'local-candidate',
      remotecandidate: 'remote-candidate'
    };

    var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function (selector, onSucc, onErr) {
      return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
        if (browserDetails.version < 48) {
          stats = makeMapStats(stats);
        }
        if (browserDetails.version < 53 && !onSucc) {
          // Shim only promise getStats with spec-hyphens in type names
          // Leave callback version alone; misc old uses of forEach before Map
          try {
            stats.forEach(function (stat) {
              stat.type = modernStatsTypes[stat.type] || stat.type;
            });
          } catch (e) {
            if (e.name !== 'TypeError') {
              throw e;
            }
            // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
            stats.forEach(function (stat, i) {
              stats.set(i, Object.assign({}, stat, {
                type: modernStatsTypes[stat.type] || stat.type
              }));
            });
          }
        }
        return stats;
      }).then(onSucc, onErr);
    };
  },

  shimSenderGetStats: function shimSenderGetStats(window) {
    if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
      return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
      return;
    }
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function () {
        var pc = this;
        var senders = origGetSenders.apply(pc, []);
        senders.forEach(function (sender) {
          sender._pc = pc;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function () {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function () {
      return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
  },

  shimReceiverGetStats: function shimReceiverGetStats(window) {
    if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
      return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
      return;
    }
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function () {
        var pc = this;
        var receivers = origGetReceivers.apply(pc, []);
        receivers.forEach(function (receiver) {
          receiver._pc = pc;
        });
        return receivers;
      };
    }
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function () {
      return this._pc.getStats(this.track);
    };
  },

  shimRemoveStream: function shimRemoveStream(window) {
    if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
      return;
    }
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      var pc = this;
      utils.deprecated('removeStream', 'removeTrack');
      this.getSenders().forEach(function (sender) {
        if (sender.track && stream.getTracks().indexOf(sender.track) !== -1) {
          pc.removeTrack(sender);
        }
      });
    };
  },

  shimRTCDataChannel: function shimRTCDataChannel(window) {
    // rename DataChannel to RTCDataChannel (native fix in FF60):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
    if (window.DataChannel && !window.RTCDataChannel) {
      window.RTCDataChannel = window.DataChannel;
    }
  },

  shimGetDisplayMedia: function shimGetDisplayMedia(window, preferredMediaSource) {
    if ('getDisplayMedia' in window.navigator) {
      return;
    }
    navigator.getDisplayMedia = function (constraints) {
      if (!(constraints && constraints.video)) {
        var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
        err.name = 'NotFoundError';
        // from https://heycam.github.io/webidl/#idl-DOMException-error-names
        err.code = 8;
        return Promise.reject(err);
      }
      if (constraints.video === true) {
        constraints.video = { mediaSource: preferredMediaSource };
      } else {
        constraints.video.mediaSource = preferredMediaSource;
      }
      return navigator.mediaDevices.getUserMedia(constraints);
    };
  }
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
var logging = utils.log;

// Expose public methods.
module.exports = function (window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  var shimError_ = function shimError_(e) {
    return {
      name: {
        InternalError: 'NotReadableError',
        NotSupportedError: 'TypeError',
        PermissionDeniedError: 'NotAllowedError',
        SecurityError: 'NotAllowedError'
      }[e.name] || e.name,
      message: {
        'The operation is insecure.': 'The request is not allowed by the ' + 'user agent or the platform in the current context.'
      }[e.message] || e.message,
      constraint: e.constraint,
      toString: function toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  // getUserMedia constraints shim.
  var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
    var constraintsToFF37_ = function constraintsToFF37_(c) {
      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function (key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
        if (r.min !== undefined || r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r.min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = { min: r.ideal, max: r.ideal };
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    constraints = JSON.parse(JSON.stringify(constraints));
    if (browserDetails.version < 38) {
      logging('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37_(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37_(constraints.video);
      }
      logging('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, function (e) {
      onError(shimError_(e));
    });
  };

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
    return new Promise(function (resolve, reject) {
      getUserMedia_(constraints, resolve, reject);
    });
  };

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = { getUserMedia: getUserMediaPromise_,
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {}
    };
  }
  navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function () {
    return new Promise(function (resolve) {
      var infos = [{ kind: 'audioinput', deviceId: 'default', label: '', groupId: '' }, { kind: 'videoinput', deviceId: 'default', label: '', groupId: '' }];
      resolve(infos);
    });
  };

  if (browserDetails.version < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function () {
      return orgEnumerateDevices().then(undefined, function (e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
  if (browserDetails.version < 49) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (c) {
      return origGetUserMedia(c).then(function (stream) {
        // Work around https://bugzil.la/802326
        if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(function (track) {
            track.stop();
          });
          throw new DOMException('The required resource can not be found here.', 'NotFoundError');
        }
        return stream;
      }, function (e) {
        return Promise.reject(shimError_(e));
      });
    };
  }
  if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function remap(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (c) {
      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function () {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === 'audio' && (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
  navigator.getUserMedia = function (constraints, onSuccess, onError) {
    if (browserDetails.version < 44) {
      return getUserMedia_(constraints, onSuccess, onError);
    }
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");

module.exports = {
  shimLocalStreamsAPI: function shimLocalStreamsAPI(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getLocalStreams = function () {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
    }
    if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getStreamById = function (id) {
        var result = null;
        if (this._localStreams) {
          this._localStreams.forEach(function (stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        if (this._remoteStreams) {
          this._remoteStreams.forEach(function (stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        return result;
      };
    }
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
      var _addTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addStream = function (stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        if (this._localStreams.indexOf(stream) === -1) {
          this._localStreams.push(stream);
        }
        var pc = this;
        stream.getTracks().forEach(function (track) {
          _addTrack.call(pc, track, stream);
        });
      };

      window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
        if (stream) {
          if (!this._localStreams) {
            this._localStreams = [stream];
          } else if (this._localStreams.indexOf(stream) === -1) {
            this._localStreams.push(stream);
          }
        }
        return _addTrack.call(this, track, stream);
      };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.removeStream = function (stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        var index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        var pc = this;
        var tracks = stream.getTracks();
        this.getSenders().forEach(function (sender) {
          if (tracks.indexOf(sender.track) !== -1) {
            pc.removeTrack(sender);
          }
        });
      };
    }
  },
  shimRemoteStreamsAPI: function shimRemoteStreamsAPI(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getRemoteStreams = function () {
        return this._remoteStreams ? this._remoteStreams : [];
      };
    }
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
        get: function get() {
          return this._onaddstream;
        },
        set: function set(f) {
          var pc = this;
          if (this._onaddstream) {
            this.removeEventListener('addstream', this._onaddstream);
            this.removeEventListener('track', this._onaddstreampoly);
          }
          this.addEventListener('addstream', this._onaddstream = f);
          this.addEventListener('track', this._onaddstreampoly = function (e) {
            e.streams.forEach(function (stream) {
              if (!pc._remoteStreams) {
                pc._remoteStreams = [];
              }
              if (pc._remoteStreams.indexOf(stream) >= 0) {
                return;
              }
              pc._remoteStreams.push(stream);
              var event = new Event('addstream');
              event.stream = stream;
              pc.dispatchEvent(event);
            });
          });
        }
      });
    }
  },
  shimCallbacksAPI: function shimCallbacksAPI(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    var prototype = window.RTCPeerConnection.prototype;
    var createOffer = prototype.createOffer;
    var createAnswer = prototype.createAnswer;
    var setLocalDescription = prototype.setLocalDescription;
    var setRemoteDescription = prototype.setRemoteDescription;
    var addIceCandidate = prototype.addIceCandidate;

    prototype.createOffer = function (successCallback, failureCallback) {
      var options = arguments.length >= 2 ? arguments[2] : arguments[0];
      var promise = createOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    prototype.createAnswer = function (successCallback, failureCallback) {
      var options = arguments.length >= 2 ? arguments[2] : arguments[0];
      var promise = createAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    var withCallback = function withCallback(description, successCallback, failureCallback) {
      var promise = setLocalDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;

    withCallback = function withCallback(description, successCallback, failureCallback) {
      var promise = setRemoteDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;

    withCallback = function withCallback(candidate, successCallback, failureCallback) {
      var promise = addIceCandidate.apply(this, [candidate]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
  },
  shimGetUserMedia: function shimGetUserMedia(window) {
    var navigator = window && window.navigator;

    if (!navigator.getUserMedia) {
      if (navigator.webkitGetUserMedia) {
        navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
      } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.getUserMedia = function (constraints, cb, errcb) {
          navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
        }.bind(navigator);
      }
    }
  },
  shimRTCIceServerUrls: function shimRTCIceServerUrls(window) {
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    var OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function (pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
            utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ('generateCertificate' in window.RTCPeerConnection) {
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function get() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }
  },
  shimTrackEventTransceiver: function shimTrackEventTransceiver(window) {
    // Add event.transceiver member over deprecated event.receiver
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'receiver' in window.RTCTrackEvent.prototype &&
    // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
    // defined for some reason even when window.RTCTransceiver is not.
    !window.RTCTransceiver) {
      Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get: function get() {
          return { receiver: this.receiver };
        }
      });
    }
  },

  shimCreateOfferLegacy: function shimCreateOfferLegacy(window) {
    var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function (offerOptions) {
      var pc = this;
      if (offerOptions) {
        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
        }
        var audioTransceiver = pc.getTransceivers().find(function (transceiver) {
          return transceiver.sender.track && transceiver.sender.track.kind === 'audio';
        });
        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
          if (audioTransceiver.direction === 'sendrecv') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('sendonly');
            } else {
              audioTransceiver.direction = 'sendonly';
            }
          } else if (audioTransceiver.direction === 'recvonly') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('inactive');
            } else {
              audioTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
          pc.addTransceiver('audio');
        }

        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
        }
        var videoTransceiver = pc.getTransceivers().find(function (transceiver) {
          return transceiver.sender.track && transceiver.sender.track.kind === 'video';
        });
        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
          if (videoTransceiver.direction === 'sendrecv') {
            videoTransceiver.setDirection('sendonly');
          } else if (videoTransceiver.direction === 'recvonly') {
            videoTransceiver.setDirection('inactive');
          }
        } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
          pc.addTransceiver('video');
        }
      }
      return origCreateOffer.apply(pc, arguments);
    };
  }
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var logDisabled_ = true;
var deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  var match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    var wrappedCallback = function wrappedCallback(e) {
      var modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        cb(modifiedEvent);
      }
    };
    this._eventMap = this._eventMap || {};
    this._eventMap[cb] = wrappedCallback;
    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    var unwrappedCb = this._eventMap[cb];
    delete this._eventMap[cb];
    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function get() {
      return this['_on' + eventNameToWrap];
    },
    set: function set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}

// Utility methods.
module.exports = {
  extractVersion: extractVersion,
  wrapPeerConnectionEvent: wrapPeerConnectionEvent,
  disableLog: function disableLog(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
  },

  /**
   * Disable or enable deprecation warnings
   * @param {!boolean} bool set to true to disable warnings.
   */
  disableWarnings: function disableWarnings(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
    }
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
  },

  log: function log() {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
      if (logDisabled_) {
        return;
      }
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log.apply(console, arguments);
      }
    }
  },

  /**
   * Shows a deprecation warning suggesting the modern and spec-compatible API.
   */
  deprecated: function deprecated(oldMethod, newMethod) {
    if (!deprecationWarnings_) {
      return;
    }
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
  },

  /**
   * Browser detector.
   *
   * @return {object} result containing browser and version
   *     properties.
   */
  detectBrowser: function detectBrowser(window) {
    var navigator = window && window.navigator;

    // Returned result object.
    var result = {};
    result.browser = null;
    result.version = null;

    // Fail early if it's not a browser
    if (typeof window === 'undefined' || !window.navigator) {
      result.browser = 'Not a browser.';
      return result;
    }

    if (navigator.mozGetUserMedia) {
      // Firefox.
      result.browser = 'firefox';
      result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia) {
      // Chrome, Chromium, Webview, Opera.
      // Version matches Chrome/WebRTC version.
      result.browser = 'chrome';
      result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
      // Edge.
      result.browser = 'edge';
      result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
    } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
      // Safari.
      result.browser = 'safari';
      result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    } else {
      // Default fallthrough: not supported.
      result.browser = 'Not a supported browser.';
      return result;
    }

    return result;
  }
};

/***/ }),

/***/ "./node_modules/webrtc-stats-gatherer/dist/webrtc-stats-gatherer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/webrtc-stats-gatherer/dist/webrtc-stats-gatherer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(global, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        } /******/return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = "./src/StatsGatherer.js");
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/"./src/StatsGatherer.js":
      /*!******************************!*\
        !*** ./src/StatsGatherer.js ***!
        \******************************/
      /*! no static exports found */
      /***/function srcStatsGathererJs(module, exports, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        var _events = __webpack_require__( /*! events */"events");

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var IS_BROWSER = void 0;

        var StatsGatherer = function (_EventEmitter) {
          _inherits(StatsGatherer, _EventEmitter);

          function StatsGatherer(peerConnection) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, StatsGatherer);

            IS_BROWSER = typeof window !== 'undefined';

            var _this = _possibleConstructorReturn(this, (StatsGatherer.__proto__ || Object.getPrototypeOf(StatsGatherer)).call(this));

            _this.connection = peerConnection;
            _this.session = opts.session;
            _this.initiator = opts.initiator;
            _this.conference = opts.conference;

            _this.statsInterval = (opts.interval || 5) * 1000;
            _this.lastResult = {};
            _this.lastActiveLocalCandidate = null;

            _this._pollingInterval = null;

            _this._haveConnectionMetrics = false;
            _this._iceStartTime = null;
            _this._iceConnectionTime = null;

            _this.traceData = [];

            _this.logger = opts.logger || console;

            _this.collectTraces();
            return _this;
          }

          _createClass(StatsGatherer, [{
            key: '_polyFillStats',
            value: function _polyFillStats(results) {
              if (!results || Array.isArray(results)) {
                return results;
              }
              var betterResults = [];
              if (typeof window.RTCStatsReport !== 'undefined' && results instanceof window.RTCStatsReport) {
                results.forEach(function (value, key) {
                  betterResults.push({ key: key, value: value });
                });
              } else if (Object.keys(results).length > 0) {
                Object.keys(results).forEach(function (key) {
                  betterResults.push({
                    key: key,
                    value: results[key]
                  });
                });
              } else {
                this.logger.warn('Unknown stats results format, returning unmodified', results);
                return results;
              }
              return betterResults;
            }
          }, {
            key: '_gatherStats',
            value: function _gatherStats() {
              try {
                if (this.connection.pc.peerconnection) {
                  return this.connection.pc.peerconnection.getStats(null).then(this._polyFillStats);
                }
                return this.connection.pc.getStats(null).then(this._polyFillStats);
              } catch (e) {
                this.logger.error('Failed to gather stats. Are you using RTCPeerConnection as your connection? {expect connection.pc.peerconnection.getStats}', this.connection);
                return Promise.reject(e);
              }
            }
          }, {
            key: '_checkLastActiveCandidate',
            value: function _checkLastActiveCandidate(_ref) {
              var localId = _ref.localId,
                  remoteId = _ref.remoteId,
                  key = _ref.key,
                  report = _ref.report;

              if (localId && report.type === 'localcandidate' && report.id === localId) {
                this.lastActiveLocalCandidate = report;
              }
              if (remoteId && report.type === 'remotecandidate' && report.id === remoteId) {
                this.lastActiveRemoteCandidate = report;
              }
            }
          }, {
            key: '_processReport',
            value: function _processReport(_ref2) {
              var _this2 = this;

              var key = _ref2.key,
                  report = _ref2.report,
                  results = _ref2.results,
                  event = _ref2.event;

              var now = new Date(report.timestamp);
              var track = report.trackIdentifier || report.googTrackId || key;
              var kind = report.mediaType;

              var activeSource = !!(report.type === 'ssrc' && (report.bytesSent || report.bytesReceived));

              if (!activeSource) {
                // if not active source, is this the active candidate pair?
                var selected = report.type === 'candidatepair' && report.selected;
                var specSepected = report.type === 'candidate-pair' && report.nominated && report.state === 'succeeded';
                var chromeSelected = report.type === 'googCandidatePair' && report.googActiveConnection === 'true';

                if (selected || chromeSelected || specSepected) {
                  // this is the active candidate pair, check if it's the same id as last one
                  var localId = report.localCandidateId;
                  var remoteId = report.remoteCandidateId;

                  event.localCandidateChanged = !!this.lastActiveLocalCandidate && localId !== this.lastActiveLocalCandidate.id;
                  event.remoteCandidateChanged = !!this.lastActiveRemoteCandidate && remoteId !== this.lastActiveRemoteCandidate.id;

                  if (!this.lastActiveLocalCandidate || event.localCandidateChanged || event.remoteCandidateChanged) {
                    results.forEach(function (result) {
                      _this2._checkLastActiveCandidate({
                        localId: localId,
                        remoteId: remoteId,
                        key: result.key,
                        report: result.value
                      });
                    });
                  }

                  if (this.lastActiveLocalCandidate) {
                    event.networkType = this.lastActiveLocalCandidate.networkType;
                    if (this.lastActiveRemoteCandidate) {
                      event.candidatePair = this.lastActiveLocalCandidate.candidateType + ';' + this.lastActiveRemoteCandidate.candidateType;
                    }
                  }
                }
                return;
              }

              var local = !!report.bytesSent;

              var lastResultReport = void 0;
              if (!this.lastResult) {
                return;
              }
              lastResultReport = this.lastResult.find && this.lastResult.find(function (r) {
                return r.key === key;
              });
              lastResultReport = lastResultReport && lastResultReport.value;
              if (!lastResultReport || lastResultReport.timestamp >= now) {
                return;
              }

              // Chrome does not provide a mediaType field, so we have to manually inspect
              // the tracks to find the media type.
              if (!kind) {
                this.connection.getLocalStreams()[0].getTracks().forEach(function (track) {
                  if (track.id === report.googTrackId) {
                    kind = track.kind;
                  }
                });
              }

              var muted = false;
              // We still didn't find the media type, so the local track is muted
              if (!kind) {
                muted = true;
                // Try to guess the media type from the codec
                if (report.googCodecName) {
                  var codec = report.googCodecName.toLowerCase();
                  if (codec === 'vp8') {
                    kind = 'video';
                  } else if (codec === 'opus') {
                    kind = 'audio';
                  }
                }
              }

              var bytes = parseInt(local ? report.bytesSent : report.bytesReceived, 10) || 0;
              var previousBytesTotal = parseInt(local ? lastResultReport.bytesSent : lastResultReport.bytesReceived, 10) || 0;
              var deltaTime = now - new Date(lastResultReport.timestamp);
              var bitrate = Math.floor(8 * (bytes - previousBytesTotal) / deltaTime);
              var bytesSent = parseInt(report.bytesSent, 10) || -1;
              var bytesReceived = parseInt(report.bytesReceived, 10) || -1;

              var rtt = parseInt(report.googRtt || report.mozRtt || report.roundTripTime, 10) || -1;
              if (rtt !== -1) {
                event[kind + 'Rtt'] = rtt;
              }

              var jitter = parseInt(report.googJitterReceived || report.mozJitterReceived || report.jitter, 10) || -1;
              if (jitter !== -1) {
                event[kind + 'Jitter'] = jitter;
              }

              var lost = 0;
              var previousLost = 0;
              var total = 0;
              var previousTotal = 0;
              var remoteItem = void 0;

              remoteItem = results.find(function (r) {
                return r.key === report.remoteId;
              });
              if (report.remoteId && remoteItem) {
                lost = remoteItem.packetsLost;
                previousLost = lastResultReport.packetsLost;

                if (lost < previousLost) {
                  this.logger.warn('Possible stats bug: current lost should not be less than previousLost. Overriding current lost with previousLost.', { lost: lost, previousLost: previousLost });
                  lost = previousLost;
                  remoteItem.packetsLost = lost;
                }
              } else if (report.packetsLost || report.packetsSent || report.packetsReceived) {
                if (report.packetsLost) {
                  lost = parseInt(report.packetsLost, 10) || 0;
                  previousLost = parseInt(lastResultReport.packetsLost, 10) || 0;

                  if (lost < previousLost) {
                    this.logger.warn('Possible stats bug: current lost should not be less than previousLost. Overriding current lost with previousLost.', { lost: lost, previousLost: previousLost });
                    lost = previousLost;
                    report.packetsLost = '' + lost;
                  }
                }
                if (local && report.packetsSent) {
                  total = parseInt(report.packetsSent, 10) || 0;
                  previousTotal = parseInt(lastResultReport.packetsSent, 10) || 0;
                }
                if (!local && report.packetsReceived) {
                  total = parseInt(report.packetsReceived, 10) || 0;
                  previousTotal = parseInt(lastResultReport.packetsReceived, 10) || 0;
                }
              }

              var loss = 0;
              if (total > 0) {
                loss = Math.floor(lost / total * 100);
              }

              var intervalLoss = Math.floor((lost - previousLost) / (total - previousTotal) * 100) || 0;

              // TODO: for 2.0 - remove `lost` which is an integer of packets lost,
              // and use only `loss` which is percentage loss
              var trackInfo = {
                track: track,
                kind: kind,
                bitrate: bitrate,
                lost: lost,
                muted: muted,
                loss: loss,
                intervalLoss: intervalLoss,
                bytesSent: bytesSent,
                bytesReceived: bytesReceived
              };

              if (kind === 'audio') {
                trackInfo.aecDivergentFilterFraction = parseInt(report.aecDivergentFilterFraction, 10) || 0;
                trackInfo.googEchoCanellationEchoDelayMedian = parseInt(report.googEchoCanellationEchoDelayMedian, 10) || 0;
                trackInfo.googEchoCancellationEchoDelayStdDev = parseInt(report.googEchoCancellationEchoDelayStdDev, 10) || 0;
                trackInfo.googEchoCancellationReturnLoss = parseInt(report.googEchoCancellationReturnLoss, 10) || 0;
                trackInfo.googEchoCancellationReturnLossEnhancement = parseInt(report.googEchoCancellationReturnLossEnhancement, 10) || 0;
              }

              if (kind === 'audio' && report.audioInputLevel) {
                trackInfo.audioInputLevel = parseInt(report.audioInputLevel, 10) || 0;
              }

              if (local) {
                event.tracks.push(trackInfo);
              } else {
                event.remoteTracks.push(trackInfo);
              }
            }
          }, {
            key: '_createStatsReport',
            value: function _createStatsReport(results, updateLastResult) {
              var _this3 = this;

              var event = {
                name: 'getStats',
                session: this.session,
                initiator: this.initiator,
                conference: this.conference,
                tracks: [],
                remoteTracks: []
              };

              results = this._polyFillStats(results);

              results.forEach(function (result) {
                _this3._processReport({
                  key: result.key,
                  report: result.value,
                  results: results,
                  event: event
                });
              });

              if (updateLastResult) {
                this.lastResult = results;
              }

              return event;
            }
          }, {
            key: 'collectTraces',
            value: function collectTraces() {
              var _this4 = this;

              this.connection.on('PeerConnectionTrace', function (data) {
                _this4.traceData.push(data);
              });

              this.connection.on('error', function () {
                _this4.emit('traces', {
                  name: 'trace',
                  session: _this4.session,
                  initiator: _this4.initiator,
                  conference: _this4.conference,
                  traces: _this4.traceData
                });
              });
            }
          }, {
            key: 'collectStats',
            value: function collectStats() {
              var _this5 = this;

              this.connection.on('iceConnectionStateChange', function () {
                var state = _this5.connection.iceConnectionState;

                if (state === 'connected' || state === 'completed') {
                  if (_this5._pollingInterval !== null) {
                    return;
                  }

                  var statsPoll = function statsPoll() {
                    _this5._gatherStats().then(function (reports) {
                      var event = _this5._createStatsReport(reports, true);
                      if (event.tracks.length > 0 || event.remoteTracks.length > 0) {
                        _this5.emit('stats', event);
                      }
                    });
                  };

                  if (IS_BROWSER) {
                    window.setTimeout(statsPoll, 0);
                    _this5._pollingInterval = window.setInterval(statsPoll, _this5.statsInterval);
                  }
                }

                if (state === 'disconnected') {
                  if (_this5.connection.signalingState !== 'stable') {
                    return;
                  }

                  _this5._gatherStats().then(function (reports) {
                    var event = _this5._createStatsReport(reports);
                    event.type = 'iceDisconnected';
                    _this5.emit('stats', event);
                  });
                }

                if (state === 'closed') {
                  if (_this5._pollingInterval) {
                    if (IS_BROWSER) {
                      window.clearInterval(_this5._pollingInterval);
                    }
                    _this5._pollingInterval = null;
                  }
                }
              });
            }
          }, {
            key: 'collectInitialConnectionStats',
            value: function collectInitialConnectionStats() {
              var _this6 = this;

              this.connection.on('iceConnectionStateChange', function () {
                var state = _this6.connection.iceConnectionState;

                if (state === 'checking') {
                  if (IS_BROWSER) {
                    _this6._iceStartTime = window.performance.now();
                  }
                }

                if (state === 'connected' || state === 'completed') {
                  if (_this6._haveConnectionMetrics) {
                    return;
                  }

                  _this6._haveConnectionMetrics = true;
                  var userAgent = void 0,
                      platform = void 0,
                      cores = void 0;
                  if (IS_BROWSER) {
                    _this6._iceConnectionTime = window.performance.now() - _this6._iceStartTime;
                    userAgent = window.navigator.userAgent;
                    platform = window.navigator.platform;
                    cores = window.navigator.hardwareConcurrency;
                  }

                  _this6._gatherStats().then(function (reports) {
                    var event = {
                      name: 'connect',
                      userAgent: userAgent,
                      platform: platform,
                      cores: cores,
                      session: _this6.session,
                      initiator: _this6.initiator,
                      conference: _this6.conference,
                      connectTime: _this6._iceConnectionTime,
                      hadLocalIPv6Candidate: _this6.connection.hadLocalIPv6Candidate,
                      hadRemoteIPv6Candidate: _this6.connection.hadRemoteIPv6Candidate,
                      hadLocalRelayCandidate: _this6.connection.hadLocalRelayCandidate,
                      hadRemoteRelayCandidate: _this6.connection.hadremoteRelayCandidate
                    };

                    var activeCandidatePair = null;
                    var activeCandidatePairId = void 0;
                    reports.forEach(function (_ref3) {
                      var key = _ref3.key,
                          value = _ref3.value;

                      var report = value;
                      var selected = report.type === 'candidatepair' && report.selected;
                      var specSepected = report.type === 'candidate-pair' && report.nominated && report.state === 'succeeded';
                      var chromeSelected = report.type === 'googCandidatePair' && report.googActiveConnection === 'true';
                      if (selected || chromeSelected || specSepected) {
                        activeCandidatePair = report;
                      }

                      if (report.selectedCandidatePairId) {
                        activeCandidatePairId = report.selectedCandidatePairId;
                      }

                      event.dtlsCipher = event.dtlsCipher || report.dtlsCipher;
                      event.srtpCipher = event.srtpCipher || report.srtpCipher;
                    });

                    if (!activeCandidatePair && activeCandidatePairId) {
                      var report = reports.find(function (r) {
                        return r.value.id === activeCandidatePairId;
                      });
                      if (report) {
                        activeCandidatePair = report.value;
                      }
                    }

                    if (activeCandidatePair) {
                      var localId = activeCandidatePair.localCandidateId;
                      var remoteId = activeCandidatePair.remoteCandidateId;
                      var localCandidate = void 0,
                          remoteCandidate = void 0;

                      reports.forEach(function (_ref4) {
                        var key = _ref4.key,
                            value = _ref4.value;

                        var report = value;
                        if (localId && (report.type === 'localcandidate' || report.type === 'local-candidate') && report.id === localId) {
                          localCandidate = report;
                          event.localCandidateType = report.candidateType;
                        }

                        if (remoteId && (report.type === 'remotecandidate' || report.type === 'remote-candidate') && report.id === remoteId) {
                          remoteCandidate = report;
                          event.remoteCandidateType = report.candidateType;
                        }
                      });

                      if (localCandidate && remoteCandidate) {
                        event.candidatePair = localCandidate.candidateType + ';' + remoteCandidate.candidateType;
                        event.candidatePairDetails = {
                          local: localCandidate,
                          remote: remoteCandidate
                        };
                      }

                      if (localCandidate) {
                        event.transport = localCandidate.transport || localCandidate.protocol;
                        if (localCandidate.priority) {
                          // Chrome-specific mapping;
                          // but only chrome has priority set on the candidate currently.
                          var turnTypes = {
                            2: 'udp',
                            1: 'tcp',
                            0: 'tls'
                          };

                          var priority = parseInt(localCandidate.priority, 10);
                          event.turnType = turnTypes[priority >> 24];
                          event.networkType = localCandidate.networkType;
                        }

                        event.usingIPv6 = localCandidate.ipAddress && localCandidate.ipAddress.indexOf('[') === 0;
                      }
                    }
                    _this6.emit('stats', event);
                  });
                }

                if (state === 'failed') {
                  if (IS_BROWSER) {
                    _this6._iceFailedTime = window.performance.now() - _this6._iceStartTime;
                  }
                  _this6._gatherStats().then(function (reports) {
                    var event = {
                      name: 'failure',
                      session: _this6.session,
                      initiator: _this6.initiator,
                      conference: _this6.conference,
                      failTime: _this6._iceFailureTime,
                      iceRW: 0,
                      numLocalHostCandidates: 0,
                      numLocalSrflxCandidates: 0,
                      numLocalRelayCandidates: 0,
                      numRemoteHostCandidates: 0,
                      numRemoteSrflxCandidates: 0,
                      numRemoteRelayCandidates: 0
                    };

                    reports.forEach(function (_ref5) {
                      var key = _ref5.key,
                          value = _ref5.value;

                      var report = value;
                      if (report.type === 'googCandidatePair') {
                        if (report.googWritable === 'true' && report.googReadable === 'true') {
                          event.iceRW++;
                        }
                      }
                    });

                    var localCandidates = _this6.connection.pc.localDescription.sdp.split('\r\n').filter(function (line) {
                      return line.indexOf('a=candidate:') > -1;
                    });
                    var remoteCandidates = _this6.connection.pc.remoteDescription.sdp.split('\r\n').filter(function (line) {
                      return line.indexOf('a=candidate:') > -1;
                    });

                    ['Host', 'Srflx', 'Relay'].forEach(function (type) {
                      event['numLocal' + type + 'Candidates'] = localCandidates.filter(function (line) {
                        return line.split(' ')[7] === type.toLowerCase();
                      }).length;
                      event['numRemote' + type + 'Candidates'] = remoteCandidates.filter(function (line) {
                        return line.split(' ')[7] === type.toLowerCase();
                      }).length;
                    });

                    _this6.emit('stats', event);
                    _this6.emit('traces', {
                      name: 'trace',
                      session: _this6.session,
                      initiator: _this6.initiator,
                      conference: _this6.conference,
                      traces: _this6.traceData
                    });
                  });
                }
              });
            }
          }]);

          return StatsGatherer;
        }(_events.EventEmitter);

        module.exports = StatsGatherer;

        /***/
      },

      /***/"events":
      /*!*************************!*\
        !*** external "events" ***!
        \*************************/
      /*! no static exports found */
      /***/function events(module, exports) {

        module.exports = __webpack_require__(/*! events */ "./node_modules/events/events.js");

        /***/
      }

      /******/ })
  );
});
//# sourceMappingURL=webrtc-stats-gatherer.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/wildemitter/wildemitter.js":
/*!*************************************************!*\
  !*** ./node_modules/wildemitter/wildemitter.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
WildEmitter.js is a slim little event emitter by @henrikjoreteg largely based
on @visionmedia's Emitter from UI Kit.

Why? I wanted it standalone.

I also wanted support for wildcard emitters like this:

emitter.on('*', function (eventName, other, event, payloads) {

});

emitter.on('somenamespace*', function (eventName, payloads) {

});

Please note that callbacks triggered by wildcard registered events also get
the event name as the first argument.
*/

module.exports = WildEmitter;

function WildEmitter() {}

WildEmitter.mixin = function (constructor) {
    var prototype = constructor.prototype || constructor;

    prototype.isWildEmitter = true;

    // Listen on the given `event` with `fn`. Store a group name if present.
    prototype.on = function (event, groupName, fn) {
        this.callbacks = this.callbacks || {};
        var hasGroup = arguments.length === 3,
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        func._groupName = group;
        (this.callbacks[event] = this.callbacks[event] || []).push(func);
        return this;
    };

    // Adds an `event` listener that will be invoked a single
    // time then automatically removed.
    prototype.once = function (event, groupName, fn) {
        var self = this,
            hasGroup = arguments.length === 3,
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        function on() {
            self.off(event, on);
            func.apply(this, arguments);
        }
        this.on(event, group, on);
        return this;
    };

    // Unbinds an entire group
    prototype.releaseGroup = function (groupName) {
        this.callbacks = this.callbacks || {};
        var item, i, len, handlers;
        for (item in this.callbacks) {
            handlers = this.callbacks[item];
            for (i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i]._groupName === groupName) {
                    //console.log('removing');
                    // remove it and shorten the array we're looping through
                    handlers.splice(i, 1);
                    i--;
                    len--;
                }
            }
        }
        return this;
    };

    // Remove the given callback for `event` or all
    // registered callbacks.
    prototype.off = function (event, fn) {
        this.callbacks = this.callbacks || {};
        var callbacks = this.callbacks[event],
            i;

        if (!callbacks) return this;

        // remove all handlers
        if (arguments.length === 1) {
            delete this.callbacks[event];
            return this;
        }

        // remove specific handler
        i = callbacks.indexOf(fn);
        callbacks.splice(i, 1);
        if (callbacks.length === 0) {
            delete this.callbacks[event];
        }
        return this;
    };

    /// Emit `event` with the given args.
    // also calls any `*` handlers
    prototype.emit = function (event) {
        this.callbacks = this.callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this.callbacks[event],
            specialCallbacks = this.getWildcardCallbacks(event),
            i,
            len,
            item,
            listeners;

        if (callbacks) {
            listeners = callbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, args);
            }
        }

        if (specialCallbacks) {
            len = specialCallbacks.length;
            listeners = specialCallbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, [event].concat(args));
            }
        }

        return this;
    };

    // Helper for for finding special wildcard event handlers that match the event
    prototype.getWildcardCallbacks = function (eventName) {
        this.callbacks = this.callbacks || {};
        var item,
            split,
            result = [];

        for (item in this.callbacks) {
            split = item.split('*');
            if (item === '*' || split.length === 2 && eventName.slice(0, split[0].length) === split[0]) {
                result = result.concat(this.callbacks[item]);
            }
        }
        return result;
    };
};

WildEmitter.mixin(WildEmitter);

/***/ }),

/***/ "./src/defaultTests.js":
/*!*****************************!*\
  !*** ./src/defaultTests.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SymmetricNatTest = exports.AudioBandwidthTest = exports.VideoBandwidthTest = exports.ThroughputTest = exports.ConnectivityTest = exports.VideoTest = exports.AudioTest = undefined;

var _AudioTest = __webpack_require__(/*! ./diagnostics/AudioTest */ "./src/diagnostics/AudioTest.js");

var _AudioTest2 = _interopRequireDefault(_AudioTest);

var _VideoTest = __webpack_require__(/*! ./diagnostics/VideoTest */ "./src/diagnostics/VideoTest.js");

var _VideoTest2 = _interopRequireDefault(_VideoTest);

var _ConnectivityTest = __webpack_require__(/*! ./diagnostics/ConnectivityTest */ "./src/diagnostics/ConnectivityTest.js");

var _ConnectivityTest2 = _interopRequireDefault(_ConnectivityTest);

var _DataThroughputTest = __webpack_require__(/*! ./diagnostics/DataThroughputTest */ "./src/diagnostics/DataThroughputTest.js");

var _DataThroughputTest2 = _interopRequireDefault(_DataThroughputTest);

var _VideoBandwidthTest = __webpack_require__(/*! ./diagnostics/VideoBandwidthTest */ "./src/diagnostics/VideoBandwidthTest.js");

var _VideoBandwidthTest2 = _interopRequireDefault(_VideoBandwidthTest);

var _AudioBandwidthTest = __webpack_require__(/*! ./diagnostics/AudioBandwidthTest */ "./src/diagnostics/AudioBandwidthTest.js");

var _AudioBandwidthTest2 = _interopRequireDefault(_AudioBandwidthTest);

var _SymmetricNatTest = __webpack_require__(/*! ./diagnostics/SymmetricNatTest */ "./src/diagnostics/SymmetricNatTest.js");

var _SymmetricNatTest2 = _interopRequireDefault(_SymmetricNatTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AudioTest = _AudioTest2.default;
exports.VideoTest = _VideoTest2.default;
exports.ConnectivityTest = _ConnectivityTest2.default;
exports.ThroughputTest = _DataThroughputTest2.default;
exports.VideoBandwidthTest = _VideoBandwidthTest2.default;
exports.AudioBandwidthTest = _AudioBandwidthTest2.default;
exports.SymmetricNatTest = _SymmetricNatTest2.default;

/***/ }),

/***/ "./src/diagnostics/AudioBandwidthTest.js":
/*!***********************************************!*\
  !*** ./src/diagnostics/AudioBandwidthTest.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebrtcCall = __webpack_require__(/*! ../utils/WebrtcCall */ "./src/utils/WebrtcCall.js");

var _WebrtcCall2 = _interopRequireDefault(_WebrtcCall);

var _Test2 = __webpack_require__(/*! ../utils/Test */ "./src/utils/Test.js");

var _Test3 = _interopRequireDefault(_Test2);

var _StatisticsAggregate = __webpack_require__(/*! ../utils/StatisticsAggregate */ "./src/utils/StatisticsAggregate.js");

var _StatisticsAggregate2 = _interopRequireDefault(_StatisticsAggregate);

var _testErrorCodes = __webpack_require__(/*! ../utils/testErrorCodes */ "./src/utils/testErrorCodes.js");

var _testErrorCodes2 = _interopRequireDefault(_testErrorCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // adapted from https://github.com/webrtc/testrtc/blob/master/src/js/bandwidth_test.js

var AudioBandwidthTest = function (_Test) {
  _inherits(AudioBandwidthTest, _Test);

  function AudioBandwidthTest() {
    _classCallCheck(this, AudioBandwidthTest);

    var _this = _possibleConstructorReturn(this, (AudioBandwidthTest.__proto__ || Object.getPrototypeOf(AudioBandwidthTest)).apply(this, arguments));

    _this.name = 'audioBandwidthTest';
    _this.maxAudioBitrateKbps = 510;
    _this.durationMs = 40000;
    _this.statStepMs = 100;
    _this.bweStats = new _StatisticsAggregate2.default(0.75 * _this.maxAudioBitrateKbps * 1000);
    _this.rttStats = new _StatisticsAggregate2.default();
    _this.packetsLost = null;
    _this.startTime = null;
    _this.call = null;
    // No Camera for audio only test
    _this.constraints = {
      video: false
    };

    if (_this.options.mediaOptions.audio.deviceId) {
      _this.constraints.audio = { deviceId: _this.options.mediaOptions.audio.deviceId };
    } else {
      _this.constraints.audio = true;
    }

    _this.log = [];
    _this.stats = {};
    return _this;
  }

  _createClass(AudioBandwidthTest, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      _get(AudioBandwidthTest.prototype.__proto__ || Object.getPrototypeOf(AudioBandwidthTest.prototype), 'start', this).call(this);

      if (!this.options.iceConfig.iceServers.length) {
        var error = new Error('No ice servers were provided');
        error.pcCode = _testErrorCodes2.default.ICE;
        error.details = this.log;
        return this.reject(error);
      }
      this.call = new _WebrtcCall2.default(this.options.iceConfig, this.logger);
      this.call.setIceCandidateFilter(_WebrtcCall2.default.isRelay);

      return this.doGetUserMedia(this.constraints).then(function (stream) {
        return _this2.setupCall(stream);
      }).then(this.runTest.bind(this)).then(this.completed.bind(this)).then(function () {
        if (_this2.hasError) {
          return Promise.reject(new Error('Audio Bandwidth Error'));
        }

        return _this2.resolve(_this2.getResults());
      }).catch(function (err) {
        err.pcCode = _testErrorCodes2.default.MEDIA;
        var results = _this2.getResults();
        results.error = err;
        return _this2.reject(err);
      });
    }
  }, {
    key: 'getResults',
    value: function getResults() {
      return {
        log: this.log,
        stats: this.stats,
        constraints: this.constraints
      };
    }
  }, {
    key: 'addLog',
    value: function addLog(level, msg) {
      this.logger[level.toLowerCase()](msg);
      if (msg && (typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) === 'object') {
        msg = JSON.stringify(msg);
      }
      if (level === 'error') {
        this.hasError = true;
      }
      this.log.push(level + ': ' + msg);
    }
  }, {
    key: 'doGetUserMedia',
    value: function doGetUserMedia(constraints) {
      var _this3 = this;

      this.addLog('info', { status: 'pending', constraints: constraints });
      return navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        var audioTrack = _this3.getDeviceName(stream.getAudioTracks());
        _this3.addLog('info', { status: 'success', audioTrack: audioTrack });
        return stream;
      }).catch(function (error) {
        error.pcCode = _testErrorCodes2.default.MEDIA;
        _this3.addLog('error', { 'status': 'fail', 'error': error });
        _this3.addLog('error', 'Failed to get access to local media due to error: ' + error.name);
        return _this3.reject(error);
      });
    }
  }, {
    key: 'getDeviceName',
    value: function getDeviceName(tracks) {
      if (tracks.length === 0) {
        return null;
      }
      return tracks[0].label;
    }
  }, {
    key: 'setupCall',
    value: function setupCall(stream) {
      var _this4 = this;

      stream.getTracks().forEach(function (t) {
        return _this4.call.pc1.pc.addTrack(t, stream);
      });

      return this.call.establishConnection().then(function () {
        _this4.addLog('info', { status: 'success', message: 'establishing connection' });
        _this4.startTime = new Date();
        _this4.localTrack = stream.getAudioTracks()[0];
      }, function (error) {
        _this4.addLog('warn', { status: 'error', error: error });
        return Promise.reject(error);
      });
    }
  }, {
    key: 'runTest',
    value: function runTest() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.nextTimeout = setTimeout(function () {
          _this5.gatherStats().then(resolve, reject);
        }, _this5.statStepMs);
      });
    }
  }, {
    key: 'gatherStats',
    value: function gatherStats() {
      var _this6 = this;

      var now = new Date();
      if (now - this.startTime > this.durationMs) {
        return Promise.resolve();
      }
      return this.call.pc1.getStats(this.localTrack).then(this.gotStats.bind(this)).catch(function (error) {
        return _this6.addLog('error', 'Failed to getStats: ' + error);
      });
    }
  }, {
    key: 'gotStats',
    value: function gotStats(response) {
      var _this7 = this;

      if (!response) {
        this.addLog('error', 'Got no response from stats... odd...');
      } else {
        var results = typeof response.result === 'function' ? response.result() : response;
        results.forEach(function (report) {
          if (report.availableOutgoingBitrate) {
            var value = parseInt(report.availableOutgoingBitrate, 10);
            _this7.bweStats.add(new Date(report.timestamp), value);
          }
          if (report.totalRoundTripTime || report.roundTripTime) {
            var _value = parseInt(report.totalRoundTripTime || report.roundTripTime, 10);
            _this7.rttStats.add(new Date(report.timestamp), _value);
          }
          if (report.packetsSent) {
            _this7.packetsSent = report.packetsSent;
          }
          if (report.packetsLost) {
            _this7.packetsLost = report.packetsLost;
          }
          if (report.frameWidth) {
            _this7.videoStats[0] = report.frameWidth;
          }
          if (report.frameHeight) {
            _this7.videoStats[1] = report.frameHeight;
          }
        });
      }

      return this.runTest();
    }
  }, {
    key: 'completed',
    value: function completed() {
      var stats = this.stats;

      stats.mbpsAvg = this.bweStats.getAverage() / (1000 * 1000);
      stats.mbpsMax = this.bweStats.getMax() / (1000 * 1000);

      this.addLog('info', 'Send bandwidth average: ' + stats.mbpsAvg.toFixed(2) + ' mpbs');
      this.addLog('info', 'Send bandwidth estimate max: ' + stats.mbpsMax + ' mbps');

      stats.rttAverage = this.rttStats.getAverage();
      stats.rttMax = this.rttStats.getMax();
      stats.packetsSent = parseInt(this.packetsSent);

      if (this.packetsSent) {
        stats.packetLoss = parseInt(this.packetsLost || 0, 10) / parseFloat(this.packetsSent);
      }

      this.addLog('info', 'RTT average: ' + stats.rttAverage.toFixed(2) + ' ms');
      this.addLog('info', 'RTT max: ' + stats.rttMax + ' ms');
      this.addLog('info', 'Packets sent: ' + stats.rttMax + ' ms');
      this.addLog('info', 'Packet loss %: ' + stats.packetLoss);
      return this.results;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(AudioBandwidthTest.prototype.__proto__ || Object.getPrototypeOf(AudioBandwidthTest.prototype), 'destroy', this).call(this);
      window.clearTimeout(this.nextTimeout);
      if (this.call) {
        var pc = this.call.pc1;
        if (pc.getSenders) {
          pc.getSenders().forEach(function (sender) {
            return sender.track.stop();
          });
        }
        if (pc.getTransceivers) {
          pc.getTransceivers().forEach(function (t) {
            return t.stop();
          });
        }

        this.call.close();
        this.call = null;
      }
    }
  }]);

  return AudioBandwidthTest;
}(_Test3.default);

exports.default = AudioBandwidthTest;

/***/ }),

/***/ "./src/diagnostics/AudioTest.js":
/*!**************************************!*\
  !*** ./src/diagnostics/AudioTest.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Test2 = __webpack_require__(/*! ../utils/Test */ "./src/utils/Test.js");

var _Test3 = _interopRequireDefault(_Test2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocalMedia = __webpack_require__(/*! localmedia */ "./node_modules/localmedia/localmedia.js");
var MIC_DETECTION_THRESHOLD = -100;

var AudioTest = function (_Test) {
  _inherits(AudioTest, _Test);

  function AudioTest() {
    _classCallCheck(this, AudioTest);

    var _this = _possibleConstructorReturn(this, (AudioTest.__proto__ || Object.getPrototypeOf(AudioTest)).apply(this, arguments));

    _this.name = 'audiotest';
    _this.volumeTimeout = _this.options.volumeTimeout || 5000;

    _this.localMedia = new LocalMedia({ detectSpeakingEvents: true });
    return _this;
  }

  _createClass(AudioTest, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      _get(AudioTest.prototype.__proto__ || Object.getPrototypeOf(AudioTest.prototype), 'start', this).call(this);

      var volumeCheckFailure = window.setTimeout(function () {
        _this2.logger.error('No change in mic volume');
        _this2.reject(new Error('audio timeout'));
      }, this.volumeTimeout);

      this.localMedia.start(this.options, function (err) {
        if (err) {
          _this2.logger.error('Audio Local media start failed');
          _this2.reject(err);
        } else {
          _this2.logger.log('Audio Local media started');
        }
      });

      this.localMedia.on('volumeChange', function (volume) {
        if (volume > MIC_DETECTION_THRESHOLD) {
          window.clearTimeout(volumeCheckFailure);
          _this2.resolve();
        }
      });

      this.localMedia.on('localStream', function (stream) {
        if (stream.getAudioTracks().length) {
          var audioTrack = stream.getAudioTracks()[0];
          if (audioTrack) {
            _this2.logger.log('Audio stream passed');
          } else {
            _this2.logger.error('Audio stream failed');
            _this2.reject(new Error('no audio tracks available'));
          }
        }
      });
      return this.promise;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(AudioTest.prototype.__proto__ || Object.getPrototypeOf(AudioTest.prototype), 'destroy', this).call(this);
      this.localMedia.stop();
    }
  }]);

  return AudioTest;
}(_Test3.default);

exports.default = AudioTest;

/***/ }),

/***/ "./src/diagnostics/ConnectivityTest.js":
/*!*********************************************!*\
  !*** ./src/diagnostics/ConnectivityTest.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Test2 = __webpack_require__(/*! ../utils/Test */ "./src/utils/Test.js");

var _Test3 = _interopRequireDefault(_Test2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PeerConnection = __webpack_require__(/*! rtcpeerconnection */ "./node_modules/rtcpeerconnection/rtcpeerconnection.js");

var ConnectivityTest = function (_Test) {
  _inherits(ConnectivityTest, _Test);

  function ConnectivityTest() {
    _classCallCheck(this, ConnectivityTest);

    var _this = _possibleConstructorReturn(this, (ConnectivityTest.__proto__ || Object.getPrototypeOf(ConnectivityTest)).apply(this, arguments));

    _this.name = 'connectivityTest';
    return _this;
  }

  _createClass(ConnectivityTest, [{
    key: 'logIceServers',
    value: function logIceServers() {
      var _this2 = this;

      if (this.options.iceServers) {
        this.options.iceServers.forEach(function (iceServer) {
          _this2.logger.log('Using ICE Server: ' + iceServer.urls);
         // _this2.logger.log('-------------------------: ' + JSON.stringify(iceServer));
        });
        if (this.options.iceServers.length === 0) {
          this.logger.error('no ice servers provided');
        }
      } else {
        this.logger.log('Using default ICE Servers');
      }
    }
  }, {
    key: 'start',
    value: function start() {
      var _this3 = this;

      _get(ConnectivityTest.prototype.__proto__ || Object.getPrototypeOf(ConnectivityTest.prototype), 'start', this).call(this);
      this.logIceServers();
      this.pc1 = new PeerConnection(this.options);
      this.pc2 = new PeerConnection(this.options);

      var connectivityCheckFailure = window.setTimeout(function () {
        _this3.logger.error('SymmetricNAT timeout error');
        _this3.reject(new Error('connectivity timeout'));
      }, 10000);
      this.pc2.on('ice', function (candidate) {
        _this3.logger.log('pc2 ICE candidate', candidate);
        _this3.pc1.processIce(candidate);
      });
      this.pc1.on('ice', function (candidate) {
        _this3.logger.log('pc1 ICE candidate', candidate);
        _this3.pc2.processIce(candidate);
      });
      this.pc2.on('answer', function (answer) {
        _this3.logger.log('pc2 handle answer');
        _this3.pc1.handleAnswer(answer);
      });

      // when pc1 gets the offer, instantly handle the offer by pc2
      this.pc1.on('offer', function (offer) {
        _this3.logger.log('pc1 offer');
        _this3.pc2.handleOffer(offer, function (err) {
          if (err) {
            _this3.logger.error('pc2 failed to handle offer');
            _this3.reject(err);
          }
          _this3.logger.log('pc2 handle offer');
          _this3.pc2.answer(function (err, answer) {
            if (err) {
              _this3.logger.error('pc2 failed answer');
              _this3.reject(err);
            }
            _this3.logger.log('pc2 successful ' + answer.type);
          });
        });
      });
      this.dataChannel = this.pc1.createDataChannel('testChannel');

      // generate list of messages to send over data channel
      var messageQueue = Array.apply(null, { length: 100 }).map(function (n, i) {
        return 'message ' + i;
      });

      // duplicating this is faster than cloning it
      var messageQueue2 = Array.apply(null, { length: 100 }).map(function (n, i) {
        return 'message ' + i;
      });

      var messagesReceived = 0;
      // when the data channel receives a message, remove it from the queue
      this.dataChannel.onmessage = function (msgEvent) {
        var message = messageQueue.find(function (message) {
          return message === msgEvent.data;
        });
        _this3.logger.debug('got a message', message);
        messageQueue.splice(messageQueue.indexOf(message), 1);
        messagesReceived++;
        // when all messages have been received, we're clear
        if (messageQueue.length === 0) {
          window.clearTimeout(connectivityCheckFailure);
          _this3.logger.log('Received ' + messagesReceived + ' messages');
          _this3.resolve();
        }
      };
      // when pc2 gets a data channel, send all messageQueue items on it
      this.pc2.on('addChannel', function (channel) {
        channel.onopen = function () {
          _this3.logger.log('Sending ' + messageQueue.length + ' messages');
          messageQueue2.forEach(channel.send.bind(channel));
        };
      });

      // kick it off
      this.pc1.offer();
      return this.promise;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(ConnectivityTest.prototype.__proto__ || Object.getPrototypeOf(ConnectivityTest.prototype), 'destroy', this).call(this);
      this.pc1.close();
      this.pc2.close();
    }
  }]);

  return ConnectivityTest;
}(_Test3.default);

exports.default = ConnectivityTest;

/***/ }),

/***/ "./src/diagnostics/DataThroughputTest.js":
/*!***********************************************!*\
  !*** ./src/diagnostics/DataThroughputTest.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebrtcCall = __webpack_require__(/*! ../utils/WebrtcCall */ "./src/utils/WebrtcCall.js");

var _WebrtcCall2 = _interopRequireDefault(_WebrtcCall);

var _Test2 = __webpack_require__(/*! ../utils/Test */ "./src/utils/Test.js");

var _Test3 = _interopRequireDefault(_Test2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataChannelThroughputTest = function (_Test) {
  _inherits(DataChannelThroughputTest, _Test);

  function DataChannelThroughputTest() {
    _classCallCheck(this, DataChannelThroughputTest);

    var _this = _possibleConstructorReturn(this, (DataChannelThroughputTest.__proto__ || Object.getPrototypeOf(DataChannelThroughputTest)).apply(this, arguments));

    _this.name = 'dataThroughputTest';
    _this.testDurationSeconds = 5.0;
    _this.startTime = null;
    _this.sentPayloadBytes = 0;
    _this.receivedPayloadBytes = 0;

    _this.stopSending = false;

    var makeString = function makeString() {
      _this.samplePacket = '';

      for (var i = 0; i !== 1024; ++i) {
        _this.samplePacket += 'h';
      }
    };
    makeString();

    _this.maxNumberOfPacketsToSend = 1;
    _this.bytesToKeepBuffered = 1024 * _this.maxNumberOfPacketsToSend;
    _this.lastBitrateMeasureTime = null;
    _this.lastReceivedPayloadBytes = 0;

    _this.call = null;
    _this.senderChannel = null;
    _this.receiveChannel = null;
    return _this;
  }

  _createClass(DataChannelThroughputTest, [{
    key: 'start',
    value: function start() {
      _get(DataChannelThroughputTest.prototype.__proto__ || Object.getPrototypeOf(DataChannelThroughputTest.prototype), 'start', this).call(this);

      if (!this.options.iceServers.length) {
        this.logger.error('No ice servers were provided');
        this.reject(new Error('No ice servers'));
      } else {
        this.call = new _WebrtcCall2.default(this.options, this.logger);
        this.call.setIceCandidateFilter(_WebrtcCall2.default.isRelay);
        this.senderChannel = this.call.pc1.createDataChannel(null);
        this.senderChannel.addEventListener('open', this.sendingStep.bind(this));
        this.call.pc2.on('addChannel', this.onReceiverChannel.bind(this));

        this.call.establishConnection();
      }
      return this.promise;
    }
  }, {
    key: 'onReceiverChannel',
    value: function onReceiverChannel(channel) {
      this.receiveChannel = channel;
      this.receiveChannel.addEventListener('message', this.onMessageReceived.bind(this));
    }
  }, {
    key: 'sendingStep',
    value: function sendingStep() {
      var now = new Date();
      if (!this.startTime) {
        this.startTime = now;
        this.lastBitrateMeasureTime = now;
      }

      for (var i = 0; i !== this.maxNumberOfPacketsToSend; ++i) {
        if (this.senderChannel.bufferedAmount >= this.bytesToKeepBuffered) {
          break;
        }
        this.sentPayloadBytes += this.samplePacket.length;
        this.senderChannel.send(this.samplePacket);
      }

      if (now - this.startTime >= 1000 * this.testDurationSeconds) {
        this.stopSending = true;
      } else {
        this.throughputTimeout = setTimeout(this.sendingStep.bind(this), 1);
      }
    }
  }, {
    key: 'onMessageReceived',
    value: function onMessageReceived(event) {
      this.receivedPayloadBytes += event.data.length;
      var now = new Date();
      if (now - this.lastBitrateMeasureTime >= 1000) {
        var bitrate = (this.receivedPayloadBytes - this.lastReceivedPayloadBytes) / (now - this.lastBitrateMeasureTime);
        bitrate = Math.round(bitrate * 1000 * 8) / 1000;
        this.logger.log('Transmitting at ' + bitrate + ' kbps.');
        this.lastReceivedPayloadBytes = this.receivedPayloadBytes;
        this.lastBitrateMeasureTime = now;
      }
      if (this.stopSending && this.sentPayloadBytes === this.receivedPayloadBytes) {
        this.call.close();
        this.call = null;

        var elapsedTime = Math.round((now - this.startTime) * 10) / 10000.0;
        var receivedKBits = this.receivedPayloadBytes * 8 / 1000;
        this.logger.log(receivedKBits + ' kb in ' + elapsedTime + ' seconds.');
        this.resolve();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(DataChannelThroughputTest.prototype.__proto__ || Object.getPrototypeOf(DataChannelThroughputTest.prototype), 'destroy', this).call(this);
      window.clearTimeout(this.throughputTimeout);
      if (this.call) {
        this.call.close();
        this.call = null;
      }
    }
  }]);

  return DataChannelThroughputTest;
}(_Test3.default);

exports.default = DataChannelThroughputTest;

/***/ }),

/***/ "./src/diagnostics/SymmetricNatTest.js":
/*!*********************************************!*\
  !*** ./src/diagnostics/SymmetricNatTest.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Test2 = __webpack_require__(/*! ../utils/Test */ "./src/utils/Test.js");

var _Test3 = _interopRequireDefault(_Test2);

var _parseCandidate = __webpack_require__(/*! ../utils/parseCandidate */ "./src/utils/parseCandidate.js");

var _parseCandidate2 = _interopRequireDefault(_parseCandidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SymmetricNatTest = function (_Test) {
  _inherits(SymmetricNatTest, _Test);

  function SymmetricNatTest() {
    _classCallCheck(this, SymmetricNatTest);

    var _this = _possibleConstructorReturn(this, (SymmetricNatTest.__proto__ || Object.getPrototypeOf(SymmetricNatTest)).apply(this, arguments));

    _this.name = 'symmetricNatTest';
    return _this;
  }

  _createClass(SymmetricNatTest, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      _get(SymmetricNatTest.prototype.__proto__ || Object.getPrototypeOf(SymmetricNatTest.prototype), 'start', this).call(this);

      var pc = new window.RTCPeerConnection({
        iceServers: [
            {
                urls: [
                    "turn:turn.huddldev.com:443?transport=tcp",
                    "turn:turn.huddldev.com:443?transport=udp"
                ],
                username: "huddlvideo",
                credential: "huddlvideo@123"
            }
        ]
      });
      pc.createDataChannel('symmetricNatTest');
      var candidates = {};
      pc.onicecandidate = function (e) {
        if (e.candidate && e.candidate.candidate.indexOf('srflx') !== -1) {
          var candidate = (0, _parseCandidate2.default)(e.candidate.candidate);
          _this2.logger.log('SymmetricNatTest Candidate', candidate);
          if (!candidates[candidate.relatedPort]) {
            candidates[candidate.relatedPort] = [];
          }
          candidates[candidate.relatedPort].push(candidate.port);
        } else if (!e.candidate) {
          var relatedPorts = Object.keys(candidates);
          if (relatedPorts.length === 1) {
            var relatedPort = relatedPorts[0];
            var ports = candidates[relatedPort];
            _this2.resolve(ports.length === 1 ? 'nat.asymmetric' : 'nat.symmetric');
          } else if (relatedPorts.length === 0) {
            _this2.resolve('nat.noSrflx');
          } else {
            var hasAsymmetric = false;
            var hasSymmetric = false;
            for (var i = 0; i < relatedPorts.length; i++) {
              var _relatedPort = relatedPorts[i];
              var _ports = candidates[_relatedPort];
              if (_ports.length === 1) {
                hasAsymmetric = true;
              } else {
                hasSymmetric = true;
              }
            }
            if (hasSymmetric && !hasAsymmetric) {
              _this2.resolve('nat.symmetric');
            } else if (!hasSymmetric && hasAsymmetric) {
              _this2.resolve('nat.asymmetric');
            } else if (hasSymmetric && hasAsymmetric) {
              _this2.resolve('nat.both');
            } else {
              _this2.resolve('not.noSrflx');
            }
          }
        }
      };
      pc.onendofcandidates = pc.onicecandidate.bind(pc, {});
      pc.createOffer().then(function (offer) {
        return pc.setLocalDescription(offer);
      });
      return this.promise;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(SymmetricNatTest.prototype.__proto__ || Object.getPrototypeOf(SymmetricNatTest.prototype), 'destroy', this).call(this);
    }
  }]);

  return SymmetricNatTest;
}(_Test3.default);

exports.default = SymmetricNatTest;

/***/ }),

/***/ "./src/diagnostics/VideoBandwidthTest.js":
/*!***********************************************!*\
  !*** ./src/diagnostics/VideoBandwidthTest.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebrtcCall = __webpack_require__(/*! ../utils/WebrtcCall */ "./src/utils/WebrtcCall.js");

var _WebrtcCall2 = _interopRequireDefault(_WebrtcCall);

var _Test2 = __webpack_require__(/*! ../utils/Test */ "./src/utils/Test.js");

var _Test3 = _interopRequireDefault(_Test2);

var _StatisticsAggregate = __webpack_require__(/*! ../utils/StatisticsAggregate */ "./src/utils/StatisticsAggregate.js");

var _StatisticsAggregate2 = _interopRequireDefault(_StatisticsAggregate);

var _testErrorCodes = __webpack_require__(/*! ../utils/testErrorCodes */ "./src/utils/testErrorCodes.js");

var _testErrorCodes2 = _interopRequireDefault(_testErrorCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // adapted from https://github.com/webrtc/testrtc/blob/master/src/js/bandwidth_test.js

var VideoBandwidthTest = function (_Test) {
  _inherits(VideoBandwidthTest, _Test);

  function VideoBandwidthTest() {
    _classCallCheck(this, VideoBandwidthTest);

    var _this = _possibleConstructorReturn(this, (VideoBandwidthTest.__proto__ || Object.getPrototypeOf(VideoBandwidthTest)).apply(this, arguments));

    _this.name = 'videoBandwidthTest';
    _this.maxVideoBitrateKbps = 2000;
    _this.durationMs = 40000;
    _this.statStepMs = 100;
    _this.bweStats = new _StatisticsAggregate2.default(0.75 * _this.maxVideoBitrateKbps * 1000);
    window.bweStats = _this.bweStats;
    _this.rttStats = new _StatisticsAggregate2.default();
    _this.packetsLost = null;
    _this.videoStats = [];
    _this.startTime = null;
    _this.call = null;
    // Open the camera with hd resolution specs to get a correct measurement of ramp-up time.
    _this.constraints = {
      audio: false,
      video: {
        width: {
          min: 640,
          ideal: 1280,
          max: 1920
        },
        height: {
          min: 480,
          ideal: 720,
          max: 1080
        }
      }

    };
    if (_this.options.mediaOptions.video.deviceId) {
      _this.constraints.video.deviceId = _this.options.mediaOptions.video.deviceId;
    }

    _this.providedStream = _this.options.screenStream;

    _this.log = [];
    _this.stats = {};
    return _this;
  }

  _createClass(VideoBandwidthTest, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      _get(VideoBandwidthTest.prototype.__proto__ || Object.getPrototypeOf(VideoBandwidthTest.prototype), 'start', this).call(this);

      if (!this.options.iceConfig.iceServers.length) {
        var error = new Error('No ice servers were provided');
        error.pcCode = _testErrorCodes2.default.ICE;
        error.details = this.log;
        return this.reject(error);
      }
      this.call = new _WebrtcCall2.default(this.options.iceConfig, this.logger);
      this.call.setIceCandidateFilter(_WebrtcCall2.default.isRelay);
      // FEC makes it hard to study bandwidth estimation since there seems to be
      // a spike when it is enabled and disabled. Disable it for now. FEC issue
      // tracked on: https://code.google.com/p/webrtc/issues/detail?id=3050
      this.call.disableVideoFec();
      this.call.constrainVideoBitrate(this.maxVideoBitrateKbps);

      var promise = void 0;
      if (this.providedStream) {
        promise = this.gotStream(this.providedStream);
      } else {
        promise = this.doGetUserMedia(this.constraints);
      }

      return promise.then(function () {
        var results = _this2.getResults();
        if (!_this2.hasError) {
          return _this2.resolve(results);
        } else {
          results.error = new Error('Video Bandwidth Error');
          return _this2.reject(results);
        }
      }, function (err) {
        err.pcCode = _testErrorCodes2.default.MEDIA;
        var results = _this2.getResults();
        results.error = err;
        return _this2.reject(err);
      });
    }
  }, {
    key: 'getResults',
    value: function getResults() {
      return {
        log: this.log,
        stats: this.stats,
        constraints: this.constraints
      };
    }
  }, {
    key: 'addLog',
    value: function addLog(level, msg) {
      this.logger[level.toLowerCase()](msg);
      if (msg && (typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) === 'object') {
        msg = JSON.stringify(msg);
      }
      if (level === 'error') {
        this.hasError = true;
      }
      this.log.push(level + ': ' + msg);
    }
  }, {
    key: 'doGetUserMedia',
    value: function doGetUserMedia(constraints) {
      var _this3 = this;

      this.addLog('info', { status: 'pending', constraints: constraints });
      return navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        var camera = _this3.getDeviceName(stream.getVideoTracks());
        _this3.addLog('info', { status: 'success', camera: camera });
        return _this3.gotStream(stream);
      }, function (error) {
        error.pcCode = _testErrorCodes2.default.MEDIA;
        _this3.addLog('error', { 'status': 'fail', 'error': error });
        _this3.addLog('error', 'Failed to get access to local media due to error: ' + error.name);
        return _this3.reject(error);
      });
    }
  }, {
    key: 'getDeviceName',
    value: function getDeviceName(tracks) {
      if (tracks.length === 0) {
        return null;
      }
      return tracks[0].label;
    }
  }, {
    key: 'gotStream',
    value: function gotStream(stream) {
      var _this4 = this;

      stream.getTracks().forEach(function (t) {
        return _this4.call.pc1.pc.addTrack(t, stream);
      });
      return this.call.establishConnection().then(function () {
        _this4.addLog('info', { status: 'success', message: 'establishing connection' });
        _this4.startTime = new Date();
        _this4.localStream = stream.getVideoTracks()[0];

        return new Promise(function (resolve, reject) {
          _this4.nextTimeout = setTimeout(function () {
            _this4.gatherStats().then(resolve, reject);
          }, _this4.statStepMs);
        });
      }, function (error) {
        _this4.addLog('warn', { status: 'error', error: error });
        return Promise.reject(error);
      });
    }
  }, {
    key: 'gatherStats',
    value: function gatherStats() {
      var _this5 = this;

      var now = new Date();
      if (now - this.startTime > this.durationMs) {
        return Promise.resolve(this.completed());
      }
      return this.call.pc1.getStats(null).then(this.gotStats.bind(this), function (error) {
        _this5.addLog('error', 'Failed to getStats: ' + error);
      });
    }
  }, {
    key: 'gotStats',
    value: function gotStats(response) {
      var _this6 = this;

      if (!response) {
        this.addLog('error', 'Got no response from stats... odd...');
      } else {
        var results = typeof response.result === 'function' ? response.result() : response;
        results.forEach(function (report) {
          if (report.availableOutgoingBitrate) {
            var value = parseInt(report.availableOutgoingBitrate, 10);
            _this6.bweStats.add(new Date(report.timestamp), value);
          }
          if (report.totalRoundTripTime || report.roundTripTime) {
            var _value = parseInt(report.totalRoundTripTime || report.roundTripTime, 10);
            _this6.rttStats.add(new Date(report.timestamp), _value);
          }
          if (report.packetsSent) {
            _this6.packetsSent = report.packetsSent;
          }
          if (report.packetsLost) {
            _this6.packetsLost = report.packetsLost;
          }
          if (report.frameWidth) {
            _this6.videoStats[0] = report.frameWidth;
          }
          if (report.frameHeight) {
            _this6.videoStats[1] = report.frameHeight;
          }
        });
      }
      return new Promise(function (resolve, reject) {
        _this6.nextTimeout = setTimeout(function () {
          _this6.gatherStats().then(resolve, reject);
        }, _this6.statStepMs);
      });
    }
  }, {
    key: 'completed',
    value: function completed() {
      var isWebkit = 'WebkitAppearance' in document.documentElement.style;
      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      var pc = this.call.pc1;
      if (pc.getSenders) {
        pc.getSenders().forEach(function (sender) {
          return sender.track.stop();
        });
      }
      if (pc.getTransceivers) {
        pc.getTransceivers().forEach(function (t) {
          return t.stop();
        });
      }
      this.call.close();
      this.call = null;
      var stats = this.stats;

      if (isWebkit) {
        // Checking if greater than 2 because Chrome sometimes reports 2x2 when a camera starts but fails to deliver frames.
        if (this.videoStats[0] < 2 && this.videoStats[1] < 2) {
          this.addLog('error', 'Camera failure: ' + this.videoStats[0] + 'x' + this.videoStats[1] + '. Cannot test bandwidth without a working camera.');
        } else {
          stats.resolution = this.videoStats[0] + 'x' + this.videoStats[1];
          stats.mbpsAvg = this.bweStats.getAverage() / (1000 * 1000);
          stats.mbpsMax = this.bweStats.getMax() / (1000 * 1000);
          stats.rampUpTimeMs = this.bweStats.getRampUpTime();

          this.addLog('info', 'Video resolution: ' + stats.resolution);
          this.addLog('info', 'Send bandwidth average: ' + stats.mbpsAvg.toFixed(2) + ' mpbs');
          this.addLog('info', 'Send bandwidth estimate max: ' + stats.mbpsMax + ' mbps');
          this.addLog('info', 'Send bandwidth ramp-up time: ' + stats.rampUpTimeMs + ' ms');
        }
      } else if (isFirefox) {
        if (parseInt(this.framerateMean, 10) > 0) {
          this.addLog('info', 'Frame rate mean: ' + parseInt(this.framerateMean, 10));
        } else {
          this.addLog('error', 'Frame rate mean is 0, cannot test bandwidth without a working camera.');
        }
        stats.framerateMean = this.framerateMean || null;

        stats.mbpsAvg = this.bitrateMean / (1000 * 1000);
        stats.mbpsStdDev = this.bitrateStdDev / (1000 * 1000);
        this.addLog('info', 'Send bitrate mean: ' + stats.mbpsAvg + ' mbps');
        this.addLog('info', 'Send bitrate standard deviation: ' + stats.mbpsStdDev + ' mbps');
      }
      stats.rttAverage = this.rttStats.getAverage();
      stats.rttMax = this.rttStats.getMax();

      if (this.packetsSent) {
        stats.packetLoss = parseInt(this.packetsLost || 0, 10) / parseFloat(this.packetsSent);
      }

      this.addLog('info', 'RTT average: ' + stats.rttAverage.toFixed(2) + ' ms');
      this.addLog('info', 'RTT max: ' + stats.rttMax + ' ms');
      this.addLog('info', 'Packet Loss %: ' + stats.packetLoss);
      return this.results;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(VideoBandwidthTest.prototype.__proto__ || Object.getPrototypeOf(VideoBandwidthTest.prototype), 'destroy', this).call(this);
      window.clearTimeout(this.nextTimeout);
      if (this.call) {
        this.call.close();
        this.call = null;
      }
    }
  }]);

  return VideoBandwidthTest;
}(_Test3.default);

exports.default = VideoBandwidthTest;

/***/ }),

/***/ "./src/diagnostics/VideoTest.js":
/*!**************************************!*\
  !*** ./src/diagnostics/VideoTest.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Test2 = __webpack_require__(/*! ../utils/Test */ "./src/utils/Test.js");

var _Test3 = _interopRequireDefault(_Test2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocalMedia = __webpack_require__(/*! localmedia */ "./node_modules/localmedia/localmedia.js");

var VideoTest = function (_Test) {
  _inherits(VideoTest, _Test);

  function VideoTest() {
    _classCallCheck(this, VideoTest);

    var _this = _possibleConstructorReturn(this, (VideoTest.__proto__ || Object.getPrototypeOf(VideoTest)).apply(this, arguments));

    _this.name = 'videoTest';

    _this.localMedia = new LocalMedia({ detectSpeakingEvents: true });
    return _this;
  }

  _createClass(VideoTest, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      _get(VideoTest.prototype.__proto__ || Object.getPrototypeOf(VideoTest.prototype), 'start', this).call(this);

      this.localMedia.start(this.options, function (err) {
        if (err) {
          _this2.logger.log('Video Local media start failed ' + err.name);
          _this2.reject(err);
        } else {
          _this2.logger.log('Video Local media started');
        }
      });

      this.localMedia.on('localStream', function (stream) {
        if (stream.getVideoTracks().length) {
          var videoTrack = stream.getVideoTracks()[0];
          if (videoTrack) {
            _this2.logger.log('Video stream passed');
            _this2.resolve();
          } else {
            _this2.logger.error('Video stream failed');
            _this2.reject(new Error('no video track available'));
          }
        }
      });
      return this.promise;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(VideoTest.prototype.__proto__ || Object.getPrototypeOf(VideoTest.prototype), 'destroy', this).call(this);
      this.localMedia.stop();
    }
  }]);

  return VideoTest;
}(_Test3.default);

exports.default = VideoTest;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TestSuite = __webpack_require__(/*! ./utils/TestSuite */ "./src/utils/TestSuite.js");

var _TestSuite2 = _interopRequireDefault(_TestSuite);

var _defaultTests = __webpack_require__(/*! ./defaultTests */ "./src/defaultTests.js");

var _testErrorCodes = __webpack_require__(/*! ./utils/testErrorCodes */ "./src/utils/testErrorCodes.js");

var _testErrorCodes2 = _interopRequireDefault(_testErrorCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  TestSuite: _TestSuite2.default,
  AudioTest: _defaultTests.AudioTest,
  VideoTest: _defaultTests.VideoTest,
  ConnectivityTest: _defaultTests.ConnectivityTest,
  ThroughputTest: _defaultTests.ThroughputTest,
  VideoBandwidthTest: _defaultTests.VideoBandwidthTest,
  AudioBandwidthTest: _defaultTests.AudioBandwidthTest,
  SymmetricNatTest: _defaultTests.SymmetricNatTest,
  ERROR_CODES: _testErrorCodes2.default
};

/***/ }),

/***/ "./src/utils/StatisticsAggregate.js":
/*!******************************************!*\
  !*** ./src/utils/StatisticsAggregate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatisticsAggregate = function () {
  function StatisticsAggregate(rampUpThreshold) {
    _classCallCheck(this, StatisticsAggregate);

    this.startTime = 0;
    this.sum = 0;
    this.count = 0;
    this.max = 0;
    this.rampUpThreshold = rampUpThreshold;
    this.rampUpTime = Infinity;
  }

  _createClass(StatisticsAggregate, [{
    key: "add",
    value: function add(time, datapoint) {
      if (this.startTime === 0) {
        this.startTime = time;
      }
      this.sum += datapoint;
      this.max = Math.max(this.max, datapoint);
      if (this.rampUpTime === Infinity && datapoint > this.rampUpThreshold) {
        this.rampUpTime = time;
      }
      this.count++;
    }
  }, {
    key: "getAverage",
    value: function getAverage() {
      if (this.count === 0) {
        return 0;
      }
      return this.sum / this.count;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this.max;
    }
  }, {
    key: "getRampUpTime",
    value: function getRampUpTime() {
      return this.rampUpTime - this.startTime;
    }
  }]);

  return StatisticsAggregate;
}();

exports.default = StatisticsAggregate;

/***/ }),

/***/ "./src/utils/Test.js":
/*!***************************!*\
  !*** ./src/utils/Test.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function () {
  function Test(options) {
    var _this = this;

    _classCallCheck(this, Test);

    this.options = options || {};
    this.logger = this.options.logger || console;
    this.promise = new Promise(function (resolve, reject) {
      _this.deferred = { resolve: resolve, reject: reject };
    });
  }

  _createClass(Test, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      this.timeout = window.setTimeout(function () {
        _this2.reject(new Error('Test Timeout'));
      }, 45000);
    }
  }, {
    key: 'resolve',
    value: function resolve(data) {
      this.deferred.resolve(data);
      return this.promise;
    }
  }, {
    key: 'reject',
    value: function reject(err) {
      this.deferred.reject(err);
      return this.promise;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      window.clearTimeout(this.timeout);
    }
  }]);

  return Test;
}();

exports.default = Test;

/***/ }),

/***/ "./src/utils/TestSuite.js":
/*!********************************!*\
  !*** ./src/utils/TestSuite.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestSuite = function () {
  function TestSuite(options) {
    _classCallCheck(this, TestSuite);

    options = options || {};
    this.allTestsComplete = false;
    this.stopOnFailure = false;
    this.running = false;
    this.queue = [];
    this.logger = options.logger || console;

    this.hasError = false;
    this.results = [];
  }

  _createClass(TestSuite, [{
    key: 'addTest',
    value: function addTest(test) {
      this.queue.push(test);
    }
  }, {
    key: 'start',
    value: function start() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        return _this.runNextTest().then(function () {
          if (_this.hasError) {
            var error = new Error('A test failure occurred');
            error.details = _this.results;
            return reject(error);
          }
          return resolve(_this.results);
        }, function (err) {
          err.details = _this.results;
          return reject(err);
        });
      });
    }
  }, {
    key: 'runNextTest',
    value: function runNextTest() {
      var _this2 = this;

      this.running = true;
      var test = this.queue.shift();

      if (!test) {
        this.running = false;
        return Promise.resolve();
      }

      this.activeTest = test;
      this.logger.log('Starting ' + test.name);

      var next = function next(err) {
        test.running = false;
        test.destroy();
        if (err) {
          _this2.hasError = true;
          if (_this2.stopOnFailure) {
            return Promise.reject(err);
          }
        }
        return _this2.runNextTest();
      };

      return test.start().then(function (results) {
        _this2.results.push({
          status: 'passed',
          name: test.name,
          results: results
        });
        return next();
      }, function (err) {
        _this2.hasError = true;
        var errInfo = {
          status: 'failed',
          name: test.name,
          message: err.message,
          details: err.details
        };
        _this2.results.push(errInfo);
        _this2.logger.error('Test failure', errInfo, test);
        return next(err);
      });
    }
  }, {
    key: 'stopAllTests',
    value: function stopAllTests() {
      this.activeTest.destroy();
      this.queue = [];
    }
  }]);

  return TestSuite;
}();

exports.default = TestSuite;

/***/ }),

/***/ "./src/utils/WebrtcCall.js":
/*!*********************************!*\
  !*** ./src/utils/WebrtcCall.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// adapted from https://github.com/webrtc/testrtc
var WebrtcStatsGather = __webpack_require__(/*! webrtc-stats-gatherer */ "./node_modules/webrtc-stats-gatherer/dist/webrtc-stats-gatherer.js");
var PeerConnection = __webpack_require__(/*! rtcpeerconnection */ "./node_modules/rtcpeerconnection/rtcpeerconnection.js");

var WebrtcCall = function () {
  function WebrtcCall(config, logger) {
    var _this = this;

    _classCallCheck(this, WebrtcCall);

    this.pc1 = new PeerConnection(config);
    this.pc2 = new PeerConnection(config);

    this.logger = logger;

    this.pc1Gatherer = new WebrtcStatsGather(this.pc1);
    this.pc1Gatherer.on('stats', function (stats) {
      return _this.logger.log('pc1 webrtc stats', stats);
    });
    this.pc1Gatherer.collectInitialConnectionStats();
    this.pc1Gatherer.collectStats();

    this.pc2Gatherer = new WebrtcStatsGather(this.pc2);
    this.pc2Gatherer.on('stats', function (stats) {
      return _this.logger.log('pc2 webrtc stats', stats);
    });
    this.pc2Gatherer.collectInitialConnectionStats();
    this.pc2Gatherer.collectStats();

    this.pc1.on('ice', function (candidate) {
      _this.logger.log('webrtc call pc1 candidate', candidate);
      _this.onIceCandidate(_this.pc2, candidate);
    });
    this.pc2.on('ice', function (candidate) {
      _this.logger.log('webrtc call pc2 candidate', candidate);
      _this.onIceCandidate(_this.pc1, candidate);
    });

    this.iceCandidateFilter = WebrtcCall.noFilter;
  }

  _createClass(WebrtcCall, [{
    key: 'establishConnection',
    value: function establishConnection() {
      var _this2 = this,
          _arguments = arguments;

      return this.pc1.pc.createOffer().then(this.gotOffer.bind(this), function () {
        var _logger;

        return (_logger = _this2.logger).error.apply(_logger, _arguments);
      });
    }
  }, {
    key: 'close',
    value: function close() {
      this.pc1.close();
      this.pc2.close();
    }

    // When the peerConnection is closed the statsCb is called once with an array
    // of gathered stats.

  }, {
    key: 'gatherStats',
    value: function gatherStats(peerConnection, interval) {
      var stats = [];
      var statsCollectTime = [];

      return new Promise(function (resolve, reject) {
        var getStats = function getStats() {
          window.pc = peerConnection;
          if (peerConnection.signalingState === 'closed') {
            return resolve({ stats: stats, statsCollectTime: statsCollectTime });
          }
          setTimeout(function () {
            var getStatsTimeout = setTimeout(function () {
              resolve({ stats: stats, statsCollectTime: statsCollectTime });
            }, 1000);
            peerConnection.getStats(null).then(function (response) {
              clearTimeout(getStatsTimeout);
              getStatsTimeout = null;
              gotStats(response);
            });
          }, interval);
        };

        var gotStats = function gotStats(response) {
          if (!response) {
            return getStats();
          }
          var now = Date.now();
          var results = response.result ? response.result() : response;
          stats = results;
          statsCollectTime = Object.keys(results).map(function () {
            return now;
          });
          getStats();
        };

        getStats();
      });
    }
  }, {
    key: 'gotOffer',
    value: function gotOffer(offer) {
      // if (this.constrainOfferToRemoveVideoFec) {
      //   offer.sdp = offer.sdp.replace(/(m=video 1 [^\r]+)(116 117)(\r\n)/g, '$1\r\n');
      //   offer.sdp = offer.sdp.replace(/a=rtpmap:116 red\/90000\r\n/g, '');
      //   offer.sdp = offer.sdp.replace(/a=rtpmap:117 ulpfec\/90000\r\n/g, '');
      // }
      this.pc1.pc.setLocalDescription(offer);
      this.pc2.pc.setRemoteDescription(offer);
      return this.pc2.pc.createAnswer().then(this.gotAnswer.bind(this), console.error.bind(console));
    }
  }, {
    key: 'gotAnswer',
    value: function gotAnswer(answer) {
      if (this.constrainVideoBitrateKbps) {
        answer.sdp = answer.sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + this.constrainVideoBitrateKbps + '\r\n');
      }
      this.pc2.pc.setLocalDescription(answer);
      return this.pc1.pc.setRemoteDescription(answer);
    }
  }, {
    key: 'onIceCandidate',
    value: function onIceCandidate(otherPeer, event) {
      if (event.candidate) {
        var parsed = this.parseCandidate(event.candidate.candidate);
        if (this.iceCandidateFilter(parsed)) {
          otherPeer.pc.addIceCandidate(event.candidate);
        }
      }
    }
  }, {
    key: 'parseCandidate',
    value: function parseCandidate(text) {
      var candidateStr = 'candidate:';
      var pos = text.indexOf(candidateStr) + candidateStr.length;
      var fields = text.substr(pos).split(' ');
      return {
        'type': fields[7],
        'protocol': fields[2],
        'address': fields[4]
      };
    }
  }, {
    key: 'setIceCandidateFilter',
    value: function setIceCandidateFilter(filter) {
      this.iceCandidateFilter = filter;
    }

    // Remove video FEC if available on the offer.

  }, {
    key: 'disableVideoFec',
    value: function disableVideoFec() {
      this.constrainOfferToRemoveVideoFec = true;
    }

    // Constraint max video bitrate by modifying the SDP when creating an answer.

  }, {
    key: 'constrainVideoBitrate',
    value: function constrainVideoBitrate(maxVideoBitrateKbps) {
      this.constrainVideoBitrateKbps = maxVideoBitrateKbps;
    }
  }], [{
    key: 'noFilter',
    value: function noFilter() {
      return true;
    }
  }, {
    key: 'isRelay',
    value: function isRelay(candidate) {
      return candidate.type === 'relay';
    }
  }]);

  return WebrtcCall;
}();

exports.default = WebrtcCall;

/***/ }),

/***/ "./src/utils/parseCandidate.js":
/*!*************************************!*\
  !*** ./src/utils/parseCandidate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// parseCandidate from https://github.com/fippo/sdp
function parseCandidate(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parts[1],
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      default:
        // Unknown extensions are silently ignored.
        break;
    }
  }
  return candidate;
}

exports.default = parseCandidate;

/***/ }),

/***/ "./src/utils/testErrorCodes.js":
/*!*************************************!*\
  !*** ./src/utils/testErrorCodes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ICE = 1;
var MEDIA = 2;

module.exports = {
  ICE: ICE,
  MEDIA: MEDIA
};

/***/ })

/******/ });
});
//# sourceMappingURL=webrtc-troubleshooter.js.map