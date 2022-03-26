import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';

import userReducer from './User.reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
