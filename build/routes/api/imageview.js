"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var datacheck_1 = require("../../utilities/datacheck");
var image_1 = __importDefault(require("../../utilities/image"));
var logger_1 = __importDefault(require("../../utilities/logger"));
var paths_1 = require("../../utilities/paths");
var image = express_1.default.Router();
var fileName;
var width;
var height;
var filePath;
var chkPassed;
var chkError;
image.get('/', logger_1.default, function (req, res) {
    //get data from url
    fileName = String(req.query.filename);
    width = Number(req.query.width);
    height = Number(req.query.height);
    filePath = path_1.default.resolve(paths_1.imgFullPath + '/' + fileName + '.jpg');
    if (!(0, datacheck_1.checkFileName)(fileName)) { // Validate fileName
        chkError = datacheck_1.checkError;
        res.send(datacheck_1.checkError);
        return;
    }
    if (!(0, datacheck_1.checkWidth)(width)) { // Validate width
        chkError = datacheck_1.checkError;
        res.send(datacheck_1.checkError);
        return;
    }
    if (!(0, datacheck_1.checkHeight)(height)) { // Validate height
        chkError = datacheck_1.checkError;
        res.send(datacheck_1.checkError);
        return;
    }
    if (!(0, datacheck_1.checkIfFileExists)(filePath)) { // Check if Image in folder named 'full' exists 
        chkError = datacheck_1.checkError;
        res.send(datacheck_1.checkError);
        return;
    }
    // Switch filePath from folder named 'full' to another folder named 'thumb'
    filePath = path_1.default.resolve(paths_1.imgThumbPath + '/' + fileName + '_thumb(' + width + 'x' + height + ').jpg');
    if ((0, datacheck_1.checkIfCacheFileExists)(filePath)) { // Check if Image in folder named 'thumb' exists
        console.log('cached found');
        res.sendFile(path_1.default.resolve(filePath));
        return;
    }
    (0, image_1.default)(fileName, width, height).then(function () {
        return res.sendFile(path_1.default.resolve(filePath));
    });
});
exports.default = image;
