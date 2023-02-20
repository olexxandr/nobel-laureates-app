import express from 'express';

import { validator, createValidator } from '../validator/LoureateValidator';
import { authMiddleware } from '../middleware/authentication';
import { getLaureates } from '../service/ApiService';

const ApiRouter = express.Router();

ApiRouter.get(
  '/laureate-count',
  createValidator(validator.laureateCounterByCountry),
  authMiddleware,
  getLaureates,
);

export { ApiRouter };
