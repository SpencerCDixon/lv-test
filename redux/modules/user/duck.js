import { saveState } from '~/util/localStorage';
import { createRequestTypes, action } from '~/util/reducerUtil';

// Constants
export const NAME         = 'user';
export const CREATE_USER  = createRequestTypes('CREATE_USER', NAME);
export const SIGN_UP_USER = 'user/SIGN_UP_USER';

export const constants = {
  NAME,
  CREATE_USER,
  SIGN_UP_USER,
};
// Action Creators
export const createUser = {
  request: data => action(CREATE_USER.REQUEST, {data}),
  success: user => action(CREATE_USER.SUCCESS, {...user}),
  failure: error => action(CREATE_USER.FAILURE, {error}),
};
export const signUpUser = data => action(SIGN_UP_USER, {data});

export const actions = {
  createUser,
  signUpUser,
};

// Reducer
export const defaultState = {
  auth: null,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case CREATE_USER.SUCCESS:
      return {...state, auth: action.authentication};

    default:
      return state;
  }
}
