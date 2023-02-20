import express, { Request, Response, NextFunction } from 'express';
import ev from 'express-validation';
import { HttpError } from 'http-errors';
import { ApiRouter } from './ApiRoute';

const appRouter = express.Router();
appRouter.use('/api/', ApiRouter);
appRouter.use(
  (
    error: HttpError | Error | ev.ValidationError,
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    return next(error);
  },
);

export { appRouter };
