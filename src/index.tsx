import express from 'express';
import routes from './routes/index';
import image from './utilities/image';

const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, ()=> {
 console.log(`server started at http://localhost:${port}`)
});