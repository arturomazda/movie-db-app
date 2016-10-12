const defaultState = {
  searchingMovie: false,
  searchingMovieError: false,
  searchingMovieResponse: {},
  getMovie: false,
  getMovieError: false,
  getMovieResponse: {}
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SEARCH_MOVIE_REQUEST': {
      return {
        ...state,
        searchingMovie: true
      };
    }
    case 'SEARCH_MOVIE_FAILURE': {
      return {
        ...state,
        searchingMovie: false,
        searchingMovieError: action.payload
      };
    }
    case 'SEARCH_MOVIE_SUCCESS': {
      return {
        ...state,
        searchingMovie: false,
        searchingMovieResponse: action.payload
      };
    }
    case 'GET_MOVIE_REQUEST': {
      return {
        ...state,
        getMovie: true
      };
    }
    case 'GET_MOVIE_FAILURE': {
      return {
        ...state,
        getMovie: false,
        getMovieError: action.payload
      };
    }
    case 'GET_MOVIE_SUCCESS': {
      return {
        ...state,
        getMovie: false,
        getMovieResponse: action.payload
      };
    }
  }
  return state;
}
