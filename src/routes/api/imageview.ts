import express from 'express';   
import viewImg from '../../utilities/image';
import logger from '../../utilities/logger';
const image = express.Router();

let filename: undefined;
let width: number;
let height: number;

image.get('/', logger, (req, res) => { 
    filename = (req.query.filename).toString();
    console.log(filename);
    width = Number(req.query.width);
    console.log(width);
    height = Number(req.query.height);
    console.log(height);
    if (filename = "undefined") {
        res.send('Your filename is '+filename);
    } 
    else if (isNaN(width)) {
        res.send('Please check the width in your URL');
    }
    else if (isNaN(height)) {
        res.send('Please check the height in your URL');
    }
    else {
        res.send(filename+width+height);
        //return viewImg(filename, width, height);
    }
 });

export default image;

