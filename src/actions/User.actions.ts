import config from '../config';
import { LOGIN } from './actionsType';

const {
  constants: { TOKEN_KEY },
} = config;

export type LoginAction = { type: 'LOGIN'; payload: string };

export type UserActions = LoginAction;

export const login = (userName: string): LoginAction => {
  localStorage.setItem(TOKEN_KEY, userName);

  return {
    type: LOGIN,
    payload: userName,
  };
};
