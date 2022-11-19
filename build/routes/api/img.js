"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const react_1 = __importDefault(require("react"));
const encenadaport_jpg_1 = __importDefault(require("../../../assets/full/encenadaport.jpg"));
const images = express_1.default.Router();
let name;
let width;
let height;
images.get('/', (req, res) => {
    //get results from url
    name = String(req.query.name);
    width = Number(req.query.width);
    height = Number(req.query.height);
    if (name != 'undefined' && !isNaN(width) && !isNaN(height)) {
        res.send(react_1.default.createElement("img", { src: encenadaport_jpg_1.default }));
    }
    else {
        res.send('Null found');
    }
});
exports.default = images;
