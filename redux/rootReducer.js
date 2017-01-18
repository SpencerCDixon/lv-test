import { combineReducers } from 'redux';
import modules from './modules';

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  modules,

  form: formReducer,
});
