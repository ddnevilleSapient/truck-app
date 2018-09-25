import LoginTypes from './types/loginTypes';

export function login(user) {
  return {
    type: LoginTypes.LOG_IN,
    payload: user,
  };
}
