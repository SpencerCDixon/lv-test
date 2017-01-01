import { createStore, combineReducers, applyMiddleware } from 'redux';
// Redux Middlewares
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

// Redux Modules
const isProd = process.env.NODE_ENV === 'production';


// Create middlewares based on if in dev/prod
let middlewares;
if (isProd) {
  middlewares = [thunkMiddleware];
} else {
  middlewares = [thunkMiddleware, loggerMiddleware()];
}

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, applyMiddleware(...middlewares))
  } else {
    if (!window.store) {
      window.store = createStore(reducer, initialState, applyMiddleware(...middlewares))
    }
    return window.store
  }
}
