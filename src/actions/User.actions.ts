import { LOGIN } from './actionsType';

export type LoginAction = { type: 'LOGIN'; payload: string };

export type UserActions = LoginAction;

export const login = (userName: string): LoginAction => ({
  type: LOGIN,
  payload: userName,
});
