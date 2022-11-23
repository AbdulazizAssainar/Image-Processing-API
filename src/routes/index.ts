import express from 'express';
import imageview from './api/imageview';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send();
});

routes.use('/image', imageview);

export default routes;
