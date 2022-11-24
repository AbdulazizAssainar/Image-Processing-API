import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  let url = req.baseUrl;
  console.log(url + ' visited');
  next();
};

export {logger};
