"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.image = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var datacheckModule = __importStar(require("../../utilities/datacheck"));
var imageModule = __importStar(require("../../utilities/image"));
var pathModule = __importStar(require("../../utilities/paths"));
var image = express_1.default.Router();
exports.image = image;
var fileName;
var width;
var height;
var filePath;
var chkPassed;
var chkError;
image.get('/', function (req, res) {
    //get data from url
    fileName = String(req.query.filename);
    width = Number(req.query.width);
    height = Number(req.query.height);
    filePath = path_1.default.resolve(pathModule.imgFullPath + '/' + fileName + '.jpg');
    if (!datacheckModule.checkFileName(fileName)) {
        // Validate fileName
        chkError = datacheckModule.checkError;
        res.send(datacheckModule.checkError);
        return;
    }
    if (!datacheckModule.checkWidth(width)) {
        // Validate width
        chkError = datacheckModule.checkError;
        res.send(datacheckModule.checkError);
        return;
    }
    if (!datacheckModule.checkHeight(height)) {
        // Validate height
        chkError = datacheckModule.checkError;
        res.send(datacheckModule.checkError);
        return;
    }
    if (!datacheckModule.checkIfFileExists(filePath)) {
        // Check if Image in folder named 'full' exists
        chkError = datacheckModule.checkError;
        res.send(datacheckModule.checkError);
        return;
    }
    // Switch filePath from folder named 'full' to another folder named 'thumb'
    filePath = path_1.default.resolve(pathModule.imgThumbPath +
        '/' +
        fileName +
        '_thumb(' +
        width +
        'x' +
        height +
        ').jpg');
    if (datacheckModule.checkIfCacheFileExists(filePath)) {
        // Check if Image in folder named 'thumb' exists
        console.log('cached found');
        res.sendFile(path_1.default.resolve(filePath));
        return;
    }
    imageModule.createImg(fileName, width, height).then(function () {
        // Create cache image in folder named 'thumb'
        return res.sendFile(path_1.default.resolve(filePath));
    });
});
