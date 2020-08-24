"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("@/store/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  if (_index["default"].getters["Auth/accessToken"] != "") return _axios["default"].create({
    baseURL: "http://travel.test/api/v1/",
    headers: {
      Authorization: _index["default"].getters["Auth/accessToken"]
    }
  });else return _axios["default"].create({
    baseURL: "http://travel.test/api/v1/",
    timeout: 1000
  });
};

exports["default"] = _default;