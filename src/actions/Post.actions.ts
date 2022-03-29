import { Dispatch } from 'redux';

import api from '../service/api';
import {
  POST_CREATE_FAIL,
  POST_EDIT_LOADING,
  POST_CREATE_LOADING,
  POST_CREATE_SUCCESS,
  GET_POSTS,
  GetRequestPostsType,
  TOGGLE_SUCCESS_ALERT_CREATE,
  PostDispatchTypes,
  CLOSE_EDIT_MODAL,
  POST_DELETE_LOADING,
  CLOSE_DELETE_DIALOG,
} from './actionsTypes';

interface Post {
  username: string;
  title: string;
  content: string;
}

interface SaveEditedIdParams {
  content: string;
  title: string;
  postId: number;
}

export const getPostsAction =
  () => async (dispatch: Dispatch<PostDispatchTypes>) => {
    try {
      const response: GetRequestPostsType = await api
        .get('/careers/')
        .then((res) => res.data);

      dispatch({
        type: GET_POSTS,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const saveEditedPost =
  ({ content, title, postId }: SaveEditedIdParams) =>
  async (dispatch: Dispatch<PostDispatchTypes>) => {
    try {
      dispatch({
        type: POST_EDIT_LOADING,
      });
      await api.patch(`/careers/${postId}/`, { title, content });
      dispatch({
        type: POST_EDIT_LOADING,
      });
      dispatch({
        type: CLOSE_EDIT_MODAL,
      });
      dispatch({
        type: CLOSE_EDIT_MODAL,
      });
    } catch (error) {
      dispatch({
        type: POST_EDIT_LOADING,
      });
      console.log(error);
    }
  };

export const deletePostAction =
  (postId: number) => async (dispatch: Dispatch<PostDispatchTypes>) => {
    try {
      dispatch({
        type: POST_DELETE_LOADING,
      });
      await api.delete(`/careers/${postId}/`);

      dispatch({
        type: POST_DELETE_LOADING,
      });
      dispatch({
        type: CLOSE_DELETE_DIALOG,
      });
      dispatch({
        type: CLOSE_DELETE_DIALOG,
      });
    } catch (error) {
      dispatch({
        type: POST_DELETE_LOADING,
      });
      console.log(error);
    }
  };

export const createPostAction =
  (post: Post) => async (dispatch: Dispatch<PostDispatchTypes>) => {
    try {
      dispatch({
        type: POST_CREATE_LOADING,
      });

      await api.post('/careers/', post).then((res) => res.data);

      dispatch({
        type: POST_CREATE_SUCCESS,
      });

      dispatch({
        type: TOGGLE_SUCCESS_ALERT_CREATE,
      });

      dispatch({
        type: TOGGLE_SUCCESS_ALERT_CREATE,
      });
    } catch (e) {
      dispatch({
        type: POST_CREATE_FAIL,
      });
    }
  };
