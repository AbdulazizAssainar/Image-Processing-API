"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var paths_1 = require("../utilities/paths");
var imageview_1 = __importDefault(require("./api/imageview"));
var cachedImages_1 = __importDefault(require("./api/cachedImages"));
var routes = express_1.default.Router();
exports.routes = routes;
routes.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve(paths_1.srcPath + '/pages/html/index.html'));
});
routes.use('/image', imageview_1.default);
routes.use('/cachedImages', cachedImages_1.default);
