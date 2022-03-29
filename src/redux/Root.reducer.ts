import { combineReducers } from 'redux';

import postReducer from './Post.reducer';
import userReducer from './User.reducer';

const RootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
});

export default RootReducer;
