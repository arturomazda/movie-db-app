import MovieDbService from '../services/movie-db';

const movieDbService = new MovieDbService();

export function searchMovies(query) {
  return (dispatch) => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
      query: query
    });

    movieDbService.searchMovies(query)
      .then((response) => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: response
        });
      })
      .catch((error) => {
        dispatch({
          type: 'SEARCH_MOVIES_FAILURE',
          payload: error
        });
      });
  };
}

export function searchMoreMovies(query, page) {
  return (dispatch) => {
    dispatch({
      type: 'SEARCH_MORE_MOVIES_REQUEST',
      query: query
    });

    movieDbService.searchMovies(query, page)
      .then((response) => {
        dispatch({
          type: 'SEARCH_MORE_MOVIES_SUCCESS',
          payload: response
        });
      })
      .catch((error) => {
        dispatch({
          type: 'SEARCH_MORE_MOVIES_FAILURE',
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
          payload: response
        });
      })
      .catch((error) => {
        dispatch({
          type: 'GET_MOVIE_FAILURE',
          payload: error
        });
      });
  };
}
