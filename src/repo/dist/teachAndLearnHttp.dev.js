"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _store = _interopRequireDefault(require("@/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseURL = "http://travel.test"; // let baseURL = "";

var _default = function _default() {
  if (_store["default"].getters["Auth/accessToken"] != "") return _axios["default"].create({
    baseURL: "".concat(baseURL, "/api/v1/"),
    headers: {
      Authorization: _store["default"].getters["Auth/accessToken"]
    }
  });else return _axios["default"].create({
    baseURL: "".concat(baseURL, "/api/v1/"),
    timeout: 1000
  });
};

exports["default"] = _default;