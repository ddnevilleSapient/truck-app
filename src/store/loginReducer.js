import LoginTypes from 'actions/types/loginTypes';

export default function login(state = {}, action) {
  let newState = {};

  switch (action.type) {
    case LoginTypes.LOG_IN:
      newState = Object.assign({}, state, { title: action.payload });
      break;
    default:
      newState = state;
      break;
  }

  return newState;
}
