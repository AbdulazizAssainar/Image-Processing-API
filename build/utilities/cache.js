"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cache = (req, res, next) => {
    let url = req.url;
    console.log(url + ' visited');
};
exports.default = cache;
