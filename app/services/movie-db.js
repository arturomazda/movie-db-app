import HttpService from './http';

const API_KEY = '55853b661a66c0c7e605f2530dcfe2e2'; //movie this key somwhere else
const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export default class MovieDbService {
  constructor() {
    this.apiKey = API_KEY;
    this.apiUrl = API_URL;
    this.imageUrl = IMAGE_URL;
    this.httpService = new HttpService();
  }

  searchMovie(query) {
    const url = this._getApiUrl('searchMovie');
    const params = {
      query: query,
      api_key: this.apiKey
    };

    return this.httpService.get(url, params)
      .then((response) => {
        if(response.total_results > 0) {
          return response;
        } else {
          return Promise.reject({text: 'Nothing found'});
        }
      });
  }

  searchMovieResponseTransformer(response) {
    const cleanResults = response.results.map((movie) => {
      let cleanMovie = {};

      cleanMovie.id = movie.id;

      if(movie.title !== '') {
        cleanMovie.title = movie.title;
      }

      if(movie.overview !== '') {
        cleanMovie.description = movie.overview;
      }

      if(movie.poster_path !== null) {
        cleanMovie.image = this.imageUrl + movie.poster_path;
      }

      return cleanMovie;
    });

    return Object.assign(response, {results: cleanResults});
  }

  getMovie(movieId) {
    const url = this._getApiUrl('getMovie' ,movieId);
    const params = {
      api_key: this.apiKey
    };

    return this.httpService.get(url, params);
  }

  getMovieResponseTransformer(response) {
    let movie = {};

    if(response.title !== '') {
      movie.title = response.title;
    }

    if(response.release_date !== '') {
      movie.released = response.release_date;
    }


    if(response.overview !== '') {
      movie.description = response.overview;
    }

    if(response.poster_path !== null) {
      movie.image = this.imageUrl + response.poster_path;
    }

    return movie;
  }

  _getApiUrl(action, pathPostfix = '') {
    let pathPart = '';

    switch (action) {
      case 'searchMovie':
        pathPart = 'search/movie';
        break;
      case 'getMovie':
        pathPart = 'movie/';
        break;
      default:
        throw new Error('Unknow Action');
    }

    return this.apiUrl + pathPart + pathPostfix;
  }
}
