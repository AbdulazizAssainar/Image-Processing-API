import express from 'express';
import * as routesModule from './routes';

const app = express();
const port = 3000;

app.use('/', routesModule.routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
