export const LOGIN = 'LOGIN';
export const GET_PERSISTED_USER = 'GET_PERSISTED_USER';
export const POST_CREATE_LOADING = 'POST_CREATE_LOADING';
export const POST_EDIT_LOADING = 'POST_EDIT_LOADING';
export const POST_CREATE_FAIL = 'POST_CREATE_FAIL';
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS';
export const TOGGLE_SUCCESS_ALERT_CREATE = 'SHOW_SUCCESS_ALERT_CREATE';
export const GET_POSTS = 'GET_POSTS';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';

export type PostType = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export type GetRequestPostsType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PostType[];
};

export interface PostLoading {
  type: typeof POST_CREATE_LOADING;
}

export interface PostFail {
  type: typeof POST_CREATE_FAIL;
}

export interface PostSuccess {
  type: typeof POST_CREATE_SUCCESS;
}

export interface IsShowCreateAlert {
  type: typeof TOGGLE_SUCCESS_ALERT_CREATE;
}

export interface GetPosts {
  type: typeof GET_POSTS;
  payload: GetRequestPostsType;
}

export interface CloseEditModal {
  type: typeof CLOSE_EDIT_MODAL;
}

export interface IsEditLoading {
  type: typeof POST_EDIT_LOADING;
}

export type PostDispatchTypes =
  | PostLoading
  | PostFail
  | PostSuccess
  | GetPosts
  | IsShowCreateAlert
  | CloseEditModal
  | IsEditLoading;
