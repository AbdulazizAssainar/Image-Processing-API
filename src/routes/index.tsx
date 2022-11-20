import express from 'express';   
import image from '../utilities/image';
const routes = express.Router();

routes.get('/', (req, res) => { 
    res.send(image("test", 50, 50));
 });

export default routes;