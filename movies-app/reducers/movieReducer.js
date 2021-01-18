import {
  GETTING_MOVIES_REQUEST,
  GETTING_MOVIES_SUCCESS,
  GETTING_MOVIES_FAILURE
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  page:1,
  movies: []
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_MOVIES_REQUEST:
      return { ...state, isLoading: true}
    case GETTING_MOVIES_FAILURE:
      return {...state, isLoading: false, error: action.payload}
    case GETTING_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        page: (action.payload.length > 0) ? state.page + 1 : -1,
        error: null,
        movies: [ ...state.movies, ...action.payload ]
      }
    default:
      return state;
  }
}

export default moviesReducer;