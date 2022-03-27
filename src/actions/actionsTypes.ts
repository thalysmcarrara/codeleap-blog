export const LOGIN = 'LOGIN';
export const GET_PERSISTED_USER = 'GET_PERSISTED_USER';
export const POST_LOADING = 'POST_LOADING';
export const POST_FAIL = 'POST_FAIL';
export const POST_SUCCESS = 'POST_SUCCESS';
export const TOGGLE_SUCCESS_ALERT_CREATE = 'SHOW_SUCCESS_ALERT_CREATE';

export type PostType = {
  username: string;
  title: string;
  content: string;
};

export interface PostLoading {
  type: typeof POST_LOADING;
}

export interface PostFail {
  type: typeof POST_FAIL;
}

export interface PostSuccess {
  type: typeof POST_SUCCESS;
  payload: PostType;
}

export interface IsShowCreateAlert {
  type: typeof TOGGLE_SUCCESS_ALERT_CREATE;
}

export type PostDispatchTypes =
  | PostLoading
  | PostFail
  | PostSuccess
  | IsShowCreateAlert;
