import { combineReducers } from 'redux';
import example from './example';
import user from './user';

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  [example.constants.NAME]: example.reducer,
  [user.constants.NAME]: user.reducer,

  form: formReducer,
});
