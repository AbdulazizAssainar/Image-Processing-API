"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("../routes"));
var express = require('express');
var path = require('path');
var request = require('request');
var fs = require('fs');
var app = express();
var port = 3000;
var url = 'http://localhost:' + port;
describe('Testing index file', function () {
    it('Testing main route', function () {
        routes_1.default.get('/', function (req, res) {
            expect(res.statusCode).toEqual(200);
        });
    });
});
