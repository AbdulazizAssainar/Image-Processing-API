"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgThumbPath = exports.imgFullPath = exports.srcPath = void 0;
var path_1 = __importDefault(require("path"));
var srcPath = process.cwd();
exports.srcPath = srcPath;
var imgFullPath = path_1.default.resolve(srcPath + '/images/full/');
exports.imgFullPath = imgFullPath;
var imgThumbPath = path_1.default.resolve(srcPath + '/images/thumb/');
exports.imgThumbPath = imgThumbPath;
