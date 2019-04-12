import { createStore, combineReducers } from 'redux';
import AppReducer from '../reducers/AppReducer';

const rootReducer = combineReducers({
  app: AppReducer
});

export function configureStore() {
  return createStore(rootReducer);
}