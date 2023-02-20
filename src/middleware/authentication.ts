import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import * as logging from '../util/logging';
import { APIErrorCodes } from '../errors/apiError';

const filename = __filename.split('/').pop();

/**
 * @param {Request} request - express request object
 * @param {Response} response - express response object
 * @param {NextFunction} next - express next handler
 */
async function authMiddleware(request: Request, res: Response, next: NextFunction) {
  const fnName = authMiddleware.name;
  try {
    return next();
  } catch (error) {
    logging.logError('[%s::%s] Error: %o ', filename, fnName, error);
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: httpStatus[httpStatus.UNAUTHORIZED],
    });
  }
}
export { authMiddleware };
