import axios from 'axios';
import type { Response, Request } from 'express';

import { requestSpy, responseSpy, nextSpy } from '../mocks/responseFactory';
import { laureatesPage1, laureatesPage2, laureatesPage3 } from '../mocks/laureatesMock';
import * as ApiService from '../../src/service/ApiService';

describe('getLaureates()', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('should return list of laureates and status 200', async () => {
    expect.assertions(2);
    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: laureatesPage1 }))
      .mockImplementationOnce(() => Promise.resolve({ data: laureatesPage2 }))
      .mockImplementationOnce(() => Promise.resolve({ data: laureatesPage3 }));

    const expectedCounterByCountry = [
      { code: 'US', counter: 1, country: 'USA' },
      { code: 'DK', counter: 1, country: 'Denmark' },
      { code: 'IL', counter: 1, country: 'Israel' },
    ];

    await ApiService.getLaureates(
      requestSpy as unknown as Request,
      responseSpy as Response,
      nextSpy,
    );
    expect(responseSpy.json).toHaveBeenCalledWith(expectedCounterByCountry);
    expect(responseSpy.status).toHaveBeenCalledWith(200);
  });
});
