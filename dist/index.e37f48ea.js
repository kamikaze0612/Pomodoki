// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aD7Zm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _timerViewJs = require("./views/timerView.js");
var _timerViewJsDefault = parcelHelpers.interopDefault(_timerViewJs);
var _settingsViewJs = require("./views/settingsView.js");
var _settingsViewJsDefault = parcelHelpers.interopDefault(_settingsViewJs);
const controlTimer = function() {
    const currentTimerMode = _modelJs.getTimerObject("pomodoro");
    (0, _timerViewJsDefault.default).setTimer(currentTimerMode);
};
const controlApplySettings = function() {
    const currentTimerMode = (0, _timerViewJsDefault.default).getTimerMode();
    const currentTimerObject = _modelJs.getTimerObject(currentTimerMode);
    (0, _timerViewJsDefault.default).setTimer(currentTimerObject);
};
const controlTab = function() {
    const currentTimerMode = (0, _timerViewJsDefault.default).getTimerMode();
    const currentTimerObject = _modelJs.getTimerObject(currentTimerMode);
    (0, _timerViewJsDefault.default).setTimer(currentTimerObject);
};
const controlNextSession = function() {
    (0, _timerViewJsDefault.default).setSession(_modelJs.state.sessionCounter);
    const currentTimerMode = (0, _timerViewJsDefault.default).getTimerMode();
    const nextTimerMode = _modelJs.getNextTimerName(currentTimerMode);
    const autoStart = {
        nextTimer: nextTimerMode,
        autoStartPomodoro: _modelJs.state.autoStartPomodoro,
        autoStartBreak: _modelJs.state.autoStartBreak
    };
    if (nextTimerMode !== "pomodoro") _modelJs.state.sessionCounter++;
    const nextTimerObject = _modelJs.getTimerObject(nextTimerMode);
    (0, _timerViewJsDefault.default).setTimer(nextTimerObject);
    return autoStart;
};
const controlResetSessions = function() {
    _modelJs.state.sessionCounter = 1;
    (0, _timerViewJsDefault.default).setSession(_modelJs.state.sessionCounter);
};
const controlSliderBtn = function(value) {
    if (value === "shortBreak") _modelJs.state.autoStartBreak = !_modelJs.state.autoStartBreak;
    if (value === "pomodoro") _modelJs.state.autoStartPomodoro = !_modelJs.state.autoStartPomodoro;
};
const init = function() {
    (0, _timerViewJsDefault.default).addHandlerStart(controlTimer, controlNextSession);
    (0, _timerViewJsDefault.default).addHandlerTab(controlTab);
    (0, _timerViewJsDefault.default).addHandlerNextSession(controlNextSession, _modelJs.state, _modelJs.getNextTimerName);
    (0, _timerViewJsDefault.default).addHandlerReset(controlResetSessions);
    (0, _settingsViewJsDefault.default).addHandlerTimerSettings(controlApplySettings, _modelJs.state);
    (0, _settingsViewJsDefault.default).addHandlerApplyColorSettings(controlApplySettings, _modelJs.state);
    (0, _settingsViewJsDefault.default).addHandlerSliderBtn(controlSliderBtn);
};
init();

},{"./model.js":"Y4A21","./views/timerView.js":"fNwdq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/settingsView.js":"9tyw1"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getTimerObject", ()=>getTimerObject);
parcelHelpers.export(exports, "getNextTimerName", ()=>getNextTimerName);
const state = {
    colors: {
        red: [
            "#c84242",
            "#ce5555",
            "#d36868",
            "#b43b3b"
        ],
        pink: [
            "#ae3ec9",
            "#b651ce",
            "#be65d4",
            "#8b32a1"
        ],
        blue: [
            "#1971c2",
            "#307fc8",
            "#478dce",
            "#145a9b"
        ],
        green: [
            "#2f9e44",
            "#44a857",
            "#59b169",
            "#267e36"
        ],
        purple: [
            "#7048e8",
            "#7e5aea",
            "#8d6ded",
            "#5a3aba"
        ],
        yellow: [
            "#f08c00",
            "#f2981a",
            "#f3a333",
            "#c07000"
        ]
    },
    autoStartPomodoro: false,
    autoStartBreak: true,
    longBreakIntervals: 4,
    sessionCounter: 1,
    timers: {
        pomodoro: {
            name: "pomodoro",
            timer: 3,
            colorSet: [
                "#c84242",
                "#ce5555",
                "#d36868",
                "#b43b3b"
            ]
        },
        shortBreak: {
            name: "shortBreak",
            timer: 2,
            colorSet: [
                "#2f9e44",
                "#44a857",
                "#59b169",
                "#267e36"
            ]
        },
        longBreak: {
            name: "longBreak",
            timer: 1,
            colorSet: [
                "#1971c2",
                "#307fc8",
                "#478dce",
                "#145a9b"
            ]
        }
    }
};
const getTimerObject = function(timerModeName) {
    return state.timers[timerModeName];
};
const getNextTimerName = function(currentTimerName) {
    if (currentTimerName === "pomodoro" && state.sessionCounter % state.longBreakIntervals !== 0) return "shortBreak";
    if (currentTimerName === "pomodoro" && state.sessionCounter % state.longBreakIntervals === 0) return "longBreak";
    return "pomodoro";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fNwdq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class TimerView {
    #modeTabsContainer = document.querySelector(".timer--tabs-box");
    #modeTabs = document.querySelectorAll(".timer--tab");
    #timerBtn = document.querySelector(".btn--timer");
    #timerNextSessionBtn = document.querySelector(".btn--next-session");
    #timerDisplay = document.querySelector(".counter--num-text");
    #timerSessionResetBtn = document.querySelector(".timer--session-reset-btn");
    #timerState = false;
    #timerID = null;
    #checkTimerID = null;
    #currentTimerValue = 0;
    #currentTimerBackground = null;
    #sessionCounter = 1;
    /**************** EVENT HANDLERS ****************/ addHandlerReset(handler) {
        this.#timerSessionResetBtn.addEventListener("click", ()=>{
            if (window.confirm("Are you sure to reset your sessions?")) {
                this.#sessionCounter = 1;
                handler();
            }
        });
    }
    addHandlerNextSession(handler, state, getNextTimerName) {
        this.#timerNextSessionBtn.addEventListener("click", ()=>{
            /* if (
        getNextTimerName(this.getTimerMode()) === 'shortBreak' ||
        (getNextTimerName(this.getTimerMode()) === 'longBreak' &&
          state.autoStartBreak)
      ) {
      }

      if (
        getNextTimerName(this.getTimerMode()) === 'pomodoro' &&
        state.autoStartBreak
      ) {
      } else  */ this._stopTimer();
            handler();
        });
    }
    addHandlerStart(handler, goToNextSession) {
        this._timerBtnClickHandler(goToNextSession);
        handler();
    }
    addHandlerTab(handler) {
        this.#modeTabsContainer.addEventListener("click", (e)=>{
            if (!e.target.classList.contains("timer--tab")) return;
            this._activateTab(e.target);
            handler();
            this._stopTimer();
        });
    }
    /**************** TIMER FUNCTIONS ****************/ _timerBtnClickHandler(goToNextSession) {
        this.#timerBtn.addEventListener("click", ()=>{
            if (this.#timerState) this._stopTimer();
            else this._startTimer(goToNextSession);
        });
    }
    _clickBtn() {
        this.#timerBtn.classList.add("clicked");
        this.#timerBtn.textContent = "pause";
        this.#timerNextSessionBtn.classList.remove("hidden");
        this.#timerState = true;
    }
    _unClickBtn() {
        this.#timerBtn.classList.remove("clicked");
        this.#timerBtn.textContent = "start";
        this.#timerNextSessionBtn.classList.add("hidden");
        this.#timerState = false;
    }
    _resumeTimer(goToNextSession) {
        this.#timerID = setInterval(()=>{
            if (this.#currentTimerValue !== 0) {
                this.#currentTimerValue--;
                this._displayTimer();
            } else {
                const autoStart = goToNextSession();
                if (autoStart.nextTimer === "pomodoro" && autoStart.autoStartPomodoro) ;
                else if (autoStart.nextTimer !== "pomodoro" && autoStart.autoStartBreak) ;
                else this._stopTimer();
            }
        }, 1000);
    }
    _pauseTimer() {
        clearInterval(this.#timerID);
    }
    _startTimer(goToNextSession) {
        this._resumeTimer(goToNextSession);
        this._clickBtn();
    }
    _stopTimer() {
        this._unClickBtn();
        this._pauseTimer();
    }
    _displayTimer() {
        this.#timerDisplay.textContent = `${String(Math.floor(this.#currentTimerValue / 60)).padStart(2, "0")}:${String(this.#currentTimerValue % 60).padStart(2, "0")}`;
    }
    _displaySession() {
        this.#timerSessionResetBtn.textContent = `#${this.#sessionCounter}`;
    }
    setSession(currentSessionNum) {
        this.#sessionCounter = currentSessionNum;
        this._displaySession();
    }
    setTimer(timerObject) {
        this.#currentTimerValue = timerObject.timer;
        this.#currentTimerBackground = timerObject.colorSet;
        this._setTimerBackground(this.#currentTimerBackground);
        this._displayTimer();
        this.#modeTabs.forEach((tab)=>{
            if (tab.dataset.mode === timerObject.name) this._activateTab(tab);
        });
    }
    getTimerMode() {
        let activeTimerModeName = "";
        this.#modeTabs.forEach((tab)=>{
            if (tab.classList.contains("active")) activeTimerModeName = tab.dataset.mode;
        });
        return activeTimerModeName;
    }
    _setTimerBackground(curTimeBackground) {
        document.documentElement.style.setProperty("--primary-color", curTimeBackground[0]);
        document.documentElement.style.setProperty("--light-color", curTimeBackground[1]);
        document.documentElement.style.setProperty("--light-color-tint--1", curTimeBackground[2]);
        document.documentElement.style.setProperty("--dense-color", curTimeBackground[3]);
    /* --primary-color: #c84242;
    --light-color: #ce5555;
    --light-color-tint--1: #d36868;
    --dense-color: #a03535; */ }
    /**************** TAB FUNCTIONS ****************/ _activateTab(selectedTab) {
        this.#modeTabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        selectedTab.classList.add("active");
    }
}
exports.default = new TimerView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9tyw1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SettingsView {
    #navBar = document.querySelector(".nav-bar");
    #modalForm = document.querySelector(".modal-form");
    #modalOverlay = document.querySelector(".overlay");
    #modals = document.querySelectorAll(".modal");
    #modalCloseBtns = document.querySelectorAll(".btn-close");
    #modalSliderBtns = document.querySelectorAll(".btn-slider-container");
    #pomodoroInput = document.getElementById("timer-pomodoro");
    #shortBreakInput = document.getElementById("timer-short-br");
    #longBreakInput = document.getElementById("timer-long-br");
    #colorThemeSelectBtns = document.querySelectorAll(".btn-color-theme-select");
    #colorThemeBtns = document.querySelectorAll(".btn-color-theme");
    #colorThemeContainer = document.querySelector(".color-theme-btn-container");
    #colorSelectTextContainer = document.querySelector(".color-select-text");
    #colorThemeBtnSelectContainer = document.querySelector(".color-theme-btn-select-container");
    #breakIntervalInput = document.getElementById("break-interval");
    #selectedTimerMode = null;
    #selectedColorSet = null;
    #colors = {
        red: [
            "#c84242"
        ],
        pink: [
            "#ae3ec9"
        ],
        blue: [
            "#1971c2"
        ],
        green: [
            "#2f9e44"
        ],
        purple: [
            "#7048e8"
        ],
        yellow: [
            "#f08c00"
        ]
    };
    constructor(){
        this._handlerNavButton();
        this._timerColorThemeClickHandler();
    }
    addHandlerTimerSettings(handler, state) {
        this.#modalForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            if (this.#pomodoroInput.value !== "" || this.#shortBreakInput.value !== "" || this.#longBreakInput.value !== "") {
                state.timers.pomodoro.timer = +this.#pomodoroInput.value * 60;
                this.#pomodoroInput.value = "";
                state.timers.shortBreak.timer = +this.#shortBreakInput.value * 60;
                this.#shortBreakInput.value = "";
                state.timers.longBreak.timer = +this.#longBreakInput.value * 60;
                this.#longBreakInput.value = "";
            }
            if (this.#breakIntervalInput.value !== "") {
                state.longBreakIntervals = +this.#breakIntervalInput.value;
                this.#breakIntervalInput.value = "";
            }
            this._closeModal();
            handler();
        });
    }
    addHandlerApplyColorSettings(handler, state) {
        this.#colorThemeBtnSelectContainer.addEventListener("click", (e)=>{
            if (!e.target.classList.contains("btn-color-theme-select")) return;
            this.#selectedColorSet = this._chooseColor(e.target);
            this.#selectedColorSet = e.target.dataset.color;
            this.#colorThemeBtns.forEach((button)=>{
                this.#colorThemeBtns.forEach((button)=>{
                    if (button.dataset.timer === this.#selectedTimerMode) button.style.backgroundColor = this.#colors[this.#selectedColorSet];
                });
            });
            state.timers[this.#selectedTimerMode].colorSet = state.colors[this.#selectedColorSet];
            this.#modals[1].classList.add("hidden");
            this.#modals[0].classList.remove("hidden");
            handler();
        });
    }
    addHandlerSliderBtn(handler) {
        this.#modalSliderBtns.forEach((slider)=>{
            slider.addEventListener("click", (e)=>{
                slider.classList.toggle("btn-slider-active");
                handler(slider.dataset.name);
            });
        });
    /* btn-slider-active */ }
    _handlerNavButton() {
        this.#navBar.addEventListener("click", (e)=>{
            if (!e.target.classList.contains("btn-nav")) return;
            const curModal = e.target.dataset.target;
            this._openModal(curModal);
        });
        this.#modalCloseBtns.forEach((button)=>{
            button.addEventListener("click", ()=>this._closeModal());
        });
        this.#modalOverlay.addEventListener("click", ()=>this._closeModal());
    }
    _timerColorThemeClickHandler() {
        this.#colorThemeContainer.addEventListener("click", (e)=>{
            e.target.classList.contains;
            this.#modals[0].classList.add("hidden");
            this.#modals[1].classList.remove("hidden");
            if (e.target.dataset.timer === "pomodoro") this.#colorSelectTextContainer.textContent = "Pick a color for Pomodoro";
            if (e.target.dataset.timer === "shortBreak") this.#colorSelectTextContainer.textContent = "Pick a color for Short Break";
            if (e.target.dataset.timer === "longBreak") this.#colorSelectTextContainer.textContent = "Pick a color for Long Break";
            this.#selectedTimerMode = e.target.dataset.timer;
        });
    }
    _chooseColor(selectedColorBtn) {
        this.#colorThemeSelectBtns.forEach((button)=>{
            button.classList.remove("selected");
        });
        selectedColorBtn.classList.add("selected");
        return selectedColorBtn.dataset.color;
    }
    _openModal(curModal) {
        this.#modals.forEach((modal)=>{
            if (modal.classList.contains(`modal__${curModal}`)) {
                modal.classList.remove("hidden");
                this.#modalOverlay.classList.remove("hidden");
            }
        });
    }
    _closeModal() {
        this.#modals.forEach((modal)=>{
            modal.classList.add("hidden");
        });
        this.#modalOverlay.classList.add("hidden");
    }
}
exports.default = new SettingsView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aD7Zm","aenu9"], "aenu9", "parcelRequireb6dc")

//# sourceMappingURL=index.e37f48ea.js.map
