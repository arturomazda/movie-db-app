import { get as httpGet } from './http';

describe('HTTP Service', () => {
  const testParams = { tag: 'dog', key: 'abc' };
  const testUrl = 'http://test.api.com';

  describe('#get()', () => {
    let httpGetResponse;

    describe('when response with status 200', () => {
      beforeAll(() => {
        spyOn(window, 'fetch').and.returnValue(
          Promise.resolve({
            status: 200,
            json: () => Promise.resolve(true)
          })
        );
      });

      beforeAll((done) => {
        return httpGet(testUrl, testParams)
          .then((response) => {
            httpGetResponse = response;
            done();
          });
      });

      it('calls fetch() with proper url', () => {
        expect(window.fetch).toHaveBeenCalledWith(
          testUrl + '?key=abc&tag=dog',
          jasmine.any(Object)
        );
      });

      it('response amount should be equal 10', () => {
        expect(httpGetResponse).toBe(true);
      });
    });

    describe('when response with status 400', () => {
      beforeAll(() => {
        spyOn(window, 'fetch').and.returnValue(
          Promise.resolve({
            status: 400,
            statusText: 'fail'
          })
        );
      });

      beforeAll((done) => {
        return httpGet(testUrl, testParams)
          .catch((response) => {
            httpGetResponse = response;
            done();
          });
      });

      it('response should be object with text property', () => {
        expect(httpGetResponse.text).toEqual('fail');
      });
    });

    describe('when fetch failed', () => {
      beforeAll(() => {
        spyOn(window, 'fetch').and.returnValue(
          Promise.reject({})
        );
      });

      beforeAll((done) => {
        return httpGet(testUrl, testParams)
          .catch((response) => {
            httpGetResponse = response;
            done();
          });
      });

      it('response should be object with text property', () => {
        expect(httpGetResponse.text)
          .toEqual('Search failed, please try again');
      });
    });
  });
});
