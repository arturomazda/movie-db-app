const defaultState = {
  loading: false,
  searchingMovieResponse: {},
  messages: {}
};

export default function reducer(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case 'SEARCH_MOVIE_REQUEST': {
      return {
        ...state,
        loading: true
      };
    }
    case 'SEARCH_MOVIE_SUCCESS': {
      return {
        ...state,
        loading: false,
        searchingMovieResponse: action.payload
      };
    }
    case 'SEARCH_MOVIE_FAILURE': {
      return {
        ...state,
        loading: false,
        messages: action.payload
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
        messages: action.payload
      };
    }
    case 'GET_MOVIE_SUCCESS': {
      return {
        ...state,
        loading: false,
        getMovieResponse: action.payload
      };
    }
  }
  return state;
}
