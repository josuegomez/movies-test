import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './reducers/movieReducer';

const createStoreWhithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWhithMiddleware(moviesReducer);

export default store;