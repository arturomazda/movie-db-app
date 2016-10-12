import MovieDbService from '../services/movie-db';

const movieDbService = new MovieDbService();

export function searchMovie(query) {
  return (dispatch) => {
    dispatch({
      type: 'SEARCH_MOVIE_REQUEST'
    });

    movieDbService.searchMovie(query)
      .then((response) => {
        dispatch({
          type: 'SEARCH_MOVIE_SUCCESS',
          payload: movieDbService.searchMovieResponseTransformer(response)
        });
      })
      .catch((error) => {
        dispatch({
          type: 'SEARCH_MOVIE_ERROR',
          payload: error
        });
      });
  };
}

export function getMovie(movieId) {
  return (dispatch) => {
    dispatch({
      type: 'GET_MOVIE_REQUEST'
    });

    movieDbService.getMovie(movieId)
      .then((response) => {
        dispatch({
          type: 'GET_MOVIE_SUCCESS',
          payload: movieDbService.getMovieResponseTransformer(response)
        });
      })
      .catch((error) => {
        dispatch({
          type: 'GET_MOVIE_ERROR',
          payload: error
        });
      });
  };
}