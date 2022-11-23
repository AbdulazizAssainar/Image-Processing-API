"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var image_1 = __importDefault(require("../../utilities/image"));
var logger_1 = __importDefault(require("../../utilities/logger"));
var image = express_1.default.Router();
var fileName;
var width;
var height;
var cachePath;
image.get('/', logger_1.default, function (req, res) {
    //get data from url
    fileName = String(req.query.filename);
    width = Number(req.query.width);
    height = Number(req.query.height);
    if (fileName == 'undefined') {
        // check fileName
        res.send('Your filename is ' + fileName);
    }
    else if (isNaN(width)) {
        // check width
        res.send('Please check the width in your URL');
    }
    else if (isNaN(height)) {
        // check height
        res.send('Please check the height in your URL');
    }
    else {
        cachePath =
            './images/thumb/' + fileName + '_thumb(' + width + 'x' + height + ').jpg';
        if (fs_1.default.existsSync(cachePath)) {
            // find cached image
            console.log('cached found');
            res.sendFile(path_1.default.resolve(cachePath));
        }
        else {
            // create cache if not found
            (0, image_1.default)(fileName, width, height).then(function () {
                return res.sendFile(path_1.default.resolve(cachePath));
            });
        }
    }
});
exports.default = image;
