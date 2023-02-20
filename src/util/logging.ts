import httpContext from 'express-http-context';
import { ValidationError } from 'express-validation';
import pino from 'pino';
import { X_REQUEST_ID, ACCOUNT_ID, APP_NAME } from './constants';

const level = process.env.NODE_ENV === 'production' ? 'info' : 'debug';
const logger = pino({ name: APP_NAME, level });

/**
 * Adds the request id to the object sent to logger.
 */
const getMergingObject = function () {
  const mergingObject: any = {
    accountId: httpContext.get(ACCOUNT_ID),
    xRequestId: httpContext.get(X_REQUEST_ID),
  };
  return mergingObject;
};

/**
 * Interpolate error object
 *
 * @param {Array} parameters - logging params
 * @returns {void}
 */
function processError(parameters: any[]): void {
  // eslint-disable-next-line no-restricted-syntax
  for (const [index, interpolationValue] of parameters.entries()) {
    if (interpolationValue instanceof Error) {
      // eslint-disable-next-line no-param-reassign
      parameters[index] = {
        errorMessage: interpolationValue.message,
        errorStack: interpolationValue.stack,
        errorDetails:
          interpolationValue instanceof ValidationError ? interpolationValue.details : undefined,
      };
    }
  }
}

/**
 * @param parameters
 */
function logError(...parameters: any[]) {
  processError(parameters);
  logger.error(getMergingObject(), ...parameters);
}

/**
 * @param parameters
 */
function logWarn(...parameters: any[]) {
  logger.warn(getMergingObject(), ...parameters);
}

/**
 * @param parameters
 */
function logDebug(...parameters: any[]) {
  logger.debug(getMergingObject(), ...parameters);
}

/**
 * @param parameters
 */
function logInfo(...parameters: any[]) {
  logger.info(getMergingObject(), ...parameters);
}



export { logInfo, logDebug, logWarn, logError };
