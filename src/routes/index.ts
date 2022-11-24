import express from 'express';
import path from 'path';
import { srcPath } from '../utilities/paths';
import * as imageviewModule from './api/imageview';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.sendFile(path.resolve(srcPath+'/pages/html/index.html'));
});

routes.use('/image', imageviewModule.image);

export { routes };
