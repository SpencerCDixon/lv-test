import { combineReducers } from 'redux';
import assessment from './assessment';
import user from './user';

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  [assessment.constants.NAME]: assessment.reducer,
  [user.constants.NAME]: user.reducer,

  form: formReducer,
});
