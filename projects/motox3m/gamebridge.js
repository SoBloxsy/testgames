!function (_0x2e79ce, _0x322150) {
  if ('object' == typeof exports && "object" == typeof module) {
    module.exports = _0x322150();
  } else {
    if ('function' == typeof define && define.amd) {
      define([], _0x322150);
    } else {
      var _0x3946d2 = _0x322150();
      for (var _0x4dc77d in _0x3946d2) ('object' == typeof exports ? exports : _0x2e79ce)[_0x4dc77d] = _0x3946d2[_0x4dc77d];
    }
  }
}(self, () => (() => {
  'use strict';

  var _0x1f23ae = {
    'r': _0x5a73b4 => {
      if ('undefined' != typeof Symbol && Symbol.toStringTag) {
        Object.defineProperty(_0x5a73b4, Symbol.toStringTag, {
          'value': "Module"
        });
      }
      Object.defineProperty(_0x5a73b4, "__esModule", {
        'value': true
      });
    }
  };
  var _0x318e58 = {};
  _0x1f23ae.r(_0x318e58);
  const _0xd621db = [];
  function _0x57378f() {
    const _0x1da90d = document.querySelector("#gamebridge-sdk");
    const _0x53eb0f = _0x1da90d.parentNode;
    const _0x5c1730 = document.createElement("script");
    const _0x3010cb = _0x1da90d.getAttribute("data-version") || "1.0.6";
    _0x5c1730.id = "gamebridge-sdk-core";
    _0x5c1730.src = "https://sdk.enjoy4fun.com/sdk-" + _0x3010cb + ".js";
    _0x5c1730.type = "text/javascript";
    (function (_0x4326c5) {
      const _0xf0f2d7 = ["showAd", 'showPreroll', "showStart", "showPause", 'showNext', 'showBrowse', 'showReward'];
      if (!window.gamebridge) {
        const _0x119d61 = {
          'version': _0x4326c5,
          'ready': false
        };
        _0xf0f2d7.forEach(_0x124a64 => {
          _0x119d61[_0x124a64] = function () {
            _0xd621db.push({
              'fn': _0x124a64,
              'arguments': arguments
            });
          };
        });
        window.gamebridge = _0x119d61;
      }
    })(_0x3010cb);
    ["data-gameid", 'data-ad-frequency', "data-test"].forEach(_0x15c94f => {
      if (_0x1da90d.getAttribute(_0x15c94f) && "data-version" !== _0x15c94f) {
        _0x5c1730.setAttribute(_0x15c94f, _0x1da90d.getAttribute(_0x15c94f));
      }
    });
    _0x5c1730.onload = () => {
      const _0xd41718 = setInterval(() => {
        if (window.gamebridge.ready) {
          window.clearInterval(_0xd41718);
          if (_0xd621db.length) {
            _0xd621db.forEach(_0x61374b => {
              window.gamebridge[_0x61374b.fn](..._0x61374b.arguments);
            });
          }
        }
      }, 0x64);
    };
    if (_0x53eb0f && _0x53eb0f.lastChild) {
      if (_0x53eb0f.lastChild === _0x1da90d) {
        _0x53eb0f.appendChild(_0x5c1730);
      } else {
        _0x53eb0f.insertBefore(_0x5c1730, _0x1da90d.nextSibling);
      }
    } else {
      document.body.appendChild(_0x5c1730);
    }
  }
  _0x57378f();
  return _0x318e58;
})());
