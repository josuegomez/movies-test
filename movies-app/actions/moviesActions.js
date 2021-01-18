import {
  GETTING_MOVIES_REQUEST,
  GETTING_MOVIES_SUCCESS,
  GETTING_MOVIES_FAILURE
} from './types';

export const gettingMoviesRequest = () => ({ type: GETTING_MOVIES_REQUEST });

export const gettingMoviesSuccess = json => ({
  type: GETTING_MOVIES_SUCCESS,
  payload: json
});

export const gettingMoviesFailure = error => ({
  type: GETTING_MOVIES_FAILURE,
  payload: error
})

export const getMovies = () => {
  return async dispatch => {
    dispatch(gettingMoviesRequest());
    try {
      const response = await fetch(`http://localhost:5000/movie?limit=8&page=${page}`);
      const json = await response.json();
      dispatch(gettingMoviesSuccess(json));
    } catch (error) {
      dispatch(gettingMoviesFailure(error))

    }
  }
}