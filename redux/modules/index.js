import { combineReducers } from 'redux';
import assessment from './assessment';
import user from './user';

export default combineReducers({
  [assessment.constants.NAME]: assessment.reducer,
  [user.constants.NAME]: user.reducer,
});
