import express from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
const image = express.Router();

let cachePath: string;
let checkPassed: boolean;
let checkError: string;

function checkFileName(fileName: string) {
    if (fileName == 'undefined') {
        checkError = 'Your filename is ' + fileName;
        return false;
      } else if (fileName == '') {
        checkError = 'Your filename is empty';
        return false;
      } else {
        return true;
      }
}

function checkWidth(width: number) {
    if (isNaN(width)) {
        checkError = 'Please check your URL, Width not found or not written in digits';
        return false;
    } else {
        return true;
      }
}

function checkHeight(height: number) {
    if (isNaN(height)) {
        checkError = 'Please check your URL, Height not found or not written in digits';
        return false;
    } else {
        return true;
      }
}

function checkIfFileExists(path: string) {
    if (fs.existsSync(path)) {
        return true;
    } else {
        checkError = 'Please check your URL, File not found!';
        return false;
      }
}

function checkIfCacheFileExists(path: string) {
    if (fs.existsSync(path)) {
        return true;
    } else {
        return false;
      }
}

export {
    checkFileName,
    checkWidth,
    checkHeight,
    checkIfFileExists,
    checkIfCacheFileExists,
    checkError
}