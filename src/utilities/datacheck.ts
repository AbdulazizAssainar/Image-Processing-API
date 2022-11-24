import express from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { imgThumbPath } from './paths';
const image = express.Router();

var cachePath;
var checkPassed;
var checkError;
const cachedImagesList: string[] = [];

function checkFileName(fileName: string) {
  if (fileName == 'undefined') {
    checkError = 'Your filename is ' + fileName;
    return false;
  }
  if (fileName == '') {
    checkError = 'Your filename is empty';
    return false;
  }
  return true;
}

function checkWidth(width: number) {
  if (isNaN(width)) {
    checkError =
      'Please check your URL, Width not found or not written in digits';
    return false;
  }
  return true;
}

function checkHeight(height: number) {
  if (isNaN(height)) {
    checkError =
      'Please check your URL, Height not found or not written in digits';
    return false;
  }
  return true;
}

function checkIfFileExists(path: string) {
  if (!fs.existsSync(path)) {
    checkError = 'Please check your URL, File not found!';
    return false;
  }
  return true;
}

function checkIfCacheFileExists(path: string) {
  if (fs.existsSync(path)) {
    return true;
  }
  return false;
}

function getChacedFiles() {
  fs.readdir(imgThumbPath, function(err, files) {
    if (!err) {
      if (!files.length) {
        return;
      } else {
        fs.readdir(imgThumbPath, (err, files) => {
            files.forEach(file => {
                cachedImagesList.push(file);
                console.log(file);
            });
        });
      }
    }
  });
}

export {
  checkFileName,
  checkWidth,
  checkHeight,
  checkIfFileExists,
  checkError,
  checkIfCacheFileExists,
  getChacedFiles,
};
