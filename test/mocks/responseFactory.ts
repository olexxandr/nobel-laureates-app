import { SORT } from '../../src/config/constants';

const responseSpy: any = {
  status: jest.fn(),
  send: jest.fn(),
  json: jest.fn(),
};
responseSpy.json.mockImplementation(() => {
  return responseSpy;
});
responseSpy.status.mockImplementation(() => {
  return responseSpy;
});
const requestSpy = {
  query: {
    sort: SORT.DESC,
  },
  header: jest.fn(),
  get: jest.fn(),
};

const nextSpy = jest.fn();

export { responseSpy, requestSpy, nextSpy };
