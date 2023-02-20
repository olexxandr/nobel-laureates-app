import { NextFunction } from 'express';
import { validator, createValidator } from '../../src/validator/LoureateValidator';
import { responseSpy, nextSpy } from '../mocks/responseFactory';
import { SORT } from '../../src/config/constants';

let next: jest.MockedFunction<any> | NextFunction;

describe('laureateCounterByCountry validator', () => {
  afterEach(async () => {
    jest.clearAllMocks();
    jest.resetModules();
  });
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    next = nextSpy.mockImplementationOnce(() => {});
  });
  describe('getHandoffs', () => {
    test('next should be called without error if api payload is valid', async () => {
      expect.assertions(2);
      const laureateCounterByCountryMiddleware = createValidator(
        validator.laureateCounterByCountry,
      );
      await laureateCounterByCountryMiddleware(
        {
          query: {
            sort: SORT.DESC,
          },
        } as any,
        responseSpy,
        next,
      );
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledWith();
    });
  });
});
