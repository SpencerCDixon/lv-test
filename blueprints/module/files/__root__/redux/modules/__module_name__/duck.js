import { CALL_IAM } from '../../middleware/api';

// Constants
export const NAME = '<%= camelEntityName %>';

export const constants = {
  NAME,
};

// Action Creators
export const actions = {
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
