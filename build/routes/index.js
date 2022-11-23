"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageview_1 = __importDefault(require("./api/imageview"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    setTimeout(function () {
        res.redirect('/image');
    }, 5000);
    res.send('main route');
});
routes.use('/image', imageview_1.default);
exports.default = routes;
