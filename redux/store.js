import 'babel-polyfill'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';

// Redux Middlewares
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './middleware/api';
import createSagaMiddleware from 'redux-saga'

// const isProd = process.env.NODE_ENV === 'production';

// create redux saga middleware, needs to be run inside redux HOC
export const sagaMiddleware = createSagaMiddleware()

// Create middlewares based on if in dev/prod
let middlewares;
// if (isProd) {
  // middlewares = [thunkMiddleware, apiMiddleware, sagaMiddleware];
// } else {
middlewares = [thunkMiddleware, apiMiddleware, sagaMiddleware];
// }

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, composeWithDevTools(
      applyMiddleware(...middlewares)
    ));
  } else {
    if (!window.store) {
      window.store = createStore(reducer, initialState, composeWithDevTools(
        applyMiddleware(...middlewares)
      ));
    }
    return window.store
  }
}
