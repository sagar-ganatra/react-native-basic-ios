import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from '../reducers';

const middleware = applyMiddleware(thunk, promiseMiddleware());

export default function configureStore(initialState) {
  const store = createStore(reducer, middleware);
  return store;
}
