import axios from 'axios';

import { laureatesPage1, laureatesPage2, laureatesPage3 } from '../mocks/laureatesMock';
import { Laureates } from '../../src/collections/Laureates';
import { SORT } from '../../src/config/constants';

let laureatsCollection: Laureates;

describe('getCounterByCountry()', () => {
  beforeEach(() => {
    laureatsCollection = new Laureates();
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('should return list of laureates', async () => {
    expect.assertions(1);
    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: laureatesPage1 }))
      .mockImplementationOnce(() => Promise.resolve({ data: laureatesPage2 }))
      .mockImplementationOnce(() => Promise.resolve({ data: laureatesPage3 }));

    const response = await laureatsCollection.getCounterByCountry(SORT.DESC);
    const expectedCounterByCountry = [
      { code: 'US', counter: 1, country: 'USA' },
      { code: 'DK', counter: 1, country: 'Denmark' },
      { code: 'IL', counter: 1, country: 'Israel' },
    ];

    expect(response).toEqual(expectedCounterByCountry);
  });
});
