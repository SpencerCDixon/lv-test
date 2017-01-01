export const NAME = 'user';

export const constants = {
  NAME
};

export const actions = {
};

export default function reducer(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case 'CREATE': 
      return {...state, isAuthenticated: true};
    default:
      return state;
  }
}
