import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import CategoryReducer from './CategoryReducer';

const AppReducer = combineReducers({
  post: PostReducer,
  category: CategoryReducer,
});

export default AppReducer