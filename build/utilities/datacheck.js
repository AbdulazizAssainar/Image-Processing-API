"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkError = exports.checkIfCacheFileExists = exports.checkIfFileExists = exports.checkHeight = exports.checkWidth = exports.checkFileName = void 0;
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var image = express_1.default.Router();
var cachePath;
var checkPassed;
var checkError;
exports.checkError = checkError;
function checkFileName(fileName) {
    if (fileName == 'undefined') {
        exports.checkError = checkError = 'Your filename is ' + fileName;
        return false;
    }
    if (fileName == '') {
        exports.checkError = checkError = 'Your filename is empty';
        return false;
    }
    return true;
}
exports.checkFileName = checkFileName;
function checkWidth(width) {
    if (isNaN(width)) {
        exports.checkError = checkError =
            'Please check your URL, Width not found or not written in digits';
        return false;
    }
    return true;
}
exports.checkWidth = checkWidth;
function checkHeight(height) {
    if (isNaN(height)) {
        exports.checkError = checkError =
            'Please check your URL, Height not found or not written in digits';
        return false;
    }
    return true;
}
exports.checkHeight = checkHeight;
function checkIfFileExists(path) {
    if (!fs_1.default.existsSync(path)) {
        exports.checkError = checkError = 'Please check your URL, File not found!';
        return false;
    }
    return true;
}
exports.checkIfFileExists = checkIfFileExists;
function checkIfCacheFileExists(path) {
    if (fs_1.default.existsSync(path)) {
        return true;
    }
    return false;
}
exports.checkIfCacheFileExists = checkIfCacheFileExists;
