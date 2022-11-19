import express from 'express';
import React from 'react';
import ReactDOM from "react-dom";

const images = express.Router();
let name: string;
let width: number;
let height: number;

images.get('/', (req, res) => {

    //get results from url
    name = String(req.query.name);
    width = Number(req.query.width);
    height = Number(req.query.height);

    if (name != 'undefined' && !isNaN(width) && !isNaN(height)) {
        res.send(<h1>Image API route</h1>)
    } else {
        res.send('Null found');
    }
});

export default images;