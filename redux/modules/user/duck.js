import { CALL_API } from '../../middleware/api';
import { v1 } from 'uuid';
import storage from '../../../util/localStorage';

// Constants
export const NAME           = 'user';
export const CREATE         = 'user/CREATE';
export const CREATE_SUCCESS = 'user/CREATE_SUCCESS';
export const CREATE_FAIL    = 'user/CREATE_FAIL';

export const constants = {
  NAME,
  CREATE, CREATE_SUCCESS, CREATE_FAIL,
};

export const createUser = ({firstName, lastName, email, password}) => dispatch => {
  dispatch({
    [CALL_API]: {
      types: [CREATE, CREATE_SUCCESS, CREATE_FAIL],
      endpoint: '/users',
      method: 'POST',
      data: {
        user: {
          first_name: firstName,
          last_name: lastName,
          email,
          password: password || v1(),
          password_reset_id: v1(),
        }
      }
    }
  }).then(({authentication}) => {
    storage.save(authentication);
  })
};

// Action Creators
export const actions = {
  createUser,
};

// Reducer
export const defaultState = {
  exists: true,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
