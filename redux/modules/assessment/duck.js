import { CALL_API } from '../../middleware/api';
import { createRequestTypes, action } from '~/util/reducerUtil';

// Constants
export const NAME            = 'assessment';
export const INC             = `${NAME}/INC`;
export const DEC             = `${NAME}/DEC`;
export const GOTO            = `${NAME}/GOTO`;
export const UPDATE_PASSWORD = createRequestTypes('UPDATE_PASSWORD', NAME);
export const UPDATE_LP       = createRequestTypes('UPDATE_LP', NAME);

export const constants = {
  NAME,
  INC, DEC, GOTO,
  UPDATE_PASSWORD,
  UPDATE_LP,
};

// Action Creators
export const increment = (counter) => action(INC, {counter});
export const updatePassword = {
  request: () => action(UPDATE_PASSWORD.REQUEST),
  success: () => action(UPDATE_PASSWORD.SUCCESS),
  failure: error => action(UPDATE_PASSWORD.FAILURE, {error}),
};
export const updateLp = {
  request: values => action(UPDATE_LP.REQUEST, {values}),
  success: () => action(UPDATE_LP.SUCCESS),
  failure: () => action(UPDATE_LP.FAILURE),
};

export const actions = {
  increment,
  updateLp,
  updatePassword,
};

// Reducer
export const defaultState = {
  assessStep: 1,  // Step in the overall assessment
  lpStep: 1,      // Step in the learning profile assessment
  isUpdatingPass: false,
  isUpdatingLp: false,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case INC:
      return {
        ...state, 
        [`${action.counter}Step`]: state[`${action.counter}Step`] + 1,
      };

    case DEC:
      return {
        ...state, 
        [`${action.counter}Step`]: state[`${action.counter}Step`] - 1,
      };

    case UPDATE_PASSWORD.REQUEST:
      return {...state, isUpdatingPass: true};

    case UPDATE_PASSWORD.SUCCESS:
    case UPDATE_PASSWORD.FAILURE:
      return {...state, isUpdatingPass: false};

    case UPDATE_LP.REQUEST:
      return {...state, isUpdatingLp: true};

    case UPDATE_LP.SUCCESS:
    case UPDATE_LP.FAILURE:
      return {...state, isUpdatingLp: false};

    default:
      return state;
  }
}
