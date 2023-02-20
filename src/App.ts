import * as http from 'http';
import express, { Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';
import httpContext from 'express-http-context';
import { ValidationError } from 'express-validation';
import * as path from 'path';
import cors from 'cors';
import { applicationPort } from './config/env';
import * as logging from './util/logging';
import { transactionDecorator } from './middleware/transactionDecorator';
import { appRouter } from './routes';

const filename = __filename.split('/').pop();

/**
 *
 */
function startService() {
  const app = express();
  /** setting ui * */

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  //app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  /** end setting ui * */
  app.use((request, response, next) => {
    const start = Date.now();
    // The 'finish' event will emit once the response is done sending
    response.once('finish', () => {
      const routePath = request.route ? request.route.path : request.path;
      const requestTime = Date.now() - start;
      logging.logInfo('Request time for route %s took %s ms', routePath, requestTime);
    });
    next();
  });

  app.use(httpContext.middleware);
  app.use(transactionDecorator);
  app.use((request, response, next) => {
    // httpContext.ns.bindEmitter(request);
    // httpContext.ns.bindEmitter(response);
    next();
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/', appRouter);
  // catch 404 and forward to error handler
  app.use((request, response, next) => {
    next(createError(404));
  });

  app.use(
    (
      error: HttpError | SyntaxError | Error,
      request: Request,
      response: Response,
      // eslint-disable-next-line no-unused-vars
      next: NextFunction,
      // eslint-disable-next-line consistent-return
    ) => {
      let status = 500;
      if (error instanceof ValidationError) {
        logging.logError('[%s::] ValidationError %o', filename, error);
        return response.status(400).json(error);
      }
      if (error instanceof HttpError) {
        // eslint-disable-next-line prefer-destructuring
        status = error.status;
      }
      return response
        .status(status)
        .json({
          message: error.message,
        })
        .end();
    },
  );

  process.on('uncaughtException', (error) => {
    logging.logError('[%s::uncaughtException] Error: %o', filename, error);
    /* eslint no-process-exit: "off" */
    process.exit(1);
  });

  process.on('unhandledRejection', (error) => {
    logging.logError('[%s::unhandledPromiseRejection] Error: %o', filename, error);
  });

  /**
   * Get port from environment and store in Express.
   */
  // eslint-disable-next-line no-use-before-define
  const port = normalizePort(applicationPort);
  app.set('port', port);

  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port);
  server.on('error', (error: any) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
      case 'EACCES':
        logging.logError(
          `[%s::%s] ${bind} requires elevated privileges`,
          filename,
          startService.name,
        );
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logging.logError(`[%s::%s] ${bind} is already in use`, filename, startService.name);
        process.exit(1);
        break;
      default:
        throw error;
    }
  });
  server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
    logging.logInfo(`[%s::%s] Listening on ${bind}`, filename, startService.name);
  });
}

/**
 * Normalize a port into a number, string, or false.
 *
 * @param value
 */
function normalizePort(value: string) {
  const port = parseInt(value, 10);

  if (port >= 0) {
    return port;
  }

  return false;
}

(async () => {
  try {
    startService();
  } catch (error) {
    logging.logError('[%s] Error initializing the service: %o', filename, error);
    process.exit(1);
  }
})();
