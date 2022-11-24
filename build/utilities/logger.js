"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var logger = function (req, res, next) {
    var url = req.baseUrl;
    console.log(url + ' visited');
    next();
};
exports.logger = logger;
