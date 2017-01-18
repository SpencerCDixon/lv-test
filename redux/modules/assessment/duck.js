import { CALL_API } from '../../middleware/api';

// Constants
export const NAME = 'assessment';
export const INC  = `${NAME}/INC`;
export const DEC  = `${NAME}/DEC`;
export const GOTO = `${NAME}/GOTO`;

export const constants = {
  NAME,
  INC, DEC, GOTO,
};

// Action Creators
export const increment = () => ({ type: INC });
export const actions = {
  increment,
};

// Reducer
export const defaultState = {
  currentStep: 1,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case INC:
      return {...state, currentStep: state.currentStep + 1};

    case DEC:
      return {...state, currentStep: state.currentStep - 1};

    default:
      return state;
  }
}
