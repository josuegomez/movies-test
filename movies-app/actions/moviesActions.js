import {
  GETTING_MOVIES_REQUEST,
  GETTING_MOVIES_SUCCESS,
  GETTING_MOVIES_FAILURE
} from './types';

import store from '../store';

export const gettingMoviesRequest = () => ({ type: GETTING_MOVIES_REQUEST });

export const gettingMoviesSuccess = json => {
  return {
  type: GETTING_MOVIES_SUCCESS,
  payload: json
  }
};

export const gettingMoviesFailure = error => ({
  type: GETTING_MOVIES_FAILURE,
  payload: error
})

export const getAllMovies = () => {
  const {isLoadding, page }  = store.getState();
  return async dispatch => {
    if(!isLoadding && page > 0) {
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
}