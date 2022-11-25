import express from 'express';
import path from 'path';
import { srcPath } from '../utilities/paths';
import image from './api/imageview';
import cachedImages from './api/cachedImages';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.sendFile(path.resolve(srcPath + '/pages/html/index.html'));
  return;
});
routes.use('/image', image);
routes.use('/cachedImages', cachedImages);

export { routes };
