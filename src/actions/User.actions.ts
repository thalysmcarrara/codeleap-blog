import config from '../config';
import { LOGIN, GET_PERSISTED_USER } from './actionsTypes';

const {
  constants: { TOKEN_KEY },
} = config;

export type LoginActionType = { type: typeof LOGIN; payload: string };
export type GetPersistedUserAction = {
  type: typeof GET_PERSISTED_USER;
  payload: string;
};

export type UserActions = LoginActionType | GetPersistedUserAction;

export const loginAction = (userName: string): LoginActionType => {
  localStorage.setItem(TOKEN_KEY, userName);

  return {
    type: LOGIN,
    payload: userName,
  };
};

export const getPersistedUserAction = (): GetPersistedUserAction => {
  const username = localStorage.getItem(TOKEN_KEY) || '';

  return {
    type: GET_PERSISTED_USER,
    payload: username,
  };
};
