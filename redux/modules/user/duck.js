import { saveState } from '../../../util/localStorage';

// Constants
export const NAME                = 'user';
export const REQUEST_CREATE_USER = 'user/REQUEST_CREATE_USER';
export const CREATE_SUCCESS      = 'user/CREATE_SUCCESS';
export const CREATE_FAIL         = 'user/CREATE_FAIL';

export const constants = {
  NAME,
  REQUEST_CREATE_USER, CREATE_SUCCESS, CREATE_FAIL,
};

export const requestCreateUser = (data) => ({
  type: REQUEST_CREATE_USER, data
});
export const createUserSuccess = user => ({
  type: CREATE_SUCCESS, user,
});
export const createUserFail = error => ({
  type: CREATE_FAIL, error
});

// Action Creators
export const actions = {
  requestCreateUser,
  createUserSuccess,
  createUserFail,
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
