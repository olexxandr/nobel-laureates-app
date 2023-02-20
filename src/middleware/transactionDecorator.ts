import { Request, Response, NextFunction } from 'express';

import httpContext from 'express-http-context';
import shortid from 'shortid';
import { X_REQUEST_ID } from '../util/constants';

const transactionDecorator = (request: Request, response: Response, next: NextFunction): void => {
  httpContext.set(X_REQUEST_ID, shortid.generate());
  return next();
};

export { transactionDecorator };
