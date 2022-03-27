import { Dispatch } from 'redux';

import api from '../service/api';
import {
  POST_FAIL,
  POST_LOADING,
  POST_SUCCESS,
  TOGGLE_SUCCESS_ALERT_CREATE,
  PostDispatchTypes,
} from './actionsTypes';

interface Post {
  username: string;
  title: string;
  content: string;
}

export const createPostAction =
  (post: Post) => async (dispatch: Dispatch<PostDispatchTypes>) => {
    try {
      dispatch({
        type: POST_LOADING,
      });

      const result = await api.post('/careers/', post).then((res) => res.data);

      dispatch({
        type: POST_SUCCESS,
        payload: result,
      });

      dispatch({
        type: TOGGLE_SUCCESS_ALERT_CREATE,
      });

      dispatch({
        type: TOGGLE_SUCCESS_ALERT_CREATE,
      });
    } catch (e) {
      dispatch({
        type: POST_FAIL,
      });
    }
  };
