import { Joi, validate } from 'express-validation';
import { RequestHandler } from 'express';
import { SORT } from '../config/constants';

export const validator = {
  laureateCounterByCountry: {
    query: Joi.object({
      sort: Joi.string().allow(SORT.ASC, SORT.DESC).default(SORT.DESC),
      v: Joi.number().default(1),
    }),
  },
  laureates: {
    query: Joi.object({
      sort: Joi.string().allow(SORT.ASC, SORT.DESC).default(SORT.DESC),
      offset: Joi.number().default(1),
    }),
  },
};

export const createValidator = (joiSchema: object): RequestHandler => {
  return validate(
    joiSchema,
    {
      keyByField: true,
      context: true,
    },
    {
      allowUnknown: true,
      abortEarly: false,
    },
  );
};
