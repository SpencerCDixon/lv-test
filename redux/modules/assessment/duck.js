import { CALL_API } from '../../middleware/api';
import { createRequestTypes, action } from '~/util/reducerUtil';

// Constants
export const NAME                    = 'assessment';
export const INC                     = `${NAME}/INC`;
export const DEC                     = `${NAME}/DEC`;
export const GOTO                    = `${NAME}/GOTO`;
export const UPDATE_PASSWORD         = createRequestTypes('UPDATE_PASSWORD', NAME);

export const constants = {
  NAME,
  INC, DEC, GOTO,
  UPDATE_PASSWORD,
};

// Action Creators
export const increment = () => action(INC);
export const updatePassword = {
  request: () => action(UPDATE_PASSWORD.REQUEST),
  success: () => action(UPDATE_PASSWORD.SUCCESS),
  failure: error => action(UPDATE_PASSWORD.FAILURE, {error}),
};

export const actions = {
  increment,
  updatePassword,
};

// Reducer
export const defaultState = {
  assessStep: 1,  // Step in the overall assessment
  lpStep: 1,      // Step in the learning profile assessment
  isUpdatingPass: false,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case INC:
      return {...state, assessStep: state.assessStep + 1};

    case DEC:
      return {...state, assessStep: state.assessStep - 1};

    case UPDATE_PASSWORD.REQUEST:
      return {...state, isUpdatingPass: true};

    case UPDATE_PASSWORD.SUCCESS:
    case UPDATE_PASSWORD.FAILURE:
      return {...state, isUpdatingPass: false};

    default:
      return state;
  }
}
