import routes from '../routes';
var express = require('express');
var path = require('path');
var request = require('request');
var fs = require('fs');
var app = express();
var port = 3000;
var url = 'http://localhost:' + port;

describe('Testing index file', () => {
  it('Testing main route', () => {
    routes.get('/', (req, res) => {
      expect(res.statusCode).toEqual(200);
    });
  });
});
