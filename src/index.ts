import express from 'express';
import * as routesModule from './routes';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.redirect('/api');
});
app.use('/api', routesModule.routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

module.exports = app;
