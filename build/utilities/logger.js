"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var url = req.baseUrl;
    console.log(url + ' visited');
    next();
};
exports.default = logger;
