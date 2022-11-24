import express from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import * as datacheckModule from '../../utilities/datacheck';
import * as imageModule from '../../utilities/image';
import * as loggerModule from '../../utilities/logger';
import * as pathModule from '../../utilities/paths';
const image = express.Router();

let fileName: string;
let width: number;
let height: number;
let filePath: string;
let chkPassed: boolean;
let chkError: string;

image.get('/', loggerModule.logger, (req, res) => {
  //get data from url
  fileName = String(req.query.filename);
  width = Number(req.query.width);
  height = Number(req.query.height);
  filePath = path.resolve(pathModule.imgFullPath + '/' + fileName + '.jpg');

  if (!datacheckModule.checkFileName(fileName)) { // Validate fileName
    chkError = datacheckModule.checkError;
    res.send(datacheckModule.checkError);
    return;
  }

  if (!datacheckModule.checkWidth(width)) { // Validate width
    chkError = datacheckModule.checkError;
    res.send(datacheckModule.checkError);
    return;
  }

  if (!datacheckModule.checkHeight(height)) { // Validate height
    chkError = datacheckModule.checkError;
    res.send(datacheckModule.checkError);
    return;
  }

  if (!datacheckModule.checkIfFileExists(filePath)) { // Check if Image in folder named 'full' exists 
    chkError = datacheckModule.checkError;
    res.send(datacheckModule.checkError);
    return;
  }

  // Switch filePath from folder named 'full' to another folder named 'thumb'
  filePath = path.resolve(pathModule.imgThumbPath + '/' + fileName + '_thumb(' + width + 'x' + height + ').jpg');

  if (datacheckModule.checkIfCacheFileExists(filePath)) { // Check if Image in folder named 'thumb' exists
    console.log('cached found');
    res.sendFile(path.resolve(filePath));
    return;
  }

  imageModule.createImg(fileName, width, height).then(() => // Create cache image in folder named 'thumb'
    res.sendFile(path.resolve(filePath))
  );
});

export {image};
