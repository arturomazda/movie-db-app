const defaultState = {
  loading: false,
  message: {},
  movies: {},
  movie: {},
  query: ''
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST': {
      return {
        ...state,
        loading: true,
        message: {},
        movies: {},
        query: action.query
      };
    }
    case 'SEARCH_MOVIES_SUCCESS': {
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    }
    case 'SEARCH_MOVIES_FAILURE': {
      return {
        ...state,
        loading: false,
        message: action.payload,
        movies: {}
      };
    }
    case 'SEARCH_MORE_MOVIES_REQUEST': {
      return {
        ...state,
        loading: true,
        message: {}
      };
    }
    case 'SEARCH_MORE_MOVIES_SUCCESS': {
      return {
        ...state,
        loading: false,
        movies: Object.assign(
          action.payload,
          { results: state.movies.results.concat(action.payload.results) }
        )
      };
    }
    case 'SEARCH_MORE_MOVIES_FAILURE': {
      return {
        ...state,
        loading: false,
        message: action.payload
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
