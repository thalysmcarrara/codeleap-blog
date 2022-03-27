import { Dispatch } from 'redux';

import api from '../service/api';
import {
  POST_CREATE_FAIL,
  POST_CREATE_LOADING,
  POST_CREATE_SUCCESS,
  GET_POSTS,
  GetRequestPostsType,
  TOGGLE_SUCCESS_ALERT_CREATE,
  PostDispatchTypes,
} from './actionsTypes';

interface Post {
  username: string;
  title: string;
  content: string;
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
