import MovieDbService from './movie-db';

describe('Movie DB Service', () => {
  let movieDbService = new MovieDbService();

  describe('#searchMovie()', () => {
    const movieTitle = 'Test Name';
    let httpService;

    beforeAll(() => {
      httpService = {
        get: (value) => { return 'test'; }
      };
      spyOn(movieDbService, '_getApiUrl').and.callThrough();
      spyOn(httpService, 'get');

      movieDbService.httpService = httpService;
      movieDbService.searchMovie(movieTitle);
    });

    it('calls _getApiUrl()', () => {
      expect(movieDbService._getApiUrl).toHaveBeenCalledWith('searchMovie');
    });

    it('calls httpService.get()', () => {
      expect(movieDbService.httpService.get).toHaveBeenCalled();
    });
  });

  describe('#searchMovieResponseTransformer()', () => {
    const testResponse = {
      amount: 2,
      results: [
        {
          id: '1',
          title: 'title',
          overview: 'overview',
          poster_path: '/image.jpg',
          fake: 'to remove'
        },
        {
          id: '2',
          title: '',
          overview: '',
          poster_path: null
        }
      ]
    };
    let transformedResponse;

    beforeAll(() => {
      transformedResponse = movieDbService.searchMovieResponseTransformer(testResponse);
    });

    it('amount property is 2', () => {
      expect(transformedResponse.amount).toBe(2);
    });

    it('result property is an array', () => {
      expect(Array.isArray(transformedResponse.results)).toBe(true);
    });

    it('result objects id are definded', () => {
      expect(transformedResponse.results[0].id).toBe('1');
      expect(transformedResponse.results[1].id).toBe('2');
    });

    it('result object title is not defined when empty', () => {
      expect(transformedResponse.results[0].title).toBe('title');
      expect(transformedResponse.results[1].title).toBe(undefined);
    });

    it('result object description is not defined when empty', () => {
      expect(transformedResponse.results[0].description).toBe('overview');
      expect(transformedResponse.results[1].description).toBe(undefined);
    });

    it('result object image is not defined when empty', () => {
      expect(transformedResponse.results[1].image).toBe(undefined);
    });
  });
});
