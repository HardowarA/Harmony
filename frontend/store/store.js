import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunkMiddleware from '../middleware/thunk_middleware';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware));
};

export default configureStore;
