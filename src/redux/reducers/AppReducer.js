import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import CategoryReducer from './CategoryReducer';

export const AppReducer = combineReducers({
  post: PostReducer,
  category: CategoryReducer,
});