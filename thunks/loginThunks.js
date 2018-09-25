import * as LoginActions from '../actions/loginActions';
// import parse

const toLogIn = (/* params */) => (dispatch /*, getState */) => {
  // do some stuff with parse here and then dispatch the result to the store
  dispatch(LoginActions.loginSuccessful());
};

export {
  toLogIn,
};
