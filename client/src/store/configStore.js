import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import auth from '../reducers/auth';
import authError from '../reducers/authError';
import resume from '../reducers/resume';
import logo from '../reducers/logo';
import blog from '../reducers/blog';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create store
export default () => {
  const store = createStore(
    combineReducers({
      auth,
      authError,
      resume,
      logo,
      blog
    }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};
