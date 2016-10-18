import { get as httpGet } from './http';
import { movieDbApiKey, movieDbApiUrl, movieDbImageUrl } from '../../app-config.js';

const API_KEY = movieDbApiKey;
const API_URL = movieDbApiUrl;
const IMAGE_URL = movieDbImageUrl;

export default class MovieDbService {
  constructor() {
    this.apiKey = API_KEY;
    this.apiUrl = API_URL;
    this.imageUrl = IMAGE_URL;
  }

  searchMovies(query, page = 1) {
    const url = this._getApiUrl('searchMovie');
    const params = {
      query: query,
      page: page,
      api_key: this.apiKey
    };

    return httpGet(url, params)
      .then((response) => {
        if(response.total_results > 0) {
          return this._searchMovieResponseTransformer(response);
        } else {
          return Promise.reject({text: 'Nothing found'});
        }
      });
  }

  _searchMovieResponseTransformer(response) {
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

    return httpGet(url, params)
      .then((response) => {
        return this._getMovieResponseTransformer(response);
      });
  }

  _getMovieResponseTransformer(response) {
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
