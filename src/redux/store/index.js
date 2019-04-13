import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { AppReducer } from '../reducers';

export function configureStore() {
  return createStore(AppReducer, applyMiddleware(thunk))
}