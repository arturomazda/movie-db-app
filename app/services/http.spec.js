import HttpService from './http.js';

describe('HTTP Service', () => {
  const testParams = { tag: 'dog', key: 'abc' };
  const testResponse = {amount: 10};
  const testUrl = 'http://test.api.com';
  const httpService = new HttpService();

  describe('#get()', () => {
    let serviceResponse;

    beforeAll(() => {
      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve({ json: () => Promise.resolve(testResponse) })
      );
      spyOn(httpService, '_parseParams').and.callThrough();
    });

    beforeAll((done) => {
      return httpService.get(testUrl, testParams)
        .then((response) => {
          serviceResponse = response;
          done();
        });
    });

    it('calls fetch()', () => {
      expect(window.fetch).toHaveBeenCalled();
    });

    it('calls _parseParams() with proper params', () => {
      expect(httpService._parseParams).toHaveBeenCalledWith(testParams);
    });

    it('response amount should be equal 10', () => {
      expect(serviceResponse.amount).toEqual(10);
    });
  });

  describe('#_parseParams()', () => {
    it('returns proper string when good params are passed', () => {
      expect(httpService._parseParams(testParams)).toBe('?tag=dog&key=abc');
    });

    it('returns empty string when params are empty object', () => {
      expect(httpService._parseParams({})).toBe('');
    });
  });
});
