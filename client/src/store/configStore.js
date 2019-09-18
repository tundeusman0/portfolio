import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import auth from '../reducers/auth';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create store
export default () => {
  const store = createStore(
    combineReducers({
      auth
    }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};
