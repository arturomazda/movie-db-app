const defaultState = {
  loading: false,
  message: {},
  movies: {},
  movie: {},
  query: ''
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SEARCH_MOVIE_REQUEST': {
      return {
        ...state,
        loading: true,
        message: {},
        movies: {},
        query: action.query
      };
    }
    case 'SEARCH_MOVIE_SUCCESS': {
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    }
    case 'SEARCH_MOVIE_FAILURE': {
      return {
        ...state,
        loading: false,
        message: action.payload,
        movies: {}
      };
    }
    case 'GET_MOVIE_REQUEST': {
      return {
        ...state,
        loading: true,
        message: {},
        movie: {}
      };
    }
    case 'GET_MOVIE_SUCCESS': {
      return {
        ...state,
        loading: false,
        movie: action.payload
      };
    }
    case 'GET_MOVIE_FAILURE': {
      return {
        ...state,
        loading: false,
        messages: action.payload,
        movie: {}
      };
    }
  }
  return state;
}
