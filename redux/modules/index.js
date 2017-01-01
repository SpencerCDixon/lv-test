import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import user from './user';

export default combineReducers({
  // Libraries
  form: formReducer,

  // Personal
  [user.constants.NAME]: user.reducer,
});
