import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Redux Middlewares
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './middleware/api';

const isProd = process.env.NODE_ENV === 'production';

// Create middlewares based on if in dev/prod
let middlewares;
if (isProd) {
  middlewares = [thunkMiddleware, apiMiddleware];
} else {
  middlewares = [thunkMiddleware, apiMiddleware];
}

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
