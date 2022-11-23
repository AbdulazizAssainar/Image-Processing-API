import express from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import createImg from '../../utilities/image';
import logger from '../../utilities/logger';
const image = express.Router();

let fileName: string;
let width: number;
let height: number;
let cachePath: string;

image.get('/', logger, (req, res) => {
  //get data from url
  fileName = String(req.query.filename);
  width = Number(req.query.width);
  height = Number(req.query.height);

  if (fileName == 'undefined') {
    // check fileName
    res.send('Your filename is ' + fileName);
  } else if (isNaN(width)) {
    // check width
    res.send('Please check the width in your URL');
  } else if (isNaN(height)) {
    // check height
    res.send('Please check the height in your URL');
  } else {
    cachePath =
      './images/thumb/' + fileName + '_thumb(' + width + 'x' + height + ').jpg';
    if (fs.existsSync(cachePath)) {
      // find cached image
      console.log('cached found');
      res.sendFile(path.resolve(cachePath));
    } else {
      // create cache if not found
      createImg(fileName, width, height).then(() =>
        res.sendFile(path.resolve(cachePath))
      );
    }
  }
});

export default image;
