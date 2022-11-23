import express from 'express';
import { link } from 'fs';
import { url } from 'inspector';
import imageview from './api/imageview';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('main route');
});

routes.use('/image', imageview);

export default routes;
