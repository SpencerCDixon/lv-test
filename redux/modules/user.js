export default function reducer(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case 'CREATE': 
      return {...state, isAuthenticated: true};
    default:
      return state;
  }
}
