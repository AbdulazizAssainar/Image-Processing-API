import express from 'express';
import path from 'path';
import fs from 'fs';
import * as datacheckModule from '../../utilities/datacheck';
import * as imageModule from '../../utilities/image';
import * as pathModule from '../../utilities/paths';
const cachedImages = express.Router();


cachedImages.get('/', (req, res) => {
    res.send('cached Images route')
  });

datacheckModule.getChacedFiles();

export default cachedImages;