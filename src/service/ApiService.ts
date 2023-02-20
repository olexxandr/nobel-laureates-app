import type { Request, Response, NextFunction } from 'express';

import NodeCache from 'node-cache';
import httpStatus from 'http-status';
import * as logging from '../util/logging';
import { NODE_CACHE_EXPIRATION_TIME } from '../config/constants';
import { LaureateCounter, Laureates } from '../collections/Laureates';

const filename = __filename.split('/').pop();

const cache = new NodeCache({ stdTTL: NODE_CACHE_EXPIRATION_TIME });

/**
 * @param {Request} request - express request object
 * @param {Response} response - express response object
 */
async function getLaureates(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const fnName = getLaureates.name;
  try {
    const { sort } = request.query;
    let laureateCounter: Array<LaureateCounter> | undefined = cache.get(sort as string);
    if (!laureateCounter) {
      const laureatesCollection = new Laureates();
      laureateCounter = await laureatesCollection.getCounterByCountry(sort as string);
      logging.logDebug('[%s::%s] fetching laureates ', filename, fnName, laureateCounter.length);
    }
    cache.set(sort as string, laureateCounter);
    response.status(200).json(laureateCounter);
  } catch (error) {
    next(error);
  }
}

export { getLaureates };
